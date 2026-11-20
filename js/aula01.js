// ===== RENDER =====
const $=id=>document.getElementById(id);
const TN={present:'PRESENT · Presente',past:'PAST · Passado',future:'FUTURE · Futuro'};
function frame(t,svg,cap){
 if(t==='past')return `<div class="photo"><div class="ill">${svg}</div><div class="cap">${cap}</div></div>`;
 if(t==='future')return `<div class="dream"><div class="ill">${svg}</div><div class="cap">${cap}</div></div>`;
 return `<div class="nowf"><div class="ill">${svg}</div><div class="cap">${cap}</div></div>`;
}
function blocks(s,v,c){return `<div class="sent"><span class="blk s">${s}<small>SUBJECT</small></span><span class="blk v">${v}<small>VERB</small></span><span class="blk c">${c}<small>COMPLEMENT</small></span><span class="dot">.</span></div>`}
function tl(t){const L={past:'PAST',present:'NOW',future:'FUTURE'};return `<div class="tl">${['past','present','future'].map(k=>`<b class="${k===t?'on':''}">${L[k]}</b>`).join('<i></i>')}</div>`}
function card(d,i){
 const n=String(i+1).padStart(2,'0');
 const icon=d.t==='present'?icoClock():icoCal(d.t);
 const svg=scene(d.sc,d.o);
 return `<article class="card" data-t="${d.t}" id="frase-${d.t}-${i+1}">
 <div class="illwrap">
  <div class="tbadge">${icon}<div><b>${d.when[0]}</b><span>${d.when[1]}</span></div></div>
  ${frame(d.t,svg,(d.t==='past'?'memória: ':d.t==='future'?'plano: ':'')+d.when[0]+' · '+d.when[1])}
  <div class="ctx"><h4>O que está acontecendo?</h4><p>${d.x}</p></div>
  <div class="rule"><span class="r"><span class="S">${d.s}</span> <span class="ar">→</span> <span class="V">${d.v}</span></span><span style="font-size:14px;color:var(--muted);font-family:Nunito;font-weight:700">Regra: ${RULE[d.v]}</span></div>
 </div>
 <div class="info">
  <div class="meta"><span class="num">${n}</span><span class="ttag">${TN[d.t]}</span><span class="ctag">${CT[d.ct]}</span></div>
  ${blocks(d.s,d.v,d.c)}
  <div class="ptr"><span>PT-BR</span>${d.pt}</div>
  ${tl(d.t)}
  <div class="parts">
   <div class="part s"><div class="pw">${d.s}</div><div><span class="pl">SUBJECT · SUJEITO</span><p>${SUBJ[d.s]}</p></div></div>
   <div class="part v"><div class="pw">${d.v}</div><div><span class="pl">VERB · VERBO</span><p>${VERB[d.v]}</p></div></div>
   <div class="part c"><div class="pw">${d.c}</div><div><span class="pl">COMPLEMENT · COMPLEMENTO</span><p>${d.ce}</p></div></div>
  </div>
 </div></article>`;
}
['present','past','future'].forEach(t=>{$('cards-'+t).innerHTML=CARDS.filter(c=>c.t===t).map(card).join('')});

// cover
$('coverTri').innerHTML=[['past','PAST','I was happy.','birthday','Eu estava feliz.'],['present','PRESENT','I am happy.','happyNow','Eu estou feliz.'],['future','FUTURE','I will be happy.','beach','Eu estarei feliz.']].map(([t,l,s,sc,pt])=>`<div class="cell"><div class="lab">${l}</div><div class="mini ${t==='past'?'sep':''}" style="${t==='past'?'filter:sepia(.6)':t==='future'?'outline:3px dashed #c4b5fd;outline-offset:3px;border-radius:14px':''}">${scene(sc)}</div><div class="s">${s.replace(/(was|am|will be)/,'<b style="color:#4ade80">$1</b>')}</div><div style="opacity:.8;font-weight:700">${pt}</div></div>`).join('');

