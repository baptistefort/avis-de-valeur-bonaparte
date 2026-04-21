'use client';

import React, { useState } from 'react';

interface ToolbarProps {
  onExportPDF: () => void;
  zoom: number;
  setZoom: (z: number) => void;
}

export default function Toolbar({ onExportPDF, zoom, setZoom }: ToolbarProps) {
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);
    try {
      await onExportPDF();
    } finally {
      setExporting(false);
    }
  };

  return (
    <div
      className="toolbar fixed top-0 left-0 right-0 z-50 border-b border-[#ad9d7d]/25 shadow-sm"
      style={{ background: '#f1eee8' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo_bonaparte.png"
            alt="Bonaparte — Art de Vivre"
            className="h-10 w-auto select-none"
            draggable={false}
          />
          <span className="text-xs text-[#8a7d65] font-sans tracking-wide">
            Avis de Valeur — Éditeur
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-taupe hidden sm:block">
            Cliquez sur un texte ou une image pour le modifier
          </span>
          {/* Zoom controls */}
          <div className="flex items-center gap-2 px-3 py-1 border border-gold/30 rounded">
            <button
              onClick={() => setZoom(Math.max(0.3, +(zoom - 0.05).toFixed(2)))}
              className="text-taupe hover:text-foreground text-base leading-none w-5 h-5 flex items-center justify-center"
              title="Zoom arrière"
            >−</button>
            <input
              type="range"
              min={0.3}
              max={1.2}
              step={0.05}
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-20 accent-[#ad9d7d]"
            />
            <button
              onClick={() => setZoom(Math.min(1.2, +(zoom + 0.05).toFixed(2)))}
              className="text-taupe hover:text-foreground text-base leading-none w-5 h-5 flex items-center justify-center"
              title="Zoom avant"
            >+</button>
            <span className="text-xs text-taupe tabular-nums w-9 text-right">{Math.round(zoom * 100)}%</span>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="px-5 py-2 bg-gold text-white text-sm font-medium rounded hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {exporting ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Export en cours...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
