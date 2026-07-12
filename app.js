const ICON = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYxNC41NiA1NDcuOTMiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMDBhZWVlO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzIuMTQsMTQuMjdsLTEzMS44OCw3Mi4zNWMtMjMuMzcsMTIuODItNDIuNTUsMzIuMzMtNTQuMjEsNTYuMy01LjA1LDEwLjM3LTkuMTIsMjIuMzMtMTEuMDEsMzUuNzgtNy41Nyw1My43OSwxNi4zNCw5MC44OSwxNi4zNCw5MC44OWw3NC41NSwxMjcuNjZzNy41NywxMi42LDE4LjM4LDkuMTljNy4wOS0yLjIzLDcuOTYtMTEuNjUsNy43MS0xNy44Ni0uMjktNy4yMi0uNS0xNC40NC0uNDUtMjEuNjZsLjkyLTEzOC4xNyw3Mi41MS00My45MXY4NS45YzAsNi45OSwxLjYzLDEzLjk0LDUuMDcsMjAuMDMsNS4zNCw5LjQ1LDE2LjE1LDE5LjUyLDM3LjgyLDE3LjY1czMyLjMyLTE0LjYsMzYuOTYtMjUuMzNjMi42OC02LjIsMy45MS0xMi45MywzLjg1LTE5LjY4bC0uOTktMTIwLjQzYzIwLjc5LTI1LjA1LDQ1Ljk3LTMzLjMxLDc0LjU1LTI4LjZsLTEuMDIsMjcxLjY2cy0yLjEzLDE0LjY0LDEwLjIxLDIwLjQzYzEyLjM0LDUuNzksMjAuNDMtMTYuMzQsMjAuNDMtMTYuMzRsNzIuMjUtMTI4Ljc0YzEyLjExLTIxLjU5LDE4LjIyLTQ2LjEzLDE2LjktNzAuODUtMS4yOC0yMy45Ni05LjQ3LTUyLjItMzMuOTktNzguMTktMjQuMjItMjUuNjctNTIuMTktMzUuMDktNzYuNTktMzcuMzUtMjcuMDItMi41LTU0LjE0LDMuNjktNzcuNzcsMTcuMDVsLTIwOS4yMiwxMTguMzRzLTI5LjE5LTY3LjU3LDE3LjM2LTk0Ljk4YzM1Ljg5LTIxLjEzLDExNS45OS02Ni4xMywxNTAuOC04NS42NCwxNy44My05Ljk5LDM2Ljk5LTE3LjQ2LDU2Ljk1LTIxLjg3LDQ4LjExLTEwLjYzLDEyOS45NS0xNC43MiwxOTIuNTksNTQuNCw0MS4zNyw0NS42NSw1My4xOCw5NS4zNCw1My4zOSwxMzYuNzkuMiw0MC4zMy0xMC45Niw3OS45LTMxLjQyLDExNC42NmwtMTE1LjY1LDE5Ni41MWMtOC45NiwxNS4yMi0yMi43MSwyNy4xOS0zOS4yNiwzMy4zNy0xMC41NCwzLjkzLTIzLjA3LDUuOTUtMzYuNiwyLjc1LTE5LjExLTQuNTEtMjkuODMtMTkuMDYtMzUuNzgtMzIuNDktNC45LTExLjA2LTcuMTYtMjMuMS02Ljk4LTM1LjE5bC44OC02MXMtMy4xNS0zNS40LTQwLjg1LTM0LjcyYy0zNy43LjY4LTQzLjkxLDMyLjY4LTQzLjkxLDMyLjY4bC0uODQsNjcuODRjLS4yLDE1Ljg0LTUuMTUsMzEuMzYtMTQuNjYsNDQuMDMtNi4xNSw4LjE5LTE0LjQ3LDE1LjczLTI1LjM2LDE4Ljg1LTguNDYsMi40My0xNy45OSwxLjcxLTI3LjIzLS41NC0yMy45OC01LjgzLTQ0LjI4LTIxLjc0LTU2LjM0LTQzLjI3TDI2LjMyLDI5OC42NEMtMTUuNjUsMjIzLjcyLTYuOTUsMTMwLjMsNDkuMDEsNjUuMTdjLjgzLS45NywxLjY4LTEuOTQsMi41My0yLjlDMTUzLjc2LTM5LjY5LDI3Mi4xNCwxNC4yNywyNzIuMTQsMTQuMjdaIi8+PC9zdmc+";

/* ---------------- MOCK DATA ---------------- */
const DATA = {
  user:{name:'Dra. Valentina Rojas', initials:'VR'},
  profile:{ nombre:'Valentina', apellido:'Rojas', calle:'', ciudad:'', cp:'', nif:'', ivaIntra:'', currency:'EUR' },
  centers:[
    {id:'c1', name:'Clínica Dental Andes', active:true, color:'#3B6EA5',
      billing:{rep:'Dra. Valentina Rojas', street:'Calle Mayor 12', city:'Madrid', cp:'28013', taxIdType:'CIF', taxId:'B12345678', ivaIntra:''},
      variables:[{id:'v1', name:'Adulto', pct:35},{id:'v2', name:'Niño', pct:20}]},
    {id:'c2', name:'Hospital San Rafael', active:true, color:'#7A5CB8',
      billing:{rep:'Hospital San Rafael S.L.', street:'Av. de la Constitución 45', city:'Sevilla', cp:'41001', taxIdType:'CIF', taxId:'B87654321', ivaIntra:''},
      variables:[{id:'v1', name:'General', pct:30}]},
    {id:'c3', name:'Clínica Bellavista', active:true, color:'#C15B7A',
      billing:{rep:'Clínica Bellavista S.L.', street:'Passeig de Gràcia 88', city:'Barcelona', cp:'08008', taxIdType:'CIF', taxId:'B11223344', ivaIntra:''},
      variables:[{id:'v1', name:'Adulto', pct:40},{id:'v2', name:'Niño', pct:25},{id:'v3', name:'Anciano', pct:30}]},
  ],
  procedures:[
    {id:'p1', name:'Limpieza dental', diff:true},
    {id:'p2', name:'Extracción simple', diff:true},
    {id:'p3', name:'Empaste', diff:true},
    {id:'p4', name:'Endodoncia', diff:false},
    {id:'p5', name:'Control ortodoncia', diff:false},
    {id:'p6', name:'Blanqueamiento', diff:false},
  ],
  rates:{
    c1_p1_v1:45, c1_p1_v2:30,
    c1_p2_v1:65, c1_p2_v2:40,
    c1_p3_v1:70, c1_p3_v2:45,
    c1_p4_unico:220, c1_p5_unico:40, c1_p6_unico:180,
    c2_p1_v1:38,
    c2_p2_v1:55,
    c2_p3_v1:60,
    c2_p4_unico:200, c2_p5_unico:35, c2_p6_unico:160,
    c3_p1_v1:50, c3_p1_v2:32, c3_p1_v3:40,
    c3_p2_v1:70, c3_p2_v2:45, c3_p2_v3:55,
    c3_p3_v1:75, c3_p3_v2:48, c3_p3_v3:60,
    c3_p4_unico:250, c3_p5_unico:45, c3_p6_unico:200,
  },
  registrations:[
    {id:'r1', centerId:'c1', variableId:'v1', procIds:['p1','p3'], total:115, profitPct:35, earned:40, date:'2026-07-03', deleted:false, patientName:'Marta Gómez', patientCode:'P-0231'},
    {id:'r2', centerId:'c2', variableId:'v1', procIds:['p2'], total:55, profitPct:30, earned:17, date:'2026-07-05', deleted:false, patientName:'Luis Herrera', patientCode:'P-0198'},
    {id:'r3', centerId:'c3', variableId:'v1', procIds:['p4'], total:250, profitPct:40, earned:100, date:'2026-07-06', deleted:false, patientName:'Carla Ibáñez', patientCode:'P-0305'},
    {id:'r4', centerId:'c2', variableId:'v1', procIds:['p4'], total:200, profitPct:30, earned:60, date:'2026-06-01', deleted:false, patientName:'Diego Molina', patientCode:'P-0088'},
    {id:'r5', centerId:'c1', variableId:'v2', procIds:['p6'], total:180, profitPct:20, earned:36, date:'2026-06-05', deleted:false, patientName:'Diego Salas', patientCode:'P-0450'},
    {id:'r6', centerId:'c2', variableId:'v1', procIds:['p4','p6'], total:360, profitPct:30, earned:108, date:'2026-06-06', deleted:false, patientName:'Carla Ibáñez', patientCode:'P-0305'},
    {id:'r7', centerId:'c1', variableId:'v2', procIds:['p6'], total:180, profitPct:20, earned:36, date:'2026-06-07', deleted:false, patientName:'Óscar Nieto', patientCode:'P-0367'},
    {id:'r8', centerId:'c2', variableId:'v1', procIds:['p1','p2'], total:93, profitPct:30, earned:28, date:'2026-06-09', deleted:false, patientName:'Mario Cano', patientCode:'P-0067'},
    {id:'r9', centerId:'c1', variableId:'v1', procIds:['p2'], total:65, profitPct:35, earned:23, date:'2026-06-11', deleted:false, patientName:'Alba Ferrer', patientCode:'P-0154'},
    {id:'r10', centerId:'c1', variableId:'v1', procIds:['p3'], total:70, profitPct:35, earned:24, date:'2026-06-14', deleted:false, patientName:'Paula Reyes', patientCode:'P-0298'},
    {id:'r11', centerId:'c2', variableId:'v1', procIds:['p3'], total:60, profitPct:30, earned:18, date:'2026-06-19', deleted:false, patientName:'Sergio Ramos', patientCode:'P-0355'},
    {id:'r12', centerId:'c2', variableId:'v1', procIds:['p3','p2'], total:115, profitPct:30, earned:34, date:'2026-06-23', deleted:false, patientName:'Elena Vidal', patientCode:'P-0119'},
    {id:'r13', centerId:'c3', variableId:'v3', procIds:['p6'], total:200, profitPct:30, earned:60, date:'2026-06-25', deleted:false, patientName:'Rubén Montes', patientCode:'P-0522'},
    {id:'r14', centerId:'c3', variableId:'v1', procIds:['p4'], total:250, profitPct:40, earned:100, date:'2026-06-26', deleted:false, patientName:'Clara Vega', patientCode:'P-0176'},
    {id:'r15', centerId:'c2', variableId:'v1', procIds:['p5','p6'], total:195, profitPct:30, earned:58, date:'2026-06-29', deleted:false, patientName:'Irene Soler', patientCode:'P-0209'},
    {id:'r16', centerId:'c1', variableId:'v2', procIds:['p1'], total:30, profitPct:20, earned:6, date:'2026-07-04', deleted:false, patientName:'Nuria Blanco', patientCode:'P-0333'},
    {id:'r17', centerId:'c1', variableId:'v2', procIds:['p3'], total:45, profitPct:20, earned:9, date:'2026-07-04', deleted:false, patientName:'Luis Herrera', patientCode:'P-0198'},
    {id:'r18', centerId:'c1', variableId:'v1', procIds:['p5','p3'], total:110, profitPct:35, earned:38, date:'2026-07-05', deleted:false, patientName:'Hugo Delgado', patientCode:'P-0489'},
    {id:'r19', centerId:'c1', variableId:'v2', procIds:['p5'], total:40, profitPct:20, earned:8, date:'2026-07-06', deleted:false, patientName:'Sofía Rueda', patientCode:'P-0388'},
    {id:'r20', centerId:'c2', variableId:'v1', procIds:['p1'], total:38, profitPct:30, earned:11, date:'2026-07-07', deleted:false, patientName:'Iván Cortés', patientCode:'P-0441'},
    {id:'r21', centerId:'c1', variableId:'v2', procIds:['p6','p4'], total:400, profitPct:20, earned:80, date:'2026-07-08', deleted:false, patientName:'Pablo Ortiz', patientCode:'P-0276'},
    {id:'r22', centerId:'c3', variableId:'v2', procIds:['p1'], total:32, profitPct:25, earned:8, date:'2026-07-08', deleted:false, patientName:'Lucía Campos', patientCode:'P-0501'},
    {id:'r23', centerId:'c1', variableId:'v2', procIds:['p2'], total:40, profitPct:20, earned:8, date:'2026-07-09', deleted:false, patientName:'Marta Gómez', patientCode:'P-0231'},
  ],
  audit:[
    {ts:'2026-07-03 09:14', action:'creado', desc:'Registro r1 — Clínica Dental Andes'},
    {ts:'2026-07-05 11:02', action:'creado', desc:'Registro r2 — Hospital San Rafael'},
    {ts:'2026-07-06 16:40', action:'creado', desc:'Registro r3 — Clínica Bellavista'},
  ],
  invoices:[],
};
let regCounter = DATA.registrations.length;

