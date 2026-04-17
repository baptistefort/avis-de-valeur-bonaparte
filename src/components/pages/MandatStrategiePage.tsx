'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function MandatStrategiePage() {
  const { mandat, updateMandat } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4, textAlign: 'left',
  };

  const updateStratPhoto = (idx: number, photo: string) => {
    const updated = [...mandat.photosStrategie];
    updated[idx] = photo;
    updateMandat({ photosStrategie: updated });
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* Title LE MANDAT BONAPARTE */}
        <div style={{
          position: 'absolute', left: '57px', top: '65px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <EditableText value="LE MANDAT" onChange={() => {}} tag="div" style={{ margin: 0 }} />
          <EditableText value="BONAPARTE" onChange={() => {}} tag="div" style={{ margin: 0 }} />
        </div>

        {/* Subtitle gold */}
        <div style={{ position: 'absolute', left: '57px', top: '160px', width: '400px' }}>
          <EditableText
            value="Une stratégie sur mesure, un suivi rigoureux."
            onChange={() => {}}
            tag="p"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '11pt', color: '#ae9e7d', lineHeight: '16pt' }}
          />
        </div>

        {/* SERVICES */}
        <EditableText value="SERVICES" onChange={() => {}} tag="span"
          style={{ position: 'absolute', left: '57px', top: '213px', fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt', letterSpacing: '0.15em', color: '#ae9e7d' }} />


        {/* Gold line from first to last service item, aligned to S of SERVICES */}
        <div style={{
          position: 'absolute', left: '92px', top: '263px',
          width: '0.8px', height: '240px', background: '#ad9d7d',
        }} />

        {/* Service items */}
        {[
          { num: '1', title: 'Étude Juridique & Technique Complète', desc: "Analyse juridique et technique afin d'anticiper les points sensibles et sécuriser la vente.", y: 263 },
          { num: '2', title: 'Plan de commercialisation sur mesure', desc: "Positionnement, ciblage et plan d'action adaptés au bien et à son marché.", y: 326 },
          { num: '3', title: 'Suivi Transparent & Comptes-Rendus Détaillés', desc: "Rapports réguliers sur l'activité du bien pour une visibilité totale.", y: 390 },
          { num: '4', title: 'Coordination', desc: "Coordination avec notaires et avocats pour assurer la cohérence juridique et fiscale du projet.", y: 453 },
        ].map((s) => (
          <div key={s.num} style={{ position: 'absolute', left: '115px', top: `${s.y}px`, display: 'flex', gap: '12px', width: '420px' }}>
            <div style={{
              width: '26px', height: '26px', borderRadius: '50%', border: '1px solid #ad9d7d',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Caudex', serif", fontSize: '13pt', color: '#ae9e7d' }}>{s.num}</span>
            </div>
            <div>
              <EditableText value={s.title} onChange={() => {}} tag="div"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '1px', whiteSpace: 'nowrap' }} />
              <div style={{ width: '290px' }}>
                <EditableText value={s.desc} onChange={() => {}} tag="div" multiline
                  style={bodyText} />
              </div>
            </div>
          </div>
        ))}

        {/* Photo mandat bottom - PDF: [-1,574,471,843] */}
        <EditableImage src={mandat.photoMandat} onChange={(p) => updateMandat({ photoMandat: p })}
          alt="Photo mandat" style={{ position: 'absolute', left: '0px', top: '540px', width: '471px', height: '302px' }} />

        <span style={{ position: 'absolute', left: '562px', top: '811px', fontFamily: "'Caudex', serif", fontSize: '8.5pt', color: '#000000' }}>12</span>
      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Title STRATÉGIE DE COMMUNICATION BONAPARTE - PDF: [57,60], [57,90], [57,120] */}
        <div style={{
          position: 'absolute', left: '57px', top: '40px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <EditableText value="STRATÉGIE" onChange={() => {}} tag="div" style={{ margin: 0 }} />
          <EditableText value="DE COMMUNICATION" onChange={() => {}} tag="div" style={{ margin: 0 }} />
          <EditableText value="BONAPARTE" onChange={() => {}} tag="div" style={{ margin: 0 }} />
        </div>

        {/* Intro text - PDF: [57, 165], 3 lines, width ~255 */}
        <div style={{ position: 'absolute', left: '57px', top: '165px', width: '280px' }}>
          <EditableText
            value="Chaque propriété mérite une mise en lumière unique. BONAPARTE transforme votre bien en signature visuelle, pour capter l'attention dès le premier regard."
            onChange={() => {}}
            tag="p" multiline
            style={{ ...bodyText, textAlign: 'justify' }}
          />
        </div>

        {/* === MISE EN VALEUR === */}
        {/* Gold line - PDF: x=189, y=216→250 */}
        <div style={{ position: 'absolute', left: '115px', top: '242px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        <EditableText value="MISE EN VALEUR" onChange={() => {}} tag="span"
          style={{ position: 'absolute', left: '113px', top: '280px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d' }} />
        <div style={{ position: 'absolute', left: '113px', top: '306px', width: '250px' }}>
          <EditableText value="Photographies, mise en scène et rédaction sont travaillées avec précision pour donner une lecture claire du bien."
            onChange={() => {}} tag="p" multiline style={{ ...bodyText, textAlign: 'justify' }} />
        </div>

        {/* Photos MISE EN VALEUR - 2 superposees */}
        <img src="/images/page7_img2.jpeg" alt="" draggable={false}
          style={{ position: 'absolute', left: '418px', top: '250px', width: '151px', height: '101px', objectFit: 'cover', zIndex: 1 }} />
        <img src="/images/page7_img3.jpeg" alt="" draggable={false}
          style={{ position: 'absolute', left: '396px', top: '310px', width: '103px', height: '69px', objectFit: 'cover', zIndex: 2 }} />

        {/* === PRODUCTION VIDÉO === */}
        {/* Gold line - PDF: x=189, y=351→384 */}
        <div style={{ position: 'absolute', left: '115px', top: '377px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        <EditableText value="PRODUCTION VIDÉO" onChange={() => {}} tag="span"
          style={{ position: 'absolute', left: '113px', top: '414px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d' }} />
        <div style={{ position: 'absolute', left: '113px', top: '441px', width: '250px' }}>
          <EditableText value="Contenus vidéo et formats courts pensés pour capter l'attention et valoriser les volumes."
            onChange={() => {}} tag="p" multiline style={{ ...bodyText, textAlign: 'justify' }} />
        </div>

        {/* Photos PRODUCTION VIDÉO - 2 cote a cote */}
        <img src="/images/page7_img4.jpeg" alt="" draggable={false}
          style={{ position: 'absolute', left: '396px', top: '440px', width: '93px', height: '94px', objectFit: 'cover', zIndex: 1 }} />
        <img src="/images/page7_img5.jpeg" alt="" draggable={false}
          style={{ position: 'absolute', left: '476px', top: '413px', width: '92px', height: '139px', objectFit: 'cover', zIndex: 1 }} />

        {/* === RÉSEAUX SOCIAUX === */}
        {/* Gold line - PDF: x=189, y=471→505 */}
        <div style={{ position: 'absolute', left: '115px', top: '502px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        <EditableText value="RÉSEAUX SOCIAUX" onChange={() => {}} tag="span"
          style={{ position: 'absolute', left: '113px', top: '535px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d' }} />
        <div style={{ position: 'absolute', left: '113px', top: '562px', width: '250px' }}>
          <EditableText value="Réels Instagram et YouTube, conçus selon les codes de la Maison et les patterns techniques des plateformes, afin d'amplifier une visibilité auprès d'une audience qualifiée."
            onChange={() => {}} tag="p" multiline style={{ ...bodyText, textAlign: 'justify' }} />
        </div>


        {/* Photo BROCHURE */}
        <img src="/images/brochure_clean.png" alt="" draggable={false}
          style={{ position: 'absolute', left: '410px', top: '590px', width: '158px', height: '218px', objectFit: 'cover', zIndex: 1 }} />

        {/* === BROCHURE === */}
        {/* Gold line - PDF: x=189, y=620→654 */}
        <div style={{ position: 'absolute', left: '115px', top: '652px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        <EditableText value="BROCHURE" onChange={() => {}} tag="span"
          style={{ position: 'absolute', left: '113px', top: '684px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d' }} />
        <div style={{ position: 'absolute', left: '113px', top: '711px', width: '250px' }}>
          <EditableText value="Des supports personnalisés pour sublimer le bien et en assurer une présentation optimale."
            onChange={() => {}} tag="p" multiline style={{ ...bodyText, textAlign: 'justify' }} />
        </div>

        <span style={{ position: 'absolute', left: '563px', top: '811px', fontFamily: "'Caudex', serif", fontSize: '8.5pt', color: '#000000' }}>13</span>
      </div>
    </div>
  );
}
