import { useMemo, useState } from "react";

export default function ProjectsGrid({ lang = "en", projects = /** @type {any[]} */ ([]) }) {
  const filters = useMemo(() => {
    const allTags = new Set();
    projects.forEach((p) => (p.tags || []).forEach((t) => allTags.add(t)));
    // Keep it simple + consistent order (you can customize later)
    const preferred = ["IoT", "Computer Vision", "Web", "Unity", "Agile", "Python", "Raspberry Pi"];
    const rest = [...allTags].filter((t) => !preferred.includes(t)).sort();
    const ordered = preferred.filter((t) => allTags.has(t)).concat(rest);
    return ["All", ...ordered];
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
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition",
              active === f
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10",
            ].join(" ")}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {visible.map((p) => (
          <a
            key={p.slug}
            href={`/${lang}/projects/${p.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition will-change-transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10]">
              <img
                src={p.cover}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <span className="text-xs text-white/60">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-white/75">{p.subtitle}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.tags || []).slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-xs text-white/70 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Empty state */}
      {visible.length === 0 && (
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
          No projects match this filter.
        </div>
      )}
    </div>
  );
}