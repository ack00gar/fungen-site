// Non-translatable, structural site data. All human copy now lives in the
// per-locale dictionaries under `src/i18n/`. Prices come from `pricing.json`
// (a mirror of FunGen_2/pricing.json that the FunGen Admin app writes), so the
// app's compiled-in prices and the website stay in lockstep from one source.
import PRICING_JSON from './pricing.json';

// Optional, data-driven promotion. The FunGen Admin app writes the `promo`
// object into pricing.json; the site never needs hand-editing. A promo only
// renders when `active` AND today is within [starts, ends]; the sale price is
// used for BOTH the displayed price and the PayPal URL so they cannot diverge.
type Promo = {
  active: boolean;
  label: string;
  starts: string; // ISO date, inclusive
  ends: string; // ISO date, inclusive
  prices: Record<string, number>; // saleEUR by pricing.json plan key; the
  // struck "was" price is the regular base price, so there is no separate list.
};
type Pricing = {
  enthusiast_eur: number;
  pro_1year_eur: number;
  pro_perpetual_eur: number;
  pro_perpetual_upgrade_eur: number;
  // USDT prices, auto-derived from EUR by the Admin app and published here.
  usdt_enthusiast?: number;
  usdt_pro_1year?: number;
  usdt_pro_perpetual?: number;
  usdt_pro_perpetual_upgrade?: number;
  promo?: Promo;
};
const PRICING = PRICING_JSON as Pricing;

export const SITE = {
  name: 'FunGen',
  version: '2.2.6-beta',
  // Canonical origin for SEO/meta (canonical, OG, sitemap, hreflang).
  url: 'https://fungen.app',
};

// Umami Cloud analytics (cookieless, privacy-first). The script auto-tracks
// pageviews; CTAs carry `data-umami-event` for click/conversion tracking.
export const ANALYTICS = {
  umamiWebsiteId: '96eed709-23e5-4bcc-8052-9f199aede92f',
  umamiSrc: 'https://cloud.umami.is/script.js',
};

export const LINKS = {
  releases: 'https://github.com/ack00gar/FunGen/releases',
  patreon: 'https://www.patreon.com/c/FunGen_AI',
  discord: 'https://discord.gg/WYkjMbtCZA',
  paypal: 'https://paypal.me/k00gar',
  // Purchase links go through the attribution redirect (counts the click as
  // 'web', then 302s to the same paypal.me/<handle>/<amount> page at the same
  // price - the app uses the /buy/app twin). Donations stay on LINKS.paypal.
  buy: 'https://updates.fungen.app/buy/web',
  contact: 'mailto:fungen_ai@proton.me',
  // The two GitHub repos, for the Organization's `sameAs`. Both outrank this
  // site for the brand name, so the entity signal has to say they are the
  // SAME thing and that this is its home - `releases` alone is a subpage and
  // names neither repo. `repoLegacy` is the 198-star original: it carries the
  // authority, which is precisely why it must be claimed rather than ignored.
  repo: 'https://github.com/ack00gar/FunGen',
  repoLegacy: 'https://github.com/ack00gar/FunGen-AI-Powered-Funscript-Generator',
};

// Which button raised the click, sent to the redirect as `?s=`. The
// worker records it so the admin can rank surfaces instead of guessing:
// 'web' vs 'app' could never say whether a sale came from the plan cards,
// the app's About window, or a Pro gate. The site has one buy surface
// today; a second one here means a second value, never a reused one.
const BUY_SURFACE = 'web-plan';

// Patreon checkout posts - the SECOND rail for the paid plans, offered beside
// PayPal on every plan card. PayPal is a single point of failure for all direct
// revenue (one paypal.me handle, both web and app), so a buyer whose PayPal is
// blocked, held, or unavailable in their country has a door that does not
// depend on it. Index-aligned with PLAN_PRICE_KEYS / BASE_AMOUNTS / PLAN_FLAGS;
// Free (index 0) has no purchase. These are POST links, not amount-parametric
// like `buy` - Patreon carries its own price, so the site's promo/sale logic
// deliberately does not touch them.
const PLAN_PATREON = [
  null,
  'https://www.patreon.com/FunGen_AI/posts/fungen-v2-pro-1-159291915', // Pro 1 year
  'https://www.patreon.com/FunGen_AI/posts/fungen-v2-pro-159710702', // Pro perpetual
] as const;

