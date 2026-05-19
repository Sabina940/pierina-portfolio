import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORAL = "#C96B4A";
const SAGE  = "#8FAF93";
const SAND  = "#C9BF9A";

const TAG_COLOR = {
  IoT:               SAGE,
  "Computer Vision": CORAL,
  Web:               SAND,
  AI:                CORAL,
  NLP:               CORAL,
  RAG:               CORAL,
  Python:            SAGE,
  Unity:             SAND,
  Agile:             SAND,
  "Raspberry Pi":    SAGE,
};

function tagColor(tag) {
  return TAG_COLOR[tag] ?? "rgba(255,255,255,0.55)";
}

function FilterPill({ label, active, onClick, count, isAll }) {
  const c = active
    ? (isAll ? CORAL : tagColor(label))
    : "rgba(255,255,255,0.45)";

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 flex items-center gap-1.5"
      style={
        active
          ? { color: "#fff", borderColor: `${c}55`, background: `${c}22` }
          : { color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.08)", background: "transparent" }
      }
    >
      {label}
      {count !== undefined && (
        <span
          className="rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none"
          style={{ background: active ? `${c}35` : "rgba(255,255,255,0.08)", color: active ? "#fff" : "rgba(255,255,255,0.35)" }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

function ProjectCard({ p, lang, index, featured, viewBtn }) {
  const accentColor = tagColor(p.tags?.[0]);

  return (
    <motion.a
      href={`/${lang}/projects/${p.slug}`}
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 block",
        featured ? "sm:col-span-2" : "",
      ].join(" ")}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
      style={{ willChange: "transform" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      {/* Cover image */}
      <div className={featured ? "relative aspect-[21/9]" : "relative aspect-[16/10]"}>
        <img
          src={p.cover}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Accent glow top-left */}
        <div
          className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ background: accentColor }}
        />

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold border"
            style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}18` }}
          >
            {p.year}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h2 className="text-lg font-bold leading-tight">{p.title}</h2>
          <p className="mt-1 text-sm text-white/70 leading-snug">{p.subtitle}</p>

          <div className="mt-3 flex items-end justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {(p.tags || []).slice(0, featured ? 5 : 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-medium border"
                  style={{
                    color: tagColor(tag),
                    borderColor: `${tagColor(tag)}35`,
                    background: `${tagColor(tag)}14`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow badge — slides in on hover */}
            <span
              className="shrink-0 rounded-xl border px-2.5 py-1.5 text-xs font-semibold opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}18` }}
            >
              {viewBtn}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsGrid({ lang = "en", projects = /** @type {any[]} */ ([]), labels = {} }) {
  const filterAll   = labels?.filterAll   ?? "All";
  const emptyState  = labels?.emptyState  ?? "No projects match this filter.";
  const viewBtn     = labels?.viewBtn     ?? "View →";

  const filters = useMemo(() => {
    const allTags = new Set();
    projects.forEach((p) => (p.tags || []).forEach((t) => allTags.add(t)));
    const preferred = ["IoT", "Computer Vision", "Web", "Unity", "Agile", "Python", "Raspberry Pi"];
    const rest = [...allTags].filter((t) => !preferred.includes(t)).sort();
    return ["All", ...preferred.filter((t) => allTags.has(t)), ...rest];
  }, [projects]);

  const tagCounts = useMemo(() => {
    const counts = { All: projects.length };
    projects.forEach((p) => (p.tags || []).forEach((t) => { counts[t] = (counts[t] ?? 0) + 1; }));
    return counts;
  }, [projects]);

  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => (p.tags || []).includes(active));
  }, [projects, active]);

  return (
    <div>
      {/* Filter pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <FilterPill
            key={f}
            label={f === "All" ? filterAll : f}
            active={active === f}
            onClick={() => setActive(f)}
            count={tagCounts[f]}
            isAll={f === "All"}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard
              key={p.slug}
              p={p}
              lang={lang}
              index={i}
              featured={i === 0 && active === "All"}
              viewBtn={viewBtn}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {visible.length === 0 && (
        <motion.div
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          <div className="text-2xl mb-2">🔍</div>
          <div className="text-white/60 text-sm">{emptyState}</div>
        </motion.div>
      )}
    </div>
  );
}