#!/usr/bin/env python3
"""Automaatne kontroll enne GitHubi lükkamist: käib äpi põhitegevused brauseris läbi.

Wikimedia Commonsi päringud asendatakse testpiltidega – internetti ei lähe, Commonsi ei koormata.
Repo enda pilte (images/...) kasutatakse kettalt; kui mõni puudub, asendatakse see testpildiga.
Midagi ei muudeta: ei repo faile ega testifaile.

Mida kontrollitakse:
  - avaleht laeb ilma skriptivigadeta, versioon (APP_BUILD = SW_VERSION) klapib
  - „Genereeri test“: vastamine, hindamine, tulemus; täisekraan, suurendus, lohistamine
  - mudeli galerii: pildi suurendus (lightbox) – suurendus, lohistamine, sulgemine
  - piltide võrdlus ja WHAT-võrdlus täisekraanil
  - kureeritud test: salvestamine → avamine (ka õige vastuse näitamisega), vana testifail
  - Kuldvillaku laua fail: salvestamine → avamine
  - „Lae pildid seadmesse“ (ZIP)

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

    def route(r):
        url = r.request.url
        u = urlparse(url)
        if u.hostname == "commons.wikimedia.org":
            titles = parse_qs(u.query).get("titles", [""])[0].split("|")
            pages = {}
            for i, t in enumerate(titles):
                counter["n"] += 1
                pages[str(i + 1)] = {"title": t, "imageinfo": [{"mime": "image/png",
                    "url": f"https://upload.wikimedia.org/test/{counter['n'] % 4}.png",
                    "thumburl": f"https://upload.wikimedia.org/test/{counter['n'] % 4}.png",
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
            # vana testifail (enne N41) – vastust ei näidata
            load({"mode": "manual"})
            seq = phases(7)
            check("vana testifail töötab (vastust ei näidata)", seq == ["view", "write"] * 3 + ["end"], " ".join(seq))
            ev("() => CuratedTest.hide && CuratedTest.hide()")
        step("Kureeritud test", t_curated)

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
        step("Kuldvillak", t_kuld)

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

        check("lehel ei tekkinud skriptivigu", not page_errors, " | ".join(page_errors)[:300])
        browser.close()
    srv.shutdown()

    bad = [r for r in results if not r[1]]
    print()
    print(f"KOKKU: {len(results) - len(bad)} / {len(results)} korras" + ("" if not bad else f" · {len(bad)} VIGA"))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
