// WHAT-analüüs (Wheels / Hull / Armament / Turret). Võti = mudeli `cat` väärtus (nt "BMD-2").
// `n` = number annoteeritud pildil (images/what/...). Mitu numbrit: "3/4". Ilma numbrita tunnusel jäta `n` ära.
// "draft": true = mustand (kuvatakse kollase märkega "kontrollimata").
// Pilt on lokaalne ja kuulub offline-assets.json-i. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.WHAT_DATA = {
  "version": 1,
  "models": {
    "BMD-2": {
      "image": "images/what/BMD-2_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        { "n": 1, "text": "Viis „väikeste aukudega” roomikuratast. Toestatud kitsas roomik." }
      ],
      "hull": [
        { "text": "Madal kereosa, kliirensi kõrgus on muudetav." },
        { "n": 2, "text": "„Paadikujuline” esiosa, nina peal lainemurdja." },
        { "n": 3, "text": "Tagaosa nurgaga, „kastikujuline” sisselõige keresse." },
        { "n": 4, "text": "Tuled külgedel ees." },
        { "n": 5, "text": "Mootor taga ja väljalaskeavad taga mõlemas nurgas." }
      ],
      "armament": [
        { "n": 6, "text": "30mm pikk ja peenike automaatkahur." },
        { "n": 7, "text": "Ees paremal nurgas 7,62mm kuulipilduja." },
        { "text": "AT-4 Fagot või AT-5 Spandrel/Konkurs laskeseadmega JTTRK kinnituskoht asub torni peal." }
      ],
      "turret": [
        { "n": 8, "text": "Väike ühekohaline torn." }
      ]
    },
    "BMP-2": {
      "image": "images/what/BMP-2_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        { "n": 1, "text": "Kuuerattaline, „lillemustrilised” roomikurattad." },
        { "text": "Toestatud roomik. Esimese roomikuratta juures 2× amort." }
      ],
      "hull": [
        { "n": 2, "text": "Laskeavad 2+1 mõlemal pool ja 1 laskeava juhi selja taga." },
        { "n": "3/4", "text": "Madal kereosa, terav nina, nina peal ribid ja lainemurdja." },
        { "n": 5, "text": "Kaks ust masina tagaosas, uste sees kütusepaagid." },
        { "n": 6, "text": "Mootor ja väljalaskeava ees paremal." },
        { "n": 7, "text": "Tuled ees nurkades." },
        { "n": 8, "text": "Taga keskel kere laes 2× pealmist luuki." }
      ],
      "armament": [
        { "n": 10, "text": "Pearelv pikk ja peenike – 30mm kiirlaskekahur." },
        { "text": "BMP-2M: lahingumoodul B05YA01 „Berežok”: 30mm automaatkahur, 30mm automaatgranaadiheitja, 7,62mm kuulipilduja, 4 × JTTR 9M120 „Ataka” (AT-9 „Spiral-2”) või 4 × JTTR 9M133 „Kornet” (AT-14 „Spriggan”)." }
      ],
      "turret": [
        { "n": 11, "text": "Torn suur ja 2-kohaline (sihtur vasakul, ülem paremal)." },
        { "text": "Torni peal JTTRK laskealus." },
        { "text": "Suitsugranaadiheitjad üldjuhul tornil." }
      ]
    }
  }
};
