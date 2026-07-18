// Build-time latest version, read from the GitHub releases of the app repo so
// the structured-data `softwareVersion` tracks the real release with zero
// manual upkeep. (The version is no longer shown in the UI - only here, for
// SEO - so being a deploy behind is harmless.) Falls back to SITE.version.
import { SITE } from './consts';

let cached: string | null = null;

export async function latestVersion(): Promise<string> {
  if (cached !== null) return cached;
  try {
    const r = await fetch('https://api.github.com/repos/ack00gar/FunGen/releases?per_page=1', {
      headers: { 'User-Agent': 'fungen-site', Accept: 'application/vnd.github+json' },
    });
    const d = await r.json();
    const tag = Array.isArray(d) && d[0]?.tag_name ? String(d[0].tag_name).replace(/^v/, '') : '';
    cached = tag || SITE.version;
  } catch {
    cached = SITE.version;
  }
  return cached;
}