/* ---------------- APP STATE ---------------- */
const S = {
  loggedIn:false,
  view:'operator',            // 'operator' | 'admin'
  opScreen:'registro',        // 'registro' | 'historial'
  adminScreen:'resumen',
  mobileNavOpen:false,
  // registro form state
  form:{ centerId:'c1', variableId:null, procIds:[], patientName:'', patientCode:'' },
  ticket:null,                // ticket data to show, or null
  detailReg:null,             // registration id shown in read-only modal
  editReg:null,               // registration id being edited in admin
  addCenterOpen:false,
  addProcOpen:false,
  editCenterId:null,
  editCenterVars:null,
  editCenterColor:null,
  editProcId:null,
  tarifaDraft:null,
  tarifaDraftCenter:null,
  tarifaDirty:false,
  tarifaSaved:false,
  tarifaOpenProc:null,
  profileDraft:null,
  profileDirty:false,
  profileSaved:false,

  tarifaCenterId:'c1',
  resumenGroup:'dia',
  resumenDefaultApplied:false,
  resumenDraft:{ centerId:'all', dateMode:'yearMonth', year:'all', month:'all', dateFrom:'', dateTo:'' },
  resumenFiltersOpen:false,
  resumenApplied:{ centerId:'all', dateMode:'yearMonth', year:'all', month:'all', dateFrom:'', dateTo:'' },
  registrosCenterId:'all',
  registrosDateMode:'yearMonth',
  registrosYear:'all',
  registrosMonth:'all',
  registrosDateFrom:null,
  registrosDateTo:null,
  registrosSearch:'',
  registrosPage:1,
  registrosPageSize:20,
  registrosFiltersOpen:false,

  facturaForm:{ centerId:'c1', numero:'', dateFrom:'', dateTo:'', ivaPct:0, retPct:'', descripcion:'', notas:'', gastoDesc:'', gastoMonto:'' },
  facturasCenterId:'all',
};

