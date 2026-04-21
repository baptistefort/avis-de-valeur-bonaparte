'use client';

import React from 'react';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function DiffusionPage() {
  const { diffusion, updateDiffusion } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4, textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF - Full photo (EDITABLE) ============ */}
      <div className="pdf-half" style={{ background: '#000000', position: 'relative' }}>
        <EditableImage src={diffusion.photo} onChange={(photo) => updateDiffusion({ photo })}
          alt="Photo diffusion" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

        <span style={{ position: 'absolute', left: '569px', top: '811px', fontFamily: "'Caudex', serif", fontSize: '8.5pt', color: '#ffffff' }}>14</span>
      </div>

      {/* ============ RIGHT HALF (ALL STATIC) ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* UNE DIFFUSION OPTIMALE */}
        <span style={{
          position: 'absolute', left: '57px', top: '104px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
          letterSpacing: '0.15em', color: '#ae9e7d',
        }}>UNE DIFFUSION OPTIMALE</span>

        <p style={{
          position: 'absolute', left: '60px', top: '135px', width: '400px',
          ...bodyText, margin: 0,
        }}>
          Une diffusion sélective, précise et internationale.
        </p>

        {/* Gold line from 60+ to end of PORTAILS PREMIUM text */}
        <div style={{
          position: 'absolute', left: '100px', top: '215px',
          width: '0.8px', height: '262px', background: '#ad9d7d',
        }} />

        {/* 60+ */}
        <div style={{
          position: 'absolute', left: '145px', top: '196px',
          fontFamily: "'Caudex', serif", fontSize: '32pt', lineHeight: '36pt',
          letterSpacing: '0.1em', color: '#ae9e7d',
        }}>60+</div>
        <div style={{ position: 'absolute', left: '145px', top: '240px', width: '300px' }}>
          <div style={{ ...bodyText, marginBottom: '1px' }}>Pays de Diffusion</div>
          <div style={bodyText}>Une présence internationale dans plus de 60 pays.</div>
        </div>

        {/* OFFMARKET */}
        <div style={{
          position: 'absolute', left: '145px', top: '305px',
          fontFamily: "'Caudex', serif", fontSize: '20pt',
          letterSpacing: '0.1em', color: '#ae9e7d',
        }}>OFFMARKET</div>
        <div style={{ position: 'absolute', left: '145px', top: '340px', width: '300px' }}>
          <div style={{ ...bodyText, marginBottom: '1px' }}>Clients en Portefeuille</div>
          <div style={bodyText}>Plus de 100 000 clients, dont de nombreux acquéreurs qualifiés.</div>
        </div>

        {/* PORTAILS PREMIUM */}
        <div style={{
          position: 'absolute', left: '145px', top: '410px',
          fontFamily: "'Caudex', serif", fontSize: '20pt',
          letterSpacing: '0.1em', color: '#ae9e7d',
        }}>PORTAILS PREMIUM</div>
        <div style={{ position: 'absolute', left: '145px', top: '445px', width: '300px' }}>
          <div style={bodyText}>Diffusion sur les portails immobiliers premium français et internationaux.</div>
        </div>

        {/* Portails + logos image (STATIC) */}
        <img src="/images/portails_logos.png" alt="" draggable={false}
          style={{ position: 'absolute', left: '25px', top: '500px', width: '545px', height: 'auto' }} />

        <span style={{ position: 'absolute', left: '569px', top: '811px', fontFamily: "'Caudex', serif", fontSize: '8.5pt', color: '#000000' }}>15</span>
      </div>
    </div>
  );
}
