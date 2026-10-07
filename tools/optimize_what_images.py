#!/usr/bin/env python3
"""Teeb images/what/ kausta WHAT-pildid offline-paketi jaoks väiksemaks (WebP).

Vaikimisi DRY-RUN: näitab, mida teeks, aga ei muuda midagi.
  python tools/optimize_what_images.py            # vaata, mis muutuks
  python tools/optimize_what_images.py --apply    # tee päriselt

Mida --apply teeb iga .png / .jpg / .jpeg pildiga kaustas images/what/:
  1. vähendab laiuse kuni MAX_WIDTH pikslini (väiksemat pilti ei suurendata);
  2. salvestab WebP-na (kvaliteet QUALITY) sama nimega: BMD-2_what.png -> BMD-2_what.webp;
  3. uuendab viited failides data/what.js ja offline-assets.json;
  4. kustutab originaali (PowerPointi originaal jääb sinu arvutisse alles).
Kui WebP tuleks originaalist suurem, jäetakse originaal puutumata.

Vajab Pillow't:  pip install pillow
"""
from pathlib import Path
import argparse
import json
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow puudub. Paigalda:  pip install pillow")

ROOT = Path(__file__).resolve().parents[1]
WHAT_DIR = ROOT / "images" / "what"
WHAT_JS = ROOT / "data" / "what.js"
ASSETS = ROOT / "offline-assets.json"

MAX_WIDTH = 1000   # px; slaidi foto osa on tavaliselt ~800 px laiune
QUALITY = 70       # WebP kvaliteet; numbrid ja värvid jäävad selgelt loetavaks
SOURCE_EXT = {".png", ".jpg", ".jpeg"}


def kb(n: int) -> str:
    return f"{n / 1024:.0f} KB"


def convert(src: Path) -> bytes:
    from io import BytesIO
    im = Image.open(src)
    im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
    if im.width > MAX_WIDTH:
        im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
    buf = BytesIO()
    im.save(buf, "WEBP", quality=QUALITY, method=6)
    return buf.getvalue()


def main() -> int:
    ap = argparse.ArgumentParser(description="WHAT-piltide optimeerimine (vaikimisi dry-run)")
    ap.add_argument("--apply", action="store_true", help="kirjuta muudatused")
    args = ap.parse_args()

    if not WHAT_DIR.is_dir():
        print("Kausta images/what/ pole – midagi teha pole.")
        return 0

    what_text = WHAT_JS.read_text(encoding="utf-8") if WHAT_JS.exists() else ""
    assets_raw = ASSETS.read_text(encoding="utf-8")
    assets = json.loads(assets_raw)

    sources = sorted(p for p in WHAT_DIR.iterdir() if p.suffix.lower() in SOURCE_EXT)
    if not sources:
        print("Optimeerimata pilte pole (kõik on juba .webp).")
        return 0

    before_total = after_total = 0
    changed = False
    for src in sources:
        old_rel = f"images/what/{src.name}"
        new_path = src.with_suffix(".webp")
        new_rel = f"images/what/{new_path.name}"
        data = convert(src)
        before, after = src.stat().st_size, len(data)

        if new_path.exists():
            print(f"JÄTAN VAHELE  {src.name}: {new_path.name} on juba olemas")
            continue
        if after >= before:
            print(f"JÄTAN VAHELE  {src.name}: WebP ({kb(after)}) ei oleks väiksem kui originaal ({kb(before)})")
            continue

        used = f'"{old_rel}"' in what_text
        print(f"{'TEEN' if args.apply else 'TEEKS'}  {src.name} -> {new_path.name}   {kb(before)} -> {kb(after)}"
              + ("" if used else "   (NB: data/what.js seda pilti ei kasuta)"))
        before_total += before
        after_total += after

        if args.apply:
            new_path.write_bytes(data)
            what_text = what_text.replace(f'"{old_rel}"', f'"{new_rel}"')
            if f"./{old_rel}" in assets:
                assets[assets.index(f"./{old_rel}")] = f"./{new_rel}"
            elif used and f"./{new_rel}" not in assets:
                assets.append(f"./{new_rel}")
            src.unlink()
            changed = True

    if before_total:
        print(f"\nKokku {kb(before_total)} -> {kb(after_total)} (säästab {kb(before_total - after_total)})")
    if args.apply and changed:
        if WHAT_JS.exists():
            WHAT_JS.write_text(what_text, encoding="utf-8")
        ASSETS.write_text(json.dumps(assets, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("Uuendatud: data/what.js, offline-assets.json. Kontrolli:  node check_release.js .")
    elif not args.apply and before_total:
        print("Dry-run: midagi ei muudetud. Päriselt tegemiseks lisa --apply")
    return 0


if __name__ == "__main__":
    sys.exit(main())