// bridge diagram
$('bridge').innerHTML=`<svg viewBox="0 0 900 330" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="330" rx="24" fill="#e0f2fe"/>
<path d="M0,250 Q120,236 240,250 T480,250 T720,250 T900,250 V330 H0Z" fill="#38bdf8"/>
<path d="M0,268 Q120,254 240,268 T480,268 T720,268 T900,268" stroke="#bae6fd" stroke-width="3" fill="none"/>
<path d="M20,250 Q30,170 120,160 Q230,150 250,250Z" fill="#3b82f6"/><path d="M640,250 Q660,150 770,158 Q870,168 880,250Z" fill="#f97316"/>
${P(Object.assign({},CH.me,{x:150,y:176,s:.62,pose:'wave',mood:'happy'}))}
<text x="135" y="232" text-anchor="middle" font-size="30" font-weight="700" fill="#fff">I</text>
<text x="135" y="40" text-anchor="middle" font-size="22" font-weight="700" fill="#2563eb">SUBJECT</text><text x="135" y="62" text-anchor="middle" font-size="15" fill="#1e3a8a">Sujeito · Quem?</text>
<path d="M240,190 Q450,40 660,190" stroke="#16a34a" stroke-width="16" fill="none" stroke-linecap="round"/>
<path d="M240,200 Q450,60 660,200" stroke="#15803d" stroke-width="6" fill="none"/>
${[300,360,420,480,540,600].map(x=>{const t=(x-240)/420,y=190-300*t*(1-t);return `<line x1="${x}" y1="${y.toFixed(0)}" x2="${x}" y2="250" stroke="#16a34a" stroke-width="5"/>`}).join('')}
<rect x="370" y="80" width="160" height="56" rx="16" fill="#16a34a"/><text x="450" y="117" text-anchor="middle" font-size="30" font-weight="700" fill="#fff">am</text>
<text x="450" y="40" text-anchor="middle" font-size="22" font-weight="700" fill="#16a34a">VERB · TO BE</text><text x="450" y="62" text-anchor="middle" font-size="15" fill="#14532d">a ponte que liga</text>
<text x="765" y="40" text-anchor="middle" font-size="22" font-weight="700" fill="#ea580c">COMPLEMENT</text><text x="765" y="62" text-anchor="middle" font-size="15" fill="#7c2d12">Como? O quê? Onde?</text>
<g transform="translate(765,150)">${sun(0,0,24)}</g><text x="765" y="232" text-anchor="middle" font-size="30" font-weight="700" fill="#fff">happy</text>
<text x="450" y="312" text-anchor="middle" font-size="22" font-weight="600" fill="#0c4a6e">I + am + happy = Eu estou feliz.</text>
</svg>`;

// tree diagram
(function(){const ex=[['I','am','happy'],['She','was','at home'],['They','will be','students']];
const cols=[['#2563eb','#dbeafe','SUBJECT','Sujeito','Quem?',150],['#16a34a','#dcfce7','VERB','Verbo','Liga e marca o tempo',450],['#ea580c','#ffedd5','COMPLEMENT','Complemento','Como? O quê? Onde?',750]];
let s=`<svg viewBox="0 0 900 460" xmlns="http://www.w3.org/2000/svg"><rect width="900" height="460" rx="24" fill="#f8fafc"/>
<rect x="320" y="20" width="260" height="62" rx="18" fill="#0f172a"/><text x="450" y="50" text-anchor="middle" font-size="24" font-weight="700" fill="#fff">SENTENCE</text><text x="450" y="72" text-anchor="middle" font-size="14" fill="#cbd5e1">Frase</text>`;
cols.forEach(([c,bg,en,pt,q,x])=>{s+=`<path d="M450,82 C450,120 ${x},110 ${x},150" stroke="${c}" stroke-width="5" fill="none"/><rect x="${x-130}" y="150" width="260" height="80" rx="18" fill="${c}"/><text x="${x}" y="184" text-anchor="middle" font-size="24" font-weight="700" fill="#fff">${en} · ${pt}</text><text x="${x}" y="210" text-anchor="middle" font-size="15" fill="#fff">${q}</text>`;});
cols.forEach(([c,,,,,x])=>{s+=`<path d="M${x},230 L${x},270" stroke="${c}" stroke-width="3" stroke-dasharray="4 4"/>`});ex.forEach((e,r)=>{e.forEach((w,i)=>{const [c,bg,,,,x]=cols[i];const y=270+r*62;s+=`<rect x="${x-90}" y="${y}" width="180" height="46" rx="12" fill="${bg}" stroke="${c}" stroke-width="2.5"/><text x="${x}" y="${y+31}" text-anchor="middle" font-size="22" font-weight="600" fill="${c}">${w}</text>`});s+=`<text x="300" y="${270+r*62+31}" text-anchor="middle" font-size="26" fill="#94a3b8">+</text><text x="600" y="${270+r*62+31}" text-anchor="middle" font-size="26" fill="#94a3b8">+</text>`});
s+='</svg>';$('tree').innerHTML=s;})();

