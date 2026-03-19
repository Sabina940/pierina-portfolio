import { useMemo, useState, useEffect } from "react";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function Modal({ open, title, subtitle, period, bullets = [], onClose }) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2147483647]">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        role="button"
        aria-label="Close modal overlay"
        tabIndex={0}
      />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">{period}</div>
            <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
            {subtitle ? <p className="mt-1 text-white/70">{subtitle}</p> : null}
          </div>
          
        </div>

        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-white/75">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                • {b}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-white/70">No details yet.</p>
        )}
      </div>
    </div>
  );
}

export default function CVDashboard({ lang = "en", t, downloads }) {
  const tabs = useMemo(() => {
    const fallback = {
      overview: "Overview",
      experience: "Experience",
      skills: "Skills",
      volunteering: "Volunteering",
      education: "Education",
    };
    // If you later add cv.* keys to i18n, it will use them automatically:
    const cv = t?.cv ?? fallback;
    return [
      { id: "overview", label: cv.overview ?? fallback.overview },
      { id: "experience", label: cv.experience ?? fallback.experience },
      { id: "skills", label: cv.skills ?? fallback.skills },
      { id: "volunteering", label: cv.volunteering ?? fallback.volunteering },
      { id: "education", label: cv.education ?? fallback.education },
    ];
  }, [t]);

  const [activeTab, setActiveTab] = useState("overview");
  const [openItem, setOpenItem] = useState(null);

  // Focused CV (grouped) + volunteering based on Resume 2  [oai_citation:2‡Pierina Lopez Resume 2.pdf](sediment://file_0000000052c8720ab4623b793b09d4ef)
  const experience = useMemo(
    () => [
      {
        id: "student-horeca",
        year: "2023–Present",
        title: "Bartender / Waiter (Student jobs)",
        subtitle: "Post Restaurant, VOLT, Irish Pub — Belgium",
        bullets: [
          "Delivered attentive service in busy, high-end environments; managed bar + table orders.",
          "Prepared cocktails and beverages to house standards and customer preferences.",
          "Monitored stock levels and supported hygiene/safety standards.",
        ],
      },
      {
        id: "ops-warehouse",
        year: "2022–2023",
        title: "Operations & Warehouse Assistant",
        subtitle: "Distrilog, Beyers, Greenyard — Belgium",
        bullets: [
          "Packed, sorted, and prepared high volumes of products for shipment.",
          "Operated pallet stacking/wrapping equipment and followed safety procedures.",
          "Supported logistics workflows by keeping workstations clean and organized.",
        ],
      },
      {
        id: "customer-sales",
        year: "2013–2021",
        title: "Customer Service & Sales Representative",
        subtitle: "Teleperformance, Los Portales, Pet Center, Nuera Telecom — Peru & Remote",
        bullets: [
          "Resolved customer inquiries and complaints, aiming for high satisfaction.",
          "Used upselling/cross-selling to increase sales and customer loyalty.",
          "Handled payments and maintained accurate records in fast-paced environments.",
        ],
      },
      {
        id: "aec",
        year: "2015–2020",
        title: "Architecture & Urban Planning Assistant",
        subtitle: "WAO, TEKTUM, IMP, Municipality of Puente Piedra, Arch. Carmen Vásquez — Peru",
        bullets: [
          "Produced architectural + urban-planning drawings in AutoCAD/Revit and BIM workflows.",
          "Supported research, data analysis, and preparation of presentations.",
          "Assisted with site inspections, documentation, cost estimates, and coordination.",
        ],
      },
    ],
    []
  );

  const volunteering = useMemo(
    () => [
      {
        id: "vol-barista",
        year: "Oct 2022 – Dec 2024",
        title: "Volunteer Barista",
        subtitle: "The Big C — Belgium",
        bullets: [
          "Prepared and served beverages while supporting a welcoming community space.",
          "Handled payments and maintained a clean, safe working area.",
        ],
      },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        title: "Applied Computer Science",
        subtitle: "Thomas More University of Applied Sciences — Belgium",
        year: "2022 – Present",
      },
      {
        title: "Architecture and Urban Planning",
        subtitle: "Cesar Vallejo University — Peru",
        year: "2014 – 2019",
      },
      {
        title: "AutoCAD Architecture Certification",
        subtitle: "Cesar Vallejo University — Peru",
        year: "2016",
      },
    ],
    []
  );

  const languages = useMemo(
    () => [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Dutch", level: "Basic (learning)" },
    ],
    []
  );

  // Technical + soft skills from Resume 2  [oai_citation:3‡Pierina Lopez Resume 2.pdf](sediment://file_0000000052c8720ab4623b793b09d4ef)
  const technical = useMemo(
    () => [
      "Laravel, Livewire, Blade (TALL stack basics)",
      "HTML5, CSS3, Tailwind CSS",
      "JavaScript (basic), Alpine.js",
      "PHP, MySQL, Eloquent ORM, migrations",
      "Qlik Sense dashboards + data modelling",
      "Excel (intermediate): formulas, charting & filtering",
      "Git, GitHub, Jira, Visual Studio Code",
      "AutoCAD, Revit, Prezi (technical/visual communication)",
      "Microsoft Office, Google Workspace",
    ],
    []
  );

  const soft = useMemo(
    () => [
      "Analytical problem-solving & debugging",
      "Teamwork & collaboration (Agile/Scrum)",
      "Adaptability & eagerness to learn",
      "Clear communication with technical & non-technical stakeholders",
      "Time management, ownership, reliability on deliverables",
    ],
    []
  );

  const heroTitle = t?.nav?.cv ?? "CV";
  const heroSubtitle =
    t?.cv?.headline ??
    "Applied Computer Science student • Architecture background • AEC → Tech";

  const openData = openItem
    ? [...experience, ...volunteering].find((x) => x.id === openItem)
    : null;

  return (
    <div className="grid gap-6">
      {/* HERO */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heroTitle}</h1>
            <p className="mt-3 text-white/75">{heroSubtitle}</p>

            <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
              {t?.cv?.summary ??
                "Multilingual (English & Spanish) student with strong IT foundations, customer service experience, and a practical builder mindset — web apps, dashboards, and prototypes."}
            </p>
          </div>

          {/* Download (small square button) */}
          <div className="shrink-0">
            <a
              href={downloads?.focused}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV PDF"
              title="Download CV (PDF)"
              className="
                grid h-12 w-10 place-items-center p-2 rounded-2xl
                border border-white/15 bg-white/5
                text-white/80 hover:text-white hover:bg-white/10
                transition
              "
            >
              <span className="text-xs font-semibold leading-none">
                CV
                <span className="block text-[10px] text-white/60 mt-1">PDF</span>
              </span>
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cx(
                "rounded-full border px-3 py-1 text-xs transition",
                activeTab === tab.id
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* TAB CONTENT */}
      {activeTab === "overview" && (
        <section className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Languages</h2>
            <div className="mt-4 grid gap-3">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between text-white/75">
                  <span>{l.name}</span>
                  <span className="text-white/60">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Full-stack basics (Laravel + Livewire) + dashboards (Qlik Sense)</li>
              <li>• Strong communication + customer-facing background</li>
              <li>• AEC mindset: documentation, QA, coordination → applied to tech projects</li>
            </ul>
          </div>
        </section>
      )}

      {activeTab === "experience" && (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Experience timeline</h2>
          <p className="mt-2 text-white/70">Click any node to open details (no endless scrolling).</p>

          <div className="mt-8 grid gap-4">
            {experience.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setOpenItem(e.id)}
                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-white/60">{e.year}</div>
                    <div className="mt-1 text-base font-semibold text-white">{e.title}</div>
                    <div className="mt-1 text-sm text-white/70">{e.subtitle}</div>
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/80 transition">Open →</div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {activeTab === "skills" && (
        <section className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Technical skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {technical.map((x) => (
                <span key={x} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-xs text-white/70">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Soft skills</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              {soft.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {activeTab === "volunteering" && (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Volunteering</h2>
          <div className="mt-6 grid gap-4">
            {volunteering.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setOpenItem(v.id)}
                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-white/60">{v.year}</div>
                    <div className="mt-1 text-base font-semibold text-white">{v.title}</div>
                    <div className="mt-1 text-sm text-white/70">{v.subtitle}</div>
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/80 transition">Open →</div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {activeTab === "education" && (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-6 grid gap-4">
            {education.map((e) => (
              <div key={e.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs text-white/60">{e.year}</div>
                <div className="mt-1 text-base font-semibold text-white">{e.title}</div>
                <div className="mt-1 text-sm text-white/70">{e.subtitle}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Modal
        open={!!openData}
        title={openData?.title}
        subtitle={openData?.subtitle}
        period={openData?.year}
        bullets={openData?.bullets}
        onClose={() => setOpenItem(null)}
      />
    </div>
  );
}