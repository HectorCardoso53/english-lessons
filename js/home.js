document.getElementById('heroIll').innerHTML=scene('friends');
document.getElementById('aulasGrid').innerHTML=AULAS.map(a=>{
 if(!a.disponivel)return `<div class="lesson soon"><div class="thumb">${a.n}</div><div class="body"><span class="tag">AULA ${a.n}</span><h3>${a.titulo}</h3><p><b>${a.sub}</b></p><p>${a.desc}</p><div class="foot2"><span class="badge-soon">Em breve</span></div></div></div>`;
 let best=0;try{best=+localStorage.getItem(a.chave)||0}catch(e){}
 return `<a class="lesson" href="${a.link}"><div class="thumb">${scene(a.cena)}</div><div class="body"><span class="tag">AULA ${a.n}</span><h3>${a.titulo}</h3><p><b>${a.sub}</b></p><p>${a.desc}</p><div class="foot2"><span style="color:#16a34a">Abrir aula →</span>${best?`<span class="badge-score">Recorde: ${best}/${a.pts||50}</span>`:''}</div></div></a>`;
}).join('');
