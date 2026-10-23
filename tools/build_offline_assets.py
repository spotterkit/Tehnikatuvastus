#!/usr/bin/env python3
"""Koostab offline-assets.json kohalike piltide osa automaatselt.

Probleem: kohalikud pildid (images/...), mida offline-assets.json-is pole, ei satu offline-paketti.
Käsitsi hoitud nimekirjast jäid uued pildid (miinid, väeliigid, EW, droonid jne) välja.

Skript leiab kõik viidatud kohalikud pildid (index.html CATEGORIES, data/what.js "image",
data/tta*.js), jätab nimekirja kõik mitte-pildi kirjed (./index.html, ./data/... jne) ja
asendab pildikirjed viidatud piltidega. Puuduvad failid jäetakse välja ja hoiatatakse.

  python tools/build_offline_assets.py            # DRY-RUN
  python tools/build_offline_assets.py --apply    # kirjuta offline-assets.json
  python tools/build_offline_assets.py --check    # väljumiskood 1, kui nimekiri on aegunud
"""
from pathlib import Path
import argparse, json, re, sys

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "offline-assets.json"
IMG_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"}
REF_RE = re.compile(r'["\'](\.?/?images/[^"\']+)["\']')


def norm(p):
    p = p.strip()
    return p[2:] if p.startswith("./") else p


def referenced_images():
    refs = set()
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    a = html.find("const CATEGORIES = [")
    b = html.find("const GROUPS", a)
    block = html[a:b] if a != -1 and b != -1 else html
    block = re.sub(r'(?m)^\s*//.*$', '', block)   # kommentaarid ei loe
    refs.update(norm(m) for m in REF_RE.findall(block))
    for rel in ("data/what.js", "data/tta.js", "data/tta-fields.js"):
        f = ROOT / rel
        if f.exists():
            text = f.read_text(encoding="utf-8")
            refs.update(norm(m) for m in REF_RE.findall(text))
            refs.update(norm(m) for m in re.findall(r'"image"\s*:\s*"([^"]+)"', text))
    return {r for r in refs if Path(r).suffix.lower() in IMG_EXT}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    current = json.loads(ASSETS.read_text(encoding="utf-8")) if ASSETS.exists() else []
    core = [x for x in current if not norm(x).startswith("images/")]
    old_imgs = {norm(x) for x in current if norm(x).startswith("images/")}

    refs = referenced_images()
    missing = sorted(r for r in refs if not (ROOT / r).exists())
    present = sorted(r for r in refs if (ROOT / r).exists())
    unused = sorted(
        str(p.relative_to(ROOT)).replace("\\", "/")
        for p in (ROOT / "images").rglob("*")
        if p.is_file() and p.suffix.lower() in IMG_EXT
        and str(p.relative_to(ROOT)).replace("\\", "/") not in refs)

    added = sorted(set(present) - old_imgs)
    removed = sorted(old_imgs - set(present))
    size = sum((ROOT / p).stat().st_size for p in present) / 1048576
    print(f"Viidatud kohalikke pilte: {len(refs)} (kettal {len(present)}, ~{size:.1f} MB)")
    print(f"Lisandub: {len(added)} · eemaldatakse: {len(removed)}")
    for p in added: print("  + ./" + p)
    for p in removed: print("  - ./" + p)
    if missing:
        print(f"HOIATUS: {len(missing)} viidatud pilti pole kettal (jäetakse välja):")
        for p in missing: print("  ! " + p)
    if unused:
        print(f"Info: {len(unused)} kasutamata pilti kaustas images/ (ei lähe offline-paketti):")
        for p in unused: print("  ? " + p)

    if args.apply:
        out = core + ["./" + p for p in present]
        ASSETS.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("Kirjutatud: offline-assets.json")
    elif args.check:
        if added or removed:
            print("offline-assets.json on AEGUNUD. Käivita: python tools/build_offline_assets.py --apply")
            return 1
        print("offline-assets.json on ajakohane.")
    else:
        print("DRY-RUN: midagi ei muudetud. Lisa --apply.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
