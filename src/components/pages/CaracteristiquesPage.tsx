'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function CaracteristiquesPage() {
  const { caracteristiques, valorisation, updateCaracteristiques, updateValorisation } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4,
    textAlign: 'left',
  };

  const caracFieldKeys = [
    'nombrePieces', 'etage', 'niveau', 'etatGeneral', 'exposition', 'vue',
    'espaceExterieur', 'ascenseur', 'anneeConstruction', 'modeChauffage',
    'eauChaude', 'charges', 'annexes', 'gardien',
  ] as const;

  const updateLabel = (key: keyof typeof caracteristiques.labels, v: string) => {
    updateCaracteristiques({
      labels: { ...caracteristiques.labels, [key]: v },
    });
  };

  const updateAvantage = (index: number, value: string) => {
    const updated = [...valorisation.avantages];
    updated[index] = value;
    updateValorisation({ avantages: updated });
  };

  const updateInconvenient = (index: number, value: string) => {
    const updated = [...valorisation.inconvenients];
    updated[index] = value;
    updateValorisation({ inconvenients: updated });
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', overflow: 'visible', zIndex: 2 }}>

        {/* Title CARACTÉRISTIQUES DU BIEN (STATIC) */}
        <div style={{
          position: 'absolute', left: '56.7px', top: '90.3px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', margin: 0, lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>CARACTÉRISTIQUES</div>
          <div style={{ margin: 0 }}>DU BIEN</div>
        </div>

        {/* Gold line under title - below the 80px title */}
        <div style={{
          position: 'absolute', left: '183px', top: '178px',
          width: '0.8px', height: '40px', background: '#ad9d7d',
        }} />

        {/* SURFACE / CHAMBRES box - PDF: [56.8, 229.9, 309.3, 299.0] */}
        <div style={{
          position: 'absolute', left: '56.8px', top: '229.9px',
          width: '252.5px', height: '69.1px',
          border: '1px solid #ad9d7d', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', paddingLeft: '48px', gap: '4px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ad9d7d" strokeWidth="1.5">
              <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <EditableText value={`SURFACE HABITABLE : ${caracteristiques.surfaceHabitable}`}
              onChange={(v) => {
                const parts = v.split(':');
                if (parts.length > 1) updateCaracteristiques({ surfaceHabitable: parts.slice(1).join(':').trim() });
              }} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ad9d7d" strokeWidth="1.5">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <EditableText value={`CHAMBRES : ${caracteristiques.chambres}`}
              onChange={(v) => {
                const parts = v.split(':');
                if (parts.length > 1) updateCaracteristiques({ chambres: parts.slice(1).join(':').trim() });
              }} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>

        {/* Gold vertical line between box and details - x=183, y=326→425 */}
        <div style={{
          position: 'absolute', left: '183px', top: '326.3px',
          width: '0.8px', height: '99.3px', background: '#ad9d7d',
        }} />

        {/* Photo - [360.4, 228.8, 617.6, 778.2] → relative left=360.4 */}
        <EditableImage
          src={caracteristiques.photo}
          onChange={(photo) => updateCaracteristiques({ photo })}
          alt="Photo bien"
          style={{
            position: 'absolute', left: '360.4px', top: '228.8px',
            width: '257.2px', height: '549.4px',
          }}
        />

        {/* Property details - bold label + regular value, both editable */}
        <div style={{
          position: 'absolute', top: '451.6px', left: '0px', width: '340px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          {caracFieldKeys
            .filter((key) =>
              caracteristiques[key]?.trim() ||
              caracteristiques.labels[key]?.trim()
            )
            .map((key) => (
            <div key={key} style={{
              display: 'flex', alignItems: 'baseline', marginBottom: '3.4pt',
              whiteSpace: 'nowrap',
            }}>
              <EditableText
                value={caracteristiques.labels[key]}
                onChange={(v) => updateLabel(key, v)}
                tag="span"
                style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                  fontSize: '8.5pt', color: '#000000',
                }}
              />
              <EditableText
                value={caracteristiques[key]}
                onChange={(v) => updateCaracteristiques({ [key]: v })}
                tag="span"
                style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
                  fontSize: '8.5pt', color: '#000000', marginLeft: '3px',
                }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Beige background bottom - y=561→842 */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: '561.3px', bottom: 0,
          background: '#e3dcd1',
        }} />

        {/* Title LES ÉLÉMENTS DE VALORISATION ET DE PONDÉRATION (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '60.3px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', margin: 0, lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>LES ÉLÉMENTS</div>
          <div style={{ margin: 0 }}>DE VALORISATION</div>
          <div style={{ margin: 0 }}>ET DE PONDÉRATION</div>
        </div>

        {/* Gold line under title - below the 120px title */}
        <div style={{
          position: 'absolute', left: '166.3px', top: '188px',
          width: '0.8px', height: '32px', background: '#ad9d7d',
        }} />

        {/* Intro text - x=57, y=228, w=255 */}
        <div style={{
          position: 'absolute', left: '57px', top: '228px', width: '255px',
        }}>
          <EditableText
            value={valorisation.introTexte}
            onChange={(v) => updateValorisation({ introTexte: v })}
            tag="p" multiline
            style={bodyText}
          />
        </div>

        {/* Long gold vertical line - x=166.3, y=304.7→714.3 */}
        <div style={{
          position: 'absolute', left: '166.3px', top: '304.7px',
          width: '0.8px', height: '409.6px', background: '#ad9d7d',
        }} />

        {/* AVANTAGES - x=208.6, y=371.3 */}
        <EditableText
          value="AVANTAGES"
          onChange={() => {}}
          tag="span"
          style={{
            position: 'absolute', left: '208.6px', top: '371.3px',
            fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ae9e7d',
          }}
        />

        {/* Avantages bullets - x=208, y=422 */}
        <div style={{
          position: 'absolute', left: '208.6px', top: '422px', width: '265px',
        }}>
          {valorisation.avantages.map((av, i) => (
            <div key={i} style={{ marginBottom: '16px', display: 'flex', gap: '4px' }}>
              <span style={{ ...bodyText, flexShrink: 0 }}>•</span>
              <EditableText value={av} onChange={(v) => updateAvantage(i, v)}
                tag="span" multiline style={bodyText} />
            </div>
          ))}
        </div>

        {/* INCONVÉNIENTS - x=204.4, y=611.1 (-10px gap from avantages) */}
        <EditableText
          value="INCONVÉNIENTS"
          onChange={() => {}}
          tag="span"
          style={{
            position: 'absolute', left: '204.4px', top: '611.1px',
            fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ae9e7d',
          }}
        />

        {/* Inconvenients bullets - x=204, y=662 */}
        <div style={{
          position: 'absolute', left: '204.4px', top: '662px', width: '269px',
        }}>
          {valorisation.inconvenients.map((inc, i) => (
            <div key={i} style={{ marginBottom: '16px', display: 'flex', gap: '4px' }}>
              <span style={{ ...bodyText, flexShrink: 0 }}>•</span>
              <EditableText value={inc} onChange={(v) => updateInconvenient(i, v)}
                tag="span" multiline style={bodyText} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
