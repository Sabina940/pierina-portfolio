import { useState, useRef, useEffect } from "react";

// ── project data — update asset paths when files are ready ────────────────────
const P = {
  title: "Smart Home Integration",
  subtitle: "IoT prototype for safer night-time routines for older adults · Mobilab & Care",
  year: "2025–2026",
  location: "Mobilab & Care · Thomas More Kempen",
  supervisors: "Bert Bonroy & Glen Debard",
  tags: [
    "Home Assistant", "Raspberry Pi 5", "MQTT", "Zigbee", "Python",
    "AppDaemon", "Alexa", "Matter Hub", "Nuki", "Telegram", "WhatsApp",
  ],
  videoSrc: "/assets/projects/internship/demo.mp4",
  links: [
    { label: "Realization Document", href: "/assets/projects/internship/realization-document.pdf" },
    { label: "Reflexion Document",   href: "/assets/projects/internship/reflection.pdf" },
  ],
  stats: [
    { val: "26",   lbl: "Automations" },
    { val: "5",    lbl: "Zones" },
    { val: "0",    lbl: "Cloud deps" },
    { val: "4",    lbl: "Deliverables" },
    { val: "13",   lbl: "Weeks" },
  ],
  context:
    "Prototype developed at Mobilab & Care (Thomas More Kempen) to support safer night-time routines for older adults living independently at home. Built on a locally controlled Home Assistant platform — no cloud dependency for safety functions. The Experience Lab apartment served as a realistic domestic test environment.",
  stack: [
    "Home Assistant OS", "Raspberry Pi 5", "Zigbee2MQTT", "Mosquitto MQTT",
    "Python / AppDaemon", "Matter Hub", "Nuki Bridge",
    "Telegram API", "CallMeBot / WhatsApp", "Alexa / Amazon Echo",
  ],
  tabs: [
    {
      id: "role", label: "My Role",
      items: [
        "Designed the full 5-layer system architecture — control, integration, input, output, and interface.",
        "Built 26 Home Assistant automations covering night path lighting, bathroom check-in, help mode escalation, and adaptive scheduling.",
        "Developed a Python / AppDaemon component that analyses night mode history and proposes schedule updates for user approval.",
        "Configured Alexa voice control via a locally hosted Matter Hub bridge — 6 routines covering all key scenarios.",
        "Produced 4 documentation deliverables for future reuse: realization document, user manual, installation guide, and maintenance manual.",
      ],
    },
    {
      id: "built", label: "What Was Built",
      items: [
        "Night path lighting — bedroom to bathroom at 15–25% brightness and 2000–2400 K, triggered passively by motion.",
        "Bathroom check-in flow — 5-minute inactivity timer escalates to a visual + audio nudge, then to full help mode if unanswered.",
        "Help mode — every light to 80%, Nuki lock opens automatically, Telegram and WhatsApp alerts fire simultaneously.",
        "Adaptive learning component — analyses activation history over a configurable window and proposes schedule updates.",
        "4-view dashboard — daily control (Thuis), recommendations (Helper), spatial testing (Plan), room inspection (Gebied).",
      ],
    },
    {
      id: "learned", label: "What I Learned",
      items: [
        "Safety-critical automations need humane escalation — the resident must have agency at every step, including from the floor.",
        "Network-dependent projects require resolving institutional dependencies early, not as a late troubleshooting step.",
        "Research-driven design: every brightness value, timer, and colour temperature was justified by peer-reviewed literature.",
        "Writing for four different audiences simultaneously requires four fundamentally different registers and levels of detail.",
        "Hardware capacity matters from the start — a Pi 3B ceiling forced a mid-project migration to Pi 5 with full backup restore.",
      ],
    },
  ],
  gallery: [
    { src: "/assets/projects/internship/dashboard-thuis.png",  alt: "Thuis view — daily control" },
    { src: "/assets/projects/internship/dashboard-plan.png",   alt: "Plan view — floor plan + live states" },
    { src: "/assets/projects/internship/dashboard-helper.png", alt: "Helper view — adaptive recommendations" },
    { src: "/assets/projects/internship/dashboard-gebied.png", alt: "Gebied view — room inspection" },
    { src: "/assets/projects/internship/electrical-plan.png",  alt: "Electrical plan — AREI standard" },
    { src: "/assets/projects/internship/architecture.png",     alt: "System architecture diagram" },
  ],
};

