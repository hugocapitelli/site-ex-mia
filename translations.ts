import { Language } from './types';

export const translations = {
  [Language.EN]: {
    nav: { studio: 'STUDIO', academy: 'ACADEMY', excellence: 'EXCELLENCE', contact: "LET'S TALK", start: "START PROJECT" },
    home: {
      system: '[ SYSTEM: ONLINE ]',
      loc: 'LOC: RIBEIRAO PRETO, BR',
      tagline: 'Reinventing corporate intelligence',
      heroTitle: 'Organic',
      heroSubtitle: 'Intelligence',
      heroDesc: "We don't just implement AI. We build the neural architecture of your business. Bridging the gap between strategy and execution.",
      initiate: 'Initiate Protocol',
      heroHand: 'Start Here',
      ecosystem: 'The Ecosystem',
      studioTitle: 'Studio',
      studioDesc: 'Bespoke AI solutions. We architect the decision-making engines that power your future.',
      studioHand: 'Neural Architecture',
      academyTitle: 'Academy',
      academyDesc: 'Training your workforce for the AI era. Culture eats strategy for breakfast.',
      excellenceTitle: 'Excellence',
      excellenceDesc: 'Operationalizing governance. We turn abstract methodologies (Lean, OKRs) into automated, software-driven reality.',
      excellenceHand: 'Automated Flow',
      humanCentered: 'Human Centered',
      methodologyTitle: 'From Chaos',
      methodologySubtitle: 'To Clarity',
      steps: [
        { id: '01', title: 'DIAGNOSE', desc: 'Deep data analysis & bottleneck identification.' },
        { id: '02', title: 'STRATEGY', desc: ' AI Roadmap definition & ROI projection.' },
        { id: '03', title: 'TRAIN', desc: 'Human capability building & culture shift.' },
        { id: '04', title: 'DEPLOY', desc: 'Agent & System implementation.' },
        { id: '05', title: 'GOVERN', desc: 'Ethics, guardrails & compliance.' },
        { id: '06', title: 'EVOLVE', desc: 'Continuous learning loops & optimization.' }
      ],
      ctaTitle: 'READY TO',
      ctaHighlight: 'DISRUPT?',
      ctaDesc: 'Stop playing catch-up. Start architecting the future.',
      ctaButton: 'SCHEDULE BRIEFING',
      ctaHand: "Let's go"
    },
    studio: {
      tagHand: 'Studio Division',
      title: 'STRATEGY',
      titleHighlight: 'MEETS',
      titleEnd: 'EXECUTION',
      subtitle: 'We bridge the disconnect between C-Level vision and operational reality using bespoke AI agents.',
      statLabel: 'Of strategies fail due to execution gap',
      statHand: 'Reality Check',
      problems: ['Siloed Data', 'Slow Decision Making', 'Misalignment'],
      architectureTitle: 'The Architecture of Decision',
      cards: [
        { title: 'Decision Mapping', text: 'We map your strategic nodes to ensure every decision pushes the needle.' },
        { title: 'Intelligent Agents', text: 'Deploying specialized AI to automate monitoring and detect anomalies.' },
        { title: 'Frictionless Ops', text: 'Removing friction points so strategy flows unimpeded to the frontline.' }
      ],
      processTitle: 'The Neural Process',
      processSteps: [
        { title: 'Execution Diagnosis', desc: 'Where is your strategy dying?' },
        { title: 'Decision Architecture', desc: 'How do we organize what matters?' },
        { title: 'Implementation & Orchestration', desc: 'Systems running in practice.' },
        { title: 'Adoption & Iteration', desc: 'Ensuring it becomes routine.' }
      ],
      techTitle: 'Our Stack',
      cta: 'Identify your gaps',
      ctaButton: 'Start Diagnostic',
      ctaHand: 'Build it'
    },
    academy: {
      tagHand: 'Learning Loop',
      unlock: 'UNLOCK',
      title: 'Human',
      subtitle: 'Potential',
      desc: "AI isn't about replacing humans. It's about empowering them to reach new heights.",
      buttons: ['VIEW COURSES', 'CORPORATE CONSULTING'],
      btnHand: 'Start Now',
      oldWay: '[ OLD WAY ]',
      oldItems: ['Passive Learning', 'Compliance Focus', 'Isolated Events'],
      newWay: '[ EXÍMIA WAY ]',
      newItems: ['Active & Strategic', 'Business Aligned', 'Continuous Ecosystem'],
      catalogTitle: 'Available Modules',
      recommendedHand: 'Recommended',
      pathsTitle: 'Certification Paths',
      paths: [
        { title: 'AI Foundations', desc: 'Literacy for everyone.' },
        { title: 'AI Practitioner', desc: 'Tools for daily ops.' },
        { title: 'AI Master', desc: 'Strategic architecture.' }
      ],
      modules: [
        { title: "AI Literacy & Ethics", duration: "12 Hours", level: "Beginner" },
        { title: "Applied Generative Ops", duration: "24 Hours", level: "Intermediate" },
        { title: "Strategic Implementation", duration: "40 Hours", level: "Advanced" }
      ]
    },
    excellence: {
      tagHand: 'Value Flow',
      title: 'EXCELLENCE',
      subtitle: 'AUTOMATED',
      desc: 'Stop managing spreadsheets. Start managing value. We turn abstract frameworks into software.',
      featureTitle: 'StratOS Platform',
      featureSubtitle: 'Hoshin Kanri Engine',
      solutions: [
         { title: "StratOS", desc: "Long term vision to daily execution." },
         { title: "OKR Engine", desc: "Quarterly focus with weekly tracking." },
         { title: "Lean Ops", desc: "Digital Gemba. Real-time problem solving." }
      ],
      integrationTitle: 'Neural Integrations',
      integrationHand: 'Plug & Play',
      integrationDesc: 'Connects seamlessly with your existing neural network.',
      kpiTitle: 'Real-time Impact',
      kpiDesc: 'Visualize value flow instantly.',
      growthHand: 'Exponential'
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
      connect: 'Connect'
    }
  },
  [Language.PT]: {
    nav: { studio: 'STUDIO', academy: 'ACADEMY', excellence: 'EXCELLENCE', contact: 'CONTATO', start: 'INICIAR PROJETO' },
    home: {
      system: '[ SISTEMA: ONLINE ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Reinventando a inteligência corporativa',
      heroTitle: 'Inteligência',
      heroSubtitle: 'Orgânica',
      heroDesc: "Não implementamos apenas IA. Construímos a arquitetura neural do seu negócio. Unindo estratégia e execução.",
      initiate: 'Iniciar Protocolo',
      heroHand: 'Comece Aqui',
      ecosystem: 'O Ecossistema',
      studioTitle: 'Studio',
      studioDesc: 'Soluções de IA sob medida. Arquitetamos os motores de decisão que impulsionam seu futuro.',
      studioHand: 'Arquitetura Neural',
      academyTitle: 'Academy',
      academyDesc: 'Treinando sua força de trabalho para a era da IA. Cultura come estratégia no café da manhã.',
      excellenceTitle: 'Excellence',
      excellenceDesc: 'Operacionalizando governança. Transformamos metodologias abstratas (Lean, OKRs) em realidade automatizada via software.',
      excellenceHand: 'Fluxo Automatizado',
      humanCentered: 'Centrado no Humano',
      methodologyTitle: 'Do Caos',
      methodologySubtitle: 'À Clareza',
      steps: [
        { id: '01', title: 'DIAGNOSTICAR', desc: 'Análise profunda de dados e identificação de gargalos.' },
        { id: '02', title: 'ESTRATÉGIA', desc: 'Definição de Roadmap de IA e projeção de ROI.' },
        { id: '03', title: 'TREINAR', desc: 'Construção de capacidade humana e mudança cultural.' },
        { id: '04', title: 'IMPLANTAR', desc: 'Implementação de Agentes e Sistemas.' },
        { id: '05', title: 'GOVERNAR', desc: 'Ética, guardrails e conformidade.' },
        { id: '06', title: 'EVOLUIR', desc: 'Loops de aprendizado contínuo e otimização.' }
      ],
      ctaTitle: 'PRONTO PARA',
      ctaHighlight: 'DISRUPTAR?',
      ctaDesc: 'Pare de correr atrás. Comece a arquitetar o futuro.',
      ctaButton: 'AGENDAR BRIEFING',
      ctaHand: "Vamos lá"
    },
    studio: {
      tagHand: 'Divisão Studio',
      title: 'ESTRATÉGIA',
      titleHighlight: 'ENCONTRA',
      titleEnd: 'EXECUÇÃO',
      subtitle: 'Resolvemos a desconexão entre a visão C-Level e a realidade operacional usando agentes de IA sob medida.',
      statLabel: 'Das estratégias falham devido à lacuna de execução',
      statHand: 'Choque de Realidade',
      problems: ['Dados Isolados', 'Decisão Lenta', 'Desalinhamento'],
      architectureTitle: 'A Arquitetura da Decisão',
      cards: [
        { title: 'Mapeamento de Decisão', text: 'Mapeamos seus nós estratégicos para garantir que cada decisão mova o ponteiro.' },
        { title: 'Agentes Inteligentes', text: 'Implantando IA especializada para monitoramento automatizado e detecção de anomalias.' },
        { title: 'Ops Sem Atrito', text: 'Removendo pontos de atrito para que a estratégia flua desimpedida até a linha de frente.' }
      ],
      processTitle: 'O Processo Neural',
      processSteps: [
        { title: 'Diagnóstico de Execução', desc: 'Onde sua estratégia está morrendo?' },
        { title: 'Arquitetura de Decisão', desc: 'Como organizamos o que importa?' },
        { title: 'Implementação & Orquestração', desc: 'Sistemas rodando na prática.' },
        { title: 'Adoção & Iteração', desc: 'Garantindo que vire rotina.' }
      ],
      techTitle: 'Nossa Stack',
      cta: 'Identifique suas lacunas',
      ctaButton: 'Iniciar Diagnóstico',
      ctaHand: 'Construir'
    },
    academy: {
      tagHand: 'Loop de Aprendizado',
      unlock: 'DESBLOQUEAR',
      title: 'Potencial',
      subtitle: 'Humano',
      desc: "IA não é sobre substituir humanos. É sobre empoderá-los para alcançar novos patamares.",
      buttons: ['VER CURSOS', 'CONSULTORIA CORP'],
      btnHand: 'Comece Agora',
      oldWay: '[ JEITO VELHO ]',
      oldItems: ['Aprendizado Passivo', 'Foco em Compliance', 'Eventos Isolados'],
      newWay: '[ JEITO EXÍMIA ]',
      newItems: ['Ativo & Estratégico', 'Alinhado ao Negócio', 'Ecossistema Contínuo'],
      catalogTitle: 'Módulos Disponíveis',
      recommendedHand: 'Recomendado',
      pathsTitle: 'Trilhas de Certificação',
      paths: [
        { title: 'Fundamentos IA', desc: 'Alfabetización para todos.' },
        { title: 'Praticante IA', desc: 'Ferramentas para ops diário.' },
        { title: 'Mestre IA', desc: 'Arquitetura estratégica.' }
      ],
      modules: [
        { title: "Letramento em IA & Ética", duration: "12 Horas", level: "Iniciante" },
        { title: "Ops Generativo Aplicado", duration: "24 Horas", level: "Intermediário" },
        { title: "Implementação Estratégica", duration: "40 Horas", level: "Avançado" }
      ]
    },
    excellence: {
      tagHand: 'Fluxo de Valor',
      title: 'EXCELÊNCIA',
      subtitle: 'AUTOMATIZADA',
      desc: 'Pare de gerenciar planilhas. Comece a gerenciar valor. Transformamos frameworks abstratos em software.',
      featureTitle: 'Plataforma StratOS',
      featureSubtitle: 'Motor Hoshin Kanri',
      solutions: [
         { title: "StratOS", desc: "Da visão de longo prazo à execução diária." },
         { title: "Motor OKR", desc: "Foco trimestral com rastreamento semanal." },
         { title: "Lean Ops", desc: "Gemba Digital. Resolução de problemas em tempo real." }
      ],
      integrationTitle: 'Integrações Neurais',
      integrationHand: 'Plug & Play',
      integrationDesc: 'Conecta-se perfeitamente à sua rede neural existente.',
      kpiTitle: 'Impacto em Tempo Real',
      kpiDesc: 'Visualize o fluxo de valor instantáneamente.',
      growthHand: 'Exponencial'
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
      connect: 'Conectar'
    }
  },
  [Language.ES]: {
    nav: { studio: 'ESTUDIO', academy: 'ACADEMIA', excellence: 'EXCELENCIA', contact: 'CONTACTO', start: 'INICIAR' },
    home: {
      system: '[ SISTEMA: EN LÍNEA ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Reinventando la inteligencia corporativa',
      heroTitle: 'Inteligencia',
      heroSubtitle: 'Orgánica',
      heroDesc: "No solo implementamos IA. Construímos la arquitectura neuronal de su negocio. Uniendo estrategia y ejecución.",
      initiate: 'Iniciar Protocolo',
      heroHand: 'Empiece Aquí',
      ecosystem: 'El Ecosistema',
      studioTitle: 'Estudio',
      studioDesc: 'Soluciones de IA a medida. Arquitectamos los motores de decisión que impulsan su futuro.',
      studioHand: 'Arquitectura Neuronal',
      academyTitle: 'Academia',
      academyDesc: 'Entrenando su fuerza laboral para la era de la IA. La cultura se come a la estrategia en el desayuno.',
      excellenceTitle: 'Excelencia',
      excellenceDesc: 'Operacionalizando la gobernanza. Convertimos metodologías abstractas (Lean, OKRs) en realidad automatizada.',
      excellenceHand: 'Flujo Automatizado',
      humanCentered: 'Centrado en Humano',
      methodologyTitle: 'Del Caos',
      methodologySubtitle: 'A la Claridad',
      steps: [
        { id: '01', title: 'DIAGNOSTICAR', desc: 'Análisis profundo de datos.' },
        { id: '02', title: 'ESTRATEGIA', desc: 'Definición de Roadmap de IA.' },
        { id: '03', title: 'ENTRENAR', desc: 'Construcción de capacidad humana.' },
        { id: '04', title: 'IMPLEMENTAR', desc: 'Implementación de Agentes.' },
        { id: '05', title: 'GOBERNAR', desc: 'Ética y cumplimiento.' },
        { id: '06', title: 'EVOLUCIONAR', desc: 'Optimización continua.' }
      ],
      ctaTitle: 'LISTO PARA',
      ctaHighlight: 'DISRUPTAR?',
      ctaDesc: 'Deje de ponerse al día. Comience a arquitectar el futuro.',
      ctaButton: 'PROGRAMAR BRIEFING',
      ctaHand: 'Vamos'
    },
    studio: {
      tagHand: 'División Estudio',
      title: 'ESTRATEGIA',
      titleHighlight: 'ENCUENTRA',
      titleEnd: 'EJECUCIÓN',
      subtitle: 'Resolvemos la desconexión entre la visión C-Level e a realidad operativa usando agentes de IA a medida.',
      statLabel: 'De las estrategias fallan por brecha de ejecución',
      statHand: 'Realidad',
      problems: ['Datos Aislados', 'Decisión Lenta', 'Desalineación'],
      architectureTitle: 'La Arquitectura de la Decisión',
      cards: [
        { title: 'Mapeo de Decisión', text: 'Mapeamos sus nodos estratégicos para asegurar impacto.' },
        { title: 'Agentes Inteligentes', text: 'Implementando IA especializada para monitoreo automatizado.' },
        { title: 'Ops Sin Fricción', text: 'Eliminando puntos de fricción para que la estrategia fluya.' }
      ],
      processTitle: 'El Proceso Neuronal',
      processSteps: [
        { title: 'Diagnóstico de Ejecución', desc: '¿Dónde está muriendo su estrategia?' },
        { title: 'Arquitectura de Decisión', desc: '¿Cómo organizamos lo que importa?' },
        { title: 'Implementación y Orquestación', desc: 'Sistemas funcionando en la práctica.' },
        { title: 'Adopción e Iteración', desc: 'Asegurando que se convierta en rutina.' }
      ],
      techTitle: 'Nuestra Stack',
      cta: 'Identifique sus brechas',
      ctaButton: 'Iniciar Diagnóstico',
      ctaHand: 'Construir'
    },
    academy: {
      tagHand: 'Bucle de Aprendizaje',
      unlock: 'DESBLOQUEAR',
      title: 'Potencial',
      subtitle: 'Humano',
      desc: "La IA no se trata de reemplazar humanos. Se trata de empoderarlos para alcanzar nuevas alturas.",
      buttons: ['VER CURSOS', 'CONSULTORÍA CORP'],
      btnHand: 'Empezar',
      oldWay: '[ VIEJA FORMA ]',
      oldItems: ['Aprendizaje Pasivo', 'Enfoque en Cumplimiento', 'Eventos Aislados'],
      newWay: '[ FORMA EXÍMIA ]',
      newItems: ['Activo y Estratégico', 'Alineado al Negocio', 'Ecosistema Continuo'],
      catalogTitle: 'Módulos Disponibles',
      recommendedHand: 'Recomendado',
      pathsTitle: 'Rutas de Certificación',
      paths: [
        { title: 'Fundamentos IA', desc: 'Alfabetización para todos.' },
        { title: 'Practicante IA', desc: 'Herramientas diarias.' },
        { title: 'Maestro IA', desc: 'Arquitectura estratégica.' }
      ],
      modules: [
        { title: "Alfabetización en IA y Ética", duration: "12 Horas", level: "Principiante" },
        { title: "Ops Generativo Aplicado", duration: "24 Horas", level: "Intermedio" },
        { title: "Implementación Estratégica", duration: "40 Horas", level: "Avanzado" }
      ]
    },
    excellence: {
      tagHand: 'Flujo de Valor',
      title: 'EXCELENCIA',
      subtitle: 'AUTOMATIZADA',
      desc: 'Deje de gestionar hojas de cálculo. Comience a gestionar valor.',
      featureTitle: 'Plataforma StratOS',
      featureSubtitle: 'Motor Hoshin Kanri',
      solutions: [
         { title: "StratOS", desc: "Visión a largo plazo a ejecución diaria." },
         { title: "Motor OKR", desc: "Enfoque trimestral con seguimiento semanal." },
         { title: "Lean Ops", desc: "Gemba Digital. Resolución en tiempo real." }
      ],
      integrationTitle: 'Integraciones Neuronales',
      integrationHand: 'Plug & Play',
      integrationDesc: 'Conecta perfectamente con su red existente.',
      kpiTitle: 'Impacto en Tiempo Real',
      kpiDesc: 'Visualice el flujo de valor instantáneamente.',
      growthHand: 'Exponencial'
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
      connect: 'Conectar'
    }
  },
  [Language.IT]: {
    nav: { studio: 'STUDIO', academy: 'ACCADEMIA', excellence: 'ECCELLENZA', contact: 'CONTATTO', start: 'INIZIARE' },
    home: {
      system: '[ SISTEMA: ONLINE ]',
      loc: 'LOC: RIBEIRÃO PRETO, BR',
      tagline: 'Reinventare l\'intelligenza aziendale',
      heroTitle: 'Intelligenza',
      heroSubtitle: 'Organica',
      heroDesc: "Non implementiamo solo l'IA. Costruiamo l'architettura neurale del tuo business. Unendo strategia ed esecuzione.",
      initiate: 'Avviare Protocollo',
      heroHand: 'Inizia Qui',
      ecosystem: 'L\'Ecosistema',
      studioTitle: 'Studio',
      studioDesc: 'Soluzioni IA su misura. Architettiamo i motori decisionali che guidano il tuo futuro.',
      studioHand: 'Architettura Neurale',
      academyTitle: 'Accademia',
      academyDesc: 'Formare la forza lavoro per l\'era dell\'IA. La cultura mangia la strategia a colazione.',
      excellenceTitle: 'Eccellenza',
      excellenceDesc: 'Operazionalizzare la governance. Trasformiamo metodologie astratte (Lean, OKR) in realtà automatizzata.',
      excellenceHand: 'Flusso Automatizado',
      humanCentered: 'Centrado sull\'Umano',
      methodologyTitle: 'Dal Caos',
      methodologySubtitle: 'Alla Chiarezza',
      steps: [
        { id: '01', title: 'DIAGNOSTICAR', desc: 'Analisi approfondita dei dati.' },
        { id: '02', title: 'STRATEGIA', desc: 'Definizione Roadmap IA.' },
        { id: '03', title: 'ADDESTRARE', desc: 'Costruzione capacità umane.' },
        { id: '04', title: 'DISPIEGARE', desc: 'Implementazione Agenti.' },
        { id: '05', title: 'GOVERNARE', desc: 'Etica e conformità.' },
        { id: '06', title: 'EVOLVERE', desc: 'Ottimizzazione continua.' }
      ],
      ctaTitle: 'PRONTO A',
      ctaHighlight: 'ROMPERE?',
      ctaDesc: 'Smetti di rincorrere. Inizia ad architettare il futuro.',
      ctaButton: 'PIANIFICA BRIEFING',
      ctaHand: 'Andiamo'
    },
    studio: {
      tagHand: 'Divisione Studio',
      title: 'STRATEGIA',
      titleHighlight: 'INCONTRA',
      titleEnd: 'ESECUZIONE',
      subtitle: 'Risolviamo la disconnessione tra visione C-Level e realtà operativa utilizzando agenti IA su misura.',
      statLabel: 'Delle strategie falliscono per gap esecutivo',
      statHand: 'Realtà',
      problems: ['Dati Isolati', 'Decisioni Lente', 'Disallineamento'],
      architectureTitle: 'L\'Architettura della Decisione',
      cards: [
        { title: 'Mappatura Decisionale', text: 'Mappiamo i nodi strategici per garantire impatto.' },
        { title: 'Agenti Intelligenti', text: 'Implementazione di IA specializzata per il monitoraggio.' },
        { title: 'Ops Senza Attrito', text: 'Rimuovere i punti di attrito affinché la strategia fluisca.' }
      ],
      processTitle: 'Il Processo Neurale',
      processSteps: [
        { title: 'Diagnosi dell\'Esecuzione', desc: 'Dove sta morendo la tua strategia?' },
        { title: 'Architettura Decisionale', desc: 'Come organizziamo ciò che conta?' },
        { title: 'Implementazione e Orchestrazione', desc: 'Sistemi in funzione nella pratica.' },
        { title: 'Adozione e Iterazione', desc: 'Garantire che diventi routine.' }
      ],
      techTitle: 'La Nostra Stack',
      cta: 'Identifica le tue lacune',
      ctaButton: 'Avvia Diagnostica',
      ctaHand: 'Costruire'
    },
    academy: {
      tagHand: 'Loop di Apprendimento',
      unlock: 'SBLOCCARE',
      title: 'Potenziale',
      subtitle: 'Umano',
      desc: "L'IA non riguarda la sostituzione degli umani. Riguarda l'empowerment per raggiungere nuove vette.",
      buttons: ['VEDI CORSI', 'CONSULENZA AZIENDALE'],
      btnHand: 'Inizia Ora',
      oldWay: '[ VECCHIO MODO ]',
      oldItems: ['Apprendimento Passivo', 'Focus sulla Compliance', 'Eventos Isolati'],
      newWay: '[ MODO EXÍMIA ]',
      newItems: ['Attivo e Strategico', 'Allineato al Business', 'Ecosistema Continuo'],
      catalogTitle: 'Moduli Disponibili',
      recommendedHand: 'Consigliato',
      pathsTitle: 'Percorsi di Certificazione',
      paths: [
        { title: 'Fondamenti IA', desc: 'Alfabetizzazione per tutti.' },
        { title: 'Praticante IA', desc: 'Strumenti per operazioni quotidiane.' },
        { title: 'Maestro IA', desc: 'Architettura strategica.' }
      ],
      modules: [
        { title: "Alfabetizzazione IA ed Etica", duration: "12 Ore", level: "Principiante" },
        { title: "Ops Generativi Applicati", duration: "24 Ore", level: "Intermedio" },
        { title: "Implementazione Strategica", duration: "40 Ore", level: "Avanzato" }
      ]
    },
    excellence: {
      tagHand: 'Flusso di Valore',
      title: 'ECCELLENZA',
      subtitle: 'AUTOMATIZZATA',
      desc: 'Smetti di gestire fogli di calcolo. Inizia a gestire valore.',
      featureTitle: 'Piattaforma StratOS',
      featureSubtitle: 'Motore Hoshin Kanri',
      solutions: [
         { title: "StratOS", desc: "Dalla visione a lungo termine all'esecuzione quotidiana." },
         { title: "Motore OKR", desc: "Focus trimestrale con monitoraggio settimanale." },
         { title: "Lean Ops", desc: "Gemba Digitale. Risoluzione problemi in tempo reale." }
      ],
      integrationTitle: 'Integrazioni Neurali',
      integrationHand: 'Plug & Play',
      integrationDesc: 'Si connette perfettamente alla tua rete esistente.',
      kpiTitle: 'Impatto in Tempo Reale',
      kpiDesc: 'Visualizza il flusso di valore istantaneamente.',
      growthHand: 'Esponenziale'
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
      connect: 'Connetti'
    }
  }
};