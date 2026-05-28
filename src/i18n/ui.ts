import type { Lang } from "./config";

export type UI = {
  nav: {
    home: string;
    about: string;
    internship: string;
    projects: string;
    cv: string;
  };
  hero: {
    pill: string;
    title: string;
    body: string;
    cta1: string;
    cta2: string;
    cta3: string;
  };
  cards: {
    cv: { title: string; body: string };
    auto: { title: string; body: string };
    iot: { title: string; body: string };
  };
  sections: {
    find: string;
    findBullets: string[];
    // keep it if you still use it anywhere; otherwise delete it later
    quick: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    worldTitle: string;
    tiles: {
      travel: { title: string; text: string };
      tattoo: { title: string; text: string };
      arq: { title: string; text: string };
      read: { title: string; text: string };
      iot: { title: string; text: string };
      video: { title: string; text: string };
    };
  };
  cv: {
    headline: string;
    summary: string;
    overview: string;
    experience: string;
    skills: string;
    volunteering: string;
    education: string;
    languagesTitle: string;
    atAGlance: string;
    clickForDetails: string;
    detailsBtn: string;
    activeLabel: string;
    downloadBtn: string;
    softSkillsTitle: string;
    statLanguages: string;
    statWorkExp: string;
    statBackground: string;
    statFocus: string;
    skillWeb: string;
    skillData: string;
    skillAec: string;
    overviewBullets: string[];
    softSkills: string[];
    languages: Array<{ name: string; level: string }>;
    exp: {
      horeca:    { title: string; subtitle: string; bullets: string[] };
      warehouse: { title: string; subtitle: string; bullets: string[] };
      sales:     { title: string; subtitle: string; bullets: string[] };
      aec:       { title: string; subtitle: string; bullets: string[] };
    };
    vol: {
      barista: { title: string; subtitle: string; bullets: string[] };
    };
    edu: {
      cs:      { title: string; subtitle: string };
      arch:    { title: string; subtitle: string };
      autocad: { title: string; subtitle: string };
    };
  };
  projects: {
    pill: string;
    subtitle: string;
    statProjects: string;
    statTech: string;
    statLatest: string;
    filterAll: string;
    emptyState: string;
    viewBtn: string;
    backBtn: string;
    artifacts: string;
    demoVideo: string;
    openFullscreen: string;
    context: string;
    myRole: string;
    stack: string;
    whatBuilt: string;
    whatLearned: string;
    gallery: string;
    previous: string;
    next: string;
  };
  internship: {
    title: string;
    subtitle: string;
    completedLabel: string;
    aboutLabel: string;
    stackLabel: string;
    galleryLabel: string;
    supervisorsLabel: string;
    videoCaption: string;
    context: string;
    stats: Array<{ val: string; lbl: string }>;
    tabs: {
      role:    { label: string; items: string[] };
      built:   { label: string; items: string[] };
      learned: { label: string; items: string[] };
    };
  };
};

