#!/usr/bin/env python3
"""Automaatne kontroll enne GitHubi lükkamist: käib äpi põhitegevused brauseris läbi.

Wikimedia Commonsi päringud asendatakse testpiltidega – internetti ei lähe, Commonsi ei koormata.
Repo enda pilte (images/...) kasutatakse kettalt; kui mõni puudub, asendatakse see testpildiga.
Midagi ei muudeta: ei repo faile ega testifaile.

Mida kontrollitakse:
  - avaleht laeb ilma skriptivigadeta, versioon (APP_BUILD = SW_VERSION) klapib
  - „Genereeri test“: vastamine, hindamine, tulemus; täisekraan, suurendus, lohistamine
  - mudeli galerii: pildi suurendus (lightbox) – suurendus, lohistamine, sulgemine
  - mudelite vahetamine ↑/↓ galeriis ja suurenduses (nimekirja järjekorras), „Võrdle:“ suurendusest
  - piltide võrdlus ja WHAT-võrdlus täisekraanil
  - kureeritud test: salvestamine → avamine (ka õige vastuse näitamisega), vana testifail
  - Kuldvillaku laua fail: salvestamine → avamine
  - Memory: laud, mittesobiv paar jääb avatuks, suurendus ilma vastuseta, paari aken, kokkuvõte
  - „Lae pildid seadmesse“ (ZIP)
  - inglise keel (EN): keelevalik, masintõlke teade, tõlgitud andmed; lõpus nimekiri puuduvatest tõlgetest
    (puuduv tõlge ei ole viga – äpp näitab siis eestikeelset teksti)

Esimene kord (paigaldus):
  pip install playwright
  python -m playwright install chromium
Käivitamine repo kaustast:
  python tools/smoke_test.py            # brauser on peidus
  python tools/smoke_test.py --show     # näed brauserit
Väljumiskood 0 = kõik korras, 1 = midagi läks katki (vt FAIL read).
"""
from pathlib import Path
import argparse, functools, http.server, io, json, re, socketserver, struct, sys, tempfile, threading, zipfile, zlib
from urllib.parse import urlparse, parse_qs, unquote

ROOT = Path(__file__).resolve().parents[1]

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    sys.exit("Playwright puudub. Paigalda:\n  pip install playwright\n  python -m playwright install chromium")


# ---------------------------------------------------------------- testpildid (ilma Pillow'ta)
def png(w, h, rgb):
    raw = b"".join(b"\x00" + bytes(rgb) * w for _ in range(h))
    def chunk(t, d):
        return struct.pack(">I", len(d)) + t + d + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    return (b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b""))

IMGS = [png(320, 200, c) for c in ((138, 170, 85), (170, 85, 138), (85, 138, 170), (170, 170, 85))]


# ---------------------------------------------------------------- kohalik server
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

def start_server():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    srv = socketserver.ThreadingTCPServer(("127.0.0.1", 0), handler)
    srv.daemon_threads = True
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, f"http://127.0.0.1:{srv.server_address[1]}"


# ---------------------------------------------------------------- tulemused
results = []
def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print(("  OK    " if ok else "  FAIL  ") + name + (f"  ({detail})" if detail and not ok else ""))
    return ok

def step(name, fn):
    print(name)
    try:
        fn()
    except Exception as e:
        check(name + ": katkes", False, str(e).splitlines()[0][:200])


def versions():
    a = re.search(r"const APP_BUILD = '([^']+)'", (ROOT / "index.html").read_text(encoding="utf-8"))
    s = re.search(r"const SW_VERSION = 'offline-([^']+)'", (ROOT / "offline-sw.js").read_text(encoding="utf-8"))
    return (a.group(1) if a else None), (s.group(1) if s else None)


