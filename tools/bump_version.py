#!/usr/bin/env python3
"""Tõstab äpi versiooni kahes kohas korraga, et offline-vahemälu seadmetes uueneks.

Versioon on kirjas kahes failis ja need PEAVAD klappima:
  index.html      const APP_BUILD = 'rc58';          (jaluses "versioon rc58")
  offline-sw.js   const SW_VERSION = 'offline-rc58';
Kui ühte unustada, ei saa seadmed uut versiooni või näitavad vana.

  python tools/bump_version.py            # DRY-RUN: näitab praegust ja järgmist versiooni
  python tools/bump_version.py --apply    # rc58 -> rc59 mõlemas failis
  python tools/bump_version.py --set rc60 --apply   # kindel versioon
  python tools/bump_version.py --check    # väljumiskood 1, kui failid ei klapi (nt enne push'i)

Testifailid ja Kuldvillaku failid versioonist ei sõltu – need avanevad ka pärast tõstmist.
"""
from pathlib import Path
import argparse, re, sys

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
SW = ROOT / "offline-sw.js"
APP_RE = re.compile(r"(const APP_BUILD = ')([^']+)(')")
SW_RE = re.compile(r"(const SW_VERSION = 'offline-)([^']+)(')")


def read(path, rx, label):
    text = path.read_text(encoding="utf-8")
    found = rx.findall(text)
    if len(found) != 1:
        sys.exit(f"VIGA: {label} leiti failist {path.name} {len(found)} korda (peab olema täpselt 1).")
    return text, found[0][1]


def next_version(v):
    m = re.fullmatch(r"(.*?)(\d+)", v)
    if not m:
        sys.exit(f"VIGA: versioon '{v}' ei lõpe numbriga – kasuta --set <versioon>.")
    return m.group(1) + str(int(m.group(2)) + 1)


def main():
    ap = argparse.ArgumentParser(description="Tõsta APP_BUILD ja SW_VERSION koos (vaikimisi dry-run)")
    ap.add_argument("--apply", action="store_true", help="kirjuta muudatus failidesse")
    ap.add_argument("--set", metavar="VERSIOON", help="kindel uus versioon, nt rc60")
    ap.add_argument("--check", action="store_true", help="ainult kontrolli, kas versioonid klapivad")
    args = ap.parse_args()

    index_text, app = read(INDEX, APP_RE, "APP_BUILD")
    sw_text, sw = read(SW, SW_RE, "SW_VERSION")
    print(f"index.html     APP_BUILD  = {app}")
    print(f"offline-sw.js  SW_VERSION = offline-{sw}")

    if args.check:
        if app != sw:
            print("EI KLAPI: tõsta mõlemad korraga:  python tools/bump_version.py --apply")
            return 1
        print("OK: versioonid klapivad.")
        return 0

    if app != sw:
        print("HOIATUS: versioonid ei klapi – uus versioon arvutatakse suurema järgi.")
    base = max(app, sw, key=lambda v: int((re.search(r"(\d+)$", v) or [0, 0])[1] or 0))
    new = args.set.strip() if args.set else next_version(base)
    if not re.fullmatch(r"[A-Za-z0-9._-]+", new):
        sys.exit(f"VIGA: versioon '{new}' tohib sisaldada ainult tähti, numbreid, punkti, alakriipsu ja sidekriipsu.")
    print(f"Uus versioon:  {new}")

    if not args.apply:
        print("DRY-RUN: midagi ei muudetud. Lisa --apply.")
        return 0
    INDEX.write_text(APP_RE.sub(lambda m: m.group(1) + new + m.group(3), index_text, count=1), encoding="utf-8")
    SW.write_text(SW_RE.sub(lambda m: m.group(1) + new + m.group(3), sw_text, count=1), encoding="utf-8")
    print(f"Kirjutatud: index.html ja offline-sw.js -> {new}. Lükka mõlemad failid koos GitHubi.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
