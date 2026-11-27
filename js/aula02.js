// ===== UTILS =====
const $=id=>document.getElementById(id);

// ===== SCENES =====
function sceneGreet(id){
  const OFF=SC.office({});
  const PKG=SC.park({});
  const NT=`<rect width="400" height="260" fill="#1e3a5f"/>`+win(30,50,100,78,'night')+floorBoards(214,'#2d3f6b');
  const CS=sky('#bae6fd','#f0f9ff')+cloud(280,46,.8)+ground(210,'#86efac');

  function bub(x,y,w,line1,line2,tx,ty,fs){
    fs=fs||13;const h=line2?56:40;
    const triPath=`<path d="M${x+w*.3},${y+h-2} L${tx},${ty} L${x+w*.5},${y+h-2}Z" fill="#fff" stroke="#334155" stroke-width="2" stroke-linejoin="round"/>`;
    const box=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/>`;
    const cover=`<rect x="${x+w*.3+1}" y="${y+h-5}" width="${w*.2-2}" height="5" fill="#fff"/>`;
    const t1=`<text x="${x+w/2}" y="${y+(line2?fs+10:h/2+fs*.4)}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="#0f172a">${line1}</text>`;
    const t2=line2?`<text x="${x+w/2}" y="${y+fs*2+15}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="#0f172a">${line2}</text>`:'';
    return triPath+box+cover+t1+t2;
  }

  const sc={
    gm:      OFF+pp('he',{x:140,y:236,pose:'wave',mood:'happy',tie:'#2563eb'})+pp('she',{x:272,y:236,pose:'wave',mood:'happy'})+bub(68,8,180,'Good morning!',null,145,66),
    hdd:     OFF+pp('he',{x:148,y:236,pose:'shake',mood:'neutral',tie:'#1e3a8a'})+pp('f1',{x:258,y:236,pose:'shakeL',mood:'neutral'})+bub(66,8,185,'How do you do?',null,152,65),
    pleasure:OFF+pp('he',{x:148,y:236,pose:'shake',mood:'happy',tie:'#6d28d9'})+pp('she',{x:258,y:236,pose:'shakeL',mood:'happy',earrings:1})+bub(38,6,250,'It is a pleasure','to meet you.',155,62),
    hello:   PKG+pp('you',{x:148,y:236,pose:'wave',mood:'happy'})+pp('f2',{x:268,y:236,pose:'wave',mood:'happy'})+bub(60,8,195,'Hello! How are you?',null,152,66),
    hey:     CS +pp('me',{x:148,y:236,pose:'up',mood:'happy'})+pp('f1',{x:268,y:236,pose:'up',mood:'happy'})+bub(84,8,160,'Hey there!',null,152,66),
    hig:     CS +pp('you',{x:148,y:236,pose:'hold',mood:'happy'})+pp('she',{x:268,y:236,pose:'hips',mood:'happy'})+bub(68,8,180,"How's it going?",null,152,66),
    wup:     CS +pp('f2',{x:148,y:236,pose:'up',mood:'happy',shades:1})+pp('me',{x:268,y:236,pose:'wave',mood:'happy',cap:1})+bub(86,8,165,"What's up?",null,152,66),
    ltns:    PKG+pp('she',{x:148,y:236,pose:'up',mood:'happy',earrings:1})+pp('you',{x:268,y:236,pose:'up',mood:'happy'})+bub(60,8,200,'Long time no see!',null,152,66)+heart(205,86,1),
    bye:     OFF+pp('he',{x:140,y:236,pose:'wave',mood:'happy',tie:'#334155'})+pp('f1',{x:272,y:236,pose:'wave',mood:'happy'})+bub(76,8,175,'Goodbye!',null,145,66),
    pls:     OFF+pp('she',{x:148,y:236,pose:'hold',mood:'happy',earrings:1})+pp('he',{x:260,y:236,pose:'hold',mood:'happy',tie:'#2563eb'})+bub(32,6,250,'It was a pleasure','speaking with you.',155,62),
    lf:      OFF+pp('he',{x:148,y:236,pose:'shake',mood:'happy',tie:'#2563eb'})+pp('f1',{x:260,y:236,pose:'shakeL',mood:'happy'})+bub(32,6,250,'I look forward to','our next meeting.',155,62),
    gn:      NT +pp('me',{x:140,y:236,pose:'wave',mood:'tired',beanie:'#334155'})+pp('she',{x:272,y:236,pose:'wave',mood:'tired',earrings:1})+bub(80,8,170,'Good night!',null,145,66),
    cul:     CS +pp('you',{x:148,y:236,pose:'wave',mood:'happy'})+pp('f1',{x:268,y:236,pose:'wave',mood:'happy'})+bub(72,8,180,'See you later!',null,152,66),
    tc:      PKG+pp('f2',{x:148,y:236,pose:'thumb',mood:'happy'})+pp('me',{x:268,y:236,pose:'wave',mood:'happy'})+bub(84,8,165,'Take care!',null,152,66),
    run:     CS +pp('me',{x:170,y:236,pose:'up',mood:'busy'})+pp('f1',{x:300,y:236,pose:'wave',mood:'happy'})+bub(52,8,215,"I've got to run!",null,175,66),
    po:      CS +pp('f2',{x:148,y:236,pose:'up',mood:'happy',shades:1})+pp('f1',{x:268,y:236,pose:'up',mood:'happy'})+bub(84,8,165,'Peace out!',null,152,66),
  };
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">${sc[id]||sc.hello}</svg>`;
}

