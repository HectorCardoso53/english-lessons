
const GREET=[
  // ── FORMAL GREETINGS ──────────────────────────────────────
  {id:'gm',cat:'greeting-formal',register:'formal',
   en:'Good morning!',en2:'Good afternoon! / Good evening!',
   resp:'Good morning! How may I help you today?',
   pt:'Bom dia! / Boa tarde! / Boa noite!',
   when:'Escritórios, aulas, consultas e encontros formais. Escolha conforme o horário.',
   note:'⚠️ Nunca use "Good night" como cumprimento — é só despedida ou antes de dormir.'},

  {id:'hdd',cat:'greeting-formal',register:'formal',
   en:'How do you do?',en2:'',
   resp:'How do you do? / Pleased to meet you.',
   pt:'Como vai? (versão extremamente formal)',
   when:'Primeira apresentação formal. A resposta certa é repetir a própria pergunta!',
   note:'Protocolo puro — não é uma pergunta real. Nunca responda "Fine, thanks!"'},

  {id:'pleasure',cat:'greeting-formal',register:'formal',
   en:'It is a pleasure to meet you.',en2:'',
   resp:'The pleasure is mine. / Nice to meet you, too.',
   pt:'É um prazer te conhecer.',
   when:'Ao ser apresentado a um cliente, professor ou convidado especial.',
   note:''},

  // ── INFORMAL / PLAYFUL GREETINGS ─────────────────────────
  {id:'hello',cat:'greeting-informal',register:'neutral',
   en:'Hello! How are you doing today?',en2:'',
   resp:"I'm doing great, thank you. And yourself?",
   pt:'Olá! Como vai você hoje?',
   when:'Cumprimento amigável e versátil — funciona em quase qualquer situação.',
   note:''},

  {id:'hey',cat:'greeting-informal',register:'informal',
   en:'Hey there! / Hiya!',en2:'',
   resp:'Hey! Good to see you!',
   pt:'Ei! / Oi!',
   when:'Amigos, vizinhos e colegas. Tom animado e descontraído.',
   note:''},

  {id:'hig',cat:'greeting-informal',register:'informal',
   en:"How's it going? / How have you been?",en2:'',
   resp:"Pretty good, thanks! / Can't complain!",
   pt:'Como está indo? / Como você tem estado?',
   when:'Check-in relaxado para perguntar como o dia ou a semana da pessoa está indo.',
   note:''},

  {id:'wup',cat:'greeting-informal',register:'playful',
   en:"What's up? / What's new?",en2:'',
   resp:"Not much, just chilling! / Same old, same old!",
   pt:'E aí? / O que há de novo?',
   when:'Super casual. Atenção: "What\'s up?" geralmente significa "Olá", não uma pergunta real.',
   note:'"What\'s up?" = oi! A resposta curta é o esperado — não conte sua vida inteira.'},

  {id:'ltns',cat:'greeting-informal',register:'playful',
   en:'Long time no see! / Look who it is!',en2:'',
   resp:"I know, right? It's been ages!",
   pt:'Quanto tempo! / Olha quem apareceu!',
   when:'Quando você encontra um amigo que não via há muito tempo.',
   note:''},

  // ── FORMAL FAREWELLS ──────────────────────────────────────
  {id:'bye',cat:'farewell-formal',register:'formal',
   en:'Goodbye. / Have a wonderful day.',en2:'',
   resp:'Goodbye. Thank you, you as well!',
   pt:'Adeus. / Tenha um ótimo dia.',
   when:'Encerramento educado em locais de trabalho, lojas e eventos formais.',
   note:''},

  {id:'pls',cat:'farewell-formal',register:'formal',
   en:'It was a pleasure speaking with you.',en2:'',
   resp:'Likewise. Please keep in touch.',
   pt:'Foi um prazer falar com você.',
   when:'Ao encerrar entrevista de emprego, chamada telefônica ou reunião de negócios.',
   note:''},

  {id:'lf',cat:'farewell-formal',register:'formal',
   en:'I look forward to our next meeting.',en2:'',
   resp:'I look forward to it as well.',
   pt:'Aguardo o nosso próximo encontro.',
   when:'Quando há colaboração futura ou outro compromisso já planejado.',
   note:''},

  {id:'gn',cat:'farewell-formal',register:'neutral',
   en:'Good night!',en2:'',
   resp:'Good night! Get home safely / Sleep well.',
   pt:'Boa noite! (como despedida)',
   when:'Usado SOMENTE ao se despedir tarde da noite ou antes de dormir.',
   note:'⚠️ "Good night" é despedida, nunca cumprimento. Para cumprimentar use "Good evening!"'},

  // ── INFORMAL / PLAYFUL FAREWELLS ─────────────────────────
  {id:'cul',cat:'farewell-informal',register:'informal',
   en:'See you later! / Catch you soon!',en2:'',
   resp:"See ya! / Talk soon!",
   pt:'Até mais! / Te pego em breve!',
   when:'Despedida amigável do cotidiano com amigos, família e colegas.',
   note:''},

  {id:'tc',cat:'farewell-informal',register:'informal',
   en:'Take care! / Have a good one!',en2:'',
   resp:'Thanks, take care! / You too!',
   pt:'Se cuida! / Tenha um bom dia!',
   when:'Frase calorosa que funciona em lojas, cafés e conversas casuais.',
   note:''},

  {id:'run',cat:'farewell-informal',register:'playful',
   en:"I've got to run! / I'm off!",en2:'',
   resp:"No worries! Text me when you're free.",
   pt:'Preciso correr! / Estou indo!',
   when:'Forma enérgica de se despedir quando você está com pressa.',
   note:''},

  {id:'po',cat:'farewell-informal',register:'playful',
   en:'Peace out! / Catch you on the flip side!',en2:'',
   resp:"Later, alligator! / Stay awesome!",
   pt:'Falou! / Até a próxima!',
   when:'Gíria divertida entre amigos próximos e jovens.',
   note:'"Later, alligator!" → resposta clássica: "In a while, crocodile!"'},
];

