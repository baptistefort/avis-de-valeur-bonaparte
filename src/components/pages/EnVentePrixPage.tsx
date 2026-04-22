'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

// After content swap: this spread now holds ANALYSE DU MARCHÉ (left) + LE PRIX DE PRÉSENTATION (right).
// Kept the filename to avoid breaking /print/envente route + Editor imports.
export default function EnVentePrixPage() {
  const { marche, prix, updateMarche, updatePrix } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4,
    textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF - ANALYSE DU MARCHÉ ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* Title ANALYSE DU MARCHÉ (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>ANALYSE</div>
          <div style={{ margin: 0 }}>DU MARCHÉ</div>
        </div>

        {/* Gold line under title */}
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

        {/* Market analysis text */}
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

        {/* Photo marché */}
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

      {/* ============ RIGHT HALF - LE PRIX DE PRÉSENTATION ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Title LE PRIX DE PRÉSENTATION (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>LE PRIX</div>
          <div style={{ margin: 0 }}>DE PRÉSENTATION</div>
        </div>

        {/* Gold line under title - centered under the title */}
        <div style={{ position: 'absolute', left: '57px', top: '178px', width: '382px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '0.8px', height: '40px', background: '#ad9d7d' }} />
        </div>

        {/* Intro text */}
        <div style={{ position: 'absolute', left: '58px', top: '229px', width: '255px' }}>
          <EditableText
            value={prix.introTexte}
            onChange={(v) => updatePrix({ introTexte: v })}
            tag="p" multiline
            style={bodyText}
          />
        </div>

        {/* Price box */}
        <div style={{
          position: 'absolute', left: '58px', top: '289px',
          border: '1px solid #ad9d7d', padding: '6px 16px', display: 'inline-block',
        }}>
          <EditableText
            value={prix.montant}
            onChange={(montant) => updatePrix({ montant })}
            tag="span"
            style={{
              fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
              color: '#ae9e7d', letterSpacing: '0.05em',
            }}
          />
        </div>

        {/* Soit XX €/m² */}
        <div style={{ position: 'absolute', left: '58px', top: '342px' }}>
          <span style={{ ...bodyText }}>Soit </span>
          <EditableText
            value={prix.prixM2}
            onChange={(prixM2) => updatePrix({ prixM2 })}
            tag="span"
            style={bodyText}
          />
        </div>

        {/* Large panoramic photo */}
        <EditableImage
          src={prix.photo}
          onChange={(photo) => updatePrix({ photo })}
          alt="Photo panoramique"
          style={{
            position: 'absolute', left: '-21px', top: '381px',
            width: '617px', height: '461px',
          }}
        />
      </div>
    </div>
  );
}