// ── VideoPlayer ───────────────────────────────────────────────────────────────
function VideoPlayer({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onEnd = () => setPlaying(false);
    v.addEventListener("ended", onEnd);
    return () => v.removeEventListener("ended", onEnd);
  }, []);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else         { ref.current.play();  setPlaying(true);  }
  };

  return (
    <div>
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video cursor-pointer"
        onClick={toggle}
      >
        <video
          ref={ref}
          src={src}
          preload="metadata"
          playsInline
          controls={playing}
          className="w-full h-full object-cover block"
        />
        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <button
            type="button"
            aria-label="Play demo"
            className="w-16 h-16 rounded-full bg-[#E8793C] flex items-center justify-center shadow-[0_0_32px_rgba(232,121,60,0.4)] hover:scale-105 transition-transform"
          >
            <svg width={22} height={22} viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-center text-xs text-white/35 mt-3">
        ▶  Smart Home Demo — night path · bathroom check-in · help mode · adaptive learning
      </p>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  return (
    <div className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center" onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/60 hover:text-white text-2xl px-2 transition">✕</button>
        {index > 0 && (
          <button onClick={onPrev} className="absolute -left-14 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl bg-white/10 px-3 py-3 rounded-xl transition">‹</button>
        )}
        <img src={img.src} alt={img.alt} className="max-w-[88vw] max-h-[80vh] rounded-2xl object-contain block" />
        {index < images.length - 1 && (
          <button onClick={onNext} className="absolute -right-14 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-2xl bg-white/10 px-3 py-3 rounded-xl transition">›</button>
        )}
        <p className="text-center text-white/45 text-xs mt-3">{img.alt}</p>
      </div>
    </div>
  );
}

// ── GalleryItem ───────────────────────────────────────────────────────────────
function GalleryItem({ img, onClick }) {
  const [err, setErr] = useState(false);
  return (
    <div
      onClick={onClick}
      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/8 bg-white/5 group"
    >
      {err ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-white/25 text-[10px] gap-2 p-2 text-center">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <rect x={3} y={3} width={18} height={18} rx={2} />
            <circle cx={8.5} cy={8.5} r={1.5} />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          {img.alt}
        </div>
      ) : (
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          onError={() => setErr(true)}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-0 bg-[#0D1B2A]/0 group-hover:bg-[#0D1B2A]/60 transition-all duration-200 flex items-end p-2">
        <span className="text-transparent group-hover:text-white/80 text-[10px] leading-tight transition-all duration-200">{img.alt}</span>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InternshipDashboard() {
  const [activeTab, setActiveTab] = useState("role");
  const [lightbox, setLightbox]   = useState(null);
  const currentTab = P.tabs.find((t) => t.id === activeTab);

  return (
    <div className="grid gap-6">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2BA08A]/30 bg-[#2BA08A]/10 px-3 py-1 text-xs text-[#2BA08A] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2BA08A] inline-block" />
            Completed · {P.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {P.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition"
              >
                <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                </svg>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{P.title}</h1>
        <p className="text-white/65 mb-4">{P.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs border border-white/10 rounded-full px-3 py-1 text-white/45">{P.location}</span>
          <span className="text-xs border border-white/10 rounded-full px-3 py-1 text-white/45">Supervisors: {P.supervisors}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {P.tags.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-md border border-[#E8793C]/25 bg-[#E8793C]/8 text-[#E8793C]">{t}</span>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {P.stats.map((s) => (
          <div key={s.lbl} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-bold text-[#E8793C]">{s.val}</div>
            <div className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── VIDEO ────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <VideoPlayer src={P.videoSrc} />
      </section>

      {/* ── ABOUT + STACK  |  TABS ───────────────────────────────────────── */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-3">About</p>
            <p className="text-sm text-white/65 leading-relaxed">{P.context}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {P.stack.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-white/55">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="flex border-b border-white/10 px-2 pt-2">
            {P.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition -mb-px ${
                  activeTab === t.id
                    ? "text-white border-[#E8793C]"
                    : "text-white/45 border-transparent hover:text-white/75"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <ul className="p-6 space-y-3">
            {currentTab.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#E8793C] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-4">Gallery</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {P.gallery.map((img, i) => (
            <GalleryItem key={i} img={img} onClick={() => setLightbox(i)} />
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          images={P.gallery}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => Math.max(0, i - 1))}
          onNext={() => setLightbox((i) => Math.min(P.gallery.length - 1, i + 1))}
        />
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-white/25 pb-2">
        {P.supervisors} · Thomas More Kempen · Mobilab & Care · {P.year}
      </p>

    </div>
  );
}
