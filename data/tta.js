// TTA andmestik. Võti = mudeli `cat` väärtus index.html CATEGORIES-is (nt "BMD-2").
// Kirje kuju ja töövoog: vt DATA_NOTES.txt. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.TTA_DATA = {
  "version": 23,
  "models": {
    "BMD-2": {
      "status": "unverified",
      "values": {
        "crew": "3 + 4 dessantväelast",
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
        "mainArmament": "30mm 2A42 automaatkahur (300 lasku)",
        "atgm": "9M111 Fagot (AT-4) / 9M113 Konkurs (AT-5)",
        "atgmPenetration": "Fagot 400–600mm, Konkurs 600–800mm (RHA)",
        "rateOfFire": 800,
        "secondaryArmament": "2 × 7,62mm PKT (koaksiaalne ja kere), 2940 lasku",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam: kere esiosa 15mm, ülejäänud kere 10mm; torn esiosa 23mm, küljed 19mm, taga 13mm, katus 6mm"
      },
      "notes": {
        "crew": "Wikipedia: 2 + 6.",
        "combatWeight": "Wikipedia: 11,5t.",
        "length": "Kere pikkus; kahur ettepoole 5,91m.",
        "height": "Wikipedia: 1,97m tõstetud vedrustusega, langetatult 1,62m.",
        "maxSpeedRoad": "Wikipedia: 80km/h.",
        "rateOfFire": "Kiire režiim 550–800, aeglane 200–300 lasku/min.",
        "atgmRange": "Fagot 9M111: 70–2000m · 9M111M: 75–2500m · Konkurs 9M113: 70–4000m.",
        "cannonRangeSoft": "ODIN/WEG: efektiivne 2000m, maksimaalne 4000m.",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-2", "url": "https://odin.t2com.army.mil/WEG/Asset/ffe2837b4c03ff3bb6860fdd342bf0fc", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMD-2", "url": "https://en.wikipedia.org/wiki/BMD-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9K111 Fagot", "url": "https://en.wikipedia.org/wiki/9K111_Fagot", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"}
      ]
    },
    "BMD-1": {
      "status": "unverified",
      "values": {
        "crew": "3 + 4 dessantväelast",
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
        "mainArmament": "73mm 2A28 „Grom“ sileraudne kahur (40 lasku), laadimisautomaat",
        "atgm": "9M14 Malyutka (AT-3)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62mm PKT koaksiaalne (1500 lasku)",
        "atgmRange": {"min": 500, "max": 3000},
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumkere: esiosa 15mm, mujal 10mm. Keevitatud terastorn: esiosa 23mm, küljed 19mm, taga 13mm, katus 6mm"
      },
      "notes": {
        "airDroppable": "Langevarjusüsteem PRSM-916 / PRSM-925, heitekõrgus 500–1500m.",
        "mainArmament": "Laskemoon: 16 OG-15V (HE-Frag) + 24 PG-15V (HEAT).",
        "rateOfFire": "8–10 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-1", "url": "https://odin.t2com.army.mil/WEG/Asset/7f2e9dd3ec2de0cad0ee5dd1d9574b8f", "retrieved": "2026-10-08"}
      ]
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
        "range": 550,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.7,
        "trench": 2.5,
        "caliber": 30,
        "mainArmament": "30mm 2A42 automaatkahur (500 lasku)",
        "atgm": "9M113 Konkurs (AT-5); ekspordimudelitel 9K111 Fagot (AT-4)",
        "atgmPenetration": "Konkurs 600–800mm, Fagot 400–600mm (RHA)",
        "rateOfFire": 800,
        "secondaryArmament": "7,62mm PKT koaksiaalne, 2000 lasku",
        "atgmRange": {"min": 70, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "cannonRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud teras 5–19mm, kere esiosas lisaks alumiiniumplaat; torn 23–33mm"
      },
      "notes": {
        "range": "Wikipedia: 600km.",
        "rateOfFire": "Kiire režiim 550–800, aeglane 200–300 lasku/min.",
        "atgmRange": "Konkurs 9M113: 70–4000m · Fagot 9M111: 70–2000m (9M111M kuni 2500m).",
        "cannonRangeSoft": "ODIN/WEG: efektiivne 2000m, maksimaalne 4000m.",
        "cannonRangeAir": "Madalal lendav allahelikiirusega sihtmärk; kaldkaugus kuni 2500m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-2", "url": "https://odin.t2com.army.mil/WEG/Asset/0463e5419617d63ff6dc58ed40babd01", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-2", "url": "https://en.wikipedia.org/wiki/BMP-2", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M113 Konkurs", "url": "https://en.wikipedia.org/wiki/9M113_Konkurs", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Shipunov 2A42", "url": "https://en.wikipedia.org/wiki/Shipunov_2A42", "retrieved": "2026-10-07"}
      ]
    },
    "BMP-1": {
      "status": "unverified",
      "values": {
        "crew": "3 + 8 dessantväelast",
        "combatWeight": 13.5,
        "length": 6.735,
        "width": 2.94,
        "height": 2.15,
        "engine": "UTD-20, V6 diisel",
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
        "mainArmament": "73mm 2A28 „Grom“ sileraudne kahur (40 lasku), laadimisautomaat",
        "atgm": "9M14 Malyutka (AT-3), 4 raketti; BMP-1P: 9M111 Fagot / 9M113 Konkurs",
        "atgmPenetration": "Malyutka kuni 460mm (9M14P), Fagot/Konkurs 400–800mm (RHA)",
        "rateOfFire": 8,
        "secondaryArmament": "7,62mm PKT koaksiaalne (2000 lasku)",
        "mainGunRange": 500,
        "atgmRange": {"min": 500, "max": 3000},
        "mgRange": 1500,
        "armor": "Keevitatud valtsitud teras: kere kuni 19mm, torn 23mm"
      },
      "notes": {
        "power": "ODIN/WEG: moderniseeritud mootor UTD-23, 360hj.",
        "maxSpeedWater": "7–8km/h.",
        "range": "Wikipedia: 600km (maastikul 500km).",
        "mainGunRange": "2A28 Grom: lahinguoludes efektiivne kuni 500m; ODIN/WEG maksimaalne laskekaugus 4500m.",
        "atgmRange": "9M14 Malyutka: 500–3000m · BMP-1P (9M111/9M113): 70–4000m.",
        "armor": "Wikipedia: 6–33mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-1", "url": "https://odin.t2com.army.mil/WEG/Asset/cf0e6eb4267d8a3e60d66101379a8149", "retrieved": "2026-10-08"},
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
        "mainArmament": "100mm 2A70 kahur-raketiheitja (40 lasku) + 30mm 2A72 automaatkahur (500 lasku)",
        "atgm": "9M117 Bastion (AT-10) läbi 100mm raua, 8 raketti",
        "atgmPenetration": "550–750mm (RHA, sõltuvalt versioonist)",
        "rateOfFire": 10,
        "secondaryArmament": "3 × 7,62mm PKT (1 koaksiaalne, 2 kere esinurkades), 2500 lasku",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 4000},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 2000,
        "cannonRangeAir": 4000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam: kere esiosa kaitseb 30mm soomusläbistava mürsu eest, küljed ja tagaosa 14,5mm eest; torn 30–35mm. Arena aktiivkaitse saadaval."
      },
      "notes": {
        "length": "Kere 6,715m.",
        "height": "Torni katuseni 2,30m.",
        "rateOfFire": "2A70: 8–10 lasku/min.",
        "mainGunRange": "2A70 OF-mürsk (3OF32): 300–4000m; maksimaalne sihtimiskaugus 5000m.",
        "atgmRange": "9M117 Bastion / 9M117M Kan: 100–4000m · 9M117M1 Arkan: kuni 5500m.",
        "cannonRangeArmored": "2A72 30mm automaatkahur (ka maa- ja õhusihtmärgi read)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMP-3", "url": "https://odin.t2com.army.mil/WEG/Asset/822df89dbe778cd601cb1e8cee707585", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMP-3", "url": "https://en.wikipedia.org/wiki/BMP-3", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-60": {
      "status": "unverified",
      "values": {
        "crew": "2 + 14 dessantväelast",
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
        "mainArmament": "14,5mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62mm PKT koaksiaalne (2500 lasku)",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud teras: kere esiosa 7–9mm, küljed 7mm, põhi 5mm; torn esiosa 10mm, küljed 7mm"
      },
      "notes": {
        "crew": "Wikipedia (BTR-60PB): 3 + 14.",
        "power": "2 × 90hj.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-60", "url": "https://odin.t2com.army.mil/WEG/Asset/547812768252900f3a32aaebe26dc418", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-60", "url": "https://en.wikipedia.org/wiki/BTR-60", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: KPV heavy machine gun", "url": "https://en.wikipedia.org/wiki/KPV_heavy_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-70": {
      "status": "unverified",
      "values": {
        "crew": "2 + 9 dessantväelast",
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
        "mainArmament": "14,5mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62mm PKT koaksiaalne (2000 lasku)",
        "hmgRange": 3000,
        "mgRange": 1000,
        "armor": "Keevitatud teras 6–10mm (esiosa 9mm, küljed 7mm)"
      },
      "notes": {
        "crew": "Wikipedia: 3 + 7.",
        "height": "Wikipedia: 2,32m.",
        "power": "2 × 120hj.",
        "range": "400–600km.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000m.",
        "mgRange": "ODIN/WEG efektiivne laskekaugus."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-70", "url": "https://odin.t2com.army.mil/WEG/Asset/146a46d960de31b2409f05b05df2ed2d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-70", "url": "https://en.wikipedia.org/wiki/BTR-70", "retrieved": "2026-10-08"}
      ]
    },
    "BTR-80": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast",
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
        "mainArmament": "14,5mm KPVT raskekuulipilduja (500 lasku)",
        "rateOfFire": 600,
        "secondaryArmament": "7,62mm PKT koaksiaalne (2500 lasku)",
        "hmgRange": 3000,
        "hmgRangeAir": 2000,
        "mgRange": 1500,
        "armor": "Kaldsoomus kuni 10mm: esiosa kaitseb 12,7mm, küljed 7,62mm soomusläbistava kuuli eest; torn 12,7mm ja kildude eest. Lisasoomus saadaval."
      },
      "notes": {
        "maxSpeedRoad": "Allikas: 80–90km/h.",
        "hmgRange": "KPVT: maksimaalne laskekaugus 4000m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-80", "url": "https://odin.t2com.army.mil/WEG/Asset/a4fd3058789fe5d3485f4b5013237e89", "retrieved": "2026-10-08"},
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
        "mainArmament": "30mm 2A72 automaatkahur (kahe etteandega)",
        "secondaryArmament": "7,62mm PKTM koaksiaalne; 2 × 3 81mm suitsugranaadiheitjat",
        "armor": "Esiosa kaitseb 12,7mm, ümberringi 7,62mm kuuli ja kildude eest; killuvooder; lisasoomus saadaval"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-82", "url": "https://odin.t2com.army.mil/WEG/Asset/a27afe2e5a4fe5a7a2ef8df88c926c9d", "retrieved": "2026-10-08"},
        {"name": "Army Technology: BTR-82A", "url": "https://www.army-technology.com/projects/btr-82a-armoured-personnel-carrier/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-07"}
      ]
    },
    "MT-LB": {
      "status": "unverified",
      "values": {
        "crew": "2 + 11 dessantväelast",
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
        "mainArmament": "7,62mm PKT väikeses tornis (2000 lasku)",
        "rateOfFire": 800,
        "secondaryArmament": "MT-LBVM/VMK: 12,7mm NSVT/Kord; MT-LBMB: 30mm automaatkahur",
        "mgRange": 1500,
        "armor": "Keevitatud teras 7–14mm"
      },
      "notes": {
        "maxSpeedWater": "Liigub vees roomikutega. Wikipedia: 5–6km/h.",
        "rateOfFire": "700–800 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-LB", "url": "https://odin.t2com.army.mil/WEG/Asset/6eba8568bfb1ffa74a03edc24db3a174", "retrieved": "2026-10-08"},
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
        "maxSpeedWater": 4.5,
        "range": 500,
        "amphibious": true,
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 0.61,
        "trench": 2.41,
        "mainArmament": "Põhiversioonil puudub (katuse keskel ava tornile); mõnel variandil 7,62mm PKT",
        "armor": "Keevitatud teras 3–10mm"
      },
      "notes": {
        "combatWeight": "Sõltub paigaldatud eriseadmetest.",
        "maxSpeedWater": "Liigub vees roomikutega. Wikipedia: 5–6km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-LBu", "url": "https://odin.t2com.army.mil/WEG/Asset/a58fe6021604d74d51e48d93eff4feda", "retrieved": "2026-10-08"},
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
        "crew": "3 + 6 dessantväelast",
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
        "mainArmament": "100mm 2A70 kahur-raketiheitja + 30mm 2A72 automaatkahur (moodul Bakhcha-U)",
        "atgm": "9M117M1 Arkan läbi 100mm raua",
        "atgmPenetration": "Kuni 750mm (RHA, aktiivsoomuse taga)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62mm PKT koaksiaalne (2500 lasku)",
        "mainGunRange": 4000,
        "atgmRange": {"min": 100, "max": 5500},
        "cannonRangeSoft": 2000,
        "mgRange": 1500,
        "armor": "Keevitatud alumiiniumsulam keraamiliste plaatidega: esiosa kaitseb 12,7mm, küljed 7,62mm kuuli eest"
      },
      "notes": {
        "crew": "Andmed: BMD-4 (ODIN/WEG); BMD-4M-il sama UTD-29 mootor ja relvamoodul.",
        "length": "Kahur ees; kere 6,1m.",
        "rateOfFire": "2A70: kuni 10 lasku/min.",
        "mainGunRange": "2A70 OF-mürsk: 300–4000m.",
        "cannonRangeSoft": "2A72 30mm automaatkahur: efektiivne 2000m, maksimaalne 4000m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMD-4", "url": "https://odin.t2com.army.mil/WEG/Asset/0b0252ef60737282417f02e725ae471d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BMD-4", "url": "https://en.wikipedia.org/wiki/BMD-4", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M117 Bastion", "url": "https://en.wikipedia.org/wiki/9M117_Bastion", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2A70", "url": "https://en.wikipedia.org/wiki/2A70", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-D": {
      "status": "unverified",
      "values": {
        "crew": "3 + 10 dessantväelast",
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
        "mainArmament": "2 × 7,62mm PKT kere esinurkades (2000 lasku)",
        "secondaryArmament": "Võib lisaks olla AGS-17/AGS-30 automaatgranaadiheitja",
        "armor": "Keevitatud alumiiniumsoomus: esiosa (15mm) kaitseb 12,7mm kuuli eest 200m kauguselt, küljed 7,62mm kuuli eest"
      },
      "notes": {
        "crew": "ODIN/WEG: 1 + 13.",
        "combatWeight": "Tühimass 8t. Wikipedia: 8,5t.",
        "width": "Wikipedia: 2,94m.",
        "height": "Wikipedia: 1,67m.",
        "range": "Wikipedia: 500km, vees 116km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-D", "url": "https://odin.t2com.army.mil/WEG/Asset/4c664f7c3b53fc81f1af53bbeedd4e1f", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BTR-D", "url": "https://en.wikipedia.org/wiki/BTR-D", "retrieved": "2026-10-07"}
      ]
    },
    "BTR-MDM": {
      "status": "unverified",
      "values": {
        "crew": "2 + 13 dessantväelast",
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
        "mainArmament": "2 × 7,62mm PKTM kere esinurkades (4000 lasku)",
        "rateOfFire": 800,
        "mgRange": 1500,
        "armor": "Keevitatud alumiinium, vahedega keraamilised lisaplaadid; tornil kaks terasplaati ees ja külgedel"
      },
      "notes": {
        "range": "Maastikul 350km.",
        "mainArmament": "Army Technology: ülema juures 7,62mm (või 12,7mm) kuulipilduja + 7,62mm PKMT ees paremal.",
        "rateOfFire": "700–800 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTR-MDM Rakushka-M", "url": "https://odin.t2com.army.mil/WEG/Asset/3af6301b891ad5c873fe2a9a697e1bec", "retrieved": "2026-10-28"},
        {"name": "Army Technology: BTR-MDM", "url": "https://www.army-technology.com/projects/btr-mdm-armoured-personnel-carrier/", "retrieved": "2026-10-07"}
      ]
    },
    "T-62": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "115mm U-5TS (2A20) sileraudne kahur (40 lasku)",
        "rateOfFire": 10,
        "atgm": "T-62M jt: 9K116-2 Šeksna (AT-12) läbi 115mm raua",
        "atgmPenetration": "Umbes 650mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (2500 lasku); 12,7mm DŠK õhutõrjekuulipilduja (500 lasku)",
        "mainGunRange": 2260,
        "atgmRange": {"min": 100, "max": 4000},
        "hmgRange": 2000,
        "armor": "Kere: esiosa 102mm, küljed 79mm, taga 46mm, katus 31mm. Torn: esiosa 242mm, küljed 153mm, taga 97mm, katus 40mm."
      },
      "notes": {
        "length": "Kahur ees; kere 6,63m.",
        "power": "Hiljem 620hj.",
        "range": "Pinnasteel 320km, lisapaakidega 650km.",
        "fording": "Snorkliga 5,5m.",
        "rateOfFire": "6–10 lasku/min.",
        "mainGunRange": "Otsetule kaugus: 2m kõrgune sihtmärk 1870m, 3m kõrgune 2260m.",
        "atgmRange": "Ainult moderniseeritud variandid (T-62M, T-62MV jt).",
        "hmgRange": "DŠK."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-62", "url": "https://odin.t2com.army.mil/WEG/Asset/13b258159daa62abea0fcc4d720f288e", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-62", "url": "https://en.wikipedia.org/wiki/T-62", "retrieved": "2026-10-07"},
        {"name": "GlobalSecurity: AT-12 Sheksna", "url": "https://www.globalsecurity.org/military/world/russia/at-12.htm", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: DShK", "url": "https://en.wikipedia.org/wiki/DShK", "retrieved": "2026-10-07"}
      ]
    },
    "T-72": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "125mm 2A46M / 2A46M-5 sileraudne kahur (39 lasku, neist 22 laadimisautomaadis)",
        "rateOfFire": 8,
        "atgm": "T-72B seeria: 9M119 Svir (AT-11) läbi 125mm raua",
        "atgmPenetration": "700–900mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (1500 lasku); 12,7mm õhutõrjekuulipilduja (1200 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 75, "max": 4000},
        "hmgRange": 2500,
        "hmgRangeAir": 1500,
        "mgRange": 1500,
        "armor": "Kere esiosa kihiline: 60mm teras + 105mm tekstoliit + 50mm teras; torn umbes 110mm valatud teras. Aktiivsoomus: Kontakt-5 (T-72B3), Relikt (T-72B3M)."
      },
      "notes": {
        "length": "Kahur ees; kere 6,95m.",
        "range": "Lisakütusega 650–700km.",
        "fording": "Ettevalmistusega 5m.",
        "rateOfFire": "Käsitsi laadides 1–2 lasku/min.",
        "mainGunRange": "APFSDS ja HEAT 2000–3000m; HE kuni 5000m.",
        "atgmRange": "Ainult T-72B ja uuemad (T-72B1 ei saa raketti lasta).",
        "secondaryArmament": "ODIN/WEG: DŠK; Wikipedia: NSVT.",
        "hmgRange": "ODIN/WEG: DŠK efektiivne laskekaugus.",
        "hmgRangeAir": "Wikipedia (NSVT)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-72", "url": "https://odin.t2com.army.mil/WEG/Asset/805d8d9f2e9c02fab6a81028d4f77d0b", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-72", "url": "https://en.wikipedia.org/wiki/T-72", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 9M119 Svir", "url": "https://en.wikipedia.org/wiki/9M119_Svir", "retrieved": "2026-10-07"}
      ]
    },
    "T-80": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "125mm 2A46M-1 sileraudne kahur (36 lasku), karussell-laadimisautomaat",
        "rateOfFire": 8,
        "atgm": "9K112 Kobra (AT-8 Songster) läbi 125mm raua",
        "atgmPenetration": "600mm (RHA)",
        "secondaryArmament": "7,62mm PKT koaksiaalne (1250 lasku); 12,7mm NSVT (500 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 100, "max": 4000},
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "mgRange": 1500,
        "armor": "Kombineeritud soomus (Combination K): kere umbes 440–450mm, torn umbes 550mm ekvivalent; Kontakt-1 aktiivsoomus"
      },
      "notes": {
        "crew": "Andmed: T-80BV. T-80U: 46t, GTD-1250 (1250hj), 9M119 Refleks, Kontakt-5.",
        "length": "Kahur ees; kere 6,98m.",
        "fording": "Ettevalmistusega 5m.",
        "rateOfFire": "6–8 lasku/min; karusselli laadimine 13–15s.",
        "mainGunRange": "APFSDS ja HEAT 2000–3000m; kahuri max 4000m; HE kuni 5000m.",
        "maxSpeedOffroad": "Wikipedia (T-80U). ODIN/WEG keskmine maastikukiirus 55km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-80BV", "url": "https://odin.t2com.army.mil/WEG/Asset/6b3d145b802982380c3feaf1f4efa9e4", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-80", "url": "https://en.wikipedia.org/wiki/T-80", "retrieved": "2026-10-07"}
      ]
    },
    "T-90A": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "125mm 2A46M sileraudne kahur (44 lasku), karussell-laadimisautomaat",
        "rateOfFire": 7,
        "atgm": "9M119 Svir / 9M119M Refleks (AT-11 Sniper-B) läbi 125mm raua, 6 raketti",
        "atgmPenetration": "700–900mm (RHA)",
        "secondaryArmament": "12,7mm Kord (300 lasku); 7,62mm PKT koaksiaalne (1500 lasku)",
        "mainGunRange": 3000,
        "atgmRange": {"min": 100, "max": 5000},
        "hmgRange": 2000,
        "mgRange": 1500,
        "armor": "Teras-komposiit + Kontakt-5 aktiivsoomus: APFSDS vastu umbes 800–830mm, HEAT vastu 1150–1550mm ekvivalent. Shtora-1 kaitsesüsteem."
      },
      "notes": {
        "length": "Kahur ees; kere 6,86m.",
        "fording": "Ettevalmistusega 5m.",
        "rateOfFire": "Laadimisautomaadiga; käsitsi 2–3 lasku/min.",
        "mainGunRange": "APFSDS 2000–3000m (öösel 2600m); HEAT ja HE kuni 4000m.",
        "atgmRange": "Min laskekaugus: Wikipedia.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-90A / T-90S", "url": "https://odin.t2com.army.mil/WEG/Asset/fe236b6992bb19af1774a93f3b52b423", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"}
      ]
    },
    "T-90M": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "125mm 2A46M-4 / 2A46M-5 sileraudne kahur (43 lasku)",
        "atgm": "9M119M Refleks (AT-11 Sniper-B) läbi 125mm raua",
        "atgmPenetration": "kuni 900mm",
        "secondaryArmament": "12,7mm raskekuulipilduja distantsjuhitavas moodulis (Kord / NSVT); 7,62mm koaksiaalne",
        "mainGunRange": 3000,
        "atgmRange": {"max": 5000},
        "hmgRange": 2000,
        "armor": "Relikt aktiivsoomus; torni alaosas võrksoomus, kere tagaosas trellissoomus (RPG vastu); aktiivkaitse (soft- ja hard-kill)"
      },
      "notes": {
        "length": "Kahur ees (Wikipedia); kere 6,68m (ODIN/WEG).",
        "fording": "Ettevalmistusega 5m.",
        "mainGunRange": "APFSDS ja HEAT 3000m; HE 4000m.",
        "secondaryArmament": "ODIN/WEG: NSVT; Wikipedia: Kord.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-90M", "url": "https://odin.t2com.army.mil/WEG/Asset/ca2015f698eb0515ae502257e38bfc17", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "BMP-T": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "combatWeight": 48,
        "length": 7.2,
        "width": 3.8,
        "height": 3.44,
        "engine": "V-92S2 V12 mitmekütusediisel",
        "power": 1000,
        "maxSpeedRoad": 60,
        "range": 550,
        "verticalStep": 0.85,
        "trench": 2.8,
        "fording": 1.2,
        "caliber": 30,
        "mainArmament": "2 × 30mm 2A42 automaatkahur (850 lasku)",
        "rateOfFire": 600,
        "atgm": "4 × 9M120 Ataka-T (laserjuhtimisega SACLOS)",
        "atgmPenetration": "950mm RHA aktiivsoomuse taga",
        "secondaryArmament": "7,62mm PKTM (2000 lasku); 2 × 30mm automaatgranaadiheitja AG-17D või AGS-30 (kokku 600 granaati)",
        "mainGunRange": 4000,
        "atgmRange": {"max": 6000},
        "mgRange": 1500,
        "armor": "Relikt aktiivsoomus ja lisasoomus; mehitamata torn"
      },
      "notes": {
        "rateOfFire": "Kahe kahuri peale kokku; valitav ka 200 või 300 lasku/min.",
        "fording": "Ettevalmistusega 1,8m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BMPT Terminator", "url": "https://odin.t2com.army.mil/WEG/Asset/9f1db2b58ba9e52eb202ed082e26720c", "retrieved": "2026-10-28"}
      ]
    },
    "2S1 Gvozdika": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "MT-LBu",
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
        "mainArmament": "122mm 2A31 haubits (40 lasku)",
        "rateOfFire": 5,
        "secondaryArmament": "7,62mm PK kuulipilduja",
        "directFireRange": 1000,
        "firingRangeMin": 1,
        "firingRange": 15.3,
        "firingRangeExt": 21.9,
        "armor": "Keevitatud teras: kere kuni 15mm, torn 20mm"
      },
      "notes": {
        "maxSpeedWater": "Wikipedia: 4,5km/h.",
        "mainArmament": "Wikipedia infokastis 2A18 (D-30 tähis).",
        "rateOfFire": "4–5 lasku/min; püsiv 1–2 lasku/min.",
        "directFireRange": "Kumulatiivmürsk (HEAT-FS) läbistab 460mm.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S1 Gvozdika", "url": "https://odin.t2com.army.mil/WEG/Asset/08b8cac0bf7658df6cf95d0850fc9a18", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S1 Gvozdika", "url": "https://en.wikipedia.org/wiki/2S1_Gvozdika", "retrieved": "2026-10-07"}
      ]
    },
    "2S3 Akatsiya": {
      "status": "unverified",
      "values": {
        "crew": "4–6",
        "chassis": "Objekt 123 roomikšassii",
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
        "mainArmament": "152mm 2A33 (D-22) haubits (46 lasku)",
        "rateOfFire": 4,
        "secondaryArmament": "7,62mm PKT (1000 lasku)",
        "mgRange": 1500,
        "firingRange": 18.5,
        "firingRangeExt": 24,
        "armor": "Kere 15mm, torn 20mm"
      },
      "notes": {
        "length": "Kere 7,765m.",
        "height": "Ilma kuulipildujata 2,615m.",
        "rateOfFire": "3–4 lasku/min; püsiv 1 lask/min.",
        "firingRangeExt": "Rakettkiirendiga mürsk (Wikipedia).",
        "armor": "Wikipedia: torn ja kere esiosa 30mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S3 Akatsiya", "url": "https://odin.t2com.army.mil/WEG/Asset/db17bd5d3c8bcab93b89b6408fde38ef", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S3 Akatsiya", "url": "https://en.wikipedia.org/wiki/2S3_Akatsiya", "retrieved": "2026-10-07"}
      ]
    },
    "2S19 Msta": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "T-72 baasil",
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
        "mainArmament": "152mm 2A64 haubits (50 lasku)",
        "rateOfFire": 8,
        "secondaryArmament": "12,7mm NSVT (500 lasku)",
        "hmgRange": 2000,
        "hmgRangeAir": 1500,
        "firingRange": 24.7,
        "firingRangeBB": 29,
        "firingRangeExt": 36
      },
      "notes": {
        "length": "Kahur ees; kere 6,04m.",
        "width": "Ilma põllesteta 3,38m.",
        "fording": "Ettevalmistusega 5m.",
        "rateOfFire": "6–8 lasku/min; püsiv 3–4; 2S19M2: 10 lasku/min.",
        "hmgRange": "NSVT.",
        "firingRange": "2S19M2: 30km.",
        "firingRangeBB": "Base bleed mürsk OF-91.",
        "firingRangeExt": "Rakettkiirendiga mürsk (Wikipedia); 2S19M2: 40km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S19M1 Msta-S", "url": "https://odin.t2com.army.mil/WEG/Asset/5d89ac25a8643d6e283c22f341f000a6", "retrieved": "2026-10-08"},
        {"name": "Army Technology: 2S19 Msta-S", "url": "https://www.army-technology.com/projects/msta/", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: 2S19 Msta", "url": "https://en.wikipedia.org/wiki/2S19_Msta", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: NSV machine gun", "url": "https://en.wikipedia.org/wiki/NSV_machine_gun", "retrieved": "2026-10-07"}
      ]
    },
    "2S9 Nona": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "120mm 2A51 kahur-miinipilduja (25 lasku)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62mm PKT (1500 lasku)",
        "mgRange": 1500,
        "directFireRange": 1000,
        "firingRange": 8.85,
        "firingRangeExt": 12.8,
        "armor": "Esiosa kaitseb 12,7mm, küljed 7,62mm kuuli eest; torn 16mm"
      },
      "notes": {
        "length": "Kahur ees; kere 5,89m.",
        "mainArmament": "ODIN/WEG (2S9-1M) märgib relvaks 2A60. Wikipedia: 40–60 lasku.",
        "rateOfFire": "8–10 lasku/min; püsiv 4 lasku/min.",
        "directFireRange": "Kumulatiivmürsk läbistab 600–650mm terast kuni 1km kaugusel.",
        "firingRange": "OF-mürsk 8,85km; miin 7,15km.",
        "firingRangeExt": "Pikendatud laskekaugusega moon."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S9-1M Nona-S", "url": "https://odin.t2com.army.mil/WEG/Asset/c8f7d048a361903479ad71de6b46247d", "retrieved": "2026-10-08"},
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
        "gradient": 60,
        "sideSlope": 30,
        "verticalStep": 1.1,
        "trench": 2.79,
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
        {"name": "U.S. Army ODIN / WEG: 2S4 Tjulpan", "url": "https://odin.t2com.army.mil/WEG/Asset/d219603fc9b5137cd037eb4896872f59", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2S4 Tyulpan", "url": "https://en.wikipedia.org/wiki/2S4_Tyulpan", "retrieved": "2026-10-07"}
      ]
    },
    "2S7 Pion": {
      "status": "unverified",
      "values": {
        "crew": "7",
        "chassis": "Objekt 216",
        "combatWeight": 46.5,
        "length": 13.12,
        "width": 3.38,
        "height": 3,
        "engine": "V-46-I V12 turbodiisel",
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
        "mainArmament": "203mm 2A44 kahur (L/56,2)",
        "rateOfFire": 1.5,
        "firingRange": 37.5,
        "firingRangeExt": 47.5,
        "armor": "Keevitatud teras 10mm"
      },
      "notes": {
        "crew": "Koos laskemoonamasina meeskonnaga 14.",
        "length": "Kahur ees; kere 10,5m.",
        "range": "Wikipedia: 650km.",
        "mainArmament": "Masinas 8 lasku (Wikipedia: 4, 2S7M: 8).",
        "rateOfFire": "2S7M: 2,5 lasku/min.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S7 Pion", "url": "https://odin.t2com.army.mil/WEG/Asset/debeca79b7cbf053d9ded62c6c859dbf", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S7 Pion", "url": "https://en.wikipedia.org/wiki/2S7_Pion", "retrieved": "2026-10-07"}
      ]
    },
    "2S43 Malva": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "BAZ-6910-027 „Voštšina“ 8×8 ratasšassii",
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
        "mainArmament": "152mm 2A64 haubits (30 lasku)",
        "rateOfFire": 7,
        "firingRange": 24.5,
        "firingRangeGuided": 50,
        "armor": "Soomustatud kabiin (kaitse kergrelvade tule eest)"
      },
      "notes": {
        "chassis": "Wikipedia: BAZ-6610-02.",
        "mainArmament": "Wikipedia: 2A64 või 2A88.",
        "firingRangeGuided": "3OF95 Krasnopol-M2: üle 50km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S43 Malva", "url": "https://odin.t2com.army.mil/WEG/Asset/b59fadc3a1a4539f7e7cf175111daa05", "retrieved": "2026-10-08"},
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
        "engine": "V-59 diisel",
        "power": 520,
        "maxSpeedRoad": 63,
        "range": 500,
        "gradient": 58,
        "sideSlope": 47,
        "verticalStep": 0.7,
        "trench": 2.5,
        "caliber": 152,
        "mainArmament": "152mm 2A37 kahur (L/54, 30 lasku)",
        "rateOfFire": 6,
        "secondaryArmament": "7,62mm PKT (1500 lasku)",
        "mgRange": 1500,
        "firingRangeMin": 8.6,
        "firingRange": 24.8,
        "firingRangeExt": 33,
        "armor": "Keevitatud teras kuni 13mm; kilp 12mm"
      },
      "notes": {
        "crew": "5–6; koos laskemoonamasinaga 7.",
        "rateOfFire": "5–6 lasku/min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S5 Giatsint-S", "url": "https://odin.t2com.army.mil/WEG/Asset/24b3b651219fe1792ecef375d738f6b6", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2S5 Giatsint-S", "url": "https://en.wikipedia.org/wiki/2S5_Giatsint-S", "retrieved": "2026-10-07"}
      ]
    },
    "2S23 NONA-SVK": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "BTR-80 (modifitseeritud) 8×8",
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
        "mainArmament": "120mm 2A60 kahur-miinipilduja (30 lasku)",
        "rateOfFire": 10,
        "secondaryArmament": "7,62mm PKT tornis (2400 lasku)",
        "mgRange": 1500,
        "directFireRange": 800,
        "firingRange": 8.85,
        "firingRangeExt": 12.8,
        "firingRangeGuided": 9,
        "armor": "Ümberringi kaitse 7,62mm soomusläbistava kuuli ja kildude eest"
      },
      "notes": {
        "crew": "GlobalSecurity: 4–6.",
        "power": "Wikipedia/GlobalSecurity: 260hj.",
        "maxSpeedRoad": "GlobalSecurity: 70km/h.",
        "range": "GlobalSecurity: 600km.",
        "rateOfFire": "Püsiv 4 lasku/min.",
        "firingRange": "OF-mürsk 8,85km; miin 7,15km.",
        "firingRangeGuided": "Laserjuhitav „Kitolov-2“."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S23 Nona-SVK", "url": "https://odin.t2com.army.mil/WEG/Asset/50c19159fdbb249e9116cc31d516d548", "retrieved": "2026-10-08"},
        {"name": "GlobalSecurity: 2S23 specs", "url": "https://www.globalsecurity.org/military/world/russia/2s23-specs.htm", "retrieved": "2026-10-07"},
        {"name": "Army Technology: 2S23 Nona-SVK", "url": "https://www.army-technology.com/projects/2s23-nona-svk-120mm-self-propelled-gun-system/", "retrieved": "2026-10-07"}
      ]
    },
    "D-30": {
      "status": "unverified",
      "values": {
        "crew": "7",
        "chassis": "Vedukas: MT-LB või Ural-4320",
        "weightKg": 3200,
        "length": 5.4,
        "width": 1.9,
        "height": 1.6,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 25,
        "caliber": 122,
        "mainArmament": "122mm 2A18M haubits (toru 38 kaliibrit), 360° pööramine",
        "rateOfFire": 8,
        "firingRangeMin": 1,
        "firingRange": 15.3,
        "firingRangeExt": 21.9
      },
      "notes": {
        "weightKg": "Wikipedia: 3150kg.",
        "length": "Transpordiasendis.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "mainArmament": "Otsetule sihik; kumulatiivmürsk läbistab 460–580mm (laskekaugust allikas pole).",
        "rateOfFire": "Tavaline 6, püsiv 4 lasku/min.",
        "firingRange": "OF-81.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: D-30 (M1963)", "url": "https://odin.t2com.army.mil/WEG/Asset/b14f9899cde6b3e6045f28966886449e", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: D-30 howitzer", "url": "https://en.wikipedia.org/wiki/D-30_howitzer", "retrieved": "2026-10-07"}
      ]
    },
    "2A65": {
      "status": "unverified",
      "values": {
        "crew": "6–11",
        "weightKg": 7000,
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
        {"name": "U.S. Army ODIN / WEG: 2A65", "url": "https://odin.t2com.army.mil/WEG/Asset/2cfe71b9d60339108419f65665bdf563", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2A65 Msta-B", "url": "https://en.wikipedia.org/wiki/152_mm_howitzer_2A65_Msta-B", "retrieved": "2026-10-07"}
      ]
    },
    "2A36": {
      "status": "unverified",
      "values": {
        "crew": "8",
        "chassis": "Vedukas: KrAZ-255B, KrAZ-4556 või AT-S",
        "weightKg": 9760,
        "length": 12.3,
        "width": 2.7,
        "height": 2.7,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 20,
        "caliber": 152.4,
        "mainArmament": "152,4mm 2A36 „Giatsint-B“ kahur",
        "rateOfFire": 6,
        "directFireRange": 1000,
        "firingRange": 30.5,
        "firingRangeExt": 40
      },
      "notes": {
        "weightKg": "Wikipedia: 9800kg.",
        "length": "Laskeasendis; transpordiasendis 12,9m.",
        "width": "Transpordiasendis; laskeasendis 8,7m.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "rateOfFire": "Tavaline 5, püsiv 4 lasku/min (USA luure: püsiv 1).",
        "directFireRange": "Kumulatiivmürsk BP-540 otsetules.",
        "firingRange": "OF-86. Wikipedia: 27km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2A36 Giatsint-B", "url": "https://odin.t2com.army.mil/WEG/Asset/b9f63392cd0d13e15b046e91dc796f63", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2A36 Giatsint-B", "url": "https://en.wikipedia.org/wiki/2A36_Giatsint-B", "retrieved": "2026-10-07"}
      ]
    },
    "D-20": {
      "status": "unverified",
      "values": {
        "crew": "8",
        "chassis": "Vedukas: 6×6 või 8×8 veoauto",
        "weightKg": 5560,
        "length": 8.1,
        "width": 2.4,
        "height": 2.52,
        "maxSpeedRoad": 60,
        "maxSpeedOffroad": 30,
        "caliber": 152,
        "mainArmament": "152mm kahurhaubits (toru 26 kaliibrit)",
        "rateOfFire": 6,
        "directFireRange": 1000,
        "firingRangeMin": 4.6,
        "firingRange": 17.4
      },
      "notes": {
        "crew": "Wikipedia: 8–10.",
        "weightKg": "Wikipedia: 5700kg.",
        "length": "Transpordiasendis; laskeasendis 8,69m.",
        "maxSpeedRoad": "Pukseerimiskiirus.",
        "maxSpeedOffroad": "Pukseerimiskiirus.",
        "rateOfFire": "5–6 lasku/min; püsiv 1 lask/min.",
        "directFireRange": "Kumulatiivmürsk BP-540.",
        "firingRange": "OF-32; OF-96: kuni 24,4km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: D-20 (M1955)", "url": "https://odin.t2com.army.mil/WEG/Asset/82908ad6e362b16a8295d3ac2eb01943", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: D-20", "url": "https://en.wikipedia.org/wiki/152_mm_towed_gun-howitzer_M1955_(D-20)", "retrieved": "2026-10-07"}
      ]
    },
    "2-B16 Nona-K": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "weightKg": 1100,
        "length": 5.9,
        "width": 1.79,
        "height": 1.7,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 35,
        "caliber": 120,
        "mainArmament": "120mm 2A51 kahur-miinipilduja (toru 24,2 kaliibrit)",
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
        {"name": "Militarnyi: Nona-K", "url": "https://militarnyi.com/en/news/the-armed-forces-of-ukraine-destroyed-the-nona-k-artillery-systems-and-russian-ammunition/", "retrieved": "2026-10-07"}
      ]
    },
    "2B11 / 2S12": {
      "status": "unverified",
      "values": {
        "crew": "5 (+2 veduki meeskond)",
        "chassis": "2F510 kaherattaline käru, vedukas GAZ-66",
        "weightKg": 210,
        "length": 1.95,
        "width": 1.04,
        "height": 1.54,
        "caliber": 120,
        "mainArmament": "120mm 2B11 miinipilduja",
        "rateOfFire": 15,
        "firingRangeMin": 0.46,
        "firingRange": 7.18
      },
      "notes": {
        "weightKg": "Laskeasendis; transpordiasendis 300kg. Wikipedia: 190,5kg ilma käruta.",
        "length": "Transpordiasendis.",
        "rateOfFire": "Sihiku korrigeerimisega 15, ilma 10 lasku/min.",
        "firingRange": "Valgustusmiin 5,3km, suitsumiin 6,8km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B11 Sani", "url": "https://odin.t2com.army.mil/WEG/Asset/415cc764898e355ad2be19e4319f3430", "retrieved": "2026-10-08"},
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
        "firingRange": 4.1
      },
      "notes": {
        "crew": "Andmed: 2B14 „Podnos“.",
        "rateOfFire": "2B14: 30 lasku/min, püsiv 24.",
        "firingRange": "2B14: M-74 miin 5,6km (Wikipedia: 4,27km)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B14 Podnos", "url": "https://odin.t2com.army.mil/WEG/Asset/588e76a8c703fc2004ab3b58124ccbcc", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2B14 Podnos", "url": "https://en.wikipedia.org/wiki/2B14_Podnos", "retrieved": "2026-10-07"}
      ]
    },
    "2B9 Vasiljok": {
      "status": "unverified",
      "values": {
        "crew": "6",
        "weightKg": 645,
        "length": 4.115,
        "width": 1.576,
        "height": 1.18,
        "maxSpeedRoad": 60,
        "caliber": 82,
        "mainArmament": "82mm automaatmiinipilduja",
        "rateOfFire": 170,
        "firingRangeMin": 0.8,
        "firingRange": 4.27
      },
      "notes": {
        "weightKg": "Wikipedia: 632kg.",
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
        "weightKg": 415,
        "length": 2.61,
        "width": 2.12,
        "height": 3.7,
        "caliber": 120,
        "mainArmament": "120mm 2B23 „Nona-M1“ vintraudne poolautomaatne miinipilduja",
        "rateOfFire": 11,
        "firingRangeMin": 0.195,
        "firingRange": 8.835,
        "firingRangeExt": 12.8
      },
      "notes": {
        "weightKg": "Transpordiasendis 507kg.",
        "rateOfFire": "OF-mürsk 9, OF-miin 11 lasku/min.",
        "firingRangeMin": "Miin; vintmürsk 1,7km.",
        "firingRange": "Vintmürsk 8,835km; miin 7,154km.",
        "firingRangeExt": "Rakettkiirendiga mürsk."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2B23 Nona-M1", "url": "https://odin.t2com.army.mil/WEG/Asset/9d3db6be1ad1857c75db0e65bbcc2c0c", "retrieved": "2026-10-08"}
      ]
    },
    "BM-21 Grad": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "Ural-375D (BM-21-1: Ural-4320)",
        "combatWeight": 13.7,
        "length": 7.35,
        "width": 2.4,
        "height": 3.09,
        "engine": "ZiL-375 V8 bensiin",
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
        "mainArmament": "9P132 raketiheitja: 40 × 122mm rakett (9M22U, 9M28F)",
        "launchTubes": 40,
        "salvoTime": 20,
        "firingRangeMin": 0.5,
        "firingRange": 20.4,
        "firingRangeExt": 40,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "9K51 kompleksis 8; Wikipedia: 3.",
        "salvoTime": "Laskevalmis 3 minutiga; ümberlaadimine 7 minutit.",
        "firingRangeMin": "9M22U: 0,5km; 9M28F: 1,5km.",
        "firingRange": "9M22U; 9M28F: 15km.",
        "firingRangeExt": "9M521: 40km · 9M522: 37,5km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BM-21 Grad", "url": "https://odin.t2com.army.mil/WEG/Asset/250d04a7bec1cb46b44ab21a6cbe985b", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-21 Grad", "url": "https://en.wikipedia.org/wiki/BM-21_Grad", "retrieved": "2026-10-07"}
      ]
    },
    "BM-27 Uragan": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "9P140 raketiheitja: 16 × 220mm rakett (9M27F, 9M27K, 9M27K2)",
        "launchTubes": 16,
        "salvoTime": 20,
        "firingRangeMin": 10,
        "firingRange": 35,
        "firingRangeGuided": 70,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "Wikipedia: 6.",
        "power": "2 × 180hj.",
        "salvoTime": "Ümberlaadimine 15–20 minutit.",
        "firingRangeMin": "9M27F/K/K2; Wikipedia (9M27K3): 8km.",
        "firingRangeGuided": "Juhitavad raketid üle 70km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P140 (BM-27 Uragan)", "url": "https://odin.t2com.army.mil/WEG/Asset/57ff33a6536a23f1a11644d1f426c13d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-27 Uragan", "url": "https://en.wikipedia.org/wiki/BM-27_Uragan", "retrieved": "2026-10-07"}
      ]
    },
    "BM-30 Smertš": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "MAZ-543M",
        "combatWeight": 43.7,
        "length": 12.1,
        "width": 3.05,
        "height": 3.05,
        "engine": "D12A-525A V12 diisel",
        "power": 518,
        "maxSpeedRoad": 60,
        "range": 650,
        "gradient": 68,
        "verticalStep": 0.78,
        "trench": 2.5,
        "caliber": 300,
        "mainArmament": "9A52 raketiheitja: 12 × 300mm rakett (9M55F, 9M55K, 9M55K1)",
        "launchTubes": 12,
        "firingRangeMin": 20,
        "firingRange": 70,
        "firingRangeExt": 200,
        "armor": "Soomustamata"
      },
      "notes": {
        "crew": "Andmed: 9A52-2. Wikipedia: 3.",
        "power": "Wikipedia: 525hj.",
        "mainArmament": "Ümberlaadimine 36 minutit.",
        "firingRangeMin": "9M55K: 20km · 9M528: 25km.",
        "firingRange": "9M55F, 9M55K, 9M55K1.",
        "firingRangeExt": "Kuni 200km sõltuvalt raketist."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9A52-2 (BM-30 Smerch-M)", "url": "https://odin.t2com.army.mil/WEG/Asset/2caad55fb3c4c4d5cdd28a2194007544", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: BM-30 Smerch", "url": "https://en.wikipedia.org/wiki/BM-30_Smerch", "retrieved": "2026-10-07"}
      ]
    },
    "TOS-1A": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "T-72 tanki šassii (modifitseeritud)",
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
        "armor": "Teras ja komposiit + aktiivsoomus, ekvivalent 500–600mm (RHA)"
      },
      "notes": {
        "chassis": "Wikipedia: T-72/T-90 tanki šassii.",
        "combatWeight": "Wikipedia: 45,3t.",
        "length": "Kere.",
        "firingRangeExt": "2020. aasta uuendatud rakett (Wikipedia)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TOS-1A Solntsepek", "url": "https://odin.t2com.army.mil/WEG/Asset/3067b1cfe6cb93f35b4065e3a2067bc7", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: TOS-1", "url": "https://en.wikipedia.org/wiki/TOS-1", "retrieved": "2026-10-07"}
      ]
    },
    "TOS-1 Buratino": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "T-72 tanki šassii (modifitseeritud)",
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
        "armor": "Teras ja komposiit + aktiivsoomus, ekvivalent 500–600mm (RHA)"
      },
      "notes": {
        "combatWeight": "Wikipedia: 45,3t.",
        "range": "Wikipedia: 550km.",
        "mainArmament": "Rakett 220mm, 173kg; sihtmärgi tuvastamisest tuleni 90s.",
        "salvoTime": "ODIN/WEG märgib ka 7,5s."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TOS-1 Buratino", "url": "https://odin.t2com.army.mil/WEG/Asset/9292c23c5b064d5446656bf2852c9b9b", "retrieved": "2026-10-08"},
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
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "BAZ-6910-027 „Voštšina“ 8×8 ratasšassii",
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
        "mainArmament": "152mm 2A36 kahur (sama relv mis järelveetaval Giatsint-B-l)",
        "firingRange": 30.5,
        "firingRangeBB": 33.5,
        "firingRangeExt": 40,
        "firingRangeGuided": 47,
        "armor": "Kabiin kaitseb NATO 155mm kassettmoona allmoona eest; relvaalus on avatud (torn ja kilp puuduvad)"
      },
      "notes": {
        "chassis": "2S43 Malvaga sama šassii.",
        "mainArmament": "Toru pikkus umbes 7,6m. Automatiseeritud tulejuhtimine (ASUNO), MRSI-võimekus; positsiooni hõivamine, tuli ja lahkumine 2–3 minutiga.",
        "firingRange": "3OF59 OF-mürsk.",
        "firingRangeBB": "3OF30 „Baklan“.",
        "firingRangeExt": "Rakettkiirendiga mürsk.",
        "firingRangeGuided": "3OF95M Krasnopol-D: 45–47km · 3OF95 Krasnopol-M2: 37–40km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S44 Giatsint-K", "url": "https://odin.t2com.army.mil/WEG/Asset/aef72388775e5c89be3c2d7879158089", "retrieved": "2026-10-07"}
      ]
    },
    "GMZ-3": {
      "status": "unverified",
      "values": {
        "crew": "3 (ülem, juht-mehaanik, miinipaigaldaja)",
        "chassis": "Roomikšassii, 2K11 Krug (SA-4 Ganef) baasil",
        "combatWeight": 28.5,
        "length": 8.62,
        "width": 3.25,
        "height": 2.7,
        "engine": "KaMAZ-7482 vesijahutusega diisel",
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
        "mainArmament": "7,62mm PKT kuulipilduja (2500 lasku)",
        "mineLaying": "Adratüüpi, kaherenniline automaatne; maapinnale 8 miini/min, maasse 4 miini/min; miinide vahe 5 või 10m",
        "mineCapacity": "208 tankitõrjemiini",
        "armor": "Kergsoomustatud kere; suitsugranaadiheitjad"
      },
      "notes": {
        "range": "Miinilastiga 300km.",
        "mineLaying": "Paigalduskiirus maapinnale kuni 16km/h, maasse kuni 6km/h. Matmissügavus mullas kuni 120mm, lumes kuni 500mm. Miiniväli: survemiinid kuni 1km, magnetmiinid kuni 2km.",
        "mineCapacity": "Täislaadimine 7-liikmelise jaoga 15–20 min."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: GMZ-3", "url": "https://odin.t2com.army.mil/WEG/Asset/2598076104bbf6c447b7a4193c06cf38", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: GMZ-3", "url": "https://en.wikipedia.org/wiki/GMZ-3", "retrieved": "2026-10-08"}
      ]
    },
    "UMZ": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "ZIL-131 6×6 veoauto (UMZ-K: KamAZ-63501; UMZ-G: T-72/T-90 tanki šassii)",
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
        "mineLaying": "6 pöörlevat kassettheitjat (3 kummalgi küljel), kokku 180 toru (140mm); miinid külgedele ja/või taha; 1–3-rajaline miiniväli",
        "mineCapacity": "180 PTM-3 tankitõrjemiini, 720 POM-2 või 11 520 PFM-1S jalaväemiini",
        "armor": "Soomustamata (ZIL-131 versioon)"
      },
      "notes": {
        "chassis": "Peetakse GMZ-seeria asendajaks.",
        "combatWeight": "Miinilastiga; ilma miinideta 8,3t.",
        "mineLaying": "Paigalduskiirus 10–40km/h. Miinivälja pikkus 1000–1200m, sügavus 30–120m. Ühe laadungiga miinivälja max pikkus: PFM-1S 3200m, POM-2 5000m, PTM-3 600m. Kasutab samu miinikassette mis PKM."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: UMZ", "url": "https://odin.t2com.army.mil/WEG/Asset/5a51749ebc13bfc7090c2a7d8a6fd4c8", "retrieved": "2026-10-08"}
      ]
    },
    "UR-77": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "2S1 Gvozdika šassii",
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
        "mineClearing": "Kaks reaktiivset miinitõrjelaengut (UZP-77 või UZ-67); laengu pikkus 93m; lastakse 200–500m kaugusele; puhastab kuni 6m laiuse ja 80–90m pikkuse koridori",
        "armor": "Keevitatud teras: kere kuni 15mm, heitjakate 20mm"
      },
      "notes": {
        "mineClearing": "Koridori rajamine 3–5 min. UZ-67: laskekaugus 200–350m, koridor 75–80m. Laengut on kasutatud ka linnalahingus hoonete hävitamiseks."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: UR-77 Meteorit", "url": "https://odin.t2com.army.mil/WEG/Asset/ff60b0630b4bff5a8cd9707cffd449ca", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: UR-77 Meteorit", "url": "https://en.wikipedia.org/wiki/UR-77_Meteorit", "retrieved": "2026-10-08"}
      ]
    },
    "IRM": {
      "status": "unverified",
      "values": {
        "crew": "6 (ülem, juht, 4 pioneeri)",
        "chassis": "BMP-1 komponendid, 7 tugirullikut külje kohta",
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
        "mainArmament": "7,62mm PKT kuulipilduja",
        "mgRange": 1500,
        "specialEquipment": "Laiahaardeline miiniotsija RShM-2 (metall kuni 300mm sügavusel, 3–5km/h); kajalood EIR (veesügavus 0,5–20m); periskoop PIR-451 ja kaugusmõõtja DSP-30; navigatsioonisüsteem TNA-3; käsimiiniotsijad; reaktiivne enesepäästesüsteem (2 × 12 raketti)",
        "armor": "Keevitatud teraskere; kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "maxSpeedWater": "Kaks sõukruvi kere tagaosas.",
        "mgRange": "Max laskekaugus 4000m.",
        "specialEquipment": "Teeluure tavaliselt 8–10km/h, miiniväljade luure 5km/h; 100m laiune veetakistus läbitakse 5 minutiga. Variant IPR: kokkuklapitav snorkel."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: IRM Zhuk", "url": "https://odin.t2com.army.mil/WEG/Asset/b0c87376508539e29e4ee631d84c3234", "retrieved": "2026-10-08"}
      ]
    },
    "2S6 Tunguska": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "GM-352M roomikšassii",
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
        "mainArmament": "2 × 30mm 2A38M kaksiktoruga automaatkahur (kokku 4 toru, 1904 lasku)",
        "samMissiles": "8 × 9M311 (raadiokäsujuhtimine, 9kg varraslõhkepea, laserlähedussüütur)",
        "rateOfFire": 5000,
        "sensors": "Avastamisradar 1RL144 (C-sagedusala, umbes 18km); jälgimisradar (X-sagedusala, umbes 16km); optiline sihtimissüsteem 1A29; IFF 1RL138",
        "samRange": {"min": 2500, "max": 10000},
        "samAltitude": {"min": 10, "max": 3500},
        "cannonRangeAir": 4000,
        "cannonAltitudeAir": 2000,
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "combatWeight": "Andmed 2S6M järgi. Wikipedia (2S6M1): 35t.",
        "height": "Radar üleval 4,02m.",
        "power": "Wikipedia: nimivõimsus 780hj, selles sõidukis piiratud 710hj-ga.",
        "samMissiles": "2S6M põhitootmisversioon; algsel 2S6-l 4 raketti. Laskmine liikumiselt kuni 45km/h.",
        "rateOfFire": "Ühe kahuri kohta 1950–2500 lasku/min.",
        "sensors": "Süsteemi reageerimisaeg umbes 8 s.",
        "samRange": "9M311M / 2S6M1. Algne 9M311: kuni 8km.",
        "samAltitude": "Wikipedia (9M311-M1): 15–3500m.",
        "cannonRangeAir": "Kaldkaugus; min umbes 200m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S6M Tunguska-M", "url": "https://odin.t2com.army.mil/WEG/Asset/5fadf3d546d246dc08b49b62deed65a2", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 2K22 Tunguska", "url": "https://en.wikipedia.org/wiki/2K22_Tunguska", "retrieved": "2026-10-08"}
      ]
    },
    "STRELA-10/SA-13 Gopher": {
      "status": "unverified",
      "values": {
        "crew": "3 (ülem, operaator, juht)",
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
        "samMissiles": "9M37 – 4 kanderaamil + 8 varuraketti sõiduki sees; kahe sagedusalaga infrapuna- ja fotokontrastisihtija, 3kg kildlõhkepea",
        "secondaryArmament": "7,62mm PKT kuulipilduja (2000 lasku)",
        "sensors": "Kaugusmõõtja radar 9S86 (450–10 000m); passiivne radarisignaalide avastus 9S16 (osal masinatel); sihtmärgiinfo eraldi MT-LBu radarilt Dog Ear (kuni 80km)",
        "samRange": {"min": 800, "max": 5000},
        "samAltitude": {"min": 25, "max": 3500},
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "combatWeight": "Wikipedia (Strela-10M3): 12,3t.",
        "length": "Wikipedia: 6,6m.",
        "height": "Lahinguasendis 3,96m.",
        "maxSpeedWater": "5–6km/h, liigub vees roomikute abil.",
        "samMissiles": "Uuestilaadimine umbes 3 min. Strela-10M3 rakett 9M333: 5kg lõhkepea, sobib ka droonide ja tiibrakettide vastu.",
        "secondaryArmament": "Wikipedia: PKMB kuulipilduja.",
        "samAltitude": "9M333: alates 10m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9K35 Strela-10", "url": "https://odin.t2com.army.mil/WEG/Asset/a237e8ba38ff3eb1f4ac04002b80e5c7", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9K35 Strela-10", "url": "https://en.wikipedia.org/wiki/9K35_Strela-10", "retrieved": "2026-10-08"}
      ]
    },
    "PRP-4": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "BMP-1 šassii",
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
        "mainArmament": "7,62mm PKT kuulipilduja (enesekaitseks)",
        "sensors": "Mastil maapealse seire radar 1L120-1 (Ku-sagedusala): inimene umbes 7km, sõidukid 12–20km, hooned kuni 25km; periskoopiline laserkaugusmõõtja 1D14-1; soojuskaamera",
        "specialEquipment": "Suurtükiväe luure ja tulejuhtimine: sihtmärkide koordinaatide määramine; maha võetav vaatluspost kuni 6km kaugusele sõidukist",
        "armor": "Keevitatud valtsitud teras (kere katus 6mm), torn 33mm; lisasoomus saadaval"
      },
      "notes": {
        "combatWeight": "Andmed PRP-4A Argus (2009) järgi; baasmudel PRP-4 Nard on 1980. aastate algusest.",
        "sensors": "Seisva tanki avastuskaugus väljalülitatud mootoriga väheneb umbes 2km-ni."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PRP-4A Argus", "url": "https://odin.t2com.army.mil/WEG/Asset/9bd635a80bf83183f54381f4d29935f1", "retrieved": "2026-10-08"}
      ]
    },
    "ZOOPARK-1": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu",
        "length": 6.45,
        "width": 2.86,
        "engine": "YaMZ-238 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 5,
        "range": 500,
        "amphibious": true,
        "secondaryArmament": "7,62mm PKT kuulipilduja",
        "sensors": "3D monopulssradar 1L259 (G/H-sagedusala, 4–8GHz), skaneerimissektor 90°; jälgib korraga kuni 12 sihtmärki, kuni 70 tulepositsiooni minutis",
        "specialEquipment": "Vastutuleradar: määrab vastase miinipildujate, suurtükkide, raketiheitjate ja taktikaliste rakettide stardipositsioonid mürsu trajektoori järgi; jälgib ka oma suurtüki tule tulemusi. Avastuskaugus: suurtükimürsud 8–10km, miinid 12–15km, reaktiivmürsud 12–20km, taktikalised raketid 35km. Lahingusse ja marsile alla 5 min",
        "armor": "Keevitatud teras 14mm"
      },
      "notes": {
        "chassis": "Komplekti kuuluvad ka hooldusauto 1L30 (Ural-43203) ja generaatorihaagis. Radarit toidab põhimootori võimsusvõtt (30kW). 1L260 Zoopark-1M teenistuses alates 2017.",
        "length": "MT-LB šassii mõõtmed.",
        "power": "Uuematel KamAZ-740.50, 360hj.",
        "secondaryArmament": "ODIN/WEG: enamikul MT-LB variantidel."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1L219 Zoopark-1", "url": "https://odin.t2com.army.mil/WEG/Asset/100a6d9e7cd19b088a28e2ec49760597", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: Zoopark-1", "url": "https://en.wikipedia.org/wiki/Zoopark-1", "retrieved": "2026-10-08"}
      ]
    },
    "9P149 Shturm-S": {
      "status": "unverified",
      "values": {
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
        "atgm": "9M114 Kokon (AT-6 Spiral) – üks sissetõmmatav kanderaam automaatlaaduriga; raadiokäsujuhtimine (SACLOS)",
        "atgmPenetration": "560–600mm RHA (kumulatiivne lõhkepea)",
        "sensors": "Optiline sihik laserkaugusmõõtjaga (päevane)",
        "atgmRange": {"min": 400, "max": 5000},
        "armor": "Keevitatud teras 7–14mm"
      },
      "notes": {
        "atgm": "Kanderaam sees olles sarnaneb MT-LB-ga; eristab väikese kuulipildujatorni asemel suur optiline sihik. Shturm-SM (2014): raketid 9M120 Ataka, päeva- ja öösihik.",
        "atgmRange": "9M114M1: kuni 6km, 9M114M2: kuni 7km. Shturm-SM (9M120 Ataka): kuni 6km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P149 Shturm-S", "url": "https://odin.t2com.army.mil/WEG/Asset/9f3f567f902e5cd82c5b267d68dd484d", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9K114 Shturm", "url": "https://en.wikipedia.org/wiki/9K114_Shturm", "retrieved": "2026-10-08"}
      ]
    },
    "9P157-2 Krizantema-S": {
      "status": "unverified",
      "values": {
        "crew": "2 (operaator, juht)",
        "chassis": "BMP-3 šassii, tornita",
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
        "atgmPenetration": "Tandem-kumulatiivne: üle 1100mm RHA aktiivsoomuse taga; ka termobaariline lõhkepea",
        "sensors": "Sissetõmmatav millimeeterlaine-radar; optiline sihik laserjuhtimisega; laserkaugusmõõtja",
        "atgmRange": {"min": 400, "max": 6000},
        "armor": "Alumiiniumsulam + poltidega terasest lisasoomus; esiosa peab 30mm mürsule vastu 200m kauguselt"
      },
      "notes": {
        "atgm": "Kanderaamid laetakse automaatselt umbes 15 sekundiga. Rakett umbes 400m/s; tabab ka madalal lendavaid sihtmärke (kuni 3000m). 9P157-4 on patarei juhtimismasin (BMP-3 torn ilma relvata).",
        "atgmPenetration": "Wikipedia: 1100–1250mm."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P157 Khrizantema-S", "url": "https://odin.t2com.army.mil/WEG/Asset/ecf8afb0fa6f4c6aa532e100cf191796", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9M123 Khrizantema", "url": "https://en.wikipedia.org/wiki/9M123_Khrizantema", "retrieved": "2026-10-08"}
      ]
    },
    "9P162 Kornet-T": {
      "status": "unverified",
      "values": {
        "crew": "2 (juht, ülem-operaator)",
        "chassis": "BMP-3 šassii, tornita",
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
        "atgmPenetration": "1000–1200mm RHA aktiivsoomuse taga (ilma 1200–1400mm); betoon 3–3,5m",
        "atgmRange": {"min": 100, "max": 5500},
        "armor": "BMP-3 kere: alumiiniumsulam, esiosa komposiitsoomus peab 30mm soomust läbistavale mürsule vastu; ümberringi 14,5mm"
      },
      "notes": {
        "height": "Kanderaamid sees.",
        "atgm": "Kaks raketti saab lasta samale sihtmärgile alla sekundilise vahega (aktiivkaitse ülekoormamiseks) või kahele sihtmärgile korraga. Muud relvastust peale meeskonna isikurelvade pole.",
        "atgmRange": "9M133M-2: 150–8000m (Wikipedia)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 9P162 Kornet-T", "url": "https://odin.t2com.army.mil/WEG/Asset/223bc869ffda3e31fc9dd6f14997d978", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-08"}
      ]
    },
    "PRP-3": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "BMP-1 šassii",
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
        "mainArmament": "7,62mm kuulipilduja (ainult enesekaitseks)",
        "sensors": "Mastil maapealse seire radar IRL-123 (NATO „Small Fred“, J-sagedusala 10–20GHz): liikuvate ja seisvate sihtmärkide avastuskaugus 20km, jälgimiskaugus 7km; laserkaugusmõõtja 1D6; soojuskaamerat ja arvutatud tulejuhtimist pole",
        "specialEquipment": "Suurtükiväe luure- ja vaatlusmasin (kasutusel 1972): leiab vastase üksuste asukohad, määrab vastase suurtükiväe positsioonid vastutule jaoks ja annab sihtmärgi koordinaadid suurtükiväe tulejuhtimiseks. Raadiojaamad 2×R-123M, R-124 ja R-108 – jälgib mitut juhtimis- ja tulejuhtimisvõrku. Maha võetav vaatluspost kuni 6km kaugusel sõidukist; TBK-kaitse ja suitsuseadmed",
        "armor": "Keevitatud valtsitud teras (kere katus 6mm): kaitseb igast küljest 12,7mm kuulide eest, eesmine sektor osaliselt 20mm eest; torn 33mm; lisasoomus saadaval"
      },
      "notes": {
        "chassis": "PRP-3 „Val“ on PRP-4 eelkäija: sama BMP-1 šassii ja sama põhimõte, kuid vanem radar. PRP-4 võttis tootmisliinil selle üle (Wikipedia: PRP-3 ehitas Tšeljabinski traktoritehas ChTZ, PRP-4 Rubtsovski masinaehitustehas)."
      },
      "sources": [
        {"name": "Wikipedia: BMP-1", "url": "https://en.wikipedia.org/wiki/BMP-1", "retrieved": "2026-10-23"}
      ]
    },
    "SNAR-10": {
      "status": "unverified",
      "values": {
        "crew": "5 (allika kirjelduses 4–5)",
        "chassis": "MT-LB (6 tugirullikut külje kohta)",
        "combatWeight": 12.6,
        "length": 7.62,
        "width": 2.86,
        "height": 2.72,
        "engine": "YaMZ-238 diisel",
        "power": 240,
        "maxSpeedRoad": 60,
        "range": 500,
        "caliber": 7.62,
        "mainArmament": "7,62mm PKT kuulipilduja (enesekaitseks)",
        "sensors": "Radar 1RL232 „Leopard“ (NATO „Big Fred“), K-sagedusala 34,55–35,25GHz, parabool-antenn. Algversioon: liikuvad sõidukid 16km (ilma MTI-ta) / 10km (MTI-ga), liikuvad laevad 30km, mürsu löögikohad 10km. SNAR-10M1: sõidukid 40km, isikkoosseis 8–10km, miinipilduja tuli 10km, suurtükitule 15km; jälgib korraga kuni 20 sihtmärki",
        "specialEquipment": "Lahinguvälja seireradar: avastab ja jälgib liikuvaid maa- ja veepealseid sihtmärke (sõidukid, isikkoosseis, laevad) ning annab suurtükiväele andmeid oma tule korrigeerimiseks. Positsioonile asumine ja kokkupakkimine 5min; autonoomne töö vähemalt 3 ööpäeva (M1). TBK-kaitse; M1 variandil digitaalne töötlus ja kuvar, satelliitnavigatsioon ja automaatne andmeedastus"
      },
      "notes": {
        "chassis": "Radar asub MT-LB tüüpi šassiil (SNAR-10 võeti kasutusele 1975).",
        "sensors": "SNAR-10M (1RL232-1): radar asendatud Kredo-1E-ga, 40km sõidukitele, lisaks digitaalne kuvar ja side. SNAR-10M1 (1RL232-2): laiemalt kasutusel. Wikipedia loetleb Venemaa maaväe varustuses M1 varianti nime all „SANR-10M Pantera“ (tootmises)."
      },
      "sources": [
        {"name": "Wikipedia: MT-LB", "url": "https://en.wikipedia.org/wiki/MT-LB", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: List of equipment of the Russian Ground Forces", "url": "https://en.wikipedia.org/wiki/List_of_equipment_of_the_Russian_Ground_Forces", "retrieved": "2026-10-23"}
      ]
    },
    "1V13": {
      "status": "unverified",
      "values": {
        "crew": "6 (allika tekstis 5: ülem, operaator-arvutaja, vanemraadist, raadist, mehaanik-juht)",
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
        "secondaryArmament": "7,62mm PKMB kuulipilduja ja RPG-7VN (5 lasku); varasemates versioonides DShK-M, hilisemates NSVT",
        "sensors": "Suurtükiväe kompassi- ja kaugusmõõteseadmed: topograafiline instrument 1G-121-1, güroskoop 1G-25-1, kaugusmõõtja DSP-30, vaatlusseade PV-1, suunaring PAB-2AM",
        "specialEquipment": "Patarei vanemohvitseri juhtimissoomuk (komplektis 3 tk): juhib patarei tuld, määrab tulepositsioonide koordinaadid, orienteerib relvad põhisuunda, võtab arvutilt vastu laskeandmed ja hoiab sidet staabi ja relvameeskondadega. Seadmed: laskeandmete arvuti PUO-9M, raadio R-123M (3 tk), automaatne käsuvastuvõtja 9Sh34, välitelefonid, kaabliratas (3×500m), kiirgus- ja keemialuureseade GO-27, miiniindikaator IMP, generaator GIV-8/6000; filter-ventilatsioon, kütte- ja saastest puhastamise seadmed"
      },
      "notes": {
        "chassis": "1V13 kuulub 1V12 „Mašina-S“ tulejuhtimiskomplekti (prototüüp 1970, tootmine alates 1973), mis teenindab liikursuurtükke 2S1, 2S3, 2S5 ja 2S19.",
        "gradient": "Allika 30° ≈ 58%; külgkalle 25° ≈ 47%.",
        "power": "220kW (295 hj)."
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
        "secondaryArmament": "7,62mm PKMB kuulipilduja ja RPG-7VN (5 lasku)",
        "sensors": "Laserkaugusmõõtja 1D8, kombineeritud vaatlusseade 1PN44, stereokaugusmõõtja DS-1, tankivaatlusseadmed TNPO-170, koordinaatide teisendi 1T804, kaugusmõõtja DSP-30, güroskoop 1G-25-1, topograafiline instrument 1G-121-1, suunaring PAB-2AM",
        "specialEquipment": "Suurtükiväepataljoni ülema juhtimis- ja vaatlussoomuk (1V12 „Mašina-S“ komplektis): luure, sihtmärgi koordinaatide määramine, tule juhtimine ja korrigeerimine ning side ülemate ja toetatavate üksustega. Laskeandmete arvuti PUO-9M; raadiod 2×R-123(M), R-111, R-130M (teleskoopmast), R-107; välitelefonikeskjaam P-19M, 2×TA-57, kaabliratas; kiirgus- ja keemialuureseade GO-27; generaator GIV-8/6000; filter-ventilatsioon, kütte- ja saastest puhastamise seadmed"
      },
      "notes": {
        "chassis": "Sarnane 1V14-le (patarei ülema ja tulejuhi masin), kuid pikk antennimast raadiojaamale R-130M ja üks R-123M asendatud R-111-ga. Mõõtmed ja kiirus on MT-LBu omad.",
        "gradient": "Allika 30° ≈ 58%; külgkalle 25° ≈ 47%."
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
        "crew": "6",
        "chassis": "BTR-60PB (8x8 ratassoomuk)",
        "combatWeight": 10.1,
        "length": 7.22,
        "width": 2.82,
        "height": 2.06,
        "engine": "2×GAZ-49B bensiinimootor (2×90hj)",
        "power": 180,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 60,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "mainArmament": "Torn on relvastamata (ainult vaatlusseadmed)",
        "sensors": "Vaatlusseadmed NNP-21 ja DV, kaugusmõõtja; lisaks laserkaugusmõõtja 1D15, päeva-/öövaatlus 1PN44, stereokaugusmõõtja DS-1, suunaring PAB-2AM, navigatsioon 1T121-M",
        "specialEquipment": "„Klen-1“ patarei ülema juhtimis- ja vaatlussoomuk (kuulub komplekti 1V17 „Mašina-B“: 3×1V18 + 1V19): suurtükiväe luure, sihtmärgi koordinaatide määramine ja tule juhtimine järelveetavate suurtükkide ja raketiheitjate patareidele (tulejuhi töökoht). Tulejuhtimine automaatselt 1V520 või käsitsi PUO-7; raadiod 3×R-123M ja R-107M; TBK-kaitse",
        "armor": "Torn eest 12,7mm, torni katus ja kere 7,62mm kuulide eest"
      },
      "notes": {
        "chassis": "BTR-60PB, mille relvastatud torn on asendatud relvastamata vaatlustorniga. 1V19 „Klen-2“ on pataljoni ülema tuletegevuskeskus samal šassiil (lisaraadio R-130M); 1V18-1 on moderniseeritud versioon.",
        "power": "Kaks mootorit kokku 180hj."
      },
      "sources": [
        {"name": "Wikipedia: BTR-60", "url": "https://en.wikipedia.org/wiki/BTR-60", "retrieved": "2026-10-23"}
      ]
    },
    "1V119": {
      "status": "unverified",
      "values": {
        "crew": "6",
        "chassis": "BMD-1",
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
        "specialEquipment": "Dessandi suurtükiväe juhtimis- ja luuremasin 2S9 „Nona-S“ jaoks (1981): määrab sihtmärgi koordinaadid, arvutab laskeandmed (automaatne tulejuhtimine 1V520, käsitsi PUO-7) ja juhib 2S9 tuld; heidetav langevarjuga koos dessandiga. Raadiod 3×R-123M ja R-107M; TBK-kaitse. Seadmestik sarnane 1V14-ga",
        "armor": "Kere 15mm"
      },
      "notes": {
        "chassis": "BMD-1 šassii, sama mis 2S9 „Nona-S“ kandjal – juhtimismasin liigub dessandiga kaasas.",
        "specialEquipment": "Masinat nimetatakse ka „1V119 Spektr“."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 1V119", "url": "https://odin.t2com.army.mil/WEG/Asset/ecd7ac12bd7b5f88de0735878b6be95d", "retrieved": "2026-10-28"}
      ]
    },
    "ARK-1": {
      "status": "unverified",
      "values": {
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
        "sensors": "3D monopulssradar 1RL239 „Lynx“ (lainepikkus 5cm, H-sagedusala 6–8GHz): miinipildujad 13km, suurtükid 8km, reaktiivmürsud 25km, taktikalised raketid 30km; jälgib kuni 3 sihtmärki minutis",
        "specialEquipment": "Vastutuleradar (ARK-1 „Rys’“): leiab vastase miinipildujate, suurtükkide, raketiheitjate ja taktikaliste rakettide positsioonid mürsu trajektoori järgi ning annab andmed vastutule jaoks; tavaliselt diviisi luurepatareis. Täisautonoomne – oma navigatsiooni-, orientatsiooni-, topo- ja sidesüsteemid. Positsioonile asumine ja kokkupakkimine 5min; TBK-kaitse",
        "armor": "Kere 15mm, torn eest 20mm"
      },
      "notes": {
        "chassis": "Radari kaks kiirgurit ja vastuvõtuantennid on kere peal, ülejäänud seadmed kere sees.",
        "sensors": "Selle sõiduki järeltulija on 1L219 Zoopark-1 (ZOOPARK-1)."
      },
      "sources": [
        {"name": "Militarnyi: Russian ARK-1 Rys’ radar neutralized in the Kherson region", "url": "https://militarnyi.com/en/news/russian-ark-1-rys-radar-neutralized-in-the-kherson-region/", "retrieved": "2026-10-23"}
      ]
    },
    "1V152": {
      "status": "unverified",
      "values": {
        "crew": "3 (kokku kuni 7 inimest)",
        "chassis": "BTR-80 (8x8 ratassoomuk)",
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
        "mainArmament": "Põhirelvastust pole (FIST); FDC-variandil KPVT 14,5mm raskekuulipilduja",
        "secondaryArmament": "Suitsugranaadiheitjad: 4 tk torni kummalgi küljel",
        "sensors": "Torni laserkaugusmõõtja, päeva- ja öövaatlusseadmed, käeshoitav laserkaugusmõõtja ja pimenägemisseade, inertsiaalnavigatsioon; täiustatud variandil IR-vaatlusseade (passiivne 1500m, aktiivne 3000m), soojuskaamera, laserindikaator; hilisemad variandid GLONASS",
        "specialEquipment": "Kapustnik-B automatiseeritud tulejuhtimissüsteemi ühtne juhtimis- ja vaatlussoomuk (1986): tulejuhi (FIST) ja tuletegevuskeskuse (FDC) variandid. Määrab sihtmärgi koordinaadid, arvutab laskeandmed korraga kuni kahele sihtmärgile ja annab need relvadele (suurtükid, miinipildujad, raketiheitjad). Raadiod: 2 kaugraadiot VHF (andmeside), 1 HF, 1 keskmaa- ja 1 lähimaaraadio; 10m teleskoopmast, 4kW generaator, vints 4,5t; kollektiivne TBK-kaitse",
        "armor": "Kere eesosa kaitseb 12,7mm, igast küljest 7,62mm kuulide ja mürsukildude eest; kuulikindlad aknad, lisasoomus saadaval"
      },
      "notes": {
        "chassis": "Kapustnik-B komplekti kuulub ka veoautol Ural-4320 põhinev 1V153. FIST (tulejuht) ja FDC (tuletegevuskeskus) on kaks varianti samal BTR-80 šassiil."
      },
      "sources": [
        {"name": "Wikipedia: BTR-80", "url": "https://en.wikipedia.org/wiki/BTR-80", "retrieved": "2026-10-23"}
      ]
    },
    "IMR-2": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "T-72 roomikšassii (IMR-2M1: T-72A); torni asemel pöörlev teleskoopkraana",
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
        "mainArmament": "12,7mm NSVT kuulipilduja juhikabiini katusel (enesekaitseks)",
        "specialEquipment": "Teepuhastus- ja pioneerisoomuk, mis rajab sõidukitele läbipääsu varemete, metsatõkete ja saastatud alade kaudu. Pöörlev teleskoopne mitmeotstarbeline kraana (haaratsiga, tõstevõime 2t, ulatus 8,4m); eesmine buldooserisae (V-kujuline või sirge, 200–250m³/h; üles tõstetav). Kivitõkete puhastamine 280–350m/h, kraavide ja puutõkete 350–400m³/h. Valmisolek sõidurežiimilt tööasendisse ca 6min. TBK-kaitse ja suitsuseadmed",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "chassis": "IMR-2M1 (1982) on lihtsustatud variant ilma miinitõrjeseadmeta; IMR-2M2 (1990) on mõeldud saastatud aladele (kopp haaratsi asemel); IMR-2MA: suurem operaatorikabiin ja 12,7mm NSV; Klin-1: kaugjuhitav IMR-2.",
        "maxSpeedRoad": "Wikipedia: 50km/h; IMR-2M puhul on avaldatud ka 60km/h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: IMR-2", "url": "https://odin.t2com.army.mil/WEG/Asset/77349ebd70a8b979d06d4b83e429da8d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: IMR-2", "url": "https://en.wikipedia.org/wiki/IMR-2", "retrieved": "2026-10-23"}
      ]
    },
    "IMR-3": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "T-90A roomikšassii",
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
        "mainArmament": "12,7mm NSVT kuulipilduja kaugjuhitavas relvajaamas",
        "mineClearing": "Rööbastee laiune minitraal KMT-R3 koos elektromagnetseadmega EMT (traalib varrasmiine ja magnetsüütega miine)",
        "specialEquipment": "Uue põlvkonna teepuhastussoomuk: U-kujuline buldooserisae (200–250m³/h), teleskoopkraana (tõstevõime 2t, pöördenurk 360°) kopaga, kiirgus- ja keemialuureseade, suitsugeneraator, automaatne tulekustutus. Võimalik kaugjuhtimine kantavalt pultilt või autonoomne töö programmeeritud marsruudil; TBK-kaitse",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest; lisasoomus saadaval"
      },
      "notes": {
        "chassis": "IMR-3M (tootmine alates 2016/2018) kasutab T-90 šassiid; valmistatud Uralvagonzavodis.",
        "fording": "Läbib veetõkkeid kuni 5m sügavuselt põhja mööda (ettevalmistusega); ettevalmistuseta 2,7m."
      },
      "sources": [
        {"name": "Wikipedia: IMR-2", "url": "https://en.wikipedia.org/wiki/IMR-2", "retrieved": "2026-10-23"}
      ]
    },
    "BAT-2": {
      "status": "unverified",
      "values": {
        "crew": "2 (kabiinis) + kuni 6 pioneeri (allikas: 8 kohta kokku)",
        "chassis": "MT-T raske roomikvedur",
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
        "specialEquipment": "Raske teede- ja kraavirajaja: eesmine buldooserisae (laius 4,5m buldooserina, 4,2m teepuhastajana; teede puhastamine 350–450m³/h, kraavi kaevamine 200–250m³/h; kallutatav 10°); hüdrokraana (ulatus 7,3m, tõstevõime 2t); hüdrovints (25t, 100m trossi); tagumine kobesti (sügavus 0,5m). Rajab teid ja läbipääse metsas, lumes ja pehmel pinnasel, ehitab pinnasvalle ja kaevab kraave; kasutatakse ka avariide likvideerimisel. TBK-kaitse ülerõhuga",
        "armor": "Keevitatud terask 14mm"
      },
      "notes": {
        "chassis": "BAT-M on moderniseeritud teedeehituse variant.",
        "maxSpeedOffroad": "Teede puhastamisel kuni 6,8km/h; maastikul pinnasteel kuni 35km/h."
      },
      "sources": [
      ]
    },
    "MTU-72": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "T-72 roomikšassii (T-72B/T-72M1 ümberehitus)",
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
        "mainArmament": "7,62mm PKMB kuulipilduja katusel",
        "specialEquipment": "Sillatank (1974): paigaldab ühe sillaga kuni 18m laiuse kraavi või veetakistuse ületamiseks (silla pikkus 20m, laius 3,3m, sõiduraja laius 1,0m, kaal 6,4t, kandevõime 50t). Silla paigaldus 3min, äravõtmine 8min; hüdrauliline eesmine tugisae (ka buldooserina). TBK-kaitse ja termosuitsuseade",
        "armor": "T-72 šassii soomuskere, torni asemel sillaseade"
      },
      "notes": {
        "chassis": "Asendas MTU-20 ja MT-55 (T-55 šassii). Toodang lõppes 1990.",
        "fording": "Ettevalmistusega kuni 4,5m."
      },
      "sources": [
        {"name": "Wikipedia: MT-55", "url": "https://en.wikipedia.org/wiki/MT-55", "retrieved": "2026-10-23"}
      ]
    },
    "PTS-2": {
      "status": "unverified",
      "values": {
        "chassis": "MT-T raske roomikšassii (T-64 komponendid)",
        "length": 12,
        "width": 3.3,
        "height": 3.17,
        "engine": "V-64-4 mitmekütusediisel",
        "power": 710,
        "maxSpeedRoad": 60,
        "maxSpeedWater": 12,
        "range": 500,
        "amphibious": true,
        "specialEquipment": "Ujuv roomikvedur (1985) raskete veokite, relvade, varustuse ja laskemoona transpordiks üle veetõkete; kandevõime 12t; tagumine pealelaadimisrambi. Lisavarustus: mitmeotstarbeline kopp, buldooserisae, veejoamootor, kliimaseade, radar ja navigatsioonisüsteem"
      },
      "notes": {
        "chassis": "Eelkäijad: PTS (1965, T-55 šassii, 10t, 350hj) ja PTS-M (1969). PTS-2 on PTS-4 eelkäija.",
        "specialEquipment": "PTS-2 ja PTS-M on ühtlasi kasutusel UR-83P miinitõrjelaengu veopaatidena."
      },
      "sources": [
        {"name": "Wikipedia: PTS (vehicle)", "url": "https://en.wikipedia.org/wiki/PTS_(vehicle)", "retrieved": "2026-10-23"}
      ]
    },
    "PTS-4": {
      "status": "unverified",
      "values": {
        "chassis": "T-80 šassii ja vedrustus",
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
        "mainArmament": "12,7mm kuulipilduja kaugjuhitavas relvajaamas",
        "specialEquipment": "Ujuv roomikvedur: kandevõime 12t maismaal ja 18t vees; täielikult suletud kabiin; suuremad sõukruvid. Katsetatud 2011, tootmisse 2014",
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
        "crew": "2",
        "chassis": "T-90S roomikšassii",
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
        "specialEquipment": "Sillatank („Gusenitsa-1“, 1997): paigaldab ühe silla kraavi, kanali või väikese jõe ületamiseks. Silla ulatus 24m (kokku 25m), sõiduraja laius 3,55m, kaal 8,6t, kandevõime 50t; paigaldus ca 2,5min, silla saab paigaldada kabiinist. Kasutatakse koos TMM-6-ga mitmelõivaliste sildade ehitamiseks; võimeline end sisse kaevama. TBK-kaitse ja suitsuseade"
      },
      "notes": {
        "chassis": "Variant MTU-90M: silla ulatus 19m, kandevõime 60t, kasutusele 2013–2017."
      },
      "sources": [
      ]
    },
    "MT-55A": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "T-55A roomikšassii",
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
        "specialEquipment": "Sillatank: paigaldab 18m silla (kandevõime kuni 50t) kraavide ja veetakistuste ületamiseks"
      },
      "notes": {
        "chassis": "MT-55 oli seeriaeelne mudel (sild MT-34); MT-55A on seeriaversioon. Asendati MTU-72-ga."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MT-55A", "url": "https://odin.t2com.army.mil/WEG/Asset/0cb3922a45a98414dcb4ecfd04445e2a", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: MT-55", "url": "https://en.wikipedia.org/wiki/MT-55", "retrieved": "2026-10-23"}
      ]
    },
    "MTU-20": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "T-55A roomikšassii",
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
        "specialEquipment": "Sillatank (valmistati 1963–1977): silla pikkus 20m (ületab kuni 18m laiuse kraavi), laius 3,3m, kaal 7t, kandevõime 50t (üks allikas: 60t); paigaldus 5min, äravõtmine 10min"
      },
      "notes": {
        "chassis": "Võeti Nõukogude armees kasutusele 1960ndate lõpus; asendati MTU-72-ga."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MTU-20", "url": "https://odin.t2com.army.mil/WEG/Asset/59d9d1b2924ba8b7d43f2f78cc521f20", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts.com: MTU-20", "url": "https://www.armedconflicts.com/topic/view/22720", "retrieved": "2026-10-23"}
      ]
    },
    "UR-83P": {
      "status": "unverified",
      "values": {
        "crew": "2 (laskmine); kokkupanek 6 inimest",
        "weightKg": 1810,
        "mineClearing": "Reaktiivne miinitõrjelaeng UZP-83 (UZP-77 modifikatsioon): laengu pikkus 120m, ca 1380kg lõhkeainet PVV-4 (11,5kg/m); kaks raketimootorit DM-70; lastakse 100–440m kaugusele; puhastab vähemalt 6m (tankitõrjemiiniväljas) või 12m (jalaväemiiniväljas) laiuse koridori",
        "specialEquipment": "Kantav (osadeks võetav) miinitõrjeseade (1983): laskerakis, ankur, pidurdustross ja mehaaniline süütur VR-04 (plahvatus 60–120s pärast pidurdamist). Kokkupanek 90min; tulepositsioon maapinnal, kaevikus, auto-/haagisekastis, ujuval PTS-M/PTS-2 kandjal või laevatekil. Komplekti mõõtmed lahinguasendis 1,5×1,5×2,6m"
      },
      "notes": {
        "specialEquipment": "Transporditakse osadeks võetuna, 2 komplekti ühel maastikuveokil (ZIL-131, Ural-4320, KamAZ-53105).",
        "mineClearing": "Võrdlus: USA M58 MICLIC (106m laeng, ca 8m laiune ja 100m pikk koridor)."
      },
      "sources": [
        {"name": "Fenix Insight: UR-83P", "url": "https://metis.fenixinsight.com/munition/demolitionStore/ur-83p", "retrieved": "2026-10-23"}
      ]
    },
    "ZRP-2": {
      "status": "unverified",
      "values": {
        "crew": "1–2 pioneeri",
        "combatWeight": 0.034,
        "weightKg": 34,
        "mineClearing": "Miinitõrjelaeng DKR-150 (pikkus 60m) raketimootoriga D-ZRP-2M; lastakse kuni 160m kaugusele; puhastab 0,4m laiuse ja 54–60m pikkuse läbipääsu jalaväemiiniväljas",
        "specialEquipment": "Seljakotis kantav miinitõrjelaeng „Tropa“ (1974): laeng, raketimootor, ühendustross, süütur, pidurdustross, käivitusseade, ankrud ja kandekott (kokku 34kg). Kokkupanek ca 5min; mehaaniline süütur plahvatab laengu kaugjuhtimisega; sihtimine pidurdustrossiga"
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
        "crew": "2 (juht + 1)",
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
        "specialEquipment": "Raske mehhaniseeritud sillaauto (1972): kääridega (kokkuklapitav) sild pikkusega 10,5m, laius 3,8m, kaal 7t; laotatakse tagurpidi sõidu suunas. Kandevõime 50t (allika järgi ka 60t). Kuni neli sillaautot ületavad kuni 40m laiuse ja 3m sügavuse tõkke; täielik paigaldus ca 72min. Soomustamata, TBK-kaitset pole",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "Eelkäijad: TMM-1 (ZIL-157), TMM-2 (KrAZ-214); TMM-4 (60t) samal šassiil; asendaja TMM-6."
      },
      "sources": [
      ]
    },
    "TMM-6": {
      "status": "unverified",
      "values": {
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
        "specialEquipment": "Raske mehhaniseeritud sillaauto („Gusenitsa-2“, 1999): kääridega kokkuklapitav sild pikkusega 17m, laius 4m, kandevõime 60t; veetõkke sügavus 2–5m; kuus sillaautot ehitavad 102m silla. Läbilaskevõime kuni 400 sõidukit tunnis kiirusega 30km/h. Soomustamata, TBK-kaitsega",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "Töötab koos MTU-90-ga mitmelõivaliste sildade ehitamisel. Wikipedia: TMM-5 oli väikese seeriaga prototüüp."
      },
      "sources": [
        {"name": "Wikipedia: TMM-6", "url": "https://en.wikipedia.org/wiki/TMM-6", "retrieved": "2026-10-23"}
      ]
    },
    "Pontoonsillapark": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "KrAZ-255B 6×6 (pontoonide vedaja)",
        "fording": 1.2,
        "specialEquipment": "PMP kokkuvolditav pontoonsildade komplekt (1961): täiskomplekt 32 jõepontooni, 4 kaldapontooni ja 12 sillapaati (pool-komplekt 16+2). Pontoon laotub veele sattudes automaatselt. Silla pikkus kuni 227m (60t) või 382m (20t); sõiduraja laius 6,5m; ehituskiirus kuni 7m/min; max voolukiirus 2m/s. Parvedena: 40t (2 pontooni, 8min) kuni 170t (1+8 pontooni)"
      },
      "notes": {
        "specialEquipment": "Järeltulijad: PPS-84, PP-91 ja PP-2005."
      },
      "sources": [
        {"name": "Wikipedia: PMP Floating Bridge", "url": "https://en.wikipedia.org/wiki/PMP_Floating_Bridge", "retrieved": "2026-10-23"}
      ]
    },
    "BTM-4M": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "specialEquipment": "BTM-3 täiustatud variant: töökiirus tavalises pinnases 1000m/h ja külmunud pinnases 250m/h. Jäi prototüübiks ja seeriatootmisse ei läinud"
      },
      "sources": [
      ]
    },
    "BTM-3": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "AT-T raske suurtükikvedur (T-54 šassii alusel)",
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
        "specialEquipment": "Kiire kraavikaevur (1957): kaevab kaitse- ja side-kraave kuni IV klassi pinnases. Kopprootor 8 kopaga (á 160 l); kraavi sügavus 1,1m (põhiprofiil) kuni 1,5m; töökiirus 270–810m/h, õhukese (0,4–0,5m) kraavi puhul kuni 1200–1400m/h; min pöörderaadius 25m; üleminek sõidurežiimilt kaevamisele ca 10min; buldooserisae. TBK-kaitse",
        "armor": "Kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "chassis": "Toodetud Dmitrovi ekskavaatoritehases alates 1957."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BTM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/41714363385ece02178899f40f23b494", "retrieved": "2026-10-28"}
      ]
    },
    "MDK-3": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "MT-T raske roomikvedur",
        "combatWeight": 39.5,
        "length": 10.22,
        "width": 3.23,
        "height": 4.04,
        "engine": "V-64-4 diisel",
        "power": 710,
        "maxSpeedRoad": 70,
        "maxSpeedOffroad": 35,
        "range": 500,
        "specialEquipment": "Kraavikaevamismasin (1980ndad): kaevab tankitõrjekraave ning auto- ja laskepositsioonide süvendeid. Kaevamisel pikkus 11,75m, laius 4,6m, kõrgus 3,25m; kraavi laius 3,5m, sügavus kuni 3m; tootlikkus 400–500m³/h; buldooserisae; TBK-kaitse ülerõhuga",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "MDK-2 ja MDK-2M asendaja. Ei ole õhutransporditav ega langevarjuga heidetav."
      },
      "sources": [
      ]
    },
    "MDK-2M": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "AT-T raske suurtükikvedur (T-54 šassii alusel)",
        "combatWeight": 28,
        "length": 8,
        "width": 3.4,
        "height": 3.95,
        "engine": "V-401 V12 diisel",
        "power": 415,
        "maxSpeedRoad": 35,
        "range": 500,
        "gradient": 80,
        "sideSlope": 22,
        "specialEquipment": "Kraavikaevamismasin (1968): kaevab kiiresti suuri alasid ja tankitõrjekraave. Kraavi sügavus kuni 4,5m, laius ülal 4–4,7m ja all 3,5m; töökiirus 387m³/h (üks allikas: 300m³/h). Pikkus kaevamisel 10,23m, kõrgus 3,48m; TBK-kaitse ülerõhuga",
        "armor": "Soomustamata"
      },
      "notes": {
        "chassis": "MDK-2 (1959): sama šassii, 27t, aeglasem tööjõudlus. Asendaja MDK-3."
      },
      "sources": [
        {"name": "Wikipedia: MDK-2M", "url": "https://en.wikipedia.org/wiki/MDK-2M", "retrieved": "2026-10-23"}
      ]
    },
    "Pantsir-S1/SA-22 Greyhound": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "2 × kaksiktoruline 30mm automaatkahur 2A38M (kokku 4 toru), 1400 lasku",
        "samMissiles": "12 × 57E6 / 57E6-E (kahes kuue toruga blokis; kahe astmega, raadio- ja optiline käsujuhtimine, 75–76kg, lõhkepea 16–20kg)",
        "rateOfFire": 5000,
        "sensors": "Avastusradar 2RL80 (S-sagedusala; avastab kuni 40 sihtmärki, avastuskaugus 32–36km, maks 45km); jälgimis- ja juhtimisradar 1RS2-1E (24–28km); optilis-elektrooniline kanal (soojuskaamera ja IR-suunamõõtja, 17–26km); reaktsiooniaeg 4–6s; kuni 4 raketti korraga 4 sihtmärgile; 10–12 sihtmärki minutis",
        "samRange": {"min": 1200, "max": 20000},
        "samAltitude": {"min": 5, "max": 15000},
        "cannonRangeAir": 4000,
        "cannonAltitudeAir": 3000,
        "specialEquipment": "Lähitõrje õhutõrjekahur- ja raketikompleks (96K6): tegutseb autonoomselt või patarei koosseisus. Valmisolek ca 5min; TBK-kaitse",
        "armor": "Soomustamata, kerge kaitse killustike eest"
      },
      "notes": {
        "chassis": "Pantsir-SM (uuem variant) on soomustatud kabiiniga.",
        "combatWeight": "Tühimass 14,85t, max koormus 20t."
      },
      "sources": [
        {"name": "Wikipedia: Pantsir missile system", "url": "https://en.wikipedia.org/wiki/Pantsir_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "Buk-M1/SA-11 Gadfly": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "GM-569 roomikšassii",
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
        "samMissiles": "4 × 9M38M1 (685–690kg, lõhkepea 70kg, kiirus 850m/s, poolaktiivne radarsihtimine)",
        "samRange": {"min": 3000, "max": 35000},
        "samAltitude": {"min": 15, "max": 22000},
        "sensors": "Avastusradar 9S18M1 „Snow Drift“ (avastuskaugus kuni 85km); tulejuhtimis- ja valgustusradar 9S35 „Fire Dome“ TELARil; reaktsiooniaeg 15–18s; sihtmärgi tabamistõenäosus 0,8–0,95 (õhusõiduk)",
        "specialEquipment": "Iseliikuv õhutõrjeraketi laskeseade 9A310M1 (TELAR): avastab, jälgib ja tabab sihtmärke ise; kuulub pataljoni 9K37M1 koosseisu koos avastusradari 9S18M1-ga. Valmisolek 5min",
        "armor": "Kerge soomus kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "notes": {
        "chassis": "Buk-M1-2 on moderniseeritud versioon (rakett 9M317)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Buk-M1/SA-11 Gadfly", "url": "https://odin.t2com.army.mil/WEG/Asset/8d22cfba26b96eb3700ef45e5c234d76", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Buk missile system", "url": "https://en.wikipedia.org/wiki/Buk_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "Buk-M3/SA-27 Gollum": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "GM-5955 roomikšassii",
        "combatWeight": 34,
        "length": 7.5,
        "width": 3.3,
        "height": 5.1,
        "engine": "Diisel",
        "power": 710,
        "maxSpeedRoad": 65,
        "range": 500,
        "samMissiles": "6 × 9M317M (581kg, lõhkepea 62kg, kiirus kuni 1550m/s); täiskoormusega 9M317M/9R31M raketid",
        "samRange": {"min": 2500, "max": 70000},
        "samAltitude": {"min": 15, "max": 35000},
        "sensors": "Masti-radar 9S36M (mast 22m; avastab tiibrakette 5m kõrgusel kuni 70km kauguselt); ülevaaderadar 9S38 (avastuskaugus kuni 160km); reaktsiooniaeg ca 8–10s; kuni 36 sihtmärki korraga pataljonis, jälgib kuni 300 sihtmärki; max sihtmärgi kiirus 3000m/s",
        "specialEquipment": "Iseliikuv õhutõrjeraketi laskeseade 9A316M (TELAR) pataljonis koos laadimismasinaga 9A317M ja juhtimispunktiga 9S510M. Tabab õhusõidukeid, tiibrakette, taktikalisi ballistilisi rakette ja täppismoona",
        "armor": "Kerge soomus kaitseb kergrelvade tule ja mürsukildude eest"
      },
      "sources": [
        {"name": "Wikipedia: Buk missile system", "url": "https://en.wikipedia.org/wiki/Buk_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "S-400 / S-300": {
      "status": "unverified",
      "values": {
        "chassis": "Radarid ja juhtimispunkt MZKT-7930 8×8 šassiil; laskeseade 5P85TE2 poolhaagisena BAZ-64022 6×6 veokil (või MAZ-543M)",
        "samMissiles": "S-400: 40N6E (380–400km), 48N6DM/E3 (240km), 48N6E2 (200km), 9M96E2 (120km), 9M96E (40km); S-300P: 5V55K 47km, 5V55R 75km, 5V55U 150km, 48N6 150km. Ühel laskeseadmel kuni 4 raketti (40N6E puhul 2–3)",
        "samRange": {"min": 2000, "max": 380000},
        "samAltitude": {"min": 10, "max": 30000},
        "sensors": "S-400: avastusradar 91N6E (S-sagedusala, kuni 600km, 300 sihtmärki), kõrgusradar 96L6E (kuni 300km), tulejuhtimisradar 92N6E (kuni 340–400km, jälgib 20 sihtmärki); lisaks Nebo-M, Protivnik-GE, Gamma-S1E. S-300: 30N6 „Flap Lid“, 64N6 „Big Bird“, 96L6, 36D6 „Tin Shield“, 76N6 „Clam Shell“",
        "specialEquipment": "Pika- ja keskmaa õhutõrjeraketikompleks (S-300P alates 1978, S-400 alates 2007). Üks pataljon: 6–12 laskeseadet, juhtimispunkt 55K6E (Ural-532301), 5T58-2 transpordimasinad, 22T6-2 laadimiskraana ja radarid. Patarei 3 laskeseadet. Kogu süsteem (8 pataljoni) juhib kuni 72 laskeseadet ja 384 raketti; samaaegselt kuni 36 sihtmärki ja 72 raketti (kuni 2 raketti sihtmärgi kohta). Valmisolek: 5min marsist (35s ooterežiimist). Ründab õhusõidukeid, tiibrakette ja ballistilisi rakette"
      },
      "notes": {
        "samRange": "Kompleksi miinimumkaugus aerodünaamilistele sihtmärkidele 2km ja ballistilistele 5km."
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: S-300 missile system", "url": "https://en.wikipedia.org/wiki/S-300_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "Tor": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "GM-5955 roomikšassii (algne Tor: GM-355)",
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
        "samMissiles": "8 × 9M330 (165–167kg, lõhkepea 15kg, kiirus kuni Mach 2,8–3, raadiokäsujuhtimine; hoitakse vertikaalselt kahes neljases grupis)",
        "samRange": {"min": 1500, "max": 12000},
        "samAltitude": {"min": 10, "max": 6000},
        "sensors": "Avastusradar „Scrum Half“ (3D, G/H-sagedusala): õhusõidukid 25–27km, helikopterid 12km, droonid 9–15km, jälgib kuni 48 sihtmärki; sihtmärgi jälgimisradar (J/K-sagedusala, kuni 20km); reaktsiooniaeg 5–12s; 2 sihtmärki ja 4 raketti korraga",
        "specialEquipment": "Iseliikuv lühimaa õhutõrjeraketikompleks (Tor-M1): otsib sihtmärke liikvel olles, tulistab seisatuselt; täielik ümberlaadimine 18min; kuni 4 raketti korraga; TBK-kaitse",
        "armor": "Täielikult keevitatud teras"
      },
      "notes": {
        "chassis": "Algne Tor (9K330, 1986) kasutas šassiid GM-355; osa allikate andmed (32t, 780hj, 8,0×3,2×4,0m) kirjeldavad seda varianti."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Tor", "url": "https://odin.t2com.army.mil/WEG/Asset/5bcf872fc08701649d8de5b1fbd87aee", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Tor missile system", "url": "https://en.wikipedia.org/wiki/Tor_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "ZSU-23-4": {
      "status": "unverified",
      "values": {
        "crew": "4 (ülem, juht, laskur, radarioperaator)",
        "chassis": "GM-575 roomikšassii",
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
        "mainArmament": "4 × 23mm 2A7 automaatkahur (AZP-23 „Amur“), 2000 lasku",
        "rateOfFire": 3400,
        "cannonRangeAir": 2500,
        "cannonAltitudeAir": 1500,
        "cannonRangeArmored": 2000,
        "sensors": "Radar RPK-2 „Tobol“ / 1RL33 (Ku-sagedusala, NATO „Gun Dish“): avastab õhusihtmärke kuni 20km, jälgib kuni 13km; reaktsiooniaeg 12–18s; kõrgusnurk −4…+85°",
        "specialEquipment": "Iseliikuv õhutõrjekahur (1962), tuld saab anda liikvel olles; TBK-kaitse ja 81mm suitsugranaadiheitjad",
        "armor": "Keevitatud teras: kere kuni 15mm, torn 9,2mm"
      },
      "notes": {
        "rateOfFire": "Üks toru 850–1000 lasku/min; praktiline kiirus 400 lasku/min.",
        "gradient": "Wikipedia: 30° ≈ 58%.",
        "height": "Radar üles tõstetud 3,57–3,75m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: ZSU-23-4", "url": "https://odin.t2com.army.mil/WEG/Asset/d4cb684d59fa9e42f8fbc8224c92972a", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: ZSU-23-4 Shilka", "url": "https://en.wikipedia.org/wiki/ZSU-23-4_Shilka", "retrieved": "2026-10-23"}
      ]
    },
    "SA-8B Gecko": {
      "status": "unverified",
      "values": {
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
        "samMissiles": "6 × 9M33 (9M33M2 / M3; 126–170kg, lõhkepea 19–40kg, raadiokäsujuhtimine)",
        "samRange": {"min": 1500, "max": 10000},
        "samAltitude": {"min": 25, "max": 5000},
        "sensors": "Radar „Land Roll“ 1S51M3: otsing (G/H-sagedusala) 30–35km, jälgimine (J) 25–30km, raketijuhtimine (I) 20–25km; reaktsiooniaeg ca 26s",
        "specialEquipment": "Iseliikuv lühimaa õhutõrjeraketikompleks (9K33 Osa, 1971): sihtmärke otsitakse ja jälgitakse liikvel, tulistatakse seisatuselt; patarei: 4 lahingumasinat + 2 laadimismasinat, ümberlaadimine 5min; TBK-kaitse",
        "armor": "Kerge soomus"
      },
      "notes": {
        "samRange": "9M33M3 laskekaugus kuni 15km ja kõrgus 10–12 000m."
      },
      "sources": [
        {"name": "Wikipedia: 9K33 Osa", "url": "https://en.wikipedia.org/wiki/9K33_Osa", "retrieved": "2026-10-23"}
      ]
    },
    "9S932-1 Barnaul-T": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu roomikšassii (9S932-2: BTR-MD; BMP-3 põhine MRU-B näidati 2017)",
        "sensors": "Radar 1L122-1; saab andmeid radaritelt 9S18M, 35N6, P-18M, P-19M või sidekeskuste R-166, R-166-0,5 ja MP-1IM kaudu",
        "specialEquipment": "Barnaul-T lühi- ja lähitõrje juhtimismoodul MRU-B (9S932-1): juhib õhutõrjepatareid, jagab sihtmärgi andmeid platoonitasemel õhutõrjevahenditele (Tunguska, Tor, Osa, Strela-10M3, Igla)"
      },
      "sources": [
        {"name": "Armedconflicts.com: Barnaul-T", "url": "https://www.armedconflicts.com/-t217337", "retrieved": "2026-10-23"}
      ]
    },
    "92N6 Gravestone": {
      "status": "unverified",
      "values": {
        "chassis": "MZKT-7930 8×8",
        "sensors": "Mitmefunktsiooniline faasantennradar (I/J-sagedusala, 8,5–10,5GHz); antenn 4×2m; avastus- ja jälgimiskaugus kuni 340–400km; jälgib 20 sihtmärki; juhib kuni 12 raketti 40N6 kuni 6 sihtmärgi vastu",
        "specialEquipment": "S-400 komplekti mitmefunktsiooniline tulejuhtimisradar 92N6E (alates 2007): jälgib sihtmärke, juhib raketilaskeid ja edastab andmeid laskeseadmetele; töötab koos avastusradaritega 91N6E ja 96L6E"
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "64N6 Big Bird": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "MAZ-74106 veok-poolhaagis (MAZ-543 perekond, 8×8)",
        "combatWeight": 60,
        "sensors": "Faasantennradar (S-sagedusala, 2,9–3,3GHz): õhu- ja tiibraketisihtmärgid kuni 300km, ballistiliste rakettide stardid kuni 1000km; avastab kuni 300 sihtmärki korraga; antenni pöörlemine 12s/tiir; sihtmärgi kiirus kuni 2788m/s; valmisolek marsist 5min",
        "specialEquipment": "S-300P / S-300PM ühe pataljoni või polgu üldavastusradar (NATO „Big Bird“, Venemaa 64N6E, 1979); annab sihtmärgi andmeid juhtimispunktile 54K6 ja tulejuhtimisradarile 30N6"
      },
      "notes": {
        "sensors": "Uuem 91N6E („Big Bird“ / „Tombstone“, MZKT-7930): avastuskaugus kuni 600km, 300 sihtmärki."
      },
      "sources": [
        {"name": "GlobalSecurity: 64N6 / 91N6E Tombstone / Big Bird", "url": "https://www.globalsecurity.org/military/world/russia/tombstone.htm", "retrieved": "2026-10-23"}
      ]
    },
    "35N6 Kasta-2E": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "sensors": "Madalõhu (madalal kõrgusel lendavate sihtmärkide) avastusradar: Kasta 2E1 (UHF 830–882MHz, 32km 100m kõrgusel 5,4/14m antenniga, 58km 50m mastiga), Kasta 2E2 (41km, mastiga 55km; 50 jälge ja 200 märki)",
        "specialEquipment": "Mobiilne madala lennukõrgusega sihtmärkide avastusradar (S-300/S-400 jt õhutõrjesüsteemide lisaradar). Pööretega 6–12 p/min. 2E1: kaks masinat, 2E2: kolm masinat (antenn, juhtimispunkt, diiselgeneraator) ja kaks haagist. Püsti 20min, sisselülitus 3,3min, kokkupakkimine 20min; võimsustarve 1kW keskmiselt (2E1) ja kuni 23kW (2E2)"
      },
      "sources": [
        {"name": "Wikipedia: Kasta 2E", "url": "https://en.wikipedia.org/wiki/Kasta_2E", "retrieved": "2026-10-23"}
      ]
    },
    "30N6 Tombstone": {
      "status": "unverified",
      "values": {
        "chassis": "Flap Lid A: haagis (veab Ural-375, KrAZ-255 või KrAZ-260); Flap Lid B: veokil MZKT-7930",
        "sensors": "Tulejuhtimisradar 30N6E „Flap Lid“ (I/J-sagedusala): instrumentaalulatus 300km, jälgib 6 sihtmärki, igaühele 2 raketti; elevatsioon 0–50° (võimalik 75°); faasantenn ca 10 000 elemendiga; sihtmärki jälgitakse raketi kaudu (track-via-missile)",
        "specialEquipment": "S-300P / S-300PMU tulejuhtimisradar, mis juhib raketilaskeid; 30N6E1/E2 avastuskaugus 200km ja jälgib 6 sihtmärki"
      },
      "sources": [
        {"name": "RadarTutorial: 30N6E Flap Lid", "url": "https://www.radartutorial.eu/19.kartei/06.missile/karte005.en.html", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: S-300 missile system", "url": "https://en.wikipedia.org/wiki/S-300_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "96L6 Cheese Board": {
      "status": "unverified",
      "values": {
        "crew": "3 operaatorit",
        "chassis": "MAZ-7930 (MZKT-7930) 8×8",
        "length": 11.7,
        "width": 3.07,
        "height": 2.92,
        "maxSpeedRoad": 65,
        "range": 650,
        "sensors": "3D ülevaaderadar (C-sagedusala, 2,9–3,2GHz): avastuskaugus 300km, jälgib 100 sihtmärki; antenn 5,5×2,5m ja 96 kiirgavat rida; pöörlemine 5 (madalad kõrgused) või 10 p/min (kõik kõrgused); kõrgusnurk −3…+1,5° / −1,5…+20°",
        "specialEquipment": "Õhusihtmärkide, helikopterite, droonide ja rakettide avastusradar (S-300/S-400): töökorda kuni 5min, TBK-kaitse; sagedushüpe, kõrge mürakindlus; MTBCF 10 000h"
      },
      "sources": [
        {"name": "Wikipedia: S-400 missile system", "url": "https://en.wikipedia.org/wiki/S-400_missile_system", "retrieved": "2026-10-23"}
      ]
    },
    "PPRU-1": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "chassis": "MT-LBu roomikšassii",
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
        "sensors": "Radar 9S80 „Ovod-M-SV“ (X-sagedusala, digitaalne): õhusihtmärkide avastuskaugus 40km (teistel andmetel 25–30km), värskendus 5s; jälgib kuni 99 sihtmärki (teistel andmetel ca 35 automaatselt, kuni 8 samaaegselt juhitavat); IFF-päringu seade",
        "specialEquipment": "Õhutõrje luure- ja juhtimismasin (1985): patarei/polgu õhutõrjeülema juhtimispunkt, mis juhib õhutõrjesoomukeid ZSU-23-4 „Shilka“, Strela-10, Tunguska, Strela-1M ning kaudselt Igla taskuraketid. Raadiod R-123MT ja R-111; sihtmärgi andmed edastatakse 2–3s jooksul; töökorda 5min; pidev töö 24h",
        "armor": "Keevitatud alumiiniumkere"
      },
      "sources": [
        {"name": "Wikipedia: PPRU-1", "url": "https://en.wikipedia.org/wiki/PPRU-1", "retrieved": "2026-10-23"},
        {"name": "Air Power Australia: Air Defence Command Posts", "url": "https://www.ausairpower.net/APA-Rus-ADCP-CP.html", "retrieved": "2026-10-23"}
      ]
    },
    "1L119 NEBO-SVU": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "Ural või KamAZ veok (diiselgeneraatorid ED 2×30-T400); antenniseade poolhaagisel ChMZAP-9907.2 (2 masinat)",
        "sensors": "VHF-radar (150–180MHz, vertikaalne polarisatsioon), AESA-antenn 16×6m (84 Yagi-elementi): avastuskaugus kuni 380–500km, jälgimiskaugus kuni 200km; 1m² sihtmärk 20km kõrgusel 380km, 10km kõrgusel 270km; hävitaja (2,5m²) 10km kõrgusel 250km; ballistilised sihtmärgid kuni 180km kõrgusel; jälgib kuni 100 sihtmärki",
        "specialEquipment": "Mobiilne meetrilaine radar varjatud (stealth) sihtmärkide avastamiseks (NATO „Box Spring“, 1997/2001): kasutatakse S-300 ja S-400 tulejuhtimise kaugavastuseks; paigaldus ca 20min; võimsus 30kW"
      },
      "sources": [
        {"name": "Wikipedia: Nebo-SVU", "url": "https://en.wikipedia.org/wiki/Nebo-SVU", "retrieved": "2026-10-23"}
      ]
    },
    "9M337 Sosna-R": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "MT-LB roomikšassii",
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
        "samMissiles": "12 × 9M337 Sosna-R (kahes kuue toruga konteinerblokis; 30,6kg, koos konteineriga 42kg; tandem-lõhkepea 7,2kg; kiirus ca 900m/s; optiline laserkiirega juhtimine)",
        "samRange": {"min": 1300, "max": 10000},
        "samAltitude": {"min": 2, "max": 5000},
        "secondaryArmament": "Sosna-variant: kaksiktoruline 30mm automaatkahur 2A38M (laskekaugus 4km)",
        "sensors": "Optilis-elektrooniline sihtimissüsteem (soojuskaamera, TV-kaamera, laserkaugusmõõtja), passiivne avastus 360°; jälgib kuni 50 sihtmärki; reaktsiooniaeg 5–8s; tuli liikvel olles",
        "specialEquipment": "Iseliikuv lähitõrje õhutõrjeraketikompleks (alates 2019): raketid juhitakse laserkiirega, vastupidav raadiosegamisele; ümberlaadimine 10min; TBK-kaitse",
        "armor": "Keevitatud teras 7–14mm; lisasoomus saadaval"
      },
      "sources": [
        {"name": "Wikipedia: 9M337 Sosna-R", "url": "https://en.wikipedia.org/wiki/9M337_Sosna-R", "retrieved": "2026-10-23"}
      ]
    },
    "2S25 Sprut-SD": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "Ujuv roomikšassii, hüdropneumaatiline vedrustus (kliirens 190–590mm)",
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
        "mainArmament": "125mm sileraudne kahur 2A75 (autolaadur 22 lasku, kokku 40 lasku; APFSDS, HE-Frag, HEAT ja juhitav rakett 9M119 Svir)",
        "atgm": "9M119 Svir (laserkiirega juhitav, tulistatakse kahurist)",
        "rateOfFire": 8,
        "secondaryArmament": "Koaksiaalne 7,62mm PKT (2000 lasku); hilisemates versioonides kaugjuhitav relvajaam",
        "sensors": "Stabiliseeritud kahur ja ülema sihik, laserkaugusmõõtja, ballistiline arvuti; igal meeskonnaliikmel päeva- ja öövaatlusseade",
        "specialEquipment": "Dessandi tankitõrjekahur (laskekaugus raketiga ca 4km): ujub veejoamootoritega, kuni merelaine 3 ballini; saab langevarjuga heita koos meeskonnaga; TBK-kaitse",
        "armor": "Alumiiniumkere komposiitkattega; ees ±40° kaitseb 23mm mürsu eest 500m kauguselt"
      },
      "notes": {
        "rateOfFire": "6–8 lasku/min autolaaduriga; käsitsi laadimine on tunduvalt aeglasem.",
        "armor": "Sprut-SDM1: täiustatud tulejuhtimissüsteem ja kaugjuhitav relvajaam."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: 2S25 Sprut-SD", "url": "https://odin.t2com.army.mil/WEG/Asset/e4add5b7dcaa7115fe56f9817c7cc1dd", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 2S25 Sprut-SD", "url": "https://en.wikipedia.org/wiki/2S25_Sprut-SD", "retrieved": "2026-10-23"}
      ]
    },
    "BTR-RD": {
      "status": "unverified",
      "values": {
        "crew": "3 + tankitõrjemeeskond (BTR-D põhjal)",
        "chassis": "BTR-D (õhudessandi roomikšassii)",
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
        "mainArmament": "2 × 7,62mm PKT esikuulipilduja (2000 lasku)",
        "atgm": "9M113 Konkurs / 9M113M Konkurs-M, valikuliselt 9M111 Fagot; kaks stardiseadet 9P135M-1 (katusel parempoolses küljes); vähemalt 4, kuni 12 raketti",
        "atgmPenetration": "Konkurs: kuni 600mm RHA; Konkurs-M: 750–800mm DZ taga",
        "atgmRange": {"min": 70, "max": 4000},
        "specialEquipment": "Dessandi tankitõrjesoomuk „Robot“ (1983): kannab ATGM-meeskonda ja tulistada võib soomukilt või maha võetud stardiseadmega. Võib heita langevarjuga; 2019. aastal lisati Kornet (9K135)",
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
        "crew": "2",
        "chassis": "AMS 233144 Tigr-M 4×4 (soomustatud maastur)",
        "length": 4.61,
        "engine": "GAZ-562 või Cummins B180/B215 diisel",
        "power": 215,
        "maxSpeedRoad": 140,
        "maxSpeedOffroad": 80,
        "range": 1000,
        "atgm": "8 × 9M133M Kornet-EM (tandem-HEAT või termobaarilise lõhkepeaga); tulistab kaks raketti alla 1s vahega samale või kahele sihtmärgile",
        "atgmRange": {"min": 150, "max": 8000},
        "atgmPenetration": "9M133M-2: 1100–1300mm RHA DZ taga; 3–3,5m betooni",
        "specialEquipment": "Tankitõrjeraketikompleks (kasutuses 2015): laskemeeskond saab juhtida laskmist kuni 50m kauguselt; laserkiirega juhtimine (SACLOS), automaatjälgija; Kornet-D1 on õhudessandi variant"
      },
      "notes": {
        "atgmRange": "9M133F-3 (killu-lõhkepea) kuni 10km; öösel lühem.",
        "engine": "Võimsus 197–215hj sõltuvalt mootorist."
      },
      "sources": [
        {"name": "Wikipedia: Kornet-D", "url": "https://en.wikipedia.org/wiki/Kornet-D", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-23"}
      ]
    },
    "Mi-8": {
      "status": "unverified",
      "values": {
        "crew": "3 (kaks piloti ja pardamehaanik)",
        "length": 18.4,
        "rotorDiameter": 21.29,
        "height": 5.65,
        "emptyWeight": 7.1,
        "maxTakeoffWeight": 13,
        "engine": "2 × Klimov TV3-117MT turbovõllmootor (1950hj iga); Mi-8T: 2 × TV2-117A (1677hj iga)",
        "power": 3900,
        "maxSpeed": 250,
        "cruiseSpeed": 240,
        "serviceCeiling": 4500,
        "ferryRange": 960,
        "payload": 4000,
        "troops": "24 dessantvägelast või 12 kanderaami + 1 meditsiinitöötaja",
        "caliber": 7.62,
        "mainArmament": "1–2 külgmist PK kuulipildujat (valikuline)",
        "hardpoints": 6,
        "ordnanceLoad": 4000,
        "airToGroundWeapons": "Rakettplokid UV-16-57 (S-5, 57mm), pommid, ATGM 9M17 Phalanga (Mi-8TV)",
        "specialEquipment": "Mitmeotstarbeline transpordi- ja dessantkopter; kasutatakse väe- ja lastiveoks, tuletoetuseks (relvastatud Mi-8TV)"
      },
      "notes": {
        "maxSpeed": "Tegevusraadius umbes 495km (ilma lisapaakideta); kütusemaht 3700 l."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-8", "url": "https://odin.t2com.army.mil/WEG/Asset/67c5c5f3d1654ac683797195fdd8fa51", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-8", "url": "https://en.wikipedia.org/wiki/Mil_Mi-8", "retrieved": "2026-10-23"}
      ]
    },
    "Mi-24/Mi-35": {
      "status": "unverified",
      "values": {
        "crew": "2 (piloot ja relvaoperaator) + valikuliselt tehnik",
        "length": 18.6,
        "rotorDiameter": 17.2,
        "height": 6.5,
        "emptyWeight": 8.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117 turbovõllmootor (2200hj iga)",
        "power": 4400,
        "maxSpeed": 320,
        "cruiseSpeed": 270,
        "serviceCeiling": 5750,
        "rateOfClimb": 15,
        "payload": 2400,
        "troops": "8 dessantvägelast või 4 kanderaami",
        "caliber": 23,
        "mainArmament": "Mi-24V/VP/VM, Mi-35M: painduv kaksiktoruline 23mm GSh-23L (450 lasku); Mi-24P: fikseeritud 30mm GSh-30K",
        "airToAirMissiles": "R-60 / R-60M (1–2 tk pülooni kohta)",
        "airToGroundWeapons": "ATGM 9K114 Shturm; rakettplokid UB-32 (S-5), B-8V20 (S-8), S-24 (240mm); pommid kuni 500kg, kassettpommid KGMU-2V",
        "hardpoints": 6,
        "specialEquipment": "Ründe- ja dessantkopter („lendav jalaväe lahingumasin“): kannab ründeoperatsioonil ka dessanti, kuigi Afganistanis lendas sageli kergelt laaditult. Mi-35M on eksportvariant (alles tootmises)",
        "armor": "Titaanist soomustatud kabiin ja kuulikindlad tuuleklaasid; pealerõhuga kabiin TBK-kaitseks; rootorilabad vastavad väidetavalt 12,7mm kuulidele"
      },
      "notes": {
        "hardpoints": "Sisemised punktid kuni 500kg, välimised kuni 250kg (kolm punkti mõlemal tiival).",
        "maxSpeed": "Tegevusraadius ligikaudu 450km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-24/Mi-35", "url": "https://odin.t2com.army.mil/WEG/Asset/450917c08512fe367579bbf8ffb18bf8", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-24", "url": "https://en.wikipedia.org/wiki/Mil_Mi-24", "retrieved": "2026-10-23"}
      ]
    },
    "Mi-28": {
      "status": "unverified",
      "values": {
        "crew": "2 (piloot ja relvaoperaator)",
        "length": 17.01,
        "rotorDiameter": 17.2,
        "height": 3.82,
        "emptyWeight": 7.89,
        "maxTakeoffWeight": 11.5,
        "engine": "2 × Klimov VK-2500 turbovõllmootor (ca 2200hj iga)",
        "power": 4400,
        "maxSpeed": 282,
        "cruiseSpeed": 270,
        "serviceCeiling": 5700,
        "rateOfClimb": 13.6,
        "ferryRange": 1100,
        "gLimit": 3,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur 2A42 (250 lasku, kaal ±110° horisontaalselt)",
        "airToAirMissiles": "R-73",
        "airToGroundWeapons": "ATGM Ataka-V (kuni 16); rakettplokid S-8 (40) või S-13 (10); Kh-25; pommid kuni 500kg",
        "hardpoints": 4,
        "sensors": "Mi-28N: millimeeterlaineradar rootori mastil, termokaamera/TV-kaamera (FLIR) ja laserkaugusmõõtja",
        "troops": "Päästekabiin 3 inimesele allatulistatud meeskonna päästmiseks",
        "armor": "Täielikult soomustatud kabiin ja tuuleklaas: peab vastu 7,62 ja 12,7mm soomustläbistavatele kuulidele ning 20mm kildudele; energiat neelav telik ja istmed (kukkumine kuni 12m/s)"
      },
      "notes": {
        "maxSpeed": "Tegevusraadius ca 435km; ferry 1100km nelja lisapaagiga."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-28", "url": "https://odin.t2com.army.mil/WEG/Asset/3f14488657bc3918b28203ec368f55cd", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-28", "url": "https://en.wikipedia.org/wiki/Mil_Mi-28", "retrieved": "2026-10-23"}
      ]
    },
    "Ka-52": {
      "status": "unverified",
      "values": {
        "crew": "2 (kõrvuti istmed)",
        "length": 16,
        "rotorDiameter": 14.5,
        "height": 4.93,
        "emptyWeight": 8.55,
        "maxTakeoffWeight": 10.8,
        "engine": "2 × Klimov VK-2500 turbovõllmootor (2400hj iga); koaksiaalsed vastassuunas pöörlevad rootorid",
        "power": 4800,
        "maxSpeed": 315,
        "cruiseSpeed": 270,
        "serviceCeiling": 5500,
        "rateOfClimb": 8,
        "ferryRange": 1160,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur 2A42 (460 lasku, kaksiktoide)",
        "airToAirMissiles": "Igla (4 tk tiivaotstel)",
        "airToGroundWeapons": "ATGM Vikhr (kuni 12, 2 × APU-6) ja Ataka; LMUR; rakettplokid S-8 (80) ja S-13 (20); pommid 4 × 250kg või 2 × 500kg; kahurikonteinerid UPK-23-250",
        "hardpoints": 6,
        "ordnanceLoad": 2000,
        "sensors": "Radar Arbalet-52 (kaardistus 32km, maasihtmärgid 25km, õhusihtmärgid 15km); optilis-elektrooniline sihtimissüsteem OES-52 (soojuskaamera ja laserindikaator)",
        "specialEquipment": "Ründekopter (kasutusel 2011): Ka-52M uuendus kaasaegsema sihtimisturetiga ja LMUR-ühilduvusega; eksportvariant Ka-52E (Egiptus). Lisakütusepaagid 500l",
        "armor": "Kabiin peab vastu 12,7mm soomustläbistavatele kuulidele ja 23mm kildudele; katapult-iste K-37-800 koos rootorilabade pürotehnilise äralaskmisega"
      },
      "notes": {
        "hardpoints": "Lisaks 6 tiivaaluse punktile 2 tiivaotsa punkti (õhk-õhk raketid või vastumeetmed).",
        "maxSpeed": "Tegevusraadius 470km; max lennuulatus 545km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-52", "url": "https://odin.t2com.army.mil/WEG/Asset/65cf198f7294b53cef415ef1bb3ad216", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-52", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-52", "retrieved": "2026-10-23"}
      ]
    },
    "Ka-29": {
      "status": "unverified",
      "values": {
        "crew": "2 (piloodid)",
        "length": 11.3,
        "rotorDiameter": 15.8,
        "height": 5.5,
        "emptyWeight": 6.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117V turbovõllmootor (2230hj iga); koaksiaalsed rootorid",
        "power": 4460,
        "maxSpeed": 270,
        "cruiseSpeed": 205,
        "serviceCeiling": 5000,
        "ferryRange": 980,
        "troops": "Kuni 16 dessantvägelast",
        "caliber": 7.62,
        "mainArmament": "Fikseeritud 7,62mm GShG kuulipilduja (1800 lasku); 30mm kahur 2A42 (250 lasku) painduval kinnitusel (eemaldatav)",
        "hardpoints": 4,
        "airToGroundWeapons": "Pommid, rakettplokid, kahurikonteinerid, kassettpommid ja neljakordsed stardiseadmed ATGM 9K114 Shturm jaoks",
        "specialEquipment": "Mereväe ründe-transpordikopter (Ka-29TB, kasutusel 1987): opereerib dessantlaevadelt ja lennukikandjatelt, toetab dessanti; üle 60 ehitatud; uuendatud mootorite ja relvadega"
      },
      "sources": [
        {"name": "Wikipedia: Kamov Ka-29", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-29", "retrieved": "2026-10-23"}
      ]
    },
    "Ka-27": {
      "status": "unverified",
      "values": {
        "crew": "3 (piloot, navigaator, hüdroakustik) + 2–3 spetsialisti",
        "length": 11.3,
        "rotorDiameter": 15.8,
        "height": 5.5,
        "emptyWeight": 6.5,
        "maxTakeoffWeight": 12,
        "engine": "2 × Izotov TV3-117V turbovõllmootor (2230hj iga); koaksiaalsed rootorid",
        "power": 4460,
        "maxSpeed": 250,
        "cruiseSpeed": 205,
        "serviceCeiling": 6000,
        "ferryRange": 980,
        "airToGroundWeapons": "1 torpeedo (AT-1M, VTT-1, UMGT-1 Orlan, APR-2 Yastreb) ja 6–8 allveelaevatõrjesügavuspommi (või 1 tuumasügavuspomm); kuni 36 hüdroakustilist poid RGB-NM",
        "sensors": "Radar ning kas laskuv hüdrolokaator (sonar) või magnetilise anomaalia detektor (MAD)",
        "specialEquipment": "Allveelaevatõrje helikopter (Ka-27PL, kasutusel 1981): kasutab tavaliselt paaris kui jahtija-tapja meeskond; kütusemaht 2940 l; tagarootorit pole (koaksiaalsed rootorid); kaks täispuhutavat ujukit vette maandumiseks"
      },
      "notes": {
        "sensors": "Ka-27M uuendus lisab AESA-radari."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-27", "url": "https://odin.t2com.army.mil/WEG/Asset/88f8ae48a9604b65064fcdab7146c6ae", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-27", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-27", "retrieved": "2026-10-23"}
      ]
    },
    "Ka-31": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "length": 12.5,
        "rotorDiameter": 15.9,
        "height": 5.6,
        "maxTakeoffWeight": 12.5,
        "engine": "2 × TV3-117VMA turbovõllmootor (2500hj iga); koaksiaalsed rootorid",
        "power": 5000,
        "maxSpeed": 250,
        "cruiseSpeed": 205,
        "endurance": 2.5,
        "ferryRange": 600,
        "sensors": "Radar E-801 „Oko“ (L-sagedusala): antenn ca 6m × 1m pöörleb 6 p/min, alla kokkuklapitav; avastab hävitaja ca 110km, laeva ca 200km kauguselt; jälgib kuni 40 sihtmärki kõrgusel 5–3500m",
        "specialEquipment": "Eelhoiatus- ja õhuruumi juhtimise helikopter (laevastiku radarpiketi ülesanne): ei suuda andmeid ise töödelda, vaid edastab neid laevadele; allveelaevatõrjevõimet pole; telik tõmmatakse sisse, et mitte radarit segada; ehitatud 28 tk"
      },
      "notes": {
        "endurance": "2h 30min patrullimine kõrgusel 3500m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Ka-31", "url": "https://odin.t2com.army.mil/WEG/Asset/73afd902567e61e87b093258b8136ccf", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Kamov Ka-31", "url": "https://en.wikipedia.org/wiki/Kamov_Ka-31", "retrieved": "2026-10-23"}
      ]
    },
    "Mi-26": {
      "status": "unverified",
      "values": {
        "crew": "5 (kaks piloodi, navigaator, pardamehaanik, pardatehnik)",
        "length": 33.73,
        "rotorDiameter": 32,
        "height": 8.145,
        "emptyWeight": 28.2,
        "maxTakeoffWeight": 56,
        "engine": "2 × ZMKB Progress D-136 turbovõllmootor (11 400hj iga); 8-labaline peamine rootor",
        "power": 22800,
        "maxSpeed": 295,
        "cruiseSpeed": 255,
        "serviceCeiling": 4600,
        "ferryRange": 1920,
        "payload": 20000,
        "troops": "90 dessantvägelast või 60 kanderaami",
        "specialEquipment": "Maailma suurim seeriavalmistatud transpordikopter: 7,7t lastiga tegevusraadius 500km; kütusemaht 12 000 l; FAI rekord: 56 768,8kg tõstetud 2000m kõrgusele (1982)"
      },
      "notes": {
        "maxSpeed": "Hõljumine maapinnamõjuta max massiga kuni 1524m."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Mi-26", "url": "https://odin.t2com.army.mil/WEG/Asset/84c54f9bd5537811f1849f45384a4a0b", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mil Mi-26", "url": "https://en.wikipedia.org/wiki/Mil_Mi-26", "retrieved": "2026-10-23"}
      ]
    },
    "Su-25": {
      "status": "unverified",
      "values": {
        "crew": "1",
        "length": 15.53,
        "wingspan": 14.36,
        "height": 4.8,
        "emptyWeight": 9.5,
        "maxTakeoffWeight": 19.3,
        "engine": "2 × Tumanski/Sojuz R-195 turboreaktiivmootor (44,2kN iga)",
        "thrust": 88.4,
        "maxSpeed": 975,
        "serviceCeiling": 7000,
        "rateOfClimb": 58,
        "combatRadius": 750,
        "gLimit": 6.5,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-2 (250 lasku)",
        "hardpoints": 11,
        "ordnanceLoad": 4000,
        "airToAirMissiles": "R-73 (Su-25SM)",
        "airToGroundWeapons": "Rakettplokid UB-16 / UB-32A (S-5), B-8M1 (S-8), S-24, S-25, S-13T (SM); pommid (FAB-500); Vikhr (Su-25T); Kh-25ML, Kh-29L (SM)",
        "sensors": "Laserkaugusmõõtja ninas, Doppler-radar DISS-7 navigeerimiseks, IFF SO-69, radarhoiatus SPO-15 (SM: L150 Pastel), soojus- ja radarpüünised (kuni 250); Su-25SM: navigeerimiskompleks Bars PRNK-25SM, HUD ja MFD, GPS/GLONASS",
        "armor": "Keevitatud titaanist „vanni“ kabiin; peatugi 6mm teras"
      },
      "notes": {
        "combatRadius": "Tegevusraadius merepinna lähedal 4400kg relvadega ja kahe lisapaagiga; lennuulatus kõrgel 1000km.",
        "maxSpeed": "Väärtused kehtivad Su-25K ekspordivariandi kohta."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-25", "url": "https://odin.t2com.army.mil/WEG/Asset/c8c6c485190bb3346d00e901fe24e7ef", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-25", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-25", "retrieved": "2026-10-23"}
      ]
    },
    "Su-34": {
      "status": "unverified",
      "values": {
        "crew": "2 (kõrvuti istmed)",
        "length": 23.34,
        "wingspan": 14.7,
        "height": 6.09,
        "emptyWeight": 22.5,
        "maxTakeoffWeight": 44.1,
        "engine": "2 × Saturn AL-31FM1 järelpõletiga turboventilaatormootor (132kN järelpõletiga)",
        "thrust": 264,
        "maxSpeed": 1900,
        "cruiseSpeed": 1300,
        "serviceCeiling": 14000,
        "combatRadius": 1100,
        "ferryRange": 4500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (180 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 12000,
        "airToAirMissiles": "Kuni 6 × R-77 või R-73 (enesekaitseks)",
        "airToGroundWeapons": "Juhitavad pommid KAB-500, KAB-1500; vabalangevad ja libisevad pommid FAB (UMPK kuni FAB-3000); kassettpommid RBK-500; BETAB-500; õhk-maa ja laevatõrjeraketid (nt Kh-31, Kh-35)",
        "sensors": "Faasantennradar (PESA) Leninets V004",
        "specialEquipment": "Rinde-pommitaja / ründelennuk: kuni 4000kg ühekordse laskemoona kaal",
        "armor": "Titaanist soomuskapsel kabiini ümber (17mm)"
      },
      "notes": {
        "combatRadius": "1100km 12 000kg relvakoormaga (Wikipedia); max lennuulatus täiskoormaga 4000km."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-34", "url": "https://odin.t2com.army.mil/WEG/Asset/36da5724533f03d0e2aab3bbb53283e0", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-34", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-34", "retrieved": "2026-10-23"}
      ]
    },
    "Su-24": {
      "status": "unverified",
      "values": {
        "crew": "2 (piloot ja relvaoperaator)",
        "length": 22.53,
        "wingspan": 17.64,
        "height": 6.19,
        "emptyWeight": 22.3,
        "maxTakeoffWeight": 43.755,
        "engine": "2 × Lyulka AL-21F-3A turboreaktiivmootor (109,8kN järelpõletiga iga)",
        "thrust": 219.6,
        "maxSpeed": 1654,
        "serviceCeiling": 11000,
        "rateOfClimb": 150,
        "ferryRange": 2775,
        "gLimit": 6,
        "caliber": 23,
        "mainArmament": "23mm kuuetoruline automaatkahur GSh-6-23M (500 lasku)",
        "hardpoints": 9,
        "ordnanceLoad": 8000,
        "airToAirMissiles": "R-60 (enesekaitseks)",
        "airToGroundWeapons": "Kh-25, Kh-29, Kh-31, Kh-58, Kh-59; juhitavad pommid KAB-500KR/L/OD, KAB-1500KR/L; ODAB-500, RBK-250, RBK-500, BETAB-500",
        "sensors": "Navigeerimis- ja ründeradar Orion-A (kaks üksteise peale asetatud skannerit), maastikuradar Relyef; sihtimiskompleks SVP-24",
        "specialEquipment": "Muutuva tiivageomeetriaga rinde-pommitaja (Su-24M); tiib: 17,64m laiali, 10,37m tagasi keeratud"
      },
      "notes": {
        "maxSpeed": "Merepinna lähedal 1315km/h (Mach 1,06).",
        "ferryRange": "Lahinguulatus 615km madalal lennul (3000kg relvakoormaga ja lisapaakidega)."
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-24", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-24", "retrieved": "2026-10-23"}
      ]
    },
    "Su-27": {
      "status": "unverified",
      "values": {
        "crew": "1 (Su-27UB: 2)",
        "length": 21.94,
        "wingspan": 14.7,
        "height": 5.93,
        "emptyWeight": 16.38,
        "maxTakeoffWeight": 30.45,
        "engine": "2 × Saturn / Lyulka AL-31F turboventilaatormootor (122,6kN järelpõletiga iga)",
        "thrust": 245.2,
        "maxSpeed": 2500,
        "serviceCeiling": 19000,
        "rateOfClimb": 300,
        "ferryRange": 3530,
        "takeoffRun": 650,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (150 lasku) parempoolses tiivajuures",
        "hardpoints": 10,
        "ordnanceLoad": 4430,
        "airToAirMissiles": "R-27 ja R-73",
        "sensors": "Impulss-Doppler-radar Phazotron N001 „Myech“ (ca 100km otse, 40km tagant hävitaja vastu; jälgib 10, tabab 1)"
      },
      "notes": {
        "maxSpeed": "Merepinna lähedal 1400km/h (Mach 1,13).",
        "maxTakeoffWeight": "Su-27S ca 30,45t; Su-27SK/SM 33t.",
        "ordnanceLoad": "Su-27SM dokumentides kuni 8000kg."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-27", "url": "https://odin.t2com.army.mil/WEG/Asset/8355873ae7285f6ba9891989c0e49e48", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-27", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-27", "retrieved": "2026-10-23"},
        {"name": "Migflug: Su-27 Flanker", "url": "https://migflug.com/afterburner/aircraft/su-27-flanker/", "retrieved": "2026-10-23"}
      ]
    },
    "Sukhoi Su-35": {
      "status": "unverified",
      "values": {
        "crew": "1",
        "length": 21.9,
        "wingspan": 15.3,
        "height": 5.9,
        "emptyWeight": 19,
        "maxTakeoffWeight": 34.5,
        "engine": "2 × Saturn AL-41F1S turboventilaatormootor tõukevektoriga (137,3kN järelpõletiga iga)",
        "thrust": 274.6,
        "maxSpeed": 2390,
        "serviceCeiling": 18000,
        "rateOfClimb": 280,
        "ferryRange": 4500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 8000,
        "airToAirMissiles": "R-27R1/ER1 (kuni 8), R-27T1/ET1 (8), R-73 (6), R-77 (kuni 12)",
        "airToGroundWeapons": "Kh-59MK (5), Kh-31A/P (6), KAB-500Kr (8), KAB-1500Kr (3), S-25LD (4), FAB-500 (10), FAB-250 (32), rakettplokid B-8M1 (6)",
        "sensors": "Passiivne faasantennradar Irbis-E (N035): õhusihtmärgid kuni 400km, jälgib 30 õhusihtmärki ja tabab 8 korraga; sünteesapertuuriga maapinnapilt",
        "specialEquipment": "Mitmeotstarbeline hävitaja (4++ põlvkond): tõukevektoriga mootorid (düüsid pööratavad tõusu- ja kaldumise tasapinnas) tagavad ülimanööverdusvõime"
      },
      "notes": {
        "maxSpeed": "Max Mach-arv 2,25; merepinna kiirus allikas puudub.",
        "ferryRange": "Tavaline lennuulatus 3600km."
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-35", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-35", "retrieved": "2026-10-23"},
        {"name": "Armedconflicts.com: Su-35S", "url": "https://origin.armedconflicts.com/topic/view/112697", "retrieved": "2026-10-23"}
      ]
    },
    "Sukhoi Su-33": {
      "status": "unverified",
      "values": {
        "crew": "1",
        "length": 21.19,
        "wingspan": 14.7,
        "height": 5.93,
        "emptyWeight": 18.4,
        "maxTakeoffWeight": 29.94,
        "engine": "2 × Saturn AL-31F3 turboventilaatormootor (125,5kN järelpõletiga iga)",
        "thrust": 251,
        "maxSpeed": 2300,
        "serviceCeiling": 17000,
        "rateOfClimb": 246,
        "ferryRange": 3000,
        "gLimit": 8,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 6500,
        "airToAirMissiles": "R-73 (4) ja R-27E (6); R-27EM tabab ka laevatõrjerakette",
        "airToGroundWeapons": "Pommid kuni 500kg, sh kassettpommid RBK-500",
        "sensors": "Radar N001",
        "specialEquipment": "Lennukikandja hävitaja (Su-27 mereväe variant): kokkuklapitavad tiivad (laius kokkuklapitult 7,4m)"
      },
      "notes": {
        "maxSpeed": "Max kiirus 2300km/h kõrgusel 10 000m (Mach 2,17)."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Sukhoi Su-33", "url": "https://odin.t2com.army.mil/WEG/Asset/1ac57b230e7c0f839d34312b6c5d4346", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sukhoi Su-33", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-33", "retrieved": "2026-10-23"}
      ]
    },
    "MiG-31": {
      "status": "unverified",
      "values": {
        "crew": "2 (piloot ja relvaoperaator)",
        "length": 22.62,
        "wingspan": 13.456,
        "height": 6.456,
        "emptyWeight": 21.82,
        "maxTakeoffWeight": 46.2,
        "engine": "2 × Solovjov D-30F6 turboventilaatormootor (152kN järelpõletiga iga)",
        "thrust": 304,
        "maxSpeed": 3000,
        "cruiseSpeed": 2500,
        "serviceCeiling": 25000,
        "rateOfClimb": 288,
        "combatRadius": 1450,
        "ferryRange": 3000,
        "gLimit": 5,
        "caliber": 23,
        "mainArmament": "23mm kuuetoruline automaatkahur GSh-6-23 (260 lasku)",
        "hardpoints": 8,
        "ordnanceLoad": 9000,
        "airToAirMissiles": "R-33 (4; 120–160km), R-37 (6; 280–400km), R-40TD1 (2–4; 50–80km), R-60 (4), R-73 (4), R-77 (4; 100km)",
        "airToGroundWeapons": "MiG-31K: hüperhelikiirusega ballistiline rakett Kh-47M2 „Kinzhal“ (ca 2000km, Mach 10); lennuk ei kanna õhk-õhk relvi",
        "sensors": "Faasantennradar Zaslon (200km 19m² sihtmärk, jälgib 10 ja tabab 4); Zaslon-M (400km, jälgib 24 ja tabab 6)",
        "specialEquipment": "Kauglennu-püüdurhävitaja: 4 poolsüvistatud punkti kere all ja 4 tiivapülooni"
      },
      "notes": {
        "maxSpeed": "Kiirus kõrgusel 21 500m; merepinna lähedal 1500km/h (Mach 1,23).",
        "combatRadius": "1450km kiirusel Mach 0,8 ja 10 000m kõrgusel; 720km kiirusel Mach 2,35 ja 18 000m kõrgusel.",
        "ferryRange": "3000km 4 × R-33E ja kahe lisapaagiga; 5400km ühe õhutankimisega."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: MiG-31", "url": "https://odin.t2com.army.mil/WEG/Asset/a4669ef1dd64227e040b5bfc32b11855", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Mikoyan MiG-31", "url": "https://en.wikipedia.org/wiki/Mikoyan_MiG-31", "retrieved": "2026-10-23"}
      ]
    },
    "MiG-29": {
      "status": "unverified",
      "values": {
        "crew": "1 (MiG-29UB: 2)",
        "length": 17.37,
        "wingspan": 11.36,
        "height": 4.73,
        "emptyWeight": 11,
        "maxTakeoffWeight": 18,
        "engine": "2 × Klimov RD-33 turboventilaatormootor (81,4kN järelpõletiga iga)",
        "thrust": 162.8,
        "maxSpeed": 2400,
        "serviceCeiling": 18000,
        "rateOfClimb": 330,
        "combatRadius": 700,
        "ferryRange": 2100,
        "takeoffRun": 260,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (150, hiljem 100 lasku)",
        "hardpoints": 6,
        "ordnanceLoad": 3500,
        "airToAirMissiles": "R-73, R-27, R-60 (vanematel), R-77 (uuematel)",
        "sensors": "Radar N019 „Rubin“ (9.12), N019M „Topaz“ (9.13/S), N010 „Zhuk-M“ (SMT, M/M2)"
      },
      "notes": {
        "ordnanceLoad": "4000kg MiG-29S puhul (tugevdatud kere); uuematel mudelitel 7–9 punkti.",
        "maxSpeed": "Merepinna lähedal 1500km/h (Mach 1,22).",
        "ferryRange": "2100km keskpaagiga; ainult sisepaagiga ca 1400–1500km."
      },
      "sources": [
        {"name": "Migflug: MiG-29 Fulcrum", "url": "https://migflug.com/afterburner/aircraft/mig-29-fulcrum/", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Mikoyan MiG-29", "url": "https://en.wikipedia.org/wiki/Mikoyan_MiG-29", "retrieved": "2026-10-23"}
      ]
    },
    "Tu-95": {
      "status": "unverified",
      "values": {
        "crew": "6–7",
        "length": 49.13,
        "wingspan": 50.1,
        "height": 13.3,
        "emptyWeight": 90,
        "maxTakeoffWeight": 188,
        "engine": "4 × Kuznetsov NK-12 turbopropellermootor (allikas: 15 000hj; täpsustamata, kas ühe mootori kohta)",
        "maxSpeed": 925,
        "cruiseSpeed": 710,
        "serviceCeiling": 13716,
        "rateOfClimb": 10,
        "ferryRange": 15000,
        "ordnanceLoad": 15000,
        "caliber": 23,
        "mainArmament": "2 × 23mm GSh-23 automaatkahur sabatornis",
        "airToGroundWeapons": "Tiibraketid Kh-55 (kuni 16 Tu-95MS16 puhul; 6 pöördpesas Tu-95MS6), Kh-101/102 (8 tiiva alla), vanemad Kh-20, Kh-22",
        "specialEquipment": "Strateegiline turbopropeller-pommitaja (Tu-95MS): kauglennu tiibrakettide kandja; lennuulatus ca 15 000km"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Tu-95", "url": "https://odin.t2com.army.mil/WEG/Asset/e37eaf7714c42c34cb9b08d39a9eb28c", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Tupolev Tu-95", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-95", "retrieved": "2026-10-23"}
      ]
    },
    "IL-76": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "length": 46.6,
        "wingspan": 50.5,
        "height": 14.42,
        "emptyWeight": 92.5,
        "maxTakeoffWeight": 210,
        "engine": "4 × turboventilaatormootor (D-30KP 117,7kN iga A-50 baasil; Il-76MD-90A: PS-90A-76 156,9kN iga)",
        "cruiseSpeed": 775,
        "serviceCeiling": 12200,
        "ferryRange": 9700,
        "payload": 48000,
        "cargoHold": "20 × 3,4 × 3,4m (MF/TF variantide kaubaruum)",
        "caliber": 23,
        "mainArmament": "Mõnel sõjalisel variandil 2 × 23mm kahur radarjuhitaval tagatornil",
        "specialEquipment": "Sõjaväe transpordilennuk (Il-76MD) kaupade, tehnika ja dessandi (langevarjurid) veoks; mõnel sõjalisel mudelil pommipunktid välistiibade all; tagurdusseade lühikeseks maandumiseks (min maandumisdistants 450m)"
      },
      "notes": {
        "ferryRange": "9700km ilma lastita (Il-76MD-90A); 5000km 52t lastiga."
      },
      "sources": [
        {"name": "Wikipedia: Ilyushin Il-76", "url": "https://en.wikipedia.org/wiki/Ilyushin_Il-76", "retrieved": "2026-10-23"}
      ]
    },
    "Antonov An-26": {
      "status": "unverified",
      "values": {
        "crew": "5 (kaks piloodi, raadist, pardamehaanik, navigaator)",
        "length": 23.8,
        "wingspan": 29.3,
        "height": 8.58,
        "emptyWeight": 15.02,
        "maxTakeoffWeight": 24,
        "engine": "2 × Progress AI-24VT turbopropellermootor (2820hj iga) + abireaktiivmootor RU19A-300 (7,85kN)",
        "power": 5640,
        "thrust": 7.85,
        "maxSpeed": 540,
        "cruiseSpeed": 440,
        "serviceCeiling": 7500,
        "ferryRange": 2500,
        "payload": 5500,
        "troops": "40 reisijat",
        "specialEquipment": "Väike sõjaväe transpordilennuk: lennuulatus 2500km maksimaalse kütusega, 1100km maksimaalse kasuliku koormaga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Antonov An-26", "url": "https://odin.t2com.army.mil/WEG/Asset/ffc81e23f9a4a7aaec0e8738517fa17f", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Antonov An-26", "url": "https://en.wikipedia.org/wiki/Antonov_An-26", "retrieved": "2026-10-23"}
      ]
    },
    "Antonov An-124": {
      "status": "unverified",
      "values": {
        "crew": "8",
        "length": 69.1,
        "wingspan": 73.3,
        "height": 21.08,
        "emptyWeight": 181,
        "maxTakeoffWeight": 402,
        "engine": "4 × Progress D-18T turboventilaatormootor (226,8kN iga)",
        "thrust": 907.2,
        "maxSpeed": 865,
        "cruiseSpeed": 825,
        "serviceCeiling": 12000,
        "takeoffRun": 3000,
        "ferryRange": 14000,
        "payload": 120000,
        "cargoHold": "36 × 6,4 × 4,4m",
        "specialEquipment": "Raske strateegiline transpordilennuk: lennuulatus 3700km täiskoormaga, 8400km 80t lastiga, 11 500km 40t lastiga; sõjaväeline standardkoormus kuni 150t"
      },
      "sources": [
        {"name": "Wikipedia: Antonov An-124 Ruslan", "url": "https://en.wikipedia.org/wiki/Antonov_An-124_Ruslan", "retrieved": "2026-10-23"}
      ]
    },
    "A-50": {
      "status": "unverified",
      "values": {
        "crew": "15 (5 lennumeeskonda + 10 operaatorit)",
        "length": 46.6,
        "wingspan": 50.6,
        "height": 14.8,
        "emptyWeight": 61,
        "maxTakeoffWeight": 190,
        "engine": "4 × Solovjov D-30KP turboventilaatormootor (117,7kN iga)",
        "thrust": 470.7,
        "maxSpeed": 850,
        "cruiseSpeed": 775,
        "serviceCeiling": 15500,
        "endurance": 4,
        "ferryRange": 7500,
        "sensors": "Radar „Shmel“ (A-50U: Shmel-M) 9m läbimõõduga radaarkuplis: avastab õhusihtmärke kuni 650km ja maapealseid kuni 300km; jälgib kuni 150 sihtmärki kuni 230km raadiuses",
        "specialEquipment": "Õhust seire- ja lahingujuhtimislennuk (AWACS, Il-76 baasil): juhib kuni 10 hävitajat püüdmis- või ründemissioonidel; lennuaeg 4h täiskoormusel"
      },
      "notes": {
        "maxTakeoffWeight": "170t (Il-76M baasil), 190t (Il-76MD baasil)."
      },
      "sources": [
        {"name": "Wikipedia: Beriev A-50", "url": "https://en.wikipedia.org/wiki/Beriev_A-50", "retrieved": "2026-10-23"}
      ]
    },
    "Tu-22M": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "length": 42.46,
        "wingspan": 34.28,
        "height": 11.05,
        "emptyWeight": 58,
        "maxTakeoffWeight": 126,
        "engine": "2 × Kuznetsov NK-25 turboventilaatormootor järelpõletiga (247,9kN)",
        "thrust": 495.8,
        "maxSpeed": 1997,
        "serviceCeiling": 13300,
        "rateOfClimb": 15,
        "combatRadius": 2500,
        "ferryRange": 7000,
        "caliber": 23,
        "mainArmament": "23mm GSh-23 automaatkahur kaugjuhitaval sabatornil",
        "ordnanceLoad": 24000,
        "airToGroundWeapons": "Laevatõrjeraketid Kh-22/Kh-32 (kuni 3), Kh-15 (kuni 10: 6 pöördpesas + 4 tiiva alla)",
        "specialEquipment": "Muutuva tiivageomeetriaga kauglennu raketikandja ja pommitaja (Tu-22M3): tiivalaius 34,28m laiali, 23,3m tagasi pööratud"
      },
      "notes": {
        "combatRadius": "2500km ca 10 000kg relvakoormaga; lennuulatus 6800km."
      },
      "sources": [
        {"name": "Wikipedia: Tupolev Tu-22M", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-22M", "retrieved": "2026-10-23"}
      ]
    },
    "Tu-160": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "length": 54.1,
        "wingspan": 55.7,
        "height": 13.1,
        "emptyWeight": 110,
        "maxTakeoffWeight": 275,
        "engine": "4 × Samara NK-32-1 turboventilaatormootor (245kN järelpõletiga iga)",
        "thrust": 980,
        "maxSpeed": 2220,
        "cruiseSpeed": 960,
        "serviceCeiling": 16000,
        "rateOfClimb": 70,
        "combatRadius": 7300,
        "ferryRange": 12300,
        "ordnanceLoad": 45000,
        "airToGroundWeapons": "Kaks sisemist laskekambrit (kuni 22 500kg kumbki) või 2 pöördpesa: 6 × Kh-55SM/101/102/555 tiibraketti kummaski, või 12 × Kh-15; Kh-BD ulatus kuni 6500km",
        "specialEquipment": "Muutuva tiivageomeetriaga strateegiline pommitaja: tiivalaius 55,7m laiali, 35,6m tagasi; lennuulatus ilma õhutankimiseta 12 300km; kaitserelvi pole"
      },
      "notes": {
        "combatRadius": "Lahinguraadius 2000km kiirusel Mach 1,5 või 7300km alahelikiirusel.",
        "maxSpeed": "Kõrgusel 12 200m (Mach 2,05)."
      },
      "sources": [
        {"name": "Wikipedia: Tupolev Tu-160", "url": "https://en.wikipedia.org/wiki/Tupolev_Tu-160", "retrieved": "2026-10-23"}
      ]
    },
    "Su-30": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "length": 21.935,
        "wingspan": 14.7,
        "height": 6.36,
        "emptyWeight": 17.7,
        "maxTakeoffWeight": 34.5,
        "engine": "2 × Saturn AL-31FL/FP tõukevektoriga turboventilaatormootor (122,58kN järelpõletiga iga)",
        "thrust": 245.2,
        "maxSpeed": 2120,
        "serviceCeiling": 17300,
        "rateOfClimb": 230,
        "ferryRange": 3000,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur GSh-30-1 (150 lasku)",
        "hardpoints": 12,
        "ordnanceLoad": 8000,
        "airToGroundWeapons": "Juhitavad pommid KAB-500KR, KAB-1500L; FAB-500T; kassettpommid RBK-500",
        "sensors": "Passiivne faasantennradar N011M „Bars“ (avastuskaugus kuni 400km, otsing 200km)",
        "specialEquipment": "Kahekohaline mitmeotstarbeline hävitaja (Su-30SM): tõukevektoriga düüsid; lennuulatus õhutankimisega 5200km"
      },
      "sources": [
        {"name": "Wikipedia: Sukhoi Su-30", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-30", "retrieved": "2026-10-23"}
      ]
    },
    "Su-57": {
      "status": "unverified",
      "values": {
        "crew": "1 (Su-57D: 2)",
        "length": 20.1,
        "wingspan": 14.1,
        "height": 4.6,
        "emptyWeight": 18,
        "maxTakeoffWeight": 34,
        "engine": "2 × Saturn AL-41F1 (izdeliye 117) tõukevektoriga turboventilaatormootor (142,2kN järelpõletiga iga; hädarežiimil 147,1kN)",
        "thrust": 284.4,
        "maxSpeed": 2450,
        "serviceCeiling": 20000,
        "combatRadius": 1250,
        "ferryRange": 3500,
        "gLimit": 9,
        "caliber": 30,
        "mainArmament": "30mm automaatkahur 9A1-4071K / GSh-30-1 (150 lasku) parempoolses tiivajuures",
        "hardpoints": 12,
        "ordnanceLoad": 7500,
        "airToAirMissiles": "R-77M ja R-74M2 laskekambrites; arenduses izdeliye 810 (R-37M lühendatud variant)",
        "airToGroundWeapons": "Kh-69, Kh-38M, Kh-58UShK, Kh-35U, välisel Kh-31; juhitavad pommid KAB-250 ja KAB-500",
        "sensors": "AESA-radar N036 „Byelka“: ninaantenn X-sagedusalas, kaks külgantenni ja L-sagedusala IFF/EW antennid; väidetavalt jälgib 60 ja tabab 16 sihtmärki (avastuskaugus väidetavalt kuni 400km)",
        "specialEquipment": "Viienda põlvkonna varjatud mitmeotstarbeline hävitaja: sisemised laskekambrid (2 põhi- ja 2 külgkambrit), varjatud antennid, serpentiinsisselaskekanalid ja radarineelav kate; üliheli ristlus (Mach 1,3) on väidetud, aga sõltumatult kinnitamata"
      },
      "notes": {
        "ferryRange": "4500km kahe lisapaagiga; 3500km alahelikiirusel sisepaagiga.",
        "combatRadius": "Missiooniprofiil teadmata."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Su-57", "url": "https://odin.t2com.army.mil/WEG/Asset/0dabf5bc7b5370a11075350ea11f38aa", "retrieved": "2026-10-28"},
        {"name": "Migflug: Su-57 Felon", "url": "https://migflug.com/afterburner/aircraft/su-57-felon/", "retrieved": "2026-10-23"},
        {"name": "Wikipedia: Sukhoi Su-57", "url": "https://en.wikipedia.org/wiki/Sukhoi_Su-57", "retrieved": "2026-10-23"}
      ]
    },
    "Orlan-10": {
      "status": "unverified",
      "values": {
        "wingspan": 3.1,
        "maxTakeoffWeightKg": 15,
        "payload": 6,
        "engine": "Saito FA-62B kolbmootor (0,71 kW)",
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
        {"name": "Wikipedia: Orlan-10", "url": "https://en.wikipedia.org/wiki/Orlan-10", "retrieved": "2026-10-23"}
      ]
    },
    "ZALA Lancet": {
      "status": "unverified",
      "values": {
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
        {"name": "Wikipedia: ZALA Lancet", "url": "https://en.wikipedia.org/wiki/ZALA_Lancet", "retrieved": "2026-10-23"}
      ]
    },
    "Gerbera": {
      "status": "unverified",
      "values": {
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
        "length": 3.5,
        "wingspan": 2.5,
        "maxTakeoffWeightKg": 240,
        "ferryRange": 2500,
        "payload": 50,
        "warheadMass": 50,
        "engine": "Mado MD-550 kolbmootor (Limbach L550E tuletis)",
        "maxSpeed": 185,
        "specialEquipment": "GNSS/INS-juhtimine (vene versioonil ka GLONASS); start rööbastelt JATO abil"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Geran-2", "url": "https://odin.t2com.army.mil/WEG/Asset/0641c3e1e7dbc7489aa655b1245969a8", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: HESA Shahed 136", "url": "https://en.wikipedia.org/wiki/HESA_Shahed_136", "retrieved": "2026-10-23"}
      ]
    },
    "Geran-3/Geran-4": {
      "status": "unverified",
      "values": {
        "maxTakeoffWeightKg": 200,
        "ferryRange": 1500,
        "warheadMass": 50,
        "cruiseSpeed": 600,
        "maxSpeed": 800
      },
      "warnings": {
        "maxTakeoffWeightKg": "Väärtused on Geran-3 kohta; Geran-4 kohta andmeid ei leitud."
      },
      "sources": [
      ]
    },
    "Geran-5": {
      "status": "unverified",
      "values": {
        "length": 6,
        "wingspan": 3.2,
        "maxTakeoffWeightKg": 850,
        "ferryRange": 1000,
        "payload": 90,
        "warheadMass": 90,
        "engine": "Hiina turboreaktiivmootor TELEFLY TF-TJ2000A",
        "maxSpeed": 600,
        "serviceCeiling": 6000,
        "endurance": 2
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Geran-5", "url": "https://odin.t2com.army.mil/WEG/Asset/e0db4f6fdfcb42f6f26eabda2301c839", "retrieved": "2026-10-28"},
        {"name": "Kyiv Post: Geran-5 (HUR)", "url": "https://www.kyivpost.com/amp/post/68327", "retrieved": "2026-10-23"}
      ]
    },
    "Molnja-2": {
      "status": "unverified",
      "values": {
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
        {"name": "Wikipedia: Molniya drone", "url": "https://en.wikipedia.org/wiki/Molniya_(drone)", "retrieved": "2026-10-23"}
      ]
    },
    "Molnja-1": {
      "status": "unverified",
      "values": {
        "wingspan": 1.5,
        "maxTakeoffWeightKg": 10,
        "payload": 5,
        "engine": "Üks elektrimootor",
        "maxSpeed": 150,
        "endurance": 0.67
      },
      "sources": [
        {"name": "Wikipedia: Molniya drone", "url": "https://en.wikipedia.org/wiki/Molniya_(drone)", "retrieved": "2026-10-23"}
      ]
    },
    "Supercam S350": {
      "status": "unverified",
      "values": {
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
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Supercam S350", "url": "https://war-sanctions.gur.gov.ua/en/uav/217", "retrieved": "2026-10-23"}
      ]
    },
    "Eleron-3": {
      "status": "unverified",
      "values": {
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
        "length": 8,
        "wingspan": 16,
        "maxTakeoffWeightKg": 1150,
        "ferryRange": 1440,
        "payload": 250,
        "maxSpeed": 200,
        "cruiseSpeed": 120,
        "serviceCeiling": 7500,
        "endurance": 24,
        "airToGroundWeapons": "Vikhr-1V tankitõrjerakett, Banderol (S8000) tiibrakett"
      },
      "sources": [
        {"name": "Wikipedia: Kronshtadt Orion", "url": "https://en.wikipedia.org/wiki/Kronshtadt_Orion", "retrieved": "2026-10-23"}
      ]
    },
    "Zala KUB-2": {
      "status": "unverified",
      "values": {
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
        "length": 0.95,
        "wingspan": 1.21,
        "maxSpeed": 130,
        "ferryRange": 40,
        "endurance": 0.5,
        "payload": 3
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Zala KUB", "url": "https://odin.t2com.army.mil/WEG/Asset/64e82ecf06f6edfe3ef96b58493d1871", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: ZALA KUB-BLA", "url": "https://en.wikipedia.org/wiki/ZALA_Kub-BLA", "retrieved": "2026-10-23"}
      ]
    },
    "Skalpel": {
      "status": "unverified",
      "values": {
        "length": 0.65,
        "maxTakeoffWeightKg": 10.5,
        "ferryRange": 40,
        "warheadMass": 5,
        "cruiseSpeed": 120
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Skalpel", "url": "https://odin.t2com.army.mil/WEG/Asset/6f5d89e0efc459f4723dc488c350918e", "retrieved": "2026-10-28"},
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Scalpel", "url": "https://war-sanctions.gur.gov.ua/en/page-skalpel", "retrieved": "2026-10-23"}
      ]
    },
    "Knijaz Veši Oleg": {
      "status": "unverified",
      "values": {
        "length": 0.82,
        "wingspan": 2.8,
        "maxTakeoffWeightKg": 11,
        "payload": 0.6,
        "maxSpeed": 130,
        "cruiseSpeed": 80,
        "serviceCeiling": 3000,
        "endurance": 3.5,
        "combatRadius": 45,
        "sensors": "Kolmeteljeline stabilisaator: lai Full HD kaamera ja 10× optilise suumiga kaamera"
      },
      "sources": [
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Knyaz Veschyi Oleg", "url": "https://war-sanctions.gur.gov.ua/en/page-knyaz-oleg", "retrieved": "2026-10-23"}
      ]
    },
    "Privet-82": {
      "status": "unverified",
      "values": {
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
        {"name": "EDR Magazine: ZALA T-20", "url": "https://www.edrmagazine.eu/interpolitex-2024-zala-aero-unveils-its-t-20-uav", "retrieved": "2026-10-23"}
      ]
    },
    "Zala Z-16": {
      "status": "unverified",
      "values": {
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
        {"name": "GUR sanktsioonide andmebaas (Ukraina kaitseluure): Zala Z-16 (421-16E)", "url": "https://war-sanctions.gur.gov.ua/en/uav/272", "retrieved": "2026-10-23"}
      ]
    },
    "V2U AI": {
      "status": "unverified",
      "values": {
        "warheadMass": 2.9,
        "engine": "Elektrimootor (kaubanduslik Hiina)",
        "sensors": "Kaamera ja Nvidia Jetson Orin tehisintellektimoodul (Leetop A603)",
        "specialEquipment": "Katapultstart; autonoomne sihtimine pildi võrdlemisega, INS/satelliitjuhtimine"
      },
      "sources": [
        {"name": "Long War Journal: V2U", "url": "https://www.longwarjournal.org/archives/2025/06/ukrainian-intelligence-details-russias-new-v2u-autonomous-loitering-munition.php", "retrieved": "2026-10-23"}
      ]
    },
    "ZALA Z-54": {
      "status": "unverified",
      "values": {
        "engine": "Kahesilindriline bensiini-kolbmootor",
        "maxSpeed": 150,
        "cruiseSpeed": 120,
        "specialEquipment": "Autonoomne sihtmärgi tuvastus ja rünnak; INS/GNSS-navigatsioon",
        "ferryRange": 200
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: ZALA Z-54", "url": "https://odin.t2com.army.mil/WEG/Asset/bec93ebb6310052aa500e96f3cc9cdce", "retrieved": "2026-10-28"}
      ]
    },
    "Merlin VR": {
      "status": "unverified",
      "values": {
        "wingspan": 5,
        "engine": "Elektrimootor",
        "serviceCeiling": 5000,
        "endurance": 10,
        "sensors": "Optoelektrooniline moodul termokaameraga (tuvastusulatus 30 km)",
        "specialEquipment": "Automaatne ja poolautomaatne režiim"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Merlin-VR", "url": "https://odin.t2com.army.mil/WEG/Asset/ab8a8df2f3fc5e306d13a00eb2402a8c", "retrieved": "2026-10-28"},
        {"name": "Defense Express: Strix shoots down Merlin-VR", "url": "https://en.defence-ua.com/news/ukrainian_strix_unit_shoots_down_rare_russian_merlin_vr_recon_drone_worth_300000_video-18382.html", "retrieved": "2026-10-28"}
      ]
    },
    "Banderol": {
      "status": "unverified",
      "values": {
        "length": 5,
        "wingspan": 2.2,
        "engine": "SW800Pro mikroturboreaktiivmootor (ca 82 kgf)",
        "maxSpeed": 650,
        "cruiseSpeed": 530,
        "specialEquipment": "INS/GNSS-juhtimine; kanduriks Orion-droon (Inokhodets)",
        "ferryRange": 500
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: S8000 Banderol", "url": "https://odin.t2com.army.mil/WEG/Asset/9da7792070eb9c26258ee8122f85006c", "retrieved": "2026-10-28"}
      ]
    },
    "Dan-T": {
      "status": "unverified",
      "values": {
        "length": 3.4,
        "wingspan": 2,
        "maxTakeoffWeightKg": 268,
        "ferryRange": 500,
        "warheadMass": 130,
        "engine": "Reaktiivmootor",
        "maxSpeed": 500,
        "specialEquipment": "INS/GNSS-juhtimine ilma pideva andmesideta; start lennukilt või kopterilt (Su-25SM3, Su-30SM, Su-34, Su-35S, Su-57)"
      },
      "notes": {
        "ferryRange": "450–500km.",
        "warheadMass": "130–135kg."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Dan-T", "url": "https://odin.t2com.army.mil/WEG/Asset/d09cbfedc8089584f342e699442a248e", "retrieved": "2026-10-28"}
      ]
    },
    "Forpost-PU": {
      "status": "unverified",
      "values": {
        "length": 6,
        "wingspan": 9.1,
        "payload": 100,
        "maxSpeed": 200,
        "serviceCeiling": 6000,
        "endurance": 18,
        "controlRange": 350,
        "airToGroundWeapons": "KAB-20S juhitavad pommid"
      },
      "notes": {
        "serviceCeiling": "5–6km."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Forpost-R", "url": "https://war-sanctions.gur.gov.ua/en/uav/281", "retrieved": "2026-10-28"},
        {"name": "AISAR: Forpost-R (Forpost-RU)", "url": "https://www.aisar.tech/catalog/drone/forpost-r", "retrieved": "2026-10-28"}
      ]
    },
    "KUB-10": {
      "status": "unverified",
      "values": {
        "maxSpeed": 100,
        "cruiseSpeed": 100,
        "serviceCeiling": 2500,
        "specialEquipment": "Katapultstart; lendab eelnevalt määratud koordinaatidele GNSS-i abil; töökõrgus 100–2500 m"
      },
      "sources": [
        {"name": "Defence Industry Europe: Kalashnikov KUB-10E", "url": "https://defence-industry.eu/kalashnikov-group-introduces-new-kub-10e-loitering-munition-system/", "retrieved": "2026-10-28"}
      ]
    },
    "Granat-4": {
      "status": "unverified",
      "values": {
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
      ]
    },
    "Sokol-l": {
      "status": "unverified",
      "values": {
        "maxSpeed": 150,
        "serviceCeiling": 5000,
        "sensors": "Päeva- ja termokaamera",
        "specialEquipment": "Vahtplastist kere; hävitab drooni otse rammides või lähedussüütajaga lõhkelaenguga"
      },
      "sources": [
        {"name": "Defense Express: Sokol-I ja Molniya-PVO", "url": "https://en.defence-ua.com/weapon_and_tech/can_russias_sokol_i_and_molniya_pvo_really_pose_a_threat_to_ukrainian_uavs_including_hornet_class_systems-18716.html", "retrieved": "2026-10-28"}
      ]
    },
    "Eleron-10": {
      "status": "unverified",
      "values": {
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
        "maxSpeed": "75–135km/h.",
        "controlRange": "Videokanali ulatus."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Eleron-10", "url": "https://war-sanctions.gur.gov.ua/en/uav/451", "retrieved": "2026-10-28"}
      ]
    },
    "Eleron-7": {
      "status": "unverified",
      "values": {
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
        "maxSpeed": "70–130km/h.",
        "controlRange": "Videokanali ulatus."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Eleron-7", "url": "https://war-sanctions.gur.gov.ua/en/uav/450", "retrieved": "2026-10-28"}
      ]
    },
    "Kartograf": {
      "status": "unverified",
      "values": {
        "maxTakeoffWeightKg": 20,
        "payload": 5,
        "maxSpeed": 145,
        "serviceCeiling": 3000,
        "endurance": 8,
        "ferryRange": 800
      },
      "notes": {
        "maxSpeed": "85–145."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Ptero-G0 (Cartographer)", "url": "https://war-sanctions.gur.gov.ua/en/uav/378", "retrieved": "2026-10-28"}
      ]
    },
    "Feniks": {
      "status": "unverified",
      "values": {
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
        "maxTakeoffWeightKg": 14,
        "maxSpeed": 108,
        "serviceCeiling": 5000,
        "endurance": 4,
        "controlRange": 60
      },
      "notes": {
        "maxSpeed": "63–108km/h."
      },
      "sources": [
        {"name": "GUR War & Sanctions (Ukraina kaitseluure): Sarych", "url": "https://war-sanctions.gur.gov.ua/en/uav/395", "retrieved": "2026-10-28"}
      ]
    },
    "Ropucha II / III klass": {
      "status": "unverified",
      "values": {
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
        "landingCapacity": "10 lahingutanki ja 340 dessantväelast; või 12 soomustransportööri ja 340 dessantväelast; või 500 t lasti (artikli tekstis 450 t)",
        "mainArmament": "1 × 76 mm AK-176 (Ropucha II); Ropucha I: 2 × 57 mm AK-725",
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
        "standardDisplacement": 850,
        "fullDisplacement": 949,
        "length": 75,
        "width": 11,
        "draft": 2.5,
        "engine": "CODAD, 2 võlli: 4 × Zvezda M520 diislit, joa-propulsioon",
        "power": 14584,
        "maxSpeedKn": 26,
        "range": 4260,
        "autonomy": 15,
        "crew": "52",
        "mainArmament": "1 × 100 mm A-190-01",
        "antiShipMissiles": "2 × 4 UKSK VLS-kärge: Kalibr või Oniks",
        "samMissiles": "2 × 4 Komar",
        "secondaryArmament": "1 × 2 AK-630M2 (30 mm); 10-toruline 55 mm DP-65 granaadiheitja; 2 × 14,5 mm KPV",
        "sensors": "Pozitiv-M1 faasantennradar, MP-231-2 navigatsioonradar, Laska tulejuhtimisradar, Anapa-M sukeldujatõrje sonar"
      },
      "sources": [
        {"name": "Wikipedia: Buyan-class corvette", "url": "https://en.wikipedia.org/wiki/Buyan-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Vishnya klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 3100,
        "fullDisplacement": 3470,
        "length": 94.4,
        "width": 14.6,
        "draft": 4.5,
        "engine": "2 × Zgoda Sulzer 12AV 25/30 diislit",
        "power": 4400,
        "maxSpeedKn": 16,
        "crew": "146 (sh 6 reisijat)",
        "autonomy": 45,
        "range": 14631,
        "secondaryArmament": "2 × 30 mm AK-630",
        "samMissiles": "2 × SA-N-8 stardiseadet",
        "sensors": "Radar MR-212/201 (Palm Frond); sonarid MG-349 ja MGP-303"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Vishnya klass", "url": "https://odin.t2com.army.mil/WEG/Asset/8bd73165300f9a0ffe55e846625211ac", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Vishnya-class intelligence ship", "url": "https://en.wikipedia.org/wiki/Vishnya-class_intelligence_ship", "retrieved": "2026-10-23"}
      ]
    },
    "Parchim II klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 800,
        "fullDisplacement": 950,
        "length": 72,
        "width": 9.4,
        "draft": 4.6,
        "engine": "3 võlli, M504 diislid",
        "power": 14250,
        "maxSpeedKn": 24.7,
        "range": 3889,
        "crew": "80",
        "mainArmament": "1 × 2 57 mm AK-725",
        "secondaryArmament": "1 × 2 30 mm AK-230; 2 × RBU-6000 allveelaevatõrje raketiheitjat; 12 sügavuspommi",
        "samMissiles": "2 × SA-N-5 (Strela-2) kohta",
        "torpedoes": "4 × 400 mm torpeedotoru",
        "sensors": "Positive-E ja Spin Trough radarid; Bass Tilt sonar"
      },
      "sources": [
        {"name": "Wikipedia: Parchim-class corvette", "url": "https://en.wikipedia.org/wiki/Parchim-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Neustrashimyy klass": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 100 mm",
        "antiShipMissiles": "2 × 4 SS-N-25 (Kh-35) (ainult Yaroslav Mudry)",
        "samMissiles": "4 × 8 VLS-kärge SA-N-9",
        "aswWeapons": "1 × 12-toruline RBU-6000",
        "torpedoes": "6 × 533 mm torud (SS-N-15 / SS-N-16 raketid või Type 53 torpeedod)",
        "secondaryArmament": "2 × Kashtan CIWS",
        "aviation": "1 Ka-27 kopter, kopteriplatvorm ja angaar"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Neustrashimyy klass", "url": "https://odin.t2com.army.mil/WEG/Asset/7a3ee0755ea354b22da60e7314f3dbeb", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Neustrashimy-class frigate", "url": "https://en.wikipedia.org/wiki/Neustrashimy-class_frigate", "retrieved": "2026-10-23"}
      ]
    },
    "Steregushchiy klass": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 100 mm A-190 või 130 mm A-192",
        "antiShipMissiles": "2 × 4 Kh-35 (SS-N-25)",
        "samMissiles": "12 Redut VLS-kärge (ainult Project 20381), 9M100 raketid",
        "secondaryArmament": "2 × 30 mm AK-630M (20381); 2 × 14,5 mm MTPU",
        "aswWeapons": "2 × 4 330 mm Paket-NK (allveelaeva- ja torpeedotõrje)",
        "aviation": "Angaar 1 Ka-27 koptrile; Orlan-10 drooni stardiplatvorm",
        "sensors": "Furke-2, Garpun-B, Monument; Zarya-M kerelisonar ja Vinyetka tõmmatav sonar"
      },
      "sources": [
        {"name": "Wikipedia: Steregushchiy-class corvette", "url": "https://en.wikipedia.org/wiki/Steregushchiy-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Pomornik klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 415,
        "fullDisplacement": 555,
        "length": 57,
        "width": 25.6,
        "draft": 1.6,
        "engine": "3 gaasiturbiini, igaüks ca 10 000 hj",
        "power": 30000,
        "maxSpeedKn": 63,
        "range": 556,
        "crew": "31",
        "landingCapacity": "3 lahingutanki (kuni 150 t); või 10 soomukit ja 230 dessantväelast; või kuni 500 dessantväelast",
        "secondaryArmament": "2 × 30 mm AK-630; 2 × 140 mm Ogon raketiheitjat (22 raketti iga) või 2 × 122 mm",
        "samMissiles": "4 × Strela-3 MANPADS või 2 × 4 Strela-2",
        "mineLaying": "Eemaldatav komplekt 20–80 miini paigaldamiseks"
      },
      "sources": [
        {"name": "Wikipedia: Zubr-class LCAC", "url": "https://en.wikipedia.org/wiki/Zubr-class_LCAC", "retrieved": "2026-10-23"}
      ]
    },
    "Uragan/Karakurt klass": {
      "status": "unverified",
      "values": {
        "fullDisplacement": 800,
        "length": 67,
        "width": 11,
        "draft": 3.3,
        "engine": "CODAD: 3 × Zvezda M-507D1 või 16D49/16D500 turbodiislit; 3 × DGAS-315 diiselgeneraatorit",
        "maxSpeedKn": 30,
        "range": 4630,
        "autonomy": 15,
        "crew": "50–70",
        "mainArmament": "1 × 76,2 mm AK-176MA või 100 mm A-190",
        "antiShipMissiles": "2 × 4 UKSK VLS-kärge: Kalibr või Oniks",
        "samMissiles": "Pantsir-M (Hermes-K) või Palma (Sosna-R, 8 raketti) või Tor (kaks esimest laeva)",
        "secondaryArmament": "2 × 12,7 mm Kord; kaks esimest laeva: 2 × AK-630M-2",
        "aviation": "Orlan-10 drooni stardiseade",
        "sensors": "Mineral-M, Pozitiv-M 1.2, Laska tulejuhtimisradar"
      },
      "sources": [
        {"name": "Wikipedia: Karakurt-class corvette", "url": "https://en.wikipedia.org/wiki/Karakurt-class_corvette", "retrieved": "2026-10-23"}
      ]
    },
    "Tarantul klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 488,
        "fullDisplacement": 549,
        "length": 56,
        "width": 10.5,
        "draft": 2.5,
        "engine": "COGAG/COGOG gaasiturbiinid (11 000 hj turbiini kohta + 2 sõidumootorit 4000 hj)",
        "range": 4445,
        "autonomy": 10,
        "crew": "50",
        "mainArmament": "1 × 76 mm AK-176",
        "antiShipMissiles": "4 × P-15 Termit või 4 × P-270 Moskit või 16 × Kh-35 või 4 × BrahMos (variandist sõltuvalt)",
        "samMissiles": "1 × SA-N-5 nelikstardiseade",
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
        "secondaryArmament": "1 × AK-306 (30 mm CIWS); 1 × 14,5 mm MTPU",
        "samMissiles": "Igla või Verba MANPADS",
        "mineLaying": "Miinid",
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
        "standardDisplacement": 7940,
        "fullDisplacement": 8480,
        "length": 156.5,
        "width": 17.2,
        "draft": 5.2,
        "engine": "2 auruturbiini (37 000 kW iga), 4 kõrgrõhukatelt",
        "power": 100000,
        "maxSpeedKn": 32,
        "autonomy": 30,
        "range": 9260,
        "mainArmament": "2 × 2 130 mm AK-130",
        "antiShipMissiles": "8 × Moskit (SS-N-22), 2 × 4 stardiseadet",
        "samMissiles": "48 × SA-N-7 (Shtil)",
        "secondaryArmament": "4 × 30 mm AK-630",
        "aswWeapons": "2 × RBU-1000 (6-toruline, 48 raketti)",
        "torpedoes": "4 × 533 mm torud (2 × 2)",
        "aviation": "1 Ka-27 kopter, platvorm ja teleskoopangaar",
        "sensors": "Fregat-MP, Mineral-ME, Ehkran, Orekh, MGK-355 Platina sonar"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Sovremenny klass", "url": "https://odin.t2com.army.mil/WEG/Asset/faa46cd6750dce3ce106a9076ae14a26", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Sovremennyy-class destroyer", "url": "https://en.wikipedia.org/wiki/Sovremennyy-class_destroyer", "retrieved": "2026-10-23"}
      ]
    },
    "Kilo-2 klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 2350,
        "fullDisplacement": 3950,
        "length": 73.8,
        "width": 9.9,
        "draft": 6.2,
        "engine": "Diisel-elekter: 2 × 1000 kW diiselgeneraatorit, 1 elektrimootor (4100–5100 kW), seitseterapropeller",
        "maxSpeedKn": 17,
        "submergedSpeed": 20,
        "range": 13890,
        "autonomy": 45,
        "diveDepth": 240,
        "crew": "52",
        "torpedoes": "6 × 533 mm torpeedotoru, 18 torpeedot",
        "antiShipMissiles": "Kalibr (ca 4 raketti, väljalaskmine kahe toru kaudu)",
        "mineLaying": "24 miini"
      },
      "sources": [
        {"name": "Wikipedia: Kilo-class submarine", "url": "https://en.wikipedia.org/wiki/Kilo-class_submarine", "retrieved": "2026-10-23"}
      ]
    },
    "Lada klass": {
      "status": "unverified",
      "values": {
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
        "antiShipMissiles": "Kuni 10 Kalibr/Club raketti (osadel versioonidel)",
        "aswWeapons": "RPK-6 (SS-N-16 Vodopad) allveelaevatõrjerakett",
        "mineLaying": "Kuni 44 miini"
      },
      "sources": [
        {"name": "Wikipedia: Lada-class submarine", "url": "https://en.wikipedia.org/wiki/Lada-class_submarine", "retrieved": "2026-10-23"}
      ]
    },
    "Nanuchka klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 569,
        "fullDisplacement": 671,
        "length": 59.3,
        "width": 12.6,
        "draft": 2.7,
        "engine": "3 võlli, diislid",
        "power": 30000,
        "maxSpeedKn": 32,
        "range": 4630,
        "crew": "60",
        "mainArmament": "Nanuchka I: 2 × 57 mm AK-257; Nanuchka III: 1 × 76 mm AK-176",
        "antiShipMissiles": "6 × P-120 Malahhit (SS-N-9), 2 × 3 stardiseadet; Nanuchka III: 16 × Kh-35 (Wikipedia andmetel)",
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
        "standardDisplacement": 90,
        "fullDisplacement": 145,
        "length": 24.5,
        "width": 5,
        "draft": 1.5,
        "engine": "2 diislit, kokku 600 hj",
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
        {"name": "Wikipedia: Serna-class landing craft", "url": "https://en.wikipedia.org/wiki/Serna-class_landing_craft", "retrieved": "2026-10-23"}
      ]
    },
    "Sonya klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 400,
        "fullDisplacement": 450,
        "length": 48.8,
        "width": 8.8,
        "draft": 2.1,
        "engine": "2 võlli diislid",
        "power": 2400,
        "maxSpeedKn": 15,
        "autonomy": 10,
        "range": 5556,
        "crew": "43",
        "secondaryArmament": "1 × 2 30 mm; 1 × 2 25 mm",
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
        "fullDisplacement": 138,
        "length": 31.04,
        "width": 7.4,
        "draft": 1.85,
        "engine": "2 diislit (MTU, MWM-Deutz TBD620V12 või kohalik/muu Euroopa mudel)",
        "maxSpeedKn": 23,
        "autonomy": 5,
        "crew": "8",
        "range": 370,
        "secondaryArmament": "1 × 14,5 mm MTPU; 1 × DP-64 sukeldujatõrje granaadiheitja; 1 × DP-65 kaugjuhitav granaadiheitja",
        "samMissiles": "Igla MANPADS (4 raketti)",
        "sensors": "Kalmar sonar; MG-757 Anapa-M sukeldujatõrje tõmmatav sonar"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Grachonok klass", "url": "https://odin.t2com.army.mil/WEG/Asset/d8321832232bac19901714ff12c0834d", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: Grachonok-class patrol boat", "url": "https://en.wikipedia.org/wiki/Grachonok-class_patrol_boat", "retrieved": "2026-10-23"}
      ]
    },
    "Lida klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 131,
        "fullDisplacement": 135,
        "length": 31.5,
        "width": 6.5,
        "draft": 1.6,
        "engine": "3 × 300 hj 3D12M diislit",
        "power": 900,
        "maxSpeedKn": 12,
        "range": 741,
        "crew": "14",
        "secondaryArmament": "1 × 30 mm AK-630 (6-toruline)",
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
        "fullDisplacement": 23,
        "length": 16.9,
        "width": 4.1,
        "draft": 0.9,
        "engine": "2 × Caterpillar C18 ACERT diislit (845 kW / 1133 hj iga), 2 Kamewa 36A3 HS veejoa",
        "power": 2266,
        "maxSpeedKn": 48,
        "range": 556,
        "crew": "3",
        "landingCapacity": "20 dessantväelast",
        "secondaryArmament": "1 × 12,7 mm Kord; 2 × 7,62 mm PKP Pecheneg",
        "atgm": "8 × 9M133 Kornet"
      },
      "sources": [
        {"name": "Wikipedia: Raptor-class patrol boat", "url": "https://en.wikipedia.org/wiki/Raptor-class_patrol_boat", "retrieved": "2026-10-23"}
      ]
    },
    "Moma klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 1200,
        "fullDisplacement": 1542,
        "length": 73.3,
        "width": 10.8,
        "draft": 3.85,
        "power": 3600,
        "maxSpeedKn": 17,
        "range": 16483,
        "autonomy": 20,
        "crew": "45 + 10 uurijat",
        "mainArmament": "Puudub (laevad algselt relvastamata)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: Moma klass", "url": "https://odin.t2com.army.mil/WEG/Asset/02dad9bc3c0051fd649f73a0c5f6a940", "retrieved": "2026-10-28"},
        {"name": "GlobalSecurity: Moma class", "url": "https://www.globalsecurity.org/military/world/russia/moma-class.htm", "retrieved": "2026-10-23"}
      ]
    },
    "BREM-D": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 7,62 mm PKT (2000 padrunit)",
        "armor": "Keevitatud alumiiniumkere: kaitse kergrelvade ja suurtükikildude vastu; lisasoomus võimalik, dünaamiline kaitse puudub",
        "specialEquipment": "Kerge kokkupandav kraana vägede ruumi katusel (pööre 180°); päästevints (võimsus teadmata)"
      },
      "sources": [
      ]
    },
    "BREM-1": {
      "status": "unverified",
      "values": {
        "crew": "3 (ülem, mehaanik-juht, insener)",
        "combatWeight": 41,
        "length": 7.98,
        "width": 3.46,
        "height": 2.43,
        "groundClearance": 457,
        "engine": "V-46-6 12-silindriline vedelikjahutusega diisel",
        "power": 840,
        "maxSpeedRoad": 60,
        "range": 700,
        "mainArmament": "1 × 12,7 mm NSVT (840 padrunit)",
        "specialEquipment": "Kraana: 19 t lühikesel väljaulatusel, 3 t maksimaalsel (4,4 m); põhivints 25 t (taljega kuni 100 t), 220 m tross; abivints 530 kg, 400 m tross"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BREM-1", "url": "https://odin.t2com.army.mil/WEG/Asset/b5ff7bdc0c7fc6bf8d71d41124e3830c", "retrieved": "2026-10-28"},
        {"name": "Armedconflicts: BREM-1", "url": "https://www.armedconflicts.com/topic/view/13729", "retrieved": "2026-10-23"}
      ]
    },
    "BREM-2": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 7,62 mm PKMB (1000 padrunit)",
        "armor": "Keevitatud terasest kere: kaitse kergrelvade ja kildude vastu",
        "specialEquipment": "Kraana (pööre 270°, kandevõime 1500 kg); vints 6,5 t, 150 m tross"
      },
      "sources": [
      ]
    },
    "BREM-K": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "combatWeight": 13.6,
        "length": 7.7,
        "width": 3,
        "height": 2.8,
        "driveConfig": "8×8",
        "engine": "Turbodiisel (mudel teadmata)",
        "power": 260,
        "maxSpeedRoad": 80,
        "maxSpeedOffroad": 40,
        "maxSpeedWater": 9,
        "range": 600,
        "amphibious": true,
        "trench": 2,
        "mainArmament": "7,62 mm kuulipilduja (1500 padrunit)",
        "specialEquipment": "Kraana kuni 1,5 t; buldooseritera; elektrikeevitusseadmed"
      },
      "sources": [
      ]
    },
    "BMM-3": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 14,5 mm KPVT (500 padrunit)",
        "secondaryArmament": "1 × 7,62 mm PKT (2500 padrunit); 6 × 81 mm suitsugraanaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu",
        "specialEquipment": "Kandevõime: 4 raskelt haavatut kanderaamil sees, 2 kanderaami mootoriruumi katusel ja kuni 12 inimest kokkupandavas telgis"
      },
      "sources": [
      ]
    },
    "URAL-43206": {
      "status": "unverified",
      "values": {
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
    "KAMAZ-5350": {
      "status": "unverified",
      "values": {
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
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-10-23"}
      ]
    },
    "KRAZ-260": {
      "status": "unverified",
      "values": {
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
        "driveConfig": "Tagavedu või nelikvedu",
        "combatWeight": 1.05,
        "loadCapacity": 550,
        "towingCapacity": 300,
        "length": 3.4,
        "width": 1.8,
        "height": 1.9,
        "groundClearance": 305,
        "engine": "2-silindriline V-mootor, vedelikjahutusega bensiin",
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
        "crew": "6 (ülem, juht, raadiooperaator, navigaator, kaks luureoperaatorit)",
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
        "secondaryArmament": "7,62 mm PK (2000 padrunit); suitsugraanaadiheitjad (hilisematel 6 × 81 mm Tucha)",
        "atgm": "1 × 9M14 Malyutka (AT-3 Sagger)",
        "armor": "Kere 19 mm; torn 23 mm eest, 19 mm külgedelt, 13 mm tagant, 6 mm katus; lisasoomus ja reaktiivsoomus võimalik; automaatne ületõukekaitse (NBC)",
        "sensors": "PSNR-5K luureradar (kuni 10 km), 1RL133-1 radar, 1D8 laserkaugusmõõtja, ERRS-1 raadiosuunaleidja, TNA-4 navigatsioon, 1PN22M/M2 sihik (valikuline Alis või Sanoet termokaamera)"
      },
      "sources": [
      ]
    },
    "BRDM-2 / BRDM-2M": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "14,5 mm KPVT (500 padrunit)",
        "secondaryArmament": "Koaksiaalne 7,62 mm PKT (2000 padrunit)",
        "armor": "Keevitatud teras: kerenina kuni 14 mm; torni esiosa 10 mm; küljed, taga ja katus 7 mm; mujal 2–7 mm",
        "specialEquipment": "Neli kettajamiga allosa tugirattapaari (kraavide ületamiseks); ujub veejoaga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: BRDM-2 / BRDM-2M", "url": "https://odin.t2com.army.mil/WEG/Asset/3563edc1754294260097f7d8266974d5", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: BRDM-2", "url": "https://en.wikipedia.org/wiki/BRDM-2", "retrieved": "2026-10-23"}
      ]
    },
    "RKhM-4": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 14,5 mm KPVT (500 padrunit)",
        "secondaryArmament": "1 × 7,62 mm PKT (2500 padrunit); 6 × 81 mm suitsugraanaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu; kollektiivne NBC-kaitse",
        "specialEquipment": "Doosikiiruse mõõturid IMD-21B ja DP-5V, gaasidetektor GSA-13, gaasituvasti PGO-11, proovivõtukomplekt KPO-1, meteokomplekt MK-3M; raadiod R-173 ja R-163; luuresõidu kiirus radioloogilisel 30 km/h, keemilisel 10 km/h"
      },
      "sources": [
      ]
    },
    "RKhM-6": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 14,5 mm KPVT (500 padrunit)",
        "secondaryArmament": "1 × 7,62 mm PKT (2500 padrunit); 6 × 81 mm suitsugraanaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu; tugevdatud katus ja miiniohutu põhi; kollektiivne NBC-kaitse",
        "sensors": "Termosihikud ülemal ja laskuril, päevasihik 1P3-6, infrapunaprožektor OU-3GA2M",
        "specialEquipment": "Keemiline detektor GSA-14, doosikiiruse mõõturid IMD-23 ja IMD-2NM, närvigaasi häireseadmed, aerosoolidetektor ASP-13, proovivõtjad KPO-1 ja APSO, meteokomplekt AMK; navigatsioon (GLONASS, inertsiaal); rehvirõhu reguleerimine"
      },
      "sources": [
      ]
    },
    "Taifun-K KAMAZ-63968, 6x6": {
      "status": "unverified",
      "values": {
        "crew": "2 + 16 (kuni, konfiguratsioonist sõltuvalt)",
        "combatWeight": 21,
        "length": 8.99,
        "width": 2.45,
        "height": 3.32,
        "driveConfig": "6×6",
        "engine": "YaMZ-5367 6-silindriline diisel",
        "power": 450,
        "maxSpeedRoad": 105,
        "range": 1200,
        "armor": "Väidetavalt STANAG 4569 tase 3b; tootja sihtmärk tase IV; keraamiline soomus, miiniohutud istmed"
      },
      "sources": [
        {"name": "Wikipedia: Kamaz Typhoon", "url": "https://en.wikipedia.org/wiki/Kamaz_Typhoon", "retrieved": "2026-10-23"},
        {"name": "GlobalSecurity: Taifun", "url": "https://www.globalsecurity.org/military/world/russia/taifun.htm", "retrieved": "2026-10-23"}
      ]
    },
    "VPK-3927-1 Volk-1": {
      "status": "unverified",
      "values": {
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
        {"name": "Wikipedia: Iveco LMV", "url": "https://en.wikipedia.org/wiki/Iveco_LMV", "retrieved": "2026-10-28"}
      ]
    },
    "BMP-1Ksh": {
      "status": "unverified",
      "values": {
        "crew": "3 (kirjetes ka „3 + 4“ ja 6)",
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
        "mainArmament": "1 × 7,62 mm PKT (2000 padrunit); põhikahur asendatud fikseeritud tornikesega",
        "armor": "Terasest kere 19 mm, torn 23 mm; lisasoomus ja reaktiivsoomus võimalik; aktiivkaitse puudub",
        "specialEquipment": "Raadiod: 2 × R-111, 1 × R-123MT, 1 × R-130M; TNA-3 güroskoopiline navigatsiooniseade; AMU 10 m teleskoopmast"
      },
      "sources": [
      ]
    },
    "R-145BM": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "1 × 7,62 mm PKT (2500 padrunit); torn ja 14,5 mm kuulipilduja eemaldatud",
        "armor": "Keevitatud teras 5–9 mm; lisasoomust ei ole; kollektiivne NBC-kaitse",
        "specialEquipment": "Raadiod: 2 × R-111/171, 1 × R-123/173, 1 × R-145, 1 × R-130M, maa–õhk raadiojaam R-8xx"
      },
      "sources": [
      ]
    },
    "R-149BMR": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 inimest",
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
        "mainArmament": "1 × 14,5 mm KPVT (500 padrunit)",
        "secondaryArmament": "1 × 7,62 mm PKT (2500 padrunit); 6 × 81 mm suitsugraanaadiheitjat",
        "armor": "Kere esiosa peab vastu 12,7 mm kuulidele; igakülgne kaitse 7,62 mm kuulide ja kildude vastu; torn peab vastu 12,7 mm kuulidele; kollektiivne NBC-kaitse",
        "specialEquipment": "Raadiod: 3 × R-168-0.1UM, 1 × R-168-5UN-1, 2 × R-168-25U-2 (25–40 km), 2 × R-168-100U-2 (25–60 km), 1 × R-168-100KA lühilaine (25–360 km); R-438M Belozer kaasaskantav satelliitside (5000 km)"
      },
      "sources": [
      ]
    },
    "R-441-0 Liven": {
      "status": "unverified",
      "values": {
        "crew": "16 (täismehitus), 11 (osaline)",
        "driveConfig": "6×6",
        "specialEquipment": "Liikuv satelliitsidekeskus mitmekanalilise raadioreleeside jaoks; 1,8 m satelliiditaldrik, mis sihtib end ise navigatsioonisüsteemi abil; töötab autonoomselt väljal"
      },
      "sources": [
      ]
    },
    "R-149AKSh-1": {
      "status": "unverified",
      "values": {
        "crew": "7",
        "length": 7.85,
        "width": 2.5,
        "height": 3.29,
        "driveConfig": "6×6",
        "engine": "KamAZ-740.13-260 diisel",
        "power": 260,
        "maxSpeedRoad": 100,
        "range": 1000,
        "specialEquipment": "Raadiod: 2 × R-168-100U-2 (VHF), 2 × R-168-5KV (lühilaine), 1 × R-168-5UN-2 (kaasaskantav VHF), 1 × R-168-MRA (UHF), 1 × R-612-18 (VHF/UHF, lennuliini sagedus); NBC-kaitse; külmkäivitusseade (kuni −50 °C); rehvirõhu keskreguleerimine"
      },
      "sources": [
      ]
    },
    "R-149MA1": {
      "status": "unverified",
      "values": {
        "driveConfig": "8×8",
        "specialEquipment": "Brigaaditaseme juhtimis- ja sidesõiduk šassiil K1Sh1 (BTR-80 alusel); automaatne navigatsioonisüsteem Azimut; kliimaseade"
      },
      "sources": [
        {"name": "Army Recognition: R-149MA1", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2017/russia-communication-units-receive-r-149ma1-vehicle-80806171", "retrieved": "2026-10-28"}
      ]
    },
    "R-145BM1": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "length": 7.56,
        "width": 2.82,
        "height": 2.31,
        "driveConfig": "8×8",
        "engine": "Diiselmootor (sama tüüp mis BTR-80-l)",
        "maxSpeedRoad": 80,
        "maxSpeedWater": 10,
        "range": 500,
        "amphibious": true,
        "mainArmament": "Relvastus puudub (BTR-60PB torn alles, kuulipilduja eemaldatud)",
        "specialEquipment": "Raadiojaamad R-168-100KA, R-168-25U ja R-168-100U (kaks igat); generaator T-290V; GPS/GLONASS; öönägemisseadmed; NBC-kaitse"
      },
      "sources": [
        {"name": "Army Recognition: R-145BM1", "url": "https://armyrecognition.com/military-products/army/communication-vehicles-and-systems/r-145bm1-russia-uk", "retrieved": "2026-10-28"}
      ]
    },
    "9K720 Iskander/SS-26 Stone": {
      "status": "unverified",
      "values": {
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
        {"name": "Wikipedia: 9K720 Iskander", "url": "https://en.wikipedia.org/wiki/9K720_Iskander", "retrieved": "2026-10-23"}
      ]
    },
    "SS-21 Totška/SS-21 Scarab": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "BAZ-5921 ujuv teisaldatav stardiseade",
        "maxSpeedRoad": 60,
        "amphibious": true,
        "missileLength": 6.4,
        "missileDiameter": 0.65,
        "launchWeight": 2000,
        "warheadMass": 420,
        "firingRangeMin": 15,
        "firingRange": 120,
        "missileSpeed": "1,8 km/s (Mach 5,3)",
        "accuracy": "CEP ca 95 m (Tochka-U); 150 m (Tochka)",
        "guidance": "Inertsiaalne"
      },
      "sources": [
        {"name": "Wikipedia: OTR-21 Tochka", "url": "https://en.wikipedia.org/wiki/OTR-21_Tochka", "retrieved": "2026-10-23"}
      ]
    },
    "Krasukha-2": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "BAZ-6910-022 8×8",
        "frequencyRange": "2,3–3,7 GHz (S-riba)",
        "jammingRange": 250,
        "ewTargets": "AWACS-lennukid (nt E-3 Sentry) ja muud õhuradarid, sh raketijuhtimisradarid; Iskanderi jt tähtsate liikuvate sihtmärkide kaitse"
      },
      "sources": [
        {"name": "Wikipedia: Krasukha", "url": "https://en.wikipedia.org/wiki/Krasukha_(electronic_warfare_system)", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "Krasukha-4": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "BAZ-6910-022 4-teljeline (Wikipedia) või kaks KamAZ-6350 veokit (COGINT)",
        "frequencyRange": "X-riba 8,5–10,7 GHz; Ku-riba 13,4–17,7 GHz",
        "jammingRange": 300,
        "ewTargets": "Õhuradarilennukid (nt E-8 JSTARS), madalal orbiidil satelliidid, maa- ja õhuradarid, droonid"
      },
      "sources": [
        {"name": "Wikipedia: Krasukha", "url": "https://en.wikipedia.org/wiki/Krasukha_(electronic_warfare_system)", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "Lejer-2/Leer-2": {
      "status": "unverified",
      "values": {
        "crew": "3 (tabelis), 2 (pildiallkirjas)",
        "chassis": "Tigr-M (85Ya6)",
        "frequencyRange": "Häirimine 0,02–2,7 GHz; analüüs 0,0001–18 GHz",
        "jammingRange": 40,
        "ewTargets": "Raadioluure ning raadio- ja mobiilside häirimine"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "RB-341B Lejer-3/Leer-3": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "frequencyRange": "0,935–1,785 GHz",
        "jammingRange": 6,
        "ewTargets": "GSM / 3G / 4G mobiilsidevõrgud; mobiilseadmete tuvastamine; töötab koos Orlan-10 droonidega; SMS-ide saatmine kuni 30 km kaugusele"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "Moskva-1": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "3 × KamAZ-6350-1335",
        "frequencyRange": "UHF, L, S, C, X, Ku (täpne vahemik teadmata)",
        "detectionRange": 400,
        "ewTargets": "Õhusaatjate passiivne otsing, suunaleidmine ja jälgimine; üks masin teeb aktiivset häirimist"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "GT-01 Murmansk-BN": {
      "status": "unverified",
      "values": {
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
        "specialEquipment": "Seitsmeastmeline teleskoopmast; neljast antennist koosnevale grupile ca 400 kW generaator (KamAZ-6350 generaatorveok)"
      },
      "sources": [
        {"name": "Truck Encyclopedia: Murmansk-BN", "url": "https://truck-encyclopedia.com/modern/russia/Kamaz-Murmansk-BN.php", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "SPR-2M RTUT-BM": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "MT-LB / MT-LBu (pooleldi roomikud)",
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
        "specialEquipment": "Telekaantenn pöörleb ±150°; pidev töö 6 min; paigaldus alla 10 min; kaitse tõenäosus 80%; NBC-kaitse"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "R-330Zh Žitel": {
      "status": "unverified",
      "values": {
        "chassis": "Ural-43203 või KamAZ-43114; häirejaam eraldi haagisel",
        "frequencyRange": "Luure 0,1–2 GHz; häirimine ca 0,1–2 GHz",
        "jammingRange": 30,
        "ewTargets": "GPS/NAVSTAR, Inmarsat- ja Iridium-satelliitside, GSM-1900 mobiilid, droonide V/UHF-raadioliinid"
      },
      "sources": [
        {"name": "Wikipedia: R-330Zh Zhitel", "url": "https://en.wikipedia.org/wiki/R-330Zh_Zhitel", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "RB-301B (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "chassis": "Peamiselt MT-LB / MT-LBu (komplektis 9 sõidukit)",
        "frequencyRange": "HF 3–30 MHz; VHF 30–300 MHz; UHF 0,3–3 GHz",
        "detectionRange": 30,
        "ewTargets": "HF/VHF-raadiosidesüsteemide automaatne tuvastus, suunaleidmine ja häirimine; GPS-i ja side häirimine"
      },
      "sources": [
        {"name": "Wikipedia: Borisoglebsk-2", "url": "https://en.wikipedia.org/wiki/Borisoglebsk-2", "retrieved": "2026-10-23"},
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "RB-531B Infauna": {
      "status": "unverified",
      "values": {
        "crew": "3",
        "chassis": "K1Sh1 (BTR-80 alusel)",
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
        "ewTargets": "Pataljonitaseme raadioside; raadiojuhitavad lõhkekehad ja miinid; laser- ja videojuhitavad relvad (aerosoolsuits optiliste sensorite abil); GSM"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "RB-636AM2 Svet-KU": {
      "status": "unverified",
      "values": {
        "chassis": "KamAZ-4350 (ka Ford Transit variant)",
        "frequencyRange": "0,025–18 GHz",
        "ewTargets": "Raadio- ja radarisignaalide signaaliluure ning häirimine; GSM, CDMA2000, UMTS",
        "specialEquipment": "Voolutarve kuni 3 kW"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "1RL248-4 SPN-4": {
      "status": "unverified",
      "values": {
        "crew": "5",
        "frequencyRange": "13,333–17,544 GHz (Ku-riba)",
        "jammingRange": 130,
        "jammerPower": 1100,
        "ewTargets": "Külgvaaderadarid, relvajuhtimisradarid ja navigatsiooniradarid"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-23"}
      ]
    },
    "R-378A (R-330 Mandat)": {
      "status": "unverified",
      "values": {
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
        "specialEquipment": "Kasutuselevõtt 40 min; toide eraldi haagisel olevast generaatorist ED30-T400-1RPM1"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: R-378A", "url": "https://odin.t2com.army.mil/WEG/Asset/3fa5f0fa37e3cae64a60969366c95465", "retrieved": "2026-10-28"}
      ]
    },
    "R-330BM (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu",
        "frequencyRange": "VHF 30–100 MHz",
        "jammerPower": 1000,
        "ewTargets": "VHF-raadioside: kuni 3 fikseeritud sagedusega liini korraga või 1 sagedushüppega liin"
      },
      "sources": [
        {"name": "COGINT Analytic Insight Report: Russian EW Systems (2023)", "url": "https://www.sprotyvg7.com.ua/wp-content/uploads/2023/11/COGINT_Analytic_Insight_Report_Russian_EW_Systems__231119_114942.pdf", "retrieved": "2026-10-28"}
      ]
    },
    "AK-74M": {
      "status": "unverified",
      "values": {
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 3.4,
        "weaponLength": 943,
        "barrelLength": 415,
        "muzzleVelocity": 900,
        "rateOfFire": 650,
        "effectiveRange": 500,
        "maxRangeM": 3150,
        "magazine": "30-padruniline salv (ühilduv ka 45- ja 60-padruniliste salvede ning 96-padruniline trumliga)"
      },
      "sources": [
        {"name": "Wikipedia: AK-74", "url": "https://en.wikipedia.org/wiki/AK-74", "retrieved": "2026-10-23"}
      ]
    },
    "AK-12": {
      "status": "unverified",
      "values": {
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 3.7,
        "weaponLength": 945,
        "barrelLength": 415,
        "muzzleVelocity": 900,
        "rateOfFire": 700,
        "magazine": "30-padruniline salv (ühilduv ka 45-, 60- ja 95-padruniliste salvedega)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AK-12", "url": "https://odin.t2com.army.mil/WEG/Asset/d6ca9abe73ed0aa0e3439489f6286e51", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: AK-12", "url": "https://en.wikipedia.org/wiki/AK-12", "retrieved": "2026-10-23"}
      ]
    },
    "AK-15": {
      "status": "unverified",
      "values": {
        "caliber": 7.62,
        "cartridge": "7,62×39 mm",
        "weaponMass": 3.75,
        "weaponLength": 1066,
        "barrelLength": 415,
        "muzzleVelocity": 715,
        "rateOfFire": 700,
        "magazine": "30-padruniline salv (ühilduv ka 40- ja 75-padruniliste salvedega)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AK-15", "url": "https://odin.t2com.army.mil/WEG/Asset/5d829c9b5882da55d2fcf19b18c585e1", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: AK-12", "url": "https://en.wikipedia.org/wiki/AK-12", "retrieved": "2026-10-23"}
      ]
    },
    "GP-25": {
      "status": "unverified",
      "values": {
        "caliber": 40,
        "cartridge": "40 mm VOG-25 / VOG-25P / GRD-50/100/200 suitsugraanaadid",
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
        "caliber": 40,
        "cartridge": "40 mm VOG-25 / VOG-25P / GRD-50/100/200 suitsugraanaadid",
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
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "magazine": "45-padruniline salv (ühilduv AK-74 salvedega); 97-padruniline trummel on tootmises"
      },
      "sources": [
        {"name": "Wikipedia: RPK", "url": "https://en.wikipedia.org/wiki/RPK", "retrieved": "2026-10-23"}
      ]
    },
    "PKM": {
      "status": "unverified",
      "values": {
        "caliber": 7.62,
        "cartridge": "7,62×54 mmR",
        "weaponLength": 1203,
        "barrelLength": 605,
        "muzzleVelocity": 825,
        "rateOfFire": 650,
        "effectiveRange": 1000,
        "maxRangeM": 3800,
        "magazine": "Metallist lenditoide, 100-, 200- või 250-padruniline kast"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PKM", "url": "https://odin.t2com.army.mil/WEG/Asset/590d6202221c197f5f10c6cc4ab23ba0", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: PK machine gun", "url": "https://en.wikipedia.org/wiki/PK_machine_gun", "retrieved": "2026-10-23"}
      ]
    },
    "PKP „Pecheneg“ (6P41)": {
      "status": "unverified",
      "values": {
        "caliber": 7.62,
        "cartridge": "7,62×54 mmR",
        "weaponMass": 8.2,
        "weaponLength": 1200,
        "barrelLength": 658,
        "muzzleVelocity": 900,
        "rateOfFire": 700,
        "effectiveRange": 1500,
        "magazine": "Metallist lenditoide, 100-, 200- või 250-padruniline kast"
      },
      "sources": [
        {"name": "Wikipedia: PKP Pecheneg", "url": "https://en.wikipedia.org/wiki/PKP_Pecheneg", "retrieved": "2026-10-23"}
      ]
    },
    "NSV": {
      "status": "unverified",
      "values": {
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
        "caliber": 9,
        "rateOfFire": 900,
        "cartridge": "9×39 mm SP-5 (alahelikiirusega)",
        "weaponMass": 2.6,
        "weaponLength": 894,
        "barrelLength": 200,
        "muzzleVelocity": 295,
        "effectiveRange": 400,
        "magazine": "10-padruniline salv (ühilduv 30-padruniliste SR-3M salvedega)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: VSS „Vintorez“", "url": "https://odin.t2com.army.mil/WEG/Asset/eea595ed5828ddddf717b560c224dd05", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: VSS Vintorez", "url": "https://en.wikipedia.org/wiki/VSS_Vintorez", "retrieved": "2026-10-23"}
      ]
    },
    "SVD „Dragunov“": {
      "status": "unverified",
      "values": {
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
        "caliber": 12.7,
        "cartridge": "12,7×108 mm",
        "magazine": "Salv (poltlukuga bullpup-püss)"
      },
      "sources": [
        {"name": "Wikipedia: KSVK 12.7", "url": "https://en.wikipedia.org/wiki/KSVK_12.7", "retrieved": "2026-10-23"}
      ]
    },
    "SV-98": {
      "status": "unverified",
      "values": {
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
        "caliber": 30,
        "cartridge": "30 mm VOG-17 granaat",
        "weaponMass": 31,
        "weaponLength": 840,
        "muzzleVelocity": 185,
        "rateOfFire": 400,
        "effectiveRange": 1700,
        "magazine": "29-padruniline granaadilint"
      },
      "sources": [
        {"name": "Wikipedia: AGS-17", "url": "https://en.wikipedia.org/wiki/AGS-17", "retrieved": "2026-10-23"}
      ]
    },
    "RGD-5": {
      "status": "unverified",
      "values": {
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
        "weaponMass": 0.31,
        "explosiveMass": 97,
        "fuze": "UDZS: löögisüütaja (relvastub 1–1,8 s pärast) + ajasüütaja 3,5–4 s",
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
        "weaponMass": 0.525,
        "weaponLength": 114,
        "explosiveMass": 90,
        "fuze": "UDZS: löögisüütaja + ajasüütaja 3,2–4,2 s",
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
        "weaponMass": 3.5,
        "effectiveRange": 115,
        "cartridge": "Termobaariline lask (RPG-26 alusel)"
      },
      "sources": [
        {"name": "Wikipedia: RShG-2", "url": "https://en.wikipedia.org/wiki/RShG-2", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-7": {
      "status": "unverified",
      "values": {
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
        "caliber": 125,
        "weaponMass": 13.5,
        "weaponLength": 1200,
        "muzzleVelocity": 250,
        "effectiveRange": 300,
        "penetration": "Üle 1000 mm RHA pärast reaktiivsoomust"
      },
      "sources": [
        {"name": "Wikipedia: RPG-28", "url": "https://en.wikipedia.org/wiki/RPG-28", "retrieved": "2026-10-23"}
      ]
    },
    "RPG-30": {
      "status": "unverified",
      "values": {
        "caliber": 105,
        "cartridge": "105 mm põhilask (+ 2 × 42 mm simulaatorraketid aktiivkaitse eksitamiseks)",
        "weaponMass": 10.3,
        "weaponLength": 1135,
        "muzzleVelocity": 120,
        "effectiveRange": 200,
        "penetration": "Üle 600 mm RHA (650 mm pärast aktiiv- ja reaktiivkaitset), 1500 mm raudbetoon"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-30", "url": "https://odin.t2com.army.mil/WEG/Asset/d2b1784e97898e68f256bf078a04efaf", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: RPG-30", "url": "https://en.wikipedia.org/wiki/RPG-30", "retrieved": "2026-10-23"}
      ]
    },
    "AT-13 Saxhorn-2 (Metis-M1 / 9K115)": {
      "status": "unverified",
      "values": {
        "caliber": 130,
        "weaponMass": 9.5,
        "missileLength": 0.98,
        "missileSpeed": "kuni 200 m/s",
        "guidance": "SACLOS, juhtmega",
        "atgmRange": {"min": 80, "max": 2000},
        "weaponLength": 980,
        "penetration": "900–980 mm reaktiivsoomuse taga"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AT-13 Saxhorn-2 (Metis-M1 / 9K115)", "url": "https://odin.t2com.army.mil/WEG/Asset/68dd47bbba9b8d84891820dfeff15cb9", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: 9K115-2 Metis-M", "url": "https://en.wikipedia.org/wiki/9K115-2_Metis-M", "retrieved": "2026-10-23"}
      ]
    },
    "AT-4 Spigot (9K111 Fagot)": {
      "status": "unverified",
      "values": {
        "caliber": 120,
        "weaponMass": 22.5,
        "launchWeight": 12.5,
        "missileLength": 1.1,
        "warheadMass": 1.7,
        "missileSpeed": "186 m/s lennul",
        "guidance": "SACLOS, juhtmega (jälgib raketi infrapunalampi)",
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
        "caliber": 152,
        "weaponMass": 63.7,
        "launchWeight": 29,
        "missileLength": 1.2,
        "warheadMass": 4.6,
        "missileSpeed": "üle 250 m/s",
        "guidance": "SACLOS, laserkiirjuhtimine",
        "atgmRange": {"min": 100, "max": 5500},
        "penetration": "Kuni 1000 mm (9M133), 1000–1200 mm (9M133-1), 1100–1300 mm (9M133M-2) RHA reaktiivsoomuse taga"
      },
      "sources": [
        {"name": "Wikipedia: 9M133 Kornet", "url": "https://en.wikipedia.org/wiki/9M133_Kornet", "retrieved": "2026-10-23"}
      ]
    },
    "SPG-9M": {
      "status": "unverified",
      "values": {
        "caliber": 73,
        "cartridge": "PG-9 / PG-9N / PG-9VNT (kumulatiiv), OG-9 (killu-lõhke)",
        "weaponMass": 47.5,
        "weaponLength": 2110,
        "rateOfFire": 6,
        "effectiveRange": 800,
        "penetration": "PG-9: 300 mm; PG-9N / PG-9VS: 400 mm; PG-9VNT: 600 mm (450 mm reaktiivsoomuse taga)"
      },
      "sources": [
        {"name": "Wikipedia: SPG-9", "url": "https://en.wikipedia.org/wiki/SPG-9", "retrieved": "2026-10-23"}
      ]
    },
    "MT-12 Rapira": {
      "status": "unverified",
      "values": {
        "caliber": 100,
        "weaponMass": 2750,
        "weaponLength": 9160,
        "barrelLength": 6300,
        "crew": "6",
        "rateOfFire": 6,
        "muzzleVelocity": 1575,
        "maxRangeM": 8200,
        "penetration": "3BM-2 APFSDS: 230 mm 500 m kaugusel; 3BK16M HEAT: 400 mm; Kastet juhitav lask: 550–600 mm"
      },
      "sources": [
        {"name": "Wikipedia: 100 mm anti-tank gun T-12", "url": "https://en.wikipedia.org/wiki/100_mm_anti-tank_gun_T-12", "retrieved": "2026-10-23"}
      ]
    },
    "ZU-23-2 „Sergei“": {
      "status": "unverified",
      "values": {
        "caliber": 23,
        "cartridge": "23×152B (BZT, OFZ, OFZT)",
        "weaponMass": 950,
        "weaponLength": 4570,
        "barrelLength": 2008,
        "muzzleVelocity": 970,
        "rateOfFire": 2000,
        "effectiveRange": 2500,
        "magazine": "2 × 50-padruniline lint",
        "crew": "2 (detailsemates andmetes 6)"
      },
      "sources": [
        {"name": "Wikipedia: ZU-23-2", "url": "https://en.wikipedia.org/wiki/ZU-23-2", "retrieved": "2026-10-23"}
      ]
    },
    "Igla (9K38)": {
      "status": "unverified",
      "values": {
        "caliber": 72,
        "launchWeight": 17.9,
        "missileLength": 1.574,
        "warheadMass": 1.17,
        "missileSpeed": "570 m/s tipp (ca Mach 1,9)",
        "guidance": "Kahe lainepikkusega infrapunaotsija (Igla-S)",
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
        "caliber": 72,
        "launchWeight": 15,
        "missileLength": 1.44,
        "warheadMass": 1.15,
        "missileSpeed": "500 m/s",
        "guidance": "Passiivne infrapunaotsija (PbS), proportsionaalnavigatsioon",
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
        "launchWeight": 16,
        "missileLength": 1.47,
        "warheadMass": 1.17,
        "missileSpeed": "470 m/s",
        "guidance": "Infrapunaotsija, FM-modulatsioon, lämmastikuga jahutatud PbS",
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
        "caliber": 72,
        "launchWeight": 17.25,
        "warheadMass": 1.5,
        "missileSpeed": "kuni 500 m/s (Mach 1,5)",
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
        "caliber": 9,
        "cartridge": "9×19 mm Parabellum (7N21, +P+)",
        "weaponMass": 0.95,
        "weaponLength": 198,
        "barrelLength": 112.5,
        "muzzleVelocity": 450,
        "effectiveRange": 50,
        "magazine": "17-padruniline salv (hilisem 18)"
      },
      "sources": [
        {"name": "Wikipedia: MP-443 Grach", "url": "https://en.wikipedia.org/wiki/MP-443_Grach", "retrieved": "2026-10-23"}
      ]
    },
    "GSh-18": {
      "status": "unverified",
      "values": {
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
        "caliber": 9,
        "cartridge": "9×19 mm Parabellum (ka 7N31 soomustläbistav)",
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
        "caliber": 90,
        "cartridge": "90 mm termobaariline rakett",
        "weaponMass": 8.8,
        "weaponLength": 940,
        "effectiveRange": 600,
        "maxRangeM": 1700
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPO PDM-A (Shmel-M)", "url": "https://odin.t2com.army.mil/WEG/Asset/5fa85e638f885a7499b3064466125112", "retrieved": "2026-10-28"}
      ]
    },
    "AT-5 Spandrel (9K111-1 Konkurs)": {
      "status": "unverified",
      "values": {
        "caliber": 135,
        "weaponMass": 22.5,
        "launchWeight": 14.6,
        "missileLength": 1.15,
        "warheadMass": 2.7,
        "missileSpeed": "208 m/s",
        "guidance": "SACLOS, juhtmega",
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
        "caliber": 105,
        "cartridge": "PG-29V kumulatiivne (6,1 kg) või TBG-29V termobaariline (6,7 kg) lask",
        "weaponMass": 11.5,
        "weaponLength": 1850,
        "muzzleVelocity": 230,
        "effectiveRange": 500,
        "penetration": "PG-29V: kuni 600 mm RHA aktiivsoomuse taga; 1500 mm betoon, 2000 mm tellis"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-29 Vampir", "url": "https://odin.t2com.army.mil/WEG/Asset/d657da6756df1f02a4aff4ff86a7727e", "retrieved": "2026-10-28"}
      ]
    },
    "AKM": {
      "status": "unverified",
      "values": {
        "caliber": 7.62,
        "cartridge": "7,62×39 mm",
        "weaponMass": 3.3,
        "weaponLength": 880,
        "barrelLength": 415,
        "muzzleVelocity": 715,
        "rateOfFire": 600,
        "effectiveRange": 350,
        "magazine": "30-padruniline salv (ühilduv ka RPK 40-padruniliste salvede ja 75-padrunilise trumliga)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AKM", "url": "https://odin.t2com.army.mil/WEG/Asset/81938b91ee77ceadcef64a66bf7c3f23", "retrieved": "2026-10-28"}
      ]
    },
    "AKS-74U": {
      "status": "unverified",
      "values": {
        "caliber": 5.45,
        "cartridge": "5,45×39 mm",
        "weaponMass": 2.7,
        "weaponLength": 735,
        "barrelLength": 206.5,
        "rateOfFire": 600,
        "magazine": "30-padruniline salv (ühilduv RPK-74 45-padruniliste salvedega)"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AKS-74U", "url": "https://odin.t2com.army.mil/WEG/Asset/dd1155dc37bc6a75610fe79c66df527c", "retrieved": "2026-10-28"}
      ]
    },
    "AK-103": {
      "status": "unverified",
      "values": {
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
        {"name": "U.S. Army ODIN / WEG: DShK 1938", "url": "https://odin.t2com.army.mil/WEG/Asset/378933f032130704ff7f26afedab6f45", "retrieved": "2026-10-28"}
      ]
    },
    "AGS-30": {
      "status": "unverified",
      "values": {
        "caliber": 30,
        "cartridge": "30 mm VOG-17M / VOG-30 granaat",
        "weaponMass": 16,
        "weaponLength": 1165,
        "muzzleVelocity": 185,
        "rateOfFire": 400,
        "effectiveRange": 2100,
        "magazine": "29-granaadiline lint"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: AGS-30 Atlant", "url": "https://odin.t2com.army.mil/WEG/Asset/cf5b7847932c53a08417161fb2c97f17", "retrieved": "2026-10-28"}
      ]
    },
    "RPG-18 „Mukha“": {
      "status": "unverified",
      "values": {
        "caliber": 64,
        "weaponMass": 2.6,
        "weaponLength": 1050,
        "muzzleVelocity": 115,
        "effectiveRange": 200,
        "penetration": "300 mm soomust, 1000 mm tellis, 500 mm raudbetoon"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-18 Mukha", "url": "https://odin.t2com.army.mil/WEG/Asset/78d5a66747174ac105645801d1f3589b", "retrieved": "2026-10-28"}
      ]
    },
    "RPG-27 „Tavolga“": {
      "status": "unverified",
      "values": {
        "caliber": 105,
        "weaponMass": 8.3,
        "weaponLength": 1135,
        "muzzleVelocity": 120,
        "effectiveRange": 200,
        "penetration": "Üle 800 mm RHA (aktiivsoomuse taga 600–750 mm), 1500 mm betoon, 2000 mm tellis, 3700 mm muld"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: RPG-27 Tavolga", "url": "https://odin.t2com.army.mil/WEG/Asset/db3da67c5ff2f79baa68fb5f982c43eb", "retrieved": "2026-10-28"}
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
        "caliber": 100,
        "crew": "7",
        "weaponMass": 3050,
        "weaponLength": 9650,
        "barrelLength": 6300,
        "muzzleVelocity": 1575,
        "rateOfFire": 6,
        "effectiveRange": 3000,
        "maxRangeM": 8200,
        "guidance": "1A31 Ruta radar-tulejuhtimissüsteem: automaatne sihtmärgi avastamine, kaugusmõõtmine ja jälgimine kuni 3500 m, ka öösel ja halva nähtavusega"
      },
      "notes": {
        "rateOfFire": "6–14 lasku/min.",
        "effectiveRange": "Otsetule max kaugus; kaudtulega 8200m.",
        "muzzleVelocity": "700–1575m/s laskemoonast sõltuvalt."
      },
      "sources": [
        {"name": "Wikipedia: MT-12", "url": "https://en.wikipedia.org/wiki/MT-12", "retrieved": "2026-10-28"},
        {"name": "The War Zone: radariga tankitõrjekahurid", "url": "https://www.twz.com/44191/ukraine-rolls-out-soviet-era-radar-equipped-anti-tank-guns", "retrieved": "2026-10-28"}
      ]
    },
    "PMN": {
      "status": "unverified",
      "values": {
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
        "mineHeight": 54,
        "explosiveType": "RDX/TNT-põhine segu (sarnane Composition B)",
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
        "mineLength": 119,
        "mineWidth": 64,
        "mineHeight": 20,
        "explosiveMass": 37,
        "explosiveType": "Vedel lõhkeaine VS-6D või VS-60D",
        "casing": "Polüetüleenist plastkorpus",
        "delivery": "Kassettides (nt KSF-1S: 64 PFM-1S), laotakse raketiheitjate, miinipildujate, helikopterite ja lennukitega või UMZ-miinilaoturiga"
      },
      "sources": [
        {"name": "Wikipedia: PFM-1 mine", "url": "https://en.wikipedia.org/wiki/PFM-1_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POM-2S": {
      "status": "unverified",
      "values": {
        "mineDiameter": 63,
        "mineHeight": 180,
        "lethalRadius": 16,
        "delivery": "Kassettidega BM-21 / BM-27 raketiheitjatest, helikopterite VSM-1 süsteemiga, UMZ-miinilaoturiga või PKM-komplektiga"
      },
      "sources": [
        {"name": "Wikipedia: POM-2 mine", "url": "https://en.wikipedia.org/wiki/POM-2_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POM-3": {
      "status": "unverified",
      "values": {
        "mineMass": 1.3,
        "lethalRadius": 16,
        "delivery": "Hajutatav (nt ISDM Zemledelie, 5–15 km); laskub langevarjuga ja seisab kuue vedruga jala peal"
      },
      "sources": [
        {"name": "Wikipedia: POM-3 mine", "url": "https://en.wikipedia.org/wiki/POM-3_mine", "retrieved": "2026-10-23"}
      ]
    },
    "POMZ-2M": {
      "status": "unverified",
      "values": {
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
        "mineMass": 5,
        "mineDiameter": 108,
        "mineHeight": 172,
        "explosiveMass": 660,
        "explosiveType": "TNT",
        "casing": "Raudkorpus, 2400 eelvormitud terasklilu",
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
        "mineMass": 6,
        "mineDiameter": 250,
        "mineHeight": 80,
        "explosiveMass": 2500,
        "explosiveType": "TNT/RDX segu, kumulatiivlaeng",
        "casing": "Silindriline metallkorpus",
        "fuze": "Magnetiline mõjusüütaja (täislaiuse kahjustus)"
      },
      "sources": [
        {"name": "Wikipedia: TM-72 mine", "url": "https://en.wikipedia.org/wiki/TM-72_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TM-83": {
      "status": "unverified",
      "values": {
        "mineMass": 28.1,
        "mineLength": 455,
        "mineWidth": 377,
        "mineHeight": 440,
        "explosiveMass": 9600,
        "explosiveType": "TG 40/60",
        "penetration": "100 mm soomust 30° nurga all, 80 mm auk (5–30 m kaugusel)",
        "fuze": "Seismiline ja infrapunaandur"
      },
      "sources": [
        {"name": "Wikipedia: TM-83 mine", "url": "https://en.wikipedia.org/wiki/TM-83_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TM-89": {
      "status": "unverified",
      "values": {
        "penetration": "200 mm soomust 0,45 m kaugusel",
        "explosiveMass": 6700,
        "fuze": "Kahekanaliline magnetiline mõjusüütaja",
        "mineMass": 11.5,
        "mineDiameter": 320,
        "mineHeight": 131,
        "explosiveType": "Misznay-Schardini efekti lõhkepea"
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: TM-89", "url": "https://odin.t2com.army.mil/WEG/Asset/6dd8dfc2969e3929762928a40ce5b9cc", "retrieved": "2026-10-28"},
        {"name": "Wikipedia: TM-89 mine", "url": "https://en.wikipedia.org/wiki/TM-89_mine", "retrieved": "2026-10-23"}
      ]
    },
    "TMK-2": {
      "status": "unverified",
      "values": {
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
        "casing": "Plastkorpus",
        "delivery": "Käsitsi paigaldatav suunatud kildmiin, komplektis kuni neli miini (käsuga või ohvri poolt käivitatav)"
      },
      "sources": [
        {"name": "Wikipedia: MOB (landmine)", "url": "https://en.wikipedia.org/wiki/MOB_(landmine)", "retrieved": "2026-10-23"}
      ]
    },
    "RDG-2": {
      "status": "unverified",
      "values": {
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
        "mineMass": 0.66,
        "mineDiameter": 110,
        "mineHeight": 65,
        "explosiveMass": 340,
        "explosiveType": "TNT",
        "casing": "Plastkorpus, pruun, must kate keskse eendiga",
        "delivery": "Rõhu vabastamisel (koormuse eemaldamisel) töötav lõksmiin. Ehituselt PMN-i sarnane, kuid süttib koormuse kadumisel (min 5 kg). Kasutatakse tõstmisvastase seadmena miinidel, millel seda pole, või eraldi lõksuna. Kasutusiga piiramatu, isehävitust pole."
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
        "mineMass": 0.41,
        "mineLength": 155,
        "mineWidth": 92,
        "mineHeight": 31,
        "explosiveMass": 120,
        "explosiveType": "TNT",
        "casing": "Metall, matt oliivroheline",
        "delivery": "Mitmeotstarbeline lõhkelõks: kasutatav asjade lõksustamiseks, miinide tõstmisvastase seadmena, raudtee-/transpordimiinina või objektimiini süütena. Anduriteks kalde- (20°) ja vibratsiooniandur ning taimer 15 min – 360 h. Süüde MD-9. Lahtimuutmine keelatud."
      },
      "sources": [
        {"name": "Sappers.org: MS-4", "url": "https://sappers.org/uk/dovidnyk/miny/syurpryzy-i-pastky/ms-4", "retrieved": "2026-10-23"}
      ]
    },
    "ML-8": {
      "status": "unverified",
      "values": {
        "mineMass": 0.37,
        "mineLength": 114,
        "mineWidth": 60,
        "mineHeight": 40,
        "explosiveMass": 80,
        "casing": "Plast, roheline",
        "delivery": "Koormuse vabastamisel töötav lõksmiin. Tõstmisvastane seade PMN, PMN-2, PMN-4, PMD-6M, OZM-72 ja TM-62 sarja miinide all või lõks relvade/varustuse all. Sensori tundlikkus üle 0,25 kg; aktiveerimine 2–2,5 min pärast paigaldust. Lahtimuutmine keelatud."
      },
      "sources": [
        {"name": "Sappers.org: ML-8", "url": "https://sappers.org/uk/dovidnyk/miny/syurpryzy-i-pastky/ml-8", "retrieved": "2026-10-23"},
        {"name": "Militarnyi: Ukraine Unveils Most Common Russian Mines", "url": "https://militarnyi.com/en/news/ukraine-unveils-most-common-russian-mines-with-presidential-brigade-s-sappers/", "retrieved": "2026-10-23"}
      ]
    },
    "PMP": {
      "status": "unverified",
      "values": {
        "mineMass": 0.145,
        "mineLength": 120,
        "mineDiameter": 36,
        "casing": "Teras",
        "delivery": "Rõhutoimeline kuulmiin (kineetiline): rõhu all laseb 7,62×25 mm TT padruni, kuul (5,52 g) vigastab jalga. Tundlikkus 7–30 kgf. Sileraudne toru, kummikate ülaosas."
      },
      "sources": [
        {"name": "Sappers.org: PMP", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natysknoyi-diyi/pmp", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): PMP", "url": "https://metis.fenixinsight.com/munition/mine/pmp", "retrieved": "2026-10-23"}
      ]
    },
    "POB Pilka": {
      "status": "unverified",
      "values": {
        "mineDiameter": 90,
        "mineHeight": 170,
        "explosiveMass": 510,
        "explosiveType": "TG-40",
        "casing": "Plast; sees terasrõngastest killud (samad siseläbimõõdud, erinevad välisläbimõõdud)",
        "lethalRadius": 20,
        "delivery": "Hüppav killumiin, tõmbetraadiga (20 m) või käsu alusel (NM süütur, NVU-P/NVU-P2). Võeti kasutusele 2005. OZM-72 asendajana. Detoneerib 0,4–0,6 m kõrgusel. Süüted MUV-2/3/4, MVE-72, MVE-NS, MVE-92. Isehävitust ega tõstmisvastast kaitset pole."
      },
      "sources": [
        {"name": "Sappers.org: POB Pilka", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natyazhnoyi-diyi/pob-pilka", "retrieved": "2026-10-23"}
      ]
    },
    "Vkladysh": {
      "status": "unverified",
      "values": {
        "mineMass": 0.83,
        "mineDiameter": 61.5,
        "mineHeight": 170,
        "explosiveMass": 50,
        "explosiveType": "A-IX-1",
        "casing": "Teras (killud moodustuvad rõngastest)",
        "delivery": "Jalaväevastane kildmiin-käsigranaat ringlöögiga, tõmbetoimeline (4 andurit, kuni 10 m). Võeti kasutusele 2007. Asetatakse ainult käsitsi maapinnale; granaadina viivitus 3–5 s. Isehävitus 3–100 h pärast paigaldust, isetühistus kuni 120 päeva."
      },
      "sources": [
        {"name": "Sappers.org: MIB Vkladysh", "url": "https://sappers.org/uk/dovidnyk/miny/protypihotni-natyazhnoyi-diyi/mib-vkladysh", "retrieved": "2026-10-23"}
      ]
    },
    "OZ-1": {
      "status": "unverified",
      "values": {
        "delivery": "Lõhkelaeng üksikinimese kaevikupesa rajamiseks külmunud või kõvas pinnases. Järgnevate laengutega saab pesa laiendada mitmele võitlejale. Komplektis ≈96 mm plastkorpusega KZ-OZ-1."
      },
      "sources": [
        {"name": "Metis (Fenix Insight): OZ-1", "url": "https://metis.fenixinsight.com/munition/demolitionStore/oz-1", "retrieved": "2026-10-23"}
      ]
    },
    "KZU-2": {
      "status": "unverified",
      "values": {
        "mineMass": 0.9,
        "mineLength": 150,
        "mineWidth": 105,
        "mineHeight": 85,
        "explosiveMass": 320,
        "explosiveType": "TG-40 (TNT ja heksogeeni sulam)",
        "delivery": "Kumulatiivlaeng raudbetoon- ja metallkonstruktsioonide (sillad, toed, torustikud) lõhkamiseks; töötab igas ilmas ja vee all; elektriline süütamine. Kinnitus eemaldatavate magnetite ja köiega. Läbistus ≈3,6 cm terast / 30 cm raudbetooni."
      },
      "sources": [
        {"name": "BOCN forum: KZU-2 demolition charge", "url": "https://www.bocn.co.uk/threads/kzu-2-demolition-charge-russia.110648/", "retrieved": "2026-10-23"}
      ]
    },
    "SPM": {
      "status": "unverified",
      "values": {
        "mineMass": 3,
        "mineLength": 280,
        "mineWidth": 115,
        "mineHeight": 75,
        "explosiveMass": 1000,
        "explosiveType": "MS",
        "casing": "Bakeliit (fenoolplast)",
        "delivery": "Keskmine magnetmiin (ajastatud objektimiin) metallosadega sihtmärkide vastu (kütusepaagid, torustikud, sõidukid, õhusõidukid, laevad). Kinnitub kahe kaarja magnetiga (hoiujõud 40–60 kg); kasutatav ka vee all kuni 10 m. Viitsüüde VZD-1M või VZD-20M. Kasutavad peamiselt mereväe lahingujuubijad ja merejalavägi."
      },
      "sources": [
        {"name": "Sappers.org: SPM", "url": "https://sappers.org/uk/dovidnyk/miny/obyektni/spm", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): SPM", "url": "https://metis.fenixinsight.com/munition/mine/spm", "retrieved": "2026-10-23"}
      ]
    },
    "MPM": {
      "status": "unverified",
      "values": {
        "mineMass": 0.77,
        "mineLength": 150,
        "mineWidth": 75,
        "mineHeight": 50,
        "explosiveMass": 300,
        "explosiveType": "TG-50",
        "casing": "Bakeliit (fenoolplast), tumepruun",
        "delivery": "Väike magnetmiin (ajastatud objektimiin, ilma killuefektita). Nõukogude konstruktsioon, kuulub kinnitusmiinide perre BPM / SPM / UPM."
      },
      "sources": [
        {"name": "Sappers.org: MPM", "url": "https://sappers.org/uk/dovidnyk/miny/obyektni/mpm", "retrieved": "2026-10-23"},
        {"name": "Metis (Fenix Insight): MPM", "url": "https://metis.fenixinsight.com/munition/mine/mpm", "retrieved": "2026-10-23"}
      ]
    },
    "SM": {
      "status": "unverified",
      "values": {
        "mineMass": 0.4,
        "mineDiameter": 25,
        "mineHeight": 278,
        "casing": "Teras, roheline",
        "delivery": "Tõmbetraadiga signaalmiin: heli- ja valgussignaal (valju vile kuni 500 m, 12–15 valgusrakett, põlemine 10–12 s, tõus 5–15 m). Kasutati valvepostidel ja positsioonidel Afganistanis ja Tšetšeenias. Isehävitust ega tõstmisvastast kaitset pole."
      },
      "sources": [
        {"name": "Sappers.org: SM", "url": "https://sappers.org/uk/dovidnyk/miny/syhnalni/sm", "retrieved": "2026-10-23"}
      ]
    },
    "MSK-40": {
      "status": "unverified",
      "values": {
        "mineMass": 1,
        "mineDiameter": 40,
        "mineHeight": 350,
        "casing": "Teras, roheline",
        "delivery": "Kombineeritud signaal- ja valgustusmiin (MSK-40P lisab kaks valgus-heli tähte). Neli värvilist signaalitähte (punane, roheline, valge, sinine) ja kümme valgustustähte tõusevad ≈30 m; valgustab 170–200 m raadiuses 23–28 s; vile kuuldav 500–800 m. Kasutusiga 10 aastat."
      },
      "sources": [
        {"name": "Sappers.org: MSK-40", "url": "https://sappers.org/uk/dovidnyk/miny/syhnalni/msk-40", "retrieved": "2026-10-23"}
      ]
    },
    "UDSh": {
      "status": "unverified",
      "values": {
        "delivery": "Universaalne suitsuseade (suitsuküünal), mis võeti Venemaa kaitsevägedes kasutusele pärast 1975. aastat; kasutab RKhBZ (kiirguse-, keemia- ja bioloogilise kaitse) väed. Seotud DM-11 ja NDSh silindriliste suitsupottidega."
      },
      "sources": [
        {"name": "Metis (Fenix Insight): DM-11 smoke pot", "url": "https://metis.fenixinsight.com/munition/miscellaneous/dm-11-smoke-pot", "retrieved": "2026-10-23"}
      ]
    },
    "PTM-3": {
      "status": "unverified",
      "values": {
        "mineMass": 5,
        "mineLength": 330,
        "mineWidth": 84,
        "explosiveMass": 1800,
        "explosiveType": "TG-40",
        "penetration": "70 mm (läbistab soomuki põhja, hävitab veermiku)",
        "delivery": "Kaugmineerimine: UMZ, kopterid, PKM kantav komplekt. Magnetiline lähedussüütaja; isehävitus 16–24 h."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTM-3", "url": "https://odin.t2com.army.mil/WEG/Asset/2d1dffeab35fc704d693a6e4e781a906", "retrieved": "2026-10-28"}
      ]
    },
    "PTM-4": {
      "status": "unverified",
      "values": {
        "casing": "Poolsilindrikujuline teraskorpus",
        "fuze": "VT-14 programmeeritav isehävitusega magnetiline lähedussüütaja",
        "delivery": "Kaugmineerimine kassetis KPTM-4 (2 miini, 9,6 kg), sh kopteritelt. Lahingvalmis 40–80 s pärast; isehävitus 8 h – 120 päeva."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTM-4", "url": "https://odin.t2com.army.mil/WEG/Asset/77333bc0485aa58e061490136de54911", "retrieved": "2026-10-28"}
      ]
    },
    "PTKM-1R": {
      "status": "unverified",
      "values": {
        "mineMass": 19.9,
        "mineDiameter": 220,
        "mineHeight": 510,
        "explosiveMass": 2800,
        "penetration": "70 mm",
        "delivery": "Pealtründav miin: akustilised ja seismilised andurid tuvastavad sihtmärgi, kildpea (EFP) lastakse soomuki katusele. Isehävitus 1–10 päeva."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: PTKM-1R", "url": "https://odin.t2com.army.mil/WEG/Asset/775ff50993d8834af599b987cd35e177", "retrieved": "2026-10-28"}
      ]
    },
    "BMP-1AM Basurmanin": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "30mm 2A72 automaatkahur (300 lasku), stabiliseeritud; tõusunurk −5…+70°",
        "atgm": "Puudub (osa allikate järgi võimalik 9K115 Metis, fotodel kanderaami pole)",
        "rateOfFire": 330,
        "secondaryArmament": "7,62mm PKTM koaksiaalne (2000 lasku); 902V „Tutša“ suitsugranaadiheitjad tornil",
        "cannonRangeSoft": 4000,
        "mgRange": 1500,
        "sensors": "TKN-4GA kombineeritud päeva-/öösihik stabiliseeritud vaateväljaga; õhusihtmärkide sihik; raadio R-168-25U-2",
        "armor": "Kere nagu BMP-1 (keevitatud teras kuni 19mm); BTR-82A torn"
      },
      "sources": [
        {"name": "GlobalSecurity: BMP-1AM Basurmanin", "url": "https://www.globalsecurity.org/military/world/russia/bmp-1am.htm", "retrieved": "2026-10-30"},
        {"name": "Tank Encyclopedia: BMP-1AM", "url": "https://tank-afv.com/modern/Russia/BMP-1AM.php", "retrieved": "2026-10-30"}
      ]
    },
    "BMP-2M Berežok": {
      "status": "unverified",
      "values": {
        "crew": "3 + 7 dessantväelast",
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
        "mainArmament": "Lahingumoodul B05YA01 „Berežok“: 30mm 2A42 automaatkahur (500 lasku)",
        "atgm": "4 × 9M133 Kornet (AT-14 Spriggan) kahel kaksikkanderaamil torni külgedel; variandil sb4-2 Konkurs-M; mõnel masinal lisaks 2 × 9M120 Ataka-T katusel",
        "atgmPenetration": "Kornet: kuni 1000mm (9M133), 1100–1300mm (9M133M-2) RHA reaktiivsoomuse taga",
        "rateOfFire": 500,
        "secondaryArmament": "30mm AG-30M/AG-17 automaatgranaadiheitja torni taga (300 granaati); 7,62mm PKTM koaksiaalne (2000 lasku)",
        "atgmRange": {"min": 100, "max": 5500},
        "cannonRangeArmored": 1500,
        "cannonRangeSoft": 4000,
        "mgRange": 1500,
        "sensors": "Mitmekanaliline laskuri sihik (termokaamera, laserkaugusmõõtja, JTTR-juhtimiskanal), relvastuse stabilisaator ja ballistikaarvuti; avastus 5000m päeval, 3000m öösel; ülema sihik 1PZ-13",
        "armor": "BMP-2 kere + lisasoomus: peab vastu 12,7mm B-32 kuulidele ja kumulatiivrakettidele (tootja andmed); NBC-kaitse"
      },
      "notes": {
        "mainArmament": "GlobalSecurity nimetab 2A72; Berežoki moodulil on standardselt 2A42."
      },
      "sources": [
        {"name": "Army Technology: BMP-2M Infantry Fighting Vehicle", "url": "https://www.army-technology.com/projects/bmp-2m-infantry-fighting-vehicle/", "retrieved": "2026-10-30"},
        {"name": "GlobalSecurity: BMP-2M", "url": "https://www.globalsecurity.org/military/world/russia/bmp-2m.htm", "retrieved": "2026-10-30"}
      ]
    },
    "Alpinist klass": {
      "status": "unverified",
      "values": {
        "standardDisplacement": 1020,
        "fullDisplacement": 1238,
        "length": 53.7,
        "width": 10.7,
        "draft": 4.2,
        "engine": "1 × 8NVD-48A-2U diisel, 1 sõukruvi",
        "crew": "58",
        "sensors": "ESM/ELINT signaaliluure (kuni ~900km); Don-2 pinnaotsingu- ja navigatsiooniradar; Paltus-MP kerehüdrolokaator"
      },
      "sources": [
        {"name": "CMO DB: SSV Alpinist [Pr.503R]", "url": "https://cmo-db.com/en/cmo/ship/451", "retrieved": "2026-10-30"},
        {"name": "Military Periscope: Al'pinist (AGI) class", "url": "https://www.militaryperiscope.com/weapons/ships/intelligence-collection/alpinist-agi-class/", "retrieved": "2026-10-30"}
      ]
    },
    "Zernika-2": {
      "status": "unverified",
      "values": {
        "cruiseSpeed": 75,
        "serviceCeiling": 1500,
        "ferryRange": 80,
        "warheadMass": 3.5,
        "specialEquipment": "Lendava tiiva skeem; kildlõhkepea „Kaplja“; lõppfaasi isesihtimine tabab ka side ja GPS-i häirimise korral"
      },
      "sources": [
        {"name": "United24 Media: Russia hit Kharkiv with a new drone called Chernika", "url": "https://united24media.com/latest-news/russia-hit-kharkiv-with-a-new-drone-called-chernika-heres-what-we-know-about-it-9500", "retrieved": "2026-10-30"},
        {"name": "Defence24: Charków pod ostrzałem nowym typem drona z Rosji", "url": "https://defence24.pl/wojna-na-ukrainie-raport-specjalny-defence24/charkow-pod-ostrzalem-nowym-typem-drona-z-rosji", "retrieved": "2026-10-30"}
      ]
    },
    "Skat-450M": {
      "status": "unverified",
      "values": {
        "sensors": "Optiline kaamera ja termokaamera",
        "specialEquipment": "Süvaluure; sihtmärkide koordinaatide edastamine kaugrelvadele, sh Iskander-M; töötemperatuur −45…+45°C"
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
        "wingspan": 1.8,
        "payload": 5,
        "engine": "Vaikne elektrimootor, kahelabaline propeller",
        "endurance": 2,
        "sensors": "Full HD videokaamera, täiskaader-fotokaamera või HD termokaamera (samad mis S350-l)",
        "specialEquipment": "Lendav tiib; elastne või pneumaatiline katapult; langevarjuga maandumine"
      },
      "sources": [
        {"name": "EDR Magazine: Dubai Airshow 2025 – Supercam S180", "url": "https://www.edrmagazine.eu/dubai-airshow-2025-unmanned-systems-group-unveiled-the-supercam-s180-reconnaissance-uav", "retrieved": "2026-10-30"}
      ]
    },
    "Eleron-16": {
      "status": "unverified",
      "values": {
        "maxTakeoffWeightKg": 20,
        "payload": 6,
        "engine": "Akutoitel elektrimootor (ka kütuseelemendiga variant)",
        "cruiseSpeed": 65,
        "ferryRange": 150,
        "specialEquipment": "Pardi skeem (canard), noolkujuline tiib allapoole suunatud otstega, kaks vertikaalstabilisaatorit; tiiva all välised kinnitused konteineritele. Ülesanded: luure, jälgimine, tule korrigeerimine, vaenlase elektroonika segamine"
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
        "specialEquipment": "Peibutusdroon: lõhkepead ei ole. Luneburgi lääts jäljendab radaril Geran/Shahedi peegeldust. Väiksem ja odavam kui Geran; lennukontrolleris Hiina, USA, Šveitsi ja Taiwani komponendid"
      },
      "sources": [
        {"name": "Ukrainska Pravda: Russia uses Parodiya decoy drones again", "url": "https://www.pravda.com.ua/eng/news/2026/05/03/8032918/index.amp", "retrieved": "2026-10-30"}
      ]
    },
    "Ajaks V300": {
      "status": "unverified",
      "values": {
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
        "specialEquipment": "VTOL-lennuk: vertikaalne start ja maandumine, vaja 5×5m platsi; ettevalmistus 5–10 min; juhtimine ei sõltu GPS-signaalist"
      },
      "sources": [
        {"name": "Cyclowiki: Аякс V300", "url": "https://cyclowiki.org/wiki/%D0%90%D1%8F%D0%BA%D1%81_V300", "retrieved": "2026-10-30"}
      ]
    },
    "Kamaz-65225": {
      "status": "unverified",
      "values": {
        "driveConfig": "6×6",
        "loadCapacity": 17000,
        "towingCapacity": 70000,
        "engine": "KamAZ-740.37-400 V8 diisel",
        "power": 400,
        "maxSpeedRoad": 70
      },
      "notes": {
        "loadCapacity": "Lubatud koormus sadulale.",
        "towingCapacity": "Teises lõigus: poolhaagise täismass alla 48t."
      },
      "sources": [
        {"name": "GlobalSecurity: KAMAZ trucks", "url": "https://www.globalsecurity.org/military/world/russia/kamaz-trucks.htm", "retrieved": "2026-10-30"}
      ]
    },
    "UAZ-3153 Hunter": {
      "status": "unverified",
      "values": {
        "driveConfig": "4×4",
        "combatWeight": 1.8,
        "length": 4.1,
        "width": 2.01,
        "height": 2.03,
        "engine": "2,7l reaskneljane bensiinimootor (ka 2,2–2,4l diisel)",
        "groundClearance": 210
      },
      "notes": {
        "driveConfig": "UAZ-3153 on UAZ-3151 pika teljevahega versioon; Hunter (UAZ-315195) on selle edasiarendus. Andmed on Hunteri kohta."
      },
      "sources": [
        {"name": "VehicleSizes: UAZ Hunter (315195)", "url": "https://www.vehiclesizes.com/cars/uaz/hunter/hunter-315195-off-road-vehicle-2003", "retrieved": "2026-10-30"}
      ]
    },
    "Ulan": {
      "status": "unverified",
      "values": {
        "seats": "5 (2 kabiinis, 3 taga)",
        "combatWeight": 0.62,
        "loadCapacity": 600,
        "power": 85,
        "maxSpeedRoad": 85,
        "range": 320,
        "mainArmament": "Kinnituskohad relvadele, nt 2 × 7,62mm PKP „Petšeneg“",
        "specialEquipment": "Kerge lahtine maastikusõiduk (bagi) rindelogistikaks; ühe istmereaga kabiin ja pikapi lastiplatvorm, lisariiul kapotil; mahutab 2 haavatut kanderaamil; plaanis EW-seadmete toide"
      },
      "notes": {
        "seats": "Allikad segavad nimesid: osa omistab need andmed Ulan-2-le, kuid Ulan-2 on GAZ Soboli baasil."
      },
      "sources": [
        {"name": "Euromaidan Press: 85 km/h, 600 kg payload – Ulan", "url": "https://euromaidanpress.com/2026/02/09/85-km-h-600-kg-payload-and-defenseless-ukrainian-drones-destroy-russias-logistics-platform/", "retrieved": "2026-10-30"}
      ]
    },
    "Ulan-2": {
      "status": "unverified",
      "values": {
        "chassis": "GAZ Sobol 4×4 kaubik",
        "driveConfig": "4×4",
        "specialEquipment": "Kerge maastikutransporter isikkoosseisu, laskemoona ja varustuse veoks („bukhanka“ asendaja). Rindel lisatud keevitatud raam, kummikilbid kildude vastu, terasribid akendel, uste asemel ketid; katusel droonivastane häireseade. Võimalik paigaldada raadiojaam, navigatsioon ja kerge relv"
      },
      "sources": [
        {"name": "Forces News: Chains, grilles and jammers – Russia's Ulan-2", "url": "https://www.forcesnews.com/russia/chains-grilles-and-jammers-russias-ulan-2-and-future-british-army-land-rover", "retrieved": "2026-10-30"}
      ]
    },
    "ZIL-131": {
      "status": "unverified",
      "values": {
        "seats": "3 (kabiinis)",
        "driveConfig": "6×6",
        "combatWeight": 6.7,
        "loadCapacity": 5000,
        "towingCapacity": 5000,
        "length": 7.04,
        "width": 2.5,
        "height": 2.48,
        "engine": "ZIL-130 V8 bensiinimootor, karburaator, 6,0l",
        "maxSpeedRoad": 80,
        "fuelCapacity": 340,
        "groundClearance": 330,
        "fording": 1.4,
        "gradient": 60
      },
      "notes": {
        "combatWeight": "Tühimass.",
        "loadCapacity": "Maanteel; maastikul 3500kg."
      },
      "sources": [
        {"name": "Wikipedia: ZIL-131", "url": "https://en.wikipedia.org/wiki/ZIL-131", "retrieved": "2026-10-30"}
      ]
    },
    "URAL-4320": {
      "status": "unverified",
      "values": {
        "seats": "3 kabiinis + 27 kastis",
        "driveConfig": "6×6",
        "combatWeight": 15.3,
        "loadCapacity": 6000,
        "towingCapacity": 11500,
        "length": 7.366,
        "width": 2.5,
        "height": 2.715,
        "engine": "YaMZ-238M2 V8 diisel, 14,9l",
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
    "Taifun-VDV K-4386, 4x4": {
      "status": "unverified",
      "values": {
        "crew": "Kokku 8 (meeskond + dessant)",
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
        "mainArmament": "Kaugjuhitav lahingumoodul 360° kilbiga: 30mm 2A42 automaatkahur + 7,62mm PKTM (BM-30-D); muud variandid kergemate moodulitega",
        "armor": "Kere: OTT tase 4 (kuulid ja suurtükikillud); miinikaitse OTT tase 3"
      },
      "notes": {
        "combatWeight": "Täismass; tühimass 11t."
      },
      "sources": [
        {"name": "Army Technology: Typhoon-VDV K-4386", "url": "https://www.army-technology.com/projects/typhoon-vdv-k-4386/", "retrieved": "2026-10-30"}
      ]
    },
    "Taifun-U Ural-53099": {
      "status": "unverified",
      "values": {
        "crew": "3 + kuni 8",
        "driveConfig": "4×4",
        "combatWeight": 16,
        "loadCapacity": 2000,
        "towingCapacity": 5000,
        "engine": "YaMZ-5367 turbodiisel, automaatkäigukast",
        "power": 440,
        "maxSpeedRoad": 100,
        "range": 1000,
        "mainArmament": "Kaugjuhitav relvamoodul (näidisel Kalashnikov MBDU)",
        "armor": "STANAG 4569 tase III (7,62×54mm B-32 soomustläbistav), suurendatav; täiskeevitatud kere, NBC-filterventilatsioon"
      },
      "notes": {
        "combatWeight": "Täismass. Teine allikas: 14,5t.",
        "power": "Teine allikas: 312hj."
      },
      "sources": [
        {"name": "Army Recognition: Ural-53099 Taifun-U", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2015/ural-of-russia-has-developed-new-4x4-mrap-armoured-vehicle-ural-53099-taifun-u-10312152", "retrieved": "2026-10-30"},
        {"name": "Trucksplanet: Ural 53099 Typhoon-U-T", "url": "https://trucksplanet.com/catalog/model.php?id=2759", "retrieved": "2026-10-30"}
      ]
    },
    "Taifun-U Ural-63095, 6x6": {
      "status": "unverified",
      "values": {
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
        "mainArmament": "Kaugjuhitav relvamoodul: 7,62mm kuulipilduja või 14,5mm KPV; laskeavad",
        "armor": "Teras-keraamiline komposiitsoomus ja lamineeritud klaas: kaitse 14,5mm soomustläbistava kuuli ja kuni 8kg lõhkeaine vastu põhja all; isetihenduvad rehvid"
      },
      "notes": {
        "crew": "Allikates ka 3 + 12 ja 2 + 14."
      },
      "sources": [
        {"name": "Wikipedia: Ural Typhoon", "url": "https://en.wikipedia.org/wiki/Ural_Typhoon", "retrieved": "2026-10-30"},
        {"name": "Warwheels: Typhoon-U Ural-63095", "url": "https://warwheels.net/Typhoon-U-Ural63095-63099mrapINDEX.html", "retrieved": "2026-10-30"}
      ]
    },
    "Kamaz-5350 Z-STS Akhmat": {
      "status": "unverified",
      "values": {
        "crew": "Kuni 10",
        "chassis": "KamAZ-5350 6×6 (Remdiesel)",
        "driveConfig": "6×6",
        "engine": "KamAZ-740.13.260 turbodiisel (alusšassii)",
        "mainArmament": "Kuulipilduja enesekaitseks",
        "armor": "Väidetavalt Taifun-perega samaväärne kaitse (MRAP)",
        "specialEquipment": "Töötemperatuur −50…+50°C, kuni 4500m kõrgusel; transporditav Il-76 ja An-124-ga"
      },
      "sources": [
        {"name": "Defence24: Czeczenia kupi rosyjskie MRAP-y", "url": "https://defence24.pl/polityka-obronna/czeczenia-kupi-rosyjskie-mrapy", "retrieved": "2026-10-30"},
        {"name": "Wikipedia: KamAZ-5350", "url": "https://en.wikipedia.org/wiki/KamAZ-5350", "retrieved": "2026-10-30"}
      ]
    },
    "AMN-590951 Spartak (VPK-Ural)": {
      "status": "unverified",
      "values": {
        "crew": "Kuni 9 (juht, ülem, laskur + 6 jalaväelast)",
        "driveConfig": "4×4",
        "combatWeight": 14.5,
        "loadCapacity": 1500,
        "engine": "Turbodiisel, 5-käiguline manuaalkäigukast",
        "power": 312,
        "maxSpeedRoad": 90,
        "range": 1000,
        "mainArmament": "12,7mm raskekuulipilduja avatud ühekohalises tornis 360° kilbiga",
        "armor": "Lisasoomus ees ja katusel; peab vastu 6kg TNT plahvatusele põhja ja rataste all"
      },
      "sources": [
        {"name": "Army Recognition: Russian army receives AMN-590951", "url": "https://www.armyrecognition.com/archives/archives-land-defense/land-defense-2022/russian-army-continues-to-receive-new-combat-vehicles-such-as-the-amn-590951", "retrieved": "2026-10-30"}
      ]
    },
    "R-166-0,5": {
      "status": "unverified",
      "values": {
        "chassis": "UNSh / K1Sh1 (BTR-80 alusel)",
        "driveConfig": "8×8",
        "amphibious": true,
        "specialEquipment": "KL (HF) ja UKL (VHF) raadioside sidesõlme koosseisus või iseseisvalt"
      },
      "sources": [
        {"name": "Militarnyi: The Armed Forces seized the Russian R-166-0.5 radio station", "url": "https://militarnyi.com/en/news/the-armed-forces-had-seized-the-russian-r-166-0-5-radio-station-in-the-sumy-region/", "retrieved": "2026-10-30"}
      ]
    },
    "BMD-1Ksh": {
      "status": "unverified",
      "values": {
        "chassis": "BMD-1",
        "combatWeight": 7.5,
        "length": 5.4,
        "width": 2.63,
        "engine": "5D20 V6 diisel",
        "power": 240,
        "maxSpeedRoad": 70,
        "maxSpeedWater": 10,
        "range": 320,
        "amphibious": true,
        "airDroppable": true,
        "specialEquipment": "Õhudessantvägede juhtimissoomuk: kahur eemaldatud, lisaraadiojaamad ja teleskoopmast"
      },
      "notes": {
        "combatWeight": "Šassii andmed BMD-1-lt; juhtimisversiooni täpsed andmed puuduvad."
      },
      "sources": []
    },
    "R-416GM Granit-M": {
      "status": "unverified",
      "values": {
        "specialEquipment": "Digitaalne häirekindel raadioreleejaam pakettkommutatsiooniga strateegilise ja operatiivtasandi võrkudele. Dupleks 5,6–6,2 GHz ja 7,9–8,4 GHz; andmeedastus 4–311 Mbit/s; hüpe kuni 40km mõõdukalt liigendatud maastikul; liikumise ajal ei tööta; töötemperatuur −50…+40°C"
      },
      "sources": [
        {"name": "Euromaidan Press: Russians lose state-of-the-art R-416GM", "url": "https://euromaidanpress.com/?p=277187", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: R-416G-MS", "url": "https://origin.armedconflicts.com/-t296839", "retrieved": "2026-10-30"}
      ]
    },
    "R-419L1": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "KamAZ-4350",
        "driveConfig": "4×4",
        "maxSpeedRoad": 100,
        "specialEquipment": "Digitaalne raadioreleejaam magistraalliinidele ja kaabelliinide asendamiseks: 390–645 MHz ja 1550–1850 MHz; kuni 8,448 Mbit/s; kasutuselevõtt ≤35 min; 2 generaatorit AD4-T400-1VM2 + akupuhver, autonoomia ≥48h"
      },
      "sources": []
    },
    "RS-24 Jars / Topol-M": {
      "status": "unverified",
      "values": {
        "crew": "3 (stardiseade)",
        "chassis": "MZKT-79221 16×16 (liikuv) või raketišaht",
        "missileLength": 22.5,
        "missileDiameter": 2,
        "launchWeight": 49600,
        "firingRange": 11000,
        "missileSpeed": "~Mach 25",
        "guidance": "Inertsiaalne + GLONASS",
        "specialEquipment": "Kolmeastmeline tahkekütusrakett. Jars: mitu iseseisvalt sihitavat lõhkepead (MIRV), Wikipedia infokastis 3 × 200kt, hinnanguliselt kuni 4. Jars on sisuliselt MIRV-iga Topol-M"
      },
      "notes": {
        "launchWeight": "Jarsi andmed. Topol-M: ~47t, pikkus ~22,7m, läbimõõt ~1,86m, üks lõhkepea."
      },
      "sources": [
        {"name": "Wikipedia: RS-24 Yars", "url": "https://en.wikipedia.org/wiki/RS-24_Yars", "retrieved": "2026-10-30"}
      ]
    },
    "K-300P Bastion-P/SS-C-5 Stooge": {
      "status": "unverified",
      "values": {
        "crew": "3 (stardiseade)",
        "chassis": "MZKT-7930 8×8",
        "missileLength": 8.9,
        "missileDiameter": 0.7,
        "launchWeight": 3000,
        "warheadMass": 250,
        "firingRange": 300,
        "missileSpeed": "Mach 2,5 (vedelkütusel prjamotoormootor, tahkekütusekiirendi)",
        "guidance": "Algfaasis GLONASS, keskfaasis INS + raadiokõrgusmõõtja, lõppfaasis aktiivne radar",
        "specialEquipment": "Rakett P-800 Oniks, 2 tk stardiseadmel; patareis tavaliselt 4 stardiseadet + juhtimis-, toetus- ja laadimismasinad; laskevalmis 5 min jooksul pärast peatumist; horisondi-tagune radar Predel-E"
      },
      "notes": {
        "firingRange": "Kõrge–madal trajektoor; madal–madal 120km."
      },
      "sources": [
        {"name": "Wikipedia: K-300P Bastion-P", "url": "https://en.wikipedia.org/wiki/K-300P_Bastion-P", "retrieved": "2026-10-30"}
      ]
    },
    "3K60 Bal/SSC-6 Sennight": {
      "status": "unverified",
      "values": {
        "chassis": "MZKT-7930 8×8",
        "missileLength": 4.4,
        "missileDiameter": 0.42,
        "launchWeight": 610,
        "warheadMass": 145,
        "firingRange": 120,
        "missileSpeed": "Mach 0,8 (lendab lainete kohal)",
        "guidance": "Inertsiaalne, lõppfaasis aktiivne radar",
        "specialEquipment": "Rakett Kh-35, kuni 8 tk stardiseadmel; patareis juhtimismasin, 2 stardiseadet ja 2 laadimismasinat (diviisis tavaliselt 2 patareid); lahinguvalmis alla 10 min"
      },
      "sources": [
        {"name": "Weapon Systems: 3K60 Bal", "url": "https://weaponsystems.net/system/140-3K60%20Bal", "retrieved": "2026-10-30"}
      ]
    },
    "9T250": {
      "status": "unverified",
      "values": {
        "crew": "2",
        "chassis": "MZKT-7930 8×8",
        "driveConfig": "8×8",
        "combatWeight": 40,
        "engine": "YaMZ-846 V8 diisel",
        "power": 503,
        "maxSpeedRoad": 70,
        "range": 1000,
        "fuelCapacity": 770,
        "specialEquipment": "Iskanderi laadimismasin: 2 varuraketti (ballistiline 9M723 või tiibrakett 9M728/9M729) ja kraana nende tõstmiseks stardiseadmele 9P78"
      },
      "sources": [
        {"name": "Truck Encyclopedia: 9K720 Iskander", "url": "https://truck-encyclopedia.com/modern/russia/9K720-iskander.php", "retrieved": "2026-10-30"}
      ]
    },
    "R-300KMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "crew": "4",
        "chassis": "MT-LBu-M",
        "ewTargets": "Kompleksi juhtimispunkt: automaatne raadioluure ja häirete jaotamine nelja tüüpi häirejaamale (R-378BMV, R-330BMV, R-934BMV, R-325UMV); avastab ka sagedushüppega sidet (kuni 300 hüpet/s)",
        "specialEquipment": "Põhikomplekt: 1 juhtimispunkt + 4 paari häirejaamu; kõik varad positsioonil töövalmis ~15 min"
      },
      "notes": {
        "crew": "Allikates kirjutatud ka R-330KMV."
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"},
        {"name": "Defense Express: FPV drones destroy RB-301B Borisoglebsk-2", "url": "https://en.defence-ua.com/news/ukrainian_fpv_drones_destroy_enemys_rb_301b_borisoglebsk_2_ew_system_at_12_15_km_range_video-10811.html", "retrieved": "2026-10-30"}
      ]
    },
    "R-378BMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu-M",
        "frequencyRange": "KL (HF)",
        "ewTargets": "Lühilaine (KL/HF) raadioside häirimine, sh sagedushüppega side",
        "specialEquipment": "Borisoglebsk-2 häirejaam, juhitakse R-300KMV-lt; kompleksis 2 sellist jaama; töövalmis ~15 min"
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"}
      ]
    },
    "R-934BMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu-M",
        "frequencyRange": "VHF/UHF",
        "ewTargets": "Lennunduse raadioside (maa–õhk, õhk–õhk) häirimine",
        "specialEquipment": "Borisoglebsk-2 häirejaam, juhitakse R-300KMV-lt; kompleksis 2 sellist jaama; töövalmis ~15 min"
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"}
      ]
    },
    "R-325UMV (RB-301B Borisoglebsk-2)": {
      "status": "unverified",
      "values": {
        "chassis": "MT-LBu-M",
        "frequencyRange": "VHF/UHF",
        "ewTargets": "Taktikalise raadioside häirimine",
        "specialEquipment": "Borisoglebsk-2 häirejaam, juhitakse R-300KMV-lt; kompleksis 2 sellist jaama; töövalmis ~15 min"
      },
      "sources": [
        {"name": "Militarnyi: Ukrainian military destroy the Russian R-934BMV Borisoglebsk-2 EW system", "url": "https://mil.in.ua/en/news/ukrainian-military-destroy-the-russian-r-934bmv-borisoglebsk-2-ew-system", "retrieved": "2026-10-30"},
        {"name": "Valka.cz: RB-301B Borisoglebsk-2", "url": "https://origin.armedconflicts.com/topic/view/252376", "retrieved": "2026-10-30"}
      ]
    },
    "R-378B (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "frequencyRange": "KL (HF)",
        "ewTargets": "Lühilaine raadioside häirimine",
        "specialEquipment": "Juhitakse R-330K Mandat juhtimispunktist (juhtimiskaugus kuni 30km)"
      },
      "sources": [
        {"name": "Valka.cz: R-330K Mandat", "url": "https://www.armedconflicts.com/-t70573", "retrieved": "2026-10-30"}
      ]
    },
    "R-325U (R-330 Mandat)": {
      "status": "unverified",
      "values": {
        "frequencyRange": "KL/UKL (HF/VHF)",
        "ewTargets": "Raadioside häirimine",
        "specialEquipment": "Juhitakse R-330K Mandat juhtimispunktist (juhtimiskaugus kuni 30km)"
      },
      "sources": [
        {"name": "Valka.cz: R-330K Mandat", "url": "https://www.armedconflicts.com/-t70573", "retrieved": "2026-10-30"}
      ]
    },
    "APS „Stechkin“": {
      "status": "unverified",
      "values": {
        "caliber": 9,
        "cartridge": "9×18mm Makarov",
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
        "caliber": 40,
        "cartridge": "40mm VOG-25 (kildgranaat), VOG-25P (põrkav), suitsugranaadid GRD",
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
        "caliber": 105,
        "cartridge": "105mm termobaariline granaat RPG-7-le",
        "weaponMass": 4.5,
        "effectiveRange": 200,
        "lethalRadius": 10
      },
      "sources": []
    },
    "RShG-1": {
      "status": "unverified",
      "values": {
        "caliber": 105,
        "cartridge": "105mm termobaariline rakett",
        "weaponMass": 8,
        "weaponLength": 1135,
        "effectiveRange": 150,
        "explosiveMass": 1900,
        "lethalRadius": 10
      },
      "notes": {
        "effectiveRange": "Teiste allikate järgi sihik kuni 600m."
      },
      "sources": [
        {"name": "Modern Firearms: RShG-1", "url": "https://modernfirearms.net/en/grenade-launchers/russia-grenade-launchers/rshg-1-eng/", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-A": {
      "status": "unverified",
      "values": {
        "caliber": 72.5,
        "cartridge": "72,5mm termobaariline rakett",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Wikipedia: efektiivne 90m, max 450m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-D": {
      "status": "unverified",
      "values": {
        "caliber": 72.5,
        "cartridge": "72,5mm suitsulaeng (valge fosfor)",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Wikipedia: efektiivne 90m, max 450m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "MRO-Z": {
      "status": "unverified",
      "values": {
        "caliber": 72.5,
        "cartridge": "72,5mm süütelaeng",
        "weaponMass": 4.7,
        "weaponLength": 900,
        "effectiveRange": 450
      },
      "notes": {
        "effectiveRange": "Wikipedia: efektiivne 90m, max 450m."
      },
      "sources": [
        {"name": "Wikipedia: MRO-A", "url": "https://en.wikipedia.org/wiki/MRO-A", "retrieved": "2026-10-30"}
      ]
    },
    "RPO-D": {
      "status": "unverified",
      "values": {
        "caliber": 93,
        "cartridge": "93mm suitsulaeng",
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
        "caliber": 93,
        "cartridge": "93mm süütelaeng",
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
    "R-431-AM": {
      "status": "unverified",
      "values": {
        "chassis": "KamAZ 6×6 veok",
        "driveConfig": "6×6",
        "specialEquipment": "Antennimoodul: veoki platvormil kokkupandavad antennid (transpordiasendis), taga kungi/aparatuuriruum. Kasutatakse taktikalise sidesüsteemi P-260 Redut-2US koosseisus"
      },
      "notes": {
        "chassis": "Pildi järgi; täpne KamAZi mudel teadmata."
      },
      "sources": [
        {"name": "GlobalSecurity: Palantin", "url": "https://www.globalsecurity.org/military/world/russia/palatine.htm", "retrieved": "2026-10-30"}
      ]
    }
  }
};
