# Kureeritud test – nõuded (vahekokkuvõte)

8. oktoober 2026

## Eesmärk ja kasutusolukord

Uus funktsioon „Kureeri test“ tuleb avalehe jaotisse Testid, praeguse „Genereeri test“ ja „Genereeri kuldvillak“ kõrvale. Selle abil koostab õpetaja reeglite põhjal pilditesti ja kureerib selle käsitsi üle. Seejärel näitab ta testi klassile projektorilt ning kontrollib õpilaste paberlehti välja prinditud vastuste lehe järgi.

- **Õpetaja:** koostab ja näitab testi oma arvutist, mis on ühendatud projektoriga. Pilt on seinal või tahvlil täisekraanis.
- **Õpilased:** ei kasuta äppi. Nad kirjutavad vastused paberile.
- **Kontroll:** õpetaja kontrollib käsitsi vastuste lehe abil.
- Praegune „Genereeri test“ jääb alles ja muutumatuks, sest see on õppija enesekontrolli tööriist.

## Kinnitatud nõuded

Need nõuded on kasutajaga kokku lepitud ja on tööjuhendi aluseks.

| # | Nõue | Täpsustus |
| --- | --- | --- |
| N1 | Ainult pildiküsimused | Üks küsimus = üks pilt. TTA-, WHAT- ega muid andmeküsimusi ei ole. |
| N2 | Õpilased vastavad paberile | Äpp ei kogu õpilaste vastuseid ega anna hindeid. |
| N3 | Projektorivaade täisekraanis | Õpetaja näitab testi oma arvutist täisekraanis. Vastust ega mudeli nime ekraanil ei ole. |
| N4 | Küsimuse number on alati nähtav | Number on pildi juures selgelt loetavas kohas ja suures kirjas, et seda näeks ka klassi tagant. |
| N5 | Vastuste leht õpetajale | Tekib pärast kureerimist ja on prinditav. Igal real on number, mudel ja täpsustus. |
| N6 | Vastuste lehe rea kuju | `<nr>. <mudel> – <täpsustus>`, näiteks „1. 2S43 Malva – Liikursuurtükk“ ja „2. 9T234-2 – Mitmikraketiheitja Smertš laadimismasin“. |
| N7 | Kureerimine | Õpetaja valib reeglid ja kriteeriumid, vaatab genereeritud testi üle ning saab seda enne kasutamist käsitsi muuta. |
| N8 | Olemasolev funktsionaalsus jääb alles | Genereeri test, kuldvillak, harjutamine, nimekiri, offline ja pildidiagnostika ei muutu. |

Lisandunud nõuded (8.10):

