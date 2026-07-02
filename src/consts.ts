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
  contact: 'mailto:fungen_ai@proton.me',
};

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
  // Auto-derived from the EUR prices by the Admin app (live rate, rounded up to
  // the nearest 5). Falls back to the last-known values until the next publish.
  prices: [
    { label: 'Enthusiast', usdt: PRICING.usdt_enthusiast ?? 35 },
    { label: 'Pro 1 year', usdt: PRICING.usdt_pro_1year ?? 70 },
    { label: 'Pro perpetual', usdt: PRICING.usdt_pro_perpetual ?? 170 },
  ],
};

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
const PLAN_PRICE_KEYS = [null, 'enthusiast_eur', 'pro_1year_eur', 'pro_perpetual_eur'] as const;
const BASE_AMOUNTS = [0, PRICING.enthusiast_eur, PRICING.pro_1year_eur, PRICING.pro_perpetual_eur];

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
  listAmount?: number; // original numeric EUR, only when on promo
  listPrice?: string; // "€{listAmount}", struck-through, only when on promo
  promoLabel?: string; // promo.label, only when on promo
};

const PLAN_FLAGS = [
  { featured: false, event: 'plan-free-download' },
  { featured: false, event: 'plan-enthusiast' },
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
    href: `${LINKS.paypal}/${amount}`,
    featured: flags.featured,
    event: onPromo ? `${flags.event}-promo` : flags.event,
  };
  if (onPromo) {
    // The struck "was" price is just the regular base price (set in pricing.json
    // / the admin once) - never a second number on the promo.
    meta.listAmount = base;
    meta.listPrice = `€${base}`;
    meta.promoLabel = PROMO!.label;
  }
  return meta;
}

export const PLAN_META: PlanMeta[] = [0, 1, 2, 3].map(buildPlan);

// Numeric bounds for the SEO AggregateOffer (free tier included as lowPrice 0).
export const PRICE_LOW = Math.min(...PLAN_META.map((m) => m.amount));
export const PRICE_HIGH = Math.max(...PLAN_META.map((m) => m.amount));
