import { Language } from './types';

export const translations = {
  [Language.EN]: {
    nav: { studio: 'STUDIO', academy: 'ACADEMY', excellence: 'EXCELLENCE', contact: "LET'S TALK", start: "TAKE CONTROL" },
    home: {
      system: '[ SYSTEM: ONLINE ]',
      loc: 'LOC: RIBEIRAO PRETO, BR',
      tagline: 'Intelligence that amplifies yours',
      heroTitle: 'Amplify',
      heroSubtitle: 'Who You Are',
      heroDesc: "You're not a cog in the machine. You're the pilot. We build the cockpit.",
      initiate: 'Take Control',
      heroHand: 'Start Here',
      ecosystem: 'The Ecosystem',
      studioTitle: 'Studio',
      studioDesc: 'Your command cockpit. Everything connected. You pilot.',
      studioHand: 'You In Command',
      academyTitle: 'Academy',
      academyDesc: 'Discover what you already know. Get smarter by being yourself.',
      excellenceTitle: 'Excellence',
      excellenceDesc: 'Stop being hostage to systems. Full visibility. Real control.',
      excellenceHand: 'Total Vision',
      humanCentered: 'Human Amplification',
      methodologyTitle: 'From Chaos',
      methodologySubtitle: 'To Control',
      steps: [
        { id: '01', title: 'DIAGNOSE', desc: 'Where are you losing control?' },
        { id: '02', title: 'ARCHITECT', desc: 'Your personalized cockpit.' },
        { id: '03', title: 'REVEAL', desc: 'Discover what your team already knows.' },
        { id: '04', title: 'CONNECT', desc: 'Everything in one screen. You pilot.' },
        { id: '05', title: 'PROTECT', desc: 'Guardrails. You in control.' },
        { id: '06', title: 'AMPLIFY', desc: 'Your intelligence, multiplied.' }
      ],
      ctaTitle: 'READY TO',
      ctaHighlight: 'PILOT?',
      ctaDesc: 'Stop being hostage to systems. Take the cockpit.',
      ctaButton: 'TAKE CONTROL',
      ctaHand: "Let's go"
    },
    studio: {
      tagHand: 'Studio Division',
      title: 'YOU',
      titleHighlight: 'IN',
      titleEnd: 'COMMAND',
      subtitle: 'Stop being hostage to fragmented systems. Your cockpit. Your vision. Your control.',
      statLabel: 'Feel controlled by systems, not the other way around',
      statHand: 'Enough',
      problems: ['Fragmentation', 'Loss of Control', 'You Became Middleware'],
      architectureTitle: 'Your Command Cockpit',
      cards: [
        { title: 'Total Vision', text: 'Everything in one screen. Nothing forgotten. Nothing lost.' },
        { title: 'You Pilot', text: 'Systems that obey you. Not the other way around.' },
        { title: 'Real Control', text: 'Finally, you call the shots.' }
      ],
      processTitle: 'From Middleware to Pilot',
      processSteps: [
        { title: 'Where Did You Lose Control?', desc: 'Fragmentation diagnosis.' },
        { title: 'Your Cockpit', desc: 'We design your total vision.' },
        { title: 'Command Connection', desc: 'Everything connected. You pilot.' },
        { title: 'Permanent Control', desc: 'Never hostage to systems again.' }
      ],
      techTitle: 'The Infrastructure',
      cta: 'Take back control',
      ctaButton: 'Take the Cockpit',
      ctaHand: 'Pilot'
    },
    academy: {
      tagHand: 'Revelation',
      unlock: 'AMPLIFY',
      title: 'Human',
      subtitle: 'Potential',
      desc: "You're smarter than you think. We just help you discover it.",
      buttons: ['REVEAL KNOWLEDGE', 'CORPORATE POWER'],
      btnHand: 'Discover',
      oldWay: '[ EXPOSURE ]',
      oldItems: ['Looking Dumb', 'Fear of Asking', 'Public Humiliation'],
      newWay: '[ REVELATION ]',
      newItems: ['Discover in Silence', 'Emerge More Powerful', 'Nobody Needs to Know'],
      catalogTitle: 'Discovery Journeys',
      recommendedHand: 'Revealing',
      pathsTitle: 'Revelation Levels',
      paths: [
        { title: 'Awaken', desc: 'Discover what you already know.' },
        { title: 'Reveal', desc: 'Your hidden knowledge, exposed.' },
        { title: 'Master', desc: 'You always knew. Now you know you know.' }
      ],
      modules: [
        { title: "AI Discovery", duration: "12 Hours", level: "Awaken" },
        { title: "Generative Revelation", duration: "24 Hours", level: "Reveal" },
        { title: "Strategic Mastery", duration: "40 Hours", level: "Master" }
      ]
    },
    excellence: {
      tagHand: 'Precision',
      title: 'OPERATIONAL',
      subtitle: 'EXCELLENCE',
      desc: 'Your operation bleeds and you can\'t see where. We make the invisible visible. Zero waste. Total alignment. Academy inside.',
      featureTitle: 'StratOS Cockpit',
      featureSubtitle: 'Excellence Intelligence',
      solutions: [
         { title: "Hoshin Kanri", desc: "From boardroom to shop floor. Every goal deployed. Zero misalignment." },
         { title: "Gemba Intelligence", desc: "Real-time operational pulse. Waste revealed before it costs." },
         { title: "Corporate University", desc: "Powered by Academy. Your people discover excellence. It becomes culture." }
      ],
      integrationTitle: 'Connected Excellence',
      integrationHand: 'Ecosystem',
      integrationDesc: 'ERP. Academy. Operational systems. One intelligence engine.',
      kpiTitle: 'Measurable Impact',
      kpiDesc: 'Every improvement tracked. Every waste eliminated. Every person amplified.',
      growthHand: 'Kaizen'
    },
    contact: {
      title: "Let's Talk.",
      subtitle: "Tell us about your challenge. We'll tell you the truth.",
      infoTitle: "Direct Channels",
      name: 'IDENTITY',
      email: 'COORDINATES (EMAIL)',
      phone: 'MOBILE NUMBER',
      frequency: 'FREQUENCY (DEPARTMENT)',
      challenge: 'TRANSMISSION (MESSAGE)',
      send: 'INITIATE TRANSMISSION',
      sending: 'TRANSMITTING...',
      successTitle: 'SIGNAL RECEIVED',
      successDesc: 'Our systems have intercepted your message. An agent will be dispatched shortly.',
      responseHand: 'Human Response',
      freqOptions: {
        general: 'General Inquiry',
        studio: 'Studio (Strategy)',
        academy: 'Academy (Education)',
        excellence: 'Excellence (Ops)'
      }
    },
    footer: {
      rights: 'ALL SYSTEMS OPERATIONAL.',
      nav: 'Navigation',
      connect: 'Connect',
      internal: 'Internal'
    }
  },
  [Language.PT]: {
    nav: { studio: 'STUDIO', academy: 'ACADEMY', excellence: 'EXCELLENCE', contact: 'CONTATO', start: 'ASSUMIR CONTROLE' },
    home: {
      system: '[ SISTEMA: ONLINE ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Inteligência que amplifica a sua',
      heroTitle: 'Amplifique',
      heroSubtitle: 'Quem Você É',
      heroDesc: "Você não é refém dos sistemas. Você é o piloto. Nós construímos o cockpit.",
      initiate: 'Assumir Controle',
      heroHand: 'Comece Aqui',
      ecosystem: 'O Ecossistema',
      studioTitle: 'Studio',
      studioDesc: 'Seu cockpit de comando. Tudo conectado. Você pilota.',
      studioHand: 'Você no Comando',
      academyTitle: 'Academy',
      academyDesc: 'Descubra o que você já sabe. Fique mais inteligente sendo você mesmo.',
      excellenceTitle: 'Excellence',
      excellenceDesc: 'Pare de ser refém dos sistemas. Visão total. Controle real.',
      excellenceHand: 'Visão Total',
      humanCentered: 'Amplificação Humana',
      methodologyTitle: 'Do Caos',
      methodologySubtitle: 'Ao Controle',
      steps: [
        { id: '01', title: 'DIAGNOSTICAR', desc: 'Onde você está perdendo controle?' },
        { id: '02', title: 'ARQUITETAR', desc: 'Seu cockpit personalizado.' },
        { id: '03', title: 'REVELAR', desc: 'Descubra o que sua equipe já sabe.' },
        { id: '04', title: 'CONECTAR', desc: 'Tudo em uma tela. Você pilota.' },
        { id: '05', title: 'PROTEGER', desc: 'Guardrails. Você no controle.' },
        { id: '06', title: 'AMPLIFICAR', desc: 'Sua inteligência, multiplicada.' }
      ],
      ctaTitle: 'PRONTO PARA',
      ctaHighlight: 'PILOTAR?',
      ctaDesc: 'Pare de ser refém dos sistemas. Assuma o cockpit.',
      ctaButton: 'ASSUMIR CONTROLE',
      ctaHand: "Vamos lá"
    },
    studio: {
      tagHand: 'Divisão Studio',
      title: 'VOCÊ',
      titleHighlight: 'NO',
      titleEnd: 'COMANDO',
      subtitle: 'Chega de ser refém de sistemas fragmentados. Seu cockpit. Sua visão. Seu controle.',
      statLabel: 'Se sentem controlados por sistemas, não o contrário',
      statHand: 'Chega Disso',
      problems: ['Fragmentação', 'Perda de Controle', 'Você Virou Middleware'],
      architectureTitle: 'Seu Cockpit de Comando',
      cards: [
        { title: 'Visão Total', text: 'Tudo em uma tela. Nada esquecido. Nada perdido.' },
        { title: 'Você Pilota', text: 'Sistemas que obedecem você. Não o contrário.' },
        { title: 'Controle Real', text: 'Finalmente, você manda aqui.' }
      ],
      processTitle: 'Do Middleware ao Piloto',
      processSteps: [
        { title: 'Onde Você Perdeu Controle?', desc: 'Diagnóstico da fragmentação.' },
        { title: 'Seu Cockpit', desc: 'Desenhamos sua visão total.' },
        { title: 'Conexão de Comando', desc: 'Tudo conectado. Você pilota.' },
        { title: 'Controle Permanente', desc: 'Nunca mais refém dos sistemas.' }
      ],
      techTitle: 'A Infraestrutura',
      cta: 'Retome o controle',
      ctaButton: 'Assumir o Cockpit',
      ctaHand: 'Pilote'
    },
    academy: {
      tagHand: 'Revelação',
      unlock: 'AMPLIFIQUE',
      title: 'O Potencial',
      subtitle: 'Humano',
      desc: "Você já é mais inteligente do que imagina. Nós só ajudamos você a descobrir.",
      buttons: ['REVELAR CONHECIMENTO', 'PODER CORPORATIVO'],
      btnHand: 'Descobrir',
      oldWay: '[ EXPOSIÇÃO ]',
      oldItems: ['Parecer Burro', 'Medo de Perguntar', 'Humilhação Pública'],
      newWay: '[ REVELAÇÃO ]',
      newItems: ['Descobrir em Silêncio', 'Emergir Mais Poderoso', 'Ninguém Precisa Saber'],
      catalogTitle: 'Jornadas de Descoberta',
      recommendedHand: 'Revelador',
      pathsTitle: 'Níveis de Revelação',
      paths: [
        { title: 'Despertar', desc: 'Descubra o que você já sabe.' },
        { title: 'Revelar', desc: 'Seu conhecimento oculto, exposto.' },
        { title: 'Dominar', desc: 'Você sempre soube. Agora você sabe que sabe.' }
      ],
      modules: [
        { title: "Descoberta IA", duration: "12 Horas", level: "Despertar" },
        { title: "Revelação Generativa", duration: "24 Horas", level: "Revelar" },
        { title: "Domínio Estratégico", duration: "40 Horas", level: "Dominar" }
      ]
    },
    excellence: {
      tagHand: 'Precisão',
      title: 'EXCELÊNCIA',
      subtitle: 'OPERACIONAL',
      desc: 'Sua operação sangra e você não vê onde. Nós tornamos o invisível visível. Desperdício zero. Alinhamento total. Academy dentro.',
      featureTitle: 'Cockpit StratOS',
      featureSubtitle: 'Inteligência da Excelência',
      solutions: [
         { title: "Hoshin Kanri", desc: "Da diretoria ao chão de fábrica. Cada meta desdobrada. Zero desalinhamento." },
         { title: "Gemba Intelligence", desc: "Pulso operacional em tempo real. Desperdício revelado antes de custar." },
         { title: "Universidade Corporativa", desc: "Powered by Academy. Suas pessoas descobrem a excelência. Vira cultura." }
      ],
      integrationTitle: 'Excelência Conectada',
      integrationHand: 'Ecossistema',
      integrationDesc: 'ERP. Academy. Sistemas operacionais. Um motor de inteligência.',
      kpiTitle: 'Impacto Mensurável',
      kpiDesc: 'Cada melhoria rastreada. Cada desperdício eliminado. Cada pessoa amplificada.',
      growthHand: 'Kaizen'
    },
    contact: {
      title: "Vamos Conversar.",
      subtitle: "Conte-nos sobre seu desafio. Nós lhe diremos a verdade.",
      infoTitle: "Canais Diretos",
      name: 'IDENTIDADE',
      email: 'COORDENADAS (EMAIL)',
      phone: 'CELULAR',
      frequency: 'FREQUÊNCIA (DEPARTAMENTO)',
      challenge: 'TRANSMISSÃO (MENSAGEM)',
      send: 'INICIAR TRANSMISSÃO',
      sending: 'TRANSMITINDO...',
      successTitle: 'SINAL RECEBIDO',
      successDesc: 'Nossos sistemas interceptaram sua mensagem. Um agente será despachado em breve.',
      responseHand: 'Resposta Humana',
      freqOptions: {
        general: 'Geral',
        studio: 'Studio (Estratégia)',
        academy: 'Academy (Educação)',
        excellence: 'Excellence (Ops)'
      }
    },
    footer: {
      rights: 'TODOS SISTEMAS OPERACIONAIS.',
      nav: 'Navegação',
      connect: 'Conectar',
      internal: 'Interno'
    }
  },
  [Language.ES]: {
    nav: { studio: 'ESTUDIO', academy: 'ACADEMIA', excellence: 'EXCELENCIA', contact: 'CONTACTO', start: 'TOMAR CONTROL' },
    home: {
      system: '[ SISTEMA: EN LÍNEA ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Inteligencia que amplifica la tuya',
      heroTitle: 'Amplifica',
      heroSubtitle: 'Quien Eres',
      heroDesc: "No eres rehén de los sistemas. Eres el piloto. Nosotros construimos el cockpit.",
      initiate: 'Tomar Control',
      heroHand: 'Empiece Aquí',
      ecosystem: 'El Ecosistema',
      studioTitle: 'Estudio',
      studioDesc: 'Tu cockpit de comando. Todo conectado. Tú pilotas.',
      studioHand: 'Tú al Mando',
      academyTitle: 'Academia',
      academyDesc: 'Descubre lo que ya sabes. Sé más inteligente siendo tú mismo.',
      excellenceTitle: 'Excelencia',
      excellenceDesc: 'Deja de ser rehén de los sistemas. Visión total. Control real.',
      excellenceHand: 'Visión Total',
      humanCentered: 'Amplificación Humana',
      methodologyTitle: 'Del Caos',
      methodologySubtitle: 'Al Control',
      steps: [
        { id: '01', title: 'DIAGNOSTICAR', desc: '¿Dónde estás perdiendo control?' },
        { id: '02', title: 'ARQUITECTAR', desc: 'Tu cockpit personalizado.' },
        { id: '03', title: 'REVELAR', desc: 'Descubre lo que tu equipo ya sabe.' },
        { id: '04', title: 'CONECTAR', desc: 'Todo en una pantalla. Tú pilotas.' },
        { id: '05', title: 'PROTEGER', desc: 'Guardrails. Tú en control.' },
        { id: '06', title: 'AMPLIFICAR', desc: 'Tu inteligencia, multiplicada.' }
      ],
      ctaTitle: 'LISTO PARA',
      ctaHighlight: 'PILOTAR?',
      ctaDesc: 'Deja de ser rehén de los sistemas. Toma el cockpit.',
      ctaButton: 'TOMAR CONTROL',
      ctaHand: 'Vamos'
    },
    studio: {
      tagHand: 'División Estudio',
      title: 'TÚ',
      titleHighlight: 'AL',
      titleEnd: 'MANDO',
      subtitle: 'Basta de ser rehén de sistemas fragmentados. Tu cockpit. Tu visión. Tu control.',
      statLabel: 'Se sienten controlados por sistemas, no al revés',
      statHand: 'Basta',
      problems: ['Fragmentación', 'Pérdida de Control', 'Te Volviste Middleware'],
      architectureTitle: 'Tu Cockpit de Comando',
      cards: [
        { title: 'Visión Total', text: 'Todo en una pantalla. Nada olvidado. Nada perdido.' },
        { title: 'Tú Pilotas', text: 'Sistemas que te obedecen. No al revés.' },
        { title: 'Control Real', text: 'Finalmente, tú mandas aquí.' }
      ],
      processTitle: 'De Middleware a Piloto',
      processSteps: [
        { title: '¿Dónde Perdiste Control?', desc: 'Diagnóstico de fragmentación.' },
        { title: 'Tu Cockpit', desc: 'Diseñamos tu visión total.' },
        { title: 'Conexión de Comando', desc: 'Todo conectado. Tú pilotas.' },
        { title: 'Control Permanente', desc: 'Nunca más rehén de los sistemas.' }
      ],
      techTitle: 'La Infraestructura',
      cta: 'Retoma el control',
      ctaButton: 'Tomar el Cockpit',
      ctaHand: 'Pilotea'
    },
    academy: {
      tagHand: 'Revelación',
      unlock: 'AMPLIFICA',
      title: 'El Potencial',
      subtitle: 'Humano',
      desc: "Eres más inteligente de lo que crees. Solo te ayudamos a descubrirlo.",
      buttons: ['REVELAR CONOCIMIENTO', 'PODER CORPORATIVO'],
      btnHand: 'Descubrir',
      oldWay: '[ EXPOSICIÓN ]',
      oldItems: ['Parecer Tonto', 'Miedo a Preguntar', 'Humillación Pública'],
      newWay: '[ REVELACIÓN ]',
      newItems: ['Descubrir en Silencio', 'Emerger Más Poderoso', 'Nadie Necesita Saber'],
      catalogTitle: 'Jornadas de Descubrimiento',
      recommendedHand: 'Revelador',
      pathsTitle: 'Niveles de Revelación',
      paths: [
        { title: 'Despertar', desc: 'Descubre lo que ya sabes.' },
        { title: 'Revelar', desc: 'Tu conocimiento oculto, expuesto.' },
        { title: 'Dominar', desc: 'Siempre supiste. Ahora sabes que sabes.' }
      ],
      modules: [
        { title: "Descubrimiento IA", duration: "12 Horas", level: "Despertar" },
        { title: "Revelación Generativa", duration: "24 Horas", level: "Revelar" },
        { title: "Dominio Estratégico", duration: "40 Horas", level: "Dominar" }
      ]
    },
    excellence: {
      tagHand: 'Precisión',
      title: 'EXCELENCIA',
      subtitle: 'OPERACIONAL',
      desc: 'Tu operación sangra y no ves dónde. Hacemos lo invisible visible. Desperdicio cero. Alineamiento total. Academy dentro.',
      featureTitle: 'Cockpit StratOS',
      featureSubtitle: 'Inteligencia de Excelencia',
      solutions: [
         { title: "Hoshin Kanri", desc: "De la dirección al piso de planta. Cada meta desplegada. Cero desalineamiento." },
         { title: "Gemba Intelligence", desc: "Pulso operacional en tiempo real. Desperdicio revelado antes de que cueste." },
         { title: "Universidad Corporativa", desc: "Powered by Academy. Tu gente descubre la excelencia. Se vuelve cultura." }
      ],
      integrationTitle: 'Excelencia Conectada',
      integrationHand: 'Ecosistema',
      integrationDesc: 'ERP. Academy. Sistemas operacionales. Un motor de inteligencia.',
      kpiTitle: 'Impacto Medible',
      kpiDesc: 'Cada mejora rastreada. Cada desperdicio eliminado. Cada persona amplificada.',
      growthHand: 'Kaizen'
    },
    contact: {
      title: "Hablemos.",
      subtitle: "Cuéntenos su desafío. Le diremos la verdad.",
      infoTitle: "Canales Directos",
      name: 'IDENTIDAD',
      email: 'COORDENADAS (EMAIL)',
      phone: 'MÓVIL',
      frequency: 'FRECUENCIA (DEPARTAMENTO)',
      challenge: 'TRANSMISIÓN (MENSAJE)',
      send: 'INICIAR TRANSMISIÓN',
      sending: 'TRANSMITIENDO...',
      successTitle: 'SEÑAL RECIBIDA',
      successDesc: 'Nuestros sistemas han interceptado su mensaje. Un agente será despachado en breve.',
      responseHand: 'Respuesta Humana',
      freqOptions: {
        general: 'General',
        studio: 'Estudio (Estrategia)',
        academy: 'Academia (Educación)',
        excellence: 'Excelencia (Ops)'
      }
    },
    footer: {
      rights: 'TODOS LOS SISTEMAS OPERATIVOS.',
      nav: 'Navegación',
      connect: 'Conectar',
      internal: 'Interno'
    }
  },
  [Language.IT]: {
    nav: { studio: 'STUDIO', academy: 'ACCADEMIA', excellence: 'ECCELLENZA', contact: 'CONTATTO', start: 'PRENDI CONTROLLO' },
    home: {
      system: '[ SISTEMA: ONLINE ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Intelligenza che amplifica la tua',
      heroTitle: 'Amplifica',
      heroSubtitle: 'Chi Sei',
      heroDesc: "Non sei ostaggio dei sistemi. Sei il pilota. Noi costruiamo il cockpit.",
      initiate: 'Prendi Controllo',
      heroHand: 'Inizia Qui',
      ecosystem: 'L\'Ecosistema',
      studioTitle: 'Studio',
      studioDesc: 'Il tuo cockpit di comando. Tutto connesso. Tu piloti.',
      studioHand: 'Tu al Comando',
      academyTitle: 'Accademia',
      academyDesc: 'Scopri cosa già sai. Diventa più intelligente essendo te stesso.',
      excellenceTitle: 'Eccellenza',
      excellenceDesc: 'Smetti di essere ostaggio dei sistemi. Visione totale. Controllo reale.',
      excellenceHand: 'Visione Totale',
      humanCentered: 'Amplificazione Umana',
      methodologyTitle: 'Dal Caos',
      methodologySubtitle: 'Al Controllo',
      steps: [
        { id: '01', title: 'DIAGNOSTICARE', desc: 'Dove stai perdendo controllo?' },
        { id: '02', title: 'ARCHITETTARE', desc: 'Il tuo cockpit personalizzato.' },
        { id: '03', title: 'RIVELARE', desc: 'Scopri cosa il tuo team già sa.' },
        { id: '04', title: 'CONNETTERE', desc: 'Tutto in uno schermo. Tu piloti.' },
        { id: '05', title: 'PROTEGGERE', desc: 'Guardrails. Tu in controllo.' },
        { id: '06', title: 'AMPLIFICARE', desc: 'La tua intelligenza, moltiplicata.' }
      ],
      ctaTitle: 'PRONTO A',
      ctaHighlight: 'PILOTARE?',
      ctaDesc: 'Smetti di essere ostaggio dei sistemi. Prendi il cockpit.',
      ctaButton: 'PRENDI CONTROLLO',
      ctaHand: 'Andiamo'
    },
    studio: {
      tagHand: 'Divisione Studio',
      title: 'TU',
      titleHighlight: 'AL',
      titleEnd: 'COMANDO',
      subtitle: 'Basta essere ostaggio di sistemi frammentati. Il tuo cockpit. La tua visione. Il tuo controllo.',
      statLabel: 'Si sentono controllati dai sistemi, non il contrario',
      statHand: 'Basta',
      problems: ['Frammentazione', 'Perdita di Controllo', 'Sei Diventato Middleware'],
      architectureTitle: 'Il Tuo Cockpit di Comando',
      cards: [
        { title: 'Visione Totale', text: 'Tutto in uno schermo. Nulla dimenticato. Nulla perso.' },
        { title: 'Tu Piloti', text: 'Sistemi che ti obbediscono. Non il contrario.' },
        { title: 'Controllo Reale', text: 'Finalmente, comandi tu.' }
      ],
      processTitle: 'Da Middleware a Pilota',
      processSteps: [
        { title: 'Dove Hai Perso Controllo?', desc: 'Diagnosi della frammentazione.' },
        { title: 'Il Tuo Cockpit', desc: 'Progettiamo la tua visione totale.' },
        { title: 'Connessione di Comando', desc: 'Tutto connesso. Tu piloti.' },
        { title: 'Controllo Permanente', desc: 'Mai più ostaggio dei sistemi.' }
      ],
      techTitle: 'L\'Infrastruttura',
      cta: 'Riprendi il controllo',
      ctaButton: 'Prendi il Cockpit',
      ctaHand: 'Pilota'
    },
    academy: {
      tagHand: 'Rivelazione',
      unlock: 'AMPLIFICA',
      title: 'Il Potenziale',
      subtitle: 'Umano',
      desc: "Sei più intelligente di quanto pensi. Ti aiutiamo solo a scoprirlo.",
      buttons: ['RIVELARE CONOSCENZA', 'POTERE AZIENDALE'],
      btnHand: 'Scoprire',
      oldWay: '[ ESPOSIZIONE ]',
      oldItems: ['Sembrare Stupido', 'Paura di Chiedere', 'Umiliazione Pubblica'],
      newWay: '[ RIVELAZIONE ]',
      newItems: ['Scoprire in Silenzio', 'Emergere Più Potente', 'Nessuno Deve Sapere'],
      catalogTitle: 'Percorsi di Scoperta',
      recommendedHand: 'Rivelatore',
      pathsTitle: 'Livelli di Rivelazione',
      paths: [
        { title: 'Risveglio', desc: 'Scopri cosa già sai.' },
        { title: 'Rivelare', desc: 'La tua conoscenza nascosta, esposta.' },
        { title: 'Dominare', desc: 'Lo sapevi sempre. Ora sai di sapere.' }
      ],
      modules: [
        { title: "Scoperta IA", duration: "12 Ore", level: "Risveglio" },
        { title: "Rivelazione Generativa", duration: "24 Ore", level: "Rivelare" },
        { title: "Dominio Strategico", duration: "40 Ore", level: "Dominare" }
      ]
    },
    excellence: {
      tagHand: 'Precisione',
      title: 'ECCELLENZA',
      subtitle: 'OPERATIVA',
      desc: 'La tua operazione sanguina e non vedi dove. Rendiamo l\'invisibile visibile. Zero sprechi. Allineamento totale. Academy dentro.',
      featureTitle: 'Cockpit StratOS',
      featureSubtitle: 'Intelligenza dell\'Eccellenza',
      solutions: [
         { title: "Hoshin Kanri", desc: "Dal consiglio al reparto. Ogni obiettivo dispiegato. Zero disallineamento." },
         { title: "Gemba Intelligence", desc: "Polso operativo in tempo reale. Spreco rivelato prima che costi." },
         { title: "Università Aziendale", desc: "Powered by Academy. Le tue persone scoprono l\'eccellenza. Diventa cultura." }
      ],
      integrationTitle: 'Eccellenza Connessa',
      integrationHand: 'Ecosistema',
      integrationDesc: 'ERP. Academy. Sistemi operativi. Un motore di intelligenza.',
      kpiTitle: 'Impatto Misurabile',
      kpiDesc: 'Ogni miglioramento tracciato. Ogni spreco eliminato. Ogni persona amplificata.',
      growthHand: 'Kaizen'
    },
    contact: {
      title: "Parliamo.",
      subtitle: "Raccontaci la tua sfida. Ti diremo la verità.",
      infoTitle: "Canali Diretti",
      name: 'IDENTITÀ',
      email: 'COORDINATE (EMAIL)',
      phone: 'CELLULARE',
      frequency: 'FREQUENZA (DIPARTIMENTO)',
      challenge: 'TRASMISSIONE (MESSAGGIO)',
      send: 'INIZIA TRASMISSIONE',
      sending: 'TRASMISSIONE...',
      successTitle: 'SEGNALE RICEVUTO',
      successDesc: 'I nostri sistemi hanno intercettato il tuo messaggio. Un agente sarà inviato a breve.',
      responseHand: 'Risposta Umana',
      freqOptions: {
        general: 'Generale',
        studio: 'Studio (Strategia)',
        academy: 'Accademia (Istruzione)',
        excellence: 'Eccellenza (Ops)'
      }
    },
    footer: {
      rights: 'TUTTI I SISTEMI OPERATIVI.',
      nav: 'Navigazione',
      connect: 'Connetti',
      internal: 'Interno'
    }
  }
};