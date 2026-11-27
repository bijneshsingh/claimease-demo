/* ClaimEase – concept demo. Built from the final Figma screens. Sample data only. */
'use strict';

/* ---------- Icons (24px grid, 2px stroke) ---------- */
const P = {
  home:'<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  claims:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.7M12 17.5h.01"/>',
  bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>', close:'<path d="M6 6l12 12M18 6L6 18"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>', checkc:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  alert:'<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4M12 17h.01"/>', info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  camera:'<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>', edit:'<path d="M4 20h4L19 9l-4-4L4 16zM14 6l4 4"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>', send:'<path d="M4 12L20 4l-6 16-3-7z"/>', chev:'<path d="M9 6l6 6-6 6"/>',
  shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  ai:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  bank:'<path d="M3 9l9-5 9 5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>', download:'<path d="M12 4v12M7 11l5 5 5-5M4 20h16"/>',
  wifioff:'<path d="M3 3l18 18M8.5 16.5a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 5-2.6M19 12.5a10 10 0 0 0-2.4-1.7M2 8.8a15 15 0 0 1 4.3-2.6M22 8.8A15 15 0 0 0 11 5M12 20h.01"/>',
  plus:'<path d="M12 5v14M5 12h14"/>', phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>', clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5-9 9"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>', hash:'<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
  scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8"/>',
  pill:'<rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/>', steth:'<path d="M6 3v6a5 5 0 0 0 10 0V3M11 14v2a4 4 0 0 0 8 0v-3"/><circle cx="19" cy="11" r="2"/>', flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>',
  hospital:'<path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16M9 21v-5h6v5M12 7v6M9 10h6"/>', paperclip:'<path d="M20 12l-8.5 8.5a5 5 0 0 1-7-7L13 5a3.3 3.3 0 0 1 4.7 4.7L9.2 18.2a1.7 1.7 0 0 1-2.4-2.4L15 7.6"/>'
};
const ic = (n, s = 24, c = 'currentColor', w = 2) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const LOGO_INNER = `<path d="M50 4C36 12 23 15 11 17C8 17.6 6 20 6 23V48C6 72 25 88 50 96C75 88 94 72 94 48V23C94 20 92 17.6 89 17C77 15 64 12 50 4Z" fill="#0B1B2B"/><circle cx="34" cy="33" r="9" fill="#fff"/><circle cx="66" cy="33" r="9" fill="#fff"/><path d="M19 68V58C19 50 25.5 45 34 45C39 45 43 47 45.5 50V68H19Z" fill="#fff"/><path d="M81 68V58C81 50 74.5 45 66 45C61 45 57 47 54.5 50V68H81Z" fill="#fff"/><circle cx="50" cy="51" r="6.5" fill="#fff" stroke="#0B1B2B" stroke-width="2.5"/><path d="M39 70C39 63 43.5 59 50 59C56.5 59 61 63 61 70H39Z" fill="#fff" stroke="#0B1B2B" stroke-width="2.5"/><path d="M14 69C24 62 37 61 49 64.5C55 66.2 59 66 63 65C67.5 64 69 68 65.5 70C61 72.5 55 72.5 50 72L65 71.5L81 58C84.5 55 89.5 58 87 62C79 74 66 85 50 86.5C34 87.5 22 81 14 69Z" fill="#0E7C66" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>`;
const LOGO = (s = 32) => `<svg width="${s}" height="${s}" viewBox="0 0 100 100" fill="none" role="img" aria-label="ClaimEase"><path d="M50 4C36 12 23 15 11 17C8 17.6 6 20 6 23V48C6 72 25 88 50 96C75 88 94 72 94 48V23C94 20 92 17.6 89 17C77 15 64 12 50 4Z" fill="#0B1B2B"/><circle cx="34" cy="33" r="9" fill="#fff"/><circle cx="66" cy="33" r="9" fill="#fff"/><path d="M19 68V58C19 50 25.5 45 34 45C39 45 43 47 45.5 50V68H19Z" fill="#fff"/><path d="M81 68V58C81 50 74.5 45 66 45C61 45 57 47 54.5 50V68H81Z" fill="#fff"/><circle cx="50" cy="51" r="6.5" fill="#fff" stroke="#0B1B2B" stroke-width="2.5"/><path d="M39 70C39 63 43.5 59 50 59C56.5 59 61 63 61 70H39Z" fill="#fff" stroke="#0B1B2B" stroke-width="2.5"/><path d="M14 69C24 62 37 61 49 64.5C55 66.2 59 66 63 65C67.5 64 69 68 65.5 70C61 72.5 55 72.5 50 72L65 71.5L81 58C84.5 55 89.5 58 87 62C79 74 66 85 50 86.5C34 87.5 22 81 14 69Z" fill="#0E7C66" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
const RECEIPT = (w = 150) => `<svg width="${w}" height="${w * 1.33}" viewBox="0 0 150 200" aria-hidden="true"><path d="M8 4h134v186l-11-6-11 6-11-6-11 6-11-6-11 6-11-6-11 6-11-6-11 6-11-6-11 6z" fill="#FBFAF6" stroke="#D8D3C4"/><text x="75" y="24" text-anchor="middle" font-family="Inter" font-size="10" font-weight="700" fill="#334155">SUNRISE PHARMACY</text><text x="75" y="36" text-anchor="middle" font-family="Inter" font-size="6.5" fill="#64748B">Bill SP/2026/8941 · 12 Nov 2026</text><g fill="#94A3B8">${[52,64,76,88,100,112].map(y => `<rect x="18" y="${y}" width="${60 + (y % 3) * 10}" height="4" rx="2"/><rect x="112" y="${y}" width="20" height="4" rx="2"/>`).join('')}</g><line x1="18" y1="128" x2="132" y2="128" stroke="#CBD5E1" stroke-dasharray="3 3"/><text x="18" y="146" font-family="Inter" font-size="9" font-weight="700" fill="#334155">TOTAL</text><text x="132" y="146" text-anchor="end" font-family="Inter" font-size="10" font-weight="700" fill="#64748B" opacity=".55" style="filter:blur(.8px)">₹4,850</text></svg>`;
const ART = `<svg class="art" viewBox="0 0 150 150" aria-hidden="true"><circle cx="85" cy="70" r="70" fill="#0E7C66" opacity=".35"/><circle cx="112" cy="104" r="34" fill="#7EF0C4" opacity=".35"/><rect x="48" y="28" width="62" height="80" rx="8" fill="#fff" opacity=".35"/><g fill="#94A3B8"><rect x="58" y="42" width="34" height="5" rx="2.5"/><rect x="58" y="54" width="42" height="4" rx="2"/><rect x="58" y="64" width="30" height="4" rx="2"/><rect x="58" y="74" width="38" height="4" rx="2"/></g><circle cx="104" cy="98" r="18" fill="#7EF0C4" opacity=".35"/><path d="M96 98l6 6 10-11" stroke="#0A5C4C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* ---------- Demo data and state ---------- */
const DOCS = [
  { id: 'bill', name: 'Hospital final bill', hint: 'Signed and stamped by the hospital', read: 'Sunrise Hospital · 14 Nov 2026 · ₹52,400' },
  { id: 'discharge', name: 'Discharge summary', hint: 'Signed by the doctor at discharge', read: 'Father · 11 Nov 2026 · 14 Nov 2026' },
  { id: 'pharmacy', name: 'Pharmacy bills', hint: 'All medicine bills during the stay', read: 'Sunrise Pharmacy · 12 Nov 2026 · ₹4,850' },
  { id: 'presc', name: "Doctor's prescriptions", hint: 'Must match the pharmacy bills', read: 'Dr. S. Demo · 12 Nov 2026' },
  { id: 'lab', name: 'Lab and scan reports', hint: 'Reports with their test bills', read: 'Sunrise Diagnostics · 12 Nov 2026 · ₹10,750' },
  { id: 'cheque', name: 'Cancelled cheque', hint: 'So the insurer can pay you', read: 'Demo Bank · XXXX 4417' }
];
const fresh = () => ({
  phone: '', patient: 'father', added: { bill: true }, pharmacyOk: false, pharmacyAmt: '4,850', agreed: false,
  stage: 'none', updates: [{ t: 'Policy DEMO-FF-2026-0042 linked.', d: 'Today' }], unread: false, chat: null
});
let S = load() || fresh();
function load() { try { return JSON.parse(localStorage.getItem('claimease-demo')); } catch (e) { return null; } }
function save() { try { localStorage.setItem('claimease-demo', JSON.stringify(S)); } catch (e) { } }

