'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

// After content swap: this spread now holds COMPARABLES (Vendus on left, En vente on right).
// Kept the filename (MarchePage) to avoid breaking /print/marche route + Editor imports.
export default function MarchePage() {
  const { vendusProches, enVenteProches, updateVendusProches, updateEnVenteProches } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4,
    textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF - VENDU PROCHE DE CHEZ VOUS ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* Title VENDU PROCHE DE CHEZ VOUS (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>VENDU</div>
          <div style={{ margin: 0 }}>PROCHE DE CHEZ VOUS</div>
        </div>

        {/* Gold line under title */}
        <div style={{
          position: 'absolute', left: '57px', top: '178px',
          width: '0.8px', height: '40px', background: '#ad9d7d',
        }} />

        {/* 3 biens vendus - photo + details */}
        {/* Bien 1 */}
        <EditableImage src={vendusProches[0].photo} onChange={(photo) => updateVendusProches(0, { photo })}
          alt="Vendu 1" style={{ position: 'absolute', left: '56px', top: '201px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '269px', top: '229px' }}>
          <EditableText value={vendusProches[0].surface} onChange={(v) => updateVendusProches(0, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={vendusProches[0].prix} onChange={(v) => updateVendusProches(0, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${vendusProches[0].prixM2}`} onChange={(v) => updateVendusProches(0, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '56px', top: '328px' }}>
          <EditableText value={vendusProches[0].adresse} onChange={(v) => updateVendusProches(0, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={vendusProches[0].description} onChange={(v) => updateVendusProches(0, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

        {/* Gold vertical line */}
        <div style={{ position: 'absolute', left: '164px', top: '388px', width: '0.8px', height: '191px', background: '#ad9d7d' }} />

        {/* Bien 2 */}
        <EditableImage src={vendusProches[1].photo} onChange={(photo) => updateVendusProches(1, { photo })}
          alt="Vendu 2" style={{ position: 'absolute', left: '216px', top: '401px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '429px', top: '429px' }}>
          <EditableText value={vendusProches[1].surface} onChange={(v) => updateVendusProches(1, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={vendusProches[1].prix} onChange={(v) => updateVendusProches(1, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${vendusProches[1].prixM2}`} onChange={(v) => updateVendusProches(1, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '216px', top: '528px' }}>
          <EditableText value={vendusProches[1].adresse} onChange={(v) => updateVendusProches(1, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={vendusProches[1].description} onChange={(v) => updateVendusProches(1, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

        {/* Bien 3 */}
        <EditableImage src={vendusProches[2].photo} onChange={(photo) => updateVendusProches(2, { photo })}
          alt="Vendu 3" style={{ position: 'absolute', left: '56px', top: '600px', width: '192px', height: '115px' }} />
        <div style={{ position: 'absolute', left: '269px', top: '632px' }}>
          <EditableText value={vendusProches[2].surface} onChange={(v) => updateVendusProches(2, { surface: v })} tag="div" style={{ ...bodyText, marginBottom: '2px' }} />
          <EditableText value={vendusProches[2].prix} onChange={(v) => updateVendusProches(2, { prix: v })} tag="div" style={{ ...bodyText, marginBottom: '4px' }} />
          <div style={{ border: '1px solid #ad9d7d', padding: '2px 8px', display: 'inline-block' }}>
            <EditableText value={`soit ${vendusProches[2].prixM2}`} onChange={(v) => updateVendusProches(2, { prixM2: v.replace('soit ', '') })} tag="span"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#000000' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', left: '56px', top: '727px' }}>
          <EditableText value={vendusProches[2].adresse} onChange={(v) => updateVendusProches(2, { adresse: v })} tag="div"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
          <EditableText value={vendusProches[2].description} onChange={(v) => updateVendusProches(2, { description: v })} tag="div" multiline
            style={{ ...bodyText, whiteSpace: 'pre-line' }} />
        </div>

      </div>

      {/* ============ RIGHT HALF - EN VENTE PROCHE DE CHEZ VOUS ============ */}
      <div className="pdf-half" style={{ background: '#f1eee8' }}>

        {/* Title EN VENTE PROCHE DE CHEZ VOUS (STATIC) */}
        <div style={{
          position: 'absolute', left: '57px', top: '90px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>EN VENTE</div>
          <div style={{ margin: 0 }}>PROCHE DE CHEZ VOUS</div>
        </div>

        {/* 3 biens en vente */}
        {/* Bien 1 */}
        <EditableImage src={enVenteProches[0].photo} onChange={(photo) => updateEnVenteProches(0, { photo })}
          alt="En vente 1" style={{ position: 'absolute', left: '56px', top: '201px', width: '192px', height: '115px' }} />
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

        {/* Bien 2 */}
        <EditableImage src={enVenteProches[1].photo} onChange={(photo) => updateEnVenteProches(1, { photo })}
          alt="En vente 2" style={{ position: 'absolute', left: '216px', top: '401px', width: '192px', height: '115px' }} />
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

        {/* Bien 3 */}
        <EditableImage src={enVenteProches[2].photo} onChange={(photo) => updateEnVenteProches(2, { photo })}
          alt="En vente 3" style={{ position: 'absolute', left: '56px', top: '600px', width: '192px', height: '115px' }} />
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

      </div>
    </div>
  );
}