| # | Nõue | Täpsustus |
| --- | --- | --- |
| N9 | Vastuseid kontrollib õpetaja käsitsi | Õpetaja otsustab, milline kirjapilt on õige. Äpp ei halda alternatiivnimesid ega lubatud kirjapilte. |
| N10 | Automaatne või käsitsi liikumine | Kureerimisel valib õpetaja, kas test liigub automaatselt või näitab järgmise pildi alles õpetaja nupuvajutusel. |
| N11 | Üksikute piltide valik | Lisaks kategooriatele ja kogustele saab küsimuseks valida konkreetseid pilte. Kaks viisi on kombineeritavad. |
| N12 | Eelvaates saab pilte muuta | Testi eelvaates saab iga küsimuse pildi eraldi teise vastu vahetada. |
| N13 | Offline ei ole kohustuslik | Kureeritud test võib vajada võrku. Kui see töötab ka offline, on see boonus, mitte eesmärk. |
| N14 | Vahetada saab mis tahes pildi vastu | Pildivalijas saab valida ükskõik millise mudeli ükskõik millise pildi. Vastus (mudel ja täpsustus) järgib pilti automaatselt. |
| N15 | Automaatrežiimis on kaks aega | **Vaatamisaeg**: pilt on ekraanil. **Kirjutamisaeg**: pilt kaob ja õpilased kirjutavad vastuse. Mõlemal ajal on ekraanil ajariba. |
| N16 | Testi lõpp | Pärast viimast küsimust näidatakse ekraani „Test läbi“. |
| N17 | Projektoris pole failinime ega allikat | Projektorivaates ei ole näha pildi failinime, allikat, autorit ega muud teksti, mis võiks vastuse reeta. See kehtib ka `title`-vihjete ja brauseri tooltip'ide kohta. |
| N18 | Vastuste lehe sisu | Pealkiri „Vastuste leht“ ja read kujul `<nr>. <mudel> – <täpsustus>`. Muud ei ole. Lehe saab printida ja alla laadida. |
| N19 | Kureerimine sammude kaupa | 1) küsimuste arv ja liikumise režiim, 2) konkreetsed pildid, 3) kinnitus, mille järel tekib selle testi vastuste leht. |
| N20 | Allalaadimine = „Salvesta PDF-ina“ | Eraldi allalaadimise funktsiooni ei tehta. Nupp „Prindi / salvesta PDF“ avab brauseri printimisakna, kust saab valida ka „Salvesta PDF-ina“. |
| N21 | Kirjutamisaja ekraan | Pilt kaob. Ekraanil on suur küsimuse number, tekst „Kirjuta vastus“ ja automaatrežiimis ajariba. |
| N22 | Algus nupust | Loendust ei ole. Projektorivaates ootab test, kuni õpetaja vajutab „Alusta“. |
| N23 | Sama tsükkel mõlemas režiimis | Iga küsimus: pilt koos numbriga → „Kirjuta vastus“ → järgmine küsimus. Automaatrežiimis vahetab etappe taimer, käsitsi režiimis õpetaja vajutus (kaks vajutust küsimuse kohta). |
| N24 | Õpilase vastuste leht | Pärast kinnitamist saab printida ka õpilase lehe: „NIMI:“ ja „KUUPÄEV:“ koos joonega, seejärel nummerdatud read joontega. Ridu on täpselt nii palju, kui testis on küsimusi. |
| N25 | Vastuse tekst = sama mis praeguses testis | Vastuste lehel on mudeli täielik nimetus (`label`, nt „AT-5 Spandrel (9K111-1 Konkurs)“) ja täpsustus (`type`). Need on samad väljad, mida „Genereeri test“ näitab vastuse avamisel. Eraldi teksti juurde ei tehta. |

Salvestamine (8.10):

| # | Nõue | Täpsustus |
| --- | --- | --- |
| N26 | Test salvestatakse `.html` failina | Pärast kinnitamist laeb õpetaja alla testifaili, nt `Tehnikatest_2026-10-09_40kys.html`. Topeltklõps avab brauseris Tehnikatuvastuse koos selle testiga. PDF-i ei genereerita, lehed tulevad brauseri printimisaknast (N20). |
| N27 | Kolm asja kindlas järjekorras | Samm 3 juhatab õpetaja järjest läbi: 1) salvesta test, 2) vastuste leht, 3) õpilase leht. Iga nupu juures on lühike selgitus ja tehtud alamsammul linnuke, et protsess oleks ka tehnikakaugele kasutajale arusaadav. |
| N28 | Testi avamine hiljem | Topeltklõps testifailil või varuvariandina avalehe nupp „Ava salvestatud test“ (ka faili lohistamine). Avatud testist saab lehti uuesti printida ja testi alustada. Avamiseks on vaja internetti. |

Täiendused pärast esimest katsetust (8.10):