/* ---------- Router ---------- */
const view = document.getElementById('view');
let stack = [];
const screens = {};
function go(name, params = {}, opt = {}) {
  const entry = { name, params };
  if (opt.root) stack = [entry]; else if (opt.replace) stack[stack.length - 1] = entry; else stack.push(entry);
  if (!opt.replace && !opt.root) try { history.pushState({ d: stack.length }, ''); } catch (e) { }
  render(opt.anim || (opt.root || opt.replace ? 'fade' : 'push'));
}
function back() { if (stack.length > 1) { stack.pop(); render('pop'); } }
window.addEventListener('popstate', () => { if (document.querySelector('.sheet')) { closeSheet(); return; } back(); });
function cur() { return stack[stack.length - 1]; }
function render(anim) {
  const { name, params } = cur();
  const el = document.createElement('div');
  el.className = 'screen in-' + anim + (name === 'splash' ? ' splash' : '');
  el.innerHTML = screens[name](params);
  view.querySelectorAll('.screen').forEach(s => s.remove());
  closeSheet(true);
  view.appendChild(el);
  const st = document.querySelector('.fake-status');
  if (st) { st.style.background = name === 'splash' ? '#0E7C66' : (name === 'login' ? '#E8FAF3' : '#fff'); st.style.color = name === 'splash' ? '#fff' : '#0B1B2B'; }
  (after[name] || (() => { }))(el, params);
  save();
}
const after = {};
const $ = (s, r = document) => r.querySelector(s);

/* ---------- Shared pieces ---------- */
const bar = (title, step, opts = {}) => `<div class="appbar"><button class="iconbtn" aria-label="Back" onclick="back()">${ic(opts.close ? 'close' : 'back')}</button><div class="title">${title}</div>${step ? `<div class="step">${step}</div>` : ''}${opts.action || ''}</div>`;
const rootbar = () => `<div class="appbar root">${LOGO(32)}<div class="wordmark">Claim<span>Ease</span></div><button class="iconbtn" aria-label="Updates" onclick="openUpdates()">${ic('bell')}${S.unread ? '<i class="dot"></i>' : ''}</button><div class="avatar" aria-label="Alex">A</div></div>`;
const prog = n => `<div class="progress4">${[1, 2, 3, 4].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`;
const tabs = active => `<nav class="tabbar">${[['home', 'Home', 'home'], ['claims', 'Claims', 'claimsList'], ['help', 'Help', 'help']].map(([i, l, s]) => `<button class="${active === s ? 'on' : ''}" onclick="go('${s}',{}, {root:true})" aria-label="${l}"><span class="pill">${ic(i, 22)}</span>${l}</button>`).join('')}</nav>`;
const chip = (tone, label, icon) => `<span class="chip ${tone}">${icon ? ic(icon, 14, 'currentColor', 2.25) : ''}${label}</span>`;
const aiNote = () => `<div class="footnote">${ic('ai', 14, '#0E7C66')}<span>AI reads your documents to help you. A claims reviewer makes the final decision.</span></div>`;
const offlineBar = () => navigator.onLine ? '' : `<div class="offline">${ic('wifioff', 18, '#7EF0C4')}<span class="grow">You're offline. Showing saved info. Scans will upload when you reconnect.</span></div>`;
const policyCard = (usedText, pct, members = ['Alex', 'Father']) => `<div class="policy"><div class="between" style="align-items:flex-start"><div><div class="small muted">Demo Health Insurance</div><div class="pc-plan">Family Floater</div></div>${chip('brand', 'Active', 'shield')}</div><div><div class="small muted">Policy number</div><div class="pc-v">DEMO-FF-2026-0042</div></div><div class="between"><div><div class="small muted">Sum insured</div><div class="pc-v">₹5,00,000</div></div><div style="text-align:right"><div class="small muted">Valid till</div><div class="pc-v">31 Mar 2027</div></div></div>${usedText ? `<div><div class="between small" style="margin-bottom:8px"><span class="muted">${usedText}</span><span class="strong" style="color:var(--teal)">${pct}% available</span></div><div class="pc-track"><i style="width:${Math.max(3, 100 - pct)}%"></i></div></div>` : ''}<div><div class="small muted" style="margin-bottom:6px">Covered members</div><div class="row" style="gap:8px">${members.map(m => `<span class="pc-chip">${m}</span>`).join('')}</div></div></div>`;
const stageInfo = () => ({
  review: ['info', 'Medical review', 'clock'], action: ['critical', 'Action needed', 'alert'], restarted: ['info', 'Review restarted', 'clock'],
  approved: ['success', 'Approved', 'checkc'], credited: ['success', 'Paid ₹62,600', 'bank']
})[S.stage];

/* ---------- Sheets and toasts ---------- */
function sheet(html) {
  closeSheet(true);
  const scr = cur() && view.lastElementChild;
  const sc = document.createElement('div'); sc.className = 'scrim'; sc.onclick = () => closeSheet();
  const sh = document.createElement('div'); sh.className = 'sheet'; sh.setAttribute('role', 'dialog'); sh.innerHTML = '<div class="handle"></div>' + html;
  scr.appendChild(sc); scr.appendChild(sh);
  return sh;
}
function closeSheet(instant) { document.querySelectorAll('.scrim,.sheet').forEach(n => n.remove()); }
let toastTimer;
function toast(text, action, onTap, ms = 2800) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status');
  t.innerHTML = `${ic('info', 20, '#7EF0C4')}<span class="grow">${text}</span>${action ? `<span class="a">${action}</span>` : ''}`;
  t.onclick = () => { t.remove(); if (onTap) onTap(); };
  document.getElementById('device').appendChild(t);
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.remove(), ms);
}
function pushUpdate(text, tap) {
  S.updates.unshift({ t: text, d: 'Just now' }); S.unread = true; save();
  const b = document.querySelector('.appbar.root .iconbtn'); if (b && !b.querySelector('.dot')) b.insertAdjacentHTML('beforeend', '<i class="dot"></i>');
  toast('Update · ' + text, 'View', tap, 7000);
}

/* ---------- Story: the claim moves on its own after you submit ---------- */
let storyTimer;
function story(nextStage, delay) {
  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    if (nextStage === 'action' && S.stage === 'review') { S.stage = 'action'; pushUpdate('Action needed on #CE-20481: upload the doctor\'s prescription.', () => go('tracker')); refreshIf(['tracker', 'home', 'claimsList']); }
    if (nextStage === 'approved' && S.stage === 'restarted') { S.stage = 'approved'; pushUpdate('Claim #CE-20481 approved: ₹62,600 of ₹68,000.', () => go('tracker')); refreshIf(['tracker', 'home', 'claimsList']); story('credited', 9000); }
    if (nextStage === 'credited' && S.stage === 'approved') { S.stage = 'credited'; pushUpdate('₹62,600 credited to Demo Bank •••• 4417.', () => go('credited')); refreshIf(['tracker', 'home', 'claimsList']); }
  }, delay);
}
function refreshIf(names) { if (names.includes(cur().name)) render('fade'); }
function prescriptionAdded() { S.stage = 'restarted'; S.updates.unshift({ t: 'Prescription received. Medical review has restarted.', d: 'Just now' }); save(); story('approved', 8000); }

/* ======================= SCREENS ======================= */
screens.splash = () => `<div class="glow" style="width:340px;height:340px;right:-120px;top:-80px;opacity:.10"></div><div class="glow" style="width:420px;height:420px;left:-200px;bottom:-160px;opacity:.06;background:#fff"></div><div class="glow" style="width:300px;height:300px;left:50%;top:50%;transform:translate(-50%,-62%);opacity:.14"></div><div style="position:relative"><div class="tile">${LOGO(76)}</div></div><div class="name" style="position:relative">Claim<span>Ease</span></div><div style="opacity:.8;margin-top:6px;position:relative">Health claims, made clear.</div><div class="small" style="position:absolute;bottom:calc(28px + var(--safe-b));opacity:.6">Concept demo · sample data only</div>`;
after.splash = () => setTimeout(() => { if (cur().name === 'splash') go(S.stage !== 'none' ? 'home' : 'login', {}, { root: true }); }, 1700);