// conjugation tree
(function(){let s=`<svg viewBox="0 0 900 640" xmlns="http://www.w3.org/2000/svg"><rect width="900" height="640" rx="24" fill="#f0fdf4"/>
<ellipse cx="450" cy="620" rx="300" ry="22" fill="#bbf7d0"/>
<path d="M410,620 C420,540 430,500 440,440 L460,440 C470,500 480,540 490,620Z" fill="#92400e"/>
<path d="M440,460 C380,420 260,420 190,380" stroke="#92400e" stroke-width="26" fill="none" stroke-linecap="round"/>
<path d="M460,460 C520,420 640,420 710,380" stroke="#92400e" stroke-width="26" fill="none" stroke-linecap="round"/>
<path d="M450,450 L450,220" stroke="#92400e" stroke-width="28" stroke-linecap="round"/>
<rect x="380" y="530" width="140" height="56" rx="16" fill="#16a34a"/><text x="450" y="567" text-anchor="middle" font-size="28" font-weight="700" fill="#fff">TO BE</text>`;
const leaf=(cx,cy,w,h,c,bg,title,rows)=>{const x0=cx-w/2;let g=`<ellipse cx="${cx}" cy="${cy}" rx="${w/2+24}" ry="${h/2+22}" fill="${bg}" opacity=".9"/><rect x="${x0}" y="${cy-h/2}" width="${w}" height="${h}" rx="20" fill="#fff" stroke="${c}" stroke-width="4"/><rect x="${x0}" y="${cy-h/2}" width="${w}" height="42" rx="18" fill="${c}"/><text x="${cx}" y="${cy-h/2+29}" text-anchor="middle" font-size="22" font-weight="700" fill="#fff">${title}</text>`;rows.forEach((r,i)=>{const y=cy-h/2+78+i*42;g+=`<text x="${x0+20}" y="${y}" font-size="19" font-weight="600" fill="#2563eb">${r[0]}</text><text x="${x0+w-20}" y="${y}" text-anchor="end" font-size="23" font-weight="700" fill="#16a34a">→ ${r[1]}</text>`});return g};
s+=leaf(190,310,320,150,'#b45309','#fde68a','PAST · Passado',[['I / HE / SHE / IT','WAS'],['YOU / WE / THEY','WERE']]);
s+=leaf(450,125,320,190,'#0891b2','#a5f3fc','PRESENT · Presente',[['I','AM'],['HE / SHE / IT','IS'],['YOU / WE / THEY','ARE']]);
s+=leaf(710,310,320,150,'#7c3aed','#ddd6fe','FUTURE · Futuro',[['TODOS OS SUJEITOS','WILL BE'],['I, YOU, HE, SHE…','WILL BE']]);
s+=`<text x="190" y="430" text-anchor="middle" font-size="17" font-weight="700" fill="#78350f">← antes (ontem)</text><text x="710" y="430" text-anchor="middle" font-size="17" font-weight="700" fill="#4c1d95">depois (amanhã) →</text><text x="500" y="250" font-size="17" font-weight="700" fill="#155e75">agora</text>`;
s+='</svg>';$('conjTree').innerHTML=s;})();

