import { useMemo, useState, useEffect } from "react";

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function Modal({ open, title, subtitle, bullets = [], onClose }) {
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
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">{subtitle}</div>
            <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
          >
            Close
          </button>
        </div>

        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-white/75">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">• {b}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-white/70">No details yet.</p>
        )}
      </div>
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-[11px] text-white/50">{label}</div>
      <div className="mt-0.5 text-sm text-white/80">{value}</div>
    </div>
  );
}

function MiniBar({ value = 35 }) {
  return (
    <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
      <div
        className="h-full rounded-full bg-white/25"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function InternshipDashboard() {
  // edit these freely
  const meta = useMemo(
    () => ({
      title: "Internship",
      subtitle: "Smart Home Prototypes for Elderly Care • Home Assistant + IoT",
      status: "In progress",
      location: "Mobilab & Care Experience Lab • Thomas More (Belgium)",
      stack: ["Raspberry Pi", "Home Assistant", "MQTT", "Zigbee", "Python", "Dashboards"],
      progress: 30,
    }),
    []
  );

  const now = useMemo(
    () => [
      "Setting up a stable Home Assistant environment (server + dashboard device).",
      "Preparing the network infrastructure with IT so devices are reachable on the same network.",
      "Defining the first prototype scope: sensors → data → dashboard → basic automations.",
    ],
    []
  );

  const next = useMemo(
    () => [
      "Connect Zigbee coordinator + first Zigbee devices (bulbs/sensors) and verify reliability.",
      "Document architecture + data flow (sensor → MQTT → Home Assistant → dashboard).",
      "Build the first demo scenario (presence/zone-based lighting + alerts).",
    ],
    []
  );

  const deliverables = useMemo(
    () => [
      {
        title: "Architecture diagram",
        desc: "Sensors → MQTT → Home Assistant → dashboard, with notes for scaling.",
      },
      {
        title: "Prototype demo",
        desc: "A clear scenario focused on elderly-friendly interaction and reliability.",
      },
      {
        title: "Weekly logs",
        desc: "Short updates: progress, blockers, next actions.",
      },
    ],
    []
  );



  const sections = useMemo(
    () => [
      { id: "now", label: "Now", hint: "What I’m doing" },
      { id: "next", label: "Next", hint: "What’s coming" },
      { id: "deliver", label: "Deliverables", hint: "What will be shipped" },
    ],
    []
  );

  const [active, setActive] = useState("now");
  const [openLog, setOpenLog] = useState(null);

  const activeTitle =
    active === "now" ? "What I’m doing now" :
    active === "next" ? "What’s next" :
    active === "deliver" ? "Planned deliverables" :
    "Weekly log";

  return (
    <div className="grid gap-6">
      {/* HERO */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
              Live case study
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              {meta.title}
            </h1>
            <p className="mt-3 text-white/75">{meta.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/70">
                Status: {meta.status}
              </span>
              <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/70">
                {meta.location}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {meta.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-xs text-white/70">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: mini dashboard */}
          <div className="w-full sm:max-w-[340px]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">Progress</div>
                <div className="text-xs text-white/60">{meta.progress}%</div>
              </div>
              <MiniBar value={meta.progress} />

              <div className="mt-4 grid grid-cols-2 gap-2">
                <StatPill label="Environment" value="Configured" />
                <StatPill label="Network" value="In setup" />
                <StatPill label="Zigbee" value="Pending" />
                <StatPill label="Demo" value="Planned" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN DASHBOARD (no long scrolling) */}
      <section className="grid gap-5 lg:grid-cols-[280px_1fr]">
        {/* Left navigator */}
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white">Navigator</div>
          <div className="mt-3 grid gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={cx(
                  "rounded-2xl border px-4 py-3 text-left transition",
                  active === s.id
                    ? "border-white/20 bg-white/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{s.label}</div>
                  <div className={cx("text-xs", active === s.id ? "text-white/70" : "text-white/50")}>
                    →
                  </div>
                </div>
                <div className="mt-1 text-xs text-white/60">{s.hint}</div>
              </button>
            ))}
          </div>
        </aside>

        {/* Right panel */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">{activeTitle}</h2>
              <p className="mt-2 text-white/70">
                {active === "log"
                  ? "Click an entry to open details."
                  : ""}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
              Updated recently
            </div>
          </div>

          {/* Panel content */}
          {active === "now" && (
            <ul className="m-6 text-white/75">
            {now.map((x) => (
                <li
                key={x}
                className="rounded-2xl p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-white/10 transition"
                >
                • {x}
                </li>
            ))}
            </ul>
          )}

          {active === "next" && (
            <ul className="m-2 text-white/75">
            {now.map((x) => (
                <li
                key={x}
                className="rounded-2xl p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:bg-white/10 transition"
                >
                • {x}
                </li>
            ))}
            </ul>
          )}

          {active === "deliver" && (
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-base font-semibold">{d.title}</div>
                  <p className="mt-2 text-sm text-white/70">{d.desc}</p>
                </div>
              ))}
            </div>
          )}

          
        </div>
      </section>

      <Modal
        open={!!openLog}
        title={openLog?.title}
        subtitle={openLog?.subtitle}
        bullets={openLog?.bullets}
        onClose={() => setOpenLog(null)}
      />
    </div>
  );
}