screens.login = () => `<div class="lg-hero"><svg viewBox="0 0 390 470" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><filter id="lgs" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#0B1B2B" flood-opacity=".22"/></filter></defs><path d="M195 400C277.843 400 345 332.843 345 250C345 167.157 277.843 100 195 100C112.157 100 45 167.157 45 250C45 332.843 112.157 400 195 400Z" fill="#BDEFD9" fill-opacity="0.55"/><path d="M195 360C255.751 360 305 310.751 305 250C305 189.249 255.751 140 195 140C134.249 140 85 189.249 85 250C85 310.751 134.249 360 195 360Z" fill="white" fill-opacity="0.55"/><path d="M70 150L74 162L86 166L74 170L70 182L66 170L54 166L66 162L70 150Z" fill="#0E7C66"/><path d="M320 120L323 129L332 132L323 135L320 144L317 135L308 132L317 129L320 120Z" fill="#0E7C66"/><path d="M330 330L334 341L345 345L334 349L330 360L326 349L315 345L326 341L330 330Z" fill="#0E7C66"/><path d="M60 350L63 358L71 361L63 364L60 372L57 364L49 361L57 358L60 350Z" fill="#0E7C66"/><circle cx="300" cy="200" r="6" fill="#7EF0C4" fill-opacity="0.55"/><circle cx="95" cy="280" r="5" fill="none" stroke-width="2" stroke="#0E7C66"/><circle cx="285" cy="390" r="4" fill="#0E7C66" fill-opacity="0.55"/><g filter="url(#lgs)"><svg x="105" y="160" width="180" height="180" viewBox="0 0 100 100">${LOGO_INNER}</svg></g><svg x="131" y="52" width="32" height="32" viewBox="0 0 100 100">${LOGO_INNER}</svg><text x="171" y="75" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="18" font-weight="700" fill="#0B1B2B">Claim<tspan fill="#0E7C66">Ease</tspan></text></svg></div>
<div class="lg-card"><div class="lg-head"><h1 class="lg-title">Log in</h1><p class="muted">We'll send a one-time code to verify your number.</p></div>
<label class="lg-field" for="ph"><span class="lg-label">Mobile number</span><span class="lg-row"><span class="lg-cc">+91<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="#0B1B2B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="lg-div"></span><input id="ph" inputmode="numeric" autocomplete="tel-national" maxlength="10" placeholder="Enter your mobile number" value="${S.phone}"></span></label>
<button class="btn primary" id="send">Send code</button>
<p class="small muted" style="text-align:center">By continuing, you agree to ClaimEase's <span class="link">Terms</span> and <span class="link">Privacy Policy</span>.</p>
<div class="trust"><span>✓ Secure OTP login</span><span>✓ Your data stays private</span></div></div>`;
after.login = el => {
  const i = $('#ph', el), b = $('#send', el);
  i.oninput = () => { i.value = i.value.replace(/\D/g, ''); };
  b.onclick = () => { if (i.value.length !== 10) { i.closest('.lg-field').classList.add('err'); toast('Enter a 10-digit mobile number. Any number works in this demo.'); i.focus(); return; } S.phone = i.value; go('otp'); };
};

screens.otp = p => `${bar('Verify')}<div class="content stack-lg"><div><h1>Enter the 6-digit code</h1><p class="muted">Sent to +91 ${S.phone.slice(0, 2)}XXXXXX${S.phone.slice(-2)}</p></div>
<div class="otp" id="otp">${[0, 1, 2, 3, 4, 5].map(i => `<input inputmode="numeric" maxlength="1" aria-label="Digit ${i + 1}" autocomplete="${i ? 'off' : 'one-time-code'}">`).join('')}</div>
<div id="otpmsg" class="small muted">Resend code in <span id="cd">0:24</span></div>
<button class="btn primary" id="ver" disabled>Verify</button><p class="small" style="text-align:center;color:var(--text-3)">Demo: any 6 digits work. Try 000000 to see a wrong code.</p></div>`;
after.otp = el => {
  const ins = [...el.querySelectorAll('#otp input')], v = $('#ver', el), box = $('#otp', el); let tries = 3;
  const code = () => ins.map(i => i.value).join('');
  ins.forEach((inp, k) => {
    inp.oninput = () => {
      const d = inp.value.replace(/\D/g, '');
      if (d.length > 1) { d.split('').slice(0, 6 - k).forEach((c, j) => ins[k + j].value = c); ins[Math.min(5, k + d.length)].focus(); }
      else { inp.value = d; if (d && k < 5) ins[k + 1].focus(); }
      box.classList.remove('error'); v.disabled = code().length !== 6;
    };
    inp.onkeydown = e => { if (e.key === 'Backspace' && !inp.value && k) ins[k - 1].focus(); };
  });
  setTimeout(() => ins[0].focus(), 350);
  let s = 24; const t = setInterval(() => { const c = $('#cd', el); if (!c) return clearInterval(t); s--; if (s <= 0) { clearInterval(t); $('#otpmsg', el).innerHTML = '<button class="link" onclick="toast(\'New code sent (demo)\')">Send a new code</button>'; } else c.textContent = '0:' + String(s).padStart(2, '0'); }, 1000);
  v.onclick = () => {
    if (code() === '000000') { tries--; box.classList.remove('error'); void box.offsetWidth; box.classList.add('error'); $('#otpmsg', el).innerHTML = `<div class="banner crit">${ic('alert', 20, '#C8323A')}<span>That code didn't match. ${tries} ${tries === 1 ? 'try' : 'tries'} left. Check the SMS and try again.</span></div>`; ins.forEach(i => i.value = ''); ins[0].focus(); v.disabled = true; return; }
    go('linkPolicy', {}, { root: true });
  };
};

screens.linkPolicy = () => `${bar('Link your policy')}<div class="content stack-lg"><div><h1>Link your health policy</h1><p class="muted">We use it to know your cover, your family members and the documents each claim needs.</p></div>
<button class="optrow" onclick="scanCard()"><span class="optic" style="background:#E8FAF3">${ic('camera', 20, '#0E7C66')}</span><span class="grow"><span class="opt-t">Scan your e-card</span><span class="opt-d">Fastest. Takes a few seconds.</span></span>${ic('chev', 18, '#64748B')}</button>
<button class="optrow" onclick="enterPolicy()"><span class="optic" style="background:#EFF4FF">${ic('claims', 20, '#0B1B2B')}</span><span class="grow"><span class="opt-t">Enter policy number</span><span class="opt-d">It's on your e-card or policy email.</span></span>${ic('chev', 18, '#64748B')}</button></div>`;
window.scanCard = () => { const sh = sheet(`<div class="checking" style="text-align:center;padding:8px 0 4px"><div class="scanbox">${ic('card', 40, '#0E7C66')}</div><h3>Reading your e-card…</h3><p class="muted">Finding your policy and family members.</p></div>`); setTimeout(() => go('policyFound'), 1600); };
window.enterPolicy = () => { const sh = sheet(`<h2>Enter policy number</h2><p class="muted" style="margin-bottom:16px">It's on your e-card or policy email.</p><div class="field"><label>Policy number</label><div class="input"><input id="pn" value="DEMO-FF-2026-0042"></div></div><div class="acts"><button class="btn secondary" onclick="closeSheet()">Cancel</button><button class="btn primary" onclick="go('policyFound')">Find my policy</button></div>`); };

screens.policyFound = () => `${bar('Link your policy')}<div class="content stack-lg"><div class="banner ok">${ic('checkc', 20, '#0E7C66')}<span class="strong" style="color:var(--teal-800)">We found your policy</span></div>${policyCard('', 100, ['Alex · Self', 'Father'])}
<p class="small muted">Check that your family members are right. You can change this later.</p></div><div class="footer"><button class="btn primary" onclick="S.updates=[{t:'Policy DEMO-FF-2026-0042 linked.',d:'Today'}];go('home',{}, {root:true})">Looks right, continue</button></div>`;

screens.home = () => {
  const has = S.stage !== 'none'; const si = stageInfo();
  const claimCard = has ? `<div class="card tap stack" onclick="go('tracker')"><div class="row"><span class="avatar" style="border-radius:12px;width:40px;height:40px">${ic('claims', 20)}</span><div class="grow"><div class="strong">#CE-20481 · Father</div><div class="small muted">Sunrise Hospital · ₹68,000</div></div>${ic('chev', 20, '#94A3B8')}</div><div>${chip(si[0], si[1], si[2])}</div></div>` : '';
  return `${rootbar()}${offlineBar()}<div class="content stack-lg"><div><h1>Hi Alex</h1><p class="muted">Your health cover in one place.</p></div>
${has ? `<div class="stack"><h3>Your claims</h3>${claimCard}<button class="btn secondary md" onclick="startClaim()">${ic('plus', 20)}Start another claim</button></div>` :
      `<div class="hero">${ART}<span class="pill">Reimbursement claim</span><h2>File a new claim</h2><p>Paid the hospital yourself? Scan the bills. AI checks them before you submit.</p><button class="btn mint" style="margin-top:16px" onclick="startClaim()">Start a claim</button></div>`}
${policyCard(has ? '₹68,000 in review' : '₹12,400 used this year', has ? 84 : 97)}
${has ? '' : `<div class="stack"><h3>Your claims</h3><div class="empty">${ic('claims', 28, '#94A3B8')}<p style="margin-top:8px">No claims yet. When you file one, you'll see its status here.</p></div></div>`}</div>${tabs('home')}`;
};
window.startClaim = () => { if (S.stage !== 'none') { toast('Demo: one claim at a time. Reset the demo in Help to file again.'); return; } go('newClaim'); };

