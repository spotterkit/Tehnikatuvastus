// TTA andmestik. Võti = mudeli `cat` väärtus index.html CATEGORIES-is (nt "BMD-2").
// Kirje kuju ja töövoog: vt DATA_NOTES.txt. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.TTA_DATA = {
  "version": 28,
  "models": {
    "BMD-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Langevarjurpolk; Dessantründepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhudessantvägede ujuv lahingumasin (kasutusel alates 1985. aastast).",
        "crew": "3 + 4",
        "combatWeight": 8.2,
        "length": 5.4,
        "width": 2.63,
        "height": 2.175,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 61,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 10,
        "range": 450,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.6,
        "trench": 1.2,
        "airDroppable": true,
        "caliber": 30,
        "mainArmament": "30 mm 2A42 automaatkahur (300 lasku)",
        "atgm": "9M111 Fagot (AT-4) / 9M113 Konkurs (AT-5)",
        "atgmPenetration": "Fagot 400–600 mm, Konkurs 600–800 mm (RHA)",
        "rateOfFire": 800,
        "secondaryArmament": "2 × 7,62 mm PKT (koaksiaalne ja kere), 2940 lasku",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam: kere esiosa 15 mm, ülejäänud kere 10 mm; torn esiosa 23 mm, küljed 19 mm, taga 13 mm, katus 6 mm"
      },
      "notes": {
        "crew": "Teistel andmetel 2 + 6.",
        "combatWeight": "Teistel andmetel 11,5 t.",
        "length": "Kere pikkus; kahur ettepoole 5,91 m.",
        "height": "Teistel andmetel 1,97 m tõstetud ja 1,62 m langetatud vedrustusega.",
        "maxSpeedRoad": "Teistel andmetel 80 km/h.",
        "rateOfFire": "Kiire režiim 550–800, aeglane 200–300 lasku/min.",
        "atgmRange": "Fagot 9M111: 70–2000 m · 9M111M: 75–2500 m · Konkurs 9M113: 70–4000 m.",
        "cannonRangeSoft": "Efektiivne 2000 m, maksimaalne 4000 m.",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-2", "url": "https://odin.t2com.army.mil/WEG/Asset/ffe2837b4c03ff3bb6860fdd342bf0fc", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMD-2", "url": "https://en.wikipedia.org/wiki/BMD-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9K111 Fagot", "url": "https://en.wikipedia.org/wiki/9K111_Fagot", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"},
        {"name": "United24 Media: New BMD-2M deliveries help Russia offset losses, not armor weaknesses (Jun 2026)", "url": "https://united24media.com/world/new-bmd-2m-deliveries-help-russia-offset-losses-not-armor-weaknesses-19540", "retrieved": "2026-11-25"}
      ]
    },
    "BMD-1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantvägede reservüksus",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhudessantvägede ujuv lahingumasin.",
        "crew": "3 + 4",
        "combatWeight": 7.5,
        "length": 5.4,
        "width": 2.63,
        "height": 1.62,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 320,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 1.6,
        "airDroppable": true,
        "caliber": 73,
        "mainArmament": "73 mm 2A28 „Grom“ sileraudne kahur (40 lasku), laadimisautomaat",
        "atgm": "9M14 Malyutka (AT-3)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (1500 lasku)",
        "atgmRange": {"min": 500, "max": 3000},
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumkere: esiosa 15 mm, mujal 10 mm. Keevitatud terastorn: esiosa 23 mm, küljed 19 mm, taga 13 mm, katus 6 mm."
      },
      "notes": {
        "airDroppable": "Langevarjusüsteem PRSM-916 / PRSM-925, heitekõrgus 500–1500 m.",
        "mainArmament": "Laskemoon: 16 OG-15V (HE-Frag) + 24 PG-15V (HEAT).",
        "rateOfFire": "8–10 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-1", "url": "https://odin.t2com.army.mil/WEG/Asset/7f2e9dd3ec2de0cad0ee5dd1d9574b8f", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMD-1", "url": "https://en.wikipedia.org/wiki/BMD-1", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon; Merejalavägi; Õhudessantväed",
        "productionStatus": {"status": ["stocks"], "asOf": 2023},
        "purpose": "Ujuv jalaväe lahingumasin.",
        "crew": "3 + 7",
        "combatWeight": 14.3,
        "length": 6.735,
        "width": 3.15,
        "height": 2.45,
        "engine": "UTD-20/3 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.5,
        "caliber": 30,
        "mainArmament": "30 mm 2A42 automaatkahur (500 lasku)",
        "atgm": "9M113 Konkurs (AT-5); ekspordimudelitel 9K111 Fagot (AT-4)",
        "atgmPenetration": "Konkurs 600–800 mm, Fagot 400–600 mm (RHA)",
        "rateOfFire": 800,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2000 lasku)",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud teras 5–19 mm, kere esiosas lisaks alumiiniumplaat; torn 23–33 mm"
      },
      "notes": {
        "range": "Teistel andmetel 600 km.",
        "rateOfFire": "Kiire režiim 550–800, aeglane 200–300 lasku/min.",
        "atgmRange": "Konkurs 9M113: 70–4000 m · Fagot 9M111: 70–2000 m (9M111M kuni 2500 m).",
        "cannonRangeSoft": "Efektiivne 2000 m, maksimaalne 4000 m.",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-2", "url": "https://odin.t2com.army.mil/WEG/Asset/0463e5419617d63ff6dc58ed40babd01", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-2", "url": "https://en.wikipedia.org/wiki/BMP-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"},
        {"name": "Focus.ua: Remont i modernizatsiya – rossiyskie oruzheyniki snabzhayut armiyu BMP-2M uskorennymi tempami (Nov 2023)", "url": "https://focus.ua/voennye-novosti/607795-remont-i-modernizaciya-rossiyskie-oruzheyniki-snabzhayut-armiyu-bmp-2m-uskorennymi-tempami", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Ujuv jalaväe lahingumasin (kasutusel alates 1966. aastast).",
        "crew": "3 + 8",
        "combatWeight": 13.5,
        "length": 6.735,
        "width": 2.94,
        "height": 2.15,
        "engine": "UTD-20 V6 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 2.2,
        "caliber": 73,
        "mainArmament": "73 mm 2A28 „Grom“ sileraudne kahur (40 lasku), laadimisautomaat",
        "atgm": "9M14 Malyutka (AT-3), 4 raketti; BMP-1P: 9M111 Fagot / 9M113 Konkurs",
        "atgmPenetration": "Malyutka kuni 460 mm (9M14P), Fagot/Konkurs 400–800 mm (RHA)",
        "rateOfFire": 8,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2000 lasku)",
        "mainGunRange": 500,
        "atgmRange": {"min": 500, "max": 3000},
        "mgRange": 1500,
        "armor": "Keevitatud valtsitud teras: kere kuni 19 mm, torn 23 mm"
      },
      "notes": {
        "power": "UTD-23 mootoriga moderniseeritud masinal 360 hj.",
        "maxSpeedWater": "7–8 km/h.",
        "range": "Teistel andmetel 600 km (maastikul 500 km).",
        "mainGunRange": "2A28 Grom: lahinguoludes efektiivne kuni 500 m; maksimaalne laskekaugus 4500 m.",
        "atgmRange": "9M14 Malyutka: 500–3000 m · BMP-1P (9M111/9M113): 70–4000 m.",
        "armor": "Teistel andmetel 6–33 mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-1", "url": "https://odin.t2com.army.mil/WEG/Asset/cf0e6eb4267d8a3e60d66101379a8149", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-1", "url": "https://en.wikipedia.org/wiki/BMP-1", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M14 Malyutka", "url": "https://en.wikipedia.org/wiki/9M14_Malyutka", "retrieved": "2026-10-07"},
        {"name": "Jamestown EDM: Russia Exhausts Soviet-Era Arms Storage Bases (Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-3": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ujuv jalaväe lahingumasin.",
        "crew": "3 + 7",
        "combatWeight": 18.7,
        "length": 7.14,
        "width": 3.23,
        "height": 2.65,
        "engine": "UTD-29M diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 2.5,
        "caliber": 100,
        "mainArmament": "100 mm 2A70 kahur-raketiheitja (40 lasku) + 30 mm 2A72 automaatkahur (500 lasku)",
        "atgm": "9M117 Bastion (AT-10) läbi 100 mm raua, 8 raketti",
        "atgmPenetration": "550–750 mm (RHA, sõltuvalt versioonist)",
        "rateOfFire": 10,
        "secondaryArmament": "3 × 7,62 mm PKT (1 koaksiaalne, 2 kere esinurkades), 2500 lasku",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 2000,
        "cannonRangeAir": 4000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam: kere esiosa kaitseb 30 mm soomusläbistava mürsu eest, küljed ja tagaosa 14,5 mm eest; torn 30–35 mm."
      },
      "notes": {
        "length": "Kere 6,715 m.",
        "height": "Torni katuseni 2,30 m.",
        "rateOfFire": "2A70: 8–10 lasku/min.",
        "mainGunRange": "2A70 OF-mürsk (3OF32): 300–4000 m; maksimaalne sihtimiskaugus 5000 m.",
        "atgmRange": "9M117 Bastion / 9M117M Kan: 100–4000 m · 9M117M1 Arkan: kuni 5500 m.",
        "cannonRangeArmored": "2A72 30 mm automaatkahur (ka maa- ja õhusihtmärgi read)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-3", "url": "https://odin.t2com.army.mil/WEG/Asset/822df89dbe778cd601cb1e8cee707585", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-3", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Army Receives New BMP-3s With Additional Protection and Electronic Warfare (Dec 2025)", "url": "https://militarnyi.com/en/news/russian-army-receives-new-bmp-3s-with-additional-protection-and-electronic-warfare/", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-60": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Reservüksus",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Nõukogude 8×8 soomustransportöör. Praegu kasutatakse seda peamiselt liikuva juhtimispunkti, suurtükiväe eesvaatluse ja sidemasinana.",
        "crew": "2 + 14",
        "combatWeight": 10.3,
        "length": 7.56,
        "width": 2.825,
        "height": 2.31,
        "engine": "2 × GAZ-49B bensiinimootor",
        "power": 180,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.4,
        "trench": 2,
        "caliber": 14.5,
        "mainArmament": "14,5 mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2500 lasku)",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud teras: kere esiosa 7–9 mm, küljed 7 mm, põhi 5 mm; torn esiosa 10 mm, küljed 7 mm"
      },
      "notes": {
        "crew": "BTR-60PB: 3 + 14.",
        "power": "2 × 90 hj.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-60", "url": "https://odin.t2com.army.mil/WEG/Asset/547812768252900f3a32aaebe26dc418", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-60", "url": "https://en.wikipedia.org/wiki/BTR-60", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: KPV heavy machine gun", "url": "https://en.wikipedia.org/wiki/KPV_heavy_machine_gun", "retrieved": "2026-10-07"},
        {"name": "Jamestown EDM: Russia Exhausts Soviet-Era Arms Storage Bases (Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Pro-Russian troops continue to use in Ukraine old Soviet BTR-60PB, BTR-70 APCs (Apr 2023)", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/pro-russian-troops-continue-to-use-in-ukraine-old-soviet-btr-60pb-btr-70-apcs", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Forbes – Russia still has over 2,300 decaying BTRs in storage (Mar 2025)", "url": "https://euromaidanpress.com/?p=329508", "retrieved": "2026-11-25"},
        {"name": "Defence24: Rosjanie przywracają do służby kolejne poradzieckie transportery (Oct 2025)", "url": "https://defence24.pl/sily-zbrojne/rosjanie-przywracaja-do-sluzby-kolejne-poradzieckie-transportery", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-70": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Reservüksus",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "8×8 soomustransportöör.",
        "crew": "2 + 9",
        "combatWeight": 11.5,
        "length": 7.535,
        "width": 2.8,
        "height": 2.235,
        "engine": "2 × ZMZ-4905 bensiinimootor",
        "power": 240,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "caliber": 14.5,
        "mainArmament": "14,5 mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2000 lasku)",
        "hmgRange": 3000,
        "mgRange": 1000,
        "armor": "Keevitatud teras 6–10 mm (esiosa 9 mm, küljed 7 mm)"
      },
      "notes": {
        "crew": "Teistel andmetel 3 + 7.",
        "height": "Teistel andmetel 2,32 m.",
        "power": "2 × 120 hj.",
        "range": "400–600 km.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000 m.",
        "mgRange": "Efektiivne laskekaugus."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-70", "url": "https://odin.t2com.army.mil/WEG/Asset/146a46d960de31b2409f05b05df2ed2d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-70", "url": "https://en.wikipedia.org/wiki/BTR-70", "retrieved": "2026-10-08"},
        {"name": "Jamestown EDM: Russia Exhausts Soviet-Era Arms Storage Bases (Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Pro-Russian troops continue to use in Ukraine old Soviet BTR-60PB, BTR-70 APCs (Apr 2023)", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/pro-russian-troops-continue-to-use-in-ukraine-old-soviet-btr-60pb-btr-70-apcs", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Forbes – Russia still has over 2,300 decaying BTRs in storage (Mar 2025)", "url": "https://euromaidanpress.com/?p=329508", "retrieved": "2026-11-25"},
        {"name": "Ukrinform: Russia nearing exhaustion of Soviet-era armored vehicles – ISW (Jun 2025)", "url": "https://www.ukrinform.net/rubric-ato/4009043-russia-nearing-exhaustion-of-sovietera-armored-vehicles-isw.html", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-80": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Ujuv 8×8 ratassoomustransportöör (kasutusel alates 1985. aastast).",
        "crew": "3 + 7",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.46,
        "engine": "KamAZ-7403 diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 42,
        "verticalStep": 0.5,
        "trench": 2,
        "caliber": 14.5,
        "mainArmament": "14,5 mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2500 lasku)",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Kaldsoomus kuni 10 mm: esiosa kaitseb 12,7 mm, küljed 7,62 mm soomusläbistava kuuli eest; torn 12,7 mm ja kildude eest."
      },
      "notes": {
        "maxSpeedRoad": "Teistel andmetel 80–90 km/h.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-80", "url": "https://odin.t2com.army.mil/WEG/Asset/a4fd3058789fe5d3485f4b5013237e89", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: KPV heavy machine gun", "url": "https://en.wikipedia.org/wiki/KPV_heavy_machine_gun", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Forbes – Russia still has over 2,300 decaying BTRs in storage (Mar 2025)", "url": "https://euromaidanpress.com/?p=329508", "retrieved": "2026-11-25"},
        {"name": "Ukrinform: Russia nearing exhaustion of Soviet-era armored vehicles – ISW (Jun 2025)", "url": "https://www.ukrinform.net/rubric-ato/4009043-russia-nearing-exhaustion-of-sovietera-armored-vehicles-isw.html", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-82A": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ratassoomustransportöör, BTR-80 versioon (kasutusel alates 2013. aastast).",
        "crew": "3 + 7",
        "combatWeight": 15.4,
        "length": 7.65,
        "width": 2.95,
        "height": 2.8,
        "engine": "KamAZ-740.14-300 turbodiisel",
        "power": 300,
        "maxSpeedRoad": 100,
        "maxSpeedOffroad": 65,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "caliber": 30,
        "mainArmament": "30 mm 2A72 automaatkahur (kahe etteandega)",
        "secondaryArmament": "7,62 mm PKTM koaksiaalne; 2 × 3 81 mm suitsugranaadiheitjat",
        "armor": "Esiosa kaitseb 12,7 mm, ümberringi 7,62 mm kuuli ja kildude eest; killuvooder"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-82", "url": "https://odin.t2com.army.mil/WEG/Asset/a27afe2e5a4fe5a7a2ef8df88c926c9d", "retrieved": "2026-10-08"},
        {"name": "Army Technology: BTR-82A", "url": "https://www.army-technology.com/projects/btr-82a-armoured-personnel-carrier/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "United24 Media: Production of Russia's BTR-82 hits Soviet-era scale (Nov 2025)", "url": "https://united24media.com/latest-news/production-of-russias-btr-82-hits-soviet-era-scale-13024", "retrieved": "2026-11-25"}
      ]
    },
    "MT-LB": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Ujuv roomiksoomuk (kasutusel alates 1970. aastatest), mida kasutatakse soomustransportööri, suurtükiveduki ja sanitaarmasinana.",
        "crew": "2 + 11",
        "combatWeight": 11.9,
        "length": 6.454,
        "width": 2.86,
        "height": 1.865,
        "engine": "YaMZ-238V V8 diisel",
        "power": 240,
        "maxSpeedRoad": 61.5,
        "maxSpeedWater": 4.5,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.61,
        "trench": 2.41,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKT väikeses tornis (2000 lasku)",
        "rateOfFire": 800,
        "secondaryArmament": "MT-LBVM/VMK: 12,7 mm NSVT/Kord; MT-LBMB: 30 mm automaatkahur",
        "mgRange": 1500,
        "armor": "Keevitatud teras 7–14 mm"
      },
      "notes": {
        "maxSpeedWater": "Liigub vees roomikutega. Teistel andmetel 5–6 km/h.",
        "rateOfFire": "700–800 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-LB", "url": "https://odin.t2com.army.mil/WEG/Asset/6eba8568bfb1ffa74a03edc24db3a174", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Empties One of Its Largest MT-LB Storage Bases (Nov 2025)", "url": "https://militarnyi.com/en/news/russia-empties-one-of-its-largest-mt-lb-storage-bases", "retrieved": "2026-11-25"},
        {"name": "Jamestown EDM: Russia Exhausts Soviet-Era Arms Storage Bases (Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"},
        {"name": "Trench Art (David Axe): Russia Is Burning Through One Of Its Last Stocks of Old Cold War Vehicles (Apr 2025)", "url": "https://www.trenchart.us/p/russia-is-burning-through-one-of", "retrieved": "2026-11-25"}
      ]
    },
    "MT-LBu": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Soomustatud roomiktransportöör, paljude erisoomukite alusplatvorm.",
        "crew": "2 + 6",
        "combatWeight": 15.55,
        "length": 7.21,
        "width": 2.85,
        "height": 1.905,
        "engine": "YaMZ-238N V8 diisel",
        "power": 300,
        "maxSpeedRoad": 61.5,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 4.5,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.61,
        "trench": 2.41,
        "mainArmament": "Põhiversioonil puudub (katuse keskel ava tornile); mõnel variandil 7,62 mm PKT",
        "armor": "Keevitatud teras 3–10 mm"
      },
      "notes": {
        "combatWeight": "Sõltub paigaldatud eriseadmetest.",
        "maxSpeedWater": "Liigub vees roomikutega. Teistel andmetel 5–6 km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-LBu", "url": "https://odin.t2com.army.mil/WEG/Asset/a58fe6021604d74d51e48d93eff4feda", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-07"},
        {"name": "Trench Art (David Axe): Russia Is Burning Through One Of Its Last Stocks of Old Cold War Vehicles (Apr 2025)", "url": "https://www.trenchart.us/p/russia-is-burning-through-one-of", "retrieved": "2026-11-25"}
      ]
    },
    "BMO-T": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Leegiheitjarühm",
        "purpose": "Raske soomustransportöör leegiheitjate veoks ja toetuseks.",
        "crew": "2 + 7",
        "combatWeight": 43.9,
        "length": 7.22,
        "width": 3.787,
        "height": 2.24,
        "engine": "V-84M diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 35,
        "range": 710,
        "mainArmament": "12,7 mm raskekuulipilduja (150 lasku)",
        "secondaryArmament": "30 × RPO-A „Šmel“ termobaarilist leegiheitjat (dessandi relv)",
        "armor": "T-72 kere; ees Kontakt-5 aktiivsoomus, külgedel vahesoomus",
        "chassis": "T-72"
      },
      "notes": {
        "maxSpeedOffroad": "Maastikul 30–40 km/h.",
        "range": "Maastikul 427–657 km."
      },
      "sources": [
        {"name": "Tanks Encyclopedia: BMO-T", "url": "https://tanks-encyclopedia.com/bmo-t-heavy-armored-flamethrower-personnel-carrier/", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "BMD-4M": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantpataljon",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Õhudessantvägede ujuv lahingumasin.",
        "crew": "3 + 6",
        "combatWeight": 13.5,
        "length": 6.4,
        "width": 3.1,
        "height": 2.5,
        "engine": "UTD-29 diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "gradient": 70,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 1.8,
        "caliber": 100,
        "mainArmament": "100 mm 2A70 kahur-raketiheitja + 30 mm 2A72 automaatkahur (moodul Bakhcha-U)",
        "atgm": "9M117M1 Arkan läbi 100 mm raua",
        "atgmPenetration": "Kuni 750 mm (RHA, aktiivsoomuse taga)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2500 lasku)",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 5500},
        "cannonRangeSoft": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam keraamiliste plaatidega: esiosa kaitseb 12,7 mm, küljed 7,62 mm kuuli eest"
      },
      "notes": {
        "crew": "Andmed kehtivad BMD-4 kohta; BMD-4M-il on sama UTD-29 mootor ja relvamoodul.",
        "length": "Kahur ees; kere 6,1 m.",
        "rateOfFire": "2A70: kuni 10 lasku/min.",
        "mainGunRange": "2A70 OF-mürsk: 300–4000 m.",
        "cannonRangeSoft": "2A72 30 mm automaatkahur: efektiivne 2000 m, maksimaalne 4000 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-4", "url": "https://odin.t2com.army.mil/WEG/Asset/0b0252ef60737282417f02e725ae471d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMD-4", "url": "https://en.wikipedia.org/wiki/BMD-4", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Russia continues to strengthen its army in Ukraine with delivery of new batch of BMD-4M and BMP-3 (2024)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2024/russia-continues-to-strengthen-its-army-in-ukraine-with-delivery-of-new-batch-of-bmd-4m-and-bmp-3", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-D": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Õhudessantvägede ujuv roomiksoomustransportöör.",
        "crew": "3 + 10",
        "combatWeight": 8.2,
        "length": 6.74,
        "width": 2.63,
        "height": 2.05,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 61,
        "maxSpeedOffroad": 35,
        "maxSpeedWater": 10,
        "range": 450,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.7,
        "trench": 2.5,
        "airDroppable": true,
        "caliber": 7.62,
        "mainArmament": "2 × 7,62 mm PKT kere esinurkades (2000 lasku)",
        "secondaryArmament": "AGS-17 või AGS-30 automaatgranaadiheitja (mõnel masinal)",
        "armor": "Keevitatud alumiiniumsoomus: esiosa (15 mm) kaitseb 12,7 mm kuuli eest 200 m kauguselt, küljed 7,62 mm kuuli eest"
      },
      "notes": {
        "crew": "Teistel andmetel 1 + 13.",
        "combatWeight": "Tühimass 8 t. Teistel andmetel 8,5 t.",
        "width": "Teistel andmetel 2,94 m.",
        "height": "Teistel andmetel 1,67 m.",
        "range": "Teistel andmetel 500 km, vees 116 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-D", "url": "https://odin.t2com.army.mil/WEG/Asset/4c664f7c3b53fc81f1af53bbeedd4e1f", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: New delivery of BMD-2 and BTR-D armored vehicles for Russian airborne forces in Ukraine (2024)", "url": "https://armyrecognition.com/news/army-news/army-news-2024/new-delivery-of-bmd-2-and-btr-d-armored-vehicles-for-russian-airborne-forces-in-ukraine", "retrieved": "2026-11-25"},
        {"name": "Ukrinform: Russia nearing exhaustion of Soviet-era armored vehicles – ISW (Jun 2025)", "url": "https://www.ukrinform.net/rubric-ato/4009043-russia-nearing-exhaustion-of-sovietera-armored-vehicles-isw.html", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-MDM": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantpataljon",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Õhudessantvägede ujuv roomiksoomustransportöör isikkoosseisu ja varustuse veoks.",
        "crew": "2 + 13",
        "combatWeight": 13.2,
        "length": 6.085,
        "width": 3.15,
        "height": 2.7,
        "engine": "UTD-29T diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 1.5,
        "airDroppable": true,
        "caliber": 7.62,
        "mainArmament": "2 × 7,62 mm PKTM kere esinurkades (4000 lasku)",
        "rateOfFire": 800,
        "mgRange": 1500,
        "armor": "Keevitatud alumiinium, vahedega keraamilised lisaplaadid; tornil kaks terasplaati ees ja külgedel"
      },
      "notes": {
        "range": "Maastikul 350 km.",
        "mainArmament": "Ülema juures 7,62 mm (või 12,7 mm) kuulipilduja ja ees paremal 7,62 mm PKTM.",
        "rateOfFire": "700–800 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-MDM Rakushka-M", "url": "https://odin.t2com.army.mil/WEG/Asset/3af6301b891ad5c873fe2a9a697e1bec", "retrieved": "2026-10-28"},
        {"name": "Army Technology: BTR-MDM", "url": "https://www.army-technology.com/projects/btr-mdm-armoured-personnel-carrier/", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Russian Airborne Forces boost anti-drone capabilities with upgraded BTR-MDM Rakushka armored vehicles (Dec 2024)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2024/russian-airborne-forces-boost-anti-drone-capabilities-with-upgraded-btr-mdm-rakushka-armored-vehicles", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: BMD-4", "url": "https://en.wikipedia.org/wiki/BMD-4", "retrieved": "2026-11-25"}
      ]
    },
    "T-62": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Reserv- ja mobilisatsiooniüksus; Vabatahtlike pataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Nõukogude lahingutank.",
        "crew": "4",
        "combatWeight": 40,
        "length": 9.33,
        "width": 3.3,
        "height": 2.4,
        "engine": "V-55-5 V-12 diisel",
        "power": 580,
        "maxSpeedRoad": 50,
        "maxSpeedOffroad": 40,
        "range": 450,
        "amphibious": false,
        "gradient": 60,
        "verticalStep": 0.8,
        "trench": 2.8,
        "fording": 1.4,
        "caliber": 115,
        "mainArmament": "115 mm U-5TS (2A20) sileraudne kahur (40 lasku)",
        "rateOfFire": 10,
        "atgm": "T-62M jt: 9K116-2 Šeksna (AT-12) läbi 115 mm raua",
        "atgmPenetration": "Umbes 650 mm (RHA)",
        "secondaryArmament": "7,62 mm PKT koaksiaalne (2500 lasku); 12,7 mm DŠK õhutõrjekuulipilduja (500 lasku)",
        "mainGunRange": 2260,
        "atgmRange": {"min": 100, "max": 4000},
        "hmgRange": 2000,
        "armor": "Kere: esiosa 102 mm, küljed 79 mm, taga 46 mm, katus 31 mm. Torn: esiosa 242 mm, küljed 153 mm, taga 97 mm, katus 40 mm."
      },
      "notes": {
        "length": "Kahur ees; kere 6,63 m.",
        "power": "Hiljem 620 hj.",
        "range": "Pinnasteel 320 km, lisapaakidega 650 km.",
        "fording": "Snorkliga 5,5 m.",
        "rateOfFire": "6–10 lasku/min.",
        "mainGunRange": "Otsetule kaugus: 2 m kõrgune sihtmärk 1870 m, 3 m kõrgune 2260 m.",
        "atgmRange": "Ainult moderniseeritud variandid (T-62M, T-62MV jt).",
        "hmgRange": "DŠK."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-62", "url": "https://odin.t2com.army.mil/WEG/Asset/13b258159daa62abea0fcc4d720f288e", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-62", "url": "https://en.wikipedia.org/wiki/T-62", "retrieved": "2026-10-07"},
        {"name": "GlobalSecurity: AT-12 Sheksna", "url": "https://www.globalsecurity.org/military/world/russia/at-12.htm", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: DShK", "url": "https://en.wikipedia.org/wiki/DShK", "retrieved": "2026-10-07"},
        {"name": "Kyiv Independent: Russia revives obsolete T-62 tanks amid equipment shortages, Ukrainian intel says (Jun 2025)", "url": "https://kyivindependent.com/russia-revives-obsolete-t-62-tanks-amid-equipment-shortages-ukrainian-intel-says-06-2025/amp", "retrieved": "2026-11-25"}
      ]
    },
    "T-72": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankipataljon; Tankibrigaad",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Nõukogude lahingutank (kasutusel alates 1973. aastast).",
        "crew": "3",
        "combatWeight": 44.5,
        "length": 9.53,
        "width": 3.59,
        "height": 2.23,
        "engine": "V-12 diisel (V-46-6; moderniseeritud variantidel V-92S2F)",
        "power": 780,
        "maxSpeedRoad": 60,
        "range": 500,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 125,
        "mainArmament": "125 mm 2A46M / 2A46M-5 sileraudne kahur (39 lasku, neist 22 laadimisautomaadis)",
        "rateOfFire": 8,
        "atgm": "T-72B seeria: 9M119 Svir (AT-11) läbi 125 mm raua",
        "atgmPenetration": "700–900 mm (RHA)",
        "secondaryArmament": "7,62 mm PKT koaksiaalne (1500 lasku); 12,7 mm õhutõrjekuulipilduja (1200 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 75, "max": 4000},
        "hmgRange": 2500,
        "hmgRangeAir": 1500,
        "mgRange": 1500,
        "armor": "Kere esiosa kihiline: 60 mm teras + 105 mm tekstoliit + 50 mm teras; torn umbes 110 mm valatud teras. Aktiivsoomus: Kontakt-5 (T-72B3), Relikt (T-72B3M)."
      },
      "notes": {
        "length": "Kahur ees; kere 6,95 m.",
        "range": "Lisakütusega 650–700 km.",
        "fording": "Ettevalmistusega 5 m.",
        "rateOfFire": "Käsitsi laadides 1–2 lasku/min.",
        "mainGunRange": "APFSDS ja HEAT 2000–3000 m; HE kuni 5000 m.",
        "atgmRange": "Ainult T-72B ja uuemad (T-72B1 ei saa raketti lasta).",
        "secondaryArmament": "Allikate järgi DŠK või NSVT.",
        "hmgRange": "DŠK efektiivne laskekaugus.",
        "hmgRangeAir": "NSVT."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-72", "url": "https://odin.t2com.army.mil/WEG/Asset/805d8d9f2e9c02fab6a81028d4f77d0b", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-72", "url": "https://en.wikipedia.org/wiki/T-72", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M119 Svir", "url": "https://en.wikipedia.org/wiki/9M119_Svir", "retrieved": "2026-10-07"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia delivers more T-90M and T-72B3M tanks as it rebuilds combat power in Ukraine (Sept 2026)", "url": "https://www.armyrecognition.com/news/army-news/2026/russia-delivers-more-t-90m-and-t-72b3m-tanks-as-it-rebuilds-combat-power-in-ukraine", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Plans to Repair and Upgrade More Than 800 T-72 Tanks Over the Next Decade (Oct 2025)", "url": "https://militarnyi.com/en/news/russia-plans-to-repair-and-upgrade-more-than-800-t-72-tanks-over-the-next-decade/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: OSINT Study – Russia Has Exhausted Over Half of Its Stockpiles of Armored Vehicles and Artillery (Oct 2025)", "url": "https://militarnyi.com/en/news/osint-study-russia-has-exhausted-over-half-of-its-stockpiles-of-armored-vehicles-and-artillery/", "retrieved": "2026-11-25"}
      ]
    },
    "T-80": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankidiviis; Merejalavägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Nõukogude lahingutank (kasutusel alates 1976. aastast).",
        "crew": "3",
        "combatWeight": 43.7,
        "length": 9.65,
        "width": 3.58,
        "height": 2.22,
        "engine": "GTD-1000TF gaasiturbiin",
        "power": 1100,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 48,
        "range": 335,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 1,
        "trench": 2.85,
        "fording": 1.8,
        "caliber": 125,
        "mainArmament": "125 mm 2A46M-1 sileraudne kahur (36 lasku), karussell-laadimisautomaat",
        "rateOfFire": 8,
        "atgm": "9K112 Kobra (AT-8 Songster) läbi 125 mm raua",
        "atgmPenetration": "600 mm (RHA)",
        "secondaryArmament": "7,62 mm PKT koaksiaalne (1250 lasku); 12,7 mm NSVT (500 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 100, "max": 4000},
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "mgRange": 1500,
        "armor": "Kombineeritud soomus (Combination K): kere umbes 440–450 mm, torn umbes 550 mm ekvivalent; Kontakt-1 aktiivsoomus"
      },
      "notes": {
        "crew": "Andmed kehtivad T-80BV kohta. T-80U: 46 t, GTD-1250 (1250 hj), 9M119 Refleks, Kontakt-5.",
        "length": "Kahur ees; kere 6,98 m.",
        "fording": "Ettevalmistusega 5 m.",
        "rateOfFire": "6–8 lasku/min; karusselli laadimine 13–15 s.",
        "mainGunRange": "APFSDS ja HEAT 2000–3000 m; kahuri max 4000 m; HE kuni 5000 m.",
        "maxSpeedOffroad": "T-80U andmed; teistel andmetel keskmine maastikukiirus 55 km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-80BV", "url": "https://odin.t2com.army.mil/WEG/Asset/6b3d145b802982380c3feaf1f4efa9e4", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-80", "url": "https://en.wikipedia.org/wiki/T-80", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Russia delivers more T-90M and T-72B3M tanks as it rebuilds combat power in Ukraine (Sept 2026)", "url": "https://www.armyrecognition.com/news/army-news/2026/russia-delivers-more-t-90m-and-t-72b3m-tanks-as-it-rebuilds-combat-power-in-ukraine", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: OSINT Study – Russia Has Exhausted Over Half of Its Stockpiles of Armored Vehicles and Artillery (Oct 2025)", "url": "https://militarnyi.com/en/news/osint-study-russia-has-exhausted-over-half-of-its-stockpiles-of-armored-vehicles-and-artillery/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian forces in Ukraine reinforced with additional T-80BVM model 2023 tanks (Feb 2024)", "url": "https://www.armyrecognition.com/ukraine_-_russia_conflict_war_2022/russian_forces_in_ukraine_reinforced_with_additional_t-80bvm_model_2023_tanks.html", "retrieved": "2026-11-25"}
      ]
    },
    "T-90A": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurbrigaad",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Vene lahingutank, T-90 versioon.",
        "crew": "3",
        "combatWeight": 46,
        "length": 9.63,
        "width": 3.78,
        "height": 2.2,
        "engine": "V-92S2 diisel",
        "power": 1000,
        "maxSpeedRoad": 60,
        "range": 550,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.8,
        "trench": 2.85,
        "fording": 1.2,
        "caliber": 125,
        "mainArmament": "125 mm 2A46M sileraudne kahur (44 lasku), karussell-laadimisautomaat",
        "rateOfFire": 7,
        "atgm": "9M119 Svir / 9M119M Refleks (AT-11 Sniper-B) läbi 125 mm raua, 6 raketti",
        "atgmPenetration": "700–900 mm (RHA)",
        "secondaryArmament": "12,7 mm Kord (300 lasku); 7,62 mm PKT koaksiaalne (1500 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 100, "max": 5000},
        "hmgRange": 2000,
        "mgRange": 1500,
        "armor": "Teras-komposiit + Kontakt-5 aktiivsoomus: APFSDS vastu umbes 800–830 mm, HEAT vastu 1150–1550 mm ekvivalent. Shtora-1 kaitsesüsteem."
      },
      "notes": {
        "length": "Kahur ees; kere 6,86 m.",
        "fording": "Ettevalmistusega 5 m.",
        "rateOfFire": "Laadimisautomaadiga; käsitsi 2–3 lasku/min.",
        "mainGunRange": "APFSDS 2000–3000 m (öösel 2600 m); HEAT ja HE kuni 4000 m.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-90A / T-90S", "url": "https://odin.t2com.army.mil/WEG/Asset/fe236b6992bb19af1774a93f3b52b423", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Euromaidan Press: Russia turns old tanks into “new” T-90Ms—and it’s almost out of old ones (Oct 2025)", "url": "https://euromaidanpress.com/2025/10/04/t-90as-into-t-90ms/", "retrieved": "2026-11-26"}
      ]
    },
    "T-90M": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankidiviis; Motolaskurdiviis",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Vene lahingutank, T-90 põhjalikult moderniseeritud versioon.",
        "crew": "3",
        "combatWeight": 46.5,
        "length": 9.63,
        "width": 3.78,
        "height": 2.23,
        "engine": "V-92S2F diisel",
        "power": 1000,
        "maxSpeedRoad": 60,
        "range": 550,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.8,
        "trench": 2.85,
        "fording": 1.2,
        "caliber": 125,
        "mainArmament": "125 mm 2A46M-4 / 2A46M-5 sileraudne kahur (43 lasku)",
        "atgm": "9M119M Refleks (AT-11 Sniper-B) läbi 125 mm raua",
        "atgmPenetration": "Kuni 900 mm",
        "secondaryArmament": "12,7 mm raskekuulipilduja distantsjuhitavas moodulis (Kord / NSVT); 7,62 mm koaksiaalne",
        "mainGunRange": 3000,
        "atgmRange": {"max": 5000},
        "hmgRange": 2000,
        "armor": "Relikt aktiivsoomus; torni alaosas võrksoomus, kere tagaosas kaitsevõre (RPG vastu); aktiivkaitse (segav ja hävitav)"
      },
      "notes": {
        "length": "Kahur ees; kere 6,68 m.",
        "fording": "Ettevalmistusega 5 m.",
        "mainGunRange": "APFSDS ja HEAT 3000 m; HE 4000 m.",
        "secondaryArmament": "Allikate järgi NSVT või Kord.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-90M", "url": "https://odin.t2com.army.mil/WEG/Asset/ca2015f698eb0515ae502257e38bfc17", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Russia delivers more T-90M and T-72B3M tanks as it rebuilds combat power in Ukraine (Sept 2026)", "url": "https://www.armyrecognition.com/news/army-news/2026/russia-delivers-more-t-90m-and-t-72b3m-tanks-as-it-rebuilds-combat-power-in-ukraine", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Russia turns old tanks into 'new' T-90Ms (Oct 2025)", "url": "https://euromaidanpress.com/2025/10/04/t-90as-into-t-90ms/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian Defense Ministry deploys 23 new T-90M Proryv-3 main battle tanks in Central District (May 2024)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2024/russian-defense-ministry-deploys-23-new-t-90m-proryv-3-main-battle-tanks-in-central-district-2", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-T": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankipolgu rood",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Soomuk tankide toetamiseks lahingus.",
        "crew": "5",
        "combatWeight": 48,
        "length": 7.2,
        "width": 3.8,
        "height": 3.44,
        "engine": "V-92S2 V-12 mitmekütusediisel",
        "power": 1000,
        "maxSpeedRoad": 60,
        "range": 550,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 30,
        "mainArmament": "2 × 30 mm 2A42 automaatkahur (850 lasku)",
        "rateOfFire": 600,
        "atgm": "4 × 9M120 Ataka-T (laserjuhtimisega)",
        "atgmPenetration": "950 mm (RHA, aktiivsoomuse taga)",
        "secondaryArmament": "7,62 mm PKTM (2000 lasku); 2 × 30 mm automaatgranaadiheitja AG-17D või AGS-30 (kokku 600 granaati)",
        "mainGunRange": 4000,
        "atgmRange": {"max": 6000},
        "mgRange": 1500,
        "armor": "Relikt aktiivsoomus ja lisasoomus; mehitamata torn"
      },
      "notes": {
        "rateOfFire": "Kahe kahuri peale kokku; valitav ka 200 või 300 lasku/min.",
        "fording": "Ettevalmistusega 1,8 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMPT Terminator", "url": "https://odin.t2com.army.mil/WEG/Asset/9f1db2b58ba9e52eb202ed082e26720c", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: BMPT Terminator", "url": "https://en.wikipedia.org/wiki/BMPT_Terminator", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Army Receives New BMPT Terminator Vehicles (Oct 2025)", "url": "https://militarnyi.com/en/news/russian-army-receives-new-bmpt-terminator-vehicles/", "retrieved": "2026-11-25"}
      ]
    },
    "2S1 Gvozdika": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Liikursuurtükipatarei; Merejalavägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "122 mm liikurhaubits (kasutusel alates 1972. aastast) tuletoetuseks.",
        "crew": "4",
        "chassis": "Modifitseeritud MT-LBu",
        "combatWeight": 15.7,
        "length": 7.26,
        "width": 2.85,
        "height": 2.73,
        "engine": "YaMZ-238N diisel",
        "power": 300,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 6,
        "range": 500,
        "amphibious": true,
        "gradient": 77,
        "sideSlope": 55,
        "verticalStep": 0.7,
        "trench": 2.2,
        "caliber": 122,
        "mainArmament": "122 mm 2A31 haubits (40 lasku)",
        "rateOfFire": 5,
        "secondaryArmament": "7,62 mm PK kuulipilduja",
        "directFireRange": 1000,
        "firingRangeMin": 1,
        "firingRange": 15.3,
        "firingRangeExt": 21.9,
        "armor": "Keevitatud teras: kere kuni 15 mm, torn 20 mm"
      },
      "notes": {
        "maxSpeedWater": "Teistel andmetel 4,5 km/h.",
        "mainArmament": "Teistel andmetel 2A18 (D-30 tähis).",
        "rateOfFire": "4–5 lasku/min; püsiv 1–2 lasku/min.",
        "directFireRange": "Kumulatiivmürsk (HEAT-FS) läbistab 460 mm.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S1 Gvozdika", "url": "https://odin.t2com.army.mil/WEG/Asset/08b8cac0bf7658df6cf95d0850fc9a18", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S1 Gvozdika", "url": "https://en.wikipedia.org/wiki/2S1_Gvozdika", "retrieved": "2026-10-07"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2S3 Akatsiya": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Liikursuurtükipataljon; Merejalavägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm liikurhaubits.",
        "crew": "4–6",
        "chassis": "Objekt 123",
        "combatWeight": 27.5,
        "length": 8.4,
        "width": 3.25,
        "height": 3.05,
        "engine": "V-59 diisel",
        "power": 520,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 45,
        "range": 500,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 3,
        "fording": 1,
        "caliber": 152.4,
        "mainArmament": "152 mm 2A33 (D-22) haubits (46 lasku)",
        "rateOfFire": 4,
        "secondaryArmament": "7,62 mm PKT (1000 lasku)",
        "mgRange": 1500,
        "firingRange": 18.5,
        "firingRangeExt": 24,
        "armor": "Kere 15 mm, torn 20 mm"
      },
      "notes": {
        "length": "Kere 7,765 m.",
        "height": "Ilma kuulipildujata 2,615 m.",
        "rateOfFire": "3–4 lasku/min; püsiv 1 lask/min.",
        "firingRangeExt": "Rakettkiirendiga mürsk.",
        "armor": "Teistel andmetel torn ja kere esiosa 30 mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S3 Akatsiya", "url": "https://odin.t2com.army.mil/WEG/Asset/db17bd5d3c8bcab93b89b6408fde38ef", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S3 Akatsiya", "url": "https://en.wikipedia.org/wiki/2S3_Akatsiya", "retrieved": "2026-10-07"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2S19 Msta": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Liikursuurtükipataljon; Suurtükibrigaad",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm liikurhaubits.",
        "crew": "5",
        "chassis": "T-72",
        "combatWeight": 42,
        "length": 11.917,
        "width": 3.584,
        "height": 2.985,
        "engine": "V-84A mitmekütuseline diisel",
        "power": 780,
        "maxSpeedRoad": 60,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 152,
        "mainArmament": "152 mm 2A64 haubits (50 lasku)",
        "rateOfFire": 8,
        "secondaryArmament": "12,7 mm NSVT (500 lasku)",
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "firingRange": 24.7,
        "firingRangeBB": 29,
        "firingRangeExt": 36
      },
      "notes": {
        "length": "Kahur ees; kere 6,04 m.",
        "width": "Ilma põllesteta 3,38 m.",
        "fording": "Ettevalmistusega 5 m.",
        "rateOfFire": "6–8 lasku/min; püsiv 3–4; 2S19M2: 10 lasku/min.",
        "hmgRange": "NSVT.",
        "firingRange": "2S19M2: 30 km.",
        "firingRangeBB": "Põhjagaasigeneraatoriga mürsk OF-91.",
        "firingRangeExt": "Rakettkiirendiga mürsk; 2S19M2: 40 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S19M1 Msta-S", "url": "https://odin.t2com.army.mil/WEG/Asset/5d89ac25a8643d6e283c22f341f000a6", "retrieved": "2026-10-08"},
        {"name": "Army Technology: 2S19 Msta-S", "url": "https://www.army-technology.com/projects/msta/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2S19 Msta", "url": "https://en.wikipedia.org/wiki/2S19_Msta", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-07"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"}
      ]
    },
    "2S9 Nona": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed; Motolaskurpataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhudessantvägede 120 mm liikurmiinipilduja (kasutusel alates 1981. aastast).",
        "crew": "4",
        "chassis": "S-120 (BTR-D baasil)",
        "combatWeight": 8.8,
        "length": 6.02,
        "width": 2.63,
        "height": 2.3,
        "engine": "5D20 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 10,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2,
        "caliber": 120,
        "mainArmament": "120 mm 2A51 miinipilduja (25 lasku)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62 mm PKT (1500 lasku)",
        "mgRange": 1500,
        "directFireRange": 1000,
        "firingRange": 8.85,
        "firingRangeExt": 12.8,
        "armor": "Esiosa kaitseb 12,7 mm, küljed 7,62 mm kuuli eest; torn 16 mm"
      },
      "notes": {
        "length": "Kahur ees; kere 5,89 m.",
        "mainArmament": "Teistel andmetel on 2S9-1M-i relv 2A60 ja laskemoona 40–60 lasku.",
        "rateOfFire": "8–10 lasku/min; püsiv 4 lasku/min.",
        "directFireRange": "Kumulatiivmürsk läbistab 600–650 mm terast kuni 1 km kaugusel.",
        "firingRange": "OF-mürsk 8,85 km; miin 7,15 km.",
        "firingRangeExt": "Pikendatud laskekaugusega moon."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S9-1M Nona-S", "url": "https://odin.t2com.army.mil/WEG/Asset/c8f7d048a361903479ad71de6b46247d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S9 Nona", "url": "https://en.wikipedia.org/wiki/2S9_Nona", "retrieved": "2026-10-07"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: 2S9 Nona-S SO-120", "url": "https://armyrecognition.com/military-products/army/artillery-vehicles-and-weapons/mortar-carrier/2s9-nona-s-russia-uk", "retrieved": "2026-11-26"}
      ]
    },
    "2S4 Tjulpan": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaad",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "240 mm raske liikurmiinipilduja kindlustatud sihtmärkide tabamiseks.",
        "crew": "4",
        "combatWeight": 27.5,
        "length": 7.94,
        "width": 3.25,
        "height": 3.225,
        "engine": "V-59 V-12 diisel",
        "power": 520,
        "maxSpeedRoad": 60,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 1.1,
        "trench": 2.79,
        "caliber": 240,
        "mainArmament": "240 mm 2B8 miinipilduja (40 lasku)",
        "secondaryArmament": "PKT kuulipilduja (1500 lasku)",
        "rateOfFire": 1,
        "firingRange": 9.65,
        "firingRangeExt": 18,
        "firingRangeGuided": 9.2
      },
      "notes": {
        "firingRangeGuided": "Laserjuhitav „Smeltšak“: 3,6–9,2 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S4 Tjulpan", "url": "https://odin.t2com.army.mil/WEG/Asset/d219603fc9b5137cd037eb4896872f59", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2S4 Tyulpan", "url": "https://en.wikipedia.org/wiki/2S4_Tyulpan", "retrieved": "2026-10-07"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2S7 Pion": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaadi raske suurtükipataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Nõukogude 203 mm liikurkahur.",
        "crew": "7",
        "chassis": "Objekt 216",
        "combatWeight": 46.5,
        "length": 13.12,
        "width": 3.38,
        "height": 3,
        "engine": "V-46-I V-12 turbodiisel",
        "power": 840,
        "maxSpeedRoad": 51,
        "range": 500,
        "amphibious": false,
        "gradient": 40,
        "sideSlope": 20,
        "verticalStep": 0.7,
        "trench": 2.5,
        "fording": 1.2,
        "caliber": 203,
        "mainArmament": "203 mm 2A44 kahur (L/56,2)",
        "rateOfFire": 1.5,
        "firingRange": 37.5,
        "firingRangeExt": 47.5,
        "armor": "Keevitatud teras 10 mm"
      },
      "notes": {
        "crew": "Koos laskemoonamasina meeskonnaga 14.",
        "length": "Kahur ees; kere 10,5 m.",
        "range": "Teistel andmetel 650 km.",
        "mainArmament": "Masinas 8 lasku (teistel andmetel 4; 2S7M: 8).",
        "rateOfFire": "2S7M: 2,5 lasku/min.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S7 Pion", "url": "https://odin.t2com.army.mil/WEG/Asset/debeca79b7cbf053d9ded62c6c859dbf", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S7 Pion", "url": "https://en.wikipedia.org/wiki/2S7_Pion", "retrieved": "2026-10-07"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2S43 Malva": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaadi suurtükipataljon",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "152 mm liikurhaubits.",
        "crew": "5",
        "chassis": "BAZ-6910-027 „Voštšina“ 8×8",
        "combatWeight": 32,
        "length": 13,
        "width": 2.75,
        "height": 3.1,
        "engine": "YaMZ-8424.10 diisel",
        "power": 470,
        "maxSpeedRoad": 80,
        "range": 1000,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.6,
        "trench": 2,
        "fording": 1.4,
        "caliber": 152,
        "mainArmament": "152 mm 2A64 haubits (30 lasku)",
        "rateOfFire": 7,
        "firingRange": 24.5,
        "firingRangeGuided": 50,
        "armor": "Soomustatud kabiin (kaitse kergrelvade tule eest)"
      },
      "notes": {
        "chassis": "Teistel andmetel BAZ-6610-02.",
        "mainArmament": "Teistel andmetel 2A64 või 2A88.",
        "firingRangeGuided": "3OF95 Krasnopol-M2: üle 50 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S43 Malva", "url": "https://odin.t2com.army.mil/WEG/Asset/b59fadc3a1a4539f7e7cf175111daa05", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S43 Malva", "url": "https://en.wikipedia.org/wiki/2S43_Malva", "retrieved": "2026-10-07"},
        {"name": "Militarnyi: Russia Scales Up Production of Malva Self-Propelled Guns", "url": "https://militarnyi.com/en/news/russia-scales-up-production-of-malva-self-propelled-guns/", "retrieved": "2026-11-25"}
      ]
    },
    "2S5 Giatsint-S": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Liikursuurtükipatarei",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm liikurkahur.",
        "crew": "5",
        "combatWeight": 28.2,
        "length": 8.33,
        "width": 3.25,
        "height": 2.76,
        "engine": "V-59 diisel",
        "power": 520,
        "maxSpeedRoad": 63,
        "range": 500,
        "gradient": 58,
        "sideSlope": 47,
        "verticalStep": 0.7,
        "trench": 2.5,
        "caliber": 152,
        "mainArmament": "152 mm 2A37 kahur (L/54, 30 lasku)",
        "rateOfFire": 6,
        "secondaryArmament": "7,62 mm PKT (1500 lasku)",
        "mgRange": 1500,
        "firingRangeMin": 8.6,
        "firingRange": 24.8,
        "firingRangeExt": 33,
        "armor": "Keevitatud teras kuni 13 mm; kilp 12 mm"
      },
      "notes": {
        "crew": "5–6; koos laskemoonamasinaga 7.",
        "rateOfFire": "5–6 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S5 Giatsint-S", "url": "https://odin.t2com.army.mil/WEG/Asset/24b3b651219fe1792ecef375d738f6b6", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S5 Giatsint-S", "url": "https://en.wikipedia.org/wiki/2S5_Giatsint-S", "retrieved": "2026-10-07"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2S23 NONA-SVK": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurdiviis; Merejalavägi",
        "purpose": "120 mm liikurmiinipilduja jalaväeüksuste toetuseks.",
        "crew": "4",
        "chassis": "Modifitseeritud BTR-80",
        "combatWeight": 14.5,
        "length": 7.5,
        "width": 2.9,
        "height": 2.75,
        "engine": "KamAZ-7403 V8 diisel",
        "power": 280,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 10,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.5,
        "trench": 2,
        "caliber": 120,
        "mainArmament": "120 mm 2A60 miinipilduja (30 lasku)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62 mm PKT tornis (2400 lasku)",
        "mgRange": 1500,
        "directFireRange": 800,
        "firingRange": 8.85,
        "firingRangeExt": 12.8,
        "firingRangeGuided": 9,
        "armor": "Ümberringi kaitse 7,62 mm soomusläbistava kuuli ja kildude eest"
      },
      "notes": {
        "rateOfFire": "Püsiv 4 lasku/min.",
        "firingRange": "OF-mürsk 8,85 km; miin 7,15 km.",
        "firingRangeGuided": "Laserjuhitav „Kitolov-2“."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S23 Nona-SVK", "url": "https://odin.t2com.army.mil/WEG/Asset/50c19159fdbb249e9116cc31d516d548", "retrieved": "2026-10-08"},
        {"name": "GlobalSecurity: 2S23 specs", "url": "https://www.globalsecurity.org/military/world/russia/2s23-specs.htm", "retrieved": "2026-10-07"},
        {"name": "Army Technology: 2S23 Nona-SVK", "url": "https://www.army-technology.com/projects/2s23-nona-svk-120mm-self-propelled-gun-system/", "retrieved": "2026-10-07"},
        {"name": "The War Zone: This is Russia's much-feared artillery arsenal", "url": "https://www.twz.com/44579/this-is-russias-much-feared-artillery-arsenal-that-could-wreak-havoc-on-ukraine", "retrieved": "2026-11-26"}
      ]
    },
    "D-30": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "122 mm järelveetav haubits (kasutusel alates 1960. aastast).",
        "crew": "7",
        "chassis": "Vedukas: MT-LB või Ural-4320",
        "weightKg": 3200,
        "length": 5.4,
        "width": 1.9,
        "height": 1.6,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 25,
        "caliber": 122,
        "mainArmament": "122 mm 2A18M haubits (toru 38 kaliibrit), 360° pööramine",
        "rateOfFire": 8,
        "firingRangeMin": 1,
        "firingRange": 15.3,
        "firingRangeExt": 21.9
      },
      "notes": {
        "weightKg": "Teistel andmetel 3150 kg.",
        "length": "Transpordiasendis.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "mainArmament": "Otsetule sihik; kumulatiivmürsk läbistab 460–580 mm (laskekaugust allikas pole).",
        "rateOfFire": "Tavaline 6, püsiv 4 lasku/min.",
        "firingRange": "OF-81.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: D-30 (M1963)", "url": "https://odin.t2com.army.mil/WEG/Asset/b14f9899cde6b3e6045f28966886449e", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: D-30 howitzer", "url": "https://en.wikipedia.org/wiki/D-30_howitzer", "retrieved": "2026-10-07"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2A65": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaad; Motolaskurdiviisi suurtükipolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm järelveetav haubits.",
        "crew": "6–11",
        "weightKg": 7000,
        "length": 12.7,
        "caliber": 152.4,
        "mainArmament": "152,4 mm 2A65 „Msta-B“ haubits (L/53,3)",
        "rateOfFire": 6,
        "firingRange": 24.7,
        "firingRangeBB": 29
      },
      "notes": {
        "rateOfFire": "5–6 lasku/min.",
        "firingRange": "OF45.",
        "firingRangeBB": "OF61.",
        "mainArmament": "Laskemoona hulgas on ka laserjuhitav mürsk Krasnopol."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2A65", "url": "https://odin.t2com.army.mil/WEG/Asset/2cfe71b9d60339108419f65665bdf563", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2A65 Msta-B", "url": "https://en.wikipedia.org/wiki/152_mm_howitzer_2A65_Msta-B", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2S19 Msta", "url": "https://en.wikipedia.org/wiki/2S19_Msta", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"},
        {"name": "Newsweek: Russia artillery satellite losses (Feb 2024)", "url": "https://www.newsweek.com/russia-artillery-satellite-losses-1867249?piano_t=1", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: 2A65 Msta-B", "url": "https://en.wikipedia.org/wiki/2A65_Msta-B", "retrieved": "2026-11-26"}
      ]
    },
    "2A36": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm järelveetav kahur (kasutusel alates 1976. aastast) peamiselt vastutuleks.",
        "crew": "8",
        "chassis": "Vedukas: KrAZ-255B, KrAZ-4556 või AT-S",
        "weightKg": 9760,
        "length": 12.3,
        "width": 2.7,
        "height": 2.7,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 20,
        "caliber": 152.4,
        "mainArmament": "152,4 mm 2A36 „Giatsint-B“ kahur",
        "rateOfFire": 6,
        "directFireRange": 1000,
        "firingRange": 30.5,
        "firingRangeExt": 40
      },
      "notes": {
        "weightKg": "Teistel andmetel 9800 kg.",
        "length": "Laskeasendis; transpordiasendis 12,9 m.",
        "width": "Transpordiasendis; laskeasendis 8,7 m.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "rateOfFire": "Tavaline 5, püsiv 4 lasku/min (teistel andmetel püsiv 1).",
        "directFireRange": "Kumulatiivmürsk BP-540 otsetules.",
        "firingRange": "OF-86. Teistel andmetel 27 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2A36 Giatsint-B", "url": "https://odin.t2com.army.mil/WEG/Asset/b9f63392cd0d13e15b046e91dc796f63", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2A36 Giatsint-B", "url": "https://en.wikipedia.org/wiki/2A36_Giatsint-B", "retrieved": "2026-10-07"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"},
        {"name": "Newsweek: Russia artillery satellite losses (Feb 2024)", "url": "https://www.newsweek.com/russia-artillery-satellite-losses-1867249?piano_t=1", "retrieved": "2026-11-25"}
      ]
    },
    "D-20": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "152 mm järelveetav kahurhaubits.",
        "crew": "8",
        "chassis": "Vedukas: 6×6 või 8×8 veoauto",
        "weightKg": 5560,
        "length": 8.1,
        "width": 2.4,
        "height": 2.52,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 30,
        "caliber": 152,
        "mainArmament": "152 mm kahurhaubits (toru 26 kaliibrit)",
        "rateOfFire": 6,
        "directFireRange": 1000,
        "firingRangeMin": 4.6,
        "firingRange": 17.4
      },
      "notes": {
        "crew": "Teistel andmetel 8–10.",
        "weightKg": "Teistel andmetel 5700 kg.",
        "length": "Transpordiasendis; laskeasendis 8,69 m.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "rateOfFire": "5–6 lasku/min; püsiv 1 lask/min.",
        "directFireRange": "Kumulatiivmürsk BP-540.",
        "firingRange": "OF-32; OF-96: kuni 24,4 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: D-20 (M1955)", "url": "https://odin.t2com.army.mil/WEG/Asset/82908ad6e362b16a8295d3ac2eb01943", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: D-20", "url": "https://en.wikipedia.org/wiki/152_mm_towed_gun-howitzer_M1955_(D-20)", "retrieved": "2026-10-07"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "2-B16 Nona-K": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "purpose": "120 mm järelveetav miinipilduja.",
        "crew": "5",
        "weightKg": 1100,
        "length": 5.9,
        "width": 1.79,
        "height": 1.7,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 35,
        "caliber": 120,
        "mainArmament": "120 mm 2A51 miinipilduja (toru 24,2 kaliibrit)",
        "rateOfFire": 8,
        "firingRangeMin": 0.85,
        "firingRange": 8.85,
        "firingRangeExt": 12.8
      },
      "notes": {
        "length": "Transpordiasendis.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "mainArmament": "Toimib miinipilduja, kerge haubitsa ja tankitõrjekahurina.",
        "rateOfFire": "Tavaline 6, püsiv 4 lasku/min.",
        "firingRangeExt": "OF-50 rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B16 Nona-K", "url": "https://odin.t2com.army.mil/WEG/Asset/b7f5af5722082db0ba9e5d24c385c637", "retrieved": "2026-10-08"},
        {"name": "Militarnyi: Nona-K", "url": "https://militarnyi.com/en/news/the-armed-forces-of-ukraine-destroyed-the-nona-k-artillery-systems-and-russian-ammunition/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2S9 Nona", "url": "https://en.wikipedia.org/wiki/2S9_Nona", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Ukrainian forces seized a Russian 2B16 Nona-K", "url": "https://militarnyi.com/en/news/the-ukrainian-forces-have-seized-the-russian-2b16-nona-k-towed-artillery-system/", "retrieved": "2026-11-26"}
      ]
    },
    "2B11/2S12": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljoni miinipildujapatarei",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "120 mm raske miinipilduja.",
        "crew": "5",
        "chassis": "2F510 kaherattaline käru, vedukas GAZ-66",
        "weightKg": 210,
        "length": 1.95,
        "width": 1.04,
        "height": 1.54,
        "caliber": 120,
        "mainArmament": "120 mm 2B11 miinipilduja",
        "rateOfFire": 15,
        "firingRangeMin": 0.46,
        "firingRange": 7.18
      },
      "notes": {
        "weightKg": "Laskeasendis; transpordiasendis 300 kg. Teistel andmetel 190,5 kg ilma käruta.",
        "length": "Transpordiasendis.",
        "rateOfFire": "Sihiku korrigeerimisega 15, ilma 10 lasku/min.",
        "firingRange": "Valgustusmiin 5,3 km, suitsumiin 6,8 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B11 Sani", "url": "https://odin.t2com.army.mil/WEG/Asset/415cc764898e355ad2be19e4319f3430", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S12 Sani", "url": "https://en.wikipedia.org/wiki/2S12_Sani", "retrieved": "2026-10-07"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "2B14/2B24": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljon",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "82 mm kantav miinipilduja õhudessantvägedele ja kergejalaväele; kasutusel ka motolaskuritel.",
        "crew": "4",
        "weightKg": 41.88,
        "caliber": 82,
        "mainArmament": "82 mm miinipilduja",
        "rateOfFire": 30,
        "firingRangeMin": 0.08,
        "firingRange": 4.1
      },
      "notes": {
        "crew": "Andmed kehtivad 2B14 „Podnos“ kohta.",
        "rateOfFire": "2B14: 30 lasku/min, püsiv 24.",
        "firingRange": "2B14: M-74 miin 5,6 km (teistel andmetel 4,27 km)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B14 Podnos", "url": "https://odin.t2com.army.mil/WEG/Asset/588e76a8c703fc2004ab3b58124ccbcc", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2B14 Podnos", "url": "https://en.wikipedia.org/wiki/2B14_Podnos", "retrieved": "2026-10-07"},
        {"name": "Altair: Rosjanie odebrali moździerze 2B24 Podnos (2024)", "url": "https://www.altair.com.pl/wiadomosci/pdf/2582", "retrieved": "2026-11-27"},
        {"name": "Focus.ua: Сухопутні війська РФ отримали нову партію мінометів 2Б14", "url": "https://focus.ua/uk/voennye-novosti/649750-suhoputni-viyska-rf-otrimali-novu-partiyu-minometiv-2b14-zbroya-stala-legshoyu", "retrieved": "2026-11-27"}
      ]
    },
    "2B9 Vasiljok": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Jalaväeüksus",
        "purpose": "82 mm järelveetav automaatmiinipilduja.",
        "crew": "6",
        "weightKg": 645,
        "length": 4.115,
        "width": 1.576,
        "height": 1.18,
        "maxSpeedRoad": 60,
        "caliber": 82,
        "mainArmament": "82 mm automaatmiinipilduja",
        "rateOfFire": 170,
        "firingRangeMin": 0.8,
        "firingRange": 4.27
      },
      "notes": {
        "weightKg": "Teistel andmetel 632 kg.",
        "length": "Transpordiasendis.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "rateOfFire": "Praktiline 120 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B9 Vasilek", "url": "https://odin.t2com.army.mil/WEG/Asset/8799d46bf9471d052cd06b89a2a5d76e", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2B9 Vasilek", "url": "https://en.wikipedia.org/wiki/2B9_Vasilek", "retrieved": "2026-10-07"}
      ]
    },
    "2B23": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "purpose": "120 mm järelveetav miinipilduja.",
        "weightKg": 415,
        "length": 2.61,
        "width": 2.12,
        "height": 3.7,
        "caliber": 120,
        "mainArmament": "120 mm 2B23 „Nona-M1“ vintraudne poolautomaatne miinipilduja",
        "rateOfFire": 11,
        "firingRangeMin": 0.195,
        "firingRange": 8.835,
        "firingRangeExt": 12.8
      },
      "notes": {
        "weightKg": "Transpordiasendis 507 kg.",
        "rateOfFire": "OF-mürsk 9, OF-miin 11 lasku/min.",
        "firingRangeMin": "Miin; vintmürsk 1,7 km.",
        "firingRange": "Vintmürsk 8,835 km; miin 7,154 km.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B23 Nona-M1", "url": "https://odin.t2com.army.mil/WEG/Asset/9d3db6be1ad1857c75db0e65bbcc2c0c", "retrieved": "2026-10-08"},
        {"name": "Forces News: 2B23", "url": "https://www.forcesnews.com/russia/russia-using-nona-m1-mortar-counter-ukrainian-tactics-and-keep-crew-alive", "retrieved": "2026-11-25"},
        {"name": "Army Technology: Russian Army conducts Nona-M1 120mm mortar live-firing drills", "url": "https://www.army-technology.com/news/newsrussian-army-conducts-nona-m1120mm-mortar-live-firing-drills/", "retrieved": "2026-11-26"}
      ]
    },
    "BM-21 Grad": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mitmikraketiheitjapataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "122 mm mitmikraketiheitja.",
        "crew": "5",
        "chassis": "Ural-375D (BM-21-1: Ural-4320)",
        "combatWeight": 13.7,
        "length": 7.35,
        "width": 2.4,
        "height": 3.09,
        "engine": "ZiL-375 V8 bensiinimootor",
        "power": 180,
        "maxSpeedRoad": 75,
        "maxSpeedOffroad": 35,
        "range": 750,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.6,
        "trench": 0.6,
        "fording": 1.5,
        "caliber": 122,
        "mainArmament": "9P132 raketiheitja: 40 × 122 mm rakett (9M22U, 9M28F)",
        "launchTubes": 40,
        "salvoTime": 20,
        "firingRangeMin": 0.5,
        "firingRange": 20.4,
        "firingRangeExt": 40,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "9K51 kompleksis 8; teistel andmetel 3.",
        "salvoTime": "Laskevalmis 3 minutiga; ümberlaadimine 7 minutit.",
        "firingRangeMin": "9M22U: 0,5 km; 9M28F: 1,5 km.",
        "firingRange": "9M22U; 9M28F: 15 km.",
        "firingRangeExt": "9M521: 40 km · 9M522: 37,5 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BM-21 Grad", "url": "https://odin.t2com.army.mil/WEG/Asset/250d04a7bec1cb46b44ab21a6cbe985b", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-21 Grad", "url": "https://en.wikipedia.org/wiki/BM-21_Grad", "retrieved": "2026-10-07"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Russia Exhausts Soviet-Era Arms Storage Bases (14 Mar 2024)", "url": "https://jamestown.org/program/russia-exhausts-soviet-era-arms-storage-bases/", "retrieved": "2026-11-25"}
      ]
    },
    "BM-27 Uragan": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaadi mitmikraketiheitjapataljon; Diviisi suurtükipolk",
        "purpose": "220 mm mitmikraketiheitja, mis laseb ka kassettlahingupea ja jalaväemiinidega rakette.",
        "crew": "4",
        "chassis": "ZIL-135LM 8×8",
        "combatWeight": 20,
        "length": 9.63,
        "width": 2.8,
        "height": 3.23,
        "engine": "2 × ZIL-375 bensiinimootor",
        "power": 360,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 40,
        "range": 500,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.9,
        "trench": 2,
        "fording": 1.2,
        "caliber": 220,
        "mainArmament": "9P140 raketiheitja: 16 × 220 mm rakett (9M27F, 9M27K, 9M27K2)",
        "launchTubes": 16,
        "salvoTime": 20,
        "firingRangeMin": 10,
        "firingRange": 35,
        "firingRangeGuided": 70,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "Teistel andmetel 6.",
        "power": "2 × 180 hj.",
        "salvoTime": "Ümberlaadimine 15–20 minutit.",
        "firingRangeMin": "9M27F/K/K2; 9M27K3: 8 km.",
        "firingRangeGuided": "Juhitavad raketid üle 70 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P140 (BM-27 Uragan)", "url": "https://odin.t2com.army.mil/WEG/Asset/57ff33a6536a23f1a11644d1f426c13d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-27 Uragan", "url": "https://en.wikipedia.org/wiki/BM-27_Uragan", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Analysis – MLRS multiple launch rocket systems of Russian army, part 3", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/analysis-news-mlrs-multiple-launch-rocket-systems-of-russian-army-part-3", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian army deploys new version of BM-27 Uragan MLRS in Ukraine (17 Apr 2024)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/russian-army-deploys-new-version-of-bm-27-uragan-mlrs-rocket-launcher-in-ukraine", "retrieved": "2026-11-25"}
      ]
    },
    "BM-30 Smertš": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaadi mitmikraketiheitjapataljon",
        "purpose": "Raske 300 mm mitmikraketiheitja elavjõu, soomusmasinate, suurtükipatareide, juhtimispunktide ja laskemoonaladude vastu.",
        "crew": "4",
        "chassis": "MAZ-543M",
        "combatWeight": 43.7,
        "length": 12.1,
        "width": 3.05,
        "height": 3.05,
        "engine": "D12A-525A V-12 diisel",
        "power": 518,
        "maxSpeedRoad": 60,
        "range": 650,
        "gradient": 68,
        "verticalStep": 0.78,
        "trench": 2.5,
        "caliber": 300,
        "mainArmament": "9A52 raketiheitja: 12 × 300 mm rakett (9M55F, 9M55K, 9M55K1)",
        "launchTubes": 12,
        "firingRangeMin": 20,
        "firingRange": 70,
        "firingRangeExt": 200,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "Andmed kehtivad 9A52-2 kohta. Teistel andmetel 3.",
        "power": "Teistel andmetel 525 hj.",
        "mainArmament": "Ümberlaadimine 36 minutit.",
        "firingRangeMin": "9M55K: 20 km · 9M528: 25 km.",
        "firingRange": "9M55F, 9M55K, 9M55K1.",
        "firingRangeExt": "Kuni 200 km sõltuvalt raketist."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9A52-2 (BM-30 Smerch-M)", "url": "https://odin.t2com.army.mil/WEG/Asset/2caad55fb3c4c4d5cdd28a2194007544", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: Analysis – MLRS multiple launch rocket systems of Russian army, part 3", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/analysis-news-mlrs-multiple-launch-rocket-systems-of-russian-army-part-3", "retrieved": "2026-11-25"}
      ]
    },
    "TZM-T": {
      "status": "unverified",
      "values": {
        "purpose": "TOS-1A laadimismasin.",
        "crew": "3",
        "chassis": "T-72A (Objekt 563)",
        "combatWeight": 39,
        "engine": "V-84 diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "mainArmament": "Relvastuseta (meeskonna isikurelvad)",
        "specialEquipment": "24 raketti (2 × 12) soomustatud konteinerites; hüdrauliline kraana BM-1 laadimiseks; 400 l kütust BM-1 jaoks",
        "armor": "Laskemoona soomuskate on eemaldatav"
      },
      "notes": {
        "specialEquipment": "Varasem TZM oli KrAZ-255B veoki šassiil; ratas-TZM (563K) on KAMAZ-63501 šassiil."
      },
      "sources": [
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-11-23"},
        {"name": "WeaponSystems.net: TOS-1A Solntsepyok", "url": "https://weaponsystems.net/system/322-TOS-1A+Solntsepyok", "retrieved": "2026-11-23"}
      ]
    },
    "Orlan-30": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Luuredroon, mis valgustab sihtmärke laseriga suurtükiväe ja lennuväe täppismoona juhtimiseks.",
        "wingspan": 3.9,
        "maxTakeoffWeightKg": 30,
        "payload": 5,
        "engine": "Kolbmootor, kahelabaline veopropeller",
        "cruiseSpeed": 90,
        "maxSpeed": 150,
        "serviceCeiling": 3500,
        "endurance": 8,
        "controlRange": 120,
        "ferryRange": 300,
        "sensors": "Stabiliseeritud optoelektrooniline jaam: päevakaamera, termokaamera (640 × 480), sihtimiskaamera; laserkaugusmõõtja-sihtmärgivalgusti (200–8000 m)",
        "specialEquipment": "Katapultstart, langevarjuga maandumine; maajaam juhib kuni nelja drooni korraga"
      },
      "notes": {
        "controlRange": "Andmeside ulatus; autonoomselt kuni 300 km.",
        "payload": "Teistel andmetel kuni 8 kg."
      },
      "sources": [
        {"name": "EDR Magazine: ADEX 2024 – Orlan-30 UAV", "url": "https://www.edrmagazine.eu/rosoboronexport-showcases-the-orlan-30-uav-for-the-first-time-in-the-caspian-region", "retrieved": "2026-11-23"},
        {"name": "Euromaidan Press: Russian drone manufacturer 'Orlan-10' ramps up production despite sanctions", "url": "https://euromaidanpress.com/2024/01/13/russian-drone-manufacturer-orlan-10-ramps-up-production-despite-sanctions-inform-napalm-reports/", "retrieved": "2026-11-25"}
      ]
    },
    "Ural-4320 Zvezda-V": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Siseväed",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Improviseeritud ratassoomustransportöör: soomustatud pealisehitisega veok vägede veoks tagalas ja rinde lähedal.",
        "crew": "2–3 + 16",
        "chassis": "Ural-4320, soomustatud ümberehitus",
        "driveConfig": "6×6",
        "combatWeight": 13.8,
        "loadCapacity": 3375,
        "length": 7.66,
        "width": 2.5,
        "height": 3.27,
        "engine": "YaMZ-238M2 diisel",
        "maxSpeedRoad": 85,
        "range": 1080,
        "fuelCapacity": 347,
        "groundClearance": 400,
        "gradient": 60,
        "sideSlope": 40,
        "trench": 0.7,
        "verticalStep": 0.8,
        "fording": 1.5,
        "mainArmament": "Relvastuseta; laskeavad kabiini klaasides ja kere kuulikindlate akende all",
        "armor": "Soomustatud kere seinad (GOST 50963-96 6. klass), lisasoomus kapotil ja kabiinil"
      },
      "notes": {
        "combatWeight": "Täismass.",
        "fuelCapacity": "287 + 60 l.",
        "crew": "Algselt siseministeeriumi sisevägedele; aastatel 2000–2010 ehitati ümber üle 500 masina."
      },
      "sources": [
        {"name": "Armed Conflicts (valka.cz): Ural-4320 Zvezda-V", "url": "https://www.armedconflicts.com/Ural-4320-Zvezda-V-t250901", "retrieved": "2026-11-23"},
        {"name": "Trench Art (David Axe): Russia's Do-It-Yourself Assault Trucks Aren't As Bad As We First Thought", "url": "https://www.trenchart.us/p/russias-do-it-yourself-assault-trucks", "retrieved": "2026-11-25"}
      ]
    },
    "TOS-1A Solntsepjok": {
      "status": "unverified",
      "values": {
        "typicalUnit": "TBK-kaitse brigaadi leegiheitjapataljon; TBK-kaitse polgu leegiheitjarood",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Termobaariliste rakettidega mitmikraketiheitja kindlustatud positsioonide ja kergsoomustatud masinate ründamiseks.",
        "crew": "3",
        "chassis": "Modifitseeritud T-72",
        "combatWeight": 44.3,
        "length": 6.86,
        "width": 3.46,
        "height": 2.6,
        "engine": "V-84M diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 45,
        "range": 550,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 220,
        "mainArmament": "Termobaarilised raketid MO.1.01.04M; süüterakett MO.1.01.04M.OP",
        "launchTubes": 24,
        "firingRangeMin": 0.6,
        "firingRange": 6,
        "firingRangeExt": 10,
        "armor": "Teras ja komposiit + aktiivsoomus, ekvivalent 500–600 mm (RHA)"
      },
      "notes": {
        "chassis": "Teistel andmetel T-72 või T-90.",
        "combatWeight": "Teistel andmetel 45,3 t.",
        "length": "Kere.",
        "firingRangeExt": "2020. aasta uuendatud rakett."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TOS-1A Solntsepek", "url": "https://odin.t2com.army.mil/WEG/Asset/3067b1cfe6cb93f35b4065e3a2067bc7", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-10-07"},
        {"name": "Army Recognition: More heavy flamethrower units to appear in Russian armies (Feb 2018)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2018/more-heavy-flamethrower-units-to-appear-in-russian-armies", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Solntsepyok, Buratino, and Tosochka – the threat of Russian thermobaric flamethrowers in Ukraine (Oct 2024)", "url": "https://militarnyi.com/en/articles/solntsepyok-buratino-and-tosochka-the-threat-of-russian-thermobaric-flamethrowers-in-ukraine/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Army Received a Batch of New Solntsepyok Flamethrower Systems (Nov 2025)", "url": "https://militarnyi.com/en/news/russian-army-received-a-batch-of-new-solntsepyok-flamethrower-systems/", "retrieved": "2026-11-25"},
        {"name": "European Security & Defence: Russia poised to expand thermobaric artillery inventory (Nov 2025)", "url": "https://euro-sd.com/2025/11/articles/armament/47751/russia-poised-to-expand-thermobaric-artillery-inventory", "retrieved": "2026-11-25"}
      ]
    },
    "TOS-1 Buratino": {
      "status": "unverified",
      "values": {
        "typicalUnit": "TBK-kaitseväed",
        "purpose": "Termobaariliste rakettidega mitmikraketiheitja kindlustatud positsioonide ja kergsoomustatud masinate ründamiseks.",
        "crew": "3",
        "chassis": "Modifitseeritud T-72",
        "combatWeight": 42,
        "length": 9.53,
        "width": 3.37,
        "height": 3.23,
        "engine": "V-84M diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 45,
        "range": 500,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 220,
        "mainArmament": "Termobaarilised raketid MO.1.01.04",
        "launchTubes": 30,
        "salvoTime": 15,
        "firingRangeMin": 0.4,
        "firingRange": 3.5,
        "armor": "Teras ja komposiit + aktiivsoomus, ekvivalent 500–600 mm (RHA)"
      },
      "notes": {
        "combatWeight": "Teistel andmetel 45,3 t.",
        "range": "Teistel andmetel 550 km.",
        "mainArmament": "Rakett 220 mm, 173 kg; sihtmärgi tuvastamisest tuleni 90 s.",
        "salvoTime": "Teistel andmetel 7,5 s."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TOS-1 Buratino", "url": "https://odin.t2com.army.mil/WEG/Asset/9292c23c5b064d5446656bf2852c9b9b", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-10-07"},
        {"name": "Militarnyi: Solntsepyok, Buratino, and Tosochka – the threat of Russian thermobaric flamethrowers in Ukraine (Oct 2024)", "url": "https://militarnyi.com/en/articles/solntsepyok-buratino-and-tosochka-the-threat-of-russian-thermobaric-flamethrowers-in-ukraine/", "retrieved": "2026-11-25"}
      ]
    },
    "9T234-2": {
      "status": "unverified",
      "values": {
        "purpose": "BM-30 Smertši laadimismasin.",
        "mainArmament": "Puudub"
      },
      "sources": [
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-10-07"}
      ]
    },
    "2S44 Giatsint-K": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükibrigaad",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "152 mm liikurkahur.",
        "crew": "5",
        "chassis": "BAZ-6910-027 „Voštšina“ 8×8",
        "combatWeight": 36.4,
        "engine": "YaMZ-849 diisel",
        "power": 500,
        "maxSpeedRoad": 80,
        "range": 1000,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.6,
        "trench": 2,
        "fording": 1.4,
        "caliber": 152,
        "mainArmament": "152 mm 2A36 kahur",
        "firingRange": 30.5,
        "firingRangeBB": 33.5,
        "firingRangeExt": 40,
        "firingRangeGuided": 47,
        "armor": "Kabiin kaitseb NATO 155 mm kassettmoona allmoona eest; relvaalus on avatud (torn ja kilp puuduvad)"
      },
      "notes": {
        "mainArmament": "Toru pikkus umbes 7,6 m. Automatiseeritud tulejuhtimine (ASUNO), MRSI-võimekus; positsiooni hõivamine, tuli ja lahkumine 2–3 minutiga.",
        "firingRange": "3OF59 OF-mürsk.",
        "firingRangeBB": "3OF30 „Baklan“.",
        "firingRangeExt": "Rakettkiirendiga mürsk.",
        "firingRangeGuided": "3OF95M Krasnopol-D: 45–47 km · 3OF95 Krasnopol-M2: 37–40 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S44 Giatsint-K", "url": "https://odin.t2com.army.mil/WEG/Asset/aef72388775e5c89be3c2d7879158089", "retrieved": "2026-10-07"},
        {"name": "Militarnyi: 2S44 Giatsint-K", "url": "https://militarnyi.com/en/news/151st-brigade-s-drones-destroy-russia-s-newest-2s43-giatsint-k-self-propelled-gun/", "retrieved": "2026-11-25"},
        {"name": "Defense Express: Russians copy Ukraine's Bohdana in developing Giatsint-K, aiming to produce 36 units in 2026 (23 Jan 2026)", "url": "https://en.defence-ua.com/news/russians_copy_ukraines_bohdana_self_propelled_howitzers_in_developing_giatsint_k_aiming_to_produce_36_units_in_2026-17249.html", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Scales Up Production of Malva Self-Propelled Guns", "url": "https://militarnyi.com/en/news/russia-scales-up-production-of-malva-self-propelled-guns/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: New 2S44 Giatsint-K self-propelled gun in service with Russian forces in Ukraine", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/new-2s44-giatsint-k-self-propelled-gun-in-service-with-russian-forces-in-ukraine", "retrieved": "2026-11-26"}
      ]
    },
    "GMZ-3": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pioneeribrigaad",
        "purpose": "Roomikmiinilaotur tankitõrjemiinide paigaldamiseks maapinnale või maasse.",
        "crew": "3",
        "chassis": "2K11 Krug (SA-4 Ganef)",
        "combatWeight": 28.5,
        "length": 8.62,
        "width": 3.25,
        "height": 2.7,
        "engine": "KamAZ-7482 vesijahutusega diisel",
        "power": 525,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 25,
        "range": 500,
        "amphibious": false,
        "gradient": 57.7,
        "sideSlope": 46.7,
        "verticalStep": 0.7,
        "trench": 2.5,
        "fording": 1,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKT kuulipilduja (2500 lasku)",
        "mineLaying": "Adratüüpi, kaherenniline automaatne; maapinnale 8 miini/min, maasse 4 miini/min; miinide vahe 5 või 10 m",
        "mineCapacity": "208 tankitõrjemiini",
        "armor": "Kergsoomustatud kere; suitsugranaadiheitjad"
      },
      "notes": {
        "range": "Miinilastiga 300 km.",
        "mineLaying": "Paigalduskiirus maapinnale kuni 16 km/h, maasse kuni 6 km/h. Matmissügavus mullas kuni 120 mm, lumes kuni 500 mm. Miiniväli: survemiinid kuni 1 km, magnetmiinid kuni 2 km.",
        "mineCapacity": "Täislaadimine 7-liikmelise jaoga 15–20 min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: GMZ-3", "url": "https://odin.t2com.army.mil/WEG/Asset/2598076104bbf6c447b7a4193c06cf38", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: GMZ-3", "url": "https://en.wikipedia.org/wiki/GMZ-3", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 1st Guards Engineer Brigade", "url": "https://en.wikipedia.org/wiki/1st_Guards_Engineer_Brigade", "retrieved": "2026-11-26"}
      ]
    },
    "UMZ": {
      "status": "unverified",
      "values": {
        "purpose": "Kaugmineerimisseade, mis heidab miinivälja miinikassettidest.",
        "crew": "2",
        "chassis": "ZIL-131 6×6 (UMZ-K: KamAZ-63501; UMZ-G: T-72/T-90)",
        "combatWeight": 10,
        "length": 7.1,
        "width": 3,
        "height": 2.5,
        "engine": "Bensiinimootor (ZIL-131)",
        "power": 150,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 30,
        "range": 525,
        "fording": 1.4,
        "mineLaying": "6 pöörlevat kassettheitjat (3 kummalgi küljel), kokku 180 toru (140 mm); miinid külgedele ja/või taha; 1–3-rajaline miiniväli",
        "mineCapacity": "180 PTM-3 tankitõrjemiini, 720 POM-2 või 11 520 PFM-1S jalaväemiini",
        "armor": "Soomustamata (ZIL-131 versioon)"
      },
      "notes": {
        "combatWeight": "Miinilastiga; ilma miinideta 8,3 t.",
        "mineLaying": "Paigalduskiirus 10–40 km/h. Miinivälja pikkus 1000–1200 m, sügavus 30–120 m. Ühe laadungiga miinivälja suurim pikkus: PFM-1S 3200 m, POM-2 5000 m, PTM-3 600 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: UMZ", "url": "https://odin.t2com.army.mil/WEG/Asset/5a51749ebc13bfc7090c2a7d8a6fd4c8", "retrieved": "2026-10-08"}
      ]
    },
    "UR-77": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pioneerirood",
        "purpose": "Demineerimissoomuk, mis rajab reaktiivsete miinitõrjelaengutega koridori läbi miinivälja.",
        "crew": "2",
        "chassis": "Modifitseeritud MT-LBu",
        "combatWeight": 15.5,
        "length": 8.4,
        "width": 2.8,
        "height": 3.1,
        "engine": "YaMZ-238N diisel",
        "power": 300,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 5,
        "range": 500,
        "amphibious": true,
        "mineClearing": "Kaks reaktiivset miinitõrjelaengut (UZP-77 või UZ-67); laengu pikkus 93 m; lastakse 200–500 m kaugusele; puhastab kuni 6 m laiuse ja 80–90 m pikkuse koridori",
        "armor": "Keevitatud teras: kere kuni 15 mm, heitjakate 20 mm"
      },
      "notes": {
        "mineClearing": "Koridori rajamine 3–5 min. UZ-67: laskekaugus 200–350 m, koridor 75–80 m. Laengut on kasutatud ka linnalahingus hoonete hävitamiseks."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: UR-77 Meteorit", "url": "https://odin.t2com.army.mil/WEG/Asset/ff60b0630b4bff5a8cd9707cffd449ca", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: UR-77 Meteorit", "url": "https://en.wikipedia.org/wiki/UR-77_Meteorit", "retrieved": "2026-10-08"},
        {"name": "Militarnyi: Інженерні батальйони штурму та розгородження", "url": "https://militarnyi.com/uk/articles/inzhenerni-batalyony-shturmu-ta-rozhorodzhennya/", "retrieved": "2026-11-25"}
      ]
    },
    "IRM": {
      "status": "unverified",
      "values": {
        "purpose": "Pioneeriluuresoomuk teede, miiniväljade ja veetõkete (koolmekohtade) luureks.",
        "crew": "6",
        "chassis": "Modifitseeritud BMP-1",
        "combatWeight": 18,
        "length": 8.3,
        "width": 3.15,
        "height": 2.42,
        "engine": "UTD-20 diisel",
        "power": 300,
        "maxSpeedRoad": 52,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "verticalStep": 0.65,
        "trench": 2.3,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKT kuulipilduja",
        "mgRange": 1500,
        "specialEquipment": "Laiahaardeline miiniotsija RShM-2 (metall kuni 300 mm sügavusel, 3–5 km/h); kajalood EIR (veesügavus 0,5–20 m); periskoop PIR-451 ja kaugusmõõtja DSP-30; navigatsioonisüsteem TNA-3; käsimiiniotsijad; reaktiivne enesepäästesüsteem (2 × 12 raketti)",
        "armor": "Keevitatud teraskere; kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "maxSpeedWater": "Kaks sõukruvi kere tagaosas.",
        "mgRange": "Maksimaalne laskekaugus 4000 m.",
        "specialEquipment": "Teeluure tavaliselt 8–10 km/h, miiniväljade luure 5 km/h; 100 m laiune veetakistus läbitakse 5 minutiga. Variant IPR: kokkuklapitav snorkel."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: IRM Zhuk", "url": "https://odin.t2com.army.mil/WEG/Asset/b0c87376508539e29e4ee631d84c3234", "retrieved": "2026-10-08"}
      ]
    },
    "2S6 Tunguska": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhutõrjekahur- ja raketikompleksi iseliikuv laskeseade, mis kaitseb motolaskur- ja tankiüksusi madalal lendavate lennukite, helikopterite ja tiibrakettide eest.",
        "typicalUnit": "Motolaskur- või tankipolgu õhutõrjepataljon; Brigaadi õhutõrjepataljon",
        "crew": "4",
        "chassis": "GM-352M",
        "combatWeight": 34,
        "length": 7.93,
        "width": 3.24,
        "height": 3.36,
        "engine": "V-46 diisel",
        "power": 780,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 40,
        "range": 500,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 1,
        "trench": 1,
        "fording": 1,
        "caliber": 30,
        "mainArmament": "2 × 30 mm 2A38M kaksiktoruga automaatkahur (kokku 4 toru, 1904 lasku)",
        "samMissiles": "8 × 9M311 (raadiokäsujuhtimine, 9 kg varraslõhkepea, laserlähedussüütur)",
        "rateOfFire": 5000,
        "sensors": "Avastamisradar 1RL144 (C-sagedusala, umbes 18 km); jälgimisradar (X-sagedusala, umbes 16 km); optiline sihtimissüsteem 1A29; IFF 1RL138",
        "samRange": {"min": 2500, "max": 10000},
        "samAltitude": {"min": 10, "max": 3500},
        "cannonRangeAir": 4000,
        "cannonAltitudeAir": 2000,
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "combatWeight": "Andmed kehtivad 2S6M kohta. 2S6M1: 35 t.",
        "height": "Radar üleval 4,02 m.",
        "power": "Nimivõimsus 780 hj, selles sõidukis piiratud 710 hj-ga.",
        "samMissiles": "2S6M põhitootmisversioon; algsel 2S6-l 4 raketti. Laskmine liikumiselt kuni 45 km/h.",
        "rateOfFire": "Ühe kahuri kohta 1950–2500 lasku/min.",
        "sensors": "Süsteemi reageerimisaeg umbes 8 s.",
        "samRange": "9M311M / 2S6M1. Algne 9M311: kuni 8 km.",
        "samAltitude": "9M311-M1: 15–3500 m.",
        "cannonRangeAir": "Kaldkaugus; min umbes 200 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S6M Tunguska-M", "url": "https://odin.t2com.army.mil/WEG/Asset/5fadf3d546d246dc08b49b62deed65a2", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2K22 Tunguska", "url": "https://en.wikipedia.org/wiki/2K22_Tunguska", "retrieved": "2026-10-08"},
        {"name": "Army Recognition: Russian Ground Forces build up air defense – Part 1", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/analysis-defense-and-security-industry/analysis-russian-ground-forces-build-up-air-defense-part-1", "retrieved": "2026-11-25"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia deploys modernized Tunguska-M1 with new electro-optical module", "url": "https://armyrecognition.com/news/army-news/2026/russia-deploys-modernized-tunguska-m1-with-new-electro-optical-module-to-improve-low-altitude-drone-defense", "retrieved": "2026-11-25"}
      ]
    },
    "STRELA-10/SA-13 Gopher": {
      "status": "unverified",
      "values": {
        "purpose": "Lühimaa õhutõrjeraketisoomuk taktikaliste üksuste kaitseks.",
        "typicalUnit": "Motolaskur- või tankipolgu õhutõrjepataljon; Brigaadi õhutõrjepataljon",
        "crew": "3",
        "chassis": "MT-LB",
        "combatWeight": 12.1,
        "length": 6.45,
        "width": 2.85,
        "height": 2.22,
        "engine": "YaMZ-238V diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 6,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.6,
        "trench": 2.4,
        "samMissiles": "9M37 – 4 kanderaamil + 8 varuraketti sõiduki sees; kahe sagedusalaga infrapuna- ja fotokontrastisihtija, 3 kg kildlõhkepea",
        "secondaryArmament": "7,62 mm PKT kuulipilduja (2000 lasku)",
        "sensors": "Kaugusmõõtja radar 9S86 (450–10 000 m); passiivne radarisignaalide avastus 9S16 (osal masinatel); sihtmärgiinfo eraldi MT-LBu radarilt Dog Ear (kuni 80 km)",
        "samRange": {"min": 800, "max": 5000},
        "samAltitude": {"min": 25, "max": 3500},
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "combatWeight": "Strela-10M3: 12,3 t.",
        "length": "Teistel andmetel 6,6 m.",
        "height": "Lahinguasendis 3,96 m.",
        "maxSpeedWater": "5–6 km/h, liigub vees roomikute abil.",
        "samMissiles": "Uuestilaadimine umbes 3 min. Strela-10M3 rakett 9M333: 5 kg lõhkepea, sobib ka droonide ja tiibrakettide vastu.",
        "secondaryArmament": "Teistel andmetel PKMB kuulipilduja.",
        "samAltitude": "9M333: alates 10 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9K35 Strela-10", "url": "https://odin.t2com.army.mil/WEG/Asset/a237e8ba38ff3eb1f4ac04002b80e5c7", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9K35 Strela-10", "url": "https://en.wikipedia.org/wiki/9K35_Strela-10", "retrieved": "2026-10-08"},
        {"name": "Army Recognition: Russian Ground Forces build up air defense – Part 1", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/analysis-defense-and-security-industry/analysis-russian-ground-forces-build-up-air-defense-part-1", "retrieved": "2026-11-25"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"}
      ]
    },
    "PRP-4": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Liikursuurtükipataljoni tulejuhtimisrühm; Brigaadi suurtükiväe tulejuhtimispatarei",
        "purpose": "Suurtükiväe luure- ja tulejuhtimissoomuk, mis määrab sihtmärkide koordinaadid.",
        "crew": "4",
        "chassis": "BMP-1",
        "combatWeight": 13.8,
        "length": 6.74,
        "width": 2.94,
        "height": 2.15,
        "engine": "UTD-20S1 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.2,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKT kuulipilduja (enesekaitseks)",
        "sensors": "Mastil maapealse seire radar 1L120-1 (Ku-sagedusala): inimene umbes 7 km, sõidukid 12–20 km, hooned kuni 25 km; periskoopiline laserkaugusmõõtja 1D14-1; soojuskaamera",
        "specialEquipment": "Maha võetav vaatluspost kuni 6 km kaugusele sõidukist",
        "armor": "Keevitatud valtsitud teras (kere katus 6 mm), torn 33 mm"
      },
      "notes": {
        "combatWeight": "Andmed kehtivad PRP-4A Arguse (2009) kohta; põhiversioon PRP-4 Nard on 1980. aastate algusest.",
        "sensors": "Seisva tanki avastuskaugus väljalülitatud mootoriga väheneb umbes 2 km-ni."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PRP-4A Argus", "url": "https://odin.t2com.army.mil/WEG/Asset/9bd635a80bf83183f54381f4d29935f1", "retrieved": "2026-10-08"},
        {"name": "Militarnyi: PRP-4", "url": "https://militarnyi.com/en/news/russians-lost-rare-prp-4-vehicles-in-combat/", "retrieved": "2026-11-25"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "ZOOPARK-1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi suurtükiväe juhtimis- ja luurepatarei",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Vastutuleradar: määrab vastase miinipildujate, suurtükkide, raketiheitjate ja taktikaliste rakettide stardipositsioonid mürsu trajektoori järgi; jälgib ka oma suurtüki tule tulemusi.",
        "chassis": "MT-LBu",
        "length": 6.45,
        "width": 2.86,
        "engine": "YaMZ-238 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 5,
        "range": 500,
        "amphibious": true,
        "secondaryArmament": "7,62 mm PKT kuulipilduja",
        "sensors": "3D monopulssradar 1L259 (G/H-sagedusala, 4–8 GHz), skaneerimissektor 90°; jälgib korraga kuni 12 sihtmärki, kuni 70 tulepositsiooni minutis",
        "specialEquipment": "Avastuskaugus: suurtükimürsud 8–10 km, miinid 12–15 km, reaktiivmürsud 12–20 km, taktikalised raketid 35 km. Lahingusse ja marsile alla 5 min",
        "armor": "Keevitatud teras 14 mm"
      },
      "notes": {
        "chassis": "Komplekti kuuluvad ka hooldusauto 1L30 (Ural-43203) ja generaatorihaagis. Radarit toidab põhimootori võimsusvõtt (30 kW). 1L260 Zoopark-1M teenistuses alates 2017.",
        "power": "Uuematel KamAZ-740.50, 360 hj.",
        "secondaryArmament": "Enamikul MT-LB variantidel."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1L219 Zoopark-1", "url": "https://odin.t2com.army.mil/WEG/Asset/100a6d9e7cd19b088a28e2ec49760597", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: Zoopark-1", "url": "https://en.wikipedia.org/wiki/Zoopark-1", "retrieved": "2026-10-08"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Ukrainian Armed Forces destroy Russian Zoopark-M1 radar (2024)", "url": "https://militarnyi.com/en/news/ukrainian-armed-forces-destroy-russian-zoopark-m1-radar/", "retrieved": "2026-11-27"}
      ]
    },
    "9P149 Shturm-S": {
      "status": "unverified",
      "values": {
        "purpose": "Tankitõrjesoomuk (kasutusel alates 1979. aastast) tankitõrjekompleksiga Šturm.",
        "crew": "2",
        "chassis": "MT-LB",
        "combatWeight": 11.9,
        "length": 6.454,
        "width": 2.86,
        "height": 1.865,
        "engine": "YaMZ-238V diisel",
        "power": 240,
        "maxSpeedRoad": 61.5,
        "maxSpeedWater": 4.5,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.61,
        "trench": 2.41,
        "atgm": "9M114 Kokon (AT-6 Spiral) – üks sissetõmmatav kanderaam automaatlaaduriga; poolautomaatne raadiokäsujuhtimine",
        "atgmPenetration": "560–600 mm (RHA), kumulatiivne lõhkepea",
        "sensors": "Optiline sihik laserkaugusmõõtjaga (päevane)",
        "atgmRange": {"min": 400, "max": 5000},
        "armor": "Keevitatud teras 7–14 mm"
      },
      "notes": {
        "atgm": "Shturm-SM (2014): raketid 9M120 Ataka, päeva- ja öösihik.",
        "atgmRange": "9M114M1: kuni 6 km, 9M114M2: kuni 7 km. Shturm-SM (9M120 Ataka): kuni 6 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P149 Shturm-S", "url": "https://odin.t2com.army.mil/WEG/Asset/9f3f567f902e5cd82c5b267d68dd484d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9K114 Shturm", "url": "https://en.wikipedia.org/wiki/9K114_Shturm", "retrieved": "2026-10-08"}
      ]
    },
    "9P157-2 Krizantema-S": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankitõrjeraketipatarei",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Tankitõrjesoomuk tankitõrjekompleksiga Krizantema.",
        "crew": "2",
        "chassis": "BMP-3, tornita",
        "combatWeight": 18.7,
        "length": 7.14,
        "width": 3.15,
        "height": 2.3,
        "engine": "UTD-29M diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 2.5,
        "atgm": "9M123 Krizantema (AT-15) – 2 kanderaamil, kokku 15 raketti, revolvertüüpi automaatlaadur; kaksikjuhtimine: millimeeterlaine-radar või laserkiir",
        "atgmPenetration": "Tandem-kumulatiivne: üle 1100 mm (RHA, aktiivsoomuse taga); ka termobaariline lõhkepea",
        "sensors": "Sissetõmmatav millimeeterlaine-radar; optiline sihik laserjuhtimisega; laserkaugusmõõtja",
        "atgmRange": {"min": 400, "max": 6000},
        "armor": "Alumiiniumsulam + poltidega terasest lisasoomus; esiosa peab 30 mm mürsule vastu 200 m kauguselt"
      },
      "notes": {
        "atgm": "Kanderaamid laetakse automaatselt umbes 15 sekundiga. Rakett umbes 400 m/s; tabab ka madalal lendavaid sihtmärke (kuni 3000 m). 9P157-4 on patarei juhtimismasin (BMP-3 torn ilma relvata).",
        "atgmPenetration": "Teistel andmetel 1100–1250 mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P157 Khrizantema-S", "url": "https://odin.t2com.army.mil/WEG/Asset/ecf8afb0fa6f4c6aa532e100cf191796", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9M123 Khrizantema", "url": "https://en.wikipedia.org/wiki/9M123_Khrizantema", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-3", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-11-25"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Defense Express: While boasting about Khrizantemas, Russians prefer not to mention their not so successful Shturm-S and Kornet-T ATGMs (Jun 2023)", "url": "https://en.defence-ua.com/weapon_and_tech/while_boasting_about_khrizantemas_russians_prefer_not_to_mention_their_not_so_successful_shturm_s_and_kornet_t_atgms-7102.html", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian army receives more anti-tank vehicles Shturm-S and Khrizantema-S despite economic sanctions (2023)", "url": "https://armyrecognition.com/news/army-news/2023/russian-army-receives-more-anti-tank-vehicles-shturm-s-and-khrizantema-s-despite-economic-sanctions", "retrieved": "2026-11-27"}
      ]
    },
    "9P162 Kornet-T": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankitõrjepataljoni tankitõrjeraketipatarei",
        "purpose": "Tankitõrjesoomuk tankitõrjekompleksiga Kornet.",
        "crew": "2",
        "chassis": "BMP-3, tornita",
        "combatWeight": 14.1,
        "length": 6.73,
        "width": 3.15,
        "height": 1.77,
        "engine": "UTD-29 diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.8,
        "trench": 2.5,
        "atgm": "9M133 Kornet (AT-14 Spriggan) – 2 sissetõmmataval kanderaamil, kokku 16 raketti (12 automaatlaaduris + 4 keres); laserkiirjuhtimine; ka 9M133F fugassraketid",
        "atgmPenetration": "1000–1200 mm (RHA, aktiivsoomuse taga), ilma aktiivsoomuseta 1200–1400 mm; betoon 3–3,5 m",
        "atgmRange": {"min": 100, "max": 5500},
        "armor": "BMP-3 kere: alumiiniumsulam, esiosa komposiitsoomus peab 30 mm soomust läbistavale mürsule vastu; ümberringi 14,5 mm"
      },
      "notes": {
        "height": "Kanderaamid sees.",
        "atgm": "Kaks raketti saab lasta samale sihtmärgile alla sekundilise vahega (aktiivkaitse ülekoormamiseks) või kahele sihtmärgile korraga. Muud relvastust peale meeskonna isikurelvade pole.",
        "atgmRange": "9M133M-2: 150–8000 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P162 Kornet-T", "url": "https://odin.t2com.army.mil/WEG/Asset/223bc869ffda3e31fc9dd6f14997d978", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-3", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-11-25"},
        {"name": "FMSO/Army University Press (Grau & Bartles 2016): The Russian Way of War – Force Structure, Tactics and Modernization of the Russian Ground Forces", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "PRP-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Suurtükiväe luure- ja vaatlussoomuk (kasutusel alates 1972. aastast): leiab vastase üksused ja suurtükiväe positsioonid ning annab sihtmärkide koordinaadid tulejuhtimiseks.",
        "crew": "5",
        "chassis": "BMP-1",
        "combatWeight": 13.8,
        "length": 6.74,
        "width": 2.94,
        "height": 2.15,
        "engine": "UTD-20 V6 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.2,
        "caliber": 7.62,
        "mainArmament": "7,62 mm kuulipilduja (ainult enesekaitseks)",
        "sensors": "Mastil maapealse seire radar IRL-123 (NATO „Small Fred“, J-sagedusala 10–20 GHz): liikuvate ja seisvate sihtmärkide avastuskaugus 20 km, jälgimiskaugus 7 km; laserkaugusmõõtja 1D6; soojuskaamerat ja arvutatud tulejuhtimist pole",
        "specialEquipment": "Raadiojaamad 2 × R-123M, R-124 ja R-108 – jälgib mitut juhtimis- ja tulejuhtimisvõrku. Maha võetav vaatluspost kuni 6 km kaugusel sõidukist; TBK-kaitse ja suitsuseadmed",
        "armor": "Keevitatud valtsitud teras (kere katus 6 mm): kaitseb igast küljest 12,7 mm kuulide eest, eesmine sektor osaliselt 20 mm eest; torn 33 mm"
      },
      "notes": {},
      "sources": [
        {"name": "Wikipedia: BMP-1", "url": "https://en.wikipedia.org/wiki/BMP-1", "retrieved": "2026-10-23"}
      ]
    },
    "SNAR-10": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi suurtükiväe juhtimis- ja luurepatarei",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Lahinguvälja seireradar (kasutusel alates 1975. aastast), mis avastab ja jälgib liikuvaid sihtmärke maal ja vees ning annab suurtükiväele andmeid tule korrigeerimiseks.",
        "crew": "5",
        "chassis": "MT-LB",
        "combatWeight": 12.6,
        "length": 7.62,
        "width": 2.86,
        "height": 2.72,
        "engine": "YaMZ-238 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "range": 500,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKT kuulipilduja (enesekaitseks)",
        "sensors": "Radar 1RL232 „Leopard“ (NATO „Big Fred“), K-sagedusala 34,55–35,25 GHz, parabool-antenn. Algversioon: liikuvad sõidukid 16 km (ilma MTI-ta) / 10 km (MTI-ga), liikuvad laevad 30 km, mürsu löögikohad 10 km. SNAR-10M1: sõidukid 40 km, isikkoosseis 8–10 km, miinipilduja tuli 10 km, suurtükituli 15 km; jälgib korraga kuni 20 sihtmärki",
        "specialEquipment": "Positsioonile asumine ja kokkupakkimine 5 min; autonoomne töö vähemalt 3 ööpäeva (M1). TBK-kaitse; M1 variandil digitaalne töötlus ja kuvar, satelliitnavigatsioon ja automaatne andmeedastus"
      },
      "notes": {
        "sensors": "SNAR-10M (1RL232-1): radar asendatud Kredo-1E-ga, 40 km sõidukitele, lisaks digitaalne kuvar ja side. SNAR-10M1 (1RL232-2): laiemalt kasutusel. M1 variant on Venemaa maaväes kasutusel nime all „SANR-10M Pantera“ (tootmises)."
      },
      "sources": [
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: List of equipment of the Russian Ground Forces", "url": "https://en.wikipedia.org/wiki/List_of_equipment_of_the_Russian_Ground_Forces", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: SNAR-10", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/snar-10m1-russia-defense-industry-military-equipment-14-august-2014-uk", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "1V13": {
      "status": "unverified",
      "values": {
        "purpose": "Patarei vanemohvitseri juhtimissoomuk (patarei tulejuhtimiskeskus).",
        "crew": "6",
        "chassis": "MT-LBu",
        "combatWeight": 15.7,
        "length": 7.19,
        "width": 2.85,
        "height": 3.01,
        "engine": "YaMZ-238N diisel",
        "power": 240,
        "maxSpeedRoad": 62,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 6,
        "range": 500,
        "gradient": 60,
        "sideSlope": 47,
        "verticalStep": 0.7,
        "trench": 2.7,
        "caliber": 7.62,
        "mainArmament": "Põhirelvastust pole",
        "secondaryArmament": "7,62 mm PKMB kuulipilduja ja RPG-7VN (5 lasku); varasematel versioonidel DŠK-M, hilisematel NSVT",
        "sensors": "Suurtükiväe kompassi- ja kaugusmõõteseadmed: topograafiline instrument 1G-121-1, güroskoop 1G-25-1, kaugusmõõtja DSP-30, vaatlusseade PV-1, suunaring PAB-2AM",
        "specialEquipment": "Laskeandmete arvuti PUO-9M, automaatne käsuvastuvõtja 9Sh34, välitelefonid, kaabliratas (3×500 m), kiirgus- ja keemialuureseade GO-27, miiniindikaator IMP, generaator GIV-8/6000; filter-ventilatsioon, kütte- ja saastest puhastamise seadmed",
        "radioSets": "3 × R-123M"
      },
      "notes": {
        "gradient": "30° ≈ 58%; külgkalle 25° ≈ 47%.",
        "power": "220 kW (295 hj).",
        "crew": "Teistel andmetel 5."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1V13", "url": "https://odin.t2com.army.mil/WEG/Asset/1e3826f3419d35cfd76bb31c46fbd90a", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts.com / valka.cz: 1V13 (velitelské stanoviště)", "url": "https://www.armedconflicts.com/topic/view/32009", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-10-23"}
      ]
    },
    "1V15": {
      "status": "unverified",
      "values": {
        "purpose": "Suurtükiväepataljoni ülema juhtimis- ja vaatlussoomuk: luure, sihtmärkide koordinaatide määramine ning tule juhtimine ja korrigeerimine.",
        "crew": "6",
        "chassis": "MT-LBu",
        "combatWeight": 15,
        "length": 7.19,
        "width": 2.85,
        "height": 3.01,
        "engine": "YaMZ-238N diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 4,
        "range": 500,
        "gradient": 58,
        "sideSlope": 47,
        "verticalStep": 0.7,
        "trench": 2.7,
        "caliber": 7.62,
        "mainArmament": "Põhirelvastust pole",
        "secondaryArmament": "7,62 mm PKMB kuulipilduja ja RPG-7VN (5 lasku)",
        "sensors": "Laserkaugusmõõtja 1D8, kombineeritud vaatlusseade 1PN44, stereokaugusmõõtja DS-1, tankivaatlusseadmed TNPO-170, koordinaatide teisendi 1T804, kaugusmõõtja DSP-30, güroskoop 1G-25-1, topograafiline instrument 1G-121-1, suunaring PAB-2AM",
        "specialEquipment": "Laskeandmete arvuti PUO-9M; välitelefonikeskjaam P-19M, 2 × TA-57, kaabliratas; kiirgus- ja keemialuureseade GO-27; generaator GIV-8/6000; filter-ventilatsioon, kütte- ja saastest puhastamise seadmed",
        "radioSets": "2 × R-123(M), R-111, R-130M (teleskoopmast), R-107"
      },
      "notes": {
        "chassis": "Mõõtmed ja kiirus on MT-LBu omad.",
        "gradient": "30° ≈ 58%; külgkalle 25° ≈ 47%."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1V15", "url": "https://odin.t2com.army.mil/WEG/Asset/fef5ab0fc4918cdf790ac08b8bfc65e7", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts.com: 1V15 (velitelské stanoviště)", "url": "https://www.armedconflicts.com/topic/view/85330", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-10-23"}
      ]
    },
    "1V18": {
      "status": "unverified",
      "values": {
        "purpose": "Järelveetavate suurtükkide ja raketiheitjate patarei ülema juhtimis- ja vaatlussoomuk: luure, sihtmärkide koordinaatide määramine ja tule juhtimine.",
        "crew": "6",
        "chassis": "BTR-60PB",
        "combatWeight": 10.1,
        "length": 7.22,
        "width": 2.82,
        "height": 2.06,
        "engine": "2 × GAZ-49B bensiinimootor",
        "power": 180,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "mainArmament": "Torn on relvastamata (ainult vaatlusseadmed)",
        "sensors": "Vaatlusseadmed NNP-21 ja DV, kaugusmõõtja; lisaks laserkaugusmõõtja 1D15, päeva-/öövaatlus 1PN44, stereokaugusmõõtja DS-1, suunaring PAB-2AM, navigatsioon 1T121-M",
        "specialEquipment": "Tulejuhtimine automaatselt 1V520 või käsitsi PUO-7; TBK-kaitse",
        "armor": "Torn eest 12,7 mm, torni katus ja kere 7,62 mm kuulide eest",
        "radioSets": "3 × R-123M ja R-107M"
      },
      "notes": {
        "chassis": "BTR-60PB, mille relvastatud torn on asendatud relvastamata vaatlustorniga. 1V18-1 on moderniseeritud versioon.",
        "power": "Kaks mootorit kokku 180 hj."
      },
      "sources": [
        {"name": "Wikipedia: BTR-60", "url": "https://en.wikipedia.org/wiki/BTR-60", "retrieved": "2026-10-23"},
        {"name": "Weapons Systems of the Former USSR & Russia: Fire Support (GulfLINK)", "url": "https://gulflink.health.mil/irfna/irfna_refs/n28en023/firespt.htm", "retrieved": "2026-11-25"},
        {"name": "Valka.cz: 1V17 Mašina-B", "url": "https://www.armedconflicts.com/SOV-1V17-velitelske-stanoviste-delostrelectva-t27773", "retrieved": "2026-11-25"}
      ]
    },
    "1V119": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantvägede suurtüki- ja miinipildujaüksus; Merejalaväe suurtüki- ja miinipildujaüksus",
        "purpose": "Õhudessantvägede suurtükiväe juhtimis- ja luuremasin 2S9 „Nona-S“ jaoks: määrab sihtmärkide koordinaadid, arvutab laskeandmed ja juhib 2S9 tuld.",
        "crew": "6",
        "chassis": "BTR-D",
        "combatWeight": 6.7,
        "length": 5.88,
        "width": 2.63,
        "height": 1.97,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 61,
        "maxSpeedOffroad": 35,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "airDroppable": true,
        "sensors": "Laserkaugusmõõtja 1D15, kaugusmõõtja DSP-30, päeva-/öövaatlus 1PN44, stereokaugusmõõtja DS-1, suunaring PAB-2AM, navigatsioonisüsteem 1T121-M",
        "specialEquipment": "Raadiod 3 × R-123M ja R-107M; TBK-kaitse",
        "armor": "Kere 15 mm"
      },
      "notes": {
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1V119", "url": "https://odin.t2com.army.mil/WEG/Asset/ecd7ac12bd7b5f88de0735878b6be95d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: BTR-D (variandid)", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "ARK-1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Vastutuleradar: leiab mürsu trajektoori järgi vastase miinipildujate, suurtükkide, raketiheitjate ja taktikaliste rakettide positsioonid vastutule jaoks.",
        "crew": "4",
        "chassis": "MT-LBu",
        "combatWeight": 15.7,
        "length": 7.61,
        "width": 2.85,
        "height": 2.72,
        "engine": "YaMZ-238N V8 diisel",
        "power": 300,
        "maxSpeedRoad": 61,
        "maxSpeedOffroad": 30,
        "range": 500,
        "sensors": "3D monopulssradar 1RL239 „Lynx“ (lainepikkus 5 cm, H-sagedusala 6–8 GHz): miinipildujad 13 km, suurtükid 8 km, reaktiivmürsud 25 km, taktikalised raketid 30 km; jälgib kuni 3 sihtmärki minutis",
        "specialEquipment": "Täisautonoomne – oma navigatsiooni-, orientatsiooni-, topo- ja sidesüsteemid. Positsioonile asumine ja kokkupakkimine 5 min; TBK-kaitse",
        "armor": "Kere 15 mm, torn eest 20 mm"
      },
      "notes": {
        "chassis": "Radari kaks kiirgurit ja vastuvõtuantennid on kere peal, ülejäänud seadmed kere sees."
      },
      "sources": [
        {"name": "Militarnyi: Russian ARK-1 Rys’ radar neutralized in the Kherson region", "url": "https://militarnyi.com/en/news/russian-ark-1-rys-radar-neutralized-in-the-kherson-region/", "retrieved": "2026-10-23"}
      ]
    },
    "1V152 (1V126 Kapustnik-B)": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Suurtükipataljon; Suurtükipatarei",
        "purpose": "Kapustnik-B automatiseeritud tulejuhtimissüsteemi juhtimis- ja vaatlussoomuk; variandid tulejuhile ja tulejuhtimiskeskusele.",
        "crew": "3",
        "chassis": "BTR-80",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "engine": "KamAZ-7403 V8 diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2.0,
        "mainArmament": "Tulejuhi variandil põhirelvastust pole; tulejuhtimiskeskuse variandil 14,5 mm KPVT raskekuulipilduja",
        "secondaryArmament": "Suitsugranaadiheitjad, 4 torni kummalgi küljel",
        "sensors": "Torni laserkaugusmõõtja, päeva- ja öövaatlusseadmed, käeshoitav laserkaugusmõõtja ja pimenägemisseade, inertsiaalnavigatsioon; täiustatud variandil IR-vaatlusseade (passiivne 1500 m, aktiivne 3000 m), soojuskaamera, laserindikaator; hilisemad variandid GLONASS",
        "specialEquipment": "Määrab sihtmärgi koordinaadid, arvutab laskeandmed korraga kuni kahele sihtmärgile ja annab need relvadele (suurtükid, miinipildujad, raketiheitjad). Raadiod: 2 UKV-kaugraadiot (andmeside), 1 KV-raadio, 1 keskmaa- ja 1 lähimaaraadio; 10 m teleskoopmast, 4 kW generaator, vints 4,5 t; kollektiivne TBK-kaitse",
        "armor": "Kere eesosa kaitseb 12,7 mm, igast küljest 7,62 mm kuulide ja mürsukildude eest; kuulikindlad aknad"
      },
      "notes": {
        "chassis": "Kapustnik-B komplekti kuulub ka Ural-4320 veokil põhinev 1V153."
      },
      "sources": [
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-23"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "IMR-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Teepuhastus- ja pioneerisoomuk, mis rajab sõidukitele läbipääsu varemete, metsatõkete ja saastatud alade kaudu.",
        "crew": "2",
        "chassis": "T-72 (IMR-2M1: T-72A)",
        "combatWeight": 44.3,
        "length": 9.55,
        "width": 4.35,
        "height": 3.68,
        "engine": "V-84MS mitmekütusediisel",
        "power": 840,
        "maxSpeedRoad": 50,
        "range": 500,
        "gradient": 50,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "caliber": 12.7,
        "mainArmament": "12,7 mm NSVT kuulipilduja juhikabiini katusel (enesekaitseks)",
        "specialEquipment": "Pöörlev teleskoopne mitmeotstarbeline kraana (haaratsiga, tõstevõime 2 t, ulatus 8,4 m); eesmine buldooserisae (V-kujuline või sirge, 200–250 m³/h; üles tõstetav). Kivitõkete puhastamine 280–350 m/h, kraavide ja puutõkete 350–400 m³/h. TBK-kaitse ja suitsuseadmed",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest",
        "emplacementTime": "Umbes 6 min (sõidurežiimilt tööasendisse)"
      },
      "notes": {
        "chassis": "IMR-2M1 (1982) on lihtsustatud variant ilma miinitõrjeseadmeta; IMR-2M2 (1990) on mõeldud saastatud aladele (kopp haaratsi asemel); IMR-2MA: suurem operaatorikabiin ja 12,7 mm NSV; Klin-1: kaugjuhitav IMR-2.",
        "maxSpeedRoad": "Teistel andmetel 50 km/h; IMR-2M puhul on avaldatud ka 60 km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: IMR-2", "url": "https://odin.t2com.army.mil/WEG/Asset/77349ebd70a8b979d06d4b83e429da8d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: IMR-2", "url": "https://en.wikipedia.org/wiki/IMR-2", "retrieved": "2026-10-23"}
      ]
    },
    "IMR-3": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pioneeribrigaadi pioneerirood",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Teepuhastus- ja pioneerisoomuk.",
        "crew": "2",
        "chassis": "T-90A",
        "combatWeight": 49.5,
        "length": 9.32,
        "width": 3.5,
        "height": 3.42,
        "engine": "V-84MS mitmekütusediisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 35,
        "range": 500,
        "amphibious": false,
        "gradient": 50,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "fording": 5,
        "caliber": 12.7,
        "mainArmament": "12,7 mm NSVT kuulipilduja kaugjuhitavas relvajaamas",
        "mineClearing": "Rööbastee laiune miinitraal KMT-R3 koos elektromagnetseadmega EMT (traalib varrasmiine ja magnetsüütega miine)",
        "specialEquipment": "U-kujuline buldooserisae (200–250 m³/h), teleskoopkraana (tõstevõime 2 t, pöördenurk 360°) kopaga, kiirgus- ja keemialuureseade, suitsugeneraator, automaatne tulekustutus. Võimalik kaugjuhtimine kantavalt pultilt või autonoomne töö programmeeritud marsruudil; TBK-kaitse",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "chassis": "IMR-3M on T-90 šassiil.",
        "fording": "Läbib veetõkkeid kuni 5 m sügavuselt põhja mööda (ettevalmistusega); ettevalmistuseta 2,7 m."
      },
      "sources": [
        {"name": "Wikipedia: IMR-2", "url": "https://en.wikipedia.org/wiki/IMR-2", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Інженерні батальйони штурму та розгородження", "url": "https://militarnyi.com/uk/articles/inzhenerni-batalyony-shturmu-ta-rozhorodzhennya/", "retrieved": "2026-11-25"},
        {"name": "Defense Mirror: Russia Delivers IMR-3M Obstacle-Clearing Vehicles to Defense Ministry", "url": "https://defensemirror.com/news/40935/Russia_Delivers_IMR_3M_Obstacle_Clearing_Vehicles_to_Defense_Ministry", "retrieved": "2026-11-25"}
      ]
    },
    "BAT-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi pioneeripataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Raske roomikbuldooser teede ja läbipääsude rajamiseks, pinnasvallide ehitamiseks ja kraavide kaevamiseks.",
        "crew": "2 + 6",
        "chassis": "MT-T",
        "combatWeight": 39.7,
        "length": 9.64,
        "width": 4.2,
        "height": 3.69,
        "engine": "V-64-4 mitmekütusediisel",
        "power": 710,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 35,
        "range": 500,
        "mainArmament": "Relvastust pole",
        "specialEquipment": "Eesmine buldooserisae (laius 4,5 m buldooserina, 4,2 m teepuhastajana; teede puhastamine 350–450 m³/h, kraavi kaevamine 200–250 m³/h; kallutatav 10°); hüdrokraana (ulatus 7,3 m, tõstevõime 2 t); hüdrovints (25 t, 100 m trossi); tagumine kobesti (sügavus 0,5 m). TBK-kaitse ülerõhuga",
        "armor": "Keevitatud teras 14 mm"
      },
      "notes": {
        "chassis": "BAT-M on moderniseeritud teedeehituse variant.",
        "maxSpeedOffroad": "Teede puhastamisel kuni 6,8 km/h; maastikul pinnasteel kuni 35 km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BAT-2", "url": "https://odin.t2com.army.mil/WEG/Asset/da0ecdef49dc06c16dc85d8d77d913b6", "retrieved": "2026-11-10"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"},
        {"name": "Army Recognition: The Soviet-era BAT-2 engineering bulldozer still defends Ukraine's frontline (2023)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/the-soviet-era-bat-2-engineering-bulldozer-stills-defends-ukraine-s-frontline", "retrieved": "2026-11-27"}
      ]
    },
    "MTU-72": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Sillatank kuni 18 m laiuse kraavi või veetõkke ületamiseks.",
        "crew": "2",
        "chassis": "T-72 (T-72B/T-72M1 ümberehitus)",
        "combatWeight": 40,
        "length": 11.64,
        "width": 3.46,
        "height": 3.38,
        "engine": "V-84-1 mitmekütusediisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 500,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.0,
        "caliber": 7.62,
        "mainArmament": "7,62 mm PKMB kuulipilduja katusel",
        "specialEquipment": "Silla pikkus 20 m, laius 3,3 m, sõiduraja laius 1,0 m, kaal 6,4 t, kandevõime 50 t. Silla paigaldus 3 min, äravõtmine 8 min; hüdrauliline eesmine tugisae (ka buldooserina). TBK-kaitse ja termosuitsuseade",
        "armor": "T-72 soomuskere; torni asemel sillaseade"
      },
      "notes": {
        "chassis": "Toodetud kuni 1990. aastani.",
        "fording": "Ettevalmistusega kuni 4,5 m."
      },
      "sources": [
        {"name": "Wikipedia: MT-55", "url": "https://en.wikipedia.org/wiki/MT-55", "retrieved": "2026-10-23"},
        {"name": "Military-Today: MTU-72", "url": "https://www.military-today.com/engineering/mtu_72.htm", "retrieved": "2026-11-27"}
      ]
    },
    "PTS-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi pioneeripataljon",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Ujuv roomiktransportöör raskete veokite, relvade, varustuse ja laskemoona veoks üle veetõkete.",
        "chassis": "MT-T (T-64 komponentidega)",
        "length": 12,
        "width": 3.3,
        "height": 3.17,
        "engine": "V-64-4 mitmekütusediisel",
        "power": 710,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 12,
        "range": 500,
        "amphibious": true,
        "specialEquipment": "Kandevõime 12 t; tagumine pealelaadimisramp."
      },
      "notes": {
        "specialEquipment": "PTS-2 ja PTS-M on ühtlasi kasutusel UR-83P miinitõrjelaengu veopaatidena."
      },
      "sources": [
        {"name": "Wikipedia: PTS (vehicle)", "url": "https://en.wikipedia.org/wiki/PTS_(vehicle)", "retrieved": "2026-10-23"},
        {"name": "FMSO (Grau): Russian Deliberate River Crossings (2019)", "url": "https://community.apan.org/cfs-file/__key/docpreview-s/00-00-13-80-40/2019_2D00_12_2D00_04-Russian-Deliberate-River-Crossings-_2800_Grau_2900_.pdf", "retrieved": "2026-11-26"},
        {"name": "Tank-AFV: PTS-2", "url": "https://tank-afv.com/coldwar/ussr/PTS-2.php", "retrieved": "2026-11-27"}
      ]
    },
    "PTS-4": {
      "status": "unverified",
      "values": {
        "purpose": "Ujuv roomiktransportöör (toodetud alates 2014. aastast) raskete koormate veoks üle veetõkete.",
        "chassis": "T-80",
        "combatWeight": 33,
        "length": 8.3,
        "width": 3.3,
        "height": 3.2,
        "engine": "Mitmekütusemootor (võimsus ei ole avaldatud)",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 15,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.65,
        "trench": 2.5,
        "caliber": 12.7,
        "mainArmament": "12,7 mm kuulipilduja kaugjuhitavas relvajaamas",
        "specialEquipment": "Kandevõime 12 t maismaal ja 18 t vees; täielikult suletud kabiin; suuremad sõukruvid",
        "armor": "Suletud kabiin kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "maxSpeedRoad": "Kiirused on projekteeritud/oodatavad väärtused."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTS-4", "url": "https://odin.t2com.army.mil/WEG/Asset/9a1c6e01a049e71449a2c4cddf2d11a3", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: PTS (vehicle)", "url": "https://en.wikipedia.org/wiki/PTS_(vehicle)", "retrieved": "2026-10-23"}
      ]
    },
    "MTU-90": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tankibrigaad",
        "purpose": "Sillatank, mis paigaldab silla kraavi, kanali või väikese jõe ületamiseks; koos TMM-6-ga ehitab mitmest osast koosneva silla.",
        "crew": "2",
        "chassis": "T-90S",
        "combatWeight": 45.5,
        "length": 9.6,
        "width": 3.52,
        "height": 3.92,
        "engine": "V-84MS mitmekütusediisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 750,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "mainArmament": "Relvastust pole",
        "specialEquipment": "Silla ulatus 24 m (kokku 25 m), sõiduraja laius 3,55 m, kaal 8,6 t, kandevõime 50 t; paigaldus umbes 2,5 min, silla saab paigaldada kabiinist. Võimeline end sisse kaevama. TBK-kaitse ja suitsuseade"
      },
      "notes": {
        "chassis": "Variant MTU-90M: silla ulatus 19 m, kandevõime 60 t, kasutusele 2013–2017."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MTU-90", "url": "https://odin.t2com.army.mil/WEG/Asset/70a2c1e76211ad04cae33a71fb04c314", "retrieved": "2026-11-10"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"}
      ]
    },
    "MT-55A": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Sillatank kraavide ja veetõkete ületamiseks.",
        "crew": "2",
        "chassis": "T-55A",
        "combatWeight": 36,
        "length": 9.88,
        "width": 3.3,
        "height": 3.35,
        "engine": "V-55 12-silindriline diisel",
        "power": 580,
        "maxSpeedRoad": 50,
        "range": 690,
        "verticalStep": 0.7,
        "fording": 1.4,
        "mainArmament": "Relvastust pole (torn eemaldatud)",
        "specialEquipment": "Sild 18 m, kandevõime kuni 50 t"
      },
      "notes": {
        "chassis": "MT-55 oli seeriaeelne mudel (sild MT-34); MT-55A on seeriaversioon."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-55A", "url": "https://odin.t2com.army.mil/WEG/Asset/0cb3922a45a98414dcb4ecfd04445e2a", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: MT-55", "url": "https://en.wikipedia.org/wiki/MT-55", "retrieved": "2026-10-23"}
      ]
    },
    "MTU-20": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Sillatank (toodetud 1963–1977) kuni 18 m laiuste kraavide ületamiseks.",
        "crew": "2",
        "chassis": "T-55A",
        "combatWeight": 37,
        "length": 11.64,
        "width": 3.3,
        "height": 3.4,
        "engine": "V-55A diisel",
        "power": 580,
        "maxSpeedRoad": 54,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.8,
        "trench": 2.7,
        "fording": 1.4,
        "specialEquipment": "Silla pikkus 20 m, laius 3,3 m, kaal 7 t, kandevõime 50 t (teistel andmetel 60 t); paigaldus 5 min, äravõtmine 10 min"
      },
      "notes": {
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MTU-20", "url": "https://odin.t2com.army.mil/WEG/Asset/59d9d1b2924ba8b7d43f2f78cc521f20", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts.com: MTU-20", "url": "https://www.armedconflicts.com/topic/view/22720", "retrieved": "2026-10-23"}
      ]
    },
    "UR-83P": {
      "status": "unverified",
      "values": {
        "purpose": "Kantav reaktiivne miinitõrjeseade koridori rajamiseks läbi miinivälja.",
        "crew": "2",
        "weightKg": 1810,
        "mineClearing": "Reaktiivne miinitõrjelaeng UZP-83 (UZP-77 modifikatsioon): laengu pikkus 120 m, umbes 1380 kg lõhkeainet PVV-4 (11,5 kg/m); kaks raketimootorit DM-70; lastakse 100–440 m kaugusele; puhastab vähemalt 6 m (tankitõrjemiiniväljas) või 12 m (jalaväemiiniväljas) laiuse koridori",
        "specialEquipment": "Laskerakis, ankur, pidurdustross ja mehaaniline süütur VR-04 (plahvatus 60–120 s pärast pidurdamist). Tulepositsioon maapinnal, kaevikus, auto-/haagisekastis, ujuval PTS-M/PTS-2 kandjal või laevatekil. Komplekti mõõtmed lahinguasendis 1,5×1,5×2,6 m",
        "emplacementTime": "90 min (kokkupanek)"
      },
      "notes": {
        "specialEquipment": "Transporditakse osadeks võetuna, 2 komplekti ühel maastikuveokil (ZIL-131, Ural-4320, KamAZ-53105)."
      },
      "sources": [
        {"name": "Fenix Insight: UR-83P", "url": "https://metis.fenixinsight.com/munition/demolitionStore/ur-83p", "retrieved": "2026-10-23"}
      ]
    },
    "ZRP-2": {
      "status": "unverified",
      "values": {
        "purpose": "Seljakotis kantav miinitõrjelaeng jalaväele läbipääsu rajamiseks miiniväljas.",
        "crew": "1–2",
        "combatWeight": 0.034,
        "weightKg": 34,
        "mineClearing": "Miinitõrjelaeng DKR-150 (pikkus 60 m) raketimootoriga D-ZRP-2M; lastakse kuni 160 m kaugusele; puhastab 0,4 m laiuse ja 54–60 m pikkuse läbipääsu jalaväemiiniväljas",
        "specialEquipment": "Laeng, raketimootor, ühendustross, süütur, pidurdustross, käivitusseade, ankrud ja kandekott (kokku 34 kg). Mehaaniline süütur plahvatab laengu kaugjuhtimisega; sihtimine pidurdustrossiga",
        "emplacementTime": "Umbes 5 min (kokkupanek)"
      },
      "notes": {
        "mineClearing": "Tänapäevased miinid võivad olla varustatud süütega, mis on mõeldud selliste laengute vastu."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: ZRP-2", "url": "https://odin.t2com.army.mil/WEG/Asset/b4323a16ec2e1e2ba2a6f1cc4270758b", "retrieved": "2026-10-28"},
        {"name": "Armament Research Services: ZRP-2 (2014)", "url": "https://armamentresearch.com/?p=772", "retrieved": "2026-10-23"}
      ]
    },
    "TMM-3": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi pioneeripataljon",
        "purpose": "Raske mehhaniseeritud sillaauto; neli sillaautot ületavad kuni 40 m laiuse tõkke.",
        "crew": "2",
        "chassis": "KrAZ-255B 6×6",
        "combatWeight": 19.5,
        "length": 9.3,
        "width": 3.2,
        "height": 3.15,
        "engine": "YaMZ-238 V8 diisel",
        "power": 240,
        "maxSpeedRoad": 71,
        "range": 825,
        "amphibious": false,
        "gradient": 58,
        "verticalStep": 0.6,
        "trench": 0.68,
        "specialEquipment": "Kääridega (kokkuklapitav) sild pikkusega 10,5 m, laius 3,8 m, kaal 7 t; laotatakse tagurpidi sõidu suunas. Kandevõime 50 t (teistel andmetel 60 t). TBK-kaitset pole",
        "armor": "Soomustamata",
        "emplacementTime": "Umbes 72 min (täielik paigaldus)"
      },
      "notes": {
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TMM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/979cfbe38de5c9e8a8a4bb56bbb719f8", "retrieved": "2026-11-10"},
        {"name": "FMSO (Grau): Russian Deliberate River Crossings (2019)", "url": "https://community.apan.org/cfs-file/__key/docpreview-s/00-00-13-80-40/2019_2D00_12_2D00_04-Russian-Deliberate-River-Crossings-_2800_Grau_2900_.pdf", "retrieved": "2026-11-26"}
      ]
    },
    "TMM-6": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Brigaadi pioneeripataljon",
        "purpose": "Raske mehhaniseeritud sillaauto: kuus sillaautot ehitavad 102 m silla.",
        "crew": "2",
        "chassis": "MZKT-7930 8×8",
        "combatWeight": 42,
        "length": 14.375,
        "width": 3.4,
        "height": 3.76,
        "engine": "YaMZ-846 diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "range": 1100,
        "amphibious": false,
        "gradient": 45,
        "sideSlope": 30,
        "verticalStep": 0.6,
        "trench": 2,
        "fording": 1.4,
        "specialEquipment": "Kääridega kokkuklapitav sild pikkusega 17 m, laius 4 m, kandevõime 60 t; veetõkke sügavus 2–5 m. Läbilaskevõime kuni 400 sõidukit tunnis kiirusega 30 km/h. TBK-kaitse",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "Töötab koos MTU-90-ga mitmelõiguliste sildade ehitamisel."
      },
      "sources": [
        {"name": "Wikipedia: TMM-6", "url": "https://en.wikipedia.org/wiki/TMM-6", "retrieved": "2026-10-23"},
        {"name": "FMSO (Grau): Russian Deliberate River Crossings (2019)", "url": "https://community.apan.org/cfs-file/__key/docpreview-s/00-00-13-80-40/2019_2D00_12_2D00_04-Russian-Deliberate-River-Crossings-_2800_Grau_2900_.pdf", "retrieved": "2026-11-26"}
      ]
    },
    "Pontoonsillapark": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Kokkuvolditav pontoonsildade komplekt PMP sildade ja parvede ehitamiseks üle veetõkete.",
        "crew": "3",
        "chassis": "KrAZ-255B 6×6 (pontoonide vedaja)",
        "fording": 1.2,
        "specialEquipment": "Täiskomplekt 32 jõepontooni, 4 kaldapontooni ja 12 sillapaati (poolkomplekt 16+2). Pontoon laotub veele sattudes automaatselt. Silla pikkus kuni 227 m (60 t) või 382 m (20 t); sõiduraja laius 6,5 m; ehituskiirus kuni 7 m/min; suurim voolukiirus 2 m/s. Parvedena: 40 t (2 pontooni, 8 min) kuni 170 t (1+8 pontooni)"
      },
      "notes": {
      },
      "sources": [
        {"name": "Wikipedia: PMP Floating Bridge", "url": "https://en.wikipedia.org/wiki/PMP_Floating_Bridge", "retrieved": "2026-10-23"}
      ]
    },
    "BTM-4M": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["prototype"], "asOf": 2026},
        "purpose": "Kiire kraavikaevur (jäi prototüübiks).",
        "crew": "2",
        "specialEquipment": "Töökiirus tavalises pinnases 1000 m/h ja külmunud pinnases 250 m/h"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTM-3 (variant BTM-4M)", "url": "https://odin.t2com.army.mil/WEG/Asset/41714363385ece02178899f40f23b494", "retrieved": "2026-11-10"}
      ]
    },
    "BTM-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Kiire kraavikaevur (toodetud alates 1957. aastast) kaitse- ja sidekraavide kaevamiseks.",
        "crew": "2",
        "chassis": "AT-T",
        "combatWeight": 27.5,
        "length": 7,
        "width": 3.17,
        "height": 4.32,
        "engine": "V-401 diisel",
        "power": 305,
        "maxSpeedRoad": 36,
        "range": 450,
        "amphibious": false,
        "trench": 1.8,
        "fording": 1.1,
        "specialEquipment": "Kopprootor 8 kopaga (igaüks 160 l); kraavi sügavus 1,1 m (põhiprofiil) kuni 1,5 m; töökiirus 270–810 m/h, õhukese (0,4–0,5 m) kraavi puhul kuni 1200–1400 m/h; väikseim pöörderaadius 25 m; buldooserisae. TBK-kaitse",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest",
        "emplacementTime": "Umbes 10 min (sõidurežiimilt kaevamisele)"
      },
      "notes": {
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/41714363385ece02178899f40f23b494", "retrieved": "2026-10-28"}
      ]
    },
    "MDK-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Kraavikaevamismasin tankitõrjekraavide ning sõidukite ja laskepositsioonide süvendite kaevamiseks.",
        "crew": "2",
        "chassis": "MT-T",
        "combatWeight": 39.5,
        "length": 10.22,
        "width": 3.23,
        "height": 4.04,
        "engine": "V-64-4 diisel",
        "power": 710,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 35,
        "range": 500,
        "specialEquipment": "Kaevamisel pikkus 11,75 m, laius 4,6 m, kõrgus 3,25 m; kraavi laius 3,5 m, sügavus kuni 3 m; tootlikkus 400–500 m³/h; buldooserisae; TBK-kaitse ülerõhuga",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "Ei ole õhutransporditav ega langevarjuga heidetav."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MDK-3", "url": "https://odin.t2com.army.mil/WEG/Asset/98fee77354aa89adca1830078f6c33f5", "retrieved": "2026-11-10"},
        {"name": "Weaponsystems.net: MDK-3", "url": "https://weaponsystems.net/system/307-MDK-3", "retrieved": "2026-11-27"}
      ]
    },
    "MDK-2M": {
      "status": "unverified",
      "values": {
        "purpose": "Kraavikaevamismasin suurte süvendite ja tankitõrjekraavide kaevamiseks.",
        "crew": "2",
        "chassis": "AT-T",
        "combatWeight": 28,
        "length": 8,
        "width": 3.4,
        "height": 3.95,
        "engine": "V-401 V-12 diisel",
        "power": 415,
        "maxSpeedRoad": 35,
        "range": 500,
        "gradient": 80,
        "sideSlope": 22,
        "specialEquipment": "Kraavi sügavus kuni 4,5 m, laius ülal 4–4,7 m ja all 3,5 m; töökiirus 387 m³/h (teistel andmetel 300 m³/h). Pikkus kaevamisel 10,23 m, kõrgus 3,48 m; TBK-kaitse ülerõhuga",
        "armor": "Soomustamata"
      },
      "notes": {
      },
      "sources": [
        {"name": "Wikipedia: MDK-2M", "url": "https://en.wikipedia.org/wiki/MDK-2M", "retrieved": "2026-10-23"}
      ]
    },
    "Pantsir-S1/SA-22 Greyhound": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Lähi- ja lühimaa õhutõrjekahur- ja raketikompleks objektide ning pikamaa õhutõrjesüsteemide kaitseks õhusõidukite, täppismoona, tiibrakettide ja droonide eest.",
        "typicalUnit": "VKS õhutõrjeraketipolk",
        "crew": "3",
        "chassis": "KamAZ-6560 8×8",
        "combatWeight": 20,
        "length": 10.3,
        "width": 2.5,
        "height": 3.27,
        "engine": "KamAZ-740.35-400 diisel",
        "power": 400,
        "maxSpeedRoad": 90,
        "range": 1000,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.6,
        "trench": 2,
        "fording": 1.8,
        "caliber": 30,
        "mainArmament": "2 × kaksiktoruline 30 mm automaatkahur 2A38M (kokku 4 toru), 1400 lasku",
        "samMissiles": "12 × 57E6 / 57E6-E (kahes kuue toruga blokis; kahe astmega, raadio- ja optiline käsujuhtimine, 75–76 kg, lõhkepea 16–20 kg)",
        "rateOfFire": 5000,
        "sensors": "Avastusradar 2RL80 (S-sagedusala; avastab kuni 40 sihtmärki, avastuskaugus 32–36 km, kuni 45 km); jälgimis- ja juhtimisradar 1RS2-1E (24–28 km); optilis-elektrooniline kanal (soojuskaamera ja IR-suunamõõtja, 17–26 km); reaktsiooniaeg 4–6 s; kuni 4 raketti korraga 4 sihtmärgile; 10–12 sihtmärki minutis",
        "samRange": {"min": 1200, "max": 20000},
        "samAltitude": {"min": 5, "max": 15000},
        "cannonRangeAir": 4000,
        "cannonAltitudeAir": 3000,
        "specialEquipment": "Indeks 96K6; tegutseb autonoomselt või patarei koosseisus; TBK-kaitse",
        "armor": "Soomustamata, kerge kaitse kildude eest",
        "emplacementTime": "Umbes 5 min"
      },
      "notes": {
        "chassis": "Pantsir-SM (uuem variant) on soomustatud kabiiniga.",
        "combatWeight": "Tühimass 14,85 t, max koormus 20 t."
      },
      "sources": [
        {"name": "Wikipedia: Pantsir missile system", "url": "https://en.wikipedia.org/wiki/Pantsir_missile_system", "retrieved": "2026-10-23"},
        {"name": "Armada International: To Kill a Pantsir (2024)", "url": "https://www.armadainternational.com/2024/07/to-kill-a-pantsir-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Army Receives New Pantsir Missile Systems in Two Variants", "url": "https://militarnyi.com/en/news/russian-army-receives-new-pantsir-missile-systems-in-two-variants/", "retrieved": "2026-11-25"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "Buk-M1/SA-11 Gadfly": {
      "status": "unverified",
      "values": {
        "purpose": "Keskmaa õhutõrjeraketikompleksi iseliikuv laskeseade, mis avastab, jälgib ja tabab sihtmärke ise.",
        "typicalUnit": "Armee õhutõrjeraketibrigaad",
        "crew": "4",
        "chassis": "GM-569",
        "combatWeight": 34,
        "length": 9.3,
        "width": 3.25,
        "height": 3.8,
        "engine": "Diisel",
        "power": 710,
        "maxSpeedRoad": 65,
        "range": 500,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 1,
        "trench": 1.5,
        "samMissiles": "4 × 9M38M1 (685–690 kg, lõhkepea 70 kg, kiirus 850 m/s, poolaktiivne radarsihtimine)",
        "samRange": {"min": 3000, "max": 35000},
        "samAltitude": {"min": 15, "max": 22000},
        "sensors": "Avastusradar 9S18M1 „Snow Drift“ (avastuskaugus kuni 85 km); tulejuhtimis- ja valgustusradar 9S35 „Fire Dome“ laskeseadmel; reaktsiooniaeg 15–18 s; sihtmärgi tabamistõenäosus 0,8–0,95 (õhusõiduk)",
        "specialEquipment": "Kuulub pataljoni 9K37M1 koosseisu koos avastusradari 9S18M1-ga",
        "armor": "Kerge soomus kaitseb kergrelvade tule ja mürsukildude eest",
        "emplacementTime": "5 min"
      },
      "notes": {
        "chassis": "Buk-M1-2 on moderniseeritud versioon (rakett 9M317)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Buk-M1/SA-11 Gadfly", "url": "https://odin.t2com.army.mil/WEG/Asset/8d22cfba26b96eb3700ef45e5c234d76", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Buk missile system", "url": "https://en.wikipedia.org/wiki/Buk_missile_system", "retrieved": "2026-10-23"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: 49th Anti-Aircraft Missile Brigade", "url": "https://en.wikipedia.org/wiki/49th_Anti-Aircraft_Missile_Brigade", "retrieved": "2026-11-25"}
      ]
    },
    "Buk-M3/SA-27 Gollum": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Keskmaa õhutõrjeraketikompleksi iseliikuv laskeseade õhusõidukite, tiibrakettide, taktikaliste ballistiliste rakettide ja täppismoona vastu.",
        "typicalUnit": "Armee õhutõrjeraketibrigaad",
        "crew": "4",
        "chassis": "GM-5955",
        "combatWeight": 34,
        "length": 7.5,
        "width": 3.3,
        "height": 5.1,
        "engine": "Diisel",
        "power": 710,
        "maxSpeedRoad": 65,
        "range": 500,
        "samMissiles": "6 × 9M317M (581 kg, lõhkepea 62 kg, kiirus kuni 1550 m/s); täiskoormusega 9M317M/9R31M raketid",
        "samRange": {"min": 2500, "max": 70000},
        "samAltitude": {"min": 15, "max": 35000},
        "sensors": "Radar 9S36M 22 m mastil (avastab tiibrakette 5 m kõrgusel kuni 70 km kauguselt); ülevaaderadar 9S38 (avastuskaugus kuni 160 km); reaktsiooniaeg umbes 8–10 s; kuni 36 sihtmärki korraga pataljonis, jälgib kuni 300 sihtmärki; max sihtmärgi kiirus 3000 m/s",
        "specialEquipment": "Pataljonis koos laadimismasinaga 9A317M ja juhtimispunktiga 9S510M",
        "armor": "Kerge soomus kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "sources": [
        {"name": "Wikipedia: Buk missile system", "url": "https://en.wikipedia.org/wiki/Buk_missile_system", "retrieved": "2026-10-23"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"},
        {"name": "Defense Mirror: Almaz Antey Speeds up Deliveries of Buk M3 Anti Aircraft Systems to Russian Troops (Oct 2023)", "url": "https://www.defensemirror.com/news/35188/Almaz_Antey_Speeds_up_Deliveries_of_Buk_M3_Anti_Aircraft_Systems_to_Russian_Troops", "retrieved": "2026-11-25"}
      ]
    },
    "S-400 / S-300": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Pika- ja keskmaa õhutõrjeraketikompleks õhusõidukite, tiibrakettide ja ballistiliste rakettide tõrjeks (S-300P kasutusel alates 1978. aastast, S-400 alates 2007. aastast).",
        "typicalUnit": "VKS õhutõrjeraketipolk",
        "chassis": "Radarid ja juhtimispunkt: MZKT-7930 8×8; laskeseade 5P85TE2: poolhaagis BAZ-64022 6×6 veokiga (või MAZ-543M)",
        "samMissiles": "S-400: 40N6E (380–400 km), 48N6DM/E3 (240 km), 48N6E2 (200 km), 9M96E2 (120 km), 9M96E (40 km); S-300P: 5V55K 47 km, 5V55R 75 km, 5V55U 150 km, 48N6 150 km. Ühel laskeseadmel kuni 4 raketti (40N6E puhul 2–3)",
        "samRange": {"min": 2000, "max": 380000},
        "samAltitude": {"min": 10, "max": 30000},
        "sensors": "S-400: avastusradar 91N6E (S-sagedusala, kuni 600 km, 300 sihtmärki), kõrgusradar 96L6E (kuni 300 km), tulejuhtimisradar 92N6E (kuni 340–400 km, jälgib 20 sihtmärki); lisaks Nebo-M, Protivnik-GE, Gamma-S1E. S-300: 30N6 „Flap Lid“, 64N6 „Big Bird“, 96L6, 36D6 „Tin Shield“, 76N6 „Clam Shell“",
        "specialEquipment": "Üks pataljon: 6–12 laskeseadet, juhtimispunkt 55K6E (Ural-532301), 5T58-2 transpordimasinad, 22T6-2 laadimiskraana ja radarid. Patarei 3 laskeseadet. Kogu süsteem (8 pataljoni) juhib kuni 72 laskeseadet ja 384 raketti; samaaegselt kuni 36 sihtmärki ja 72 raketti (kuni 2 raketti sihtmärgi kohta)",
        "emplacementTime": "5 min marsist (35 s ooterežiimist)"
      },
      "notes": {
        "samRange": "Kompleksi miinimumkaugus aerodünaamilistele sihtmärkidele 2 km ja ballistilistele 5 km."
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: S-300 missile system", "url": "https://en.wikipedia.org/wiki/S-300_missile_system", "retrieved": "2026-10-23"},
        {"name": "Armada International: To Kill a Pantsir (2024)", "url": "https://www.armadainternational.com/2024/07/to-kill-a-pantsir-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "CNA: Russian Forces in the Western Military District (2021)", "url": "https://www.cna.org/reports/2021/06/Russian-Forces-in-the-Western-Military-District.pdf", "retrieved": "2026-11-25"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "Tor": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Lühimaa õhutõrjeraketikompleksi iseliikuv laskeseade; otsib sihtmärke liikvel olles, tulistab seisatuselt.",
        "typicalUnit": "Diviisi õhutõrjepolk",
        "crew": "3",
        "chassis": "GM-5955 (algne Tor: GM-355)",
        "combatWeight": 32,
        "length": 8,
        "width": 3.2,
        "height": 5.1,
        "engine": "V-12 diisel",
        "power": 780,
        "maxSpeedRoad": 65,
        "range": 580,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 1,
        "trench": 2,
        "fording": 1,
        "samMissiles": "8 × 9M330 (165–167 kg, lõhkepea 15 kg, kiirus kuni Mach 2,8–3, raadiokäsujuhtimine; hoitakse vertikaalselt kahes neljases grupis)",
        "samRange": {"min": 1500, "max": 12000},
        "samAltitude": {"min": 10, "max": 6000},
        "sensors": "Avastusradar „Scrum Half“ (3D, G/H-sagedusala): õhusõidukid 25–27 km, helikopterid 12 km, droonid 9–15 km, jälgib kuni 48 sihtmärki; sihtmärgi jälgimisradar (J/K-sagedusala, kuni 20 km); reaktsiooniaeg 5–12 s; 2 sihtmärki ja 4 raketti korraga",
        "specialEquipment": "Täielik ümberlaadimine 18 min; kuni 4 raketti korraga; TBK-kaitse",
        "armor": "Täielikult keevitatud teras"
      },
      "notes": {
        "chassis": "Algne Tor (9K330, 1986) kasutas šassiid GM-355; osa allikate andmed (32 t, 780 hj, 8,0×3,2×4,0 m) kirjeldavad seda varianti."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Tor", "url": "https://odin.t2com.army.mil/WEG/Asset/5bcf872fc08701649d8de5b1fbd87aee", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Tor missile system", "url": "https://en.wikipedia.org/wiki/Tor_missile_system", "retrieved": "2026-10-23"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"},
        {"name": "CNA: The Russian Army – Organization and Modernization (2019)", "url": "https://www.cna.org/reports/2019/10/IOP-2019-U-021801-Final.pdf", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Belarus boosts joint air defense with Russia as new Tor-M2K systems strengthen regional shield", "url": "https://armyrecognition.com/news/army-news/2025/belarus-boosts-joint-air-defense-with-russia-as-new-tor-m2k-systems-strengthen-regional-shield", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Transfers Eighth Tor-M2K Air Defense Battery to Belarus", "url": "https://militarnyi.com/en/news/russia-transfers-eighth-tor-m2k-air-defense-battery-to-belarus/", "retrieved": "2026-11-25"}
      ]
    },
    "ZSU-23-4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Iseliikuv neljaraudne 23 mm õhutõrjekahur; saab tulistada liikvel olles.",
        "typicalUnit": "Motolaskur- või tankipolgu õhutõrjepataljon",
        "crew": "4",
        "chassis": "GM-575",
        "combatWeight": 20.5,
        "length": 6.54,
        "width": 3.3,
        "height": 2.58,
        "engine": "V-6R-1 diisel",
        "power": 290,
        "maxSpeedRoad": 50,
        "maxSpeedOffroad": 30,
        "range": 450,
        "amphibious": false,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.8,
        "fording": 1,
        "caliber": 23,
        "mainArmament": "4 × 23 mm 2A7 automaatkahur (AZP-23 „Amur“), 2000 lasku",
        "rateOfFire": 3400,
        "cannonRangeAir": 2500,
        "cannonAltitudeAir": 1500,
        "cannonRangeArmored": 2000,
        "sensors": "Radar RPK-2 „Tobol“ / 1RL33 (Ku-sagedusala, NATO „Gun Dish“): avastab õhusihtmärke kuni 20 km, jälgib kuni 13 km; reaktsiooniaeg 12–18 s; kõrgusnurk −4…+85°",
        "specialEquipment": "TBK-kaitse ja 81 mm suitsugranaadiheitjad",
        "armor": "Keevitatud teras: kere kuni 15 mm, torn 9,2 mm"
      },
      "notes": {
        "rateOfFire": "Üks toru 850–1000 lasku/min; praktiline kiirus 400 lasku/min.",
        "gradient": "Teistel andmetel 30° ≈ 58%.",
        "height": "Radar üles tõstetud 3,57–3,75 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: ZSU-23-4", "url": "https://odin.t2com.army.mil/WEG/Asset/d4cb684d59fa9e42f8fbc8224c92972a", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: ZSU-23-4 Shilka", "url": "https://en.wikipedia.org/wiki/ZSU-23-4_Shilka", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Russian Ground Forces build up air defense – Part 1", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/analysis-defense-and-security-industry/analysis-russian-ground-forces-build-up-air-defense-part-1", "retrieved": "2026-11-25"},
        {"name": "ArmyInform: How the Shilka has changed – its history and current role in the war", "url": "https://armyinform.com.ua/en/2025/11/20/how-the-shilka-has-changed-its-history-and-current-role-in-the-war/", "retrieved": "2026-11-25"}
      ]
    },
    "SA-8B Gecko": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Lühimaa õhutõrjeraketikompleksi Osa iseliikuv laskeseade; otsib ja jälgib sihtmärke liikvel olles, tulistab seisatuselt.",
        "typicalUnit": "Diviisi õhutõrjepolk",
        "crew": "5",
        "chassis": "BAZ-5937 6×6 (ujuv)",
        "combatWeight": 17.5,
        "length": 9.14,
        "width": 2.75,
        "height": 4.2,
        "engine": "2D20B diisel",
        "power": 300,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 8,
        "range": 500,
        "amphibious": true,
        "verticalStep": 0.5,
        "trench": 1.2,
        "samMissiles": "6 × 9M33 (9M33M2 / M3; 126–170 kg, lõhkepea 19–40 kg, raadiokäsujuhtimine)",
        "samRange": {"min": 1500, "max": 10000},
        "samAltitude": {"min": 25, "max": 5000},
        "sensors": "Radar „Land Roll“ 1S51M3: otsing (G/H-sagedusala) 30–35 km, jälgimine (J) 25–30 km, raketijuhtimine (I) 20–25 km; reaktsiooniaeg umbes 26 s",
        "specialEquipment": "Patarei: 4 lahingumasinat + 2 laadimismasinat, ümberlaadimine 5 min; TBK-kaitse",
        "armor": "Kerge soomus"
      },
      "notes": {
        "samRange": "9M33M3 laskekaugus kuni 15 km ja kõrgus 10–12 000 m."
      },
      "sources": [
        {"name": "Wikipedia: 9K33 Osa", "url": "https://en.wikipedia.org/wiki/9K33_Osa", "retrieved": "2026-10-23"},
        {"name": "CNA: The Russian Army – Organization and Modernization (2019)", "url": "https://www.cna.org/reports/2019/10/IOP-2019-U-021801-Final.pdf", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian Ground Forces build up air defense – Part 1", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/analysis-defense-and-security-industry/analysis-russian-ground-forces-build-up-air-defense-part-1", "retrieved": "2026-11-25"},
        {"name": "Tom Cooper / Donald Hill: Russian Air Defences of 2026, Part 1", "url": "https://xxtomcooperxx.substack.com/p/russian-air-defences-of-2026-part", "retrieved": "2026-11-25"}
      ]
    },
    "9S932-1 Barnaul-T": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Barnaul-T automatiseeritud õhutõrje juhtimissüsteemi luure- ja juhtimismoodul: õhutõrjepatarei juhtimispunkt, mis jagab sihtmärgiandmeid alluvatele õhutõrjevahenditele.",
        "typicalUnit": "Õhutõrjepatarei",
        "chassis": "MT-LBu (9S932-2: BTR-MD)",
        "sensors": "Radar 1L122-1; saab andmeid radaritelt 9S18M, 35N6, P-18M, P-19M või sidekeskuste R-166, R-166-0,5 ja MP-1IM kaudu"
      },
      "sources": [
        {"name": "Armedconflicts.com: Barnaul-T", "url": "https://www.armedconflicts.com/-t217337", "retrieved": "2026-10-23"},
        {"name": "The War Zone: Barnaul-T captured in Ukraine (2022)", "url": "https://www.twz.com/44981/ukraine-captured-one-of-russias-newest-air-defense-systems", "retrieved": "2026-11-25"},
        {"name": "The Barents Observer: Barnaul-T comes to motorized rifle brigade in Pechenga", "url": "https://thebarentsobserver.com/en/node/9171", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russian Airborne Troops received Barnaul-T", "url": "https://defence-blog.com/?p=33700", "retrieved": "2026-11-25"}
      ]
    },
    "92N6 Gravestone": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "S-400 tulejuhtimisradar: jälgib sihtmärke ja juhib rakette.",
        "chassis": "MZKT-7930 8×8",
        "sensors": "Mitmefunktsiooniline faasantennradar, antenn 4×2 m",
        "radarBand": "I/J-sagedusala (8,5–10,5 GHz)",
        "radarRange": 400,
        "radarTargets": "Jälgib 20 sihtmärki; juhib kuni 12 raketti 40N6 kuni 6 sihtmärgi vastu"
      },
      "notes": {
        "radarRange": "Avastus- ja jälgimiskaugus 340–400 km."
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "64N6 Big Bird": {
      "status": "unverified",
      "values": {
        "purpose": "S-300P õhutõrjeraketipataljoni või -polgu avastusradar, mis annab sihtmärgiandmeid juhtimispunktile ja tulejuhtimisradarile.",
        "crew": "4",
        "chassis": "MAZ-74106 veok-poolhaagis (MAZ-543 perekond, 8×8)",
        "combatWeight": 60,
        "sensors": "Faasantennradar; antenni pöörlemine 12 s/tiir",
        "radarBand": "S-sagedusala (2,9–3,3 GHz)",
        "radarRange": 300,
        "radarTargets": "Kuni 300 sihtmärki korraga; sihtmärgi kiirus kuni 2788 m/s",
        "emplacementTime": "5 min"
      },
      "notes": {
        "sensors": "Uuem 91N6E („Big Bird“ / „Tombstone“, MZKT-7930): avastuskaugus kuni 600 km, 300 sihtmärki.",
        "radarRange": "Õhu- ja tiibraketisihtmärgid; ballistiliste rakettide stardid kuni 1000 km."
      },
      "sources": [
        {"name": "GlobalSecurity: 64N6 / 91N6E Tombstone / Big Bird", "url": "https://www.globalsecurity.org/military/world/russia/tombstone.htm", "retrieved": "2026-10-23"}
      ]
    },
    "35N6 Kasta-2E": {
      "status": "unverified",
      "values": {
        "purpose": "Liikuv madalal lendavate sihtmärkide avastusradar, S-300, S-400 jt õhutõrjesüsteemide lisaradar.",
        "crew": "2",
        "specialEquipment": "Pöörlemine 6–12 p/min. 2E1: kaks masinat, 2E2: kolm masinat (antenn, juhtimispunkt, diiselgeneraator) ja kaks haagist. Sisselülitus 3,3 min, kokkupakkimine 20 min",
        "radarBand": "UHF (830–882 MHz)",
        "radarRange": 58,
        "radarTargets": "Kasta 2E2: 50 jälge ja 200 märki",
        "emplacementTime": "20 min",
        "powerSupply": "Keskmiselt 1 kW (2E1), kuni 23 kW (2E2)"
      },
      "notes": {
        "radarRange": "Kasta 2E1: 32 km 100 m kõrgusel (antenn 5,4/14 m), 50 m mastiga 58 km; Kasta 2E2: 41 km, mastiga 55 km."
      },
      "sources": [
        {"name": "Wikipedia: Kasta 2E", "url": "https://en.wikipedia.org/wiki/Kasta_2E", "retrieved": "2026-10-23"}
      ]
    },
    "30N6 Tombstone": {
      "status": "unverified",
      "values": {
        "purpose": "S-300P tulejuhtimisradar: jälgib sihtmärke ja juhib rakette.",
        "chassis": "Flap Lid A: haagis (veab Ural-375, KrAZ-255 või KrAZ-260); Flap Lid B: veokil MZKT-7930",
        "sensors": "Faasantenn umbes 10 000 elemendiga; elevatsioon 0–50° (võimalik 75°); sihtmärki jälgitakse raketi kaudu",
        "radarBand": "I/J-sagedusala",
        "radarRange": 300,
        "radarTargets": "6 sihtmärki, igaühele 2 raketti"
      },
      "notes": {
        "radarRange": "Instrumentaalulatus; 30N6E1/E2 avastuskaugus 200 km."
      },
      "sources": [
        {"name": "RadarTutorial: 30N6E Flap Lid", "url": "https://www.radartutorial.eu/19.kartei/06.missile/karte005.en.html", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: S-300 missile system", "url": "https://en.wikipedia.org/wiki/S-300_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "96L6 Cheese Board": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "S-300 ja S-400 3D avastusradar õhusihtmärkide, sh droonide ja rakettide avastamiseks.",
        "crew": "3",
        "chassis": "MAZ-7930 (MZKT-7930) 8×8",
        "length": 11.7,
        "width": 3.07,
        "height": 2.92,
        "maxSpeedRoad": 65,
        "range": 650,
        "sensors": "Antenn 5,5×2,5 m ja 96 kiirgavat rida; pöörlemine 5 (madalad kõrgused) või 10 p/min (kõik kõrgused); kõrgusnurk −3…+1,5° / −1,5…+20°",
        "specialEquipment": "TBK-kaitse; sagedushüpe, kõrge mürakindlus; keskmine tõrgeteta tööaeg 10 000 h",
        "radarBand": "C-sagedusala (2,9–3,2 GHz)",
        "radarRange": 300,
        "radarTargets": "100 sihtmärki",
        "emplacementTime": "Kuni 5 min"
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "PPRU-1/PPRU-M1": {
      "status": "unverified",
      "values": {
        "purpose": "Õhutõrje luure- ja juhtimissoomuk, mis juhib õhutõrjesoomukeid ja taskuraketimeeskondi.",
        "typicalUnit": "Motolaskur- või tankipolgu õhutõrje juhtimispunkt",
        "crew": "5",
        "chassis": "MT-LBu",
        "combatWeight": 15.5,
        "length": 7.21,
        "width": 2.85,
        "height": 1.9,
        "engine": "YaMZ-238N V8 diisel",
        "power": 300,
        "maxSpeedRoad": 61.5,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 6,
        "amphibious": true,
        "sensors": "Radar 9S80 „Ovod-M-SV“ (X-sagedusala, digitaalne): õhusihtmärkide avastuskaugus 40 km (teistel andmetel 25–30 km), värskendus 5 s; jälgib kuni 99 sihtmärki (teistel andmetel umbes 35 automaatselt, kuni 8 samaaegselt juhitavat); IFF-päringu seade",
        "specialEquipment": "Sihtmärgi andmed edastatakse 2–3 s jooksul; pidev töö 24 h",
        "armor": "Keevitatud alumiiniumkere",
        "radioSets": "R-123MT ja R-111",
        "emplacementTime": "5 min"
      },
      "sources": [
        {"name": "Wikipedia: PPRU-1", "url": "https://en.wikipedia.org/wiki/PPRU-1", "retrieved": "2026-10-23"},
        {"name": "Air Power Australia: Air Defence Command Posts", "url": "https://www.ausairpower.net/APA-Rus-ADCP-CP.html", "retrieved": "2026-10-23"}
      ]
    },
    "1L119 NEBO-SVU": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Liikuv meetrilaineradar nähtamatuslennukite avastamiseks; S-300 ja S-400 kaugavastusradar.",
        "crew": "4",
        "chassis": "Ural või KamAZ veok (diiselgeneraatorid ED 2×30-T400); antenniseade poolhaagisel ChMZAP-9907.2 (2 masinat)",
        "sensors": "AESA-antenn 16×6 m (84 Yagi-elementi), vertikaalne polarisatsioon; 1 m² sihtmärk 20 km kõrgusel 380 km, 10 km kõrgusel 270 km; hävitaja (2,5 m²) 10 km kõrgusel 250 km; ballistilised sihtmärgid kuni 180 km kõrgusel",
        "radarBand": "VHF (150–180 MHz)",
        "radarRange": 500,
        "radarTargets": "Kuni 100 sihtmärki",
        "emplacementTime": "20–30 min",
        "powerSupply": "30 kW"
      },
      "notes": {
        "radarRange": "Avastuskaugus 380–500 km, jälgimiskaugus kuni 200 km; 500 m kõrgusel kuni 65 km."
      },
      "sources": [
        {"name": "Wikipedia: Nebo-SVU", "url": "https://en.wikipedia.org/wiki/Nebo-SVU", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Ukrainian military demonstrated the destroyed Nebo-SVU radar", "url": "https://militarnyi.com/en/news/ukrainian-military-demonstrated-the-destroyed-russian-nebo-svu-radar/", "retrieved": "2026-11-25"},
        {"name": "United24 Media: Nebo-SVU destroyed in Kherson region (2025)", "url": "https://united24media.com/latest-news/ukrainian-drone-strike-destroys-100-million-russian-nebo-svu-radar-in-kherson-region-5215", "retrieved": "2026-11-25"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "9M337 Sosna-R": {
      "status": "unverified",
      "values": {
        "purpose": "Lähitõrje õhutõrjeraketikompleksi iseliikuv laskeseade (kasutusel alates 2019. aastast).",
        "crew": "3",
        "chassis": "MT-LB",
        "length": 6.45,
        "width": 2.85,
        "height": 1.87,
        "engine": "YaMZ-238V V8 diisel",
        "power": 240,
        "maxSpeedRoad": 62,
        "maxSpeedWater": 6,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.7,
        "samMissiles": "12 × 9M337 Sosna-R (kahes kuue toruga konteinerblokis; 30,6 kg, koos konteineriga 42 kg; tandem-lõhkepea 7,2 kg; kiirus umbes 900 m/s; optiline laserkiirega juhtimine)",
        "samRange": {"min": 1300, "max": 10000},
        "samAltitude": {"min": 2, "max": 5000},
        "secondaryArmament": "Sosna-variant: kaksiktoruline 30 mm automaatkahur 2A38M (laskekaugus 4 km)",
        "sensors": "Optilis-elektrooniline sihtimissüsteem (soojuskaamera, TV-kaamera, laserkaugusmõõtja), passiivne avastus 360°; jälgib kuni 50 sihtmärki; reaktsiooniaeg 5–8 s; tuli liikvel olles",
        "specialEquipment": "Ümberlaadimine 10 min; TBK-kaitse",
        "armor": "Keevitatud teras 7–14 mm"
      },
      "sources": [
        {"name": "Wikipedia: 9M337 Sosna-R", "url": "https://en.wikipedia.org/wiki/9M337_Sosna-R", "retrieved": "2026-10-23"}
      ]
    },
    "2S25 Sprut-SD": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Õhudessantvägede kerge tankitõrje-liikurkahur; maaväes ja merejalaväes kasutatakse seda ka kerge ujuva tankina.",
        "crew": "3",
        "chassis": "Ujuv roomikšassii, hüdropneumaatiline vedrustus (kliirens 190–590 mm)",
        "combatWeight": 18,
        "length": 9.77,
        "width": 3.15,
        "height": 2.72,
        "engine": "2V-06-2S diisel",
        "power": 510,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "airDroppable": true,
        "verticalStep": 0.9,
        "trench": 2.8,
        "caliber": 125,
        "mainArmament": "125 mm sileraudne kahur 2A75 (autolaadur 22 lasku, kokku 40 lasku; APFSDS, HE-Frag, HEAT ja juhitav rakett 9M119 Svir)",
        "atgm": "9M119 Svir (laserkiirega juhitav, tulistatakse kahurist)",
        "rateOfFire": 8,
        "secondaryArmament": "Koaksiaalne 7,62 mm PKT (2000 lasku); hilisemates versioonides kaugjuhitav relvajaam",
        "sensors": "Stabiliseeritud kahur ja ülema sihik, laserkaugusmõõtja, ballistiline arvuti; igal meeskonnaliikmel päeva- ja öövaatlusseade",
        "specialEquipment": "Laskekaugus raketiga umbes 4 km; ujub veejoamootoritega, kuni merelaine 3 ballini; TBK-kaitse",
        "armor": "Alumiiniumkere komposiitkattega; ees ±40° kaitseb 23 mm mürsu eest 500 m kauguselt"
      },
      "notes": {
        "rateOfFire": "6–8 lasku/min autolaaduriga; käsitsi laadimine on tunduvalt aeglasem.",
        "armor": "Sprut-SDM1: täiustatud tulejuhtimissüsteem ja kaugjuhitav relvajaam."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S25 Sprut-SD", "url": "https://odin.t2com.army.mil/WEG/Asset/e4add5b7dcaa7115fe56f9817c7cc1dd", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2S25 Sprut-SD", "url": "https://en.wikipedia.org/wiki/2S25_Sprut-SD", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Rostec showcases new Sprut-SDM1 light tank with upgraded armor kit at Army-2024", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2024/rostec-showcases-new-sprut-sdm1-light-tank-with-upgraded-armor-kit-at-army-2024", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Rostec announces production of new 2S25M Sprut-SDM1 125mm amphibious light tank (2023)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2023/rostec-announces-production-of-new-2s25m-sprut-sdm1-125mm-amphibious-light-tank", "retrieved": "2026-11-27"}
      ]
    },
    "BTR-RD": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "purpose": "Õhudessantvägede tankitõrjemeeskondade soomuk.",
        "crew": "3",
        "chassis": "BTR-D",
        "combatWeight": 8.2,
        "length": 5.88,
        "width": 2.63,
        "height": 2.05,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 61,
        "maxSpeedWater": 10,
        "range": 450,
        "amphibious": true,
        "airDroppable": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.7,
        "trench": 2.5,
        "caliber": 7.62,
        "mainArmament": "2 × 7,62 mm PKT esikuulipilduja (2000 lasku)",
        "atgm": "9M113 Konkurs / 9M113M Konkurs-M või 9M111 Fagot; kaks stardiseadet 9P135M-1 (katusel parempoolses küljes); vähemalt 4, kuni 12 raketti",
        "atgmPenetration": "Konkurs: kuni 600 mm (RHA); Konkurs-M: 750–800 mm (aktiivsoomuse taga)",
        "atgmRange": {"min": 70, "max": 4000},
        "specialEquipment": "2019. aastal lisati Kornet (9K135)",
        "armor": "Alumiiniumkere: piiratud kaitse raskekuulipildujate tule eest; stardiseadme operaator on osaliselt kaitsmata"
      },
      "sources": [
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: BTR-RD", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/russian-paratroopers-receive-refurbished-bmd-2-and-btr-rd-armored-vehicles", "retrieved": "2026-10-23"}
      ]
    },
    "Kornet-D": {
      "status": "unverified",
      "values": {
        "purpose": "Tankitõrjekompleksi kandur (kasutusel alates 2015. aastast).",
        "crew": "2",
        "chassis": "AMS 233144 Tigr-M 4×4 (soomustatud maastur)",
        "length": 4.61,
        "engine": "GAZ-562 või Cummins B180/B215 diisel",
        "power": 215,
        "maxSpeedRoad": 140,
        "maxSpeedOffroad": 80,
        "range": 1000,
        "atgm": "8 × 9M133M Kornet-EM (tandem-kumulatiivne või termobaariline lõhkepea); laseb kaks raketti alla 1 s vahega samale või kahele sihtmärgile",
        "atgmRange": {"min": 150, "max": 8000},
        "atgmPenetration": "9M133M-2: 1100–1300 mm (RHA, aktiivsoomuse taga); betoon 3–3,5 m",
        "specialEquipment": "Laserkiirega juhtimine, automaatjälgija; Kornet-D1 on õhudessantvägede variant"
      },
      "notes": {
        "atgmRange": "9M133F-3 (kildlõhkepeaga) kuni 10 km; öösel lühem.",
        "engine": "Võimsus 197–215 hj sõltuvalt mootorist."
      },
      "sources": [
        {"name": "Wikipedia: Kornet-D", "url": "https://en.wikipedia.org/wiki/Kornet-D", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-23"}
      ]
    },
    "Mi-8": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armeelennuväe brigaad; Kopterpolk; Mereväe lennuvägi",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Keskmine transpordikopter; kasutatakse ka lendava juhtimispunkti, ründekopteri ja luurekopterina.",
        "crew": "3",
        "length": 18.4,
        "rotorDiameter": 21.29,
        "height": 5.65,
        "emptyWeight": 7.1,
        "maxTakeoffWeight": 13,
        "engine": "2 × Klimov TV3-117MT turbovõllmootor (1950 hj iga); Mi-8T: 2 × TV2-117A (1677 hj iga)",
        "power": 3900,
        "maxSpeed": 250,
        "cruiseSpeed": 240,
        "serviceCeiling": 4500,
        "ferryRange": 960,
        "payload": 4000,
        "troops": "24 dessantväelast või 12 kanderaami + 1 meditsiinitöötaja",
        "caliber": 7.62,
        "mainArmament": "1–2 PK kuulipildujat ukseavas",
        "hardpoints": 6,
        "ordnanceLoad": 4000,
        "airToGroundWeapons": "Rakettplokid UV-16-57 (S-5, 57 mm), pommid, tankitõrjeraketid 9M17 Falanga (Mi-8TV)",
        "combatRadius": 495,
        "fuelCapacity": 3700
      },
      "notes": {
        "combatRadius": "Ilma lisapaakideta."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-8", "url": "https://odin.t2com.army.mil/WEG/Asset/67c5c5f3d1654ac683797195fdd8fa51", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-8", "url": "https://en.wikipedia.org/wiki/Mil_Mi-8", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Mi-24/Mi-35": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armeelennuväe brigaad; Kopterpolk",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Ründekopter, mis veab ka dessantväelasi.",
        "crew": "2",
        "length": 18.6,
        "rotorDiameter": 17.2,
        "height": 6.5,
        "emptyWeight": 8.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117 turbovõllmootor (2200 hj iga)",
        "power": 4400,
        "maxSpeed": 320,
        "cruiseSpeed": 270,
        "serviceCeiling": 5750,
        "rateOfClimb": 15,
        "payload": 2400,
        "troops": "8 dessantväelast või 4 kanderaami",
        "caliber": 23,
        "mainArmament": "Mi-24V/VP/VM, Mi-35M: pööratav kaksiktoruline 23 mm kahur GSh-23L (450 lasku); Mi-24P: fikseeritud 30 mm kahur GSh-30K",
        "airToAirMissiles": "R-60 / R-60M (1–2 pülooni kohta)",
        "airToGroundWeapons": "Tankitõrjeraketid 9K114 Shturm; rakettplokid UB-32 (S-5), B-8V20 (S-8); raketid S-24 (240 mm); pommid kuni 500 kg, kassettpommid KGMU-2V",
        "hardpoints": 6,
        "armor": "Titaanist soomustatud kabiin ja kuulikindlad tuuleklaasid; ülerõhuga kabiin TBK-kaitseks; rootorilabad peavad väidetavalt vastu 12,7 mm kuulidele",
        "combatRadius": 450
      },
      "notes": {
        "hardpoints": "Sisemised punktid kuni 500 kg, välimised kuni 250 kg (kolm punkti mõlemal tiival)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-24/Mi-35", "url": "https://odin.t2com.army.mil/WEG/Asset/450917c08512fe367579bbf8ffb18bf8", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-24", "url": "https://en.wikipedia.org/wiki/Mil_Mi-24", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi (UA): Модернізований «Крокодил»: російський гелікоптер Ми-35М та їхні втрати в Україні (22 Oct 2025)", "url": "https://militarnyi.com/uk/articles/modernizovanyj-krokodyl-rosijskyj-gelikopter-my-35m-ta-yihni-vtraty-v-ukrayini/", "retrieved": "2026-11-25"},
        {"name": "Defense Express: Russia sends rare Mi-35P Phoenix helicopters to Guinea - how many does Russia really have (12 Jun 2026)", "url": "https://en.defence-ua.com/news/russia_sends_rare_mi_35p_phoenix_helicopters_to_guinea_how_many_does_russia_really_have-18787.html", "retrieved": "2026-11-25"},
        {"name": "Military Leak: Russian defense industry delivers new Mi-35M attack helicopters to Belarusian Air Force (Apr 2024)", "url": "https://militaryleak.com/2024/04/10/russian-defense-industry-delivers-new-mi-35m-attack-helicopters-to-belarusian-air-force", "retrieved": "2026-11-26"}
      ]
    },
    "Mi-28": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armeelennuväe brigaad; Kopterpolk",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ründekopter soomusmasinate vastu igal ajal ja iga ilmaga.",
        "crew": "2",
        "length": 17.01,
        "rotorDiameter": 17.2,
        "height": 3.82,
        "emptyWeight": 7.89,
        "maxTakeoffWeight": 11.5,
        "engine": "2 × Klimov VK-2500 turbovõllmootor (umbes 2200 hj iga)",
        "power": 4400,
        "maxSpeed": 282,
        "cruiseSpeed": 270,
        "serviceCeiling": 5700,
        "rateOfClimb": 13.6,
        "ferryRange": 1100,
        "gLimit": 3,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur 2A42 (250 lasku, horisontaalne pöördenurk ±110°)",
        "airToAirMissiles": "R-73",
        "airToGroundWeapons": "Tankitõrjeraketid Ataka-V (kuni 16); rakettplokid S-8 (40) või S-13 (10); Kh-25; pommid kuni 500 kg",
        "hardpoints": 4,
        "sensors": "Mi-28N: millimeeterlaineradar rootori mastil, soojus- ja telekaamera ning laserkaugusmõõtja",
        "troops": "Päästekabiin 3 inimesele allatulistatud meeskonna päästmiseks",
        "armor": "Täielikult soomustatud kabiin ja tuuleklaas: peavad vastu 7,62 ja 12,7 mm soomust läbistavatele kuulidele ning 20 mm kildudele; energiat neelav telik ja istmed (kukkumiskiirusel kuni 12 m/s)",
        "combatRadius": 435
      },
      "notes": {
        "ferryRange": "Nelja lisapaagiga."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-28", "url": "https://odin.t2com.army.mil/WEG/Asset/3f14488657bc3918b28203ec368f55cd", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-28", "url": "https://en.wikipedia.org/wiki/Mil_Mi-28", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Ka-52": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armeelennuväe brigaad; Kopterpolk",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ründekopter, mis tegutseb päeval ja öösel (kasutusel alates 2011. aastast).",
        "crew": "2",
        "length": 16,
        "rotorDiameter": 14.5,
        "height": 4.93,
        "emptyWeight": 8.55,
        "maxTakeoffWeight": 10.8,
        "engine": "2 × Klimov VK-2500 turbovõllmootor (2400 hj iga); koaksiaalsed vastassuunas pöörlevad rootorid",
        "power": 4800,
        "maxSpeed": 315,
        "cruiseSpeed": 270,
        "serviceCeiling": 5500,
        "rateOfClimb": 8,
        "ferryRange": 1160,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur 2A42 (460 lasku, kaksiktoide)",
        "airToAirMissiles": "Igla (4 tiivaotstel)",
        "airToGroundWeapons": "Tankitõrjeraketid Vikhr (kuni 12, 2 × APU-6) ja Ataka; LMUR; rakettplokid S-8 (80) ja S-13 (20); pommid 4 × 250 kg või 2 × 500 kg; kahurikonteinerid UPK-23-250",
        "hardpoints": 6,
        "ordnanceLoad": 2000,
        "sensors": "Radar Arbalet-52 (kaardistus 32 km, maasihtmärgid 25 km, õhusihtmärgid 15 km); optilis-elektrooniline sihtimissüsteem OES-52 (soojuskaamera ja laserindikaator)",
        "specialEquipment": "Lisakütusepaagid 500 l",
        "armor": "Kabiin peab vastu 12,7 mm soomust läbistavatele kuulidele ja 23 mm kildudele; katapultistmed K-37-800 ja rootorilabade pürotehniline äraheide",
        "combatRadius": 470
      },
      "notes": {
        "hardpoints": "Lisaks 6 tiivaaluse punktile 2 tiivaotsa punkti (õhk-õhk raketid või vastumeetmed).",
        "ferryRange": "Teistel andmetel 545 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-52", "url": "https://odin.t2com.army.mil/WEG/Asset/65cf198f7294b53cef415ef1bb3ad216", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-52", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-52", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi (UA): Російський Ка-52: можливості та втрати у війні з Україною (2 Jun 2025)", "url": "https://militarnyi.com/uk/articles/rosijskyj-ka-52-mozhlyvosti-ta-vtraty-u-vijni-z-ukrayinoyu/", "retrieved": "2026-11-25"}
      ]
    },
    "Ka-29": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe lennuväe kopterpolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Mereväe soomustatud transport- ja ründekopter dessantlaevadelt ja lennukikandjatelt tegutsemiseks (kasutusel alates 1987. aastast).",
        "crew": "2",
        "length": 11.3,
        "rotorDiameter": 15.8,
        "height": 5.5,
        "emptyWeight": 6.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117V turbovõllmootor (2230 hj iga); koaksiaalsed rootorid",
        "power": 4460,
        "maxSpeed": 270,
        "cruiseSpeed": 205,
        "serviceCeiling": 5000,
        "ferryRange": 980,
        "troops": "Kuni 16 dessantväelast",
        "caliber": 7.62,
        "mainArmament": "Fikseeritud 7,62 mm kuulipilduja GShG (1800 lasku); 30 mm kahur 2A42 (250 lasku) pööratavas kinnituses (eemaldatav)",
        "hardpoints": 4,
        "airToGroundWeapons": "Pommid, rakettplokid, kahurikonteinerid, kassettpommid ja neljased stardiseadmed tankitõrjerakettidele 9K114 Shturm"
      },
      "sources": [
        {"name": "Wikipedia: Kamov Ka-29", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-29", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Kamov Ka-27", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-27", "retrieved": "2026-11-26"}
      ]
    },
    "Ka-27": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe lennuväe kopterpolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Mereväe allveelaevatõrje- ja transpordikopter (kasutusel alates 1981. aastast).",
        "crew": "3 + 2–3",
        "length": 11.3,
        "rotorDiameter": 15.8,
        "height": 5.5,
        "emptyWeight": 6.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117V turbovõllmootor (2230 hj iga); koaksiaalsed rootorid",
        "power": 4460,
        "maxSpeed": 250,
        "cruiseSpeed": 205,
        "serviceCeiling": 6000,
        "ferryRange": 980,
        "sensors": "Radar ning kas vettelastav hüdrolokaator või magnetanomaalia detektor (MAD)",
        "specialEquipment": "Kaks täispuhutavat ujukit vette maandumiseks",
        "aswWeapons": "1 torpeedo (AT-1M, VTT-1, UMGT-1 Orlan, APR-2 Yastreb) ja 6–8 süvaveepommi (või 1 tuumalaenguga süvaveepomm); kuni 36 hüdroakustilist poid RGB-NM",
        "fuelCapacity": 2940
      },
      "notes": {
        "sensors": "Ka-27M uuendus lisab AESA-radari."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-27", "url": "https://odin.t2com.army.mil/WEG/Asset/88f8ae48a9604b65064fcdab7146c6ae", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-27", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-27", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Shephard: Russian Navy receives modernised Ka-27M", "url": "https://www.shephardmedia.com/news/defence-helicopter/russian-navy-receives-modernised-ka-27m/", "retrieved": "2026-11-26"}
      ]
    },
    "Ka-31": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe lennuvägi",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mereväe kaugradarluure- ja juhtimiskopter.",
        "crew": "2",
        "length": 12.5,
        "rotorDiameter": 15.9,
        "height": 5.6,
        "maxTakeoffWeight": 12.5,
        "engine": "2 × TV3-117VMA turbovõllmootor (2500 hj iga); koaksiaalsed rootorid",
        "power": 5000,
        "maxSpeed": 250,
        "cruiseSpeed": 205,
        "endurance": 2.5,
        "ferryRange": 600,
        "sensors": "Radar E-801 Oko (L-sagedusala): umbes 6 × 1 m kokkuklapitav antenn pöörleb 6 pööret minutis; avastab hävitaja umbes 110 km ja laeva umbes 200 km kauguselt; jälgib kuni 40 sihtmärki kõrgusel 5–3500 m",
        "specialEquipment": "Telik tõmmatakse üles, et see radarit ei segaks"
      },
      "notes": {
        "endurance": "Patrullimisel kõrgusel 3500 m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-31", "url": "https://odin.t2com.army.mil/WEG/Asset/73afd902567e61e87b093258b8136ccf", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-31", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-31", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "AIN: Russian Navy Inducts Kamov Ka-31R (2020)", "url": "https://backend.ainonline.com/aviation-news/defense/2020-03-25/russian-navy-inducts-kamov-ka-31r", "retrieved": "2026-11-27"}
      ]
    },
    "Mi-26": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armeelennuväe brigaad",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Raske transpordikopter sõjatehnika veoks.",
        "crew": "5",
        "length": 33.73,
        "rotorDiameter": 32,
        "height": 8.145,
        "emptyWeight": 28.2,
        "maxTakeoffWeight": 56,
        "engine": "2 × ZMKB Progress D-136 turbovõllmootor (11 400 hj iga); 8-labaline pearootor",
        "power": 22800,
        "maxSpeed": 295,
        "cruiseSpeed": 255,
        "serviceCeiling": 4600,
        "ferryRange": 1920,
        "payload": 20000,
        "troops": "90 dessantväelast või 60 kanderaami",
        "combatRadius": 500,
        "fuelCapacity": 12000
      },
      "notes": {
        "combatRadius": "7,7 t lastiga.",
        "serviceCeiling": "Maksimaalse massiga hõljub ilma maapinnaefektita kuni 1524 m kõrgusel."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-26", "url": "https://odin.t2com.army.mil/WEG/Asset/84c54f9bd5537811f1849f45384a4a0b", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-26", "url": "https://en.wikipedia.org/wiki/Mil_Mi-26", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Su-25": {
      "status": "unverified",
      "values": {
        "typicalUnit": "VKS ründelennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2023},
        "purpose": "Ründelennuk maaväe lähitoetuseks.",
        "crew": "1",
        "length": 15.53,
        "wingspan": 14.36,
        "height": 4.8,
        "emptyWeight": 9.5,
        "maxTakeoffWeight": 19.3,
        "engine": "2 × Tumanski/Sojuz R-195 turboreaktiivmootor (44,2 kN iga)",
        "thrust": 88.4,
        "maxSpeed": 975,
        "serviceCeiling": 7000,
        "rateOfClimb": 58,
        "combatRadius": 750,
        "gLimit": 6.5,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-2 (250 lasku)",
        "hardpoints": 11,
        "ordnanceLoad": 4000,
        "airToAirMissiles": "R-73 (Su-25SM)",
        "airToGroundWeapons": "Rakettplokid UB-16 / UB-32A (S-5), B-8M1 (S-8); S-24, S-25, S-13T (Su-25SM); pommid FAB-500; Vikhr (Su-25T); Kh-25ML, Kh-29L (Su-25SM)",
        "sensors": "Laserkaugusmõõtja ninas, Doppleri radar DISS-7 navigeerimiseks, IFF SO-69, radarhoiataja SPO-15 (Su-25SM: L150 Pastel), soojus- ja radarpüünised (kuni 250); Su-25SM: navigeerimiskompleks Bars PRNK-25SM, HUD ja MFD, GPS/GLONASS",
        "armor": "Keevitatud titaanist vannikujuline kabiin; peatugi 6 mm terasest"
      },
      "notes": {
        "combatRadius": "Merepinna lähedal 4400 kg relvakoormaga ja kahe lisapaagiga; lennuulatus suurel kõrgusel 1000 km.",
        "maxSpeed": "Andmed kehtivad Su-25K kohta."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-25", "url": "https://odin.t2com.army.mil/WEG/Asset/c8c6c485190bb3346d00e901fe24e7ef", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-25", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-25", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Janes: Russia's Su-25SM3 'deep upgrade' programme gains pace and scope", "url": "https://www.janes.com/defence-intelligence-insights/defence-news/russias-su-25sm3-deep-upgrade-programme-gains-pace-and-scope", "retrieved": "2026-11-26"},
        {"name": "EurAsian Times: Russia's frontline Sukhoi attack aircraft set for newer weapon (2023)", "url": "https://eurasiantimes.com/russias-frontline-sukhoi-attack-aircraft-set-for-newer-weapon/", "retrieved": "2026-11-26"}
      ]
    },
    "Su-34": {
      "status": "unverified",
      "values": {
        "typicalUnit": "VKS pommituslennuväepolk",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Hävituspommitaja maa- ja meresihtmärkide ründamiseks.",
        "crew": "2",
        "length": 23.34,
        "wingspan": 14.7,
        "height": 6.09,
        "emptyWeight": 22.5,
        "maxTakeoffWeight": 44.1,
        "engine": "2 × Saturn AL-31FM1 turboventilaatormootor (132 kN järelpõletiga iga)",
        "thrust": 264,
        "maxSpeed": 1900,
        "cruiseSpeed": 1300,
        "serviceCeiling": 14000,
        "combatRadius": 1100,
        "ferryRange": 4500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (180 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 12000,
        "airToAirMissiles": "Kuni 6 × R-77 või R-73 (enesekaitseks)",
        "airToGroundWeapons": "Juhitavad pommid KAB-500, KAB-1500; vabalangevad ja libisevad pommid FAB (UMPK-ga kuni FAB-3000); kassettpommid RBK-500; BETAB-500; õhk-maa- ja laevatõrjeraketid (nt Kh-31, Kh-35)",
        "sensors": "Passiivne faasantennradar Leninets V004",
        "specialEquipment": "Üksiku pommi või raketi mass kuni 4000 kg",
        "armor": "Titaanist soomuskapsel kabiini ümber (17 mm)"
      },
      "notes": {
        "combatRadius": "12 000 kg relvakoormaga; lennuulatus täiskoormaga 4000 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-34", "url": "https://odin.t2com.army.mil/WEG/Asset/36da5724533f03d0e2aab3bbb53283e0", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-34", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-34", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Receives Seventh Batch of New Su-34 Fighter Jets in 2025", "url": "https://militarnyi.com/en/news/russia-receives-seventh-batch-of-new-su-34-fighter-jets-in-2025/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: New Su-30SM2s and Su-34s Have Joined the Russian Aerospace Forces' Combat Aviation Fleet (2026)", "url": "https://militarnyi.com/en/news/su-30sm2s-su-34s-russian-aerospace-forces/", "retrieved": "2026-11-25"}
      ]
    },
    "Su-24": {
      "status": "unverified",
      "values": {
        "typicalUnit": "VKS segalennuväepolk; Mereväe lennuvägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Taktikaline pommitaja.",
        "crew": "2",
        "length": 22.53,
        "wingspan": 17.64,
        "height": 6.19,
        "emptyWeight": 22.3,
        "maxTakeoffWeight": 43.755,
        "engine": "2 × Lyulka AL-21F-3A turboreaktiivmootor (109,8 kN järelpõletiga iga)",
        "thrust": 219.6,
        "maxSpeed": 1654,
        "serviceCeiling": 11000,
        "rateOfClimb": 150,
        "ferryRange": 2775,
        "gLimit": 6,
        "caliber": 23,
        "mainArmament": "23 mm kuuetoruline automaatkahur GSh-6-23M (500 lasku)",
        "hardpoints": 9,
        "ordnanceLoad": 8000,
        "airToAirMissiles": "R-60 (enesekaitseks)",
        "airToGroundWeapons": "Kh-25, Kh-29, Kh-31, Kh-58, Kh-59; juhitavad pommid KAB-500KR/L/OD, KAB-1500KR/L; ODAB-500, RBK-250, RBK-500, BETAB-500",
        "sensors": "Navigeerimis- ja ründeradar Orion-A (kaks üksteise peale asetatud antenni), maastikujälgimisradar Relyef; sihtimiskompleks SVP-24",
        "specialEquipment": "Pööratavad tiivad (laius tagasi pööratult 10,37 m)"
      },
      "notes": {
        "maxSpeed": "Merepinna lähedal 1315 km/h (Mach 1,06).",
        "ferryRange": "Lahinguulatus 615 km madalal lennul (3000 kg relvakoormaga ja lisapaakidega)."
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-24", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-24", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Su-27": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Hävituslennukite polk",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Õhuülekaalu hävitaja; hilisemad versioonid on mitmeotstarbelised.",
        "crew": "1",
        "length": 21.94,
        "wingspan": 14.7,
        "height": 5.93,
        "emptyWeight": 16.38,
        "maxTakeoffWeight": 30.45,
        "engine": "2 × Saturn / Lyulka AL-31F turboventilaatormootor (122,6 kN järelpõletiga iga)",
        "thrust": 245.2,
        "maxSpeed": 2500,
        "serviceCeiling": 19000,
        "rateOfClimb": 300,
        "ferryRange": 3530,
        "takeoffRun": 650,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (150 lasku) parempoolses tiivajuures",
        "hardpoints": 10,
        "ordnanceLoad": 4430,
        "airToAirMissiles": "R-27 ja R-73",
        "sensors": "Impulss-Doppleri radar Phazotron N001 „Myech“ (hävitaja avastuskaugus umbes 100 km vastassuunas ja 40 km tagant; jälgib 10 ja tabab 1 sihtmärki)"
      },
      "notes": {
        "maxSpeed": "Merepinna lähedal 1400 km/h (Mach 1,13).",
        "maxTakeoffWeight": "Su-27S umbes 30,45 t; Su-27SK/SM 33 t.",
        "ordnanceLoad": "Su-27SM-il kuni 8000 kg.",
        "crew": "Su-27UB: 2."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-27", "url": "https://odin.t2com.army.mil/WEG/Asset/8355873ae7285f6ba9891989c0e49e48", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-27", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-27", "retrieved": "2026-10-23"},
        {"name": "Migflug: Su-27 Flanker", "url": "https://migflug.com/afterburner/aircraft/su-27-flanker/", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Sukhoi Su-35": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Hävituslennukite polk",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Õhuülekaalu hävitaja, mis ründab ka maa- ja meresihtmärke.",
        "crew": "1",
        "length": 21.9,
        "wingspan": 15.3,
        "height": 5.9,
        "emptyWeight": 19,
        "maxTakeoffWeight": 34.5,
        "engine": "2 × Saturn AL-41F1S turboventilaatormootor tõukevektoriga (137,3 kN järelpõletiga iga)",
        "thrust": 274.6,
        "maxSpeed": 2390,
        "serviceCeiling": 18000,
        "rateOfClimb": 280,
        "ferryRange": 4500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 8000,
        "airToAirMissiles": "R-27R1/ER1 (kuni 8), R-27T1/ET1 (8), R-73 (6), R-77 (kuni 12)",
        "airToGroundWeapons": "Kh-59MK (5), Kh-31A/P (6), KAB-500Kr (8), KAB-1500Kr (3), S-25LD (4), FAB-500 (10), FAB-250 (32), rakettplokid B-8M1 (6)",
        "sensors": "Passiivne faasantennradar Irbis-E (N035): avastab õhusihtmärke kuni 400 km kauguselt, jälgib 30 ja tabab 8 sihtmärki korraga; sünteesapertuuriga maapinna kaardistamine"
      },
      "notes": {
        "maxSpeed": "Mach 2,25.",
        "ferryRange": "Tavaline lennuulatus 3600 km."
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-35", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-35", "retrieved": "2026-10-23"},
        {"name": "Armedconflicts.com: Su-35S", "url": "https://origin.armedconflicts.com/topic/view/112697", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Receives Third Batch of Su-35S Fighter Jets in 2025", "url": "https://militarnyi.com/en/news/russia-receives-third-batch-of-su-35s-fighter-jets-in-2025/", "retrieved": "2026-11-25"},
        {"name": "Ukrainska Pravda: Russian forces receive new batch of Su-35S multirole fighter jets, number undisclosed (26 May 2026)", "url": "https://www.pravda.com.ua/eng/news/2026/05/26/8036451/", "retrieved": "2026-11-25"}
      ]
    },
    "Sukhoi Su-33": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe hävituslennukite polk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Lennukikandjal baseeruv õhuülekaalu hävitaja.",
        "crew": "1",
        "length": 21.19,
        "wingspan": 14.7,
        "height": 5.93,
        "emptyWeight": 18.4,
        "maxTakeoffWeight": 29.94,
        "engine": "2 × Saturn AL-31F3 turboventilaatormootor (125,5 kN järelpõletiga iga)",
        "thrust": 251,
        "maxSpeed": 2300,
        "serviceCeiling": 17000,
        "rateOfClimb": 246,
        "ferryRange": 3000,
        "gLimit": 8,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 6500,
        "airToAirMissiles": "R-73 (4) ja R-27E (6); R-27EM tabab ka laevatõrjerakette",
        "airToGroundWeapons": "Pommid kuni 500 kg, sh kassettpommid RBK-500",
        "sensors": "Radar N001",
        "specialEquipment": "Kokkuklapitavad tiivad (laius kokkuklapitult 7,4 m)"
      },
      "notes": {
        "maxSpeed": "Kõrgusel 10 000 m (Mach 2,17)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Sukhoi Su-33", "url": "https://odin.t2com.army.mil/WEG/Asset/1ac57b230e7c0f839d34312b6c5d4346", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-33", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-33", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "MiG-31": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Hävituslennukite polk",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Püüdurhävitaja.",
        "crew": "2",
        "length": 22.62,
        "wingspan": 13.456,
        "height": 6.456,
        "emptyWeight": 21.82,
        "maxTakeoffWeight": 46.2,
        "engine": "2 × Solovjov D-30F6 turboventilaatormootor (152 kN järelpõletiga iga)",
        "thrust": 304,
        "maxSpeed": 3000,
        "cruiseSpeed": 2500,
        "serviceCeiling": 25000,
        "rateOfClimb": 288,
        "combatRadius": 1450,
        "ferryRange": 3000,
        "gLimit": 5,
        "caliber": 23,
        "mainArmament": "23 mm kuuetoruline automaatkahur GSh-6-23 (260 lasku)",
        "hardpoints": 8,
        "ordnanceLoad": 9000,
        "airToAirMissiles": "R-33 (4; 120–160 km), R-37 (6; 280–400 km), R-40TD1 (2–4; 50–80 km), R-60 (4), R-73 (4), R-77 (4; 100 km)",
        "airToGroundWeapons": "MiG-31K: hüperhelikiirusega aeroballistiline rakett Kh-47M2 Kinžal (umbes 2000 km, Mach 10); MiG-31K ei kanna õhk-õhk-rakette",
        "sensors": "Faasantennradar Zaslon (19 m² sihtmärgi avastuskaugus 200 km; jälgib 10 ja tabab 4 sihtmärki); Zaslon-M (400 km; jälgib 24 ja tabab 6)",
        "specialEquipment": "Kere all 4 poolsüvistatud relvakinnituspunkti, tiibade all 4 pülooni"
      },
      "notes": {
        "maxSpeed": "Kõrgusel 21 500 m; merepinna lähedal 1500 km/h (Mach 1,23).",
        "combatRadius": "1450 km kiirusel Mach 0,8 ja 10 000 m kõrgusel; 720 km kiirusel Mach 2,35 ja 18 000 m kõrgusel.",
        "ferryRange": "3000 km 4 × R-33E ja kahe lisapaagiga; 5400 km ühe õhutankimisega."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MiG-31", "url": "https://odin.t2com.army.mil/WEG/Asset/a4669ef1dd64227e040b5bfc32b11855", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mikoyan MiG-31", "url": "https://en.wikipedia.org/wiki/Mikoyan_MiG-31", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian Air Force receives a new batch of modernized MiG-31BMs interceptors with long-range missiles (2024)", "url": "https://www.armyrecognition.com/archives/archives-aerospace-defense/2024/russian-air-force-receives-a-new-batch-of-modernized-mig-31bms-interceptors-with-long-range-missiles", "retrieved": "2026-11-25"}
      ]
    },
    "MiG-29": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe hävituslennukite polk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhuülekaalu hävitaja; paljud hilisemad versioonid on mitmeotstarbelised.",
        "crew": "1",
        "length": 17.37,
        "wingspan": 11.36,
        "height": 4.73,
        "emptyWeight": 11,
        "maxTakeoffWeight": 18,
        "engine": "2 × Klimov RD-33 turboventilaatormootor (81,4 kN järelpõletiga iga)",
        "thrust": 162.8,
        "maxSpeed": 2400,
        "serviceCeiling": 18000,
        "rateOfClimb": 330,
        "combatRadius": 700,
        "ferryRange": 2100,
        "takeoffRun": 260,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (150, hiljem 100 lasku)",
        "hardpoints": 6,
        "ordnanceLoad": 3500,
        "airToAirMissiles": "R-73, R-27, R-60 (vanematel versioonidel), R-77 (uuematel versioonidel)",
        "sensors": "Radar N019 „Rubin“ (9.12), N019M „Topaz“ (9.13/S), N010 „Zhuk-M“ (SMT, M/M2)"
      },
      "notes": {
        "ordnanceLoad": "MiG-29S-il 4000 kg (tugevdatud kere).",
        "maxSpeed": "Merepinna lähedal 1500 km/h (Mach 1,22).",
        "ferryRange": "2100 km keskpaagiga; ainult sisepaakidega umbes 1400–1500 km.",
        "hardpoints": "Uuematel versioonidel 7–9.",
        "crew": "MiG-29UB: 2."
      },
      "sources": [
        {"name": "Migflug: MiG-29 Fulcrum", "url": "https://migflug.com/afterburner/aircraft/mig-29-fulcrum/", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Mikoyan MiG-29", "url": "https://en.wikipedia.org/wiki/Mikoyan_MiG-29", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Tu-95": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kauglennuväe pommituslennuväediviis",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Tuumarelva kandev strateegiline pommitaja ja tiibraketikandja.",
        "crew": "6–7",
        "length": 49.13,
        "wingspan": 50.1,
        "height": 13.3,
        "emptyWeight": 90,
        "maxTakeoffWeight": 188,
        "engine": "4 × Kuznetsov NK-12 turbopropellermootor",
        "maxSpeed": 925,
        "cruiseSpeed": 710,
        "serviceCeiling": 13716,
        "rateOfClimb": 10,
        "ferryRange": 15000,
        "ordnanceLoad": 15000,
        "caliber": 23,
        "mainArmament": "2 × 23 mm GSh-23 automaatkahur sabatornis",
        "airToGroundWeapons": "Tiibraketid Kh-55 (Tu-95MS16: kuni 16; Tu-95MS6: 6 pöördpesas), Kh-101/102 (8 tiibade all); vanemad Kh-20, Kh-22"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Tu-95", "url": "https://odin.t2com.army.mil/WEG/Asset/e37eaf7714c42c34cb9b08d39a9eb28c", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Tupolev Tu-95", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-95", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Russian Long Range Aviation", "url": "https://en.wikipedia.org/wiki/Russian_Long_Range_Aviation", "retrieved": "2026-11-25"},
        {"name": "Ukrainska Pravda: Russia may expand strategic bomber fleet, analysts warn (21 May 2025)", "url": "https://www.pravda.com.ua/eng/news/2025/05/21/7513345", "retrieved": "2026-11-25"},
        {"name": "Espreso Global: Russia struggles to modernize aging Tu-95 bombers amid war demands (19 Nov 2024)", "url": "https://global.espreso.tv/military-news-russia-struggles-to-modernize-aging-tu-95-bombers-amid-war-demands", "retrieved": "2026-11-25"}
      ]
    },
    "IL-76": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväetranspordilennuväe diviis; Sõjaväetranspordilennuväe polk",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Mitmeotstarbeline strateegiline transpordilennuk.",
        "crew": "5",
        "length": 46.6,
        "wingspan": 50.5,
        "height": 14.42,
        "emptyWeight": 92.5,
        "maxTakeoffWeight": 210,
        "engine": "4 × turboventilaatormootor: D-30KP (117,7 kN iga); Il-76MD-90A: PS-90A-76 (156,9 kN iga)",
        "cruiseSpeed": 775,
        "serviceCeiling": 12200,
        "ferryRange": 9700,
        "payload": 48000,
        "cargoHold": "20 × 3,4 × 3,4 m (Il-76MF ja Il-76TF)",
        "caliber": 23,
        "mainArmament": "Mõnel sõjaväeversioonil 2 × 23 mm kahur radarjuhitavas sabatornis",
        "specialEquipment": "Mõnel sõjaväeversioonil pommide kinnituspunktid tiibade välisosa all; tõukejõu reverseerimisseade lühikeseks maandumiseks (maandumisdistants vähemalt 450 m)"
      },
      "notes": {
        "ferryRange": "9700 km ilma lastita (Il-76MD-90A); 5000 km 52 t lastiga."
      },
      "sources": [
        {"name": "Wikipedia: Ilyushin Il-76", "url": "https://en.wikipedia.org/wiki/Ilyushin_Il-76", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Military Transport Aviation", "url": "https://en.wikipedia.org/wiki/Military_Transport_Aviation", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: In 2025, Russian Aerospace Forces Received 7 Il-76MD-90A Aircraft", "url": "https://militarnyi.com/en/news/in-2025-russian-aerospace-forces-received-7-il-76md-90a-aircraft/", "retrieved": "2026-11-25"}
      ]
    },
    "Antonov An-26": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväetranspordilennuväe eskadrill; Mereväe segalennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Transpordilennuk; teisese ülesandena ka pommitamine.",
        "crew": "5",
        "length": 23.8,
        "wingspan": 29.3,
        "height": 8.58,
        "emptyWeight": 15.02,
        "maxTakeoffWeight": 24,
        "engine": "2 × Progress AI-24VT turbopropellermootor (2820 hj iga) + abireaktiivmootor RU-19A-300 (7,85 kN)",
        "power": 5640,
        "thrust": 7.85,
        "maxSpeed": 540,
        "cruiseSpeed": 440,
        "serviceCeiling": 7500,
        "ferryRange": 2500,
        "payload": 5500,
        "troops": "40 reisijat"
      },
      "notes": {
        "ferryRange": "Maksimaalse kütusega; maksimaalse kasuliku koormaga 1100 km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Antonov An-26", "url": "https://odin.t2com.army.mil/WEG/Asset/ffc81e23f9a4a7aaec0e8738517fa17f", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Antonov An-26", "url": "https://en.wikipedia.org/wiki/Antonov_An-26", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Military Transport Aviation", "url": "https://en.wikipedia.org/wiki/Military_Transport_Aviation", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Russia's An-series military transports ... 143 of its 368 military Antonovs need urgent repair (10 Apr 2026)", "url": "https://euromaidanpress.com/2026/04/10/russias-an-series-military-transports-were-designed-in-kyiv-and-moscows-leaked-documents-show-143-of-its-368-military-antonovs-need-urgent-repair/", "retrieved": "2026-11-25"}
      ]
    },
    "Antonov An-124": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväetranspordilennuväe polk",
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Suur strateegiline transpordilennuk.",
        "crew": "8",
        "length": 69.1,
        "wingspan": 73.3,
        "height": 21.08,
        "emptyWeight": 181,
        "maxTakeoffWeight": 402,
        "engine": "4 × Progress D-18T turboventilaatormootor (226,8 kN iga)",
        "thrust": 907.2,
        "maxSpeed": 865,
        "cruiseSpeed": 825,
        "serviceCeiling": 12000,
        "takeoffRun": 3000,
        "ferryRange": 14000,
        "payload": 120000,
        "cargoHold": "36 × 6,4 × 4,4 m"
      },
      "notes": {
        "ferryRange": "Täiskoormaga 3700 km, 80 t lastiga 8400 km, 40 t lastiga 11 500 km.",
        "payload": "Sõjaväeline standardkoormus kuni 150 t."
      },
      "sources": [
        {"name": "Wikipedia: Antonov An-124 Ruslan", "url": "https://en.wikipedia.org/wiki/Antonov_An-124_Ruslan", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Military Transport Aviation", "url": "https://en.wikipedia.org/wiki/Military_Transport_Aviation", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia reactivates An-124 transport plane from 25-year storage for Ukraine military operations (29 Mar 2024)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2024/russia-reactivates-an-124-transport-plane-from-25-year-storage-for-ukraine-military-operations", "retrieved": "2026-11-25"}
      ]
    },
    "A-50": {
      "status": "unverified",
      "values": {
        "typicalUnit": "VKS kaugradarluure lennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2023},
        "purpose": "Kaugradarluure- ja juhtimislennuk hävitajate juhtimiseks õhutõrje- ja maarünnakuülesannetel.",
        "crew": "5 + 10",
        "length": 46.6,
        "wingspan": 50.6,
        "height": 14.8,
        "emptyWeight": 61,
        "maxTakeoffWeight": 190,
        "engine": "4 × Solovjov D-30KP turboventilaatormootor (117,7 kN iga)",
        "thrust": 470.7,
        "maxSpeed": 850,
        "cruiseSpeed": 775,
        "serviceCeiling": 15500,
        "endurance": 4,
        "ferryRange": 7500,
        "sensors": "Radar Shmel (A-50U: Shmel-M) 9 m läbimõõduga radarikuplis: avastab õhusihtmärke kuni 650 km ja maapealseid kuni 300 km kauguselt; jälgib kuni 150 sihtmärki kuni 230 km raadiuses"
      },
      "notes": {
        "maxTakeoffWeight": "Il-76M põhjal ehitatud lennukil 170 t, Il-76MD põhjal 190 t.",
        "endurance": "Täiskoormusel."
      },
      "sources": [
        {"name": "Wikipedia: Beriev A-50", "url": "https://en.wikipedia.org/wiki/Beriev_A-50", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Military Transport Aviation", "url": "https://en.wikipedia.org/wiki/Military_Transport_Aviation", "retrieved": "2026-11-25"}
      ]
    },
    "Tu-22M": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kauglennuväe pommituslennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Tuumarelva kandev kaugpommitaja strateegilisteks ja merelöökideks.",
        "crew": "4",
        "length": 42.46,
        "wingspan": 34.28,
        "height": 11.05,
        "emptyWeight": 58,
        "maxTakeoffWeight": 126,
        "engine": "2 × Kuznetsov NK-25 turboventilaatormootor (247,9 kN järelpõletiga iga)",
        "thrust": 495.8,
        "maxSpeed": 1997,
        "serviceCeiling": 13300,
        "rateOfClimb": 15,
        "combatRadius": 2500,
        "ferryRange": 7000,
        "caliber": 23,
        "mainArmament": "23 mm GSh-23 automaatkahur kaugjuhitaval sabatornil",
        "ordnanceLoad": 24000,
        "airToGroundWeapons": "Laevatõrjeraketid Kh-22/Kh-32 (kuni 3); Kh-15 (kuni 10: 6 pöördpesas ja 4 tiibade all)",
        "specialEquipment": "Pööratavad tiivad (laius tagasi pööratult 23,3 m)"
      },
      "notes": {
        "combatRadius": "Umbes 10 000 kg relvakoormaga.",
        "ferryRange": "Teistel andmetel 6800 km."
      },
      "sources": [
        {"name": "Wikipedia: Tupolev Tu-22M", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-22M", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Russian Long Range Aviation", "url": "https://en.wikipedia.org/wiki/Russian_Long_Range_Aviation", "retrieved": "2026-11-25"},
        {"name": "Ukrainska Pravda: Russia may expand strategic bomber fleet, analysts warn (21 May 2025)", "url": "https://www.pravda.com.ua/eng/news/2025/05/21/7513345", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Flight Over Baltic Sea Was Performed by a 'New' Tu-22M3 Bomber Armed with an Kh-22 Missile (Nov 2025)", "url": "https://militarnyi.com/en/news/flight-over-baltic-sea-was-performed-by-a-new-tu-22m3-bomber-armed-with-an-kh-22-missile/", "retrieved": "2026-11-25"}
      ]
    },
    "Tu-160": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kauglennuväe pommituslennuväediviis",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Tuumarelva kandev raske strateegiline pommitaja ja kaugmaarakettide kandja.",
        "crew": "4",
        "length": 54.1,
        "wingspan": 55.7,
        "height": 13.1,
        "emptyWeight": 110,
        "maxTakeoffWeight": 275,
        "engine": "4 × Samara NK-32-1 turboventilaatormootor (245 kN järelpõletiga iga)",
        "thrust": 980,
        "maxSpeed": 2220,
        "cruiseSpeed": 960,
        "serviceCeiling": 16000,
        "rateOfClimb": 70,
        "combatRadius": 7300,
        "ferryRange": 12300,
        "ordnanceLoad": 45000,
        "airToGroundWeapons": "Kaks sisemist relvaruumi (kuni 22 500 kg kumbki), kummaski pöördpesa: 6 tiibraketti Kh-55SM/101/102/555 või 12 raketti Kh-15; Kh-BD (ulatus kuni 6500 km)",
        "specialEquipment": "Pööratavad tiivad (laius tagasi pööratult 35,6 m); kaitserelvad puuduvad"
      },
      "notes": {
        "combatRadius": "Alahelikiirusel; kiirusel Mach 1,5 2000 km.",
        "maxSpeed": "Kõrgusel 12 200 m (Mach 2,05).",
        "ferryRange": "Ilma õhutankimiseta."
      },
      "sources": [
        {"name": "Wikipedia: Tupolev Tu-160", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-160", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Russian Long Range Aviation", "url": "https://en.wikipedia.org/wiki/Russian_Long_Range_Aviation", "retrieved": "2026-11-25"},
        {"name": "Ukrainska Pravda: Russia may expand strategic bomber fleet, analysts warn (21 May 2025)", "url": "https://www.pravda.com.ua/eng/news/2025/05/21/7513345", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia expands long-range strategic capabilities with delivery of two newly built Tu-160M bombers (2025)", "url": "https://www.armyrecognition.com/news/aerospace-news/2025/russia-expands-long-range-strategic-capabilities-with-delivery-of-two-newly-built-tu-160m-bombers", "retrieved": "2026-11-25"}
      ]
    },
    "Su-30": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Hävituslennukite polk; Mereväe lennuvägi",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mitmeotstarbeline hävitaja õhuülekaalu ja maarünnaku ülesanneteks.",
        "crew": "2",
        "length": 21.935,
        "wingspan": 14.7,
        "height": 6.36,
        "emptyWeight": 17.7,
        "maxTakeoffWeight": 34.5,
        "engine": "2 × Saturn AL-31FL/FP tõukevektoriga turboventilaatormootor (122,58 kN järelpõletiga iga)",
        "thrust": 245.2,
        "maxSpeed": 2120,
        "serviceCeiling": 17300,
        "rateOfClimb": 230,
        "ferryRange": 3000,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 8000,
        "airToGroundWeapons": "Juhitavad pommid KAB-500KR, KAB-1500L; FAB-500T; kassettpommid RBK-500",
        "sensors": "Passiivne faasantennradar N011M „Bars“ (avastuskaugus kuni 400 km, otsing 200 km)"
      },
      "notes": {
        "ferryRange": "Õhutankimisega 5200 km."
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-30", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-30", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Receives Batch of New Su-30SM2 Multirole Fighter Jets", "url": "https://militarnyi.com/en/news/russia-receives-batch-of-new-su-30sm2-multirole-fighter-jets/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: New Su-30SM2s and Su-34s Have Joined the Russian Aerospace Forces' Combat Aviation Fleet (9 Jul 2026)", "url": "https://militarnyi.com/en/news/su-30sm2s-su-34s-russian-aerospace-forces/", "retrieved": "2026-11-25"}
      ]
    },
    "Su-57": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Hävituslennukite polk",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mitmeotstarbeline nähtamatushävitaja õhulahinguks ning maa- ja merelöökideks.",
        "crew": "1",
        "length": 20.1,
        "wingspan": 14.1,
        "height": 4.6,
        "emptyWeight": 18,
        "maxTakeoffWeight": 34,
        "engine": "2 × Saturn AL-41F1 (izdeliye 117) tõukevektoriga turboventilaatormootor (142,2 kN järelpõletiga iga; hädarežiimil 147,1 kN)",
        "thrust": 284.4,
        "maxSpeed": 2450,
        "serviceCeiling": 20000,
        "combatRadius": 1250,
        "ferryRange": 3500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur 9A1-4071K / GSh-30-1 (150 lasku) parempoolses tiivajuures",
        "hardpoints": 12,
        "ordnanceLoad": 7500,
        "airToAirMissiles": "R-77M ja R-74M2 relvaruumides; arenduses izdeliye 810 (R-37M lühendatud versioon)",
        "airToGroundWeapons": "Kh-69, Kh-38M, Kh-58UShK, Kh-35U, välisel Kh-31; juhitavad pommid KAB-250 ja KAB-500",
        "sensors": "AESA-radar N036 „Byelka“: ninaantenn X-sagedusalas, kaks külgantenni ning L-sagedusala IFF- ja elektroonilise võitluse antennid; väidetavalt jälgib 60 ja tabab 16 sihtmärki (avastuskaugus väidetavalt kuni 400 km)",
        "specialEquipment": "Sisemised relvaruumid (2 põhi- ja 2 külgruumi), varjatud antennid, S-kujulised õhuvõtukanalid ja radarikiirgust neelav kate; ülehelikiirusel lend ilma järelpõletita (Mach 1,3) on väidetud, aga sõltumatult kinnitamata"
      },
      "notes": {
        "ferryRange": "4500 km kahe lisapaagiga; 3500 km alahelikiirusel sisepaagiga.",
        "combatRadius": "Missiooniprofiil teadmata.",
        "crew": "Su-57D: 2."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-57", "url": "https://odin.t2com.army.mil/WEG/Asset/0dabf5bc7b5370a11075350ea11f38aa", "retrieved": "2026-10-28"},
        {"name": "Migflug: Su-57 Felon", "url": "https://migflug.com/afterburner/aircraft/su-57-felon/", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Sukhoi Su-57", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-57", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Russia concentrates most of its Su-57 fleet (11 Feb 2026)", "url": "https://militarnyi.com/en/news/russia-concentrates-most-of-its-su-57-fleet/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Receives Second Batch of Su-57 Fighters in 2026", "url": "https://militarnyi.com/en/news/uac-su-57-russian-aerospace-forces-in-2026/", "retrieved": "2026-11-25"}
      ]
    },
    "Orlan-10": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Taktikaline droon luureks, jälgimiseks ja suurtükitule korrigeerimiseks; kasutatakse ka elektroonilise võitluse kompleksi Leer-3 koosseisus.",
        "typicalUnit": "Mehitamata süsteemide luureüksus",
        "wingspan": 3.1,
        "maxTakeoffWeightKg": 15,
        "payload": 6,
        "engine": "Saito FA-62B kolbmootor (0,95 kW)",
        "power": 0.95,
        "maxSpeed": 150,
        "serviceCeiling": 5000,
        "endurance": 16,
        "combatRadius": 110,
        "ferryRange": 600,
        "sensors": "Canon EOS 750D/800D kaamera ja termokaamera",
        "specialEquipment": "Katapultstart, langevarjuga maandumine"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Orlan-10", "url": "https://odin.t2com.army.mil/WEG/Asset/379eaac7d219f22f944c3b04bd4228cf", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Orlan-10", "url": "https://en.wikipedia.org/wiki/Orlan-10", "retrieved": "2026-10-23"},
        {"name": "Inside Unmanned Systems: What Russia's Rubicon drone units reveal", "url": "https://insideunmannedsystems.com/?p=42510", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Russian drone manufacturer 'Orlan-10' ramps up production despite sanctions", "url": "https://euromaidanpress.com/2024/01/13/russian-drone-manufacturer-orlan-10-ramps-up-production-despite-sanctions-inform-napalm-reports/", "retrieved": "2026-11-25"}
      ]
    },
    "ZALA Lancet": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Eriotstarbeline (SpNz) üksus; Õhudessantväed",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Hulkuv laskemoon (ründedroon) soomusmasinate, suurtükkide ja õhutõrje tabamiseks.",
        "maxTakeoffWeightKg": 12,
        "ferryRange": 40,
        "payload": 3,
        "warheadMass": 3,
        "engine": "Elektrimootor",
        "cruiseSpeed": 110,
        "endurance": 0.67,
        "specialEquipment": "Katapultstart; optiline telejuhtimine ja sihtimine"
      },
      "sources": [
        {"name": "Wikipedia: ZALA Lancet", "url": "https://en.wikipedia.org/wiki/ZALA_Lancet", "retrieved": "2026-10-23"},
        {"name": "Shephard: Russia reaches new monthly record for Lancet use in Ukraine", "url": "https://shephardmedia.com/news/uv-online/russia-reaches-new-monthly-record-for-lancet-use-in-ukraine", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Deploys Updated Lancet Strike Drone in Ukraine", "url": "https://militarnyi.com/en/news/russia-deploys-updated-lancet-strike-drone-in-ukraine/", "retrieved": "2026-11-25"},
        {"name": "Inside Unmanned Systems: What Russia's Rubicon drone units reveal", "url": "https://insideunmannedsystems.com/?p=42510", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: ZALA Lancet – engagement and countereffort", "url": "https://militarnyi.com/en/articles/zala-lancet-engagement-and-countereffort/", "retrieved": "2026-11-26"}
      ]
    },
    "Gerbera": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Odav peibutus-, luure- ja ründedroon, mida kasutatakse koos Geran-2-ga.",
        "length": 2,
        "wingspan": 2.5,
        "engine": "Sisepõlemismootor (tavaliselt DLE60, 60 cm³), tõukepropeller",
        "maxSpeed": 160,
        "ferryRange": 300,
        "payload": 10
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Gerbera", "url": "https://odin.t2com.army.mil/WEG/Asset/770b8d2033f2c26f78cb1e5ab7209b94", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Gerbera (drone)", "url": "https://en.wikipedia.org/wiki/Gerbera_(drone)", "retrieved": "2026-10-23"}
      ]
    },
    "Geran-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kaugmaa ründedroon sügaval tagalas paiknevate objektide ründamiseks.",
        "typicalUnit": "VKS ründedroonide üksus",
        "length": 3.5,
        "wingspan": 2.5,
        "maxTakeoffWeightKg": 240,
        "ferryRange": 2500,
        "payload": 50,
        "warheadMass": 50,
        "engine": "Mado MD-550 kolbmootor",
        "maxSpeed": 185,
        "specialEquipment": "GNSS/INS-juhtimine (ka GLONASS); start rööbastelt stardikiirendi abil"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Geran-2", "url": "https://odin.t2com.army.mil/WEG/Asset/0641c3e1e7dbc7489aa655b1245969a8", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: HESA Shahed 136", "url": "https://en.wikipedia.org/wiki/HESA_Shahed_136", "retrieved": "2026-10-23"},
        {"name": "Jamestown: Russia's Unmanned Systems Forces become wildcard", "url": "https://jamestown.org/russias-unmanned-systems-forces-become-wildcard-in-moscows-military-modernization/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia Produces About 2,800 Geran-2 Drones per Month", "url": "https://militarnyi.com/en/news/russia-produces-about-2-800-geran-2-drones-per-month/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Production of the Geran-4/5 Jet Drones Has Surpassed That of the Geran-2", "url": "https://militarnyi.com/en/news/production-of-the-geran-4-5-jet-drones-has-surpassed-that-of-the-geran-2/", "retrieved": "2026-11-25"}
      ]
    },
    "Geran-3/Geran-4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kaugmaa ründedroon.",
        "typicalUnit": "VKS ründedroonide üksus",
        "length": 3.5,
        "wingspan": 3,
        "engine": "Turboreaktiivmootor: Geran-4 – Telefly LX-WP-160 (160 kgf) või Telefly TF-TJ2000A (200 kgf); Geran-3 – Telefly JT80",
        "maxSpeed": 500,
        "serviceCeiling": 5000,
        "ferryRange": 450,
        "warheadMass": 50
      },
      "notes": {
        "length": "Andmed kehtivad Geran-4 kohta.",
        "maxSpeed": "Andmed kehtivad Geran-4 kohta; manööverdamisel 300–400 km/h. Geran-3: 300–370 km/h.",
        "serviceCeiling": "Andmed kehtivad Geran-4 kohta.",
        "ferryRange": "Andmed kehtivad Geran-4 kohta. Geran-3: kuni 1000 km.",
        "warheadMass": "Geran-4: 50 kg kildlõhke- või termobaariline (OFZBTš-50/TBBTš-50M) või suurendatud 90 kg termobaariline (TBBTš-90)."
      },
      "sources": [
        {"name": "HUR / United24: Geran-4 (25.05.2026)", "url": "https://united24media.com/war-in-ukraine/ukraines-intelligence-reveals-russias-new-jet-powered-geran-4-drone-built-to-evade-interceptors-19125", "retrieved": "2026-11-10"},
        {"name": "HUR / Defence Industry Europe: Geran-4 (mõõtmed, ulatus)", "url": "https://defence-industry.eu/ukraines-defence-intelligence-details-russias-new-geran-4-jet-powered-strike-drone-and-foreign-components/", "retrieved": "2026-11-10"},
        {"name": "HUR / United24: Geran-3", "url": "https://united24media.com/war-in-ukraine/why-russias-new-jet-powered-drones-are-harder-to-stop-22666", "retrieved": "2026-11-10"},
        {"name": "Jamestown: Russia's Unmanned Systems Forces become wildcard", "url": "https://jamestown.org/russias-unmanned-systems-forces-become-wildcard-in-moscows-military-modernization/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Production of the Geran-4/5 Jet Drones Has Surpassed That of the Geran-2", "url": "https://militarnyi.com/en/news/production-of-the-geran-4-5-jet-drones-has-surpassed-that-of-the-geran-2/", "retrieved": "2026-11-25"}
      ]
    },
    "Geran-5": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kaugmaa ründedroon.",
        "typicalUnit": "VKS ründedroonide üksus",
        "length": 6,
        "wingspan": 3.2,
        "maxTakeoffWeightKg": 850,
        "ferryRange": 1000,
        "payload": 90,
        "warheadMass": 90,
        "engine": "Turboreaktiivmootor Telefly TF-TJ2000A (Hiina)",
        "maxSpeed": 600,
        "serviceCeiling": 6000,
        "endurance": 2
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Geran-5", "url": "https://odin.t2com.army.mil/WEG/Asset/e0db4f6fdfcb42f6f26eabda2301c839", "retrieved": "2026-10-28"},
        {"name": "Kyiv Post: Geran-5 (HUR)", "url": "https://www.kyivpost.com/amp/post/68327", "retrieved": "2026-10-23"},
        {"name": "Jamestown: Russia's Unmanned Systems Forces become wildcard", "url": "https://jamestown.org/russias-unmanned-systems-forces-become-wildcard-in-moscows-military-modernization/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Production of the Geran-4/5 Jet Drones Has Surpassed That of the Geran-2", "url": "https://militarnyi.com/en/news/production-of-the-geran-4-5-jet-drones-has-surpassed-that-of-the-geran-2/", "retrieved": "2026-11-25"}
      ]
    },
    "Molnja-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mehitamata süsteemide ründeüksus",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Odav lühimaa ründedroon.",
        "wingspan": 1.5,
        "maxTakeoffWeightKg": 10,
        "ferryRange": 40,
        "payload": 5,
        "engine": "Kaks elektrimootorit",
        "maxSpeed": 120,
        "cruiseSpeed": 80,
        "endurance": 0.7
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Molnja-2", "url": "https://odin.t2com.army.mil/WEG/Asset/5fac868e9ad10594815bbea7c2291c11", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Molniya drone", "url": "https://en.wikipedia.org/wiki/Molniya_(drone)", "retrieved": "2026-10-23"},
        {"name": "Kyiv Independent: Majority of companies involved in Russian Molniya drone production unsanctioned", "url": "https://kyivindependent.com/exclusive-majority-of-companies-involved-in-russian-molniya-drone-production-unsanctioned-research-shows/", "retrieved": "2026-11-25"},
        {"name": "United24 Media: A Russian drone that takes off every minute along Ukraine's front", "url": "https://united24media.com/world/a-russian-drone-that-takes-off-every-minute-along-ukraines-front-how-do-you-stop-molniya-19647", "retrieved": "2026-11-25"},
        {"name": "Inside Unmanned Systems: What Russia's Rubicon drone units reveal", "url": "https://insideunmannedsystems.com/?p=42510", "retrieved": "2026-11-25"}
      ]
    },
    "Molnja-1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mehitamata süsteemide ründeüksus",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Odav lühimaa ründedroon.",
        "wingspan": 1.5,
        "maxTakeoffWeightKg": 10,
        "payload": 5,
        "engine": "Elektrimootor",
        "maxSpeed": 150,
        "endurance": 0.67
      },
      "sources": [
        {"name": "Wikipedia: Molniya drone", "url": "https://en.wikipedia.org/wiki/Molniya_(drone)", "retrieved": "2026-10-23"},
        {"name": "Inside Unmanned Systems: What Russia's Rubicon drone units reveal", "url": "https://insideunmannedsystems.com/?p=42510", "retrieved": "2026-11-25"}
      ]
    },
    "Supercam S350": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Taktikaline luuredroon sihtmärkide avastamiseks.",
        "wingspan": 3.2,
        "maxTakeoffWeightKg": 11.5,
        "ferryRange": 240,
        "payload": 2.5,
        "engine": "Elektrimootor",
        "maxSpeed": 120,
        "endurance": 4.5,
        "controlRange": 100,
        "specialEquipment": "Start elastse või pneumaatilise katapuldiga, maandumine langevarjuga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Supercam S350", "url": "https://odin.t2com.army.mil/WEG/Asset/955834539eadc753a28aa1f7843efa3e", "retrieved": "2026-10-28"},
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Supercam S350", "url": "https://war-sanctions.gur.gov.ua/en/uav/217", "retrieved": "2026-10-23"},
        {"name": "Molfar: Supercam drone production: war, spying and sanctions helplessness", "url": "https://molfar.com/en/blog/vyrobnyctvo-droniv-supercam-viina-shpygunstvo-sankciina-bezporadnist", "retrieved": "2026-11-25"}
      ]
    },
    "Eleron-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike lühimaa luuredroon.",
        "length": 0.6,
        "wingspan": 1.47,
        "maxTakeoffWeightKg": 5.3,
        "ferryRange": 60,
        "payload": 1,
        "engine": "Elektrimootor",
        "maxSpeed": 130,
        "endurance": 1.67,
        "serviceCeiling": 4000,
        "controlRange": 25,
        "specialEquipment": "Katapultstart, maandumine langevarjuga; GPS/GLONASS"
      },
      "sources": [
        {"name": "Wikipedia: ENICS Eleron-3", "url": "https://en.wikipedia.org/wiki/ENICS_Eleron-3", "retrieved": "2026-10-23"},
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Eleron-3", "url": "https://war-sanctions.gur.gov.ua/en/uav/227", "retrieved": "2026-10-23"}
      ]
    },
    "Orion": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Keskmise kõrguse pikaajalise lennuga luure- ja ründedroon.",
        "length": 8,
        "wingspan": 16,
        "maxTakeoffWeightKg": 1150,
        "ferryRange": 1440,
        "payload": 250,
        "maxSpeed": 200,
        "cruiseSpeed": 120,
        "serviceCeiling": 7500,
        "endurance": 24,
        "airToGroundWeapons": "Tankitõrjerakett Vikhr-1V, tiibrakett Banderol (S8000)"
      },
      "sources": [
        {"name": "Wikipedia: Kronshtadt Orion", "url": "https://en.wikipedia.org/wiki/Kronshtadt_Orion", "retrieved": "2026-10-23"},
        {"name": "United24 Media: Strike drones hit key Russian arms facility making Orion UAVs and S8000 missiles", "url": "https://united24media.com/latest-news/strike-drones-hit-key-russian-arms-facility-making-orion-uavs-and-s8000-missiles-8693", "retrieved": "2026-11-25"}
      ]
    },
    "Zala KUB-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Hulkuv laskemoon (ründedroon).",
        "length": 0.95,
        "wingspan": 1.21,
        "maxSpeed": 130,
        "endurance": 0.5,
        "payload": 3
      },
      "sources": [
        {"name": "Wikipedia: ZALA KUB-BLA", "url": "https://en.wikipedia.org/wiki/ZALA_Kub-BLA", "retrieved": "2026-10-23"}
      ]
    },
    "Zala KUB": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Hulkuv laskemoon (ründedroon).",
        "length": 0.95,
        "wingspan": 1.21,
        "maxSpeed": 130,
        "ferryRange": 40,
        "endurance": 0.5,
        "payload": 3
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Zala KUB", "url": "https://odin.t2com.army.mil/WEG/Asset/64e82ecf06f6edfe3ef96b58493d1871", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: ZALA KUB-BLA", "url": "https://en.wikipedia.org/wiki/ZALA_Kub-BLA", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Russia increases KYB loitering munitions production capacity tenfold", "url": "https://armyrecognition.com/news/army-news/army-news-2024/russia-increases-kyb-loitering-munitions-production-capacity-tenfold", "retrieved": "2026-11-25"}
      ]
    },
    "Skalpel": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Hulkuv laskemoon (ründedroon).",
        "length": 0.65,
        "maxTakeoffWeightKg": 10.5,
        "ferryRange": 40,
        "warheadMass": 5,
        "cruiseSpeed": 120
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Skalpel", "url": "https://odin.t2com.army.mil/WEG/Asset/6f5d89e0efc459f4723dc488c350918e", "retrieved": "2026-10-28"},
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Scalpel", "url": "https://war-sanctions.gur.gov.ua/en/page-skalpel", "retrieved": "2026-10-23"},
        {"name": "Defence Industry Europe: Russia launches mass production of Scalpel loitering munition", "url": "https://defence-industry.eu/russia-launches-mass-production-of-scalpel-loitering-munition/", "retrieved": "2026-11-25"}
      ]
    },
    "Knijaz Veši Oleg": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike luuredroon.",
        "length": 0.82,
        "wingspan": 2.8,
        "maxTakeoffWeightKg": 11,
        "payload": 0.6,
        "maxSpeed": 130,
        "cruiseSpeed": 80,
        "serviceCeiling": 3000,
        "endurance": 3.5,
        "combatRadius": 45,
        "sensors": "Kolmeteljelisel stabilisaatoril lainurk-Full HD-kaamera ja 10× optilise suumiga kaamera"
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Knyaz Veschyi Oleg", "url": "https://war-sanctions.gur.gov.ua/en/page-knyaz-oleg", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Russia Significantly Increases Use of Knyaz Veshchy Oleg UAVs: Ranks Second After ZALA", "url": "https://militarnyi.com/en/news/russia-knyaz-veshchy-oleg-uavs-second-zala/", "retrieved": "2026-11-25"}
      ]
    },
    "Privet-82": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Lühimaa ründedroon.",
        "maxTakeoffWeightKg": 8.5,
        "payload": 5.5,
        "maxSpeed": 140,
        "cruiseSpeed": 90,
        "serviceCeiling": 2000,
        "endurance": 0.33,
        "combatRadius": 30
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Privet-82", "url": "https://war-sanctions.gur.gov.ua/en/uav/448", "retrieved": "2026-10-23"}
      ]
    },
    "Albatros-M5": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Taktikaline luuredroon.",
        "wingspan": 3.3,
        "maxTakeoffWeightKg": 15,
        "ferryRange": 300,
        "payload": 5,
        "engine": "Elektrimootor",
        "maxSpeed": 120,
        "cruiseSpeed": 72,
        "serviceCeiling": 5000,
        "endurance": 4.5,
        "specialEquipment": "Start elastse või pneumaatilise katapuldiga, maandumine langevarjuga"
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Albatros M5", "url": "https://war-sanctions.gur.gov.ua/en/uav/355", "retrieved": "2026-10-23"}
      ]
    },
    "Zala Z-20": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Taktikaline luuredroon.",
        "wingspan": 4,
        "maxTakeoffWeightKg": 17,
        "payload": 2.5,
        "engine": "Elektrimootor",
        "maxSpeed": 110,
        "serviceCeiling": 5000,
        "endurance": 6,
        "controlRange": 100,
        "specialEquipment": "Pneumaatiline katapult, maandumine langevarjuga"
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Zala Z-20", "url": "https://war-sanctions.gur.gov.ua/en/uav/371", "retrieved": "2026-10-23"},
        {"name": "EDR Magazine: ZALA T-20", "url": "https://www.edrmagazine.eu/interpolitex-2024-zala-aero-unveils-its-t-20-uav", "retrieved": "2026-10-23"},
        {"name": "Kyiv Post: Ukrainian forces shoot down rare Russian ZALA Z-20", "url": "https://www.kyivpost.com/post/67525", "retrieved": "2026-11-27"}
      ]
    },
    "Zala Z-16": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Taktikaline luuredroon.",
        "wingspan": 2.815,
        "maxTakeoffWeightKg": 10.5,
        "payload": 1.8,
        "engine": "Elektrimootor",
        "maxSpeed": 110,
        "serviceCeiling": 5000,
        "endurance": 4,
        "controlRange": 75,
        "specialEquipment": "Pneumaatiline start, maandumine langevarjuga"
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Zala Z-16 (421-16E)", "url": "https://war-sanctions.gur.gov.ua/en/uav/272", "retrieved": "2026-10-23"},
        {"name": "dev.ua: Evolution of air drones (2025)", "url": "https://dev.ua/en/news/evoliutsiia-povitrianykh-droniv-1742208728", "retrieved": "2026-11-27"}
      ]
    },
    "V2U AI": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Autonoomne ründedroon tehisintellektil põhineva sihtimisega.",
        "warheadMass": 2.9,
        "engine": "Elektrimootor (Hiina tsiviiltoode)",
        "sensors": "Kaamera ja Nvidia Jetson Orin tehisintellektimoodul (Leetop A603)",
        "specialEquipment": "Katapultstart; INS/satelliitjuhtimine"
      },
      "sources": [
        {"name": "Long War Journal: V2U", "url": "https://www.longwarjournal.org/archives/2025/06/ukrainian-intelligence-details-russias-new-v2u-autonomous-loitering-munition.php", "retrieved": "2026-10-23"}
      ]
    },
    "ZALA Z-54": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ründedroon autonoomse sihtmärgi tuvastuse ja rünnakuga.",
        "engine": "Kahesilindriline bensiinimootor",
        "maxSpeed": 150,
        "cruiseSpeed": 120,
        "specialEquipment": "INS/GNSS-navigatsioon",
        "ferryRange": 200
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: ZALA Z-54", "url": "https://odin.t2com.army.mil/WEG/Asset/bec93ebb6310052aa500e96f3cc9cdce", "retrieved": "2026-10-28"},
        {"name": "ARMSNET: ZALA Z-54", "url": "https://armsnet.duckdns.org/equipment/297aad10-19b2-46d6-e357-08de6e3c1543", "retrieved": "2026-11-27"}
      ]
    },
    "Merlin VR": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Pikaajalise lennuga luuredroon.",
        "wingspan": 5,
        "engine": "Elektrimootor",
        "serviceCeiling": 5000,
        "endurance": 10,
        "sensors": "Optoelektrooniline moodul termokaameraga (tuvastusulatus 30 km)",
        "specialEquipment": "Automaatne ja poolautomaatne juhtimisrežiim"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Merlin-VR", "url": "https://odin.t2com.army.mil/WEG/Asset/ab8a8df2f3fc5e306d13a00eb2402a8c", "retrieved": "2026-10-28"},
        {"name": "Defense Express: Strix shoots down Merlin-VR", "url": "https://en.defence-ua.com/news/ukrainian_strix_unit_shoots_down_rare_russian_merlin_vr_recon_drone_worth_300000_video-18382.html", "retrieved": "2026-10-28"}
      ]
    },
    "Banderol": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Väike tiibrakett, mida kannab Orion-droon.",
        "length": 5,
        "wingspan": 2.2,
        "engine": "SW800Pro mikroturboreaktiivmootor (umbes 82 kgf)",
        "maxSpeed": 650,
        "cruiseSpeed": 530,
        "specialEquipment": "INS/GNSS-juhtimine",
        "ferryRange": 500
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: S8000 Banderol", "url": "https://odin.t2com.army.mil/WEG/Asset/9da7792070eb9c26258ee8122f85006c", "retrieved": "2026-10-28"},
        {"name": "United24 Media: Strike drones hit key Russian arms facility making Orion UAVs and S8000 missiles", "url": "https://united24media.com/latest-news/strike-drones-hit-key-russian-arms-facility-making-orion-uavs-and-s8000-missiles-8693", "retrieved": "2026-11-25"}
      ]
    },
    "Dan-T": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Lennukilt või kopterilt startiv väike tiibrakett.",
        "length": 3.4,
        "wingspan": 2,
        "maxTakeoffWeightKg": 268,
        "ferryRange": 500,
        "warheadMass": 130,
        "engine": "Reaktiivmootor",
        "maxSpeed": 500,
        "specialEquipment": "INS/GNSS-juhtimine ilma pideva andmesideta; kandjad Su-25SM3, Su-30SM, Su-34, Su-35S, Su-57"
      },
      "notes": {
        "ferryRange": "450–500 km.",
        "warheadMass": "130–135 kg."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Dan-T", "url": "https://odin.t2com.army.mil/WEG/Asset/d09cbfedc8089584f342e699442a248e", "retrieved": "2026-10-28"},
        {"name": "Kyiv Post: Russia Continues to Develop Cheap Cruise Missile Substitutes", "url": "https://www.kyivpost.com/post/86238", "retrieved": "2026-11-25"},
        {"name": "United24 Media: Meet Russia's Dan-T, a cheap cruise missile Moscow plans to mass produce in 2027", "url": "https://united24media.com/war-in-ukraine/meet-russias-dan-t-a-cheap-cruise-missile-moscow-plans-to-mass-produce-in-2027-22035", "retrieved": "2026-11-25"}
      ]
    },
    "Forpost-R": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe lennuväe droonipolk",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Keskmise kõrguse pikaajalise lennuga luure- ja ründedroon.",
        "length": 6,
        "wingspan": 9.1,
        "payload": 100,
        "maxSpeed": 200,
        "serviceCeiling": 6000,
        "endurance": 18,
        "controlRange": 350,
        "airToGroundWeapons": "Juhitavad pommid KAB-20S"
      },
      "notes": {
        "serviceCeiling": "5–6 km."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Forpost-R", "url": "https://war-sanctions.gur.gov.ua/en/uav/281", "retrieved": "2026-10-28"},
        {"name": "AISAR: Forpost-R (Forpost-RU)", "url": "https://www.aisar.tech/catalog/drone/forpost-r", "retrieved": "2026-10-28"},
        {"name": "Army Recognition: Russian naval aviation armed with drones (part 1)", "url": "https://armyrecognition.com/focus-analysis-conflicts/navy/naval-technology/russian-naval-aviation-armed-with-drones-part-1", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia establishes drone command hub in Kamchatka", "url": "https://www.armyrecognition.com/archives/archives-aerospace-defense/defense-news-aerospace-2025/russia-establishes-drone-command-hub-in-kamchatka-to-boost-arctic-and-pacific-surveillance", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Media: Russian Federation Installed Radar on Forpost UAV", "url": "https://militarnyi.com/en/news/russian-media-russian-federation-installed-radar-on-forpost-uav/", "retrieved": "2026-11-25"}
      ]
    },
    "KUB-10": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Ründedroon, mis lendab satelliitnavigatsiooni abil eelnevalt määratud koordinaatidele.",
        "maxSpeed": 100,
        "cruiseSpeed": 100,
        "serviceCeiling": 2500,
        "specialEquipment": "Katapultstart; töökõrgus 100–2500 m"
      },
      "sources": [
        {"name": "Defence Industry Europe: Kalashnikov KUB-10E", "url": "https://defence-industry.eu/kalashnikov-group-introduces-new-kub-10e-loitering-munition-system/", "retrieved": "2026-10-28"}
      ]
    },
    "Granat-4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Taktikaline luuredroon.",
        "length": 2.5,
        "wingspan": 3.8,
        "maxTakeoffWeightKg": 45,
        "engine": "Sisepõlemismootor",
        "maxSpeed": 140,
        "cruiseSpeed": 90,
        "serviceCeiling": 3500,
        "ferryRange": 55,
        "endurance": 8,
        "sensors": "Vahetatavad moodulid: fotokaamera (14,1 MP), videokaamera, termokaamera",
        "specialEquipment": "Katapultstart, automaatne maandumine langevarjuga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Granat-4-E", "url": "https://odin.t2com.army.mil/WEG/Asset/0198c7310a595d09af78764c16584059", "retrieved": "2026-11-10"}
      ]
    },
    "Sokol-I": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurbrigaad; Mehitamata süsteemide polgu droonitõrjepataljon",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Püüdurdroon vastase droonide hävitamiseks rammimise või lõhkelaenguga.",
        "maxSpeed": 150,
        "serviceCeiling": 5000,
        "sensors": "Päeva- ja termokaamera",
        "specialEquipment": "Vahtplastist kere"
      },
      "sources": [
        {"name": "Defense Express: Sokol-I ja Molniya-PVO", "url": "https://en.defence-ua.com/weapon_and_tech/can_russias_sokol_i_and_molniya_pvo_really_pose_a_threat_to_ukrainian_uavs_including_hornet_class_systems-18716.html", "retrieved": "2026-10-28"},
        {"name": "Janes: Russia's Sokol-I interceptor used against Ukraine's Leleka, Blyskavka, Hornet UAVs", "url": "https://www.janes.com/defence-intelligence-insights/defence-news/air/russias-sokol-i-interceptor-used-against-ukraines-leleka-blyskavka-hornet-uavs", "retrieved": "2026-11-26"}
      ]
    },
    "Eleron-10": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike lühimaa luuredroon.",
        "maxTakeoffWeightKg": 15.5,
        "payload": 2,
        "engine": "Elektrimootor",
        "maxSpeed": 135,
        "serviceCeiling": 4000,
        "endurance": 2,
        "controlRange": 50,
        "specialEquipment": "Start pneumaatiliselt stardiseadmelt, maandumine langevarjuga; töötemperatuur −30…+40 °C"
      },
      "notes": {
        "maxSpeed": "75–135 km/h.",
        "controlRange": "Videokanali ulatus."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Eleron-10", "url": "https://war-sanctions.gur.gov.ua/en/uav/451", "retrieved": "2026-10-28"}
      ]
    },
    "Eleron-7": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike lühimaa luuredroon.",
        "maxTakeoffWeightKg": 7,
        "payload": 1,
        "engine": "Elektrimootor",
        "maxSpeed": 130,
        "serviceCeiling": 5000,
        "endurance": 2.5,
        "controlRange": 25,
        "specialEquipment": "Start pneumaatiliselt või kummitrossiga stardiseadmelt, maandumine langevarjuga; töötemperatuur −30…+40 °C"
      },
      "notes": {
        "maxSpeed": "70–130 km/h.",
        "controlRange": "Videokanali ulatus."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Eleron-7", "url": "https://war-sanctions.gur.gov.ua/en/uav/450", "retrieved": "2026-10-28"}
      ]
    },
    "Kartograf": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Pikaajalise lennuga luure- ja kaardistusdroon.",
        "maxTakeoffWeightKg": 20,
        "payload": 5,
        "maxSpeed": 145,
        "serviceCeiling": 3000,
        "endurance": 8,
        "ferryRange": 800
      },
      "notes": {
        "maxSpeed": "85–145 km/h."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Ptero-G0 (Cartographer)", "url": "https://war-sanctions.gur.gov.ua/en/uav/378", "retrieved": "2026-10-28"}
      ]
    },
    "Feniks": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Luuredroon.",
        "payload": 8,
        "engine": "Bensiini- ja petrooleumimootor",
        "sensors": "Güroskoopstabiliseeritud optoelektrooniline süsteem QIR50TPro (digitaalne IR-videokaamera)"
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Fenix", "url": "https://war-sanctions.gur.gov.ua/en/uav/333", "retrieved": "2026-10-28"}
      ]
    },
    "Sarõz-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Taktikaline luuredroon.",
        "maxTakeoffWeightKg": 14,
        "maxSpeed": 108,
        "serviceCeiling": 5000,
        "endurance": 4,
        "controlRange": 60
      },
      "notes": {
        "maxSpeed": "63–108 km/h."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Sarych", "url": "https://war-sanctions.gur.gov.ua/en/uav/395", "retrieved": "2026-10-28"}
      ]
    },
    "Ropucha II / III klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Põhjalaevastik; Balti laevastik; Musta mere laevastik; Vaikse ookeani laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Suur dessantlaev tankide, sõdurite ja lasti toimetamiseks rannale.",
        "standardDisplacement": 3450,
        "fullDisplacement": 4080,
        "length": 112.5,
        "width": 15,
        "draft": 3.7,
        "engine": "2 × Zgoda-Sulzer 16ZVB40/48 diislit (9600 hj iga); 3 × 750 kW diiselgeneraatorit",
        "power": 19200,
        "maxSpeedKn": 18,
        "range": 11297,
        "autonomy": 30,
        "crew": "87–98",
        "landingCapacity": "10 lahingutanki ja 340 dessantväelast; või 12 soomustransportööri ja 340 dessantväelast; või 500 t lasti (teistel andmetel 450 t)",
        "mainArmament": "76 mm AK-176 (Ropucha II); Ropucha I: 2 × 57 mm AK-725",
        "secondaryArmament": "2 × 30 mm AK-630; 2 × 122 mm A-215 Grad-M raketiheitjat",
        "samMissiles": "Strela-2 (SA-N-5), 4 stardiseadet"
      },
      "sources": [
        {"name": "Wikipedia: Ropucha-class landing ship", "url": "https://en.wikipedia.org/wiki/Ropucha-class_landing_ship", "retrieved": "2026-10-23"}
      ]
    },
    "Buyan-M klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kaspia flotill; Musta mere laevastik; Balti laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Väike raketilaev rannikuvööndis tegutsemiseks ja rannikualade kaitseks.",
        "standardDisplacement": 850,
        "fullDisplacement": 949,
        "length": 75,
        "width": 11,
        "draft": 2.5,
        "engine": "CODAD, 2 võlli: 4 × Zvezda M520 diislit; veejoakäitur",
        "power": 14584,
        "maxSpeedKn": 26,
        "range": 4260,
        "autonomy": 15,
        "crew": "52",
        "mainArmament": "100 mm A-190-01",
        "antiShipMissiles": "Vertikaalstardiseade UKSK (2 × 4 pesa): Kalibr või Oniks",
        "samMissiles": "2 × 4 Komar",
        "secondaryArmament": "AK-630M2 (2 × 30 mm); 10-toruline 55 mm granaadiheitja DP-65; 2 × 14,5 mm KPV",
        "sensors": "Faasantennradar Pozitiv-M1, navigatsiooniradar MP-231-2, tulejuhtimisradar Laska, sukeldujatõrje hüdrolokaator Anapa-M"
      },
      "sources": [
        {"name": "Wikipedia: Buyan-class corvette", "url": "https://en.wikipedia.org/wiki/Buyan-class_corvette", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Buyan-M-class corvette", "url": "https://en.wikipedia.org/wiki/Buyan-M-class_corvette", "retrieved": "2026-11-25"}
      ]
    },
    "Vishnya klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Põhjalaevastik; Balti laevastik; Musta mere laevastik; Vaikse ookeani laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Raadio- ja elektroonilise luure laev.",
        "standardDisplacement": 3100,
        "fullDisplacement": 3470,
        "length": 94.4,
        "width": 14.6,
        "draft": 4.5,
        "engine": "2 × Zgoda Sulzer 12AV 25/30 diislit",
        "power": 4400,
        "maxSpeedKn": 16,
        "crew": "146",
        "autonomy": 45,
        "range": 14631,
        "secondaryArmament": "2 × 30 mm AK-630",
        "samMissiles": "2 × SA-N-8 stardiseadet",
        "sensors": "Radar MR-212/201 (Palm Frond); hüdrolokaatorid MG-349 ja MGP-303"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Vishnya klass", "url": "https://odin.t2com.army.mil/WEG/Asset/8bd73165300f9a0ffe55e846625211ac", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Vishnya-class intelligence ship", "url": "https://en.wikipedia.org/wiki/Vishnya-class_intelligence_ship", "retrieved": "2026-10-23"}
      ]
    },
    "Parchim II klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Korvett rannikuvete allveelaevatõrjeks.",
        "standardDisplacement": 800,
        "fullDisplacement": 950,
        "length": 72,
        "width": 9.4,
        "draft": 4.6,
        "engine": "M504 diislid, 3 võlli",
        "power": 14250,
        "maxSpeedKn": 24.7,
        "range": 3889,
        "crew": "80",
        "mainArmament": "57 mm kaksikkahur AK-725",
        "secondaryArmament": "30 mm kaksikkahur AK-230; 2 × allveelaevatõrje raketiheitja RBU-6000; 12 süvaveepommi",
        "samMissiles": "2 stardiseadet Strela-2 (SA-N-5)",
        "torpedoes": "4 × 400 mm torpeedotoru",
        "sensors": "Radarid Positive-E ja Spin Trough; Bass Tilt"
      },
      "sources": [
        {"name": "Wikipedia: Parchim-class corvette", "url": "https://en.wikipedia.org/wiki/Parchim-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Neustrashimyy klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2023},
        "purpose": "Allveelaevatõrjefregatt.",
        "standardDisplacement": 3210,
        "fullDisplacement": 4400,
        "length": 129,
        "width": 15.6,
        "draft": 5.6,
        "engine": "COGAG, 2 võlli: kaks M70 või D090 sõidugaasiturbiini ja kaks M90 kiirendusturbiini",
        "power": 110000,
        "maxSpeedKn": 30,
        "crew": "210",
        "range": 5371,
        "mainArmament": "100 mm kahur",
        "antiShipMissiles": "2 × 4 Kh-35 (SS-N-25), ainult Yaroslav Mudry",
        "samMissiles": "SA-N-9, 4 × 8 vertikaalstardi pesa",
        "aswWeapons": "12-toruline RBU-6000",
        "torpedoes": "6 × 533 mm toru (raketid SS-N-15 / SS-N-16 või torpeedod Type 53)",
        "secondaryArmament": "2 × lähitõrjekompleks Kashtan",
        "aviation": "Kopter Ka-27, kopteriplatvorm ja angaar"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Neustrashimyy klass", "url": "https://odin.t2com.army.mil/WEG/Asset/7a3ee0755ea354b22da60e7314f3dbeb", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Neustrashimy-class frigate", "url": "https://en.wikipedia.org/wiki/Neustrashimy-class_frigate", "retrieved": "2026-10-23"}
      ]
    },
    "Steregushchiy klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik; Vaikse ookeani laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Mitmeotstarbeline korvett rannikuvööndis tegutsemiseks, allveelaevade ja pinnalaevade tõrjeks ning dessandi tuletoetuseks.",
        "standardDisplacement": 1800,
        "fullDisplacement": 2200,
        "length": 104.5,
        "width": 13,
        "draft": 3.7,
        "engine": "CODAD, 2 võlli: 4 × Kolomna 16D49 diislit",
        "power": 23664,
        "maxSpeedKn": 27,
        "range": 7038,
        "autonomy": 15,
        "crew": "90",
        "mainArmament": "100 mm A-190 või 130 mm A-192",
        "antiShipMissiles": "2 × 4 Kh-35 (SS-N-25)",
        "samMissiles": "Redut, 12 vertikaalstardi pesa (ainult projekt 20381); raketid 9M100",
        "secondaryArmament": "2 × 30 mm AK-630M (projekt 20381); 2 × 14,5 mm MTPU",
        "aswWeapons": "Paket-NK, 2 × 4 330 mm toru (allveelaevade ja torpeedode tõrjeks)",
        "aviation": "Angaar koptrile Ka-27; drooni Orlan-10 stardiplatvorm",
        "sensors": "Furke-2, Garpun-B, Monument; kerel asuv hüdrolokaator Zarya-M ja veetav hüdrolokaator Vinyetka"
      },
      "sources": [
        {"name": "Wikipedia: Steregushchiy-class corvette", "url": "https://en.wikipedia.org/wiki/Steregushchiy-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Pomornik klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik",
        "purpose": "Dessanthõljuk vägede toimetamiseks laevadelt ka ettevalmistamata rannale.",
        "standardDisplacement": 415,
        "fullDisplacement": 555,
        "length": 57,
        "width": 25.6,
        "draft": 1.6,
        "engine": "3 gaasiturbiini (umbes 10 000 hj iga)",
        "power": 30000,
        "maxSpeedKn": 63,
        "range": 556,
        "crew": "31",
        "landingCapacity": "3 lahingutanki (kuni 150 t); või 10 soomukit ja 230 dessantväelast; või kuni 500 dessantväelast",
        "secondaryArmament": "2 × 30 mm AK-630; 2 × 140 mm raketiheitja Ogon (22 raketti iga) või 2 × 122 mm",
        "samMissiles": "4 kaasaskantavat õhutõrjeraketikompleksi Strela-3 või 2 × 4 Strela-2",
        "mineLaying": "Eemaldatav komplekt 20–80 miini paigaldamiseks"
      },
      "sources": [
        {"name": "Wikipedia: Zubr-class LCAC", "url": "https://en.wikipedia.org/wiki/Zubr-class_LCAC", "retrieved": "2026-10-23"}
      ]
    },
    "Uragan/Karakurt klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik; Musta mere laevastik; Kaspia flotill",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike raketilaev (kasutusel alates 2018. aastast).",
        "fullDisplacement": 800,
        "length": 67,
        "width": 11,
        "draft": 3.3,
        "engine": "CODAD: 3 × Zvezda M-507D1 või 16D49/16D500 turbodiislit; 3 × DGAS-315 diiselgeneraatorit",
        "maxSpeedKn": 30,
        "range": 4630,
        "autonomy": 15,
        "crew": "50–70",
        "mainArmament": "76,2 mm AK-176MA või 100 mm A-190",
        "antiShipMissiles": "Vertikaalstardiseade UKSK (2 × 4 pesa): Kalibr või Oniks",
        "samMissiles": "Pantsir-M (Hermes-K) või Palma (Sosna-R, 8 raketti) või Tor (kaks esimest laeva)",
        "secondaryArmament": "2 × 12,7 mm Kord; kaks esimest laeva: 2 × AK-630M-2",
        "aviation": "Drooni Orlan-10 stardiseade",
        "sensors": "Mineral-M, Pozitiv-M 1.2, tulejuhtimisradar Laska"
      },
      "sources": [
        {"name": "Wikipedia: Karakurt-class corvette", "url": "https://en.wikipedia.org/wiki/Karakurt-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Tarantul klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Vaikse ookeani laevastik; Balti laevastik; Musta mere laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Raketikorvett.",
        "standardDisplacement": 488,
        "fullDisplacement": 549,
        "length": 56,
        "width": 10.5,
        "draft": 2.5,
        "engine": "Gaasiturbiinid COGAG/COGOG (11 000 hj iga) + 2 marsimootorit (4000 hj)",
        "range": 4445,
        "autonomy": 10,
        "crew": "50",
        "mainArmament": "76 mm AK-176",
        "antiShipMissiles": "4 × P-15 Termit või 4 × P-270 Moskit või 16 × Kh-35 või 4 × BrahMos (sõltuvalt versioonist)",
        "samMissiles": "Nelikstardiseade SA-N-5",
        "secondaryArmament": "2 × 30 mm AK-630 või 1 × Kashtan",
        "sensors": "Spin Trough, Bass Tilt, Peel Pair, Pop Group"
      },
      "sources": [
        {"name": "Wikipedia: Tarantul-class corvette", "url": "https://en.wikipedia.org/wiki/Tarantul-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Aleksandrit klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Põhjalaevastik; Balti laevastik; Musta mere laevastik; Vaikse ookeani laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Miinitraaler, mis hävitab miine ohutust kaugusest mehitamata sõidukitega.",
        "standardDisplacement": 620,
        "fullDisplacement": 890,
        "length": 61,
        "width": 10.2,
        "draft": 2.68,
        "engine": "2 × Zvezda M503 diislit",
        "power": 2500,
        "maxSpeedKn": 16.5,
        "range": 2963,
        "autonomy": 10,
        "crew": "45",
        "secondaryArmament": "AK-306 (30 mm); 14,5 mm MTPU",
        "samMissiles": "Kaasaskantavad õhutõrjeraketikompleksid Igla või Verba",
        "mineClearing": "Trallid ning telejuhitavad ja autonoomsed veealused ja pealveesõidukid"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Aleksandrit klass", "url": "https://odin.t2com.army.mil/WEG/Asset/c1ce5947d7a33bb581f03deb3623e06d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Alexandrit-class minesweeper", "url": "https://en.wikipedia.org/wiki/Alexandrit-class_minesweeper", "retrieved": "2026-10-23"}
      ]
    },
    "Dyugon klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik; Kaspia flotill; Vaikse ookeani laevastik",
        "purpose": "Dessantkaater tankide, soomustransportööride ja merejalaväelaste veoks.",
        "fullDisplacement": 280,
        "length": 45,
        "width": 8.6,
        "draft": 2.2,
        "engine": "2 × M507A-2D diislit (9000 hj iga)",
        "power": 18000,
        "maxSpeedKn": 35,
        "range": 926,
        "crew": "7",
        "landingCapacity": "120–140 t lasti; 3 lahingutanki või 5 soomustransportööri; kuni 100 dessantväelast",
        "secondaryArmament": "2 × 14,5 mm KPV"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Dyugon klass", "url": "https://odin.t2com.army.mil/WEG/Asset/59808b1887b861f8834b7294be60c6e2", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Dyugon-class landing craft", "url": "https://en.wikipedia.org/wiki/Dyugon-class_landing_craft", "retrieved": "2026-10-23"}
      ]
    },
    "Sovremenny klass": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Hävitaja pinnalaevade tõrjeks ning saadetavate laevade kaitseks mere- ja õhuohtude eest.",
        "standardDisplacement": 7940,
        "fullDisplacement": 8480,
        "length": 156.5,
        "width": 17.2,
        "draft": 5.2,
        "engine": "2 auruturbiini (37 000 kW iga), 4 kõrgsurvekatelt",
        "power": 100000,
        "maxSpeedKn": 32,
        "autonomy": 30,
        "range": 9260,
        "mainArmament": "2 × 130 mm kaksikkahur AK-130",
        "antiShipMissiles": "8 × Moskit (SS-N-22) kahes neljases stardiseadmes",
        "samMissiles": "48 × SA-N-7 (Shtil)",
        "secondaryArmament": "4 × 30 mm AK-630",
        "aswWeapons": "2 × RBU-1000 (6-toruline, 48 raketti)",
        "torpedoes": "4 × 533 mm torud (2 × 2)",
        "aviation": "Kopter Ka-27, kopteriplatvorm ja teleskoopangaar",
        "sensors": "Fregat-MP, Mineral-ME, Ehkran, Orekh; hüdrolokaator MGK-355 Platina"
      },
      "notes": {},
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Sovremenny klass", "url": "https://odin.t2com.army.mil/WEG/Asset/faa46cd6750dce3ce106a9076ae14a26", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sovremennyy-class destroyer", "url": "https://en.wikipedia.org/wiki/Sovremennyy-class_destroyer", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Russian destroyer Admiral Ushakov", "url": "https://en.wikipedia.org/wiki/Russian_destroyer_Admiral_Ushakov", "retrieved": "2026-11-25"},
        {"name": "Defense Express: Russia may have decommissioned one of its last two Baltic Sea destroyers", "url": "https://en.defence-ua.com/analysis/russia_may_have_decommissioned_one_of_its_last_two_baltic_sea_destroyers-13720.html", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Sovremenny-class destroyer", "url": "https://en.wikipedia.org/wiki/Sovremenny-class_destroyer", "retrieved": "2026-11-26"}
      ]
    },
    "Kilo-2 klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Musta mere laevastik; Vaikse ookeani laevastik; Balti laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Diiselallveelaev pinnalaevade ja allveelaevade tõrjeks madalates vetes.",
        "standardDisplacement": 2350,
        "fullDisplacement": 3950,
        "length": 73.8,
        "width": 9.9,
        "draft": 6.2,
        "engine": "Diisel-elektriline: 2 × 1000 kW diiselgeneraatorit, elektrimootor (4100–5100 kW), seitsmelabaline sõukruvi",
        "maxSpeedKn": 17,
        "submergedSpeed": 20,
        "range": 13890,
        "autonomy": 45,
        "diveDepth": 240,
        "crew": "52",
        "torpedoes": "6 × 533 mm torpeedotoru, 18 torpeedot",
        "antiShipMissiles": "Kalibr (umbes 4 raketti, lastakse kahe toru kaudu)",
        "mineLaying": "24 miini"
      },
      "sources": [
        {"name": "Wikipedia: Kilo-class submarine", "url": "https://en.wikipedia.org/wiki/Kilo-class_submarine", "retrieved": "2026-10-23"}
      ]
    },
    "Lada klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Põhjalaevastik; Balti laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Diiselallveelaev allveelaevade ja pinnalaevade tõrjeks, mereväebaaside ja ranniku kaitseks ning luureks.",
        "standardDisplacement": 1793,
        "fullDisplacement": 2743,
        "length": 72,
        "width": 7.1,
        "draft": 6.5,
        "engine": "Püsimagnetiga elektrimootor, 1 võll, akud",
        "power": 2700,
        "maxSpeedKn": 10,
        "submergedSpeed": 21,
        "range": 13890,
        "autonomy": 45,
        "diveDepth": 300,
        "crew": "35",
        "torpedoes": "6 × 533 mm torpeedotoru; kuni 16 torpeedot või raketti",
        "antiShipMissiles": "Kuni 10 raketti Kalibr/Club (mõnel versioonil)",
        "aswWeapons": "Allveelaevatõrjerakett RPK-6 (SS-N-16 Vodopad)",
        "mineLaying": "Kuni 44 miini"
      },
      "sources": [
        {"name": "Wikipedia: Lada-class submarine", "url": "https://en.wikipedia.org/wiki/Lada-class_submarine", "retrieved": "2026-10-23"}
      ]
    },
    "Nanuchka klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik; Vaikse ookeani laevastik; Põhjalaevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Väike raketilaev pinnalaevade tõrjeks.",
        "standardDisplacement": 569,
        "fullDisplacement": 671,
        "length": 59.3,
        "width": 12.6,
        "draft": 2.7,
        "engine": "Diislid, 3 võlli",
        "power": 30000,
        "maxSpeedKn": 32,
        "range": 4630,
        "crew": "60",
        "mainArmament": "Nanuchka I: 2 × 57 mm AK-257; Nanuchka III: 1 × 76 mm AK-176",
        "antiShipMissiles": "6 × P-120 Malahhit (SS-N-9), 2 × 3 stardiseadet; Nanuchka III: 16 × Kh-35",
        "samMissiles": "20 × 4K33 Osa-M (SA-N-4)",
        "secondaryArmament": "Nanuchka III: 30 mm AK-630",
        "sensors": "Band Stand, Bass Tilt, Peel Pair, Pop Group"
      },
      "sources": [
        {"name": "Wikipedia: Nanuchka-class corvette", "url": "https://en.wikipedia.org/wiki/Nanuchka-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Ondatra klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Vaikse ookeani laevastik; Balti laevastik; Põhjalaevastik; Musta mere laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Dessantkaater tanki või dessantväelaste veoks.",
        "standardDisplacement": 90,
        "fullDisplacement": 145,
        "length": 24.5,
        "width": 5,
        "draft": 1.5,
        "engine": "2 diislit (kokku 600 hj)",
        "power": 600,
        "maxSpeedKn": 10,
        "range": 926,
        "crew": "5",
        "landingCapacity": "1 T-72 tank või 22 dessantväelast või 50 t lasti"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ondatra klass", "url": "https://odin.t2com.army.mil/WEG/Asset/6a6e358e588274e0a50f95add30f768f", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Ondatra-class landing craft", "url": "https://en.wikipedia.org/wiki/Ondatra-class_landing_craft", "retrieved": "2026-10-23"}
      ]
    },
    "Serna klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kaspia flotill; Balti laevastik; Musta mere laevastik; Vaikse ookeani laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Dessantkaater tanki või soomustransportööride veoks.",
        "fullDisplacement": 105,
        "autonomy": 1,
        "emptyWeight": 61,
        "length": 25.65,
        "width": 5.8,
        "draft": 1.52,
        "engine": "2 × M-503A-3 diislit (3300 hj iga); osadel paatidel 2 × MTU 16V2000 M90 (2000 hj iga)",
        "power": 6600,
        "maxSpeedKn": 30,
        "range": 1111,
        "crew": "5",
        "landingCapacity": "1 lahingutank või 2 soomukit või 45 t lasti; 92 dessantväelast"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Serna klass", "url": "https://odin.t2com.army.mil/WEG/Asset/f20a45c1771d26f18c8c3b5d62344781", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Serna-class landing craft", "url": "https://en.wikipedia.org/wiki/Serna-class_landing_craft", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: List of active Russian Navy ships", "url": "https://en.wikipedia.org/wiki/List_of_active_Russian_Navy_ships", "retrieved": "2026-11-25"}
      ]
    },
    "Sonya klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Põhjalaevastik; Vaikse ookeani laevastik; Balti laevastik; Kaspia flotill",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Rannikuvete miinitraaler.",
        "standardDisplacement": 400,
        "fullDisplacement": 450,
        "length": 48.8,
        "width": 8.8,
        "draft": 2.1,
        "engine": "Diislid, 2 võlli",
        "power": 2400,
        "maxSpeedKn": 15,
        "autonomy": 10,
        "range": 5556,
        "crew": "43",
        "secondaryArmament": "30 mm kaksikkahur; 25 mm kaksikkahur",
        "mineClearing": "Trallid GKT, PEMT-2, ST-2"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Sonya klass", "url": "https://odin.t2com.army.mil/WEG/Asset/5f7047d1862802cea80f5a48e71792a6", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sonya-class minesweeper", "url": "https://en.wikipedia.org/wiki/Sonya-class_minesweeper", "retrieved": "2026-10-23"}
      ]
    },
    "Grachonok klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kõik laevastikud; Kaspia flotill; Rosgvardia",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Kaater diversantide ja terroristide tõrjeks mereväebaaside vetes.",
        "fullDisplacement": 138,
        "length": 31.04,
        "width": 7.4,
        "draft": 1.85,
        "engine": "2 diislit (MTU, MWM-Deutz TBD620V12 või kohalik/muu Euroopa mudel)",
        "maxSpeedKn": 23,
        "autonomy": 5,
        "crew": "8",
        "range": 370,
        "secondaryArmament": "14,5 mm MTPU; sukeldujatõrje granaadiheitja DP-64; kaugjuhitav granaadiheitja DP-65",
        "samMissiles": "Kaasaskantav õhutõrjeraketikompleks Igla (4 raketti)",
        "sensors": "Hüdrolokaator Kalmar; veetav sukeldujatõrje hüdrolokaator MG-757 Anapa-M"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Grachonok klass", "url": "https://odin.t2com.army.mil/WEG/Asset/d8321832232bac19901714ff12c0834d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Grachonok-class patrol boat", "url": "https://en.wikipedia.org/wiki/Grachonok-class_patrol_boat", "retrieved": "2026-10-23"}
      ]
    },
    "Lida klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike miinitraaler meremiinide otsimiseks sadamasissesõitudes, sadamates ja jõgedel.",
        "standardDisplacement": 131,
        "fullDisplacement": 135,
        "length": 31.5,
        "width": 6.5,
        "draft": 1.6,
        "engine": "3 × 3D12M diislit (300 hj iga)",
        "power": 900,
        "maxSpeedKn": 12,
        "range": 741,
        "crew": "14",
        "secondaryArmament": "30 mm kuuetoruline AK-630",
        "samMissiles": "2 × Strela-2 (9K32)",
        "mineLaying": "4 miini"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Lida klass", "url": "https://odin.t2com.army.mil/WEG/Asset/291fe09345b918cab372117b0882468e", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Lida-class minesweeper", "url": "https://en.wikipedia.org/wiki/Lida-class_minesweeper", "retrieved": "2026-10-23"}
      ]
    },
    "Raptor klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik; Musta mere laevastik",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kiire patrullkaater rannikuvete patrulliks, otsingu- ja päästetöödeks ning dessantväelaste veoks.",
        "fullDisplacement": 23,
        "length": 16.9,
        "width": 4.1,
        "draft": 0.9,
        "engine": "2 × Caterpillar C18 ACERT diislit (845 kW / 1133 hj iga); 2 veejoakäiturit Kamewa 36A3 HS",
        "power": 2266,
        "maxSpeedKn": 48,
        "range": 556,
        "crew": "3",
        "landingCapacity": "20 dessantväelast",
        "secondaryArmament": "12,7 mm Kord; 2 × 7,62 mm PKP Pecheneg",
        "atgm": "8 × 9M133 Kornet"
      },
      "sources": [
        {"name": "Wikipedia: Raptor-class patrol boat", "url": "https://en.wikipedia.org/wiki/Raptor-class_patrol_boat", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: 17th Project 03160 Raptor-class patrol boat enters in service with Russian Navy (2020)", "url": "https://armyrecognition.com/news/navy-news/2020/17th-project-03160-raptor-class-patrol-boat-enters-in-service-with-russian-navy", "retrieved": "2026-11-27"}
      ]
    },
    "Moma klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Musta mere laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Rannikuvete hüdrograafia- ja poide hoolduslaev; ümberehitatud laevu kasutatakse elektroonilise luure laevana.",
        "standardDisplacement": 1200,
        "fullDisplacement": 1542,
        "length": 73.3,
        "width": 10.8,
        "draft": 3.85,
        "power": 3600,
        "maxSpeedKn": 17,
        "range": 16483,
        "autonomy": 20,
        "crew": "45 + 10"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Moma klass", "url": "https://odin.t2com.army.mil/WEG/Asset/02dad9bc3c0051fd649f73a0c5f6a940", "retrieved": "2026-10-28"},
        {"name": "GlobalSecurity: Moma class", "url": "https://www.globalsecurity.org/military/world/russia/moma-class.htm", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: List of active Russian Navy ships", "url": "https://en.wikipedia.org/wiki/List_of_active_Russian_Navy_ships", "retrieved": "2026-11-25"}
      ]
    },
    "BREM-D": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantdiviisi remondi-taastamispataljon",
        "purpose": "Õhudessantvägede remondi- ja äraveosoomuk vigastatud masinate remondiks ja evakueerimiseks.",
        "crew": "1",
        "combatWeight": 8,
        "length": 5.88,
        "width": 2.63,
        "height": 2,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 62,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2,
        "mainArmament": "7,62 mm PKT (2000 lasku)",
        "armor": "Keevitatud alumiiniumkere: kaitse kergrelvade ja suurtükikildude vastu",
        "specialEquipment": "Kerge kokkupandav kraana vägede ruumi katusel (pööre 180°); päästevints",
        "chassis": "BTR-D"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BREM-D", "url": "https://odin.t2com.army.mil/WEG/Asset/d0eb6b177383f254a565dab03482c3ea", "retrieved": "2026-11-10"},
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-25"}
      ]
    },
    "BREM-1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Remondi- ja äraveosoomuk vigastatud masinate remondiks välitingimustes ja evakueerimiseks.",
        "crew": "3",
        "combatWeight": 41,
        "length": 7.98,
        "width": 3.46,
        "height": 2.43,
        "groundClearance": 457,
        "engine": "V-46-6 12-silindriline vedelikjahutusega diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 700,
        "mainArmament": "12,7 mm NSVT (840 lasku)",
        "specialEquipment": "Kraana: 19 t lühikesel väljaulatusel, 3 t maksimaalsel (4,4 m); põhivints 25 t (taljega kuni 100 t), 220 m tross; abivints 530 kg, 400 m tross",
        "chassis": "T-72"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BREM-1", "url": "https://odin.t2com.army.mil/WEG/Asset/b5ff7bdc0c7fc6bf8d71d41124e3830c", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts: BREM-1", "url": "https://www.armedconflicts.com/topic/view/13729", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Russia receives new batch of BREM-1M armored recovery vehicles (2023)", "url": "https://armyrecognition.com/news/army-news/2023/russia-receives-new-batch-of-brem-1m-armored-recovery-vehicles", "retrieved": "2026-11-27"},
        {"name": "Militarnyi: Армії Росії передали нові ремонтно-евакуаційні машини БРЕМ-1М (2024)", "url": "https://militarnyi.com/uk/news/armiyi-rosiyi-peredaly-novi-remontno-evakuatsijni-mashyny-brem-1m/", "retrieved": "2026-11-27"}
      ]
    },
    "BREM-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Remondi- ja äraveosoomuk.",
        "crew": "4",
        "combatWeight": 14,
        "length": 7.68,
        "width": 3.16,
        "height": 2.27,
        "engine": "UTD-20 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedWater": 7,
        "range": 560,
        "amphibious": true,
        "mainArmament": "7,62 mm PKMB (1000 lasku)",
        "armor": "Keevitatud terasest kere: kaitse kergrelvade ja kildude vastu",
        "specialEquipment": "Kraana (pööre 270°, kandevõime 1500 kg); vints 6,5 t, 150 m tross",
        "chassis": "BMP-1"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BREM-2", "url": "https://odin.t2com.army.mil/WEG/Asset/9e65b45de4a83d7319bc93220dca289e", "retrieved": "2026-11-10"},
        {"name": "WeaponSystems.net: BREM-2", "url": "https://weaponsystems.net/system/351-BREM-2", "retrieved": "2026-11-25"}
      ]
    },
    "BREM-K": {
      "status": "unverified",
      "values": {
        "purpose": "Remondi- ja äraveosoomuk BTR-80 perekonna vigastatud masinate evakueerimiseks ja remondiks.",
        "crew": "4",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 3,
        "height": 2.8,
        "driveConfig": "8×8",
        "engine": "Turbodiisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "trench": 2,
        "mainArmament": "7,62 mm kuulipilduja (1500 lasku)",
        "specialEquipment": "Kraana kuni 1,5 t; buldooserisae; elektrikeevitusseadmed",
        "chassis": "BTR-80"
      },
      "sources": [
        {"name": "Deagel: BTR-80 (BREM-K)", "url": "https://www.deagel.com/Armored%20Vehicles/BTR-80/a000348", "retrieved": "2026-11-10"}
      ]
    },
    "BMM-3": {
      "status": "unverified",
      "values": {
        "purpose": "Meditsiinisoomuk: soomustatud liikuv sidumispunkt.",
        "crew": "3",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "driveConfig": "8×8",
        "engine": "KamAZ-7403 V8 vedelikjahutusega diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "mainArmament": "14,5 mm KPVT (500 lasku)",
        "secondaryArmament": "7,62 mm PKT (2500 lasku); 6 × 81 mm suitsugranaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu",
        "specialEquipment": "Kandevõime: 4 raskelt haavatut kanderaamil sees, 2 kanderaami mootoriruumi katusel ja kuni 12 inimest kokkupandavas telgis",
        "chassis": "BTR-80"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/12dbc1be6c3dca850fa10257f62ef9cd", "retrieved": "2026-11-10"}
      ]
    },
    "URAL-43206": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Maastikuveok, Ural-4320 variant.",
        "driveConfig": "4×4",
        "loadCapacity": 4200,
        "length": 7.37,
        "width": 2.5,
        "height": 2.7,
        "engine": "YaMZ-236 diisel",
        "power": 180,
        "maxSpeedRoad": 85,
        "range": 1000,
        "fording": 1.75
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: URAL-43206", "url": "https://odin.t2com.army.mil/WEG/Asset/d5b12f9d6f3408d31a143529e80997f2", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Ural-4320", "url": "https://en.wikipedia.org/wiki/Ural-4320", "retrieved": "2026-10-23"}
      ]
    },
    "KAMAZ-5350, 6x6": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mustangi perekonna maastikuveok; kasutatakse ka teiste sõjamasinate alusena.",
        "driveConfig": "6×6",
        "combatWeight": 9.2,
        "loadCapacity": 6000,
        "length": 7.85,
        "width": 2.5,
        "height": 3.29,
        "engine": "KamAZ-740.13.260 turbodiisel",
        "power": 260,
        "seats": "3 (kabiin magamiskohaga)",
        "maxSpeedRoad": 100,
        "range": 1000,
        "fording": 1.75
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: KAMAZ-5350", "url": "https://odin.t2com.army.mil/WEG/Asset/359a82ce7d829591311ac849eb3dcc72", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-10-23"},
        {"name": "The Moscow Times: Russia's KamAZ Sees Nearly Half of Output Shift to Defense Orders (2026)", "url": "https://www.themoscowtimes.com/2026/02/16/russias-kamaz-sees-nearly-half-of-output-shift-to-defense-orders-a91966", "retrieved": "2026-11-27"}
      ]
    },
    "KRAZ-260": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Maastikuveok.",
        "driveConfig": "6×6",
        "loadCapacity": 9000,
        "towingCapacity": 30000,
        "combatWeight": 22,
        "length": 10.13,
        "width": 2.72,
        "height": 2.985,
        "engine": "YaMZ-238L 14,86 l V8 diisel",
        "power": 288,
        "maxSpeedRoad": 80,
        "range": 850,
        "fording": 1.2,
        "gradient": 58,
        "groundClearance": 370,
        "fuelCapacity": 380
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: KRAZ-260", "url": "https://odin.t2com.army.mil/WEG/Asset/0726253fdb44e73416bda2891d7952cb", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: KrAZ-260", "url": "https://en.wikipedia.org/wiki/KrAZ-260", "retrieved": "2026-10-23"}
      ]
    },
    "UAZ-469": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Sõjaväe kerge maastikusõiduk (toodetud alates 1971. aastast).",
        "driveConfig": "4×4",
        "combatWeight": 2.45,
        "length": 4.025,
        "width": 1.785,
        "height": 1.8,
        "range": 482,
        "groundClearance": 220,
        "engine": "2,45 l 4-silindriline karburaatorbensiinimootor",
        "power": 71,
        "fuelCapacity": 78,
        "seats": "7 (sõjaväeversioon)",
        "fording": 0.5
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: UAZ-469", "url": "https://odin.t2com.army.mil/WEG/Asset/67aa5d8d7cd074ac7e97ec6af288ce95", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: UAZ-469", "url": "https://en.wikipedia.org/wiki/UAZ-469", "retrieved": "2026-10-23"}
      ]
    },
    "GAZ-66": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Sõjaväe maastikuveok.",
        "driveConfig": "4×4",
        "loadCapacity": 2000,
        "towingCapacity": 2000,
        "length": 5.65,
        "width": 2.322,
        "height": 2.44,
        "engine": "ZMZ-66-06 V8 karburaatorbensiinimootor, 4,25 l",
        "power": 115,
        "maxSpeedRoad": 90,
        "fording": 1.2,
        "groundClearance": 315,
        "fuelCapacity": 210,
        "seats": "2 kabiinis + kuni 21 kastis"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: GAZ-66", "url": "https://odin.t2com.army.mil/WEG/Asset/215d884c287c9dbb64a69ef28ec1de33", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: GAZ-66", "url": "https://en.wikipedia.org/wiki/GAZ-66", "retrieved": "2026-10-23"}
      ]
    },
    "UAZ-452": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Maastikubuss ja kerge veok; UAZ-452A on sanitaarversioon.",
        "driveConfig": "4×4",
        "length": 4.44,
        "width": 2.1,
        "height": 2.101,
        "engine": "2,7 l 4-silindriline bensiinimootor",
        "power": 112,
        "maxSpeedRoad": 127,
        "fording": 0.5,
        "groundClearance": 220,
        "fuelCapacity": 77,
        "seats": "2–11 (varianditi)"
      },
      "sources": [
        {"name": "Wikipedia: UAZ-452", "url": "https://en.wikipedia.org/wiki/UAZ-452", "retrieved": "2026-10-23"}
      ]
    },
    "Desertcross 1000-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Kerge maastikusõiduk isikkoosseisu ja väikeste koormate veoks positsioonidele; ka luureks, patrulliks ja haavatute evakueerimiseks.",
        "driveConfig": "Tagavedu või nelikvedu",
        "combatWeight": 1.05,
        "loadCapacity": 550,
        "towingCapacity": 300,
        "length": 3.4,
        "width": 1.8,
        "height": 1.9,
        "groundClearance": 305,
        "engine": "2-silindriline V-mootor, vedelikjahutusega bensiinimootor",
        "power": 87,
        "maxSpeedRoad": 80,
        "range": 250,
        "fording": 0.4,
        "fuelCapacity": 48,
        "seats": "3 kabiinis; 2 äravõetavat istet kastis",
        "specialEquipment": "Vints (tõmbejõud üle 2 t vene armee versioonil)"
      },
      "sources": [
        {"name": "Militarnyi: Desertcross 1000-3", "url": "https://militarnyi.com/en/articles/how-chinese-golf-carts-help-russian-invaders/", "retrieved": "2026-10-23"}
      ]
    },
    "BRM-1K": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Polgu luurerood; Diviisi luurepataljon",
        "purpose": "Luuresoomuk taktikaliseks luureks.",
        "crew": "6",
        "combatWeight": 13.3,
        "length": 6.74,
        "width": 2.94,
        "height": 2.15,
        "engine": "UTD-20 V6 vedelikjahutusega diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 7,
        "range": 600,
        "amphibious": true,
        "mainArmament": "73 mm 2A28 Grom madalrõhu sileraudkahur (40 lasku)",
        "secondaryArmament": "7,62 mm PK (2000 lasku); suitsugranaadiheitjad (hilisematel 6 × 81 mm Tutša)",
        "atgm": "1 × 9M14 Malyutka (AT-3 Sagger)",
        "armor": "Kere 19 mm; torn: ees 23 mm, küljed 19 mm, taga 13 mm, katus 6 mm",
        "sensors": "PSNR-5K luureradar (kuni 10 km), 1RL133-1 radar, 1D8 laserkaugusmõõtja, ERRS-1 raadiosuunaleidja, TNA-4 navigatsioon, 1PN22M/M2 sihik",
        "chassis": "BMP-1"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BRM-1K", "url": "https://odin.t2com.army.mil/WEG/Asset/4136bc85abbcc246b4b606de0e585cc2", "retrieved": "2026-11-10"},
        {"name": "Army Recognition: BRM-1K", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/ukrainian-soldiers-capture-a-brm-1k-model-2021-most-modern-reconnaissance-vehicle-of-russian-army", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Analyst: Russians have begun to use old BRM-1K armored vehicles more often in assaults", "url": "https://militarnyi.com/en/news/analyst-russians-have-begun-to-use-old-brm-1k-armored-vehicles-more-often-in-assaults", "retrieved": "2026-11-25"}
      ]
    },
    "BRDM-2 / BRDM-2M": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Ujuv soomustatud luureauto; mitme eriversiooni alus (keemialuure, tankitõrje, õhutõrje, juhtimine).",
        "crew": "4",
        "combatWeight": 7,
        "length": 5.75,
        "width": 2.37,
        "height": 2.31,
        "groundClearance": 430,
        "driveConfig": "4×4",
        "engine": "GAZ-41 V8 bensiinimootor (BRDM-2M: diisel GAZ-562 175 hj või Steyr D.245-9 136 hj)",
        "power": 140,
        "maxSpeedRoad": 90,
        "maxSpeedWater": 10,
        "range": 750,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.4,
        "trench": 1.25,
        "mainArmament": "14,5 mm KPVT (500 lasku)",
        "secondaryArmament": "Koaksiaalne 7,62 mm PKT (2000 lasku)",
        "armor": "Keevitatud teras: kerenina kuni 14 mm; torni esiosa 10 mm; küljed, taga ja katus 7 mm; mujal 2–7 mm",
        "specialEquipment": "Neli kettajamiga allosa tugirattapaari (kraavide ületamiseks); ujub veejoaga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BRDM-2 / BRDM-2M", "url": "https://odin.t2com.army.mil/WEG/Asset/3563edc1754294260097f7d8266974d5", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: BRDM-2", "url": "https://en.wikipedia.org/wiki/BRDM-2", "retrieved": "2026-10-23"},
        {"name": "112.ua: Russia restores BRDM-2 armored vehicles for war in Ukraine", "url": "https://112.ua/en/rosia-vidnovlue-bronemasini-brdm-2-dla-vijni-v-ukraini-pro-so-ce-svidcit-44059", "retrieved": "2026-11-25"}
      ]
    },
    "RKhM-4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "TBK-luuresoomuk kiirgus- ja keemialuureks.",
        "crew": "3",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "driveConfig": "8×8",
        "engine": "KamAZ-7403 V8 vedelikjahutusega diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "mainArmament": "14,5 mm KPVT (500 lasku)",
        "secondaryArmament": "7,62 mm PKT (2500 lasku); 6 × 81 mm suitsugranaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; mujal kaitse 7,62 mm kuulide ja kildude vastu; TBK-kaitse",
        "specialEquipment": "Doosikiiruse mõõturid IMD-21B ja DP-5V, gaasidetektor GSA-13, gaasituvasti PGO-11, proovivõtukomplekt KPO-1, meteokomplekt MK-3M; raadiod R-173 ja R-163; luuresõidu kiirus radioloogilisel 30 km/h, keemilisel 10 km/h",
        "chassis": "BTR-80"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RKhM-4-01", "url": "https://odin.t2com.army.mil/WEG/Asset/026baeb16af6245be725a211152cf3b4", "retrieved": "2026-11-10"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-11-25"},
        {"name": "UNITED24 Media: Ukrainian drone strike destroys rare RKhM-4 chemical recon vehicle", "url": "https://united24media.com/latest-news/ukrainian-drone-strike-destroys-rare-rkhm-4-chemical-recon-vehicle-video-7239", "retrieved": "2026-11-25"}
      ]
    },
    "RKhM-6": {
      "status": "unverified",
      "values": {
        "typicalUnit": "TBK-kaitse brigaad; TBK-luureüksus",
        "purpose": "TBK-luuresoomuk keemilise, bioloogilise, radioloogilise ja tuumaluure jaoks.",
        "crew": "3",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "driveConfig": "8×8",
        "engine": "KamAZ V8 vedelikjahutusega diisel",
        "power": 300,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "mainArmament": "14,5 mm KPVT (500 lasku)",
        "secondaryArmament": "7,62 mm PKT (2500 lasku); 6 × 81 mm suitsugranaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu; tugevdatud katus ja miinikindel põhi; TBK-kaitse",
        "sensors": "Termosihikud ülemal ja laskuril, päevasihik 1P3-6, infrapunaprožektor OU-3GA2M",
        "specialEquipment": "Keemiline detektor GSA-14, doosikiiruse mõõturid IMD-23 ja IMD-2NM, närvigaasi häireseadmed, aerosoolidetektor ASP-13, proovivõtjad KPO-1 ja APSO, meteokomplekt AMK; navigatsioon (GLONASS, inertsiaal); rehvirõhu reguleerimine",
        "chassis": "BTR-80"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RKhM-6", "url": "https://odin.t2com.army.mil/WEG/Asset/f16881b9e0aedf238b139b2a751cad63", "retrieved": "2026-11-10"},
        {"name": "Army Technology: RKhM-6", "url": "https://www.army-technology.com/projects/rkhm-6-cbrn-reconnaissance-vehicle/", "retrieved": "2026-11-25"}
      ]
    },
    "Taifun-K KAMAZ-63968, 6x6": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Luurepataljon; Eriotstarbeline (SpNz) brigaad",
        "purpose": "Taifuni perekonna miinikindel ujuv soomustransportöör.",
        "crew": "2 + 16",
        "combatWeight": 21,
        "length": 8.99,
        "width": 2.45,
        "height": 3.32,
        "driveConfig": "6×6",
        "engine": "YaMZ-5367 6-silindriline diisel",
        "power": 450,
        "maxSpeedRoad": 105,
        "range": 1200,
        "armor": "Väidetavalt STANAG 4569 tase 3b; tootja eesmärk tase IV; keraamiline soomus, miiniohutud istmed"
      },
      "sources": [
        {"name": "Wikipedia: Kamaz Typhoon", "url": "https://en.wikipedia.org/wiki/Kamaz_Typhoon", "retrieved": "2026-10-23"},
        {"name": "GlobalSecurity: Taifun", "url": "https://www.globalsecurity.org/military/world/russia/taifun.htm", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Russian reconnaissance and special forces units will receive Typhoon-K and Typhoon-U MRAPs", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2016/russian-reconnaissance-and-special-forces-units-will-receive-typhoon-k-and-typhoon-u-mraps-1270516", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian Southern MD special task force units received another batch of KAMAZ-63968 Typhoons", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2015/russian-southern-md-special-task-force-units-received-another-batch-of-kamaz-63968-typhoons", "retrieved": "2026-11-25"},
        {"name": "ESUT: Geschützte Typhoon-K für russische Aufklärer", "url": "https://esut.de/2020/01/meldungen/streitkraefte/18134/geschuetzte-typhoon-k-fuer-russische-aufklaerer/", "retrieved": "2026-11-25"}
      ]
    },
    "VPK-3927-1 Volk-1": {
      "status": "unverified",
      "values": {
        "purpose": "Mitmeotstarbeline 4×4 sõjaväe soomusauto.",
        "crew": "2 + 8",
        "combatWeight": 10.2,
        "loadCapacity": 4500,
        "length": 6.976,
        "width": 2.5,
        "height": 2.1,
        "engine": "Diisel: YaMZ-5347 (Euro-4) või Cummins B180",
        "maxSpeedRoad": 130,
        "range": 1000,
        "armor": "STANAG 4569 ballistiline tase 3; miinikaitse tase 1 (tase 2 uuendusega)"
      },
      "sources": [
        {"name": "Wikipedia: VPK-3927 Volk", "url": "https://en.wikipedia.org/wiki/VPK-3927_Volk", "retrieved": "2026-10-23"}
      ]
    },
    "GAZ-233014/TIGR": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Eriotstarbeline (SpNz) üksus; Merejalavägi; Õhudessantväed",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Mitmeotstarbeline maastikusoomuk Vene relvajõududele ja siseministeeriumile; ka relvasüsteemide alus.",
        "driveConfig": "4×4",
        "engine": "Cummins B205 turbodiisel",
        "mainArmament": "Pöörlev kuppel raskekuulipildujale või automaatgranaadiheitjale",
        "armor": "Termiliselt töödeldud soomusplaadid 5 mm"
      },
      "sources": [
        {"name": "Wikipedia: GAZ Tigr", "url": "https://en.wikipedia.org/wiki/GAZ_Tigr", "retrieved": "2026-10-28"}
      ]
    },
    "RÕS/IVECO": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tagalaüksus; Õhudessantväed; Siseväed",
        "purpose": "Kerge mitmeotstarbeline miinikindel soomusauto, Iveco LMV Vene variant.",
        "crew": "1 + 4",
        "combatWeight": 7.1,
        "width": 2.2,
        "height": 2.05,
        "driveConfig": "4×4",
        "engine": "FPT F1C 3,0 l rida-4 diisel",
        "power": 190,
        "maxSpeedRoad": 130,
        "range": 500,
        "armor": "AMAP lisasoomuspaneelid raamil, STANAG 4569 tase 1–3"
      },
      "sources": [
        {"name": "Wikipedia: Iveco LMV", "url": "https://en.wikipedia.org/wiki/Iveco_LMV", "retrieved": "2026-10-28"},
        {"name": "Defence24: Rosja: pojazdy Iveco Ryś w elitarnej dywizji powietrznodesantowej", "url": "https://defence24.pl/sily-zbrojne/rosja-pojazdy-iveco-rys-w-elitarnej-dywizji-powietrznodesantowej", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-1Ksh": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpolk; Tankipolk",
        "purpose": "Juhtimis- ja staabisoomuk.",
        "crew": "3",
        "combatWeight": 13,
        "length": 6.74,
        "width": 2.94,
        "height": 2.15,
        "groundClearance": 390,
        "fuelCapacity": 462,
        "engine": "UTD-23 diisel",
        "power": 360,
        "maxSpeedRoad": 65,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "mainArmament": "7,62 mm PKT (2000 lasku); põhikahur asendatud fikseeritud tornikesega",
        "armor": "Terasest kere 19 mm, torn 23 mm",
        "specialEquipment": "TNA-3 güroskoopiline navigatsiooniseade; teleskoopmast AMU",
        "radioSets": "2 × R-111, 1 × R-123MT, 1 × R-130M",
        "commsMastHeight": 10,
        "chassis": "BMP-1"
      },
      "notes": {
        "crew": "Teistel andmetel 3 + 4 või 3 + 6."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-1KSh", "url": "https://odin.t2com.army.mil/WEG/Asset/f6cab3e2c9d8a521d4672efb6b4c7765", "retrieved": "2026-11-10"},
        {"name": "Wikipedia: BMP-1 variants", "url": "https://en.wikipedia.org/wiki/BMP-1_variants", "retrieved": "2026-11-25"}
      ]
    },
    "R-145BM": {
      "status": "unverified",
      "values": {
        "purpose": "Juhtimis- ja staabisoomuk.",
        "crew": "2",
        "combatWeight": 10.3,
        "length": 7.56,
        "width": 2.83,
        "height": 2.31,
        "driveConfig": "8×8",
        "engine": "2 × GAZ-40P 6-silindriline bensiinimootor (90 hj iga)",
        "power": 180,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "mainArmament": "7,62 mm PKT (2500 lasku); torn ja 14,5 mm kuulipilduja eemaldatud",
        "armor": "Keevitatud teras 5–9 mm; lisasoomuseta; TBK-kaitse",
        "radioSets": "2 × R-111/171, 1 × R-123/173, 1 × R-145, 1 × R-130M, maa–õhk raadiojaam R-8xx",
        "chassis": "BTR-60"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-60-R-145BM", "url": "https://odin.t2com.army.mil/WEG/Asset/6b939a3396646c911fabfd15c0769812", "retrieved": "2026-11-10"}
      ]
    },
    "R-149BMR": {
      "status": "unverified",
      "values": {
        "purpose": "Juhtimis- ja staabisoomuk taktikalise juhtimise ja side tagamiseks.",
        "typicalUnit": "Brigaad; Pataljon",
        "crew": "3 + 7",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "driveConfig": "8×8",
        "engine": "KamAZ-7403 V8 vedelikjahutusega diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 40,
        "verticalStep": 0.5,
        "trench": 2,
        "mainArmament": "14,5 mm KPVT (500 lasku)",
        "secondaryArmament": "7,62 mm PKT (2500 lasku); 6 × 81 mm suitsugranaadiheitjat",
        "armor": "Kere esiosa ja torn peavad vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu; TBK-kaitse",
        "radioSets": "3 × R-168-0.1UM, 1 × R-168-5UN-1, 2 × R-168-25U-2, 2 × R-168-100U-2, 1 × R-168-100KA (KV); kaasaskantav satelliitsidejaam R-438M Belozer",
        "commsRange": "R-168-25U-2 25–40 km, R-168-100U-2 25–60 km, R-168-100KA (KV) 25–360 km; satelliitside 5000 km"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: R-149BMR", "url": "https://odin.t2com.army.mil/WEG/Asset/ec9350d7dfab05696e81ed42a23ee769", "retrieved": "2026-11-10"},
        {"name": "Russian Air Defense Systems (Defense Techs): R-149BMR", "url": "https://issuu.com/dellvzla/docs/air_def_1_defensetechs/s/13416586", "retrieved": "2026-11-25"},
        {"name": "ARMSNET: R-149BMR", "url": "https://armsnet.duckdns.org/equipment/fa9f78bb-61ab-4dbd-e9c5-08de6e3c1543", "retrieved": "2026-11-25"}
      ]
    },
    "R-441-0 Liven": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Liikuv satelliitsidejaam strateegilise ja operatiivtasandi staapide mitmekanaliliseks sideks.",
        "typicalUnit": "Armee sideüksus; Sõjaväeringkonna sideüksus",
        "crew": "11–16",
        "driveConfig": "6×6",
        "specialEquipment": "1,8 m satelliiditaldrik, mis sihtib end ise navigatsioonisüsteemi abil; töötab autonoomselt väljal",
        "commsFrequency": "SHF (S/C-riba)",
        "emplacementTime": "20–30 min"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: R-441 Liven", "url": "https://odin.t2com.army.mil/WEG/Asset/486adbee36910f5d8e5d8c3abdf5fbaa", "retrieved": "2026-11-10"},
        {"name": "FMSO OE Watch: Russia tests R-441 Liven satellite communication in Ukraine (2022)", "url": "https://fmso.tradoc.army.mil/2022/russia-tests-r-441-liven-satellite-communication-in-ukraine/", "retrieved": "2026-11-25"},
        {"name": "Defense Express: Ukrainian Partisans Destroyed R-441 Liven Satellite Communications Station (2024)", "url": "https://en.defence-ua.com/news/ukrainian_partisans_destroyed_r_441_liven_satellite_communications_station_in_russia-10821.html", "retrieved": "2026-11-27"}
      ]
    },
    "R-149AKSh-1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armee sideüksus",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Juhtimis- ja sidemasin.",
        "crew": "7",
        "length": 7.85,
        "width": 2.5,
        "height": 3.29,
        "driveConfig": "6×6",
        "engine": "KamAZ-740.13-260 diisel",
        "power": 260,
        "maxSpeedRoad": 100,
        "range": 1000,
        "specialEquipment": "TBK-kaitse; külmkäivitusseade (kuni −50 °C); rehvirõhu keskreguleerimine",
        "radioSets": "2 × R-168-100U-2 (UKV), 2 × R-168-5KV (KV), 1 × R-168-5UN-2 (kaasaskantav UKV), 1 × R-168-MRA (UHF), 1 × R-612-18 (VHF/UHF, lennuliini sagedus)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: R-149AKSh-1", "url": "https://odin.t2com.army.mil/WEG/Asset/0a1de592234f9a261c1dc43971a04e2e", "retrieved": "2026-11-10"},
        {"name": "Army Recognition: Russian Central Military District signal units receive advanced hardware (Dec 2019)", "url": "https://armyrecognition.com/archives/archives-land-defense/land-defense-2019/russian-central-military-district-signal-units-receive-advanced-hardware", "retrieved": "2026-11-25"},
        {"name": "Russia lost thousands of military vehicles (Al Arabiya, 2023)", "url": "https://english.alarabiya.net/News/world/2023/07/17/Russia-lost-thousands-of-military-vehicles-equipment-weapons-since-Ukraine-invasion", "retrieved": "2026-11-27"}
      ]
    },
    "R-149MA1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Ühtne juhtimis- ja staabimasin juhtimiseks ja sideks paigal ja liikvel; kasutatakse ka eesliikuvas juhtimispunktis.",
        "typicalUnit": "Brigaad; Polk",
        "driveConfig": "8×8",
        "specialEquipment": "4 arvutiga automatiseeritud töökohad: andmete kogumine, käskude andmine, elektroonilised kaardid ja olukorrapilt, andmevahetus kõrgemate ja alluvate juhtimispunktidega; krüpteerimisseadmed; navigatsioonisüsteem Azimut (täpsus 30 m); kliimaseade",
        "crew": "6",
        "chassis": "K1Sh1 (BTR-80)",
        "combatWeight": 13,
        "length": 7.65,
        "width": 2.9,
        "height": 2.63,
        "groundClearance": 475,
        "engine": "KamAZ-7403 diisel",
        "power": 256,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "mainArmament": "Puudub",
        "radioSets": "2 × R-168-100UE-2 (UKV, 2–4 kanalit), R-168-100KBE (KV), R-168MRAE (suure läbilaskevõimega UKV-kanal), kaasaskantavad R-168-0.1UME, R-168-5UNE-2 (varjatud side kuni 1,2 km); staapidevahelise side süsteem AVSKU-E",
        "commsRange": "UKV kuni 25 km (antenn R-168BShDA), antenniga ASh-4 20–50 km; KV dipoolantenniga paigal kuni 350 km"
      },
      "sources": [
        {"name": "Army Recognition: R-149MA1", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2017/russia-communication-units-receive-r-149ma1-vehicle-80806171", "retrieved": "2026-10-28"},
        {"name": "Militarnyi: Ukrainian military seized R-149MA1", "url": "https://militarnyi.com/en/news/the-ukrainian-military-seized-a-russian-r-149ma1-command-post-carrier/", "retrieved": "2026-11-25"},
        {"name": "Valka.cz: R-149MA1", "url": "https://www.armedconflicts.com/Russian-Command-Staff-Vehicle-R-149MA1-t252192", "retrieved": "2026-11-25"},
        {"name": "Russia lost thousands of military vehicles (Al Arabiya, 2023)", "url": "https://english.alarabiya.net/News/world/2023/07/17/Russia-lost-thousands-of-military-vehicles-equipment-weapons-since-Ukraine-invasion", "retrieved": "2026-11-27"}
      ]
    },
    "R-145BM1": {
      "status": "unverified",
      "values": {
        "purpose": "Juhtimis- ja sidesoomuk.",
        "crew": "2",
        "length": 7.56,
        "width": 2.82,
        "height": 2.31,
        "driveConfig": "8×8",
        "engine": "Diisel",
        "maxSpeedRoad": 80,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "mainArmament": "Relvastus puudub (BTR-60PB torn alles, kuulipilduja eemaldatud)",
        "specialEquipment": "GPS/GLONASS; öövaatlusseadmed; TBK-kaitse",
        "radioSets": "R-168-100KA, R-168-25U ja R-168-100U (kaks igat)",
        "powerSupply": "Generaator T-290V; avariitoide 12ST-85RM",
        "chassis": "BTR-60"
      },
      "sources": [
        {"name": "Army Recognition: R-145BM1", "url": "https://armyrecognition.com/military-products/army/communication-vehicles-and-systems/r-145bm1-russia-uk", "retrieved": "2026-10-28"}
      ]
    },
    "9K720 Iskander/SS-26 Stone": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Raketibrigaad",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Liikuv lühimaa-ballistiliste rakettide süsteem: Iskander-M laseb poolballistilisi rakette, Iskander-K tiibrakette.",
        "crew": "3",
        "chassis": "MZKT-79306 ASTROLOG 8×8",
        "missileLength": 7.3,
        "missileDiameter": 0.92,
        "launchWeight": 3800,
        "warheadMass": 700,
        "firingRangeMin": 50,
        "firingRange": 415,
        "missileSpeed": "Mach 6–7",
        "accuracy": "5–7 m (lõppfaasi optoelektrooniline DSMAC-sihtimine)",
        "guidance": "INS + GLONASS + DSMAC",
        "specialEquipment": "Valmisolek: kuni 4 min kõrgeimast valmidusest, kuni 16 min marsilt; 2 raketti 9P78 stardiseadmel ja 2 raketti 9T250 laadimismasinal; ühetoimeline tahkekütusemootor"
      },
      "sources": [
        {"name": "Wikipedia: 9K720 Iskander", "url": "https://en.wikipedia.org/wiki/9K720_Iskander", "retrieved": "2026-10-23"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "SS-21 Totška/SS-21 Scarab": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Raketibrigaad",
        "purpose": "Taktikaline ballistiline rakett täpseteks löökideks.",
        "crew": "3",
        "chassis": "BAZ-5921 (ujuv)",
        "maxSpeedRoad": 60,
        "amphibious": true,
        "missileLength": 6.4,
        "missileDiameter": 0.65,
        "launchWeight": 2000,
        "warheadMass": 420,
        "firingRangeMin": 15,
        "firingRange": 120,
        "missileSpeed": "1,8 km/s (Mach 5,3)",
        "accuracy": "CEP umbes 95 m (Totška-U); 150 m (Totška)",
        "guidance": "Inertsiaalne"
      },
      "sources": [
        {"name": "Wikipedia: OTR-21 Tochka", "url": "https://en.wikipedia.org/wiki/OTR-21_Tochka", "retrieved": "2026-10-23"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russian Tochka-U ballistic missiles return to service amid Ukraine war", "url": "https://defence-blog.com/russian-tochka-u-ballistic-missiles-return-to-service-amid-ukraine-war/", "retrieved": "2026-11-25"}
      ]
    },
    "Krasukha-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Maapealne häirejaam AWACS-lennukite ja teiste õhuradarite häirimiseks.",
        "typicalUnit": "Elektroonilise võitluse brigaad",
        "crew": "4",
        "chassis": "BAZ-6910-022 8×8",
        "combatWeight": 35,
        "length": 11.3,
        "height": 5.5,
        "maxSpeedRoad": 115,
        "range": 850,
        "frequencyRange": "2,3–3,7 GHz (S-riba)",
        "jammingRange": 250,
        "ewTargets": "AWACS-lennukid (nt E-3 Sentry) ja muud õhuradarid, sh raketijuhtimisradarid; Iskanderi jt tähtsate liikuvate sihtmärkide kaitse",
        "ewMode": "Häirimine"
      },
      "sources": [
        {"name": "Wikipedia: Krasukha", "url": "https://en.wikipedia.org/wiki/Krasukha_(electronic_warfare_system)", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Hudson Institute: The Fall and Rise of Russian Electronic Warfare", "url": "https://www.hudson.org/national-security-defense/the-fall-and-rise-of-russian-electronic-warfare", "retrieved": "2026-11-25"},
        {"name": "Air University (Mendenhall et al.): Adapting to the Spectrum", "url": "https://www.airuniversity.af.edu/Portals/10/AUPress/Papers/WF_100_Mendenhall-et-al_Adapting_To_The_Spectrum.pdf", "retrieved": "2026-11-25"},
        {"name": "Indian Defence Review: Russian Electronic Warfare in Ukraine 2022-2023", "url": "http://www.indiandefencereview.com/news/russian-electronic-warfare-in-ukraine-2022-2023/", "retrieved": "2026-11-27"}
      ]
    },
    "Krasukha-4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Maapealne häirejaam õhu- ja kosmoseradarite mahasurumiseks.",
        "typicalUnit": "Elektroonilise võitluse brigaad",
        "crew": "4",
        "chassis": "BAZ-6910-022 (4 telge) või kaks KamAZ-6350 veokit",
        "combatWeight": 35,
        "length": 11.3,
        "height": 5.5,
        "maxSpeedRoad": 115,
        "range": 850,
        "frequencyRange": "X-riba 8,5–10,7 GHz; Ku-riba 13,4–17,7 GHz",
        "jammingRange": 300,
        "ewTargets": "Õhuradarilennukid (nt E-8 JSTARS), madalal orbiidil satelliidid, maa- ja õhuradarid, droonid",
        "ewMode": "Häirimine"
      },
      "notes": {
        "combatWeight": "Andmed kehtivad BAZ-6910-022 šassii kohta.",
        "jammingRange": "Allikate järgi 150–300 km."
      },
      "sources": [
        {"name": "Wikipedia: Krasukha", "url": "https://en.wikipedia.org/wiki/Krasukha_(electronic_warfare_system)", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Hudson Institute: The Fall and Rise of Russian Electronic Warfare", "url": "https://www.hudson.org/national-security-defense/the-fall-and-rise-of-russian-electronic-warfare", "retrieved": "2026-11-25"},
        {"name": "CLAWS: Russia-Ukraine War: Lessons from an Electronic Warfare (EW) Perspective (2025)", "url": "https://claws.co.in/russia-ukraine-war-lessons-from-an-electronic-warfare-ew-perspective/", "retrieved": "2026-11-27"}
      ]
    },
    "Lejer-2/Leer-2": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Liikuv automatiseeritud raadioluure, suunatuvastuse ja häirimise kompleks; jäljendab ka raadioelektroonilisi süsteeme.",
        "crew": "3",
        "chassis": "Tigr-M (85Ya6)",
        "frequencyRange": "Häirimine 0,02–2,7 GHz; analüüs 0,0001–18 GHz",
        "ewTargets": "Raadioluure ning raadio- ja mobiilside häirimine",
        "ewMode": "Raadioluure, suunatuvastus, häirimine ja jäljendamine",
        "specialEquipment": "Surub korraga alla kuni 12 raadiokiirgusallikat; suunamäärangu täpsus 2–3°; töötab akult 2 h",
        "emplacementTime": "10 min",
        "commsRange": "Kuni 40 km (R-168-25U-2); 6 km (R-168)"
      },
      "notes": {
        "crew": "Teistel andmetel 2."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Army Recognition: Leer-2 and Tirada destroyed", "url": "https://armyrecognition.com/ukraine_-_russia_conflict_war_2022/ukrainian_soldiers_destroy_crucial_russian_leer-2_and_tirade_electronic_warfare_systems.html", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russian airborne troops commissions new Leer-2 electronic warfare systems", "url": "https://defence-blog.com/?p=23870", "retrieved": "2026-11-25"},
        {"name": "Kyiv Post: Analysis: Russia's Electronic Warfare Equipment (2024)", "url": "https://www.kyivpost.com/analysis/32435", "retrieved": "2026-11-27"}
      ]
    },
    "RB-341B Lejer-3/Leer-3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Mobiilside luure- ja häirekompleks, mille häireseadmed on droonidel Orlan-10.",
        "typicalUnit": "Elektroonilise võitluse brigaad; Elektroonilise võitluse pataljon",
        "crew": "5",
        "frequencyRange": "0,935–1,785 GHz; juhtimiskanal 0,902–0,922 GHz",
        "jammingRange": 6,
        "ewTargets": "GSM / 3G / 4G mobiilsidevõrgud; mobiilseadmete tuvastamine; töötab koos Orlan-10 droonidega; SMS-ide saatmine kuni 30 km kaugusele",
        "specialEquipment": "Blokeerib kuni 2000 abonenti ja 3 mobiilioperaatorit; juhib korraga kuni 2 drooni",
        "ewMode": "Raadioluure ja häirimine"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Hudson Institute: The Fall and Rise of Russian Electronic Warfare", "url": "https://www.hudson.org/national-security-defense/the-fall-and-rise-of-russian-electronic-warfare", "retrieved": "2026-11-25"},
        {"name": "OE Watch: Russian motorized rifle divisions to gain an EW battalion", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-25"}
      ]
    },
    "Moskva-1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Passiivse raadioluure kompleks õhusihtmärkide avastamiseks, suuna määramiseks ja jälgimiseks; juhib häirimist.",
        "typicalUnit": "Elektroonilise võitluse brigaad",
        "crew": "4",
        "chassis": "3 × KamAZ-6350-1335",
        "frequencyRange": "UHF, L, S, C, X, Ku (täpne vahemik teadmata)",
        "detectionRange": 400,
        "ewTargets": "Õhusaatjate passiivne otsing, suunaleidmine ja jälgimine; üks masin teeb aktiivset häirimist",
        "ewMode": "Passiivne luure ja häirimise juhtimine",
        "emplacementTime": "45 min"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Hudson Institute: The Fall and Rise of Russian Electronic Warfare", "url": "https://www.hudson.org/national-security-defense/the-fall-and-rise-of-russian-electronic-warfare", "retrieved": "2026-11-25"}
      ]
    },
    "GT-01 Murmansk-BN": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Pikamaa KV-side luure- ja häirekompleks.",
        "typicalUnit": "Elektroonilise võitluse brigaad; Merevägi",
        "crew": "2",
        "chassis": "KamAZ-53501 8×8 (iga antenn eraldi veokil)",
        "combatWeight": 15,
        "length": 8.15,
        "width": 2.4,
        "height": 34,
        "mastHeight": 32,
        "engine": "KamAZ-740.13-260 diisel",
        "power": 260,
        "frequencyRange": "3–30 MHz (lühilaine)",
        "jammingRange": 5000,
        "ewTargets": "Pikamaa lühilaineside, sh USA globaalne lühilaineside (HFGCS)",
        "specialEquipment": "Seitsmeastmeline teleskoopmast",
        "ewMode": "Raadioluure ja häirimine",
        "emplacementTime": "72 h",
        "powerSupply": "Neljast antennist koosnevale grupile umbes 400 kW generaatorveok KamAZ-6350"
      },
      "notes": {
        "jammingRange": "Allikate järgi 5000–8000 km."
      },
      "sources": [
        {"name": "Truck Encyclopedia: Murmansk-BN", "url": "https://truck-encyclopedia.com/modern/russia/Kamaz-Murmansk-BN.php", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "CLAWS: Russia-Ukraine War: Lessons from an Electronic Warfare (EW) Perspective (2025)", "url": "https://claws.co.in/russia-ukraine-war-lessons-from-an-electronic-warfare-ew-perspective/", "retrieved": "2026-11-27"}
      ]
    },
    "SPR-2M RTUT-BM": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Raadiosütikute segaja, mis kaitseb vägesid raadiosütikuga mürskude ja miinide eest: paneb need lõhkema ohutul kõrgusel või lülitab sütiku kontaktrežiimile.",
        "crew": "2",
        "chassis": "MT-LBu",
        "combatWeight": 11,
        "length": 6.45,
        "width": 2.86,
        "height": 1.86,
        "engine": "Diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "mainArmament": "7,62 mm kuulipilduja",
        "frequencyRange": "Töösagedus 95–420 MHz; häirimine 80–900 MHz",
        "jammingRange": 0.4,
        "jammerPower": 180,
        "ewTargets": "Lähedussüütega ja raadiojuhitavate sütikutega suurtükimürsud ja raketid (detoneeruvad suuremal kõrgusel); VHF-raadioliinid",
        "specialEquipment": "Kaitstav ala kuni 50 ha; töötab automaatselt nii paigal kui ka liikvel; surub alla ka VHF-raadioliine (sh sagedushüpetega). Töövalmidus ooteolekust kuni 10 s",
        "ewMode": "Häirimine",
        "emplacementTime": "10 min"
      },
      "notes": {
        "jammerPower": "Teistel andmetel 250 W."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "R-330Zh Žitel": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Automatiseeritud jaam satelliitside, satelliitnavigatsiooni ja mobiilside avastamiseks, suuna määramiseks ja häirimiseks; kaitseb brigaadi ja diviisi juhtimispunkte täppisrelvade eest.",
        "typicalUnit": "Elektroonilise võitluse rood; Elektroonilise võitluse brigaad",
        "chassis": "Ural-43203 või KamAZ-43114; häirejaam eraldi haagisel",
        "frequencyRange": "Luure 0,1–2 GHz; häirimine 0,8–0,96 GHz, 1,227 GHz, 1,575 GHz, 1,5–1,7 GHz ja 1,7–1,9 GHz",
        "jammingRange": 30,
        "ewTargets": "GPS/NAVSTAR, Inmarsat- ja Iridium-satelliitside, GSM-900/1800/1900 mobiilside, droonide V/UHF-raadioliinid",
        "ewMode": "Raadioluure, suunatuvastus ja häirimine",
        "specialEquipment": "Suunamäärangu viga kuni 2°; kuni 12 häiresignaali korraga",
        "emplacementTime": "40 min"
      },
      "notes": {
        "jammingRange": "Teistel andmetel 20–25 km (maapealsed seadmed), õhusõidukitel vähemalt 50 km."
      },
      "sources": [
        {"name": "Wikipedia: R-330Zh Zhitel", "url": "https://en.wikipedia.org/wiki/R-330Zh_Zhitel", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "OE Watch: Russian motorized rifle divisions to gain an EW battalion", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-25"},
        {"name": "Russian Defense Policy: 15th Independent EW Brigade", "url": "https://russiandefpolicy.com/tag/15th-independent-ew-brigade/", "retrieved": "2026-11-25"},
        {"name": "Kyiv Post: Key Electronic Warfare Systems Destroyed in Russia Before Reaching Combat Zone (Feb 2025)", "url": "https://www.kyivpost.com/post/47304", "retrieved": "2026-11-25"},
        {"name": "Defense Express: Fire in Voronezh destroys two Russian R-330Zh Zhytel electronic warfare systems (Feb 2025)", "url": "https://en.defence-ua.com/industries/fire_in_voronezh_destroys_two_russian_r_330zh_zhytel_electronic_warfare_systems_video-13564.html", "retrieved": "2026-11-25"}
      ]
    },
    "RB-301B (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Borisoglebsk-2 kompleksi häirejaam.",
        "chassis": "MT-LBu",
        "frequencyRange": "HF 3–30 MHz; VHF 30–300 MHz; UHF 0,3–3 GHz",
        "detectionRange": 30,
        "ewTargets": "HF/VHF-raadiosidesüsteemide automaatne tuvastus, suunaleidmine ja häirimine; GPS-i ja side häirimine",
        "ewMode": "Raadioluure, suunatuvastus ja häirimine",
        "emplacementTime": "15 min"
      },
      "sources": [
        {"name": "Wikipedia: Borisoglebsk-2", "url": "https://en.wikipedia.org/wiki/Borisoglebsk-2", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "U.S. Army OE: Russian Motorized Rifle Divisions To Gain An Electronic Warfare Battalion (2025)", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-27"}
      ]
    },
    "RB-531B Infauna": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Soomukil paiknev elektroonilise võitluse kompleks, mis saadab soomuskolonne ja kaitseb neid raadiojuhitavate lõhkekehade ja juhitava relvastuse eest.",
        "typicalUnit": "Elektroonilise võitluse brigaad",
        "crew": "3",
        "chassis": "K1Sh1 (BTR-80)",
        "driveConfig": "8×8",
        "amphibious": true,
        "combatWeight": 13.6,
        "length": 7.65,
        "width": 2.9,
        "height": 2.63,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 9,
        "range": 600,
        "frequencyRange": "VHF 30–300 MHz; UHF 300–1000 MHz",
        "jammingRange": 3,
        "jammerPower": 60,
        "ewTargets": "Pataljonitaseme raadioside; raadiojuhitavad lõhkekehad ja miinid; laser- ja videojuhitavad relvad (aerosoolsuits optiliste sensorite abil); GSM",
        "ewMode": "Häirimine"
      },
      "notes": {
        "combatWeight": "Teistel andmetel 12 t."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Russian Defense Policy: 15th Independent EW Brigade", "url": "https://russiandefpolicy.com/tag/15th-independent-ew-brigade/", "retrieved": "2026-11-25"}
      ]
    },
    "RB-636AM2 Svet-KU": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Signaaliluure ning raadio- ja mobiilside häirimise kompleks.",
        "chassis": "KamAZ-4350 (ka Ford Transit variant)",
        "frequencyRange": "0,025–18 GHz",
        "ewTargets": "Raadio- ja radarisignaalide signaaliluure ning häirimine; GSM, CDMA2000, UMTS",
        "specialEquipment": "Töötab koos statsionaarse postiga Svet-VSG; suunamäärangu täpsus 5° (30–100 MHz) kuni 2° (1–3 GHz)",
        "ewMode": "Raadioluure ja häirimine",
        "emplacementTime": "10 min",
        "powerSupply": "Voolutarve kuni 3 kW"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Espreso: Ukrainian army destroys Russia's rare Svet-KU electronic warfare system (2023)", "url": "https://global.espreso.tv/ukrainian-army-destroys-russias-rare-svet-ku-electronic-warfare-system", "retrieved": "2026-11-27"}
      ]
    },
    "1RL248-4 SPN-4": {
      "status": "unverified",
      "values": {
        "purpose": "Häirejaam, mis kaitseb vägesid ja väikeseid objekte õhuradarite eest.",
        "crew": "5",
        "frequencyRange": "6,0–8,5 GHz (X-riba)",
        "jammingRange": 60,
        "detectionRange": 150,
        "jammerPower": 2500,
        "ewTargets": "Külgvaaderadarid, relvajuhtimisradarid ja navigatsiooniradarid",
        "ewMode": "Häirimine",
        "powerSupply": "Voolutarve 50 kW"
      },
      "notes": {
        "crew": "Andmed kehtivad SPN-2 kohta.",
        "jammingRange": "Tulejuhtimisradarid 40–60 km, maastikujälgimisradarid 30–50 km.",
        "jammerPower": "Kiirgusvõimsus 1250–2500 W."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"},
        {"name": "Air Power Australia: Russian/Soviet/WarPac Ground Based ECM Systems (APA-TR-2009-0501)", "url": "https://www.ausairpower.net/APA-REB-Systems.html", "retrieved": "2026-11-27"}
      ]
    },
    "R-378A (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "R-330 Mandati KV-raadioside häirejaam.",
        "chassis": "Ural-43293",
        "driveConfig": "6×6",
        "length": 7.37,
        "width": 2.5,
        "height": 4.5,
        "engine": "YaMZ-740 diisel",
        "power": 210,
        "maxSpeedRoad": 85,
        "frequencyRange": "KL (HF) 1,5–30 MHz",
        "jammerPower": 1000,
        "ewTargets": "KL-raadioside: kuni 5 sagedust korraga, sagedushüppega side (kuni 300 hüpet/s)",
        "ewMode": "Häirimine",
        "emplacementTime": "40 min",
        "powerSupply": "Eraldi haagisel generaator ED30-T400-1RPM1"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: R-378A", "url": "https://odin.t2com.army.mil/WEG/Asset/3fa5f0fa37e3cae64a60969366c95465", "retrieved": "2026-10-28"},
        {"name": "Jamestown: Electronic Warfare in Contemporary Russian Military Thought (2025)", "url": "https://jamestown.org/electronic-warfare-in-contemporary-russian-military-thought/", "retrieved": "2026-11-27"}
      ]
    },
    "R-330BM (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "R-330 Mandati UKV-raadioside häirejaam.",
        "chassis": "MT-LBu",
        "frequencyRange": "VHF 30–100 MHz",
        "jammerPower": 1000,
        "ewTargets": "VHF-raadioside: kuni 3 fikseeritud sagedusega liini korraga või 1 sagedushüppega liin",
        "specialEquipment": "Suunamäärangu viga kuni 2,5°; avastamisest häirimiseni kuni 5 ms",
        "ewMode": "Häirimine"
      },
      "notes": {
        "frequencyRange": "Andmed kehtivad R-330B kohta."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-28"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Electronic Warfare in Contemporary Russian Military Thought (2025)", "url": "https://jamestown.org/electronic-warfare-in-contemporary-russian-military-thought/", "retrieved": "2026-11-27"}
      ]
    },
    "AK-74M": {
      "status": "unverified",
      "values": {
        "purpose": "Vene relvajõudude põhiline automaat (5,45 mm).",
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 3.4,
        "weaponLength": 943,
        "barrelLength": 415,
        "muzzleVelocity": 900,
        "rateOfFire": 650,
        "effectiveRange": 500,
        "maxRangeM": 3150,
        "magazine": "30-padruniline salv (sobivad ka 45- ja 60-padrunilised salved ning 96-padruniline trummelsalv)"
      },
      "sources": [
        {"name": "Wikipedia: AK-74", "url": "https://en.wikipedia.org/wiki/AK-74", "retrieved": "2026-10-23"}
      ]
    },
    "AK-12": {
      "status": "unverified",
      "values": {
        "purpose": "5,45 mm automaat.",
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 3.7,
        "weaponLength": 945,
        "barrelLength": 415,
        "muzzleVelocity": 900,
        "rateOfFire": 700,
        "magazine": "30-padruniline salv (sobivad ka 45-, 60- ja 95-padrunilised salved)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AK-12", "url": "https://odin.t2com.army.mil/WEG/Asset/d6ca9abe73ed0aa0e3439489f6286e51", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: AK-12", "url": "https://en.wikipedia.org/wiki/AK-12", "retrieved": "2026-10-23"}
      ]
    },
    "AK-15": {
      "status": "unverified",
      "values": {
        "purpose": "7,62 mm automaat, AK-12 versioon.",
        "caliber": 7.62,
        "cartridge": "7,62×39 mm",
        "weaponMass": 3.75,
        "weaponLength": 1066,
        "barrelLength": 415,
        "muzzleVelocity": 715,
        "rateOfFire": 700,
        "magazine": "30-padruniline salv (sobivad ka 40- ja 75-padrunilised salved)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AK-15", "url": "https://odin.t2com.army.mil/WEG/Asset/5d829c9b5882da55d2fcf19b18c585e1", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: AK-12", "url": "https://en.wikipedia.org/wiki/AK-12", "retrieved": "2026-10-23"}
      ]
    },
    "GP-25": {
      "status": "unverified",
      "values": {
        "purpose": "Automaadi alla kinnitatav 40 mm granaadiheitja.",
        "caliber": 40,
        "cartridge": "40 mm VOG-25 / VOG-25P; suitsugranaadid GRD-50/100/200",
        "weaponMass": 1.5,
        "weaponLength": 323,
        "barrelLength": 120,
        "muzzleVelocity": 76.5,
        "rateOfFire": 20,
        "effectiveRange": 150,
        "maxRangeM": 400,
        "explosiveMass": 48
      },
      "sources": [
        {"name": "Wikipedia: GP-25", "url": "https://en.wikipedia.org/wiki/GP-25", "retrieved": "2026-10-23"}
      ]
    },
    "GP-34": {
      "status": "unverified",
      "values": {
        "purpose": "Automaadi alla kinnitatav 40 mm granaadiheitja.",
        "caliber": 40,
        "cartridge": "40 mm VOG-25 / VOG-25P; suitsugranaadid GRD-50/100/200",
        "weaponMass": 1.4,
        "weaponLength": 315,
        "barrelLength": 120,
        "muzzleVelocity": 76.5,
        "rateOfFire": 20
      },
      "sources": [
        {"name": "Wikipedia: GP-25", "url": "https://en.wikipedia.org/wiki/GP-25", "retrieved": "2026-10-23"}
      ]
    },
    "RPK-74": {
      "status": "unverified",
      "values": {
        "purpose": "Jao kergekuulipilduja.",
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "magazine": "45-padruniline salv (sobivad AK-74 salved); toodetakse ka 97-padrunilist trummelsalve"
      },
      "sources": [
        {"name": "Wikipedia: RPK", "url": "https://en.wikipedia.org/wiki/RPK", "retrieved": "2026-10-23"}
      ]
    },
    "PKM": {
      "status": "unverified",
      "values": {
        "purpose": "7,62 mm üldotstarbeline kuulipilduja.",
        "caliber": 7.62,
        "cartridge": "7,62×54 mmR",
        "weaponLength": 1203,
        "barrelLength": 605,
        "muzzleVelocity": 825,
        "rateOfFire": 650,
        "effectiveRange": 1000,
        "maxRangeM": 3800,
        "magazine": "Lindiga toide; 100-, 200- või 250-padruniline kast"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PKM", "url": "https://odin.t2com.army.mil/WEG/Asset/590d6202221c197f5f10c6cc4ab23ba0", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: PK machine gun", "url": "https://en.wikipedia.org/wiki/PK_machine_gun", "retrieved": "2026-10-23"}
      ]
    },
    "PKP „Pecheneg“ (6P41)": {
      "status": "unverified",
      "values": {
        "purpose": "7,62 mm üldotstarbeline kuulipilduja, PKM moderniseeritud versioon.",
        "caliber": 7.62,
        "cartridge": "7,62×54 mmR",
        "weaponMass": 8.2,
        "weaponLength": 1200,
        "barrelLength": 658,
        "muzzleVelocity": 900,
        "rateOfFire": 700,
        "effectiveRange": 1500,
        "magazine": "Lindiga toide; 100-, 200- või 250-padruniline kast"
      },
      "sources": [
        {"name": "Wikipedia: PKP Pecheneg", "url": "https://en.wikipedia.org/wiki/PKP_Pecheneg", "retrieved": "2026-10-23"}
      ]
    },
    "NSV": {
      "status": "unverified",
      "values": {
        "purpose": "12,7 mm raskekuulipilduja jalaväele ja sõidukitele.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "weaponMass": 25,
        "weaponLength": 1560,
        "muzzleVelocity": 845,
        "rateOfFire": 750,
        "effectiveRange": 2000,
        "magazine": "50-padruniline lint"
      },
      "sources": [
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-23"}
      ]
    },
    "NSVT": {
      "status": "unverified",
      "values": {
        "purpose": "12,7 mm tankikuulipilduja, NSV versioon.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "weaponMass": 25,
        "weaponLength": 1560,
        "muzzleVelocity": 845,
        "rateOfFire": 750,
        "effectiveRange": 2000,
        "magazine": "50-padruniline lint"
      },
      "sources": [
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-23"}
      ]
    },
    "KORD": {
      "status": "unverified",
      "values": {
        "purpose": "12,7 mm raskekuulipilduja.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "weaponMass": 25.5,
        "weaponLength": 1980,
        "barrelLength": 1070,
        "muzzleVelocity": 860,
        "rateOfFire": 625,
        "effectiveRange": 2000,
        "magazine": "50-padruniline lint"
      },
      "sources": [
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-23"}
      ]
    },
    "VSS „Vintorez“": {
      "status": "unverified",
      "values": {
        "purpose": "Summutiga täpsuspüss eriüksustele.",
        "caliber": 9,
        "rateOfFire": 900,
        "cartridge": "9×39 mm SP-5 (alahelikiirusega)",
        "weaponMass": 2.6,
        "weaponLength": 894,
        "barrelLength": 200,
        "muzzleVelocity": 295,
        "effectiveRange": 400,
        "magazine": "10-padruniline salv (sobivad ka SR-3M 30-padrunilised salved)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: VSS „Vintorez“", "url": "https://odin.t2com.army.mil/WEG/Asset/eea595ed5828ddddf717b560c224dd05", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: VSS Vintorez", "url": "https://en.wikipedia.org/wiki/VSS_Vintorez", "retrieved": "2026-10-23"}
      ]
    },
    "SVD „Dragunov“": {
      "status": "unverified",
      "values": {
        "purpose": "Poolautomaatne 7,62 mm täpsuspüss.",
        "caliber": 7.62,
        "rateOfFire": 30,
        "cartridge": "7,62×54 mmR",
        "weaponMass": 4.3,
        "weaponLength": 1225,
        "barrelLength": 620,
        "muzzleVelocity": 830,
        "effectiveRange": 800,
        "magazine": "10-padruniline salv"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: SVD „Dragunov“", "url": "https://odin.t2com.army.mil/WEG/Asset/f2dbac479e34f78b2caa03e2a32f3a84", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Dragunov sniper rifle", "url": "https://en.wikipedia.org/wiki/Dragunov_sniper_rifle", "retrieved": "2026-10-23"}
      ]
    },
    "SVDM": {
      "status": "unverified",
      "values": {
        "purpose": "Täpsuspüss, SVD moderniseeritud versioon.",
        "weaponMass": 5.3,
        "weaponLength": 1155,
        "barrelLength": 550
      },
      "sources": [
        {"name": "Wikipedia: Dragunov sniper rifle", "url": "https://en.wikipedia.org/wiki/Dragunov_sniper_rifle", "retrieved": "2026-10-23"}
      ]
    },
    "OSV-96": {
      "status": "unverified",
      "values": {
        "purpose": "Poolautomaatne 12,7 mm suurekaliibriline snaipripüss.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "weaponMass": 12.9,
        "weaponLength": 1746,
        "barrelLength": 1000,
        "muzzleVelocity": 890,
        "effectiveRange": 2000,
        "magazine": "5-padruniline salv"
      },
      "sources": [
        {"name": "Wikipedia: OSV-96", "url": "https://en.wikipedia.org/wiki/OSV-96", "retrieved": "2026-10-23"}
      ]
    },
    "ASVK KORD": {
      "status": "unverified",
      "values": {
        "purpose": "Poltlukuga 12,7 mm suurekaliibriline snaipripüss.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm"
      },
      "sources": [
        {"name": "Wikipedia: KSVK 12.7", "url": "https://en.wikipedia.org/wiki/KSVK_12.7", "retrieved": "2026-10-23"}
      ]
    },
    "SV-98": {
      "status": "unverified",
      "values": {
        "purpose": "Poltlukuga snaipripüss.",
        "caliber": 7.6,
        "cartridge": "7,62×54 mmR, 7,62×51 mm NATO, .338 Lapua Magnum",
        "weaponMass": 5.8,
        "weaponLength": 1200,
        "barrelLength": 650,
        "muzzleVelocity": 820,
        "effectiveRange": 1000,
        "magazine": "10-padruniline salv"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: SV-98", "url": "https://odin.t2com.army.mil/WEG/Asset/4a1628052f94de01def7d289a1c661c7", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: SV-98", "url": "https://en.wikipedia.org/wiki/SV-98", "retrieved": "2026-10-23"}
      ]
    },
    "AGS-17": {
      "status": "unverified",
      "values": {
        "purpose": "30 mm automaatgranaadiheitja.",
        "caliber": 30,
        "cartridge": "30 mm granaat VOG-17",
        "weaponMass": 31,
        "weaponLength": 840,
        "muzzleVelocity": 185,
        "rateOfFire": 400,
        "effectiveRange": 1700,
        "magazine": "29 granaadiga lint"
      },
      "sources": [
        {"name": "Wikipedia: AGS-17", "url": "https://en.wikipedia.org/wiki/AGS-17", "retrieved": "2026-10-23"}
      ]
    },
    "RGD-5": {
      "status": "unverified",
      "values": {
        "purpose": "Ründekäsigranaat (väike kildude lennukaugus).",
        "weaponMass": 0.31,
        "explosiveMass": 110,
        "fuze": "UZRG / UZRGM, viivitus 3,2–4,2 s",
        "lethalRadius": 3,
        "throwRange": 40
      },
      "sources": [
        {"name": "Wikipedia: RGD-5", "url": "https://en.wikipedia.org/wiki/RGD-5", "retrieved": "2026-10-23"}
      ]
    },
    "F-1": {
      "status": "unverified",
      "values": {
        "purpose": "Kaitsekäsigranaat (suur kildude lennukaugus, visatakse varjest).",
        "weaponMass": 0.6,
        "explosiveMass": 60,
        "fuze": "UZRGM, viivitus 3,2–4,2 s",
        "lethalRadius": 30,
        "throwRange": 38
      },
      "sources": [
        {"name": "Wikipedia: F1 grenade (Russia)", "url": "https://en.wikipedia.org/wiki/F1_grenade_(Russia)", "retrieved": "2026-10-23"}
      ]
    },
    "RGN": {
      "status": "unverified",
      "values": {
        "purpose": "Löögi- ja ajasüütajaga ründekäsigranaat.",
        "weaponMass": 0.31,
        "explosiveMass": 97,
        "fuze": "UDZS: löögisüütaja (rakendub 1–1,8 s pärast) ja ajasüütaja 3,5–4 s",
        "lethalRadius": 4,
        "throwRange": 40
      },
      "sources": [
        {"name": "Wikipedia: RGN hand grenade", "url": "https://en.wikipedia.org/wiki/RGN_hand_grenade", "retrieved": "2026-10-23"}
      ]
    },
    "RGO": {
      "status": "unverified",
      "values": {
        "purpose": "Löögi- ja ajasüütajaga kaitsekäsigranaat.",
        "weaponMass": 0.525,
        "weaponLength": 114,
        "explosiveMass": 90,
        "fuze": "UDZS: löögisüütaja ja ajasüütaja 3,2–4,2 s",
        "throwRange": 40
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RGO", "url": "https://odin.t2com.army.mil/WEG/Asset/a99e26ddad537c1f02b9b7a7ccd256be", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RGO hand grenade", "url": "https://en.wikipedia.org/wiki/RGO_hand_grenade", "retrieved": "2026-10-23"}
      ]
    },
    "RKG-3": {
      "status": "unverified",
      "values": {
        "purpose": "Kumulatiivne tankitõrjekäsigranaat.",
        "weaponMass": 1.1,
        "weaponLength": 362,
        "penetration": "RKG-3: 125–150 mm RHA; RKG-3M: 165 mm; RKG-3T / RKG-3E: 170 mm; RKG-3EM: 220 mm",
        "throwRange": 20
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RKG-3", "url": "https://odin.t2com.army.mil/WEG/Asset/0ed5ad1de052229edc1a5e81dd7f91be", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RKG-3", "url": "https://en.wikipedia.org/wiki/RKG-3", "retrieved": "2026-10-23"}
      ]
    },
    "RPO-A „Shmel“": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne termobaarilise raketiga leegiheitja.",
        "caliber": 93,
        "rateOfFire": 2,
        "cartridge": "93 mm termobaariline rakett",
        "weaponMass": 11,
        "weaponLength": 920,
        "muzzleVelocity": 125,
        "effectiveRange": 1000,
        "minRangeM": 20
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPO-A „Shmel“", "url": "https://odin.t2com.army.mil/WEG/Asset/24545d12ad1fc52e6f8294d37562d474", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPO-A Shmel", "url": "https://en.wikipedia.org/wiki/RPO-A_Shmel", "retrieved": "2026-10-23"}
      ]
    },
    "RShG-2": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne termobaarilise lasuga granaadiheitja.",
        "weaponMass": 3.5,
        "effectiveRange": 115,
        "cartridge": "Termobaariline lask"
      },
      "sources": [
        {"name": "Wikipedia: RShG-2", "url": "https://en.wikipedia.org/wiki/RShG-2", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-7": {
      "status": "unverified",
      "values": {
        "purpose": "Korduvkasutatav tankitõrjegranaadiheitja mitme lasutüübiga.",
        "caliber": 40,
        "cartridge": "PG-7V / PG-7VL / PG-7VR / TBG-7V / OG-7V (granaadi kaliiber 40–105 mm; PG-7V 85 mm)",
        "weaponMass": 6.3,
        "weaponLength": 950,
        "muzzleVelocity": 115,
        "effectiveRange": 330,
        "maxRangeM": 700,
        "penetration": "PG-7VL: üle 500 mm RHA"
      },
      "sources": [
        {"name": "Wikipedia: RPG-7", "url": "https://en.wikipedia.org/wiki/RPG-7", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-22": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne tankitõrjegranaadiheitja.",
        "caliber": 72.5,
        "weaponMass": 2.8,
        "weaponLength": 850,
        "muzzleVelocity": 133,
        "effectiveRange": 200,
        "penetration": "400 mm RHA, 1000 mm raudbetoon, 1200 mm tellis"
      },
      "sources": [
        {"name": "Wikipedia: RPG-22", "url": "https://en.wikipedia.org/wiki/RPG-22", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-26": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne tankitõrjegranaadiheitja.",
        "caliber": 72.5,
        "weaponMass": 2.9,
        "weaponLength": 770,
        "muzzleVelocity": 144,
        "effectiveRange": 250,
        "penetration": "440 mm RHA, 1000 mm raudbetoon, 1500 mm tellis"
      },
      "sources": [
        {"name": "Wikipedia: RPG-26", "url": "https://en.wikipedia.org/wiki/RPG-26", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-28": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne raske tankitõrjegranaadiheitja aktiivsoomusega tankide vastu.",
        "caliber": 125,
        "weaponMass": 13.5,
        "weaponLength": 1200,
        "muzzleVelocity": 250,
        "effectiveRange": 300,
        "penetration": "Üle 1000 mm RHA aktiivsoomuse taga"
      },
      "sources": [
        {"name": "Wikipedia: RPG-28", "url": "https://en.wikipedia.org/wiki/RPG-28", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-30": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne tankitõrjegranaadiheitja, mille simulaatorrakett eksitab aktiivkaitsesüsteemi.",
        "caliber": 105,
        "cartridge": "105 mm põhilask ja 2 × 42 mm simulaatorraketti aktiivkaitse eksitamiseks",
        "weaponMass": 10.3,
        "weaponLength": 1135,
        "muzzleVelocity": 120,
        "effectiveRange": 200,
        "penetration": "Üle 600 mm RHA (650 mm aktiivkaitse ja aktiivsoomuse taga), 1500 mm raudbetoon"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-30", "url": "https://odin.t2com.army.mil/WEG/Asset/d2b1784e97898e68f256bf078a04efaf", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPG-30", "url": "https://en.wikipedia.org/wiki/RPG-30", "retrieved": "2026-10-23"}
      ]
    },
    "AT-13 Saxhorn-2 (Metis-M1 / 9K115)": {
      "status": "unverified",
      "values": {
        "purpose": "Kantav juhitav tankitõrjekompleks (kuni 2 km).",
        "caliber": 130,
        "weaponMass": 9.5,
        "missileLength": 0.98,
        "missileSpeed": "Kuni 200 m/s",
        "guidance": "Poolautomaatne (SACLOS), juhtme kaudu",
        "atgmRange": {"min": 80, "max": 2000},
        "weaponLength": 980,
        "penetration": "900–980 mm aktiivsoomuse taga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AT-13 Saxhorn-2 (Metis-M1 / 9K115)", "url": "https://odin.t2com.army.mil/WEG/Asset/68dd47bbba9b8d84891820dfeff15cb9", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 9K115-2 Metis-M", "url": "https://en.wikipedia.org/wiki/9K115-2_Metis-M", "retrieved": "2026-10-23"}
      ]
    },
    "AT-4 Spigot (9K111 Fagot)": {
      "status": "unverified",
      "values": {
        "purpose": "Kantav juhitav tankitõrjekompleks (kuni 2,5 km).",
        "caliber": 120,
        "weaponMass": 22.5,
        "launchWeight": 12.5,
        "missileLength": 1.1,
        "warheadMass": 1.7,
        "missileSpeed": "186 m/s",
        "guidance": "Poolautomaatne (SACLOS), juhtme kaudu (jälgib raketi IR-lampi)",
        "atgmRange": {"min": 70, "max": 2500},
        "weaponLength": 863,
        "penetration": "9M111: 400 mm RHA; 9M111-2: 460 mm; 9M111M: 600 mm RHA"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AT-4 Spigot (9K111 Fagot)", "url": "https://odin.t2com.army.mil/WEG/Asset/88c5c28f988d5a9da245f91ab8da2825", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 9K111 Fagot", "url": "https://en.wikipedia.org/wiki/9K111_Fagot", "retrieved": "2026-10-23"}
      ]
    },
    "AT-14 Spriggan (Kornet)": {
      "status": "unverified",
      "values": {
        "purpose": "Juhitav tankitõrjekompleks (kuni 5,5 km).",
        "caliber": 152,
        "weaponMass": 63.7,
        "launchWeight": 29,
        "missileLength": 1.2,
        "warheadMass": 4.6,
        "missileSpeed": "Üle 250 m/s",
        "guidance": "Poolautomaatne (SACLOS), laserkiirjuhtimine",
        "atgmRange": {"min": 100, "max": 5500},
        "penetration": "Kuni 1000 mm (9M133), 1000–1200 mm (9M133-1), 1100–1300 mm (9M133M-2) RHA aktiivsoomuse taga"
      },
      "sources": [
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-23"}
      ]
    },
    "SPG-9M": {
      "status": "unverified",
      "values": {
        "purpose": "73 mm tagasilöögita tankitõrjekahur.",
        "caliber": 73,
        "cartridge": "PG-9 / PG-9N / PG-9VNT (kumulatiivsed), OG-9 (kildlõhke)",
        "weaponMass": 47.5,
        "weaponLength": 2110,
        "rateOfFire": 6,
        "effectiveRange": 800,
        "penetration": "PG-9: 300 mm; PG-9N / PG-9VS: 400 mm; PG-9VNT: 600 mm (450 mm aktiivsoomuse taga)"
      },
      "sources": [
        {"name": "Wikipedia: SPG-9", "url": "https://en.wikipedia.org/wiki/SPG-9", "retrieved": "2026-10-23"}
      ]
    },
    "MT-12 Rapira": {
      "status": "unverified",
      "values": {
        "purpose": "Järelveetav 100 mm siledaraudne tankitõrjekahur.",
        "caliber": 100,
        "weaponMass": 2750,
        "weaponLength": 9160,
        "barrelLength": 6300,
        "crew": "6",
        "rateOfFire": 6,
        "muzzleVelocity": 1575,
        "maxRangeM": 8200,
        "penetration": "Alakaliibriline 3BM-2: 230 mm 500 m kaugusel; kumulatiivne 3BK16M: 400 mm; juhitav lask Kastet: 550–600 mm"
      },
      "sources": [
        {"name": "Wikipedia: 100 mm anti-tank gun T-12", "url": "https://en.wikipedia.org/wiki/100_mm_anti-tank_gun_T-12", "retrieved": "2026-10-23"}
      ]
    },
    "ZU-23-2 „Sergei“": {
      "status": "unverified",
      "values": {
        "purpose": "Järelveetav kaheraudne 23 mm õhutõrjekahur; kasutatakse ka maasihtmärkide vastu ja sõidukitele paigaldatuna.",
        "caliber": 23,
        "cartridge": "23×152B (BZT, OFZ, OFZT)",
        "weaponMass": 950,
        "weaponLength": 4570,
        "barrelLength": 2008,
        "muzzleVelocity": 970,
        "rateOfFire": 2000,
        "effectiveRange": 2500,
        "magazine": "2 × 50-padruniline lint",
        "crew": "2"
      },
      "notes": {
        "crew": "Teistel andmetel 6."
      },
      "sources": [
        {"name": "Wikipedia: ZU-23-2", "url": "https://en.wikipedia.org/wiki/ZU-23-2", "retrieved": "2026-10-23"}
      ]
    },
    "Igla (9K38)": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav õhutõrjeraketikompleks.",
        "caliber": 72,
        "launchWeight": 17.9,
        "missileLength": 1.574,
        "warheadMass": 1.17,
        "missileSpeed": "Kuni 570 m/s (umbes Mach 1,9)",
        "guidance": "Kahe lainepikkusega IR-otsija (Igla-S)",
        "samRange": {"max": 5200},
        "samAltitude": {"max": 3500}
      },
      "sources": [
        {"name": "Wikipedia: 9K38 Igla", "url": "https://en.wikipedia.org/wiki/9K38_Igla", "retrieved": "2026-10-23"}
      ]
    },
    "Strela-2M (9K32M)": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav õhutõrjeraketikompleks.",
        "caliber": 72,
        "launchWeight": 15,
        "missileLength": 1.44,
        "warheadMass": 1.15,
        "missileSpeed": "500 m/s",
        "guidance": "Passiivne IR-otsija (PbS), proportsionaalne navigatsioon",
        "samRange": {"min": 800, "max": 4200},
        "samAltitude": {"min": 50, "max": 2300}
      },
      "sources": [
        {"name": "Wikipedia: 9K32 Strela-2", "url": "https://en.wikipedia.org/wiki/9K32_Strela-2", "retrieved": "2026-10-23"}
      ]
    },
    "Strela-3 (9K34)": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav õhutõrjeraketikompleks.",
        "launchWeight": 16,
        "missileLength": 1.47,
        "warheadMass": 1.17,
        "missileSpeed": "470 m/s",
        "guidance": "IR-otsija, sagedusmodulatsioon, lämmastikuga jahutatud PbS",
        "samRange": {"max": 4500},
        "samAltitude": {"min": 30, "max": 3000}
      },
      "sources": [
        {"name": "Wikipedia: 9K34 Strela-3", "url": "https://en.wikipedia.org/wiki/9K34_Strela-3", "retrieved": "2026-10-23"}
      ]
    },
    "Verba (9K333)": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav õhutõrjeraketikompleks.",
        "caliber": 72,
        "launchWeight": 17.25,
        "warheadMass": 1.5,
        "missileSpeed": "Kuni 500 m/s (Mach 1,5)",
        "guidance": "Kolmekanaliline optiline otsija (UV, lähi-IR, kesk-IR)",
        "samRange": {"max": 6500},
        "samAltitude": {"max": 4500}
      },
      "sources": [
        {"name": "Wikipedia: 9K333 Verba", "url": "https://en.wikipedia.org/wiki/9K333_Verba", "retrieved": "2026-10-23"}
      ]
    },
    "PM „Makarov“": {
      "status": "unverified",
      "values": {
        "purpose": "Vanem 9 mm teenistuspüstol.",
        "caliber": 9,
        "cartridge": "9×18 mm Makarov",
        "weaponMass": 0.73,
        "weaponLength": 161.5,
        "barrelLength": 93.5,
        "muzzleVelocity": 315,
        "effectiveRange": 50,
        "magazine": "8-padruniline salv"
      },
      "sources": [
        {"name": "Wikipedia: Makarov pistol", "url": "https://en.wikipedia.org/wiki/Makarov_pistol", "retrieved": "2026-10-23"}
      ]
    },
    "MP-443 „Grach“": {
      "status": "unverified",
      "values": {
        "purpose": "9 mm teenistuspüstol.",
        "caliber": 9,
        "cartridge": "9×19 mm Parabellum (7N21, +P+)",
        "weaponMass": 0.95,
        "weaponLength": 198,
        "barrelLength": 112.5,
        "muzzleVelocity": 450,
        "effectiveRange": 50,
        "magazine": "17-padruniline salv (hilisematel 18)"
      },
      "sources": [
        {"name": "Wikipedia: MP-443 Grach", "url": "https://en.wikipedia.org/wiki/MP-443_Grach", "retrieved": "2026-10-23"}
      ]
    },
    "GSh-18": {
      "status": "unverified",
      "values": {
        "purpose": "9 mm püstol.",
        "caliber": 9,
        "cartridge": "9×19 mm Parabellum (7N21, 7N31)",
        "weaponMass": 0.59,
        "weaponLength": 184,
        "barrelLength": 103,
        "muzzleVelocity": 535,
        "effectiveRange": 50,
        "magazine": "18-padruniline salv"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: GSh-18", "url": "https://odin.t2com.army.mil/WEG/Asset/9d2a9099e69ad9c1f6016b8a74dc4623", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: GSh-18", "url": "https://en.wikipedia.org/wiki/GSh-18", "retrieved": "2026-10-23"}
      ]
    },
    "PP-19 „Vityaz“": {
      "status": "unverified",
      "values": {
        "purpose": "9 mm püstolkuulipilduja.",
        "caliber": 9,
        "cartridge": "9×19 mm Parabellum (ka soomust läbistav 7N31)",
        "weaponMass": 2.9,
        "weaponLength": 705,
        "barrelLength": 237.5,
        "muzzleVelocity": 380,
        "rateOfFire": 800,
        "maxRangeM": 200,
        "magazine": "30-padruniline salv"
      },
      "sources": [
        {"name": "Wikipedia: PP-19 Bizon (PP-19-01 Vityaz)", "url": "https://en.wikipedia.org/wiki/PP-19_Bizon", "retrieved": "2026-10-23"}
      ]
    },
    "RPO-M „Shmel-M“ (PDM-A)": {
      "status": "unverified",
      "values": {
        "purpose": "Termobaariline leegiheitja varjatud laskepesade, kergsoomustatud masinate ja elavjõu vastu, RPO-A moderniseeritud versioon.",
        "caliber": 90,
        "cartridge": "90 mm termobaariline rakett",
        "weaponMass": 8.8,
        "weaponLength": 940,
        "effectiveRange": 600,
        "maxRangeM": 1700
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPO PDM-A (Shmel-M)", "url": "https://odin.t2com.army.mil/WEG/Asset/5fa85e638f885a7499b3064466125112", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPO-A Shmel", "url": "https://en.wikipedia.org/wiki/RPO-A_Shmel", "retrieved": "2026-11-25"}
      ]
    },
    "AT-5 Spandrel (9K111-1 Konkurs)": {
      "status": "unverified",
      "values": {
        "purpose": "Juhitav tankitõrjekompleks (kuni 4 km), kasutatakse ka soomukitel.",
        "caliber": 135,
        "weaponMass": 22.5,
        "launchWeight": 14.6,
        "missileLength": 1.15,
        "warheadMass": 2.7,
        "missileSpeed": "208 m/s",
        "guidance": "Poolautomaatne (SACLOS), juhtme kaudu",
        "atgmRange": {"min": 100, "max": 4000},
        "penetration": "9M113: 600 mm RHA; 9M113M (tandem): 750–800 mm RHA"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9M113 Konkurs (AT-5 Spandrel)", "url": "https://odin.t2com.army.mil/WEG/Asset/fcf51c4d4c9e750e4887497dff8b1024", "retrieved": "2026-10-28"}
      ]
    },
    "RPG-29": {
      "status": "unverified",
      "values": {
        "purpose": "Õlalt lastav tankitõrjegranaadiheitja tandemlaenguga, mis läbib aktiivsoomuse.",
        "caliber": 105,
        "cartridge": "PG-29V kumulatiivne (6,1 kg) või TBG-29V termobaariline (6,7 kg) lask",
        "weaponMass": 11.5,
        "weaponLength": 1850,
        "muzzleVelocity": 230,
        "effectiveRange": 500,
        "penetration": "PG-29V: kuni 600 mm RHA aktiivsoomuse taga; 1500 mm betoon, 2000 mm tellis"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-29 Vampir", "url": "https://odin.t2com.army.mil/WEG/Asset/d657da6756df1f02a4aff4ff86a7727e", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPG-29", "url": "https://en.wikipedia.org/wiki/RPG-29", "retrieved": "2026-11-25"}
      ]
    },
    "AKM": {
      "status": "unverified",
      "values": {
        "purpose": "Vanem 7,62 mm automaat.",
        "caliber": 7.62,
        "cartridge": "7,62×39 mm",
        "weaponMass": 3.3,
        "weaponLength": 880,
        "barrelLength": 415,
        "muzzleVelocity": 715,
        "rateOfFire": 600,
        "effectiveRange": 350,
        "magazine": "30-padruniline salv (sobivad ka RPK 40-padrunilised salved ja 75-padruniline trummelsalv)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AKM", "url": "https://odin.t2com.army.mil/WEG/Asset/81938b91ee77ceadcef64a66bf7c3f23", "retrieved": "2026-10-28"}
      ]
    },
    "AKS-74U": {
      "status": "unverified",
      "values": {
        "purpose": "Lühike 5,45 mm automaatkarabiin sõidukimeeskondadele ja tagalale.",
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 2.7,
        "weaponLength": 735,
        "barrelLength": 206.5,
        "rateOfFire": 600,
        "magazine": "30-padruniline salv (sobivad RPK-74 45-padrunilised salved)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AKS-74U", "url": "https://odin.t2com.army.mil/WEG/Asset/dd1155dc37bc6a75610fe79c66df527c", "retrieved": "2026-10-28"}
      ]
    },
    "AK-103": {
      "status": "unverified",
      "values": {
        "purpose": "7,62 mm automaat.",
        "caliber": 7.62,
        "cartridge": "7,62×39 mm",
        "weaponMass": 3.4,
        "weaponLength": 943,
        "barrelLength": 415,
        "muzzleVelocity": 715,
        "rateOfFire": 600,
        "effectiveRange": 500,
        "magazine": "30-padruniline salv"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AK-103", "url": "https://odin.t2com.army.mil/WEG/Asset/fa7477a642d5936bcf0c9a4c2aa1886a", "retrieved": "2026-10-28"}
      ]
    },
    "AS „Val“": {
      "status": "unverified",
      "values": {
        "purpose": "Summutiga automaat eriüksustele.",
        "caliber": 9,
        "cartridge": "9×39 mm",
        "weaponMass": 2.5,
        "weaponLength": 875,
        "barrelLength": 200,
        "muzzleVelocity": 295,
        "rateOfFire": 900,
        "effectiveRange": 400,
        "magazine": "20-padruniline salv (ka 10- ja 30-padrunilised)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AS Val", "url": "https://odin.t2com.army.mil/WEG/Asset/947e79dfafb7c633d509b8dd12f50b89", "retrieved": "2026-10-28"}
      ]
    },
    "DShK": {
      "status": "unverified",
      "values": {
        "purpose": "Raskekuulipilduja jalaväe toetuseks; tankidel ja soomukitel maa- ja õhusihtmärkide vastu.",
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "weaponMass": 34,
        "weaponLength": 1625,
        "barrelLength": 1070,
        "muzzleVelocity": 850,
        "rateOfFire": 600,
        "effectiveRange": 2000,
        "maxRangeM": 2500,
        "magazine": "50-padruniline lint"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: DShK 1938", "url": "https://odin.t2com.army.mil/WEG/Asset/378933f032130704ff7f26afedab6f45", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: DShK", "url": "https://en.wikipedia.org/wiki/DShK", "retrieved": "2026-11-25"}
      ]
    },
    "AGS-30": {
      "status": "unverified",
      "values": {
        "purpose": "Automaatgranaadiheitja; loodud vastase väljaajamiseks kindlustatud hoonetest.",
        "caliber": 30,
        "cartridge": "30 mm VOG-17M / VOG-30 granaat",
        "weaponMass": 16,
        "weaponLength": 1165,
        "muzzleVelocity": 185,
        "rateOfFire": 400,
        "effectiveRange": 2100,
        "magazine": "29 granaadiga lint"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AGS-30 Atlant", "url": "https://odin.t2com.army.mil/WEG/Asset/cf5b7847932c53a08417161fb2c97f17", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: AGS-30", "url": "https://en.wikipedia.org/wiki/AGS-30", "retrieved": "2026-11-25"}
      ]
    },
    "RPG-18 „Mukha“": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne lähimaa tankitõrjegranaadiheitja soomusmasinate vastu.",
        "caliber": 64,
        "weaponMass": 2.6,
        "weaponLength": 1050,
        "muzzleVelocity": 115,
        "effectiveRange": 200,
        "penetration": "300 mm soomust, 1000 mm tellis, 500 mm raudbetoon"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-18 Mukha", "url": "https://odin.t2com.army.mil/WEG/Asset/78d5a66747174ac105645801d1f3589b", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPG-18", "url": "https://en.wikipedia.org/wiki/RPG-18", "retrieved": "2026-11-25"}
      ]
    },
    "RPG-27 „Tavolga“": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne tankitõrjelask aktiivsoomusega tankide vastu.",
        "caliber": 105,
        "weaponMass": 8.3,
        "weaponLength": 1135,
        "muzzleVelocity": 120,
        "effectiveRange": 200,
        "penetration": "Üle 800 mm RHA (aktiivsoomuse taga 600–750 mm), 1500 mm betoon, 2000 mm tellis, 3700 mm muld"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-27 Tavolga", "url": "https://odin.t2com.army.mil/WEG/Asset/db3da67c5ff2f79baa68fb5f982c43eb", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPG-27", "url": "https://en.wikipedia.org/wiki/RPG-27", "retrieved": "2026-11-25"}
      ]
    },
    "RPG-32 „Hashim“": {
      "status": "unverified",
      "values": {
        "caliber": 105,
        "cartridge": "PG-32V kumulatiivne või TBG-32V termobaariline lask (7,5 kg)",
        "weaponMass": 3,
        "weaponLength": 1200,
        "muzzleVelocity": 140,
        "effectiveRange": 700,
        "penetration": "PG-32V: 650 mm RHA aktiivsoomuse taga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-32 Nashshab", "url": "https://odin.t2com.army.mil/WEG/Asset/beec958d856ee99f0b3f6b812d24d2b9", "retrieved": "2026-10-28"}
      ]
    },
    "MT-12R „Ruta“": {
      "status": "unverified",
      "values": {
        "purpose": "Järelveetav 100 mm tankitõrjekahur radariga.",
        "caliber": 100,
        "crew": "7",
        "weaponMass": 3050,
        "weaponLength": 9650,
        "barrelLength": 6300,
        "muzzleVelocity": 1575,
        "rateOfFire": 6,
        "effectiveRange": 3000,
        "maxRangeM": 8200,
        "guidance": "Tulejuhtimisradar 1A31 Ruta: automaatne sihtmärgi avastamine, kaugusmõõtmine ja jälgimine kuni 3500 m, ka öösel ja halva nähtavusega"
      },
      "notes": {
        "rateOfFire": "6–14 lasku/min.",
        "effectiveRange": "Otsetulel; kaudtulel 8200 m.",
        "muzzleVelocity": "700–1575 m/s sõltuvalt laskemoonast."
      },
      "sources": [
        {"name": "Wikipedia: MT-12", "url": "https://en.wikipedia.org/wiki/MT-12", "retrieved": "2026-10-28"},
        {"name": "The War Zone: radariga tankitõrjekahurid", "url": "https://www.twz.com/44191/ukraine-rolls-out-soviet-era-radar-equipped-anti-tank-guns", "retrieved": "2026-10-28"}
      ]
    },
    "PMN": {
      "status": "unverified",
      "values": {
        "purpose": "Survetoimeline jalaväemiin (fugass), mis vigastab peale astujat.",
        "mineMass": 0.6,
        "mineDiameter": 110,
        "mineHeight": 57,
        "explosiveMass": 240,
        "explosiveType": "TNT (tetrüüli süütelaeng)",
        "casing": "Bakeliit, must kummist surveplaat"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PMN", "url": "https://odin.t2com.army.mil/WEG/Asset/41f2e79bec4808b5544e3c99ae96ce89", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: PMN mine", "url": "https://en.wikipedia.org/wiki/PMN_mine", "retrieved": "2026-10-23"}
      ]
    },
    "PMN-2": {
      "status": "unverified",
      "values": {
        "purpose": "Survetoimeline jalaväemiin (fugass), mis vigastab peale astujat.",
        "mineHeight": 54,
        "explosiveType": "RDX/TNT-põhine segu",
        "casing": "Survevormitud plast (tavaliselt roheline), must kummist X-kujuline surveplaat"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PMN-2", "url": "https://odin.t2com.army.mil/WEG/Asset/7e1103dbc12316b9b209ec84426309c3", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: PMN mine", "url": "https://en.wikipedia.org/wiki/PMN_mine", "retrieved": "2026-10-23"}
      ]
    },
    "PMN-4": {
      "status": "unverified",
      "values": {
        "purpose": "Väike survetoimeline jalaväemiin (fugass).",
        "mineMass": 0.3,
        "mineDiameter": 95,
        "mineHeight": 42,
        "explosiveMass": 50,
        "explosiveType": "TNT",
        "casing": "Punakaspruun või khaki korpus, must kummist surveplaat"
      },
      "sources": [
        {"name": "Wikipedia: PMN mine", "url": "https://en.wikipedia.org/wiki/PMN_mine", "retrieved": "2026-10-23"}
      ]
    },
    "PFM-1": {
      "status": "unverified",
      "values": {
        "purpose": "Hajutatav jalaväemiin.",
        "mineLength": 119,
        "mineWidth": 64,
        "mineHeight": 20,
        "explosiveMass": 37,
        "explosiveType": "Vedel lõhkeaine VS-6D või VS-60D",
        "casing": "Polüetüleenist plastkorpus",
        "delivery": "Kassettides (nt KSF-1S: 64 PFM-1S); laotakse raketiheitjate, miinipildujate, kopterite ja lennukitega või miinilaoturiga UMZ"
      },
      "sources": [
        {"name": "Wikipedia: PFM-1 mine", "url": "https://en.wikipedia.org/wiki/PFM-1_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POM-2S": {
      "status": "unverified",
      "values": {
        "purpose": "Hajutatav jalaväe kildmiin.",
        "mineDiameter": 63,
        "mineHeight": 180,
        "lethalRadius": 16,
        "delivery": "Kassettidega raketiheitjatest BM-21 / BM-27, kopteritelt süsteemiga VSM-1, miinilaoturiga UMZ või komplektiga PKM"
      },
      "sources": [
        {"name": "Wikipedia: POM-2 mine", "url": "https://en.wikipedia.org/wiki/POM-2_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POM-3": {
      "status": "unverified",
      "values": {
        "purpose": "Hajutatav jalaväe kildmiin seismilise anduriga.",
        "mineMass": 1.3,
        "lethalRadius": 16,
        "delivery": "Hajutatakse (nt ISDM Zemledelie, 5–15 km); laskub langevarjuga ja toetub kuuele vedrujalale"
      },
      "sources": [
        {"name": "Wikipedia: POM-3 mine", "url": "https://en.wikipedia.org/wiki/POM-3_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POMZ-2M": {
      "status": "unverified",
      "values": {
        "purpose": "Vaiale kinnitatav tõmbetraadiga jalaväe kildmiin.",
        "mineMass": 1.8,
        "mineDiameter": 60,
        "mineHeight": 107,
        "explosiveMass": 75,
        "explosiveType": "TNT",
        "lethalRadius": 4
      },
      "sources": [
        {"name": "Wikipedia: POMZ-2", "url": "https://en.wikipedia.org/wiki/POMZ-2", "retrieved": "2026-10-23"}
      ]
    },
    "OZM-3": {
      "status": "unverified",
      "values": {
        "purpose": "Hüppav jalaväe kildmiin: tõuseb enne plahvatust õhku.",
        "mineMass": 3.2,
        "mineDiameter": 76,
        "mineHeight": 120,
        "explosiveMass": 75,
        "explosiveType": "TNT",
        "casing": "Malmist kildkorpus",
        "lethalRadius": 9
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: OZM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/f67ba63f8ec260edbdecc761450153f0", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: OZM", "url": "https://en.wikipedia.org/wiki/OZM", "retrieved": "2026-10-23"}
      ]
    },
    "OZM-4": {
      "status": "unverified",
      "values": {
        "purpose": "Hüppav jalaväe kildmiin: tõuseb enne plahvatust õhku.",
        "mineMass": 5.4,
        "mineDiameter": 75,
        "mineHeight": 120,
        "explosiveMass": 170,
        "explosiveType": "TNT",
        "casing": "Malmist kildkorpus",
        "lethalRadius": 13
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: OZM-4", "url": "https://odin.t2com.army.mil/WEG/Asset/c3ba0feffa3a3e379e4c96fde9664d2a", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: OZM", "url": "https://en.wikipedia.org/wiki/OZM", "retrieved": "2026-10-23"}
      ]
    },
    "OZM-72": {
      "status": "unverified",
      "values": {
        "purpose": "Hüppav jalaväe kildmiin: tõuseb enne plahvatust õhku ja tabab kildudega laia ala.",
        "mineMass": 5,
        "mineDiameter": 108,
        "mineHeight": 172,
        "explosiveMass": 660,
        "explosiveType": "TNT",
        "casing": "Raudkorpus, 2400 eelvormitud teraskildu",
        "fragments": 2400,
        "lethalRadius": 25
      },
      "sources": [
        {"name": "Wikipedia: OZM", "url": "https://en.wikipedia.org/wiki/OZM", "retrieved": "2026-10-23"}
      ]
    },
    "MON-50": {
      "status": "unverified",
      "values": {
        "purpose": "Suunatud jalaväe kildmiin: paiskab killud ühes suunas, käivitatav käsuga või tõmbetraadiga.",
        "mineMass": 2,
        "mineLength": 226,
        "mineWidth": 35,
        "mineHeight": 105,
        "explosiveMass": 700,
        "explosiveType": "RDX (PVV-5A)",
        "fragments": 540,
        "lethalRadius": 50,
        "fragmentationAngle": "54° horisontaalselt"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MON-50", "url": "https://odin.t2com.army.mil/WEG/Asset/fca3b60934245acdae5560d79e5eb646", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: MON-50", "url": "https://en.wikipedia.org/wiki/MON-50", "retrieved": "2026-10-23"}
      ]
    },
    "MON-90": {
      "status": "unverified",
      "values": {
        "purpose": "Suur suunatud jalaväe kildmiin: paiskab killud ühes suunas kuni 90 m kaugusele.",
        "mineMass": 12.1,
        "mineLength": 345,
        "mineWidth": 153,
        "mineHeight": 202,
        "explosiveMass": 6200,
        "explosiveType": "RDX",
        "fragments": 2000,
        "lethalRadius": 90,
        "fragmentationAngle": "54° horisontaalselt"
      },
      "sources": [
        {"name": "Wikipedia: MON-90", "url": "https://en.wikipedia.org/wiki/MON-90", "retrieved": "2026-10-23"}
      ]
    },
    "MON-100": {
      "status": "unverified",
      "values": {
        "purpose": "Suunatud jalaväe kildmiin, mis paiskab killud kuni 100 m kaugusele.",
        "mineMass": 5,
        "mineDiameter": 236,
        "explosiveMass": 2000,
        "explosiveType": "TNT",
        "fragments": 450,
        "lethalRadius": 100
      },
      "sources": [
        {"name": "Wikipedia: MON-100", "url": "https://en.wikipedia.org/wiki/MON-100", "retrieved": "2026-10-23"}
      ]
    },
    "MON-200": {
      "status": "unverified",
      "values": {
        "purpose": "Väga suur suunatud jalaväe kildmiin, mis paiskab killud kuni 200 m kaugusele.",
        "mineMass": 25,
        "mineDiameter": 434,
        "explosiveMass": 12000,
        "mineHeight": 130,
        "explosiveType": "TNT",
        "lethalRadius": 200
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MON-200", "url": "https://odin.t2com.army.mil/WEG/Asset/0f7957351adee5be58b6ee4ca5b1a38f", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: MON-200", "url": "https://en.wikipedia.org/wiki/MON-200", "retrieved": "2026-10-23"}
      ]
    },
    "TM-62M": {
      "status": "unverified",
      "values": {
        "purpose": "Tankitõrje fugassmiin, mis purustab roomiku või veermiku.",
        "explosiveMass": 7500,
        "mineMass": 9.5,
        "mineDiameter": 320,
        "mineHeight": 128,
        "casing": "Ümmargune metallkorpus"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TM-62M", "url": "https://odin.t2com.army.mil/WEG/Asset/5caaefea396bb8e5bf8de4118f01d768", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: TM-62", "url": "https://en.wikipedia.org/wiki/TM-62", "retrieved": "2026-10-23"}
      ]
    },
    "TM-62P3": {
      "status": "unverified",
      "values": {
        "purpose": "Plastkorpusega tankitõrje fugassmiin, mida on miiniotsijaga raske leida.",
        "explosiveMass": 7500,
        "casing": "Plastkorpus, sile külg"
      },
      "sources": [
        {"name": "Wikipedia: TM-62", "url": "https://en.wikipedia.org/wiki/TM-62", "retrieved": "2026-10-23"}
      ]
    },
    "TM-72": {
      "status": "unverified",
      "values": {
        "purpose": "Magnetilise mõjusüütajaga tankitõrjemiin, mis tabab kogu sõiduki laiuses ja läbistab põhja.",
        "mineMass": 6,
        "mineDiameter": 250,
        "mineHeight": 80,
        "explosiveMass": 2500,
        "explosiveType": "TNT/RDX segu, kumulatiivlaeng",
        "casing": "Silindriline metallkorpus",
        "fuze": "Magnetiline mõjusüütaja"
      },
      "sources": [
        {"name": "Wikipedia: TM-72 mine", "url": "https://en.wikipedia.org/wiki/TM-72_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TM-83": {
      "status": "unverified",
      "values": {
        "purpose": "Teeäärne külgmiin: seismiline andur ja IR-andur käivitavad soomust läbistava laengu sõiduki küljele.",
        "mineMass": 28.1,
        "mineLength": 455,
        "mineWidth": 377,
        "mineHeight": 440,
        "explosiveMass": 9600,
        "explosiveType": "TG 40/60",
        "penetration": "100 mm soomust 30° nurga all, 80 mm auk (5–30 m kauguselt)",
        "fuze": "Seismiline andur ja IR-andur"
      },
      "sources": [
        {"name": "Wikipedia: TM-83 mine", "url": "https://en.wikipedia.org/wiki/TM-83_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TM-89": {
      "status": "unverified",
      "values": {
        "purpose": "Magnetilise mõjusüütajaga tankitõrjemiin, mis läbistab sõiduki põhja.",
        "penetration": "200 mm soomust 0,45 m kauguselt",
        "explosiveMass": 6700,
        "fuze": "Kahekanaliline magnetiline mõjusüütaja",
        "mineMass": 11.5,
        "mineDiameter": 320,
        "mineHeight": 131,
        "explosiveType": "Misznay–Schardini efektiga lõhkepea"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TM-89", "url": "https://odin.t2com.army.mil/WEG/Asset/6dd8dfc2969e3929762928a40ce5b9cc", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: TM-89 mine", "url": "https://en.wikipedia.org/wiki/TM-89_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TMK-2": {
      "status": "unverified",
      "values": {
        "purpose": "Kaldvarda süütajaga kumulatiivne tankitõrjemiin, mis läbistab sõiduki põhja.",
        "mineMass": 12.5,
        "mineDiameter": 307,
        "mineHeight": 265,
        "explosiveMass": 6500,
        "explosiveType": "TG-50 (6,5 kg) või TNT (6 kg)",
        "casing": "Teras",
        "penetration": "60–110 mm (TG-50 suurem, TNT väiksem)",
        "fuze": "Kaldvarda süütaja (1,13 m kaldvardaga)"
      },
      "sources": [
        {"name": "Wikipedia: TMK-2 mine", "url": "https://en.wikipedia.org/wiki/TMK-2_mine", "retrieved": "2026-10-23"}
      ]
    },
    "MOB": {
      "status": "unverified",
      "values": {
        "purpose": "Käsitsi paigaldatav suunatud kildmiin, käivitatav käsuga või ohvri poolt.",
        "casing": "Plastkorpus",
        "delivery": "Komplektis kuni neli miini"
      },
      "sources": [
        {"name": "Wikipedia: MOB (landmine)", "url": "https://en.wikipedia.org/wiki/MOB_(landmine)", "retrieved": "2026-10-23"}
      ]
    },
    "RDG-2": {
      "status": "unverified",
      "values": {
        "purpose": "Käsisuitsuküünal lühiajalise suitsukatte loomiseks.",
        "mineMass": 0.5,
        "smokeDuration": "60–90 s",
        "smokeScreen": "Kuni 30 m pikk ja 5–8 m lai",
        "casing": "Silindriline korpus"
      },
      "sources": [
        {"name": "Wikipedia: RDG-2", "url": "https://en.wikipedia.org/wiki/RDG-2", "retrieved": "2026-10-23"}
      ]
    },
    "MS-3": {
      "status": "unverified",
      "values": {
        "purpose": "Lõksmiin, mis plahvatab, kui sellelt koormus eemaldatakse.",
        "mineMass": 0.66,
        "mineDiameter": 110,
        "mineHeight": 65,
        "explosiveMass": 340,
        "explosiveType": "TNT",
        "casing": "Plastkorpus, pruun, must kate keskse eendiga",
        "delivery": "Süttib koormuse kadumisel (vähemalt 5 kg); kasutatakse tõstmisvastase seadmena miinidel, millel seda pole, või eraldi lõksuna; kasutusiga piiramatu, isehävitust pole"
      },
      "sources": [
        {"name": "Sappers.org: MS-3", "url": "https://sappers.org/uk/dovidnyk/miny/syurpryzy-i-pastky/ms-3", "retrieved": "2026-10-23"},
        {"name": "NoLandmines: MS-3", "url": "https://nolandmines.com/explosive_hazards/minesMS3.htm", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): MS-3", "url": "https://metis.fenixinsight.com/munition/boobyTrap/ms-3-booby-trap", "retrieved": "2026-10-23"}
      ]
    },
    "MS-4": {
      "status": "unverified",
      "values": {
        "purpose": "Mitmeotstarbeline lõhkelõks esemete lõksustamiseks ja miinide tõstmisvastaseks seadmeks.",
        "mineMass": 0.41,
        "mineLength": 155,
        "mineWidth": 92,
        "mineHeight": 31,
        "explosiveMass": 120,
        "explosiveType": "TNT",
        "casing": "Metall, matt oliivroheline",
        "delivery": "Kasutatakse esemete lõksustamiseks, miinide tõstmisvastase seadmena, raudtee- ja transpordimiinina või objektimiini süütena; kalde- (20°) ja vibratsiooniandur ning taimer 15 min – 360 h; süütur MD-9; kahjutuks tegemine keelatud"
      },
      "sources": [
        {"name": "Sappers.org: MS-4", "url": "https://sappers.org/uk/dovidnyk/miny/syurpryzy-i-pastky/ms-4", "retrieved": "2026-10-23"}
      ]
    },
    "ML-8": {
      "status": "unverified",
      "values": {
        "purpose": "Koormuse vabastamisel töötav lõksmiin; kasutatakse miinide tõstmisvastase seadmena.",
        "mineMass": 0.37,
        "mineLength": 114,
        "mineWidth": 60,
        "mineHeight": 40,
        "explosiveMass": 80,
        "casing": "Plast, roheline",
        "delivery": "Tõstmisvastane seade PMN, PMN-2, PMN-4, PMD-6M, OZM-72 ja TM-62 seeria miinide all või lõks relvade ja varustuse all; anduri tundlikkus üle 0,25 kg; rakendub 2–2,5 min pärast paigaldust; kahjutuks tegemine keelatud"
      },
      "sources": [
        {"name": "Sappers.org: ML-8", "url": "https://sappers.org/uk/dovidnyk/miny/syurpryzy-i-pastky/ml-8", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Ukraine Unveils Most Common Russian Mines", "url": "https://militarnyi.com/en/news/ukraine-unveils-most-common-russian-mines-with-presidential-brigade-s-sappers/", "retrieved": "2026-10-23"}
      ]
    },
    "PMP": {
      "status": "unverified",
      "values": {
        "purpose": "Survetoimeline kuulmiin: pealeastumisel tulistab padruni, mille kuul vigastab jalga.",
        "mineMass": 0.145,
        "mineLength": 120,
        "mineDiameter": 36,
        "casing": "Teras",
        "delivery": "Laseb 7,62×25 mm TT padruni (kuul 5,52 g); tundlikkus 7–30 kgf; sileraudne toru, ülaosas kummikate"
      },
      "sources": [
        {"name": "Sappers.org: PMP", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natysknoyi-diyi/pmp", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): PMP", "url": "https://metis.fenixinsight.com/munition/mine/pmp", "retrieved": "2026-10-23"}
      ]
    },
    "POB Pilka": {
      "status": "unverified",
      "values": {
        "purpose": "Hüppav jalaväe kildmiin, käivitatav tõmbetraadiga või käsuga (kasutusel alates 2005. aastast).",
        "mineDiameter": 90,
        "mineHeight": 170,
        "explosiveMass": 510,
        "explosiveType": "TG-40",
        "casing": "Plast; sees terasrõngastest killud (samad siseläbimõõdud, erinevad välisläbimõõdud)",
        "lethalRadius": 20,
        "delivery": "Tõmbetraadiga (20 m) või käsuga (süütur NM, NVU-P/NVU-P2); plahvatab 0,4–0,6 m kõrgusel; süütajad MUV-2/3/4, MVE-72, MVE-NS, MVE-92; isehävitus ja tõstmisvastane kaitse puuduvad"
      },
      "sources": [
        {"name": "Sappers.org: POB Pilka", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natyazhnoyi-diyi/pob-pilka", "retrieved": "2026-10-23"}
      ]
    },
    "Vkladysh": {
      "status": "unverified",
      "values": {
        "purpose": "Tõmbetraadiga ringlöögiga kildmiin, mida saab kasutada ka käsigranaadina (kasutusel alates 2007. aastast).",
        "mineMass": 0.83,
        "mineDiameter": 61.5,
        "mineHeight": 170,
        "explosiveMass": 50,
        "explosiveType": "A-IX-1",
        "casing": "Teras (killud moodustuvad rõngastest)",
        "delivery": "Tõmbetoimeline (4 andurit, kuni 10 m); paigaldatakse ainult käsitsi maapinnale; granaadina viivitus 3–5 s; isehävitus 3–100 h pärast paigaldust, isetühistus kuni 120 päeva"
      },
      "sources": [
        {"name": "Sappers.org: MIB Vkladysh", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natyazhnoyi-diyi/mib-vkladysh", "retrieved": "2026-10-23"}
      ]
    },
    "OZ-1": {
      "status": "unverified",
      "values": {
        "purpose": "Lõhkelaeng üksikinimese kaevikupesa rajamiseks külmunud või kõvas pinnases.",
        "delivery": "Lisalaengutega saab pesa laiendada mitmele võitlejale; komplektis KZ-OZ-1 (umbes 96 mm plastkorpus)"
      },
      "sources": [
        {"name": "Metis (Fenix Insight): OZ-1", "url": "https://metis.fenixinsight.com/munition/demolitionStore/oz-1", "retrieved": "2026-10-23"}
      ]
    },
    "KZU-2": {
      "status": "unverified",
      "values": {
        "purpose": "Kumulatiivlaeng raudbetoon- ja metallkonstruktsioonide (sillad, toed, torustikud) lõhkamiseks.",
        "mineMass": 0.9,
        "mineLength": 150,
        "mineWidth": 105,
        "mineHeight": 85,
        "explosiveMass": 320,
        "explosiveType": "TG-40 (TNT ja heksogeeni sulam)",
        "delivery": "Töötab igas ilmas ja vee all; elektriline süütamine; kinnitus eemaldatavate magnetite ja köiega; läbistab umbes 3,6 cm terast või 30 cm raudbetooni"
      },
      "sources": [
        {"name": "BOCN forum: KZU-2 demolition charge", "url": "https://www.bocn.co.uk/threads/kzu-2-demolition-charge-russia.110648/", "retrieved": "2026-10-23"}
      ]
    },
    "SPM": {
      "status": "unverified",
      "values": {
        "purpose": "Ajastatud magnetiline objektimiin metallosadega sihtmärkide (kütusepaagid, torustikud, sõidukid) vastu.",
        "mineMass": 3,
        "mineLength": 280,
        "mineWidth": 115,
        "mineHeight": 75,
        "explosiveMass": 1000,
        "explosiveType": "MS",
        "casing": "Bakeliit (fenoolplast)",
        "delivery": "Sihtmärgid ka õhusõidukid ja laevad; kinnitub kahe kaarja magnetiga (hoiujõud 40–60 kg); kasutatav vee all kuni 10 m sügavusel; viitsüütur VZD-1M või VZD-20M; kasutavad peamiselt mereväe lahingutuukrid ja merejalavägi"
      },
      "sources": [
        {"name": "Sappers.org: SPM", "url": "https://sappers.org/uk/dovidnyk/miny/obyektni/spm", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): SPM", "url": "https://metis.fenixinsight.com/munition/mine/spm", "retrieved": "2026-10-23"}
      ]
    },
    "MPM": {
      "status": "unverified",
      "values": {
        "purpose": "Väike ajastatud magnetiline objektimiin (ilma killuefektita).",
        "mineMass": 0.77,
        "mineLength": 150,
        "mineWidth": 75,
        "mineHeight": 50,
        "explosiveMass": 300,
        "explosiveType": "TG-50",
        "casing": "Bakeliit (fenoolplast), tumepruun",
        "delivery": "Kuulub kinnitusmiinide perekonda BPM / SPM / UPM"
      },
      "sources": [
        {"name": "Sappers.org: MPM", "url": "https://sappers.org/uk/dovidnyk/miny/obyektni/mpm", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): MPM", "url": "https://metis.fenixinsight.com/munition/mine/mpm", "retrieved": "2026-10-23"}
      ]
    },
    "SM": {
      "status": "unverified",
      "values": {
        "purpose": "Tõmbetraadiga signaalmiin, mis annab heli- ja valgussignaali.",
        "mineMass": 0.4,
        "mineDiameter": 25,
        "mineHeight": 278,
        "casing": "Teras, roheline",
        "delivery": "Vile kuuldav kuni 500 m; 12–15 valgusraketti põlevad 10–12 s ja tõusevad 5–15 m; isehävitus ja tõstmisvastane kaitse puuduvad"
      },
      "sources": [
        {"name": "Sappers.org: SM", "url": "https://sappers.org/uk/dovidnyk/miny/syhnalni/sm", "retrieved": "2026-10-23"}
      ]
    },
    "MSK-40": {
      "status": "unverified",
      "values": {
        "purpose": "Kombineeritud signaal- ja valgustusmiin.",
        "mineMass": 1,
        "mineDiameter": 40,
        "mineHeight": 350,
        "casing": "Teras, roheline",
        "delivery": "MSK-40P lisab kaks valgus-helitähte; neli värvilist signaaltähte (punane, roheline, valge, sinine) ja kümme valgustustähte tõusevad umbes 30 m kõrgusele; valgustab 170–200 m raadiuses 23–28 s; vile kuuldav 500–800 m; kasutusiga 10 aastat"
      },
      "sources": [
        {"name": "Sappers.org: MSK-40", "url": "https://sappers.org/uk/dovidnyk/miny/syhnalni/msk-40", "retrieved": "2026-10-23"}
      ]
    },
    "UDSh": {
      "status": "unverified",
      "values": {
        "purpose": "Universaalne suitsuküünal suitsukatete loomiseks.",
        "delivery": "Kasutavad RKBK-väed"
      },
      "sources": [
        {"name": "Metis (Fenix Insight): DM-11 smoke pot", "url": "https://metis.fenixinsight.com/munition/miscellaneous/dm-11-smoke-pot", "retrieved": "2026-10-23"}
      ]
    },
    "PTM-3": {
      "status": "unverified",
      "values": {
        "purpose": "Hajutatav magnetsüütajaga tankitõrjemiin, mis läbistab soomuki põhja ja hävitab veermiku; isehävitusega.",
        "mineMass": 5,
        "mineLength": 330,
        "mineWidth": 84,
        "explosiveMass": 1800,
        "explosiveType": "TG-40",
        "penetration": "70 mm",
        "delivery": "Kaugmineerimine: UMZ, kopterid, kantav komplekt PKM; isehävitus 16–24 h"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/2d1dffeab35fc704d693a6e4e781a906", "retrieved": "2026-10-28"}
      ]
    },
    "PTM-4": {
      "status": "unverified",
      "values": {
        "purpose": "Hajutatav magnetilise lähedussüütajaga tankitõrjemiin, programmeeritava isehävitusega.",
        "casing": "Poolsilindrikujuline teraskorpus",
        "fuze": "VT-14 programmeeritav isehävitusega magnetiline lähedussüütaja",
        "delivery": "Kaugmineerimine kassetis KPTM-4 (2 miini, 9,6 kg), sh kopteritelt; lahinguvalmis 40–80 s pärast; isehävitus 8 h – 120 päeva"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTM-4", "url": "https://odin.t2com.army.mil/WEG/Asset/77333bc0485aa58e061490136de54911", "retrieved": "2026-10-28"}
      ]
    },
    "PTKM-1R": {
      "status": "unverified",
      "values": {
        "purpose": "Pealtründav tankitõrjemiin: akustilised ja seismilised andurid tuvastavad sihtmärgi ja laeng tulistatakse soomuki katusele.",
        "mineMass": 19.9,
        "mineDiameter": 220,
        "mineHeight": 510,
        "explosiveMass": 2800,
        "penetration": "70 mm",
        "delivery": "Isehävitus 1–10 päeva"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTKM-1R", "url": "https://odin.t2com.army.mil/WEG/Asset/775ff50993d8834af599b987cd35e177", "retrieved": "2026-10-28"}
      ]
    },
    "BMP-1AM Basurmanin": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2024},
        "purpose": "Jalaväe lahingumasin, BMP-1 moderniseeritud versioon.",
        "combatWeight": 14.3,
        "length": 6.735,
        "width": 2.94,
        "engine": "UTD-20S1 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedWater": 7,
        "range": 550,
        "amphibious": true,
        "caliber": 30,
        "mainArmament": "30 mm 2A72 automaatkahur (300 lasku), stabiliseeritud; tõusunurk −5…+70°",
        "atgm": "Puudub",
        "rateOfFire": 330,
        "secondaryArmament": "7,62 mm PKTM koaksiaalne (2000 lasku); 902V „Tutša“ suitsugranaadiheitjad tornil",
        "cannonRangeSoft": 4000,
        "mgRange": 1500,
        "sensors": "TKN-4GA kombineeritud päeva-/öösihik stabiliseeritud vaateväljaga; õhusihtmärkide sihik; raadio R-168-25U-2",
        "armor": "Kere nagu BMP-1 (keevitatud teras kuni 19 mm); BTR-82A torn"
      },
      "sources": [
        {"name": "GlobalSecurity: BMP-1AM Basurmanin", "url": "https://www.globalsecurity.org/military/world/russia/bmp-1am.htm", "retrieved": "2026-10-30"},
        {"name": "Tank Encyclopedia: BMP-1AM", "url": "https://tank-afv.com/modern/Russia/BMP-1AM.php", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: Russian forces receive new infantry fighting vehicles BMP-3 and BMP-1AM (2024)", "url": "https://armyrecognition.com/news/army-news/2024/russian-forces-receive-new-infantry-fighting-vehicles-bmp-3-and-bmp-1am", "retrieved": "2026-11-25"}
      ]
    },
    "BMP-2M Berežok": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurbrigaad",
        "productionStatus": {"status": ["stocks"], "asOf": 2023},
        "purpose": "Jalaväe lahingumasin, BMP-2 moderniseeritud versioon.",
        "crew": "3 + 7",
        "combatWeight": 16,
        "length": 6.73,
        "width": 3.15,
        "height": 2.45,
        "engine": "UTD-23 ülelaadimisega 6-silindriline diisel",
        "power": 360,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 44,
        "maxSpeedWater": 7,
        "range": 600,
        "amphibious": true,
        "caliber": 30,
        "mainArmament": "Lahingumoodul B05YA01 „Berežok“: 30 mm 2A42 automaatkahur (500 lasku)",
        "atgm": "4 × 9M133 Kornet (AT-14 Spriggan) kahel kaksikkanderaamil torni külgedel; variandil sb4-2 Konkurs-M; mõnel masinal lisaks 2 × 9M120 Ataka-T katusel",
        "atgmPenetration": "Kornet: 9M133 kuni 1000 mm, 9M133M-2 1100–1300 mm (RHA, aktiivsoomuse taga)",
        "rateOfFire": 500,
        "secondaryArmament": "30 mm AG-30M/AG-17 automaatgranaadiheitja torni taga (300 granaati); 7,62 mm PKTM koaksiaalne (2000 lasku)",
        "atgmRange": {"min": 100, "max": 5500},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "mgRange": 1500,
        "sensors": "Mitmekanaliline laskuri sihik (termokaamera, laserkaugusmõõtja, JTTR-juhtimiskanal), relvastuse stabilisaator ja ballistikaarvuti; avastus 5000 m päeval, 3000 m öösel; ülema sihik 1PZ-13",
        "armor": "BMP-2 kere ja lisasoomus: peab tootja andmetel vastu 12,7 mm B-32 kuulidele ja kumulatiivrakettidele; TBK-kaitse"
      },
      "notes": {
        "mainArmament": "Teistel andmetel 2A72; Berežoki moodulil on tavaliselt 2A42."
      },
      "sources": [
        {"name": "Army Technology: BMP-2M Infantry Fighting Vehicle", "url": "https://www.army-technology.com/projects/bmp-2m-infantry-fighting-vehicle/", "retrieved": "2026-10-30"},
        {"name": "GlobalSecurity: BMP-2M", "url": "https://www.globalsecurity.org/military/world/russia/bmp-2m.htm", "retrieved": "2026-10-30"},
        {"name": "Focus.ua: Remont i modernizatsiya – rossiyskie oruzheyniki snabzhayut armiyu BMP-2M uskorennymi tempami (Nov 2023)", "url": "https://focus.ua/voennye-novosti/607795-remont-i-modernizaciya-rossiyskie-oruzheyniki-snabzhayut-armiyu-bmp-2m-uskorennymi-tempami", "retrieved": "2026-11-25"},
        {"name": "Defence24: Przeciwpancerne BMP-2M w brygadzie doświadczonej na Ukrainie", "url": "https://defence24.pl/przeciwpancerne-bmp-2m-w-brygadzie-doswiadczonej-na-ukrainie", "retrieved": "2026-11-26"}
      ]
    },
    "Alpinist klass": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Balti laevastik",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Luurelaevaks ümber ehitatud ahtertraaler.",
        "standardDisplacement": 1020,
        "fullDisplacement": 1238,
        "length": 53.7,
        "width": 10.7,
        "draft": 4.2,
        "engine": "8NVD-48A-2U diisel, 1 sõukruvi",
        "crew": "58",
        "sensors": "Raadio- ja elektroonilise luure seadmed (kuni umbes 900 km); pinnaotsingu- ja navigatsiooniradar Don-2; kerel asuv hüdrolokaator Paltus-MP"
      },
      "sources": [
        {"name": "CMO DB: SSV Alpinist [Pr.503R]", "url": "https://cmo-db.com/en/cmo/ship/451", "retrieved": "2026-10-30"},
        {"name": "Military Periscope: Al'pinist (AGI) class", "url": "https://www.militaryperiscope.com/weapons/ships/intelligence-collection/alpinist-agi-class/", "retrieved": "2026-10-30"},
        {"name": "Wikipedia: List of active Russian Navy ships", "url": "https://en.wikipedia.org/wiki/List_of_active_Russian_Navy_ships", "retrieved": "2026-11-25"},
        {"name": "Military Periscope: Al'pinist (AGI) class", "url": "https://www.militaryperiscope.com/weapons/naval-warfare/intelligence-collection/alpinist-agi-class/overview/", "retrieved": "2026-11-25"}
      ]
    },
    "Zernika-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Ründedroon, mis tabab lõppfaasi isesihtimisega sihtmärgi ka side ja GPS-i häirimise korral.",
        "cruiseSpeed": 75,
        "serviceCeiling": 1500,
        "ferryRange": 80,
        "warheadMass": 3.5,
        "specialEquipment": "Kildlõhkepea „Kaplja“"
      },
      "sources": [
        {"name": "United24 Media: Russia hit Kharkiv with a new drone called Chernika", "url": "https://united24media.com/latest-news/russia-hit-kharkiv-with-a-new-drone-called-chernika-heres-what-we-know-about-it-9500", "retrieved": "2026-10-30"},
        {"name": "Defence24: Charków pod ostrzałem nowym typem drona z Rosji", "url": "https://defence24.pl/wojna-na-ukrainie-raport-specjalny-defence24/charkow-pod-ostrzalem-nowym-typem-drona-z-rosji", "retrieved": "2026-10-30"},
        {"name": "Militarnyi: Russia Uses Chernika Drone to Strike Kharkiv for the First Time", "url": "https://militarnyi.com/en/news/russia-uses-chernika-drone-to-strike-kharkiv-for-the-first-time/", "retrieved": "2026-11-25"}
      ]
    },
    "Skat-450M": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Süvaluuredroon, mis edastab sihtmärkide koordinaate kaugrelvadele, sh Iskander-M-ile.",
        "sensors": "Optiline kaamera ja termokaamera",
        "specialEquipment": "Töötemperatuur −45…+45 °C"
      },
      "sources": [
        {"name": "SOFX: Ukraine downs rare $400,000 Skat-450M", "url": "https://archive.sofx.com/ukraine-downs-rare-400000-skat-450m-days-after-russia-promoted-the-drones-combat-record/", "retrieved": "2026-10-30"},
        {"name": "Ukrainska Pravda: Ukrainian troops down rare Russian Skat-450M drone", "url": "https://www.pravda.com.ua/eng/news/2026/03/23/8026845", "retrieved": "2026-10-30"},
        {"name": "EDR Magazine: Skat-350M reconnaissance UAV", "url": "https://www.edrmagazine.eu/?p=39101", "retrieved": "2026-10-30"}
      ]
    },
    "Supercam S180": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Väike taktikaline luuredroon.",
        "wingspan": 1.8,
        "payload": 5,
        "engine": "Elektrimootor, kahelabaline propeller",
        "endurance": 2,
        "sensors": "Full HD videokaamera, täiskaader-fotokaamera või HD termokaamera",
        "specialEquipment": "Lendav tiib; start elastse või pneumaatilise katapuldiga, maandumine langevarjuga"
      },
      "sources": [
        {"name": "EDR Magazine: Dubai Airshow 2025 – Supercam S180", "url": "https://www.edrmagazine.eu/dubai-airshow-2025-unmanned-systems-group-unveiled-the-supercam-s180-reconnaissance-uav", "retrieved": "2026-10-30"},
        {"name": "Militarnyi: Russia Demonstrates Supercam S180 Recon Drone With Claimed Anti-FPV System (2026)", "url": "https://militarnyi.com/en/news/russia-demonstrates-supercam-s180-recon-drone-with-claimed-anti-fpv-system/", "retrieved": "2026-11-27"}
      ]
    },
    "Eleron-16": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Droon luureks, jälgimiseks, tule korrigeerimiseks ja vastase elektroonika häirimiseks.",
        "maxTakeoffWeightKg": 20,
        "payload": 6,
        "engine": "Akutoitel elektrimootor (ka kütuseelemendiga variant)",
        "cruiseSpeed": 65,
        "ferryRange": 150,
        "specialEquipment": "Pardi skeem, nooltiib allapoole suunatud otstega, kaks vertikaalstabilisaatorit; tiiva all kinnitused konteineritele"
      },
      "notes": {
        "cruiseSpeed": "2018. aasta katse väärtus, mitte maksimaalne.",
        "ferryRange": "2018. aasta katselennu pikkus."
      },
      "sources": [
        {"name": "Army Recognition: Ukrainian forces capture Russian Eleron T-16 UAV", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/ukrainian-forces-captures-first-latest-generation-russian-eleron-t-16-uav", "retrieved": "2026-10-30"},
        {"name": "Militarnyi: Ukrainian border guards seized newest Russian T-16 UAV", "url": "https://mil.in.ua/en/news/ukrainian-border-guards-seized-newest-russian-t-16-uav", "retrieved": "2026-10-30"}
      ]
    },
    "Parodija": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Peibutusdroon, mis jäljendab radaril Geran/Shahedi peegeldust ja koormab õhutõrjet.",
        "specialEquipment": "Lõhkepead ei ole; Luneburgi lääts"
      },
      "sources": [
        {"name": "Ukrainska Pravda: Russia uses Parodiya decoy drones again", "url": "https://www.pravda.com.ua/eng/news/2026/05/03/8032918/index.amp", "retrieved": "2026-10-30"}
      ]
    },
    "Ajaks V300": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Vertikaalstardiga luuredroon, mille juhtimine ei sõltu GPS-signaalist.",
        "wingspan": 3,
        "maxTakeoffWeightKg": 20,
        "payload": 6,
        "engine": "Elektrimootorid (nii vertikaalstardiks kui marsilennuks)",
        "maxSpeed": 75,
        "cruiseSpeed": 65,
        "serviceCeiling": 4000,
        "controlRange": 100,
        "ferryRange": 450,
        "endurance": 7,
        "sensors": "Termokaamera, kaugusmõõtja, päevakaamera",
        "specialEquipment": "Vajab 5 × 5 m platsi; ettevalmistus 5–10 min"
      },
      "sources": [
        {"name": "Cyclowiki: Аякс V300", "url": "https://cyclowiki.org/wiki/%D0%90%D1%8F%D0%BA%D1%81_V300", "retrieved": "2026-10-30"}
      ]
    },
    "Kamaz-65225": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Veok raskete roomikmasinate veoks poolhaagisel.",
        "driveConfig": "6×6",
        "loadCapacity": 17000,
        "towingCapacity": 70000,
        "engine": "KamAZ-740.37-400 V8 diisel",
        "power": 400,
        "maxSpeedRoad": 70
      },
      "notes": {
        "loadCapacity": "Lubatud koormus sadulale.",
        "towingCapacity": "Teistel andmetel poolhaagise täismass alla 48 t."
      },
      "sources": [
        {"name": "GlobalSecurity: KAMAZ trucks", "url": "https://www.globalsecurity.org/military/world/russia/kamaz-trucks.htm", "retrieved": "2026-10-30"}
      ]
    },
    "UAZ-3153 Hunter": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "driveConfig": "4×4",
        "combatWeight": 1.8,
        "length": 4.1,
        "width": 2.01,
        "height": 2.03,
        "engine": "2,7 l reaskneljane bensiinimootor (ka 2,2–2,4 l diisel)",
        "groundClearance": 210
      },
      "notes": {
        "driveConfig": "UAZ-3153 on UAZ-3151 pika teljevahega versioon; Hunter (UAZ-315195) on selle edasiarendus. Andmed on Hunteri kohta."
      },
      "sources": [
        {"name": "VehicleSizes: UAZ Hunter (315195)", "url": "https://www.vehiclesizes.com/cars/uaz/hunter/hunter-315195-off-road-vehicle-2003", "retrieved": "2026-10-30"},
        {"name": "MarkLines: UAZ, Russia resumes Hunter SUV production (2025)", "url": "https://www.marklines.com/en/news/333624", "retrieved": "2026-11-27"}
      ]
    },
    "Ulan": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kerge lahtine maastikusõiduk (bagi) rindelogistikaks.",
        "seats": "5 (2 kabiinis, 3 taga)",
        "combatWeight": 0.62,
        "loadCapacity": 600,
        "power": 85,
        "maxSpeedRoad": 85,
        "range": 320,
        "mainArmament": "Kinnituskohad relvadele, nt 2 × 7,62 mm PKP „Petšeneg“",
        "specialEquipment": "Ühe istmereaga kabiin ja pikapi lastiplatvorm, lisariiul kapotil; mahutab 2 haavatut kanderaamil"
      },
      "notes": {
        "seats": "Osa allikaid omistab need andmed Ulan-2-le."
      },
      "sources": [
        {"name": "Euromaidan Press: 85 km/h, 600 kg payload – Ulan", "url": "https://euromaidanpress.com/2026/02/09/85-km-h-600-kg-payload-and-defenseless-ukrainian-drones-destroy-russias-logistics-platform/", "retrieved": "2026-10-30"},
        {"name": "Militarnyi: Альтернатива китайським «гольфкарам»: росіяни нарощують використання всюдиходів «Улан» (2025)", "url": "https://militarnyi.com/uk/news/alternatyva-kytajskym-golfkaram-rosiyany-naroshhuyut-vykorystannya-vsyudyhodiv-ulan/", "retrieved": "2026-11-27"}
      ]
    },
    "Ulan-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kerge maastikutransporter isikkoosseisu, laskemoona ja varustuse veoks.",
        "chassis": "GAZ Sobol",
        "driveConfig": "4×4",
        "specialEquipment": "Rindel lisatud keevitatud raam, kummikilbid kildude vastu, terasribid akendel, uste asemel ketid; katusel droonivastane häireseade."
      },
      "sources": [
        {"name": "Forces News: Chains, grilles and jammers – Russia's Ulan-2", "url": "https://www.forcesnews.com/russia/chains-grilles-and-jammers-russias-ulan-2-and-future-british-army-land-rover", "retrieved": "2026-10-30"},
        {"name": "Euromaidan Press: Ukrainian forces destroy Russia's newest off-road vehicle Ulan-2 near Pokrovsk (2025)", "url": "https://euromaidanpress.com/2025/12/26/ukrainian-forces-destroy-russias-newest-off-road-vehicle-ulan-2-near-pokrovsk-video/", "retrieved": "2026-11-27"}
      ]
    },
    "ZIL-131": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Üldotstarbeline sõjaväeveok.",
        "seats": "3 (kabiinis)",
        "driveConfig": "6×6",
        "combatWeight": 6.7,
        "loadCapacity": 5000,
        "towingCapacity": 5000,
        "length": 7.04,
        "width": 2.5,
        "height": 2.48,
        "engine": "ZIL-130 V8 bensiinimootor, karburaator, 6,0 l",
        "maxSpeedRoad": 80,
        "fuelCapacity": 340,
        "groundClearance": 330,
        "fording": 1.4,
        "gradient": 60
      },
      "notes": {
        "combatWeight": "Tühimass.",
        "loadCapacity": "Maanteel; maastikul 3500 kg."
      },
      "sources": [
        {"name": "Wikipedia: ZIL-131", "url": "https://en.wikipedia.org/wiki/ZIL-131", "retrieved": "2026-10-30"}
      ]
    },
    "URAL-4320": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Üldotstarbeline maastikuveok lasti, inimeste ja haagiste veoks.",
        "seats": "3 kabiinis + 27 kastis",
        "driveConfig": "6×6",
        "combatWeight": 15.3,
        "loadCapacity": 6000,
        "towingCapacity": 11500,
        "length": 7.366,
        "width": 2.5,
        "height": 2.715,
        "engine": "YaMZ-238M2 V8 diisel, 14,9 l",
        "power": 240,
        "maxSpeedRoad": 82
      },
      "notes": {
        "combatWeight": "Täismass."
      },
      "sources": [
        {"name": "Wikipedia: Ural-4320", "url": "https://en.wikipedia.org/wiki/Ural-4320", "retrieved": "2026-10-30"}
      ]
    },
    "Taifun-VDV/Naparnik K-4386, 4x4": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Miinikindel ratassoomuk lahinguülesannete toetuseks, isikkoosseisu ja lasti veoks ning meditsiiniliseks toeks.",
        "crew": "8",
        "driveConfig": "4×4",
        "combatWeight": 13,
        "length": 6,
        "width": 2.54,
        "height": 2.4,
        "engine": "Diisel, 9-käiguline käigukast",
        "power": 450,
        "maxSpeedRoad": 130,
        "range": 1000,
        "fording": 1.75,
        "airDroppable": true,
        "mainArmament": "Kaugjuhitav lahingumoodul 360° kilbiga: 30 mm 2A42 automaatkahur + 7,62 mm PKTM (BM-30-D); muud variandid kergemate moodulitega",
        "armor": "Kere: OTT tase 4 (kuulid ja suurtükikillud); miinikaitse OTT tase 3"
      },
      "notes": {
        "combatWeight": "Täismass; tühimass 11 t."
      },
      "sources": [
        {"name": "Army Technology: Typhoon-VDV K-4386", "url": "https://www.army-technology.com/projects/typhoon-vdv-k-4386/", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: New K-4386 Typhoon-VDV 4x4 armored vehicles in Ukraine for Russian airborne troops", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/new-k-4386-typhoon-vdv-4x4-armored-vehicles-in-ukraine-for-russian-airborne-troops", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russian airborne troops receives new armored vehicles", "url": "https://defence-blog.com/?p=59702", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Typhoon (armored fighting vehicles family)", "url": "https://en.wikipedia.org/wiki/Typhoon_(armored_fighting_vehicles_family)", "retrieved": "2026-11-27"}
      ]
    },
    "Taifun-U Ural-53099": {
      "status": "unverified",
      "values": {
        "purpose": "Miinikindel soomusauto.",
        "crew": "3 + 8",
        "driveConfig": "4×4",
        "combatWeight": 16,
        "loadCapacity": 2000,
        "towingCapacity": 5000,
        "engine": "YaMZ-5367 turbodiisel, automaatkäigukast",
        "power": 440,
        "maxSpeedRoad": 100,
        "range": 1000,
        "mainArmament": "Kaugjuhitav relvamoodul (näidisel Kalashnikov MBDU)",
        "armor": "STANAG 4569 tase III (7,62×54 mm B-32 soomust läbistav kuul), suurendatav; täiskeevitatud kere; TBK-filterventilatsioon"
      },
      "notes": {
        "combatWeight": "Täismass. Teistel andmetel 14,5 t.",
        "power": "Teistel andmetel 312 hj."
      },
      "sources": [
        {"name": "Army Recognition: Ural-53099 Taifun-U", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2015/ural-of-russia-has-developed-new-4x4-mrap-armoured-vehicle-ural-53099-taifun-u-10312152", "retrieved": "2026-10-30"},
        {"name": "Trucksplanet: Ural 53099 Typhoon-U-T", "url": "https://trucksplanet.com/catalog/model.php?id=2759", "retrieved": "2026-10-30"}
      ]
    },
    "Taifun-U Ural-63095, 6x6": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Moodulpõhiste miinikindlate soomukite perekond; kasutatakse luure-, juhtimis-, staabi-, elektroonilise võitluse, side- ja sanitaarmasinana.",
        "crew": "3 + 16",
        "driveConfig": "6×6",
        "combatWeight": 24,
        "length": 9.5,
        "width": 2.6,
        "height": 3.5,
        "engine": "YaMZ-5367 turbodiisel",
        "power": 450,
        "maxSpeedRoad": 105,
        "range": 1800,
        "mainArmament": "Kaugjuhitav relvamoodul: 7,62 mm kuulipilduja või 14,5 mm KPV; laskeavad",
        "armor": "Teras-keraamiline komposiitsoomus ja lamineeritud klaas: kaitse 14,5 mm soomust läbistava kuuli ja kuni 8 kg lõhkeaine vastu põhja all; isetihenduvad rehvid"
      },
      "notes": {
        "crew": "Teistel andmetel ka 3 + 12 ja 2 + 14."
      },
      "sources": [
        {"name": "Wikipedia: Ural Typhoon", "url": "https://en.wikipedia.org/wiki/Ural_Typhoon", "retrieved": "2026-10-30"},
        {"name": "Warwheels: Typhoon-U Ural-63095", "url": "https://warwheels.net/Typhoon-U-Ural63095-63099mrapINDEX.html", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: Russian reconnaissance and special forces units will receive Typhoon-K and Typhoon-U MRAPs", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2016/russian-reconnaissance-and-special-forces-units-will-receive-typhoon-k-and-typhoon-u-mraps-1270516", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Typhoon (armored fighting vehicles family)", "url": "https://en.wikipedia.org/wiki/Typhoon_(armored_fighting_vehicles_family)", "retrieved": "2026-11-27"}
      ]
    },
    "Kamaz-5350 Z-STS Akhmat": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Tšetšeenia üksus",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Tšetšeenia julgeolekujõudude soomusauto jalaväe ja lasti veoks.",
        "crew": "10",
        "chassis": "KamAZ-5350 (Remdiesel)",
        "driveConfig": "6×6",
        "engine": "KamAZ-740.13.260 turbodiisel",
        "mainArmament": "Kuulipilduja enesekaitseks",
        "specialEquipment": "Töötemperatuur −50…+50 °C, kuni 4500 m kõrgusel; transporditav Il-76 ja An-124-ga"
      },
      "sources": [
        {"name": "Defence24: Czeczenia kupi rosyjskie MRAP-y", "url": "https://defence24.pl/polityka-obronna/czeczenia-kupi-rosyjskie-mrapy", "retrieved": "2026-10-30"},
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-10-30"},
        {"name": "Defence24: Rosjanie wysyłają kolejne wozy kadyrowców na Ukrainę", "url": "https://defence24.pl/wojna-na-ukrainie-raport-specjalny-defence24/rosjanie-wysylaja-kolejne-wozy-kadyrowcow-na-ukraine", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Ukrainian forces destroy two Chechen Z-STS Akhmat armored vehicles in Kursk region", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/ukrainian-forces-destroy-two-chechen-z-sts-akhmat-armored-vehicles-in-kursk-region", "retrieved": "2026-11-25"}
      ]
    },
    "AMN-590951 Spartak (VPK-Ural)": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Rosgvardia; Siseväed; Eriüksus",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mitmeotstarbeline ratassoomuk.",
        "crew": "3 + 6",
        "driveConfig": "4×4",
        "combatWeight": 14.5,
        "loadCapacity": 1500,
        "engine": "Turbodiisel, 5-käiguline manuaalkäigukast",
        "power": 312,
        "maxSpeedRoad": 90,
        "range": 1000,
        "mainArmament": "12,7 mm raskekuulipilduja avatud ühekohalises tornis 360° kilbiga",
        "armor": "Lisasoomus ees ja katusel; peab vastu 6 kg TNT plahvatusele põhja ja rataste all"
      },
      "sources": [
        {"name": "Army Recognition: Russian army receives AMN-590951", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2022/russian-army-continues-to-receive-new-combat-vehicles-such-as-the-amn-590951", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: Iran secretly received Spartak 4x4 MRAP armored vehicles from Russia for border patrols", "url": "https://armyrecognition.com/news/army-news/2025/iran-secretly-received-spartak-4x4-mrap-armored-vehicles-from-russia-for-border-patrols", "retrieved": "2026-11-25"}
      ]
    },
    "R-166-0,5": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sideüksus; TBK-kaitseväed",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Sidesoomuk raadioside pidamiseks sidesõlme koosseisus või iseseisvalt, ka raadiohäirete korral.",
        "chassis": "UNSh / K1Sh1 (BTR-80)",
        "driveConfig": "8×8",
        "amphibious": true,
        "commsFrequency": "KV ja UKV"
      },
      "sources": [
        {"name": "Militarnyi: The Armed Forces seized the Russian R-166-0.5 radio station", "url": "https://militarnyi.com/en/news/the-armed-forces-had-seized-the-russian-r-166-0-5-radio-station-in-the-sumy-region/", "retrieved": "2026-10-30"},
        {"name": "Shephard: Russian Army receives Artek systems", "url": "https://www.shephardmedia.com/news/digital-battlespace/russian-army-receives-artek-modernised-stations", "retrieved": "2026-11-25"},
        {"name": "Oryx: Documenting Russian Equipment Losses", "url": "https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html", "retrieved": "2026-11-27"}
      ]
    },
    "BMD-1Ksh": {
      "status": "unverified",
      "values": {
        "purpose": "Õhudessantvägede juhtimis- ja staabisoomuk.",
        "typicalUnit": "Õhudessantpolk; Õhudessantpataljon",
        "crew": "6",
        "chassis": "BTR-D",
        "combatWeight": 8.7,
        "length": 5.88,
        "width": 2.63,
        "height": 2.0,
        "engine": "5D20-240 V6 diisel",
        "power": 240,
        "fuelCapacity": 280,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 35,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "airDroppable": true,
        "mainArmament": "Puudub (kere kuulipildujad ja laskeavad eemaldatud)",
        "specialEquipment": "Navigatsioonisüsteem TNA-3; piirdeantennid kere ümber ja piitsantennid",
        "radioSets": "2 × R-123M, 2 × R-111 ja R-130"
      },
      "notes": {
        "height": "Vedrustus tõstetud; langetatult 1,65 m.",
        "maxSpeedWater": "9–10 km/h."
      },
      "sources": [
        {"name": "WeaponSystems.net: KShM-D", "url": "https://weaponsystems.net/system/1028-KShM-D", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: BTR-D (variandid)", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-25"}
      ]
    },
    "R-416GM Granit-M": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Häirekindel digitaalne raadioreleejaam (kasutusel alates 2018. aastast) strateegilise ja operatiivtasandi välisidevõrkudele.",
        "typicalUnit": "Sõjaväeringkonna sideüksus",
        "specialEquipment": "Andmeedastus 4–311 Mbit/s; liikumise ajal ei tööta; töötemperatuur −50…+40 °C",
        "commsFrequency": "Dupleks 5,6–6,2 GHz ja 7,9–8,4 GHz",
        "commsRange": "Hüpe kuni 40 km mõõdukalt liigendatud maastikul",
        "commsMastHeight": 30
      },
      "notes": {
        "commsMastHeight": "Antenni kõrgus kuni 30 m."
      },
      "sources": [
        {"name": "Euromaidan Press: Russians lose state-of-the-art R-416GM", "url": "https://euromaidanpress.com/?p=277187", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: R-416G-MS", "url": "https://origin.armedconflicts.com/-t296839", "retrieved": "2026-10-30"},
        {"name": "RBC-Ukraine: R-416G-MS destroyed (2026)", "url": "https://newsukraine.rbc.ua/news/rare-600k-russian-communications-station-1774530597.html", "retrieved": "2026-11-25"},
        {"name": "Newsweek: Russia's Newest State-of-the-Art Radar Destroyed in Rare Ukraine Footage (2024)", "url": "https://www.newsweek.com/russian-radar-destroyed-drone-ukraine-war-footage-1912462", "retrieved": "2026-11-27"}
      ]
    },
    "R-419L1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Armee sideüksus",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Digitaalne raadioreleejaam magistraalliinidele ja kaabelliinide asendamiseks taktikalise ja operatiivtasandi välisidesüsteemides.",
        "crew": "4",
        "chassis": "KamAZ-4350",
        "driveConfig": "4×4",
        "maxSpeedRoad": 100,
        "specialEquipment": "Andmeedastus kuni 8,448 Mbit/s",
        "commsFrequency": "390–645 MHz ja 1550–1850 MHz",
        "emplacementTime": "Kuni 35 min",
        "powerSupply": "2 generaatorit AD4-T400-1VM2 + akupuhver, autonoomia vähemalt 48 h"
      },
      "sources": [
        {"name": "Army Recognition: R-419L1 (šassii ja otstarve)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2019/russian-eastern-district-gets-r-419l1-communication-stations", "retrieved": "2026-11-10"},
        {"name": "Army Recognition: Russian Central Military District signal units receive advanced hardware (Dec 2019)", "url": "https://armyrecognition.com/archives/archives-land-defense/land-defense-2019/russian-central-military-district-signal-units-receive-advanced-hardware", "retrieved": "2026-11-25"},
        {"name": "Oryx: Documenting Russian Equipment Losses", "url": "https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html", "retrieved": "2026-11-27"}
      ]
    },
    "RS-24 Jars / Topol-M": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Strateegiliste raketivägede raketidiviis",
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Mandritevaheline ballistiline rakett mitme tuumalõhkepeaga; paigutatud liikuvatele stardiseadmetele ja raketišahtidesse.",
        "crew": "3",
        "chassis": "MZKT-79221 16×16 (liikuv) või raketišaht",
        "missileLength": 22.5,
        "missileDiameter": 2,
        "launchWeight": 49600,
        "firingRange": 11000,
        "missileSpeed": "Umbes Mach 25",
        "guidance": "Inertsiaalne + GLONASS",
        "specialEquipment": "Kolmeastmeline tahkekütusrakett. Jars: mitu iseseisvalt sihitavat lõhkepead, teistel andmetel 3 × 200 kt, hinnanguliselt kuni 4"
      },
      "notes": {
        "launchWeight": "Jarsi andmed. Topol-M: umbes 47 t, pikkus umbes 22,7 m, läbimõõt umbes 1,86 m, üks lõhkepea."
      },
      "sources": [
        {"name": "Wikipedia: RS-24 Yars", "url": "https://en.wikipedia.org/wiki/RS-24_Yars", "retrieved": "2026-10-30"},
        {"name": "Wikipedia: Strategic Rocket Forces", "url": "https://en.wikipedia.org/wiki/Strategic_Rocket_Forces", "retrieved": "2026-11-25"}
      ]
    },
    "K-300P Bastion-P/SS-C-5 Stooge": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Rannakaitse raketibrigaad",
        "purpose": "Liikuv rannakaitse-raketikompleks pinnalaevade tõrjeks.",
        "crew": "3",
        "chassis": "MZKT-7930 8×8",
        "missileLength": 8.9,
        "missileDiameter": 0.7,
        "launchWeight": 3000,
        "warheadMass": 250,
        "firingRange": 300,
        "missileSpeed": "Mach 2,5 (vedelkütusel otsevoolu-reaktiivmootor, tahkekütusekiirendi)",
        "guidance": "Algfaasis GLONASS, keskfaasis INS + raadiokõrgusmõõtja, lõppfaasis aktiivne radar",
        "specialEquipment": "Rakett P-800 Oniks, 2 tk stardiseadmel; patareis tavaliselt 4 stardiseadet + juhtimis-, toetus- ja laadimismasinad; laskevalmis 5 min jooksul pärast peatumist; horisondi-tagune radar Predel-E"
      },
      "notes": {
        "firingRange": "Kõrge–madal trajektoor; madal–madal 120 km."
      },
      "sources": [
        {"name": "Wikipedia: K-300P Bastion-P", "url": "https://en.wikipedia.org/wiki/K-300P_Bastion-P", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: Russian Navy strengthens its coastal missile brigades with Bal and Bastion systems", "url": "https://www.armyrecognition.com/archives/archives-naval-defense/naval-defense-2018/russian-navy-strengthens-its-coastal-missile-brigades-with-bal-and-bastion-systems", "retrieved": "2026-11-25"}
      ]
    },
    "3K60 Bal/SSC-6 Sennight": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Rannakaitse raketibrigaad",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Rannakaitse laevavastane raketikompleks.",
        "chassis": "MZKT-7930 8×8",
        "missileLength": 4.4,
        "missileDiameter": 0.42,
        "launchWeight": 610,
        "warheadMass": 145,
        "firingRange": 120,
        "missileSpeed": "Mach 0,8 (lendab lainete kohal)",
        "guidance": "Inertsiaalne, lõppfaasis aktiivne radar",
        "specialEquipment": "Rakett Kh-35, kuni 8 tk stardiseadmel; patareis juhtimismasin, 2 stardiseadet ja 2 laadimismasinat (pataljonis tavaliselt 2 patareid); lahinguvalmis alla 10 min"
      },
      "sources": [
        {"name": "Weapon Systems: 3K60 Bal", "url": "https://weaponsystems.net/system/140-3K60%20Bal", "retrieved": "2026-10-30"},
        {"name": "Army Recognition: Russian Navy strengthens its coastal missile brigades with Bal and Bastion systems", "url": "https://www.armyrecognition.com/archives/archives-naval-defense/naval-defense-2018/russian-navy-strengthens-its-coastal-missile-brigades-with-bal-and-bastion-systems", "retrieved": "2026-11-25"},
        {"name": "Forecast International: Russian Caspian Flotilla Receiving Bal Missile System (2020)", "url": "https://dsm.forecastinternational.com/2020/01/30/russian-caspian-flotilla-receiving-bal-missile-system/", "retrieved": "2026-11-27"}
      ]
    },
    "9T250": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Raketibrigaad",
        "purpose": "Iskanderi laadimismasin.",
        "crew": "2",
        "chassis": "MZKT-7930",
        "driveConfig": "8×8",
        "combatWeight": 40,
        "engine": "YaMZ-846 V8 diisel",
        "power": 503,
        "maxSpeedRoad": 70,
        "range": 1000,
        "fuelCapacity": 770
      },
      "sources": [
        {"name": "Truck Encyclopedia: 9K720 Iskander", "url": "https://truck-encyclopedia.com/modern/russia/9K720-iskander.php", "retrieved": "2026-10-30"},
        {"name": "Wikipedia: 9K720 Iskander", "url": "https://en.wikipedia.org/wiki/9K720_Iskander", "retrieved": "2026-11-26"}
      ]
    },
    "R-300KMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Borisoglebsk-2 kompleksi juhtimispunkt: automaatne raadioluure ja häirete jaotamine häirejaamadele.",
        "crew": "4",
        "chassis": "MT-LBu-M",
        "ewTargets": "Raadioside, sh sagedushüppega side (kuni 300 hüpet/s)",
        "ewMode": "Raadioluure ja häirejaamade juhtimine",
        "emplacementTime": "15 min"
      },
      "notes": {},
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"},
        {"name": "Defense Express: FPV drones destroy RB-301B Borisoglebsk-2", "url": "https://en.defence-ua.com/news/ukrainian_fpv_drones_destroy_enemys_rb_301b_borisoglebsk_2_ew_system_at_12_15_km_range_video-10811.html", "retrieved": "2026-10-30"},
        {"name": "U.S. Army OE: Russian Motorized Rifle Divisions To Gain An Electronic Warfare Battalion (2025)", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-27"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-27"}
      ]
    },
    "R-378BMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Borisoglebsk-2 kompleksi KV-raadioside häirejaam.",
        "chassis": "MT-LBu-M",
        "frequencyRange": "KL (HF)",
        "ewTargets": "Lühilaine (KL/HF) raadioside häirimine, sh sagedushüppega side",
        "ewMode": "Häirimine",
        "emplacementTime": "15 min"
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"},
        {"name": "U.S. Army OE: Russian Motorized Rifle Divisions To Gain An Electronic Warfare Battalion (2025)", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-27"}
      ]
    },
    "R-934BMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Borisoglebsk-2 kompleksi häirejaam lennunduse raadioside häirimiseks.",
        "chassis": "MT-LBu-M",
        "frequencyRange": "Lennunduse raadioside 100–150 ja 220–400 MHz; maapealne raadioside 100–400 MHz",
        "jammerPower": 500,
        "ewTargets": "Lennunduse raadioside (maa–õhk, õhk–õhk) häirimine",
        "ewMode": "Häirimine",
        "emplacementTime": "15 min"
      },
      "notes": {
        "frequencyRange": "Andmed kehtivad R-934B kohta."
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"},
        {"name": "U.S. Army OE: Russian Motorized Rifle Divisions To Gain An Electronic Warfare Battalion (2025)", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-27"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-27"}
      ]
    },
    "R-325UMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Borisoglebsk-2 kompleksi häirejaam taktikalise raadioside häirimiseks.",
        "chassis": "MT-LBu-M",
        "frequencyRange": "VHF/UHF",
        "ewTargets": "Taktikalise raadioside häirimine",
        "ewMode": "Häirimine",
        "emplacementTime": "15 min"
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"},
        {"name": "U.S. Army OE: Russian Motorized Rifle Divisions To Gain An Electronic Warfare Battalion (2025)", "url": "https://oe.t2com.army.mil/product/russian-motorized-rifle-divisions-to-gain-an-electronic-warfare-battalion/", "retrieved": "2026-11-27"}
      ]
    },
    "R-378B (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "R-330 Mandati KV-raadioside häirejaam.",
        "frequencyRange": "KL (HF)",
        "ewTargets": "Lühilaine raadioside häirimine",
        "ewMode": "Häirimine"
      },
      "sources": [
        {"name": "Valka.cz: R-330K Mandat", "url": "https://www.armedconflicts.com/-t70573", "retrieved": "2026-10-30"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Electronic Warfare in Contemporary Russian Military Thought (2025)", "url": "https://jamestown.org/electronic-warfare-in-contemporary-russian-military-thought/", "retrieved": "2026-11-27"}
      ]
    },
    "R-325U (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "R-330 Mandati KV/UKV-raadioside häirejaam.",
        "frequencyRange": "KL/UKL (HF/VHF)",
        "ewTargets": "Raadioside häirimine",
        "ewMode": "Häirimine"
      },
      "sources": [
        {"name": "Valka.cz: R-330K Mandat", "url": "https://www.armedconflicts.com/-t70573", "retrieved": "2026-10-30"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-25"},
        {"name": "Jamestown: Electronic Warfare in Contemporary Russian Military Thought (2025)", "url": "https://jamestown.org/electronic-warfare-in-contemporary-russian-military-thought/", "retrieved": "2026-11-27"}
      ]
    },
    "APS „Stechkin“": {
      "status": "unverified",
      "values": {
        "purpose": "9 mm automaatpüstol.",
        "caliber": 9,
        "cartridge": "9×18 mm Makarov",
        "weaponMass": 1.22,
        "weaponLength": 225,
        "barrelLength": 140,
        "muzzleVelocity": 340,
        "rateOfFire": 750,
        "effectiveRange": 50,
        "maxRangeM": 200,
        "magazine": "20-padruniline kaherealine salv"
      },
      "sources": [
        {"name": "Wikipedia: Stechkin automatic pistol", "url": "https://en.wikipedia.org/wiki/Stechkin_automatic_pistol", "retrieved": "2026-10-30"}
      ]
    },
    "GP-30 „Obuvka“": {
      "status": "unverified",
      "values": {
        "purpose": "Automaadi alla kinnitatav granaadiheitja AK-100 seeria automaatidele, GP-25 kergem versioon (kasutusel alates 1989. aastast).",
        "caliber": 40,
        "cartridge": "40 mm VOG-25 (kildgranaat), VOG-25P (põrkav), suitsugranaadid GRD",
        "weaponMass": 1.3,
        "weaponLength": 275,
        "barrelLength": 120,
        "muzzleVelocity": 76.5,
        "effectiveRange": 150,
        "maxRangeM": 400,
        "lethalRadius": 6
      },
      "sources": [
        {"name": "Wikipedia: GP-25", "url": "https://en.wikipedia.org/wiki/GP-25", "retrieved": "2026-10-30"}
      ]
    },
    "TBG-7V": {
      "status": "unverified",
      "values": {
        "purpose": "Termobaariline lask RPG-7-le elavjõu vastu ja asulalahinguks.",
        "caliber": 105,
        "cartridge": "105 mm termobaariline granaat",
        "weaponMass": 4.5,
        "effectiveRange": 200,
        "lethalRadius": 10
      },
      "sources": [
        {"name": "Defense Update: RPG-7 (TBG-7V)", "url": "https://defense-update.com/?p=14849", "retrieved": "2026-11-10"},
        {"name": "Wikipedia: RPG-7", "url": "https://en.wikipedia.org/wiki/RPG-7", "retrieved": "2026-11-10"}
      ]
    },
    "RShG-1": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne termobaariline ründelask kergete ja kergsoomustatud masinate, hoonete, sõjaliste rajatiste ja elavjõu vastu.",
        "caliber": 105,
        "cartridge": "105 mm termobaariline rakett",
        "weaponMass": 8,
        "weaponLength": 1135,
        "effectiveRange": 150,
        "explosiveMass": 1900,
        "lethalRadius": 10
      },
      "notes": {
        "effectiveRange": "Teistel andmetel sihik kuni 600 m."
      },
      "sources": [
        {"name": "Modern Firearms: RShG-1", "url": "https://modernfirearms.net/en/grenade-launchers/russia-grenade-launchers/rshg-1-eng/", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-A": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne väike termobaarilise raketiga leegiheitja.",
        "caliber": 72.5,
        "cartridge": "72,5 mm termobaariline rakett",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Teistel andmetel efektiivne 90 m, suurim 450 m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-D": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne suitsulaenguga (valge fosfor) leegiheitja.",
        "caliber": 72.5,
        "cartridge": "72,5 mm suitsulaeng (valge fosfor)",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Teistel andmetel efektiivne 90 m, suurim 450 m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-Z": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne süütelaenguga leegiheitja, MRO-A versioon.",
        "caliber": 72.5,
        "cartridge": "72,5 mm süütelaeng",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Teistel andmetel efektiivne 90 m, suurim 450 m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "RPO-D": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne suitsulaenguga leegiheitja, RPO-A versioon.",
        "caliber": 93,
        "cartridge": "93 mm suitsulaeng",
        "weaponMass": 11,
        "weaponLength": 920,
        "muzzleVelocity": 125,
        "effectiveRange": 1000,
        "minRangeM": 20
      },
      "sources": [
        {"name": "Wikipedia: RPO-A Shmel", "url": "https://en.wikipedia.org/wiki/RPO-A_Shmel", "retrieved": "2026-10-30"}
      ]
    },
    "RPO-Z": {
      "status": "unverified",
      "values": {
        "purpose": "Ühekordne süütelaenguga leegiheitja, RPO-A versioon.",
        "caliber": 93,
        "cartridge": "93 mm süütelaeng",
        "weaponMass": 11,
        "weaponLength": 920,
        "muzzleVelocity": 125,
        "effectiveRange": 1000,
        "minRangeM": 20
      },
      "sources": [
        {"name": "Wikipedia: RPO-A Shmel", "url": "https://en.wikipedia.org/wiki/RPO-A_Shmel", "retrieved": "2026-10-30"}
      ]
    },
    "R-431AM": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Raadioreleejaam taktikalise sidekompleksi Redut-2US koosseisus.",
        "chassis": "KamAZ",
        "driveConfig": "6×6",
        "specialEquipment": "Antennimoodul: veoki platvormil kokkupandavad antennid (transpordiasendis), taga kungi/aparatuuriruum"
      },
      "notes": {
        "chassis": "Pildi järgi; täpne KamAZi mudel teadmata."
      },
      "sources": [
        {"name": "GlobalSecurity: Palantin", "url": "https://www.globalsecurity.org/military/world/russia/palatine.htm", "retrieved": "2026-10-30"},
        {"name": "Oryx: Documenting Russian Equipment Losses", "url": "https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html", "retrieved": "2026-11-27"}
      ]
    },
    "IL-78M Midas": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Kauglennuväe õhutankimispolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhutankur taktikaliste ja raskete lennukite tankimiseks.",
        "crew": "6",
        "length": 46.59,
        "wingspan": 50.5,
        "height": 14.76,
        "emptyWeight": 72,
        "maxTakeoffWeight": 210,
        "engine": "4 × Aviadvigatel D-30KP turboventilaatormootor (118 kN iga)",
        "thrust": 472,
        "maxSpeed": 850,
        "serviceCeiling": 12000,
        "ferryRange": 7300,
        "specialEquipment": "3 tankimisgondlit UPAZ Sahhalin: 2 tiibade all taktikaliste lennukite ja 1 kere tagaosas vasakul raskete lennukite tankimiseks; kütust kokku 138 t, sellest üleantav 105,7 t"
      },
      "notes": {},
      "sources": [
        {"name": "Wikipedia: Ilyushin Il-78", "url": "https://en.wikipedia.org/wiki/Ilyushin_Il-78", "retrieved": "2026-11-20"},
        {"name": "Wikipedia: Russian Long Range Aviation", "url": "https://en.wikipedia.org/wiki/Russian_Long_Range_Aviation", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia may be building first Il-78MK-90A tanker aircraft for China (28 Oct 2026)", "url": "https://www.armyrecognition.com/news/aerospace-news/2026/russia-may-be-building-first-il-78mk-90a-tanker-aircraft-for-china-to-expand-air-operations-over-pacific", "retrieved": "2026-11-25"}
      ]
    },
    "An-30 Clank": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Aerofotograafia- ja kaardistamislennuk; kasutatud ka Avatud taeva lepingu vaatluslendudel.",
        "crew": "7",
        "length": 24.26,
        "wingspan": 29.2,
        "height": 8.32,
        "emptyWeight": 15.59,
        "maxTakeoffWeight": 23,
        "engine": "2 × Ivtšenko AI-24VT turbopropellermootor (2803 hj iga) + abireaktiivmootor RU-19A-300",
        "power": 5606,
        "maxSpeed": 540,
        "cruiseSpeed": 430,
        "serviceCeiling": 8300,
        "ferryRange": 2630,
        "sensors": "Aerofotokaamerad: tavaliselt 4–5 suurt kaamerat (3 vertikaalset, 2 kaldu 28° nurga all kummalegi poole)"
      },
      "notes": {
        "ferryRange": "Ilma kütusereservita."
      },
      "sources": [
        {"name": "Wikipedia: Antonov An-30", "url": "https://en.wikipedia.org/wiki/Antonov_An-30", "retrieved": "2026-11-20"}
      ]
    },
    "IL-20M": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe segalennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2025},
        "purpose": "Raadio- ja elektroonilise luure lennuk.",
        "crew": "13",
        "length": 35.9,
        "wingspan": 37.42,
        "height": 10.17,
        "emptyWeight": 33.76,
        "maxTakeoffWeight": 64,
        "engine": "4 × AI-20M turbopropellermootor (4250 hj iga)",
        "power": 17000,
        "maxSpeed": 675,
        "cruiseSpeed": 620,
        "serviceCeiling": 10000,
        "ferryRange": 6200,
        "sensors": "Külgvaatav radar Igla-1 (kere all), kaamera A-87P (kere küljel), elektroonilise luure süsteemid Višnja, SRS-4 Romb ja Kvadrat-2; optilised, IR- ja elektroonilised andurid",
        "specialEquipment": "Kere peal 2 suurt satelliitside antenni"
      },
      "notes": {
        "maxSpeed": "Kõrgusel 8000 m.",
        "ferryRange": "Teistel andmetel kuni 5400 km."
      },
      "sources": [
        {"name": "Wikipedia: Ilyushin Il-20M", "url": "https://en.wikipedia.org/wiki/Ilyushin_Il-20M", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "Il-38 May": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe lennuvägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Mereväe patrull- ja allveelaevatõrjelennuk.",
        "crew": "7–8",
        "length": 40.185,
        "wingspan": 37.4,
        "height": 10.17,
        "emptyWeight": 35.5,
        "maxTakeoffWeight": 66,
        "engine": "4 × Progress AI-20M turbopropellermootor (4225 hj iga)",
        "power": 16900,
        "maxSpeed": 645,
        "serviceCeiling": 11000,
        "ferryRange": 7500,
        "endurance": 13,
        "aswWeapons": "Torpeedod, süvaveepommid, miinid ja pommid relvaruumis; hüdroakustilised poid eesmises relvaruumis",
        "antiShipMissiles": "Kh-35E",
        "ordnanceLoad": 9000,
        "sensors": "Otsinguradar Berkut („Wet Eye“) nina all; magnetanomaalia detektor (MAD) sabas. Il-38N: Novella P-38 (õhusihtmärgid kuni 90 km, pinnasihtmärgid kuni 320 km, 32 sihtmärki korraga)"
      },
      "notes": {},
      "sources": [
        {"name": "Wikipedia: Ilyushin Il-38", "url": "https://en.wikipedia.org/wiki/Ilyushin_Il-38", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "The Aviationist: Ukrainian Drone Strike Reportedly Destroys Rare Russian Il-38N ASW Aircraft (24 Dec 2025)", "url": "https://theaviationist.com/2025/12/24/drone-strike-on-il-38n/", "retrieved": "2026-11-25"},
        {"name": "Aviation Week: How Russia is modernizing its naval aviation fleet", "url": "https://aviationweek.com/defense/budget-policy-operations/how-russia-modernizing-its-naval-aviation-fleet", "retrieved": "2026-11-26"}
      ]
    },
    "Yak-130 Mitten": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväelennukooli õppelennuväepolk",
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Reaktiivõppelennuk, mis suudab täita ka kerge ründe- ja luurelennuki ülesandeid.",
        "crew": "2",
        "length": 11.49,
        "wingspan": 9.84,
        "height": 4.76,
        "emptyWeight": 4.6,
        "maxTakeoffWeight": 10.29,
        "engine": "2 × Ivtšenko-Progress AI-222-25 turboventilaatormootor (24,52 kN iga)",
        "thrust": 49.04,
        "maxSpeed": 1060,
        "cruiseSpeed": 887,
        "serviceCeiling": 12500,
        "rateOfClimb": 65,
        "ferryRange": 2100,
        "gLimit": 8,
        "hardpoints": 8,
        "ordnanceLoad": 3000,
        "airToAirMissiles": "R-73",
        "airToGroundWeapons": "Raketid S-8 ja S-25; pommid FAB-M62, ZB-500, KAB-500Kr; kahurikonteiner SNPU-130"
      },
      "notes": {
        "gLimit": "+8 / −3 g.",
        "hardpoints": "Tiivaotstes 2 (ainult soojuspüünised ja dipoolid), tiibade all 6. Teistel andmetel 9."
      },
      "sources": [
        {"name": "Wikipedia: Yakovlev Yak-130", "url": "https://en.wikipedia.org/wiki/Yakovlev_Yak-130", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Russian Air Force receives new batch of Irkutsk-produced Yak-130 combat trainer aircraft (Jul 2024)", "url": "https://www.armyrecognition.com/archives/archives-aerospace-defense/2024/russian-air-force-receives-new-batch-of-irkutsk-produced-yak-130-combat-trainer-aircraft", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Krasnodar Higher Military Aviation School of Pilots", "url": "https://en.wikipedia.org/wiki/Krasnodar_Higher_Military_Aviation_School_of_Pilots", "retrieved": "2026-11-25"}
      ]
    },
    "L-39 Albatros": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväelennukooli õppelennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Reaktiivõppelennuk pilootide alg- ja edasijõudnute väljaõppeks; kasutatud ka kerge ründelennukina.",
        "crew": "2",
        "length": 12.13,
        "wingspan": 9.46,
        "height": 4.77,
        "emptyWeight": 3.455,
        "maxTakeoffWeight": 4.7,
        "engine": "Ivtšenko AI-25TL turboventilaatormootor",
        "thrust": 16.87,
        "maxSpeed": 750,
        "serviceCeiling": 11000,
        "rateOfClimb": 21,
        "ferryRange": 1100,
        "endurance": 2.5,
        "gLimit": 8,
        "hardpoints": 2,
        "ordnanceLoad": 284
      },
      "notes": {
        "maxSpeed": "Kõrgusel 5000 m.",
        "ferryRange": "Sisemise kütusega.",
        "gLimit": "+8 / −4 g (massil 4200 kg)."
      },
      "sources": [
        {"name": "Wikipedia: Aero L-39 Albatros", "url": "https://en.wikipedia.org/wiki/Aero_L-39_Albatros", "retrieved": "2026-11-20"},
        {"name": "United24 Media: Russian Air Force loses Czech-designed L-39 Albatros jet in Krasnodar crash (27 Jul 2026)", "url": "https://united24media.com/war-in-ukraine/russian-air-force-loses-czech-designed-l-39-albatros-jet-in-krasnodar-crash-21099", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Krasnodar Higher Military Aviation School of Pilots", "url": "https://en.wikipedia.org/wiki/Krasnodar_Higher_Military_Aviation_School_of_Pilots", "retrieved": "2026-11-25"}
      ]
    },
    "An-12 Cub": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sõjaväetranspordilennuväe polk; Sõjaväetranspordilennuväe eskadrill; Mereväe lennuvägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Transpordilennuk lasti ja langevarjurite veoks.",
        "crew": "5",
        "length": 33.1,
        "wingspan": 38,
        "height": 10.53,
        "emptyWeight": 28,
        "maxTakeoffWeight": 61,
        "engine": "4 × Ivtšenko AI-20L või AI-20M turbopropellermootor (4000 hj iga)",
        "power": 16000,
        "maxSpeed": 660,
        "cruiseSpeed": 570,
        "serviceCeiling": 10200,
        "ferryRange": 5700,
        "payload": 20000,
        "troops": "60 langevarjurit",
        "caliber": 23,
        "mainArmament": "Osadel lennukitel 2 × 23 mm kahur NR-23 sabatornis",
        "specialEquipment": "Lastiruumi mahub 2 × BMD-1"
      },
      "notes": {
        "troops": "Teistel andmetel kuni 100 täisvarustuses langevarjurit.",
        "ferryRange": "Maksimaalse lastiga 3600 km."
      },
      "sources": [
        {"name": "Wikipedia: Antonov An-12", "url": "https://en.wikipedia.org/wiki/Antonov_An-12", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Military Transport Aviation", "url": "https://en.wikipedia.org/wiki/Military_Transport_Aviation", "retrieved": "2026-11-25"},
        {"name": "Euromaidan Press: Russia's An-series military transports ... 143 of its 368 military Antonovs need urgent repair (10 Apr 2026)", "url": "https://euromaidanpress.com/2026/04/10/russias-an-series-military-transports-were-designed-in-kyiv-and-moscows-leaked-documents-show-143-of-its-368-military-antonovs-need-urgent-repair/", "retrieved": "2026-11-25"}
      ]
    },
    "An-72 Coaler": {
      "status": "unverified",
      "values": {
        "typicalUnit": "FSB piirivalve lennuvägi; VKS; Mereväe lennuvägi",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Lühikese stardi ja maandumisega (STOL) transpordilennuk.",
        "crew": "5",
        "length": 28.07,
        "wingspan": 31.89,
        "height": 8.65,
        "emptyWeight": 19.05,
        "maxTakeoffWeight": 34.5,
        "engine": "2 × Lotarev D-36 seeria 1A turboventilaatormootor (63,9 kN iga)",
        "thrust": 127.8,
        "maxSpeed": 700,
        "ferryRange": 4325,
        "takeoffRun": 620,
        "payload": 10000,
        "troops": "Kuni 52 reisijat"
      },
      "sources": [
        {"name": "Wikipedia: Antonov An-72", "url": "https://en.wikipedia.org/wiki/Antonov_An-72", "retrieved": "2026-11-20"},
        {"name": "Euromaidan Press: Russia's An-series military transports ... 143 of its 368 military Antonovs need urgent repair (10 Apr 2026)", "url": "https://euromaidanpress.com/2026/04/10/russias-an-series-military-transports-were-designed-in-kyiv-and-moscows-leaked-documents-show-143-of-its-368-military-antonovs-need-urgent-repair/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi (UA): Росіяни показали застосування рідкісного Ан-72П з гарматою ГШ-23Л (Nov 2026)", "url": "https://militarnyi.com/uk/news/rosiyany-strilby-litaka-an-72p/", "retrieved": "2026-11-25"}
      ]
    },
    "1B75 Penicilin": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Passiivne suurtükiväeluure kompleks (kasutusel alates 2020. aastast): leiab heli ja soojuse järgi vastase suurtükkide, miinipildujate, raketiheitjate ja raketistartide asukoha ilma raadiokiirguseta.",
        "chassis": "KamAZ-6350",
        "driveConfig": "8×8",
        "detectionRange": 25,
        "sensors": "Teleskoopmastil optiline ja infrapuna andurikomplekt 1B75; maapinnale paigutatavad seismilised ja akustilised andurid (1B76)",
        "specialEquipment": "Side teiste üksustega kuni 40 km; võib töötada automaatrežiimis; juhib ja korrigeerib ka oma suurtükituld"
      },
      "sources": [
        {"name": "Wikipedia: Penicillin (counter-artillery system)", "url": "https://en.wikipedia.org/wiki/Penicillin_(counter-artillery_system)", "retrieved": "2026-11-20"}
      ]
    },
    "Tornado-G/BM-21-1 (2B17M)": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mitmikraketiheitjapataljon",
        "purpose": "122 mm mitmikraketiheitja, BM-21 Gradi moderniseeritud versioon (kasutusel alates 2014. aastast).",
        "chassis": "KamAZ 6×6 või Ural-4320",
        "caliber": 122,
        "launchTubes": 40,
        "mainArmament": "40 × 122 mm rakett (4 rida × 10 toru)",
        "specialEquipment": "Raketid 9M538, 9M539 ja 9M541 (122 mm OF- ja kumulatiivraketid)."
      },
      "sources": [
        {"name": "Wikipedia: Tornado (multiple rocket launcher)", "url": "https://en.wikipedia.org/wiki/Tornado_(multiple_rocket_launcher)", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Analysis – MLRS multiple launch rocket systems of Russian army, part 3", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/analysis-news-mlrs-multiple-launch-rocket-systems-of-russian-army-part-3", "retrieved": "2026-11-25"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"}
      ]
    },
    "MT-LBMB": {
      "status": "unverified",
      "values": {
        "purpose": "Relvastatud roomiksoomuk.",
        "chassis": "MT-LB",
        "mainArmament": "MT-LBM 6MB: 30 mm automaatkahur tornis kere keskel; 6MA: 14,5 mm BPU-1 torn"
      },
      "notes": {
        "chassis": "MT-LBM-i mõõte ja massi allikas ei anna; vt MT-LB."
      },
      "sources": [
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-11-20"}
      ]
    },
    "PU-12 (9S482)": {
      "status": "unverified",
      "values": {
        "purpose": "Õhutõrjeüksuste liikuv juhtimispunkt: võtab radarilt vastu õhuolukorra andmed, töötleb need ja edastab alluvatele juhtimispunktidele.",
        "typicalUnit": "Õhutõrjepatarei",
        "chassis": "BTR-60PB",
        "combatWeight": 10.5,
        "length": 7.22,
        "width": 2.825,
        "maxSpeedRoad": 82,
        "maxSpeedWater": 10,
        "amphibious": true,
        "specialEquipment": "PU-12M6 (9S482M6) ja PU-12M7 on BTR-80 šassiil"
      },
      "sources": [
        {"name": "Armed Conflicts (valka.cz): PU-12 / PU-12M", "url": "https://www.armedconflicts.com/topic/view/23991", "retrieved": "2026-11-20"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-11-20"},
        {"name": "Valka.cz: PU-12M7", "url": "https://en.valka.cz/topic/view/41835", "retrieved": "2026-11-25"}
      ]
    },
    "55Zh6M Nebo-M": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Mitme sagedusalaga radarikompleks, mis liidab kolme radari andmed üheks pildiks; väidetavalt avastab ka 5. põlvkonna lennukeid ja ballistiliste rakettide starte.",
        "chassis": "RLM-D, RLM-S ja KU-RLK: BAZ-6909-015 8×8 (iga moodul eraldi masinal)",
        "sensors": "RLM-M: VHF/UHF 3D-radar (kuni 600 km); RLM-D: L-sagedusala AESA-radar (kuni 600 km); RLM-S: X-sagedusala AESA-radar; KU-RLK: juhtimismoodul, mis liidab kõigi radarite andmed üheks pildiks",
        "radarBand": "VHF/UHF (RLM-M), L (RLM-D), X (RLM-S)",
        "radarRange": 600,
        "emplacementTime": "40 min (täiskomplekt)"
      },
      "sources": [
        {"name": "Wikipedia: Nebo-M", "url": "https://en.wikipedia.org/wiki/Nebo-M", "retrieved": "2026-11-20"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "R-439MD2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2022},
        "purpose": "Satelliitsidejaam sidepidamiseks sõjaliste ja tsiviilsatelliitide kaudu, ka raadiohäirete korral.",
        "chassis": "K1Sh1 (BTR-80)",
        "commsFrequency": "Globus: 4/6 GHz, 7/8 GHz ja 0,2/0,4 GHz; tsiviilsatelliidid Express ja Yamal: 4/6 GHz"
      },
      "sources": [
        {"name": "Defense Express: destroyed R-439-MD2", "url": "https://en.defence-ua.com/weapon_and_tech/photo_of_destroyed_russian_modern_satellite_communication_vehicle_appeared-3792.html", "retrieved": "2026-11-20"}
      ]
    },
    "R-149MA3": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Ühtne juhtimismasin roodu, rühma ja jao tasandi juhtimiseks ja sideks.",
        "typicalUnit": "Rood; Rühm; Jagu",
        "chassis": "BTR-80"
      },
      "sources": [
        {"name": "Army Recognition: BTR-80 (variants)", "url": "https://armyrecognition.com/military-products/army/armoured-personnel-carriers/wheeled-vehicles/btr-80-russia-uk", "retrieved": "2026-11-20"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-11-20"},
        {"name": "ARMSNET: R-149MA3", "url": "https://armsnet.duckdns.org/equipment/1134a1f2-e2e9-494d-e76c-08de6e3c1543", "retrieved": "2026-11-25"},
        {"name": "Russia lost thousands of military vehicles (Al Arabiya, 2023)", "url": "https://english.alarabiya.net/News/world/2023/07/17/Russia-lost-thousands-of-military-vehicles-equipment-weapons-since-Ukraine-invasion", "retrieved": "2026-11-27"}
      ]
    },
    "R-145BMA": {
      "status": "unverified",
      "values": {
        "purpose": "Juhtimis- ja sidemasin ühenduseks kõrgema staabi ja alluvate üksustega.",
        "typicalUnit": "Armee luureüksus",
        "chassis": "GAZ Tigr"
      },
      "sources": [
        {"name": "Army Recognition: R-145BMA Tigr command post vehicle (2015)", "url": "https://armyrecognition.com/archives/archives-land-defense/land-defense-2015/russian-army-scouts-at-the-army-level-equipped-with-r-145bma-tigr-command-post-vehicle-tass-12510153", "retrieved": "2026-11-20"}
      ]
    },
    "1RL243 Rubikon (MASRR)": {
      "status": "unverified",
      "values": {
        "purpose": "Liikuv automatiseeritud raadiotehnilise luure jaam vastase radarite otsimiseks ja suuna määramiseks.",
        "chassis": "MT-LBu-M",
        "height": 2.035,
        "detectionRange": 70,
        "ewTargets": "Vaenlase radarid (otsing ja suunamääramine)",
        "specialEquipment": "Komplekt MASRR koosneb 3 jaamast 1RL243; tuvastab tunnis 10–12 sihtmärki; suunamäärangu viga kuni 3°",
        "ewMode": "Raadiotehniline luure ja suunatuvastus",
        "emplacementTime": "10–15 min"
      },
      "notes": {
        "height": "Kere kõrgus."
      },
      "sources": [
        {"name": "Valka.cz: 1RL243 Rubikon", "url": "https://www.valka.cz/SOV-1RL243-vyhledavac-radiolokacnich-stanic-t252497", "retrieved": "2026-11-20"},
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-11-25"}
      ]
    },
    "SPR-2": {
      "status": "unverified",
      "values": {
        "purpose": "Raadiokaugsütikutega suurtükimürskude ja rakettide segaja, mis paneb need lõhkema ohutul kõrgusel.",
        "typicalUnit": "Elektroonilise võitluse rood",
        "crew": "2",
        "chassis": "BTR-70",
        "frequencyRange": "95–420 MHz",
        "jammerPower": 300,
        "ewTargets": "Raadiokaugsütikuga suurtükimürsud ja raketid – põhjustab nende lõhkemise ohutul kõrgusel",
        "specialEquipment": "Kaitstav ala vähemalt 50 ha; segab vähemalt 40 sütikut sekundis; töötab ka liikumisel. GRAU indeks 1L29; moderniseeritud versioon SPR-2M Rtut-BM",
        "ewMode": "Häirimine",
        "emplacementTime": "Kuni 4 min",
        "powerSupply": "27 V, 4 kW"
      },
      "notes": {
        "jammerPower": "300 W või rohkem."
      },
      "sources": [
        {"name": "Russian Air Defense Systems (Defense Techs): SPR-2 Rtut-B", "url": "https://issuu.com/dellvzla/docs/air_def_1_defensetechs/s/13416584", "retrieved": "2026-11-20"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"}
      ]
    },
    "Shipovnik-Aero": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Droonitõrje elektroonilise võitluse kompleks (kasutusel alates 2016. aastast): avastab väikesed droonid, surub alla nende juhtimiskanali või võtab drooni üle.",
        "crew": "3",
        "chassis": "KamAZ-4350",
        "frequencyRange": "Raadioseire 25–2500 MHz; häirimine 400–500, 800–925 ja 2400–2485 MHz",
        "detectionRange": 10,
        "ewTargets": "Väikesed raadiojuhitavad droonid (RQ-11 Ravenist kuni Hermes-tüüpi UAV-deni); ka juhtimispunktid, mobiilside, Wi-Fi, WiMAX ja DECT",
        "specialEquipment": "Tuvastamisest mahasurumiseni 25 s; suunamäärangu täpsus 2–3°",
        "ewMode": "Droonitõrje (luure, häirimine, ülevõtmine)",
        "emplacementTime": "20–40 min"
      },
      "notes": {
        "chassis": "Ainult foto allkirja järgi."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"},
        {"name": "EurAsian Times: Russia 'smashing' 330 Ukrainian UAVs per day; UK report (RUSI) on Russian electronic warfare (2023)", "url": "https://www.eurasiantimes.com/russia-smashing-330-ukrainian-uavs-per-day-uk-report-says-russian-electronic-warfare-wreaks-havoc-on-kyiv", "retrieved": "2026-11-27"}
      ]
    },
    "MKTK-1A Judoist": {
      "status": "unverified",
      "values": {
        "purpose": "Raadiokontrolli kompleks (kasutusel alates 2012. aastast): leiab raadiokiirguse allikad ja määrab nende asukoha; kontrollib oma vägede kaitset vastase tehnilise luure eest.",
        "chassis": "KamAZ-4350",
        "frequencyRange": "Raadiokiirgus 0,0001–18 GHz; akustiline ja vibroakustiline 10–20 000 Hz",
        "ewTargets": "Raadiokiirguse allikad; tehnilised infolekkekanalid",
        "specialEquipment": "3 automatiseeritud töökohta; suunamäärangu viga alla 2–3°",
        "ewMode": "Raadioseire ja suunatuvastus",
        "emplacementTime": "30 min",
        "powerSupply": "3,5 kW"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"}
      ]
    },
    "RP-377LA Lorandit": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "UKV-raadioside otsingu, asukoha määramise ja mahasurumise süsteem (kasutusel alates 2019. aastast).",
        "typicalUnit": "Elektroonilise võitluse rood",
        "crew": "2–3",
        "chassis": "Maastikuauto (nt UAZ) või kantav komplekt",
        "frequencyRange": "0,02–2 GHz",
        "jammerPower": 40,
        "ewTargets": "VHF-raadioside ja juhtimissüsteemide häireallikad",
        "specialEquipment": "Suunamäärangu viga kuni 3°; kantav versioon 2 kohvris ja 4 kotis; 2 või enam komplekti saab ühendada võrku",
        "ewMode": "Raadioluure, suunatuvastus ja häirimine"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Ukrainian forces destroy RP-377LA Lorandit (2023)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/ukrainian-forces-destroy-rp-377la-lorandit-crucial-player-in-russian-army-s-electronic-warfare", "retrieved": "2026-11-27"}
      ]
    },
    "Tirada-2S": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Sidesatelliitide üleslüli häirimise kompleks (kasutusel alates 2019. aastast).",
        "crew": "5",
        "chassis": "KamAZ",
        "frequencyRange": "3–14 GHz (sentimeeterlained)",
        "ewTargets": "Sidesatelliidid (üleslüli häirimine kitsa kiirega); luuredroonide satelliitside",
        "specialEquipment": "Juhtimiskeskus, side avastamise ja häirimise riistvaraplokk ning generaator; ulatus mitukümmend kilomeetrit",
        "ewMode": "Häirimine",
        "emplacementTime": "30 min"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"},
        {"name": "Ukrinform: Ukrainian border guards destroy advanced Russian EW system Tirada-2 (2026)", "url": "https://www.ukrinform.net/rubric-ato/4085270-ukrainian-border-guards-destroy-advanced-russian-ew-system-tirada2.html", "retrieved": "2026-11-27"}
      ]
    },
    "Palantin-K": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Operatiiv-taktikalise tasandi automatiseeritud elektroonilise võitluse kompleks (kasutusel alates 2019. aastast) raadioluureks ning raadio- ja mobiilside mahasurumiseks.",
        "typicalUnit": "Elektroonilise võitluse pataljon",
        "chassis": "KamAZ",
        "frequencyRange": "3–30 MHz (HF) ja 30–300 MHz (VHF)",
        "jammingRange": 20,
        "mastHeight": 15,
        "ewTargets": "Satelliitjuhitav relvastus, mobiil- ja raadioside, droonid ja teised elektroonilise võitluse süsteemid",
        "specialEquipment": "Ühendab Moskva, Žiteli ja Judoisti ühtseks võrguks",
        "ewMode": "Raadioluure ja häirimine"
      },
      "notes": {
        "jammingRange": "Teistel andmetel raadioside mahasurumise ulatus 1000 km.",
        "chassis": "Ainult foto allkirja järgi."
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-20"},
        {"name": "OE Watch: Russia tests Palantin EW system in Ukraine", "url": "https://oe.t2com.army.mil/product/russia-tests-palantin-electronic-warfare-system-in-ukraine/", "retrieved": "2026-11-25"}
      ]
    },
    "Lada 4x4 pikap": {
      "status": "unverified",
      "values": {
        "driveConfig": "4×4 (püsiv nelikvedu, keskdiferentsiaali lukk)",
        "length": 4.52,
        "width": 1.68,
        "height": 1.64,
        "engine": "Niva perekond: 1,6–1,8 l bensiinimootor või 1,9 l diisel",
        "groundClearance": 235,
        "fording": 0.51
      },
      "notes": {
        "length": "Pikap-versiooni pikkus; laius ja kõrgus on Niva üldandmed."
      },
      "sources": [
        {"name": "Wikipedia: Lada Niva Legend", "url": "https://en.wikipedia.org/wiki/Lada_Niva_Legend", "retrieved": "2026-11-20"}
      ]
    },
    "BREM-80U": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Remondi- ja äraveosoomuk tankide toetamiseks lahinguväljal.",
        "crew": "4",
        "chassis": "T-80U",
        "combatWeight": 46,
        "engine": "Gaasiturbiin",
        "power": 1250,
        "maxSpeedRoad": 70,
        "range": 500,
        "mainArmament": "12,7 mm kuulipilduja",
        "secondaryArmament": "Suitsugranaadiheitjad",
        "specialEquipment": "Hüdrauliline peavints 35 t (plokkidega 140 t), tross umbes 160 m; abivints 1 t; hüdrauliline kraana 18 t; buldooserilaba (ankur vintsimisel ja tugi kraanatööl, ka teede puhastamiseks); varuosade platvorm, keevitusseade. Moderniseeritud versioonil haakeseade, millega meeskond saab masina haakida soomuse alt väljumata",
        "armor": "T-80U kere; moderniseeritud versioonil lisasoomus, aktiivsoomus ja droonivastane võrk või raam pealisehitise kohal"
      },
      "notes": {
        "power": "Allikas annab T-80 hilisemate versioonide turbiini võimsuse."
      },
      "sources": [
        {"name": "Army Recognition: Russia Sends Upgraded BREM-80 Recovery Vehicles with Anti-Drone Protection (2026)", "url": "https://armyrecognition.com/news/army-news/2026/russia-sends-upgraded-brem-80-recovery-vehicles-with-anti-drone-protection-to-ukraine-front", "retrieved": "2026-11-24"},
        {"name": "Army Recognition: Russia Unveils New BREM-80U Armored Recovery Tank (2024)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/russia-unveils-new-brem-80u-armored-recovery-tank-featuring-enhanced-anti-drone-armor", "retrieved": "2026-11-24"},
        {"name": "Defense Mirror: Russia Troops Receive Upgraded BREM-80 Armored Recovery Vehicles (2026)", "url": "https://defensemirror.com/news/41151/Russia_Troops_Receive_Upgraded_BREM_80_Armored_Recovery_Vehicles", "retrieved": "2026-11-27"}
      ]
    },
    "ATsG-5-4320": {
      "status": "unverified",
      "values": {
        "chassis": "Ural-4320",
        "driveConfig": "6×6",
        "engine": "YaMZ-238M2 V8 diisel (Ural-4320)",
        "power": 240,
        "specialEquipment": "Kütusetsisternauto umbes 5 m³ paagiga"
      },
      "sources": [
        {"name": "Wikipedia: Ural-4320", "url": "https://en.wikipedia.org/wiki/Ural-4320", "retrieved": "2026-11-24"}
      ]
    },
    "ATZ-7 5557": {
      "status": "unverified",
      "values": {
        "chassis": "Ural-5557 (madalaprofiilsed rehvid ja rehvirõhu reguleerimine)",
        "driveConfig": "6×6",
        "specialEquipment": "Tankurauto umbes 7 m³ kütusepaagiga maa- ja õhusõidukite tankimiseks"
      },
      "sources": [
        {"name": "Wikipedia: Ural-4320", "url": "https://en.wikipedia.org/wiki/Ural-4320", "retrieved": "2026-11-20"},
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-11-20"}
      ]
    },
    "ATs-7,5-4320": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljoni logistikarühm",
        "chassis": "Ural-4320",
        "driveConfig": "6×6",
        "engine": "YaMZ-238M2 V8 diisel (Ural-4320)",
        "power": 240,
        "specialEquipment": "Kütusetsisternauto umbes 7,5 m³ paagiga"
      },
      "sources": [
        {"name": "Wikipedia: Ural-4320", "url": "https://en.wikipedia.org/wiki/Ural-4320", "retrieved": "2026-11-20"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"}
      ]
    },
    "PTs-6,7": {
      "status": "unverified",
      "values": {
        "length": 5.946,
        "width": 2.5,
        "height": 2.88,
        "combatWeight": 10,
        "chassis": "MAZ-8925 haagis; vedukid KrAZ-255 ja KrAZ-260",
        "specialEquipment": "Terasest paak 6700 l; imi- ja jaotusvoolik 2 × 3 m, Ø75 mm; tühjenemine isevoolu teel 25 min; teenindab 1 inimene; kasutusel alates 1977"
      },
      "notes": {
        "combatWeight": "Täismass; tühimass 4240 kg."
      },
      "sources": [
        {"name": "Armed Conflicts (valka.cz): PC-6,7-8925", "url": "https://www.armedconflicts.com/topic/view/42114", "retrieved": "2026-11-20"}
      ]
    },
    "Uran-9": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["prototype"], "asOf": 2026},
        "purpose": "Mehitamata lahingumasin luureks ja tuletoetuseks (kasutusel alates 2019. aastast).",
        "crew": "0",
        "combatWeight": 10,
        "length": 5.12,
        "width": 2.53,
        "height": 2.5,
        "maxSpeedRoad": 35,
        "maxSpeedOffroad": 25,
        "controlRange": 3,
        "caliber": 30,
        "mainArmament": "30 mm automaatkahur 2A72",
        "atgm": "4 × 9M120 Ataka",
        "secondaryArmament": "7,62 mm koaksiaalne kuulipilduja; termobaarilised raketid Šmel-M",
        "sensors": "Tulejuhtimissüsteem, IR-kaamerad, laserkaugusmõõtja; laserhoiatussüsteem",
        "armor": "Kaitse kergrelvade ja kildude vastu",
        "specialEquipment": "Komplektis 4 robotit, juhtimispunkt KamAZ-veokil ja transportveokid"
      },
      "notes": {
        "controlRange": "Usaldusväärne side kuni 3 km; droonretranslaatoriga rohkem."
      },
      "sources": [
        {"name": "Army Technology: Uran-9", "url": "https://www.army-technology.com/projects/uran-9-unmanned-ground-combat-vehicle/", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Uran-9", "url": "https://armyrecognition.com/military-products/army/unmanned-systems/unmanned-ground-vehicles/uran-9-ugcv-ugv-unmanned-ground-combat-vehicle-technical-data-sheet-specifications-pictures-video-10910163", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-25"}
      ]
    },
    "Uran-6": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pioneeriüksus",
        "purpose": "Kaugjuhitav demineerimisrobot miinide ja lõhkekehade hävitamiseks.",
        "crew": "0",
        "combatWeight": 6,
        "length": 4.45,
        "width": 2.01,
        "height": 1.49,
        "power": 240,
        "maxSpeedRoad": 5,
        "controlRange": 1,
        "mineClearing": "Trall, freesimistrummel, segmentrull, buldooserisahk, haarats; puhastusriba 1,6 m; hävitab lõhkekehi 0,1–4 kg",
        "armor": "Peab vastu kuni 60 kg TNT plahvatusele",
        "specialEquipment": "4 videokaamerat; kaugjuhtimine kuni 1 km kauguselt; transport KamAZ-platvormil; töötab 1 operaator"
      },
      "notes": {
        "combatWeight": "Trallimisseadmeta; trallimisseadmega 6,8 t.",
        "length": "Koos trallimisseadmega."
      },
      "sources": [
        {"name": "Army Technology: Uran-6", "url": "https://www.army-technology.com/projects/uran-6-mine-clearing-robot/", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Uran-6 on KAMAZ transportation platform", "url": "https://armyrecognition.com/weapons_defence_industry_military_technology_uk/russia_uran-6_robot_to_be_mounted_on_new_kamaz_transportation_platform.html", "retrieved": "2026-11-20"},
        {"name": "Army Technology: Russian troops receive Uran-6 robotic vehicle", "url": "https://www.army-technology.com/news/russia-troops-receive-uran-6-robotic-vehicle/", "retrieved": "2026-11-26"}
      ]
    },
    "Nerehta": {
      "status": "unverified",
      "values": {
        "purpose": "Maismaarobot jalaväe toetuseks, vahetatavate lahingu-, luure- ja transpordimoodulitega.",
        "crew": "0",
        "combatWeight": 1.7,
        "length": 2.5,
        "width": 1.6,
        "height": 0.9,
        "payload": 700,
        "maxSpeedRoad": 20,
        "mainArmament": "12,7 mm Kord või 7,62 mm Kalašnikovi kuulipilduja; 30 mm automaatgranaadiheitja AG-30M"
      },
      "notes": {
        "maxSpeedRoad": "Nerekhta-E.",
        "payload": "Teistel andmetel kuni 500 kg."
      },
      "sources": [
        {"name": "Army Guide: Nerehta", "url": "https://army-guide.com/eng/product5206.html", "retrieved": "2026-11-20"},
        {"name": "Defence Security Asia: Nerekhta-E", "url": "https://defencesecurityasia.com/en/russia-nerekhta-e-combat-robot-export/", "retrieved": "2026-11-20"}
      ]
    },
    "Marker": {
      "status": "unverified",
      "values": {
        "purpose": "Eksperimentaalne mehitamata lahingumasin tehisintellektiga sihtmärgituvastuse ja autonoomse sõiduga.",
        "crew": "0",
        "mainArmament": "Kalašnikovi kuulipilduja ja 2 TTRK-d; moodulina ka granaadiheitjad, rakettrelvad ja kuni 16 kamikadze-kvadrokopterit",
        "specialEquipment": "Roomik- ja rattaversioon; läbis autonoomselt 30 km"
      },
      "sources": [
        {"name": "Army Technology: Marker", "url": "https://www.army-technology.com/projects/marker-anti-tank-ugv-russia/", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: four Marker UGVs arrive in Donbas", "url": "https://armyrecognition.com/news/army-news/2023/four-russian-marker-combat-ugvs-arrive-in-donbas-for-operational-testing", "retrieved": "2026-11-20"}
      ]
    },
    "Prokhod-1": {
      "status": "unverified",
      "values": {
        "purpose": "Robotiseeritud demineerimiskompleks läbipääsude rajamiseks miiniväljas.",
        "crew": "0",
        "chassis": "BMR-3MA (T-90)",
        "mineClearing": "Rulltrallid KMT-7 ja KMT-8; raske trall TMT-S",
        "specialEquipment": "Kompleksis robotiseeritud demineerimismasin BMR-3MA ja KamAZ-põhine juhtimismasin; võib sõita automaatselt etteantud marsruudil"
      },
      "sources": [
        {"name": "Shephard: Russia employs Prokhod-1 UGV in Ukraine", "url": "https://www.shephardmedia.com/news/uv-online/russia-employs-prokhod-1-ugv-for-mine-clearance-in-ukraine", "retrieved": "2026-11-20"},
        {"name": "Army Guide: Prohod-1", "url": "https://army-guide.com/eng/product5456.html", "retrieved": "2026-11-20"}
      ]
    },
    "Kurjer": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mitmeotstarbeline maismaarobot laskemoona ja varustuse veoks, miinipanekuks ja tuletoetuseks.",
        "crew": "0",
        "combatWeight": 0.25,
        "length": 1.4,
        "width": 1.2,
        "height": 0.58,
        "payload": 200,
        "maxSpeedRoad": 35,
        "controlRange": 10,
        "mainArmament": "Moodulid: automaatgranaadiheitja AGS-17 või AGS-30, kuulipildujad",
        "mineLaying": "Tankitõrjemiinid TM-62 ja TM-83",
        "specialEquipment": "Roomikutel; juhtimine raadio, valguskaabli või satelliidi kaudu"
      },
      "notes": {
        "controlRange": "3–10 km; rindel sageli alla 1–2 km.",
        "combatWeight": "Kurjer 2.0: umbes 600 kg, kuni 20 km/h, ulatus 25 km."
      },
      "sources": [
        {"name": "Defence Blog: New report tracks Russia's growing combat ground robot fleet", "url": "https://defence-blog.com/new-report-tracks-russias-growing-combat-ground-robot-fleet/", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Russia sends batch of Courier UGV", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/ukraine-russia-conflict/russia-sends-batch-of-courier-ugv-to-its-troops-in-ukraine", "retrieved": "2026-11-20"},
        {"name": "Ukrainska Pravda: Courier 2.0", "url": "https://www.pravda.com.ua/eng/news/2026/09/20/8054305/", "retrieved": "2026-11-20"},
        {"name": "Ukrainska Pravda: Russia's army of robots: how Moscow is using ground drones", "url": "https://www.pravda.com.ua/eng/news/2026/05/04/8033120/", "retrieved": "2026-11-25"}
      ]
    },
    "Varan": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Raske mitmeotstarbeline maismaarobot transpordiks, pioneeritöödeks ja lahinguks.",
        "crew": "0",
        "mainArmament": "Moodulid: kuulipildujad, automaatgranaadiheitjad, TTRK",
        "specialEquipment": "Luure-, elektroonilise võitluse ja pioneerivarustus"
      },
      "sources": [
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-20"},
        {"name": "Defence Blog: New report tracks Russia's growing combat ground robot fleet", "url": "https://defence-blog.com/new-report-tracks-russias-growing-combat-ground-robot-fleet/", "retrieved": "2026-11-20"}
      ]
    },
    "Omitš-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Logistika- ja evakuatsioonirobot laskemoona ja varustuse veoks, ründegruppide transpordiks ja haavatute evakueerimiseks.",
        "crew": "0",
        "combatWeight": 0.65,
        "payload": 350,
        "range": 20,
        "specialEquipment": "Väidetav tööaeg kuni 40 min"
      },
      "sources": [
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-20"},
        {"name": "Defence Blog: New report tracks Russia's growing combat ground robot fleet", "url": "https://defence-blog.com/new-report-tracks-russias-growing-combat-ground-robot-fleet/", "retrieved": "2026-11-25"}
      ]
    },
    "Ljaguška": {
      "status": "unverified",
      "values": {
        "purpose": "Logistikarobot laskemoona, varustuse ja toidu veoks.",
        "crew": "0",
        "specialEquipment": "FPV-kaamera, kaugjuhtimisjaam, videosignaali kordaja ja teleskoopmast ulatuse suurendamiseks"
      },
      "sources": [
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-20"}
      ]
    },
    "Tšelnok": {
      "status": "unverified",
      "values": {
        "purpose": "Transpordirobot varustuse viimiseks eesliini positsioonidele; ka demineerimisversioon.",
        "crew": "0",
        "mineClearing": "Demineerimisversioon miinitõrjekompleksiga UR-83P (2024)"
      },
      "sources": [
        {"name": "Militarnyi: Russian Unmanned Ground Vehicles Deployed in the War Against Ukraine", "url": "https://militarnyi.com/en/articles/russian-unmanned-ground-vehicles-deployed-in-the-war-against-ukraine/", "retrieved": "2026-11-20"}
      ]
    },
    "Murena-300S": {
      "status": "unverified",
      "values": {
        "purpose": "Mehitamata mitmeotstarbeline paat mereväe objektide kaitseks, patrulliks, luureks, miinipanekuks ja demineerimiseks; kasutatakse ka ründepaadina või FPV-droonide kandjana.",
        "length": 5.5,
        "width": 1.5,
        "maxSpeedKn": 45,
        "range": 500,
        "payload": 500,
        "specialEquipment": "Tõenäoliselt Starlinki antenn; töötab lainetusega kuni 4 palli"
      },
      "notes": {
        "maxSpeedKn": "Teistel andmetel reisikiirus 45 km/h."
      },
      "sources": [
        {"name": "EDR Magazine: Murena-300S unveiled", "url": "https://www.edrmagazine.eu/murena-300s-unmanned-surface-vehicle-unveiled", "retrieved": "2026-11-20"},
        {"name": "Naval News: New Russian Navy Murena maritime drone", "url": "https://www.navalnews.com/naval-news/2024/08/new-russian-navy-murena-maritime-drone/", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: DIU Reveals Details of Russian Naval Drones", "url": "https://militarnyi.com/en/news/diu-reveals-details-of-russian-naval-drones-from-skanda-to-kamikaze-usvs/", "retrieved": "2026-11-20"}
      ]
    },
    "BEK-1000": {
      "status": "unverified",
      "values": {
        "purpose": "Raske mehitamata ründepaat.",
        "length": 7,
        "maxSpeedKn": 40,
        "range": 500,
        "payload": 1000
      },
      "sources": [
        {"name": "Militarnyi: DIU Reveals Details of Russian Naval Drones", "url": "https://militarnyi.com/en/news/diu-reveals-details-of-russian-naval-drones-from-skanda-to-kamikaze-usvs/", "retrieved": "2026-11-20"},
        {"name": "United24 Media: Russia's fleet of unmanned sea vessels", "url": "https://united24media.com/war-in-ukraine/ukraine-uncovers-russias-secret-fleet-of-unmanned-sea-vessels-21953", "retrieved": "2026-11-20"}
      ]
    },
    "Iskatel": {
      "status": "unverified",
      "values": {
        "purpose": "Mehitamata paat mereala seireks, merepõhja ja faarvaatrite uurimiseks, lasti veoks ja platvormide pukseerimiseks.",
        "maxSpeedKn": 32,
        "range": 250
      },
      "notes": {
        "range": "Vähemalt 250 km."
      },
      "sources": [
        {"name": "Militarnyi: DIU Reveals Details of Russian Naval Drones", "url": "https://militarnyi.com/en/news/diu-reveals-details-of-russian-naval-drones-from-skanda-to-kamikaze-usvs/", "retrieved": "2026-11-20"},
        {"name": "European Security & Defence: The Russian USV era dawns", "url": "https://euro-sd.com/2025/11/articles/47989/the-russian-usv-era-dawns/", "retrieved": "2026-11-20"}
      ]
    },
    "Skanda": {
      "status": "unverified",
      "values": {
        "purpose": "Mehitamata miinitõrjepaat veeteede ja laevade kaitseks, miinilaadsete objektide otsimiseks, merepõhja uurimiseks ja lasti veoks.",
        "typicalUnit": "Miinitraalerid",
        "maxSpeedKn": 20,
        "range": 150,
        "chassis": "BL-680 kiirpaat"
      },
      "notes": {
        "maxSpeedKn": "Vähemalt 20 sõlme."
      },
      "sources": [
        {"name": "Militarnyi: DIU Reveals Details of Russian Naval Drones", "url": "https://militarnyi.com/en/news/diu-reveals-details-of-russian-naval-drones-from-skanda-to-kamikaze-usvs/", "retrieved": "2026-11-20"},
        {"name": "Naval News: Project 23900 LHD to carry mine warfare USV", "url": "https://www.navalnews.com/naval-news/2022/01/russian-navy-project-23900-lhd-to-carry-mine-warfare-usv/", "retrieved": "2026-11-20"}
      ]
    },
    "KZ-4": {
      "status": "unverified",
      "values": {
        "purpose": "Suur kumulatiivne lõhkelaeng raudbetoonkonstruktsioonide läbistamiseks.",
        "mineMass": 63,
        "explosiveMass": 59000,
        "delivery": "Paks poolsfääriline vooder, puidust lainekujundaja; läbistab umbes 2 m raudbetooni või umbes 500 mm terast; süütamine elektridetonaatoriga EDP-r või detonaatoriga MD-5M"
      },
      "notes": {
        "mineMass": "Umbes 63 kg, lõhkeainet umbes 59 kg."
      },
      "sources": [
        {"name": "Fenix Insight METIS: KZ-4", "url": "https://metis.fenixinsight.com/munition/demolitionStore/kz-4", "retrieved": "2026-11-20"}
      ]
    },
    "9S912": {
      "status": "unverified",
      "values": {
        "purpose": "Maaväe õhutõrje ühtne komandöri juhtimispunkt: võtab radaritelt ja AWACS-lennukitelt vastu õhuolukorra ning jagab sihtmärgid kuni 6 alluvale õhutõrjeüksusele.",
        "chassis": "BTR-80",
        "specialEquipment": "Töötlustsükkel 1 s; sihtmärgimäärang kõrgemalt juhtimispunktilt alluvatele 2 s",
        "emplacementTime": "5 min (ka kokkupanek)"
      },
      "sources": []
    },
    "R-142NMR": {
      "status": "unverified",
      "values": {
        "purpose": "Polgu juhtimis- ja staabimasin maaväe taktikalise lüli sideks.",
        "crew": "3",
        "chassis": "GAZ-66 (furgoon K66N); ka Ural-43206 või KamAZ-5350 (furgoon K1.5350D)",
        "combatWeight": 6.44,
        "radioSets": "2 × R-171M ja R-163-50U (UKV), R-134M (KV)",
        "commsRange": "KV 350 km paigal / 250 km liikvel, UKV 60 / 30 km, satelliitside 4000 km",
        "emplacementTime": "5–20 min"
      },
      "notes": {
        "combatWeight": "GAZ-66 versioon."
      },
      "sources": []
    },
    "R-166": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Sideüksus; TBK-kaitseväed",
        "purpose": "Keskmise võimsusega raadiojaam, mis töötab korraga kahes raadiovõrgus, ka raadiohäirete korral.",
        "crew": "3",
        "commsFrequency": "KV 1,5–30 MHz; UKV 30–80 MHz",
        "autonomy": 7,
        "specialEquipment": "Saatja 1 ± 0,2 kW; versioonid R-166-0,5 ja R-166S",
        "commsRange": "KV 2000 km paigal / 350 km liikvel, UKV 250 / 70 km",
        "powerSupply": "Voolutarve kuni 16 kW"
      },
      "notes": {
        "autonomy": "Vähemalt 7 ööpäeva."
      },
      "sources": [
        {"name": "Defence Blog: R-166-0,5 in Syria", "url": "https://defence-blog.com/a-syrian-journalist-has-posted-photos-of-russian-radio-station-r-166-05/", "retrieved": "2026-11-20"},
        {"name": "Shephard: Russian Army receives Artek systems", "url": "https://www.shephardmedia.com/news/digital-battlespace/russian-army-receives-artek-modernised-stations", "retrieved": "2026-11-25"}
      ]
    },
    "R-440 ODB": {
      "status": "unverified",
      "values": {
        "purpose": "Õhudessantvägede satelliitsidesoomuk (kasutusel alates 1989. aastast) juhtimispunktide sideks.",
        "typicalUnit": "Õhudessantdiviisi sidepataljon",
        "chassis": "BTR-D",
        "commsFrequency": "Saatmine 5850–5886 ja 5760–5770 MHz; vastuvõtt 3525–3541 ja 3472,5–3482,5 MHz (4/6 GHz)",
        "specialEquipment": "Kokkupandav paraboolantenn Ø1,2 m katusel; saatja 10 W; kiirus 1,2–9,6 kbit/s; 1 sidesuund. Satelliidid Raduga, Gorizont, Yamal, Express ja Molnija-3",
        "commsRange": "Kuni 15 000 km"
      },
      "sources": [
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-25"}
      ]
    },
    "MTO-BT": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "KamAZ-4310 (furgoon KM-4310)",
        "driveConfig": "6×6",
        "combatWeight": 12.94,
        "length": 8.39,
        "width": 2.6,
        "height": 3.47,
        "range": 1150,
        "fording": 1.4,
        "specialEquipment": "Soomustehnika hooldustöökoda välitingimustes: pesu ja värvimine, tankimine, õlide ja määrete vahetus, õhufiltrite pesu, sõlmede reguleerimine, elektriseadmete kontroll, jõuallika ja veermiku sõlmede vahetus, mootorite käivitamine välisest allikast, akude laadimine, keevitus. Lahtirullimine 20–25 min"
      },
      "notes": {
        "chassis": "Uuem MTO-BT1 on Ural-43203 šassiil.",
        "combatWeight": "Koos meeskonnaga."
      },
      "sources": []
    },
    "ATsPT-5,6": {
      "status": "unverified",
      "values": {
        "chassis": "KamAZ-43114, KamAZ-43118 või KamAZ-5350",
        "driveConfig": "6×6",
        "combatWeight": 15.205,
        "power": 240,
        "specialEquipment": "Joogivee autotsistern 5,6 m³: 2 soojusisolatsiooniga sektsiooni roostevabast terasest; täitmine ülevalt luugi kaudu"
      },
      "notes": {
        "combatWeight": "Täismass, KamAZ-43114 versioon."
      },
      "sources": []
    },
    "KFZ-T": {
      "status": "unverified",
      "values": {
        "purpose": "Kumulatiiv- ja fugasslaenguga lõhkelaeng külmunud pinnase kobestamiseks ning teekatte ja lennuradade purustamiseks.",
        "mineMass": 8.7,
        "mineDiameter": 400,
        "mineLength": 775,
        "explosiveMass": 2690,
        "delivery": "Kasutatakse ka tankikaeviku rajamisel ja sügaval maa sees olevate lõhkekehade hävitamiseks; kumulatiivlaeng 2,84 kg (lõhkeainet 1,44 kg) teeb augu, fugasslaeng 2,3 kg (lõhkeainet 1,25 kg) viiakse rakettmootoriga auku; laenguid saab kasutada ka eraldi; ettevalmistus 3 min, 1 inimene",
        "fuze": "Fugasslaengu süütaja aeglusti 1–3 s; käivitusseadme aeglusti 50–83 s"
      },
      "notes": {
        "explosiveMass": "Kumulatiiv- ja fugasslaengu lõhkeaine kokku (1,44 + 1,25 kg).",
        "mineDiameter": "Mõõdud Ø400 × 775 mm."
      },
      "sources": [
        {"name": "KNDISE (Ukraina): КФЗ-Т заміна ОЗ-1", "url": "https://digest.kndise.gov.ua/wp-content/uploads/2025/08/71.pdf", "retrieved": "2026-11-20"}
      ]
    },
    "Dsh-MM ja DM-11": {
      "status": "unverified",
      "values": {
        "purpose": "Väikesed suitsuküünlad lühiajalise maskeeriva suitsukatte loomiseks.",
        "mineMass": 3,
        "smokeDuration": "ShD-MM: süttib 7 s, tihe suits 3–4,5 min",
        "smokeScreen": "ShD-MM: läbipaistmatu suitsukatte pikkus 70–100 m (lainepikkused 0,4–1,5 µm)",
        "delivery": "ShD-MM: metallkorpuses metallkloriidsegu (2,6 kg), hõõrdsüütur (rebi foolium ja tõmba nöörist); DM-11 on vanem mudel, mida kasutavad RKBK-väed"
      },
      "notes": {
        "mineMass": "Andmed kehtivad ShD-MM kohta."
      },
      "sources": [
        {"name": "Fenix Insight METIS: DM-11 Smoke Pot", "url": "https://metis.fenixinsight.com/munition/miscellaneous/dm-11-smoke-pot", "retrieved": "2026-11-20"}
      ]
    },
    "ShD-P": {
      "status": "unverified",
      "values": {
        "purpose": "Suurendatud tõhususega suitsuküünal joon- ja alasuitsukatete loomiseks (ka infrapunas).",
        "mineMass": 11,
        "smokeDuration": "51 min; töörežiimile jõuab 5 s jooksul",
        "smokeScreen": "Läbipaistmatu osa nähtavas valguses (0,4–0,76 µm) vähemalt 150 m, infrapunas (2–5,6 µm) vähemalt 30 m",
        "delivery": "Käivitatakse mehaaniliselt või elektriliselt universaalse süüteseadmega; saab paigaldada plokkidena"
      },
      "notes": {
        "mineMass": "Kuni 11 kg."
      },
      "sources": []
    },
    "Vityaz (DT-10/DT-30)": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Arktika brigaad",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kahelüliline ujuv roomikmaastikusõiduk (toodetud alates 1982. aastast) raskete koormate veoks soos, liivas, lumes ja äärmuslikus kliimas.",
        "crew": "5",
        "combatWeight": 30,
        "loadCapacity": 30000,
        "length": 13.75,
        "width": 2.8,
        "height": 2.7,
        "engine": "DT-30PM: YaMZ-847.10 diisel; varem V-46-5 mitmekütuse diisel (710 hj)",
        "power": 800,
        "maxSpeedRoad": 45,
        "maxSpeedWater": 6,
        "range": 700,
        "amphibious": true,
        "gradient": 58,
        "sideSlope": 27,
        "verticalStep": 1.2,
        "trench": 4.5,
        "specialEquipment": "DT-10PM: mass 23,5 t, kandevõime 10 t, 710 hj, kuni 44 km/h"
      },
      "notes": {
        "combatWeight": "DT-30 tühimass; kandevõime samuti 30 t.",
        "length": "DT-30.",
        "power": "DT-30PM."
      },
      "sources": [
        {"name": "Wikipedia: Vityaz (ATV)", "url": "https://en.wikipedia.org/wiki/Vityaz_(ATV)", "retrieved": "2026-11-20"},
        {"name": "Deagel: DT-30", "url": "https://deagel.com/armies/dt-30/a002698", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Russian military beefs up all-terrain capabilities (2018)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2018/russian-military-beefs-up-all-terrain-capabilities", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Russian Army Arctic brigade has taken delivery of DT-10PM two-section tracked amphibious carrier", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2015/russian-army-arctic-brigade-has-taken-delivery-of-dt-10pm-two-section-tracked-amphibious-carrier-tass-12912152", "retrieved": "2026-11-25"}
      ]
    },
    "GAZ-3344 Aleut": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Arktika motolaskurbrigaad",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Kahelüliline ujuv roomikmaastikusõiduk Arktika tingimustesse (kasutusel alates 2019. aastast).",
        "seats": "Kuni 20 (esilülis 5 koos juhiga)",
        "combatWeight": 11.2,
        "loadCapacity": 2500,
        "engine": "YaMZ-5347-26 diisel, Allisoni automaatkäigukast",
        "amphibious": true,
        "specialEquipment": "Esilüli on jõumoodul, tagalüli ümberehitatav sõitjate-, sanitaar-, magamis- või juhtimismoodul; mõlemad lülid köetavad. Kasutustemperatuur −50 kuni +40 °C"
      },
      "notes": {
        "combatWeight": "Täismass koos 2,5 t lastiga.",
        "loadCapacity": "Esilüli 500–750 kg, tagalüli 2000–2250 kg (allikad erinevad)."
      },
      "sources": [
        {"name": "Janes: Russia's GAZ-3344-20 Aleut ATV enters service", "url": "https://www.janes.com/defence-intelligence-insights/defence-news/russias-gaz-3344-20-aleut-atv-enters-service", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: GAZ-3344-20 at BIDEC 2017", "url": "https://armyrecognition.com/waac", "retrieved": "2026-11-20"},
        {"name": "Defence Blog: GAZ-3344-20 at BIDEC-2017", "url": "https://defence-blog.com/?p=28228", "retrieved": "2026-11-20"},
        {"name": "Defence24: Rosja: nowe śniegobłotochody wchodzą na uzbrojenie brygady arktycznej", "url": "https://defence24.pl/sily-zbrojne/rosja-nowe-sniegoblotochody-wchodza-na-uzbrojenie-brygady-arktycznej", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian tank unit in Buryatia receive Aleut articulated amphibious vehicles (2021)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2021/russian-tank-unit-in-buryatia-receive-aleut-articulated-amphibious-vehicles", "retrieved": "2026-11-27"}
      ]
    },
    "KAMAZ-6350, 8x8": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Taktikaline veok, peamiselt relvasüsteemide ja eriseadmete alus.",
        "seats": "1 + 2 kabiinis",
        "driveConfig": "8×8",
        "combatWeight": 12.4,
        "loadCapacity": 10000,
        "towingCapacity": 12000,
        "length": 9.83,
        "width": 2.55,
        "height": 3.1,
        "engine": "KamAZ-740.50-360 V8 diisel, 11,8 l",
        "power": 360,
        "maxSpeedRoad": 95,
        "range": 1000,
        "fuelCapacity": 375,
        "groundClearance": 390,
        "verticalStep": 0.6,
        "specialEquipment": "Kasutusel ka suurtükivedukina"
      },
      "notes": {
        "combatWeight": "Tühimass; täismass 22,6 t.",
        "height": "Kabiini katuseni; presendiga 3,26 m."
      },
      "sources": [
        {"name": "WeaponSystems.net: KamAZ-6350", "url": "https://weaponsystems.net/system/1280-KamAZ-6350", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Kamaz 6350 artillery tractor (2011)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2011/russia-22-december-2011-news-uk", "retrieved": "2026-11-20"},
        {"name": "Defence24: Rosyjskie opancerzone ciężarówki coraz liczniejsze", "url": "https://defence24.pl/sily-zbrojne/rosyjskie-opancerzone-ciezarowki-coraz-liczniejsze", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-11-27"},
        {"name": "The Moscow Times: Russia's KamAZ Sees Nearly Half of Output Shift to Defense Orders (2026)", "url": "https://www.themoscowtimes.com/2026/02/16/russias-kamaz-sees-nearly-half-of-output-shift-to-defense-orders-a91966", "retrieved": "2026-11-27"}
      ]
    },
    "R-161PU": {
      "status": "unverified",
      "values": {
        "purpose": "Automatiseeritud raadiosidesõlme vastuvõtuosa telegraafi- ja telefonisideks mitmes raadiovõrgus korraga.",
        "crew": "5",
        "chassis": "Ural-4320 või KamAZ (kung-kere)",
        "commsFrequency": "Vastuvõtuantennid 1,5–60 MHz (KV ja UKV); juhtimiseks raadioreleejaam R-151VCh 525–645 MHz",
        "commsMastHeight": 19,
        "specialEquipment": "Juhib raadioreleeliini (25–30 km) või kaabli kaudu saatesõlme R-161U saatjaid, mis paiknevad tavaliselt 5–10 km eemal",
        "radioSets": "6 vastuvõtjat (R-160P-02 ja R-160P); juhtimiseks raadioreleejaam R-151VCh",
        "emplacementTime": "50–90 min",
        "powerSupply": "Voolutarve kuni 8 kW"
      },
      "notes": {
        "commsMastHeight": "R-151VCh antenni teleskoopmast; antennisüsteemi AP-122 mast 12 m."
      },
      "sources": []
    },
    "ISDM Zemledelije": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pioneeribrigaad",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Kaugmineerimissüsteem (kasutusel alates 2020. aastast), mis laseb kassettrakettidega miinivälja 5–15 km kaugusele.",
        "crew": "3",
        "chassis": "KamAZ-6560, soomustatud kabiin",
        "driveConfig": "8×8",
        "length": 10.3,
        "width": 2.5,
        "caliber": 122,
        "launchTubes": 50,
        "firingRangeMin": 5,
        "firingRange": 15,
        "mineLaying": "Kaks vahetatavat transpordi-stardikonteinerit, kummaski 25 toru (5 × 5). Kassettraketid hajutavad miinid sihtalale; miinivälja kuju, suuruse, tiheduse ja miinitüübi määrab operaator töökohalt",
        "mineCapacity": "50 kassettraketti: POM-3 jalaväemiinid või PTM-4 tankitõrjemiinid; võimalik ka segaväli",
        "specialEquipment": "Satelliitnavigatsioon, pardaarvuti ja meteojaam tule korrigeerimiseks; mineeritud ala kantakse elektroonilisele kaardile ja edastatakse kõrgemale staabile. Kompleksi kuulub laadimismasin (samuti KAMAZ-6560) kraanaga, mis vahetab konteinerid"
      },
      "notes": {
        "mineCapacity": "PTM-4 isehävitus valitav 8, 12, 24 või 48 h järel, isedeaktiveerumine 120 päeva pärast. Osa miine võib isehävitusel mitte plahvatada."
      },
      "sources": [
        {"name": "Wikipedia: Zemledeliye (minelaying system)", "url": "https://en.wikipedia.org/wiki/Zemledeliye_(minelaying_system)", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: ISDM Zemledeliye", "url": "https://armyrecognition.com/military-products/army/engineer-maintenance-vehicles/mine-laying-systems/isdm-zemledeliye", "retrieved": "2026-11-20"},
        {"name": "Militarnyi: «Земледелие» – небезпека для української піхоти та бронетехніки", "url": "https://militarnyi.com/uk/articles/zemledelye-nebezpeka-dlya-ukrayinskoyi-pihoty-ta-bronetehniky-yak-syly-oborony-znyshhuyut-rosijski-systemy-minuvannya/", "retrieved": "2026-11-20"},
        {"name": "Army Recognition: Russian Army receives ISDM Zemledeliye mine-laying system ahead of schedule", "url": "https://armyrecognition.com/news/army-news/2023/russian-army-receives-isdm-zemledeliye-mine-laying-system-ahead-of-schedule", "retrieved": "2026-11-25"}
      ]
    },
    "1K148 Jastreb-AV": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Vastutuleradar: jälgib vastase mürskude trajektoori ja määrab tulepositsioonide koordinaadid; töötab koos Zoopark-1M-iga.",
        "chassis": "BAZ-6910-025",
        "driveConfig": "8×8",
        "radarRange": 40,
        "specialEquipment": "Antennijaam šassii tagaosas"
      },
      "notes": {
        "radarRange": "Täpsed andmed on avalikustamata."
      },
      "sources": [
        {"name": "Army Recognition: Ukraine reports destruction of 1K148 Yastreb-AV", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/ukraine-reports-destruction-of-russia-s-new-1k148-yastreb-av-radar-system", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia deploys the newest Yastreb-AV system", "url": "https://mil.in.ua/en/news/russia-deploys-the-newest-yastreb-av-system-to-war-against-ukraine", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Ukraine destroys two rare Russian Yastreb radars", "url": "https://defence-blog.com/ukraine-destroys-two-rare-russian-yastreb-radars/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russia deploys the newest Yastreb-AV system to war against Ukraine (2 Jan 2024)", "url": "https://militarnyi.com/en/news/russia-deploys-the-newest-yastreb-av-system-to-war-against-ukraine/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Ukrainian Forces Target Russian Counter-Battery Radars: What Was Hit and Why It Matters (Aug 2025)", "url": "https://militarnyi.com/en/articles/ukrainian-forces-target-russian-counter-battery-radars-what-was-hit-and-why-it-matters", "retrieved": "2026-11-25"}
      ]
    },
    "1V110": {
      "status": "unverified",
      "values": {
        "purpose": "Järelveetava suurtükiväe patarei vanemohvitseri juhtimismasin (patarei tulejuhtimiskeskus).",
        "chassis": "GAZ-66 furgoon"
      },
      "sources": [
        {"name": "Weapons Systems of the Former USSR & Russia: Fire Support (GulfLINK)", "url": "https://gulflink.health.mil/irfna/irfna_refs/n28en023/firespt.htm", "retrieved": "2026-11-25"},
        {"name": "Valka.cz: Kód Sovietskej armády – skupina výzbroje 1", "url": "https://www.armedconflicts.com/Kod-Sovietskej-armady-skupina-vyzbroje-1-t41381", "retrieved": "2026-11-25"}
      ]
    },
    "2S34 Hosta": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "120 mm liikurmiinipilduja lähituletoetuseks.",
        "crew": "4",
        "chassis": "Modifitseeritud MT-LBu",
        "combatWeight": 16,
        "length": 7.57,
        "width": 2.85,
        "height": 2.83,
        "groundClearance": 400,
        "engine": "Diisel",
        "power": 300,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 8,
        "range": 500,
        "caliber": 120,
        "mainArmament": "120 mm miinipilduja 2A80-1 (40 lasku); tulistab ka laserjuhitavat mürsku Kitolov-2 ja osa NATO 120 mm laskemoona",
        "secondaryArmament": "7,62 mm PKTM kuulipilduja",
        "rateOfFire": 12,
        "firingRangeMin": 0.5,
        "firingRange": 14,
        "armor": "Teras 8–20 mm"
      },
      "notes": {
        "rateOfFire": "10–12 lasku/min.",
        "firingRange": "Teistel andmetel 13 km."
      },
      "sources": [
        {"name": "Army Recognition: Russian Land Forces to upgrade 2S1 to 2S34 Hosta (2016)", "url": "https://armyrecognition.com/news/army-news/army-news-2016/russian-land-forces-to-upgrade-its-122mm-2s1-gvozdika-self-propelled-guns-to-2s34-hosta-tass-30804165", "retrieved": "2026-11-25"},
        {"name": "Army Guide: 2S34 Chosta", "url": "https://www.army-guide.com/eng/product4711.html", "retrieved": "2026-11-25"},
        {"name": "WeaponSystems.net: 2S34 Hosta", "url": "https://weaponsystems.net/system/1400-2S34%20Hosta", "retrieved": "2026-11-25"},
        {"name": "Tank Encyclopedia: 2S34 Hosta", "url": "https://tank-afv.com/modern/Russia/2S34-Chosta.php", "retrieved": "2026-11-25"},
        {"name": "Mil.in.ua: Ukrainian soldiers capture enemy Hosta self-propelled howitzer", "url": "https://mil.in.ua/en/news/ukrainian-soldiers-capture-enemy-hosta-self-propelled-howitzer/", "retrieved": "2026-11-27"}
      ]
    },
    "2S35": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["prototype"], "asOf": 2024},
        "purpose": "152 mm liikurhaubits (kasutusel alates 2023. aastast).",
        "crew": "2–3",
        "chassis": "T-90 (tõenäoliselt); hilisematel versioonidel Armata",
        "combatWeight": 48,
        "engine": "Diisel",
        "power": 1000,
        "caliber": 152,
        "mainArmament": "152 mm kahur 2A88 (60–70 lasku)",
        "secondaryArmament": "Kaugjuhitav 12,7 mm Kord; 2 suitsugranaadiheitjate komplekti 902B Tucha",
        "rateOfFire": 16,
        "firingRange": 40,
        "firingRangeExt": 80,
        "firingRangeGuided": 70,
        "specialEquipment": "Laadimismasin laeb täiskomplekti 15 minutiga."
      },
      "notes": {
        "combatWeight": "48–55 t.",
        "rateOfFire": "Väidetav keskmine.",
        "firingRangeGuided": "Täppismoon 70–80 km."
      },
      "sources": [
        {"name": "Wikipedia: 2S35 Koalitsiya-SV", "url": "https://en.wikipedia.org/wiki/2S35_Koalitsiya-SV", "retrieved": "2026-11-25"},
        {"name": "Canadian Army Journal 20-2 (2024), Grau & Bartles: The 2S35 Koalitsiya-SV, Robotics and the Future of Russian Artillery Modernization", "url": "https://www.canada.ca/en/army/services/canadian-army-journal/articles/2024/20-2-grau-and-bartles-russian-artillery-modernization.html", "retrieved": "2026-11-25"}
      ]
    },
    "2S40": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "120 mm liikurmiinipilduja (kasutusel alates 2023. aastast).",
        "crew": "4",
        "chassis": "Ural-4320",
        "driveConfig": "6×6",
        "combatWeight": 20,
        "caliber": 120,
        "mainArmament": "Poolautomaatne 120 mm vintraudne kahur; kõik miinipilduja- ja suurtükimoona liigid",
        "firingRange": 8.5,
        "firingRangeGuided": 10
      },
      "sources": [
        {"name": "Wikipedia: 2S40 Floks", "url": "https://en.wikipedia.org/wiki/2S40_Floks", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian army began to arm with 2S40 Flox ACS (6 Oct 2023)", "url": "https://militarnyi.com/en/news/russian-army-began-to-arm-with-2s40-flox-acs/", "retrieved": "2026-11-25"}
      ]
    },
    "2S41": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["prototype"], "asOf": 2023},
        "purpose": "Õhudessantvägede 82 mm liikurmiinipilduja (kasutusel alates 2023. aastast).",
        "typicalUnit": "Õhudessantvägede suurtükipatarei",
        "crew": "4",
        "chassis": "KamAZ-4386 „Taifun-VDV“",
        "driveConfig": "4×4",
        "combatWeight": 14.5,
        "engine": "KamAZ-650.10-350 diisel",
        "power": 350,
        "maxSpeedRoad": 100,
        "caliber": 82,
        "mainArmament": "82 mm miinipilduja (40 lasku masinas)",
        "rateOfFire": 12,
        "firingRangeMin": 0.1,
        "firingRange": 6
      },
      "sources": [
        {"name": "Wikipedia: 2S41 Drok", "url": "https://en.wikipedia.org/wiki/2S41_Drok", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia delivers experimental batch of self-propelled mortar carrier Drok (2023)", "url": "https://armyrecognition.com/news/army-news/army-news-2023/russia-delivers-an-experimental-batch-of-self-propelled-howitzers-drok-to-the-russian-armed-forces", "retrieved": "2026-11-27"},
        {"name": "Militarnyi: An experimental batch of Drok self-propelled mortars was manufactured in Russia", "url": "https://militarnyi.com/?p=212458", "retrieved": "2026-11-27"}
      ]
    },
    "MT-LB-ZU23": {
      "status": "unverified",
      "values": {
        "purpose": "Improviseeritud iseliikuv õhutõrjekahur (ZU-23-2 MT-LB katusel) objektide lähikaitseks, ka droonide vastu, ja jalaväe tuletoetuseks.",
        "typicalUnit": "Objektide lähikaitse õhutõrjeüksus",
        "chassis": "MT-LB",
        "caliber": 23,
        "mainArmament": "ZU-23-2: 2 × 23 mm automaatkahur 2A14",
        "rateOfFire": 2000,
        "cannonRangeAir": 2500,
        "specialEquipment": "Vähemalt kaks varianti: kahur lahtises tornis või kere taha ulatuval platvormil katusega"
      },
      "notes": {
        "rateOfFire": "Kahe toru kokku."
      },
      "sources": [
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: MT-LB – combat chariot of the Russo-Ukrainian war", "url": "https://militarnyi.com/en/articles/mt-lb-combat-chariot-of-the-russo-ukrainian-war", "retrieved": "2026-11-25"},
        {"name": "CIT: Why Has Russia Mounted Anti-Aircraft Guns on MT-LBs (2023)", "url": "https://notes.citeam.org/tankenstein", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: ZU-23-2", "url": "https://en.wikipedia.org/wiki/ZU-23-2", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-ZD": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Õhudessantvägede õhutõrjesoomuk (kasutusel alates 1984. aastast), mis veab kaht õhutõrje-taskuraketimeeskonda.",
        "typicalUnit": "Õhudessantpolk; Õhudessantdiviisi õhutõrjepataljon",
        "chassis": "BTR-D",
        "samMissiles": "Strela/Igla taskuraketid (2 meeskonda), varuraketid riiulitel"
      },
      "sources": [
        {"name": "WeaponSystems.net: BTR-ZD Skrezhet", "url": "https://weaponsystems.net/system/64-BTR-ZD+%22Skrezhet%22", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-25"}
      ]
    },
    "BTR-D-ZU23": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhudessantväed",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Katusele paigaldatud ZU-23-2 õhutõrjekahuriga soomuk õhutõrjeks ja jalaväe tuletoetuseks.",
        "chassis": "BTR-D",
        "caliber": 23,
        "mainArmament": "ZU-23-2: 2 × 23 mm automaatkahur 2A14",
        "rateOfFire": 2000,
        "cannonRangeAir": 2500
      },
      "notes": {
        "rateOfFire": "Kahe toru kokku."
      },
      "sources": [
        {"name": "WeaponSystems.net: BTR-ZD Skrezhet", "url": "https://weaponsystems.net/system/64-BTR-ZD+%22Skrezhet%22", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: ZU-23-2", "url": "https://en.wikipedia.org/wiki/ZU-23-2", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-11-26"}
      ]
    },
    "9T452": {
      "status": "unverified",
      "values": {
        "purpose": "BM-27 Uragani laadimismasin.",
        "chassis": "ZIL-135LM",
        "driveConfig": "8×8",
        "specialEquipment": "16 varuraketti kahes virnas sõiduki külgedel; hüdrauliline kraana kabiini taga (1 operaator); laskeseadme laadimine umbes 20 min"
      },
      "sources": [
        {"name": "Wikipedia: BM-27 Uragan", "url": "https://en.wikipedia.org/wiki/BM-27_Uragan", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: BM-27 9P140 Uragan", "url": "https://armyrecognition.com/military-products/army/artillery-vehicles-and-weapons/multiple-launch-rocket-systems/bm-279p140-uragan-russia-uk", "retrieved": "2026-11-25"},
        {"name": "FAS: 9P140 Uragan", "url": "https://man.fas.org/dod-101/sys/land/row/9p140.htm", "retrieved": "2026-11-25"}
      ]
    },
    "TOS-2 Tosotška": {
      "status": "unverified",
      "values": {
        "typicalUnit": "TBK-kaitseüksus",
        "productionStatus": {"status": ["prototype"], "asOf": 2025},
        "purpose": "Termobaariliste rakettidega raske leegiheitjasüsteem (kasutusel alates 2021. aastast) kindlustatud positsioonide ja kergsoomustatud masinate vastu.",
        "chassis": "Ural-63706-0120",
        "driveConfig": "6×6",
        "caliber": 220,
        "launchTubes": 18,
        "firingRange": 20,
        "specialEquipment": "Raketid MO.1.01.04M (217 kg, pikkus 3,7 m) ja MO.1.01.04 (173 kg)."
      },
      "notes": {
        "firingRange": "Laiendatud 2024; rakett MO.1.01.04M2 kuni 10 km."
      },
      "sources": [
        {"name": "Wikipedia: TOS-2", "url": "https://en.wikipedia.org/wiki/TOS-2", "retrieved": "2026-11-25"},
        {"name": "European Security & Defence: Russia poised to expand thermobaric artillery inventory (Nov 2025)", "url": "https://euro-sd.com/2025/11/articles/armament/47751/russia-poised-to-expand-thermobaric-artillery-inventory", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russia confirms TOS-2 thermobaric rocket launcher deployment in Ukraine (2023)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/russia-confirms-tos-2-thermobaric-rocket-launcher-deployment-in-ukraine", "retrieved": "2026-11-27"},
        {"name": "Defense Mirror: Heavy Flame Thrower with New Anti-Drone Protection Delivered to Russian Army (2025)", "url": "https://defensemirror.com/news/40526/Heavy_Flame_Thrower_with_New_Anti_Drone_Protection_Delivered_to_Russian_Army", "retrieved": "2026-11-27"}
      ]
    },
    "Gerbera-2": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Kaugmaa ründe- ja luuredroon, Gerbera suurendatud versioon.",
        "length": 3,
        "ferryRange": 1200,
        "warheadMass": 25,
        "engine": "Kahesilindriline kahetaktiline kolbmootor",
        "sensors": "Kahekordne IP-kaamera kütusepaagi kohal püüdurdroonide avastamiseks; teistel versioonidel ees asuvad või stabiliseeritud kaamerad",
        "specialEquipment": "Suurendatud, sektsioonideks jaotatud kütusepaak"
      },
      "notes": {
        "warheadMass": "Vene andmetel kuni 25 kg; uuritud droonil 10 kg kildlõhke-süütelõhkepea."
      },
      "sources": [
        {"name": "Ukrainska Pravda: DIU reveals upgraded Gerbera drone (2026)", "url": "https://www.pravda.com.ua/eng/news/2026/11/02/8060813/", "retrieved": "2026-11-25"},
        {"name": "Kyiv Post: Russia deploys enlarged Gerbera drone (HUR)", "url": "https://www.kyivpost.com/post/88891", "retrieved": "2026-11-25"},
        {"name": "United24 Media: How Russia turned a decoy into a 1200 km attack drone", "url": "https://united24media.com/war-in-ukraine/ukraine-reveals-how-russia-turned-a-decoy-into-a-1200-kilometer-attack-drone-23995", "retrieved": "2026-11-25"},
        {"name": "NV: HUR reveals specs of Gerbera-2", "url": "https://english.nv.ua/nation/russia-deploys-gerbera-2-drones-with-1-200-km-range-50655441.html", "retrieved": "2026-11-25"}
      ]
    },
    "Yolka": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Käest startiv ühekordne püüdurdroon väikeste droonide hävitamiseks otsetabamusega (kasutusel alates 2025. aastast).",
        "maxTakeoffWeightKg": 1.3,
        "maxSpeed": 230,
        "controlRange": 3,
        "sensors": "Nina optiline kaamera, tehisintellektiga automaatne sihtmärgi haaramine („tulista ja unusta“)",
        "specialEquipment": "Lõhkepead pole; ei tööta öösel ega vihmaga; võib pimestuse või sihtmärgi manööverdamise tõttu sihtmärgi kaotada"
      },
      "notes": {
        "maxSpeed": "Teistel andmetel 200 km/h.",
        "controlRange": "Toimeulatus."
      },
      "sources": [
        {"name": "Wikipedia: Yolka (drone interceptor)", "url": "https://en.wikipedia.org/wiki/Yolka_(drone_interceptor)", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: New specs emerge on Russian interceptor drone", "url": "https://defence-blog.com/?p=92783", "retrieved": "2026-11-25"}
      ]
    },
    "EOV-3523": {
      "status": "unverified",
      "values": {
        "chassis": "KamAZ-5350"
      },
      "sources": [
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-11-25"}
      ]
    },
    "BMK-460/BMK-MO/BMK-MT": {
      "status": "unverified",
      "values": {
        "purpose": "Pioneeride puksiirkaater pontoonparvede pukseerimiseks ja veekogude uurimiseks sildade ja parvlaevaülesõitude rajamisel.",
        "typicalUnit": "Pontoonpark",
        "specialEquipment": "Veetakse KamAZ-i kastis; väike kaal ja süvis võimaldavad tegutseda madalas vees ja jääpurdes"
      },
      "sources": [
        {"name": "Army Recognition: Caucasus-2016 river crossing equipment (BMK)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/armies-in-the-world/at-military-exercise-caucasus-2016-russian-armed-forces-tested-latest-river-crossing-equipment-tass-11510161", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Russian engineer brigade receives PP-2005M pontoon bridge", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-archives/russian-engineer-brigade-receives-new-pp-2005m-pontoon-bridge", "retrieved": "2026-11-25"}
      ]
    },
    "Ansat": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2024},
        "purpose": "Kerge õppekopter sõjaväelendurite väljaõppeks.",
        "typicalUnit": "Sõjaväelennukool",
        "crew": "1–2",
        "troops": "7–8 reisijat",
        "length": 13.76,
        "rotorDiameter": 11.5,
        "height": 3.4,
        "engine": "2 × Pratt & Whitney Canada PW207K turbovõllmootor (630 hj iga)",
        "power": 1260,
        "maxSpeed": 275,
        "cruiseSpeed": 220,
        "serviceCeiling": 5500,
        "ferryRange": 505
      },
      "notes": {
        "length": "Andmed kehtivad Ansati põhiversiooni kohta."
      },
      "sources": [
        {"name": "Wikipedia: Kazan Ansat", "url": "https://en.wikipedia.org/wiki/Kazan_Ansat", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Rostec presents new version of Ansat helicopter with all-Russian components (2024)", "url": "https://www.armyrecognition.com/archives/archives-aerospace-defense/2024/rostec-presents-new-version-of-ansat-helicopter-with-all-russian-components", "retrieved": "2026-11-26"}
      ]
    },
    "Tu-142": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Mereväe allveelaevatõrje lennuväepolk",
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Kaugmaa allveelaevatõrje- ja mereluurelennuk.",
        "crew": "11–13",
        "length": 53.08,
        "wingspan": 50,
        "height": 12.12,
        "engine": "4 × Kuznetsov NK-12MP turbopropellermootor, kaksikvastupropellerid (14 795 hj iga)",
        "maxSpeed": 925,
        "serviceCeiling": 12000,
        "combatRadius": 6500,
        "sensors": "Tu-142MK: radar Korshun, magnetanomaalia detektor MMS-106 sabas; Tu-142M3/MZ: allveelaevatõrje avioonika Nashatyr-Nefrit, sonar Zarechye, poid RGB-16 ja RGB-26"
      },
      "sources": [
        {"name": "Wikipedia: Tupolev Tu-142", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-142", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Know Your Enemy: Russian Military Aviation in European Russia and Temporarily Occupied Crimea (8 Jan 2026)", "url": "https://militarnyi.com/en/blogs/know-your-enemy-russian-military-aviation-in-european-russia-and-temporarily-occupied-crimea/", "retrieved": "2026-11-25"}
      ]
    },
    "BREM-L": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljoni logistikarühm",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Remondi- ja äraveosoomuk.",
        "chassis": "BMP-3",
        "specialEquipment": "Kraana 5 t; vints 20/40 t"
      },
      "sources": [
        {"name": "Wikipedia: BMP-3 (variandid)", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"},
        {"name": "Defense Mirror: Russian Military Receives Final Batch of BMP-3 IFVs (2022)", "url": "https://defensemirror.com/news/31183/Russian_Military_Receives_Final_Batch_of_BMP_3_IFVs", "retrieved": "2026-11-27"}
      ]
    },
    "BTS-4A": {
      "status": "unverified",
      "values": {
        "purpose": "Äraveosoomuk vigastatud tankide evakueerimiseks lahinguväljalt.",
        "crew": "2",
        "chassis": "T-54 või T-44 (torn eemaldatud)",
        "specialEquipment": "Ujumistoru (snorkel) sügavaks läbimiseks; kokkupandav kraana 3 t; vints; tagumine maakinnituslabidas"
      },
      "notes": {
        "chassis": "Allikate järgi T-54 või T-44M."
      },
      "sources": [
        {"name": "Army Recognition: Rare Russian armored recovery vehicles spotted", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/rare-russian-armored-recovery-vehicles-spotted-advancing-towards-ukraine", "retrieved": "2026-11-25"},
        {"name": "Tanknutdave: The Russian T-54 BTS armoured recovery family", "url": "https://tanknutdave.com/the-russian-t-54-bts-family", "retrieved": "2026-11-25"},
        {"name": "Photos of Military History: BTS-4 / BTS-4A", "url": "https://photosofmilitaryhistory.blogspot.com/2025_11_16_archive.html", "retrieved": "2026-11-25"}
      ]
    },
    "KamAZ-4310/KamAZ-43118, 6x6": {
      "status": "unverified",
      "values": {
        "purpose": "Lastiveok.",
        "driveConfig": "6×6",
        "loadCapacity": 6000,
        "engine": "KamAZ-740 diisel",
        "power": 220
      },
      "notes": {
        "loadCapacity": "KamAZ-4310 põhimudel; KamAZ-43105/43106: 7 t.",
        "power": "Alates 1989; varem 210 hj."
      },
      "sources": [
        {"name": "Wikipedia: KamAZ-4310", "url": "https://en.wikipedia.org/wiki/KamAZ-4310", "retrieved": "2026-11-25"}
      ]
    },
    "GAZ-3308": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["stocks"], "asOf": 2026},
        "purpose": "Kerge maastikuveok.",
        "driveConfig": "4×4",
        "loadCapacity": 2500,
        "engine": "ZMZ-5231 V8 bensiinimootor või diisel (MMZ D-245.7, YaMZ-53442)",
        "power": 130
      },
      "notes": {
        "power": "ZMZ-5231; diislid 117–134,5 hj."
      },
      "sources": [
        {"name": "Wikipedia: GAZ Sadko", "url": "https://en.wikipedia.org/wiki/GAZ_Sadko", "retrieved": "2026-11-25"}
      ]
    },
    "KAMAZ-4350": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Pataljoni logistikarühm",
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Mustangi perekonna taktikaline veok.",
        "driveConfig": "4×4",
        "loadCapacity": 4000,
        "crew": "1 + 2",
        "engine": "V8 diisel",
        "power": 240
      },
      "notes": {
        "loadCapacity": "KamAZ-43501 (lühike teljevahe): 3 t."
      },
      "sources": [
        {"name": "Wikipedia: KamAZ-4350", "url": "https://en.wikipedia.org/wiki/KamAZ-4350", "retrieved": "2026-11-25"},
        {"name": "WeaponSystems.net: KamAZ-4350", "url": "https://weaponsystems.net/system/1278-KamAZ-4350", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"},
        {"name": "The Moscow Times: Russia's KamAZ Sees Nearly Half of Output Shift to Defense Orders (2026)", "url": "https://www.themoscowtimes.com/2026/02/16/russias-kamaz-sees-nearly-half-of-output-shift-to-defense-orders-a91966", "retrieved": "2026-11-27"}
      ]
    },
    "UAZ Patriot": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Keskmise suurusega maastur; kasutusel Vene maaväes, piirivalves ja politseis.",
        "driveConfig": "4×4",
        "engine": "2,7 l bensiinimootor (ka diiselversioonid)",
        "power": 135
      },
      "sources": [
        {"name": "Wikipedia: UAZ Patriot", "url": "https://en.wikipedia.org/wiki/UAZ_Patriot", "retrieved": "2026-11-25"}
      ]
    },
    "UAZ-23632": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "UAZ Patrioti pikapversioon; Vene maaväes kasutusel.",
        "driveConfig": "4×4",
        "loadCapacity": 725
      },
      "sources": [
        {"name": "Wikipedia: UAZ Patriot", "url": "https://en.wikipedia.org/wiki/UAZ_Patriot", "retrieved": "2026-11-25"}
      ]
    },
    "REM-KL": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Motolaskurpataljoni logistikarühm",
        "purpose": "Kerge remondi- ja äraveomasin vigastatud või kinni jäänud masinate remondiks välitingimustes ja evakueerimiseks.",
        "crew": "3",
        "chassis": "Ural-532362",
        "driveConfig": "8×8",
        "specialEquipment": "Töökoda; kraanamanipulaator IM-95 (2,83 t); vints (tross 60 m); pukseerimine poolrippes; generaator remondi- ja keevitustöödeks. Veab 16 t pinnasteel, 22 t kõvakattega teel"
      },
      "sources": [
        {"name": "Wikipedia: REM-KL", "url": "https://en.wikipedia.org/wiki/REM-KL", "retrieved": "2026-11-25"},
        {"name": "Army Technology: REM-KL Repair and Recovery Vehicle", "url": "https://www.army-technology.com/projects/rem-kl-repair-and-recovery-vehicle/", "retrieved": "2026-11-25"},
        {"name": "FMSO (Grau & Bartles): The Russian Way of War (2016)", "url": "https://ia800705.us.archive.org/0/items/The_Russian_Way_of_War_Force_Structure_Tactics_and_Moderniza/The_Russian_Way_of_War__Force_Structure_Tactics_and_Modernization_of_the_Russian_Ground_Forces_Dr._Lester_W._Grau_and_Charles_K._Bartles.pdf", "retrieved": "2026-11-26"}
      ]
    },
    "Ural-63704": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Maastikuveok relvade, sõjatehnika ja lasti veoks ning poolhaagiste pukseerimiseks; on ka soomustatud versioon.",
        "driveConfig": "6×6",
        "loadCapacity": 16000,
        "power": 440
      },
      "notes": {
        "loadCapacity": "Täismass kuni 30 t; haagis kuni 12 t."
      },
      "sources": [
        {"name": "Defence24: Nowe Tornado-U zdobyte przez Ukraińców", "url": "https://defence24.pl/sily-zbrojne/ukraincy-zdobyli-kolejne-rosyjskie-mrapy", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russian Army's new heavy trucks fell into the hands of Ukrainian soldiers", "url": "https://defence-blog.com/russian-armys-new-heavy-trucks-fell-into-the-hands-of-ukrainian-soldiers/", "retrieved": "2026-11-25"}
      ]
    },
    "48Ja6-K1 Podlet-K1": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Liikuv 3D-radar madalal ja eriti madalal lendavate õhusihtmärkide avastamiseks ja jälgimiseks.",
        "radarBand": "S (2–4 GHz)",
        "radarRange": 100,
        "specialEquipment": "Faasantenn ringvaatega; režiimid: madallend (põhirežiim), kõrgus-, kaugavastus- ja mägirežiim"
      },
      "notes": {
        "radarRange": "Teistel andmetel 200–300 km (sõltub sihtmärgist ja kõrgusest)."
      },
      "sources": [
        {"name": "Armed Conflicts (valka.cz): 48Ja6-K1 Podlet-K1", "url": "https://www.armedconflicts.com/48Ya6-K1-Podlet-K1-t255035", "retrieved": "2026-11-25"},
        {"name": "Radartutorial: 48Ya6-K1 Podlet K1", "url": "https://www.radartutorial.eu/19.kartei/02.surv/karte040.en.html", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: Ukraine destroys Podlet-K1 radar system", "url": "https://www.armyrecognition.com/ukraine_-_russia_conflict_war_2022/ukraine_destroys_$5.5_million_podlet-k1_radar_system_at_russian_border.html", "retrieved": "2026-11-25"},
        {"name": "RUSI: Disrupting Russian Air Defence Production (Dec 2025)", "url": "https://static.rusi.org/rp-disrupting-russian-air-defence-production.pdf", "retrieved": "2026-11-25"}
      ]
    },
    "9S18M1": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Õhutõrjeraketibrigaadi pataljon",
        "purpose": "Buk-M1 õhutõrjeraketikompleksi 3D avastusradar.",
        "radarBand": "Sentimeeterlaine",
        "radarRange": 85
      },
      "notes": {
        "radarRange": "100 m kõrgusel lendavat lennukit 35 km; madalamaid sihtmärke 10–20 km."
      },
      "sources": [
        {"name": "Military Periscope: 9S18M1 Snow Drift", "url": "https://www.militaryperiscope.com/weapons/sensorselectronics/ground-radars/9s18m1-snow-drift", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Buk missile system", "url": "https://en.wikipedia.org/wiki/Buk_missile_system", "retrieved": "2026-11-25"}
      ]
    },
    "P-18-2 Prima": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Liikuv avastusradar; arendaja väitel avastab ka nähtamatuslennukeid.",
        "crew": "2",
        "radarBand": "VHF",
        "radarRange": 320,
        "emplacementTime": "5 min",
        "specialEquipment": "Kogu varustus ja antenn ühel masinal; täielikult transistoriseeritud, digitaalne signaalitöötlus"
      },
      "sources": [
        {"name": "Radartutorial: P-18-2 Prima", "url": "https://www.radartutorial.eu/19.kartei/02.surv2/karte002.en.html", "retrieved": "2026-11-25"},
        {"name": "Shephard: Russia shows new anti-stealth digital VHF radar", "url": "https://www.shephardmedia.com/news/digital-battlespace/russia-shows-new-anti-stealth-digital-vhf-radar/", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: P-18 radar", "url": "https://en.wikipedia.org/wiki/P-18_radar", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Ukrainian Defense Forces Strike Russian P-18-2 Prima Radar for the First Time (2026)", "url": "https://militarnyi.com/en/news/ukrainian-defense-forces-strike-russian-p-18-2-prima-radar-for-the-first-time/", "retrieved": "2026-11-27"}
      ]
    },
    "S-350 Vitjaz/SA-28": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2025},
        "purpose": "Keskmaa õhutõrjeraketikompleks.",
        "chassis": "BAZ-6909 / BAZ-69092 (kõik masinad)",
        "samMissiles": "Laskeseadmel 50P6 12 × 9M96/9M96E2 (12–120 km) või 9M100 (infrapunasihtimine, 10–15 km)",
        "samRange": {"min": 1500, "max": 120000},
        "specialEquipment": "Koosseis: juhtimispunkt 50K6A (töötab ka iseseisvalt), 1–2 multifunktsionaalset radarit 50N6A (PESA, 360°: avastus, valgustus ja raketi juhtimine), 4–8 laskeseadet 50P6"
      },
      "notes": {
        "samRange": "Aerodünaamilised sihtmärgid 1,5–120 km; ballistilised sihtmärgid 1,5–30 km."
      },
      "sources": [
        {"name": "Wikipedia: S-350E Vityaz 50R6", "url": "https://en.wikipedia.org/wiki/S-350E_Vityaz_50R6", "retrieved": "2026-11-25"},
        {"name": "Jamestown: New S-350 Missile System Will Strengthen Russian Air Defense (2020)", "url": "https://jamestown.org/program/new-s-350-missile-system-will-strengthen-russian-air-defense/", "retrieved": "2026-11-25"},
        {"name": "Militarnyi: Russian Vityaz – a threat from the latest S-350 air defense system (Dec 2023)", "url": "https://militarnyi.com/en/articles/russian-vityaz-a-threat-from-the-latest-s-350-air-defense-system/", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russia ramps up production of S-400 and S-350 systems (2025)", "url": "https://defence-blog.com/russia-ramps-up-production-of-s-400-and-s-350-systems/", "retrieved": "2026-11-27"}
      ]
    },
    "BPM-97 KamAZ-43269": {
      "status": "unverified",
      "values": {
        "typicalUnit": "Piirivalve; Strateegiliste raketivägede julgestusüksus",
        "productionStatus": {"status": ["new"], "asOf": 2023},
        "purpose": "Miinikindel soomustransportöör Vene piirivalvele; kasutusel ka relvajõududes ja julgeolekuasutustes, sh luuresoomukina.",
        "crew": "12",
        "driveConfig": "4×4",
        "chassis": "KamAZ-4326"
      },
      "sources": [
        {"name": "Wikipedia: BPM-97", "url": "https://en.wikipedia.org/wiki/BPM-97", "retrieved": "2026-11-25"},
        {"name": "Army Technology: BPM-97 APC", "url": "https://www.army-technology.com/projects/bpm-97-apc/", "retrieved": "2026-11-25"},
        {"name": "Army Recognition: BPM-97 Vystrel KamAZ-43269 APC", "url": "https://www.armyrecognition.com/russia_russian_army_wheeled_armoured_vehicle_uk/bpm-97_kamaz-43269_vystrel_4x4_armored_personnel_carrier_vehicle_data.html", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russia deploys rare armored vehicles to Ukraine", "url": "https://defence-blog.com/russia-deploys-rare-armored-vehicles-to-ukraine/", "retrieved": "2026-11-25"}
      ]
    },
    "K-53949 Taifun-K, 4x4": {
      "status": "unverified",
      "values": {
        "productionStatus": {"status": ["new"], "asOf": 2026},
        "purpose": "Miinikindel soomusauto vägede ja sõjaväelasti veoks miiniohtlikel aladel.",
        "crew": "2 + 8",
        "driveConfig": "4×4",
        "combatWeight": 15,
        "power": 350,
        "maxSpeedRoad": 105
      },
      "sources": [
        {"name": "Army Technology: Kamaz-53949 Typhoon-K", "url": "https://www.army-technology.com/projects/kamaz-53949-typhoon-k-armoured-vehicle/", "retrieved": "2026-11-25"},
        {"name": "Defence Blog: Russia showcases its upgraded Typhoon-K armoured vehicle", "url": "https://defence-blog.com/russia-showcases-its-upgraded-typhoon-k-armoured-vehicle/", "retrieved": "2026-11-25"},
        {"name": "Defense Mirror: Rosoboronexport Launches Typhoon-K Armored Vehicle on the Foreign Market (2023)", "url": "https://defensemirror.com/news/34036", "retrieved": "2026-11-27"}
      ]
    },
    "MP-1IM": {
      "status": "unverified",
      "values": {
        "purpose": "Kompleksne sidemasin, mis ühendab lähi-, kaug- ja raadioreleeside ning juhtme- ja raadioside.",
        "typicalUnit": "Pataljon"
      },
      "notes": {
        "typicalUnit": "Ainult ühe allika andmetel."
      },
      "sources": [
        {"name": "Oryx: Documenting Russian equipment losses (MP-1IM/MP-2IM signals vehicle)", "url": "https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html", "retrieved": "2026-11-25"},
        {"name": "Sina Military: MP-2IM (fotogalerii)", "url": "http://slide.mil.news.sina.com.cn/slide_8_87721_116597.html", "retrieved": "2026-11-25"}
      ]
    },
    "R-187-P1 Azart": {
      "status": "unverified",
      "values": {
        "purpose": "Taktikaline käsiraadiojaam (kasutusel alates 2014. aastast).",
        "weightKg": 0.466,
        "commsFrequency": "27–520 MHz",
        "specialEquipment": "Saatevõimsus kuni 4 W; sagedushüpe; GLONASS/GPS-vastuvõtja",
        "powerSupply": "Aku, tööaeg kuni 12 h"
      },
      "notes": {
        "weightKg": "Ilma aku ja antennita."
      },
      "sources": [
        {"name": "Wikipedia: R-187 Azart", "url": "https://en.wikipedia.org/wiki/R-187_Azart", "retrieved": "2026-11-26"}
      ]
    },
    "R-168-5UN Akveduk": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav ja sõidukisse paigaldatav UKV-raadiojaam (kasutusel alates 2000. aastast).",
        "commsFrequency": "30–87,975 MHz",
        "commsRange": "8–12 km",
        "specialEquipment": "Sisseehitatud krüpteerimisseade; sagedushüpe; kaugjuhtimine telefoniliini kaudu kuni 500 m",
        "powerSupply": "Aku 10NKGTs 6-2"
      },
      "notes": {
        "commsRange": "Teistel andmetel 10–12 km."
      },
      "sources": [
        {"name": "Army Guide: R-168-5UN(1)E", "url": "https://army-guide.com/eng/product2924.html", "retrieved": "2026-11-26"},
        {"name": "ARMSNET: R-168-5UN(1)E", "url": "https://armsnet.duckdns.org/equipment/40c11209-b3e9-462a-ec47-08de6e3c1543", "retrieved": "2026-11-26"},
        {"name": "ARMSNET: R-168-5UN-1", "url": "https://armsnet.duckdns.org/equipment/80dd7edf-a0d5-4e95-f0a9-08de6e3c1543", "retrieved": "2026-11-26"}
      ]
    },
    "BaoFeng UV-5R/BaoFeng BF-F8": {
      "status": "unverified",
      "values": {
        "purpose": "Tsiviilkasutuseks mõeldud käsiraadiojaam, mida kasutavad Ukraina sõjas mõlemad pooled.",
        "commsFrequency": "136–174 MHz; 400–520 MHz",
        "specialEquipment": "Saatevõimsus 1–5 W; krüpteerimata"
      },
      "notes": {
        "commsFrequency": "Andmed kehtivad UV-5R kohta."
      },
      "sources": [
        {"name": "Wikipedia: Baofeng UV-5R", "url": "https://en.wikipedia.org/wiki/Baofeng_UV-5R", "retrieved": "2026-11-26"}
      ]
    },
    "PSNR-8M Kredo-M1 1L120": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav luureradar liikuvate maa- ja veesihtmärkide avastamiseks ning suurtükitule toetamiseks (kasutusel alates 2002. aastast).",
        "crew": "2",
        "weightKg": 51,
        "radarBand": "2 cm (J-riba)",
        "radarRange": 32,
        "radarTargets": "Inimene 7–8 km, tank 16 km, veoauto 32 km, 155 mm mürsu plahvatus 5 km",
        "powerSupply": "Võimsustarve 110 W; pidev töö kuni 24 h"
      },
      "notes": {
        "crew": "Teistel andmetel 2–3.",
        "radarTargets": "Teistel andmetel liikuv inimene 5–8 km, liikuv tank 12–16 km, seisev sõiduk kuni 40 km."
      },
      "sources": [
        {"name": "ARMSNET: PSNR-8 Kredo-M1", "url": "https://armsnet.duckdns.org/equipment/5f22cfc6-5484-4fc0-ee87-08de6e3c1543", "retrieved": "2026-11-26"},
        {"name": "StrategyPage: Electronic Weapons (Nov 2001)", "url": "https://www.strategypage.com/htmw/htecm/articles/20011123.aspx", "retrieved": "2026-11-26"}
      ]
    },
    "SBR-5 Fara-1 1L111": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav radarsihik liikuvate maasihtmärkide avastamiseks ning automaatgranaadiheitja ja kuulipildujate sihtimiseks.",
        "crew": "1",
        "weightKg": 16.5,
        "radarBand": "Sentimeeter- ja millimeeterlained",
        "radarRange": 4,
        "radarTargets": "Inimene 2 km, tank 4 km",
        "powerSupply": "Võimsustarve 12 W"
      },
      "sources": [
        {"name": "ARMSNET: Fara-1 (1L111)", "url": "https://armsnet.duckdns.org/equipment/b3fb2b53-3124-4b5d-eabd-08de6e3c1543", "retrieved": "2026-11-26"}
      ]
    },
    "SBR-3 Fara-U 1RL136": {
      "status": "unverified",
      "values": {
        "purpose": "Kaasaskantav lähiluureradar liikuvate maasihtmärkide avastamiseks (kasutusel alates 1978. aastast).",
        "crew": "1",
        "weightKg": 18.3,
        "radarBand": "J (10–20 GHz)",
        "radarRange": 4,
        "radarTargets": "Inimene 2 km, sõiduk 4 km",
        "powerSupply": "Võimsustarve 50 W"
      },
      "sources": [
        {"name": "ARMSNET: SBR-3 Fara (1RL136)", "url": "https://armsnet.duckdns.org/equipment/0344257d-3e93-4a26-eac9-08de6e3c1543", "retrieved": "2026-11-26"}
      ]
    }
  },
  "systems": {
    "R-330 Mandat": {
      "name": "R-330 Mandat",
      "purpose": "Automatiseeritud raadioluure ja häirete kompleks taktikalise lüli KV- ja UKV-raadioside mahasurumiseks.",
      "typicalUnit": "Elektroonilise võitluse rood",
      "members": [
        {"name": "R-330K", "role": "juhtimispunkt"},
        {"cat": "R-330BM (R-330 Mandat)", "name": "R-330BM", "role": "UKV-häirejaam"},
        {"cat": "R-378A (R-330 Mandat)", "name": "R-378A", "role": "KV-häirejaam"},
        {"cat": "R-378B (R-330 Mandat)", "name": "R-378B", "role": "KV-häirejaam"},
        {"cat": "R-325U (R-330 Mandat)", "name": "R-325U", "role": "KV/UKV-häirejaam"}
      ],
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-25"},
        {"name": "Armada International: Russian Radiation (2022)", "url": "https://www.armadainternational.com/2022/01/ukraine-russia-electronic-warfare/", "retrieved": "2026-11-25"}
      ]
    },
    "RB-301B Borisoglebsk-2": {
      "name": "RB-301B Borisoglebsk-2",
      "purpose": "Automatiseeritud elektroonilise võitluse kompleks raadioside avastamiseks, suuna määramiseks ja häirimiseks.",
      "typicalUnit": "Elektroonilise võitluse rood",
      "members": [
        {"cat": "R-300KMV (RB-301B Borisoglebsk-2)", "name": "R-330KMV", "role": "juhtimispunkt"},
        {"cat": "R-378BMV (RB-301B Borisoglebsk-2)", "name": "R-378BMV", "role": "KV-häirejaam, 2 tk"},
        {"cat": "RB-301B (RB-301B Borisoglebsk-2)", "name": "R-330BMV", "role": "häirejaam, 2 tk"},
        {"cat": "R-934BMV (RB-301B Borisoglebsk-2)", "name": "R-934BMV", "role": "lennunduse raadioside häirejaam, 2 tk"},
        {"cat": "R-325UMV (RB-301B Borisoglebsk-2)", "name": "R-325UMV", "role": "häirejaam, 2 tk"}
      ],
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-11-25"},
        {"name": "OE Watch: Russia tests Palantin EW system in Ukraine", "url": "https://oe.t2com.army.mil/product/russia-tests-palantin-electronic-warfare-system-in-ukraine/", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Borisoglebsk-2", "url": "https://en.wikipedia.org/wiki/Borisoglebsk-2", "retrieved": "2026-11-25"}
      ]
    },
    "1V12 Mašina-S": {
      "name": "1V12 „Mašina-S“",
      "purpose": "Liikursuurtükiväe automatiseeritud tulejuhtimiskomplekt luureks, laskeandmete arvutamiseks ja tule juhtimiseks (kasutusel alates 1974. aastast).",
      "typicalUnit": "Liikursuurtükipataljon",
      "members": [
        {"cat": "1V13", "name": "1V13", "role": "patarei tulejuhtimiskeskus, 3 tk"},
        {"name": "1V14", "role": "patarei ülema juhtimis- ja vaatluspunkt, 3 tk"},
        {"cat": "1V15", "name": "1V15", "role": "pataljoni ülema juhtimis- ja vaatluspunkt"},
        {"name": "1V16", "role": "pataljoni tulejuhtimiskeskus"}
      ],
      "sources": [
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-11-25"},
        {"name": "Weapons Systems of the Former USSR & Russia: Fire Support (GulfLINK)", "url": "https://gulflink.health.mil/irfna/irfna_refs/n28en023/firespt.htm", "retrieved": "2026-11-25"}
      ]
    },
    "1V17 Mašina-B": {
      "name": "1V17 „Mašina-B“",
      "purpose": "Järelveetava suurtükiväe ja reaktiivsuurtükiväe automatiseeritud tulejuhtimiskomplekt, 1V12 ratastel vaste.",
      "typicalUnit": "Järelveetava suurtükiväe või mitmikraketiheitja pataljon",
      "members": [
        {"name": "1V19", "role": "pataljoni ülema juhtimis- ja vaatluspunkt, BTR-60"},
        {"name": "1V111", "role": "pataljoni tulejuhtimiskeskus, ZIL-131"},
        {"cat": "1V18", "name": "1V18", "role": "patarei ülema juhtimis- ja vaatluspunkt, 3 tk"},
        {"cat": "1V110", "name": "1V110", "role": "patarei tulejuhtimiskeskus, GAZ-66, 3 tk"}
      ],
      "sources": [
        {"name": "Weapons Systems of the Former USSR & Russia: Fire Support (GulfLINK)", "url": "https://gulflink.health.mil/irfna/irfna_refs/n28en023/firespt.htm", "retrieved": "2026-11-25"},
        {"name": "Mondo Internazionale: God of War – artiglieria russa", "url": "https://mondointernazionale.org/focus-allegati/god-of-war-impiego-struttura-ed-evoluzione-recente-dellartiglieria-russa", "retrieved": "2026-11-25"},
        {"name": "Valka.cz: 1V17 Mašina-B", "url": "https://www.armedconflicts.com/SOV-1V17-velitelske-stanoviste-delostrelectva-t27773", "retrieved": "2026-11-25"}
      ]
    },
    "S-400": {
      "name": "S-400 „Triumf“",
      "purpose": "Pika- ja keskmaa õhutõrjeraketisüsteem: radarid avastavad sihtmärgid, juhtimispunkt jagab need laskeseadmetele ja tulejuhtimisradar juhib rakette.",
      "typicalUnit": "VKS õhutõrjeraketipolk",
      "members": [
        {"name": "55K6E", "role": "juhtimispunkt"},
        {"name": "91N6E", "role": "avastusradar"},
        {"cat": "96L6 Cheese Board", "name": "96L6E", "role": "kõigi kõrguste avastusradar"},
        {"cat": "92N6 Gravestone", "name": "92N6E", "role": "tulejuhtimisradar"},
        {"cat": "S-400 / S-300", "name": "5P85TE2 / 5P85SE2", "role": "laskeseade"},
        {"cat": "55Zh6M Nebo-M", "name": "Nebo-M", "role": "lisaradar"}
      ],
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-11-25"},
        {"name": "Armada International: To Kill a Pantsir (2024)", "url": "https://www.armadainternational.com/2024/07/to-kill-a-pantsir-electronic-warfare/", "retrieved": "2026-11-25"}
      ]
    },
    "S-300P": {
      "name": "S-300P / S-300PM",
      "purpose": "Pika- ja keskmaa õhutõrjeraketisüsteem: avastusradar annab sihtmärgid juhtimispunktile, tulejuhtimisradar jälgib sihtmärke ja juhib rakette.",
      "typicalUnit": "VKS õhutõrjeraketipolk",
      "members": [
        {"name": "54K6", "role": "juhtimispunkt"},
        {"cat": "64N6 Big Bird", "name": "64N6", "role": "üldavastusradar"},
        {"cat": "96L6 Cheese Board", "name": "96L6", "role": "avastusradar"},
        {"name": "76N6", "role": "madallennu avastusradar"},
        {"cat": "30N6 Tombstone", "name": "30N6", "role": "tulejuhtimisradar"},
        {"cat": "S-400 / S-300", "name": "5P85", "role": "laskeseade"}
      ],
      "sources": [
        {"name": "Wikipedia: S-300 missile system", "url": "https://en.wikipedia.org/wiki/S-300_missile_system", "retrieved": "2026-11-25"},
        {"name": "Wikipedia: Air and Missile Defense Forces", "url": "https://en.wikipedia.org/wiki/Air_and_Missile_Defense_Forces", "retrieved": "2026-11-25"}
      ]
    },
    "9K57 Uragan": {
      "name": "9K57 „Uragan“",
      "purpose": "220 mm mitmikraketiheitjakompleks: laskeseade ja laadimismasin.",
      "typicalUnit": "Suurtükibrigaadi mitmikraketiheitjapataljon; Diviisi suurtükipolk",
      "members": [
        {"cat": "BM-27 Uragan", "name": "BM-27 (9P140)", "role": "laskeseade"},
        {"cat": "9T452", "name": "9T452", "role": "laadimismasin"}
      ],
      "sources": [
        {"name": "Wikipedia: BM-27 Uragan", "url": "https://en.wikipedia.org/wiki/BM-27_Uragan", "retrieved": "2026-11-25"},
        {"name": "FAS: 9P140 Uragan", "url": "https://man.fas.org/dod-101/sys/land/row/9p140.htm", "retrieved": "2026-11-25"},
        {"name": "U.S. Army ODIN / WEG: 9P140 (BM-27 Uragan)", "url": "https://odin.t2com.army.mil/WEG/Asset/57ff33a6536a23f1a11644d1f426c13d", "retrieved": "2026-11-26"},
        {"name": "Army Recognition: Analysis – MLRS multiple launch rocket systems of Russian army, part 3", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/analysis-news-mlrs-multiple-launch-rocket-systems-of-russian-army-part-3", "retrieved": "2026-11-26"},
        {"name": "Army Recognition: Russian army deploys new version of BM-27 Uragan MLRS in Ukraine (17 Apr 2024)", "url": "https://armyrecognition.com/focus-analysis-conflicts/army/conflicts-in-the-world/russia-ukraine-war-2022/russian-army-deploys-new-version-of-bm-27-uragan-mlrs-rocket-launcher-in-ukraine", "retrieved": "2026-11-26"}
      ]
    },
    "9K58 Smertš": {
      "name": "9K58 „Smertš“",
      "purpose": "300 mm mitmikraketiheitjakompleks: laskeseade ja laadimismasin.",
      "typicalUnit": "Suurtükibrigaadi mitmikraketiheitjapataljon",
      "members": [
        {"cat": "BM-30 Smertš", "name": "BM-30 (9A52)", "role": "laskeseade"},
        {"cat": "9T234-2", "name": "9T234-2", "role": "laadimismasin"}
      ],
      "sources": [
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-11-25"},
        {"name": "U.S. Army ODIN / WEG: 9A52-2 (BM-30 Smerch-M)", "url": "https://odin.t2com.army.mil/WEG/Asset/2caad55fb3c4c4d5cdd28a2194007544", "retrieved": "2026-11-26"},
        {"name": "Army Recognition: Analysis – MLRS multiple launch rocket systems of Russian army, part 3", "url": "https://www.armyrecognition.com/focus-analysis-conflicts/army/defence-security-industry-technology/analysis-news-mlrs-multiple-launch-rocket-systems-of-russian-army-part-3", "retrieved": "2026-11-26"}
      ]
    },
    "TOS-1A": {
      "name": "TOS-1A „Solntsepjok“",
      "purpose": "Raske leegiheitjasüsteem termobaariliste rakettidega: lahingumasin ja laadimismasin.",
      "typicalUnit": "TBK-kaitse brigaadi leegiheitjapataljon; TBK-kaitse polgu leegiheitjarood",
      "members": [
        {"cat": "TOS-1A Solntsepjok", "name": "BM-1", "role": "lahingumasin"},
        {"cat": "TZM-T", "name": "TZM-T", "role": "laadimismasin"}
      ],
      "sources": [
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-11-25"},
        {"name": "U.S. Army ODIN / WEG: TOS-1A Solntsepek", "url": "https://odin.t2com.army.mil/WEG/Asset/3067b1cfe6cb93f35b4065e3a2067bc7", "retrieved": "2026-11-26"},
        {"name": "Army Recognition: More heavy flamethrower units to appear in Russian armies (Feb 2018)", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2018/more-heavy-flamethrower-units-to-appear-in-russian-armies", "retrieved": "2026-11-26"},
        {"name": "Militarnyi: Solntsepyok, Buratino, and Tosochka – the threat of Russian thermobaric flamethrowers in Ukraine (Oct 2024)", "url": "https://militarnyi.com/en/articles/solntsepyok-buratino-and-tosochka-the-threat-of-russian-thermobaric-flamethrowers-in-ukraine/", "retrieved": "2026-11-26"},
        {"name": "Militarnyi: Russian Army Received a Batch of New Solntsepyok Flamethrower Systems (Nov 2025)", "url": "https://militarnyi.com/en/news/russian-army-received-a-batch-of-new-solntsepyok-flamethrower-systems/", "retrieved": "2026-11-26"},
        {"name": "European Security & Defence: Russia poised to expand thermobaric artillery inventory (Nov 2025)", "url": "https://euro-sd.com/2025/11/articles/armament/47751/russia-poised-to-expand-thermobaric-artillery-inventory", "retrieved": "2026-11-26"}
      ]
    }
  }
};
