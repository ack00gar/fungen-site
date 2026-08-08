// Build-time per-page Open Graph images. satori (HTML-ish -> SVG) + resvg
// (SVG -> PNG). Static: one PNG per entry in OG_PAGES, served at /og/<slug>.png.
import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { OG_PAGES } from '../../og/pages';

const regular = readFileSync('src/og/Inter-Regular.woff');
const bold = readFileSync('src/og/Inter-Bold.woff');

export function getStaticPaths() {
  return Object.keys(OG_PAGES).map((slug) => ({ params: { slug }, props: OG_PAGES[slug] }));
}

const teal = '#22d3ee';

export const GET: APIRoute = async ({ props }) => {
  const { title, eyebrow } = props as { title: string; eyebrow: string };

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '76px',
          backgroundColor: '#0b0f14',
          backgroundImage:
            'radial-gradient(1200px 500px at 100% 0%, rgba(34,211,238,0.14), transparent 60%)',
          color: '#e7edf3',
          fontFamily: 'Inter',
          borderTop: `10px solid ${teal}`,
        },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '16px',
                      height: '16px',
                      borderRadius: '999px',
                      backgroundColor: teal,
                      marginRight: '16px',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { fontSize: '26px', letterSpacing: '5px', color: teal, fontWeight: 700 },
                    children: eyebrow,
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontSize: '84px',
                fontWeight: 700,
                lineHeight: 1.05,
                maxWidth: '1010px',
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: '36px', fontWeight: 700 },
                    children: [
                      { type: 'span', props: { children: 'FunGen' } },
                      { type: 'span', props: { style: { color: teal }, children: ' · fungen.app' } },
                    ],
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: '24px', color: '#94a3b1' },
                    children: 'Runs on your machine',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: bold, weight: 700, style: 'normal' },
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