const REG={
  formal:  {label:'Formal',  color:'#1e40af',bg:'#dbeafe',border:'#93c5fd',emoji:'🎩'},
  neutral: {label:'Neutro',  color:'#0e7490',bg:'#cffafe',border:'#67e8f9',emoji:'😊'},
  informal:{label:'Informal',color:'#15803d',bg:'#dcfce7',border:'#86efac',emoji:'👋'},
  playful: {label:'Playful', color:'#6d28d9',bg:'#ede9fe',border:'#c4b5fd',emoji:'🎉'},
};

// ── EXERCISES ─────────────────────────────────────────────
const EXA=[
  {expr:'Look who it is! Long time no see!',   type:'greeting', register:'playful'},
  {expr:'It was a pleasure speaking with you.', type:'farewell', register:'formal'},
  {expr:'Good evening, welcome to the hotel.', type:'greeting', register:'formal'},
  {expr:"I'm off! Catch you on the flip side!", type:'farewell', register:'playful'},
  {expr:"How's it going?",                      type:'greeting', register:'informal'},
  {expr:'Take care! Have a good one!',          type:'farewell', register:'informal'},
];

const EXB=[
  {q:'How do you do?',
   opts:['How do you do? Pleased to meet you.','Not much! Just chilling.','No worries! See you later!','Good night!'],ans:0},
  {q:"What's up?",
   opts:['Goodbye. Have a great day!','I look forward to it.','Not much! Just heading to the gym.','Likewise. Keep in touch.'],ans:2},
  {q:"I've got to run—I'm late for class!",
   opts:['The pleasure is mine.','No worries! See you later!','Good night! Drive safely.','How do you do?'],ans:1},
  {q:'Good night, everyone!',
   opts:['Hey! Great to see you!','Not much, just chilling.','Good night! Drive safely.','How may I help you?'],ans:2},
  {q:'It is a pleasure to meet you.',
   opts:['Same old, same old!','The pleasure is mine.','Catch you on the flip side!','Pretty good, thanks!'],ans:1},
];

const EXC_OPTS=['Good morning','Pleased to meet you',"How's it going",'Good night','Take care'];
const EXC=[
  {before:'Manager (9h): "',      after:', Ms. Silva. Please have a seat."',          ans:'Good morning',       hint:'Manhã · ambiente formal'},
  {before:'Guest: "Thank you. ',   after:', Mr. Johnson."',                             ans:'Pleased to meet you',hint:'Primeira apresentação formal'},
  {before:'Friend: "Hey Alex! ',   after:'?" → "Pretty good, thanks!"',                ans:"How's it going",     hint:'Casual entre amigos'},
  {before:'Neighbor (22h): "',    after:' and sleep well!"',                            ans:'Good night',         hint:'Despedida de madrugada'},
  {before:'Colleague (sex): "Have a fantastic weekend! ', after:'!"',                   ans:'Take care',          hint:'Despedida casual e calorosa'},
];

const EXD=[
  {
    wrong:'"Good night, waiter! A table for two, please." — chegando ao restaurante às 20h.',
    fix:'"Good evening, waiter! A table for two, please."',
    explain:'Good night = despedida / hora de dormir. Good evening = cumprimento noturno.'
  },
  {
    wrong:'"Peace out, bro! Catch you on the flip side!" — se despedindo do entrevistador.',
    fix:'"Thank you for your time. It was a pleasure speaking with you."',
    explain:'Gírias são inapropriadas em entrevistas. Use linguagem formal e respeitosa.'
  },
  {
    wrong:'"How do you do, Sarah? It is a formal pleasure." — cumprimentando a melhor amiga na festa.',
    fix:'"Hey Sarah! Happy birthday! Great to see you!"',
    explain:'"How do you do?" é extremamente formal. Com amigos use cumprimentos casuais.'
  },
];