// tense intros
const A={I:avatar(Object.assign({},CH.me,{mood:'happy'})),He:avatar(Object.assign({},CH.he,{mood:'neutral'})),She:avatar(Object.assign({},CH.she,{mood:'beauty'})),You:avatar(Object.assign({},CH.you,{mood:'happy'})),We:`<svg viewBox="-80 -192 160 160">${P(Object.assign({},CH.me,{x:-30,y:0,mood:'happy'}))}${P(Object.assign({},CH.f1,{x:30,y:0,mood:'happy'}))}</svg>`,They:`<svg viewBox="-110 -200 220 220">${P(Object.assign({},CH.f2,{x:-60,y:0,mood:'happy'}))}${P(Object.assign({},CH.she,{x:0,y:0,mood:'happy'}))}${P(Object.assign({},CH.he,{x:60,y:0,mood:'happy'}))}</svg>`,It:itIcon()};
const fig=(k,pt)=>`<figure>${A[k]}<figcaption>${k}<small>${pt}</small></figcaption></figure>`;
$('presentIntro').innerHTML=`<h3 style="font-size:26px">Quando usar AM, IS e ARE?</h3><p class="lead">A forma do verbo depende de <b>quem é o sujeito</b>. Olhe para a pessoa e escolha a "porta" certa:</p>
<div class="formrow">
 <div class="formcard" style="border-color:#93c5fd"><div class="avs">${fig('I','eu')}</div><div class="verb">AM</div><p>Só com <b>I</b>. Quem fala, falando de si.</p><p><i>I <b class="V">am</b> happy.</i></p></div>
 <div class="formcard" style="border-color:#86efac"><div class="avs">${fig('He','ele')}${fig('She','ela')}${fig('It','coisa/clima')}</div><div class="verb">IS</div><p>Uma pessoa, coisa ou animal sobre quem falamos.</p><p><i>She <b class="V">is</b> beautiful.</i></p></div>
 <div class="formcard" style="border-color:#fdba74"><div class="avs">${fig('You','você')}${fig('We','nós')}${fig('They','eles')}</div><div class="verb">ARE</div><p>Você(s) e qualquer grupo (plural).</p><p><i>They <b class="V">are</b> students.</i></p></div>
</div>
<div class="note y"><h4>Contrações (forma curta, muito usada na fala)</h4><p>I am → <b>I'm</b> · He is → <b>He's</b> · She is → <b>She's</b> · It is → <b>It's</b> · You are → <b>You're</b> · We are → <b>We're</b> · They are → <b>They're</b></p></div>`;
$('pastIntro').innerHTML=`<h3 style="font-size:26px">Do presente para o passado: só duas formas!</h3>
<div class="eq"><span class="b" style="background:#ecfeff;color:#0e7490">AM<small>I</small></span><span class="b" style="background:#ecfeff;color:#0e7490">IS<small>he / she / it</small></span><span style="color:#b45309">⟶</span><span class="b" style="background:#fef3c7;color:#b45309">WAS<small>I / he / she / it</small></span></div>
<div class="eq"><span class="b" style="background:#ecfeff;color:#0e7490">ARE<small>you / we / they</small></span><span style="color:#b45309">⟶</span><span class="b" style="background:#fef3c7;color:#b45309">WERE<small>you / we / they</small></span></div>
<div class="grid2"><div class="note"><h4>📅 Pistas de passado</h4><p>yesterday · last night · last week · last year · in 2005 · two days ago · when I was a child</p></div><div class="note"><h4>🇧🇷 Tradução</h4><p><b>was / were</b> pode ser traduzido como <b>era / eram</b> (ser) ou <b>estava / estavam</b> (estar). O contexto decide: <i>She was beautiful</i> = Ela <b>era</b> linda · <i>I was tired</i> = Eu <b>estava</b> cansado.</p></div></div>`;
$('futureIntro').innerHTML=`<h3 style="font-size:26px">A fórmula do futuro</h3>
<div class="eq"><span class="b" style="background:var(--sbg);color:var(--s)">SUBJECT<small>qualquer um</small></span>+<span class="b" style="background:#ede9fe;color:#6d28d9">WILL<small>marca de futuro</small></span>+<span class="b" style="background:var(--vbg);color:var(--v)">BE<small>forma básica</small></span>+<span class="b" style="background:var(--cbg);color:var(--c)">COMPLEMENT<small>como / onde / o quê</small></span></div>
<div class="grid2"><div class="note g"><h4>✅ Certo</h4><p style="font-family:Fredoka;font-size:20px" class="right">I will be ready.<br>She will be busy.<br>They will be at home.</p><p>Contração: I will → <b>I'll</b> · She will → <b>She'll</b> · They will → <b>They'll</b></p></div><div class="note r"><h4>❌ Errado</h4><p style="font-family:Fredoka;font-size:20px" class="wrong"><s>I will am ready.</s><br><s>She will is busy.</s><br><s>She wills be busy.</s><br><s>They will are at home.</s></p><p>Depois de WILL, o verbo fica <b>sempre</b> na forma básica <b>BE</b>.</p></div></div>`;