// ===== REGISTER BADGE =====
function rb(r){const R=REG[r];return `<span class="rb2" style="background:${R.bg};color:${R.color};border:1.5px solid ${R.border}">${R.emoji} ${R.label}</span>`}

// ===== CARD =====
const CC={'greeting-formal':'#1e40af','greeting-informal':'#0e7490','farewell-formal':'#78350f','farewell-informal':'#15803d'};
const CL={'greeting-formal':'cumprimento formal','greeting-informal':'cumprimento casual','farewell-formal':'despedida formal','farewell-informal':'despedida casual'};
function renderCard(item,i){
  return `<article class="gcard" id="card-${item.id}" style="--gc:${CC[item.cat]}">
  <div class="gcill">${sceneGreet(item.id)}</div>
  <div class="gcbody">
    <div class="gcmeta">${rb(item.register)}<span class="gccat">${CL[item.cat]}</span></div>
    <div class="gcen">${item.en}</div>
    ${item.en2?`<div class="gcen2">Também: <i>${item.en2}</i></div>`:''}
    <div class="gcresp"><span class="gcresp-label">RESPOSTA ESPERADA</span>${item.resp}</div>
    <div class="gcpt">🇧🇷 ${item.pt}</div>
    <div class="gcwhen">${item.when}</div>
    ${item.note?`<div class="gcnote">${item.note}</div>`:''}
  </div></article>`;
}

// ===== RENDER SECTIONS =====
const CATS={gf:'greeting-formal',gi:'greeting-informal',ff:'farewell-formal',fi:'farewell-informal'};
Object.entries(CATS).forEach(([k,v])=>{$('cards-'+k).innerHTML=GREET.filter(g=>g.cat===v).map(renderCard).join('')});

// ===== REGISTER INTRO =====
const REG_DESC={formal:'Trabalho, reuniões, apresentações, lojas e consultas.',neutral:'Uso geral — funciona em quase qualquer situação.',informal:'Amigos, família, colegas próximos e ambientes casuais.',playful:'Amigos íntimos, grupos jovens e momentos descontraídos.'};
$('regIntro').innerHTML=`<div class="reg-grid">${Object.entries(REG).map(([k,R])=>`<div class="regcard" style="--rc:${R.color};background:${R.bg};border:2px solid ${R.border}"><div class="regcard-top"><span class="regcard-em">${R.emoji}</span><span class="regcard-name" style="color:${R.color}">${R.label}</span></div><p class="regcard-use">${REG_DESC[k]}</p><p class="regcard-ex"><b>${GREET.find(g=>g.register===k)?.en||''}</b></p></div>`).join('')}</div>
<div class="note y" style="margin-top:18px"><h4>💡 Por que o registro importa?</h4><p>Usar "What's up?" numa entrevista de emprego ou "How do you do?" com seu melhor amigo numa festa soa muito estranho. Escolher o tom certo mostra que você entende a situação e demonstra inteligência social em inglês!</p></div>`;