screens.newClaim = () => `${bar('New claim', 'Step 1 of 4')}${prog(1)}<div class="content stack-lg"><div><h1>Who was treated?</h1><p class="muted">Tell us about the hospital stay.</p></div>
<div class="stack"><div class="strong">Patient</div>${[['self', 'Alex', 'Self'], ['father', 'Father', 'Father']].map(([k, a, b]) => `<button class="pchoice ${S.patient === k ? 'on' : ''}" onclick="S.patient='${k}';render('fade')"><span class="pradio"></span><span class="grow"><span class="opt-t">${a}</span><span class="opt-d">${b}</span></span></button>`).join('')}</div>
<div class="field"><label>Hospital</label><div class="input"><input value="Sunrise Hospital"></div></div>
<div class="row" style="align-items:flex-start"><div class="field grow"><label>Admitted</label><div class="input"><input value="11 Nov 2026"></div></div><div class="field grow"><label>Discharged</label><div class="input"><input value="14 Nov 2026"></div></div></div>
<p class="small muted">Claim type: Reimbursement (you paid the hospital yourself).</p></div><div class="footer"><button class="btn primary" onclick="go('checklist')">Continue</button></div>`;

const DICON = { bill: 'hospital', discharge: 'claims', pharmacy: 'pill', presc: 'steth', lab: 'flask', cheque: 'bank' };
const nAdded = () => DOCS.filter(d => S.added[d.id]).length;
screens.checklist = () => `${bar('New claim', 'Step 2 of 4')}${prog(2)}<div class="content stack"><div><h1>Documents for this claim</h1><p class="muted">Hospital stay · 3 days · Reimbursement · Father</p></div>
<div class="infobox"><span class="small">Based on your policy, these 6 documents are needed. AI checks each one after you scan it.</span></div>
<div class="stack" style="--gap:8px">${DOCS.map(d => `<div class="docrow" onclick="${S.added[d.id] ? '' : `go('scan',{doc:'${d.id}'})`}" style="cursor:${S.added[d.id] ? 'default' : 'pointer'}"><span class="docic">${ic(DICON[d.id], 20, '#0B1B2B')}</span><div class="grow"><div class="opt-t">${d.name}</div><div class="opt-d">${S.added[d.id] ? 'Added · 2 pages' : d.hint}</div></div>${S.added[d.id] ? chip('success', 'Added') : chip('neutral', 'To add')}</div>`).join('')}</div>
</div>
<div class="footer"><p class="small muted" style="text-align:center;margin-bottom:10px">${nAdded()} of 6 added</p><button class="btn primary" onclick="go('checking')">Check my documents</button><button class="btn secondary" onclick="go('scan',{doc:(DOCS.find(d=>!S.added[d.id])||DOCS[2]).id})">${ic('camera', 20)}Scan documents</button></div>`;

screens.scan = p => {
  const d = p.doc === 'rx' ? { name: "Doctor's prescription (12 Nov)" } : DOCS.find(x => x.id === p.doc);
  const sample = !(p.doc === 'rx' || p.from);
  return `${bar('Scan document')}<div class="content stack"><div class="field"><label>Document type</label><div class="input" style="justify-content:space-between"><span>${d.name}</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="#64748B" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
<div class="camera" id="cam"><div style="transform:rotate(-2deg)">${RECEIPT(150)}</div><div class="scanline"></div><div class="guide">${['tl', 'tr', 'bl', 'br'].map(k => `<span class="c ${k}"></span>`).join('')}</div><span class="cam-hint">Keep all 4 corners in view, in good light.</span><button id="shut" class="shutter" aria-label="Take photo"><span></span></button></div>
<div class="over" style="margin-top:4px">Captured (<span id="n">0</span>)</div><div class="row" style="gap:8px">${chip('success', 'All 4 corners', 'checkc')}${chip('success', 'Text readable', 'checkc')}</div>
<div class="caps" id="caps"></div>
<div class="row"><label class="btn secondary md" style="cursor:pointer">Photo or file<input type="file" accept="image/*,application/pdf" hidden id="file"></label>${sample ? '<button class="btn secondary md" onclick="useSample()">Use sample</button>' : ''}</div></div>
<div class="footer"><button class="btn primary" id="done" disabled>Done</button></div>`;
};
after.scan = (el, p) => {
  let n = 0; const add = () => { n++; $('#n', el).textContent = n; $('#caps', el).insertAdjacentHTML('beforeend', `<span class="capthumb">${RECEIPT(44)}</span>`); const b = $('#done', el); b.disabled = false; b.textContent = `Done (${n} page${n > 1 ? 's' : ''})`; };
  $('#shut', el).onclick = () => { const f = document.createElement('div'); f.className = 'flash'; $('#cam', el).appendChild(f); setTimeout(() => f.remove(), 320); add(); };
  $('#file', el).onchange = e => { if (e.target.files.length) add(); };
  $('#done', el).onclick = () => {
    if (p.doc === 'rx') { prescriptionAdded(); stack = stack.filter(s => !['scan', 'query'].includes(s.name)); if (cur().name !== 'tracker') stack.push({ name: 'tracker', params: {} }); render('pop'); setTimeout(() => toast('Prescription added. Medical review has restarted.'), 400); return; }
    S.added[p.doc] = true; back(); setTimeout(() => toast(`${DOCS.find(x => x.id === p.doc).name} added`), 350);
  };
};
window.useSample = () => { DOCS.forEach(d => { if (d.id !== 'cheque') S.added[d.id] = true; }); back(); setTimeout(() => toast('5 sample documents added. Tap "Check my documents".'), 350); };

screens.checking = () => `${bar('Document check', 'Step 3 of 4')}${prog(3)}<div class="content checking" style="text-align:center"><div class="scanbox">${ic('scan', 36, '#0E7C66')}</div><h1>Checking your documents</h1><p class="muted" id="cstat">Starting…</p>
<div class="card list" style="text-align:left;margin-top:16px;padding:4px 16px">${DOCS.map(d => `<div class="item" id="c-${d.id}"><span class="grow strong">${d.name}</span><span class="small muted st">Waiting</span></div>`).join('')}</div>
<p class="small muted" style="margin-top:16px">${ic('shield', 14, '#64748B')} Your documents stay private. AI only reads them to help you.</p></div>`;
after.checking = el => {
  let i = 0; const step = () => {
    if (cur().name !== 'checking') return;
    if (i > 0) { const pr = $('#c-' + DOCS[i - 1].id, el); pr.querySelector('.st').outerHTML = `<span class="st">${S.added[DOCS[i - 1].id] ? ic('check', 18, '#0E7C66', 2.5) : chip('critical', 'Missing')}</span>`; }
    if (i === DOCS.length) { setTimeout(() => go('aiCheck', {}, { replace: true }), 450); return; }
    const r = $('#c-' + DOCS[i].id, el); r.querySelector('.st').outerHTML = `<span class="st small strong" style="color:var(--teal)">Reading…</span>`;
    $('#cstat', el).textContent = `Reading ${DOCS[i].name.toLowerCase()}… (${i + 1} of 6)`;
    i++; setTimeout(step, 620);
  }; setTimeout(step, 350);
};

