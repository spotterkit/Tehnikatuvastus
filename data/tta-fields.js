// TTA väljade sõnastik. Uue välja lisamiseks lisa siia üks rida – äpi koodi muutma ei pea.
// type: "number" (ühik `unit`), "range" ({ "min": .., "max": .. }, ühik `unit`), "text", "boolean".
// comparable: true = sobib võrdlusse (range võrreldakse max järgi).
// better: "higher" | "lower" = võrdluses tõstetakse esile parem väärtus; puudub = ei hinnata (nt mass, mõõtmed).
// Sektsiooni comparePriority: väiksem number = võrdluses eespool ja alati nähtav; ilma selleta = "Kõik andmed" all.
// Sisu hoia puhta JSON-ina (jutumärgid võtmete ümber, lõpukomasid pole) – check_release.js kontrollib.
window.TTA_FIELDS = {
  "version": 4,
  "sections": [
    {"id": "general", "label": "Üldandmed"},
    {"id": "mobility", "label": "Liikuvus"},
    {"id": "armament", "label": "Relvastus", "comparePriority": 1},
    {"id": "ranges", "label": "Laskekaugused", "comparePriority": 2},
    {"id": "protection", "label": "Kaitse"}
  ],
  "fields": {
    "crew": {"label": "Meeskond", "type": "text", "section": "general", "order": 10},
    "chassis": {"label": "Šassii", "type": "text", "section": "general", "order": 15},
    "combatWeight": {"label": "Lahingumass", "type": "number", "section": "general", "order": 20, "unit": "t", "comparable": true},
    "weightKg": {"label": "Mass lahinguasendis", "type": "number", "section": "general", "order": 22, "unit": "kg", "comparable": true},
    "length": {"label": "Pikkus", "type": "number", "section": "general", "order": 30, "unit": "m", "comparable": true},
    "width": {"label": "Laius", "type": "number", "section": "general", "order": 40, "unit": "m", "comparable": true},
    "height": {"label": "Kõrgus", "type": "number", "section": "general", "order": 50, "unit": "m", "comparable": true},
    "engine": {"label": "Mootor", "type": "text", "section": "mobility", "order": 10},
    "power": {"label": "Võimsus", "type": "number", "section": "mobility", "order": 20, "unit": "hj", "comparable": true, "better": "higher"},
    "maxSpeedRoad": {"label": "Max kiirus (maantee)", "type": "number", "section": "mobility", "order": 30, "unit": "km/h", "comparable": true, "better": "higher"},
    "maxSpeedOffroad": {"label": "Max kiirus (maastik)", "type": "number", "section": "mobility", "order": 40, "unit": "km/h", "comparable": true, "better": "higher"},
    "maxSpeedWater": {"label": "Max kiirus (vees)", "type": "number", "section": "mobility", "order": 50, "unit": "km/h", "comparable": true, "better": "higher"},
    "range": {"label": "Sõiduulatus", "type": "number", "section": "mobility", "order": 60, "unit": "km", "comparable": true, "better": "higher"},
    "amphibious": {"label": "Ujuv", "type": "boolean", "section": "mobility", "order": 70},
    "gradient": {"label": "Tõusunurk", "type": "number", "section": "mobility", "order": 72, "unit": "%", "comparable": true, "better": "higher"},
    "sideSlope": {"label": "Külgkalle", "type": "number", "section": "mobility", "order": 73, "unit": "%", "comparable": true, "better": "higher"},
    "verticalStep": {"label": "Vertikaalne takistus", "type": "number", "section": "mobility", "order": 74, "unit": "m", "comparable": true, "better": "higher"},
    "trench": {"label": "Kraavi laius", "type": "number", "section": "mobility", "order": 75, "unit": "m", "comparable": true, "better": "higher"},
    "fording": {"label": "Koolme sügavus", "type": "number", "section": "mobility", "order": 76, "unit": "m", "comparable": true, "better": "higher"},
    "airDroppable": {"label": "Langevarjuga heidetav", "type": "boolean", "section": "mobility", "order": 80},
    "caliber": {"label": "Kaliiber", "type": "number", "section": "armament", "order": 5, "unit": "mm", "comparable": true},
    "mainArmament": {"label": "Põhirelvastus", "type": "text", "section": "armament", "order": 10},
    "atgm": {"label": "Tankitõrjeraketid", "type": "text", "section": "armament", "order": 20},
    "atgmPenetration": {"label": "TTRK soomuseläbivus", "type": "text", "section": "armament", "order": 25},
    "launchTubes": {"label": "Torude arv", "type": "number", "section": "armament", "order": 26, "unit": " tk", "comparable": true, "better": "higher"},
    "salvoTime": {"label": "Täissalvo aeg", "type": "number", "section": "armament", "order": 27, "unit": "s", "comparable": true, "better": "lower"},
    "rateOfFire": {"label": "Laskekiirus (max)", "type": "number", "section": "armament", "order": 28, "unit": " lasku/min", "comparable": true, "better": "higher"},
    "secondaryArmament": {"label": "Lisarelvastus", "type": "text", "section": "armament", "order": 30},
    "mainGunRange": {"label": "Pearelv (kahur)", "type": "number", "section": "ranges", "order": 5, "unit": "m", "comparable": true, "better": "higher"},
    "atgmRange": {"label": "Tankitõrjeraketid", "type": "range", "section": "ranges", "order": 10, "unit": "m", "comparable": true, "better": "higher"},
    "cannonRangeArmored": {"label": "Kahur – kergsoomustatud sihtmärk", "type": "number", "section": "ranges", "order": 20, "unit": "m", "comparable": true, "better": "higher"},
    "cannonRangeSoft": {"label": "Kahur – soomustamata sihtmärk", "type": "number", "section": "ranges", "order": 30, "unit": "m", "comparable": true, "better": "higher"},
    "cannonRangeAir": {"label": "Kahur – õhusihtmärk", "type": "number", "section": "ranges", "order": 40, "unit": "m", "comparable": true, "better": "higher"},
    "hmgRange": {"label": "Raskekuulipilduja – maasihtmärk", "type": "number", "section": "ranges", "order": 45, "unit": "m", "comparable": true, "better": "higher"},
    "hmgRangeAir": {"label": "Raskekuulipilduja – õhusihtmärk", "type": "number", "section": "ranges", "order": 46, "unit": "m", "comparable": true, "better": "higher"},
    "mgRange": {"label": "Kuulipilduja", "type": "number", "section": "ranges", "order": 50, "unit": "m", "comparable": true, "better": "higher"},
    "directFireRange": {"label": "Otsetule kaugus", "type": "number", "section": "ranges", "order": 55, "unit": "m", "comparable": true, "better": "higher"},
    "firingRangeMin": {"label": "Min laskekaugus", "type": "number", "section": "ranges", "order": 58, "unit": "km", "comparable": true},
    "firingRange": {"label": "Max laskekaugus – põhimoon", "type": "number", "section": "ranges", "order": 60, "unit": "km", "comparable": true, "better": "higher"},
    "firingRangeBB": {"label": "Max laskekaugus – base bleed mürsk (BB)", "type": "number", "section": "ranges", "order": 61, "unit": "km", "comparable": true, "better": "higher"},
    "firingRangeExt": {"label": "Max laskekaugus – rakettkiirendiga mürsk (RAP)", "type": "number", "section": "ranges", "order": 62, "unit": "km", "comparable": true, "better": "higher"},
    "firingRangeGuided": {"label": "Max laskekaugus – juhitav mürsk", "type": "number", "section": "ranges", "order": 63, "unit": "km", "comparable": true, "better": "higher"},
    "armor": {"label": "Soomus", "type": "text", "section": "protection", "order": 10}
  }
};
