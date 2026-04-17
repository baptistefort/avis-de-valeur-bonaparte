'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function EnVentePrixPage() {
  const { enVenteProches, prix, updateEnVenteProches, updatePrix } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4, textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF - beige bg ============ */}
      <div className="pdf-half" style={{ background: '#f1eee8' }}>

        {/* Title EN VENTE PROCHE DE CHEZ VOUS */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <EditableText value="EN VENTE" onChange={() => {}} tag="div" style={{ margin: 0 }} />
          <EditableText value="PROCHE DE CHEZ VOUS" onChange={() => {}} tag="div" style={{ margin: 0 }} />
        </div>

        {/* Bien 1 - photo left [56,201,248,316] */}
        <EditableImage src={enVenteProches[0].photo} onChange={(photo) => updateEnVenteProches(0, { photo })}
          alt="Bien 1" style={{ position: 'absolute', left: '56px', top: '201px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '269px', top: '229px' }}>
          <EditableText value={enVenteProches[0].surface} onChange={(v) => updateEnVenteProches(0, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={enVenteProches[0].prix} onChange={(v) => updateEnVenteProches(0, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${enVenteProches[0].prixM2}`} onChange={(v) => updateEnVenteProches(0, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '56px', top: '328px' }}>
          <EditableText value={enVenteProches[0].adresse} onChange={(v) => updateEnVenteProches(0, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={enVenteProches[0].description} onChange={(v) => updateEnVenteProches(0, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

        {/* Gold vertical line */}
        <div style={{ position: 'absolute', left: '164px', top: '388px', width: '0.8px', height: '191px', background: '#ad9d7d' }} />

        {/* Bien 2 - photo center-right [216,401,408,516] */}
        <EditableImage src={enVenteProches[1].photo} onChange={(photo) => updateEnVenteProches(1, { photo })}
          alt="Bien 2" style={{ position: 'absolute', left: '216px', top: '401px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '429px', top: '429px' }}>
          <EditableText value={enVenteProches[1].surface} onChange={(v) => updateEnVenteProches(1, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={enVenteProches[1].prix} onChange={(v) => updateEnVenteProches(1, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${enVenteProches[1].prixM2}`} onChange={(v) => updateEnVenteProches(1, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '216px', top: '528px' }}>
          <EditableText value={enVenteProches[1].adresse} onChange={(v) => updateEnVenteProches(1, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={enVenteProches[1].description} onChange={(v) => updateEnVenteProches(1, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

        {/* Bien 3 - photo left [56,600,248,715] */}
        <EditableImage src={enVenteProches[2].photo} onChange={(photo) => updateEnVenteProches(2, { photo })}
          alt="Bien 3" style={{ position: 'absolute', left: '56px', top: '600px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '269px', top: '632px' }}>
          <EditableText value={enVenteProches[2].surface} onChange={(v) => updateEnVenteProches(2, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={enVenteProches[2].prix} onChange={(v) => updateEnVenteProches(2, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${enVenteProches[2].prixM2}`} onChange={(v) => updateEnVenteProches(2, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '56px', top: '727px' }}>
          <EditableText value={enVenteProches[2].adresse} onChange={(v) => updateEnVenteProches(2, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={enVenteProches[2].description} onChange={(v) => updateEnVenteProches(2, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

        <span style={{ position: 'absolute', left: '569px', top: '811px', fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }}>8</span>
      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Title LE PRIX DE PRÉSENTATION */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <EditableText value="LE PRIX" onChange={() => {}} tag="div" style={{ margin: 0 }} />
          <EditableText value="DE PRÉSENTATION" onChange={() => {}} tag="div" style={{ margin: 0 }} />
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

        {/* Price box - [653,289,826,332] → relative [58,289,231,332] */}
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

        {/* Large panoramic photo - [574,381,979,786] → relative [-21,381,384,786] */}
        <EditableImage
          src={prix.photo}
          onChange={(photo) => updatePrix({ photo })}
          alt="Photo panoramique"
          style={{
            position: 'absolute', left: '-21px', top: '381px',
            width: '617px', height: '461px',
          }}
        />

        <span style={{ position: 'absolute', left: '569px', top: '811px', fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }}>9</span>
      </div>
    </div>
  );
}
