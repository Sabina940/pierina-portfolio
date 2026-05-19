import { useState, useEffect, useMemo, useRef, useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { Search, X, CornerDownLeft } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { getSearchItems } from "../data/searchItems";

const BADGE_COLORS = {
  Page:       "#C9BF9A",
  Project:    "#C96B4A",
  Skills:     "#8FAF93",
  Education:  "#8FAF93",
  Experience: "#C9BF9A",
};

const DEFAULT_COUNT = 7;

export default function SearchBar({ lang = "en" }) {
  const [open, setOpen]     = useState(false);
  const [query, setQuery]   = useState("");
  const [cursor, setCursor] = useState(0);
  const isDark    = useTheme();
  const inputRef  = useRef(null);
  const listRef   = useRef(null);

  const items = useMemo(() => getSearchItems(lang), [lang]);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        keys: [
          { name: "title",    weight: 4 },
          { name: "subtitle", weight: 2 },
          { name: "badge",    weight: 1 },
          { name: "body",     weight: 1 },
        ],
        threshold: 0.38,
        ignoreLocation: true,
        includeScore: true,
      }),
    [items]
  );

  const results = useMemo(() => {
    if (!query.trim()) return items.slice(0, DEFAULT_COUNT);
    return fuse.search(query).slice(0, 8).map((r) => r.item);
  }, [query, fuse, items]);

  // ── Keyboard shortcut ────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // ── Focus input when opened ──────────────────────────────────────────
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      setQuery("");
      setCursor(0);
      return () => clearTimeout(t);
    }
  }, [open]);

  // ── Arrow-key navigation ─────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape")    { setOpen(false); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setCursor((c) => Math.min(c + 1, results.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setCursor((c) => Math.max(c - 1, 0)); }
      if (e.key === "Enter" && results[cursor]) {
        window.location.href = results[cursor].url;
      }
    },
    [results, cursor]
  );

  // ── Scroll active item into view ─────────────────────────────────────
  useEffect(() => {
    listRef.current?.children[cursor]?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  useEffect(() => setCursor(0), [results]);

  // ── Theme-aware styles ───────────────────────────────────────────────
  const bg        = isDark ? "#0F2018"                      : "#F5F2EC";
  const border    = isDark ? "rgba(255,255,255,0.10)"       : "rgba(15,32,24,0.12)";
  const inputBg   = isDark ? "rgba(255,255,255,0.04)"       : "rgba(15,32,24,0.04)";
  const mutedText = isDark ? "rgba(255,255,255,0.40)"       : "rgba(15,32,24,0.40)";
  const mainText  = isDark ? "rgba(255,255,255,0.90)"       : "#0F2018";

  return (
    <>
      {/* ── Trigger button ─────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors"
        style={{ background: inputBg, borderColor: border, color: mutedText }}
      >
        <Search size={13} className="shrink-0" />
        <span className="flex-1 text-left text-xs">Search...</span>
        <kbd
          className="hidden sm:inline-flex rounded px-1.5 py-0.5 text-[10px] font-medium"
          style={{ background: isDark ? "rgba(255,255,255,0.07)" : "rgba(15,32,24,0.07)", color: mutedText }}
        >
          ⌘K
        </kbd>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop */}
                <motion.div
                  style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />

                {/* Panel */}
                <motion.div
                  style={{
                    position: "fixed",
                    top: "13%",
                    left: "50%",
                    zIndex: 9999,
                    width: "min(94vw, 580px)",
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    boxShadow: "0 32px 72px rgba(0,0,0,0.40), 0 0 0 1px rgba(0,0,0,0.08)",
                  }}
                  initial={{ opacity: 0, y: -12, x: "-50%", scale: 0.97 }}
                  animate={{ opacity: 1, y: 0,   x: "-50%", scale: 1    }}
                  exit={{    opacity: 0, y: -8,   x: "-50%", scale: 0.97 }}
                  transition={{ duration: 0.17, ease: "easeOut" }}
                >
                  {/* Search input row */}
                  <div
                    className="flex items-center gap-3 px-4 py-3.5"
                    style={{ borderBottom: `1px solid ${border}` }}
                  >
                    <Search size={16} style={{ color: mutedText, flexShrink: 0 }} />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search projects, skills, experience..."
                      className="flex-1 bg-transparent outline-none text-sm"
                      style={{ color: mainText }}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    {query ? (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="rounded-lg p-1 transition-colors"
                        style={{ color: mutedText }}
                      >
                        <X size={14} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-lg p-1 transition-colors"
                        style={{ color: mutedText }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Results list */}
                  <div ref={listRef} className="max-h-[340px] overflow-y-auto py-2 px-2">
                    {results.length === 0 ? (
                      <div className="py-10 text-center text-sm" style={{ color: mutedText }}>
                        No results for "{query}"
                      </div>
                    ) : (
                      results.map((item, i) => {
                        const isActive   = i === cursor;
                        const badgeColor = BADGE_COLORS[item.badge] ?? "#C9BF9A";
                        return (
                          <a
                            key={item.id}
                            href={item.url}
                            onMouseEnter={() => setCursor(i)}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
                            style={{
                              background: isActive
                                ? isDark ? "rgba(201,107,74,0.12)" : "rgba(201,107,74,0.08)"
                                : "transparent",
                            }}
                          >
                            {/* Badge */}
                            <span
                              className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                              style={{
                                color: badgeColor,
                                background: `${badgeColor}18`,
                                border: `1px solid ${badgeColor}30`,
                                minWidth: "4.5rem",
                                textAlign: "center",
                              }}
                            >
                              {item.badge}
                            </span>

                            {/* Text */}
                            <div className="flex-1 min-w-0">
                              <div
                                className="text-sm font-medium truncate"
                                style={{ color: isActive ? "#C96B4A" : mainText }}
                              >
                                {item.title}
                              </div>
                              {item.subtitle && (
                                <div className="text-xs truncate mt-0.5" style={{ color: mutedText }}>
                                  {item.subtitle}
                                </div>
                              )}
                            </div>

                            {/* Arrow */}
                            <CornerDownLeft
                              size={13}
                              style={{ color: isActive ? "#C96B4A" : "transparent", flexShrink: 0 }}
                            />
                          </a>
                        );
                      })
                    )}
                  </div>

                  {/* Footer hints */}
                  <div
                    className="flex items-center gap-4 px-4 py-2.5 text-[11px]"
                    style={{ borderTop: `1px solid ${border}`, color: mutedText }}
                  >
                    <span><kbd className="font-mono">↑↓</kbd> navigate</span>
                    <span><kbd className="font-mono">↵</kbd> open</span>
                    <span><kbd className="font-mono">esc</kbd> close</span>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
