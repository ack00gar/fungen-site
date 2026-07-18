// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ── Hosting config ────────────────────────────────────────────────────────────
// Served on the custom domain fungen.app (apex) via GitHub Pages.
// `public/CNAME` pins the domain; assets use BASE_URL so base:'/' resolves them
// at the site root. To revert to the project page, restore:
//     site: 'https://ack00gar.github.io',
//     base: '/fungen-site',
// and delete public/CNAME.
// ──────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://fungen.app',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Emit hreflang alternates so Google groups the localized pages and
      // serves each visitor the right language. Keys are the URL path
      // prefixes (/de/, /zh/, ...); values are the hreflang codes.
      i18n: {
        defaultLocale: 'en',
        locales: {
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
        },
      },
    }),
  ],
});