// comparison boards
const CMP=[{s:'I',c:'happy',v:['was','am','will be'],pt:['Eu estava feliz.','Eu estou feliz.','Eu estarei feliz.'],sc:['happyNow','happyNow','happyNow']},
{s:'She',c:'beautiful',v:['was','is','will be'],pt:['Ela era linda.','Ela é linda.','Ela estará linda.'],sc:['beautyNow','beautyNow','beautyNow']},
{s:'We',c:'friends',v:['were','are','will be'],pt:['Nós éramos amigos.','Nós somos amigos.','Nós seremos amigos.'],sc:['friends','friends','friends']},
{s:'It',c:'cold',v:['was','is','will be'],pt:['Estava frio.','Está frio.','Vai fazer frio.'],sc:['cold','cold','cold']}];
$('cmpBoards').innerHTML=CMP.map(b=>`<div class="cmp"><h3><span class="S">${b.s}</span> + <span class="V">___</span> + <span class="C">${b.c}</span></h3><div class="cols">${['past','present','future'].map((t,i)=>`<div class="col ${t}"><div class="lab">${['PAST · antes','PRESENT · agora','FUTURE · depois'][i]}</div><div class="mini ${t==='past'?'sep':t==='future'?'fut':''}">${scene(b.sc[i])}</div><div class="ss"><span class="S">${b.s}</span> <span class="V" style="text-decoration:underline;text-underline-offset:5px">${b.v[i]}</span> <span class="C">${b.c}</span>.</div><div class="pt">${b.pt[i]}</div></div>`).join('')}</div></div>`).join('');

// complement types
const CTY=[['Característica','Adjetivo','Como é?','beautyNow',['happy','beautiful','intelligent'],'She is beautiful.'],
['Estado','Adjetivo','Como está?','hungry',['tired','hungry','ready','busy'],'I was hungry.'],
['Identidade','Substantivo','O que / quem é?','students',['a student','a teacher','friends'],'They are students.'],
['Localização','Expressão de lugar','Onde está?','atHome',['at home','at school','at work'],'I am at home.'],
['Condição','Adjetivo (clima)','Como está o tempo?','cold',['cold','hot','sunny'],'It is cold.']];
$('ctypes').innerHTML=CTY.map(([n,cl,q,sc,ex,s])=>`<div class="ctype"><div class="mini">${scene(sc)}</div><span class="cls">${cl}</span><h3>${n}</h3><div class="ex"><b>Pergunta:</b> ${q}</div><ul>${ex.map(e=>`<li class="C">${e}</li>`).join('')}</ul><div class="ex"><i>${s}</i></div></div>`).join('');

