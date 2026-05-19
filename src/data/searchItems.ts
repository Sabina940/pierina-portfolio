import { getProjects } from "../content/projects";
import { cv } from "../content/cv";

export type SearchItem = {
  id: string;
  type: "project" | "skill" | "experience" | "page";
  title: string;
  subtitle: string;
  badge: string;
  body: string;
  url: string;
};

export function getSearchItems(lang: string): SearchItem[] {
  const projects = getProjects(lang);
  const items: SearchItem[] = [];

  // ── Pages ──────────────────────────────────────────────────────────────
  items.push(
    { id: "page-home",        type: "page", title: "Home",       subtitle: "Portfolio overview",                                badge: "Page",       body: "home portfolio overview",                                  url: `/${lang}/` },
    { id: "page-about",       type: "page", title: "About",      subtitle: "Who I am, journey, hobbies",                       badge: "Page",       body: "about me Belgium IoT architecture journey hobbies",        url: `/${lang}/about` },
    { id: "page-internship",  type: "page", title: "Internship", subtitle: "Smart home IoT internship at Mobilab & Care",      badge: "Page",       body: "internship Mobilab Care smart home IoT Thomas More 2025",  url: `/${lang}/internship` },
    { id: "page-projects",    type: "page", title: "Projects",   subtitle: "Case studies — AI, IoT, Web, Computer Vision",     badge: "Page",       body: "projects case studies AI IoT web computer vision python",  url: `/${lang}/projects` },
    { id: "page-cv",          type: "page", title: "CV / Resume", subtitle: "Skills, experience, education",                   badge: "Page",       body: "cv resume skills experience education download",           url: `/${lang}/cv` },
  );

  // ── Projects ───────────────────────────────────────────────────────────
  for (const p of projects) {
    items.push({
      id: `project-${p.slug}`,
      type: "project",
      title: p.title,
      subtitle: p.subtitle,
      badge: "Project",
      body: [
        p.year,
        p.tags.join(" "),
        p.sections.stack.join(" "),
        p.sections.context,
        p.sections.role.join(" "),
        p.sections.built.join(" "),
        p.sections.learned.join(" "),
      ].join(" "),
      url: `/${lang}/projects/${p.slug}`,
    });
  }

  // ── Technical Skills ───────────────────────────────────────────────────
  for (const [category, skills] of Object.entries(cv.technicalSkills)) {
    items.push({
      id: `skill-${category.toLowerCase().replace(/\W+/g, "-")}`,
      type: "skill",
      title: category,
      subtitle: (skills as string[]).slice(0, 4).join(", "),
      badge: "Skills",
      body: `skills ${category} ${(skills as string[]).join(" ")}`,
      url: `/${lang}/cv`,
    });
  }

  // ── Soft Skills ────────────────────────────────────────────────────────
  items.push({
    id: "soft-skills",
    type: "skill",
    title: "Soft Skills",
    subtitle: cv.softSkills.slice(0, 3).join(", "),
    badge: "Skills",
    body: `soft skills teamwork communication ${cv.softSkills.join(" ")}`,
    url: `/${lang}/cv`,
  });

  // ── Experience ────────────────────────────────────────────────────────
  for (let i = 0; i < cv.timeline.length; i++) {
    const item = cv.timeline[i];
    items.push({
      id: `exp-${i}`,
      type: "experience",
      title: item.title,
      subtitle: `${item.company} · ${item.location}`,
      badge: "Experience",
      body: [item.title, item.company, item.location, item.period, ...item.bullets, ...(item.tags ?? [])].join(" "),
      url: `/${lang}/cv`,
    });
  }

  // ── Education ─────────────────────────────────────────────────────────
  for (let i = 0; i < cv.education.length; i++) {
    const item = cv.education[i];
    items.push({
      id: `edu-${i}`,
      type: "skill",
      title: item.title,
      subtitle: `${item.place} · ${item.period}`,
      badge: "Education",
      body: `education degree ${item.title} ${item.place} ${item.period}`,
      url: `/${lang}/cv`,
    });
  }

  // ── Languages ─────────────────────────────────────────────────────────
  items.push({
    id: "languages",
    type: "skill",
    title: "Languages",
    subtitle: cv.languages.map((l) => `${l.label} (${l.level})`).join(" · "),
    badge: "Skills",
    body: `languages ${cv.languages.map((l) => `${l.label} ${l.level}`).join(" ")} Spanish English Dutch bilingual`,
    url: `/${lang}/cv`,
  });

  return items;
}