| # | Nõue | Täpsustus |
| --- | --- | --- |
| N29 | Automaatrežiimi vaikeajad | Vaatamisaeg 15 s, kirjutamisaeg 10 s. |
| N30 | Testi nimi | Õpetaja saab sammus 1 testile nime anda. Nimi on testifaili nimes, faili sees ja projektori avaekraanil. Tühjaks jättes „Tehnikatest + kuupäev“. |
| N31 | Klikitav sammude riba | 1) Seaded 2) Pildid 3) Kinnita ja salvesta on üleval klikitavad. Samm 3 tähendab kinnitamist. |
| N32 | „‹ Tagasi“ nupp | Asendab „‹ Menüü“ nuppu: viib eelmisse sammu, sammust 1 avalehele. Salvestamata testist lahkudes küsitakse kinnitust. |
| N33 | „Täida piltidega“ | Asendab „Täida reeglitega“. Igal kategoorial nupud „Kõik“ ja „0“, lisaks „Tühjenda kõik“. |
| N34 | Küsimuste arv sammus 2 | Küsimuste arvu muudetakse piltide eelvaate päises. Kui valitud pilte on rohkem kui vabu kohti, pakub äpp arvu suurendada. |
| N35 | Muudetud test | Kui test pärast salvestamist muutub, kaovad sammu 3 linnukesed ja äpp hoiatab, et vana fail ja vanad lehed ei kehti. |
| N36 | „Üks pilt mudeli kohta“ | Linnuke peal: maksimum = mudelite arv. Linnuke maas: maksimum = kõigi piltide arv, sama mudel võib tulla mitu korda erineva pildiga. Sama pilt ei kordu kunagi. |
| N37 | Ühtlane jaotus | Kui linnuke on maas, võetakse kõigepealt üks pilt igast mudelist, siis teine ring neist, kellel veel pilte on, jne. |
| N38 | Mudelid ja piltide arv nähtavad | Kategooria nimele klõps näitab mudeleid koos piltide arvuga. Linnukesega saab mudeli välja jätta (asendab eraldi otsingu). |
| N39 | Kordused eelvaates | Rida näitab „pilt 2/5“ ja kui mudel on testis mitu korda, kollast märki „mudel testis 3×“. |
| N40 | „Näita vastuseid“ lõpus | „Test läbi“ ekraanil on „Sulge“ kõrval nupp „Näita vastuseid“: projektorile ilmuvad kõik õiged vastused kujul `<nr>. <mudel> – <täpsustus>`. Sealt „‹ Tagasi“ või „Sulge“. |

N6 kohta: andmetes on juba olemas mudeli nimi (`label`) ja tüüp (`type`), nt `label: "2S43 Malva"`, `type: "Liikursuurtükk"`. Seega saab vastuste lehe rea teha praegustest andmetest ja uut andmevälja pole vaja. Need on samad väljad, mida praegune „Genereeri test“ näitab vastuse avamisel (N25).

## Funktsiooni osad

Kureerimine on kolmesammuline (N19). Seejärel näitab õpetaja testi projektorilt.

1. **Samm 1: põhiseaded** (N29, N30)
   - Testi nimi.
   - Liikumise režiim (N10): **käsitsi** (järgmine etapp nupu- või klahvivajutusel) või **automaatne**.
   - Automaatrežiimis kaks aega (N15): vaatamisaeg (pilt on ekraanil) ja kirjutamisaeg (pilt kaob), mõlemad sekundites.
2. **Samm 2: pildid** (N11, N12, N14, N33, N34)
   - Küsimuste arv (eelvaate päises).
   - **Täida piltidega:** kategooriad (`GROUPS`) koos kogustega, konkreetsete mudelite väljajätmine, kas sama mudel võib korduda, järjekord.
   - **Käsitsi valik:** õpetaja otsib mudeli (sama otsing nagu „Võrdle:“ ribal), näeb selle kõiki pilte ruudustikus ja lisab klikiga konkreetse pildi küsimuseks.
   - **Eelvaade:** nimekiri pisipiltidega, igal real number, pilt, mudel ja täpsustus. Iga rea juures saab **vahetada pildi ükskõik millise mudeli ükskõik millise pildi vastu**, kustutada rea ja muuta rea asukohta. Vastus järgib pilti automaatselt.
   - Iga muudatuse järel nummerdatakse read uuesti.
