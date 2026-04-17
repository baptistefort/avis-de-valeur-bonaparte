import { NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import puppeteer from 'puppeteer';
import type { PrintableState } from '@/lib/print-state';

export const runtime = 'nodejs';
export const maxDuration = 120;

// The CSS layout of each page uses px dimensions that match the original
// PDF design 1:1 (595 × 842 for singles, 1191 × 842 for spreads). We set the
// viewport to those exact dimensions, and page.pdf reads the @page size
// declared by the /print/[page] route (see PrintPageClient.tsx). Rendering
// each page into its own single-page PDF and merging with pdf-lib sidesteps
// the upstream Chromium bug where mixed orientations in a single page.pdf()
// call collapse to the first page's size (puppeteer#10263).
const PAGES: ReadonlyArray<{ id: string; w: number; h: number }> = [
  { id: 'cover',            w: 595,  h: 842 },
  { id: 'intro',            w: 1191, h: 842 },
  { id: 'caracteristiques', w: 1191, h: 842 },
  { id: 'marche',           w: 1191, h: 842 },
  { id: 'envente',          w: 1191, h: 842 },
  { id: 'maison',           w: 1191, h: 842 },
  { id: 'mandat',           w: 1191, h: 842 },
  { id: 'diffusion',        w: 1191, h: 842 },
  { id: 'contact',          w: 595,  h: 842 },
];

export async function POST(req: Request) {
  let state: PrintableState;
  try {
    state = (await req.json()) as PrintableState;
  } catch {
    return NextResponse.json({ error: 'invalid body' }, { status: 400 });
  }

  const origin = new URL(req.url).origin;

  // --font-render-hinting=none is critical: without it, Chrome headless on
  // Linux/Mac renders letter-spacing differently than graphical Chrome,
  // reintroducing the exact drift we're fixing (Gotenberg PR#163).
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--font-render-hinting=none',
      '--disable-lcd-text',
      '--force-color-profile=srgb',
      '--no-sandbox',
    ],
  });

  try {
    const merged = await PDFDocument.create();

    for (const spec of PAGES) {
      const page = await browser.newPage();
      try {
        // Viewport matches the SCALED design size (4/3 to reach A4 in
        // PDF points). The /print route wraps the component in a
        // [data-print-scale] container that transforms CSS 595×842 up to
        // 794×1123 CSS px, and declares @page at the same size.
        // preferCSSPageSize reads that @page, so the output PDF matches
        // the original A4 dimensions.
        const scaledW = Math.round((spec.w * 4) / 3);
        const scaledH = Math.round((spec.h * 4) / 3);
        await page.setViewport({
          width: scaledW,
          height: scaledH,
          deviceScaleFactor: 2,
        });

        // Inject state into every page context BEFORE navigation. The
        // /print/[page] client component reads window.__PRINT_STATE__ to
        // hydrate Zustand — avoids sharing memory between the API route
        // handler and the Server Component.
        await page.evaluateOnNewDocument((injectedState: unknown) => {
          (window as unknown as { __PRINT_STATE__: unknown }).__PRINT_STATE__ =
            injectedState;
        }, state);

        const url = `${origin}/print/${spec.id}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        await page.evaluate(() => document.fonts.ready);

        const buf = await page.pdf({
          printBackground: true,
          preferCSSPageSize: true,
        });

        const single = await PDFDocument.load(buf);
        const [copied] = await merged.copyPages(single, [0]);
        merged.addPage(copied);
      } finally {
        await page.close();
      }
    }

    const pdfBytes = await merged.save();

    return new Response(new Uint8Array(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="Avis_de_Valeur_Bonaparte.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('[export-pdf] fatal', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'unknown error' },
      { status: 500 }
    );
  } finally {
    await browser.close();
  }
}
