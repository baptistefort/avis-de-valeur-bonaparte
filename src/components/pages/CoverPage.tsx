'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';
import { asset } from '@/lib/paths';

export default function CoverPage() {
  const { cover, updateCover } = useDocumentStore();

  return (
    <div
      className="pdf-single"
      style={{ background: '#ffffff', position: 'relative' }}
    >
      {/* Top half beige background - split at y=421 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '421px',
          background: '#f1eee8',
        }}
      />

      {/* Content on top of backgrounds */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo zone - PDF: logo paths at y=71..125, centered */}
        <div
          style={{
            paddingTop: '71px',
            textAlign: 'center',
          }}
        >
          <img
            src={asset("/images/logo_bonaparte.png")}
            alt="Bonaparte Art de Vivre"
            style={{
              width: '337px',
              height: 'auto',
              margin: '0 auto',
              display: 'block',
            }}
            draggable={false}
          />
        </div>

        {/* Main photo - PDF: rect [55.6, 194.5, 539.7, 786.3] */}
        <div
          style={{
            position: 'relative',
            marginLeft: '55.6px',
            marginRight: '55.6px',
            marginTop: '45px',
            height: '591.8px',
          }}
        >
          <EditableImage
            src={cover.photo}
            onChange={(photo) => updateCover({ photo })}
            className="absolute inset-0"
            alt="Photo principale"
          />

          {/* Overlay text at bottom-left */}
          <div
            style={{
              position: 'absolute',
              bottom: '55px',
              left: '29px',
              zIndex: 2,
            }}
          >
            {/* AVIS DE VALEUR bordered tag */}
            <div
              style={{
                border: '0.5px solid #c9bba4',
                padding: '5px 13px',
                marginBottom: '8px',
                display: 'inline-block',
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '10pt',
                  color: '#ffffff',
                  letterSpacing: '0.12em',
                }}
              >
                AVIS DE VALEUR
              </span>
            </div>

            {/* PARIS */}
            <div>
              <EditableText
                value={cover.ville}
                onChange={(ville) => updateCover({ ville })}
                tag="h2"
                style={{
                  fontFamily: "'Caudex', serif",
                  fontWeight: 700,
                  fontSize: '23.6pt',
                  color: '#ffffff',
                  letterSpacing: '0.25em',
                  display: 'block',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              />
            </div>

            {/* Address */}
            <div>
              <EditableText
                value={cover.adresse}
                onChange={(adresse) => updateCover({ adresse })}
                tag="p"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontSize: '10pt',
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  display: 'block',
                  margin: 0,
                  marginTop: '1px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