3. **Samm 3: kinnita ja salvesta** (N5, N6, N18, N20, N24–N27)
   - Kinnitamise järel test lukustub (külmutatud nimekiri: mudeli `cat` + pildifail + liikumise seadistus).
   - Ekraanil on kolm järjestikust alamsammu, igal oma nupp, lühike selgitus ja linnuke pärast tegemist:
     1. **Salvesta test**: laeb alla `.html` testifaili. Selgitus: „Hoia see fail alles. Topeltklõps avab testi hiljem.“
     2. **Vastuste leht**: avab printimisakna. Pealkiri „Vastuste leht“ ja read kujul „1. 2S43 Malva – Liikursuurtükk“. Selgitus: „Prindi või vali printeriks ‚Salvesta PDF-ina‘.“
     3. **Õpilase leht**: avab printimisakna. Lehel on NIMI, KUUPÄEV ja nummerdatud jooned.
   - Järgmine alamsamm tõstetakse esile, kui eelmine on tehtud. Kõiki nuppe saab uuesti vajutada.
   - Linnuke tähendab „nuppu vajutati“. Äpp ei saa kontrollida, kas fail tegelikult salvestati.
   - Lõpus: **Alusta testi kohe** või **Valmis** (test avatakse hiljem failist). Kui õpetaja lahkub testi salvestamata, küsib äpp kinnitust.
   - Muutmiseks saab minna tagasi sammu 2. Pärast muutmist tuleb test ja lehed uuesti salvestada, sest linnukesed lähevad maha.
4. **Projektorivaade** (N3, N4, N15–N17, N21–N23)
   - Täisekraan. Test ootab, kuni õpetaja vajutab **Alusta**. Loendust ei ole.
   - **Iga küsimuse tsükkel:** (a) pilt koos suure numbriga, näiteks „12 / 40“ → (b) pilt kaob, ekraanil suur number ja „Kirjuta vastus“ → (c) järgmine küsimus.
   - **Automaatrežiim:** etappe vahetab taimer (vaatamisaeg, kirjutamisaeg). Ajariba näitab käesoleva etapi aega. Pausi saab teha ja käsitsi liikuda.
   - **Käsitsi režiim:** etappe vahetab õpetaja nooleklahvi, tühiku või PageDown'iga (esitluspult), kaks vajutust küsimuse kohta. Tagasi liigub eelmisse etappi. Ajariba ei ole.
   - Ekraanil pole failinime, allikat, autorit ega tooltip'e (N17).
   - Pärast viimase küsimuse kirjutamisaega tuleb ekraan „Test läbi“ (N16).
   - Kõik pildid laetakse enne algust ette ja olekut näidatakse kujul „38/40 valmis“. „Alusta“ on aktiivne, kui kõik pildid on valmis.
   - Ekraan hoitakse ärkvel (`acquireWakeLock`). Esc või tagasi-nupp ei vii kogemata testist välja.
5. **Testi avamine hiljem** (N26, N28)
   - Topeltklõps testifailil avab brauseris Tehnikatuvastuse koos testiga. Ekraanil on samad nupud: Vastuste leht, Õpilase leht ja Alusta testi.
   - Varuvariant: avalehel nupp **Ava salvestatud test** ja faili lohistamine äpi aknasse.
   - Failis on iga küsimuse kohta mudeli `cat`, pildifail, nimetus (`label`) ja täpsustus (`type`), lisaks liikumise režiim, ajad, koostamise kuupäev ja äpi versioon. Kuna vastuse tekst on failis, saab lehti alati uuesti printida.
   - Avamisel kontrollib äpp, kas kõik pildid on veel olemas. Puuduva kohta annab see teate ja viib asendamiseks sammu 2.
   - Fail sisaldab vastuseid, seega õpilastele seda ei jagata.

## Piirangud ja põhimõtted

Uus funktsioon ehitatakse eraldi moodulina, nii et olemasolev kood ei muutu.

