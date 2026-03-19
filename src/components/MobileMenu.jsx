import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderKanban,
  FileText,
  Mail,
  Linkedin,
  Github,
  Languages,
} from "lucide-react";

export default function MobileMenu({ active = "home", lang = "en", labels }) {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setCurrentLang(saved);
    }, []);

  useEffect(() => {
    localStorage.setItem("lang", currentLang);
    }, [currentLang]);

  const nav = [
  { id: "home", label: labels?.home ?? "Home", href: `/${currentLang}/`, icon: Home },
  { id: "about", label: labels?.about ?? "About", href: `/${currentLang}/about`, icon: User },
  { id: "internship", label: labels?.internship ?? "Internship", href: `/${currentLang}/internship`, icon: Briefcase },
  { id: "projects", label: labels?.projects ?? "Projects", href: `/${currentLang}/projects`, icon: FolderKanban },
  { id: "cv", label: labels?.cv ?? "CV", href: `/${currentLang}/cv`, icon: FileText },
];

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
    }, [open]);

  const LangButton = ({ code, label }) => (
    <button
      onClick={() => {
        setCurrentLang(code);
        localStorage.setItem("lang", code);

        const parts = window.location.pathname.split("/").filter(Boolean);
        // if current path starts with a lang, replace it
        if (["en", "es", "nl"].includes(parts[0])) parts[0] = code;
        else parts.unshift(code);

        window.location.pathname = "/" + parts.join("/") + (window.location.pathname.endsWith("/") ? "/" : "");
        }}
      type="button"
    >
      {label}
    </button>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[2147483646] bg-black/60"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed left-0 top-0 z-[2147483647] h-full w-[86%] max-w-sm border-r border-white/10 bg-neutral-950 p-5 "
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={`/${currentLang}/`}
                    onClick={() => setOpen(false)}
                    aria-label="Go to Home"
                    className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center overflow-hidden hover:bg-white/10 transition"
                  >
                    <img src="/favicon/favicon-32x32.png" alt="Pierina Lopez" className="h-6 w-6" />
                  </a>
                  <div className="leading-tight">
                    <div className="font-semibold">Pierina Lopez</div>
                    <div className="text-xs text-white/60">Applied Computer Science</div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mt-6 rounded-2xl border space-y-1 bg-black">
                {nav.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === active;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition border",
                        isActive
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-transparent border-transparent text-white/70 hover:text-white hover:bg-white/5 hover:border-white/10",
                      ].join(" ")}
                    >
                      <Icon size={16} className={isActive ? "text-white" : "text-white/60"} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Languages size={16} />
                  Language
                </div>
                <div className="mt-3 flex gap-2">
                  <LangButton code="en" label="EN" />
                  <LangButton code="es" label="ES" />
                  <LangButton code="nl" label="NL" />
                </div>
                
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black p-4">
                <div className="text-sm font-semibold mb-2">Contact</div>
                <div className="space-y-2 text-sm">
                  <a className="flex items-center gap-2 text-white/75 hover:text-white" href="mailto:plopez.be.94@gmail.com">
                    <Mail size={16} className="text-white/60" />
                    e-mail
                  </a>
                  <a className="flex items-center gap-2 text-white/75 hover:text-white" href="https://www.linkedin.com/in/pierina-lopez-60b68524b/" target="_blank">
                    <Linkedin size={16} className="text-white/60" />
                    LinkedIn
                  </a>
    
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}