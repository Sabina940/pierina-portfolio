import { languages, type Lang, defaultLang } from "./config";

export function isLang(x: string): x is Lang {
  return (languages as readonly string[]).includes(x);
}

export function langFromPathname(pathname: string): Lang {
  const seg = pathname.split("/").filter(Boolean)[0];
  return seg && isLang(seg) ? seg : defaultLang;
}