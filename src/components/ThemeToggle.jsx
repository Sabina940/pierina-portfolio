import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const isDark = useTheme();

  const toggle = () => {
    const html = document.documentElement;
    const nowDark = !html.classList.contains("dark");
    html.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
