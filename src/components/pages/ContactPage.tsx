'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function ContactPage() {
  const { contact, updateContact } = useDocumentStore();

  const iconStyle: React.CSSProperties = { width: '14px', height: '14px', flexShrink: 0 };
  const contactLine: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '6px' };

  return (
    <div className="pdf-single" style={{ background: '#ffffff', position: 'relative' }}>

      {/* Beige background bottom section - starts at y=550 */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: '550px', bottom: 0, background: '#f1eee8' }} />

      {/* Photo consultant - PDF: [-1,54,294,608] */}
      <EditableImage src={contact.photo} onChange={(photo) => updateContact({ photo })}
        alt="Photo consultant"
        style={{ position: 'absolute', left: '0px', top: '54px', width: '295px', height: '554px' }} />

      {/* CONTACT - PDF: x=340, y=151, Caudex-Bold 25.5pt */}
      <EditableText value="CONTACT" onChange={() => {}} tag="h2"
        style={{
          position: 'absolute', left: '340px', top: '151px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.3em', textTransform: 'uppercase', color: '#000000', margin: 0,
        }} />

      {/* Gold line - longer and more centered under CONTACT */}
      <div style={{ position: 'absolute', left: '430px', top: '205px', width: '0.8px', height: '60px', background: '#ad9d7d' }} />

      {/* Cécilia LAURENT - PDF: x=340, y=285, Caudex 16.5pt gold */}
      <div style={{ position: 'absolute', left: '340px', top: '285px' }}>
        <EditableText
          value={`${contact.prenom} ${contact.nom}`}
          onChange={(val) => {
            const parts = val.split(' ');
            const nom = parts.pop() || '';
            const prenom = parts.join(' ');
            updateContact({ prenom, nom });
          }}
          tag="span"
          style={{ fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt', letterSpacing: '0.05em', color: '#ae9e7d' }}
        />
      </div>

      {/* Consultante en immobilier - PDF: x=340, y=322 */}
      <div style={{ position: 'absolute', left: '340px', top: '322px' }}>
        <EditableText value={contact.titre} onChange={(titre) => updateContact({ titre })} tag="div"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '2px' }} />
        {/* Saint-Tropez - PDF: y=336 */}
        <EditableText value={contact.localisation} onChange={(localisation) => updateContact({ localisation })} tag="div"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
      </div>

      {/* Phone - PDF: icone y=354, texte x=340 y=354 (pas d'icone separee, texte direct) */}
      <div style={{ position: 'absolute', left: '340px', top: '358px', ...contactLine }}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#ae9e7d" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <EditableText value={contact.telephone} onChange={(telephone) => updateContact({ telephone })} tag="span"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
      </div>

      {/* Email - PDF: icone y=372, texte x=360 y=372 */}
      <div style={{ position: 'absolute', left: '340px', top: '376px', ...contactLine }}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#ae9e7d" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <EditableText value={contact.email} onChange={(email) => updateContact({ email })} tag="span"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
      </div>

      {/* Separator space before website section */}

      {/* Website - PDF: icone y=422, texte x=361 y=422 */}
      <div style={{ position: 'absolute', left: '340px', top: '418px', ...contactLine }}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#ae9e7d" strokeWidth="1.5">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <EditableText value="www.bonaparte-artdevivre.com" onChange={() => {}} tag="span"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000' }} />
      </div>

      {/* Reception email - PDF: icone y=440, texte x=360 y=440 */}
      <div style={{ position: 'absolute', left: '340px', top: '436px', ...contactLine }}>
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#ae9e7d" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <EditableText value="reception@bonaparte-artdevivre.com" onChange={() => {}} tag="span"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#000000' }} />
      </div>

      {/* BONAPARTE logo bottom - centered */}
      <div style={{ position: 'absolute', bottom: '100px', left: '0', right: '0', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
        <img src="/images/logo_bonaparte.png" alt="Bonaparte" style={{ width: '280px', height: 'auto' }} draggable={false} />
      </div>

      {/* Footer - PDF: y=785 and y=793 */}
      <div style={{ position: 'absolute', bottom: '40px', left: '0', right: '0', textAlign: 'center', zIndex: 2 }}>
        <EditableText value="Siège social : Terre Blanche - 104 Impasse des grandes terrasses, 83440 Tourrettes."
          onChange={() => {}} tag="div"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '6pt', color: '#c9bca4' }} />
        <EditableText value="Bureau Paris : 78 Boulevard Haussmann 75008 PARIS (bureau de représentation)"
          onChange={() => {}} tag="div"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '6pt', color: '#c9bca4', marginTop: '2px' }} />
      </div>
    </div>
  );
}