// ===== EXERCISES =====
let SCORE={};function upd(){const t=Object.values(SCORE).reduce((a,b)=>a+b,0);let best=0;try{best=+localStorage.getItem('aula01-best')||0;if(t>best){localStorage.setItem('aula01-best',t);best=t}}catch(e){}$('score').textContent=`Placar: ${t} de 50 pontos`+(best?` · Recorde: ${best}`:'');}
const EX1=[[['She','S'],['is','V'],['busy','C']],[['We','S'],['were','V'],['at','C'],['school','C']],[['They','S'],['will','V'],['be','V'],['happy','C']],[['I','S'],['am','V'],['a','C'],['teacher','C']],[['It','S'],['was','V'],['cold','C']],[['You','S'],['are','V'],['my','C'],['friend','C']]];
const EX2=[['I was at home.','past'],['They will be students.','future'],['He is busy.','present'],['We were friends.','past'],['It will be hot.','future'],['You are right.','present'],['She was hungry.','past'],['I am ready.','present']];
const EX3=[['I ___ hungry now.','am','now = agora · sujeito I'],['She ___ at school yesterday.','was','yesterday = passado · she'],['They ___ busy tomorrow.','will be','tomorrow = futuro'],['We ___ friends.','are','presente · we'],['It ___ cold last night.','was','last night = passado · it'],['You ___ intelligent.','are','presente · you'],['He ___ a doctor next year.','will be','next year = futuro'],['They ___ at home last weekend.','were','last weekend = passado · they'],['My mother ___ happy today.','is','my mother = she · today'],['I ___ tired yesterday.','was','yesterday · I'],['You ___ right last week.','were','last week · you'],['The children ___ ready now.','are','the children = they · now']];
const EX4=[['cold','It is cold.'],['busy','He is busy.'],['students','They are students.'],['hungry','I was hungry.'],['wedding','She will be beautiful.'],['friends','We are friends.']];
const OPTS=['am','is','are','was','were','will be'];
let h='';
h+=`<div class="exbox"><h3><span class="n">1</span>Identifique sujeito, verbo e complemento</h3><p class="inst">Toque em cada palavra para mudar a cor: 1º toque = <span class="hs">SUBJECT</span>, 2º = <span class="hv">VERB</span>, 3º = <span class="hc">COMPLEMENT</span>. Depois clique em <b>Verificar</b>.</p><div class="toolbar"><span class="lg s">S · Subject</span><span class="lg v">V · Verb</span><span class="lg c">C · Complement</span></div><div id="ex1">${EX1.map((r,i)=>`<div class="tokrow">${r.map((w,j)=>`<button class="tok" data-r="${i}" data-j="${j}">${w[0]}</button>`).join('')}<span style="font-family:Fredoka;font-size:21px">.</span></div>`).join('')}</div><div class="toolbar" style="margin-top:12px"><button class="btn" id="c1">Verificar</button><button class="btn ghost" id="r1">Limpar</button><span class="res" id="o1"></span></div></div>`;
h+=`<div class="exbox"><h3><span class="n">2</span>Reconheça o tempo verbal</h3><p class="inst">A frase está no passado, no presente ou no futuro? Olhe para o verbo!</p><div id="ex2">${EX2.map((q,i)=>`<div class="qrow"><div class="q">${q[0]}</div><button class="opt pa" data-i="${i}" data-a="past">PAST</button><button class="opt p" data-i="${i}" data-a="present">PRESENT</button><button class="opt f" data-i="${i}" data-a="future">FUTURE</button><div class="fb" id="f2-${i}"></div></div>`).join('')}</div><div class="toolbar"><span class="res" id="o2"></span></div></div>`;
h+=`<div class="exbox"><h3><span class="n">3</span>Complete com AM, IS, ARE, WAS, WERE ou WILL BE</h3><p class="inst">Observe o sujeito e a pista de tempo. Escolha a forma correta.</p><div id="ex3">${EX3.map((q,i)=>`<div class="qrow"><div class="q">${i+1}. ${q[0].replace('___',`<select class="sel" id="s3-${i}"><option value="">___</option>${OPTS.map(o=>`<option>${o}</option>`).join('')}</select>`)}</div><span class="hint" id="h3-${i}" style="display:none">${q[2]}</span></div>`).join('')}</div><div class="toolbar" style="margin-top:12px"><button class="btn" id="c3">Verificar</button><button class="btn ghost" id="t3">Mostrar dicas</button><span class="res" id="o3"></span></div></div>`;
const shuffled=EX4.map(e=>e[1]).sort();
h+=`<div class="exbox"><h3><span class="n">4</span>Associe cada imagem à frase correta</h3><p class="inst">Observe a cena e o tipo de moldura (normal = agora · foto antiga = passado · tracejada = futuro).</p><div class="match" id="ex4">${EX4.map((e,i)=>{const t=e[1].includes('will')?'future':e[1].includes('was')||e[1].includes('were')?'past':'present';return `<div class="mcell" id="m4-${i}"><div class="mini ${t==='past'?'sep':t==='future'?'fut':''}" style="${t==='past'?'filter:sepia(.6)':''}">${scene(e[0])}</div><select class="sel" id="s4-${i}"><option value="">Escolha a frase…</option>${shuffled.map(s=>`<option>${s}</option>`).join('')}</select></div>`}).join('')}</div><div class="toolbar" style="margin-top:12px"><button class="btn" id="c4">Verificar</button><span class="res" id="o4"></span></div></div>`;
h+=`<div class="exbox" style="background:#f8fafc"><h3><span class="n">5</span>Monte a sua própria frase</h3><p class="inst">Escolha o sujeito, o tempo e o complemento. A frase correta aparece montada, com tradução e explicação. (Vale 10 pontos ao criar 5 frases diferentes.)</p>
<div class="builder"><div><label class="S">SUBJECT</label><select id="bS" style="border-color:var(--s);color:var(--s)">${['I','You','He','She','It','We','They'].map(x=>`<option>${x}</option>`).join('')}</select></div>
<div><label class="V">TEMPO</label><select id="bT" style="border-color:var(--v);color:var(--v)"><option value="past">PAST · passado</option><option value="present" selected>PRESENT · presente</option><option value="future">FUTURE · futuro</option></select></div>
<div><label class="C">COMPLEMENT</label><select id="bC" style="border-color:var(--c);color:var(--c)"></select></div></div><div class="bout" id="bOut"></div></div>`;
$('exs').innerHTML=h;