const docState = d => !S.added[d.id] ? 'missing' : (d.id === 'pharmacy' && !S.pharmacyOk ? 'check' : 'good');
screens.aiCheck = () => {
  const st = DOCS.map(d => [d, docState(d)]); const c = k => st.filter(x => x[1] === k).length; const good = c('good'), chk = c('check'), mis = c('missing'); const allOk = !chk && !mis;
  const row = (d, s) => s === 'good' ? `<div class="goodrow"><span class="gcheck">${ic('check', 16, '#fff', 3)}</span><div class="grow"><div class="strong">${d.name}${d.id === 'pharmacy' && S.pharmacyOk ? ' <span class="chip success" style="height:20px;padding:0 8px;margin-left:4px">Confirmed by you</span>' : ''}</div><div class="small muted">${d.id === 'pharmacy' ? `Sunrise Pharmacy · 12 Nov 2026 · ₹${S.pharmacyAmt}` : d.read}</div></div><button class="link" onclick="editDoc('${d.id}')">Edit</button></div>` :
    s === 'check' ? `<div class="doc check">${chip('warning', 'Please check', 'alert')}<div class="row" style="margin-top:10px"><span class="thumb" style="background:#FBFAF6">${RECEIPT(40)}</span><div class="grow"><div class="strong">${d.name}</div><div class="small" style="color:#334155">The total is hard to read. We read ₹${S.pharmacyAmt}. Is that right?</div></div></div><div class="actions"><button class="btn secondary md" onclick="editDoc('pharmacy')">Edit</button><button class="btn primary md" onclick="S.pharmacyOk=true;render('fade');toast('Pharmacy bill confirmed')">Yes, correct</button></div></div>` :
      `<div class="doc missing row"><span class="thumb" style="width:40px;height:40px">${ic('plus', 20, '#64748B')}</span><div class="grow"><div class="strong">${d.name}</div><div class="small muted">${d.hint}</div></div><button class="btn secondary md" style="width:auto" onclick="go('scan',{doc:'${d.id}',from:'ai'})">Add now</button></div>`;
  const group = (k, title, tone) => { const items = st.filter(x => x[1] === k); return items.length ? `<div class="secthead"><span class="over">${title} (${items.length})</span></div><div class="${k === 'good' ? 'goodcard' : 'stack'}">${items.map(([d, s]) => row(d, s)).join('')}</div>` : ''; };
  return `${bar('Document check', 'Step 3 of 4')}${prog(3)}<div class="content"><div class="sumtiles"><div style="background:var(--teal-50);color:var(--teal)"><b>${good}</b><span>Looks good</span></div><div style="background:var(--crit-bg);color:var(--crit)"><b>${chk}</b><span>Please check</span></div><div style="background:var(--info-bg);color:var(--info)"><b>${mis}</b><span>Missing</span></div></div>
<div style="margin:14px 0 10px"><span class="aipill">${ic('ai', 14, '#7EF0C4')}AI checked 6 documents in 4 seconds</span></div>
<h1>${allOk ? 'All 6 documents look good' : `${good} of 6 look good`}</h1><p class="muted">${allOk ? "Everything looks complete. You're ready to submit." : `Fix ${chk + mis} item${chk + mis > 1 ? 's' : ''} before you submit. This avoids most insurer queries.`}</p>
${group('check', 'Please check', 'var(--crit)')}${group('missing', 'Missing', 'var(--crit)')}${group('good', 'Looks good', 'var(--teal)')}</div>
<div class="footer">${aiNote()}<button class="btn primary" ${allOk ? '' : 'disabled'} onclick="go('bank')">${allOk ? 'Continue to submit' : `Fix ${chk + mis} item${chk + mis > 1 ? 's' : ''} to continue`}</button></div>`;
};
window.editDoc = id => {
  if (id !== 'pharmacy') { toast('Demo: edit works on the pharmacy bill.'); return; }
  const sh = sheet(`<h2>Edit pharmacy bills</h2><p class="muted" style="margin-bottom:16px">Correct anything the AI read wrong.</p><div class="stack"><div class="field"><label>Pharmacy</label><div class="input"><input value="Sunrise Pharmacy"></div></div><div class="field"><label>Date</label><div class="input"><input value="12 Nov 2026"></div></div><div class="field"><label>Amount (₹)</label><div class="input"><input id="amt" inputmode="numeric" value="${S.pharmacyAmt}"></div></div></div><div class="acts"><button class="btn secondary" onclick="closeSheet()">Cancel</button><button class="btn primary" id="sv">Save</button></div>`);
  $('#sv', sh).onclick = () => { const v = $('#amt', sh).value.replace(/[^\d,]/g, ''); S.pharmacyAmt = v || S.pharmacyAmt; S.pharmacyOk = true; closeSheet(); render('fade'); toast('Saved. Thanks for checking.'); };
};
after.aiCheck = () => { };
// returning from "Add now" lands back on aiCheck automatically (scan pops)

screens.bank = () => `${bar('Payout account', 'Step 4 of 4')}${prog(4)}<div class="content stack-lg"><div><h1>Where should we send your money?</h1><p class="muted">Once approved, the insurer pays directly to this account.</p></div>
<div class="bankcard"><div class="row"><span class="bankic">${ic('bank', 20, '#7EF0C4')}</span><div><div class="strong">Demo Bank</div><div class="small" style="opacity:.7">Savings account</div></div></div><div class="banknum">●●●● ●●●● 4417</div><div class="between small"><div><div style="opacity:.65">Account holder</div><div class="strong">Alex</div></div><div style="min-width:120px"><div style="opacity:.65">IFSC</div><div class="strong">DEMO0002148</div></div></div><div class="bankok">${ic('check', 14, '#7EF0C4', 2.5)}Name matches the policyholder</div></div>
<div class="optrow" style="box-shadow:none"><span class="capthumb" style="width:52px;height:40px">${ic('card', 22, '#64748B')}</span><span class="grow"><span class="opt-t">Read from your cancelled cheque</span><span class="opt-d">AI read the account details. Tap to edit if anything is wrong.</span></span></div>
<button class="link" onclick="toast('Demo: one sample account')">${ic('plus', 16)} Use a different account</button></div><div class="footer"><button class="btn primary" onclick="go('review')">Confirm and review claim</button></div>`;

screens.review = () => `${bar('Review and submit', 'Step 4 of 4')}${prog(4)}<div class="content stack-lg"><div><h1>Check and submit</h1><p class="muted">This is what the insurer will receive.</p></div>
<div class="banner ok"><span class="grow"><b>Claim is complete</b><br><span class="small">All 6 documents checked</span></span><b style="color:var(--teal)">100%</b></div>
<div class="card">${[['Patient', 'Father'], ['Hospital', 'Sunrise Hospital'], ['Stay', '11 Nov – 14 Nov'], ['Policy', 'DEMO-FF-2026-0042'], ['Documents', '6 of 6'], ['Pay to', 'Demo Bank · XXXX 4417']].map(([k, v], i) => `<div class="between" style="padding:10px 0;${i ? 'border-top:1px solid var(--border)' : ''}"><span class="muted">${k}</span><span class="strong">${v}</span></div>`).join('')}<div class="between" style="padding:12px 0 0;border-top:1px solid var(--border)"><span><span class="strong">Total claimed</span><br><span class="small muted">Bills + pharmacy + lab tests</span></span><span style="font-family:var(--head);font-size:22px;font-weight:700">₹68,000</span></div></div>
<div class="cbx ${S.agreed ? 'on' : ''}" onclick="S.agreed=!S.agreed;render('fade')" role="checkbox" aria-checked="${S.agreed}"><span class="box">${S.agreed ? ic('check', 16, '#fff', 3) : ''}</span><span>I confirm these details are correct and the documents are genuine.</span></div></div>
<div class="footer"><button class="btn primary" ${S.agreed ? '' : 'disabled'} id="sub">Submit claim</button></div>`;
after.review = el => { $('#sub', el).onclick = () => { const b = $('#sub', el); b.innerHTML = '<span class="spin" style="border-color:rgba(255,255,255,.3);border-top-color:#fff;width:20px;height:20px;border-radius:10px;border-width:2.5px;border-style:solid;animation:spin .8s linear infinite"></span>Submitting…'; setTimeout(() => { S.stage = 'review'; S.updates.unshift({ t: 'Claim #CE-20481 submitted. Documents are being checked.', d: 'Just now' }); go('submitted', {}, { root: true }); story('action', 9000); }, 900); }; };

screens.submitted = () => `<div class="content stack-lg" style="text-align:center;padding-top:40px"><div class="success-ic"><span>${ic('check', 40, '#0B1B2B', 3.2)}</span></div><h1>Claim submitted</h1><p class="strong" style="color:var(--teal)">Claim #CE-20481 · ₹68,000</p><p class="muted">The insurer will check your documents within 2 working days. We'll notify you at every step.</p>
<div class="card" style="text-align:left">${[['Patient', 'Father'], ['Hospital', 'Sunrise Hospital'], ['Documents', '6 of 6, AI checked'], ['Pay to', 'Demo Bank · XXXX 4417']].map(([k, v], i) => `<div class="between" style="padding:10px 0;${i ? 'border-top:1px solid var(--border)' : ''}"><span class="muted">${k}</span><span class="strong">${v}</span></div>`).join('')}</div>
<p class="small muted">Keep the app open: updates on this sample claim arrive in a few seconds.</p></div><div class="footer"><button class="btn primary" onclick="go('tracker',{}, {root:true})">Track my claim</button><button class="btn secondary" onclick="go('home',{}, {root:true})">Back to home</button></div>`;

