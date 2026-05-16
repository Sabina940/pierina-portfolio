import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORAL = "#C96B4A";
const SAGE  = "#8FAF93";
const SAND  = "#C9BF9A";

// ── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ open, title, subtitle, period, bullets = [], color = CORAL, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onEsc); document.body.style.overflow = ""; };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/75" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-xl rounded-3xl border border-white/10 p-6 shadow-2xl"
            style={{ backgroundColor: "#0F2018" }}
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-xl border border-white/10 bg-white/5 p-1.5 text-white/40 hover:text-white hover:bg-white/10 transition"
            >
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="pr-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color }}>{period}</span>
              <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
              {subtitle && <p className="mt-1 text-sm text-white/55">{subtitle}</p>}
            </div>

            <ul className="mt-5 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Animated language bar ─────────────────────────────────────────────────────
function LangBar({ name, level, pct, color }) {
  const [go, setGo] = useState(false);
  useEffect(() => { const t = setTimeout(() => setGo(true), 80); return () => clearTimeout(t); }, []);
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white/80">{name}</span>
        <span className="text-xs text-white/40">{level}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <div
          className="h-full rounded-full"
          style={{ width: go ? `${pct}%` : "0%", background: color, transition: "width 900ms cubic-bezier(0.4,0,0.2,1)" }}
        />
      </div>
    </div>
  );
}

