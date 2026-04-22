'use client';

import React, { useRef, useCallback, useState } from 'react';
import Toolbar from './Toolbar';
import CoverPage from './pages/CoverPage';
import IntroDescriptionPage from './pages/IntroDescriptionPage';
import CaracteristiquesPage from './pages/CaracteristiquesPage';
import MarchePage from './pages/MarchePage';
import EnVentePrixPage from './pages/EnVentePrixPage';
import MaisonBonapartePage from './pages/MaisonBonapartePage';
import MandatStrategiePage from './pages/MandatStrategiePage';
import DiffusionPage from './pages/DiffusionPage';
import ContactPage from './pages/ContactPage';
import { useDocumentStore } from '@/store/useDocumentStore';
import { BASE_PATH } from '@/lib/paths';

export default function Editor() {
  const documentRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(0.65);
  const marcheVisible = useDocumentStore((s) => s.marche.visible);
  const updateMarche = useDocumentStore((s) => s.updateMarche);

  // Server-side Puppeteer export: the same Chrome engine that paints the
  // editor rasterises the PDF, so letter-spacing, baseline, line-height and
  // absolute positioning come out pixel-identical. Zero drift vs screen.
  const handleExportPDF = useCallback(async () => {
    // Serialize only the data fields (Zustand store includes setters we
    // don't want to ship over the wire).
    const full = useDocumentStore.getState() as unknown as Record<
      string,
      unknown
    >;
    const state = Object.fromEntries(
      Object.entries(full).filter(
        ([, v]) => typeof v !== 'function'
      )
    );

    const res = await fetch(`${BASE_PATH}/api/export-pdf`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Export failed (${res.status}): ${err}`);
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Avis_de_Valeur_Bonaparte.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Defer revoke so the browser finishes writing the file.
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }, []);

  const spreadStyle = {
    marginBottom: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    width: '1191px',
    marginLeft: 'auto' as const,
    marginRight: 'auto' as const,
  };

  const singleStyle = {
    marginBottom: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    width: '595px',
    marginLeft: 'auto' as const,
    marginRight: 'auto' as const,
  };

  // Outer wrapper applies the zoom transform; inner ref is at scale=1 for clean PDF capture.
  // We use transform on a parent and adjust container size so scrollbars match scaled layout.
  const scaledWidth = 1191 * zoom;
  return (
    <div style={{ background: '#d5d0ca', minHeight: '100vh' }}>
      <Toolbar onExportPDF={handleExportPDF} zoom={zoom} setZoom={setZoom} />

      <div style={{ paddingTop: '70px', paddingBottom: '40px', overflow: 'auto' }}>
        <div
          style={{
            width: `${scaledWidth}px`,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              width: '1191px',
            }}
          >
        <div ref={documentRef}>
          {/* Page 1 - Couverture */}
          <div style={singleStyle}><CoverPage /></div>

          {/* Page 2 - Introduction + Description */}
          <div style={spreadStyle}><IntroDescriptionPage /></div>

          {/* Page 3 - Caractéristiques + Valorisation */}
          <div style={spreadStyle}><CaracteristiquesPage /></div>

          {/* Page 4 - Analyse du marché + Vendus proches (deletable via trash) */}
          {marcheVisible && (
            <div style={{ ...spreadStyle, position: 'relative' }} className="marche-wrapper">
              <button
                type="button"
                onClick={() => updateMarche({ visible: false })}
                title="Supprimer cette page"
                aria-label="Supprimer la page Analyse du marché"
                className="marche-delete-btn"
                style={{
                  position: 'absolute', top: '12px', right: '12px', zIndex: 10,
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#ffffff', border: '1px solid #ad9d7d',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ad9d7d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                  <path d="M10 11v6M14 11v6" />
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
              </button>
              <MarchePage />
            </div>
          )}

          {/* Page 5 - En vente + Prix de présentation */}
          <div style={spreadStyle}><EnVentePrixPage /></div>

          {/* Page 6 - Maison Bonaparte + Implantations */}
          <div style={spreadStyle}><MaisonBonapartePage /></div>

          {/* Page 7 - Mandat + Stratégie */}
          <div style={spreadStyle}><MandatStrategiePage /></div>

          {/* Page 8 - Diffusion */}
          <div style={spreadStyle}><DiffusionPage /></div>

          {/* Page 9 - Contact */}
          <div style={singleStyle}><ContactPage /></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