// ex1
document.querySelectorAll('#ex1 .tok').forEach(b=>b.onclick=()=>{const k=b.dataset.k,n={undefined:'S',S:'V',V:'C',C:undefined}[k];if(n)b.dataset.k=n;else delete b.dataset.k;b.classList.remove('ok','bad')});
$('c1').onclick=()=>{let ok=0,tot=0;document.querySelectorAll('#ex1 .tok').forEach(b=>{tot++;const a=EX1[b.dataset.r][b.dataset.j][1];const r=b.dataset.k===a;b.classList.toggle('ok',r);b.classList.toggle('bad',!r);if(r)ok++});$('o1').textContent=`${ok} de ${tot} palavras corretas`;SCORE.e1=Math.round(ok/tot*10);upd()};
$('r1').onclick=()=>{document.querySelectorAll('#ex1 .tok').forEach(b=>{delete b.dataset.k;b.classList.remove('ok','bad')});$('o1').textContent=''};
// ex2
const ans2={};const W2={past:'WAS/WERE = passado',present:'AM/IS/ARE = presente',future:'WILL BE = futuro'};
document.querySelectorAll('#ex2 .opt').forEach(b=>b.onclick=()=>{const i=b.dataset.i,a=EX2[i][1];b.parentNode.querySelectorAll('.opt').forEach(x=>x.classList.remove('ok','bad'));const r=b.dataset.a===a;b.classList.add(r?'ok':'bad');const f=$('f2-'+i);f.className='fb '+(r?'ok':'bad');f.textContent=(r?'✓ Correto! ':'✗ Ainda não. ')+'Dica: '+W2[a];ans2[i]=r;const n=Object.values(ans2).filter(Boolean).length;$('o2').textContent=`${n} de ${EX2.length} corretas`;SCORE.e2=Math.round(n/EX2.length*10);upd()});
// ex3
$('c3').onclick=()=>{let n=0;EX3.forEach((q,i)=>{const s=$('s3-'+i),r=s.value===q[1];s.classList.toggle('ok',r);s.classList.toggle('bad',!r);if(r)n++;else $('h3-'+i).style.display='inline-block'});$('o3').textContent=`${n} de ${EX3.length} corretas`;SCORE.e3=Math.round(n/EX3.length*10);upd()};
$('t3').onclick=()=>EX3.forEach((q,i)=>$('h3-'+i).style.display='inline-block');
// ex4
$('c4').onclick=()=>{let n=0;EX4.forEach((e,i)=>{const r=$('s4-'+i).value===e[1];$('m4-'+i).className='mcell '+(r?'ok':'bad');if(r)n++});$('o4').textContent=`${n} de ${EX4.length} corretas`;SCORE.e4=Math.round(n/EX4.length*10);upd()};
// builder
const BC=[{en:'happy',pt:{m:'feliz',f:'feliz',n:'feliz',p:'felizes'},v:'estar',k:'Característica (sentimento) · adjetivo'},
{en:'tired',pt:{m:'cansado',f:'cansada',n:'cansado(a)',p:'cansados'},v:'estar',k:'Estado · adjetivo'},
{en:'busy',pt:{m:'ocupado',f:'ocupada',n:'ocupado(a)',p:'ocupados'},v:'estar',k:'Estado · adjetivo'},
{en:'ready',pt:{m:'pronto',f:'pronta',n:'pronto(a)',p:'prontos'},v:'estar',k:'Estado · adjetivo'},
{en:'hungry',pt:'com fome',v:'estar',k:'Estado · adjetivo'},
{en:'intelligent',pt:{m:'inteligente',f:'inteligente',n:'inteligente',p:'inteligentes'},v:'ser',k:'Característica · adjetivo'},
{en:'beautiful',pt:{m:'bonito',f:'bonita',n:'bonito(a)',p:'bonitos'},v:'ser',k:'Característica · adjetivo'},
{en:'a student',pl:'students',pt:{m:'estudante',f:'estudante',n:'estudante',p:'estudantes'},v:'ser',k:'Identidade · substantivo'},
{en:'at home',pt:'em casa',v:'estar',k:'Localização · expressão de lugar'},
{en:'at school',pt:'na escola',v:'estar',k:'Localização · expressão de lugar'},
{en:'cold',pt:'com frio',it:'frio',v:'estar',k:'Condição · adjetivo',itok:1},
{en:'hot',pt:'com calor',it:'quente',v:'estar',k:'Condição · adjetivo',itok:1}];
const SI=['I','You','He','She','It','We','They'],PTP=['Eu','Você','Ele','Ela','','Nós','Eles'],GEN=['n','n','m','f','m','p','p'];
const ENV={present:['am','are','is','is','is','are','are'],past:['was','were','was','was','was','were','were'],future:Array(7).fill('will be')};
const PTV={ser:{present:['sou','é','é','é','é','somos','são'],past:['era','era','era','era','era','éramos','eram'],future:['serei','será','será','será','será','seremos','serão']},estar:{present:['estou','está','está','está','está','estamos','estão'],past:['estava','estava','estava','estava','estava','estávamos','estavam'],future:['estarei','estará','estará','estará','estará','estaremos','estarão']}};
const built=new Set();
function fillC(){const si=SI.indexOf($('bS').value),cur=$('bC').value;$('bC').innerHTML=BC.map((c,i)=>(si===4&&!c.itok)?'':`<option value="${i}">${si>=5&&c.pl?c.pl:c.en}</option>`).join('');if([...$('bC').options].some(o=>o.value===cur))$('bC').value=cur}
function build(){const si=SI.indexOf($('bS').value),t=$('bT').value,c=BC[$('bC').value];if(!c)return;const v=ENV[t][si];const cen=si>=5&&c.pl?c.pl:c.en;
let ptc=typeof c.pt==='string'?c.pt:c.pt[GEN[si]];let pt;
if(si===4){pt=PTV.estar[t][4];pt=pt[0].toUpperCase()+pt.slice(1)+' '+c.it+'.';if(t==='future')pt+=' (Vai fazer '+(c.en==='cold'?'frio':'calor')+'.)'}
else pt=`${PTP[si]} ${PTV[c.v][t][si]} ${ptc}.`;
const why={present:{0:'I usa sempre AM.',1:'You usa ARE (mesmo sendo uma pessoa).',2:'He é 3ª pessoa do singular → IS.',3:'She é 3ª pessoa do singular → IS.',4:'It é 3ª pessoa do singular → IS.',5:'We é plural → ARE.',6:'They é plural → ARE.'},past:{0:'I no passado → WAS.',1:'You no passado → WERE.',2:'He no passado → WAS.',3:'She no passado → WAS.',4:'It no passado → WAS.',5:'We no passado → WERE.',6:'They no passado → WERE.'}}[t];
const w=t==='future'?'No futuro, todos os sujeitos usam WILL BE.':why[si];
$('bOut').innerHTML=`<div class="en"><span class="S">${SI[si]}</span> <span class="V">${v}</span> <span class="C">${cen}</span>.</div><div class="pt">🇧🇷 ${pt}</div><div class="why"><b>Por quê?</b> ${w} Complemento: ${c.k}.${c.pl&&si<5?' No singular, o substantivo leva o artigo <b>a</b>.':''}${c.pl&&si>=5?' No plural, o substantivo ganha <b>-s</b> e perde o artigo.':''}</div>`;
built.add(si+t+$('bC').value);SCORE.e5=Math.min(10,Math.max(0,(built.size-1)*2.5)|0);upd()}
$('bS').onchange=()=>{fillC();build()};$('bT').onchange=build;$('bC').onchange=build;fillC();build();SCORE.e5=0;upd();

// hamburger menu
(function(){
  const ham=document.getElementById('ham');
  const nav=document.getElementById('topNav');
  if(!ham)return;
  ham.onclick=()=>nav.classList.toggle('open');
  nav.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&e.target!==ham&&!ham.contains(e.target))nav.classList.remove('open')});
})();

// sidenav scroll spy
(function(){
  const links=document.querySelectorAll('.sidenav a[href^="#"]');
  if(!links.length)return;
  const ids=[...links].map(a=>a.getAttribute('href').slice(1));
  const els=ids.map(id=>document.getElementById(id)).filter(Boolean);
  function spy(){
    const y=window.scrollY+130;
    let cur=els[0];
    for(const el of els){if(el.getBoundingClientRect().top+window.scrollY<=y)cur=el;}
    links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur.id));
  }
  window.addEventListener('scroll',spy,{passive:true});
  spy();
})();
