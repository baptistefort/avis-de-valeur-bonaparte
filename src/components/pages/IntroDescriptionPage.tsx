'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function IntroDescriptionPage() {
  const { intro, description, contact, updateIntro, updateDescription, updateContact } = useDocumentStore();

  /*
   * PDF: Montserrat-Regular 10pt on 256pt width.
   * Browser Montserrat renders ~6% wider → must compensate.
   * Calibrated: 8.5pt / 290px width / lineHeight 1.4 = 301px height,
   * matching the PDF's 17-line text block exactly.
   */
  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    fontSize: '8.5pt',
    color: '#000000',
    lineHeight: 1.4,
    margin: 0,
    textAlign: 'left',
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF (0 - 595.3pt) ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* INTRODUCTION - Caudex 25pt, letter-spacing 0.35em */}
        <EditableText
          value={intro.titre}
          onChange={(titre) => updateIntro({ titre })}
          tag="h2"
          style={{
            position: 'absolute', left: '56.7px', top: '120.7px',
            fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '25pt',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#000000', margin: 0,
          }}
        />

        {/* Gold line - centered under INTRODUCTION title */}
        <div style={{
          position: 'absolute', left: '56.7px', top: '163.7px',
          width: '405px', display: 'flex', justifyContent: 'center',
        }}>
          <div style={{ width: '0.8px', height: '48px', background: '#ad9d7d' }} />
        </div>

        {/* "Madame, Monsieur," : x=57.6, y=229.1 */}
        <EditableText
          value={intro.salutation}
          onChange={(salutation) => updateIntro({ salutation })}
          tag="p"
          style={{
            position: 'absolute', left: '57.6px', top: '229.1px',
            ...bodyText,
          }}
        />

        {/* Intro text: x=57.6, y=257 */}
        <div style={{
          position: 'absolute', left: '57.6px', top: '257px',
          width: '290px',
        }}>
          <EditableText
            value={intro.texte}
            onChange={(texte) => updateIntro({ texte })}
            tag="p" multiline
            style={bodyText}
          />
        </div>

        {/* "Cécilia LAURENT" : Montserrat-Bold 10pt gold */}
        {/* PDF y=343.7, but intro text now ends ~y=352, so push down to 360 */}
        <div style={{ position: 'absolute', left: '56.7px', top: '360px' }}>
          <EditableText
            value={`${contact.prenom} ${contact.nom}`}
            onChange={(val) => {
              const parts = val.split(' ');
              const nom = parts.pop() || '';
              const prenom = parts.join(' ');
              updateContact({ prenom, nom });
            }}
            tag="span"
            style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              fontSize: '8.5pt', color: '#ae9e7d', display: 'block',
            }}
          />
          {/* "Maison BONAPARTE" : Caudex gold */}
          <EditableText
            value={intro.societe}
            onChange={(societe) => updateIntro({ societe })}
            tag="span"
            style={{
              fontFamily: "'Caudex', serif", fontWeight: 400,
              fontSize: '8.5pt', color: '#ae9e7d', display: 'block', marginTop: '2px',
            }}
          />
        </div>

        {/* Interior photo: x=0→312, y=411→786 */}
        <EditableImage
          src={intro.photoInterieur}
          onChange={(photoInterieur) => updateIntro({ photoInterieur })}
          alt="Photo intérieur"
          style={{
            position: 'absolute', left: '0px', top: '411px',
            width: '313px', height: '375px',
          }}
        />

      </div>

      {/* ============ RIGHT HALF (595.3 - 1190.6pt) ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* DESCRIPTION - Caudex 25pt */}
        <EditableText
          value={description.titre}
          onChange={(titre) => updateDescription({ titre })}
          tag="h2"
          style={{
            position: 'absolute', left: '57px', top: '120.3px',
            fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '25pt',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: '#000000', margin: 0,
          }}
        />

        {/* Gold line - centered under DESCRIPTION title */}
        <div style={{
          position: 'absolute', left: '57px', top: '163.5px',
          width: '353px', display: 'flex', justifyContent: 'center',
        }}>
          <div style={{ width: '0.8px', height: '48px', background: '#ad9d7d' }} />
        </div>

        {/* Description text - width calibrated so text ends ~y=499, leaving 31px gap before PARIS 06 tag at y=530 */}
        <div style={{
          position: 'absolute', left: '57px', top: '229px',
          width: '350px',
        }}>
          <EditableText
            value={description.texte}
            onChange={(texte) => updateDescription({ texte })}
            tag="div" multiline
            style={{
              ...bodyText,
              whiteSpace: 'pre-line',
            }}
          />
        </div>

        {/* Map illustration: PDF y=529→843, full width of right half */}
        <EditableImage
          src={intro.photoMap}
          onChange={(photoMap) => updateIntro({ photoMap })}
          alt="Carte du quartier"
          objectPosition="center top"
          style={{
            position: 'absolute', left: '0px', top: '529px',
            width: '595.5px', height: '313px',
          }}
        />

      </div>
    </div>
  );
}
