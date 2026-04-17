'use client';

import { useLayoutEffect, useState } from 'react';
import { useDocumentStore } from '@/store/useDocumentStore';
import type { PrintableState } from '@/lib/print-state';
import PrintBodyReset from './PrintBodyReset';
import CoverPage from './pages/CoverPage';
import IntroDescriptionPage from './pages/IntroDescriptionPage';
import CaracteristiquesPage from './pages/CaracteristiquesPage';
import MarchePage from './pages/MarchePage';
import EnVentePrixPage from './pages/EnVentePrixPage';
import MaisonBonapartePage from './pages/MaisonBonapartePage';
import MandatStrategiePage from './pages/MandatStrategiePage';
import DiffusionPage from './pages/DiffusionPage';
import ContactPage from './pages/ContactPage';

const PAGE_COMPONENTS: Record<string, { C: React.FC; w: number; h: number }> = {
  cover:            { C: CoverPage,            w: 595,  h: 842 },
  intro:            { C: IntroDescriptionPage, w: 1191, h: 842 },
  caracteristiques: { C: CaracteristiquesPage, w: 1191, h: 842 },
  marche:           { C: MarchePage,           w: 1191, h: 842 },
  envente:          { C: EnVentePrixPage,      w: 1191, h: 842 },
  maison:           { C: MaisonBonapartePage,  w: 1191, h: 842 },
  mandat:           { C: MandatStrategiePage,  w: 1191, h: 842 },
  diffusion:        { C: DiffusionPage,        w: 1191, h: 842 },
  contact:          { C: ContactPage,          w: 595,  h: 842 },
};

export default function PrintPageClient({ pageId }: { pageId: string }) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const injected = (
      window as unknown as { __PRINT_STATE__?: PrintableState }
    ).__PRINT_STATE__;
    if (injected) {
      useDocumentStore.setState(injected);
    }
    setReady(true);
  }, []);

  if (!ready) return null;
  const entry = PAGE_COMPONENTS[pageId];
  if (!entry) return null;
  const { C: Component, w, h } = entry;
  // CSS layout is in px (1px ≈ 1pt in the original PDF design). Puppeteer
  // emits PDFs in CSS pixels, but real PDF points are 72 per inch vs 96 for
  // CSS pixels — so the output would be 75% of A4 size without compensation.
  // We scale the content 4/3 with transform so the CSS 595×842 renders at
  // 794×1123 CSS px = exactly A4. @page matches that scaled size.
  const scale = 4 / 3;
  const scaledW = Math.round(w * scale);
  const scaledH = Math.round(h * scale);
  const pageCSS = `
    @page { size: ${scaledW}px ${scaledH}px; margin: 0; }
    html, body { margin: 0; padding: 0; background: #ffffff; }
    [data-print-scale] {
      width: ${w}px;
      height: ${h}px;
      transform: scale(${scale});
      transform-origin: top left;
    }
  `;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCSS }} />
      <PrintBodyReset />
      <div data-print-scale>
        <Component />
      </div>
    </>
  );
}
