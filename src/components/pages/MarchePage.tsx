'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function MarchePage() {
  const { marche, vendusProches, updateMarche, updateVendusProches } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4,
    textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* Title ANALYSE DU MARCHÉ (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>ANALYSE</div>
          <div style={{ margin: 0 }}>DU MARCHÉ</div>
        </div>

        {/* Gold line under title - aligned to A of ANALYSE */}
        <div style={{
          position: 'absolute', left: '57px', top: '178px',
          width: '0.8px', height: '40px', background: '#ad9d7d',
        }} />

        {/* Sub-title LE MARCHÉ PARISIEN EN 2026 */}
        <div style={{ position: 'absolute', left: '57px', top: '230px', width: '180px' }}>
          <EditableText
            value={marche.titre}
            onChange={(titre) => updateMarche({ titre })}
            tag="div"
            style={{
              fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '12pt',
              letterSpacing: '0.03em', color: '#ae9e7d', lineHeight: '17pt',
            }}
          />
        </div>

        {/* Market analysis text - calibrated: w=295, 8pt, lh=1.35 → h≈331 matching PDF */}
        <div style={{
          position: 'absolute', left: '57px', top: '279px', width: '295px',
        }}>
          <EditableText
            value={marche.texte}
            onChange={(texte) => updateMarche({ texte })}
            tag="div" multiline
            style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
              fontSize: '8pt', color: '#000000', lineHeight: 1.35,
              textAlign: 'justify', whiteSpace: 'pre-line',
            }}
          />
        </div>

        {/* Photo - decalee a droite pour laisser de l'espace avec le texte */}
        <EditableImage
          src={marche.photo}
          onChange={(photo) => updateMarche({ photo })}
          alt="Photo marché"
          style={{
            position: 'absolute', left: '395px', top: '229px',
            width: '201px', height: '434px',
          }}
        />

      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Title VENDU PROCHE DE CHEZ VOUS (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>VENDU</div>
          <div style={{ margin: 0 }}>PROCHE DE CHEZ VOUS</div>
        </div>

        {/* Gold line under title - aligned to V of VENDU */}
        <div style={{
          position: 'absolute', left: '57px', top: '178px',
          width: '0.8px', height: '40px', background: '#ad9d7d',
        }} />

        {/* 3 biens vendus - centres verticalement dans la demi-page */}
        {/* Page height=842, titre prend ~160px en haut, footer ~30px → zone utile ~650px */}
        {/* Centre de la zone = ~420. 3 biens x 85px spacing = 255px. Start = 420-127 = 293 */}
        <div style={{
          position: 'absolute', left: '57px', top: '300px', width: '480px',
        }}>
          {vendusProches.map((bien, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              marginBottom: i < 2 ? '45px' : '0',
            }}>
              {/* Left: Address + description */}
              <div style={{ flex: 1 }}>
                <EditableText value={bien.adresse} onChange={(v) => updateVendusProches(i, { adresse: v })} tag="div"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
                <EditableText value={bien.description} onChange={(v) => updateVendusProches(i, { description: v })} tag="div" multiline
                  style={{ ...bodyText, whiteSpace: 'pre-line' }} />
              </div>

              {/* Right: Surface, prix, prix/m² - aligned right */}
              <div style={{ marginLeft: '20px', flexShrink: 0 }}>
                <EditableText value={bien.surface} onChange={(v) => updateVendusProches(i, { surface: v })} tag="div"
                  style={{ ...bodyText, marginBottom: '2px' }} />
                <EditableText value={bien.prix} onChange={(v) => updateVendusProches(i, { prix: v })} tag="div"
                  style={{ ...bodyText, marginBottom: '4px' }} />
                <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
                  <EditableText value={`soit ${bien.prixM2}`} onChange={(v) => updateVendusProches(i, { prixM2: v.replace('soit ', '') })} tag="span"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
