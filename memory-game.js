// ============================================================================
// MEMORY: leia paarid
// Paar = sama mudeli KAKS ERINEVAT pilti (mitte kaks ühesugust pilti), et mängija õpiks masinat
// eri nurkade alt ära tundma. Mängus on ainult mudelid, millel on vähemalt kaks pilti (kasutaja otsus, variant A).
//
// Avaleht: nupp „Memory“ avab seadistuse (kategooriad + laua suurus 8/12/16 paari). Valik ei sõltu
// harjutuskategooriatest. Mängus: ümberpööratud ruudul 🔍 (või uus klõps pildil) avab suurenduse.
// Kaks avatud ruutu, mis ei ole paar, jäävad avatuks kuni järgmise klõpsuni (aega võrrelda).
// Paari leidmisel aken: mõlemad pildid, nimi, liik ja allikad. Allikat enne paari leidmist ei näidata
// (Commonsi failinimi reedaks vastuse – sama reegel nagu Kuldvillakus).
//
// Kasutab põhiäpi globaale: CATEGORIES (data/categories.js), GROUPS, usableFiles, fetchSpecificFile, sourceLinkLine,
// openLightboxList, lbOpen, groupCountLabel, goHome.
// ============================================================================
(function(){
'use strict';

const screen = document.getElementById('memoryScreen');
const cfg = document.getElementById('memoryConfig');
const openBtn = document.getElementById('startMemoryBtn');
if(!screen || !cfg || !openBtn || typeof CATEGORIES === 'undefined') return;

const SIZES = [8, 12, 16];
const MIN_PAIRS = 8;
const STORE_KEY = 'tehnikatuvastus.memory.v1';
const LOAD_PARALLEL = 6;
const IMG_TIMEOUT_MS = 20000;

const CSS = `
#memoryScreen .mm-panel{padding:14px;}
.mm-stats{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-dim);margin-bottom:10px;}
.mm-stats b{color:var(--amber);font-size:16px;letter-spacing:.04em;}
.mm-hint{font-size:12px;color:var(--bone-dim);margin-bottom:10px;line-height:1.45;}
.mm-board{--cols:6;display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));gap:6px;max-width:calc(var(--cols) * 190px);margin:0 auto;}
@media (max-width:640px){.mm-board{grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;}}
.mm-tile{position:relative;aspect-ratio:4/3;perspective:700px;}
.mm-face{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;background:none;cursor:pointer;transform-style:preserve-3d;transition:transform .32s ease;}
.mm-tile.up .mm-face,.mm-tile.matched .mm-face{transform:rotateY(180deg);}
.mm-back,.mm-front{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border:1px solid var(--line);overflow:hidden;}
.mm-back{background:repeating-linear-gradient(45deg,#2c3322 0 8px,#262b1d 8px 16px);display:flex;align-items:center;justify-content:center;color:var(--olive);font-family:var(--font-display);font-size:20px;}
.mm-face:hover .mm-back,.mm-face:focus-visible .mm-back{border-color:var(--olive);}
.mm-front{transform:rotateY(180deg);background:#050603;}
.mm-front img{width:100%;height:100%;object-fit:contain;display:block;pointer-events:none;user-select:none;-webkit-user-drag:none;}
.mm-tile.up .mm-front{border-color:var(--amber);box-shadow:inset 0 0 0 1px var(--amber);}
.mm-tile.matched .mm-front{border-color:var(--olive);}
.mm-name{position:absolute;left:0;right:0;bottom:0;padding:2px 4px;background:rgba(5,6,3,.82);color:var(--bone);font-size:10px;line-height:1.25;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.mm-zoom{position:absolute;top:3px;right:3px;z-index:2;min-width:30px;min-height:30px;padding:0 4px;font-size:14px;line-height:1;background:rgba(5,6,3,.75);border:1px solid var(--line);display:none;}
.mm-tile.up .mm-zoom,.mm-tile.matched .mm-zoom{display:block;}
.mm-load{padding:30px 10px;text-align:center;color:var(--bone-dim);font-size:13px;}
.mm-load b{color:var(--bone);}
.mm-pop{position:fixed;inset:0;z-index:9000;background:rgba(5,6,3,.86);display:flex;align-items:center;justify-content:center;padding:14px;}
.mm-pop[hidden]{display:none;}
.mm-pop-box{background:var(--panel-2);border:1px solid var(--olive);max-width:860px;width:100%;max-height:100%;overflow:auto;padding:14px;}
.mm-pop-type{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--bone-dim);}
.mm-pop-name{font-family:var(--font-display);font-size:24px;color:var(--amber);margin:2px 0 10px;line-height:1.15;}
.mm-pop-imgs{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
@media (max-width:520px){.mm-pop-imgs{grid-template-columns:1fr;}}
.mm-pop-imgs figure{margin:0;}
.mm-pop-imgs button{display:block;width:100%;padding:0;border:1px solid var(--line);background:#050603;cursor:zoom-in;aspect-ratio:4/3;}
.mm-pop-imgs img{width:100%;height:100%;object-fit:contain;display:block;}
.mm-pop-imgs figcaption{font-size:11px;color:var(--bone-dim);margin-top:3px;min-height:1.3em;}
.mm-pop-imgs figcaption a{color:var(--bone-dim);}
.mm-pop .row{margin-top:12px;}
.mm-sum{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px;margin-top:10px;}
.mm-sum-card{border:1px solid var(--line);background:var(--panel-2);padding:6px;}
.mm-sum-imgs{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:5px;}
.mm-sum-imgs button{padding:0;border:1px solid var(--line);background:#050603;aspect-ratio:4/3;cursor:zoom-in;}
.mm-sum-imgs img{width:100%;height:100%;object-fit:contain;display:block;}
.mm-sum-card .t{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-dim);}
.mm-sum-card .n{font-size:13px;color:var(--bone);line-height:1.3;}
.mm-cfg-sizes{margin:4px 0 10px;}
.mm-cfg-count{font-size:12px;color:var(--bone-soft);margin:8px 0;}
.mm-cfg-count.warn{color:var(--amber);}
`;
const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

function esc(t){ return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function shuffle(a){
  const b = a.slice();
  for(let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

// ---------------------------------------------------------------------------
// Sobivad mudelid ja seaded
// ---------------------------------------------------------------------------
function distinctFiles(e){ return [...new Set(usableFiles(e))]; }
function eligibleEntries(groupIds){
  return CATEGORIES.filter(e => e.files && (!groupIds || groupIds.has(e.group)) && distinctFiles(e).length >= 2);
}
function groupsWithPairs(){
  return GROUPS.map(g => ({g, n: eligibleEntries(new Set([g.id])).length})).filter(x => x.n > 0);
}

let prefs = {size: 12, groups: null};   // groups: null = kõik
try{
  const p = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
  if(p && SIZES.includes(p.size)) prefs.size = p.size;
  if(p && Array.isArray(p.groups)) prefs.groups = p.groups;
}catch(e){}
function savePrefs(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(prefs)); }catch(e){} }
function selectedGroupSet(){
  const avail = groupsWithPairs().map(x => x.g.id);
  return new Set(prefs.groups ? avail.filter(id => prefs.groups.includes(id)) : avail);
}

// ---------------------------------------------------------------------------
// Avalehe seadistus
// ---------------------------------------------------------------------------
function setCaret(open){
  openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  const c = openBtn.querySelector('.btn-caret'); if(c) c.textContent = open ? '▴' : '▾';
}
function renderConfig(){
  const rows = groupsWithPairs();
  const sel = selectedGroupSet();
  cfg.innerHTML = `
    <div class="kuld-config-title">Memory</div>
    <div class="kuld-config-help">Leia paarid: paari moodustavad kaks <b>erinevat</b> pilti samast masinast. Paari leidmisel näed masina nime ja liiki. Ümberpööratud pilti saab 🔍 nupuga suurendada. Mängus on ainult mudelid, millel on vähemalt kaks pilti.</div>
    <div class="count-row mm-cfg-sizes" id="memSizeRow"><span class="lbl">Paare:</span>
      ${SIZES.map(n => `<button type="button" class="seg${n === prefs.size ? ' is-on' : ''}" data-n="${n}">${n}</button>`).join('')}</div>
    <div class="kuld-config-actions">
      <button type="button" class="primary" id="memAll">Vali kõik</button>
      <button type="button" class="primary" id="memNone">Tühista kõik</button>
    </div>
    <div class="kuld-group-grid" id="memGroups"></div>
    <div class="mm-cfg-count" id="memCount" aria-live="polite"></div>
    <div class="row"><button type="button" class="primary" id="memStart" style="flex:1;">Alusta</button></div>`;
  const grid = cfg.querySelector('#memGroups');
  rows.forEach(({g, n}) => {
    const label = document.createElement('label'); label.className = 'kuld-group-check';
    const cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = g.id; cb.checked = sel.has(g.id);
    cb.addEventListener('change', () => { syncGroupsFromChecks(); updateConfigCount(); });
    const nm = document.createElement('span'); nm.className = 'kg-name'; nm.textContent = g.label;
    const ct = document.createElement('span'); ct.className = 'kg-count'; ct.textContent = groupCountLabel(g.id, n);
    label.append(cb, nm, ct); grid.appendChild(label);
  });
  cfg.querySelectorAll('#memSizeRow .seg').forEach(b => b.addEventListener('click', () => {
    prefs.size = Number(b.dataset.n); savePrefs();
    cfg.querySelectorAll('#memSizeRow .seg').forEach(x => x.classList.toggle('is-on', x === b));
    updateConfigCount();
  }));
  cfg.querySelector('#memAll').addEventListener('click', () => { grid.querySelectorAll('input').forEach(c => c.checked = true); syncGroupsFromChecks(); updateConfigCount(); });
  cfg.querySelector('#memNone').addEventListener('click', () => { grid.querySelectorAll('input').forEach(c => c.checked = false); syncGroupsFromChecks(); updateConfigCount(); });
  cfg.querySelector('#memStart').addEventListener('click', () => startGame());
  updateConfigCount();
}
function syncGroupsFromChecks(){
  prefs.groups = [...cfg.querySelectorAll('#memGroups input')].filter(c => c.checked).map(c => c.value);
  savePrefs();
}
function updateConfigCount(){
  const n = eligibleEntries(selectedGroupSet()).length;
  const out = cfg.querySelector('#memCount'), btn = cfg.querySelector('#memStart');
  if(!out) return;
  const pairs = Math.min(prefs.size, n);
  out.classList.toggle('warn', n < prefs.size);
  if(n < MIN_PAIRS) out.textContent = `Valitud kategooriates on ${n} sobivat mudelit – mänguks on vaja vähemalt ${MIN_PAIRS}.`;
  else if(n < prefs.size) out.textContent = `Valitud kategooriates on ainult ${n} sobivat mudelit – laual on ${pairs} paari.`;
  else out.textContent = `Valitud kategooriates on ${n} sobivat mudelit. Laual on ${pairs} paari.`;
  btn.disabled = n < MIN_PAIRS;
}
openBtn.addEventListener('click', () => {
  const open = cfg.hidden;
  cfg.hidden = !open;
  if(open) renderConfig();
  setCaret(open);
});
setCaret(false);

// ---------------------------------------------------------------------------
// Mängu ekraan
// ---------------------------------------------------------------------------
screen.innerHTML = `
  <div class="hist-nav">
    <button type="button" class="nav-btn" id="mmBack" title="Tagasi avalehele">‹ Avalehele</button>
    <div class="hist-status live">MEMORY</div>
    <button type="button" class="nav-btn" id="mmRestart" title="Uus laud">↻</button>
  </div>
  <div class="panel mm-panel" id="mmPanel"></div>
  <div class="mm-pop" id="mmPop" hidden role="dialog" aria-modal="true" aria-label="Paar leitud"></div>`;
const panel = screen.querySelector('#mmPanel');
const pop = screen.querySelector('#mmPop');

const S = {view: 'idle', token: 0, pairs: [], tiles: [], open: [], moves: 0, found: 0, t0: 0, t1: 0, size: 12, groups: null};

function loadImg(url){
  return new Promise((resolve, reject) => {
    const im = new Image();
    const timer = setTimeout(() => { im.src = ''; reject(new Error('timeout')); }, IMG_TIMEOUT_MS);
    im.onload = () => { clearTimeout(timer); im.naturalWidth > 0 ? resolve(url) : reject(new Error('empty')); };
    im.onerror = () => { clearTimeout(timer); reject(new Error('img')); };
    im.src = url;
  });
}
// Ühe mudeli kaks erinevat pilti: proovib faile juhuslikus järjekorras, kuni kaks laeb.
async function loadPair(entry, token){
  const infos = [];
  for(const f of shuffle(distinctFiles(entry))){
    if(token !== S.token) return null;
    try{
      const info = await fetchSpecificFile(f);
      await loadImg(info.url);
      infos.push(info);
      if(infos.length === 2) return {entry, infos};
    }catch(e){ /* proovi järgmist faili */ }
  }
  return null;
}

async function startGame(){
  const groups = selectedGroupSet();
  const pool = shuffle(eligibleEntries(groups));
  if(pool.length < MIN_PAIRS) return;
  const want = Math.min(prefs.size, pool.length);
  const token = ++S.token;
  Object.assign(S, {view: 'loading', pairs: [], tiles: [], open: [], moves: 0, found: 0, t0: 0, t1: 0, size: want, groups});
  show();
  const progress = () => {
    if(token !== S.token || S.view !== 'loading') return;
    panel.innerHTML = `<div class="mm-load">Laen pilte… <b>${S.pairs.length}</b> / ${want} paari</div>`;
  };
  progress();
  let next = 0;
  const worker = async () => {
    while(S.pairs.length < want && next < pool.length && token === S.token){
      const entry = pool[next++];
      const pair = await loadPair(entry, token);
      if(token !== S.token) return;
      if(pair && S.pairs.length < want){ S.pairs.push(pair); progress(); }
    }
  };
  await Promise.all(Array.from({length: LOAD_PARALLEL}, worker));
  if(token !== S.token) return;
  if(S.pairs.length < MIN_PAIRS){
    S.view = 'error';
    panel.innerHTML = `<div class="mm-load">Pilte ei õnnestunud laadida (laeti ${S.pairs.length} paari, vaja vähemalt ${MIN_PAIRS}). Kontrolli võrguühendust või lae pildid seadmesse.</div>
      <div class="row"><button class="primary" id="mmRetry" style="flex:1;">Proovi uuesti</button></div>`;
    panel.querySelector('#mmRetry').addEventListener('click', () => startGame());
    return;
  }
  buildBoard();
}

function buildBoard(){
  S.view = 'board';
  const cards = [];
  S.pairs.forEach((p, pi) => p.infos.forEach((info, k) => cards.push({pi, k, info, state: 'down'})));
  S.tiles = shuffle(cards);
  const cols = S.pairs.length <= 8 ? 4 : S.pairs.length <= 12 ? 6 : 8;
  panel.innerHTML = `
    <div class="mm-stats" aria-live="polite"><span>Paare <b id="mmFound">0</b> / ${S.pairs.length}</span><span>Käike <b id="mmMoves">0</b></span></div>
    <div class="mm-hint">Pööra kaks ruutu. Paar on sama masina kaks erinevat pilti. 🔍 suurendab avatud pilti.</div>
    <div class="mm-board" id="mmBoard" style="--cols:${cols}"></div>`;
  const board = panel.querySelector('#mmBoard');
  S.tiles.forEach((t, i) => {
    const tile = document.createElement('div'); tile.className = 'mm-tile';
    const face = document.createElement('button'); face.type = 'button'; face.className = 'mm-face';
    face.setAttribute('aria-label', 'Ruut ' + (i + 1) + ', pööramata');
    const back = document.createElement('span'); back.className = 'mm-back'; back.textContent = '?';
    const front = document.createElement('span'); front.className = 'mm-front';
    const img = document.createElement('img'); img.alt = ''; img.src = t.info.url; img.draggable = false;
    front.appendChild(img);
    face.append(back, front);
    const zoom = document.createElement('button'); zoom.type = 'button'; zoom.className = 'mm-zoom';
    zoom.textContent = '🔍'; zoom.title = 'Suurenda'; zoom.setAttribute('aria-label', 'Suurenda pilti');
    face.addEventListener('click', () => onTile(i));
    zoom.addEventListener('click', ev => { ev.stopPropagation(); zoomTile(i); });
    tile.append(face, zoom);
    board.appendChild(tile);
    t.el = tile; t.face = face; t.front = front;
  });
}

function setState(i, state){
  const t = S.tiles[i]; t.state = state;
  t.el.classList.toggle('up', state === 'up');
  t.el.classList.toggle('matched', state === 'matched');
  const p = S.pairs[t.pi];
  t.face.setAttribute('aria-label', 'Ruut ' + (i + 1) + (state === 'down' ? ', pööramata' : state === 'up' ? ', avatud' : ', leitud: ' + p.entry.label));
  if(state === 'matched' && !t.front.querySelector('.mm-name')){
    const nm = document.createElement('span'); nm.className = 'mm-name'; nm.textContent = p.entry.label;
    t.front.appendChild(nm);
  }
}
function updateStats(){
  const f = panel.querySelector('#mmFound'), m = panel.querySelector('#mmMoves');
  if(f) f.textContent = S.found;
  if(m) m.textContent = S.moves;
}

function onTile(i){
  if(S.view !== 'board') return;
  const t = S.tiles[i];
  if(t.state === 'matched'){ showMatch(t.pi, false); return; }
  if(t.state === 'up'){
    // Mittesobiv paar avatud: klõpsatud pilt jääb uue katse esimeseks, teine pöördub tagasi.
    if(S.open.length === 2){ S.open.filter(j => j !== i).forEach(j => setState(j, 'down')); S.open = [i]; }
    else zoomTile(i);   // ainus avatud pilt: suurenda
    return;
  }
  // Eelmine mittesobiv paar jäi avatuks – nüüd pööratakse see tagasi.
  if(S.open.length === 2){ S.open.forEach(j => setState(j, 'down')); S.open = []; }
  if(!S.t0) S.t0 = Date.now();
  setState(i, 'up');
  S.open.push(i);
  if(S.open.length < 2) return;
  S.moves++;
  const [a, b] = S.open;
  if(S.tiles[a].pi === S.tiles[b].pi){
    setState(a, 'matched'); setState(b, 'matched');
    S.open = [];
    S.found++;
    if(S.found === S.pairs.length) S.t1 = Date.now();
    const pi = S.tiles[a].pi;
    setTimeout(() => { if(S.view === 'board') showMatch(pi, true); }, 380);
  }
  updateStats();
}

// Suurendus. Avatud (veel leidmata) pilt: ilma nime ja allikata; mõlemad avatud pildid on lehitsetavad.
function zoomTile(i){
  const t = S.tiles[i];
  if(t.state === 'matched'){
    const both = S.tiles.map((x, j) => j).filter(j => S.tiles[j].pi === t.pi);
    zoomPair(t.pi, both.indexOf(i), t.face);
    return;
  }
  const list = S.open.includes(i) ? S.open : [i];
  const items = list.map(j => ({src: S.tiles[j].info.url, alt: '', label: '', type: '', el: null}));
  openLightboxList(items, Math.max(0, list.indexOf(i)), t.face);
}
function zoomPair(pi, idx, opener){
  const p = S.pairs[pi];
  const items = p.infos.map(info => ({src: info.url, alt: p.entry.label, label: p.entry.label, type: p.entry.type || '', el: {_srcInfo: info}}));
  openLightboxList(items, Math.max(0, idx), opener);
}

// ---------------------------------------------------------------------------
// Paar leitud
// ---------------------------------------------------------------------------
let popOpener = null;
function showMatch(pi, fresh){
  const p = S.pairs[pi];
  const last = fresh && S.found === S.pairs.length;
  popOpener = document.activeElement;
  pop.innerHTML = `<div class="mm-pop-box">
      ${p.entry.type ? `<div class="mm-pop-type">${esc(p.entry.type)}</div>` : ''}
      <div class="mm-pop-name">${esc(p.entry.label)}</div>
      <div class="mm-pop-imgs">${p.infos.map((info, k) => `<figure><button type="button" data-k="${k}" title="Suurenda"><img src="${esc(info.url)}" alt="${esc(p.entry.label)}"></button><figcaption data-k="${k}"></figcaption></figure>`).join('')}</div>
      <div class="row"><button type="button" class="primary" id="mmPopOk" style="flex:1;">${last ? 'Vaata kokkuvõtet' : 'Jätka'}</button></div>
    </div>`;
  pop.querySelectorAll('figcaption').forEach(fc => fc.appendChild(sourceLinkLine(p.infos[Number(fc.dataset.k)])));
  pop.querySelectorAll('.mm-pop-imgs button').forEach(b => b.addEventListener('click', () => zoomPair(pi, Number(b.dataset.k), b)));
  pop.querySelector('#mmPopOk').addEventListener('click', () => closeMatch(last));
  pop.hidden = false;
  pop._last = last;
  pop.querySelector('#mmPopOk').focus();
}
function closeMatch(toEnd){
  if(pop.hidden) return;
  pop.hidden = true;
  pop.innerHTML = '';
  if(toEnd || (S.view === 'board' && S.found === S.pairs.length)){ renderEnd(); return; }
  if(popOpener && document.contains(popOpener)){ try{ popOpener.focus(); }catch(e){} }
}
pop.addEventListener('click', e => { if(e.target === pop) closeMatch(pop._last); });

// ---------------------------------------------------------------------------
// Lõpp
// ---------------------------------------------------------------------------
function fmtTime(ms){
  const s = Math.max(0, Math.round(ms / 1000));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}
function renderEnd(){
  S.view = 'end';
  const n = S.pairs.length;
  const acc = S.moves ? Math.round(n / S.moves * 100) : 0;
  panel.innerHTML = `
    <div class="end-summary" style="display:block;">
      <h3>Kõik ${n} paari leitud</h3>
      <div class="end-score-panel"><div class="end-score-main">Käike <b>${S.moves}</b></div>
        <div class="end-score-stats"><div class="end-score-stat">Paare <b>${n}</b></div><div class="end-score-stat">Täpsus <b>${acc}%</b></div><div class="end-score-stat">Aeg <b>${fmtTime(S.t1 - S.t0)}</b></div></div></div>
      <div class="end-groups-title">Leitud paarid</div>
      <div class="mm-sum" id="mmSum"></div>
    </div>
    <div class="row" style="margin-top:12px;">
      <button class="primary" id="mmAgain" style="flex:1;">Uus laud</button>
      <button id="mmHome" style="flex:1;">Avalehele</button>
    </div>`;
  const box = panel.querySelector('#mmSum');
  S.pairs.forEach((p, pi) => {
    const card = document.createElement('div'); card.className = 'mm-sum-card';
    const imgs = document.createElement('div'); imgs.className = 'mm-sum-imgs';
    p.infos.forEach((info, k) => {
      const b = document.createElement('button'); b.type = 'button'; b.title = 'Suurenda';
      const im = document.createElement('img'); im.src = info.url; im.alt = p.entry.label;
      b.appendChild(im); b.addEventListener('click', () => zoomPair(pi, k, b));
      imgs.appendChild(b);
    });
    const t = document.createElement('div'); t.className = 't'; t.textContent = p.entry.type || '';
    const nm = document.createElement('div'); nm.className = 'n'; nm.textContent = p.entry.label;
    card.append(imgs, t, nm); box.appendChild(card);
  });
  panel.querySelector('#mmAgain').addEventListener('click', () => startGame());
  panel.querySelector('#mmHome').addEventListener('click', leave);
  window.scrollTo(0, 0);
}

// ---------------------------------------------------------------------------
// Ekraani näitamine, lahkumine
// ---------------------------------------------------------------------------
function show(){
  if(window.CuratedTest) window.CuratedTest.hide();
  if(window.SymbolPractice) window.SymbolPractice.hide();
  ['homeScreen', 'listScreen', 'runScreen', 'kuldScreen', 'curatedScreen', 'symbolScreen'].forEach(id => {
    const e = document.getElementById(id); if(e) e.style.display = 'none';
  });
  document.body.classList.remove('run-active');
  document.body.classList.add('home-active');
  screen.style.display = 'block';
  window.scrollTo(0, 0);
}
function hide(){
  screen.style.display = 'none';
  pop.hidden = true;
}
function inProgress(){ return S.view === 'board' && S.found > 0 && S.found < S.pairs.length; }
function leave(){
  if(inProgress() && !confirm('Lõpetada Memory? Praegune laud kaob.')) return;
  S.token++;
  S.view = 'idle';
  hide();
  if(typeof goHome === 'function') goHome();
}
screen.querySelector('#mmBack').addEventListener('click', leave);
screen.querySelector('#mmRestart').addEventListener('click', () => {
  if(inProgress() && !confirm('Alustada uue lauaga? Praegune laud kaob.')) return;
  startGame();
});
document.addEventListener('keydown', e => {
  if(screen.style.display === 'none' || pop.hidden) return;
  if(typeof lbOpen !== 'undefined' && lbOpen) return;   // suurendus sulgub enne
  if(e.key === 'Escape' || e.key === 'Enter'){ e.preventDefault(); closeMatch(pop._last); }
});

window.MemoryGame = {start: startGame, hide, _state: S, _eligible: eligibleEntries};
})();
