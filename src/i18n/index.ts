// Locale registry + helpers. Each locale file mirrors the shape of `en`
// (the canonical source) and is type-checked against `Strings` at build time.
import type { Strings } from './en';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { ru } from './ru';
import { zh } from './zh';
import { zhHant } from './zh-hant';

export type { Strings };

export type Locale =
  | 'en'
  | 'de'
  | 'es'
  | 'fr'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pt'
  | 'ru'
  | 'zh'
  | 'zh-hant';

export const DEFAULT_LOCALE: Locale = 'en';

// Render order for the switcher (default first, then alphabetical by code).
export const LOCALES: Locale[] = [
  'en',
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'pt',
  'ru',
  'zh',
  'zh-hant',
];

// The non-default locales, used by getStaticPaths for the /[lang]/ routes.
export const SUB_LOCALES: Locale[] = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

// BCP-47 codes for <html lang> and hreflang. The two Chinese locales are
// distinguished by SCRIPT, not region: `zh-Hans` (mainland, Simplified) and
// `zh-Hant` (Traditional). Script-based targeting means one Traditional page
// serves TW, HK and MO rather than needing a locale each. The URL segment
// stays lowercase (`/zh-hant/`) so nothing depends on path casing; this map
// is the only place the canonical BCP-47 casing matters.
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  pt: 'pt',
  ru: 'ru',
  zh: 'zh-Hans',
  'zh-hant': 'zh-Hant',
};

export const STRINGS: Record<Locale, Strings> = {
  en,
  de,
  es,
  fr,
  it,
  ja,
  ko,
  pt,
  ru,
  zh,
  'zh-hant': zhHant,
};

export function t(locale: Locale): Strings {
  return STRINGS[locale] ?? en;
}

/** Site-root-relative home path for a locale ("/" for default, "/xx/" else). */
export function localeHome(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

/** Is this string one of our supported locale codes? */
export function isLocale(x: string): x is Locale {
  return (LOCALES as string[]).includes(x);
}
