#!/usr/bin/env node
// Release-kontroll: jookseb GitHub Actionsis (ja käsitsi: node tools/check_release.js [repo-juur]).
// Ei muuda midagi, ainult kontrollib. Väljub koodiga 1, kui leiab vea.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const errors = [];
const fail = msg => errors.push(msg);
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');

// Täpse tähesuurusega olemasolu kontroll (GitHub Pages on case-sensitive, Windows/macOS mitte).
function existsExact(rel){
  const parts = rel.replace(/^\.\//, '').split('/');
  let dir = root;
  for(const part of parts){
    let names;
    try{ names = fs.readdirSync(dir); }catch(e){ return false; }
    if(!names.includes(part)) return false;
    dir = path.join(dir, part);
  }
  return true;
}

const html = read('index.html');
const sw = read('offline-sw.js');

// 1. Süntaks: offline-sw.js ja iga inline <script> index.html-is.
try{ new vm.Script(sw, {filename:'offline-sw.js'}); }catch(e){ fail('offline-sw.js süntaksiviga: ' + e.message); }
const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
let m, scriptNo = 0;
while((m = scriptRe.exec(html))){
  const attrs = m[1];
  if(/\bsrc\s*=/.test(attrs)) continue;
  const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs);
  if(type && !/^(text|application)\/(javascript|ecmascript)$/i.test(type[1]) && type[1] !== 'module') continue;
  scriptNo++;
  if(type && type[1] === 'module') continue; // module'i vm.Script ei parsi
  try{ new vm.Script(m[2], {filename:'index.html <script #' + scriptNo + '>'}); }
  catch(e){ fail('index.html <script #' + scriptNo + '> süntaksiviga: ' + e.message); }
}

