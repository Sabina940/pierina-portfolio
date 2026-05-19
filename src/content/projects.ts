export type Project = {
  slug: string;
  title: string;
  videoSrc?: string;
  subtitle: string;
  year: string;
  tags: string[];
  cover: string;
  links?: { label: string; href: string }[];
  sections: {
    context: string;
    role: string[];
    stack: string[];
    built: string[];
    learned: string[];
  };
  gallery: { src: string; alt: string }[];
};

type Lang = "en" | "es" | "nl";

type ProjectTranslation = {
  title: string;
  subtitle: string;
  sections: {
    context: string;
    role: string[];
    built: string[];
    learned: string[];
  };
};

type RawProject = {
  slug: string;
  year: string;
  tags: string[];
  cover: string;
  videoSrc?: string;
  links?: { label: string; href: string }[];
  stack: string[];
  gallery: { src: string; alt: string }[];
  translations: Record<Lang, ProjectTranslation>;
};

const raw: RawProject[] = [

  // ── EchoTrack ─────────────────────────────────────────────────────────────
  {
    slug: "echotrack",
    year: "2025",
    tags: ["AI", "NLP", "RAG", "Streamlit", "Grafana", "DevOps", "Security"],
    cover: "/assets/projects/echotrack/cover.png",
    links: [
      { label: "Demo deck (PDF)", href: "/assets/projects/echotrack/demo-pwp.pdf" },
    ],
    stack: [
      "FastAPI + WebSockets (real-time streaming)",
      "Faster-Whisper (speech-to-text)",
      "Ollama (local LLM inference)",
      "RAG concept + feedback learning loop",
      "Docker / GitLab CI (deployment pipeline)",
      "Grafana / Streamlit (dashboard & monitoring)",
      "Security considerations (safe outputs + constrained schema)",
    ],
    gallery: [
      { src: "/assets/projects/echotrack/slide-demo.png", alt: "Demo UI" },
      { src: "/assets/projects/echotrack/slide-agents.png", alt: "Agents and roles overview" },
      { src: "/assets/projects/echotrack/slide-ingestion.png", alt: "Ingestion pipeline" },
      { src: "/assets/projects/echotrack/group.jpeg", alt: "Team photo" },
      { src: "/assets/projects/echotrack/team-1.JPG", alt: "Working session" },
      { src: "/assets/projects/echotrack/team-2.JPG", alt: "Working session" },
    ],
    translations: {
      en: {
        title: "EchoTrack",
        subtitle: "Trackle project — AI-assisted incident calls with transcript, suggestions, and feedback loop",
        sections: {
          context:
            "Prototype to support railway incident calls in real time: stream the incoming call, generate a live transcript, extract key signals (location, urgency, incident type), propose dispatcher-safe actions, and capture dispatcher feedback to improve future recommendations through a Retrieval-Augmented Generation (RAG) + learning loop.",
          role: [
            "AI focus: worked on the end-to-end AI pipeline behavior (live transcript → structured interpretation → suggested actions).",
            "Helped define how service/urgency and keywords are generated and validated for reliability in noisy real-world audio.",
            "Supported the demo narrative, documentation, and evaluation points (accuracy vs latency trade-offs).",
          ],
          built: [
            "Real-time pipeline: audio streaming → chunked transcription → structured JSON output (priority, language, transcript fields, keywords, actions).",
            "Keyword + escalation logic with a fail-safe approach: LLM-first interpretation backed by heuristic fallback when output is missing/invalid/uncertain.",
            "Demo flow showing how dispatchers receive suggestions during a call and how feedback is collected for continuous improvement.",
          ],
          learned: [
            "Live systems need strong state management: rolling windows, deduplication by time buckets, and throttling updates to avoid noise and spam.",
            "Speech-to-text performance has a practical speed vs accuracy trade-off (especially with dialect/noise), which directly impacts downstream recommendations.",
            "How to structure AI outputs into strict, app-friendly contracts and validate them for safety and consistency.",
            "Why testing and validation take longer than building: tuning thresholds, reducing false positives, and aligning outputs with operational procedures.",
          ],
        },
      },
      es: {
        title: "EchoTrack",
        subtitle: "Proyecto Trackle — llamadas de incidentes asistidas por IA con transcripción, sugerencias y ciclo de retroalimentación",
        sections: {
          context:
            "Prototipo para apoyar llamadas de incidentes ferroviarios en tiempo real: transmite la llamada entrante, genera una transcripción en vivo, extrae señales clave (ubicación, urgencia, tipo de incidente), propone acciones seguras para el despachador y captura la retroalimentación para mejorar futuras recomendaciones mediante RAG + ciclo de aprendizaje.",
          role: [
            "Enfoque en IA: trabajé en el comportamiento del pipeline de IA de extremo a extremo (transcripción en vivo → interpretación estructurada → acciones sugeridas).",
            "Ayudé a definir cómo se generan y validan el servicio/urgencia y las palabras clave para garantizar confiabilidad en audio real con ruido.",
            "Apoyé la narrativa del demo, la documentación y los puntos de evaluación (compensaciones entre precisión y latencia).",
          ],
          built: [
            "Pipeline en tiempo real: transmisión de audio → transcripción por fragmentos → salida JSON estructurada (prioridad, idioma, campos de transcripción, palabras clave, acciones).",
            "Lógica de palabras clave y escalamiento con enfoque a prueba de fallos: interpretación primero por LLM con respaldo heurístico cuando la salida falta/es inválida/incierta.",
            "Flujo del demo que muestra cómo los despachadores reciben sugerencias durante una llamada y cómo se recopila la retroalimentación para mejora continua.",
          ],
          learned: [
            "Los sistemas en vivo necesitan una gestión de estado sólida: ventanas deslizantes, deduplicación por intervalos de tiempo y aceleración de actualizaciones para evitar ruido y spam.",
            "El rendimiento del reconocimiento de voz tiene una compensación práctica entre velocidad y precisión (especialmente con dialectos/ruido), lo que impacta directamente las recomendaciones posteriores.",
            "Cómo estructurar salidas de IA en contratos estrictos y amigables para la aplicación, y validarlos para seguridad y consistencia.",
            "Por qué las pruebas y la validación llevan más tiempo que construir: ajustar umbrales, reducir falsos positivos y alinear salidas con procedimientos operativos.",
          ],
        },
      },
      nl: {
        title: "EchoTrack",
        subtitle: "Trackle-project — AI-ondersteunde incidentgesprekken met transcriptie, suggesties en feedbackloop",
        sections: {
          context:
            "Prototype om spoorwegincidentgesprekken in real time te ondersteunen: de inkomende oproep streamen, een live transcript genereren, sleutelsignalen extraheren (locatie, urgentie, incidenttype), veilige acties voor de dispatcher voorstellen en feedback vastleggen om toekomstige aanbevelingen via een RAG + leerloop te verbeteren.",
          role: [
            "AI-focus: werkte aan het end-to-end gedrag van de AI-pipeline (live transcript → gestructureerde interpretatie → voorgestelde acties).",
            "Hielp definiëren hoe dienst/urgentie en sleutelwoorden worden gegenereerd en gevalideerd voor betrouwbaarheid in ruisachtige real-world audio.",
            "Ondersteunde de demovertelling, documentatie en evaluatiepunten (afwegingen nauwkeurigheid vs. latentie).",
          ],
          built: [
            "Real-time pipeline: audiostreaming → gefragmenteerde transcriptie → gestructureerde JSON-uitvoer (prioriteit, taal, transcriptievelden, sleutelwoorden, acties).",
            "Sleutelwoord- en escalatielogica met een veilige aanpak: LLM-eerste interpretatie met heuristische terugval wanneer uitvoer ontbreekt/ongeldig/onzeker is.",
            "Demoloop die laat zien hoe dispatchers suggesties ontvangen tijdens een gesprek en hoe feedback wordt verzameld voor continue verbetering.",
          ],
          learned: [
            "Live systemen vereisen sterk statusbeheer: schuifvensters, deduplicatie op tijdsbuckets en het beperken van updates om ruis en spam te voorkomen.",
            "Spraak-naar-tekst prestaties hebben een praktische afweging tussen snelheid en nauwkeurigheid (vooral met dialect/ruis), die direct invloed heeft op aanbevelingen stroomafwaarts.",
            "Hoe AI-uitvoer te structureren in strikte, app-vriendelijke contracten en deze te valideren voor veiligheid en consistentie.",
            "Waarom testen en validatie langer duurt dan bouwen: drempelwaarden afstemmen, valse positieven verminderen en uitvoer afstemmen op operationele procedures.",
          ],
        },
      },
    },
  },

  // ── Chef Tutor ────────────────────────────────────────────────────────────
  {
    slug: "chef-tutor",
    year: "2025",
    tags: ["NLP", "RAG", "LangChain", "LangGraph", "ChromaDB", "Ollama", "Streamlit", "Python"],
    cover: "/assets/projects/chef-tutor/cover.png",
    videoSrc: "/assets/projects/chef-tutor/demo.mov",
    links: [
      { label: "Slides (PDF)", href: "/assets/projects/chef-tutor/Polish%20%C3%97%20Peruvian%20Chef%20Tutor.pdf" },
      { label: "Project report (PDF)", href: "/assets/projects/chef-tutor/Report%20NLP.pdf" },
    ],
    stack: ["Python", "Streamlit", "ChromaDB", "LangChain", "LangGraph", "Ollama (local Llama)", "Embeddings", "RAG tools"],
    gallery: [
      { src: "/assets/projects/chef-tutor/1.png", alt: "1" },
      { src: "/assets/projects/chef-tutor/2.png", alt: "2" },
      { src: "/assets/projects/chef-tutor/3.png", alt: "3" },
      { src: "/assets/projects/chef-tutor/4.png", alt: "4" },
    ],
    translations: {
      en: {
        title: "Polish × Peruvian Chef Tutor",
        subtitle: "Multilingual RAG cooking assistant — LangGraph agents + ChromaDB + local LLM",
        sections: {
          context:
            "Built a multilingual, RAG-powered cooking assistant that answers questions about Polish and Peruvian recipes, explains techniques, and can generate fusion ideas. It learns from a private cookbook knowledge base (PDFs) instead of giving generic recipes.",
          role: [
            "Designed the end-to-end RAG pipeline: ingest PDFs/text, chunk, embed, store in ChromaDB, retrieve and inject tool context.",
            "Built and orchestrated multiple chef agents (Polish, Peruvian, fusion, nutrition, quiz, history) with LangGraph routing.",
            "Implemented the Streamlit chat UI with PDF upload → ingestion → immediate availability in the assistant.",
          ],
          built: [
            "Ingestion pipeline (text + PDFs) with chunking and vector storage in ChromaDB.",
            "Agent router that selects the right chef persona + tools per user request.",
            "Tooling layer for retrieval + unit conversion + nutrition hints.",
            "Streamlit interface with chat + PDF upload + re-ingestion trigger.",
          ],
          learned: [
            "How to structure multi-agent orchestration so outputs stay consistent and grounded.",
            "Practical tradeoffs of running local LLMs (privacy + speed vs. language polish).",
            "How to measure and debug retrieval quality (query phrasing vs. source text).",
          ],
        },
      },
      es: {
        title: "Chef Tutor Polaco × Peruano",
        subtitle: "Asistente de cocina RAG multilingüe — agentes LangGraph + ChromaDB + LLM local",
        sections: {
          context:
            "Construimos un asistente de cocina multilingüe impulsado por RAG que responde preguntas sobre recetas polacas y peruanas, explica técnicas y puede generar ideas de fusión. Aprende de una base de conocimientos privada (PDFs) en lugar de dar recetas genéricas.",
          role: [
            "Diseñé el pipeline RAG de extremo a extremo: ingestión de PDFs/texto, fragmentación, embedding, almacenamiento en ChromaDB, recuperación e inyección de contexto de herramientas.",
            "Construí y orquesté múltiples agentes chef (polaco, peruano, fusión, nutrición, quiz, historia) con enrutamiento LangGraph.",
            "Implementé la interfaz de chat en Streamlit con carga de PDF → ingestión → disponibilidad inmediata en el asistente.",
          ],
          built: [
            "Pipeline de ingestión (texto + PDFs) con fragmentación y almacenamiento vectorial en ChromaDB.",
            "Enrutador de agentes que selecciona la persona chef correcta + herramientas por solicitud del usuario.",
            "Capa de herramientas para recuperación + conversión de unidades + pistas nutricionales.",
            "Interfaz Streamlit con chat + carga de PDF + disparador de re-ingestión.",
          ],
          learned: [
            "Cómo estructurar la orquestación multiagente para que los resultados sean consistentes y fundamentados.",
            "Compensaciones prácticas de ejecutar LLMs locales (privacidad + velocidad vs. calidad del lenguaje).",
            "Cómo medir y depurar la calidad de recuperación (formulación de consultas vs. texto fuente).",
          ],
        },
      },
      nl: {
        title: "Pools × Peruaanse Chef Tutor",
        subtitle: "Meertalige RAG kookassistent — LangGraph-agenten + ChromaDB + lokale LLM",
        sections: {
          context:
            "Een meertalige, RAG-aangedreven kookassistent gebouwd die vragen beantwoordt over Poolse en Peruaanse recepten, technieken uitlegt en fusieideeën kan genereren. Het leert van een privé kennisbank (PDF's) in plaats van generieke recepten te geven.",
          role: [
            "Ontwierp de end-to-end RAG-pipeline: PDF's/tekst ingesteren, chunken, embedden, opslaan in ChromaDB, ophalen en toolcontext injecteren.",
            "Bouwde en orkestreerde meerdere chef-agenten (Pools, Peruaans, fusie, voeding, quiz, geschiedenis) met LangGraph-routing.",
            "Implementeerde de Streamlit-chat-UI met PDF-upload → ingestie → onmiddellijke beschikbaarheid in de assistent.",
          ],
          built: [
            "Ingestiepipeline (tekst + PDF's) met chunking en vectoropslag in ChromaDB.",
            "Agentrouter die de juiste chef-persona + tools selecteert per gebruikersverzoek.",
            "Toollaag voor ophalen + eenheidsconversie + voedingshints.",
            "Streamlit-interface met chat + PDF-upload + re-ingestietrigger.",
          ],
          learned: [
            "Hoe multi-agentorkestratie te structureren zodat uitvoer consistent en gefundeerd blijft.",
            "Praktische afwegingen van het uitvoeren van lokale LLM's (privacy + snelheid vs. taalkwaliteit).",
            "Hoe retrievalkwaliteit te meten en te debuggen (queryformulering vs. brontekst).",
          ],
        },
      },
    },
  },

  // ── Tennis Analytics ──────────────────────────────────────────────────────
  {
    slug: "tennis-analytics",
    year: "2025",
    tags: ["Computer Vision", "YOLOv8", "OpenCV", "Roboflow", "Streamlit", "Homography"],
    cover: "/assets/projects/tennis-analytics/cover.png",
    videoSrc: "/assets/projects/tennis-analytics/demo_h264.mp4",
    links: [
      { label: "Project brief (PDF)", href: "/assets/projects/tennis-analytics/Project%20Brief%20Deck.pdf" },
      { label: "Project report (PDF)", href: "/assets/projects/tennis-analytics/Project%20Report.pdf" },
    ],
    stack: ["YOLOv8", "OpenCV", "Roboflow", "Streamlit", "Homography", "Python"],
    gallery: [
      { src: "/assets/projects/tennis-analytics/1.png", alt: "Mini-court projection" },
      { src: "/assets/projects/tennis-analytics/overview.png", alt: "Pipeline overview" },
      { src: "/assets/projects/tennis-analytics/data.png", alt: "Dataset stats" },
      { src: "/assets/projects/tennis-analytics/annotation.png", alt: "Annotation workflow" },
    ],
    translations: {
      en: {
        title: "Tennis Sports Analytics",
        subtitle: "Computer Vision Challenge — player/ball detection + mini-court + heatmaps",
        sections: {
          context:
            "Built a system that takes a tennis video, detects what's happening, and displays results clearly on one screen: player/ball detection plus a mini-court visualization for analysis.",
          role: [
            "Helped design the full pipeline from video → detections → mini-court projection.",
            "Worked with pretrained YOLOv8 models for player/ball detection and trained a model for court zones.",
            "Contributed to the visualization layer and analysis add-ons (heatmaps/metrics).",
          ],
          built: [
            "Frame extraction from tennis videos (~2 FPS) for faster iteration.",
            "Court-zone dataset annotated in Roboflow (82 images; train/val/test split).",
            "Mini-court projection with homography + overlay of player/ball positions.",
            "Streamlit interface to visualize detections and tracking outputs.",
          ],
          learned: [
            "Practical tradeoffs of object detection in sports footage (occlusions, small fast objects).",
            "How homography enables clean top-down analytics from angled video.",
            "How to communicate CV pipelines clearly (report + demo artifacts).",
          ],
        },
      },
      es: {
        title: "Análisis Deportivo de Tenis",
        subtitle: "Computer Vision Challenge — detección de jugadores/pelota + mini-cancha + mapas de calor",
        sections: {
          context:
            "Construimos un sistema que toma un video de tenis, detecta lo que está pasando y muestra los resultados claramente en una pantalla: detección de jugadores/pelota más una visualización de mini-cancha para análisis.",
          role: [
            "Ayudé a diseñar el pipeline completo desde video → detecciones → proyección en mini-cancha.",
            "Trabajé con modelos YOLOv8 preentrenados para la detección de jugadores/pelota y entrené un modelo para zonas de cancha.",
            "Contribuí a la capa de visualización y complementos de análisis (mapas de calor/métricas).",
          ],
          built: [
            "Extracción de fotogramas de videos de tenis (~2 FPS) para iteración más rápida.",
            "Conjunto de datos de zonas de cancha anotado en Roboflow (82 imágenes; división entrenamiento/validación/prueba).",
            "Proyección de mini-cancha con homografía + superposición de posiciones de jugadores/pelota.",
            "Interfaz Streamlit para visualizar detecciones y resultados de seguimiento.",
          ],
          learned: [
            "Compensaciones prácticas de la detección de objetos en video deportivo (oclusiones, objetos pequeños y rápidos).",
            "Cómo la homografía permite un análisis limpio desde arriba a partir de video con ángulo.",
            "Cómo comunicar pipelines de visión por computadora claramente (informe + artefactos del demo).",
          ],
        },
      },
      nl: {
        title: "Tennis Sportanalyse",
        subtitle: "Computer Vision Challenge — speler/bal-detectie + mini-court + heatmaps",
        sections: {
          context:
            "Een systeem gebouwd dat een tennisvideo neemt, detecteert wat er gebeurt en de resultaten duidelijk op één scherm weergeeft: speler/bal-detectie plus een mini-courtvisualisatie voor analyse.",
          role: [
            "Hielp de volledige pipeline te ontwerpen van video → detecties → mini-courtprojectie.",
            "Werkte met voorgetrainde YOLOv8-modellen voor speler/bal-detectie en trainde een model voor courtzones.",
            "Droeg bij aan de visualisatielaag en analyseaanvullingen (heatmaps/metrics).",
          ],
          built: [
            "Frame-extractie uit tennisvideo's (~2 FPS) voor snellere iteratie.",
            "Courtzone-dataset geannoteerd in Roboflow (82 afbeeldingen; train/val/test-splits).",
            "Mini-courtprojectie met homografie + overlay van speler/balposities.",
            "Streamlit-interface om detecties en tracking-uitvoer te visualiseren.",
          ],
          learned: [
            "Praktische afwegingen van objectdetectie in sportbeelden (occlusies, kleine snelle objecten).",
            "Hoe homografie schone bovenaanzichtanalyse mogelijk maakt vanuit hoekvideo.",
            "Hoe CV-pipelines duidelijk te communiceren (rapport + demo-artefacten).",
          ],
        },
      },
    },
  },

  // ── Dinosaur Challenge ────────────────────────────────────────────────────
  {
    slug: "dinosaur-challenge",
    year: "2024",
    tags: ["AI", "Deep Learning", "Computer Vision", "Python", "Keras", "TensorFlow", "Kaggle"],
    cover: "/assets/projects/dinosaur-challenge/cover.png",
    links: [
      { label: "Read report (PDF)", href: "/assets/projects/dinosaur-challenge/deep-learning.pdf" },
      { label: "GitHub (DL folder)", href: "https://github.com/PierinaLopez/AI-Challenges/tree/main/DL" },
    ],
    stack: [
      "Python",
      "TensorFlow / Keras",
      "CNN",
      "Transfer learning (MobileNetV2)",
      "Model evaluation (confusion matrix, reports)",
      "Ensembling + test-time augmentation (TTA)",
    ],
    gallery: [
      { src: "/assets/projects/dinosaur-challenge/eda.png", alt: "EDA — class distribution / samples" },
      { src: "/assets/projects/dinosaur-challenge/mobilenetv2.png", alt: "MobileNetV2 transfer learning / confusion matrix" },
      { src: "/assets/projects/dinosaur-challenge/ensemble.png", alt: "Optimized ensemble results" },
    ],
    translations: {
      en: {
        title: "Dinosaur Challenge (Deep Learning)",
        subtitle: "Image classification — CNN from scratch, transfer learning, and an optimized ensemble",
        sections: {
          context:
            "Deep learning image-classification challenge using dinosaur classes. I explored the dataset (EDA), built a CNN baseline, tried transfer learning, evaluated multiple architectures, and improved results with an ensemble approach.",
          role: [
            "Owned the full pipeline: preprocessing, training loops, evaluation, and reporting.",
            "Designed experiments across baseline CNN, MobileNetV2 transfer learning + fine-tuning, and other architectures.",
          ],
          built: [
            "Baseline CNN and improved CNN (deeper + dropout) to benchmark performance.",
            "MobileNetV2 transfer learning and a fine-tuned variant.",
            "Multi-model experimentation + an optimized ensemble using cross-validated weighting and TTA.",
          ],
          learned: [
            "How transfer learning compares to a CNN trained from scratch on a limited dataset.",
            "How to read confusion matrices to spot class-specific weaknesses and guide iterations.",
            "How ensembling can mitigate individual model weaknesses and boost overall accuracy.",
          ],
        },
      },
      es: {
        title: "Dinosaur Challenge (Deep Learning)",
        subtitle: "Clasificación de imágenes — CNN desde cero, transfer learning y un ensemble optimizado",
        sections: {
          context:
            "Desafío de clasificación de imágenes de deep learning usando clases de dinosaurios. Exploré el conjunto de datos (EDA), construí una CNN base, probé transfer learning, evalué múltiples arquitecturas y mejoré los resultados con un enfoque de ensemble.",
          role: [
            "Responsable del pipeline completo: preprocesamiento, bucles de entrenamiento, evaluación e informes.",
            "Diseñé experimentos con CNN base, transfer learning con MobileNetV2 + ajuste fino y otras arquitecturas.",
          ],
          built: [
            "CNN base y CNN mejorada (más profunda + dropout) para medir el rendimiento de referencia.",
            "Transfer learning con MobileNetV2 y una variante ajustada.",
            "Experimentación con múltiples modelos + ensemble optimizado usando ponderación validada cruzadamente y TTA.",
          ],
          learned: [
            "Cómo el transfer learning se compara con una CNN entrenada desde cero en un conjunto de datos limitado.",
            "Cómo leer matrices de confusión para identificar debilidades específicas por clase y guiar iteraciones.",
            "Cómo el ensemble puede mitigar las debilidades de modelos individuales y mejorar la precisión general.",
          ],
        },
      },
      nl: {
        title: "Dinosaurus Challenge (Deep Learning)",
        subtitle: "Beeldclassificatie — CNN vanaf nul, transfer learning en een geoptimaliseerd ensemble",
        sections: {
          context:
            "Deep learning beeldclassificatieuitdaging met dinosaurusklassen. Ik verkende de dataset (EDA), bouwde een baseline-CNN, probeerde transfer learning, evalueerde meerdere architecturen en verbeterde de resultaten met een ensemble-aanpak.",
          role: [
            "Eigenaar van de volledige pipeline: preprocessing, trainingslussen, evaluatie en rapportage.",
            "Ontwierp experimenten met baseline-CNN, MobileNetV2 transfer learning + fine-tuning en andere architecturen.",
          ],
          built: [
            "Baseline-CNN en verbeterde CNN (dieper + dropout) om prestaties te benchmarken.",
            "MobileNetV2 transfer learning en een gefijnafgestelde variant.",
            "Multi-model experimentatie + geoptimaliseerd ensemble met kruisgevalideerde weging en TTA.",
          ],
          learned: [
            "Hoe transfer learning zich verhoudt tot een CNN die van nul af getraind is op een beperkte dataset.",
            "Hoe verwarringsmatrices te lezen om klasse-specifieke zwaktes te herkennen en iteraties te sturen.",
            "Hoe ensembling individuele modelzwaktes kan verzachten en de algehele nauwkeurigheid kan verhogen.",
          ],
        },
      },
    },
  },

  // ── CampusBridge ──────────────────────────────────────────────────────────
  {
    slug: "campusbridge",
    year: "2024",
    tags: ["Web", "Agile", "UX", "PHP", "MySQL"],
    cover: "/assets/projects/campusbridge/cover.png",
    links: [
      { label: "View Project Analysis (PDF)", href: "/assets/Analysis and design report EN_template.pdf" },
      { label: "View Figma Prototype", href: "https://www.figma.com/..." },
    ],
    stack: ["HTML/CSS", "Bootstrap", "PHP", "MySQL", "Jira", "Figma"],
    gallery: [
      { src: "/assets/projects/campusbridge/figma.png", alt: "Figma prototype" },
      { src: "/assets/projects/campusbridge/page.png", alt: "Implementation page" },
      { src: "/assets/projects/campusbridge/jira.png", alt: "Jira board" },
      { src: "/assets/projects/campusbridge/team.jpg", alt: "Team working session" },
    ],
    translations: {
      en: {
        title: "CampusBridge",
        subtitle: "Streamlining admissions for incoming degree & exchange students",
        sections: {
          context:
            "Group project for SKIL2 — building a system for the International Office to simplify admin processes for new international students. Based on an inherited concept, our team restructured and modernized the approach.",
          role: [
            "Scrum Master (facilitated sprints, retrospectives, alignment).",
            "Contributed to analysis updates, UML/data model iterations, and UI flow decisions.",
          ],
          built: [
            "Admin panel for managing students and nominations.",
            "Buddy assignment request + approval flow.",
            "Bike rentals and landlord profile management.",
          ],
          learned: [
            "Handling friction in a team and keeping momentum through retrospectives.",
            "Balancing stakeholder needs with technical constraints.",
            "Improving inherited projects without breaking scope.",
          ],
        },
      },
      es: {
        title: "CampusBridge",
        subtitle: "Simplificando las admisiones para estudiantes de grado e intercambio",
        sections: {
          context:
            "Proyecto grupal para SKIL2 — construir un sistema para la Oficina Internacional para simplificar los procesos administrativos de nuevos estudiantes internacionales. Basado en un concepto heredado, nuestro equipo reestructuró y modernizó el enfoque.",
          role: [
            "Scrum Master (facilitó sprints, retrospectivas y alineación).",
            "Contribuyó a actualizaciones de análisis, iteraciones de UML/modelo de datos y decisiones de flujo de UI.",
          ],
          built: [
            "Panel de administración para gestionar estudiantes y nominaciones.",
            "Flujo de solicitud + aprobación de asignación de buddy.",
            "Gestión de alquiler de bicicletas y perfiles de propietarios.",
          ],
          learned: [
            "Manejar la fricción en un equipo y mantener el impulso a través de retrospectivas.",
            "Equilibrar las necesidades de los stakeholders con las limitaciones técnicas.",
            "Mejorar proyectos heredados sin romper el alcance.",
          ],
        },
      },
      nl: {
        title: "CampusBridge",
        subtitle: "Toelatingsprocessen stroomlijnen voor graad- en uitwisselingsstudenten",
        sections: {
          context:
            "Groepsproject voor SKIL2 — een systeem bouwen voor het Internationaal Kantoor om administratieve processen voor nieuwe internationale studenten te vereenvoudigen. Gebaseerd op een overgeërfd concept, heeft ons team de aanpak geherstructureerd en gemoderniseerd.",
          role: [
            "Scrum Master (faciliteerde sprints, retrospectives en afstemming).",
            "Droeg bij aan analysewijzigingen, UML/datamodel-iteraties en UI-flowbeslissingen.",
          ],
          built: [
            "Beheerpaneel voor het beheren van studenten en nominaties.",
            "Buddy-toewijzingsverzoek + goedkeuringsflow.",
            "Fietsverhuur en verhuurderprofielbeheer.",
          ],
          learned: [
            "Omgaan met wrijving in een team en momentum behouden via retrospectives.",
            "Stakeholderbehoeften in balans brengen met technische beperkingen.",
            "Overgeërfde projecten verbeteren zonder de scope te doorbreken.",
          ],
        },
      },
    },
  },

  // ── Face Recognition ──────────────────────────────────────────────────────
  {
    slug: "face-recognition",
    year: "2022",
    tags: ["IoT", "Computer Vision", "Python", "Raspberry Pi"],
    cover: "/assets/projects/face-recognition/cover.png",
    links: [
      { label: "Watch on YouTube", href: "https://youtu.be/hwamn3hPTVY?si=suaDxCcYDtc-m8G4" },
      { label: "Download Project Code (ZIP)", href: "/assets/Projects-WH.zip" },
    ],
    stack: ["Python", "OpenCV", "dlib", "Flask", "GPIO", "Twilio", "SMTP"],
    gallery: [
      { src: "/assets/projects/face-recognition/iot-1.png", alt: "Project screenshot 1" },
      { src: "/assets/projects/face-recognition/iot-2.png", alt: "Project screenshot 2" },
    ],
    translations: {
      en: {
        title: "Face Recognition System",
        subtitle: "Raspberry Pi prototype using OpenCV + dlib with alerts and automation",
        sections: {
          context:
            "Individual project for SKIL1 combining software and hardware to solve a real-world IoT challenge.",
          role: [
            "Set up Raspberry Pi hardware and sensors.",
            "Integrated face recognition using OpenCV + dlib.",
            "Implemented real-time alerts via SMS/email and automated lighting behaviour.",
          ],
          built: [
            "Face-based welcome/notification flow.",
            "Light automation based on sensor input.",
            "Alerting workflow (SMS + email).",
          ],
          learned: [
            "End-to-end integration between sensors, CV, and external APIs.",
            "Deploying and documenting an embedded prototype.",
            "Designing simple flows that still work reliably in real time.",
          ],
        },
      },
      es: {
        title: "Sistema de Reconocimiento Facial",
        subtitle: "Prototipo Raspberry Pi con OpenCV + dlib con alertas y automatización",
        sections: {
          context:
            "Proyecto individual para SKIL1 que combina software y hardware para resolver un desafío IoT del mundo real.",
          role: [
            "Configuré el hardware y los sensores de la Raspberry Pi.",
            "Integré reconocimiento facial usando OpenCV + dlib.",
            "Implementé alertas en tiempo real por SMS/email y comportamiento automatizado de iluminación.",
          ],
          built: [
            "Flujo de bienvenida/notificación basado en rostros.",
            "Automatización de luces basada en entrada de sensores.",
            "Flujo de alertas (SMS + email).",
          ],
          learned: [
            "Integración de extremo a extremo entre sensores, CV y APIs externas.",
            "Despliegue y documentación de un prototipo embebido.",
            "Diseño de flujos simples que aún funcionan de manera confiable en tiempo real.",
          ],
        },
      },
      nl: {
        title: "Gezichtsherkenningssysteem",
        subtitle: "Raspberry Pi prototype met OpenCV + dlib met meldingen en automatisering",
        sections: {
          context:
            "Individueel project voor SKIL1 dat software en hardware combineert om een real-world IoT-uitdaging op te lossen.",
          role: [
            "Raspberry Pi hardware en sensoren opgezet.",
            "Gezichtsherkenning geïntegreerd met OpenCV + dlib.",
            "Real-time meldingen via sms/e-mail en geautomatiseerd verlichtingsgedrag geïmplementeerd.",
          ],
          built: [
            "Welkomst-/meldingsflow op basis van gezichten.",
            "Lichtautomatisering op basis van sensorinvoer.",
            "Meldingsworkflow (sms + e-mail).",
          ],
          learned: [
            "End-to-end integratie tussen sensoren, CV en externe API's.",
            "Een embedded prototype implementeren en documenteren.",
            "Eenvoudige flows ontwerpen die toch betrouwbaar werken in real time.",
          ],
        },
      },
    },
  },

  // ── Spaceship E6 ──────────────────────────────────────────────────────────
  {
    slug: "spaceship-e6",
    year: "2023",
    tags: ["Unity", "C#", "UX", "Agile", "Game Dev"],
    cover: "/assets/projects/spaceship-e6/cover.png",
    links: [
      { label: "Watch on YouTube", href: "https://m.youtube.com/watch?v=1B3O-6NzIIs&feature=youtu.be" },
    ],
    stack: ["Unity", "C#", "Pixel Art", "UX Design", "Agile"],
    gallery: [
      { src: "/assets/projects/spaceship-e6/game1-1.png", alt: "Gameplay screenshot 1" },
      { src: "/assets/projects/spaceship-e6/game1-2.png", alt: "Gameplay screenshot 2" },
      { src: "/assets/projects/spaceship-e6/game1-3.png", alt: "Gameplay screenshot 3" },
    ],
    translations: {
      en: {
        title: "Spaceship E6 Game",
        subtitle: "Serious pixel-art game to guide students toward Thomas More IT/ICT programs",
        sections: {
          context:
            "Group project for the SKIL1 'Professional Skills' course. The goal was to create a serious game that helps prospective students explore study options.",
          role: [
            "Narrative + storyline design.",
            "UI/UX flow and visual direction in Unity.",
            "Agile coordination and progress tracking.",
          ],
          built: [
            "Branching story flow and interaction structure.",
            "UI mockups and animation direction.",
            "Presentation and final demo support.",
          ],
          learned: [
            "Collaborating on narrative + experience design with a diverse team.",
            "Keeping creative direction aligned with scope and deadlines.",
            "Adapting quickly to feedback while maintaining a coherent experience.",
          ],
        },
      },
      es: {
        title: "Juego Spaceship E6",
        subtitle: "Juego serio de píxel-art para guiar a los estudiantes hacia los programas IT/ICT de Thomas More",
        sections: {
          context:
            "Proyecto grupal para la asignatura SKIL1 de 'Habilidades Profesionales'. El objetivo era crear un juego serio que ayude a los futuros estudiantes a explorar opciones de estudio.",
          role: [
            "Diseño de narrativa e historia.",
            "Flujo de UI/UX y dirección visual en Unity.",
            "Coordinación ágil y seguimiento del progreso.",
          ],
          built: [
            "Flujo de historia con ramificaciones y estructura de interacción.",
            "Mockups de UI y dirección de animación.",
            "Presentación y apoyo para el demo final.",
          ],
          learned: [
            "Colaborar en el diseño de narrativa y experiencia con un equipo diverso.",
            "Mantener la dirección creativa alineada con el alcance y los plazos.",
            "Adaptarse rápidamente a la retroalimentación manteniendo una experiencia coherente.",
          ],
        },
      },
      nl: {
        title: "Spaceship E6 Spel",
        subtitle: "Serieus pixelart-spel om studenten te begeleiden naar Thomas More IT/ICT-programma's",
        sections: {
          context:
            "Groepsproject voor het SKIL1-vak 'Professionele Vaardigheden'. Het doel was een serious game te maken die toekomstige studenten helpt studiekeuzes te verkennen.",
          role: [
            "Narratief + verhaallijnontwerp.",
            "UI/UX-flow en visuele richting in Unity.",
            "Agile coördinatie en voortgangsbewaking.",
          ],
          built: [
            "Vertakkende verhaalflow en interactiestructuur.",
            "UI-mockups en animatierichting.",
            "Presentatie en ondersteuning voor de einddemo.",
          ],
          learned: [
            "Samenwerken aan narratief + ervaringsontwerp met een divers team.",
            "Creatieve richting afstemmen op scope en deadlines.",
            "Snel aanpassen aan feedback met behoud van een coherente ervaring.",
          ],
        },
      },
    },
  },

  // ── Teletubbies Home ──────────────────────────────────────────────────────
  {
    slug: "teletubbies-home",
    year: "2022",
    tags: ["IoT", "Python", "Raspberry Pi", "Flask", "OpenCV"],
    cover: "/assets/projects/teletubbies-home/cover.png",
    links: [
      { label: "Watch on YouTube", href: "https://youtu.be/rByk1QHVK5k" },
      { label: "Download Report (PDF)", href: "/assets/TeletubiesHome.pdf" },
    ],
    stack: ["Python", "Flask", "OpenCV", "GPIO", "Raspberry Pi", "Sensors"],
    gallery: [
      { src: "/assets/projects/teletubbies-home/tank-1.png", alt: "Aquarium setup 1" },
      { src: "/assets/projects/teletubbies-home/tank-2.png", alt: "Aquarium setup 2" },
      { src: "/assets/projects/teletubbies-home/tank-3.png", alt: "Aquarium setup 3" },
      { src: "/assets/projects/teletubbies-home/tank-4.png", alt: "Aquarium setup 4" },
    ],
    translations: {
      en: {
        title: "Teletubbies Home",
        subtitle: "IoT-powered aquarium automation: feeding, lighting, depth monitoring and live video",
        sections: {
          context:
            "An IoT project that automates an aquarium: feeding fish, controlling lights, monitoring depth, displaying data, and streaming live video remotely.",
          role: [
            "Built the complete system and wired electronics.",
            "Wrote Python code to control pump/lamp/feeder and depth sensing.",
            "Designed a streaming web interface using Flask + OpenCV.",
          ],
          built: [
            "Live camera stream accessible remotely.",
            "Depth-triggered automation and safety checks.",
            "LCD/live sensor data display and manual controls.",
          ],
          learned: [
            "Wiring + debugging real hardware constraints.",
            "Modularizing Python for reliability and maintenance.",
            "Designing a simple UX for controlling physical systems.",
          ],
        },
      },
      es: {
        title: "Teletubbies Home",
        subtitle: "Automatización de acuario con IoT: alimentación, iluminación, monitoreo de profundidad y video en vivo",
        sections: {
          context:
            "Un proyecto IoT que automatiza un acuario: alimentar peces, controlar luces, monitorear profundidad, mostrar datos y transmitir video en vivo de forma remota.",
          role: [
            "Construí el sistema completo y cablee la electrónica.",
            "Escribí código Python para controlar la bomba/lámpara/alimentador y la detección de profundidad.",
            "Diseñé una interfaz web de streaming usando Flask + OpenCV.",
          ],
          built: [
            "Transmisión de cámara en vivo accesible de forma remota.",
            "Automatización activada por profundidad y controles de seguridad.",
            "Visualización de datos del sensor/LCD en vivo y controles manuales.",
          ],
          learned: [
            "Cableado y depuración de restricciones reales de hardware.",
            "Modularización de Python para confiabilidad y mantenimiento.",
            "Diseño de una UX simple para controlar sistemas físicos.",
          ],
        },
      },
      nl: {
        title: "Teletubbies Home",
        subtitle: "IoT-aangedreven aquariumautomatisering: voeden, verlichting, dieptebewaking en live video",
        sections: {
          context:
            "Een IoT-project dat een aquarium automatiseert: vissen voeren, lampen bedienen, diepte bewaken, gegevens weergeven en live video op afstand streamen.",
          role: [
            "Het volledige systeem gebouwd en elektronica bedraad.",
            "Python-code geschreven om pomp/lamp/voeder en dieptesensoring te besturen.",
            "Een streamingwebinterface ontworpen met Flask + OpenCV.",
          ],
          built: [
            "Live camerastream op afstand toegankelijk.",
            "Dieptegestuurde automatisering en veiligheidscontroles.",
            "LCD/live sensorgegevensdisplay en handmatige bediening.",
          ],
          learned: [
            "Bedrading + debuggen van echte hardwarebeperkingen.",
            "Python modulair maken voor betrouwbaarheid en onderhoud.",
            "Een eenvoudige UX ontwerpen voor het besturen van fysieke systemen.",
          ],
        },
      },
    },
  },

  // ── Weather Station ───────────────────────────────────────────────────────
  {
    slug: "weather-station",
    year: "2022",
    tags: ["ESP32", "IoT", "MQTT", "C++", "Dashboard"],
    cover: "/assets/projects/weather-station/cover.png",
    links: [
      { label: "Watch on YouTube", href: "https://youtu.be/CUPVl6ACsKQ" },
      { label: "Download Report (PDF)", href: "/assets/weatherstation.pdf" },
    ],
    stack: ["ESP32", "C++", "PlatformIO", "MQTT", "HTML/CSS", "Ubidots", "BMP280", "BH1750"],
    gallery: [
      { src: "/assets/projects/weather-station/ws-1.png", alt: "Dashboard screenshot 1" },
      { src: "/assets/projects/weather-station/ws-2.png", alt: "Dashboard screenshot 2" },
      { src: "/assets/projects/weather-station/ws-3.png", alt: "Dashboard screenshot 3" },
    ],
    translations: {
      en: {
        title: "Weather Station",
        subtitle: "ESP32 station measuring temperature, pressure, and light with web dashboard + alerts",
        sections: {
          context:
            "Weather station that measures temperature, pressure, and light using ESP32 sensors, shows live data on a local website, and logs history + alerts via Ubidots.",
          role: [
            "Designed system architecture and sensor connections.",
            "Implemented ESP32 logic in C++ (PlatformIO).",
            "Built the web visualization and MQTT integration.",
          ],
          built: [
            "Embedded web server with live readings.",
            "Cloud logging and email alert triggers.",
            "Clean dashboard layout focused on readability.",
          ],
          learned: [
            "Reliable IoT data transport with MQTT.",
            "Writing modular embedded code under constraints.",
            "Designing dashboards for clarity and quick decisions.",
          ],
        },
      },
      es: {
        title: "Estación Meteorológica",
        subtitle: "Estación ESP32 que mide temperatura, presión y luz con dashboard web + alertas",
        sections: {
          context:
            "Estación meteorológica que mide temperatura, presión y luz usando sensores ESP32, muestra datos en vivo en un sitio web local y registra historial + alertas vía Ubidots.",
          role: [
            "Diseñé la arquitectura del sistema y las conexiones de sensores.",
            "Implementé la lógica del ESP32 en C++ (PlatformIO).",
            "Construí la visualización web y la integración MQTT.",
          ],
          built: [
            "Servidor web embebido con lecturas en vivo.",
            "Registro en la nube y disparadores de alertas por email.",
            "Diseño de dashboard limpio enfocado en legibilidad.",
          ],
          learned: [
            "Transporte confiable de datos IoT con MQTT.",
            "Escritura de código embebido modular bajo restricciones.",
            "Diseño de dashboards para claridad y decisiones rápidas.",
          ],
        },
      },
      nl: {
        title: "Weerstation",
        subtitle: "ESP32-station dat temperatuur, druk en licht meet met webdashboard + meldingen",
        sections: {
          context:
            "Weerstation dat temperatuur, druk en licht meet met ESP32-sensoren, live gegevens toont op een lokale website en geschiedenis + meldingen logt via Ubidots.",
          role: [
            "Systeemarchitectuur en sensorverbindingen ontworpen.",
            "ESP32-logica geïmplementeerd in C++ (PlatformIO).",
            "De webvisualisatie en MQTT-integratie gebouwd.",
          ],
          built: [
            "Ingebedde webserver met live metingen.",
            "Cloud-logging en e-mailmeldingstriggers.",
            "Overzichtelijke dashboardindeling gericht op leesbaarheid.",
          ],
          learned: [
            "Betrouwbare IoT-datatransport met MQTT.",
            "Modulaire embedded code schrijven onder beperkingen.",
            "Dashboards ontwerpen voor duidelijkheid en snelle beslissingen.",
          ],
        },
      },
    },
  },
];

export const projectSlugs = raw.map((p) => p.slug);

export function getProjects(lang: string): Project[] {
  const l = (["en", "es", "nl"].includes(lang) ? lang : "en") as Lang;
  return raw.map((p) => {
    const tr = p.translations[l];
    return {
      slug: p.slug,
      year: p.year,
      tags: p.tags,
      cover: p.cover,
      ...(p.videoSrc ? { videoSrc: p.videoSrc } : {}),
      ...(p.links ? { links: p.links } : {}),
      title: tr.title,
      subtitle: tr.subtitle,
      sections: {
        context: tr.sections.context,
        role: tr.sections.role,
        stack: p.stack,
        built: tr.sections.built,
        learned: tr.sections.learned,
      },
      gallery: p.gallery,
    };
  });
}

// backward-compat default export (English) — used by ProjectsGrid type inference
export const projects = getProjects("en");