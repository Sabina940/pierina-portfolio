export const languages = ["en", "es", "nl"] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = "en";

export const languageLabels: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  nl: "NL",
};