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
  useEffect(() => { const id = setTimeout(() => setGo(true), 80); return () => clearTimeout(id); }, []);
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
function TimelineItem({ item, onOpen, index, isLast, detailsBtn }) {
  const c = item.color;
  return (
    <motion.div
      className="relative flex gap-4"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.09, duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center shrink-0 w-9">
        <div
          className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${c}18`, border: `1px solid ${c}35` }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        </div>
        {!isLast && <div className="flex-1 w-px mt-2 mb-0" style={{ background: "rgba(255,255,255,0.07)", minHeight: 16 }} />}
      </div>

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
            {detailsBtn}
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
    { id: "overview",     label: t.cv.overview     },
    { id: "experience",   label: t.cv.experience   },
    { id: "skills",       label: t.cv.skills       },
    { id: "volunteering", label: t.cv.volunteering },
    { id: "education",    label: t.cv.education    },
  ], [t]);

  const [activeTab, setActiveTab] = useState("overview");
  const [openItem,  setOpenItem]  = useState(null);

  const langBars = useMemo(() => {
    const pcts   = [100, 88, 28];
    const colors = [CORAL, SAGE, SAND];
    return t.cv.languages.map((l, i) => ({ name: l.name, level: l.level, pct: pcts[i], color: colors[i] }));
  }, [t]);

  const highlights = useMemo(() => [
    { val: "3",   lbl: t.cv.statLanguages,  color: CORAL },
    { val: "10y", lbl: t.cv.statWorkExp,    color: SAGE  },
    { val: "AEC", lbl: t.cv.statBackground, color: SAND  },
    { val: "IoT", lbl: t.cv.statFocus,      color: "rgba(255,255,255,0.55)" },
  ], [t]);

  const experience = useMemo(() => [
    {
      id: "student-horeca", color: CORAL,
      year: "2023 – Present",
      title:    t.cv.exp.horeca.title,
      subtitle: t.cv.exp.horeca.subtitle,
      bullets:  t.cv.exp.horeca.bullets,
    },
    {
      id: "ops-warehouse", color: SAGE,
      year: "2022 – 2023",
      title:    t.cv.exp.warehouse.title,
      subtitle: t.cv.exp.warehouse.subtitle,
      bullets:  t.cv.exp.warehouse.bullets,
    },
    {
      id: "customer-sales", color: SAND,
      year: "2013 – 2021",
      title:    t.cv.exp.sales.title,
      subtitle: t.cv.exp.sales.subtitle,
      bullets:  t.cv.exp.sales.bullets,
    },
    {
      id: "aec", color: SAND,
      year: "2015 – 2020",
      title:    t.cv.exp.aec.title,
      subtitle: t.cv.exp.aec.subtitle,
      bullets:  t.cv.exp.aec.bullets,
    },
  ], [t]);

  const volunteering = useMemo(() => [
    {
      id: "vol-barista", color: SAGE,
      year: "Oct 2022 – Dec 2024",
      title:    t.cv.vol.barista.title,
      subtitle: t.cv.vol.barista.subtitle,
      bullets:  t.cv.vol.barista.bullets,
    },
  ], [t]);

  const education = useMemo(() => [
    { title: t.cv.edu.cs.title,      subtitle: t.cv.edu.cs.subtitle,      year: "2022 – Present", active: true,  color: CORAL, icon: "🎓" },
    { title: t.cv.edu.arch.title,    subtitle: t.cv.edu.arch.subtitle,    year: "2014 – 2019",   active: false, color: SAND,  icon: "📐" },
    { title: t.cv.edu.autocad.title, subtitle: t.cv.edu.autocad.subtitle, year: "2016",          active: false, color: SAND,  icon: "📐" },
  ], [t]);

  const skillGroups = useMemo(() => [
    { label: t.cv.skillWeb,  color: CORAL, skills: ["Laravel", "Livewire", "Blade", "HTML5 / CSS3", "Tailwind CSS", "JavaScript", "Alpine.js", "PHP", "MySQL", "Eloquent ORM"] },
    { label: t.cv.skillData, color: SAGE,  skills: ["Qlik Sense", "Data modelling", "Excel (intermediate)", "Git / GitHub", "Jira", "VS Code"] },
    { label: t.cv.skillAec,  color: SAND,  skills: ["AutoCAD", "Revit", "BIM workflows", "Prezi", "Microsoft Office", "Google Workspace"] },
  ], [t]);

  const allItems = [...experience, ...volunteering];
  const openData  = openItem ? allItems.find(x => x.id === openItem) : null;

  return (
    <div className="grid gap-5">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 min-w-0">

            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border mb-4"
              style={{ color: CORAL, borderColor: `${CORAL}35`, background: `${CORAL}12` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: CORAL }} />
              {t.cv.headline}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-br from-white to-white/55 bg-clip-text text-transparent">
              {t.nav.cv}
            </h1>
            <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-xl">{t.cv.summary}</p>

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
            {t.cv.downloadBtn}
          </a>
        </div>

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
                <h2 className="text-base font-bold mb-6">{t.cv.languagesTitle}</h2>
                <div className="space-y-5">
                  {langBars.map(l => <LangBar key={l.name} {...l} />)}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-base font-bold mb-5">{t.cv.atAGlance}</h2>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {highlights.map(h => (
                    <div key={h.lbl} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-center">
                      <div className="text-xl font-bold" style={{ color: h.color }}>{h.val}</div>
                      <div className="text-[10px] text-white/35 mt-0.5 uppercase tracking-widest">{h.lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {t.cv.overviewBullets.map((b, i) => (
                    <div key={i} className="flex gap-2.5 text-sm text-white/60 items-start">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: CORAL }} />
                      {b}
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
                <h2 className="text-lg font-bold">{t.cv.experience}</h2>
                <span className="text-xs text-white/30">{t.cv.clickForDetails}</span>
              </div>
              {experience.map((e, i) => (
                <TimelineItem key={e.id} item={e} onOpen={setOpenItem} index={i} isLast={i === experience.length - 1} detailsBtn={t.cv.detailsBtn} />
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
                  <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: CORAL }}>{t.cv.softSkillsTitle}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {t.cv.softSkills.map((s, i) => (
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
              <h2 className="text-lg font-bold mb-6">{t.cv.volunteering}</h2>
              {volunteering.map((v, i) => (
                <TimelineItem key={v.id} item={v} onOpen={setOpenItem} index={i} isLast detailsBtn={t.cv.detailsBtn} />
              ))}
            </section>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-6">{t.cv.education}</h2>
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
                            {t.cv.activeLabel}
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