// Build-time Discord member count for the hero social-proof line. Fetched
// once per build from the public invite endpoint (no auth/CORS issues since
// it runs server-side at build), rounded down to a tidy "N+" so it stays
// accurate between deploys. Falls back to a safe floor if the fetch fails.
const INVITE = 'WYkjMbtCZA';
const FALLBACK = 4000;

let cached: number | null = null;

export async function discordMembers(): Promise<number> {
  if (cached !== null) return cached;
  try {
    const r = await fetch(`https://discord.com/api/v9/invites/${INVITE}?with_counts=true`);
    const j = await r.json();
    const n = j?.approximate_member_count;
    cached = typeof n === 'number' && n > 500 ? n : FALLBACK;
  } catch {
    cached = FALLBACK;
  }
  return cached;
}