export const ui: Record<Lang, UI> = {
  en: {
    nav: { home: "Home", about: "About", internship: "Internship", projects: "Projects", cv: "CV" },
    hero: {
      pill: "AEC → Applied Computer Science • Belgium",
      title: "Architect turned developer, building AI, vision & IoT tools.",
      body:
        "I’m an architect transitioning into Applied Computer Science in Belgium. I bridge BIM/Revit, construction documentation, QA/QC, and site coordination with practical digital tools in AI/ML, computer vision, automation, and data visualization ,  so information becomes clearer, faster, and easier to act on.",
      cta1: "View Internship",
      cta2: "See Projects",
      cta3: "Download CV",
    },
    cards: {
      cv: { title: "Computer Vision", body: "YOLOv8/OpenCV pipeline → homography mapping, heatmaps & metrics export." },
      auto: { title: "Automation", body: "Lightweight Python/Excel tools that clean data and generate reports." },
      iot: { title: "IoT Prototypes", body: "Monitoring + alerts prototypes for real-world constraints." },
    },
    sections: {
      find: "What you’ll find here",
      findBullets: [
        "Verified internship evidence and clear documentation.",
        "Project case studies written for IT professionals.",
        "Concrete learnings ,  specific, personal, and non-generic.",
      ],
      quick: "Quick links",
    },
    about: {
      title: "About",
      p1: "I’m Pierina Lopez, a Peruvian student based in Belgium, currently studying Applied Computer Science at Thomas More. My journey began in architecture and urbanism in Peru, later evolving into a passion for tech and IoT after relocating to Belgium.",
      p2: "I blend structured thinking with creative expression, from coding and IoT projects to sketching and cycling across Europe. I’m passionate about solving problems, exploring new cultures, and building things that matter.",
      worldTitle: "My World in Pictures",
      tiles: {
        travel: {
          title: "Travel",
          text: "Bike travel is the best ,  budget-friendly and the scenery is unmatched. I'll take a plane if the place is too far, but the goal is always the same: connecting with other cultures and living within different societies. Not the tourist experience ,  the local one. Finding spots only locals know, connecting with nature, getting lost in the mountains.",
        },
        tattoo: {
          title: "Art & tattoo design",
          text: "Creativity was always a passion, even before art classes gave it a name. Finding my way to tattooing was the perfect path ,  making art last a lifetime, on skin, with meaning. Every design is a small story that stays with someone forever.",
        },
        arq: {
          title: "Architecture mindset",
          text: "Connecting art and structure. Once an architect, always an architect. Trying to understand how people live within different types of buildings is something I learned to love, and that way of thinking never really leaves you ,  it just finds new problems to solve.",
        },
        read: {
          title: "Reading & writing",
          text: "Imagining other people's lives in different buildings and environments ,  I did that from school. Writing was always at my fingertips. One of my dreams is to write a book, one that inspires people the way so many books have inspired me.",
        },
        iot: {
          title: "IoT & prototyping",
          text: "From code to devices ,  I love the magic of it. Making things work with a few letters on a screen. The moment a sensor clicks or a light responds to an automation, something clicks in my head too. That connection between the digital and the physical is what keeps me building.",
        },
        video: {
          title: "A glimpse of my world",
          text: "Soldering a sensor, configuring a board, connecting the physical to the digital ,  this is where I feel most in flow. Working with my hands while thinking in code is exactly the kind of problem I want to keep solving.",
        },
      },
    },
    cv: {
      headline: "Applied Computer Science student • Architecture background • AEC → Tech",
      summary: "Multilingual student with strong IT foundations, customer service experience, and a practical builder mindset ,  web apps, dashboards, and prototypes.",
      overview: "Overview", experience: "Experience", skills: "Skills", volunteering: "Volunteering", education: "Education",
      languagesTitle: "Languages", atAGlance: "At a glance", clickForDetails: "Click any card for details",
      detailsBtn: "details →", activeLabel: "Active", downloadBtn: "Download CV", softSkillsTitle: "Soft skills",
      statLanguages: "Languages", statWorkExp: "Work exp.", statBackground: "Background", statFocus: "2025 focus",
      skillWeb: "Web Dev", skillData: "Data & Tools", skillAec: "AEC & Design",
      overviewBullets: [
        "Full-stack basics (Laravel + Livewire) + Qlik Sense dashboards",
        "Strong communication + customer-facing background",
        "AEC mindset: documentation, QA, coordination → tech projects",
      ],
      softSkills: [
        "Analytical problem-solving & debugging",
        "Teamwork & collaboration (Agile / Scrum)",
        "Adaptability & eagerness to learn",
        "Clear communication ,  technical & non-technical",
        "Time management, ownership, reliable on deliverables",
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Dutch",   level: "Basic (learning)" },
      ],
      exp: {
        horeca:    { title: "Bartender / Waiter (Student jobs)", subtitle: "Post Restaurant, VOLT, Irish Pub — Belgium", bullets: ["Delivered attentive service in busy, high-end environments; managed bar + table orders.", "Prepared cocktails and beverages to house standards and customer preferences.", "Monitored stock levels and supported hygiene/safety standards."] },
        warehouse: { title: "Operations & Warehouse Assistant", subtitle: "Distrilog, Beyers, Greenyard — Belgium", bullets: ["Packed, sorted, and prepared high volumes of products for shipment.", "Operated pallet stacking/wrapping equipment and followed safety procedures.", "Supported logistics workflows by keeping workstations clean and organized."] },
        sales:     { title: "Customer Service & Sales Representative", subtitle: "Teleperformance, Los Portales, Pet Center — Peru & Remote", bullets: ["Resolved customer inquiries and complaints, aiming for high satisfaction.", "Used upselling/cross-selling to increase sales and customer loyalty.", "Handled payments and maintained accurate records in fast-paced environments."] },
        aec:       { title: "Architecture & Urban Planning Assistant", subtitle: "WAO, TEKTUM, IMP, Municipality of Puente Piedra — Peru", bullets: ["Produced architectural + urban-planning drawings in AutoCAD/Revit and BIM workflows.", "Supported research, data analysis, and preparation of presentations.", "Assisted with site inspections, documentation, cost estimates, and coordination."] },
      },
      vol: {
        barista: { title: "Volunteer Barista", subtitle: "The Big C — Belgium", bullets: ["Prepared and served beverages while supporting a welcoming community space.", "Handled payments and maintained a clean, safe working area."] },
      },
      edu: {
        cs:      { title: "Applied Computer Science",        subtitle: "Thomas More University of Applied Sciences — Belgium" },
        arch:    { title: "Architecture and Urban Planning", subtitle: "Cesar Vallejo University — Peru" },
        autocad: { title: "AutoCAD Architecture Cert.",      subtitle: "Cesar Vallejo University — Peru" },
      },
    },
    projects: {
      pill: "Case studies", subtitle: "Context, what I built, and what I learned — written for IT professionals.",
      statProjects: "Projects", statTech: "Technologies", statLatest: "Latest",
      filterAll: "All", emptyState: "No projects match this filter.", viewBtn: "View →",
      backBtn: "Back to projects", artifacts: "Artifacts", demoVideo: "Demo video",
      openFullscreen: "Open fullscreen →", context: "Context", myRole: "My role", stack: "Stack",
      whatBuilt: "What I built", whatLearned: "What I learned", gallery: "Gallery",
      previous: "Previous", next: "Next",
    },
    internship: {
      title: "Smart Home Integration",
      subtitle: "IoT prototype for safer night-time routines for older adults · Mobilab & Care",
      completedLabel: "Completed",
      aboutLabel: "About",
      stackLabel: "Stack",
      galleryLabel: "Gallery",
      supervisorsLabel: "Supervisors",
      videoCaption: "Smart Home Demo ,  night path · bathroom check-in · help mode · adaptive learning",
      context: "Prototype developed at Mobilab & Care (Thomas More Kempen) to support safer night-time routines for older adults living independently at home. Built on a locally controlled Home Assistant platform ,  no cloud dependency for safety functions. The Experience Lab apartment served as a realistic domestic test environment.",
      stats: [
        { val: "26", lbl: "Automations" },
        { val: "5",  lbl: "Zones" },
        { val: "0",  lbl: "Cloud deps" },
        { val: "4",  lbl: "Deliverables" },
        { val: "13", lbl: "Weeks" },
      ],
      tabs: {
        role: {
          label: "My Role",
          items: [
            "Designed the full 5-layer system architecture ,  control, integration, input, output, and interface.",
            "Built 26 Home Assistant automations covering night path lighting, bathroom check-in, help mode escalation, and adaptive scheduling.",
            "Developed a Python / AppDaemon component that analyses night mode history and proposes schedule updates for user approval.",
            "Configured Alexa voice control via a locally hosted Matter Hub bridge ,  6 routines covering all key scenarios.",
            "Produced 4 documentation deliverables for future reuse: realization document, user manual, installation guide, and maintenance manual.",
          ],
        },
        built: {
          label: "What Was Built",
          items: [
            "Night path lighting ,  bedroom to bathroom at 15–25% brightness and 2000–2400 K, triggered passively by motion.",
            "Bathroom check-in flow ,  5-minute inactivity timer escalates to a visual + audio nudge, then to full help mode if unanswered.",
            "Help mode ,  every light to 80%, Nuki lock opens automatically, Telegram and WhatsApp alerts fire simultaneously.",
            "Adaptive learning component ,  analyses activation history over a configurable window and proposes schedule updates.",
            "4-view dashboard ,  daily control (Thuis), recommendations (Helper), spatial testing (Plan), room inspection (Gebied).",
          ],
        },
        learned: {
          label: "What I Learned",
          items: [
            "Safety-critical automations need humane escalation ,  the resident must have agency at every step, including from the floor.",
            "Network-dependent projects require resolving institutional dependencies early, not as a late troubleshooting step.",
            "Research-driven design: every brightness value, timer, and colour temperature was justified by peer-reviewed literature.",
            "Writing for four different audiences simultaneously requires four fundamentally different registers and levels of detail.",
            "Hardware capacity matters from the start ,  a Pi 3B ceiling forced a mid-project migration to Pi 5 with full backup restore.",
          ],
        },
      },
    },
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", internship: "Prácticas", projects: "Proyectos", cv: "CV" },
    hero: {
      pill: "AEC → Ciencias de la Computación Aplicadas • Bélgica",
      title: "Arquitecta reconvertida en desarrolladora, IA, visión e IoT.",
      body:
        "Soy arquitecta en transición a Ciencias de la Computación Aplicadas en Bélgica. Conecto BIM/Revit, documentación de obra, QA/QC y coordinación en sitio con herramientas digitales prácticas en IA/ML, visión por computador, automatización y visualización de datos ,  para que la información sea más clara, rápida y accionable.",
      cta1: "Ver Prácticas",
      cta2: "Ver Proyectos",
      cta3: "Descargar CV",
    },
    cards: {
      cv: { title: "Visión por Computador", body: "Pipeline YOLOv8/OpenCV → homografía, heatmaps y métricas." },
      auto: { title: "Automatización", body: "Herramientas Python/Excel para limpiar datos y generar reportes." },
      iot: { title: "Prototipos IoT", body: "Monitoreo + alertas para casos reales y restricciones." },
    },
    sections: {
      find: "Qué encontrarás aquí",
      findBullets: [
        "Evidencia verificada de prácticas y documentación clara.",
        "Casos de estudio dirigidos a profesionales de IT.",
        "Aprendizajes concretos ,  específicos, personales y no genéricos.",
      ],
      quick: "Enlaces rápidos",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy Pierina Lopez, estudiante peruana viviendo en Bélgica, actualmente estudiando Applied Computer Science en Thomas More. Mi camino empezó en arquitectura y urbanismo en Perú y luego evolucionó hacia una pasión por la tecnología y el IoT tras mudarme a Bélgica.",
      p2: "Combino pensamiento estructurado con expresión creativa, desde programación y proyectos de IoT hasta dibujo y ciclismo por Europa. Me apasiona resolver problemas, explorar nuevas culturas y construir cosas que realmente aporten valor.",
      worldTitle: "Mi mundo en imágenes",
      tiles: {
      travel: {
        title: "Viajes",
        text: "Viajar en bici es lo mejor ,  económico y con paisajes increíbles. Tomo un avión si el lugar está muy lejos, pero el objetivo siempre es el mismo: conectar con otras culturas y vivir dentro de diferentes sociedades. No la experiencia turística, sino la local. Encontrar lugares que solo conocen los de allí, conectar con la naturaleza, perderse en las montañas.",
      },
      tattoo: {
        title: "Arte y diseño de tatuajes",
        text: "La creatividad siempre fue una pasión, incluso antes de que las clases de arte le dieran nombre. Encontrar mi camino en el tatuaje fue el paso perfecto ,  hacer que el arte dure toda una vida, en la piel, con significado. Cada diseño es una pequeña historia que acompaña a alguien para siempre.",
      },
      arq: {
        title: "Mentalidad arquitectónica",
        text: "Conectar el arte con la estructura. Una vez arquitecta, siempre arquitecta. Intentar entender cómo vive la gente en distintos tipos de edificios es algo que aprendí a amar, y esa forma de pensar nunca te abandona del todo ,  simplemente encuentra nuevos problemas que resolver.",
      },
      read: {
        title: "Lectura y escritura",
        text: "Imaginar la vida de otras personas en distintos edificios y entornos fue algo que hice desde la escuela. Escribir siempre estuvo en la punta de mis dedos. Uno de mis sueños es escribir un libro, uno que inspire a las personas como tantos libros me han inspirado a mí.",
      },
      iot: {
        title: "IoT y prototipado",
        text: "Del código a los dispositivos ,  amo la magia de eso. Hacer que las cosas funcionen con unas pocas letras en la pantalla. El momento en que un sensor responde o una luz reacciona a una automatización, algo también hace clic en mi cabeza. Esa conexión entre lo digital y lo físico es lo que me impulsa a seguir construyendo.",
      },
      video: {
        title: "Un vistazo a mi mundo",
        text: "Soldar un sensor, configurar una placa, conectar lo físico con lo digital ,  aquí es donde más me siento en flow. Trabajar con las manos mientras pienso en código es exactamente el tipo de problema que quiero seguir resolviendo.",
      },
    },
    },
    cv: {
      headline: "Estudiante de Informática Aplicada • Arquitectura • AEC → Tech",
      summary: "Estudiante multilingüe con sólidas bases en IT, experiencia en atención al cliente y mentalidad práctica ,  apps web, dashboards y prototipos.",
      overview: "Resumen", experience: "Experiencia", skills: "Habilidades", volunteering: "Voluntariado", education: "Educación",
      languagesTitle: "Idiomas", atAGlance: "De un vistazo", clickForDetails: "Haz clic en cualquier tarjeta",
      detailsBtn: "detalles →", activeLabel: "Activo", downloadBtn: "Descargar CV", softSkillsTitle: "Habilidades blandas",
      statLanguages: "Idiomas", statWorkExp: "Exp. laboral", statBackground: "Trasfondo", statFocus: "Enfoque 2025",
      skillWeb: "Desarrollo Web", skillData: "Datos y Herramientas", skillAec: "AEC y Diseño",
      overviewBullets: [
        "Base full-stack (Laravel + Livewire) + dashboards en Qlik Sense",
        "Sólida comunicación y experiencia en atención al cliente",
        "Mentalidad AEC: documentación, QA, coordinación → proyectos tech",
      ],
      softSkills: [
        "Resolución analítica de problemas y depuración",
        "Trabajo en equipo y colaboración (Agile / Scrum)",
        "Adaptabilidad y ganas de aprender",
        "Comunicación clara ,  técnica y no técnica",
        "Gestión del tiempo, responsabilidad, fiabilidad en entregas",
      ],
      languages: [
        { name: "Español",    level: "Nativo" },
        { name: "Inglés",     level: "Fluido" },
        { name: "Neerlandés", level: "Básico (aprendiendo)" },
      ],
      exp: {
        horeca:    { title: "Barman / Camarera (trabajos de estudiante)", subtitle: "Post Restaurant, VOLT, Irish Pub -  Bélgica", bullets: ["Brindé servicio atento en entornos de alta demanda; gestioné pedidos de barra y mesa.", "Preparé cócteles y bebidas según estándares del local y preferencias del cliente.", "Controlé niveles de stock y apoyé en normas de higiene y seguridad."] },
        warehouse: { title: "Asistente de Operaciones y Almacén", subtitle: "Distrilog, Beyers, Greenyard — Bélgica", bullets: ["Empaqueté, clasificé y preparé grandes volúmenes de productos para envío.", "Operé equipos de apilado y enfardado de palés siguiendo procedimientos de seguridad.", "Apoyé flujos logísticos manteniendo los puestos de trabajo limpios y organizados."] },
        sales:     { title: "Representante de Atención al Cliente y Ventas", subtitle: "Teleperformance, Los Portales, Pet Center — Perú y Remoto", bullets: ["Resolví consultas y quejas de clientes buscando alta satisfacción.", "Apliqué upselling/cross-selling para aumentar ventas y fidelidad.", "Gestioné pagos y mantuve registros precisos en entornos de alta demanda."] },
        aec:       { title: "Asistente de Arquitectura y Urbanismo", subtitle: "WAO, TEKTUM, IMP, Municipalidad de Puente Piedra — Perú", bullets: ["Elaboré planos arquitectónicos y urbanísticos en AutoCAD/Revit con flujos BIM.", "Apoyé investigación, análisis de datos y preparación de presentaciones.", "Asistí en inspecciones de obra, documentación, presupuestos y coordinación."] },
      },
      vol: {
        barista: { title: "Barista Voluntaria", subtitle: "The Big C — Bélgica", bullets: ["Preparé y serví bebidas apoyando un espacio comunitario acogedor.", "Gestioné pagos y mantuve una zona de trabajo limpia y segura."] },
      },
      edu: {
        cs:      { title: "Informática Aplicada",               subtitle: "Thomas More University of Applied Sciences — Bélgica" },
        arch:    { title: "Arquitectura y Urbanismo",           subtitle: "Universidad Cesar Vallejo — Perú" },
        autocad: { title: "Certificación AutoCAD Architecture", subtitle: "Universidad Cesar Vallejo — Perú" },
      },
    },
    projects: {
      pill: "Casos de estudio", subtitle: "Contexto, qué construí y qué aprendí ,  escrito para profesionales de IT.",
      statProjects: "Proyectos", statTech: "Tecnologías", statLatest: "Último",
      filterAll: "Todos", emptyState: "Ningún proyecto coincide con este filtro.", viewBtn: "Ver →",
      backBtn: "Volver a proyectos", artifacts: "Recursos", demoVideo: "Video demo",
      openFullscreen: "Pantalla completa →", context: "Contexto", myRole: "Mi rol", stack: "Tecnologías",
      whatBuilt: "Qué construí", whatLearned: "Qué aprendí", gallery: "Galería",
      previous: "Anterior", next: "Siguiente",
    },
    internship: {
      title: "Integración de Hogar Inteligente",
      subtitle: "Prototipo IoT para rutinas nocturnas más seguras para adultos mayores · Mobilab & Care",
      completedLabel: "Completado",
      aboutLabel: "Sobre el proyecto",
      stackLabel: "Tecnologías",
      galleryLabel: "Galería",
      supervisorsLabel: "Supervisores",
      videoCaption: "Demo Hogar Inteligente ,  recorrido nocturno · check-in baño · modo ayuda · aprendizaje adaptativo",
      context: "Prototipo desarrollado en Mobilab & Care (Thomas More Kempen) para apoyar rutinas nocturnas más seguras en adultos mayores que viven de forma independiente. Construido sobre una plataforma Home Assistant controlada localmente ,  sin dependencia de la nube para las funciones de seguridad. El apartamento del Experience Lab sirvió como entorno doméstico de prueba realista.",
      stats: [
        { val: "26", lbl: "Automatizaciones" },
        { val: "5",  lbl: "Zonas" },
        { val: "0",  lbl: "Deps. nube" },
        { val: "4",  lbl: "Entregables" },
        { val: "13", lbl: "Semanas" },
      ],
      tabs: {
        role: {
          label: "Mi Rol",
          items: [
            "Diseñé la arquitectura completa del sistema de 5 capas ,  control, integración, entrada, salida e interfaz.",
            "Construí 26 automatizaciones de Home Assistant que cubren iluminación del camino nocturno, check-in de baño, escalada del modo ayuda y programación adaptativa.",
            "Desarrollé un componente Python/AppDaemon que analiza el historial del modo nocturno y propone actualizaciones de horario para aprobación del usuario.",
            "Configuré el control de voz Alexa mediante un bridge Matter Hub alojado localmente ,  6 rutinas que cubren todos los escenarios clave.",
            "Produje 4 entregables de documentación para reutilización futura: documento de realización, manual de usuario, guía de instalación y manual de mantenimiento.",
          ],
        },
        built: {
          label: "Qué Construí",
          items: [
            "Iluminación del camino nocturno ,  dormitorio al baño al 15–25% de brillo y 2000–2400 K, activada pasivamente por movimiento.",
            "Flujo de check-in de baño ,  temporizador de 5 minutos de inactividad escala a recordatorio visual + sonoro, luego a modo ayuda completo si no hay respuesta.",
            "Modo ayuda ,  todas las luces al 80%, la cerradura Nuki abre automáticamente, alertas de Telegram y WhatsApp se envían simultáneamente.",
            "Componente de aprendizaje adaptativo ,  analiza el historial de activación en una ventana configurable y propone actualizaciones de horario.",
            "Panel de control de 4 vistas ,  control diario (Thuis), recomendaciones (Helper), pruebas espaciales (Plan), inspección de habitaciones (Gebied).",
          ],
        },
        learned: {
          label: "Qué Aprendí",
          items: [
            "Las automatizaciones críticas para la seguridad necesitan una escalada humana ,  el residente debe tener agencia en cada paso, incluso desde el suelo.",
            "Los proyectos dependientes de la red requieren resolver dependencias institucionales desde el principio, no como paso tardío de solución de problemas.",
            "Diseño basado en investigación: cada valor de brillo, temporizador y temperatura de color fue justificado por literatura científica revisada por pares.",
            "Escribir para cuatro audiencias diferentes simultáneamente requiere cuatro registros y niveles de detalle fundamentalmente distintos.",
            "La capacidad del hardware importa desde el inicio ,  un techo de Pi 3B obligó a una migración a Pi 5 a mitad del proyecto con restauración completa de copia de seguridad.",
          ],
        },
      },
    },
  },

  nl: {
    nav: { home: "Home", about: "Over mij", internship: "Stage", projects: "Projecten", cv: "CV" },
    hero: {
      pill: "AEC → Toegepaste Informatica • België",
      title: "Van architect naar ontwikkelaar, AI, vision & IoT-tools bouwen.",
      body:
        "Ik ben architect en stap over naar Toegepaste Informatica in België. Ik verbind BIM/Revit, werfdocumentatie, QA/QC en sitecoördinatie met praktische digitale tools in AI/ML, computer vision, automatisering en datavisualisatie ,  zodat informatie duidelijker, sneller en beter bruikbaar wordt.",
      cta1: "Bekijk Stage",
      cta2: "Bekijk Projecten",
      cta3: "Download CV",
    },
    cards: {
      cv: { title: "Computer Vision", body: "YOLOv8/OpenCV pipeline → homografie, heatmaps & metrics export." },
      auto: { title: "Automatisering", body: "Python/Excel tools voor datacleaning en rapportgeneratie." },
      iot: { title: "IoT Prototypes", body: "Monitoring + alerts voor realistische constraints." },
    },
    sections: {
      find: "Wat je hier vindt",
      findBullets: [
        "Geverifieerde stage-evidence en heldere documentatie.",
        "Project case studies voor IT-professionals.",
        "Concrete learnings,  specifiek, persoonlijk en niet generiek.",
      ],
      quick: "Snelle links",
    },
    about: {
      title: "Over mij",
      p1: "Ik ben Pierina Lopez, een Peruaanse studente in België, momenteel student Applied Computer Science aan Thomas More. Mijn traject begon in architectuur en urbanisme in Peru en groeide na mijn verhuis naar België uit tot een passie voor technologie en IoT.",
      p2: "Ik combineer gestructureerd denken met creatieve expressie, van code en IoT-projecten tot tekenen en fietsen door Europa. Ik hou van problemen oplossen, nieuwe culturen ontdekken en dingen bouwen die ertoe doen.",
      worldTitle: "Mijn wereld in beelden",
      tiles: {
      travel: {
        title: "Reizen",
        text: "Fietsen is de beste manier om te reizen ,  budgetvriendelijk en met prachtige landschappen. Voor verre bestemmingen neem ik een vliegtuig, maar het doel blijft hetzelfde: verbinding maken met andere culturen en leven in andere samenlevingen. Niet de toeristische ervaring, maar de lokale. Plekken ontdekken die alleen locals kennen, de natuur in, verdwalen in de bergen.",
      },
      tattoo: {
        title: "Kunst & tattoo-ontwerp",
        text: "Creativiteit was altijd een passie, al vóór de kunstlessen het een naam gaven. Mijn weg vinden in tatoeages was het perfecte pad ,  kunst laten duren voor een heel leven, op de huid, met betekenis. Elk ontwerp is een klein verhaal dat iemand voor altijd bij zich draagt.",
      },
      arq: {
        title: "Architectuur mindset",
        text: "Kunst en structuur verbinden. Eens een architect, altijd een architect. Begrijpen hoe mensen leven in verschillende soorten gebouwen is iets dat ik leerde liefhebben, en die manier van denken verlaat je nooit echt ,  ze vindt gewoon nieuwe problemen om op te lossen.",
      },
      read: {
        title: "Lezen & schrijven",
        text: "Andermans leven voorstellen in verschillende gebouwen en omgevingen ,  dat deed ik al op school. Schrijven lag altijd op het puntje van mijn vingers. Een van mijn dromen is een boek schrijven, een dat mensen inspireert zoals zoveel boeken mij hebben geïnspireerd.",
      },
      iot: {
        title: "IoT & prototyping",
        text: "Van code naar apparaten ,  ik hou van de magie ervan. Dingen laten werken met een paar letters op een scherm. Het moment dat een sensor reageert of een lamp zich aanpast aan een automatisering: dan klikt er ook iets in mijn hoofd. Die verbinding tussen het digitale en het fysieke is wat me blijft motiveren.",
      },
      video: {
        title: "Een kijkje in mijn wereld",
        text: "Een sensor solderen, een board configureren, het fysieke verbinden met het digitale ,  hier voel ik me het meest in flow. Werken met mijn handen terwijl ik in code denk is precies het soort probleem dat ik wil blijven oplossen.",
      },
    },
    },
    cv: {
      headline: "Student Toegepaste Informatica • Architectuur achtergrond • AEC → Tech",
      summary: "Meertalige student met sterke IT-basis, ervaring in klantenservice en een praktische bouwmentaliteit ,  web apps, dashboards en prototypes.",
      overview: "Overzicht", experience: "Ervaring", skills: "Vaardigheden", volunteering: "Vrijwilligerswerk", education: "Opleiding",
      languagesTitle: "Talen", atAGlance: "In één oogopslag", clickForDetails: "Klik op een kaart voor details",
      detailsBtn: "details →", activeLabel: "Actief", downloadBtn: "Download CV", softSkillsTitle: "Soft skills",
      statLanguages: "Talen", statWorkExp: "Werkervaring", statBackground: "Achtergrond", statFocus: "Focus 2025",
      skillWeb: "Web Dev", skillData: "Data & Tools", skillAec: "AEC & Ontwerp",
      overviewBullets: [
        "Full-stack basis (Laravel + Livewire) + Qlik Sense dashboards",
        "Sterke communicatie + klantgerichte achtergrond",
        "AEC-mindset: documentatie, QA, coördinatie → tech projecten",
      ],
      softSkills: [
        "Analytisch probleemoplossen & debuggen",
        "Teamwork & samenwerking (Agile / Scrum)",
        "Aanpassingsvermogen & leergierigheid",
        "Heldere communicatie ,  technisch & niet-technisch",
        "Tijdsbeheer, verantwoordelijkheid, betrouwbaar op deadlines",
      ],
      languages: [
        { name: "Spaans",     level: "Moedertaal" },
        { name: "Engels",     level: "Vloeiend" },
        { name: "Nederlands", level: "Basis (lerende)" },
      ],
      exp: {
        horeca:    { title: "Barman / Kelner (studentenjobs)", subtitle: "Post Restaurant, VOLT, Irish Pub — België", bullets: ["Attente service in drukke, hoogwaardige omgevingen; beheerde bar- en tafelbestellingen.", "Bereidde cocktails en dranken volgens huisstandaarden en klantwensen.", "Bewaakte voorraadniveaus en ondersteunde hygiëne- en veiligheidsnormen."] },
        warehouse: { title: "Operationeel & Magazijnmedewerker", subtitle: "Distrilog, Beyers, Greenyard — België", bullets: ["Verpakte, sorteerde en bereidde grote hoeveelheden producten voor verzending.", "Bediende palletstapel- en wikkelmachines en volgde veiligheidsprocedures.", "Ondersteunde logistieke workflows door werkstations schoon en georganiseerd te houden."] },
        sales:     { title: "Klantenservice & Verkoopmedewerker", subtitle: "Teleperformance, Los Portales, Pet Center — Peru & Remote", bullets: ["Loste vragen en klachten van klanten op met oog op hoge tevredenheid.", "Gebruikte upselling/cross-selling om verkoop en klantloyaliteit te verhogen.", "Verwerkte betalingen en hield nauwkeurige administratie bij."] },
        aec:       { title: "Medewerker Architectuur & Stedenbouw", subtitle: "WAO, TEKTUM, IMP, Gemeente Puente Piedra — Peru", bullets: ["Produceerde architecturale en stedenbouwkundige tekeningen in AutoCAD/Revit en BIM-workflows.", "Ondersteunde onderzoek, gegevensanalyse en voorbereiding van presentaties.", "Assisteerde bij site-inspecties, documentatie, kostenramingen en coördinatie."] },
      },
      vol: {
        barista: { title: "Vrijwilliger Barista", subtitle: "The Big C — België", bullets: ["Bereidde en serveerde dranken in een gastvrije gemeenschapsruimte.", "Verwerkte betalingen en hield de werkruimte schoon en veilig."] },
      },
      edu: {
        cs:      { title: "Toegepaste Informatica",             subtitle: "Thomas More Hogeschool — België" },
        arch:    { title: "Architectuur en Stedenbouw",         subtitle: "Cesar Vallejo Universiteit — Peru" },
        autocad: { title: "AutoCAD Architecture Certificering", subtitle: "Cesar Vallejo Universiteit — Peru" },
      },
    },
    projects: {
      pill: "Casestudy's", subtitle: "Context, wat ik bouwde en wat ik leerde ,  geschreven voor IT-professionals.",
      statProjects: "Projecten", statTech: "Technologieën", statLatest: "Laatste",
      filterAll: "Alle", emptyState: "Geen projecten gevonden voor dit filter.", viewBtn: "Bekijk →",
      backBtn: "Terug naar projecten", artifacts: "Artefacten", demoVideo: "Demovideo",
      openFullscreen: "Volledig scherm →", context: "Context", myRole: "Mijn rol", stack: "Technologieën",
      whatBuilt: "Wat ik bouwde", whatLearned: "Wat ik leerde", gallery: "Galerij",
      previous: "Vorige", next: "Volgende",
    },
    internship: {
      title: "Smart Home Integratie",
      subtitle: "IoT-prototype voor veiligere nachtelijke routines voor ouderen · Mobilab & Care",
      completedLabel: "Afgerond",
      aboutLabel: "Over het project",
      stackLabel: "Technologieën",
      galleryLabel: "Galerij",
      supervisorsLabel: "Begeleiders",
      videoCaption: "Smart Home Demo ,  nachtpad · badkamer check-in · hulpmodus · adaptief leren",
      context: "Prototype ontwikkeld bij Mobilab & Care (Thomas More Kempen) ter ondersteuning van veiligere nachtelijke routines voor ouderen die zelfstandig wonen. Gebouwd op een lokaal beheerde Home Assistant-omgeving ,  geen cloudafhankelijkheid voor veiligheidsfuncties. Het Experience Lab-appartement fungeerde als realistisch testdomein.",
      stats: [
        { val: "26", lbl: "Automatiseringen" },
        { val: "5",  lbl: "Zones" },
        { val: "0",  lbl: "Cloud-afh." },
        { val: "4",  lbl: "Deliverables" },
        { val: "13", lbl: "Weken" },
      ],
      tabs: {
        role: {
          label: "Mijn Rol",
          items: [
            "Ontwierp de volledige 5-laags systeemarchitectuur ,  besturing, integratie, invoer, uitvoer en interface.",
            "Bouwde 26 Home Assistant-automatiseringen voor nachtpadverlichting, badkamer check-in, hulpmodus-escalatie en adaptieve planning.",
            "Ontwikkelde een Python/AppDaemon-component dat de nachtmodus-geschiedenis analyseert en schema-updates voorstelt ter goedkeuring van de gebruiker.",
            "Configureerde Alexa-spraakbediening via een lokaal gehoste Matter Hub bridge ,  6 routines voor alle sleutelscenario's.",
            "Produceerde 4 documentatiedeliverables voor toekomstig hergebruik: realisatiedocument, gebruikershandleiding, installatiegids en onderhoudshandleiding.",
          ],
        },
        built: {
          label: "Wat Gebouwd",
          items: [
            "Nachtpadverlichting ,  slaapkamer naar badkamer op 15–25% helderheid en 2000–2400 K, passief geactiveerd door beweging.",
            "Badkamer check-in stroom ,  5 minuten inactiviteitsklok escaleert naar visueel + audiosignaal, daarna volledige hulpmodus als er geen reactie is.",
            "Hulpmodus ,  alle lampen op 80%, Nuki-slot opent automatisch, Telegram en WhatsApp-meldingen worden gelijktijdig verzonden.",
            "Adaptief leercomponent ,  analyseert activeringsgeschiedenis over een configureerbaar venster en stelt schema-updates voor.",
            "Dashboard met 4 weergaven ,  dagelijks beheer (Thuis), aanbevelingen (Helper), ruimtelijk testen (Plan), kamerinspectie (Gebied).",
          ],
        },
        learned: {
          label: "Wat Geleerd",
          items: [
            "Veiligheidskritieke automatiseringen vereisen humane escalatie ,  de bewoner moet in elke stap handelingsvermogen hebben, ook vanaf de vloer.",
            "Netwerkafhankelijke projecten vereisen dat institutionele afhankelijkheden vroeg worden opgelost, niet als late probleemoplossingsstap.",
            "Onderzoeksgestuurd ontwerp: elke helderheidswaarde, timer en kleurtemperatuur werd onderbouwd door peer-reviewed literatuur.",
            "Schrijven voor vier verschillende doelgroepen tegelijkertijd vereist vier fundamenteel verschillende registers en detailniveaus.",
            "Hardwarecapaciteit is van het begin af aan belangrijk ,  een Pi 3B-limiet dwong tot een migratie naar Pi 5 midden in het project met volledig back-upherstel.",
          ],
        },
      },
    },
  },
};

// Optional helper (nice for imports)
export function getUI(lang: Lang): UI {
  return ui[lang];
}