def main():
    ap = argparse.ArgumentParser(description="Äpi automaatne kontroll (Commons asendatud testpiltidega)")
    ap.add_argument("--show", action="store_true", help="näita brauserit")
    args = ap.parse_args()

    srv, base = start_server()
    page_errors = []
    counter = {"n": 0}

    file_ids = {}
    def route(r):
        url = r.request.url
        u = urlparse(url)
        if u.hostname == "commons.wikimedia.org":
            titles = parse_qs(u.query).get("titles", [""])[0].split("|")
            pages = {}
            for i, t in enumerate(titles):
                # nagu päris Commonsis: sama fail → alati sama URL, eri failid → eri URL
                if t not in file_ids:
                    counter["n"] += 1
                    file_ids[t] = counter["n"]
                n = file_ids[t]
                pages[str(i + 1)] = {"title": t, "imageinfo": [{"mime": "image/png",
                    "url": f"https://upload.wikimedia.org/test/{n % 4}.png?f={n}",
                    "thumburl": f"https://upload.wikimedia.org/test/{n % 4}.png?f={n}",
                    "extmetadata": {"Artist": {"value": "Test"}, "LicenseShortName": {"value": "CC BY-SA 4.0"}}}]}
            return r.fulfill(status=200, content_type="application/json", headers={"access-control-allow-origin": "*"},
                             body=json.dumps({"query": {"pages": pages}}))
        if u.hostname == "upload.wikimedia.org":
            m = re.search(r"(\d)\.png", url)
            return r.fulfill(status=200, content_type="image/png", headers={"access-control-allow-origin": "*"},
                             body=IMGS[int(m.group(1)) if m else 0])
        if u.hostname == "127.0.0.1":
            if u.path.startswith("/images/") and not (ROOT / unquote(u.path).lstrip("/")).exists():
                return r.fulfill(status=200, content_type="image/png", body=IMGS[3])
            return r.continue_()
        return r.abort()   # muu väline võrk (nt fondid) – testis pole vaja

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.show)
        ctx = browser.new_context(viewport={"width": 1366, "height": 800}, accept_downloads=True, service_workers="block")
        ctx.route("**/*", route)
        p = ctx.new_page()
        p.on("pageerror", lambda e: page_errors.append(str(e)))
        p.on("dialog", lambda d: d.accept())
        p.set_default_timeout(20000)

        def ev(js, arg=None):
            return p.evaluate(js, arg)

        def home():
            p.goto(base + "/index.html")
            p.wait_for_function("() => typeof CATEGORIES !== 'undefined' && document.getElementById('appBuildLabel').textContent.includes('versioon')")

        # 1) avaleht ja versioon
        def t_home():
            home()
            app, sw = versions()
            check("versioon klapib (index.html = offline-sw.js)", app and app == sw, f"{app} vs {sw}")
            check("jaluses on õige versioon", ("versioon " + str(app)) in p.text_content("#appBuildLabel"))
            check("mudeleid on andmetes", ev("() => CATEGORIES.filter(e => e.files && e.files.length).length") > 50)
            ev("() => { window.__xss = 0; return stripHtml('<b>Autor</b><img src=x onerror=\"window.__xss=1\">'); }")
            p.wait_for_timeout(300)
            check("TTA laskekauguste pealkiri on amber-värvi", ev("""() => {
                const d = document.createElement('div'); d.className = 'tta-section is-ranges';
                const t = document.createElement('div'); t.className = 'tta-section-title'; d.append(t);
                const a = document.createElement('span'); a.style.color = 'var(--amber)';
                document.body.append(d, a);
                const ok = getComputedStyle(t).color === getComputedStyle(a).color;
                d.remove(); a.remove(); return ok; }"""))
            check("stripHtml ei käivita HTML-i (onerror)", ev("() => window.__xss") == 0 and ev("() => stripHtml('<a href=\"#\">Foto</a> &amp; Co')") == "Foto & Co")
        step("Avaleht", t_home)

        # 2) test + täisekraan + suurendus
        def t_test():
            home()
            p.click("#startTest10Btn")
            p.wait_for_function("() => document.getElementById('photo').style.display === 'block'")
            p.click("#runFsBtn")
            check("täisekraan sisse", ev("() => document.body.classList.contains('run-fs')"))
            check("tulemuse rida nähtav", p.is_visible(".fs-score") and "Küsimus 1 / 10" in p.text_content(".fs-score"))
            p.fill("#guessInput", "T-72"); p.click("#revealBtn"); p.click("#markGood")
            p.wait_for_function("() => document.querySelector('.fs-score').textContent.includes('Küsimus 2 / 10')")
            check("hindamine uuendab tulemust", "1 / 1" in p.text_content(".fs-score") and "100%" in p.text_content(".fs-score"))
            box = p.locator("#scope").bounding_box()
            cx, cy = box["x"] + box["width"] / 2, box["y"] + box["height"] / 2
            p.mouse.move(cx, cy); p.mouse.wheel(0, -400); p.wait_for_timeout(150)
            t1 = ev("() => document.getElementById('photo').style.transform")
            check("rullik suurendab", "scale(" in t1, t1)
            p.mouse.down(); [p.mouse.move(cx + 16 * i, cy) for i in range(1, 6)]; p.mouse.up()
            t2 = ev("() => document.getElementById('photo').style.transform")
            check("lohistamine liigutab pilti", t2 != t1 and "scale(" in t2, t2)
            p.click("#skipBtn")
            p.wait_for_function("() => document.querySelector('.fs-score').textContent.includes('Küsimus 3 / 10')")
            check("uus pilt nullib suurenduse", ev("() => document.getElementById('photo').style.transform") == "")
            p.click("#runFsBtn")
            check("täisekraan välja", not ev("() => document.body.classList.contains('run-fs')"))
        step("Genereeri test + täisekraan", t_test)

        # 2b) harjutuse valik: kategooriad + mudelid, üks pilt mudeli kohta, meelde jätmine
        def t_practice():
            home()
            ev("() => localStorage.removeItem('tehnikatuvastus.practice.v1')")
            p.reload(); p.wait_for_function("() => typeof CATEGORIES !== 'undefined'")
            p.click("#groupToggleBtn")
            check("algul pole midagi valitud", p.is_disabled("#startPracticeBtn"))
            row = p.locator("#groupGrid .tr-item").nth(0)
            row.locator(".pg-row > input").check()
            n_models = ev("() => practiceEntries().length")
            n_pics = ev("() => practiceEntries().reduce((a, e) => a + usableFiles(e).length, 0)")
            check("kokkuvõte näitab mudeleid ja pilte", f"{n_pics} pilti" in p.text_content("#practiceSummary") and f"({n_pics} pilti)" in p.text_content("#startPracticeBtn"))
            row.locator(".tr-name").click()
            boxes = row.locator(".tr-models input")
            check("kategooria avaneb mudelite nimekirjaks", boxes.count() == n_models)
            boxes.nth(0).uncheck()
            check("mudeli väljajätmine vähendab arvu", ev("() => practiceEntries().length") == n_models - 1)
            row.locator(".tr-models-tools button", has_text="Eemalda kõik").click()
            check("„Eemalda kõik“ → nupp keelatud", p.is_disabled("#startPracticeBtn") and "mudel" in p.text_content("#startPracticeBtn"))
            row.locator(".tr-models-tools button", has_text="Vali kõik").click()
            p.check("#practiceOnePerModel")
            check("üks pilt mudeli kohta: pilte = mudeleid", f"({n_models} pilt" in p.text_content("#startPracticeBtn"))
            p.locator("#groupGrid .tr-item").nth(0).locator(".tr-models input").nth(0).uncheck()
            p.reload(); p.wait_for_function("() => typeof CATEGORIES !== 'undefined'")
            check("valik jääb meelde", ev("() => [selectedGroupIds.size, practiceExcluded.size, practiceOnePerModel]") == [1, 1, True])
            p.click("#startPracticeBtn"); p.wait_for_timeout(300)
            check("voor: iga mudel üks kord", ev("() => TOTAL_IMAGES") == n_models - 1)
            home(); p.click("#groupToggleBtn"); p.click("#clearAllBtn")
            check("„Tühista kõik“ tühjendab ka mudelid", ev("() => [selectedGroupIds.size, practiceExcluded.size]") == [0, 0])
            p.uncheck("#practiceOnePerModel")
        step("Harjutuse valik", t_practice)

        # mudelid võrdluseks
        pick = """() => {
          const w = CATEGORIES.filter(e => e.files && e.files.length && typeof getWHAT === 'function' && getWHAT(e));
          const any = CATEGORIES.filter(e => e.files && e.files.length >= 2);
          return {a: (w[0] || any[0]).cat, b: (w[1] || any[1]).cat, wa: w[0] && w[0].cat, wb: w[1] && w[1].cat};
        }"""

        # 3) galerii suurendus
        def t_lightbox():
            home()
            m = ev(pick)
            ev("c => openModelGallery(CATEGORIES.find(e => e.cat === c), 'photos')", m["a"])
            p.wait_for_selector("#modelGalleryGrid img")
            p.click("#modelGalleryGrid img >> nth=0")
            p.wait_for_selector("#lbImg.ready")
            check("pildi suurendus avaneb", ev("() => document.getElementById('lightbox').classList.contains('open')"))
            check("suurenduses on allikas pildi nurgas", "Allikas" in (p.text_content("#lbSrc") or "") and p.is_visible("#lbSrc a"))
            box = p.locator("#lbStage").bounding_box()
            cx, cy = box["x"] + box["width"] / 2, box["y"] + box["height"] / 2
            t0 = ev("() => document.getElementById('lbImg').style.transform")
            p.mouse.move(cx, cy); p.mouse.wheel(0, -500); p.wait_for_timeout(150)
            t1 = ev("() => document.getElementById('lbImg').style.transform")
            check("rullik suurendab", t1 != t0, t1)
            p.mouse.down(); [p.mouse.move(cx + 20 * i, cy + 10 * i) for i in range(1, 6)]; p.mouse.up()
            check("lohistamine liigutab", ev("() => document.getElementById('lbImg').style.transform") != t1)
            p.keyboard.press("Escape")
            check("Esc sulgeb suurenduse, galerii jääb", not ev("() => document.getElementById('lightbox').classList.contains('open')")
                  and ev("() => document.getElementById('modelGallery').classList.contains('open')"))
        step("Galerii: pildi suurendus", t_lightbox)

        # 3b) mudelite vahetamine ↑/↓ (galerii ja suurendus), nimekirja järjekorras
        def t_model_nav():
            home()
            p.click("#showModelListBtn")
            order = ev("() => modelListOrder('').map(e => e.label)")
            on_screen = ev("() => [...document.querySelectorAll('#modelListContent .m-name')].map(x => x.textContent)")
            check("järjekord = nimekiri ekraanil", order == on_screen, f"{len(order)} mudelit")
            ev("() => window.scrollTo(0, 600)")
            p.click("#modelListContent .m-photos >> nth=1")
            p.wait_for_selector("#modelGalleryGrid img")
            y0 = ev("() => scrollY")
            p.keyboard.press("ArrowDown")
            check("galerii ↓ = järgmine mudel", p.text_content("#modelGalleryTitle") == order[2])
            check("taustal nimekiri ei keri", ev("() => scrollY") == y0)
            p.click("#mgModelUp")
            check("galerii ▲ nupp = eelmine mudel", p.text_content("#modelGalleryTitle") == order[1])
            p.wait_for_function("() => [...document.querySelectorAll('#modelGalleryGrid img')].some(i => i.complete && i.naturalWidth)")
            p.click("#modelGalleryGrid img >> nth=0")
            p.wait_for_selector("#lbImg.ready")
            p.keyboard.press("ArrowDown")
            p.wait_for_function("l => document.getElementById('lbInfo').textContent.includes(l) && document.getElementById('lbImg').classList.contains('ready')", arg=order[2])
            check("suurenduses ↓ = järgmise mudeli pilt", p.text_content("#modelGalleryTitle") == order[2])
            p.keyboard.press("Escape")
            check("suurendusest väljudes on galeriis uus mudel", p.text_content("#modelGalleryTitle") == order[2]
                  and not ev("() => lbOpen"))
            # võrdlus otse suurendusest („Võrdle:“ otsing ribal)
            p.click("#modelGalleryGrid img >> nth=0")
            p.wait_for_selector("#lbImg.ready")
            check("suurenduses on mudeli nimi suurelt", p.text_content("#lbInfo .lb-name").startswith(order[2])
                  and ev("() => parseFloat(getComputedStyle(document.querySelector('#lbInfo .lb-name')).fontSize)") >= 18)
            src = ev("() => lbImg.src")
            p.click("#lbCmp .cmp-pick-input")
            p.keyboard.type(order[5][:3])
            check("otsingusse kirjutamine ei vaheta pilti", ev("() => lbImg.src") == src and p.text_content("#modelGalleryTitle") == order[2])
            p.click("#lbCmp .cmp-pick-opt >> nth=0")
            p.wait_for_function("() => document.getElementById('cmpView').classList.contains('open') && document.querySelectorAll('.cmpv-pane img.ready').length === 2")
            check("valik avab võrdluse täisekraanil, vasakul sama pilt", ev("() => document.querySelector('.cmpv-pane img').src") == src
                  and p.text_content(".cmpv-pane >> nth=0").startswith(order[2]))
            check("võrdluses on allikas mõlema pildi nurgas", ev("() => Array.from(document.querySelectorAll('.cmpv-pane .img-src')).filter(x => x.textContent.includes('Allikas')).length") == 2)
            p.keyboard.press("Escape")
        step("Mudelite vahetamine ↑/↓", t_model_nav)

        # 4) võrdlus täisekraanil
        def t_compare():
            home()
            m = ev(pick)
            ev("m => { const a = CATEGORIES.find(e => e.cat === m.a), b = CATEGORIES.find(e => e.cat === m.b); openModelGallery(a, 'photos'); showPhotosCompare(a, b); }", m)
            p.wait_for_function("() => document.querySelectorAll('#mgPhotosCompare img').length >= 2 && [...document.querySelectorAll('#mgPhotosCompare img')].every(i => i.complete)")
            p.click("#mgPhotosCompare .pcmp-col:nth-child(1) img >> nth=0")
            p.wait_for_function("() => document.querySelectorAll('.cmpv-pane img.ready').length === 2")
            check("võrdlus avaneb, kaks poolt", True)
            c0 = p.text_content(".cmpv-pane.active .cmpv-count")
            p.keyboard.press("ArrowRight"); p.wait_for_timeout(150)
            n_imgs = ev("() => document.querySelectorAll('#mgPhotosCompare .pcmp-col:nth-child(1) img').length")
            check("nool vahetab aktiivse poole pilti", n_imgs < 2 or p.text_content(".cmpv-pane.active .cmpv-count") != c0)
            st = p.locator(".cmpv-pane >> nth=1").locator(".cmpv-stage").bounding_box()
            p.mouse.move(st["x"] + st["width"] / 2, st["y"] + st["height"] / 2)
            t0 = ev("() => document.querySelectorAll('.cmpv-pane img')[1].style.transform")
            p.mouse.wheel(0, -500); p.wait_for_timeout(150)
            check("rullik suurendab ühte poolt", ev("() => document.querySelectorAll('.cmpv-pane img')[1].style.transform") != t0)
            p.keyboard.press("Escape")
            check("Esc sulgeb võrdluse", not ev("() => document.getElementById('cmpView').classList.contains('open')"))
            if m.get("wa") and m.get("wb"):
                ev("m => { const a = CATEGORIES.find(e => e.cat === m.wa), b = CATEGORIES.find(e => e.cat === m.wb); setModelTab('what'); showWHATCompare(a, b); }", m)
                p.wait_for_selector(".what-compare .cmpv-open")
                p.wait_for_function("() => [...document.querySelectorAll('.wcmp-img img')].filter(i => i.complete && i.naturalWidth).length === 2")
                p.click(".what-compare .cmpv-open")
                p.wait_for_function("() => document.querySelectorAll('.cmpv-pane img.ready').length === 2")
                check("WHAT-võrdlus täisekraanil", True)
                p.keyboard.press("Escape")
        step("Võrdlus täisekraanil", t_compare)

        # 5) kureeritud test: salvesta → ava
        def t_curated():
            home()
            def load(settings):
                ev("""st => { const es = CATEGORIES.filter(e => e.files && e.files.length).slice(0, 3);
                    CuratedTest._load({kind: 'tehnikatuvastus-kureeritud-test', version: 1, name: 'Smoke',
                      questions: es.map(e => ({cat: e.cat, file: e.files[0], label: e.label, type: e.type})), settings: st}, 'test'); }""", settings)
            def phases(n):
                p.click(".ct-start")
                p.wait_for_function("() => document.querySelector('.ct-proj-go') && !document.querySelector('.ct-proj-go').disabled")
                out = []
                for _ in range(n):
                    p.keyboard.press("ArrowRight"); p.wait_for_timeout(60)
                    out.append(ev("""() => { const el = document.getElementById('ctProj');
                        if(!el.querySelector('.ct-proj-end').hidden) return 'end';
                        if(!el.querySelector('.ct-proj-reveal').hidden) return 'answer';
                        if(!el.querySelector('.ct-proj-write').hidden) return 'write'; return 'view'; }"""))
                ev("() => { const el = document.getElementById('ctProj'); if(el) el.querySelector('[data-a=\"close\"]').click(); }")
                return out
            # salvestamine ja uuesti avamine (sama mis topeltklõps / „Ava failist“)
            load({"mode": "manual", "showAnswer": True})
            with p.expect_download() as dl:
                ev("() => document.querySelector('.ct-todo-item button').click()")
            text = Path(dl.value.path()).read_text(encoding="utf-8")
            check("testifail sisaldab andmeid ja suunamist", 'id="tehnikatuvastus-test"' in text and "#kureeritud=" in text)
            ev("t => CuratedTest._load(CuratedTest._parse(t), 'file')", text)
            check("salvestatud test avaneb, seade alles", ev("() => CuratedTest._state.settings.showAnswer") is True)
            seq = phases(10)
            check("õige vastus pärast iga küsimust", seq == ["view", "write", "answer"] * 3 + ["end"], " ".join(seq))
            # vana testifail (enne vastuse näitamise seadet) – vastust ei näidata
            load({"mode": "manual"})
            seq = phases(7)
            check("vana testifail töötab (vastust ei näidata)", seq == ["view", "write"] * 3 + ["end"], " ".join(seq))
            ev("() => CuratedTest.hide && CuratedTest.hide()")
            # mudelite linnukesed: kõik maha / kõik tagasi ühe nupuga
            home()
            p.click("#startCuratedBtn")
            ev("() => [...document.querySelectorAll('#curatedScreen button')].find(b => /›/.test(b.textContent) && !b.disabled).click()")
            p.click(".ct-rule-toggle >> nth=0")
            on = lambda: ev("() => [...document.querySelectorAll('.ct-rule-models input')].filter(c => c.checked).length")
            n = ev("() => document.querySelectorAll('.ct-rule-models input').length")
            p.click(".ct-rule-models-tools button:has-text('Eemalda kõik')")
            cleared = on() == 0 and ev("() => document.querySelector('.ct-rule-block input.ct-num').max") == "0"
            p.click(".ct-rule-models-tools button:has-text('Vali kõik')")
            check("mudelid: „Eemalda kõik“ / „Vali kõik“", cleared and on() == n, f"{n} mudelit")
            ev("() => CuratedTest.hide && CuratedTest.hide()")
        step("Kureeritud test", t_curated)

        # Testi reeglid (50/25): vaikimisi ühe klikiga, ⚙ paneel, mõju testile, säilib uuendamisel, taastamine
        def t_rules():
            home()
            ev("() => localStorage.removeItem('tehnikatuvastus.testRules.v1')")
            home()
            check("vaikimisi: paneel kinni, oma reeglite rida peidus",
                  not p.is_visible("#testRulesPanel") and not p.is_visible("#testRulesStatus"))
            p.click("#testRulesBtn")
            idx = lambda gid: ev("""gid => { const l = GROUPS.find(g => g.id === gid).label;
                return [...document.querySelectorAll('#testRulesPanel .tr-row input')].findIndex(i => i.getAttribute('aria-label').startsWith(l)); }""", gid)
            def setv(gid, v):
                loc = p.locator("#testRulesPanel .tr-row input").nth(idx(gid)); loc.fill(str(v)); loc.press("Enter")
            setv("planes", 0); setv("mines", 2)
            check("muudetud read märgitud, rida „oma reeglid“ nähtav",
                  ev("() => document.querySelectorAll('#testRulesPanel .tr-item.changed').length") == 2 and p.is_visible("#testRulesStatus"))
            r = ev("""() => { let pl = 0, minesEvery = true;
                for(let i = 0; i < 25; i++){ const b = buildUniqueVehiclePool(50);
                  pl += b.filter(x => x.entry.group === 'planes').length;
                  if(!b.some(x => x.entry.group === 'mines')) minesEvery = false; }
                let cat = 0; for(let i = 0; i < 25; i++) cat += buildCategoryPool(10).filter(x => x.entry.group === 'planes').length;
                return {pl, minesEvery, cat}; }""")
            check("reeglid kehtivad testile (0 = välja, muudetud miinidel pole 30%)", r["pl"] == 0 and r["minesEvery"], str(r))
            check("10 küsimuse test kasutab vaikereegleid", r["cat"] > 0, str(r))
            home()
            check("reeglid säilivad lehe uuendamisel",
                  ev("() => JSON.stringify(testRuleOverrides)") == '{"planes":0,"mines":2}' and p.is_visible("#testRulesStatus"))
            p.click("#testRulesStatus button")
            check("„Taasta vaikereeglid“ kustutab", ev("() => localStorage.getItem('tehnikatuvastus.testRules.v1')") is None
                  and not p.is_visible("#testRulesStatus"))
            # mudelite väljajätmine: kategooria lahti, „Eemalda kõik“, testi ei tule, säilib, taastamine
            home()
            p.click("#testRules25Btn")
            j = ev("() => [...document.querySelectorAll('#testRulesPanel .tr-item')].findIndex(it => it.querySelector('input').getAttribute('aria-label').startsWith(GROUPS.find(g => g.id === 'tank').label))")
            item = p.locator("#testRulesPanel .tr-item").nth(j)
            item.locator(".tr-name").click()
            item.locator("button:has-text('Eemalda kõik')").click()
            item.locator(".tr-models input").first.check()
            r = ev("""() => { const ex = testModelsOf('tank').filter(e => testExcluded.has(e.cat)).map(e => e.cat);
                let hits = 0; for(let i = 0; i < 25; i++) hits += buildUniqueVehiclePool(50).filter(x => ex.includes(x.entry.cat)).length;
                return {ex: ex.length, total: testModelsOf('tank').length, hits}; }""")
            check("välja jäetud mudelid ei tule testi", r["ex"] == r["total"] - 1 and r["hits"] == 0, str(r))
            home()
            check("väljajätmised säilivad uuendamisel", ev("() => testExcludedCount()") == r["ex"] and "välja jäetud" in p.text_content("#testRulesStatus"))
            p.click("#testRulesStatus button")
            check("„Taasta vaikereeglid“ taastab ka mudelid", ev("() => testExcludedCount()") == 0
                  and ev("() => localStorage.getItem('tehnikatuvastus.testRules.v1')") is None)
        step("Testi reeglid", t_rules)

        # Litsentsid ja allikad (avalehe nupp)
        def t_lic():
            home()
            p.click("#licOpenBtn")
            check("„Litsentsid ja allikad“ avaneb", p.is_visible("#licPanel") and "Wikimedia Commons" in p.text_content("#licPanel"))
            check("kohaliku pildi allikas lingina", ev("() => { const d = document.createElement('div'); d.appendChild(sourceLinkLine({rawTitle: 'images/mines/ptm4.jpg'})); return d.textContent === 'Allikas: sappers.org' && !!d.querySelector('a[href*=\"sappers.org\"]'); }"))
            check("fotokrediit ilma lingita", ev("() => { const d = document.createElement('div'); d.appendChild(sourceLinkLine({rawTitle: 'images/forces/spetsnas_02.webp'})); return d.textContent; }") == "Foto: TASS/Scanpix")
            check("Litsentside aknas on kontakt ja BY-SA märge", "koerakoonlased@protonmail.com" in p.text_content("#licPanel") and "CC BY-SA 4.0 alusel" in p.text_content("#licPanel"))
            p.keyboard.press("Escape")
            check("Esc sulgeb litsentside akna", not p.is_visible("#licPanel"))
        step("Litsentsid ja allikad", t_lic)

        # 6) Kuldvillaku fail: salvesta → ava
        def t_kuld():
            home()
            cells = ev("""() => CATEGORIES.filter(e => e.files && e.files.length).slice(0, 3)
                          .map((e, i) => ({cat: e.cat, file: e.files[0], value: (i + 1) * 100}))""")
            data = {"app": "tehnikatuvastus-kuldvillak", "version": 1, "saved": "2026-01-01", "ladder": True,
                    "columns": [{"label": "Smoke", "source": None, "cells": cells + [None, None]}]}
            with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
                json.dump(data, f)
                path = f.name
            p.click("#startKuldvillakBtn")
            with p.expect_file_chooser() as fc:
                p.click("#kuldOpenBtn")
            fc.value.set_files(path)
            p.wait_for_selector("#kuldBoard .kuld-cell")
            n = ev("() => [...document.querySelectorAll('#kuldBoard .kuld-cell')].filter(b => !b.disabled).length")
            check("Kuldvillaku laua fail avaneb", n >= 3, f"aktiivseid lahtreid {n}")
            Path(path).unlink(missing_ok=True)
            check("Kuldvillakus pole testi tulemuse kasti", not p.is_visible(".scorebox"))
            p.click("#kuldFsBtn")
            check("täisekraan sisse", ev("() => document.body.classList.contains('kuld-fs')"))
            check("laud täidab ekraani", ev("() => document.getElementById('kuldBoard').getBoundingClientRect().bottom > innerHeight * 0.85"))
            p.click("#kuldBoard .kuld-cell:not([disabled])")
            p.wait_for_function("() => document.getElementById('kuldPhoto').style.display === 'block'")
            p.click("#kuldScope .scope-zoom button:last-child")
            check("küsimuse pilti saab suurendada", "scale(" in ev("() => document.getElementById('kuldPhoto').style.transform"))
            p.click("#kuldRevealBtn"); p.click("#kuldGoodBtn")
            check("pärast vastamist täisekraan jääb", ev("() => document.body.classList.contains('kuld-fs')")
                  and ev("() => document.getElementById('kuldScore').textContent") != "0")
            check("vastatud lahter näitab punkte", ev("() => document.querySelector('.kuld-cell.res-good .kc-pts').textContent.startsWith('+')"))
            p.click("#kuldFsBtn")

            def open_q(sel="#kuldBoard .kuld-cell:not(.answered):not(.is-empty)"):
                p.click(sel)
                p.wait_for_function("() => document.getElementById('kuldPhoto').style.display === 'block'")

            def scope_h():
                return ev("() => Math.round(document.getElementById('kuldScope').getBoundingClientRect().height)")

            # vastuse näitamine ei muuda paigutust; Enter näitab, 2 = ei läinud täppi
            open_q(); h1 = scope_h()
            check("Kuldvillakus allikat enne vastust ei näe", not p.is_visible("#kuldSrc"))
            p.keyboard.press("Enter")
            check("Kuldvillakus on allikas nurgas pärast vastust", p.is_visible("#kuldSrc") and "Allikas" in p.text_content("#kuldSrc"))
            check("Enter näitab vastust, pilt ei hüppa", ev("() => document.getElementById('kuldQuestion').classList.contains('revealed')") and scope_h() == h1, f"{h1} -> {scope_h()}")
            p.keyboard.press("2")
            check("vale vastus näitab laual miinust", ev("() => document.querySelector('.kuld-cell.res-bad .kc-pts').textContent") == "−")
            # parandus: vale → õige → vastamata
            open_q(".kuld-cell.res-bad")
            p.click("#kuldGoodBtn")
            check("parandus muudab tulemuse ja punktid", ev("() => document.querySelectorAll('.kuld-cell.res-bad').length") == 0
                  and ev("() => document.getElementById('kuldScore').textContent") == ev("() => String(kuldScores().total)"))
            n_before = ev("() => document.querySelectorAll('.kuld-cell.answered').length")
            open_q(".kuld-cell.res-good")
            p.click(".kuld-undo-btn")
            check("„Vastamata“ avab küsimuse uuesti", ev("() => document.querySelectorAll('.kuld-cell.answered').length") == n_before - 1)
            # võistkonnad
            p.click("#kuldTeamsBtn")
            check("võistkonnad: kaks valmis", ev("() => document.querySelectorAll('#kuldTeamsList .kuld-team-row').length") == 2)
            p.fill("#kuldTeamsList .kuld-team-row:nth-child(1) input", "Punased")
            p.click("#kuldTeamsDoneBtn")
            open_q(); p.keyboard.press("Enter"); p.keyboard.press("2")
            open_q(); p.keyboard.press("Enter"); p.keyboard.press("0")
            sc = ev("() => [...document.querySelectorAll('.kuld-team-score')].map(e => e.querySelector('span').textContent + '=' + e.querySelector('b').textContent)")
            check("võistkonna punktid ja 0 = keegi", sc[0] == "Punased=0" and sc[1].startswith("Võistkond 2=") and sc[1] != "Võistkond 2=0", str(sc))
            # ↻ küsib kinnitust (loobumisel seis jääb)
            ev("() => { window.__realConfirm = window.confirm; window.confirm = m => { window.__confirmMsg = m; return false; }; }")
            p.click("#kuldResetBtn")
            msg = ev("() => window.__confirmMsg || ''")
            ev("() => { window.confirm = window.__realConfirm; }")
            check("↻ küsib kinnitust, loobumisel seis jääb", msg and ev("() => document.querySelectorAll('.kuld-cell.answered').length") > 0, msg)
            ev("() => { kuldTeams = []; }")
            # avalehele minek küsib kinnitust; loobumisel jääb laud alles
            ev("() => { window.__realConfirm = window.confirm; window.__confirmMsg = ''; window.confirm = m => { window.__confirmMsg = m; return false; }; }")
            p.click("#kuldMenuBtn")
            stay = ev("() => document.getElementById('kuldScreen').style.display !== 'none'") and ev("() => window.__confirmMsg") != ""
            ev("() => { window.confirm = window.__realConfirm; }")
            check("avalehele minek küsib kinnitust, loobumisel laud jääb", stay)
            p.click("#kuldMenuBtn")
            check("avalehele minnes täisekraan lõpeb", not ev("() => document.body.classList.contains('kuld-fs')"))
        step("Kuldvillak", t_kuld)

        # 6b) Memory: paar = sama mudeli kaks erinevat pilti
        def t_memory():
            home()
            order = ev("""() => { const b = ['startPracticeBtn','startKuldvillakBtn','startMemoryBtn','startSymbolsBtn'].map(id => document.getElementById(id));
                return b.every((x, i) => i === 0 || (b[i-1].compareDocumentPosition(x) & Node.DOCUMENT_POSITION_FOLLOWING)); }""")
            check("avalehel: Harjuta → Kuldvillak → Memory → Tingmärgid", order)
            p.click("#startMemoryBtn")
            check("Memory seadistus avaneb", p.is_visible("#memoryConfig") and p.locator("#memGroups input").count() > 3)
            p.click("#memSizeRow .seg[data-n='8']")
            p.click("#memStart")
            p.wait_for_selector("#mmBoard", timeout=30000)
            S = "window.MemoryGame._state"
            pis = ev(f"() => {S}.tiles.map(t => t.pi)")
            check("laual 8 paari = 16 ruutu", len(pis) == 16 and len(set(pis)) == 8, str(len(pis)))
            check("paari kaks pilti on erinevad failid", ev(f"""() => {{
                const k = t => String(t).startsWith('images/') ? t : normalizeFilename(t);
                const id = i => i.rawTitle ? k(i.rawTitle) : i.url;   // kohalikul pildil rawTitle puudub
                return {S}.pairs.every(p => p.infos[0].url !== p.infos[1].url && id(p.infos[0]) !== id(p.infos[1])); }}"""))
            a = 0; b = next(i for i, x in enumerate(pis) if x != pis[0])
            faces = p.locator(".mm-face")
            faces.nth(a).click(); faces.nth(b).click(); p.wait_for_timeout(450)
            check("mittesobiv paar jääb avatuks", ev(f"() => {S}.open.length") == 2 and p.locator(".mm-tile.up").count() == 2)
            p.locator(".mm-zoom").nth(a).click()
            p.wait_for_function("() => lbOpen")
            check("🔍 avab suurenduse mõlema avatud pildiga", ev("() => lbItems.length") == 2)
            check("avatud pildi suurenduses pole nime ega allikat", p.text_content("#lbSrc").strip() == "" and ev("() => lbItems.every(i => !i.label)"))
            p.click("#lbClose")
            faces.nth(a).click()
            check("avatud pildi klõps alustab uut katset", ev(f"() => {S}.open") == [a])
            c = next(i for i, x in enumerate(pis) if x == pis[a] and i != a)
            faces.nth(c).click()
            p.wait_for_selector("#mmPop:not([hidden])")
            name = ev(f"() => {S}.pairs[{pis[a]}].entry.label")
            check("paari aknas on nimi ja allikas", p.text_content(".mm-pop-name") == name and "Allikas" in p.text_content(".mm-pop-imgs"))
            for _ in range(6): p.keyboard.press("Tab")
            check("Tab jääb paari akna sisse", ev("() => document.getElementById('mmPop').contains(document.activeElement)"))
            p.focus(".mm-pop-imgs button"); p.keyboard.press("Enter")
            p.wait_for_function("() => lbOpen")
            check("Enter pildil suurendab (aken jääb lahti)", not ev("() => document.getElementById('mmPop').hidden"))
            p.click("#lbClose")
            p.keyboard.press("Escape")
            check("Esc sulgeb paari akna", ev("() => document.getElementById('mmPop').hidden"))
            ev("() => { window.__realConfirm = window.confirm; window.__asked = 0; window.confirm = () => { window.__asked++; return false; }; }")
            p.click("#titleHome")
            check("päise klõps küsib kinnitust, loobumisel laud jääb", ev("() => window.__asked") == 1 and p.is_visible("#mmBoard"))
            ev("() => { window.confirm = window.__realConfirm; }")
            for pi in sorted(set(pis)):
                idx = [i for i, x in enumerate(pis) if x == pi]
                if ev(f"() => {S}.tiles[{idx[0]}].state") == "matched": continue
                faces.nth(idx[0]).click(); faces.nth(idx[1]).click()
                p.wait_for_selector("#mmPop:not([hidden])")
                p.click("#mmPopOk")
            p.wait_for_selector("#mmSum")
            check("lõpus kõik paarid ülevaates", p.locator(".mm-sum-card").count() == 8 and "Kõik 8 paari" in p.text_content(".end-summary h3"))
            p.click("#mmHome")
            check("Memoryst avalehele", p.is_visible("#homeScreen") and not p.is_visible("#memoryScreen"))
            # ↻ ajal, kui paari aken on lahti: uus laud, aken suletud
            p.click("#memStart"); p.wait_for_selector("#mmBoard", timeout=30000)
            pis = ev(f"() => {S}.tiles.map(t => t.pi)")
            c = next(i for i, x in enumerate(pis) if x == pis[0] and i != 0)
            faces = p.locator(".mm-face"); faces.nth(0).click(); faces.nth(c).click()
            p.wait_for_selector("#mmPop:not([hidden])")
            ev("() => document.getElementById('mmRestart').click()")
            p.wait_for_selector("#mmBoard", timeout=30000)
            check("uus laud sulgeb paari akna", ev("() => document.getElementById('mmPop').hidden") and ev(f"() => {S}.found") == 0)
            p.click("#mmBack")
        step("Memory", t_memory)

        # 7) piltide varukoopia (ZIP)
        def t_backup():
            p.add_init_script("delete window.showDirectoryPicker;")   # ZIP-režiim (kausta valikut testis ei saa)
            home()
            p.click("#diagToggle")
            grp = ev("() => (GROUPS.find(g => CATEGORIES.some(e => e.group === g.id && e.files.some(f => !f.startsWith('images/')))) || GROUPS[0]).id")
            p.select_option("#diagGroup", grp)
            check("nupu nimi", p.text_content("#diagBackup").strip() == "Lae pildid seadmesse")
            with p.expect_download(timeout=120000) as dl:
                p.click("#diagBackup")
            p.wait_for_function("() => /VALMIS|KATKES/.test(document.getElementById('diagProgress').textContent)", timeout=120000)
            z = zipfile.ZipFile(io.BytesIO(Path(dl.value.path()).read_bytes()))
            names = z.namelist()
            check("ZIP on terve", z.testzip() is None)
            credits = [n for n in names if n.startswith("images/commons-credits")]
            check("ZIP-is on pildid ja autorite fail", len(names) > 1 and credits, f"{len(names)} faili")
            check("varukoopia ilma vigadeta", "VIGA 0" in p.text_content("#diagProgress"), p.text_content("#diagProgress"))
        step("Lae pildid seadmesse (ZIP)", t_backup)

        # 8) inglise keel (EN)
        missing_report = {}
        def t_english():
            home()
            ev("() => { localStorage.removeItem('tehnikatuvastus.lang.mtNotice.v1'); }")
            p.click("#langSwitch [data-lang='en']")
            p.wait_for_function("() => window.I18N && I18N.lang === 'en' && typeof CATEGORIES !== 'undefined'")
            p.wait_for_selector("#mtModal")
            check("EN: masintõlke aken avaneb", "machine translation" in p.text_content("#mtModal"))
            p.click("#mtModalOk")
            check("EN: aken sulgub ja jääb meelde", ev("() => !document.getElementById('mtModal') && localStorage.getItem('tehnikatuvastus.lang.mtNotice.v1') === '1'"))
            check("EN: html lang = en", ev("() => document.documentElement.lang") == "en")
            check("EN: avalehe nupp on inglise keeles", "All models" in p.text_content("#showModelListBtn"))
            check("EN: püsiv masintõlke rida avalehel", ev("() => !!document.querySelector('#homeScreen .mt-note')"))
            check("EN: pealkiri jääb samaks", p.text_content("#titleHome").replace(" ", "") == "TEHNIKATUVASTUS")
            check("EN: liik ja nimi tõlgitud (Sovremenny → Destroyer)",
                  ev("() => { const e = CATEGORIES.find(x => x.cat === 'Sovremenny klass'); return !e || (e.type === 'Destroyer' && e.typeEt === 'Hävitaja'); }"))
            check("EN: TTA vaates on masintõlke rida", ev("""() => {
                const e = CATEGORIES.find(x => TTA_DATA.models[x.cat]); if(!e) return true;
                return !!renderTTAPanel(e, TTA_DATA.models[e.cat]).querySelector('.mt-note'); }"""))
            def home_en():
                p.goto(base + "/index.html")
                p.wait_for_function("() => typeof CATEGORIES !== 'undefined' && document.getElementById('appBuildLabel').textContent.includes('version')")
            check("EN: jaluses on versioon inglise keeles", "version" in p.text_content("#appBuildLabel"))
            # Käi läbi peamised vaated, et puuduvad tõlked jõuaksid nimekirja.
            p.click("#showModelListBtn"); p.wait_for_timeout(600); p.click("#listBackBtn")
            for btn in ("#startKuldvillakBtn", "#startMemoryBtn", "#startSymbolsBtn", "#testRulesBtn", "#groupToggleBtn"):
                if ev(f"() => !!document.querySelector('{btn}')"):
                    try:
                        p.click(btn, timeout=3000); p.wait_for_timeout(400)
                    except Exception:
                        pass
                    home_en()
            ui_miss = ev("""() => {
                const names = new Set();
                (typeof LOCAL_IMAGE_SOURCES !== 'undefined' ? Object.values(LOCAL_IMAGE_SOURCES) : []).forEach(v => { if(v && v.name) names.add(v.name); if(typeof v === 'string') names.add(v); });
                return [...I18N.misses].filter(x => !names.has(x)); }""")
            D = ev("""() => {
                const T = I18N_DATA, out = {};
                const has = /[õäöüšžÕÄÖÜŠŽ]/;
                out['liigid'] = [...new Set(CATEGORIES.map(c => c.typeEt).filter(t => t && !T.types[t]))];
                out['mudelinimed'] = CATEGORIES.filter(c => has.test(c.labelEt) && !T.labels[c.labelEt]).map(c => c.labelEt);
                out['grupid'] = GROUPS.filter(g => g.label === g.labelEt && has.test(g.label)).map(g => g.label);
                out['TTA väljad'] = Object.keys(TTA_FIELDS.fields).filter(k => !T.ttaFields[k]);
                const ENG = new Set(Object.values(T.ttaText || {}).map(x => x.replace(/\\s+/g, ' ').trim()));
                const tta = [];
                for(const cat in TTA_DATA.models){ const m = TTA_DATA.models[cat];
                  for(const part of ['values', 'notes']) for(const k in (m[part] || {})){ const v = m[part][k];
                    if(typeof v === 'string' && /\\p{L}{3,}/u.test(v) && !ENG.has(v.replace(/\\s+/g, ' ').trim())) tta.push(cat + ' / ' + (part === 'notes' ? 'märkus ' : '') + k + ': ' + v.slice(0, 60)); } }
                out['TTA tekstid'] = tta;
                const WEN = new Set(Object.values(T.whatText || {}).map(x => x.replace(/\\s+/g, ' ').trim()));
                const what = [];
                for(const cat in WHAT_DATA.models){ const m = WHAT_DATA.models[cat];
                  const rows = [m.note, ...['wheels', 'hull', 'armament', 'turret'].flatMap(p => (m[p] || []).map(r => r && r.text)), ...(m.related || []).map(g => g && g.label)];
                  rows.forEach(v => { if(typeof v === 'string' && v.trim() && !WEN.has(v.replace(/\\s+/g, ' ').trim())) what.push(cat + ': ' + v.slice(0, 60)); }); }
                out['WHAT'] = what;
                const SEN = new Set(Object.values(T.symbols || {}));
                out['tingmärgid'] = (window.SYMBOL_DATA ? SYMBOL_DATA.symbols : []).filter(x => !SEN.has(x.name)).map(x => x.name);
                return out; }""")
            missing_report.update(D); missing_report["kasutajaliides"] = ui_miss
            # tagasi eesti keelde
            p.click("#langSwitch [data-lang='et']")
            p.wait_for_function("() => window.I18N && I18N.lang === 'et' && typeof CATEGORIES !== 'undefined'")
            check("ET: tagasi eesti keelde, masintõlke rida puudub", ev("() => !document.querySelector('.mt-note') && document.documentElement.lang === 'et'"))
        step("Inglise keel (EN)", t_english)

        check("lehel ei tekkinud skriptivigu", not page_errors, " | ".join(page_errors)[:300])
        browser.close()
    srv.shutdown()

    if missing_report and not any(missing_report.values()):
        print()
        print("Inglise tõlked: kõik olemas.")
    elif missing_report:
        print()
        print("PUUDUVAD INGLISE TÕLKED (ei ole viga – äpp näitab eestikeelset teksti; tõlked: data/i18n-en.js)")
        for k, v in missing_report.items():
            if not v:
                continue
            print(f"  {k}: {len(v)}")
            for x in v[:15]:
                print(f"    - {x}")
            if len(v) > 15:
                print(f"    … ja veel {len(v) - 15}")
    bad = [r for r in results if not r[1]]
    print()
    print(f"KOKKU: {len(results) - len(bad)} / {len(results)} korras" + ("" if not bad else f" · {len(bad)} VIGA"))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
