// ============================================================================
// NATO TINGMÄRGID: harjutus ja otsing
// Avalehe nupp „NATO tingmärgid“ avab menüü:
//   „Harjuta“ – õpilane näeb tingmärki, kirjutab vabalt üksuse nime, vaatab õige vastuse ja märgib ise,
//               kas läks täppi (nagu "Genereeri test"). 10 märki vooru kohta, lõpus „Korda vigu“.
//   „Otsi“    – kõik märgid ruudustikuna, tekstiotsing ja liigi filter; „Prindi“ prindib filtreeritud märgid.
//
// Eraldi moodul: ei kasuta pildikategooriaid ega muuda olemasolevaid režiime.
// Andmed: data/symbols.js (genereerib tools/build_symbols.py failist tools/symbols/nimekiri.json).
// Märgid: DISA MIL-STD-2525D SVG osad (images/symbols), laotud üksteise peale; ovr_*.svg = kinnitatud asendused.
// Kõik märgid on vastase üksused. Kasutab index.html globaali goHome.
// ============================================================================
(function(){
'use strict';

const D = window.SYMBOL_DATA;
const screen = document.getElementById('symbolScreen');
if(!D || !screen || !Array.isArray(D.symbols)) return;

const SESSION = 10;
const ALL = D.symbols;

// SVG osade lõuend on 612×792; tingmärk koos suurusmärgiga mahub sellesse aknasse.
const CROP = {x: 100, y: 135, w: 412, h: 460};
const IMG_CSS = `position:absolute;width:${(612 / CROP.w * 100).toFixed(4)}%;height:${(792 / CROP.h * 100).toFixed(4)}%;` +
  `left:${(-CROP.x / CROP.w * 100).toFixed(4)}%;top:${(-CROP.y / CROP.h * 100).toFixed(4)}%;`;

const CSS = `
#symbolScreen .sy-panel{padding:18px;}
#symbolScreen .sy-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:12px;}
#symbolScreen .sy-q{font-family:var(--font-display);font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:var(--bone-dim);}
#symbolScreen .sy-q b{color:var(--bone);font-size:18px;}
#symbolScreen .sy-score{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-dim);}
#symbolScreen .sy-score b{color:var(--olive);font-size:18px;}
.sy-stage{background:#f4f4ee;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:18px;margin-bottom:14px;}
.sy-sym{position:relative;width:min(320px,70vw);aspect-ratio:${CROP.w}/${CROP.h};overflow:hidden;}
.sy-sym img{${IMG_CSS}pointer-events:none;user-select:none;}
.sy-prompt{font-size:14px;color:var(--bone-soft);margin-bottom:8px;}
.sy-menu{display:grid;gap:10px;}
.sy-menu button{padding:16px;font-size:15px;text-align:left;}
.sy-menu button small{display:block;font-size:12px;letter-spacing:.02em;text-transform:none;color:var(--bone-dim);margin-top:4px;font-weight:400;}
.sy-credit{margin-top:16px;font-size:11px;color:var(--bone-dim);line-height:1.5;}
.sy-credit a{color:var(--bone-dim);}
#symbolScreen .end-summary{display:block;}
.sy-mistakes{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;margin-top:10px;}
.sy-mistake{border:1px solid var(--line);padding:8px;background:var(--panel-2);}
.sy-mistake .sy-stage{padding:6px;margin-bottom:6px;}
.sy-mistake .sy-sym{width:100%;}
.sy-mistake div.t{font-size:12px;line-height:1.35;overflow-wrap:anywhere;hyphens:auto;}
.sy-tools{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px;}
.sy-tools input,.sy-tools select{flex:1 1 180px;min-width:0;box-sizing:border-box;padding:9px 10px;font-size:13px;background:var(--bg-0);color:var(--bone);border:1px solid var(--line);}
.sy-tools button{flex:0 0 auto;}
.sy-count{font-size:12px;color:var(--bone-dim);margin-bottom:8px;}
.sy-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px;}
.sy-card{border:1px solid var(--line);background:var(--panel-2);padding:6px;}
.sy-card .sy-stage{padding:6px;margin-bottom:6px;}
.sy-card .sy-sym{width:100%;}
.sy-card .n{font-size:12px;line-height:1.3;color:var(--bone);overflow-wrap:anywhere;hyphens:auto;}
.sy-card .c{font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--bone-dim);margin-top:2px;}
.sy-empty{font-size:13px;color:var(--bone-dim);padding:12px 0;}
`;
const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

function symbolEl(s){
  const box = document.createElement('div');
  box.className = 'sy-sym';
  box.setAttribute('role', 'img');
  box.setAttribute('aria-label', 'Tingmärk');
  for(const src of s.layers){
    const i = document.createElement('img');
    i.src = src; i.alt = ''; i.draggable = false;
    box.appendChild(i);
  }
  return box;
}
function esc(t){ return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function shuffle(a){
  const b = a.slice();
  for(let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
// Otsing ei sõltu suur-/väiketähtedest ega sidekriipsudest/tühikutest ("remondi taastamis" leiab "Remondi-taastamis…").
function norm(t){ return String(t).toLocaleLowerCase('et').replace(/[\s\-–()]+/g, ''); }

// Juhuslik valik: kõigepealt erinevad liigid, et ühes voorus ei tuleks sama liik liiga mitu korda.
// Reegel (kasutaja otsus 29.10): igas voorus on vähemalt üks märk igast suurusest
// jagu (12), rühm (14), rood (15), pataljon (16), polk (17), brigaad (18). Ülejäänud kohad täidetakse juhuslikult.
const REQUIRED_ECH = ['12', '14', '15', '16', '17', '18'];
function pickSession(n){
  const pool = shuffle(ALL), out = [], used = new Set();
  const add = s => { out.push(s); used.add(s.cat); };
  for(const e of shuffle(REQUIRED_ECH)){
    if(out.length >= n) break;
    const cand = pool.filter(s => s.ech === e && !out.includes(s));
    const pick = cand.find(s => !used.has(s.cat)) || cand[0];
    if(pick) add(pick);
  }
  for(const s of pool){ if(out.length < n && !out.includes(s) && !used.has(s.cat)) add(s); }
  for(const s of pool){ if(out.length < n && !out.includes(s)) add(s); }
  return shuffle(out);
}

// ---------------------------------------------------------------------------
// Olek
// ---------------------------------------------------------------------------
// view: 'menu' | 'quiz' | 'search'
const S = {view: 'menu', list: [], i: 0, phase: 'ready', guess: '', results: [], q: '', cat: ''};

screen.innerHTML = `
  <div class="hist-nav">
    <button type="button" class="nav-btn" id="syBack" title="Tagasi">‹ Avalehele</button>
    <div class="hist-status live">NATO TINGMÄRGID</div>
    <button type="button" class="nav-btn" id="syRestart" title="Uus voor">↻</button>
  </div>
  <div class="panel sy-panel" id="syPanel"></div>`;
const panel = screen.querySelector('#syPanel');
const backBtn = screen.querySelector('#syBack');
const restartBtn = screen.querySelector('#syRestart');

function render(){
  backBtn.textContent = S.view === 'menu' ? '‹ Avalehele' : '‹ Tingmärgid';
  restartBtn.style.visibility = S.view === 'quiz' ? 'visible' : 'hidden';
  if(S.view === 'menu') return renderMenu();
  if(S.view === 'search') return renderSearch();
  if(S.phase === 'end') return renderEnd();
  renderQuiz();
}

const CREDIT = `<div class="sy-credit">Kõik märgid on vastase üksused. Tingmärgid: DISA MIL-STD-2525D ametlikud SVG osad
  (vastavad maaväe üksustel APP-6(D)-le), mõnel märgil kinnitatud asendus (images/symbols/ovr_*),
  <a href="images/symbols/LICENSE.txt" target="_blank" rel="noopener">litsents</a>.</div>`;

// ---------------------------------------------------------------------------
// Menüü
// ---------------------------------------------------------------------------
function renderMenu(){
  panel.innerHTML = `
    <div class="sy-menu">
      <button class="primary" id="syGoQuiz">Harjuta<small>${SESSION} juhuslikku märki: kirjuta üksuse nimi, vaata vastust ja hinda ise.</small></button>
      <button id="syGoSearch">Otsi<small>Kõik ${ALL.length} märki: otsi nime või liigi järgi, prindi valitud märgid.</small></button>
    </div>
    ${CREDIT}`;
  panel.querySelector('#syGoQuiz').addEventListener('click', () => startQuiz());
  panel.querySelector('#syGoSearch').addEventListener('click', () => { S.view = 'search'; render(); });
}

// ---------------------------------------------------------------------------
// Harjutus
// ---------------------------------------------------------------------------
function renderQuiz(){
  const s = S.list[S.i];
  const correct = S.results.filter(r => r.ok).length;
  panel.innerHTML = `
    <div class="sy-head">
      <div class="sy-q">Märk <b>${S.i + 1}</b> / ${S.list.length}</div>
      <div class="sy-score">Õigeid <b>${correct}</b> / ${S.results.length}</div>
    </div>
    <div class="sy-stage" id="syStage"></div>
    <div class="sy-prompt">Mis üksus see on? Kirjuta üksuse liik ja suurus (nt „motolaskurpataljon“).</div>
    <div class="row">
      <input type="text" id="syInput" placeholder="Sinu vastus…" autocomplete="off">
      <button class="primary" id="syReveal">Näita vastust</button>
    </div>
    <div class="answer-block" id="syAnswer" style="display:none;">
      <div class="your-guess" id="syGuess"></div>
      <div class="lbl">Õige vastus</div>
      <div class="value" id="syValue"></div>
      <div class="verdict-row">
        <button class="good" id="syGood">✓ Läks täppi (1)</button>
        <button class="bad" id="syBad">✗ Ei läinud täppi (2)</button>
      </div>
    </div>
    ${CREDIT}`;
  panel.querySelector('#syStage').appendChild(symbolEl(s));
  const input = panel.querySelector('#syInput');
  input.value = S.guess;
  panel.querySelector('#syReveal').addEventListener('click', reveal);
  panel.querySelector('#syGood').addEventListener('click', () => mark(true));
  panel.querySelector('#syBad').addEventListener('click', () => mark(false));
  if(S.phase === 'revealed') showAnswer();
  else setTimeout(() => input.focus(), 0);
}

function showAnswer(){
  const s = S.list[S.i];
  panel.querySelector('#syAnswer').style.display = 'block';
  panel.querySelector('#syInput').disabled = true;
  panel.querySelector('#syReveal').disabled = true;
  panel.querySelector('#syGuess').innerHTML = 'Sinu vastus: <b>' + (S.guess ? esc(S.guess) : '—') + '</b>';
  panel.querySelector('#syValue').textContent = s.name;
}

function reveal(){
  if(S.view !== 'quiz' || S.phase !== 'ready') return;
  S.guess = panel.querySelector('#syInput').value.trim();
  S.phase = 'revealed';
  showAnswer();
  panel.querySelector('#syGood').focus();
}

function mark(ok){
  if(S.view !== 'quiz' || S.phase !== 'revealed') return;
  S.results.push({s: S.list[S.i], guess: S.guess, ok});
  S.guess = '';
  S.i++;
  S.phase = S.i >= S.list.length ? 'end' : 'ready';
  render();
}

function renderEnd(){
  const total = S.results.length, correct = S.results.filter(r => r.ok).length;
  const wrong = S.results.filter(r => !r.ok);
  const pct = total ? Math.round(correct / total * 100) : 0;
  panel.innerHTML = `
    <div class="end-summary">
      <h3>Tingmärkide harjutuse kokkuvõte</h3>
      <div class="end-score-panel"><div class="end-score-main">Tulemus <b>${correct}/${total}</b></div>
        <div class="end-score-stats"><div class="end-score-stat">Õige <b>${correct}</b></div><div class="end-score-stat">Vale <b>${total - correct}</b></div><div class="end-score-stat">Täpsus <b>${pct}%</b></div></div></div>
      ${wrong.length ? '<div class="end-groups-title">Eksitud märgid</div><div class="sy-mistakes" id="syMistakes"></div>' : ''}
    </div>
    <div class="row" style="margin-top:12px;">
      <button class="primary" id="syAgain" style="flex:1;">Alusta uuesti</button>
      ${wrong.length ? '<button id="syRepeat" style="flex:1;">Korda vigu</button>' : ''}
      <button id="syMenu" style="flex:1;">Tagasi menüüsse</button>
    </div>
    ${CREDIT}`;
  const box = panel.querySelector('#syMistakes');
  if(box) wrong.forEach(r => {
    const d = document.createElement('div'); d.className = 'sy-mistake';
    const stg = document.createElement('div'); stg.className = 'sy-stage'; stg.appendChild(symbolEl(r.s));
    const t = document.createElement('div'); t.className = 't';
    t.innerHTML = '<b>' + esc(r.s.name) + '</b>' + (r.guess ? '<br><span style="color:var(--bone-dim)">Sinu: ' + esc(r.guess) + '</span>' : '');
    d.append(stg, t); box.appendChild(d);
  });
  panel.querySelector('#syAgain').addEventListener('click', () => startQuiz());
  const rep = panel.querySelector('#syRepeat');
  if(rep) rep.addEventListener('click', () => startQuiz(wrong.map(r => r.s)));
  panel.querySelector('#syMenu').addEventListener('click', toMenu);
}

function startQuiz(list){
  S.view = 'quiz';
  S.list = list && list.length ? shuffle(list) : pickSession(SESSION);
  S.i = 0; S.phase = 'ready'; S.guess = ''; S.results = [];
  render();
}

// ---------------------------------------------------------------------------
// Otsing
// ---------------------------------------------------------------------------
function filtered(){
  const q = norm(S.q);
  return ALL.filter(s => (!S.cat || s.cat === S.cat) && (!q || norm(s.name).includes(q) || norm(s.cat).includes(q) || norm(s.echName).includes(q)));
}

function renderSearch(){
  panel.innerHTML = `
    <div class="sy-tools">
      <input type="search" id="syQ" placeholder="Otsi nime järgi (nt tankitõrje, pataljon)…" autocomplete="off">
      <select id="syCat"><option value="">Kõik liigid</option>${D.categories.map(c => `<option>${esc(c)}</option>`).join('')}</select>
      <button type="button" id="syPrint">Prindi</button>
    </div>
    <div class="sy-count" id="syCount"></div>
    <div class="sy-grid" id="syGrid"></div>
    ${CREDIT}`;
  const qi = panel.querySelector('#syQ'), cs = panel.querySelector('#syCat');
  qi.value = S.q; cs.value = S.cat;
  qi.addEventListener('input', () => { S.q = qi.value; drawGrid(); });
  cs.addEventListener('change', () => { S.cat = cs.value; drawGrid(); });
  panel.querySelector('#syPrint').addEventListener('click', () => printSheet(filtered()));
  drawGrid();
  setTimeout(() => qi.focus(), 0);
}

function drawGrid(){
  const list = filtered();
  const grid = panel.querySelector('#syGrid');
  panel.querySelector('#syCount').textContent = `Näidatud ${list.length} / ${ALL.length} märki`;
  grid.innerHTML = '';
  if(!list.length){ grid.innerHTML = '<div class="sy-empty">Ühtegi märki ei leitud.</div>'; return; }
  for(const s of list){
    const card = document.createElement('div'); card.className = 'sy-card';
    const stg = document.createElement('div'); stg.className = 'sy-stage'; stg.appendChild(symbolEl(s));
    const n = document.createElement('div'); n.className = 'n'; n.textContent = s.name;
    const c = document.createElement('div'); c.className = 'c'; c.textContent = s.cat;
    card.append(stg, n, c); grid.appendChild(card);
  }
}

// Prinditav leht valitud märkidega (õpetajale). Blob-URL: pildid laevad kindlalt.
function printSheet(list){
  if(!list.length) return;
  const base = new URL('.', location.href).href;
  const cells = list.map(s => `<div class="c"><div class="sym">${s.layers.map(src => `<img src="${base + src}" alt="">`).join('')}</div>
      <div class="a">${esc(s.name)}</div></div>`).join('');
  const filt = [S.cat, S.q && '„' + S.q + '“'].filter(Boolean).join(', ');
  const html = `<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>NATO tingmärgid</title>
  <style>
    body{font-family:system-ui,Arial,sans-serif;margin:24px;color:#111;}
    h1{font-size:20px;margin:0 0 4px;} p{font-size:13px;margin:0 0 14px;}
    .g{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;}
    .c{border:1px solid #ccc;padding:4px;page-break-inside:avoid;}
    .sym{position:relative;width:100%;aspect-ratio:${CROP.w}/${CROP.h};overflow:hidden;}
    .sym img{${IMG_CSS}}
    .a{font-size:11px;line-height:1.3;margin-top:3px;overflow-wrap:anywhere;hyphens:auto;}
    button{margin-bottom:12px;padding:6px 12px;} @media print{button{display:none;} body{margin:8mm;}}
  </style></head><body>
  <h1>NATO tingmärgid (vastase üksused)</h1>
  <p>${list.length} märki${filt ? ' · filter: ' + esc(filt) : ''}. Joonised: DISA MIL-STD-2525D (APP-6(D)).</p>
  <button onclick="print()">Prindi / salvesta PDF</button>
  <div class="g">${cells}</div>
  <script>window.addEventListener('load',()=>setTimeout(()=>print(),300));<\/script>
  </body></html>`;
  const url = URL.createObjectURL(new Blob([html], {type: 'text/html;charset=utf-8'}));
  const w = window.open(url, '_blank');
  if(w){ setTimeout(() => URL.revokeObjectURL(url), 60000); return; }
  // Hüpikaknad blokeeritud: prindi otsinguvaade ise.
  URL.revokeObjectURL(url);
  window.print();
}

// ---------------------------------------------------------------------------
// Ekraani näitamine, navigeerimine, klaviatuur
// ---------------------------------------------------------------------------
function toMenu(){ S.view = 'menu'; render(); window.scrollTo(0, 0); }
function open(){
  if(window.CuratedTest) window.CuratedTest.hide();
  ['homeScreen', 'listScreen', 'runScreen', 'kuldScreen', 'curatedScreen'].forEach(id => {
    const e = document.getElementById(id); if(e) e.style.display = 'none';
  });
  document.body.classList.remove('run-active');
  document.body.classList.add('home-active');
  screen.style.display = 'block';
  toMenu();
}
function hide(){ screen.style.display = 'none'; }
function leave(){
  hide();
  if(typeof goHome === 'function') goHome();
}

backBtn.addEventListener('click', () => { if(S.view === 'menu') leave(); else toMenu(); });
restartBtn.addEventListener('click', () => startQuiz());
document.addEventListener('keydown', e => {
  if(screen.style.display === 'none' || S.view !== 'quiz') return;
  if(e.key === 'Enter' && S.phase === 'ready'){ e.preventDefault(); reveal(); return; }
  if(S.phase === 'revealed'){
    if(e.key === '1'){ e.preventDefault(); mark(true); }
    else if(e.key === '2'){ e.preventDefault(); mark(false); }
  }
});

const btn = document.getElementById('startSymbolsBtn');
if(btn) btn.addEventListener('click', open);

window.SymbolPractice = {open, hide, _all: ALL};
})();