screens.tracker = () => {
  const s = S.stage; const si = stageInfo();
  const st = (cls, t, d, box) => `<div class="st ${cls}"><span class="mk">${cls === 'done' ? ic('check', 14, '#fff', 3) : ''}</span><div class="grow"><div class="strong t">${t}</div>${box ? `<div class="box small">${d}${cls === 'cur' && s !== 'approved' ? '<div class="pbar"><i></i></div>' : ''}</div>` : `<div class="small muted">${d}</div>`}</div></div>`;
  let steps, banner, boxes;
  if (s === 'action') { banner = `<button class="critbar" onclick="go('query')">${ic('alert', 20, '#fff')}<span class="grow"><b>The insurer needs one more document</b><span class="small" style="display:block;opacity:.9">Your claim is paused until you upload it.</span></span>${ic('chev', 18, '#fff')}</button><button class="btn primary" onclick="go('query')">Fix it now</button>`; boxes = ['Decision expected', 'by 22 Nov']; steps = [st('done', 'Claim received', '15 Nov 2026 · 6 documents'), st('done', 'Documents verified', '17 Nov 2026 · all complete'), st('pause', 'Medical review · paused', "Waiting for the doctor's prescription from you.", 1), st('up', 'Decision', 'Expected 2 days after you upload'), st('up', 'Money in your bank', 'Expected by 26 Nov')]; }
  else if (s === 'approved' || s === 'credited') { banner = `<div class="banner ok">${ic('checkc', 20, '#0E7C66')}<div class="grow"><b>Approved: ₹62,600 of ₹68,000</b><div class="small">${s === 'credited' ? 'Credited to XXXX 4417.' : 'Money expected in your bank by 26 Nov.'}</div></div></div><button class="btn primary" onclick="go('payout')">See payout breakdown</button>`; boxes = ['Approved', '₹62,600']; steps = [st('done', 'Claim received', '15 Nov 2026 · 6 documents'), st('done', 'Documents verified', '17 Nov 2026 · all complete'), st('done', 'Medical review', '20 Nov 2026 · treatment covered'), st('done', 'Decision', '21 Nov 2026 · approved ₹62,600'), s === 'credited' ? st('done', 'Money in your bank', '24 Nov 2026 · to XXXX 4417') : st('cur', 'Money in your bank', 'Expected by 26 Nov · to XXXX 4417', 1)]; }
  else { banner = `<div class="banner ok">${ic('checkc', 20, '#0E7C66')}<div class="grow"><b>Nothing needed from you right now</b><div class="small">${s === 'restarted' ? 'Prescription received. Medical review has restarted.' : "We'll notify you as soon as anything changes."}</div></div></div>`; boxes = ['Decision expected', 'by 22 Nov']; steps = [st('done', 'Claim received', '15 Nov 2026 · 6 documents'), st('done', 'Documents verified', '17 Nov 2026 · all complete'), st('cur', 'Medical review · in progress', "The insurer's doctor checks that the treatment is covered by your policy. Decision expected by 22 Nov.", 1), st('up', 'Decision', 'Expected by 22 Nov'), st('up', 'Money in your bank', 'Expected by 26 Nov')]; }
  const stepNo = s === 'action' ? 'Paused at step 3' : (s === 'approved' ? 'Step 4 of 5' : s === 'credited' ? 'Done' : 'Step 3 of 5');
  return `${bar('Claim #CE-20481', '', { action: `<button class="iconbtn" aria-label="Share" onclick="shareSheet()">${ic('share')}</button>` })}<div class="content stack-lg"><div class="claimhead"><div class="between"><div class="row" style="gap:8px"><span class="idpill">CLAIM ID</span><span class="id">#CE-20481</span></div>${chip(si[0], si[1], si[2]).replace('class="chip ', 'class="chip onDark ')}</div><div class="sub">Filed for Father · Sunrise Hospital</div><div class="boxes"><div><div class="k">Claimed total</div><div class="v">₹68,000</div></div><div><div class="k">${boxes[0]}</div><div class="v">${boxes[1]}</div></div></div></div>
${banner}<div class="card"><div class="between" style="margin-bottom:14px"><h3>Progress</h3>${chip(s === 'action' ? 'critical' : 'success', stepNo, s === 'action' ? 'alert' : 'checkc')}</div><div class="tl">${steps.join('')}</div></div></div>
<div class="footer duo"><button class="btn secondary" onclick="shareSheet()">Share with family</button><button class="btn secondary" onclick="go('chat')">Get help</button></div>`;
};
window.shareSheet = () => {
  const si = stageInfo(); const txt = `Claim #CE-20481 for Father at Sunrise Hospital: ${si[1]}. Claimed ₹68,000.${S.stage === 'approved' || S.stage === 'credited' ? ' Approved ₹62,600.' : ' Decision expected by 22 Nov.'}`;
  const sh = sheet(`<h2>Share status</h2><p class="muted">Copy this and send it to family on WhatsApp.</p><div class="card" style="margin-top:14px;background:var(--canvas);box-shadow:none">${txt}</div><div class="acts"><button class="btn secondary" onclick="closeSheet()">Close</button><button class="btn primary" id="cp">${ic('copy', 20)}Copy</button></div>`);
  $('#cp', sh).onclick = async () => { try { if (navigator.share) { await navigator.share({ text: txt }); } else { await navigator.clipboard.writeText(txt); } } catch (e) { } closeSheet(); toast('Status copied. Paste it in WhatsApp.'); };
};

screens.query = () => `${bar('Claim #CE-20481')}<div class="content stack-lg"><div class="critpill">${ic('alert', 18, '#fff')}Action needed · claim paused</div><h1>The insurer needs one more document</h1>
<div class="card stack"><div class="over">What happened</div><p style="font-size:15px;line-height:22px">The insurer couldn't match the pharmacy bill from 12 Nov to a doctor's prescription, so they can't confirm the medicines were ordered by the doctor.</p><div class="small muted">${ic('ai', 12, '#64748B')} Explained in simple words by AI. The original note is below.</div></div>
<div class="card stack" style="border:1.5px solid var(--navy)"><div class="over">What to do</div><p style="font-size:15px;line-height:22px">Upload the doctor's prescription for the medicines on that bill.</p><button class="btn primary" onclick="go('scan',{doc:'rx'})">Scan prescription</button></div>
<div class="infobox stack" style="--x:1"><div class="between"><span class="strong small">Insurer's original note</span><button class="link small" onclick="letterSheet()">View letter</button></div><p class="small muted">"Prescription not enclosed for pharmacy bills. Claim kept pending for want of documents."</p></div>
<div><div class="over">After you upload</div><p class="muted" style="margin-top:6px">Medical review restarts. Decision expected by 22 Nov. We'll notify you on every update.</p></div></div>
<div class="footer"><button class="btn tertiary" onclick="noDocSheet()">I don't have this document</button></div>`;
window.letterSheet = () => sheet(`<h2>Original letter</h2><div class="card" style="margin-top:12px;background:#FBFAF6;box-shadow:none;font-family:Georgia,serif;font-size:14px;line-height:22px">Ref: CE-20481<br><br>Dear Policyholder,<br><br>With reference to the above claim, we wish to inform you that the prescription is not enclosed for the pharmacy bills submitted. The claim is kept pending for want of documents. Kindly submit the same within 15 days, failing which the claim shall be processed on merits as per policy terms and conditions.<br><br>Claims Department<br>Demo Health Insurance</div><div class="acts"><button class="btn secondary" onclick="closeSheet()">Close</button></div>`);
window.noDocSheet = () => sheet(`<h2>Don't have the prescription?</h2><div class="stack" style="margin-top:14px"><div class="doc row">${ic('hospital', 24, '#0E7C66')}<div class="grow"><div class="strong">Ask the hospital pharmacy</div><div class="small muted">They keep a copy of the doctor's order for every bill.</div></div></div><div class="doc row">${ic('user', 24, '#0E7C66')}<div class="grow"><div class="strong">Ask the treating doctor</div><div class="small muted">A signed note listing the medicines also works.</div></div></div><p class="small muted">You have 15 days to upload it. We'll remind you.</p></div><div class="acts"><button class="btn secondary" onclick="closeSheet();go('chat')">Chat with an expert</button><button class="btn primary" onclick="closeSheet()">OK</button></div>`);