// 2. Versioonid: APP_BUILD ja SW_VERSION peavad klappima.
const appBuild = (/APP_BUILD\s*=\s*'([^']+)'/.exec(html) || [])[1];
const swVersion = (/SW_VERSION\s*=\s*'([^']+)'/.exec(sw) || [])[1];
if(!appBuild) fail('index.html: APP_BUILD puudub');
if(!swVersion) fail('offline-sw.js: SW_VERSION puudub');
if(appBuild && swVersion && swVersion !== 'offline-' + appBuild){
  fail(`Versioonid ei klapi: APP_BUILD='${appBuild}', SW_VERSION='${swVersion}' (oodatud 'offline-${appBuild}')`);
}
if((html.match(/APP_BUILD\s*=\s*'/g) || []).length !== 1) fail('index.html: APP_BUILD peab olema defineeritud täpselt ühes kohas (SW loeb seda regexiga)');

// 3. Media cache nimi ei tohi muutuda (muidu kaovad kasutajate offline-pildid).
const MEDIA_NAME = 'tehnikatuvastus-offline-final-v13';
if(!sw.includes(`MEDIA_CACHE = '${MEDIA_NAME}'`)) fail('offline-sw.js: MEDIA_CACHE nimi on muutunud (peab olema ' + MEDIA_NAME + ')');
if(!html.includes(`OFFLINE_CACHE_NAME = '${MEDIA_NAME}'`)) fail('index.html: OFFLINE_CACHE_NAME on muutunud (peab olema ' + MEDIA_NAME + ')');

// 4. Last-known-good shelli leping: mõlemad pooled peavad teadet toetama.
if(!sw.includes("'shell-healthy'")) fail("offline-sw.js ei käsitle teadet 'shell-healthy'");
if(!html.includes("type:'shell-healthy'")) fail("index.html ei saada teadet 'shell-healthy'");
if(!html.includes('__bootErrors')) fail('index.html: varajane __bootErrors loendur puudub');

// 5. SW fetch-haru järjekord: virtuaalpilt -> navigate -> reload/no-store bypass -> SWR.
const iVirtual = sw.indexOf("'/__offline_image__/'");
const iNav = sw.indexOf("event.request.mode === 'navigate'");
const iBypass = sw.indexOf("event.request.cache === 'reload'");
const iSwr = sw.lastIndexOf('staleWhileRevalidate(event)');
if(!(iVirtual >= 0 && iNav > iVirtual && iBypass > iNav && iSwr > iBypass)) fail('offline-sw.js: fetch-haru järjekord on vale (virtuaalpilt → navigate → reload/no-store → SWR)');

// 6. offline-assets.json: kõik kirjed olemas (täpne tähesuurus), dubleerimata, ja iga index.html-i lokaalne pilt on nimekirjas.
let manifest = [];
try{ manifest = JSON.parse(read('offline-assets.json')); }catch(e){ fail('offline-assets.json ei parsi: ' + e.message); }
if(!Array.isArray(manifest)) { fail('offline-assets.json peab olema massiiv'); manifest = []; }
const seen = new Set();
for(const entry of manifest){
  if(typeof entry !== 'string'){ fail('offline-assets.json: kirje ei ole string: ' + JSON.stringify(entry)); continue; }
  if(seen.has(entry)) fail('offline-assets.json: dubleeriv kirje ' + entry);
  seen.add(entry);
  if(entry === './') continue;
  if(!existsExact(entry)) fail('offline-assets.json viitab puuduvale failile (või vale tähesuurusega): ' + entry);
}
const referenced = new Set();
const imgRe = /["'`(]\s*(?:\.\/)?(images\/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp|gif|svg|avif))/gi;
while((m = imgRe.exec(html))) referenced.add(m[1]);
for(const rel of referenced){
  if(!existsExact(rel)) fail('index.html viitab puuduvale pildile (või vale tähesuurusega): ' + rel);
  if(!seen.has('./' + rel)) fail('Pilt ei ole offline-assets.json-is (offline-is puudu): ./' + rel);
}
for(const required of ['./index.html', './offline-sw.js', './offline-assets.json', './manifest.json']){
  if(!seen.has(required)) fail('offline-assets.json-ist puudub ' + required);
}

// 7. Lokaalsed andmestikud (data/*.js): süntaks, puhas JSON, võtmed = CATEGORIES `cat`, väljad ja tüübid,
//    allikad, WHAT-pildid olemas ja offline-assets.json-is. Puuduv data-fail on viga, kui index.html seda laeb.
const dataNotices = [];
const cats = new Set();
{ const catRe = /\bcat:\s*"([^"]+)"/g; let c; while((c = catRe.exec(html))) cats.add(c[1]); }
function loadDataFile(rel, globalName){
  if(!html.includes('src="./' + rel + '"')) return null;          // äpp ei kasuta seda faili
  if(!existsExact(rel)){ fail('index.html laeb puuduva faili: ' + rel); return null; }
  const text = read(rel);
  const sandbox = {window:{}};
  try{ vm.runInNewContext(text, sandbox, {filename: rel}); }
  catch(e){ fail(rel + ' süntaksiviga: ' + e.message); return null; }
  const value = sandbox.window[globalName];
  if(!value || typeof value !== 'object'){ fail(rel + ': window.' + globalName + ' puudub'); return null; }
  const body = text.slice(text.indexOf('window.' + globalName)).replace(/^window\.\w+\s*=\s*/, '').trim().replace(/;$/, '');
  try{ JSON.parse(body); }catch(e){ fail(rel + ': sisu ei ole puhas JSON (' + e.message + ')'); }
  if(!seen.has('./' + rel)) fail(rel + ' ei ole offline-assets.json-is');
  if(!sw.includes("'./" + rel + "'")) fail(rel + ' ei ole offline-sw.js OPTIONAL_APP_ASSETS-is');
  return value;
}
const hasHttps = list => (list || []).some(s => s && /^https:\/\//.test(String(s.url || '')));
const isNum = v => typeof v === 'number' && Number.isFinite(v);
const TYPE_OK = {
  number: isNum,
  text: v => typeof v === 'string' && v.trim() !== '',
  boolean: v => typeof v === 'boolean',
  range: v => v && typeof v === 'object' && isNum(v.max) && (v.min === undefined || (isNum(v.min) && v.min <= v.max))
};
const ttaFields = loadDataFile('data/tta-fields.js', 'TTA_FIELDS');
const ttaData = loadDataFile('data/tta.js', 'TTA_DATA');
const whatData = loadDataFile('data/what.js', 'WHAT_DATA');
if(ttaFields && ttaData){
  const sections = new Set((ttaFields.sections || []).map(s => s.id));
  const fields = ttaFields.fields || {};
  for(const [k, f] of Object.entries(fields)){
    if(!TYPE_OK[f.type]) fail(`tta-fields: '${k}' tundmatu type '${f.type}'`);
    if(!sections.has(f.section)) fail(`tta-fields: '${k}' tundmatu section '${f.section}'`);
    if(f.better !== undefined && !['higher', 'lower'].includes(f.better)) fail(`tta-fields: '${k}' better peab olema 'higher' või 'lower'`);
    if(f.better !== undefined && !['number', 'range'].includes(f.type)) fail(`tta-fields: '${k}' better sobib ainult number/range väljale`);
  }
  for(const [model, r] of Object.entries(ttaData.models || {})){
    const where = `tta.js [${model}]`;
    if(!cats.has(model)) fail(`${where}: sellist mudelit (cat) index.html-is pole`);
    if(!['verified', 'unverified'].includes(r.status)) fail(`${where}: status peab olema 'verified' või 'unverified'`);
    const values = r.values || {};
    if(!Object.keys(values).length) fail(`${where}: values on tühi`);
    for(const [k, v] of Object.entries(values)){
      if(!fields[k]) fail(`${where}: väli '${k}' puudub tta-fields.js-ist`);
      else if(TYPE_OK[fields[k].type] && !TYPE_OK[fields[k].type](v)) fail(`${where}: '${k}' peab olema ${fields[k].type}, on ${JSON.stringify(v)}`);
    }
    for(const extra of ['notes', 'warnings']) for(const k of Object.keys(r[extra] || {})){
      if(!(k in values)) fail(`${where}: ${extra}.${k} viitab väljale, millel pole väärtust`);
    }
    if(!hasHttps(r.sources)) fail(`${where}: vähemalt üks allikas https-lingiga on kohustuslik`);
    if(r.status === 'verified' && !(r.sources || []).some(s => /odin\.t2com\.army\.mil/.test(String(s.url || '')))){
      fail(`${where}: 'verified' kirje allikates peab olema ODIN/WEG link`);
    }
    if(r.status !== 'verified') dataNotices.push(`${where}: kontrollimata`);
  }
}
if(whatData){
  const COLS = ['wheels', 'hull', 'armament', 'turret'];
  for(const [model, r] of Object.entries(whatData.models || {})){
    const where = `what.js [${model}]`;
    if(!cats.has(model)) fail(`${where}: sellist mudelit (cat) index.html-is pole`);
    if(!COLS.some(c => Array.isArray(r[c]) && r[c].length)) fail(`${where}: ükski W/H/A/T veerg pole täidetud`);
    if(r.draft !== undefined && typeof r.draft !== 'boolean') fail(`${where}: draft peab olema true või false`);
    if(r.note !== undefined && (typeof r.note !== 'string' || !r.note.trim())) fail(`${where}: note peab olema tekst`);
    if(r.related !== undefined){
      if(!Array.isArray(r.related)) fail(`${where}: related peab olema massiiv`);
      else r.related.forEach((g, gi) => {
        if(!g || !Array.isArray(g.models)) { fail(`${where}: related[${gi}].models puudub`); return; }
        g.models.forEach((m, mi) => {
          if(!m || typeof m.name !== 'string' || !m.name.trim()) fail(`${where}: related[${gi}].models[${mi}].name puudub`);
          else if(m.cat !== undefined && !cats.has(m.cat)) fail(`${where}: related "${m.name}" viitab mudelile "${m.cat}", mida index.html-is pole`);
        });
      });
    }
    if(r.draft) dataNotices.push(`${where}: mustand`);
    for(const c of COLS) (r[c] || []).forEach((it, i) => {
      if(!it || typeof it.text !== 'string' || !it.text.trim()) fail(`${where}: ${c}[${i}] text puudub`);
    });
    if(r.image){
      const rel = String(r.image).replace(/^\.\//, '');
      if(!existsExact(rel)) fail(`${where}: pilt puudub (või vale tähesuurusega): ${rel}`);
      else if(!seen.has('./' + rel)) fail(`${where}: pilt ei ole offline-assets.json-is: ./${rel}`);
      else {
        const size = fs.statSync(path.join(root, rel)).size;
        if(!/\.webp$/i.test(rel) || size > 250 * 1024){
          dataNotices.push(`${where}: pilt ${Math.round(size / 1024)} KB` + (/\.webp$/i.test(rel) ? '' : ', mitte WebP') + ' – käivita: python tools/optimize_what_images.py --apply');
        }
      }
    }
  }
}
dataNotices.forEach(n => console.log('Märkus: ' + n));

if(errors.length){
  console.error('Release-kontroll EBAÕNNESTUS (' + errors.length + '):');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
}
console.log(`Release-kontroll OK · ${appBuild} / ${swVersion} · ${scriptNo} skripti, ${referenced.size} lokaalset pilti, ${manifest.length} manifesti kirjet`);