- **Eraldi fail:** kood läheb faili `curated-test.js`, mitte `index.html`-i (~4000 rida). Fail lisatakse service workeri failide nimekirja, `offline-assets.json`-i ja `check_release.js`-i kontrolli.
- **Eraldi olek:** oma olekuobjekt nagu kuldvillakul (`kuldGame`). Praegust `appMode`-i, skoori ega testi ajalugu ei kasutata.
- **Taaskasutus:** `CATEGORIES`, `GROUPS`, `fetchSpecificFile`, võrdluse otsing (`makeComparePicker`), lightboxi täisekraani loogika ja `acquireWakeLock`.
- **Tagasi-nupu kihid:** projektorivaade kasutab olemasolevat `pushLayer`/`popLayer` loogikat ja alati `window.history`.
- **Offline (N13):** ei ole kohustuslik. Kureeritud test võib vajada võrku. Kui `fetchSpecificFile` annab pildi offline-vahemälust, on see boonus. Testimisel tuleb kontrollida ainult, et ülejäänud äpi offline-töö ei katkeks.
- **`localStorage`:** ei kasutata ka kureeritud testis, sest test salvestatakse failina (N26).
- **Andmebaas kasvab:** salvestatud testi avamisel tuleb kontrollida, kas kõik pildid ja mudelid on veel olemas. Puuduva kohta tuleb anda teade ja pakkuda asendust.
- **Release-kord:** `APP_BUILD` ja `SW_VERSION` tõstetakse, `node check_release.js .` peab läbima ja `DATA_NOTES.txt` uuendatakse.
- **Seade:** sihiks on sülearvuti brauser (Chrome, Edge, Firefox). Telefonist näitamine ja printimine ei ole esmane eesmärk.

## Väljaspool ulatust

- TTA-, WHAT- ja muud andmepõhised küsimused.
- Õpilaste vastuste sisestamine äppi, automaatne hindamine ja tulemuste salvestamine.
- A/B variandid. Kõik vaatavad sama projektori pilti, seega pole neid vaja.
- Läbivaatuse režiim, kus pildid näidatakse koos vastustega. Test lõpeb ekraaniga „Test läbi“.
- Esitlejavaade, kus sülearvutis on vastused ja projektoris ainult pilt.
- Piltidele raskusastme määramine, sest andmetes sellist välja pole.
- Vastuste lehel pisipildid, punktide veerg ja alternatiivnimed.

## Lahtised küsimused enne tööjuhendit

- [ ] **Laadimata pilt:** kui mõni pilt ei laadi enne algust, kas „Alusta“ jääb lukku või näidatakse hoiatust („küsimus 7 ei laadinud“) koos võimalusega pilt vahetada?
- [ ] **Reeglid sammus 2:** kas automaatse täitmise reeglid (kategooriad + kogused, väljajätmine, kordumine, järjekord) on piisavad?
- [x] ~~Salvestamine~~: `.html` testifail + printimisaken lehtede jaoks, kindlas järjekorras (N26–N28).
- [x] ~~Projektori liikumine~~: otsustatud (N10, N15, N23).
- [x] ~~Lubatud kirjapildid ja alternatiivnimed~~: otsustatud (N9), õigsuse otsustab õpetaja.
- [x] ~~Offline-töö~~: otsustatud (N13), ei ole kohustuslik.
- [x] ~~A/B variandid~~: ei ole vaja.
- [x] ~~Teise mudeli pilt pildivalijas~~: lubatud (N14).
- [x] ~~Ajariba automaatrežiimis~~: jah, kahe ajaga (N15).
- [x] ~~Testi lõpp~~: ekraan „Test läbi“ (N16).
- [x] ~~Failinimi ja allikas projektoris~~: ei tohi olla näha (N17).
- [x] ~~Vastuste lehe sisu~~: ainult pealkiri ja read (N18).
- [x] ~~Vastuste lehe allalaadimine~~: brauseri „Salvesta PDF-ina“ (N20).
- [x] ~~Kirjutamisaja ekraan~~: number, „Kirjuta vastus“ ja ajariba (N21).
- [x] ~~Ettevalmistuspaus~~: loendust ei ole, õpetaja alustab nupust (N22).
- [x] ~~Pildi peitmine käsitsi režiimis~~: sama tsükkel nagu automaatrežiimis (N23).
- [x] ~~Õpilase vastuseleht~~: jah, NIMI, KUUPÄEV ja nummerdatud jooned (N24).
- [x] ~~Täpsustus~~: sama `label` + `type` mis praeguses testis (N25).