screens.payout = () => `${bar('Payout breakdown')}<div class="content stack-lg"><div><h1 style="font-size:30px;line-height:38px">₹62,600 approved</h1><p class="muted">You claimed ₹68,000. ₹5,400 was not covered. Here's why, item by item.</p></div>
<div class="card"><div class="stacked"><i style="flex:62600;background:var(--teal)"></i><i style="flex:3000;background:#F5C46B"></i><i style="flex:2400;background:var(--crit)"></i></div><div class="legend small">${[['var(--teal)', 'Approved', '₹62,600'], ['#F5C46B', 'Room rent limit', '₹3,000'], ['var(--crit)', 'Not covered (consumables)', '₹2,400']].map(([c, l, v]) => `<div class="between"><span><i style="background:${c}"></i>${l}</span><b>${v}</b></div>`).join('')}</div></div>
<div class="card" style="padding:8px 16px"><table class="pay"><tr><th>Item</th><th>Claimed</th><th>Approved</th></tr>
<tr><td>Room rent (3 days)<span class="why">Your policy covers rooms up to ₹5,000 a day. The room chosen was ₹6,000 a day.</span></td><td>₹18,000</td><td style="color:var(--crit);font-weight:600">₹15,000</td></tr>
<tr><td>Doctor and surgeon fees</td><td>₹12,000</td><td>₹12,000</td></tr><tr><td>Nursing and procedures</td><td>₹20,000</td><td>₹20,000</td></tr>
<tr><td>Consumables (gloves, masks, kits)<span class="why">Non-medical items like gloves and masks are not covered by your policy.</span></td><td>₹2,400</td><td style="color:var(--crit);font-weight:600">₹0</td></tr>
<tr><td>Medicines</td><td>₹4,850</td><td>₹4,850</td></tr><tr><td>Lab tests and scans</td><td>₹10,750</td><td>₹10,750</td></tr><tr class="total"><td>Total</td><td>₹68,000</td><td>₹62,600</td></tr></table></div>
<p class="small muted">Think a deduction is wrong? You can ask the insurer to review it. (Demo: no request is sent.)</p></div><div class="footer"><button class="btn secondary" onclick="toast('Demo: review request not sent.')">Ask for a review</button></div>`;

screens.credited = () => `${bar('Claim #CE-20481')}<div class="content stack-lg" style="text-align:center"><div class="credhero"><div class="success-ic" style="margin:0 auto 10px;width:88px;height:88px"><span style="width:60px;height:60px;background:var(--teal)">${ic('check', 32, '#fff', 3)}</span></div><span class="chip brand">Money credited</span><div style="font-family:var(--head);font-size:40px;line-height:48px;font-weight:700;margin-top:8px">₹62,600</div><p class="muted small">Paid to Demo Bank •••• 4417 on 24 Nov 2026</p></div>
<div class="card" style="text-align:left">${[['Claimed', '₹68,000', ''], ['Not covered', '− ₹5,400', 'color:var(--crit)'], ['Paid to you', '₹62,600', 'font-size:18px']].map(([k, v, c], i) => `<div class="between" style="padding:10px 0;${i ? 'border-top:1px solid var(--border)' : ''}"><span class="muted">${k}</span><span class="strong" style="${c}">${v}</span></div>`).join('')}</div>
<div class="card between" style="text-align:left"><div><div class="small muted">Bank reference (UTR)</div><div class="strong">DEMO98234710294</div></div><button class="btn secondary md" style="width:auto" onclick="navigator.clipboard&&navigator.clipboard.writeText('DEMO98234710294');toast('Reference copied')">${ic('copy', 18)}Copy</button></div>
<div class="row"><button class="btn secondary md" onclick="toast('Demo: no letter to download')">${ic('download', 18)}Download letter</button><button class="btn secondary md" onclick="shareSheet()">${ic('share', 18)}Share</button></div>
<button class="card tap row" style="width:100%;text-align:left" onclick="go('chat')">${ic('chat', 22, '#0E7C66')}<span class="grow"><span class="strong" style="display:block">Questions about the deductions?</span><span class="small link">Chat with a claims expert →</span></span></button></div>
<div class="footer"><button class="btn primary" onclick="go('home',{}, {root:true})">Back to home</button></div>`;

