// ============================================================================
// KUREERITUD TEST (õpetajale)
// Õpetaja koostab pilditesti (samm 1: seaded, samm 2: pildid, samm 3: kinnitus ja salvestamine),
// salvestab selle .html failina, prindib vastuste lehe ja õpilase lehe ning näitab testi projektorilt.
//
// Eraldi moodul: ei muuda olemasolevat testi, harjutamist ega kuldvillakut.
// Kasutab index.html globaale: CATEGORIES, GROUPS, fetchSpecificFile, goHome.
// Nõuded: Kureeritud_test_nouded.md (N1–N28).
//
// Testifail (.html): sees on testi andmed (JSON) ja suunamine äppi kujul <äpi URL>#kureeritud=<base64url JSON>.
// Topeltklõps → brauser avab äpi → see moodul loeb räsi ja avab testi. Varuvariant: avalehe "Ava salvestatud test".
// localStorage'it ei kasutata.
// NB: alati window.history – index.html globaalne `let history = []` (testi ajalugu) varjab brauseri history objekti.
// ============================================================================
(function(){
'use strict';

const FILE_KIND = 'tehnikatuvastus-kureeritud-test';
const FILE_VERSION = 1;
const HASH_KEY = '#kureeritud=';
const MAX_Q = 100;
const DEFAULTS = {count: 20, mode: 'manual', viewSec: 15, writeSec: 10, name: ''};

const screen = document.getElementById('curatedScreen');
if(!screen || typeof CATEGORIES === 'undefined') return;

// ---------------------------------------------------------------------------
// Stiilid (kõik selle mooduli omad, ct- eesliitega)
// ---------------------------------------------------------------------------
const CSS = `
#curatedScreen .ct-nav-spacer{min-width:46px;}
.ct-steps{display:flex;gap:6px;margin-bottom:10px;}
.ct-step{flex:1;display:flex;align-items:center;gap:8px;padding:9px 12px;border:1px solid var(--line);background:var(--panel-2);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--bone-dim);cursor:pointer;text-align:left;}
.ct-step:hover:not(:disabled){border-color:var(--olive);color:var(--bone);}
.ct-step:disabled{opacity:.45;}
.ct-step b{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;border:1px solid var(--line);font-size:12px;color:var(--bone-dim);}
.ct-step.is-active{border-color:var(--olive);color:var(--bone);}
.ct-step.is-active b{background:var(--olive);border-color:var(--olive);color:#12140c;}
.ct-step.is-done b{border-color:var(--olive);color:var(--olive);}
.ct-panel{border-top:1px solid var(--line);margin-bottom:12px;}
.ct-topbar{position:sticky;top:0;z-index:25;display:flex;align-items:center;gap:12px 18px;flex-wrap:wrap;padding:12px 16px;box-shadow:0 6px 18px rgba(0,0,0,.45);}
.ct-topbar .ct-count{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-soft);margin:0;}
.ct-topbar-state{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-soft);}
.ct-topbar-state b{font-family:var(--font-display);font-size:20px;color:var(--amber);letter-spacing:.02em;}
.ct-topbar-state b.is-ok{color:var(--green);}
.ct-topbar-gap{flex:1;}
.ct-topbar .ct-msg{flex:1;margin:0;}
.ct-notice{border:1px solid var(--amber);border-left-width:4px;background:rgba(201,162,39,.08);padding:10px 14px;margin-bottom:12px;font-size:14px;line-height:1.45;}
.ct-field{margin-bottom:18px;}
.ct-field > label,.ct-label{display:block;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-soft);margin-bottom:8px;}
.ct-num{background:var(--bg-0);border:1px solid var(--line);color:var(--bone);font-family:var(--font-body);font-size:16px;padding:9px 10px;width:110px;outline:none;}
.ct-num:focus{border-color:var(--olive);}
.ct-num-s{width:70px;font-size:14px;padding:6px 8px;}
.ct-modes{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.ct-mode{display:flex;gap:10px;align-items:flex-start;border:1px solid var(--line);background:var(--panel-2);padding:12px;cursor:pointer;}
.ct-mode:has(input:checked){border-color:var(--olive);background:rgba(138,154,91,.12);}
.ct-mode input{margin-top:3px;accent-color:var(--olive);}
.ct-mode b{display:block;font-size:15px;margin-bottom:4px;color:var(--bone);}
.ct-mode span{font-size:13px;line-height:1.4;color:var(--bone-soft);}
.ct-times{display:flex;gap:18px;flex-wrap:wrap;margin-top:12px;}
.ct-times[hidden]{display:none;}
.ct-times label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--bone-soft);}
.ct-times label span{display:flex;align-items:center;gap:6px;color:var(--bone);}
.ct-actions{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:14px;}
.ct-help{font-size:13px;line-height:1.45;color:var(--bone-soft);margin:6px 0 12px;}
.ct-msg{font-size:13px;color:var(--olive);margin-top:8px;min-height:1px;}
.ct-msg.is-warn{color:var(--amber);}
.ct-rules summary{cursor:pointer;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone);padding:2px 0;}
.ct-rules summary:hover{color:var(--olive);}
.ct-rule-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px;}
.ct-rule{display:flex;align-items:center;gap:8px;font-size:13px;padding:4px 0;border-bottom:1px dotted rgba(255,255,255,.07);}
.ct-rule-name{flex:1;line-height:1.3;display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;}
.ct-rule-btn{font-size:10px;letter-spacing:.06em;padding:5px 7px;}
.ct-rule-block.is-open{grid-column:1 / -1;border:1px solid var(--line);background:var(--panel-2);padding:0 8px 8px;}
.ct-rule-toggle{flex:1;display:flex;align-items:center;gap:6px;text-align:left;background:none;border:0;padding:4px 0;font-size:13px;letter-spacing:0;text-transform:none;color:var(--bone);white-space:normal;line-height:1.3;}
.ct-rule-toggle:hover{color:var(--amber);}
.ct-caret{color:var(--amber);width:12px;flex:0 0 auto;}
.ct-rule-ex{color:var(--amber);font-size:11px;}
.ct-rule-models{list-style:none;margin:6px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:4px 16px;}
.ct-rule-models label{display:flex;align-items:center;gap:6px;font-size:13px;cursor:pointer;padding:3px 0;}
.ct-rule-models input{accent-color:var(--olive);}
.ct-rule-models span{color:var(--bone-dim);}
.ct-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:2px;}
.ct-info .ct-pic{font-size:11px;color:var(--bone-dim);}
.ct-info .ct-rep{font-size:11px;color:#14170f;background:var(--amber);padding:1px 6px;letter-spacing:.02em;}
.ct-row.is-rep{border-left:3px solid var(--amber);}
.ct-name{width:100%;max-width:460px;}
.ct-count{display:inline-flex;align-items:center;gap:8px;margin-right:16px;}
.ct-prev-title{display:flex;align-items:center;flex-wrap:wrap;gap:6px;}
.ct-rule-avail{font-size:12px;color:var(--bone-dim);min-width:74px;}
.ct-check{display:flex;align-items:center;gap:8px;font-size:14px;margin:14px 0 4px;cursor:pointer;}
.ct-check input{accent-color:var(--olive);width:16px;height:16px;}
.ct-exclude{margin-top:14px;}
.ct-sum{font-size:13px;color:var(--bone-soft);}
.ct-sum b{color:var(--amber);}
.ct-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.ct-chip{font-size:12px;letter-spacing:0;text-transform:none;padding:5px 9px;}
.ct-search{position:relative;}
.ct-search input{width:100%;}
.ct-search-list{list-style:none;margin:0;padding:4px 0;background:var(--bg-0);border:1px solid var(--olive);max-height:300px;overflow-y:auto;}
.ct-search > .ct-search-list{position:absolute;z-index:30;left:0;right:0;top:calc(100% + 2px);box-shadow:0 10px 30px rgba(0,0,0,.55);}
.ct-search-list[hidden]{display:none;}
.ct-search-opt{display:flex;justify-content:space-between;gap:10px;padding:7px 10px;cursor:pointer;font-size:13px;}
.ct-search-opt span{color:var(--bone-dim);font-size:11px;text-align:right;}
.ct-search-opt:hover,.ct-search-opt:focus,.ct-search-opt.is-active{background:rgba(201,162,39,.16);color:var(--amber);outline:none;}
.ct-search-empty{padding:8px 10px;font-size:12px;color:var(--bone-dim);}
.ct-prev-head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px;}
.ct-prev-title{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone-soft);}
.ct-prev-title b{font-family:var(--font-display);font-size:20px;color:var(--amber);letter-spacing:.02em;}
.ct-prev-title b.is-ok{color:var(--green);}
.ct-prev-tools{display:flex;gap:6px;flex-wrap:wrap;}
.ct-prev-tools button{font-size:11px;padding:8px 11px;}
.ct-list{list-style:none;margin:0;padding:0;display:grid;gap:6px;}
.ct-row{display:grid;grid-template-columns:40px 96px 1fr auto;gap:12px;align-items:center;border:1px solid var(--line);background:var(--panel-2);padding:6px 8px;}
.ct-row.is-empty{border-style:dashed;background:transparent;opacity:.7;}
.ct-row.is-missing{border-color:var(--amber);}
.ct-nr{font-family:var(--font-display);font-size:22px;color:var(--amber);text-align:center;}
.ct-thumb{width:96px;height:64px;background:#0a0c07;display:flex;align-items:center;justify-content:center;overflow:hidden;}
.ct-thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.ct-thumb.is-err::after{content:'pilt puudub';font-size:10px;color:var(--bone-dim);}
.ct-info{display:flex;flex-direction:column;gap:2px;min-width:0;}
.ct-info b{font-size:15px;color:var(--bone);}
.ct-info span{font-size:12px;color:var(--bone-dim);}
.ct-info .ct-miss{color:var(--amber);}
.ct-empty-txt{font-size:12px;letter-spacing:.08em;text-transform:uppercase;}
.ct-row-tools{display:flex;gap:4px;}
.ct-row-tools button{font-size:11px;padding:7px 10px;}
.ct-row-tools .ct-ico{padding:7px 10px;font-size:14px;letter-spacing:0;}
.ct-modal{position:fixed;inset:0;z-index:9999;background:rgba(5,6,3,.8);display:flex;align-items:center;justify-content:center;padding:3vh 3vw;}
.ct-modal-box{background:var(--bg-0);border:1px solid var(--line);box-shadow:0 20px 60px rgba(0,0,0,.65);width:min(1100px,100%);height:min(800px,100%);display:flex;flex-direction:column;}
.ct-modal-head{display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid var(--line);}
.ct-modal-head b{flex:1;font-family:var(--font-display);font-size:20px;color:var(--amber);font-weight:600;}
.ct-pick-count{font-size:13px;color:var(--bone-soft);}
.ct-modal-body{flex:1;display:grid;grid-template-columns:320px 1fr;min-height:0;}
.ct-pick-models{border-right:1px solid var(--line);padding:10px;display:flex;flex-direction:column;min-height:0;}
.ct-pick-models .ct-search{display:flex;flex-direction:column;min-height:0;flex:1;}
.ct-pick-models .ct-search input{flex:0 0 auto;}
.ct-pick-models .ct-search > .ct-search-list{position:static;box-shadow:none;}
.ct-pick-models .ct-search-list{flex:1 1 0;min-height:0;max-height:none;margin-top:8px;border-color:var(--line);}
.ct-pick-right{padding:12px;overflow-y:auto;min-height:0;}
.ct-pick-imgs-head{display:flex;align-items:baseline;gap:10px;margin-bottom:10px;}
.ct-pick-imgs-head b{font-size:17px;}
.ct-pick-imgs-head span{font-size:12px;color:var(--bone-dim);}
.ct-pick-imgs{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;}
.ct-pick-img{position:relative;padding:0;border:2px solid var(--line);background:#0a0c07;text-transform:none;letter-spacing:0;}
.ct-pick-img:hover:not(:disabled){border-color:var(--amber);}
.ct-pick-img .ct-thumb{width:100%;height:140px;}
.ct-pick-img.is-current{border-color:var(--olive);}
.ct-pick-img:disabled{opacity:.55;cursor:default;}
.ct-badge{position:absolute;left:6px;top:6px;background:rgba(0,0,0,.75);color:var(--bone);font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:3px 6px;}
.ct-summary{border-bottom:1px solid var(--line);padding-bottom:12px;margin-bottom:12px;font-size:14px;color:var(--bone-soft);}
.ct-summary-title{font-family:var(--font-display);font-size:22px;color:var(--amber);margin-bottom:4px;}
.ct-todo{list-style:none;margin:0;padding:0;display:grid;gap:8px;}
.ct-todo-item{display:grid;grid-template-columns:40px 1fr auto;gap:12px;align-items:center;border:1px solid var(--line);background:var(--panel-2);padding:12px;}
.ct-todo-item.is-next{border-color:var(--amber);}
.ct-todo-item.is-done{border-color:var(--green);}
.ct-todo-mark{width:32px;height:32px;border-radius:50%;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--bone-dim);}
.ct-todo-item.is-next .ct-todo-mark{border-color:var(--amber);color:var(--amber);}
.ct-todo-item.is-done .ct-todo-mark{background:var(--green);border-color:var(--green);color:#0d0f0a;}
.ct-todo-body b{display:block;font-size:16px;margin-bottom:3px;}
.ct-todo-body span{font-size:13px;line-height:1.4;color:var(--bone-soft);}
.ct-start{font-size:14px;padding:13px 22px;}
@media(max-width:700px){
  .ct-modes,.ct-rule-grid{grid-template-columns:1fr;}
  .ct-rule{gap:5px;}
  .ct-rule-name{font-size:12px;gap:6px;}
  .ct-rule .ct-num-s{width:52px;padding:6px;}
  .ct-rule-avail{min-width:58px;font-size:11px;}
  .ct-rule{flex-wrap:wrap;row-gap:2px;}
  .ct-rule-toggle{font-size:13px;flex:1 1 100%;}
  .ct-rule-models{grid-template-columns:1fr;}
  .ct-rule-btn{padding:5px 6px;}
  .ct-steps{flex-direction:column;}
  .ct-row{grid-template-columns:30px 72px 1fr;}
  .ct-thumb{width:72px;height:50px;}
  .ct-row-tools{grid-column:1 / -1;justify-content:flex-end;}
  .ct-modal-body{grid-template-columns:1fr;grid-template-rows:40% 60%;}
  .ct-pick-models{border-right:0;border-bottom:1px solid var(--line);}
  .ct-todo-item{grid-template-columns:34px 1fr;}
  .ct-todo-item button{grid-column:1 / -1;}
}

/* Projektorivaade */
body.ct-proj-open{overflow:hidden;}
.ct-proj{position:fixed;inset:0;z-index:10001;background:#000;color:#f2f2e6;display:flex;flex-direction:column;outline:none;font-family:var(--font-body);cursor:none;}
.ct-proj.show-ctrl{cursor:default;}
.ct-proj-top{height:13vh;min-height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 3vw;background:#0b0d08;border-bottom:2px solid #2c3123;}
.ct-proj-top.is-empty{background:#000;border-color:transparent;}
.ct-proj-num{font-family:var(--font-display);line-height:1;}
.ct-proj-num b{font-size:10vh;color:#ffd24a;font-weight:700;}
.ct-proj-num span{font-size:5vh;color:#b9bca5;}
.ct-proj-pause{font-size:3.2vh;letter-spacing:.2em;color:#000;background:#ffd24a;padding:.6vh 1.4vh;}
.ct-proj-pause[hidden]{display:none;}
.ct-proj-stage{flex:1;position:relative;min-height:0;display:flex;align-items:center;justify-content:center;}
.ct-proj-img{max-width:100%;max-height:100%;width:100%;height:100%;object-fit:contain;display:block;user-select:none;-webkit-user-drag:none;}
.ct-proj-img[hidden]{display:none;}
.ct-proj-img.is-err{visibility:hidden;}
.ct-proj-write,.ct-proj-start,.ct-proj-end{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:2vh;}
.ct-proj-write[hidden],.ct-proj-start[hidden],.ct-proj-end[hidden]{display:none;}
.ct-proj-write-nr{font-family:var(--font-display);font-size:30vh;line-height:1;color:#ffd24a;font-weight:700;}
.ct-proj-write-msg{font-family:var(--font-display);font-size:8vh;letter-spacing:.06em;text-transform:uppercase;}
.ct-proj-start-title{font-family:var(--font-display);font-size:9vh;line-height:1.1;color:#ffd24a;letter-spacing:.03em;max-width:90vw;}
.ct-proj-start-sub{font-size:3.6vh;color:#d8dac6;}
.ct-proj-load{font-size:2.6vh;color:#9ea28a;margin-top:1vh;}
.ct-proj-go{font-size:3vh;padding:1.6vh 5vh;margin-top:2vh;cursor:pointer;}
.ct-proj-end-msg{font-family:var(--font-display);font-size:16vh;color:#ffd24a;text-transform:uppercase;letter-spacing:.06em;}
.ct-proj-end button{font-size:2.6vh;padding:1.4vh 4vh;cursor:pointer;}
.ct-proj-end-btns{display:flex;gap:2vh;flex-wrap:wrap;justify-content:center;}
.ct-proj-answers{position:absolute;inset:0;display:flex;flex-direction:column;padding:2.5vh 3vw 2vh;}
.ct-proj-answers[hidden]{display:none;}
.ct-proj-ans-head{display:flex;align-items:center;justify-content:space-between;gap:2vh;margin-bottom:2vh;}
.ct-proj-ans-head > span{font-family:var(--font-display);font-size:6vh;color:#ffd24a;text-transform:uppercase;letter-spacing:.06em;}
.ct-proj-ans-btns{display:flex;gap:1.5vh;}
.ct-proj-ans-btns button{font-size:2.2vh;padding:1.1vh 3vh;cursor:pointer;}
.ct-proj-ans-list{flex:1;min-height:0;margin:0;padding:0 0 7vh;list-style:none;display:grid;grid-auto-flow:column;column-gap:3vw;row-gap:.3em;align-content:start;overflow:hidden;}
.ct-proj-top[hidden]{display:none;}
.ct-proj-ans-list li{display:flex;gap:.6em;line-height:1.25;color:#f2f2e6;}
.ct-proj-ans-list b{color:#ffd24a;min-width:2.4em;text-align:right;flex:0 0 auto;}
.ct-proj-stage.is-answers{align-items:stretch;}
.ct-proj-bar{height:2.2vh;background:#1d2117;}
.ct-proj-bar[hidden]{display:none;}
.ct-proj-bar i{display:block;height:100%;width:100%;background:#ffd24a;}
.ct-proj-ctrl{position:absolute;right:2vw;bottom:4vh;display:flex;gap:6px;opacity:0;transition:opacity .3s;pointer-events:none;}
.ct-proj.show-ctrl .ct-proj-ctrl{opacity:.92;pointer-events:auto;}
.ct-proj-ctrl button{min-width:52px;min-height:48px;font-size:20px;letter-spacing:0;background:rgba(30,34,24,.9);cursor:pointer;}
.ct-proj-ctrl button[hidden]{display:none;}

/* Prindilehed (ainult printimisel) */
#ctPrint{display:none;}
@media print{
  @page{size:A4;margin:14mm 16mm;}
  body.ct-printing{background:#fff !important;color:#000 !important;}
  body.ct-printing > *{display:none !important;}
  body.ct-printing > #ctPrint{display:block !important;}
  #ctPrint{font-family:Arial,'Helvetica Neue',sans-serif;color:#000;}
  #ctPrint h1{font-family:Arial,'Helvetica Neue',sans-serif;font-size:20pt;margin:0 0 8mm;font-weight:700;color:#000;text-transform:none;letter-spacing:0;}
  .ct-pr-grid{display:grid;grid-auto-flow:column;column-gap:10mm;}
  .ct-pr-row{display:flex;align-items:flex-end;gap:3mm;font-size:12pt;line-height:1.2;overflow:hidden;}
  .ct-pr-key .ct-pr-row{align-items:center;font-size:inherit;line-height:1.15;padding:0.6mm 0;}
  .ct-pr-nr{min-width:9mm;text-align:right;font-weight:700;flex:0 0 auto;}
  .ct-pr-line{flex:1;border-bottom:0.3mm solid #000;margin-bottom:1.6mm;}
  .ct-pr-head{display:grid;grid-template-columns:2fr 1fr;gap:10mm;font-size:13pt;font-weight:700;margin-bottom:9mm;}
  .ct-pr-head > div{display:flex;align-items:flex-end;gap:3mm;height:10mm;}
  .ct-pr-head .ct-pr-line{margin-bottom:1mm;}
}
`;
document.head.appendChild(Object.assign(document.createElement('style'), {id: 'curatedTestCss', textContent: CSS}));

// ---------------------------------------------------------------------------
// Olek
// ---------------------------------------------------------------------------
const S = {
  step: 1,
  settings: {...DEFAULTS},
  questions: [],                  // {cat, file, label, type, missing?}
  rules: {counts: {}, noRepeat: true, excluded: []},
  ruleMsg: '',
  rulesOpen: null,
  // Linnukesed on seotud testi sisuga: kui test muutub, ei kehti varem salvestatud fail ega prinditud lehed.
  savedSig: null,                 // testi allkiri, kui testifail salvestati või avati
  doneSig: {key: null, sheet: null},
  confirmedSig: null,
  fromFile: false,
  created: null,
  notice: ''
};

// ---------------------------------------------------------------------------
// Abifunktsioonid
// ---------------------------------------------------------------------------
function h(tag, attrs, ...kids){
  const e = document.createElement(tag);
  if(attrs) for(const [k, v] of Object.entries(attrs)){
    if(v === null || v === undefined || v === false) continue;
    if(k === 'class') e.className = v;
    else if(k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
    else if(k === 'html') e.innerHTML = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for(const k of kids.flat()){
    if(k === null || k === undefined || k === false) continue;
    e.appendChild(typeof k === 'string' || typeof k === 'number' ? document.createTextNode(String(k)) : k);
  }
  return e;
}
const entryOf = cat => CATEGORIES.find(e => e.cat === cat) || null;
const eligible = () => CATEGORIES.filter(e => e && e.files && e.files.length);
const groupLabel = id => { const g = GROUPS.find(x => x.id === id); return g ? g.label : ''; };
function shuffle(a){ for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const norm = t => String(t || '').toLocaleLowerCase('et').replace(/[\s\-–_\/.,()„“"]+/g, '');
function todayISO(){ const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function isoToEt(iso){ const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? (+m[3]) + '.' + (+m[2]) + '.' + m[1] : (iso || ''); }
function clampInt(v, lo, hi, dflt){ const n = parseInt(v, 10); return isNaN(n) ? dflt : Math.min(hi, Math.max(lo, n)); }
function answerText(q){ return q.type ? q.label + ' – ' + q.type : q.label; }
function modeText(){
  const s = S.settings;
  return s.mode === 'auto' ? 'Automaatne (pilt ' + s.viewSec + ' s, vastus ' + s.writeSec + ' s)' : 'Käsitsi (õpetaja liigub edasi)';
}
function testTitle(){ return (S.settings.name || '').trim() || ('Tehnikatest ' + isoToEt(S.created || todayISO())); }
function testName(){ return testTitle() + ' · ' + S.questions.length + ' küsimust'; }
function sig(){
  const st = S.settings;
  return JSON.stringify([(st.name || '').trim(), st.mode, st.viewSec, st.writeSec, S.questions.map(q => q.cat + '|' + q.file)]);
}
function isDone(k){ return k === 'test' ? S.savedSig === sig() : S.doneSig[k] === sig(); }
function isDirty(){ return S.questions.length > 0 && S.savedSig !== sig(); }
function makeQuestion(entry, file){ return {cat: entry.cat, file, label: entry.label, type: entry.type || ''}; }

// Pildi URL (fetchSpecificFile teeb Commonsi päringu – mälus hoitakse, et sama pilti ei küsitaks mitu korda).
const urlCache = new Map();
function imageUrl(file){
  if(!urlCache.has(file)){
    const p = fetchSpecificFile(file).then(info => {
      if(!info || !info.url) throw new Error('no url');
      return info.url;
    });
    p.catch(() => urlCache.delete(file));
    urlCache.set(file, p);
  }
  return urlCache.get(file);
}
// Pisipilt: Commonsi 1400px thumb → 320px (sama URL-muster). Kohalikud pildid jäävad samaks.
function thumbUrl(url){ return /\/thumb\//.test(url) ? url.replace(/\/1400px-/, '/320px-') : url; }
function thumb(file){
  const box = h('div', {class: 'ct-thumb'});
  imageUrl(file).then(u => {
    const img = new Image();
    img.alt = '';
    img.decoding = 'async';
    img.onerror = () => { if(img.src !== u) img.src = u; else box.classList.add('is-err'); };
    img.src = thumbUrl(u);
    box.appendChild(img);
  }).catch(() => box.classList.add('is-err'));
  return box;
}

// ---------------------------------------------------------------------------
// Ekraan
// ---------------------------------------------------------------------------
// Kureerimise vaatel on oma history kirje: brauseri/hiire tagasi-nupp viib eelmisse sammu, mitte äpist välja.
let navPushed = false;
function pushNav(){
  if(navPushed) return;
  try{ window.history.pushState({ctScreen: true}, ''); navPushed = true; }catch(e){}
}
function popNav(){
  if(!navPushed) return;
  navPushed = false;
  ignorePop = true;
  try{ window.history.back(); }catch(e){ ignorePop = false; }
}
function showScreen(){
  ['homeScreen', 'listScreen', 'runScreen', 'kuldScreen'].forEach(id => {
    const e = document.getElementById(id); if(e) e.style.display = 'none';
  });
  document.body.classList.remove('run-active');
  document.body.classList.add('home-active');
  screen.style.display = 'block';
  pushNav();
}
function hide(){
  if(screen.style.display === 'none') return;
  screen.style.display = 'none';
  closePicker();
  popNav();
}
function confirmLeave(){
  return !isDirty() || confirm('Test või selle muudatused on salvestamata. Kui lahkud, need kaovad. Lahkuda?');
}
function leave(){
  if(!confirmLeave()) return;
  hide();
  if(typeof goHome === 'function') goHome();
}
function back(){
  if(S.step === 1) leave();
  else goStep(S.step - 1);
}
// Sammude riba: 1 ja 2 alati; 3 = kinnitamine (sama mis "Kinnita test").
function canConfirm(){ return S.questions.length > 0 && !S.questions.some(x => x.missing); }
function tab(n){
  if(n === S.step) return;
  if(n === 3){ if(canConfirm()) confirmTest(); return; }
  goStep(n);
}

function render(){
  screen.innerHTML = '';
  const nav = h('div', {class: 'hist-nav'},
    h('button', {class: 'nav-btn', type: 'button', onclick: back, title: S.step === 1 ? 'Tagasi avalehele' : 'Eelmine samm'}, '‹ Tagasi'),
    h('div', {class: 'hist-status live'}, 'KUREERITUD TEST · SAMM ' + S.step + ' / 3'),
    h('span', {class: 'ct-nav-spacer'})
  );
  screen.appendChild(nav);
  const steps = h('div', {class: 'ct-steps', role: 'tablist'},
    ['Seaded', 'Pildid', 'Kinnita ja salvesta'].map((t, i) =>
      h('button', {type: 'button', role: 'tab', 'aria-selected': String(S.step === i + 1),
        class: 'ct-step' + (S.step === i + 1 ? ' is-active' : '') + (S.step > i + 1 ? ' is-done' : ''),
        disabled: i === 2 && S.step !== 3 && !canConfirm(),
        title: i === 2 && S.step !== 3 ? 'Kinnitab testi' : null,
        onclick: () => tab(i + 1)},
        h('b', null, String(i + 1)), t)));
  screen.appendChild(steps);
  if(S.notice) screen.appendChild(h('div', {class: 'ct-notice', role: 'note'}, S.notice));
  if(S.step === 1) renderStep1();
  else if(S.step === 2) renderStep2();
  else renderStep3();
}
function goStep(n){ S.step = n; S.notice = n === 2 ? S.notice : ''; render(); window.scrollTo(0, 0); }

// ---------------------------------------------------------------------------
// SAMM 1: küsimuste arv ja liikumise režiim (N10, N15, N19)
// ---------------------------------------------------------------------------
function renderStep1(){
  const s = S.settings;
  const panel = h('div', {class: 'panel ct-panel'});
  const name = h('input', {type: 'text', class: 'ct-name', id: 'ctName', maxlength: 80, value: s.name || '', placeholder: 'Tehnikatest ' + isoToEt(todayISO()), autocomplete: 'off'});
  name.addEventListener('input', () => { s.name = name.value; });
  const view = h('input', {type: 'number', min: 1, max: 600, value: s.viewSec, class: 'ct-num', id: 'ctView'});
  const write = h('input', {type: 'number', min: 1, max: 600, value: s.writeSec, class: 'ct-num', id: 'ctWrite'});
  view.addEventListener('input', () => { s.viewSec = clampInt(view.value, 1, 600, DEFAULTS.viewSec); });
  write.addEventListener('input', () => { s.writeSec = clampInt(write.value, 1, 600, DEFAULTS.writeSec); });
  const times = h('div', {class: 'ct-times'},
    h('label', {for: 'ctView'}, 'Vaatamisaeg (pilt ekraanil)', h('span', null, view, ' s')),
    h('label', {for: 'ctWrite'}, 'Kirjutamisaeg (pilt kadunud)', h('span', null, write, ' s')));
  const modeCard = (val, title, text) => {
    const r = h('input', {type: 'radio', name: 'ctMode', value: val, checked: s.mode === val});
    r.addEventListener('change', () => { s.mode = val; times.hidden = val !== 'auto'; });
    return h('label', {class: 'ct-mode'}, r, h('div', null, h('b', null, title), h('span', null, text)));
  };
  times.hidden = s.mode !== 'auto';
  panel.append(
    h('div', {class: 'ct-field'}, h('label', {for: 'ctName'}, 'Testi nimi'), name,
      h('div', {class: 'ct-help'}, 'Nimi on testifaili nimes ja projektori avaekraanil. Tühjaks jättes: „Tehnikatest + kuupäev“.')),
    h('div', {class: 'ct-field'}, h('div', {class: 'ct-label'}, 'Kuidas test liigub'),
      h('div', {class: 'ct-modes'},
        modeCard('manual', 'Käsitsi', 'Iga küsimus: pilt → „Kirjuta vastus“ → järgmine. Õpetaja liigub edasi noole, tühiku või esitluspuldiga.'),
        modeCard('auto', 'Automaatne', 'Pilt on ekraanil vaatamisaja, siis kaob ja algab kirjutamisaeg. Ajariba näitab aega.')),
      times)
  );
  panel.appendChild(h('div', {class: 'ct-actions'}, h('span'),
    h('button', {class: 'primary', type: 'button', onclick: () => goStep(2)}, 'Edasi: vali pildid ›')));
  screen.appendChild(panel);
}

// ---------------------------------------------------------------------------
// SAMM 2: pildid – reeglitega täitmine, käsitsi lisamine, eelvaade (N11, N12, N14)
// ---------------------------------------------------------------------------
function renderStep2(){
  const s = S.settings, q = S.questions;
  const missing = q.filter(x => x.missing).length;
  // --- Ülemine riba: küsimuste arv (esimene valik) ja Kinnita test – jääb kerimisel nähtavaks ---
  const countInp = h('input', {type: 'number', min: 1, max: MAX_Q, value: s.count, class: 'ct-num ct-num-s', id: 'ctCount'});
  countInp.addEventListener('change', () => { s.count = clampInt(countInp.value, 1, MAX_Q, s.count); render(); });
  countInp.addEventListener('keydown', ev => { if(ev.key === 'Enter'){ ev.preventDefault(); countInp.blur(); } });
  screen.appendChild(h('div', {class: 'panel ct-panel ct-topbar'},
    h('label', {for: 'ctCount', class: 'ct-count'}, 'Küsimuste arv ', countInp),
    h('span', {class: 'ct-topbar-state'}, 'Testis ', h('b', {class: q.length === s.count ? 'is-ok' : ''}, q.length + ' / ' + s.count)),
    missing ? h('span', {class: 'ct-msg is-warn'}, missing + ' pilti puudub – vaheta need') : h('span', {class: 'ct-topbar-gap'}),
    h('button', {class: 'primary', type: 'button', disabled: !q.length || missing > 0, onclick: confirmTest}, 'Kinnita test ›')));
  // --- Reeglid ---
  // Paneel on alguses lahti; edasi jääb selliseks, nagu õpetaja selle jättis.
  if(S.rulesOpen === null) S.rulesOpen = !q.length;
  const rules = h('details', {class: 'panel ct-panel ct-rules', open: S.rulesOpen});
  rules.addEventListener('toggle', () => { S.rulesOpen = rules.open; });
  rules.appendChild(h('summary', null, 'Täida piltidega'));
  const nr = S.rules.noRepeat;
  const excl = new Set(S.rules.excluded);
  const unit = nr ? 'mudelit' : 'pilti';
  const modelsOf = g => eligible().filter(e => e.group === g.id).sort((x, y) => x.label.localeCompare(y.label, 'et'));
  const availOf = g => {
    const ms = modelsOf(g).filter(e => !excl.has(e.cat));
    return nr ? ms.length : ms.reduce((a, e) => a + e.files.length, 0);
  };
  // Linnuke mõjutab maksimumi: peal = mudelite arv (üks pilt mudeli kohta), maas = kõigi piltide arv.
  const noRep = h('input', {type: 'checkbox', checked: nr});
  noRep.addEventListener('change', () => { S.rules.noRepeat = noRep.checked; clampCounts(); render(); });
  rules.appendChild(h('label', {class: 'ct-check'}, noRep, ' Üks pilt mudeli kohta'));
  rules.appendChild(h('p', {class: 'ct-help'}, nr
    ? 'Iga mudel tuleb testi ühe korra. Number = mitu küsimust kategooriast, maksimum = mudelite arv. Klõps kategooria nimel näitab mudeleid ja nende piltide arvu; seal saab mudeli ka välja jätta.'
    : 'Sama mudel võib tulla mitu korda, iga kord erineva pildiga. Number = mitu küsimust kategooriast, maksimum = kõigi piltide arv. Pildid jaotatakse ühtlaselt: kõigepealt üks pilt igast mudelist, siis teine ring jne.'));
  const grid = h('div', {class: 'ct-rule-grid'});
  const sumEl = h('b');
  const allInputs = [];
  const updateSum = () => { const sum = Object.values(S.rules.counts).reduce((a, b) => a + (b || 0), 0); sumEl.textContent = sum; };
  if(!S.rules.expanded) S.rules.expanded = {};
  GROUPS.forEach(g => {
    const models = modelsOf(g);
    if(!models.length) return;
    const avail = availOf(g);
    const open = !!S.rules.expanded[g.id];
    const exN = models.filter(e => excl.has(e.cat)).length;
    const inp = h('input', {type: 'number', min: 0, max: avail, value: Math.min(S.rules.counts[g.id] || 0, avail), class: 'ct-num ct-num-s', 'aria-label': g.label});
    const setTo = v => { S.rules.counts[g.id] = v; inp.value = v; updateSum(); };
    inp.addEventListener('input', () => { S.rules.counts[g.id] = clampInt(inp.value, 0, avail, 0); updateSum(); });
    allInputs.push(setTo);
    const block = h('div', {class: 'ct-rule-block' + (open ? ' is-open' : '')});
    block.appendChild(h('div', {class: 'ct-rule'},
      h('button', {type: 'button', class: 'ct-rule-toggle', 'aria-expanded': String(open), title: 'Näita mudeleid',
        onclick: () => { S.rules.expanded[g.id] = !open; render(); }},
        h('span', {class: 'ct-caret'}, open ? '▾' : '▸'), g.label,
        exN ? h('span', {class: 'ct-rule-ex'}, ' (' + exN + ' välja jäetud)') : null),
      inp, h('span', {class: 'ct-rule-avail'}, '/ ' + avail + ' ' + unit),
      h('button', {type: 'button', class: 'ct-rule-btn', title: 'Kogu kategooria (' + avail + ' ' + unit + ')', onclick: () => setTo(avail)}, 'Kõik'),
      h('button', {type: 'button', class: 'ct-rule-btn', title: 'Tühjenda', onclick: () => setTo(0)}, '0')));
    if(open){
      const list = h('ul', {class: 'ct-rule-models'});
      models.forEach(e => {
        const cb = h('input', {type: 'checkbox', checked: !excl.has(e.cat)});
        cb.addEventListener('change', () => {
          S.rules.excluded = cb.checked ? S.rules.excluded.filter(c => c !== e.cat) : S.rules.excluded.concat(e.cat);
          clampCounts(); render();
        });
        list.appendChild(h('li', null, h('label', null, cb, ' ', h('b', null, e.label), h('span', null, ' · ' + e.files.length + (e.files.length === 1 ? ' pilt' : ' pilti')))));
      });
      block.appendChild(list);
    }
    grid.appendChild(block);
  });
  updateSum();
  rules.appendChild(grid);
  if(S.rules.excluded.length){
    rules.appendChild(h('div', {class: 'ct-help'}, 'Välja jäetud: ' + S.rules.excluded.map(c => (entryOf(c) || {label: c}).label).join(', ') + ' ',
      h('button', {type: 'button', class: 'ct-rule-btn', onclick: () => { S.rules.excluded = []; render(); }}, 'Taasta kõik')));
  }
  const msg = h('div', {class: 'ct-msg'}, S.ruleMsg || '');
  rules.appendChild(h('div', {class: 'ct-actions'},
    h('span', {class: 'ct-sum'}, 'Valitud kokku: ', sumEl, ' ',
      h('button', {type: 'button', class: 'ct-rule-btn', onclick: () => allInputs.forEach(f => f(0))}, 'Tühjenda kõik')),
    h('button', {class: 'primary', type: 'button', onclick: () => { S.ruleMsg = fillByRules(); render(); }}, 'Täida piltidega')));
  rules.appendChild(msg);
  screen.appendChild(rules);

  // --- Eelvaade ---
  const prev = h('div', {class: 'panel ct-panel ct-preview'});
  const full = q.length >= s.count;
  prev.appendChild(h('div', {class: 'ct-prev-head'},
    h('div', {class: 'ct-prev-title'}, 'Testi küsimused'),
    h('div', {class: 'ct-prev-tools'},
      h('button', {type: 'button', class: 'primary', onclick: () => openPicker(null), disabled: full, title: full ? 'Test on täis' : null}, '+ Lisa pilt käsitsi'),
      h('button', {type: 'button', onclick: () => { shuffle(S.questions); render(); }, disabled: q.length < 2}, 'Sega järjekord'),
      h('button', {type: 'button', onclick: sortByGroup, disabled: q.length < 2}, 'Kategooriate kaupa'),
      h('button', {type: 'button', class: 'bad', onclick: () => { if(confirm('Eemaldada kõik küsimused?')){ S.questions = []; S.ruleMsg = ''; render(); } }, disabled: !q.length}, 'Tühjenda'))));
  const list = h('ol', {class: 'ct-list'});
  catCount = new Map();
  q.forEach(x => catCount.set(x.cat, (catCount.get(x.cat) || 0) + 1));
  q.forEach((item, i) => list.appendChild(questionRow(item, i)));
  for(let i = q.length; i < s.count; i++){
    list.appendChild(h('li', {class: 'ct-row is-empty'},
      h('span', {class: 'ct-nr'}, String(i + 1)), h('div', {class: 'ct-thumb'}),
      h('div', {class: 'ct-info'}, h('span', {class: 'ct-empty-txt'}, 'Tühi koht'))));
  }
  prev.appendChild(list);
  if(q.length > s.count) prev.appendChild(h('div', {class: 'ct-msg is-warn'}, 'Testis on rohkem küsimusi kui määratud küsimuste arv (' + s.count + '). Kinnitamisel jääb testi ' + q.length + ' küsimust.'));
  if(missing) prev.appendChild(h('div', {class: 'ct-msg is-warn'}, missing + ' küsimuse pilt puudub äpist – vaheta need enne kinnitamist.'));
  screen.appendChild(prev);
}

let catCount = new Map();
function questionRow(item, i){
  const n = S.questions.length;
  const e = entryOf(item.cat);
  const idx = e ? e.files.indexOf(item.file) : -1;
  const reps = catCount.get(item.cat) || 1;
  const extra = [];
  if(e && e.files.length > 1 && idx >= 0) extra.push(h('span', {class: 'ct-pic'}, 'pilt ' + (idx + 1) + '/' + e.files.length));
  if(reps > 1) extra.push(h('span', {class: 'ct-rep', title: 'Sama mudel on testis mitu korda'}, 'mudel testis ' + reps + '×'));
  const li = h('li', {class: 'ct-row' + (item.missing ? ' is-missing' : '')},
    h('span', {class: 'ct-nr'}, String(i + 1)),
    item.missing ? h('div', {class: 'ct-thumb is-err'}) : thumb(item.file),
    h('div', {class: 'ct-info'},
      h('b', null, item.label),
      h('span', null, item.type || ''),
      extra.length ? h('span', {class: 'ct-meta'}, extra) : null,
      item.missing ? h('span', {class: 'ct-miss'}, 'Pilti pole enam äpis – vaheta') : null),
    h('div', {class: 'ct-row-tools'},
      h('button', {type: 'button', onclick: () => openPicker(i)}, 'Vaheta pilt'),
      h('button', {type: 'button', class: 'ct-ico', title: 'Üles', 'aria-label': 'Üles', disabled: i === 0, onclick: () => moveQ(i, -1)}, '↑'),
      h('button', {type: 'button', class: 'ct-ico', title: 'Alla', 'aria-label': 'Alla', disabled: i === n - 1, onclick: () => moveQ(i, 1)}, '↓'),
      h('button', {type: 'button', class: 'ct-ico bad', title: 'Eemalda', 'aria-label': 'Eemalda', onclick: () => { S.questions.splice(i, 1); render(); }}, '✕')));
  if(reps > 1) li.classList.add('is-rep');
  return li;
}
function moveQ(i, d){
  const j = i + d, q = S.questions;
  if(j < 0 || j >= q.length) return;
  [q[i], q[j]] = [q[j], q[i]];
  render();
}
function sortByGroup(){
  const order = new Map(GROUPS.map((g, i) => [g.id, i]));
  const gi = x => { const e = entryOf(x.cat); return e ? (order.get(e.group) ?? 99) : 99; };
  S.questions = S.questions.map((x, i) => [x, i]).sort((a, b) => gi(a[0]) - gi(b[0]) || a[1] - b[1]).map(p => p[0]);
  render();
}

// Hoia kategooriate kogused lubatud piires (linnuke või väljajäetud mudelid muudavad maksimumi).
function clampCounts(){
  const excl = new Set(S.rules.excluded);
  GROUPS.forEach(g => {
    const ms = eligible().filter(e => e.group === g.id && !excl.has(e.cat));
    const max = S.rules.noRepeat ? ms.length : ms.reduce((a, e) => a + e.files.length, 0);
    if((S.rules.counts[g.id] || 0) > max) S.rules.counts[g.id] = max;
  });
}

function fillByRules(){
  const counts = S.rules.counts;
  const sum = Object.values(counts).reduce((a, b) => a + (b || 0), 0);
  if(!sum) return 'Määra vähemalt ühele kategooriale kogus.';
  const usedCats = new Set(S.questions.map(x => x.cat));
  const usedFiles = new Set(S.questions.map(x => x.file));
  const excluded = new Set(S.rules.excluded);
  let picks = [], short = [];
  GROUPS.forEach(g => {
    const k = counts[g.id] || 0;
    if(!k) return;
    const models = shuffle(eligible().filter(e => e.group === g.id && !excluded.has(e.cat) && !(S.rules.noRepeat && usedCats.has(e.cat))));
    const got = [];
    if(S.rules.noRepeat){
      // Üks pilt mudeli kohta.
      for(const e of models){
        if(got.length >= k) break;
        const f = shuffle(e.files.filter(x => !usedFiles.has(x)))[0];
        if(f){ usedFiles.add(f); got.push(makeQuestion(e, f)); }
      }
    }else{
      // Ühtlane jaotus ringide kaupa: igast mudelist üks pilt, siis teine ring neist, kellel veel pilte on jne.
      // Sama pilti kunagi kaks korda ei tule.
      const pools = models.map(e => ({e, files: shuffle(e.files.filter(x => !usedFiles.has(x)))}));
      let progress = true;
      while(got.length < k && progress){
        progress = false;
        for(const pl of pools){
          if(got.length >= k) break;
          const f = pl.files.shift();
          if(f){ usedFiles.add(f); got.push(makeQuestion(pl.e, f)); progress = true; }
        }
      }
    }
    picks.push(...got);
    if(got.length < k) short.push(g.label + ': ' + got.length + '/' + k);
  });
  shuffle(picks);
  let note = '';
  const remaining = Math.max(0, S.settings.count - S.questions.length);
  if(picks.length > remaining){
    const want = Math.min(MAX_Q, S.questions.length + picks.length);
    if(want > S.settings.count && confirm('Valisid ' + picks.length + ' pilti, testis on vaba ' + remaining + ' kohta. Suurendan küsimuste arvu ' + want + '-ni?')){
      S.settings.count = want;
    }
    const room = Math.max(0, S.settings.count - S.questions.length);
    if(picks.length > room){ picks = picks.slice(0, room); note = ' Test sai täis – kõiki valitud pilte ei lisatud.'; }
  }
  S.questions.push(...picks);
  return 'Lisasin ' + picks.length + ' küsimust.' + note + (short.length ? ' Pilte ei jätkunud: ' + short.join(', ') + '.' : '');
}

// Mudeli otsing (nimi, tüüp, cat; sidekriipsud ja tühikud ei loe) – kasutatakse reeglites ja pildivalijas.
function modelSearch(onPick, placeholder, opts){
  opts = opts || {};
  const wrap = h('div', {class: 'ct-search'});
  const input = h('input', {type: 'text', placeholder: placeholder || 'Otsi mudelit…', autocomplete: 'off'});
  const list = h('ul', {class: 'ct-search-list', role: 'listbox'});
  list.hidden = !opts.inline;
  const draw = () => {
    const qv = norm(input.value);
    list.innerHTML = '';
    if(!qv && !opts.inline){ list.hidden = true; return; }
    const hits = eligible().filter(e => !qv || [e.label, e.type, e.cat].some(t => norm(t).includes(qv)))
      .sort((a, b) => a.label.localeCompare(b.label, 'et')).slice(0, opts.inline ? 400 : 40);
    hits.forEach(e => {
      const li = h('li', {class: 'ct-search-opt' + (opts.activeCat === e.cat ? ' is-active' : ''), role: 'option', tabindex: 0},
        h('b', null, e.label), h('span', null, (e.type || groupLabel(e.group)) + ' · ' + e.files.length + ' pilti'));
      const go = () => { onPick(e); if(!opts.inline){ input.value = ''; list.hidden = true; } };
      li.addEventListener('mousedown', ev => ev.preventDefault());
      li.addEventListener('click', go);
      li.addEventListener('keydown', ev => { if(ev.key === 'Enter'){ ev.preventDefault(); go(); } });
      list.appendChild(li);
    });
    if(!hits.length) list.appendChild(h('li', {class: 'ct-search-empty'}, 'Ei leitud'));
    list.hidden = false;
  };
  input.addEventListener('input', draw);
  input.addEventListener('focus', draw);
  if(!opts.inline) input.addEventListener('blur', () => setTimeout(() => { list.hidden = true; }, 150));
  input.addEventListener('keydown', ev => {
    if(ev.key === 'Enter'){ const first = list.querySelector('.ct-search-opt'); if(first){ ev.preventDefault(); first.click(); } }
  });
  wrap.append(input, list);
  wrap._redraw = draw;
  if(opts.inline) draw();
  return wrap;
}

// ---------------------------------------------------------------------------
// Pildivalija (aken): lisab uue küsimuse või vahetab olemasoleva pildi (ükskõik millise mudeli pilt, N14)
// ---------------------------------------------------------------------------
let pickerEl = null;
function closePicker(){
  if(pickerEl){ pickerEl.remove(); pickerEl = null; document.removeEventListener('keydown', pickerKey, true); }
}
function pickerKey(ev){ if(ev.key === 'Escape'){ ev.preventDefault(); ev.stopPropagation(); closePicker(); } }
function openPicker(swapIndex){
  closePicker();
  const swap = typeof swapIndex === 'number';
  const cur = swap ? S.questions[swapIndex] : null;
  let activeCat = cur && entryOf(cur.cat) ? cur.cat : null;
  let added = null;
  const imgs = h('div', {class: 'ct-pick-imgs'});
  const head = h('div', {class: 'ct-pick-imgs-head'});
  const listWrap = h('div', {class: 'ct-pick-models'});
  const drawImages = () => {
    imgs.innerHTML = '';
    head.innerHTML = '';
    const e = activeCat ? entryOf(activeCat) : null;
    if(!e){ head.appendChild(h('span', {class: 'ct-help'}, 'Vali vasakult mudel – siia ilmuvad selle pildid.')); return; }
    head.append(h('b', null, e.label), h('span', null, e.type || ''));
    const used = new Set(S.questions.map((x, i) => (swap && i === swapIndex) ? null : x.file));
    e.files.forEach(f => {
      const isCur = cur && cur.file === f;
      const inTest = used.has(f);
      const b = h('button', {type: 'button', class: 'ct-pick-img' + (isCur ? ' is-current' : '') + (inTest ? ' is-used' : ''), disabled: inTest || isCur},
        thumb(f), inTest ? h('span', {class: 'ct-badge'}, 'juba testis') : isCur ? h('span', {class: 'ct-badge'}, 'praegune') : null);
      b.addEventListener('click', () => {
        const nq = makeQuestion(e, f);
        if(swap) S.questions[swapIndex] = nq;
        else{
          if(S.questions.length >= S.settings.count){ alert('Test on täis (' + S.settings.count + ' küsimust). Eemalda mõni küsimus või suurenda küsimuste arvu.'); return; }
          S.questions.push(nq);
        }
        render();
        if(swap) closePicker();
        else{ drawImages(); added.textContent = S.questions.length + ' / ' + S.settings.count; }
      });
      imgs.appendChild(b);
    });
  };
  const search = modelSearch(e => { activeCat = e.cat; drawImages(); search._redraw(); }, 'Otsi mudelit (nt T-72, BM-21)…', {inline: true, get activeCat(){ return activeCat; }});
  listWrap.appendChild(search);
  added = h('span', {class: 'ct-pick-count'}, swap ? '' : S.questions.length + ' / ' + S.settings.count);
  pickerEl = h('div', {class: 'ct-modal', role: 'dialog', 'aria-modal': 'true'},
    h('div', {class: 'ct-modal-box'},
      h('div', {class: 'ct-modal-head'},
        h('b', null, swap ? 'Vaheta küsimuse ' + (swapIndex + 1) + ' pilt' : 'Lisa pilt käsitsi'),
        added,
        h('button', {type: 'button', onclick: closePicker}, swap ? 'Tühista' : 'Valmis')),
      h('div', {class: 'ct-modal-body'}, listWrap, h('div', {class: 'ct-pick-right'}, head, imgs))));
  pickerEl.addEventListener('click', ev => { if(ev.target === pickerEl) closePicker(); });
  document.body.appendChild(pickerEl);
  document.addEventListener('keydown', pickerKey, true);
  drawImages();
  const inp = search.querySelector('input'); if(inp) setTimeout(() => inp.focus(), 30);
}
// ---------------------------------------------------------------------------
// SAMM 3: kinnitus, salvestamine, lehed (N5, N6, N18, N20, N24–N28)
// ---------------------------------------------------------------------------
function confirmTest(){
  const n = S.questions.length;
  if(!n) return;
  if(n !== S.settings.count && !confirm('Testis on ' + n + ' küsimust, küsimuste arvuks on määratud ' + S.settings.count + '. Kinnitada ' + n + ' küsimusega?')) return;
  S.settings.count = n;
  // Muutmata test (nt failist avatud ja tagasi kinnitatud) säilitab kuupäeva ja linnukesed.
  if(sig() !== S.confirmedSig && sig() !== S.savedSig) S.created = todayISO();
  S.confirmedSig = sig();
  goStep(3);
}

function renderStep3(){
  const panel = h('div', {class: 'panel ct-panel'});
  panel.appendChild(h('div', {class: 'ct-summary'},
    h('div', {class: 'ct-summary-title'}, testName()),
    h('div', null, modeText())));
  if(S.savedSig && S.savedSig !== sig()){
    panel.appendChild(h('div', {class: 'ct-notice', role: 'note'}, 'Test on muutunud pärast salvestamist – salvesta uus testifail ja prindi lehed uuesti. Vana fail ja vanad lehed enam ei kehti.'));
  }else if(S.fromFile){
    panel.appendChild(h('p', {class: 'ct-help'}, 'Test avati failist. Lehti saab uuesti printida ja testi alustada.'));
  }
  const items = [
    {key: 'test', title: 'Salvesta test', btn: isDone('test') ? 'Salvesta uuesti' : 'Salvesta test',
     text: 'Laeb alla testifaili ' + fileName() + '. Hoia see fail alles – topeltklõps avab testi hiljem uuesti. Failis on ka vastused, ära jaga seda õpilastele.',
     run: saveTestFile},
    {key: 'key', title: 'Vastuste leht', btn: 'Prindi vastuste leht',
     text: 'Avab printimisakna. Prindi või vali printeriks „Salvesta PDF-ina“.', run: () => printSheet('key')},
    {key: 'sheet', title: 'Õpilase leht', btn: 'Prindi õpilase leht',
     text: 'Avab printimisakna. Lehel on NIMI, KUUPÄEV ja ' + S.questions.length + ' nummerdatud rida.', run: () => printSheet('sheet')}
  ];
  const nextKey = items.find(it => !isDone(it.key));
  const ol = h('ol', {class: 'ct-todo'});
  items.forEach((it, i) => {
    const isNext = nextKey && nextKey.key === it.key;
    const done = isDone(it.key);
    ol.appendChild(h('li', {class: 'ct-todo-item' + (done ? ' is-done' : '') + (isNext ? ' is-next' : '')},
      h('span', {class: 'ct-todo-mark', 'aria-hidden': 'true'}, done ? '✓' : String(i + 1)),
      h('div', {class: 'ct-todo-body'}, h('b', null, it.title), h('span', null, it.text)),
      h('button', {type: 'button', class: isNext ? 'primary' : '', onclick: () => { it.run(); if(it.key === 'test') S.savedSig = sig(); else S.doneSig[it.key] = sig(); render(); }}, it.btn)));
  });
  panel.appendChild(ol);
  panel.appendChild(h('div', {class: 'ct-actions'},
    h('button', {type: 'button', onclick: () => goStep(2)}, '‹ Muuda pilte'),
    h('button', {type: 'button', onclick: leave}, 'Valmis, menüüsse'),
    h('button', {type: 'button', class: 'primary ct-start', onclick: openProjector}, 'Alusta testi ›')));
  panel.appendChild(h('p', {class: 'ct-help'}, 'Alusta testi avab projektorivaate täisekraanis. Liikumine: ' + (S.settings.mode === 'auto' ? 'automaatne, paus tühikuga.' : 'nool paremale, tühik, PageDown või esitluspult.') + ' Täisekraanist väljub Esc, testi sulgeb ✕.'));
  screen.appendChild(panel);
}

function fileName(){
  const base = (S.settings.name || '').trim().replace(/[\\/:*?"<>|#%]+/g, '').replace(/\s+/g, '_').slice(0, 60) || 'Tehnikatest';
  return base + '_' + (S.created || todayISO()) + '_' + S.questions.length + 'kys.html';
}

function testData(){
  return {
    kind: FILE_KIND, version: FILE_VERSION,
    created: S.created || todayISO(),
    name: (S.settings.name || '').trim(),
    app: (typeof window !== 'undefined' && window.__appBuild) || '',
    settings: {mode: S.settings.mode, viewSec: S.settings.viewSec, writeSec: S.settings.writeSec},
    questions: S.questions.map(x => ({cat: x.cat, file: x.file, label: x.label, type: x.type}))
  };
}
function b64urlEncode(str){
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  for(let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(s){
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while(s.length % 4) s += '=';
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for(let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}
function escHtml(t){ return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function saveTestFile(){
  const data = testData();
  const json = JSON.stringify(data);
  const appUrl = location.href.split('#')[0];
  const target = appUrl + HASH_KEY + b64urlEncode(json);
  const title = testName();
  const html = '<!doctype html>\n<html lang="et"><head><meta charset="utf-8">\n'
    + '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
    + '<title>' + escHtml(title) + '</title>\n'
    + '<!-- Tehnikatuvastuse kureeritud test. Topeltklõps avab testi Tehnikatuvastuse äpis. Failis on ka vastused – ära jaga õpilastele. -->\n'
    + '<script type="application/json" id="tehnikatuvastus-test">' + json.replace(/</g, '\\u003c') + '</script>\n'
    + '<script>location.replace(' + JSON.stringify(target).replace(/</g, '\\u003c') + ');</script>\n'
    + '<style>body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#14170f;color:#d9d9c4;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;box-sizing:border-box}a{color:#c9a227;font-size:20px}</style>\n'
    + '</head><body><div><p>' + escHtml(title) + '</p><p>Avan Tehnikatuvastuse…</p>'
    + '<p><a href="' + escHtml(target) + '">Kui test ei avanenud, vajuta siia</a></p></div></body></html>\n';
  const blob = new Blob([html], {type: 'text/html'});
  const a = h('a', {href: URL.createObjectURL(blob), download: fileName()});
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}

// --- Prinditavad lehed (brauseri printimisaken, N20) ---
let printCleanup = null;
function printSheet(kind){
  if(printCleanup) printCleanup();
  let box = document.getElementById('ctPrint');
  if(!box){ box = h('div', {id: 'ctPrint'}); document.body.appendChild(box); }
  box.innerHTML = '';
  const n = S.questions.length;
  const cols = kind === 'key' ? (n <= 30 ? 1 : n <= 70 ? 2 : 3) : (n <= 20 ? 1 : n <= 60 ? 2 : 3);
  const rows = Math.ceil(n / cols);
  const avail = kind === 'key' ? 245 : 225;                     // mm lehe kasutatavast kõrgusest
  const rowMm = Math.min(kind === 'key' ? 9 : 12, avail / rows);
  const grid = h('div', {class: 'ct-pr-grid ct-pr-' + kind});
  grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  // Vastuste lehel võib pikk nimi minna kahele reale – rida kasvab (minmax), õpilase lehel on read fikseeritud.
  grid.style.gridTemplateRows = 'repeat(' + rows + ', ' + (kind === 'key' ? 'minmax(' + rowMm.toFixed(2) + 'mm, auto)' : rowMm.toFixed(2) + 'mm') + ')';
  if(kind === 'key') grid.style.fontSize = cols === 1 ? '12pt' : cols === 2 ? '10pt' : '8.5pt';
  S.questions.forEach((q, i) => {
    if(kind === 'key') grid.appendChild(h('div', {class: 'ct-pr-row'}, h('span', {class: 'ct-pr-nr'}, (i + 1) + '.'), h('span', null, answerText(q))));
    else grid.appendChild(h('div', {class: 'ct-pr-row'}, h('span', {class: 'ct-pr-nr'}, (i + 1) + '.'), h('span', {class: 'ct-pr-line'})));
  });
  if(kind === 'key'){
    box.appendChild(h('h1', null, 'Vastuste leht'));
  }else{
    box.appendChild(h('div', {class: 'ct-pr-head'},
      h('div', null, 'NIMI:', h('span', {class: 'ct-pr-line'})),
      h('div', null, 'KUUPÄEV:', h('span', {class: 'ct-pr-line'}))));
  }
  box.appendChild(grid);
  const oldTitle = document.title;
  // Pealkiri = PDF-faili vaikimisi nimi "Salvesta PDF-ina" puhul.
  document.title = (kind === 'key' ? 'Vastuste leht' : 'Õpilase leht') + ' – ' + testName().replace(/ · /g, ' ');
  document.body.classList.add('ct-printing');
  let cleaned = false;
  const cleanup = () => {
    if(cleaned) return; cleaned = true;
    document.body.classList.remove('ct-printing');
    document.title = oldTitle;
    window.removeEventListener('afterprint', cleanup);
    printCleanup = null;
  };
  printCleanup = cleanup;
  window.addEventListener('afterprint', cleanup);
  // Prindireeglid kehtivad ainult @media print all, seega ekraanil ei muutu midagi ka siis, kui afterprint jääb tulemata.
  setTimeout(() => window.print(), 30);
}

// ---------------------------------------------------------------------------
// Testi avamine: räsi (#kureeritud=…) või fail (Ava salvestatud test / lohistamine) – N28
// ---------------------------------------------------------------------------
function parseTestText(text){
  let data = null;
  const t = String(text || '').trim();
  if(t.startsWith('{')) data = JSON.parse(t);
  else{
    const m = /<script[^>]*id=["']tehnikatuvastus-test["'][^>]*>([\s\S]*?)<\/script>/i.exec(t);
    if(!m) throw new Error('Failist ei leitud Tehnikatuvastuse testi.');
    data = JSON.parse(m[1]);
  }
  return data;
}
function loadTest(data, source){
  if(!data || data.kind !== FILE_KIND || !Array.isArray(data.questions) || !data.questions.length){
    throw new Error('See ei ole Tehnikatuvastuse kureeritud test.');
  }
  const st = data.settings || {};
  S.settings = {
    count: data.questions.length,
    mode: st.mode === 'auto' ? 'auto' : 'manual',
    viewSec: clampInt(st.viewSec, 1, 600, DEFAULTS.viewSec),
    writeSec: clampInt(st.writeSec, 1, 600, DEFAULTS.writeSec),
    name: typeof data.name === 'string' ? data.name.slice(0, 80) : ''
  };
  S.questions = data.questions.slice(0, MAX_Q).map(x => {
    const e = entryOf(x.cat);
    const ok = !!(e && e.files && e.files.includes(x.file));
    return {cat: String(x.cat || ''), file: String(x.file || ''), label: String(x.label || (e ? e.label : x.cat) || ''), type: String(x.type || (e ? e.type : '') || ''), missing: !ok || undefined};
  });
  S.created = /^\d{4}-\d{2}-\d{2}$/.test(data.created || '') ? data.created : todayISO();
  S.doneSig = {key: null, sheet: null};
  S.fromFile = true;
  S.ruleMsg = '';
  S.rulesOpen = false;
  const missing = S.questions.filter(x => x.missing).length;
  closeProjector(true);
  showScreen();
  // Failist avatud test loetakse salvestatuks; kui pilte puudub, tuleb need vahetada ja uus fail salvestada.
  S.savedSig = missing ? null : sig();
  S.confirmedSig = missing ? null : sig();
  if(missing){
    S.fromFile = false;
    S.notice = 'Testis on ' + missing + ' küsimust, mille pilti äpis enam pole (andmebaasi on vahepeal muudetud). Vaheta need pildid ja kinnita test uuesti – siis salvesta ka uus testifail.';
    S.step = 2;
    render();
  }else{
    S.notice = '';
    S.step = 3;
    render();
  }
  window.scrollTo(0, 0);
}
function openFromFile(file){
  if(!file) return;
  const r = new FileReader();
  r.onload = () => {
    try{ loadTest(parseTestText(r.result), 'file'); }
    catch(e){ alert('Testi avamine ebaõnnestus: ' + (e && e.message ? e.message : e)); }
  };
  r.onerror = () => alert('Faili lugemine ebaõnnestus.');
  r.readAsText(file);
}
function checkHash(){
  if(!location.hash.startsWith(HASH_KEY)) return;
  const raw = location.hash.slice(HASH_KEY.length);
  try{ window.history.replaceState(window.history.state, '', location.href.split('#')[0]); }catch(e){}
  try{ loadTest(JSON.parse(b64urlDecode(raw)), 'hash'); }
  catch(e){ alert('Testi avamine ebaõnnestus: fail on vigane või katki.'); }
}

function openNew(){
  S.step = 1;
  S.settings = {...DEFAULTS};
  S.questions = [];
  S.rules = {counts: {}, noRepeat: true, excluded: []};
  S.ruleMsg = '';
  S.rulesOpen = null;
  S.savedSig = null;
  S.doneSig = {key: null, sheet: null};
  S.confirmedSig = null;
  S.fromFile = false;
  S.created = null;
  S.notice = '';
  showScreen();
  render();
  window.scrollTo(0, 0);
}

// ---------------------------------------------------------------------------
// PROJEKTORIVAADE (N3, N4, N15–N17, N21–N23)
// Iga küsimus: 'view' (pilt + number) → 'write' (pilt kadunud, number + "Kirjuta vastus") → järgmine.
// Ekraanil ei ole failinime, allikat ega vihjeid; pildi alt on tühi (katkise pildi korral ei ilmu tekst).
// ---------------------------------------------------------------------------
const P = {el: null, phase: 'start', i: 0, urls: [], loaded: 0, failed: 0, paused: false,
  phaseStart: 0, phaseDur: 0, remaining: 0, raf: 0, timer: 0, hideCtrl: 0, wake: null, popGuard: false};

function openProjector(){
  closeProjector(true);
  const n = S.questions.length;
  if(!n) return;
  P.phase = 'start'; P.i = 0; P.urls = new Array(n).fill(null); P.loaded = 0; P.failed = 0; P.paused = false;
  const el = h('div', {class: 'ct-proj', id: 'ctProj', tabindex: '-1'});
  el.innerHTML =
    '<div class="ct-proj-top"><div class="ct-proj-num"></div><div class="ct-proj-pause" hidden>PAUS</div></div>'
    + '<div class="ct-proj-stage">'
    +   '<img class="ct-proj-img" alt="" draggable="false">'
    +   '<div class="ct-proj-write" hidden><div class="ct-proj-write-nr"></div><div class="ct-proj-write-msg">Kirjuta vastus</div></div>'
    +   '<div class="ct-proj-start" hidden></div>'
    +   '<div class="ct-proj-end" hidden><div class="ct-proj-end-msg">Test läbi</div><div class="ct-proj-end-btns">'
    +     '<button type="button" class="ct-proj-showans">Näita vastuseid</button>'
    +     '<button type="button" class="primary ct-proj-close2">Sulge</button></div></div>'
    +   '<div class="ct-proj-answers" hidden><div class="ct-proj-ans-head"><span>Vastused</span><div class="ct-proj-ans-btns">'
    +     '<button type="button" class="ct-proj-ansback">‹ Tagasi</button>'
    +     '<button type="button" class="primary ct-proj-close3">Sulge</button></div></div>'
    +     '<ol class="ct-proj-ans-list"></ol></div>'
    + '</div>'
    + '<div class="ct-proj-bar" hidden><i></i></div>'
    + '<div class="ct-proj-ctrl">'
    +   '<button type="button" data-a="prev" aria-label="Tagasi">‹</button>'
    +   '<button type="button" data-a="pause" aria-label="Paus">❚❚</button>'
    +   '<button type="button" data-a="next" aria-label="Edasi">›</button>'
    +   '<button type="button" data-a="fs" aria-label="Täisekraan">⛶</button>'
    +   '<button type="button" data-a="close" aria-label="Sulge test">✕</button>'
    + '</div>';
  document.body.appendChild(el);
  P.el = el;
  document.body.classList.add('ct-proj-open');
  el.querySelector('.ct-proj-ctrl').addEventListener('click', ev => {
    const b = ev.target.closest('button'); if(!b) return;
    const a = b.dataset.a;
    if(a === 'prev') prev();
    else if(a === 'next') next();
    else if(a === 'pause') togglePause();
    else if(a === 'fs') toggleFs();
    else if(a === 'close') askClose();
  });
  el.querySelector('.ct-proj-close2').addEventListener('click', () => closeProjector());
  el.querySelector('.ct-proj-close3').addEventListener('click', () => closeProjector());
  el.querySelector('.ct-proj-showans').addEventListener('click', () => setPhase('answers'));
  el.querySelector('.ct-proj-ansback').addEventListener('click', () => setPhase('end'));
  el.addEventListener('mousemove', showCtrl);
  el.addEventListener('click', ev => { if(!ev.target.closest('button')) showCtrl(); });
  window.addEventListener('keydown', projKey, true);
  document.addEventListener('fullscreenchange', onFsChange);
  document.addEventListener('webkitfullscreenchange', onFsChange);
  document.addEventListener('visibilitychange', onVisibility);
  try{ window.history.pushState({ctProj: true}, ''); P.popGuard = true; }catch(e){ P.popGuard = false; }
  enterFs();
  wakeOn();
  preload();
  draw();
  showCtrl();
  el.focus();
}
function closeProjector(silent){
  if(!P.el) return;
  stopTimer();
  window.removeEventListener('keydown', projKey, true);
  document.removeEventListener('fullscreenchange', onFsChange);
  document.removeEventListener('webkitfullscreenchange', onFsChange);
  document.removeEventListener('visibilitychange', onVisibility);
  clearTimeout(P.hideCtrl);
  if(fsElement()) exitFs();
  wakeOff();
  P.el.remove();
  P.el = null;
  document.body.classList.remove('ct-proj-open');
  if(P.popGuard){ P.popGuard = false; ignorePop = true; try{ window.history.back(); }catch(e){ ignorePop = false; } }
}
let ignorePop = false;
window.addEventListener('popstate', () => {
  if(ignorePop){ ignorePop = false; return; }
  if(!P.el){
    if(!navPushed || screen.style.display === 'none') return;
    navPushed = false;                      // see kirje on nüüd tarbitud
    if(pickerEl){ closePicker(); pushNav(); return; }
    if(S.step > 1){ goStep(S.step - 1); pushNav(); return; }
    if(confirmLeave()){
      screen.style.display = 'none';
      if(typeof goHome === 'function') goHome();
    }else pushNav();
    return;
  }
  // Telefoni/brauseri tagasi-nupp: ei lõpeta testi kogemata.
  if(P.phase !== 'end' && P.phase !== 'answers' && P.phase !== 'start'){
    pauseTimer(true);
    if(!confirm('Lõpetada test ja sulgeda projektorivaade?')){
      try{ window.history.pushState({ctProj: true}, ''); }catch(e){}
      return;
    }
  }
  P.popGuard = false;
  closeProjector();
});
function askClose(){
  if(P.phase === 'end' || P.phase === 'answers' || P.phase === 'start' || confirm('Lõpetada test ja sulgeda projektorivaade?')) closeProjector();
}

function preload(){
  S.questions.forEach((q, i) => {
    imageUrl(q.file).then(u => new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(u); im.onerror = rej; im.src = u;
    })).then(u => { P.urls[i] = u; P.loaded++; drawStart(); })
      .catch(() => { P.failed++; drawStart(); });
  });
}
function drawStart(){
  if(!P.el || P.phase !== 'start') return;
  const n = S.questions.length, doneCount = P.loaded + P.failed;
  const box = P.el.querySelector('.ct-proj-start');
  const ready = doneCount >= n;
  box.innerHTML = '';
  box.append(
    h('div', {class: 'ct-proj-start-title'}, testTitle()),
    h('div', {class: 'ct-proj-start-sub'}, n + ' küsimust'),
    h('div', {class: 'ct-proj-start-sub'}, S.settings.mode === 'auto' ? 'Iga pilt ' + S.settings.viewSec + ' s, vastuse kirjutamiseks ' + S.settings.writeSec + ' s.' : 'Kirjuta vastus paberile küsimuse numbri juurde.'),
    h('div', {class: 'ct-proj-load'}, ready ? (P.failed ? 'Pildid valmis (' + P.failed + ' ei laadinud)' : 'Pildid valmis') : 'Laen pilte… ' + doneCount + ' / ' + n),
    h('button', {type: 'button', class: 'primary ct-proj-go', disabled: !ready, onclick: () => { P.i = 0; setPhase('view'); }}, 'Alusta'));
}
function setPhase(ph){
  P.phase = ph;
  P.paused = false;
  draw();
  if(S.settings.mode === 'auto' && (ph === 'view' || ph === 'write')) startTimer((ph === 'view' ? S.settings.viewSec : S.settings.writeSec) * 1000);
  else stopTimer();
}
function draw(){
  if(!P.el) return;
  const n = S.questions.length, el = P.el;
  const num = el.querySelector('.ct-proj-num');
  const img = el.querySelector('.ct-proj-img');
  const write = el.querySelector('.ct-proj-write');
  const start = el.querySelector('.ct-proj-start');
  const end = el.querySelector('.ct-proj-end');
  const bar = el.querySelector('.ct-proj-bar');
  const showNum = P.phase === 'view' || P.phase === 'write';
  num.innerHTML = showNum ? '<b>' + (P.i + 1) + '</b><span> / ' + n + '</span>' : '';
  el.querySelector('.ct-proj-top').classList.toggle('is-empty', !showNum);
  el.querySelector('.ct-proj-top').hidden = P.phase === 'answers';
  start.hidden = P.phase !== 'start';
  end.hidden = P.phase !== 'end';
  const ans = el.querySelector('.ct-proj-answers');
  ans.hidden = P.phase !== 'answers';
  el.querySelector('.ct-proj-stage').classList.toggle('is-answers', P.phase === 'answers');
  if(P.phase === 'answers') drawAnswers(ans.querySelector('.ct-proj-ans-list'));
  write.hidden = P.phase !== 'write';
  if(P.phase === 'write') write.querySelector('.ct-proj-write-nr').textContent = String(P.i + 1);
  if(P.phase === 'view'){
    const u = P.urls[P.i];
    img.hidden = false;
    if(u){ if(img.getAttribute('src') !== u) img.src = u; img.classList.remove('is-err'); }
    else{
      img.removeAttribute('src');
      img.classList.add('is-err');
      imageUrl(S.questions[P.i].file).then(x => { if(P.el && P.phase === 'view' && P.urls[P.i] == null){ P.urls[P.i] = x; img.src = x; img.classList.remove('is-err'); } }).catch(() => {});
    }
  }else{
    img.hidden = true;
  }
  bar.hidden = !(S.settings.mode === 'auto' && showNum);
  el.querySelector('.ct-proj-pause').hidden = !P.paused;
  const pb = el.querySelector('[data-a="pause"]');
  pb.hidden = S.settings.mode !== 'auto';
  pb.textContent = P.paused ? '▶' : '❚❚';
  if(P.phase === 'start') drawStart();
}
// Kõik õiged vastused ühel ekraanil (õpetaja valikul pärast "Test läbi"). Tulpade arv ja kirja suurus sõltuvad küsimuste arvust.
function drawAnswers(list){
  const n = S.questions.length;
  const cols = n <= 10 ? 1 : n <= 24 ? 2 : n <= 48 ? 3 : 4;
  const rows = Math.ceil(n / cols);
  list.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';
  list.style.gridTemplateRows = 'repeat(' + rows + ', auto)';
  list.innerHTML = '';
  S.questions.forEach((q, i) => list.appendChild(h('li', null, h('b', null, (i + 1) + '.'), h('span', null, answerText(q)))));
  // Kiri nii suur kui võimalik, aga kõik vastused peavad mahtuma ühele ekraanile (ilma kerimiseta).
  let size = Math.min(4.6, 80 / rows);
  list.style.fontSize = size.toFixed(2) + 'vh';
  requestAnimationFrame(() => {
    while(size > 1.2 && list.scrollHeight > list.clientHeight + 1){
      size -= 0.15;
      list.style.fontSize = size.toFixed(2) + 'vh';
    }
  });
}
function next(){
  const n = S.questions.length;
  if(P.phase === 'end' || P.phase === 'answers') return;
  if(P.phase === 'start'){ if(P.loaded + P.failed >= n){ P.i = 0; setPhase('view'); } return; }
  if(P.phase === 'view') return setPhase('write');
  if(P.phase === 'write'){
    if(P.i + 1 < n){ P.i++; return setPhase('view'); }
    return setPhase('end');
  }
}
function prev(){
  if(P.phase === 'answers') return setPhase('end');
  if(P.phase === 'end'){ P.i = S.questions.length - 1; return setPhase('write'); }
  if(P.phase === 'write') return setPhase('view');
  if(P.phase === 'view' && P.i > 0){ P.i--; return setPhase('write'); }
}

// --- Taimer ja ajariba (ainult automaatrežiim) ---
function startTimer(ms){
  stopTimer();
  P.phaseDur = ms; P.remaining = ms; P.phaseStart = performance.now();
  tick();
}
function stopTimer(){ cancelAnimationFrame(P.raf); P.raf = 0; }
function tick(){
  if(!P.el) return;
  const fill = P.el.querySelector('.ct-proj-bar i');
  const elapsed = P.phaseDur - P.remaining + (performance.now() - P.phaseStart);
  const frac = Math.min(1, elapsed / P.phaseDur);
  fill.style.width = (100 - frac * 100) + '%';
  if(frac >= 1){ P.raf = 0; next(); return; }
  P.raf = requestAnimationFrame(tick);
}
function pauseTimer(force){
  if(S.settings.mode !== 'auto' || !(P.phase === 'view' || P.phase === 'write') || P.paused) return;
  P.remaining = Math.max(0, P.remaining - (performance.now() - P.phaseStart));
  P.paused = true;
  stopTimer();
  draw();
}
function resumeTimer(){
  if(!P.paused) return;
  P.paused = false;
  P.phaseStart = performance.now();
  draw();
  tick();
}
function togglePause(){ if(P.paused) resumeTimer(); else pauseTimer(); }

// --- Klaviatuur / esitluspult ---
function projKey(ev){
  if(!P.el) return;
  if(ev.ctrlKey || ev.metaKey || ev.altKey) return;
  const k = ev.key;
  const auto = S.settings.mode === 'auto';
  let handled = true;
  if(k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === 'Enter') next();
  else if(k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') prev();
  else if(k === ' ' || k === 'Spacebar') { if(auto && (P.phase === 'view' || P.phase === 'write')) togglePause(); else next(); }
  else if(k === 'p' || k === 'P') togglePause();
  else if(k === 'f' || k === 'F') toggleFs();
  else if(k === 'Escape') { handled = false; }     // brauser väljub täisekraanist; test jääb alles
  else handled = false;
  if(handled){ ev.preventDefault(); ev.stopImmediatePropagation(); showCtrl(); }
  else if(k !== 'Tab') ev.stopImmediatePropagation();   // ära lase äpi muudel kiirklahvidel reageerida
}
function showCtrl(){
  if(!P.el) return;
  P.el.classList.add('show-ctrl');
  clearTimeout(P.hideCtrl);
  P.hideCtrl = setTimeout(() => { if(P.el) P.el.classList.remove('show-ctrl'); }, 2500);
}

// --- Täisekraan ja ekraani ärkvel hoidmine ---
function fsElement(){ return document.fullscreenElement || document.webkitFullscreenElement || null; }
function enterFs(){
  const el = P.el; if(!el) return;
  try{
    const r = el.requestFullscreen ? el.requestFullscreen() : el.webkitRequestFullscreen ? el.webkitRequestFullscreen() : null;
    if(r && r.catch) r.catch(() => {});
  }catch(e){}
}
function exitFs(){
  try{
    const r = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : null;
    if(r && r.catch) r.catch(() => {});
  }catch(e){}
}
function toggleFs(){ if(fsElement()) exitFs(); else enterFs(); }
function onFsChange(){
  if(!P.el) return;
  P.el.classList.toggle('is-fs', !!fsElement());
  if(!fsElement()){ pauseTimer(); showCtrl(); }
}
async function wakeOn(){
  try{ if('wakeLock' in navigator && document.visibilityState === 'visible') P.wake = await navigator.wakeLock.request('screen'); }
  catch(e){ P.wake = null; }
}
function wakeOff(){ try{ if(P.wake) P.wake.release(); }catch(e){} P.wake = null; }
function onVisibility(){ if(document.visibilityState === 'visible' && P.el) wakeOn(); }

// ---------------------------------------------------------------------------
// Avalehe nupud, lohistamine, käivitus
// ---------------------------------------------------------------------------
function wireHome(){
  const title = document.getElementById('titleHome');
  if(title) title.addEventListener('click', ev => {
    if(screen.style.display === 'none') return;
    if(!confirmLeave()){ ev.stopImmediatePropagation(); ev.preventDefault(); }
  }, true);
  const btn = document.getElementById('startCuratedBtn');
  const openBtn = document.getElementById('openCuratedBtn');
  const input = document.getElementById('openCuratedInput');
  if(btn) btn.addEventListener('click', openNew);
  if(openBtn && input){
    openBtn.addEventListener('click', () => { input.value = ''; input.click(); });
    input.addEventListener('change', () => openFromFile(input.files && input.files[0]));
  }
  // Testifaili lohistamine äpi aknasse (avalehel või kureerimise vaates).
  const isFileDrag = ev => ev.dataTransfer && Array.from(ev.dataTransfer.types || []).includes('Files');
  const canDrop = () => {
    const home = document.getElementById('homeScreen');
    return (home && home.style.display !== 'none') || screen.style.display !== 'none';
  };
  document.addEventListener('dragover', ev => { if(isFileDrag(ev) && canDrop()){ ev.preventDefault(); ev.dataTransfer.dropEffect = 'copy'; } });
  document.addEventListener('drop', ev => {
    if(!isFileDrag(ev) || !canDrop()) return;
    const f = ev.dataTransfer.files && ev.dataTransfer.files[0];
    if(!f || !/\.(html?|json)$/i.test(f.name)) return;
    ev.preventDefault();
    openFromFile(f);
  });
}

window.CuratedTest = {open: openNew, hide, openFile: openFromFile, _state: S, _parse: parseTestText, _load: loadTest};
wireHome();
checkHash();
window.addEventListener('hashchange', checkHash);
})();
