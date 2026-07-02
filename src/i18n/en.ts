// English is the canonical source dictionary. Every other locale file mirrors
// this exact shape (enforced by `satisfies Strings` at build time). Brand terms
// stay verbatim across all locales: FunGen, funscript(s), Pro, Enthusiast, the
// device names, PayPal, Patreon, Discord. In `hero.head`, the word wrapped in
// {curly braces} is rendered as the gradient brand highlight, so each locale
// places the braces around whatever word should be highlighted.

export type Plan = {
  name: string;
  cadence: string;
  blurb: string;
  perks: string[];
  cta: string;
  badge?: string;
};

export type Strings = {
  /** Native language name, shown in the switcher. */
  langName: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  nav: { ai: string; features: string; devices: string; pricing: string; faq: string; download: string };
  hero: {
    head: string;
    tagline: string;
    sub: string;
    ctaDownload: string;
    ctaPricing: string;
    meta: string;
    /** OS-aware primary CTA, "{os}" replaced client-side (macOS/Windows/Linux). */
    osCta: string;
    /** Secondary line listing the other platforms, "{platforms}" filled client-side. */
    osAlso: string;
    /** Compact trust row under the CTA, e.g. ["No account", "No card", "Runs offline"]. */
    trust: string[];
  };
  shot: { eyebrow: string; title: string; body: string; alt: string };
  ai: { eyebrow: string; title: string; body: string; models: { title: string; body: string }[] };
  features: { eyebrow: string; title: string; body: string; items: { title: string; body: string }[] };
  devices: { eyebrow: string; title: string; body: string };
  pricing: { eyebrow: string; title: string; body: string; note: string; plans: Plan[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; body: string; cta: string };
  footer: { tagline: string; download: string; patreon: string; discord: string; contact: string; fine: string };
};

export const en = {
  langName: 'English',
  seoTitle: 'FunGen · AI Funscript Generator for 2D and VR',
  description:
    'Make funscripts from 2D and VR video with AI, or edit them by hand on a multi-axis timeline. Plays to your device and runs offline on your own machine. Free to download.',
  keywords: [
    'funscript',
    'funscripts',
    'funscript generator',
    'AI funscript generator',
    'AI funscript generation',
    'generate funscript from video',
    'free funscripts',
    'free funscript generator',
    'funscript editor',
    'funscript maker',
    'automatic funscript',
    'VR funscript',
    'VR funscript generator',
    '2D funscript',
    'flat video funscript',
    'multi-axis funscript',
    'Handy funscript',
    'OSR2 SR6 funscript',
    'Buttplug funscript',
    'funscript software',
    'cock hero',
    'cock hero funscript',
    'PMV funscript',
    'JOI funscript',
    'eroscripts',
    'milovana',
    'interactive porn',
    'teledildonics',
  ],
  nav: {
    ai: 'AI models',
    features: 'Features',
    devices: 'Devices',
    pricing: 'Pricing',
    faq: 'FAQ',
    download: 'Download',
  },
  hero: {
    head: 'Turn video into {funscripts}. Right on your computer.',
    tagline: 'Enjoy your time.',
    sub: 'Generate them from 2D and VR video with AI, or craft them by hand. Then play straight to your device.',
    ctaDownload: 'Download for Windows, macOS, Linux',
    ctaPricing: 'See pricing',
    meta: 'Free download, for individual non-commercial use',
    osCta: 'Download for {os}',
    osAlso: 'Also for {platforms}',
    trust: ['No account', 'No card', 'Runs offline'],
  },
  shot: {
    eyebrow: 'See it in action',
    title: 'The whole studio in one window',
    body: 'Video player, frame-accurate timeline, multi-axis tracks and the Doctor, side by side. Generate, edit and play without switching tools.',
    alt: 'The FunGen editor showing the video player, a multi-axis funscript timeline and side panels',
  },
  ai: {
    eyebrow: 'Dedicated Pro AI models',
    title: 'Two AI models, made for funscripts',
    body: 'One model for 2D / flat video, one for VR. They read the on-screen motion and write a full funscript, on your own machine, a whole folder at a time.',
    models: [
      {
        title: '2D / Flat model',
        body: 'A dedicated AI model for 2D / flat (non-VR) video. It follows the on-screen motion frame by frame and writes a smooth, full-stroke funscript, ready to play or fine-tune. Generate one clip or batch a whole folder overnight.',
      },
      {
        title: 'VR model',
        body: 'A separate model built for VR. FunGen detects fisheye, equirectangular, side-by-side and top/bottom footage, unwarps it on the GPU and tracks both POV and non-POV scenes, so the funscript matches what you see in the headset.',
      },
    ],
  },
  features: {
    eyebrow: 'Everything in one app',
    title: 'From raw footage to a finished script',
    body: "Generate with AI, refine by hand, run the quality checks, and play it straight to your device. You won't need a second tool.",
    items: [
      {
        title: 'AI script generation',
        body: 'Point FunGen at a video and it generates the funscript for you. A dedicated AI funscript generator handles VR and 2D / flat video, with a separate mode for trickier scenes. Full quality, and it can batch through a whole folder.',
      },
      {
        title: 'Frame-accurate editor',
        body: 'A precise multi-axis timeline with chapters and transform tools for range, shift and scale. Undo and redo are unlimited and survive a reopen. Build a script by hand or clean up what the AI made.',
      },
      {
        title: 'VR done right',
        body: 'It reads fisheye, equirectangular, side-by-side and top/bottom layouts on its own, unwarps them on the GPU, and tracks in both POV and non-POV modes.',
      },
      {
        title: 'Live device control',
        body: 'Play a script straight to your hardware with per-device interpolation and latency compensation. Route several axes at once, or run it headless from the command line on a render box.',
      },
      {
        title: 'Streaming and remote',
        body: 'A built-in HTTP streamer with WebXR, plus HereSphere and DeoVR bridges and XBVR integration. Devices turn up over mDNS, so you can drive a session from a headset or phone.',
      },
      {
        title: 'The Doctor',
        body: 'Quality checks that catch imperceptible gaps, missing strokes, dead zones and jitter. Most come with a one-click fix, and a per-frame score tells you how the script will actually feel.',
      },
    ],
  },
  devices: {
    eyebrow: 'Plays to your toys',
    title: 'Play your funscripts to the toys you already have',
    body: 'Live playback with per-device interpolation and latency compensation, plus multi-axis routing when you need it.',
  },
  pricing: {
    eyebrow: 'Try before you buy',
    title: 'Try it free. Unlock the full potential.',
    body: 'Preview the AI and drive your toys for free, for individual, non-commercial use. When you are ready, unlock the full-quality Pro AI models with no limits and no waits. Individual use only.\nCommercial use needs a separate licence: email fungen_ai@proton.me.',
    note: 'The paid tiers are one-time PayPal payments, with the pass delivered by email.\nYou can also get Pro through the FunGen tier on Patreon, active for as long as you stay subscribed.',
    plans: [
      {
        name: 'Free',
        cadence: 'free · forever',
        blurb: 'The full editor and library, with AI previews and device control to try. Full AI comes for an additional one-time payment.',
        perks: [
          'Frame-accurate multi-axis editor',
          'Transforms, chapters, Doctor analysis',
          'Library, batch processing, player',
          'A few free AI previews a day (full AI is Pro)',
          'Device control and streamer (metered)',
        ],
        cta: 'Download free',
      },
      {
        name: 'Enthusiast',
        cadence: 'one-time · forever',
        blurb: 'Unmetered device control and streaming, for good.',
        perks: [
          'Everything in Free',
          'Device control with no time limit',
          'Streamer with no countdown',
          'Perpetual, never expires',
        ],
        cta: 'Get Enthusiast',
      },
      {
        name: 'Pro',
        cadence: 'one-time · 1 year',
        blurb: 'One year of the full-quality AI funscript generation, including every Pro model released that year.',
        perks: [
          'Everything in Enthusiast',
          'Full-quality AI funscript generation for 1 year',
          'Every new Pro AI model released that year',
          'After 1 year: Pro AI ends, free features stay',
        ],
        cta: 'Get Pro',
        badge: 'Most popular',
      },
      {
        name: 'Pro Perpetual',
        cadence: 'one-time · forever',
        blurb: 'Pay once and keep the full-quality AI funscript generation, and every future Pro model, for good. Best long-term value.',
        perks: [
          'Everything in Pro',
          'Pro AI funscript generation never expires',
          'All future Pro AI models included',
          'No subscription, ever',
        ],
        cta: 'Get Pro Perpetual',
        badge: 'Best value',
      },
    ],
  },
  faq: {
    eyebrow: 'Good to know',
    title: 'Frequently asked',
    items: [
      {
        q: 'What is a funscript?',
        a: 'A funscript is a small file that records motion over time. Played alongside a video, it drives a compatible device in sync, position by position. FunGen generates funscripts from video with AI, lets you edit them on a precise timeline, and plays them straight to your hardware.',
      },
      {
        q: 'How does AI funscript generation work in FunGen?',
        a: 'Point FunGen at a 2D or VR video and a dedicated Pro AI model reads the on-screen motion and writes a full, multi-axis funscript for you. There is a model for 2D / flat video and a separate one for VR. You can generate a single clip or batch a whole folder, then refine the result by hand if you want.',
      },
      {
        q: 'What platforms does FunGen run on?',
        a: 'Windows, macOS (Apple Silicon native) and Linux. It is a single native binary per platform, so there is no Python runtime or pile of libraries to install. AI generation runs locally on your GPU (DirectML on Windows, CoreML on macOS, CUDA on Linux).',
      },
      {
        q: 'Is FunGen free?',
        a: 'FunGen is try before you buy. The free download, for individual, non-commercial use, gives you the full editor, player, library, batch and Doctor, plus a few AI generation previews a day and metered device control, so you can test the AI and your hardware first. When you are ready, a one-time payment on PayPal, or the FunGen tier on Patreon (Pro for as long as you stay subscribed), unlocks the full-quality Pro AI models with no limits and no waits. Individual use only. For commercial use, contact fungen_ai@proton.me for a specific licence.',
      },
      {
        q: 'Which devices are supported?',
        a: 'The Handy (over HTTPS and Bluetooth LE), Autoblow Ultra, Vacuglide, the OSR family (OSR2, SR6, SSR1) over T-Code, and anything you can reach through Buttplug.io or Intiface.',
      },
      {
        q: 'What does the Pro year actually cover?',
        a: 'Pro is a one-time payment that unlocks the full-quality AI funscript generation, and every new Pro AI model released, for one year. It is not just one year of app updates: it is one year of access to the Pro AI models themselves. When the year ends, the Pro AI funscript generation stops and you keep all the free features (editor, player, library, batch, Doctor) for good. To keep the Pro AI models without a time limit, choose Pro Perpetual.',
      },
      {
        q: 'How do I pay and unlock?',
        a: 'The one-time tiers (Enthusiast, Pro, Pro Perpetual) are PayPal payments; after paying, your pass arrives by email, ready to activate in the app. You can also subscribe at the FunGen tier on Patreon, which gives you FunGen Pro for as long as your membership stays active. You can also pay with USDT (TRC-20) crypto - see the crypto option in the pricing section.',
      },
      {
        q: 'Is the source available?',
        a: 'The code is not open source as of now. You can download ready-to-run builds for every platform; the source itself is not published at this time. For questions or commercial use, email fungen_ai@proton.me.',
      },
    ],
  },
  finalCta: {
    title: 'Ready to generate your funscript?',
    body: 'Download FunGen and have your first funscript generating in a few minutes.',
    cta: 'Download FunGen',
  },
  footer: {
    tagline: 'Enjoy your time.',
    download: 'Download',
    patreon: 'Patreon',
    discord: 'Discord',
    contact: 'Contact',
    fine: '© FunGen · Free for individual, non-commercial use · Questions and business: fungen_ai@proton.me',
  },
} satisfies Strings;
