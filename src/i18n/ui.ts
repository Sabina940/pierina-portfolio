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
          text: "Bike travel is the best — budget-friendly and the scenery is unmatched. I'll take a plane if the place is too far, but the goal is always the same: connecting with other cultures and living within different societies. Not the tourist experience — the local one. Finding spots only locals know, connecting with nature, getting lost in the mountains.",
        },
        tattoo: {
          title: "Art & tattoo design",
          text: "Creativity was always a passion, even before art classes gave it a name. Finding my way to tattooing was the perfect path — making art last a lifetime, on skin, with meaning. Every design is a small story that stays with someone forever.",
        },
        arq: {
          title: "Architecture mindset",
          text: "Connecting art and structure. Once an architect, always an architect. Trying to understand how people live within different types of buildings is something I learned to love, and that way of thinking never really leaves you — it just finds new problems to solve.",
        },
        read: {
          title: "Reading & writing",
          text: "Imagining other people's lives in different buildings and environments — I did that from school. Writing was always at my fingertips. One of my dreams is to write a book, one that inspires people the way so many books have inspired me.",
        },
        iot: {
          title: "IoT & prototyping",
          text: "From code to devices — I love the magic of it. Making things work with a few letters on a screen. The moment a sensor clicks or a light responds to an automation, something clicks in my head too. That connection between the digital and the physical is what keeps me building.",
        },
        video: {
          title: "A glimpse of my world",
          text: "Soldering a sensor, configuring a board, connecting the physical to the digital — this is where I feel most in flow. Working with my hands while thinking in code is exactly the kind of problem I want to keep solving.",
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
        text: "Viajar en bici es lo mejor — económico y con paisajes increíbles. Tomo un avión si el lugar está muy lejos, pero el objetivo siempre es el mismo: conectar con otras culturas y vivir dentro de diferentes sociedades. No la experiencia turística, sino la local. Encontrar lugares que solo conocen los de allí, conectar con la naturaleza, perderse en las montañas.",
      },
      tattoo: {
        title: "Arte y diseño de tatuajes",
        text: "La creatividad siempre fue una pasión, incluso antes de que las clases de arte le dieran nombre. Encontrar mi camino en el tatuaje fue el paso perfecto — hacer que el arte dure toda una vida, en la piel, con significado. Cada diseño es una pequeña historia que acompaña a alguien para siempre.",
      },
      arq: {
        title: "Mentalidad arquitectónica",
        text: "Conectar el arte con la estructura. Una vez arquitecta, siempre arquitecta. Intentar entender cómo vive la gente en distintos tipos de edificios es algo que aprendí a amar, y esa forma de pensar nunca te abandona del todo — simplemente encuentra nuevos problemas que resolver.",
      },
      read: {
        title: "Lectura y escritura",
        text: "Imaginar la vida de otras personas en distintos edificios y entornos fue algo que hice desde la escuela. Escribir siempre estuvo en la punta de mis dedos. Uno de mis sueños es escribir un libro, uno que inspire a las personas como tantos libros me han inspirado a mí.",
      },
      iot: {
        title: "IoT y prototipado",
        text: "Del código a los dispositivos — amo la magia de eso. Hacer que las cosas funcionen con unas pocas letras en la pantalla. El momento en que un sensor responde o una luz reacciona a una automatización, algo también hace clic en mi cabeza. Esa conexión entre lo digital y lo físico es lo que me impulsa a seguir construyendo.",
      },
      video: {
        title: "Un vistazo a mi mundo",
        text: "Soldar un sensor, configurar una placa, conectar lo físico con lo digital — aquí es donde más me siento en flow. Trabajar con las manos mientras pienso en código es exactamente el tipo de problema que quiero seguir resolviendo.",
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
        text: "Fietsen is de beste manier om te reizen — budgetvriendelijk en met prachtige landschappen. Voor verre bestemmingen neem ik een vliegtuig, maar het doel blijft hetzelfde: verbinding maken met andere culturen en leven in andere samenlevingen. Niet de toeristische ervaring, maar de lokale. Plekken ontdekken die alleen locals kennen, de natuur in, verdwalen in de bergen.",
      },
      tattoo: {
        title: "Kunst & tattoo-ontwerp",
        text: "Creativiteit was altijd een passie, al vóór de kunstlessen het een naam gaven. Mijn weg vinden in tatoeages was het perfecte pad — kunst laten duren voor een heel leven, op de huid, met betekenis. Elk ontwerp is een klein verhaal dat iemand voor altijd bij zich draagt.",
      },
      arq: {
        title: "Architectuur mindset",
        text: "Kunst en structuur verbinden. Eens een architect, altijd een architect. Begrijpen hoe mensen leven in verschillende soorten gebouwen is iets dat ik leerde liefhebben, en die manier van denken verlaat je nooit echt — ze vindt gewoon nieuwe problemen om op te lossen.",
      },
      read: {
        title: "Lezen & schrijven",
        text: "Andermans leven voorstellen in verschillende gebouwen en omgevingen — dat deed ik al op school. Schrijven lag altijd op het puntje van mijn vingers. Een van mijn dromen is een boek schrijven, een dat mensen inspireert zoals zoveel boeken mij hebben geïnspireerd.",
      },
      iot: {
        title: "IoT & prototyping",
        text: "Van code naar apparaten — ik hou van de magie ervan. Dingen laten werken met een paar letters op een scherm. Het moment dat een sensor reageert of een lamp zich aanpast aan een automatisering: dan klikt er ook iets in mijn hoofd. Die verbinding tussen het digitale en het fysieke is wat me blijft motiveren.",
      },
      video: {
        title: "Een kijkje in mijn wereld",
        text: "Een sensor solderen, een board configureren, het fysieke verbinden met het digitale — hier voel ik me het meest in flow. Werken met mijn handen terwijl ik in code denk is precies het soort probleem dat ik wil blijven oplossen.",
      },
    },
    },
  },
};

// Optional helper (nice for imports)
export function getUI(lang: Lang): UI {
  return ui[lang];
}