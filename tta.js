// TTA andmestik. Võti = mudeli `cat` väärtus index.html CATEGORIES-is (nt "BMD-2").
// Kirje kuju ja töövoog: vt DATA_NOTES.txt. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.TTA_DATA = {
  "version": 6,
  "models": {
    "BMD-2": {
      "status": "unverified",
      "values": {
        "crew": "2 + 6 dessantväelast",
        "combatWeight": 11.5,
        "length": 5.4,
        "width": 2.63,
        "height": 1.97,
        "engine": "5D-20, V6 diisel, 15,9l",
        "power": 241,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 10,
        "range": 450,
        "amphibious": true,
        "airDroppable": true,
        "mainArmament": "30mm 2A42 automaatkahur (300 lasku)",
        "atgm": "9M111 Fagot (AT-4) / 9M113 Konkurs (AT-5)",
        "atgmPenetration": "Fagot 400–600mm, Konkurs 600–800mm (RHA)",
        "secondaryArmament": "2 × 7,62mm PKT (koaksiaalne ja kere), 2940 lasku",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "armor": "Keevitatud alumiiniumsulam: torn 7mm, kere esiosa 15mm, ülejäänud kere 10mm"
      },
      "warnings": {
        "combatWeight": "Allikad lahknevad: mitmes allikas on BMD-2 mass ligikaudu 8t. Kontrolli WEG-ist."
      },
      "notes": {
        "length": "Kere pikkus; kahur ettepoole 5,91m.",
        "height": "Tõstetud vedrustusega; langetatult 1,62m.",
        "atgmRange": "Fagot 9M111: 70–2000m · 9M111M: 75–2500m · Konkurs 9M113: 70–4000m.",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500m."
      },
      "sources": [
        {"name": "Wikipedia: BMD-2", "url": "https://en.wikipedia.org/wiki/BMD-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9K111 Fagot", "url": "https://en.wikipedia.org/wiki/9K111_Fagot", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"}
      ],
      "verifyAgainst": {"name": "U.S. Army ODIN / WEG", "url": "https://odin.t2com.army.mil/WEG/Asset/ffe2837b4c03ff3bb6860fdd342bf0fc"}
    },
    "BMP-2": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast",
        "combatWeight": 14.3,
        "length": 6.735,
        "width": 3.15,
        "height": 2.45,
        "engine": "UTD-20/3 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 7,
        "range": 600,
        "amphibious": true,
        "mainArmament": "30mm 2A42 automaatkahur (~500 lasku)",
        "atgm": "9M113 Konkurs (AT-5); ekspordimudelitel 9K111 Fagot (AT-4)",
        "atgmPenetration": "Konkurs 600–800mm, Fagot 400–600mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne, 2000 lasku",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "armor": "Keevitatud teras, max 33mm"
      },
      "notes": {
        "atgmRange": "Konkurs 9M113: 70–4000m · Fagot 9M111: 70–2000m (9M111M kuni 2500m).",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500m."
      },
      "sources": [
        {"name": "Wikipedia: BMP-2", "url": "https://en.wikipedia.org/wiki/BMP-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"}
      ]
    },
    "BMP-1": {
      "status": "unverified",
      "values": {
        "crew": "3 + 8 dessantväelast",
        "combatWeight": 13.2,
        "length": 6.735,
        "width": 2.94,
        "height": 2.068,
        "engine": "UTD-20, V6 diisel",
        "power": 300,
        "maxSpeedRoad": 65,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 7,
        "range": 600,
        "amphibious": true,
        "mainArmament": "73mm 2A28 „Grom“ sileraudne kahur (40 lasku)",
        "atgm": "9M14 Malyutka (AT-3), 4 raketti; BMP-1P: 9M111 Fagot / 9M113 Konkurs",
        "atgmPenetration": "Malyutka kuni 460mm (9M14P), Fagot/Konkurs 400–800mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (2000 lasku)",
        "mainGunRange": 500,
        "atgmRange": {"min": 500, "max": 3000},
        "armor": "Keevitatud valtsitud teras 6–33mm"
      },
      "notes": {
        "height": "Torni kõrgus 1,881m.",
        "maxSpeedWater": "7–8km/h.",
        "range": "Maastikul 500km.",
        "mainGunRange": "2A28 Grom: lahinguoludes efektiivne kuni 500m.",
        "atgmRange": "9M14 Malyutka: 500–3000m · BMP-1P (9M111/9M113): 70–4000m."
      },
      "sources": [
        {"name": "Wikipedia: BMP-1", "url": "https://en.wikipedia.org/wiki/BMP-1", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M14 Malyutka", "url": "https://en.wikipedia.org/wiki/9M14_Malyutka", "retrieved": "2026-10-07"}
      ]
    },
    "BMP-3": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast (+2 lisakohta)",
        "combatWeight": 18.7,
        "length": 7.14,
        "width": 3.2,
        "height": 2.4,
        "engine": "UTD-29M diisel",
        "power": 500,
        "maxSpeedRoad": 72,
        "maxSpeedOffroad": 45,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "mainArmament": "100mm 2A70 kahur-raketiheitja (40 lasku) + 30mm 2A72 automaatkahur (500 lasku)",
        "atgm": "9M117 Bastion (AT-10) läbi 100mm raua, 8 raketti",
        "atgmPenetration": "550–750mm (RHA, sõltuvalt versioonist)",
        "secondaryArmament": "3 × 7,62mm PKT (1 koaksiaalne, 2 kere esinurkades)",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 4000},
        "armor": "Alumiiniumsulam ja teras"
      },
      "notes": {
        "mainGunRange": "2A70 OF-mürsk (3OF32): 300–4000m.",
        "atgmRange": "9M117 Bastion / 9M117M Kan: 100–4000m · 9M117M1 Arkan: kuni 5500m."
      },
      "sources": [
        {"name": "Wikipedia: BMP-3", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-60": {
      "status": "unverified",
      "values": {
        "crew": "3 + 14 dessantväelast",
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
        "mainArmament": "14,5mm KPVT raskekuulipilduja (500 lasku)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (3000 lasku)",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "armor": "Keevitatud teras: kere 5–9mm, torn 7mm"
      },
      "notes": {
        "crew": "Andmed: BTR-60PB.",
        "power": "2 × 90hj.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000m."
      },
      "sources": [
        {"name": "Wikipedia: BTR-60", "url": "https://en.wikipedia.org/wiki/BTR-60", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: KPV heavy machine gun", "url": "https://en.wikipedia.org/wiki/KPV_heavy_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-80": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 2.9,
        "height": 2.41,
        "engine": "KamAZ-7403 diisel",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedWater": 10,
        "range": 600,
        "amphibious": true,
        "mainArmament": "14,5mm KPVT raskekuulipilduja",
        "secondaryArmament": "7,62mm PKT koaksiaalne",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "armor": "Kere 10mm, torn 7mm"
      },
      "notes": {
        "maxSpeedRoad": "Allikas: 80–90km/h.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000m."
      },
      "sources": [
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: KPV heavy machine gun", "url": "https://en.wikipedia.org/wiki/KPV_heavy_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-82A": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast",
        "combatWeight": 15.4,
        "length": 7.65,
        "width": 2.9,
        "height": 2.8,
        "engine": "KamAZ-740.14-300 turbodiisel",
        "power": 300,
        "maxSpeedRoad": 100,
        "range": 600,
        "amphibious": true,
        "mainArmament": "30mm 2A72 automaatkahur (kahe etteandega)",
        "secondaryArmament": "7,62mm PKTM koaksiaalne; 2 × 3 81mm suitsugranaadiheitjat",
        "armor": "BTR-80-st tugevam soomus, killuvooder"
      },
      "sources": [
        {"name": "Army Technology: BTR-82A", "url": "https://www.army-technology.com/projects/btr-82a-armoured-personnel-carrier/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-07"}
      ]
    },
    "MT-LB": {
      "status": "unverified",
      "values": {
        "crew": "2 + 11 dessantväelast",
        "combatWeight": 11.9,
        "length": 6.45,
        "width": 2.86,
        "height": 1.86,
        "engine": "YaMZ-238 V8 diisel",
        "power": 240,
        "maxSpeedRoad": 61,
        "maxSpeedWater": 6,
        "range": 500,
        "amphibious": true,
        "mainArmament": "7,62mm PKT väikeses tornis (põhiversioon)",
        "secondaryArmament": "MT-LBVM/VMK: 12,7mm NSVT/Kord; MT-LBMB: 30mm automaatkahur",
        "armor": "Max 14mm"
      },
      "notes": {
        "maxSpeedWater": "5–6km/h (liigub roomikutega)."
      },
      "sources": [
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-07"}
      ]
    },
    "MT-LBu": {
      "status": "unverified",
      "values": {
        "crew": "2 + 6",
        "combatWeight": 15.55,
        "length": 7.21,
        "width": 2.85,
        "height": 1.905,
        "engine": "YaMZ-238N V8 diisel",
        "power": 300,
        "maxSpeedRoad": 61.5,
        "maxSpeedOffroad": 30,
        "maxSpeedWater": 6,
        "range": 500,
        "amphibious": true,
        "mainArmament": "Puudub – alusplatvorm eriotstarbelistele masinatele"
      },
      "notes": {
        "combatWeight": "Sõltub paigaldatud eriseadmetest.",
        "maxSpeedWater": "5–6km/h."
      },
      "sources": [
        {"name": "Wikipedia: MT-LBu", "url": "https://en.wikipedia.org/wiki/MT-LBu", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-07"}
      ]
    },
    "BMO-T": {
      "status": "unverified",
      "values": {
        "crew": "2 + 7 leegiheitjat",
        "combatWeight": 43.9,
        "length": 7.22,
        "width": 3.787,
        "height": 2.24,
        "engine": "V-84M diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 35,
        "range": 710,
        "mainArmament": "12,7mm raskekuulipilduja (150 lasku)",
        "secondaryArmament": "30 × RPO-A „Šmel“ termobaarilist leegiheitjat (dessandi relv)",
        "armor": "T-72 kere; ees Kontakt-5 aktiivsoomus, külgedel vahesoomus"
      },
      "warnings": {
        "mainArmament": "Allikad lahknevad: slaidil Kord, tanks-encyclopedia.com järgi NSVT.",
        "secondaryArmament": "Allikad lahknevad: slaidil 32 leegiheitjat, allikas 30."
      },
      "notes": {
        "maxSpeedOffroad": "Maastikul 30–40km/h.",
        "range": "Maastikul 427–657km."
      },
      "sources": [
        {"name": "Tanks Encyclopedia: BMO-T", "url": "https://tanks-encyclopedia.com/bmo-t-heavy-armored-flamethrower-personnel-carrier/", "retrieved": "2026-10-07"}
      ]
    },
    "BMD-4M": {
      "status": "unverified",
      "values": {
        "engine": "UTD-29 diisel",
        "power": 500,
        "mainArmament": "100mm 2A70 kahur-raketiheitja + 30mm 2A72 automaatkahur (moodul Bakhcha-U)",
        "atgm": "9M117M1 Arkan läbi 100mm raua",
        "atgmPenetration": "Kuni 750mm (RHA, aktiivsoomuse taga)",
        "secondaryArmament": "7,62mm PKT koaksiaalne",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 5500}
      },
      "notes": {
        "mainGunRange": "2A70 OF-mürsk: 300–4000m.",
        "power": "BMD-4M: UTD-29 mootor (BMP-3-ga sama). Muud BMD-4M andmed (mass, mõõtmed, kiirus) allikates puudusid."
      },
      "sources": [
        {"name": "Wikipedia: BMD-4", "url": "https://en.wikipedia.org/wiki/BMD-4", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-D": {
      "status": "unverified",
      "values": {
        "crew": "3 + 10 dessantväelast",
        "combatWeight": 8.5,
        "length": 6.74,
        "width": 2.94,
        "height": 1.67,
        "engine": "5D-20, V6 diisel, 15,9l",
        "power": 245,
        "maxSpeedRoad": 61,
        "maxSpeedOffroad": 35,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "airDroppable": true,
        "mainArmament": "2 × 7,62mm PKB kere esinurkades (2000 lasku)",
        "secondaryArmament": "Võib lisaks olla AGS-17/AGS-30 automaatgranaadiheitja",
        "armor": "Kere esiosa 15mm"
      },
      "notes": {
        "combatWeight": "Tühimass 8t.",
        "range": "Vees 116km."
      },
      "sources": [
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-MDM": {
      "status": "unverified",
      "values": {
        "crew": "2 + 13 dessantväelast",
        "combatWeight": 13.2,
        "engine": "UTD-29 diisel",
        "power": 500,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "airDroppable": true,
        "mainArmament": "7,62mm (või 12,7mm) kuulipilduja ülema juures + 7,62mm PKMT ees paremal"
      },
      "notes": {
        "range": "Maastikul 350km."
      },
      "sources": [
        {"name": "Army Technology: BTR-MDM", "url": "https://www.army-technology.com/projects/btr-mdm-armoured-personnel-carrier/", "retrieved": "2026-10-07"}
      ]
    },
    "T-62": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "combatWeight": 37,
        "length": 9.34,
        "width": 3.3,
        "height": 2.4,
        "engine": "V-55V diisel",
        "power": 580,
        "maxSpeedRoad": 50,
        "maxSpeedOffroad": 40,
        "range": 450,
        "mainArmament": "115mm U-5TS (2A20) sileraudne kahur (40 lasku)",
        "atgm": "T-62M jt: AT-12 „Šeksna“ läbi 115mm raua",
        "atgmPenetration": "Umbes 650mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (2500 lasku); 12,7mm DŠK õhutõrjekuulipilduja",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 5000},
        "hmgRange": 2000,
        "armor": "Valatud torn: esiosa 214mm (alates 1972 242mm); kere esiosa 102mm 60° nurga all"
      },
      "notes": {
        "crew": "Andmed: T-62 obr. 1960 (põhiversioon).",
        "length": "Kahur ees; kere 6,63m.",
        "power": "Hiljem 620hj.",
        "range": "Maastikul 320km.",
        "mainGunRange": "Päeval umbes 4km, öösel 800m.",
        "atgmRange": "Ainult moderniseeritud variandid (T-62M, T-62MV jt).",
        "hmgRange": "DŠK."
      },
      "sources": [
        {"name": "Wikipedia: T-62", "url": "https://en.wikipedia.org/wiki/T-62", "retrieved": "2026-10-07"},
        {"name": "GlobalSecurity: AT-12 Sheksna", "url": "https://www.globalsecurity.org/military/world/russia/at-12.htm", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: DShK", "url": "https://en.wikipedia.org/wiki/DShK", "retrieved": "2026-10-07"}
      ]
    },
    "T-72": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 41.5,
        "length": 9.73,
        "width": 3.4,
        "height": 2.23,
        "engine": "V-46-6 diisel",
        "power": 780,
        "maxSpeedRoad": 60,
        "range": 500,
        "mainArmament": "125mm 2A46-seeria sileraudne kahur (39 lasku, neist 22 laadimisautomaadis)",
        "atgm": "T-72B seeria: Svir (AT-11) läbi 125mm raua",
        "atgmPenetration": "700–900mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne; 12,7mm NSVT",
        "mainGunRange": 3000,
        "atgmRange": {"min": 75, "max": 4000},
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "armor": "Teras ja komposiit, aktiivsoomus"
      },
      "notes": {
        "crew": "Andmed: T-72A.",
        "length": "Kahur ees; kere 6,67–6,86m.",
        "width": "3,40–3,59m.",
        "range": "Lisakütusega 650–700km.",
        "mainGunRange": "Maksimaalne otsetule kaugus 3000m; raketiga sihitud tule piir 4000m.",
        "atgmRange": "Ainult T-72B ja uuemad.",
        "hmgRange": "NSVT."
      },
      "sources": [
        {"name": "Wikipedia: T-72", "url": "https://en.wikipedia.org/wiki/T-72", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M119 Svir", "url": "https://en.wikipedia.org/wiki/9M119_Svir", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "T-80": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 46,
        "length": 9.654,
        "width": 3.603,
        "height": 2.202,
        "engine": "GTD-1250 gaasiturbiin",
        "power": 1250,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 48,
        "range": 335,
        "mainArmament": "125mm 2A46M-1 sileraudne kahur (45 lasku)",
        "atgm": "9K119 Refleks (AT-11), 6 raketti",
        "atgmPenetration": "700–900mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne; õhutõrjekuulipilduja (12,7mm NSVT, DŠK või PKT)",
        "atgmRange": {"min": 75, "max": 5000},
        "armor": "Kere ja torn Kontakt-5 aktiivsoomusega"
      },
      "notes": {
        "crew": "Andmed: T-80U. T-80B: 42,5t, gaasiturbiin SG-1000 (1000hj), 9M112 Kobra.",
        "length": "Kahur ees; kere 7m.",
        "range": "Lisapaakidega 415km."
      },
      "sources": [
        {"name": "Wikipedia: T-80", "url": "https://en.wikipedia.org/wiki/T-80", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M119 Svir", "url": "https://en.wikipedia.org/wiki/9M119_Svir", "retrieved": "2026-10-07"}
      ]
    },
    "T-90A": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 46.5,
        "length": 9.63,
        "width": 3.78,
        "height": 2.22,
        "engine": "V-92S2 diisel",
        "power": 1000,
        "maxSpeedRoad": 60,
        "range": 550,
        "mainArmament": "125mm 2A46M-2 sileraudne kahur (42 lasku)",
        "atgm": "9M119M Refleks-M (AT-11) läbi 125mm raua",
        "atgmPenetration": "700–900mm (RHA)",
        "secondaryArmament": "12,7mm Kord; 7,62mm PKMT",
        "atgmRange": {"min": 100, "max": 6000},
        "hmgRange": 2000,
        "armor": "Teras-komposiit, Kontakt-5 aktiivsoomus"
      },
      "warnings": {
        "atgmRange": "Allikad lahknevad: T-90 lehel 100–6000m, 9M119 lehel Refleks 75–5000m."
      },
      "notes": {
        "length": "Kahur ees; kere 6,86m.",
        "range": "Ilma lisakütuseta.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M119 Svir", "url": "https://en.wikipedia.org/wiki/9M119_Svir", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "T-90M": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 48,
        "length": 9.63,
        "width": 3.78,
        "height": 2.22,
        "engine": "V-92S2F diisel",
        "power": 1130,
        "mainArmament": "125mm 2A46M-5 sileraudne kahur (43 lasku)",
        "secondaryArmament": "12,7mm Kord distantsjuhitavas moodulis UDP T05BV-1; 7,62mm koaksiaalne",
        "hmgRange": 2000,
        "armor": "Relikt aktiivsoomus"
      },
      "notes": {
        "length": "Kahur ees; kere 6,86m.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "2S1 Gvozdika": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "combatWeight": 16,
        "length": 7.26,
        "width": 2.85,
        "height": 2.73,
        "engine": "YaMZ-238N diisel",
        "power": 300,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 4.5,
        "range": 500,
        "amphibious": true,
        "mainArmament": "122mm haubits (eraldi laadimine)",
        "rateOfFire": 5,
        "firingRange": 15.3,
        "firingRangeExt": 21.9,
        "armor": "7–20mm",
        "caliber": 122
      },
      "warnings": {
        "mainArmament": "Wikipedia infokastis relv „2A18“ (D-30 tähis); teistes allikates 2A31. Kontrolli WEG-ist."
      },
      "notes": {
        "rateOfFire": "Püsiv 1–2 lasku/min."
      },
      "sources": [
        {"name": "Wikipedia: 2S1 Gvozdika", "url": "https://en.wikipedia.org/wiki/2S1_Gvozdika", "retrieved": "2026-10-07"}
      ]
    },
    "2S3 Akatsiya": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "combatWeight": 28,
        "length": 8.4,
        "width": 3.25,
        "height": 3.05,
        "engine": "V-59 diisel",
        "power": 520,
        "maxSpeedRoad": 63,
        "maxSpeedOffroad": 45,
        "range": 500,
        "mainArmament": "152,4mm D-22 haubits (kuni 46 lasku)",
        "secondaryArmament": "7,62mm PKT kaugjuhitav (1500 lasku)",
        "rateOfFire": 4,
        "firingRange": 18.5,
        "firingRangeExt": 24,
        "armor": "Kere 15mm, torn ja kere esiosa 30mm",
        "caliber": 152.4
      },
      "notes": {
        "length": "Kere 7,765m.",
        "height": "Ilma kuulipildujata 2,615m.",
        "rateOfFire": "Püsiv 1 lask/min."
      },
      "sources": [
        {"name": "Wikipedia: 2S3 Akatsiya", "url": "https://en.wikipedia.org/wiki/2S3_Akatsiya", "retrieved": "2026-10-07"}
      ]
    },
    "2S19 Msta": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "combatWeight": 42,
        "length": 11.91,
        "height": 2.9,
        "engine": "V-84A diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 500,
        "mainArmament": "152mm 2A64 haubits (50 lasku)",
        "secondaryArmament": "12,7mm NSVT (300 lasku)",
        "rateOfFire": 8,
        "firingRange": 24.7,
        "firingRangeExt": 36,
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "caliber": 152,
        "firingRangeBB": 28.9
      },
      "notes": {
        "rateOfFire": "Wikipedia: 6–8 lasku/min; 2S19M2: 10 lasku/min.",
        "firingRange": "2S19M2: 30km.",
        "firingRangeExt": "2S19M2: 40km.",
        "hmgRange": "NSVT.",
        "firingRangeBB": "Põhjagaasigeneraatoriga mürsk."
      },
      "sources": [
        {"name": "Army Technology: 2S19 Msta-S", "url": "https://www.army-technology.com/projects/msta/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2S19 Msta", "url": "https://en.wikipedia.org/wiki/2S19_Msta", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "2S9 Nona": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "combatWeight": 8.7,
        "length": 6.02,
        "width": 2.63,
        "height": 2.3,
        "engine": "5D20 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 9,
        "range": 500,
        "caliber": 120,
        "mainArmament": "120mm 2A51 kahur-miinipilduja (40–60 lasku)",
        "rateOfFire": 10,
        "directFireRange": 1000,
        "firingRange": 8.8,
        "firingRangeExt": 12.8
      },
      "notes": {
        "rateOfFire": "Püsiv 4 lasku/min.",
        "directFireRange": "Kumulatiivmürsk läbistab 600–650mm terast kuni 1km kaugusel.",
        "firingRange": "Wikipedias märgitud efektiivse laskekaugusena (tavamoon).",
        "firingRangeExt": "Pikendatud laskekaugusega moon."
      },
      "sources": [
        {"name": "Wikipedia: 2S9 Nona", "url": "https://en.wikipedia.org/wiki/2S9_Nona", "retrieved": "2026-10-07"}
      ]
    },
    "2S4 Tjulpan": {
      "status": "unverified",
      "values": {
        "crew": "4 (+5 toetusmasinas)",
        "combatWeight": 27.5,
        "length": 7.94,
        "width": 3.25,
        "height": 3.225,
        "engine": "V-59 V12 diisel",
        "power": 520,
        "maxSpeedRoad": 60,
        "range": 500,
        "caliber": 240,
        "mainArmament": "240mm 2B8 miinipilduja (40 lasku)",
        "secondaryArmament": "PKT kuulipilduja (1500 lasku)",
        "rateOfFire": 1,
        "firingRange": 9.65,
        "firingRangeExt": 18,
        "firingRangeGuided": 9.2
      },
      "notes": {
        "firingRangeGuided": "Laserjuhitav „Smeltšak“: 3,6–9,2km."
      },
      "sources": [
        {"name": "Wikipedia: 2S4 Tyulpan", "url": "https://en.wikipedia.org/wiki/2S4_Tyulpan", "retrieved": "2026-10-07"}
      ]
    },
    "2S7 Pion": {
      "status": "unverified",
      "values": {
        "crew": "14",
        "combatWeight": 46.5,
        "length": 10.5,
        "width": 3.38,
        "height": 3,
        "engine": "V-46-I V12 turbodiisel",
        "power": 840,
        "maxSpeedRoad": 50,
        "range": 650,
        "caliber": 203,
        "mainArmament": "203mm 2A44 kahur (L/56,2)",
        "rateOfFire": 1.5,
        "firingRange": 37.5,
        "firingRangeExt": 47.5
      },
      "notes": {
        "mainArmament": "Masinas kohe kasutamiseks 4 lasku (2S7M: 8).",
        "rateOfFire": "2S7M: 2,5 lasku/min."
      },
      "sources": [
        {"name": "Wikipedia: 2S7 Pion", "url": "https://en.wikipedia.org/wiki/2S7_Pion", "retrieved": "2026-10-07"}
      ]
    },
    "2S43 Malva": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "combatWeight": 32,
        "chassis": "BAZ-6610-02 „Voštšina“ 8×8 ratasšassii",
        "engine": "YaMZ-8424.10 diisel",
        "power": 470,
        "maxSpeedRoad": 80,
        "range": 1000,
        "caliber": 152,
        "mainArmament": "152mm 2A64 või 2A88 haubits (30 lasku)",
        "rateOfFire": 7,
        "firingRange": 24.5,
        "firingRangeGuided": 50
      },
      "warnings": {
        "chassis": "Allikad lahknevad: Wikipedia BAZ-6610-02, ODIN/WEG (2S44 kirje) järgi BAZ-6910-027."
      },
      "notes": {
        "firingRange": "2A64.",
        "firingRangeGuided": "3OF95 Krasnopol-M2: üle 50km."
      },
      "sources": [
        {"name": "Wikipedia: 2S43 Malva", "url": "https://en.wikipedia.org/wiki/2S43_Malva", "retrieved": "2026-10-07"}
      ]
    },
    "2S5 Giatsint-S": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "combatWeight": 28.2,
        "length": 8.33,
        "width": 3.25,
        "height": 2.76,
        "engine": "Diisel",
        "power": 520,
        "maxSpeedRoad": 62,
        "range": 500,
        "caliber": 152,
        "mainArmament": "152mm 2A37 kahur (L/54, 30 lasku)",
        "secondaryArmament": "7,62mm kuulipilduja",
        "rateOfFire": 6,
        "firingRange": 28,
        "firingRangeExt": 40
      },
      "notes": {
        "crew": "Koos laskemoonamasinaga 7.",
        "rateOfFire": "5–6 lasku/min.",
        "firingRangeExt": "Reaktiivmürsk 33–40km."
      },
      "sources": [
        {"name": "Wikipedia: 2S5 Giatsint-S", "url": "https://en.wikipedia.org/wiki/2S5_Giatsint-S", "retrieved": "2026-10-07"}
      ]
    },
    "2S23 NONA-SVK": {
      "status": "unverified",
      "values": {
        "crew": "4–6",
        "combatWeight": 14.5,
        "length": 7.4,
        "width": 2.9,
        "height": 2.5,
        "chassis": "BTR-80",
        "engine": "V8 diisel",
        "power": 260,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 10,
        "range": 600,
        "caliber": 120,
        "mainArmament": "120mm 2A60 kahur-miinipilduja (30 lasku)",
        "secondaryArmament": "7,62mm kuulipilduja tornis",
        "rateOfFire": 10,
        "directFireRange": 800,
        "firingRange": 8.8,
        "firingRangeExt": 12.8,
        "firingRangeGuided": 9
      },
      "warnings": {
        "maxSpeedRoad": "Allikad lahknevad: GlobalSecurity 70km/h, Army Technology 80km/h.",
        "range": "Allikad lahknevad: GlobalSecurity 600km, Army Technology umbes 500km."
      },
      "notes": {
        "crew": "Army Technology: 4.",
        "rateOfFire": "Püsiv 4 lasku/min.",
        "firingRange": "OF-mürsk 8,8km; miin 7,1km.",
        "firingRangeGuided": "Laserjuhitav „Kitolov-2“."
      },
      "sources": [
        {"name": "GlobalSecurity: 2S23 specs", "url": "https://www.globalsecurity.org/military/world/russia/2s23-specs.htm", "retrieved": "2026-10-07"},
        {"name": "Army Technology: 2S23 Nona-SVK", "url": "https://www.army-technology.com/projects/2s23-nona-svk-120mm-self-propelled-gun-system/", "retrieved": "2026-10-07"}
      ]
    },
    "D-30": {
      "status": "unverified",
      "values": {
        "weightKg": 3150,
        "caliber": 122,
        "mainArmament": "122mm haubits (toru 35 kaliibrit), 360° pööramine",
        "rateOfFire": 8,
        "firingRange": 15.3,
        "firingRangeExt": 21.9
      },
      "notes": {
        "rateOfFire": "6–8 lasku/min; püsiv 5–6.",
        "mainArmament": "Otsetule sihik; kumulatiivmürsk läbistab 460–580mm (laskekaugust allikas pole)."
      },
      "sources": [
        {"name": "Wikipedia: D-30 howitzer", "url": "https://en.wikipedia.org/wiki/D-30_howitzer", "retrieved": "2026-10-07"}
      ]
    },
    "2A65": {
      "status": "unverified",
      "values": {
        "crew": "6–11",
        "weightKg": 6800,
        "length": 12.7,
        "caliber": 152.4,
        "mainArmament": "152,4mm 2A65 „Msta-B“ haubits (L/53,3)",
        "rateOfFire": 6,
        "firingRange": 24.7,
        "firingRangeBB": 29
      },
      "notes": {
        "rateOfFire": "5–6 lasku/min.",
        "firingRange": "OF45.",
        "firingRangeBB": "OF61.",
        "mainArmament": "Kasutab ka laserjuhitavat Krasnopoli (laskekaugust allikas pole)."
      },
      "sources": [
        {"name": "Wikipedia: 2A65 Msta-B", "url": "https://en.wikipedia.org/wiki/152_mm_howitzer_2A65_Msta-B", "retrieved": "2026-10-07"}
      ]
    },
    "2A36": {
      "status": "unverified",
      "values": {
        "crew": "8",
        "weightKg": 9800,
        "length": 12.3,
        "width": 2.788,
        "caliber": 152.4,
        "mainArmament": "152,4mm 2A36 „Giatsint-B“ kahur",
        "rateOfFire": 6,
        "firingRange": 27,
        "firingRangeExt": 40
      },
      "notes": {
        "rateOfFire": "Püsiv 1 lask/min (USA luure).",
        "mainArmament": "Soomustläbistav mürsk otsetuleks tankide vastu (kaugust allikas pole)."
      },
      "sources": [
        {"name": "Wikipedia: 2A36 Giatsint-B", "url": "https://en.wikipedia.org/wiki/2A36_Giatsint-B", "retrieved": "2026-10-07"}
      ]
    },
    "D-20": {
      "status": "unverified",
      "values": {
        "crew": "8–10",
        "weightKg": 5700,
        "caliber": 152,
        "mainArmament": "152mm kahurhaubits (toru 26 kaliibrit)",
        "rateOfFire": 5,
        "firingRange": 17.4
      },
      "notes": {
        "rateOfFire": "Püsiv 65 lasku/h.",
        "firingRange": "Reaktiivmürsuga kaugemale (täpset väärtust allikas pole)."
      },
      "sources": [
        {"name": "Wikipedia: D-20", "url": "https://en.wikipedia.org/wiki/152_mm_towed_gun-howitzer_M1955_(D-20)", "retrieved": "2026-10-07"}
      ]
    },
    "2-B16 Nona-K": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "caliber": 120,
        "mainArmament": "120mm järelveetav kahur-miinipilduja",
        "rateOfFire": 10,
        "firingRangeMin": 0.85,
        "firingRange": 8.85,
        "firingRangeExt": 13
      },
      "notes": {
        "rateOfFire": "8–10 lasku/min.",
        "mainArmament": "Toimib miinipilduja, kerge haubitsa ja tankitõrjekahurina."
      },
      "sources": [
        {"name": "Militarnyi: Nona-K", "url": "https://militarnyi.com/en/news/the-armed-forces-of-ukraine-destroyed-the-nona-k-artillery-systems-and-russian-ammunition/", "retrieved": "2026-10-07"}
      ]
    },
    "2B11 / 2S12": {
      "status": "unverified",
      "values": {
        "crew": "5 (+2 veduki meeskond)",
        "weightKg": 190.5,
        "chassis": "2F510 kaherattaline käru, vedukas GAZ-66",
        "caliber": 120,
        "mainArmament": "120mm 2B11 miinipilduja",
        "rateOfFire": 12,
        "firingRangeMin": 0.5,
        "firingRange": 7.1
      },
      "notes": {
        "weightKg": "Miinipilduja ilma transpordikäruta."
      },
      "sources": [
        {"name": "Wikipedia: 2S12 Sani", "url": "https://en.wikipedia.org/wiki/2S12_Sani", "retrieved": "2026-10-07"}
      ]
    },
    "2B14 / 2B24": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "weightKg": 41.88,
        "caliber": 82,
        "mainArmament": "82mm miinipilduja",
        "rateOfFire": 30,
        "firingRangeMin": 0.08,
        "firingRange": 4.27
      },
      "notes": {
        "crew": "Andmed: 2B14 „Podnos“. 2B24: meeskond 5.",
        "rateOfFire": "2B14: 24–30 lasku/min. 2B24: vähemalt 20.",
        "firingRangeMin": "2B24: kuni 0,1km.",
        "firingRange": "2B24 (miin 3-O-26): vähemalt 6km."
      },
      "sources": [
        {"name": "Wikipedia: 2B14 Podnos", "url": "https://en.wikipedia.org/wiki/2B14_Podnos", "retrieved": "2026-10-07"},
        {"name": "FSVTS kataloog: 2B24", "url": "https://esp.fsvts.gov.ru/catalog/988.en.html", "retrieved": "2026-10-07"}
      ]
    },
    "2B9 Vasiljok": {
      "status": "unverified",
      "values": {
        "weightKg": 632,
        "caliber": 82,
        "mainArmament": "82mm automaatmiinipilduja",
        "rateOfFire": 120,
        "firingRange": 4.27
      },
      "notes": {
        "rateOfFire": "Tsükliline 100–120 lasku/min."
      },
      "sources": [
        {"name": "Wikipedia: 2B9 Vasilek", "url": "https://en.wikipedia.org/wiki/2B9_Vasilek", "retrieved": "2026-10-07"}
      ]
    },
    "2B23": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "weightKg": 415,
        "caliber": 120,
        "mainArmament": "120mm 2B23 „Nona-M1“ vintraudne poolautomaatne miinipilduja",
        "rateOfFire": 11,
        "firingRange": 8.8,
        "firingRangeExt": 12.8
      },
      "notes": {
        "weightKg": "Transpordiasendis 507kg.",
        "rateOfFire": "OF-mürsk 9, OF-miin 11 lasku/min.",
        "firingRange": "OF-mürsk 8,8km; OF-miin 7,2km."
      },
      "sources": [
        {"name": "FSVTS kataloog: Nona-M1 (2B23)", "url": "https://esp.fsvts.gov.ru/catalog/982.en.html", "retrieved": "2026-10-07"}
      ]
    },
    "BM-21 Grad": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 13.71,
        "length": 7.35,
        "width": 2.4,
        "height": 3.09,
        "chassis": "Ural-375D (BM-21-1: Ural-4320)",
        "engine": "ZiL-375 V8 bensiin",
        "power": 180,
        "maxSpeedRoad": 75,
        "range": 405,
        "caliber": 122,
        "launchTubes": 40,
        "salvoTime": 20,
        "firingRangeMin": 5,
        "firingRange": 20.38,
        "firingRangeExt": 40
      },
      "notes": {
        "salvoTime": "Laskevalmis 3 minutiga.",
        "firingRangeMin": "9M22U.",
        "firingRange": "9M22U.",
        "firingRangeExt": "9M521: 40km · 9M522: 37,5km."
      },
      "sources": [
        {"name": "Wikipedia: BM-21 Grad", "url": "https://en.wikipedia.org/wiki/BM-21_Grad", "retrieved": "2026-10-07"}
      ]
    },
    "BM-27 Uragan": {
      "status": "unverified",
      "values": {
        "crew": "6",
        "combatWeight": 20,
        "chassis": "ZIL-135 8×8",
        "maxSpeedRoad": 65,
        "range": 500,
        "caliber": 220,
        "launchTubes": 16,
        "salvoTime": 20,
        "firingRangeMin": 8,
        "firingRange": 35,
        "firingRangeGuided": 70
      },
      "notes": {
        "salvoTime": "Ümberlaadimine umbes 20 minutit.",
        "firingRangeMin": "9M27K3.",
        "firingRangeGuided": "Juhitavad raketid üle 70km."
      },
      "sources": [
        {"name": "Wikipedia: BM-27 Uragan", "url": "https://en.wikipedia.org/wiki/BM-27_Uragan", "retrieved": "2026-10-07"}
      ]
    },
    "BM-30 Smertš": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 43.7,
        "length": 12,
        "width": 3.05,
        "height": 3.05,
        "chassis": "MAZ-543M",
        "engine": "D12A-525A V12 diisel",
        "power": 525,
        "maxSpeedRoad": 60,
        "range": 850,
        "caliber": 300,
        "launchTubes": 12,
        "firingRangeMin": 20,
        "firingRange": 70,
        "firingRangeExt": 200
      },
      "notes": {
        "crew": "Andmed: 9A52-2.",
        "firingRangeMin": "9M55K: 20km · 9M528: 25km.",
        "firingRangeExt": "Kuni 200km sõltuvalt raketist."
      },
      "sources": [
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-10-07"}
      ]
    },
    "TOS-1A": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 45.3,
        "chassis": "T-72/T-90 tanki šassii",
        "engine": "V-84 diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 550,
        "caliber": 220,
        "launchTubes": 24,
        "mainArmament": "Termobaarilised raketid MO.1.01.04M",
        "firingRange": 6,
        "firingRangeExt": 10
      },
      "notes": {
        "firingRangeExt": "2020. aasta uuendatud rakett."
      },
      "sources": [
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-10-07"}
      ]
    },
    "TOS-1 Buratino": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "combatWeight": 45.3,
        "chassis": "T-72 tanki šassii",
        "engine": "V-84 diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 550,
        "caliber": 220,
        "launchTubes": 30,
        "salvoTime": 15,
        "mainArmament": "Termobaarilised raketid MO.1.01.04",
        "firingRangeMin": 0.5,
        "firingRange": 3
      },
      "sources": [
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-10-07"}
      ]
    },
    "9T234-2": {
      "status": "unverified",
      "values": {
        "mainArmament": "Puudub – BM-30 Smertši laadimismasin: 12 varuraketti, kraana tõstevõime 850kg"
      },
      "sources": [
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-10-07"}
      ]
    },
    "2S44 Giatsint-K": {
      "status": "verified",
      "values": {
        "crew": "5",
        "combatWeight": 36.4,
        "chassis": "BAZ-6910-027 „Voštšina“ 8×8 ratasšassii",
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
        "mainArmament": "152mm 2A36 kahur (Giatsint-B relv, toru 50 kaliibrit ≈7,6m, laadimiskamber 27l)",
        "firingRange": 30.5,
        "firingRangeBB": 33.5,
        "firingRangeExt": 40,
        "firingRangeGuided": 47,
        "armor": "Kabiin kaitseb NATO 155mm kassettmoona allmoona eest; relvaalus on avatud (torn ja kilp puuduvad)"
      },
      "notes": {
        "chassis": "2S43 Malvaga sama šassii.",
        "firingRange": "3OF59 OF-mürsk.",
        "firingRangeBB": "3OF30 „Baklan“.",
        "firingRangeExt": "Reaktiivmürsk.",
        "firingRangeGuided": "3OF95M Krasnopol-D: 45–47km · 3OF95 Krasnopol-M2: 37–40km.",
        "mainArmament": "Automatiseeritud tulejuhtimine (ASUNO), MRSI-võimekus; positsiooni hõivamine, tuli ja lahkumine 2–3 minutiga."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S44 Giatsint-K", "url": "https://odin.t2com.army.mil/WEG/Asset/aef72388775e5c89be3c2d7879158089", "retrieved": "2026-10-07"}
      ]
    }
  }
};
