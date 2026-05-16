import { useState, useRef, useEffect } from "react";

// Static data that never changes across languages
const STATIC = {
  year:        "2025–2026",
  location:    "Mobilab & Care · Thomas More Kempen",
  supervisors: "Bert Bonroy & Glen Debard",
  tags: [
    "Home Assistant", "Raspberry Pi 5", "MQTT", "Zigbee", "Python",
    "AppDaemon", "Alexa", "Matter Hub", "Nuki", "Telegram", "WhatsApp",
  ],
  videoSrc: "/assets/projects/internship/demo.mp4",
  links: [
    { label: "Realization Document", href: "/assets/projects/internship/realization-document.pdf" },
    { label: "Reflection Document",  href: "/assets/projects/internship/reflection.pdf" },
  ],
  stack: [
    "Home Assistant OS", "Raspberry Pi 5", "Zigbee2MQTT", "Mosquitto MQTT",
    "Python / AppDaemon", "Matter Hub", "Nuki Bridge",
    "Telegram API", "CallMeBot / WhatsApp", "Alexa / Amazon Echo",
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
function VideoPlayer({ src, caption }) {
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
      <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video cursor-pointer" onClick={toggle}>
        <video ref={ref} src={src} preload="metadata" playsInline controls={playing} className="w-full h-full object-cover block" />
        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <button type="button" aria-label="Play demo"
            className="w-16 h-16 rounded-full bg-[#C96B4A] flex items-center justify-center shadow-[0_0_32px_rgba(201,107,74,0.4)] hover:scale-105 transition-transform">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
      </div>
      <p className="text-center text-xs text-white/35 mt-3">▶  {caption}</p>
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
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
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
    <div onClick={onClick} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/8 bg-white/5 group">
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
        <img src={img.src} alt={img.alt} loading="lazy" onError={() => setErr(true)}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.04]" />
      )}
      <div className="absolute inset-0 bg-[#0F2018]/0 group-hover:bg-[#0F2018]/60 transition-all duration-200 flex items-end p-2">
        <span className="text-transparent group-hover:text-white/80 text-[10px] leading-tight transition-all duration-200">{img.alt}</span>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InternshipDashboard({ t }) {
  const i = t.internship;

  const tabs = [
    { id: "role",    label: i.tabs.role.label,    items: i.tabs.role.items    },
    { id: "built",   label: i.tabs.built.label,   items: i.tabs.built.items   },
    { id: "learned", label: i.tabs.learned.label, items: i.tabs.learned.items },
  ];

  const [activeTab, setActiveTab] = useState("role");
  const [lightbox,  setLightbox]  = useState(null);
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="grid gap-6">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8FAF93]/30 bg-[#8FAF93]/10 px-3 py-1 text-xs text-[#8FAF93] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF93] inline-block" />
            {i.completedLabel} · {STATIC.year}
          </span>
          <div className="flex flex-wrap gap-2">
            {STATIC.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition">
                <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
                </svg>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{i.title}</h1>
        <p className="text-white/65 mb-4">{i.subtitle}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs border border-white/10 rounded-full px-3 py-1 text-white/45">{STATIC.location}</span>
          <span className="text-xs border border-white/10 rounded-full px-3 py-1 text-white/45">{i.supervisorsLabel}: {STATIC.supervisors}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {STATIC.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md border border-[#C96B4A]/25 bg-[#C96B4A]/8 text-[#C96B4A]">{tag}</span>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {i.stats.map((s) => (
          <div key={s.lbl} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl font-bold text-[#C96B4A]">{s.val}</div>
            <div className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* ── VIDEO ────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <VideoPlayer src={STATIC.videoSrc} caption={i.videoCaption} />
      </section>

      {/* ── ABOUT + STACK  |  TABS ───────────────────────────────────────── */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-3">{i.aboutLabel}</p>
            <p className="text-sm text-white/65 leading-relaxed">{i.context}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-3">{i.stackLabel}</p>
            <div className="flex flex-wrap gap-2">
              {STATIC.stack.map((s) => (
                <span key={s} className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-white/55">{s}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="flex border-b border-white/10 px-2 pt-2">
            {tabs.map((tab) => (
              <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition -mb-px ${
                  activeTab === tab.id
                    ? "text-white border-[#C96B4A]"
                    : "text-white/45 border-transparent hover:text-white/75"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
          <ul className="p-6 space-y-3">
            {currentTab.items.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#C96B4A] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35 mb-4">{i.galleryLabel}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {STATIC.gallery.map((img, idx) => (
            <GalleryItem key={idx} img={img} onClick={() => setLightbox(idx)} />
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          images={STATIC.gallery}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((idx) => Math.max(0, idx - 1))}
          onNext={() => setLightbox((idx) => Math.min(STATIC.gallery.length - 1, idx + 1))}
        />
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <p className="text-center text-xs text-white/25 pb-2">
        {STATIC.supervisors} · Thomas More Kempen · Mobilab & Care · {STATIC.year}
      </p>

    </div>
  );
}