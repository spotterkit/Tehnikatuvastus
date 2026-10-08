// TTA andmestik. Võti = mudeli `cat` väärtus index.html CATEGORIES-is (nt "BMD-2").
// Kirje kuju ja töövoog: vt DATA_NOTES.txt. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.TTA_DATA = {
  "version": 6,
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
      "warnings": {
        "power": "ODIN/WEG: YaMZ-238M2, 140hj – vastuolus sama lehe võimsuse ja massi suhtega (19,1hj/t ≈ 260hj). Siin Wikipedia andmed."
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
      "warnings": {
        "combatWeight": "ODIN/WEG (BTR-82): 13,6t.",
        "mainArmament": "ODIN/WEG PDF on BTR-82 kohta (14,5mm KPVT). BTR-82A relvastus: Army Technology."
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
      "warnings": {
        "combatWeight": "ODIN/WEG: 11,9t ja 2 + 11 – samad mis MT-LB-l (ilmselt sealt kopeeritud). Siin Wikipedia andmed."
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
      "warnings": {
        "atgmRange": "ODIN/WEG (BMD-4): 9M117M1 Arkan kuni 4000m; Wikipedia: kuni 5500m."
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
        {"name": "U.S. Army ODIN / WEG: BTR-MDM Rakushka-M", "url": "https://odin.t2com.army.mil/WEG/Asset/3af6301b891ad5c873fe2a9a697e1bec", "retrieved": "2026-10-08"},
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
      "warnings": {
        "combatWeight": "ODIN/WEG 40t; Wikipedia 37t (T-62 obr. 1960)."
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
      "warnings": {
        "combatWeight": "Variandist sõltuvalt 41,5–44,5t (Wikipedia T-72A: 41,5t)."
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
      "warnings": {
        "atgmRange": "Allikad lahknevad: ODIN/WEG 4000–5000m, Wikipedia T-90 lehel kuni 6000m."
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
        "power": 1130,
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
      "warnings": {
        "engine": "ODIN/WEG märgib T-90M mootoriks V-92S2 (1000hj) – sama mis T-90A. Siin on Wikipedia andmed (V-92S2F, 1130hj).",
        "combatWeight": "ODIN/WEG 46,5t; Wikipedia 48t."
      },
      "notes": {
        "length": "Kahur ees (Wikipedia); kere 6,68m (ODIN/WEG).",
        "fording": "Ettevalmistusega 5m.",
        "mainGunRange": "APFSDS ja HEAT 3000m; HE 4000m.",
        "secondaryArmament": "ODIN/WEG: NSVT; Wikipedia: Kord.",
        "hmgRange": "Kord."
      },
      "sources": [
        {"name": "U.S. Army ODIN / WEG: T-90M", "url": "https://odin.t2com.army.mil/WEG/Asset/ca2015f698eb0515ae502257e38bfc17", "retrieved": "2026-10-08"},
        {"name": "Wikipedia: T-90", "url": "https://en.wikipedia.org/wiki/T-90", "retrieved": "2026-10-07"},
        {"name": "Wikipedia: Kord machine gun", "url": "https://en.wikipedia.org/wiki/Kord_machine_gun", "retrieved": "2026-10-07"}
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
      "warnings": {
        "power": "Wikipedia: 840hj.",
        "mainArmament": "ODIN/WEG märgib relvaks 2A46 (see on tankikahur) – ilmselt viga; 2S19 relv on 2A64."
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
      "warnings": {
        "firingRange": "Wikipedia: 28km.",
        "firingRangeExt": "Wikipedia: rakettkiirendiga mürsk 33–40km."
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
        "firingRange": "Rakettkiirendiga mürsuga kaugemale (täpset väärtust allikas pole)."
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
      "warnings": {
        "range": "Wikipedia: 405km.",
        "firingRangeMin": "Wikipedia: 5km."
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
      "warnings": {
        "range": "Wikipedia: 850km."
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
    }
  }
};