// Crypto payment (USDT-TRC20) - the regional alternative for places where cards
// / PayPal aren't supported (China, Vietnam, HK, much of SEA). The pricing-page
// block renders ONLY when usdtAddress is non-empty, so a placeholder never goes
// live. Paste your wallet's PUBLIC receiving address here - never a seed phrase
// or private key. USDT is a stablecoin (~USD), so prices are fixed.
export const CRYPTO = {
  usdtAddress: 'TYz8XdC9y3Fy2TjHndJjNvuZJvLrysAtrN', // USDT (TRC-20)
  // Bitcoin (on-chain) receiving address - public address ONLY, never a seed.
  // Empty = the BTC option is hidden. Buyers send the EUR-equivalent at the
  // current rate; verification happens at the live rate on redeem.
  btcAddress: 'bc1qf66kspjepnpnjcg6rxdffq8xnwa5lxsn5uj4xv',
  support: 'fungen_ai@proton.me',
  // Auto-derived from the effective EUR prices by the Admin app (live EUR/USD
  // rate, rounded to the NEAREST 5 - FX-fair, no crypto premium). Falls back
  // to the last-known values until the next publish. `eur` is the tier's EUR
  // price, shown beside the USDT amount so the fairness is visible.
  prices: [
    { label: 'Pro 1 year', usdt: PRICING.usdt_pro_1year ?? 70, eur: PRICING.pro_1year_eur },
    { label: 'Pro perpetual', usdt: PRICING.usdt_pro_perpetual ?? 170, eur: PRICING.pro_perpetual_eur },
  ],
};

// --- Local-currency price anchors (approximate, build time) -----------------
// For the zh / zh-hant / ja / ko money pages: the EUR price stays the charged
// truth, but a reader in Tokyo or Shenzhen shouldn't need mental FX to know
// what it costs - the foreign-currency flinch is a real conversion killer.
// Rates are fetched at BUILD time (open.er-api.com, no key) with a dated
// fallback so an offline build still renders sane numbers; the daily rebuild
// keeps them fresh. Always rendered with an approximation mark - PayPal
// charges EUR.
const FX_FALLBACK: Record<string, number> = {
  // EUR -> unit, 2026-07-31 (open.er-api.com). Refresh if >3% stale.
  CNY: 7.78,
  JPY: 184.8,
  KRW: 1644,
  TWD: 37.3,
  HKD: 9.03,
};
export const FX: Record<string, number> = { ...FX_FALLBACK };
try {
  const res = await fetch('https://open.er-api.com/v6/latest/EUR', {
    signal: AbortSignal.timeout(8000),
  });
  const rates = (await res.json())?.rates ?? {};
  for (const k of Object.keys(FX_FALLBACK)) {
    if (typeof rates[k] === 'number' && rates[k] > 0) FX[k] = rates[k];
  }
} catch {
  // Offline / API down: the dated fallback above renders instead.
}

/** Round a local-currency anchor to a believable, readable step. An anchor
 *  with false precision ("¥13,859") reads as a charged price; "¥13,900" reads
 *  as the approximation it is. */
const anchorRound = (v: number, step: number) => Math.round(v / step) * step;

/** "≈ ¥580" - the approximate local price for `eur` in the locale's home
 *  currency, or null where EUR needs no translation (everywhere else).
 *  zh-Hant serves TW + HK + MO, so it anchors in both NT$ and HK$. */
export function localApprox(eur: number, lang: string): string | null {
  if (eur <= 0) return null;
  const fmt = (v: number) => v.toLocaleString('en-US');
  switch (lang) {
    case 'zh':
      return `≈ ¥${fmt(anchorRound(eur * FX.CNY, 10))}`;
    case 'zh-hant':
      return `≈ NT$${fmt(anchorRound(eur * FX.TWD, 50))} / HK$${fmt(anchorRound(eur * FX.HKD, 10))}`;
    case 'ja':
      return `≈ ¥${fmt(anchorRound(eur * FX.JPY, 100))}`;
    case 'ko':
      return `≈ ₩${fmt(anchorRound(eur * FX.KRW, 1000))}`;
    default:
      return null;
  }
}

// Glyphs for the feature cards, in the same order as `features.items` in the
// locale dictionaries.
export const FEATURE_ICONS = ['✦', '⟡', '◉', '⇄', '◈', '✚'];

// Badges for the AI model cards, in the same order as `ai.models`.
export const AI_TAGS = ['2D', 'VR'];

// Device names are product names: identical across every locale.
export const DEVICES: string[] = [
  'The Handy',
  'Autoblow Ultra',
  'Vacuglide',
  'OSR2 / SR6 / SSR1',
  'Buttplug.io / Intiface',
];

