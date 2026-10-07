// WHAT-analüüs (Wheels / Hull / Armament / Turret). Võti = mudeli `cat` väärtus (nt "BMD-2").
// Allikas: WHAT.pptx koolitusslaidid (tabelid võetud otse failist, kirjavead parandatud).
// `n` = number annoteeritud pildil (images/what/...). Mitu numbrit: "3/4". Ilma numbrita tunnusel jäta `n` ära.
// "note" = üldmärkus masina kohta. "related" = alusplatvormi kasutavad mudelid; "cat" olemas → klikitav.
// "draft": true = mustand (kuvatakse kollase märkega "kontrollimata").
// Pilt on lokaalne ja kuulub offline-assets.json-i. Sisu hoia puhta JSON-ina – check_release.js kontrollib.
window.WHAT_DATA = {
  "version": 2,
  "models": {
    "T-62": {
      "image": "images/what/T-62_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Viis suurt „valuvelg“ ratast, rattavalem 3+1+1. Vabalt toetuv roomik üle roomikurataste."}
      ],
      "hull": [
        {"n": 2, "text": "Juht ees vasakul."},
        {"n": 3, "text": "Mootori väljalaskeava taga vasakul."},
        {"n": 4, "text": "Suurema nurgaga esiosa kui uuematel tankidel."},
        {"text": "Aktiivsoomus Kontakt-1"}
      ],
      "armament": [
        {"n": 5, "text": "12,7mm kuulipilduja torni peal paremal ülema luugil."},
        {"n": 6, "text": "Pearelv 115mm. Pearelva kõrval paremal ava 7,62mm kuulipildujale. Pearelva peal laserkaugusmõõtja."}
      ],
      "turret": [
        {"n": 7, "text": "Ovaalne valatud torn."},
        {"n": 8, "text": "Prožektor pearelvast kõrgemal paremal."},
        {"n": 9, "text": "T-62M torni esiosas lisasoomus."},
        {"text": "Aktiivsoomus Kontakt-1. Torni tagumisel küljel üleval keskel luuk."}
      ]
    },
    "T-72": {
      "image": "images/what/T-72_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuus ratast, „valuvelg“ tüüpi veermik."}
      ],
      "hull": [
        {"n": 2, "text": "Juht ees keskel, 1× vaatlusava."},
        {"n": 3, "text": "Mootori väljalaskeava taga vasakul."},
        {"n": 4, "text": "Kere tagumises osas kaks kõrvuti paiknevat mootorikatte võre."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ],
      "armament": [
        {"n": 5, "text": "12,7mm kuulipilduja."},
        {"n": 6, "text": "Pearelv 125mm. Pearelva kõrval paremal ava 7,62mm kuulipildujale."}
      ],
      "turret": [
        {"n": 7, "text": "Aktiivsoomuse all ovaalne valatud torn."},
        {"n": 8, "text": "Torni tagaosas paiknev silindriline snorklitoru"},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ]
    },
    "T-80": {
      "image": "images/what/T-80_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuus süvendatud profiiliga ratast, grupeeritud 2+2+2."}
      ],
      "hull": [
        {"n": 2, "text": "Juht ees keskel, 3× vaatlusava."},
        {"n": 3, "text": "Mootori väljalase taga keskel."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ],
      "armament": [
        {"n": 4, "text": "12,7mm kuulipilduja."},
        {"n": 5, "text": "Pearelv 125mm. Pearelva kõrval paremal ava 7,62mm kuulipildujale."}
      ],
      "turret": [
        {"n": 6, "text": "Aktiivsoomuse all ovaalne valatud torn."},
        {"n": 7, "text": "Torni tagaosas paiknev silindriline snorklitoru – suurem kui T-72."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ]
    },
    "T-90A": {
      "image": "images/what/T-90A_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuus ratast, „valuvelg“ tüüpi veermik."}
      ],
      "hull": [
        {"n": 2, "text": "Juht ees keskel, 1× vaatlusava."},
        {"n": 3, "text": "Juhi vaateväljas soomuse sisselõige/„vuntsid“."},
        {"n": 4, "text": "Mootori väljalaskeava taga vasakul."},
        {"n": 5, "text": "Kere tagumises osas kaks kõrvuti paiknevat mootorikatte võre."},
        {"text": "T-90 põhineb T-72 tanki šassiil."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ],
      "armament": [
        {"n": 6, "text": "12,7mm kuulipilduja."},
        {"n": 7, "text": "Pearelv 125mm. Pearelva kõrval paremal ava 7,62mm kuulipildujale."}
      ],
      "turret": [
        {"n": 8, "text": "Keevitatud, nurgeline torn, „teemanti“ kujuga. T-90A torn väiksem kui T-90M."},
        {"n": 9, "text": "Štora tuled mõlemal pool pearelva (mitte kõigil)."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ]
    },
    "T-90M": {
      "image": "images/what/T-90M_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuus ratast, „valuvelg“ tüüpi veermik."}
      ],
      "hull": [
        {"n": 2, "text": "Juht ees keskel, 1× vaatlusava."},
        {"n": 3, "text": "Mootori väljalaskeava taga vasakul."},
        {"n": 4, "text": "Kere tagumises osas kaks kõrvuti paiknevat mootorikatte võre."},
        {"text": "T-90 põhineb T-72 tanki šassiil."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ],
      "armament": [
        {"n": 5, "text": "12,7mm distantsjuhitav kuulipilduja."},
        {"n": 6, "text": "Pearelv 125mm."}
      ],
      "turret": [
        {"n": 7, "text": "Suur, pikendatud tagaosaga, keevitatud, nurgeline torn, „teemanti“ kujuga."},
        {"text": "Aktiivsoomus Kontakt-1/Kontakt-5/Relikt."}
      ]
    },
    "BMP-1": {
      "image": "images/what/BMP-1_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuuerattaline, „lillemustrilised“ roomikurattad."},
        {"text": "Esimese roomikuratta juures 1× amort. Toestatud roomik."}
      ],
      "hull": [
        {"n": 2, "text": "Kolm + üks laskeava mõlemal küljel"},
        {"n": "3/4", "text": "Madal kereosa, terav nina, nina peal ribid ja lainemurdja. Tuled ees nurkades."},
        {"n": 5, "text": "Kaks ust masina tagaosas, uste sees kütusepaagid."},
        {"n": 6, "text": "Mootori väljalaskeava ees paremal küljel."},
        {"n": 7, "text": "Komandöri luuk ees vasakul, juhi taga"},
        {"n": 8, "text": "Taga keskel kere laes 4× luuki."},
        {"n": 9, "text": "Tuled ees nurkades."}
      ],
      "armament": [
        {"n": 10, "text": "73mm kahur 2A28 „GROM“"},
        {"n": "10a", "text": "Uuematel versioonidel AT-4 JTTRK kinnitus tornil."}
      ],
      "turret": [
        {"n": 11, "text": "Väike ühekohaline torn."},
        {"text": "BRM-1K mudel kasutab suuremat torni, millel on luure- ja vaatlusseadmed. Torn asub kerel rohkem taga pool. Torni taga on radar."}
      ],
      "related": [
        {
          "label": "Kasutavad BMP-1 alusplatvormi",
          "models": [
            {"name": "BMP-1KSh", "cat": "BMP-1KSh"},
            {"name": "BMP-1AM"},
            {"name": "BRM-1K", "cat": "BRM-1K"},
            {"name": "PRP-4A", "cat": "PRP-4"},
            {"name": "PRP-3", "cat": "PRP-3"},
            {"name": "BMP-1P"},
            {"name": "BREM-2", "cat": "BREM-2"}
          ]
        }
      ]
    },
    "BMP-2": {
      "image": "images/what/BMP-2_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuuerattaline, „lillemustrilised“ roomikurattad."},
        {"text": "Toestatud roomik. Esimese roomikuratta juures 2× amorti."}
      ],
      "hull": [
        {"n": 2, "text": "Laskeavad 2+1 mõlemal pool ja 1 laskeava juhi selja taga."},
        {"n": "3/4", "text": "Madal kereosa, terav nina, nina peal ribid ja lainemurdja."},
        {"n": 5, "text": "Kaks ust masina tagaosas, uste sees kütusepaagid"},
        {"n": 6, "text": "Mootor ja väljalaskeava ees paremal."},
        {"n": 7, "text": "Tuled ees nurkades."},
        {"n": 8, "text": "Taga keskel kere laes 2× pealmist luuki."}
      ],
      "armament": [
        {"n": 10, "text": "Pearelv pikk ja peenike – 30mm kiirlaskekahur."},
        {"text": "BMP-2M: Lahingumoodul B05YA01 „Berežok“, 30mm automaatkahur, 30mm automaatgranaadiheitja, 7,62mm kuulipilduja, 4 × JTTR 9M120 „Ataka“, AT-9 „SPIRAL-2“ või 4 × JTTR 9M133 „Kornet“, „AT-14 SPRIGGAN“."}
      ],
      "turret": [
        {"n": 11, "text": "Torn suur ja 2-kohaline (sihtur vasakul, ülem paremal)."},
        {"text": "Torni peal JTTRK laskealus."},
        {"text": "Suitsugranaadiheitjad üldjuhul tornil."}
      ],
      "related": [
        {
          "label": "Kasutavad BMP-2 alusplatvormi",
          "models": [
            {"name": "BMP-2M"},
            {"name": "BMP-2K"}
          ]
        }
      ]
    },
    "BMP-3": {
      "image": "images/what/BMP-3_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "6-rattaline, süvendatud profiiliga roomikurattad, mis on vahedega 2+3+1."},
        {"text": "Toestatud roomik."}
      ],
      "hull": [
        {"n": 2, "text": "Kõrge kereosa, terav nina – lühem ja tömbim võrreldes BMP-1 ja BMP-2ga, lainemurdja nina all."},
        {"n": 3, "text": "Mootor taga ja väljalaskeava taga paremal."},
        {"n": 4, "text": "Nina peal ees keskel 2× tuld („konnasilmad“)."},
        {"n": "5/6", "text": "Kere tagaosa sirge ja pealt kinnine. Meeskond jalastub torni tagant, selleks avab 2-osalised luugid kere pealt ja taga."}
      ],
      "armament": [
        {"n": 7, "text": "Pearelv pikk (100mm, JTTR läbi pearelva), pearelva paremal küljel 30mm kiirlaskekahur ja vasakul 7,62mm kuulipilduja."},
        {"n": 8, "text": "Ees kere mõlemas nurgas 7,62mm kuulipildujad"},
        {"text": "Pearelva peal võib olla laserkaugusmõõtja (uuematel versioonidel, millel on termovõimekus, seda enam ei ole)."}
      ],
      "turret": [
        {"n": 9, "text": "Torn suur ja 2-kohaline (sihtur vasakul, ülem paremal)."},
        {"text": "Torni eesosas mõlemal pool suitsugranaadiheitjad (3+3)."},
        {"text": "Torni peal 1× suurem sihik sihturile."}
      ],
      "related": [
        {
          "label": "Kasutavad BMP-3 alusplatvormi",
          "models": [
            {"name": "9P157 „KRIZANTEMA-S“", "cat": "9P157 Krizantema-S"},
            {"name": "BREM-L"},
            {"name": "BMP-3F"},
            {"name": "9P162 „KORNET-T“", "cat": "9P162 Kornet-T"}
          ]
        }
      ]
    },
    "BTR-80": {
      "image": "images/what/BTR-80_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Neljateljeline ratasmasin."}
      ],
      "hull": [
        {"n": 2, "text": "Laskeavad suunaga diagonaalis ette (3× vasakul ja 4× paremal). Paremal ees 1× laskeava."},
        {"n": 3, "text": "Summutid taga mõlemas nurgas, horisontaalasendis."},
        {"n": "4/5", "text": "Keskmise kõrgusega kereosa, esiosa astmega, tagumine osa sirge."},
        {"n": 6, "text": "Teise ja kolmanda telje vahel 2-osaline jalastumisluuk."},
        {"n": 7, "text": "Lainemurdja nina peal."},
        {"n": 8, "text": "Ees ninas vintsiluuk."},
        {"n": 9, "text": "Antenn parema ukse juures (BTR-80K 2× antenni + mast)."},
        {"n": 10, "text": "Tilgakujuline üheosaline sõukruvikate."}
      ],
      "armament": [
        {"n": 11, "text": "Pearelv on raskekuulipilduja (14,5mm)."},
        {"n": 12, "text": "Pearelva peal ümmargune prožektor."}
      ],
      "turret": [
        {"n": 13, "text": "Ühekohaline väike torn."},
        {"n": 14, "text": "Torni taga suitsugranaadiheitjad."}
      ],
      "related": [
        {
          "label": "Kasutavad BTR-80 alusplatvormi",
          "models": [
            {"name": "RKhM-6", "cat": "RKhM-6"},
            {"name": "RKhM-4", "cat": "RKhM-4"},
            {"name": "BTR-80K"},
            {"name": "2S23", "cat": "2S23 NONA-SVK"},
            {"name": "BREM-K", "cat": "BREM-K"}
          ]
        },
        {
          "label": "Mudelid, mis kasutavad K1Š1 – BTR-80 šassiil põhinevat kõrgendatud kerega alusplatvormi",
          "models": [
            {"name": "1V152"},
            {"name": "R-166-0,5", "cat": "R-166-0,5"},
            {"name": "RB-531B", "cat": "RB-531B Infauna"},
            {"name": "R-149BMR", "cat": "R-149BMR"},
            {"name": "BMM-3"}
          ]
        }
      ]
    },
    "BTR-82A": {
      "image": "images/what/BTR-82A_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"text": "Neljateljeline ratasmasin."}
      ],
      "hull": [
        {"text": "BTR-82 põhineb BTR-80 šassiil."},
        {"n": 1, "text": "Taga nurkades snorklid, kui snorkleid ei ole küljes, siis on näha snorkli kinnitusklambreid."},
        {"n": 2, "text": "Parempoolsel küljel on eemaldatud üks laskeava (juhist paremal)."}
      ],
      "armament": [
        {"n": 3, "text": "Pearelv on 30mm automaatkahur 2A72 + 7,62mm PKTM."},
        {"n": 4, "text": "Pearelva peal kandilise kujuga laserprožektor."},
        {"text": "Öövaatlusvõimekus komandöril, sihturil ja juhil. Laserkaugusmõõdik, positsioneerimissüsteem „TRONA.1“"}
      ],
      "turret": [
        {"n": 5, "text": "Kõrge torn."},
        {"n": 6, "text": "Torni esiosale on lisatud täiendav soomuskilp."},
        {"text": "Nii BTR-80 kui ka BTR-82 3× + 3× suitsugranaadiheitjad pearelva külgedel."}
      ]
    },
    "MT-LB": {
      "image": "images/what/MT-LB_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Roomikmasin, 6 kinnist „lillemustriga“ roomikuratast. Vabalt toetuv roomik üle roomikurataste."},
        {"text": "MT-LBV on laiendatud roomikutega versioon."}
      ],
      "hull": [
        {"text": "Madala kõrgusega kere osa."},
        {"n": 2, "text": "Astmega kitsenev esiosa, lainemurdja nina all."},
        {"n": 3, "text": "Tagumine osa sirge, uksed taga."},
        {"n": 4, "text": "Peal 2× luuki ja suur mootorikatte luuk."},
        {"n": 5, "text": "Mootori õhuvõtuava vasakul kere peal, juhi taga."},
        {"n": 6, "text": "1× antenn paremal torni taga."},
        {"n": 7, "text": "Ees poritiibade peal tuled, lisaks kahe vaatlusakna vahel keskel kolmas tuli."}
      ],
      "armament": [
        {"n": 8, "text": "7,62mm kuulipilduja."},
        {"text": "MT-LBVM = 12,7mm raskekuulipilduja."},
        {"text": "MT-LBVMK = 12,7mm raskekuulipilduja."},
        {"text": "MT-LBMB = 30mm automaatkahur."}
      ],
      "turret": [
        {"n": 9, "text": "Väike torn ees paremal (ülema positsioonil)."},
        {"text": "MT-LBMA kasutab BTR-80 torni."},
        {"text": "MT-LBMB kasutab BTR-80A torni."}
      ],
      "related": [
        {
          "label": "Kasutavad MT-LB alusplatvormi",
          "models": [
            {"name": "MT-LBVMK", "cat": "MT-LBVMK"},
            {"name": "MT-LBV"},
            {"name": "MT-LBMA"},
            {"name": "SNAR-10", "cat": "SNAR-10"},
            {"name": "UR-77", "cat": "UR-77"},
            {"name": "2S1", "cat": "2S1 Gvozdika"},
            {"name": "9P149", "cat": "9P149 Shturm-S"},
            {"name": "STRELA-10", "cat": "STRELA-10/SA-13 Gopher"},
            {"name": "MT-LBMB"}
          ]
        }
      ]
    },
    "BMO-T": {
      "image": "images/what/BMO-T_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Tanki alusplatvorm (T-72). 6 ratast, „valuvelg“ tüüpi veermik. Toestatud roomik."}
      ],
      "hull": [
        {"n": 2, "text": "Kõrge kereosa, taga „kastkujuline“ sisselõige keresse. Mootor taga keskel, meeskond jalastub üle mootori."},
        {"n": 3, "text": "Mootori väljalaskeava taga vasakul."},
        {"n": 4, "text": "Juht ees keskel."},
        {"n": 5, "text": "12× suitsugranaadiheitjat."},
        {"text": "Komposiitsoomus + aktiivsoomus Kontakt-5."}
      ],
      "armament": [
        {"n": 6, "text": "12,7mm Kord raskekuulipilduja."},
        {"text": "Mahutab 32× RPO-A „Shmel“ leegiheitjat."},
        {"text": "Öövaatlusvõimekus."}
      ],
      "turret": [
        {"text": "Puudub."}
      ]
    },
    "MT-LBu": {
      "image": "images/what/MT-LBu_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Roomikmasin, 7 kinnist „lillemustriga“ roomikuratast."}
      ],
      "hull": [
        {"text": "Kõrge kereosa. Taga paremal paljudel versioonidel väline generaator eriseadmetele energia tootmiseks."},
        {"n": 2, "text": "Suhteliselt lame masina esiosa. Lainemurdja esiosa all."},
        {"n": 3, "text": "Tagumine osa sirge, uks võib paikneda keskel või pisut vasakul."},
        {"n": 4, "text": "Mootor juhi selja taga kere keskel ja vasakul."}
      ],
      "armament": [
        {"text": "Puudub."}
      ],
      "turret": [
        {"text": "Puudub."}
      ],
      "related": [
        {
          "label": "Mudelid, mis kasutavad MT-LBu alusplatvormi (osad näited)",
          "models": [
            {"name": "PPRU-M1", "cat": "PPRU-1"},
            {"name": "ZOOPARK-1", "cat": "ZOOPARK-1"},
            {"name": "1RL243 „RUBIKON“", "cat": "1RL243 Rubikon (MASRR)"},
            {"name": "R-330BM", "cat": "R-330B"},
            {"name": "SPRM-2M"},
            {"name": "R-166-1B"},
            {"name": "ARK-1M", "cat": "ARK-1"},
            {"name": "1V12"}
          ]
        }
      ]
    },
    "BTR-60": {
      "image": "images/what/BTR-60_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "note": "Baasversioon üldiselt enam kasutuses ei ole. BTR-60 on aga alusplatvormiks mitmetele kasutuses olevatele erisoomukitele.",
      "wheels": [
        {"n": 1, "text": "Neljateljeline ratasmasin."}
      ],
      "hull": [
        {"n": 2, "text": "Tömp ninaosa, lainemurdja nina all."},
        {"n": 3, "text": "Kõrge kereosa, tagumine kereosa langeva nurga all. Mootorid kere tagumises osas."},
        {"n": 4, "text": "Jalastumisluugid kere mõlemal küljel. Vasakul küljel paikneb keskel, paremal kere eespool."},
        {"n": 5, "text": "Kaks summutit taga mõlemal küljel suunatud 45-kraadise nurgaga alla."},
        {"n": 6, "text": "Mõlemal küljel 3× U-kujulist jalatuge rataste vahel."},
        {"n": 7, "text": "Kaheosaline sõukruvi kate."}
      ],
      "armament": [
        {"n": 8, "text": "7,62mm või 14,5mm kuulipilduja."}
      ],
      "turret": [
        {"n": 9, "text": "Ühekohaline väike torn."}
      ],
      "related": [
        {
          "label": "Kasutavad BTR-60 alusplatvormi",
          "models": [
            {"name": "R-145BM", "cat": "R-145BM"},
            {"name": "R-145BM1"},
            {"name": "1V18", "cat": "1V18"}
          ]
        }
      ]
    },
    "BMD-2": {
      "image": "images/what/BMD-2_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Viis „väikeste aukudega“ roomikuratast. Toestatud kitsas roomik."}
      ],
      "hull": [
        {"text": "Madal kereosa, kliirensi kõrgus on muudetav."},
        {"n": 2, "text": "„Paadikujuline“ esiosa, nina peal lainemurdja."},
        {"n": 3, "text": "Tagaosa nurgaga, „kastikujuline“ sisselõige keresse."},
        {"n": 4, "text": "Tuled külgedel ees."},
        {"n": 5, "text": "Mootor taga ja väljalaskeavad taga mõlemas nurgas."}
      ],
      "armament": [
        {"n": 6, "text": "30mm pikk ja peenike automaatkahur."},
        {"n": 7, "text": "Ees paremal nurgas 7,62mm kuulipilduja."},
        {"text": "AT-4 Fagot või AT-5 Spandrel/Konkurs laskeseadmega ja JTTRK kinnituskoht asub torni peal."}
      ],
      "turret": [
        {"n": 8, "text": "Väike ühekohaline torn."}
      ],
      "related": [
        {
          "label": "Kasutavad BMD-2 alusplatvormi",
          "models": [
            {"name": "BMD-2K-AU"},
            {"name": "BMD-2K"},
            {"name": "BMD-2M"}
          ]
        }
      ]
    },
    "BMD-4M": {
      "image": "images/what/BMD-4M_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Viis süvendatud profiiliga roomikuratast. Toestatud kitsas roomik."}
      ],
      "hull": [
        {"text": "Keskmise kõrgusega kereosa, kliirensi kõrgus on muudetav."},
        {"n": 2, "text": "Sirge esiosa, nina peal väike lainemurdja."},
        {"n": 3, "text": "Tagaosa sirge, „kastikujuline“ sisselõige keresse."},
        {"n": 4, "text": "Mootor taga ja väljalaskeava taga paremal küljel."},
        {"n": 5, "text": "Tuled külgedel ees."}
      ],
      "armament": [
        {"n": 6, "text": "Pearelv pikk 100mm kahur. Pearelva paremal küljel 30mm automaatkahur ja vasakul küljel 7,62mm kuulipilduja."}
      ],
      "turret": [
        {"n": 7, "text": "Suur ja kandiline kahekohaline torn (ülem paremal, sihtur vasakul)."},
        {"n": 8, "text": "Torni peal 2× sihikute kompleksi."}
      ]
    },
    "BTR-D": {
      "image": "images/what/BTR-D_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Kuus „väikeste aukudega“ roomikuratast. Toestatud kitsas roomik."}
      ],
      "hull": [
        {"text": "Madal kereosa, kliirensi kõrgus on muudetav."},
        {"n": 2, "text": "Paadi kujuline esiosa, nina peal lainemurdja."},
        {"n": 3, "text": "Tagaosa nurgaga, „kastikujuline“ sisselõige keresse."},
        {"n": 4, "text": "Mootor taga ja väljalaskeavad taga mõlemas nurgas."},
        {"n": 5, "text": "Kere peal keskel ees prožektor."},
        {"n": 6, "text": "Tuled ees külgedel."},
        {"n": 7, "text": "Baasversioonil 1× antenn kereosa taga vasakul."}
      ],
      "armament": [
        {"n": 8, "text": "Mõlemas eesmises nurgas 7,62mm kuulipildujad."}
      ],
      "turret": [
        {"text": "Torn puudub, aga BTR-D on alusplatvormiks mitmetele erisoomukitele, millest osad on tornimooduliga."}
      ],
      "related": [
        {
          "label": "Kasutavad BTR-D alusplatvormi (osad näited)",
          "models": [
            {"name": "BTR-RD", "cat": "BTR-RD"},
            {"name": "BMD-1KSh", "cat": "BMD-1Ksh"},
            {"name": "2S9", "cat": "2S9 Nona"},
            {"name": "BMRD R-149"},
            {"name": "R-440 ODB", "cat": "R-440 ODB"},
            {"name": "BMD-1R"},
            {"name": "1V119", "cat": "1V119"}
          ]
        }
      ]
    },
    "BTR-MDM": {
      "image": "images/what/BTR-MDM_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Viis süvendatud profiiliga roomikuratast. Toestatud kitsas roomik."}
      ],
      "hull": [
        {"text": "Kõrge kereosa, kliirens on muudetav."},
        {"n": 2, "text": "Sirge ja lame esiosa, nina peal väike lainemurdja."},
        {"n": 3, "text": "Tagaosa sirge, „kastikujuline“ sisselõige keresse. Taga jalastumisluuk."},
        {"n": 4, "text": "Katusel 2× luuki."},
        {"n": 5, "text": "Mootor taga, väljalaskeava taga paremal küljel."},
        {"n": 6, "text": "Ees 2×2 suitsugranaadiheitjat."},
        {"n": 7, "text": "Tuled ees nurkades."}
      ],
      "armament": [
        {"n": 8, "text": "Ülema positsiooni juures, vasakul ees 7,62mm kuulipilduja ja prožektor."},
        {"n": 9, "text": "Paremal ees nurgas 7,62mm kuulipilduja."}
      ],
      "turret": [
        {"text": "Torn puudub."}
      ]
    },
    "2S1 Gvozdika": {
      "image": "images/what/2S1_Gvozdika_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Roomikmasin, 7 kinnist „lillemustriga“ roomikuratast. Vabalt toetuv roomik üle roomikurataste."}
      ],
      "hull": [
        {"n": 2, "text": "Madala kõrgusega kereosa ja lauge esiosa."},
        {"n": 3, "text": "Ees ninal rauatugi pearelvale"},
        {"n": 4, "text": "Taga 1× suur uks."},
        {"text": "Mootor ja väljalaskeava ees paremal."}
      ],
      "armament": [
        {"n": 5, "text": "Pearelv 122mm. Pearelv suhteliselt lühike ning raua ots ei ulatu kere esiosast kaugemale."},
        {"n": 6, "text": "Pearelva peal 2× kaetud amortisaatorit."}
      ],
      "turret": [
        {"n": 7, "text": "Torn madal, kereosa keskosast pisut taga pool."}
      ]
    },
    "2S3 Akatsiya": {
      "image": "images/what/2S3_Akatsiya_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Roomikmasin, 6 kinnist „valuvelg“ roomikuratast, veermiku valem 1+1+4. Toestatud roomik."}
      ],
      "hull": [
        {"n": 2, "text": "Madala kõrgusega kereosa ja lauge esiosa."},
        {"n": 3, "text": "Kere tagaosa sisselõikega ja kitsenev"},
        {"n": 4, "text": "Taga uksi ei ole, ainult luugid laskemoona sisse andmiseks."},
        {"n": 5, "text": "Mootor ja väljalaskeava ees paremal."},
        {"n": 6, "text": "Ees ninal rauatugi pearelvale."}
      ],
      "armament": [
        {"n": 7, "text": "Pearelv 152mm. Raua ots ulatub kere esiosast kaugemale."},
        {"n": 8, "text": "Pearelva peal 2× amortisaatorit."}
      ],
      "turret": [
        {"n": 9, "text": "Torn keskmise kõrgusega, kereosa tagaosas, tagumise kereosaga joonel."},
        {"n": 10, "text": "Torni paremal küljel meeskonnaluuk."}
      ]
    },
    "2S19 Msta": {
      "image": "images/what/2S19_Msta_what.webp",
      "source": "Tehnikatuvastuse koolitusslaid",
      "wheels": [
        {"n": 1, "text": "Roomikmasin, 6 kinnist roomikuratast. Toestatud roomik. T-80 veermik."}
      ],
      "hull": [
        {"n": 2, "text": "T-72 alusplatvorm."},
        {"n": 3, "text": "Ees ninal suur rauatugi pearelvale."},
        {"n": 4, "text": "Mootor taga ja väljalase taga vasakul."}
      ],
      "armament": [
        {"n": 5, "text": "Pearelv väga pikk 152mm."},
        {"n": 6, "text": "Pearelva peal 2× amortisaatorit."},
        {"n": 7, "text": "12,7mm raskekuulipilduja ees paremal luugil."}
      ],
      "turret": [
        {"n": 8, "text": "Torn väga kõrge ja suur"},
        {"n": 9, "text": "Meeskonna luugid mõlemal küljel."},
        {"n": 10, "text": "Torni eesosas suitsugranaadiheitjad 3× mõlemal pool pearelva."},
        {"n": 11, "text": "Torni tagaosas laskemoona laadimismehhanism."}
      ]
    }
  }
};