// ===== ACTIVITY SCENE =====
(function(){
  const el=document.getElementById('atividadeScene');
  if(!el)return;
  const bg=sky('#bae6fd','#f0f9ff')+ground(210,'#86efac');
  function sbub(x,y,w,line1,tx,ty){
    const fs=12,h=38;
    const tri=`<path d="M${x+w*.3},${y+h-2} L${tx},${ty} L${x+w*.5},${y+h-2}Z" fill="#fff" stroke="#334155" stroke-width="2" stroke-linejoin="round"/>`;
    const box=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="#334155" stroke-width="2"/>`;
    const cov=`<rect x="${x+w*.3+1}" y="${y+h-5}" width="${w*.2-2}" height="5" fill="#fff"/>`;
    const t=`<text x="${x+w/2}" y="${y+h/2+fs*.4}" text-anchor="middle" font-size="${fs}" font-weight="600" fill="#0f172a">${line1}</text>`;
    return tri+box+cov+t;
  }
  const svg=bg
    +pp('me',{x:148,y:236,pose:'wave',mood:'happy'})
    +pp('you',{x:264,y:236,pose:'wave',mood:'happy'})
    +sbub(5,8,180,'Hey! Long time no see!',148,68)
    +sbub(200,8,175,'How are you doing?',264,68);
  el.innerHTML=`<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" style="width:100%;height:auto;display:block">${svg}</svg>`;
})();

// ===== DIALOGUES =====
function dlLine(spk,en,pt,side){return `<div class="dl-line dl-${side||'l'}"><div class="dl-bubble"><div class="dl-en">${en}</div><div class="dl-pt">${pt}</div></div><div class="dl-name">${spk}</div></div>`}

$('dialog1').innerHTML=`<div class="dl-ctx">🏢 Cenário: primeira reunião de negócios, 9h da manhã</div>
<div class="dl">
${dlLine('Mr. Silva','Good morning, Ms. Chen. How do you do?','Bom dia, Sra. Chen. Como vai? (formal)')}
${dlLine('Ms. Chen','Good morning! How do you do, Mr. Silva? It is a pleasure to meet you.','Bom dia! Como vai? É um prazer conhecê-lo.','r')}
${dlLine('Mr. Silva','The pleasure is mine. Please, have a seat.','O prazer é meu. Por favor, sente-se.')}
${dlLine('Ms. Chen','Thank you. [After the meeting] It was a pleasure speaking with you.','[Após a reunião] Foi um prazer falar com você.','r')}
${dlLine('Mr. Silva','Likewise. I look forward to our next meeting. Goodbye!','Da mesma forma. Aguardo nosso próximo encontro. Adeus!')}
${dlLine('Ms. Chen','Goodbye. Have a wonderful day!','Adeus. Tenha um ótimo dia!','r')}
</div>`;

$('dialog2').innerHTML=`<div class="dl-ctx">☕ Cenário: dois amigos se encontram num café</div>
<div class="dl">
${dlLine('Alex','Hey! Long time no see! How have you been?','Ei! Quanto tempo! Como você tem estado?')}
${dlLine('Jordan',"I know, right? It's been ages! I'm doing great. What's up with you?",'Pois é! Faz séculos! Estou ótimo. E você?','r')}
${dlLine('Alex',"Not much, just chilling. Listen, I've got to run — late for class!",'Nada demais, só relaxando. Olha, preciso correr — atrasado para a aula!')}
${dlLine('Jordan','No worries! See you later, take care!','Sem problema! Até mais, se cuida!','r')}
${dlLine('Alex','You too! Catch you on the flip side!','Você também! Até a próxima!')}
</div>`;

// ===== EXERCISES =====
let SC2={};
function upd2(){const t=Object.values(SC2).reduce((a,b)=>a+b,0);let best=0;try{best=+localStorage.getItem('aula02-best')||0;if(t>best){localStorage.setItem('aula02-best',t);best=t}}catch(e){}$('score2').textContent=`Placar: ${t} de 40 pontos`+(best?` · Recorde: ${best}`:'')}

// ----- EXA: type + register -----
const ansA={type:{},reg:{}};
let h2='';
h2+=`<div class="exbox"><h3><span class="n">1</span>Classifique cada expressão</h3><p class="inst">Para cada expressão, selecione o <b>tipo</b> (cumprimento ou despedida) e o <b>registro</b> (tom). Depois clique em Verificar.</p><div id="exa">${EXA.map((e,i)=>`<div class="gex-row" id="ear-${i}"><div class="gex-expr">"${e.expr}"</div><div class="gex-picks"><div class="gex-grp"><span class="gex-grp-label">Tipo:</span><button class="gex-btn" data-i="${i}" data-k="type" data-v="greeting" onclick="pickA(this)">Greeting</button><button class="gex-btn" data-i="${i}" data-k="type" data-v="farewell" onclick="pickA(this)">Farewell</button></div><div class="gex-grp"><span class="gex-grp-label">Registro:</span>${Object.entries(REG).map(([k,R])=>`<button class="gex-btn" data-i="${i}" data-k="reg" data-v="${k}" onclick="pickA(this)" style="border-color:${R.border}">${R.emoji} ${R.label}</button>`).join('')}</div></div><div class="gex-fb" id="eaf-${i}"></div></div>`).join('')}</div><div class="toolbar"><button class="btn" id="cA">Verificar</button><span class="res" id="oA"></span></div></div>`;

// ----- EXB: match response -----
const ansB={};
h2+=`<div class="exbox"><h3><span class="n">2</span>Qual é a resposta certa?</h3><p class="inst">Escolha a resposta mais adequada para cada expressão.</p><div id="exb">${EXB.map((q,i)=>`<div class="gex-row"><div class="gex-q">"${q.q}"</div><div class="gex-mcopts">${q.opts.map((o,j)=>`<button class="gex-mc" data-i="${i}" data-j="${j}" onclick="pickB(this)">${o}</button>`).join('')}</div><div class="gex-fb" id="ebf-${i}"></div></div>`).join('')}</div><div class="toolbar"><span class="res" id="oB"></span></div></div>`;

// ----- EXC: fill blank -----
h2+=`<div class="exbox"><h3><span class="n">3</span>Preencha a lacuna</h3><p class="inst">Escolha no menu a expressão correta para cada situação.</p><div id="exc">${EXC.map((q,i)=>`<div class="gex-row"><div class="gex-q">${q.before}<select class="sel" id="sc-${i}"><option value="">___</option>${EXC_OPTS.map(o=>`<option>${o}</option>`).join('')}</select>${q.after}</div><div class="gex-hint">${q.hint}</div></div>`).join('')}</div><div class="toolbar"><button class="btn" id="cC">Verificar</button><span class="res" id="oC"></span></div></div>`;

// ----- EXD: fix the blunder -----
h2+=`<div class="exbox"><h3><span class="n">4</span>Corrija a gafe!</h3><p class="inst">Cada situação contém um erro de registro ou de uso. Leia, pense e clique para ver a correção e ganhar pontos.</p><div id="exd">${EXD.map((d,i)=>`<div class="gblunder"><div class="gblunder-wrong">❌ ${d.wrong}</div><button class="btn ghost" id="gdBtn-${i}" onclick="revealD(${i})">Revelar correção</button><div class="gblunder-fix" id="gdf-${i}" style="display:none"><div class="gblunder-fix-en">✅ ${d.fix}</div><div class="gblunder-explain">${d.explain}</div></div></div>`).join('')}</div><div class="toolbar"><span class="res" id="oD"></span></div></div>`;

$('exs2').innerHTML=h2;

// EXA logic
window.pickA=function(btn){
  const i=btn.dataset.i,k=btn.dataset.k,v=btn.dataset.v;
  btn.closest('.gex-grp').querySelectorAll('.gex-btn').forEach(b=>{b.classList.remove('sel2')});
  btn.classList.add('sel2');
  if(!ansA[k])ansA[k]={};
  ansA[k][i]=v;
};
$('cA').onclick=()=>{
  let ok=0;
  EXA.forEach((e,i)=>{
    const tr=ansA.type?.[i]===e.type,rr=ansA.reg?.[i]===e.register;
    if(tr)ok++;if(rr)ok++;
    const fb=$('eaf-'+i);
    fb.className='gex-fb2 '+(tr&&rr?'ok':'bad');
    fb.textContent=tr&&rr?'✓ Perfeito!':'✗ '+(!tr?`Tipo: ${e.type}`:'')+(!tr&&!rr?' · ':'')+(!rr?`Registro: ${e.register}`:'');
  });
  $('oA').textContent=`${ok} de ${EXA.length*2} corretos`;
  SC2.A=Math.round(ok/(EXA.length*2)*10);upd2();
};

// EXB logic
window.pickB=function(btn){
  const i=btn.dataset.i,j=+btn.dataset.j;
  const ans=EXB[i].ans;
  btn.closest('.gex-mcopts').querySelectorAll('.gex-mc').forEach((b,bi)=>{
    b.classList.remove('ok','bad');
    if(bi===+btn.dataset.j||bi===ans)b.classList.add(bi===ans?'ok':'bad');
  });
  const r=j===ans;
  $('ebf-'+i).className='gex-fb2 '+(r?'ok':'bad');
  $('ebf-'+i).textContent=r?'✓ Correto!':'✗ Resposta certa: '+EXB[i].opts[ans];
  if(!ansB[i])ansB[i]=r;
  const n=Object.values(ansB).filter(Boolean).length;
  $('oB').textContent=`${n} de ${EXB.length} corretas`;
  SC2.B=Math.round(n/EXB.length*10);upd2();
};

// EXC logic
$('cC').onclick=()=>{
  let n=0;
  EXC.forEach((q,i)=>{
    const s=$('sc-'+i),r=s.value===q.ans;
    s.className='sel '+(r?'ok':'bad');
    if(r)n++;
  });
  $('oC').textContent=`${n} de ${EXC.length} corretas`;
  SC2.C=Math.round(n/EXC.length*10);upd2();
};

// EXD logic
let dRevealed=0;
window.revealD=function(i){
  $('gdf-'+i).style.display='';
  $('gdBtn-'+i).style.display='none';
  dRevealed++;
  SC2.D=Math.min(10,Math.round(dRevealed/EXD.length*10));
  $('oD').textContent=`${dRevealed} de ${EXD.length} corrigidas`;
  upd2();
};

upd2();

// ===== HAMBURGER =====
(function(){
  const ham=document.getElementById('ham');
  const nav=document.getElementById('topNav');
  if(!ham)return;
  ham.onclick=()=>nav.classList.toggle('open');
  nav.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&e.target!==ham&&!ham.contains(e.target))nav.classList.remove('open')});
})();

// ===== SIDENAV SCROLL SPY =====
(function(){
  const links=document.querySelectorAll('.sidenav a[href^="#"]');
  if(!links.length)return;
  const ids=[...links].map(a=>a.getAttribute('href').slice(1));
  const els=ids.map(id=>document.getElementById(id)).filter(Boolean);
  function spy(){const y=window.scrollY+130;let cur=els[0];for(const el of els){if(el.getBoundingClientRect().top+window.scrollY<=y)cur=el;}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur.id));}
  window.addEventListener('scroll',spy,{passive:true});spy();
})();