screens.claimsList = () => {
  const si = stageInfo(); const items = [];
  if (S.stage !== 'none') items.push(['CE-20481 · Father', 'Sunrise Hospital · ₹68,000', chip(si[0], si[1], si[2]), "go('tracker')", 'open']);
  items.push(['CE-21107 · Father', 'Lakeview Clinic · ₹24,500', chip('critical', 'Not approved', 'close'), "go('notApproved')", 'closed']);
  items.push(['CE-19870 · Alex', 'City Eye Clinic · ₹12,400', chip('success', 'Paid ₹12,400', 'bank'), "toast('Sample closed claim')", 'closed']);
  const f = cur().params.f || 'all';
  return `${rootbar()}<div class="content stack-lg"><div><h1>Claims</h1><p class="muted">All your claims and their status.</p></div><div class="row" style="gap:8px">${[['all', 'All'], ['open', 'In progress'], ['closed', 'Closed']].map(([k, l]) => `<button class="fchip ${f === k ? 'on' : ''}" onclick="go('claimsList',{f:'${k}'},{replace:true})">${l}</button>`).join('')}</div>
<div class="stack">${items.filter(i => f === 'all' || i[4] === f).map(([a, b, c, on]) => `<div class="card tap row" onclick="${on}"><span class="hosp">${ic('hospital', 24, '#0E7C66')}</span><div class="grow"><div class="strong" style="font-size:15px">#${a}</div><div class="small muted" style="margin:2px 0 6px">${b}</div>${c}</div>${ic('chev', 20, '#64748B')}</div>`).join('') || '<div class="empty">No claims here.</div>'}</div>
<button class="btn primary" onclick="startClaim()">Start a new claim</button></div>${tabs('claimsList')}`;
};
screens.notApproved = () => `${bar('Claim #CE-21107')}<div class="content stack-lg"><div>${chip('critical', 'Not approved', 'close')}<h1 style="margin-top:10px">Claim not approved</h1><p class="muted">Lakeview Clinic · ₹24,500 · Father</p></div>
<div class="card stack"><div class="over">Why, in plain words</div><p>This treatment is covered only after a waiting period. Your father's cover hadn't completed it yet when he was treated.</p><div class="small row" style="gap:6px;color:var(--teal)">${ic('ai', 14, '#0E7C66')}Explained in simple words by AI.</div></div>
<div class="card stack" style="background:var(--canvas);box-shadow:none"><div class="over">Policy rule</div><p class="muted">Waiting period for listed conditions: 24 months from the policy start date (sample).</p></div>
<div class="stack"><div class="over">What you can do</div>${[['Ask for a review', 'If you think the rule was applied wrongly.', 'edit'], ['Raise a complaint', "If the insurer's review doesn't resolve it.", 'alert'], ['Talk to a claims expert', 'We explain your options, free.', 'chat']].map(([t, d, i]) => `<button class="choice" onclick="${i === 'chat' ? "go('chat')" : "toast('Demo: nothing is sent')"}">${ic(i, 22, '#0E7C66')}<span class="grow"><span class="strong" style="display:block">${t}</span><span class="small muted">${d}</span></span>${ic('chev', 20, '#94A3B8')}</button>`).join('')}</div>
<p class="small muted">${ic('ai', 12, '#64748B')} AI explains the letter. The insurer's claims reviewer made this decision.</p></div>`;

screens.updates = () => {
  const card = (u) => { const t = u.t; const k = t.includes('Action') ? ['alert', 'var(--crit)', 1] : t.includes('credited') || t.includes('approved') || t.includes('verified') ? ['checkc', 'var(--teal)', 1] : t.includes('linked') ? ['shield', 'var(--info)', 0] : ['claims', 'var(--info)', 0]; const go2 = t.includes('credited') ? "go('credited')" : (t.includes('CE-20481') || t.includes('rescription')) ? "go('tracker')" : ''; return `<div class="updcard" onclick="${go2}"><span class="updic" style="color:${k[1]}">${ic(k[0], 18)}</span><div class="grow"><div class="${k[2] ? 'strong' : ''}" style="font-size:14px">${t}</div><div class="small muted" style="margin-top:2px">${u.d}</div></div>${go2 ? ic('chev', 18, '#64748B') : ''}</div>`; };
  const recent = S.updates.filter(u => u.d === 'Just now'), older = S.updates.filter(u => u.d !== 'Just now');
  return `${bar('Updates')}<div class="content stack">${recent.length ? `<div class="over">This week</div>${recent.map(card).join('')}` : ''}<div class="over" style="${recent.length ? 'margin-top:16px' : ''}">${recent.length ? 'Earlier' : 'This week'}</div>${older.map(card).join('')}<p class="small muted" style="margin-top:12px">Tap an update to open it.</p></div>`;
};
window.openUpdates = () => { S.unread = false; go('updates'); };

screens.help = () => `${rootbar()}<div class="content stack-lg"><div><h1>Help</h1><p class="muted">Simple answers about health claims.</p></div>
<div class="card" style="padding:0;overflow:hidden"><div class="helpband"><div class="helpav">P</div><span class="helpdot"></span></div><div style="padding:14px 16px 16px" class="stack"><div><div class="strong" style="font-size:16px">Stuck on a claim?</div><div class="small muted">Talk to a claims expert. Mon–Sat, 9 am – 7 pm.</div></div><button class="btn primary md" onclick="go('chat')">Chat with us</button></div></div>
<div class="card" style="padding:0 16px">${[['Does AI decide my claim?', 'No. AI only reads your documents and explains things in simple words. It shows what it read and how sure it is, and you can correct anything. A claims reviewer at the insurer makes the final decision.', true], ['Which documents do I need?', 'It depends on your policy and the stay. ClaimEase builds the list for each claim: usually the final bill, discharge summary, pharmacy bills with prescriptions, reports and a cancelled cheque.'], ['What happens after I submit?', 'The insurer verifies documents, then their doctor reviews the treatment. You get an update at every step, with an expected date.'], ['What is a query?', 'A request from the insurer for more information or a document. ClaimEase explains it in plain words and shows you the one thing to do.']].map(([q, a, o], i) => `<details class="faq" ${o ? 'open' : ''} style="${i ? '' : 'border-top:none'}"><summary>${q}${ic('chev', 18, '#64748B')}</summary><p>${a}</p></details>`).join('')}</div>
<div class="card stack" style="background:var(--warn-bg);border-color:#F5C46B;box-shadow:none"><p class="small" style="color:var(--warn)">This is a concept demo by Bijnesh Singh, a product designer. All names, insurers, numbers and documents are sample data. Nothing is sent anywhere.</p><button class="btn secondary md" onclick="resetDemo()">Reset demo</button></div></div>${tabs('help')}`;
window.resetDemo = () => { clearTimeout(storyTimer); S = fresh(); save(); go('splash', {}, { root: true }); };

/* Chat */
const chatInit = () => [{ me: 0, t: "Hi Alex, I'm Priya from ClaimEase. I can see claim #CE-20481. How can I help?", time: '10:24' }].concat(S.stage === 'action' ? [{ me: 1, t: 'The insurer wants a prescription for the pharmacy bill. The pharmacy says they gave me everything.', time: '10:26' }, { me: 0, t: "That's very common. You can ask the pharmacy for the doctor's order slip, or ask Dr. S. Demo for a signed note listing the medicines. Either one works.", time: '10:27' }] : []);
screens.chat = () => {
  if (!S.chat) S.chat = chatInit();
  const si = stageInfo() || ['neutral', 'Draft', 'edit'];
  return `<div class="appbar">${'<button class="iconbtn" aria-label="Back" onclick="back()">' + ic('back') + '</button>'}<div class="avatar" style="background:var(--navy);color:var(--mint)">P</div><div class="grow" style="margin-left:6px"><div class="strong">Priya · Claims expert</div><div class="small" style="color:var(--teal)">● Online</div></div><button class="iconbtn" aria-label="Call" onclick="toast('Demo: calls are not placed')">${ic('phone', 22, '#0E7C66')}</button></div>
<div class="content" id="msgs"><div class="card between" style="margin-bottom:14px;padding:12px"><div><div class="strong small">Claim #CE-20481 · Father</div><div class="small muted">Sunrise Hospital · ₹68,000</div></div>${S.stage !== 'none' ? chip(si[0], si[1]) : ''}</div><div class="small muted" style="text-align:center;margin-bottom:10px">Today</div>
<div class="msgs">${S.chat.map(m => m.file ? `<div class="msg me"><div class="b"><div class="row" style="gap:10px">${ic('claims', 22, '#7EF0C4')}<div><div class="strong">Prescription_12Nov.pdf</div><div class="small" style="opacity:.7">1 page · 1.4 MB</div></div></div>${m.t ? `<div style="margin-top:8px">${m.t}</div>` : ''}</div><div class="t">${m.time} ✓✓</div></div>` : `<div class="msg ${m.me ? 'me' : ''}"><div class="b">${m.t}</div><div class="t">${m.time}</div></div>`).join('')}</div>
<div class="qr" style="margin-top:14px">${S.stage === 'action' ? '<button onclick="chatAsk(1)">How long do I have?</button><button onclick="sendDocSheet()">Upload the prescription</button>' : '<button onclick="chatAsk(2)">When will I get the money?</button>'}<button onclick="toast(\'Demo: calls are not placed\')">Talk on call</button></div>
<div class="footnote" style="margin-top:16px">${ic('ai', 12, '#64748B')}A claims reviewer at the insurer makes the final decision.</div></div>
<div class="composer"><button class="iconbtn" aria-label="Attach" onclick="${S.stage === 'action' ? 'sendDocSheet()' : "toast('Demo: attach a file during an open query')"}">${ic('paperclip', 22, '#64748B')}</button><div class="in"><input id="ci" placeholder="Type a message…" aria-label="Message"></div><button class="send" aria-label="Send" id="cs">${ic('send', 20, '#fff')}</button></div>`;
};
after.chat = el => { const m = $('#msgs', el); m.scrollTop = m.scrollHeight; const i = $('#ci', el); const go2 = () => { if (!i.value.trim()) return; S.chat.push({ me: 1, t: i.value.replace(/</g, '&lt;'), time: now() }); i.value = ''; render('fade'); typing("Thanks, Alex. I'm looking into it and will reply here shortly. (Demo reply)"); }; $('#cs', el).onclick = go2; i.onkeydown = e => { if (e.key === 'Enter') go2(); }; };
const now = () => new Date().toTimeString().slice(0, 5);
function typing(text) { setTimeout(() => { if (cur().name !== 'chat') { S.chat.push({ me: 0, t: text, time: now() }); return; } S.chat.push({ me: 0, t: text, time: now() }); render('fade'); }, 1200); }
window.chatAsk = k => {
  if (k === 1) { S.chat.push({ me: 1, t: 'How long do I have?', time: now() }); render('fade'); typing("You have 15 days from the insurer's note. That's enough time, but the sooner you upload, the sooner review restarts."); }
  else { S.chat.push({ me: 1, t: 'When will I get the money?', time: now() }); render('fade'); typing(S.stage === 'approved' ? 'Your claim is approved. The money is expected in your bank by 26 Nov.' : S.stage === 'credited' ? 'It was credited on 24 Nov to your account ending 4417.' : 'Once the insurer decides, payment usually follows within a few working days. I\'ll keep you posted.'); }
};
window.sendDocSheet = () => {
  const sh = sheet(`<h2>Send document to Priya</h2><div class="doc row" style="margin-top:12px">${ic('claims', 24, '#0E7C66')}<div class="grow"><div class="strong">Prescription_12Nov.pdf</div><div class="small muted">1 page · 1.4 MB</div></div><button class="link small">Replace</button></div><div class="banner ok" style="margin-top:10px">${ic('ai', 18, '#0E7C66')}<span class="small">Looks good: doctor's signature and date are readable</span></div><div class="field" style="margin-top:14px"><label>Add a note (optional)</label><div class="input"><input id="nt" value="Signed note from Dr. S. Demo for the 12 Nov bill."></div></div><div class="acts"><button class="btn secondary" onclick="closeSheet()">Cancel</button><button class="btn primary" id="sd">Send</button></div>`);
  $('#sd', sh).onclick = () => { S.chat.push({ me: 1, file: 1, t: $('#nt', sh).value.replace(/</g, '&lt;'), time: now() }); closeSheet(); prescriptionAdded(); render('fade'); typing("Thanks Alex. The medicines match the bill. I've added it to your claim and medical review has restarted. You'll get an update by 22 Nov."); };
};

/* ---------- Boot ---------- */
function clock() { const c = document.getElementById('clk'); if (c) c.textContent = new Date().toTimeString().slice(0, 5); }
setInterval(clock, 15000); clock();
window.addEventListener('offline', () => { toast("You're offline. Your progress is saved on this phone."); if (cur().name === 'home') render('fade'); });
window.addEventListener('online', () => { toast('Back online.'); if (cur().name === 'home') render('fade'); });
// resume an in-flight story after reload
if (S.stage === 'review') story('action', 6000); if (S.stage === 'restarted') story('approved', 6000); if (S.stage === 'approved') story('credited', 8000);
go('splash', {}, { root: true });
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => { });
