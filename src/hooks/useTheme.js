import { useState, useEffect, useLayoutEffect } from "react";

const useLayoutEffectSafe = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffectSafe(() => {
    const el = document.documentElement;
    setIsDark(el.classList.contains("dark"));
    const obs = new MutationObserver(() => {
      const dark = el.classList.contains("dark");
      setIsDark((prev) => (prev === dark ? prev : dark));
    });
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return isDark;
}