// ── Timeline card ─────────────────────────────────────────────────────────────
function TimelineItem({ item, onOpen, index, isLast }) {
  const c = item.color;
  return (
    <motion.div
      className="relative flex gap-4"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.09, duration: 0.35, ease: "easeOut" }}
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0 w-9">
        <div
          className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${c}18`, border: `1px solid ${c}35` }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        </div>
        {!isLast && <div className="flex-1 w-px mt-2 mb-0" style={{ background: "rgba(255,255,255,0.07)", minHeight: 16 }} />}
      </div>

      {/* Card */}
      <button
        type="button"
        onClick={() => onOpen(item.id)}
        className="group flex-1 mb-4 text-left rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-200"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: c }}>{item.year}</div>
            <div className="font-semibold text-white leading-snug">{item.title}</div>
            <div className="mt-0.5 text-sm text-white/50">{item.subtitle}</div>
          </div>
          <div
            className="shrink-0 text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 font-medium whitespace-nowrap"
            style={{ color: c, background: `${c}18` }}
          >
            details →
          </div>
        </div>
      </button>
    </motion.div>
  );
}

// ── Skill group card ───────────────────────────────────────────────────────────
function SkillGroup({ label, color, skills, index }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/5 p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color }}>{label}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {skills.map(s => (
          <span
            key={s}
            className="rounded-lg px-2.5 py-1 text-xs text-white/65"
            style={{ background: `${color}12`, border: `1px solid ${color}25` }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function CVDashboard({ t, downloads }) {
  const tabs = useMemo(() => [
    { id: "overview",     label: t?.cv?.overview     ?? "Overview"     },
    { id: "experience",   label: t?.cv?.experience   ?? "Experience"   },
    { id: "skills",       label: t?.cv?.skills       ?? "Skills"       },
    { id: "volunteering", label: t?.cv?.volunteering ?? "Volunteering" },
    { id: "education",    label: t?.cv?.education    ?? "Education"    },
  ], [t]);

  const [activeTab, setActiveTab] = useState("overview");
  const [openItem,  setOpenItem]  = useState(null);

  const experience = useMemo(() => [
    {
      id: "student-horeca", color: CORAL,
      year: "2023 – Present",
      title: "Bartender / Waiter (Student jobs)",
      subtitle: "Post Restaurant, VOLT, Irish Pub — Belgium",
      bullets: [
        "Delivered attentive service in busy, high-end environments; managed bar + table orders.",
        "Prepared cocktails and beverages to house standards and customer preferences.",
        "Monitored stock levels and supported hygiene/safety standards.",
      ],
    },
    {
      id: "ops-warehouse", color: SAGE,
      year: "2022 – 2023",
      title: "Operations & Warehouse Assistant",
      subtitle: "Distrilog, Beyers, Greenyard — Belgium",
      bullets: [
        "Packed, sorted, and prepared high volumes of products for shipment.",
        "Operated pallet stacking/wrapping equipment and followed safety procedures.",
        "Supported logistics workflows by keeping workstations clean and organized.",
      ],
    },
    {
      id: "customer-sales", color: SAND,
      year: "2013 – 2021",
      title: "Customer Service & Sales Representative",
      subtitle: "Teleperformance, Los Portales, Pet Center — Peru & Remote",
      bullets: [
        "Resolved customer inquiries and complaints, aiming for high satisfaction.",
        "Used upselling/cross-selling to increase sales and customer loyalty.",
        "Handled payments and maintained accurate records in fast-paced environments.",
      ],
    },
    {
      id: "aec", color: SAND,
      year: "2015 – 2020",
      title: "Architecture & Urban Planning Assistant",
      subtitle: "WAO, TEKTUM, IMP, Municipality of Puente Piedra — Peru",
      bullets: [
        "Produced architectural + urban-planning drawings in AutoCAD/Revit and BIM workflows.",
        "Supported research, data analysis, and preparation of presentations.",
        "Assisted with site inspections, documentation, cost estimates, and coordination.",
      ],
    },
  ], []);

  const volunteering = useMemo(() => [
    {
      id: "vol-barista", color: SAGE,
      year: "Oct 2022 – Dec 2024",
      title: "Volunteer Barista",
      subtitle: "The Big C — Belgium",
      bullets: [
        "Prepared and served beverages while supporting a welcoming community space.",
        "Handled payments and maintained a clean, safe working area.",
      ],
    },
  ], []);

  const education = useMemo(() => [
    { title: "Applied Computer Science",        subtitle: "Thomas More University — Belgium", year: "2022 – Present", active: true,  color: CORAL, icon: "🎓" },
    { title: "Architecture and Urban Planning", subtitle: "Cesar Vallejo University — Peru",  year: "2014 – 2019",   active: false, color: SAND,  icon: "📐" },
    { title: "AutoCAD Architecture Cert.",      subtitle: "Cesar Vallejo University — Peru",  year: "2016",          active: false, color: SAND,  icon: "📐" },
  ], []);

  const skillGroups = useMemo(() => [
    { label: "Web Dev",      color: CORAL, skills: ["Laravel", "Livewire", "Blade", "HTML5 / CSS3", "Tailwind CSS", "JavaScript", "Alpine.js", "PHP", "MySQL", "Eloquent ORM"] },
    { label: "Data & Tools", color: SAGE,  skills: ["Qlik Sense", "Data modelling", "Excel (intermediate)", "Git / GitHub", "Jira", "VS Code"] },
    { label: "AEC & Design", color: SAND,  skills: ["AutoCAD", "Revit", "BIM workflows", "Prezi", "Microsoft Office", "Google Workspace"] },
  ], []);

  const langBars = [
    { name: "Spanish", level: "Native",          pct: 100, color: CORAL },
    { name: "English", level: "Fluent",           pct: 88,  color: SAGE  },
    { name: "Dutch",   level: "Basic (learning)", pct: 28,  color: SAND  },
  ];

  const highlights = [
    { val: "3",   lbl: "Languages",  color: CORAL },
    { val: "10y", lbl: "Work exp.",  color: SAGE  },
    { val: "AEC", lbl: "Background", color: SAND  },
    { val: "IoT", lbl: "2025 focus", color: "rgba(255,255,255,0.55)" },
  ];

  const softSkills = [
    "Analytical problem-solving & debugging",
    "Teamwork & collaboration (Agile / Scrum)",
    "Adaptability & eagerness to learn",
    "Clear communication — technical & non-technical",
    "Time management, ownership, reliable on deliverables",
  ];

  const allItems = [...experience, ...volunteering];
  const openData  = openItem ? allItems.find(x => x.id === openItem) : null;

  const heroSubtitle = t?.cv?.headline ?? "Applied Computer Science student • Architecture background • AEC → Tech";
  const heroSummary  = t?.cv?.summary  ?? "Multilingual student with strong IT foundations, customer service experience, and a practical builder mindset — web apps, dashboards, and prototypes.";

  return (
    <div className="grid gap-5">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 min-w-0">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border mb-4"
              style={{ color: CORAL, borderColor: `${CORAL}35`, background: `${CORAL}12` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: CORAL }} />
              {heroSubtitle}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-br from-white to-white/55 bg-clip-text text-transparent">
              {t?.nav?.cv ?? "CV"}
            </h1>
            <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-xl">{heroSummary}</p>

            {/* Quick stats */}
            <div className="mt-5 flex flex-wrap gap-2">
              {highlights.map(h => (
                <div
                  key={h.lbl}
                  className="rounded-xl px-3 py-2 flex items-baseline gap-1.5 border"
                  style={{ background: `${h.color}10`, borderColor: `${h.color}22` }}
                >
                  <span className="text-sm font-bold" style={{ color: h.color }}>{h.val}</span>
                  <span className="text-[10px] text-white/35 uppercase tracking-widest">{h.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download */}
          <a
            href={downloads?.focused}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-start flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{ color: CORAL, borderColor: `${CORAL}40`, background: `${CORAL}12` }}
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200"
              style={activeTab === tab.id
                ? { color: "#fff", borderColor: `${CORAL}50`, background: `${CORAL}22` }
                : { color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.08)", background: "transparent" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── TAB CONTENT ─────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >

          {/* Overview */}
          {activeTab === "overview" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-base font-bold mb-6">Languages</h2>
                <div className="space-y-5">
                  {langBars.map(l => <LangBar key={l.name} {...l} />)}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-base font-bold mb-5">At a glance</h2>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {highlights.map(h => (
                    <div key={h.lbl} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-center">
                      <div className="text-xl font-bold" style={{ color: h.color }}>{h.val}</div>
                      <div className="text-[10px] text-white/35 mt-0.5 uppercase tracking-widest">{h.lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {[
                    "Full-stack basics (Laravel + Livewire) + Qlik Sense dashboards",
                    "Strong communication + customer-facing background",
                    "AEC mindset: documentation, QA, coordination → tech projects",
                  ].map((h, i) => (
                    <div key={i} className="flex gap-2.5 text-sm text-white/60 items-start">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CORAL }} />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === "experience" && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Experience</h2>
                <span className="text-xs text-white/30">Click any card for details</span>
              </div>
              {experience.map((e, i) => (
                <TimelineItem key={e.id} item={e} onOpen={setOpenItem} index={i} isLast={i === experience.length - 1} />
              ))}
            </section>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {skillGroups.map((g, i) => <SkillGroup key={g.label} {...g} index={i} />)}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: CORAL }} />
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: CORAL }}>Soft skills</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {softSkills.map((s, i) => (
                    <div key={i} className="flex gap-3 text-sm text-white/65 items-start">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CORAL }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Volunteering */}
          {activeTab === "volunteering" && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-6">Volunteering</h2>
              {volunteering.map((v, i) => (
                <TimelineItem key={v.id} item={v} onOpen={setOpenItem} index={i} isLast />
              ))}
            </section>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-6">Education</h2>
              <div className="grid gap-4">
                {education.map((e, i) => (
                  <motion.div
                    key={e.title}
                    className="rounded-2xl border p-5 flex gap-4 items-start"
                    style={{
                      borderColor: e.active ? `${e.color}35` : "rgba(255,255,255,0.08)",
                      background:  e.active ? `${e.color}08`  : "rgba(255,255,255,0.03)",
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.09 }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ background: `${e.color}18`, border: `1px solid ${e.color}30` }}
                    >
                      {e.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-semibold" style={{ color: e.color }}>{e.year}</span>
                        {e.active && (
                          <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: e.color, background: `${e.color}20` }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <div className="mt-1 font-semibold text-white">{e.title}</div>
                      <div className="mt-0.5 text-sm text-white/50">{e.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

        </motion.div>
      </AnimatePresence>

      <Modal
        open={!!openData}
        title={openData?.title}
        subtitle={openData?.subtitle}
        period={openData?.year}
        bullets={openData?.bullets}
        color={openData?.color ?? CORAL}
        onClose={() => setOpenItem(null)}
      />
    </div>
  );
}