// --- Promo resolution (all at build time) ----------------------------------
// Plan index -> pricing.json key (Free has no key). Same order as the plans.
const PLAN_PRICE_KEYS = [null, 'pro_1year_eur', 'pro_perpetual_eur'] as const;
const BASE_AMOUNTS = [0, PRICING.pro_1year_eur, PRICING.pro_perpetual_eur];

const todayISO = () => new Date().toISOString().slice(0, 10);

// A promo is "live" only when flagged active AND today is within [starts, ends].
function promoLive(p: Promo | undefined): p is Promo {
  if (!p || !p.active) return false;
  const t = todayISO();
  return p.starts <= t && t <= p.ends;
}

export const PROMO = PRICING.promo;
export const PROMO_ACTIVE = promoLive(PROMO);
/** ISO end date of the live promo (for the client-side expiry guard), else null. */
export const PROMO_ENDS = PROMO_ACTIVE ? PROMO!.ends : null;

// JSON-LD priceValidUntil: the promo's end when on promo, otherwise a year out.
export const PRICE_VALID_UNTIL = PROMO_ACTIVE
  ? PROMO!.ends
  : new Date(Date.now() + 365 * 86_400_000).toISOString().slice(0, 10);

// Per-plan structural data (price, buy link, visual highlight, promo), in the
// same order as `pricing.plans` in the locale dictionaries. The translatable
// name / cadence / blurb / perks / cta / badge come from the dictionary; the
// promo *label* comes from pricing.json (not the dictionaries) by design.
export type PlanMeta = {
  amount: number; // effective numeric EUR (the SALE price when on promo)
  price: string; // "€{amount}", the displayed + charged price
  href: string; // PayPal URL at `amount` so shown and charged price never diverge
  featured: boolean;
  event: string; // umami event; gets a "-promo" suffix while the plan is on promo
  // Patreon checkout for the same plan, shown as the alternative rail under the
  // PayPal CTA. Absent on Free. No "-promo" suffix on its event: Patreon prices
  // its own posts, so a site-side sale never applies to this link.
  patreon?: string;
  patreonEvent?: string;
  // Regular base price, only when on promo. NOT shown as a struck "was"
  // price (that compared against today's config value, not what a viewer
  // was ever actually charged) - kept only so the client-side expiry
  // guard can revert the price/link/event once the promo lapses between
  // static rebuilds. See the "Promo expiry guard" script in Landing.astro.
  listAmount?: number; // original numeric EUR
  listPrice?: string; // "€{listAmount}"
  promoLabel?: string; // promo.label, only when on promo
};

const PLAN_FLAGS = [
  { featured: false, event: 'plan-free-download' },
  { featured: true, event: 'plan-pro' },
  { featured: false, event: 'plan-pro-perpetual' },
];

function buildPlan(i: number): PlanMeta {
  const flags = PLAN_FLAGS[i];
  if (i === 0) {
    return { amount: 0, price: '€0', href: LINKS.releases, featured: flags.featured, event: flags.event };
  }
  const key = PLAN_PRICE_KEYS[i];
  const base = BASE_AMOUNTS[i];
  const sale = PROMO_ACTIVE && key != null ? PROMO!.prices?.[key] : undefined;
  // Only a real discount (sale below the regular base price) counts as a promo.
  const onPromo = sale != null && sale < base;
  const amount = onPromo ? sale! : base;
  const meta: PlanMeta = {
    amount,
    price: `€${amount}`,
    href: `${LINKS.buy}/${amount}?s=${BUY_SURFACE}`,
    featured: flags.featured,
    event: onPromo ? `${flags.event}-promo` : flags.event,
  };
  const patreon = PLAN_PATREON[i];
  if (patreon) {
    meta.patreon = patreon;
    meta.patreonEvent = `${flags.event}-patreon`;
  }
  if (onPromo) {
    // Not shown as a struck "was" price - see the PlanMeta field comments.
    meta.listAmount = base;
    meta.listPrice = `€${base}`;
    meta.promoLabel = PROMO!.label;
  }
  return meta;
}

// Enthusiast (formerly index 1) is no longer advertised - the plan set is
// Free / Pro 1-year / Pro Perpetual. Kept index-aligned with the locale
// `pricing.plans` arrays and PLAN_PRICE_KEYS / BASE_AMOUNTS / PLAN_FLAGS.
export const PLAN_META: PlanMeta[] = [0, 1, 2].map(buildPlan);

// Numeric bounds for the SEO AggregateOffer (free tier included as lowPrice 0).
export const PRICE_LOW = Math.min(...PLAN_META.map((m) => m.amount));
export const PRICE_HIGH = Math.max(...PLAN_META.map((m) => m.amount));
