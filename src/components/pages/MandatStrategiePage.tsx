'use client';

import React from 'react';
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
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>LE MANDAT</div>
          <div style={{ margin: 0 }}>BONAPARTE</div>
        </div>

        {/* Subtitle gold */}
        <p style={{
          position: 'absolute', left: '57px', top: '160px', width: '400px',
          fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '11pt',
          color: '#ae9e7d', lineHeight: '16pt', margin: 0,
        }}>
          Une stratégie sur mesure, un suivi rigoureux.
        </p>

        {/* SERVICES */}
        <span style={{
          position: 'absolute', left: '57px', top: '213px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
          letterSpacing: '0.15em', color: '#ae9e7d',
        }}>SERVICES</span>

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
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '8.5pt', color: '#000000', marginBottom: '1px', whiteSpace: 'nowrap' }}>
                {s.title}
              </div>
              <div style={{ width: '290px', ...bodyText }}>
                {s.desc}
              </div>
            </div>
          </div>
        ))}

        {/* Photo mandat bottom - PDF: [-1,574,471,843] */}
        <EditableImage src={mandat.photoMandat} onChange={(p) => updateMandat({ photoMandat: p })}
          alt="Photo mandat" style={{ position: 'absolute', left: '0px', top: '540px', width: '471px', height: '302px' }} />

      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff', position: 'relative' }}>

        {/* Title STRATÉGIE DE COMMUNICATION BONAPARTE */}
        <div style={{
          position: 'absolute', left: '57px', top: '40px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>STRATÉGIE</div>
          <div style={{ margin: 0 }}>DE COMMUNICATION</div>
          <div style={{ margin: 0 }}>BONAPARTE</div>
        </div>

        {/* Intro text */}
        <p style={{
          position: 'absolute', left: '57px', top: '165px', width: '280px',
          ...bodyText, textAlign: 'justify', margin: 0,
        }}>
          Chaque propriété mérite une mise en lumière unique. BONAPARTE transforme votre bien en signature visuelle, pour capter l&apos;attention dès le premier regard.
        </p>

        {/* === MISE EN VALEUR === */}
        <div style={{ position: 'absolute', left: '115px', top: '242px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />
        <span style={{
          position: 'absolute', left: '113px', top: '280px',
          fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d',
        }}>MISE EN VALEUR</span>
        <p style={{
          position: 'absolute', left: '113px', top: '306px', width: '250px',
          ...bodyText, textAlign: 'justify', margin: 0,
        }}>
          Photographies, mise en scène et rédaction sont travaillées avec précision pour donner une lecture claire du bien.
        </p>

        {/* Photos MISE EN VALEUR */}
        <EditableImage src={mandat.photosStrategie[0]} onChange={(p) => updateStratPhoto(0, p)}
          alt="Mise en valeur 1"
          style={{ position: 'absolute', left: '418px', top: '250px', width: '151px', height: '101px', zIndex: 1 }} />
        <EditableImage src={mandat.photosStrategie[1]} onChange={(p) => updateStratPhoto(1, p)}
          alt="Mise en valeur 2"
          style={{ position: 'absolute', left: '396px', top: '310px', width: '103px', height: '69px', zIndex: 2 }} />

        {/* === PRODUCTION VIDÉO === */}
        <div style={{ position: 'absolute', left: '115px', top: '377px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />
        <span style={{
          position: 'absolute', left: '113px', top: '414px',
          fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d',
        }}>PRODUCTION VIDÉO</span>
        <p style={{
          position: 'absolute', left: '113px', top: '441px', width: '250px',
          ...bodyText, textAlign: 'justify', margin: 0,
        }}>
          Contenus vidéo et formats courts pensés pour capter l&apos;attention et valoriser les volumes.
        </p>

        {/* Photos PRODUCTION VIDÉO */}
        <EditableImage src={mandat.photosStrategie[2]} onChange={(p) => updateStratPhoto(2, p)}
          alt="Production vidéo 1"
          style={{ position: 'absolute', left: '396px', top: '440px', width: '93px', height: '94px', zIndex: 1 }} />
        <EditableImage src={mandat.photosStrategie[3]} onChange={(p) => updateStratPhoto(3, p)}
          alt="Production vidéo 2"
          style={{ position: 'absolute', left: '476px', top: '413px', width: '92px', height: '139px', zIndex: 1 }} />

        {/* === RÉSEAUX SOCIAUX === */}
        <div style={{ position: 'absolute', left: '115px', top: '502px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />
        <span style={{
          position: 'absolute', left: '113px', top: '535px',
          fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d',
        }}>RÉSEAUX SOCIAUX</span>
        <p style={{
          position: 'absolute', left: '113px', top: '562px', width: '250px',
          ...bodyText, textAlign: 'justify', margin: 0,
        }}>
          Réels Instagram et YouTube, conçus selon les codes de la Maison et les patterns techniques des plateformes, afin d&apos;amplifier une visibilité auprès d&apos;une audience qualifiée.
        </p>

        {/* Photo BROCHURE */}
        <EditableImage src={mandat.photosStrategie[4]} onChange={(p) => updateStratPhoto(4, p)}
          alt="Brochure"
          style={{ position: 'absolute', left: '410px', top: '590px', width: '158px', height: '218px', zIndex: 1 }} />

        {/* === BROCHURE === */}
        <div style={{ position: 'absolute', left: '115px', top: '652px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />
        <span style={{
          position: 'absolute', left: '113px', top: '684px',
          fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.12em', color: '#ae9e7d',
        }}>BROCHURE</span>
        <p style={{
          position: 'absolute', left: '113px', top: '711px', width: '250px',
          ...bodyText, textAlign: 'justify', margin: 0,
        }}>
          Des supports personnalisés pour sublimer le bien et en assurer une présentation optimale.
        </p>

      </div>
    </div>
  );
}
