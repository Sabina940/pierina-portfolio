export type Project = {
  slug: string;
  title: string;
  videoSrc?: string;
  subtitle: string;
  year: string;
  tags: string[];              // for filters later
  cover: string;               // /assets/projects/.../cover.png
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

export const projects: Project[] = [

  {
  slug: "echotrack",
  title: "EchoTrack",
  subtitle: "Trackle project — AI-assisted incident calls with transcript, suggestions, and feedback loop",
  year: "2025",
  tags: ["AI", "NLP", "RAG", "Streamlit", "Grafana", "DevOps", "Security"],
  cover: "/assets/projects/echotrack/cover.png",
 
  links: [
    { label: "Demo deck (PDF)", href: "/assets/projects/echotrack/demo-pwp.pdf" },
    
  ],
  sections: {
    context:
      "Prototype to support railway incident calls in real time: stream the incoming call, generate a live transcript, extract key signals (location, urgency, incident type), propose dispatcher-safe actions, and capture dispatcher feedback to improve future recommendations through a Retrieval-Augmented Generation (RAG) + learning loop.",
    role: [
      "AI focus: worked on the end-to-end AI pipeline behavior (live transcript → structured interpretation → suggested actions).",
      "Helped define how service/urgency and keywords are generated and validated for reliability in noisy real-world audio.",
      "Supported the demo narrative, documentation, and evaluation points (accuracy vs latency trade-offs).",
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
  gallery: [
    { src: "/assets/projects/echotrack/slide-demo.png", alt: "Demo UI" },
    { src: "/assets/projects/echotrack/slide-agents.png", alt: "Agents and roles overview" },
    { src: "/assets/projects/echotrack/slide-ingestion.png", alt: "Ingestion pipeline" },
    { src: "/assets/projects/echotrack/group.jpeg", alt: "Team photo" },
    { src: "/assets/projects/echotrack/team-1.JPG", alt: "Working session" },
    { src: "/assets/projects/echotrack/team-2.JPG", alt: "Working session" },
    
  ],
},


  {
  slug: "chef-tutor",
  title: "Polish × Peruvian Chef Tutor",
  subtitle: "Multilingual RAG cooking assistant — LangGraph agents + ChromaDB + local LLM",
  year: "2025",
  tags: ["NLP", "RAG", "LangChain", "LangGraph", "ChromaDB", "Ollama", "Streamlit", "Python"],
  cover: "/assets/projects/chef-tutor/cover.png",
  videoSrc: "/assets/projects/chef-tutor/demo.mov",
  links: [
    { label: "Slides (PDF)", href: "/assets/projects/chef-tutor/Polish%20%C3%97%20Peruvian%20Chef%20Tutor.pdf" },
    { label: "Project report (PDF)", href: "/assets/projects/chef-tutor/Report%20NLP.pdf" },
    
  ],
  sections: {
    context:
      "Built a multilingual, RAG-powered cooking assistant that answers questions about Polish and Peruvian recipes, explains techniques, and can generate fusion ideas. It learns from a private cookbook knowledge base (PDFs) instead of giving generic recipes.",
    role: [
      "Designed the end-to-end RAG pipeline: ingest PDFs/text, chunk, embed, store in ChromaDB, retrieve and inject tool context.",
      "Built and orchestrated multiple chef agents (Polish, Peruvian, fusion, nutrition, quiz, history) with LangGraph routing.",
      "Implemented the Streamlit chat UI with PDF upload → ingestion → immediate availability in the assistant.",
    ],
    stack: ["Python", "Streamlit", "ChromaDB", "LangChain", "LangGraph", "Ollama (local Llama)", "Embeddings", "RAG tools"],
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
  gallery: [
    // optional: export a few images from your PDF slides into this folder
    { src: "/assets/projects/chef-tutor/1.png", alt: "1" },
    { src: "/assets/projects/chef-tutor/2.png", alt: "2" },
    { src: "/assets/projects/chef-tutor/3.png", alt: "3" },
    { src: "/assets/projects/chef-tutor/4.png", alt: "4" },
  ],
},

  {
    slug: "tennis-analytics",
    title: "Tennis Sports Analytics",
    subtitle: "Computer Vision Challenge — player/ball detection + mini-court + heatmaps",
    year: "2025",
    tags: ["Computer Vision", "YOLOv8", "OpenCV", "Roboflow", "Streamlit", "Homography"],
    cover: "/assets/projects/tennis-analytics/cover.png",
    videoSrc: "/assets/projects/tennis-analytics/demo_h264.mp4",

    links: [
      { label: "Project brief (PDF)", href: "/assets/projects/tennis-analytics/Project%20Brief%20Deck.pdf" },
      { label: "Project report (PDF)", href: "/assets/projects/tennis-analytics/Project%20Report.pdf" },
      { label: "Code (ZIP)", href: "/assets/projects/tennis-analytics/CV_Challenge_Team_1_Tennis.zip" },
    ],
    sections: {
      context:
        "Built a system that takes a tennis video, detects what’s happening, and displays results clearly on one screen: player/ball detection plus a mini-court visualization for analysis. ",
      role: [
        "Helped design the full pipeline from video → detections → mini-court projection.",
        "Worked with pretrained YOLOv8 models for player/ball detection and trained a model for court zones.",
        "Contributed to the visualization layer and analysis add-ons (heatmaps/metrics).",
      ],
      stack: ["YOLOv8", "OpenCV", "Roboflow", "Streamlit", "Homography", "Python"],
      built: [
        "Frame extraction from tennis videos (~2 FPS) for faster iteration. ",
        "Court-zone dataset annotated in Roboflow (82 images; train/val/test split).",
        "Mini-court projection with homography + overlay of player/ball positions.  ",
        "Streamlit interface to visualize detections and tracking outputs.",
      ],
      learned: [
        "Practical tradeoffs of object detection in sports footage (occlusions, small fast objects).",
        "How homography enables clean top-down analytics from angled video.",
        "How to communicate CV pipelines clearly (report + demo artifacts).",
      ],
    },
    gallery: [
      // optional later: screenshots (you can export from PDFs)
      { src: "/assets/projects/tennis-analytics/1.png", alt: "Mini-court projection" },
      { src: "/assets/projects/tennis-analytics/overview.png", alt: "Mini-court projection" },
      { src: "/assets/projects/tennis-analytics/data.png", alt: "Mini-court projection" },
      { src: "/assets/projects/tennis-analytics/annotation.png", alt: "Mini-court projection" },
    ],
  },
  {
    slug: "dinosaur-challenge",
    title: "Dinosaur Challenge (Deep Learning)",
    subtitle: "Image classification — CNN from scratch, transfer learning, and an optimized ensemble",
    year: "2024",
    tags: ["AI", "Deep Learning", "Computer Vision", "Python", "Keras", "TensorFlow", "Kaggle"],
    cover: "/assets/projects/dinosaur-challenge/cover.png",
    links: [
      { label: "Read report (PDF)", href: "/assets/projects/dinosaur-challenge/deep-learning.pdf" },
      { label: "GitHub (DL folder)", href: "https://github.com/PierinaLopez/AI-Challenges/tree/main/DL" },
    ],
    sections: {
      context:
        "Deep learning image-classification challenge using dinosaur classes. I explored the dataset (EDA), built a CNN baseline, tried transfer learning, evaluated multiple architectures, and improved results with an ensemble approach.",
      role: [
        "Owned the full pipeline: preprocessing, training loops, evaluation, and reporting.",
        "Designed experiments across baseline CNN, MobileNetV2 transfer learning + fine-tuning, and other architectures.",
      ],
      stack: [
        "Python",
        "TensorFlow / Keras",
        "CNN",
        "Transfer learning (MobileNetV2)",
        "Model evaluation (confusion matrix, reports)",
        "Ensembling + test-time augmentation (TTA)",
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
    gallery: [
      { src: "/assets/projects/dinosaur-challenge/eda.png", alt: "EDA — class distribution / samples" },
      { src: "/assets/projects/dinosaur-challenge/mobilenetv2.png", alt: "MobileNetV2 transfer learning / confusion matrix" },
      { src: "/assets/projects/dinosaur-challenge/ensemble.png", alt: "Optimized ensemble results" },
    ],
  },
  {
    slug: "campusbridge",
    title: "CampusBridge",
    subtitle: "Streamlining admissions for incoming degree & exchange students",
    year: "2024",
    tags: ["Web", "Agile", "UX", "PHP", "MySQL"],
    cover: "/assets/projects/campusbridge/cover.png",
    links: [
      { label: "View Project Analysis (PDF)", href: "/assets/Analysis and design report EN_template.pdf" },
      { label: "View Figma Prototype", href: "https://www.figma.com/..." },
    ],
    sections: {
      context:
        "Group project for SKIL2 — building a system for the International Office to simplify admin processes for new international students. Based on an inherited concept, our team restructured and modernized the approach.",
      role: [
        "Scrum Master (facilitated sprints, retrospectives, alignment).",
        "Contributed to analysis updates, UML/data model iterations, and UI flow decisions.",
      ],
      stack: ["HTML/CSS", "Bootstrap", "PHP", "MySQL", "Jira", "Figma"],
      built: [
        "Admin panel for managing students and nominations",
        "Buddy assignment request + approval flow",
        "Bike rentals and landlord profile management",
      ],
      learned: [
        "Handling friction in a team and keeping momentum through retrospectives",
        "Balancing stakeholder needs with technical constraints",
        "Improving inherited projects without breaking scope",
      ],
    },
    gallery: [
      { src: "/assets/projects/campusbridge/figma.png", alt: "Figma prototype" },
      { src: "/assets/projects/campusbridge/page.png", alt: "Implementation page" },
      { src: "/assets/projects/campusbridge/jira.png", alt: "Jira board" },
      { src: "/assets/projects/campusbridge/team.jpg", alt: "Team working session" },
    ],
  },
{
    slug: "face-recognition",
    title: "Face Recognition System",
    subtitle: "Raspberry Pi prototype using OpenCV + dlib with alerts and automation",
    year: "2022",
    tags: ["IoT", "Computer Vision", "Python", "Raspberry Pi"],
    cover: "/assets/projects/face-recognition/cover.png",
    links: [
        { label: "Watch on YouTube", href: "https://youtu.be/hwamn3hPTVY?si=suaDxCcYDtc-m8G4" },
        { label: "Download Project Code (ZIP)", href: "/assets/Projects-WH.zip" },
    ],
    sections: {
        context:
        "Individual project for SKIL1 combining software and hardware to solve a real-world IoT challenge.",
        role: [
        "Set up Raspberry Pi hardware and sensors.",
        "Integrated face recognition using OpenCV + dlib.",
        "Implemented real-time alerts via SMS/email and automated lighting behaviour.",
        ],
        stack: ["Python", "OpenCV", "dlib", "Flask", "GPIO", "Twilio", "SMTP"],
        built: [
        "Face-based welcome/notification flow",
        "Light automation based on sensor input",
        "Alerting workflow (SMS + email)",
        ],
        learned: [
        "End-to-end integration between sensors, CV, and external APIs",
        "Deploying and documenting an embedded prototype",
        "Designing simple flows that still work reliably in real time",
        ],
    },
    gallery: [
        { src: "/assets/projects/face-recognition/iot-1.png", alt: "Project screenshot 1" },
        { src: "/assets/projects/face-recognition/iot-2.png", alt: "Project screenshot 2" },
    ],
    },

    {
    slug: "spaceship-e6",
    title: "Spaceship E6 Game",
    subtitle: "Serious pixel-art game to guide students toward Thomas More IT/ICT programs",
    year: "2023",
    tags: ["Unity", "C#", "UX", "Agile", "Game Dev"],
    cover: "/assets/projects/spaceship-e6/cover.png",
    links: [
        { label: "Watch on YouTube", href: "https://m.youtube.com/watch?v=1B3O-6NzIIs&feature=youtu.be" },
    ],
    sections: {
        context:
        "Group project for the SKIL1 “Professional Skills” course. The goal was to create a serious game that helps prospective students explore study options.",
        role: [
        "Narrative + storyline design.",
        "UI/UX flow and visual direction in Unity.",
        "Agile coordination and progress tracking.",
        ],
        stack: ["Unity", "C#", "Pixel Art", "UX Design", "Agile"],
        built: [
        "Branching story flow and interaction structure",
        "UI mockups and animation direction",
        "Presentation and final demo support",
        ],
        learned: [
        "Collaborating on narrative + experience design with a diverse team",
        "Keeping creative direction aligned with scope and deadlines",
        "Adapting quickly to feedback while maintaining a coherent experience",
        ],
    },
    gallery: [
        { src: "/assets/projects/spaceship-e6/game1-1.png", alt: "Gameplay screenshot 1" },
        { src: "/assets/projects/spaceship-e6/game1-2.png", alt: "Gameplay screenshot 2" },
        { src: "/assets/projects/spaceship-e6/game1-3.png", alt: "Gameplay screenshot 3" },
    ],
    },

    {
    slug: "teletubbies-home",
    title: "Teletubbies Home",
    subtitle: "IoT-powered aquarium automation: feeding, lighting, depth monitoring and live video",
    year: "2022",
    tags: ["IoT", "Python", "Raspberry Pi", "Flask", "OpenCV"],
    cover: "/assets/projects/teletubbies-home/cover.png",
    links: [
        { label: "Watch on YouTube", href: "https://youtu.be/rByk1QHVK5k" },
        { label: "Download Report (PDF)", href: "/assets/TeletubiesHome.pdf" },
    ],
    sections: {
        context:
        "An IoT project that automates an aquarium: feeding fish, controlling lights, monitoring depth, displaying data, and streaming live video remotely.",
        role: [
        "Built the complete system and wired electronics.",
        "Wrote Python code to control pump/lamp/feeder and depth sensing.",
        "Designed a streaming web interface using Flask + OpenCV.",
        ],
        stack: ["Python", "Flask", "OpenCV", "GPIO", "Raspberry Pi", "Sensors"],
        built: [
        "Live camera stream accessible remotely",
        "Depth-triggered automation and safety checks",
        "LCD/live sensor data display and manual controls",
        ],
        learned: [
        "Wiring + debugging real hardware constraints",
        "Modularizing Python for reliability and maintenance",
        "Designing a simple UX for controlling physical systems",
        ],
    },
    gallery: [
        { src: "/assets/projects/teletubbies-home/tank-1.png", alt: "Aquarium setup 1" },
        { src: "/assets/projects/teletubbies-home/tank-2.png", alt: "Aquarium setup 2" },
        { src: "/assets/projects/teletubbies-home/tank-3.png", alt: "Aquarium setup 3" },
        { src: "/assets/projects/teletubbies-home/tank-4.png", alt: "Aquarium setup 4" },
    ],
    },

    {
    slug: "weather-station",
    title: "Weather Station",
    subtitle: "ESP32 station measuring temperature, pressure, and light with web dashboard + alerts",
    year: "2022",
    tags: ["ESP32", "IoT", "MQTT", "C++", "Dashboard"],
    cover: "/assets/projects/weather-station/cover.png",
    links: [
        { label: "Watch on YouTube", href: "https://youtu.be/CUPVl6ACsKQ" },
        { label: "Download Report (PDF)", href: "/assets/weatherstation.pdf" },
    ],
    sections: {
        context:
        "Weather station that measures temperature, pressure, and light using ESP32 sensors, shows live data on a local website, and logs history + alerts via Ubidots.",
        role: [
        "Designed system architecture and sensor connections.",
        "Implemented ESP32 logic in C++ (PlatformIO).",
        "Built the web visualization and MQTT integration.",
        ],
        stack: ["ESP32", "C++", "PlatformIO", "MQTT", "HTML/CSS", "Ubidots", "BMP280", "BH1750"],
        built: [
        "Embedded web server with live readings",
        "Cloud logging and email alert triggers",
        "Clean dashboard layout focused on readability",
        ],
        learned: [
        "Reliable IoT data transport with MQTT",
        "Writing modular embedded code under constraints",
        "Designing dashboards for clarity and quick decisions",
        ],
    },
    gallery: [
        { src: "/assets/projects/weather-station/ws-1.png", alt: "Dashboard screenshot 1" },
        { src: "/assets/projects/weather-station/ws-2.png", alt: "Dashboard screenshot 2" },
        { src: "/assets/projects/weather-station/ws-3.png", alt: "Dashboard screenshot 3" },
    ],
    },

];