function round2(n){ return Math.round((n + Number.EPSILON) * 100) / 100; }
function money(n){
  const currency = DATA.profile.currency || 'EUR';
  const locale = currency==='USD' ? 'en-US' : 'es-ES';
  return new Intl.NumberFormat(locale,{style:'currency',currency,minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
}
function currencySymbol(){ return (DATA.profile.currency||'EUR')==='USD' ? 'US$' : '€'; }
function dualAmt(total, earned){
  return `<div class="dual-amt">
    <div class="dv"><span class="dv-lbl">Facturado</span><span class="dv-val">${money(total)}</span></div>
    <div class="dv accent"><span class="dv-lbl">Ganado</span><span class="dv-val">${money(earned)}</span></div>
  </div>`;
}
function nowTs(){ return new Date().toISOString().slice(0,16).replace('T',' '); }
/* ---------------- ICONOS SVG ---------------- */
const ICON_PATHS = {
  'arrow-left': '<path d="M19 12H5M5 12l7-7M5 12l7 7"/>',
  'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
  'grid': '<rect x="3" y="3" width="7.5" height="7.5" rx="1.2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.2"/>',
  'filter': '<path d="M4 4.5h16l-6.2 7.4v6.1l-3.6 1.8v-7.9L4 4.5z"/>',
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  'settings': '<path d="M10.3 3.4a1.9 1.9 0 013.4 0l.3.6c.3.6 1 1 1.7.8l.6-.2a1.9 1.9 0 012.4 2.4l-.2.6c-.2.7.2 1.4.8 1.7l.6.3a1.9 1.9 0 010 3.4l-.6.3c-.6.3-1 1-.8 1.7l.2.6a1.9 1.9 0 01-2.4 2.4l-.6-.2c-.7-.2-1.4.2-1.7.8l-.3.6a1.9 1.9 0 01-3.4 0l-.3-.6c-.3-.6-1-1-1.7-.8l-.6.2a1.9 1.9 0 01-2.4-2.4l.2-.6c.2-.7-.2-1.4-.8-1.7l-.6-.3a1.9 1.9 0 010-3.4l.6-.3c.6-.3 1-1 .8-1.7l-.2-.6a1.9 1.9 0 012.4-2.4l.6.2c.7.2 1.4-.2 1.7-.8l.3-.6z"/><circle cx="12" cy="12" r="3"/>',
  'download': '<path d="M12 3v12M7.5 10.5L12 15l4.5-4.5M5 21h14"/>',
  'mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
  'edit': '<path d="M17.5 3.5a2.1 2.1 0 013 3L8 19l-4.5 1 1-4.5L17.5 3.5z"/>',
  'trash': '<path d="M3.5 6h17M8.5 6V4.2A1.7 1.7 0 0110.2 2.5h3.6A1.7 1.7 0 0115.5 4.2V6m3 0l-.9 14a1.7 1.7 0 01-1.7 1.5H7.6A1.7 1.7 0 015.9 20L5 6h14z"/>',
  'plus-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2.2"/>',
  'bar-chart': '<path d="M4 20V11M12 20V4M20 20v-6.5"/><path d="M2 20h20"/>',
  'building': '<rect x="4.5" y="3" width="15" height="18" rx="1"/><path d="M8.5 8h1M14.5 8h1M8.5 12h1M14.5 12h1M8.5 16h1M14.5 16h1"/>',
  'clipboard': '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6a1 1 0 011 1v1.5H8V4a1 1 0 011-1z"/><path d="M8.5 11h7M8.5 14.5h7M8.5 17.5h4"/>',
  'tag': '<path d="M20.4 13.1L11.6 4.3a2 2 0 00-1.4-.6H5a1 1 0 00-1 1v5.2a2 2 0 00.6 1.4l8.8 8.8a2 2 0 002.8 0l4.2-4.2a2 2 0 000-2.8z"/><circle cx="7.7" cy="7.7" r="1.3"/>',
  'receipt': '<path d="M6.5 2.5h8l5 5v14h-13z"/><path d="M14.5 2.5v5h5"/><path d="M9 13.5h6M9 17h6M9 9.5h2"/>',
  'list': '<path d="M9 6.5h12M9 12h12M9 17.5h12"/><path d="M4 6.5h.01M4 12h.01M4 17.5h.01"/>',
  'shield': '<path d="M12 2.5l7.5 3.5v5.5c0 4.6-3.2 7.4-7.5 9.5-4.3-2.1-7.5-4.9-7.5-9.5V6l7.5-3.5z"/><path d="M8.7 12l2.3 2.3 4.3-4.3"/>',
  'home': '<path d="M3 11.5L12 4l9 7.5"/><path d="M5.5 9.8V19a1 1 0 001 1H9.7v-6.2h4.6V20H17.5a1 1 0 001-1V9.8"/>',
  'power': '<path d="M12 3.5v7.5"/><path d="M18.4 6.6a9 9 0 11-12.8 0"/>',
};
function icon(name, size){
  const px = size || 16;
  const path = ICON_PATHS[name] || '';
  return `<svg width="${px}" height="${px}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;vertical-align:-3px">${path}</svg>`;
}

function centerName(id){ return DATA.centers.find(c=>c.id===id)?.name || '—'; }
function centerDot(id){
  const c = DATA.centers.find(x=>x.id===id);
  return `<span class="c-dot" style="background:${c && c.color || '#8B979A'}"></span>`;
}
function procName(id){ return DATA.procedures.find(p=>p.id===id)?.name || '—'; }
function fmtDate(d){
  const dt = new Date(d+'T00:00:00');
  return dt.toLocaleDateString('es-CL', {day:'2-digit', month:'short'});
}

function rateFor(centerId, procId, variableId){
  const center = DATA.centers.find(c=>c.id===centerId);
  const proc = DATA.procedures.find(p=>p.id===procId);
  const effectiveDiff = proc && proc.diff && center && center.variables.length>0;
  const key = effectiveDiff ? `${centerId}_${procId}_${variableId}` : `${centerId}_${procId}_unico`;
  return DATA.rates[key] ?? 0;
}

function profitPctFor(centerId, variableId){
  const c = DATA.centers.find(x=>x.id===centerId);
  if(!c) return 0;
  const v = c.variables.find(v=>v.id===variableId);
  return v ? (v.pct||0) : 0;
}
function variableName(centerId, variableId){
  const c = DATA.centers.find(x=>x.id===centerId);
  if(!c) return '—';
  const v = c.variables.find(v=>v.id===variableId);
  return v ? v.name : '—';
}
function profitLabel(c){
  if(!c.variables || c.variables.length===0) return 'Sin variables definidas';
  return c.variables.map(v=>`${v.name} ${v.pct}%`).join(' · ');
}

function initTarifaDraft(cid){
  const center = DATA.centers.find(c=>c.id===cid);
  const draft = {};
  DATA.procedures.forEach(p=>{
    const effectiveDiff = p.diff && center && center.variables.length>0;
    if(effectiveDiff){
      center.variables.forEach(v=>{
        draft[p.id+'_'+v.id] = DATA.rates[cid+'_'+p.id+'_'+v.id] ?? 0;
      });
    } else {
      draft[p.id+'_unico'] = DATA.rates[cid+'_'+p.id+'_unico'] ?? 0;
    }
  });
  return draft;
}

function render(){
  document.getElementById('root').innerHTML = layout();
  document.body.classList.toggle('body-admin', S.loggedIn && S.view==='admin');
}

function layout(){
  if(!S.loggedIn) return loginScreen();
  if(S.view==='admin') return adminScreen();
  return operatorScreen();
}

/* ---------------- LOGIN ---------------- */
function loginScreen(){
  return `
  <div class="login-screen">
    <div class="login-card">
      <div class="wordmark"><div class="mark"><img src="${ICON}" alt="Heaven"/></div><div class="name">Heaven</div></div>
      <p class="tag">Registro y tarifas, clínica por clínica.</p>
      <div class="field"><label>Correo</label><input value="valentina@bitacora.app" /></div>
      <div class="field"><label>Contraseña</label><input type="password" value="••••••••" /></div>
      <button class="btn-primary" onclick="App.login()">Entrar</button>
      <div class="login-foot">Acceso privado. Solo para uso profesional.</div>
    </div>
  </div>`;
}

/* ---------------- OPERATOR ---------------- */
function operatorScreen(){
  return `
  <div class="stage">
    <div class="phone op-theme">
      ${opTopbar()}
      ${S.opScreen==='registro' ? opRegistro() : opHistorial()}
      <div class="op-tabbar">
        <button class="op-tab ${S.opScreen==='registro'?'active':''}" onclick="App.setOpScreen('registro')">
          ${icon('plus-circle',19)}<span>Registrar</span></button>
        <button class="op-tab ${S.opScreen==='historial'?'active':''}" onclick="App.setOpScreen('historial')">
          ${icon('clock',19)}<span>Historial</span></button>
      </div>
    </div>
  </div>
  ${S.ticket ? ticketOverlay() : ''}
  ${S.detailReg ? detailModal() : ''}
  `;
}

function opTopbar(){
  return `
  <div class="op-topbar">
    <div class="who">
      <div class="mark"><img src="${ICON}" alt="Heaven"/></div>
      <div class="name">Heaven</div>
    </div>
    <div class="op-topbar-actions">
      <button class="logout-btn" onclick="App.logout()" title="Cerrar sesión" aria-label="Cerrar sesión">${icon('power',16)}</button>
      <button class="admin-link-btn" onclick="App.goAdmin()">${icon('grid',15)} Panel admin ${icon('arrow-right',14)}</button>
    </div>
  </div>`;
}

function opRegistro(){
  const f = S.form;
  const center = DATA.centers.find(c=>c.id===f.centerId);
  const variables = center ? center.variables : [];
  const selectedProcs = f.procIds;
  const total = selectedProcs.reduce((sum,pid)=> sum + (f.variableId ? rateFor(f.centerId,pid,f.variableId) : 0), 0);
  const canSave = (variables.length===0 || f.variableId) && selectedProcs.length>0;

  return `
  <div class="op-body">
    <h1>Nuevo registro</h1>
    <p class="sub">Elige centro, paciente y procedimientos.</p>

    <div class="section-label">Centro</div>
    <div class="chip-row">
      ${DATA.centers.map(c=>`
        <button class="chip ${f.centerId===c.id?'selected':''}" style="${f.centerId===c.id ? `background:${c.color};border-color:${c.color};color:#fff;` : ''}" onclick="App.setCenter('${c.id}')">${c.name}</button>
      `).join('')}
    </div>

    <div class="section-label">Paciente</div>
    <div class="field" style="margin-bottom:10px">
      <input placeholder="Nombre del paciente" value="${f.patientName}" onchange="App.setPatientField('patientName',this.value)"/>
    </div>
    <div class="field" style="margin-bottom:20px">
      <input placeholder="Código de paciente" value="${f.patientCode}" onchange="App.setPatientField('patientCode',this.value)"/>
    </div>

    <div class="section-label">Categoría de paciente</div>
    ${variables.length===0 ? `
    <p class="hint" style="margin:0 0 20px">Este centro no tiene variables definidas. Agrégalas en Centros dentro del panel admin.</p>
    ` : `
    <div class="chip-row" style="margin-bottom:20px">
      ${variables.map(v=>`<button class="chip ${f.variableId===v.id?'selected':''}" onclick="App.setVariable('${v.id}')">${v.name}</button>`).join('')}
    </div>`}

    <div class="section-label">Procedimientos</div>
    <div class="proc-list">
      ${DATA.procedures.map(p=>{
        const sel = selectedProcs.includes(p.id);
        const effectiveDiff = p.diff && variables.length>0;
        const price = f.variableId ? rateFor(f.centerId,p.id,f.variableId) : (effectiveDiff ? '—' : money(rateFor(f.centerId,p.id,'unico')));
        return `
        <button class="chip proc ${sel?'selected':''}" onclick="App.toggleProc('${p.id}')">
          <span class="p-name">${p.name}</span>
          <span class="p-price">${f.variableId ? money(price) : (effectiveDiff ? 'según paciente' : price)}</span>
        </button>`;
      }).join('')}
    </div>

    <div class="summary-bar">
      <div class="lbl">Total a registrar</div>
      <div class="amt">${money(total)}</div>
    </div>

    <div class="op-footer">
      <button class="btn-save" ${canSave?'':'disabled'} onclick="App.saveRegistro()">Guardar registro</button>
    </div>
  </div>`;
}

function opHistorial(){
  const regs = [...DATA.registrations].filter(r=>!r.deleted).reverse();
  return `
  <div class="op-body hist-wash">
    <h1>Historial</h1>
    <p class="sub">Tus últimos registros, más reciente primero.</p>
    ${regs.length===0 ? `<div class="empty">Aún no hay registros.</div>` : regs.map(r=>`
      <button class="hist-row" style="width:100%;border:1px solid var(--border);text-align:left;" onclick="App.openDetail('${r.id}')">
        <div class="l">
          <div class="center">${centerName(r.centerId)}</div>
          <div class="meta">${r.patientName ? r.patientName+' · ' : ''}${fmtDate(r.date)} · ${r.procIds.length} procedimiento${r.procIds.length>1?'s':''}</div>
        </div>
        <div class="r">
          <div class="total">${money(r.total)}</div>
          <div class="meta" style="color:var(--accent)">+${money(r.earned)}</div>
          <span class="badge adulto">${variableName(r.centerId, r.variableId)}</span>
        </div>
      </button>
    `).join('')}
  </div>`;
}

function ticketOverlay(){
  const t = S.ticket;
  return `
  <div class="ticket-overlay op-theme" onclick="if(event.target===this) App.closeTicket()">
    <div class="ticket">
      <div class="t-head">
        <div class="ok">✓</div>
        <h2>Registro guardado</h2>
        <div class="d">${t.date} · ${t.id.toUpperCase()}</div>
      </div>
      <div class="t-row"><span class="k">Centro</span><span class="v">${centerName(t.centerId)}</span></div>
      ${t.patientName ? `<div class="t-row"><span class="k">Paciente</span><span class="v">${t.patientName}</span></div>` : ''}
      ${t.patientCode ? `<div class="t-row"><span class="k">Código</span><span class="v">${t.patientCode}</span></div>` : ''}
      <div class="t-row"><span class="k">Categoría</span><span class="v">${variableName(t.centerId, t.variableId)}</span></div>
      <div class="t-divider"></div>
      ${t.procIds.map(pid=>`<div class="t-row"><span class="k">${procName(pid)}</span><span class="v">${money(rateFor(t.centerId,pid,t.variableId))}</span></div>`).join('')}
      <div class="t-divider"></div>
      <div class="t-total"><span class="k">Total facturado</span><span class="v">${money(t.total)}</span></div>
      <div class="t-row" style="margin-top:6px"><span class="k">Tu ganancia (${t.profitPct}%)</span><span class="v" style="color:var(--accent)">${money(t.earned)}</span></div>
      <button class="btn-ticket-close" onclick="App.closeTicket()">Nuevo registro</button>
    </div>
  </div>`;
}

function detailModal(){
  const r = DATA.registrations.find(x=>x.id===S.detailReg);
  if(!r) return '';
  return `
  <div class="modal-overlay op-theme" onclick="if(event.target===this) App.closeDetail()">
    <div class="modal">
      <h3>Detalle del registro</h3>
      <div class="t-row"><span class="k">Fecha</span><span class="v">${fmtDate(r.date)}</span></div>
      <div class="t-row"><span class="k">Centro</span><span class="v">${centerName(r.centerId)}</span></div>
      ${r.patientName ? `<div class="t-row"><span class="k">Paciente</span><span class="v">${r.patientName}</span></div>` : ''}
      ${r.patientCode ? `<div class="t-row"><span class="k">Código</span><span class="v">${r.patientCode}</span></div>` : ''}
      <div class="t-row"><span class="k">Categoría</span><span class="v">${variableName(r.centerId, r.variableId)}</span></div>
      <div class="t-divider"></div>
      ${r.procIds.map(pid=>`<div class="t-row"><span class="k">${procName(pid)}</span><span class="v">${money(rateFor(r.centerId,pid,r.variableId))}</span></div>`).join('')}
      <div class="t-divider"></div>
      <div class="t-total"><span class="k">Total facturado</span><span class="v">${money(r.total)}</span></div>
      <div class="t-row" style="margin-top:6px"><span class="k">Tu ganancia (${r.profitPct}%)</span><span class="v" style="color:var(--accent)">${money(r.earned)}</span></div>
      <div class="modal-actions"><button class="primary" onclick="App.closeDetail()">Cerrar</button></div>
    </div>
  </div>`;
}

/* ---------------- ADMIN ---------------- */
function adminScreen(){
  const screens = {
    resumen: adminResumen, centros: adminCentros, procedimientos: adminProcedimientos,
    tarifas: adminTarifas, facturacion: adminFacturacion, registros: adminRegistros, auditoria: adminAuditoria, perfil: adminPerfil,
  };
  return `
  <div class="admin-wrap admin-theme">
    <div class="mobile-topbar">
      <div class="mt-left">
        <button class="mt-brand" onclick="App.setAdminScreen('resumen')"><div class="mark"><img src="${ICON}" alt="Heaven"/></div><div class="name">Heaven</div></button>
      </div>
      <div class="mt-actions">
        <button class="mt-labeled-btn" onclick="App.goOperator()" title="Volver a la app">${icon('home',15)}<span>App</span></button>
        <button class="mt-labeled-btn ${S.adminScreen==='perfil'?'active':''}" onclick="App.setAdminScreen('perfil')" title="Perfil">${icon('settings',15)}<span>Perfil</span></button>
        <button class="hamburger-btn" onclick="App.toggleMobileNav()" aria-label="Abrir menú">
          <span class="bars"><span></span><span></span><span></span></span>
        </button>
      </div>
    </div>
    <div class="nav-backdrop ${S.mobileNavOpen?'open':''}" onclick="App.closeMobileNav()"></div>
    <div class="admin-side ${S.mobileNavOpen?'open':''}">
      <button class="brand" onclick="App.setAdminScreen('resumen')"><div class="mark"><img src="${ICON}" alt="Heaven"/></div><div class="name">Heaven</div></button>
      <div class="admin-nav">
        ${navBtn('resumen','Resumen')}
        ${navBtn('centros','Centros')}
        ${navBtn('procedimientos','Procedimientos')}
        ${navBtn('tarifas','Tarifas')}
        ${navBtn('facturacion','Facturación')}
        ${navBtn('registros','Registros')}
        ${navBtn('auditoria','Auditoría')}
      </div>
      <div class="side-footer">
        <button class="gear-btn ${S.adminScreen==='perfil'?'active':''}" onclick="App.setAdminScreen('perfil')" title="Ajustes">${icon('settings',17)}</button>
        <button class="back" onclick="App.goOperator()">${icon('home',14)} App</button>
        <button class="gear-btn" onclick="App.logout()" title="Cerrar sesión" aria-label="Cerrar sesión">${icon('power',16)}</button>
      </div>
    </div>
    <div class="admin-main">${screens[S.adminScreen]()}</div>
  </div>
  ${S.editReg ? editModal() : ''}
  `;
}
const NAV_ICONS = {
  resumen:'bar-chart', centros:'building', procedimientos:'clipboard', tarifas:'tag',
  facturacion:'receipt', registros:'list', auditoria:'shield',
};
function navBtn(key,label){
  return `<button class="${S.adminScreen===key?'active':''}" onclick="App.setAdminScreen('${key}')">${icon(NAV_ICONS[key],17)} ${label}</button>`;
}

function periodKey(dateStr, mode){
  if(mode==='dia') return dateStr;
  if(mode==='mes') return dateStr.slice(0,7);
  return dateStr.slice(0,4);
}
function periodLabel(key, mode){
  if(mode==='dia'){ const d=new Date(key+'T00:00:00'); return capitalize(d.toLocaleDateString('es-CL',{day:'2-digit',month:'short',year:'numeric'})); }
  if(mode==='mes'){ const d=new Date(key+'-01T00:00:00'); return capitalize(d.toLocaleDateString('es-CL',{month:'long',year:'numeric'})); }
  return key;
}
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
function groupRegs(regs, mode){
  const map = {};
  regs.forEach(r=>{
    const k = periodKey(r.date, mode);
    if(!map[k]) map[k] = {key:k, count:0, total:0, earned:0};
    map[k].count++; map[k].total += r.total; map[k].earned += (r.earned||0);
  });
  return Object.values(map).sort((a,b)=> b.key.localeCompare(a.key));
}
function segBtn(mode,label){
  return `<button class="seg-btn ${S.resumenGroup===mode?'active':''}" onclick="App.setResumenGroup('${mode}')">${label}</button>`;
}

function buildExportRows(){
  const active = DATA.registrations.filter(r=>!r.deleted);
  const f = S.resumenApplied;
  let rows = f.centerId==='all' ? active : active.filter(r=>r.centerId===f.centerId);
  if(f.year && f.year!=='all') rows = rows.filter(r=>r.date.slice(0,4)===f.year);
  if(f.month && f.month!=='all') rows = rows.filter(r=>r.date.slice(5,7)===f.month);
  if(f.dateFrom) rows = rows.filter(r=>r.date >= f.dateFrom);
  if(f.dateTo) rows = rows.filter(r=>r.date <= f.dateTo);
  return [...rows].sort((a,b)=> a.date.localeCompare(b.date));
}

function exportFileName(ext){
  const cid = S.resumenApplied.centerId;
  const label = cid==='all' ? 'todos-los-centros' : centerName(cid).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const today = new Date().toISOString().slice(0,10);
  return `heaven-${label}-${today}.${ext}`;
}

const MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

function availableYears(){
  const set = new Set();
  DATA.registrations.forEach(r=> set.add(r.date.slice(0,4)));
  return [...set].sort().reverse();
}

function adminResumen(){
  if(!S.resumenDefaultApplied){
    const now = new Date();
    const y = String(now.getFullYear());
    const m = String(now.getMonth()+1).padStart(2,'0');
    S.resumenDraft = { centerId:'all', dateMode:'yearMonth', year:y, month:m, dateFrom:'', dateTo:'' };
    S.resumenApplied = { ...S.resumenDraft };
    S.resumenDefaultApplied = true;
  }
  const active = DATA.registrations.filter(r=>!r.deleted);
  const f = S.resumenApplied;
  const cid = f.centerId;

  let dateFilteredActive = active;
  if(f.year && f.year!=='all') dateFilteredActive = dateFilteredActive.filter(r=>r.date.slice(0,4)===f.year);
  if(f.month && f.month!=='all') dateFilteredActive = dateFilteredActive.filter(r=>r.date.slice(5,7)===f.month);
  if(f.dateFrom) dateFilteredActive = dateFilteredActive.filter(r=>r.date >= f.dateFrom);
  if(f.dateTo) dateFilteredActive = dateFilteredActive.filter(r=>r.date <= f.dateTo);
  const filtered = cid==='all' ? dateFilteredActive : dateFilteredActive.filter(r=>r.centerId===cid);

  const totalFact = filtered.reduce((s,r)=>s+r.total,0);
  const totalGanado = filtered.reduce((s,r)=>s+(r.earned||0),0);
  const byCenter = DATA.centers.map(c=>({
    id:c.id, name:c.name, color:c.color,
    total: dateFilteredActive.filter(r=>r.centerId===c.id).reduce((s,r)=>s+r.total,0),
    earned: dateFilteredActive.filter(r=>r.centerId===c.id).reduce((s,r)=>s+(r.earned||0),0),
  }));
  const maxTotal = Math.max(1, ...byCenter.map(b=>b.total));
  const recent = [...filtered].reverse().slice(0,4);
  const grouped = groupRegs(filtered, S.resumenGroup);
  const maxGroup = Math.max(1, ...grouped.map(g=>g.total));

  const now = new Date();
  const curYear = String(now.getFullYear());
  const curMonth = String(now.getMonth()+1).padStart(2,'0');
  const isCurrentMonth = f.year===curYear && f.month===curMonth && !f.dateFrom && !f.dateTo;
  const hasAnyFilter = cid!=='all' || (f.year && f.year!=='all') || (f.month && f.month!=='all') || f.dateFrom || f.dateTo;
  const subtitle = cid==='all'
    ? (isCurrentMonth ? 'Vista general de la actividad registrada durante el mes actual.' : 'Vista general de la actividad registrada.')
    : (isCurrentMonth ? `Actividad de ${centerName(cid)} durante el mes actual.` : `Actividad de ${centerName(cid)}.`);

  const d = S.resumenDraft;

  return `
  <div class="admin-head">
    <div><h1>Resumen</h1><p>${subtitle}</p></div>
  </div>

  <button class="filters-toggle" onclick="App.toggleResumenFilters()">
    ${icon('filter',16)} Filtros ${hasAnyFilter ? '<span class="filter-dot"></span>' : ''}
    <span class="ft-chevron ${S.resumenFiltersOpen?'open':''}">${icon('chevron-right',14)}</span>
  </button>
  ${S.resumenFiltersOpen ? `
  <div class="filters-panel">
    <div class="f" style="margin-bottom:14px">
      <label>Centro</label>
      <select onchange="App.setResumenDraftField('centerId',this.value)">
        <option value="all" ${d.centerId==='all'?'selected':''}>Todos los centros</option>
        ${DATA.centers.map(c=>`<option value="${c.id}" ${c.id===d.centerId?'selected':''}>${c.name}</option>`).join('')}
      </select>
    </div>

    <div class="section-label">Filtrar por</div>
    <div class="seg" style="margin-bottom:14px">
      <button class="seg-btn ${d.dateMode==='year'?'active':''}" onclick="App.setResumenDateMode('year')">Año</button>
      <button class="seg-btn ${d.dateMode==='yearMonth'?'active':''}" onclick="App.setResumenDateMode('yearMonth')">Año y mes</button>
      <button class="seg-btn ${d.dateMode==='range'?'active':''}" onclick="App.setResumenDateMode('range')">Rango de fechas</button>
    </div>

    ${d.dateMode==='range' ? `
    <div class="date-filter">
      <div class="f"><label>Desde</label><input type="date" value="${d.dateFrom||''}" max="${d.dateTo||''}" onchange="App.setResumenDraftField('dateFrom',this.value)"/></div>
      <div class="f"><label>Hasta</label><input type="date" value="${d.dateTo||''}" min="${d.dateFrom||''}" ${!d.dateFrom?'disabled':''} onchange="App.setResumenDraftField('dateTo',this.value)"/></div>
    </div>` : `
    <div class="form-grid">
      <div class="f"><label>Año</label>
        <select onchange="App.setResumenDraftField('year',this.value)">
          <option value="all" ${d.year==='all'?'selected':''}>Todos los años</option>
          ${availableYears().map(y=>`<option value="${y}" ${y===d.year?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
      ${d.dateMode==='yearMonth' ? `
      <div class="f"><label>Mes</label>
        <select onchange="App.setResumenDraftField('month',this.value)">
          <option value="all" ${d.month==='all'?'selected':''}>Todos los meses</option>
          ${MONTH_NAMES.map((name,i)=>{ const v=String(i+1).padStart(2,'0'); return `<option value="${v}" ${v===d.month?'selected':''}>${name}</option>`; }).join('')}
        </select>
      </div>` : ''}
    </div>`}

    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn-add" onclick="App.applyResumenFilter()">Filtrar</button>
      ${hasAnyFilter ? `<button class="icon-btn" onclick="App.clearResumenFilter()">Limpiar filtros</button>` : ''}
    </div>
  </div>` : ''}

  <div class="export-btns">
    <button class="export-btn" onclick="App.exportExcel()">${icon('download',15)} Excel</button>
    <button class="export-btn" onclick="App.exportPDF()">${icon('download',15)} PDF</button>
  </div>

  <div class="cards-row">
    <div class="stat-card"><div class="lbl">Registros</div><div class="val">${filtered.length}</div></div>
    <div class="stat-card"><div class="lbl">Total facturado</div><div class="val">${money(totalFact)}</div></div>
    <div class="stat-card"><div class="lbl">Total ganado</div><div class="val" style="color:var(--accent)">${money(totalGanado)}</div></div>
    ${cid==='all'
      ? `<div class="stat-card"><div class="lbl">Centros activos</div><div class="val">${DATA.centers.filter(c=>c.active).length}</div></div>`
      : `<div class="stat-card"><div class="lbl">Promedio por registro</div><div class="val">${money(filtered.length? round2(totalFact/filtered.length):0)}</div></div>`}
  </div>

  ${cid==='all' ? `
  <div class="panel">
    <div class="panel-title">Facturado y ganado por centro — toca uno para ver su historial</div>
    ${byCenter.map(b=>`
      <button class="bar-row dual ${centerColorClass(b.id)}" style="width:100%;border:none;text-align:left;" onclick="App.drillResumenCenter('${b.id}')">
        <div class="name"><span class="c-dot" style="background:${b.color||'#8B979A'}"></span>${b.name}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(b.total/maxTotal*100).toFixed(0)}%;background:${b.color||'var(--amber)'}"></div></div>
        ${dualAmt(b.total, b.earned)}
      </button>`).join('')}
  </div>` : `
  <div class="panel">
    <div class="panel-title" style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
      <span>Historial de ${centerName(cid)}</span>
      <div class="seg">${segBtn('dia','Día')}${segBtn('mes','Mes')}${segBtn('anio','Año')}</div>
    </div>
    ${grouped.length===0 ? `<div class="empty">Sin registros para este centro.</div>` : grouped.map(g=>`
      <div class="bar-row dual">
        <div class="name">${periodLabel(g.key,S.resumenGroup)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(g.total/maxGroup*100).toFixed(0)}%"></div></div>
        ${dualAmt(g.total, g.earned)}
      </div>`).join('')}
  </div>`}

  <div class="panel">
    <div class="panel-title">Últimos registros${cid==='all'?'':' — '+centerName(cid)}</div>
    ${recent.length===0 ? `<div class="empty">Sin registros.</div>` : recent.map(r=>`
      <div class="bar-row dual">
        <div class="name">${centerName(r.centerId)} <span style="font-weight:400;color:var(--ink-faint);font-size:11.5px">— ${fmtDate(r.date)}</span></div>
        ${dualAmt(r.total, r.earned)}
      </div>`).join('')}
  </div>`;
}

const CENTER_COLORS = ['#3B6EA5','#7A5CB8','#C15B7A','#B8923C','#D97757','#5B5FA6','#4A7A82','#8B5E3C'];
function centerColorClass(id){
  const c = DATA.centers.find(x=>x.id===id);
  if(!c || !c.color) return '';
  const idx = CENTER_COLORS.indexOf(c.color);
  return idx>=0 ? `ctint-${idx}` : '';
}

function centerCard(c, editing){
  if(editing){
    const selectedColor = S.editCenterColor || c.color || CENTER_COLORS[0];
    return `
    <div class="f"><label>Nombre del centro</label><input class="rate-input" style="width:100%;text-align:left" id="edit-center-name-${c.id}" value="${c.name}"/></div>

    <div class="section-label" style="margin-top:16px; margin-bottom:16px;">Datos de facturación</div>
    <div class="form-grid">
      <div class="f"><label>Razón social / Nombre</label><input id="edit-center-rep-${c.id}" value="${c.billing.rep}"/></div>
      <div class="f">
        <label>Tipo de identificación</label>
        <select id="edit-center-taxidtype-${c.id}">
          <option value="CIF" ${c.billing.taxIdType==='CIF'?'selected':''}>CIF</option>
          <option value="NIF" ${c.billing.taxIdType==='NIF'?'selected':''}>NIF</option>
        </select>
      </div>
      <div class="f"><label>N° de identificación fiscal</label><input id="edit-center-taxid-${c.id}" value="${c.billing.taxId}"/></div>
      <div class="f"><label>IVA intracomunitario</label><input id="edit-center-ivaintra-${c.id}" placeholder="Ej: ESX1234567X" value="${c.billing.ivaIntra||''}"/></div>
      <div class="f"><label>Calle</label><input id="edit-center-street-${c.id}" value="${c.billing.street}"/></div>
      <div class="f"><label>Ciudad</label><input id="edit-center-city-${c.id}" value="${c.billing.city}"/></div>
      <div class="f"><label>Código postal</label><input id="edit-center-cp-${c.id}" value="${c.billing.cp}"/></div>
    </div>

    <div class="section-label" style="margin-top:16px">Variables y porcentaje de ganancia</div>
    <p class="hint" style="padding:0 0 10px">Define las categorías de paciente para este centro (ej. Adulto, Niño, Anciano, Perro...) y el % que ganas por cada una.</p>
    <div class="var-list">
      ${(S.editCenterVars||[]).map((v,idx)=>`
        <div class="var-row">
          <input placeholder="Nombre (ej. Adulto)" value="${v.name}" onchange="App.setCenterVarField(${idx},'name',this.value)"/>
          <input class="rate-input" type="number" min="0" max="100" step="any" placeholder="Ej: 35" style="width:70px" value="${v.pct}" onchange="App.setCenterVarField(${idx},'pct',this.value)"/><span style="font-size:13px;color:var(--ink-faint)">%</span>
          <button class="icon-btn danger" onclick="App.removeCenterVariable(${idx})">×</button>
        </div>`).join('') || '<div class="empty" style="padding:14px 0">Sin variables. Agrega al menos una.</div>'}
    </div>
    <button class="icon-btn" style="margin-top:8px" onclick="App.addCenterVariable()">${icon('plus-circle',13)} Agregar variable</button>

	<div class="section-label" style="margin-top:16px">Color identificador</div>
		<p class="hint" style="padding:0 0 8px">Se usa para reconocer este centro de un vistazo en Registros, Resumen y Facturación — no afecta ningún cálculo, es solo visual.</p>
		<div class="color-swatches">
		  ${CENTER_COLORS.map(hex=>`
			<button class="swatch ${selectedColor===hex?'selected':''}" style="background:${hex}" onclick="App.setEditCenterColor('${hex}')" title="${hex}"></button>`).join('')}
	</div>

    <div class="modal-actions" style="margin-top:18px">
      <button onclick="App.cancelEditCenter()">Cancelar</button>
      <button class="primary" onclick="App.saveEditCenter('${c.id}')">Guardar</button>
    </div>`;
  }
  return `
  <div class="center-card-head">
    <div>
      <div class="c-name"><span class="c-dot" style="background:${c.color||'#8B979A'}"></span>${c.name}</div>
      <div class="c-sub">${c.billing.rep || 'Sin razón social'} · ${c.billing.taxId ? (c.billing.taxIdType+': '+c.billing.taxId) : 'sin NIF/CIF'}</div>
      ${c.billing.ivaIntra ? `<div class="c-sub">IVA UE: ${c.billing.ivaIntra}</div>` : ''}
    </div>
    <button class="switch ${c.active?'on':''}" onclick="App.toggleCenterActive('${c.id}')"><span class="knob"></span></button>
  </div>
  <div class="c-row"><span class="c-k">Facturación</span><span class="c-v">${c.billing.street || '—'}, ${c.billing.city || '—'} ${c.billing.cp || ''}</span></div>
  <div class="c-row"><span class="c-k">Ganancia</span><span class="c-v" style="color:var(--accent);font-weight:600">${profitLabel(c)}</span></div>
  <button class="icon-btn" style="margin-top:10px" onclick="App.openEditCenter('${c.id}')">${icon('edit',13)} Editar centro</button>`;
}

function adminCentros(){
  return `
  <div class="admin-head">
    <div><h1>Centros</h1><p>Clínicas y hospitales, con su facturación y tu porcentaje de ganancia en cada uno.</p></div>
    <button class="btn-add" onclick="App.toggleAddCenter()">${icon('plus-circle',14)} Agregar centro</button>
  </div>
  ${S.addCenterOpen ? `
  <div class="panel">
    <div class="inline-form">
      <div class="f"><label>Nombre del centro</label><input id="new-center-name" placeholder="Ej: Clínica Los Robles"/></div>
      <button class="icon-btn" onclick="App.addCenter()">Crear centro</button>
    </div>
    <p class="hint">Completa la facturación y el porcentaje de ganancia editando el centro luego de crearlo.</p>
  </div>` : ''}
  ${DATA.centers.map(c=>`<div class="panel" style="padding:18px">${centerCard(c, S.editCenterId===c.id)}</div>`).join('')}
  `;
}

function procCard(p, editing){
  if(editing){
    return `
    <div class="f"><label>Nombre del procedimiento</label><input class="rate-input" style="width:100%;text-align:left" id="edit-proc-name-${p.id}" value="${p.name}"/></div>
    <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-soft);margin-top:14px">
      <input type="checkbox" id="edit-proc-diff-${p.id}" ${p.diff?'checked':''}/> Diferencia activada
    </label>
    <div class="modal-actions" style="margin-top:16px">
      <button onclick="App.cancelEditProc()">Cancelar</button>
      <button class="primary" onclick="App.saveEditProc('${p.id}')">Guardar</button>
    </div>`;
  }
  return `
  <div class="center-card-head">
    <div class="c-name">${p.name}</div>
    ${p.diff ? '<span class="badge adulto">Activada</span>' : '<span class="badge" style="background:var(--surface-alt);color:var(--ink-faint)">Desactivada</span>'}
  </div>
  <button class="icon-btn" style="margin-top:10px" onclick="App.openEditProc('${p.id}')">${icon('edit',13)} Editar</button>`;
}

function adminProcedimientos(){
  return `
  <div class="admin-head">
    <div><h1>Procedimientos</h1><p>Catálogo de prestaciones. La diferencia se activa por variable definida en cada centro.</p></div>
    <button class="btn-add" onclick="App.toggleAddProc()">${icon('plus-circle',14)} Agregar procedimiento</button>
  </div>
  ${S.addProcOpen ? `
  <div class="panel">
    <div class="inline-form">
      <div class="f"><label>Nombre</label><input id="new-proc-name" placeholder="Ej: Sellante"/></div>
      <div class="f chk"><input type="checkbox" id="new-proc-diff"/><label style="text-transform:none;font-size:13px">Diferencia</label></div>
      <button class="icon-btn" onclick="App.addProc()">Guardar</button>
    </div>
  </div>` : ''}
  ${DATA.procedures.map(p=>`<div class="panel" style="padding:18px">${procCard(p, S.editProcId===p.id)}</div>`).join('')}
  <p class="hint" style="padding:0">Cuando está activada, la tarifa se define por cada variable que hayas creado en el centro (en la pantalla Tarifas).</p>
  `;
}

function tarifaAccordionItem(p, variables, draft, isOpen){
  const effectiveDiff = p.diff && variables.length>0;
  const preview = effectiveDiff
    ? variables.map(v=>`${v.name} ${money(draft[p.id+'_'+v.id])}`).join(' · ')
    : money(draft[p.id+'_unico']);

  return `
  <div class="panel accordion-item">
    <button class="accordion-head" onclick="App.toggleTarifaProc('${p.id}')">
      <span class="ah-left">
        <span class="ah-chevron ${isOpen?'open':''}">${icon('chevron-right',15)}</span>
        <span class="ah-name">${p.name}</span>
      </span>
      ${!isOpen ? `<span class="ah-preview">${preview}</span>` : ''}
    </button>
    ${isOpen ? `
    <div class="accordion-body">
      ${effectiveDiff ? variables.map(v=>`
        <div class="var-value-row">
          <span class="vv-lbl">${v.name}</span>
          <input class="rate-input" type="number" min="0" step="0.01" placeholder="Ej: 45" style="width:120px" value="${draft[p.id+'_'+v.id]}" onchange="App.setDraftRate('${p.id}_${v.id}',this.value)"/>
        </div>`).join('') : `
        <div class="var-value-row">
          <span class="vv-lbl">Valor</span>
          <input class="rate-input" type="number" min="0" step="0.01" placeholder="Ej: 45" style="width:120px" value="${draft[p.id+'_unico']}" onchange="App.setDraftRate('${p.id}_unico',this.value)"/>
        </div>`}
    </div>` : ''}
  </div>`;
}

function adminTarifas(){
  const cid = S.tarifaCenterId;
  const center = DATA.centers.find(c=>c.id===cid);
  const variables = center ? center.variables : [];
  if(!S.tarifaDraft || S.tarifaDraftCenter !== cid){
    S.tarifaDraft = initTarifaDraft(cid);
    S.tarifaDraftCenter = cid;
    S.tarifaDirty = false;
  }
  if(!S.tarifaOpenProc || !DATA.procedures.find(p=>p.id===S.tarifaOpenProc)){
    S.tarifaOpenProc = DATA.procedures[0] ? DATA.procedures[0].id : null;
  }
  const draft = S.tarifaDraft;
  return `
  <div class="admin-head"><div><h1>Tarifas</h1><p>Valor de cada procedimiento por centro y variable.</p></div></div>
  <div class="rate-select">
    <select onchange="App.setTarifaCenter(this.value)">
      ${DATA.centers.map(c=>`<option value="${c.id}" ${c.id===cid?'selected':''}>${c.name}</option>`).join('')}
    </select>
  </div>
  ${variables.length===0 ? `
  <div class="panel"><p class="hint" style="padding:16px 18px">Este centro no tiene variables definidas — todas las tarifas se guardan como valor único. Ve a Centros para agregar variables (Adulto, Niño, etc.).</p></div>
  ` : ''}
  ${DATA.procedures.map(p=>tarifaAccordionItem(p, variables, draft, S.tarifaOpenProc===p.id)).join('')}
  <div class="panel" style="display:flex;align-items:center;gap:12px;padding:14px 18px;">
    <button class="btn-add" onclick="App.saveTarifas()" ${S.tarifaDirty?'':'disabled'} style="${S.tarifaDirty?'':'opacity:.45;cursor:default'}">Guardar cambios</button>
    <span style="font-size:12.5px;color:${S.tarifaDirty?'var(--amber)':'var(--ink-faint)'}">
      ${S.tarifaDirty ? 'Tienes cambios sin guardar' : (S.tarifaSaved ? 'Guardado ✓' : 'Sin cambios pendientes')}
    </span>
  </div>
  <p class="hint">Al guardar, los cambios rigen desde hoy. Los registros ya guardados conservan el valor que tenían al momento de crearse.</p>
  `;
}

function adminRegistros(){
  const cid = S.registrosCenterId;
  const year = S.registrosYear;
  const month = S.registrosMonth;
  const search = (S.registrosSearch||'').trim().toLowerCase();
  let regs = [...DATA.registrations].reverse().filter(r=> cid==='all' || r.centerId===cid);
  if(year && year!=='all') regs = regs.filter(r=> r.date.slice(0,4)===year);
  if(month && month!=='all') regs = regs.filter(r=> r.date.slice(5,7)===month);
  if(S.registrosDateFrom) regs = regs.filter(r=> r.date >= S.registrosDateFrom);
  if(S.registrosDateTo) regs = regs.filter(r=> r.date <= S.registrosDateTo);
  if(search) regs = regs.filter(r=>
    (r.patientName||'').toLowerCase().includes(search) ||
    (r.patientCode||'').toLowerCase().includes(search));

  const totalCount = regs.length;
  const pageSize = S.registrosPageSize;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const page = Math.min(S.registrosPage, totalPages);
  const pageRegs = regs.slice((page-1)*pageSize, page*pageSize);

  const hasAnyFilter = cid!=='all' || year!=='all' || month!=='all' || S.registrosDateFrom || S.registrosDateTo || search;

  return `
  <div class="admin-head"><div><h1>Registros</h1><p>Todas las atenciones ingresadas, con edición y borrado auditado.</p></div></div>

  <button class="filters-toggle" onclick="App.toggleRegistrosFilters()">
    ${icon('filter',16)} Filtros ${hasAnyFilter ? '<span class="filter-dot"></span>' : ''}
    <span class="ft-chevron ${S.registrosFiltersOpen?'open':''}">${icon('chevron-right',14)}</span>
  </button>
  ${S.registrosFiltersOpen ? `
  <div class="filters-panel">
    <div class="f" style="margin-bottom:14px">
      <label>Centro</label>
      <select onchange="App.setRegistrosCenter(this.value)">
        <option value="all" ${cid==='all'?'selected':''}>Todos los centros</option>
        ${DATA.centers.map(c=>`<option value="${c.id}" ${c.id===cid?'selected':''}>${c.name}</option>`).join('')}
      </select>
    </div>

    <div class="section-label">Filtrar por</div>
    <div class="seg" style="margin-bottom:14px">
      <button class="seg-btn ${S.registrosDateMode==='year'?'active':''}" onclick="App.setRegistrosDateMode('year')">Año</button>
      <button class="seg-btn ${S.registrosDateMode==='yearMonth'?'active':''}" onclick="App.setRegistrosDateMode('yearMonth')">Año y mes</button>
      <button class="seg-btn ${S.registrosDateMode==='range'?'active':''}" onclick="App.setRegistrosDateMode('range')">Rango de fechas</button>
    </div>

    ${S.registrosDateMode==='range' ? `
    <div class="date-filter">
      <div class="f"><label>Desde</label><input type="date" value="${S.registrosDateFrom||''}" max="${S.registrosDateTo||''}" onchange="App.setRegistrosDateFrom(this.value)"/></div>
      <div class="f"><label>Hasta</label><input type="date" value="${S.registrosDateTo||''}" min="${S.registrosDateFrom||''}" ${!S.registrosDateFrom?'disabled':''} onchange="App.setRegistrosDateTo(this.value)"/></div>
    </div>` : `
    <div class="form-grid">
      <div class="f"><label>Año</label>
        <select onchange="App.setRegistrosYear(this.value)">
          <option value="all" ${year==='all'?'selected':''}>Todos los años</option>
          ${availableYears().map(y=>`<option value="${y}" ${y===year?'selected':''}>${y}</option>`).join('')}
        </select>
      </div>
      ${S.registrosDateMode==='yearMonth' ? `
      <div class="f"><label>Mes</label>
        <select onchange="App.setRegistrosMonth(this.value)">
          <option value="all" ${month==='all'?'selected':''}>Todos los meses</option>
          ${MONTH_NAMES.map((name,i)=>{ const v=String(i+1).padStart(2,'0'); return `<option value="${v}" ${v===month?'selected':''}>${name}</option>`; }).join('')}
        </select>
      </div>` : ''}
    </div>`}

    <div class="f" style="margin-top:14px">
      <label>Buscar paciente (nombre o código)</label>
      <input placeholder="Ej: Marta Gómez o P-0231" value="${S.registrosSearch||''}" onchange="App.setRegistrosSearch(this.value)"/>
    </div>
    ${hasAnyFilter ? `<button class="icon-btn" style="margin-top:4px" onclick="App.clearRegistrosFilters()">Limpiar filtros</button>` : ''}
  </div>` : ''}

  <div class="panel">
    ${regs.length===0 ? `<div class="empty">Sin registros para este filtro.</div>` : `
    <div class="table-wrap responsive-table"><table>
      <thead><tr><th>Centro</th><th>Fecha</th><th>Nombre</th><th>Código</th><th>Total</th><th>Ganancia</th><th>Acciones</th></tr></thead>
      <tbody>
        ${pageRegs.map(r=>`
        <tr class="${r.deleted?'eliminado':''} ${centerColorClass(r.centerId)}">
          <td data-label="Centro" style="order:1">${centerDot(r.centerId)}${centerName(r.centerId)}</td>
          <td data-label="Fecha" style="order:2">${fmtDate(r.date)}</td>
          <td data-label="Nombre" style="order:4">${r.patientName || '—'}</td>
          <td data-label="Código" style="order:5">${r.patientCode || '—'}</td>
          <td data-label="Total" style="order:8;font-family:var(--mono)">${money(r.total)}</td>
          <td data-label="Ganancia" style="order:9;font-family:var(--mono);color:var(--accent)">${money(r.earned)} <span style="color:var(--ink-faint);font-size:11px">(${r.profitPct}%)</span></td>
          <td class="row-actions rt-actions" style="order:3">
            <button class="icon-btn" onclick="App.openEdit('${r.id}')" ${r.deleted?'disabled':''}>${icon('edit',13)} Editar</button>
            <button class="icon-btn danger" onclick="App.deleteReg('${r.id}')" ${r.deleted?'disabled':''}>${icon('trash',13)} Eliminar</button>
          </td>
        </tr>`).join('')}
      </tbody>
    </table></div>
    <div class="pagination">
      <div class="pg-size">
        <label>Registros</label>
        <select onchange="App.setRegistrosPageSize(this.value)">
          ${[10,20,50].map(n=>`<option value="${n}" ${n===pageSize?'selected':''}>${n}</option>`).join('')}
        </select>
      </div>
      <div class="pg-nav">
        <button class="icon-btn" onclick="App.setRegistrosPage(${page-1})" ${page<=1?'disabled':''}>‹ Anterior</button>
        <span class="pg-status">Página ${page} de ${totalPages} · ${totalCount} registro${totalCount===1?'':'s'}</span>
        <button class="icon-btn" onclick="App.setRegistrosPage(${page+1})" ${page>=totalPages?'disabled':''}>Siguiente ›</button>
      </div>
    </div>`}
  </div>`;
}

function adminFacturacion(){
  const f = S.facturaForm;
  let preview = null;
  if(f.centerId && f.dateFrom && f.dateTo){
    const regs = DATA.registrations.filter(r=>!r.deleted && r.centerId===f.centerId && r.date>=f.dateFrom && r.date<=f.dateTo);
    const honorarios = regs.reduce((s,r)=>s+(r.earned||0),0);
    const gastoMonto = parseFloat(f.gastoMonto)||0;
    const base = Math.max(0, honorarios - gastoMonto);
    const ivaPct = parseFloat(f.ivaPct)||0;
    const retPct = parseFloat(f.retPct)||0;
    const ivaAmount = round2(base*ivaPct/100);
    const retAmount = round2(base*retPct/100);
    const total = base + ivaAmount - retAmount;
    preview = { count: regs.length, honorarios, gastoMonto, base, ivaAmount, retAmount, total };
  }
  const facCid = S.facturasCenterId;
  const invoices = [...DATA.invoices].reverse().filter(inv=> facCid==='all' || inv.centerId===facCid);

  return `
  <div class="admin-head"><div><h1>Facturación</h1><p>Genera la factura de tus honorarios a cada centro.</p></div></div>

  <div class="panel" style="padding:18px">
    <div class="form-grid">
      <div class="f"><label>Centro</label>
        <select onchange="App.setFacturaField('centerId',this.value)">
          ${DATA.centers.map(c=>`<option value="${c.id}" ${c.id===f.centerId?'selected':''}>${c.name}</option>`).join('')}
        </select>
      </div>
      <div class="f"><label>Número de factura</label><input placeholder="Ej: 26/001" value="${f.numero}" onchange="App.setFacturaField('numero',this.value)"/></div>
      <div class="f"><label>Periodo — desde</label><input type="date" value="${f.dateFrom}" max="${f.dateTo||''}" onchange="App.setFacturaField('dateFrom',this.value)"/></div>
      <div class="f"><label>Periodo — hasta</label><input type="date" value="${f.dateTo}" min="${f.dateFrom||''}" ${!f.dateFrom?'disabled':''} onchange="App.setFacturaField('dateTo',this.value)"/></div>
      <div class="f"><label>% IVA</label><input class="rate-input" type="number" min="0" step="any" placeholder="Ej: 21" style="width:100%" value="${f.ivaPct}" onchange="App.setFacturaField('ivaPct',this.value)"/></div>
      <div class="f"><label>% Retención IRPF*</label><input class="rate-input" type="number" min="0" step="any" placeholder="Ej: 15" style="width:100%" value="${f.retPct}" onchange="App.setFacturaField('retPct',this.value)"/></div>
    </div>
    <div class="f" style="margin-top:10px">
      <label>Descripción del servicio</label>
	  <p class="hint" style="padding:0;">* Si lo dejas vacío, se usa automáticamente "Honorarios profesionales — periodo [fechas]".</p>
      <input style="width:100%" placeholder="Ej: Honorarios profesionales — periodo ${f.dateFrom && f.dateTo ? fmtDate(f.dateFrom)+' a '+fmtDate(f.dateTo) : '01/05/2026 a 31/05/2026'}" value="${f.descripcion}" onchange="App.setFacturaField('descripcion',this.value)"/>
    </div>

    <div class="section-label" style="margin-top:16px">Gastos (opcional)</div>
    <p class="hint" style="padding:0 0 10px">* Si se agrega un gasto, se resta de los honorarios antes de calcular la base imponible, el IVA y la retención.</p>
    <div class="form-grid" style="margin: 10px 0;">
      <div class="f"><label>Descripción del gasto</label><input placeholder="Ej: Material clínico" value="${f.gastoDesc}" onchange="App.setFacturaField('gastoDesc',this.value)"/></div>
      <div class="f"><label>Monto del gasto</label><input class="rate-input" type="number" min="0" step="0.01" placeholder="Ej: 120" style="width:100%" value="${f.gastoMonto}" onchange="App.setFacturaField('gastoMonto',this.value)"/></div>
    </div>

    <div class="f" style="margin-top:10px">
      <label>Notas / mención legal de exención</label>
      <textarea rows="3" style="width:100%;padding:8px 10px;border:1px solid var(--border);border-radius:7px;font-size:13px;font-family:inherit;resize:vertical" placeholder="Ej: Exento I.G.I.C. artículo 50 Ley 4/2012" onchange="App.setFacturaField('notas',this.value)">${f.notas}</textarea>
    </div>

    ${preview ? `
    <div class="panel" style="margin:16px 0 0;background:var(--surface-alt);border:none;box-shadow:none">
      <div class="panel-title">Vista previa — ${preview.count} registro${preview.count===1?'':'s'} en el periodo</div>
      <div class="bar-row"><div class="name">Honorarios (total ganado)</div><div class="bar-track" style="visibility:hidden"></div><div class="amt">${money(preview.honorarios)}</div></div>
      ${preview.gastoMonto!==0 ? `<div class="bar-row"><div class="name">Gasto${f.gastoDesc?': '+f.gastoDesc:''}</div><div class="bar-track" style="visibility:hidden"></div><div class="amt">${money(-preview.gastoMonto)}</div></div>` : ''}
      <div class="bar-row"><div class="name">Base imponible</div><div class="bar-track" style="visibility:hidden"></div><div class="amt">${money(preview.base)}</div></div>
      ${preview.ivaAmount!==0 ? `<div class="bar-row"><div class="name">IVA (${f.ivaPct}%)</div><div class="bar-track" style="visibility:hidden"></div><div class="amt">${money(preview.ivaAmount)}</div></div>` : ''}
      ${preview.retAmount!==0 ? `<div class="bar-row"><div class="name">Retención IRPF (${f.retPct}%)</div><div class="bar-track" style="visibility:hidden"></div><div class="amt">${money(-preview.retAmount)}</div></div>` : ''}
      <div class="bar-row"><div class="name" style="font-weight:700">Total</div><div class="bar-track" style="visibility:hidden"></div><div class="amt" style="font-weight:700;color:var(--accent)">${money(preview.total)}</div></div>
    </div>` : `<p class="hint" style="padding:10px 0 0 0;">Selecciona centro y el periodo (fecha de operación) para ver el cálculo.</p>`}

    <button class="btn-add" style="margin-top:20px" onclick="App.generateFactura()">Generar factura (PDF)</button>
  </div>

  <div class="admin-head" style="margin-bottom:14px"><div><h1 style="font-size:16px">Facturas emitidas</h1></div></div>
  <div class="rate-select">
    <select onchange="App.setFacturasCenter(this.value)">
      <option value="all" ${facCid==='all'?'selected':''}>Todos los centros</option>
      ${DATA.centers.map(c=>`<option value="${c.id}" ${c.id===facCid?'selected':''}>${c.name}</option>`).join('')}
    </select>
  </div>
  ${invoices.length===0 ? `<div class="panel"><div class="empty">Sin facturas para este filtro.</div></div>` : invoices.map(inv=>`
    <div class="panel ${centerColorClass(inv.centerId)}" style="padding:16px 18px">
      <div class="center-card-head">
        <div>
          <div class="c-name">${inv.numero}</div>
          <div class="c-sub">${centerDot(inv.centerId)}${centerName(inv.centerId)} · ${fmtDate(inv.dateFrom)} – ${fmtDate(inv.dateTo)}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-family:var(--mono);font-weight:700;font-size:15px">${money(inv.total)}</div>
          <div class="c-sub">Emitida ${fmtDate(inv.issueDate)}</div>
        </div>
      </div>
      <div class="row-actions" style="margin-top:12px">
        <button class="icon-btn" onclick="App.redownloadFactura('${inv.id}')" style="flex:1">${icon('download',14)} Descargar</button>
        <button class="icon-btn" onclick="App.emailFactura('${inv.id}')" style="flex:1">${icon('mail',14)} Enviar por correo</button>
      </div>
    </div>`).join('')}
  `;
}

function buildInvoicePDF(inv){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  const mx = 20, boxW = 84, gap = 3, pageRight = mx + boxW*2 + gap;
  let y = 20;
  const p = DATA.profile;
  const c = DATA.centers.find(x=>x.id===inv.centerId) || {name:'—', billing:{}};

  doc.setFont('helvetica','normal');

  // Caja emisor
  doc.setLineWidth(0.3);
  doc.rect(mx, y, boxW, 34);
  doc.setFont('helvetica','bold'); doc.setFontSize(9);
  doc.text('DATOS PROFESIONAL', mx+boxW/2, y+7, {align:'center'});
  doc.setFont('helvetica','normal'); doc.setFontSize(9);
  doc.text(`${p.nombre||''} ${p.apellido||''}`.trim() || '—', mx+boxW/2, y+13.5, {align:'center'});
  doc.text([p.calle,p.ciudad,p.cp].filter(Boolean).join(', ') || '—', mx+boxW/2, y+19.5, {align:'center'});
  doc.text(p.nif ? `NIF: ${p.nif}` : 'NIF: —', mx+boxW/2, y+25.5, {align:'center'});
  if(p.ivaIntra) doc.text(`IVA UE: ${p.ivaIntra}`, mx+boxW/2, y+30.5, {align:'center'});

  // Caja receptor
  const x2 = mx + boxW + gap;
  doc.rect(x2, y, boxW, 34);
  doc.setFont('helvetica','bold');
  doc.text('DATOS CLIENTE', x2+boxW/2, y+7, {align:'center'});
  doc.setFont('helvetica','normal');
  doc.text(c.billing.rep || c.name, x2+boxW/2, y+13.5, {align:'center'});
  doc.text([c.billing.street,c.billing.city,c.billing.cp].filter(Boolean).join(', ') || '—', x2+boxW/2, y+19.5, {align:'center'});
  doc.text(c.billing.taxId ? `${c.billing.taxIdType||'CIF'}: ${c.billing.taxId}` : 'NIF/CIF: —', x2+boxW/2, y+25.5, {align:'center'});
  if(c.billing.ivaIntra) doc.text(`IVA UE: ${c.billing.ivaIntra}`, x2+boxW/2, y+30.5, {align:'center'});

  y += 44;
  doc.setFont('helvetica','bold'); doc.setFontSize(9);
  doc.text('Factura n.º', mx, y);
  doc.text('Fecha de emisión', mx+65, y);
  doc.text(`${c.billing.taxIdType||'CIF'} cliente`, mx+130, y);
  y += 2;
  doc.setLineWidth(0.2); doc.line(mx, y, pageRight, y);
  y += 6;
  doc.setFont('helvetica','normal');
  doc.text(inv.numero, mx, y);
  doc.text(fmtDate(inv.issueDate), mx+65, y);
  doc.text(c.billing.taxId || '—', mx+130, y);
  y += 3;
  doc.line(mx, y, pageRight, y);
  y += 14;

  doc.setFont('helvetica','bold'); doc.setFontSize(10);
  const descText = inv.descripcion || `Honorarios profesionales — periodo ${fmtDate(inv.dateFrom)} a ${fmtDate(inv.dateTo)}`;
  const descLines = doc.splitTextToSize(descText.toUpperCase(), (pageRight-mx)-35);
  doc.text(descLines, mx, y);
  doc.text(money(inv.honorarios ?? inv.base), pageRight, y, {align:'right'});
  y += Math.max(descLines.length*5, 12);

  doc.setLineWidth(0.3); doc.line(mx, y, pageRight, y);
  y += 9;

  doc.setFont('helvetica','normal'); doc.setFontSize(10);
  if(inv.gastoMonto){
    doc.text('HONORARIOS', mx, y);
    doc.text(money(inv.honorarios), pageRight, y, {align:'right'});
    y += 7;
    doc.text(`GASTO${inv.gastoDesc ? ': '+inv.gastoDesc.toUpperCase() : ''}`, mx, y);
    doc.text(money(-inv.gastoMonto), pageRight, y, {align:'right'});
    y += 7;
  }
  doc.text('BASE IMPONIBLE', mx, y);
  doc.text(money(inv.base), pageRight, y, {align:'right'});
  y += 7;
  if(inv.ivaPct){
    doc.text(`${inv.ivaPct}% IVA`, mx, y);
    doc.text(money(inv.ivaAmount), pageRight, y, {align:'right'});
    y += 7;
  }
  if(inv.retPct){
    doc.text(`${inv.retPct}% RETENCIÓN I.R.P.F.`, mx, y);
    doc.text(money(-inv.retAmount), pageRight, y, {align:'right'});
    y += 7;
  }
  y += 3;
  doc.setFont('helvetica','bold'); doc.setFontSize(11.5);
  doc.text('TOTAL', mx, y);
  doc.text(money(inv.total), pageRight, y, {align:'right'});
  y += 4;
  doc.setLineWidth(0.4); doc.line(mx, y, pageRight, y);
  y += 14;

  if(inv.notas){
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5);
    const lines = doc.splitTextToSize(inv.notas, pageRight-mx);
    doc.text(lines, mx, y);
    y += lines.length*4.2 + 10;
  }

  y = Math.max(y, 255);
  doc.setFont('helvetica','normal'); doc.setFontSize(9);
  doc.text('Firmado:', mx+boxW/2, y, {align:'center'});
  doc.setLineWidth(0.2);
  doc.line(mx+30, y+16, mx+boxW+gap+30, y+16);

  return doc;
}

function adminAuditoria(){
  const rows = [...DATA.audit].reverse();
  return `
  <div class="admin-head"><div><h1>Auditoría</h1><p>Historial de cambios: quién, qué y cuándo.</p></div></div>
  <div class="panel">
    <div class="audit-feed">
      ${rows.map(a=>`
        <div class="audit-row">
          <div class="ts">${a.ts}</div>
          <div class="audit-tag ${a.action}">${a.action}</div>
          <div class="desc">${a.desc}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

function adminPerfil(){
  if(!S.profileDraft){
    S.profileDraft = {...DATA.profile};
    S.profileDirty = false;
  }
  const d = S.profileDraft;
  return `
  <div class="admin-head">
    <div><h1>Perfil</h1><p>Tus datos personales. Los campos marcados se usan para generar tus facturas — todos son opcionales.</p></div>
    <button class="icon-btn" onclick="App.closePerfil()">${icon('arrow-left',13)} Volver a Resumen</button>
  </div>
  <div class="panel" style="padding:18px">
    <div class="form-grid">
      <div class="f"><label>Nombre</label><input value="${d.nombre}" onchange="App.setProfileField('nombre',this.value)"/></div>
      <div class="f"><label>Apellido</label><input value="${d.apellido}" onchange="App.setProfileField('apellido',this.value)"/></div>
      <div class="f"><label>Calle</label><input value="${d.calle}" onchange="App.setProfileField('calle',this.value)"/></div>
      <div class="f"><label>Ciudad</label><input value="${d.ciudad}" onchange="App.setProfileField('ciudad',this.value)"/></div>
      <div class="f"><label>Código postal</label><input value="${d.cp}" onchange="App.setProfileField('cp',this.value)"/></div>
      <div class="f"><label>NIF / NIE / CIF</label><input value="${d.nif}" onchange="App.setProfileField('nif',this.value)"/></div>
      <div class="f"><label>IVA intracomunitario (VIES)</label><input placeholder="Ej: ESX1234567X" value="${d.ivaIntra}" onchange="App.setProfileField('ivaIntra',this.value)"/></div>
    </div>
    <p class="hint" style="padding:10px 0 0">El IVA intracomunitario solo es necesario si facturas a centros de otros países de la UE.</p>

    <div class="section-label" style="margin-top:16px">Moneda</div>
    <div class="form-grid">
      <div class="f">
        <select onchange="App.setProfileField('currency',this.value)">
          <option value="EUR" ${d.currency==='EUR'?'selected':''}>Euro (€)</option>
          <option value="USD" ${d.currency==='USD'?'selected':''}>Dólar (US$)</option>
        </select>
      </div>
    </div>
    <p class="hint" style="padding:6px 0 0">Cambia el símbolo y formato en toda la app. No convierte los montos ya cargados — es solo el formato de visualización.</p>
    <div style="display:flex;align-items:center;gap:12px;padding-top:16px">
      <button class="btn-add" onclick="App.saveProfile()" ${S.profileDirty?'':'disabled'} style="${S.profileDirty?'':'opacity:.45;cursor:default'}">Guardar cambios</button>
      <span style="font-size:12.5px;color:${S.profileDirty?'var(--amber)':'var(--ink-faint)'}">
        ${S.profileDirty ? 'Tienes cambios sin guardar' : (S.profileSaved ? 'Guardado ✓' : 'Sin cambios pendientes')}
      </span>
    </div>
  </div>`;
}

function editModal(){
  const r = DATA.registrations.find(x=>x.id===S.editReg);
  if(!r) return '';
  const center = DATA.centers.find(c=>c.id===r.centerId);
  const variables = center ? center.variables : [];
  return `
  <div class="modal-overlay admin-theme" onclick="if(event.target===this) App.closeEdit()">
    <div class="modal">
      <h3>Editar registro <span style="font-weight:400;color:var(--ink-faint);font-size:12px;font-family:var(--mono)">#${r.id}</span></h3>
      <div class="f" style="margin-bottom:10px"><label>Nombre del paciente</label><input value="${r.patientName||''}" onchange="App.editSetPatientField('patientName',this.value)"/></div>
      <div class="f" style="margin-bottom:16px"><label>Código de paciente</label><input value="${r.patientCode||''}" onchange="App.editSetPatientField('patientCode',this.value)"/></div>
      <div class="section-label">Categoría de paciente</div>
      <div class="chip-row" style="margin-bottom:16px">
        ${variables.map(v=>`<button class="chip ${r.variableId===v.id?'selected':''}" onclick="App.editSetVariable('${v.id}')">${v.name}</button>`).join('') || '<p class="hint">Sin variables definidas en este centro.</p>'}
      </div>
      <div class="section-label">Procedimientos</div>
      <div class="proc-list">
        ${DATA.procedures.map(p=>{
          const sel = r.procIds.includes(p.id);
          return `<button class="chip proc ${sel?'selected':''}" onclick="App.editToggleProc('${p.id}')">
            <span class="p-name">${p.name}</span>
            <span class="p-price">${money(rateFor(r.centerId,p.id,r.variableId))}</span>
          </button>`;
        }).join('')}
      </div>
      <div class="t-total" style="margin-top:14px"><span class="k">Total facturado</span><span class="v">${money(r.total)}</span></div>
      <div class="t-row" style="margin-top:6px"><span class="k">Ganancia (${r.profitPct}%)</span><span class="v" style="color:var(--accent)">${money(r.earned)}</span></div>
      <div class="modal-actions">
        <button onclick="App.closeEdit()">Cancelar</button>
        <button class="primary" onclick="App.saveEdit()">Guardar cambios</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- ACTIONS ---------------- */
const App = {
  login(){ S.loggedIn = true; render(); },
  logout(){ S.loggedIn = false; S.view = 'operator'; S.adminScreen = 'resumen'; S.mobileNavOpen = false; render(); },

  setOpScreen(s){ S.opScreen = s; render(); },
  setCenter(id){
    S.form.centerId = id;
    const center = DATA.centers.find(c=>c.id===id);
    const vars = center ? center.variables : [];
    S.form.variableId = vars.length===1 ? vars[0].id : null;
    render();
  },
  setVariable(id){ S.form.variableId = id; render(); },
  setPatientField(field,val){ S.form[field] = val; render(); },
  toggleProc(id){
    const i = S.form.procIds.indexOf(id);
    if(i>-1) S.form.procIds.splice(i,1); else S.form.procIds.push(id);
    render();
  },
  saveRegistro(){
    const f = S.form;
    const total = f.procIds.reduce((s,pid)=>s+rateFor(f.centerId,pid,f.variableId),0);
    const profitPct = profitPctFor(f.centerId, f.variableId);
    const earned = round2(total * profitPct / 100);
    regCounter++;
    const id = 'r'+regCounter;
    const date = new Date().toISOString().slice(0,10);
    const reg = {id, centerId:f.centerId, variableId:f.variableId, procIds:[...f.procIds], total, profitPct, earned, date, deleted:false,
      patientName: (f.patientName||'').trim(), patientCode: (f.patientCode||'').trim()};
    DATA.registrations.push(reg);
    DATA.audit.push({ts: date+' '+new Date().toTimeString().slice(0,5), action:'creado', desc:`Registro ${id} — ${centerName(f.centerId)}`});
    S.ticket = reg;
    render();
  },
  closeTicket(){
    S.ticket = null;
    const center = DATA.centers.find(c=>c.id===S.form.centerId);
    const vars = center ? center.variables : [];
    S.form = {centerId:S.form.centerId, variableId: vars.length===1 ? vars[0].id : null, procIds:[], patientName:'', patientCode:''};
    render();
  },
  openDetail(id){ S.detailReg = id; render(); },
  closeDetail(){ S.detailReg = null; render(); },

  goAdmin(){ S.view='admin'; S.adminScreen='resumen'; render(); },
  goOperator(){ S.view='operator'; S.mobileNavOpen=false; render(); },
  setAdminScreen(s){ S.adminScreen = s; S.mobileNavOpen=false; render(); },
  toggleMobileNav(){ S.mobileNavOpen = !S.mobileNavOpen; render(); },
  closeMobileNav(){ S.mobileNavOpen = false; render(); },

  toggleCenterActive(id){
    const c = DATA.centers.find(x=>x.id===id); c.active = !c.active; render();
  },
  toggleAddCenter(){ S.addCenterOpen = !S.addCenterOpen; render(); },
  addCenter(){
    const name = document.getElementById('new-center-name').value.trim();
    if(!name) return;
    const id = 'c'+(DATA.centers.length+1);
    const color = CENTER_COLORS[DATA.centers.length % CENTER_COLORS.length];
    DATA.centers.push({id, name, active:true, color,
      billing:{rep:'', street:'', city:'', cp:'', taxIdType:'CIF', taxId:'', ivaIntra:''},
      variables:[]});
    DATA.procedures.forEach(p=>{ DATA.rates[id+'_'+p.id+'_unico']=0; });
    DATA.audit.push({ts:nowTs(), action:'creado', desc:`Centro creado: ${name}`});
    S.addCenterOpen = false; render();
  },
  openEditCenter(id){
    const c = DATA.centers.find(x=>x.id===id);
    S.editCenterId = id;
    S.editCenterVars = c.variables.map(v=>({id:v.id, name:v.name, pct:v.pct}));
    S.editCenterColor = c.color || CENTER_COLORS[0];
    render();
  },
  setEditCenterColor(hex){ S.editCenterColor = hex; render(); },
  cancelEditCenter(){ S.editCenterId = null; S.editCenterVars = null; S.editCenterColor = null; render(); },
  addCenterVariable(){
    S.editCenterVars.push({id:'tmp'+Date.now()+Math.floor(Math.random()*1000), name:'', pct:0});
    render();
  },
  removeCenterVariable(idx){ S.editCenterVars.splice(idx,1); render(); },
  setCenterVarField(idx, field, val){
    S.editCenterVars[idx][field] = field==='pct' ? (parseFloat(val)||0) : val;
    render();
  },
  saveEditCenter(id){
    const c = DATA.centers.find(x=>x.id===id);
    const name = document.getElementById('edit-center-name-'+id).value.trim();
    if(!name) return;
    c.name = name;
    c.color = S.editCenterColor || c.color || CENTER_COLORS[0];
    c.billing = {
      rep: document.getElementById('edit-center-rep-'+id).value.trim(),
      street: document.getElementById('edit-center-street-'+id).value.trim(),
      city: document.getElementById('edit-center-city-'+id).value.trim(),
      cp: document.getElementById('edit-center-cp-'+id).value.trim(),
      taxIdType: document.getElementById('edit-center-taxidtype-'+id).value,
      taxId: document.getElementById('edit-center-taxid-'+id).value.trim(),
      ivaIntra: document.getElementById('edit-center-ivaintra-'+id).value.trim(),
    };
    let maxIdx = 0;
    (S.editCenterVars||[]).forEach(v=>{
      if(!v.id.startsWith('tmp')){
        const n = parseInt(v.id.replace('v',''),10);
        if(!isNaN(n) && n>maxIdx) maxIdx = n;
      }
    });
    let vcounter = maxIdx+1;
    c.variables = (S.editCenterVars||[])
      .filter(v=>v.name && v.name.trim())
      .map(v=>({ id: v.id.startsWith('tmp') ? 'v'+(vcounter++) : v.id, name: v.name.trim(), pct: v.pct||0 }));
    DATA.audit.push({ts:nowTs(), action:'editado', desc:`Centro actualizado: ${name} (${profitLabel(c)})`});
    S.editCenterId = null; S.editCenterVars = null; S.editCenterColor = null; S.tarifaDraft = null; render();
  },

  toggleAddProc(){ S.addProcOpen = !S.addProcOpen; render(); },
  addProc(){
    const name = document.getElementById('new-proc-name').value.trim();
    const diff = document.getElementById('new-proc-diff').checked;
    if(!name) return;
    const id = 'p'+(DATA.procedures.length+1);
    DATA.procedures.push({id, name, diff});
    DATA.centers.forEach(c=>{
      if(diff && c.variables.length>0){
        c.variables.forEach(v=>{ DATA.rates[c.id+'_'+id+'_'+v.id]=0; });
      } else {
        DATA.rates[c.id+'_'+id+'_unico']=0;
      }
    });
    S.addProcOpen = false; render();
  },
  openEditProc(id){ S.editProcId = id; render(); },
  cancelEditProc(){ S.editProcId = null; render(); },
  saveEditProc(id){
    const name = document.getElementById('edit-proc-name-'+id).value.trim();
    const newDiff = document.getElementById('edit-proc-diff-'+id).checked;
    if(!name) return;
    const p = DATA.procedures.find(x=>x.id===id);
    p.name = name;
    if(newDiff !== p.diff){
      DATA.centers.forEach(c=>{
        if(c.variables.length===0) return; // sin variables, siempre queda como 'unico'
        if(newDiff){
          const base = DATA.rates[c.id+'_'+id+'_unico'] ?? 0;
          c.variables.forEach(v=>{ DATA.rates[c.id+'_'+id+'_'+v.id] = base; });
          delete DATA.rates[c.id+'_'+id+'_unico'];
        } else {
          const firstVar = c.variables[0];
          const base = firstVar ? (DATA.rates[c.id+'_'+id+'_'+firstVar.id] ?? 0) : 0;
          DATA.rates[c.id+'_'+id+'_unico'] = base;
          c.variables.forEach(v=>{ delete DATA.rates[c.id+'_'+id+'_'+v.id]; });
        }
      });
      p.diff = newDiff;
    }
    DATA.audit.push({ts:nowTs(), action:'editado', desc:`Procedimiento actualizado: ${name}`});
    S.editProcId = null;
    S.tarifaDraft = null;
    render();
  },

  setTarifaCenter(id){ S.tarifaCenterId = id; S.tarifaDraft = null; S.tarifaOpenProc = null; render(); },
  toggleTarifaProc(pid){ S.tarifaOpenProc = (S.tarifaOpenProc===pid ? null : pid); render(); },
  setResumenGroup(mode){ S.resumenGroup = mode; render(); },
  setResumenDraftField(field,val){
    const d = S.resumenDraft;
    d[field] = val;
    if(field==='dateFrom' && d.dateTo && val && d.dateTo < val) d.dateTo = val;
    if(field==='dateTo' && d.dateFrom && val && val < d.dateFrom) d.dateTo = d.dateFrom;
    render();
  },
  setResumenDateMode(mode){
    S.resumenDraft.dateMode = mode;
    if(mode==='range'){
      S.resumenDraft.year = 'all'; S.resumenDraft.month = 'all';
    } else {
      S.resumenDraft.dateFrom = ''; S.resumenDraft.dateTo = '';
      if(mode==='year') S.resumenDraft.month = 'all';
    }
    render();
  },
  applyResumenFilter(){ S.resumenApplied = {...S.resumenDraft}; render(); },
  clearResumenFilter(){
    S.resumenDraft = { centerId:'all', dateMode:'yearMonth', year:'all', month:'all', dateFrom:'', dateTo:'' };
    S.resumenApplied = {...S.resumenDraft};
    render();
  },
  toggleResumenFilters(){ S.resumenFiltersOpen = !S.resumenFiltersOpen; render(); },
  drillResumenCenter(id){
    S.resumenDraft.centerId = id;
    S.resumenApplied = {...S.resumenDraft};
    render();
  },
  setRegistrosCenter(id){ S.registrosCenterId = id; S.registrosPage = 1; render(); },
  setRegistrosDateMode(mode){
    S.registrosDateMode = mode;
    if(mode==='range'){
      S.registrosYear = 'all'; S.registrosMonth = 'all';
    } else {
      S.registrosDateFrom = null; S.registrosDateTo = null;
      if(mode==='year') S.registrosMonth = 'all';
    }
    S.registrosPage = 1; render();
  },
  setRegistrosYear(y){ S.registrosYear = y; S.registrosPage = 1; render(); },
  setRegistrosMonth(m){ S.registrosMonth = m; S.registrosPage = 1; render(); },
  setRegistrosDateFrom(v){
    S.registrosDateFrom = v || null;
    if(S.registrosDateTo && v && S.registrosDateTo < v) S.registrosDateTo = v;
    S.registrosPage = 1; render();
  },
  setRegistrosDateTo(v){
    S.registrosDateTo = v || null;
    if(S.registrosDateFrom && v && v < S.registrosDateFrom) S.registrosDateTo = S.registrosDateFrom;
    S.registrosPage = 1; render();
  },
  setRegistrosSearch(v){ S.registrosSearch = v; S.registrosPage = 1; render(); },
  setRegistrosPage(p){ S.registrosPage = Math.max(1, p); render(); },
  setRegistrosPageSize(n){ S.registrosPageSize = parseInt(n,10)||20; S.registrosPage = 1; render(); },
  clearRegistrosFilters(){
    S.registrosCenterId = 'all';
    S.registrosDateMode = 'yearMonth';
    S.registrosYear = 'all';
    S.registrosMonth = 'all';
    S.registrosDateFrom = null;
    S.registrosDateTo = null;
    S.registrosSearch = '';
    S.registrosPage = 1;
    render();
  },
  toggleRegistrosFilters(){ S.registrosFiltersOpen = !S.registrosFiltersOpen; render(); },
  exportExcel(){
    const rows = buildExportRows();
    if(rows.length===0){ alert('No hay registros para exportar con estos filtros.'); return; }
    const cs = currencySymbol();
    const data = rows.map(r=>({
      Fecha: r.date,
      Centro: centerName(r.centerId),
      'Nombre paciente': r.patientName || '',
      'Código paciente': r.patientCode || '',
      Categoría: variableName(r.centerId, r.variableId),
      Procedimientos: r.procIds.map(procName).join(', '),
      [`Total facturado (${cs})`]: r.total,
      'Ganancia (%)': r.profitPct,
      [`Ganancia (${cs})`]: r.earned,
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    ws['!cols'] = [{wch:12},{wch:22},{wch:18},{wch:14},{wch:14},{wch:30},{wch:16},{wch:12},{wch:14}];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registros');
    XLSX.writeFile(wb, exportFileName('xlsx'));
  },
  exportPDF(){
    const rows = buildExportRows();
    if(rows.length===0){ alert('No hay registros para exportar con estos filtros.'); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const f = S.resumenApplied;
    const title = f.centerId==='all' ? 'Todos los centros' : centerName(f.centerId);
    doc.setFontSize(14);
    doc.text(`Heaven — Resumen: ${title}`, 14, 16);
    doc.setFontSize(9);
    const parts = [];
    if(f.year && f.year!=='all') parts.push(`Año ${f.year}`);
    if(f.month && f.month!=='all') parts.push(MONTH_NAMES[parseInt(f.month,10)-1]);
    if(f.dateFrom||f.dateTo) parts.push(`Rango: ${f.dateFrom||'inicio'} a ${f.dateTo||'hoy'}`);
    const rangeText = parts.length ? parts.join(' · ') : 'Todos los registros';
    doc.setTextColor(120);
    doc.text(rangeText, 14, 22);
    doc.setTextColor(0);

    const body = rows.map(r=>[
      fmtDate(r.date), centerName(r.centerId), r.patientName||'', r.patientCode||'', variableName(r.centerId,r.variableId),
      r.procIds.map(procName).join(', '), money(r.total), r.profitPct+'%', money(r.earned)
    ]);
    const totalFact = rows.reduce((s,r)=>s+r.total,0);
    const totalGan = rows.reduce((s,r)=>s+(r.earned||0),0);

    doc.autoTable({
      startY: 28,
      head: [['Fecha','Centro','Nombre','Código','Categoría','Procedimientos','Facturado','%','Ganancia']],
      body,
      foot: [['','','','','','Totales', money(totalFact), '', money(totalGan)]],
      styles:{ fontSize:8, cellPadding:3 },
      headStyles:{ fillColor:[22,35,43] },
      footStyles:{ fillColor:[238,242,240], textColor:20, fontStyle:'bold' },
    });
    doc.save(exportFileName('pdf'));
  },
  setProfileField(field,val){ S.profileDraft[field] = val; S.profileDirty = true; S.profileSaved = false; render(); },
  closePerfil(){
    S.profileDraft = null;
    S.profileDirty = false;
    S.profileSaved = false;
    S.adminScreen = 'resumen';
    S.mobileNavOpen = false;
    render();
  },
  saveProfile(){
    DATA.profile = {...S.profileDraft};
    DATA.audit.push({ts:nowTs(), action:'editado', desc:'Perfil actualizado'});
    S.profileDirty = false; S.profileSaved = true; render();
  },
  setFacturaField(field,val){
    S.facturaForm[field] = val;
    const f = S.facturaForm;
    if(field==='dateFrom' && f.dateTo && val && f.dateTo < val) f.dateTo = val;
    if(field==='dateTo' && f.dateFrom && val && val < f.dateFrom) f.dateTo = f.dateFrom;
    render();
  },
  generateFactura(){
    const f = S.facturaForm;
    if(!f.numero || !f.numero.trim()){ alert('Ingresa un número de factura.'); return; }
    if(!f.dateFrom || !f.dateTo){ alert('Selecciona el periodo (fecha de operación).'); return; }
    if(f.dateFrom > f.dateTo){ alert('La fecha "desde" no puede ser posterior a "hasta".'); return; }
    const regs = DATA.registrations.filter(r=>!r.deleted && r.centerId===f.centerId && r.date>=f.dateFrom && r.date<=f.dateTo);
    const honorarios = regs.reduce((s,r)=>s+(r.earned||0),0);
    const gastoDesc = (f.gastoDesc||'').trim();
    const gastoMonto = parseFloat(f.gastoMonto)||0;
    const base = Math.max(0, honorarios - gastoMonto);
    const ivaPct = parseFloat(f.ivaPct)||0;
    const retPct = parseFloat(f.retPct)||0;
    const ivaAmount = round2(base*ivaPct/100);
    const retAmount = round2(base*retPct/100);
    const total = base + ivaAmount - retAmount;
    const descripcion = (f.descripcion && f.descripcion.trim())
      ? f.descripcion.trim()
      : `Honorarios profesionales — periodo ${fmtDate(f.dateFrom)} a ${fmtDate(f.dateTo)}`;
    const inv = {
      id: 'f'+(DATA.invoices.length+1)+'-'+Date.now(),
      numero: f.numero.trim(),
      centerId: f.centerId,
      dateFrom: f.dateFrom,
      dateTo: f.dateTo,
      issueDate: new Date().toISOString().slice(0,10),
      honorarios, gastoDesc, gastoMonto,
      ivaPct, retPct, base, ivaAmount, retAmount, total,
      descripcion,
      notas: f.notas || '',
    };
    DATA.invoices.push(inv);
    DATA.audit.push({ts:nowTs(), action:'creado', desc:`Factura ${inv.numero} — ${centerName(inv.centerId)}`});
    const doc = buildInvoicePDF(inv);
    doc.save(`factura-${inv.numero.replace(/[^a-z0-9]+/gi,'-')}.pdf`);
    S.facturaForm.numero = '';
    render();
  },
  redownloadFactura(id){
    const inv = DATA.invoices.find(x=>x.id===id);
    if(!inv) return;
    const doc = buildInvoicePDF(inv);
    doc.save(`factura-${inv.numero.replace(/[^a-z0-9]+/gi,'-')}.pdf`);
  },
  setFacturasCenter(id){ S.facturasCenterId = id; render(); },
  emailFactura(id){
    const inv = DATA.invoices.find(x=>x.id===id);
    if(!inv) return;
    const doc = buildInvoicePDF(inv);
    const filename = `factura-${inv.numero.replace(/[^a-z0-9]+/gi,'-')}.pdf`;
    const centro = centerName(inv.centerId);
    doc.save(filename);
    const subject = encodeURIComponent(`Factura ${inv.numero}`);
    const body = encodeURIComponent(`Adjunto la factura ${inv.numero} correspondiente a ${centro}, periodo ${fmtDate(inv.dateFrom)} a ${fmtDate(inv.dateTo)}.\n\nEl PDF se descargó a tu dispositivo — adjúntalo a este correo antes de enviarlo.`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  },
  setDraftRate(key,val){
    const n = round2(parseFloat(val)||0);
    S.tarifaDraft[key] = n;
    S.tarifaDirty = true;
    S.tarifaSaved = false;
    render();
  },
  saveTarifas(){
    const cid = S.tarifaCenterId;
    Object.keys(S.tarifaDraft).forEach(key=>{
      DATA.rates[cid+'_'+key] = S.tarifaDraft[key];
    });
    DATA.audit.push({ts:nowTs(), action:'editado', desc:`Tarifas de ${centerName(cid)} actualizadas`});
    S.tarifaDirty = false;
    S.tarifaSaved = true;
    render();
  },

  openEdit(id){ S.editReg = id; render(); },
  closeEdit(){ S.editReg = null; render(); },
  editSetPatientField(field,val){
    const r = DATA.registrations.find(x=>x.id===S.editReg);
    r[field] = val;
    render();
  },
  editSetVariable(vid){
    const r = DATA.registrations.find(x=>x.id===S.editReg);
    r.variableId = vid;
    r.total = r.procIds.reduce((s,pid)=>s+rateFor(r.centerId,pid,r.variableId),0);
    r.profitPct = profitPctFor(r.centerId, r.variableId);
    r.earned = round2(r.total * r.profitPct / 100);
    render();
  },
  editToggleProc(pid){
    const r = DATA.registrations.find(x=>x.id===S.editReg);
    const i = r.procIds.indexOf(pid);
    if(i>-1) r.procIds.splice(i,1); else r.procIds.push(pid);
    r.total = r.procIds.reduce((s,id)=>s+rateFor(r.centerId,id,r.variableId),0);
    r.profitPct = profitPctFor(r.centerId, r.variableId);
    r.earned = round2(r.total * r.profitPct / 100);
    render();
  },
  saveEdit(){
    const r = DATA.registrations.find(x=>x.id===S.editReg);
    DATA.audit.push({ts:new Date().toISOString().slice(0,16).replace('T',' '), action:'editado', desc:`Registro ${r.id} — ${centerName(r.centerId)} modificado`});
    S.editReg = null; render();
  },
  deleteReg(id){
    const r = DATA.registrations.find(x=>x.id===id);
    if(!confirm('¿Eliminar este registro? Quedará marcado y trazado en auditoría.')) return;
    r.deleted = true;
    DATA.audit.push({ts:new Date().toISOString().slice(0,16).replace('T',' '), action:'eliminado', desc:`Registro ${r.id} — ${centerName(r.centerId)} eliminado`});
    render();
  },
};

render();
