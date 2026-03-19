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
};

export const ui: Record<Lang, UI> = {
  en: {
    nav: { home: "Home", about: "About", internship: "Internship", projects: "Projects", cv: "CV" },
    hero: {
      pill: "AEC → Applied Computer Science • Belgium",
      title: "I turn AEC project data into decisions.",
      body:
        "I’m an architect transitioning into Applied Computer Science in Belgium. I bridge BIM/Revit, construction documentation, QA/QC, and site coordination with practical digital tools in AI/ML, computer vision, automation, and data visualization — so information becomes clearer, faster, and easier to act on.",
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
        "Concrete learnings — specific, personal, and non-generic.",
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
          text: "Travel is part of my lifestyle, from weekend bike rides to European adventures, I explore cultures and connect with nature.",
        },
        tattoo: {
          title: "Art & tattoo design",
          text: "Art is where I find flow, through tattoo design and sketching, I channel creativity and emotion into visual forms.",
        },
        arq: {
          title: "Architecture mindset",
          text: "Once an architecture student, I still love beautiful structures, design logic, and cozy coffee-shop coding sessions.",
        },
        read: {
          title: "Reading & writing",
          text: "Reading and writing have always been my companions, a way to reflect, imagine, and document my journey.",
        },
        iot: {
          title: "IoT & prototyping",
          text: "The magic of IoT fascinates me, coding, sensors, and connected devices make ideas come to life.",
        },
        video: {
          title: "A glimpse of my world",
          text: "A short video from my daily life, I like documenting progress and the creative process along the way.",
        },
      },
    },
    
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", internship: "Prácticas", projects: "Proyectos", cv: "CV" },
    hero: {
      pill: "AEC → Ciencias de la Computación Aplicadas • Bélgica",
      title: "Convierto datos AEC en decisiones.",
      body:
        "Soy arquitecta en transición a Ciencias de la Computación Aplicadas en Bélgica. Conecto BIM/Revit, documentación de obra, QA/QC y coordinación en sitio con herramientas digitales prácticas en IA/ML, visión por computador, automatización y visualización de datos — para que la información sea más clara, rápida y accionable.",
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
        "Aprendizajes concretos — específicos, personales y no genéricos.",
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
        text: "Viajar es parte de mi estilo de vida, desde rutas en bici los fines de semana hasta aventuras por Europa, exploro culturas y conecto con la naturaleza.",
      },
      tattoo: {
        title: "Arte y diseño de tatuajes",
        text: "El arte es donde encuentro flow, con diseño de tatuajes y dibujo, canalizo creatividad y emoción en formas visuales.",
      },
      arq: {
        title: "Mentalidad arquitectónica",
        text: "Aunque estudié arquitectura, sigo amando las estructuras bellas, la lógica de diseño y las sesiones de código en cafeterías.",
      },
      read: {
        title: "Lectura y escritura",
        text: "Leer y escribir siempre han sido mis compañeros, una forma de reflexionar, imaginar y documentar mi camino.",
      },
      iot: {
        title: "IoT y prototipado",
        text: "La magia del IoT me fascina, código, sensores y dispositivos conectados hacen que mis ideas cobren vida.",
      },
      video: {
        title: "Un vistazo a mi mundo",
        text: "Un video corto de mi día a día, me gusta documentar el progreso y el proceso creativo.",
      },
    },
    },
  },

  nl: {
    nav: { home: "Home", about: "Over mij", internship: "Stage", projects: "Projecten", cv: "CV" },
    hero: {
      pill: "AEC → Toegepaste Informatica • België",
      title: "Ik zet AEC-data om in beslissingen.",
      body:
        "Ik ben architect en stap over naar Toegepaste Informatica in België. Ik verbind BIM/Revit, werfdocumentatie, QA/QC en sitecoördinatie met praktische digitale tools in AI/ML, computer vision, automatisering en datavisualisatie — zodat informatie duidelijker, sneller en beter bruikbaar wordt.",
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
        text: "Reizen hoort bij mijn levensstijl, van weekendfietstochten tot Europese avonturen. Ik ontdek culturen en kom tot rust in de natuur.",
      },
      tattoo: {
        title: "Kunst & tattoo-ontwerp",
        text: "In kunst vind ik flow, via tattoo-ontwerp en schetsen geef ik creativiteit en emotie vorm.",
      },
      arq: {
        title: "Architectuur mindset",
        text: "Als ex-architectuurstudent hou ik nog steeds van mooie structuren, ontwerp-logica en gezellige coffee-shop coding sessies.",
      },
      read: {
        title: "Lezen & schrijven",
        text: "Lezen en schrijven zijn altijd mijn vaste companions geweest, om te reflecteren, te verbeelden en mijn traject te documenteren.",
      },
      iot: {
        title: "IoT & prototyping",
        text: "De magie van IoT fascineert me, code, sensoren en connected devices brengen ideeën tot leven.",
      },
      video: {
        title: "Een kijkje in mijn wereld",
        text: "Een korte video uit mijn dagelijks leven, ik documenteer graag vooruitgang en het creatieve proces.",
      },
    },
    },
  },
};

// Optional helper (nice for imports)
export function getUI(lang: Lang): UI {
  return ui[lang];
}