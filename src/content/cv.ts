// src/content/cv.ts
export type CVTimelineItem = {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
  tags?: string[];
};

export const cv = {
  headline: "Applied Computer Science student • Architecture background • AEC → Tech",
  summary: [
    "Multilingual (English & Spanish) Applied Computer Science student with a strong foundation in IT principles, customer service, and team leadership.",
    "Proactive and solutions-oriented, comfortable under pressure, and focused on building practical web applications, dashboards, and prototypes.",
  ],

  downloads: [
    { label: "Download CV (Focused) — PDF", href: "/assets/cv/Pierina%20Lopez%20Resume%202.pdf" },
    { label: "Download CV (Full) — PDF", href: "/assets/cv/Pierina%20Lopez%20Resume.pdf" },
  ],

  education: [
    {
      period: "2022 – Present",
      title: "Applied Computer Science",
      place: "Thomas More University of Applied Sciences, Belgium",
    },
    {
      period: "2014 – 2019",
      title: "Architecture and Urban Planning",
      place: "Cesar Vallejo University, Peru",
    },
    {
      period: "2016",
      title: "AutoCAD Architecture Certification",
      place: "Cesar Vallejo University, Peru",
    },
  ],

  languages: [
    { label: "Spanish", level: "Native" },
    { label: "English", level: "Fluent" },
    { label: "Dutch", level: "Basic (learning)" },
  ],

  technicalSkills: {
    "AI & Machine Learning": [
      "Python (primary language, AI, IoT, and CV projects)",
      "LLM inference with Ollama (local) + RAG pipelines",
      "LangChain, LangGraph, ChromaDB (agent orchestration & retrieval)",
      "FastAPI + WebSockets (real-time AI streaming)",
      "Faster-Whisper (speech-to-text)",
      "TensorFlow / Keras (CNN, transfer learning — MobileNetV2)",
    ],
    "Computer Vision": [
      "YOLOv8 (object detection & tracking)",
      "OpenCV (image processing, homography transforms)",
      "dlib (face recognition & landmark detection)",
      "Roboflow (dataset annotation & management)",
      "Streamlit (interactive CV demo UIs)",
    ],
    "IoT & Embedded Systems": [
      "Home Assistant — 26 automations (Mobilab & Care internship)",
      "AppDaemon (custom Python automation components)",
      "Raspberry Pi (GPIO, sensors, hardware migration Pi 3B → Pi 5)",
      "ESP32 + C++ (PlatformIO firmware, BMP280/BH1750 sensors)",
      "MQTT, Matter Hub, Alexa voice control",
      "Flask (local IoT APIs & web servers)",
    ],
    "Web Development & Frameworks": [
      "Laravel + Livewire (TALL stack — CRUD, auth, role & permission management)",
      "PHP + MySQL (schema design, migrations, queries)",
      "HTML5, CSS3, Bootstrap, Tailwind CSS",
      "JavaScript (basic), Alpine.js",
      "Figma (UX/UI prototyping), responsive design",
    ],
    "Data & Analytics": [
      "Qlik Sense (data modelling, dashboards, visualizations)",
      "Grafana (real-time monitoring dashboards)",
      "Streamlit (data apps & reporting UIs)",
      "Excel (intermediate, formulas, charts, filtering)",
    ],
    "Tools & DevOps": [
      "Git, GitHub, GitLab CI",
      "Docker (containerisation & deployment pipelines)",
      "Jira (Agile/Scrum project management)",
      "VS Code, AutoCAD, Revit",
      "Microsoft Office, Google Workspace",
    ],
  },

  softSkills: [
    "Analytical problem-solving & debugging",
    "Teamwork & collaboration (Agile/Scrum)",
    "Adaptability & eagerness to learn",
    "Clear communication with technical & non-technical stakeholders",
    "Time management, ownership, reliability on deliverables",
  ],

  volunteering: [
    {
      period: "Oct 2022 – Dec 2024",
      title: "Volunteer Barista",
      company: "The Big C",
      location: "Belgium",
      bullets: [
        "Prepared and served hot/cold beverages while supporting a welcoming community space.",
        "Handled payments and maintained a clean, safe working area.",
      ],
      tags: ["Community", "Service"],
    },
  ],

  timeline: [
    {
      period: "Apr 2023 – Present",
      title: "Bartender / Waiter — Student Jobs",
      company: "Post Restaurant, VOLT, Irish Pub",
      location: "Belgium",
      bullets: [
        "Delivered attentive service in busy environments; managed bar and table orders.",
        "Prepared cocktails and beverages tailored to customer preferences and house standards.",
        "Monitored stock levels and coordinated replenishment while maintaining hygiene standards.",
      ],
      tags: ["Hospitality", "Service", "Operations"],
    },
    {
      period: "Apr 2022 – Apr 2023",
      title: "Operations & Warehouse Assistant",
      company: "DistriLog, Beyers, Greenyard",
      location: "Belgium",
      bullets: [
        "Packed, sorted, and prepared high volumes of products for shipment.",
        "Operated pallet stacking/wrapping equipment and followed safety procedures.",
        "Supported logistics workflows by keeping workstations clean and organised.",
      ],
      tags: ["Logistics", "Operations"],
    },
    {
      period: "Jan 2013 – Aug 2021",
      title: "Customer Service & Sales Representative",
      company: "Teleperformance, Los Portales, Pet Center, Nuera Telecom",
      location: "Peru & Remote",
      bullets: [
        "Resolved customer inquiries and complaints, achieving high satisfaction outcomes.",
        "Used upselling/cross-selling techniques to increase sales and customer loyalty.",
        "Handled payments and maintained accurate records in fast-paced environments.",
      ],
      tags: ["Customer Service", "Sales"],
    },
    {
      period: "Jan 2015 – Mar 2020",
      title: "Architecture & Urban Planning Assistant",
      company: "WAO, TEKTUM, IMP, Municipality of Puente Piedra, Arch. Carmen Vásquez",
      location: "Peru",
      bullets: [
        "Produced architectural and urban-planning drawings in AutoCAD/Revit and BIM workflows.",
        "Supported research, data analysis, and preparation of presentations for public/private projects.",
        "Assisted with site inspections, documentation, cost estimates, and coordination with multidisciplinary teams.",
      ],
      tags: ["AEC", "BIM", "Documentation"],
    },
  ] as CVTimelineItem[],
};