// Feature-showcase copy. Kept separate from the main Strings dictionary so the
// English version can ship and be reviewed before the 9 locale translations are
// filled in (all locales currently point at English). Image filenames are
// structural and live in Landing.astro; this file is text only.
import type { Locale } from './index';
import { de } from './showcase-de';
import { es } from './showcase-es';
import { fr } from './showcase-fr';
import { it } from './showcase-it';
import { ja } from './showcase-ja';
import { ko } from './showcase-ko';
import { pt } from './showcase-pt';
import { ru } from './showcase-ru';
import { zh } from './showcase-zh';

export type ShowItem = {
  eyebrow: string;
  title: string;
  body: string;
  chips: string[];
  alt: string;
  insetAlt?: string;
};

export type ShowcaseStrings = {
  editor: { eyebrow: string; title: string; body: string; alt: string };
  gen: { eyebrow: string; title: string; body: string; chips: string[]; alt: string };
  doctor: ShowItem;
  transforms: ShowItem;
  chapters: ShowItem;
  streamer: ShowItem;
  palette: ShowItem;
  shortcuts: ShowItem;
  devicesAlt: string;
  tryCallout: { title: string; body: string };
  /** Hero social-proof line; "{n}" is replaced with the live member count. */
  community?: string;
};

export const en: ShowcaseStrings = {
  editor: {
    eyebrow: 'The app',
    title: 'Everything in one window',
    body: 'Video, a multi-axis timeline, the heatmap overview, live stats, AI tracking and the Doctor, docked together. Generate, edit, check and play without ever leaving the window.',
    alt: 'The FunGen editor with the video area, multi-axis timeline and side panels',
  },
  gen: {
    eyebrow: 'FunGenerate',
    title: 'Watch a funscript appear',
    body: 'Point FunGen at any video and it generates the motion for you. Try it free: run a 20-second FunGenerate preview on any scene to see the quality before you commit.',
    chips: ['Free 20s preview', '2D and VR', 'Full video or a selection'],
    alt: 'A funscript being generated, filling the timeline',
  },
  doctor: {
    eyebrow: 'Funscript Doctor',
    title: 'Take care of your funscript',
    body: 'A device-aware quality score from 0 to 100. The Doctor finds speed violations, off-frame points, dead zones and missing strokes, tells you when a script is shippable on your device, and fixes most of it in one click.',
    chips: ['0 to 100 score', 'Device-aware', 'One-click fixes'],
    alt: 'The Funscript Doctor dialog with a quality score and issue list',
    insetAlt: 'The Funscript Doctor summary card',
  },
  transforms: {
    eyebrow: 'Transforms and plugins',
    title: 'Your funscript toolbox',
    body: 'Dozens of plugins and one-click quick-fixes for amplitude, smoothing, speed limits and timing. Chain your favourites into a pipeline and run a full cleanup in a single click.',
    chips: ['Autotune', 'Reshape', 'Pipelines'],
    alt: 'The plugin library grouped into Autotune, Reshape and Limit categories',
    insetAlt: 'A transform popup reshaping the timeline',
  },
  chapters: {
    eyebrow: 'Chapters and bookmarks',
    title: 'Structure a long script',
    body: 'Split a scene into named, colour-coded chapters, drop bookmarks with one key, and reopen right where you left off with the last-edit and last-playhead markers.',
    chips: ['Colour-coded', 'One-key bookmarks', 'Resume on open'],
    alt: 'The chapters and bookmarks panels',
  },
  streamer: {
    eyebrow: 'Streamer',
    title: 'Stream to any device',
    body: 'Send your movie and its funscript to any device on your network while FunGen drives your toy in sync. The streamer is built in, with no extra apps to install.',
    chips: ['Any device', 'Drives your toy', 'No extra app'],
    alt: 'The streamer panel',
  },
  palette: {
    eyebrow: 'Command palette',
    title: 'Everything, one keystroke away',
    body: 'Press a key and run anything by name.',
    chips: ['Actions', 'Plugins', 'Themes'],
    alt: 'The command palette searching actions',
  },
  shortcuts: {
    eyebrow: 'Shortcuts',
    title: 'Make the keys yours',
    body: 'Rebind every key, mouse and keyboard. FunGen learns your physical layout, so they land right on AZERTY or QWERTZ.',
    chips: ['Fully rebindable', 'Mouse and keyboard', 'Layout-aware'],
    alt: 'The shortcuts editor with rebindable keys',
  },
  devicesAlt: 'The FunGen devices dialog listing supported toys',
  community: 'Join {n}+ on Discord',
  tryCallout: {
    title: 'Try before you buy',
    body: 'FunGenerate the section of any video you like, drive your own device, and run the Doctor, all on the free download. Pay only once you are convinced.',
  },
};

export const SHOWCASE: Record<Locale, ShowcaseStrings> = {
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
};
