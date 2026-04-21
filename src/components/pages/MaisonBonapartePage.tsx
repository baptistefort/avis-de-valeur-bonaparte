'use client';

import React from 'react';
import EditableText from '../EditableText';
import EditableImage from '../EditableImage';
import { useDocumentStore } from '@/store/useDocumentStore';

export default function MaisonBonapartePage() {
  const { maisonBonaparte, updateMaisonBonaparte } = useDocumentStore();

  const bodyText: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif", fontWeight: 400,
    fontSize: '8.5pt', color: '#000000', lineHeight: 1.4, textAlign: 'left',
  };

  const updateImplPhoto = (idx: number, photo: string) => {
    const updated = [...maisonBonaparte.photosImplantations];
    updated[idx] = photo;
    updateMaisonBonaparte({ photosImplantations: updated });
  };

  const updateRegion = (key: keyof typeof maisonBonaparte.regions, value: string) => {
    updateMaisonBonaparte({
      regions: { ...maisonBonaparte.regions, [key]: value },
    });
  };

  return (
    <div className="pdf-spread" style={{ background: '#ffffff' }}>

      {/* ============ LEFT HALF ============ */}
      <div className="pdf-half" style={{ background: '#ffffff' }}>

        {/* Title MAISON BONAPARTE */}
        <div style={{
          position: 'absolute', left: '57px', top: '65px',
          fontFamily: "'Caudex', serif", fontWeight: 700, fontSize: '22pt',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#000000', lineHeight: '30pt',
        }}>
          <div style={{ margin: 0 }}>MAISON</div>
          <div style={{ margin: 0 }}>BONAPARTE</div>
        </div>

        {/* Subtitle gold - 2 lines max */}
        <p style={{
          position: 'absolute', left: '57px', top: '155px', width: '480px',
          fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '11pt',
          color: '#ae9e7d', lineHeight: '16pt', margin: 0,
        }}>
          La Maison BONAPARTE incarne un héritage fondé sur l&apos;excellence au service de vos projets immobiliers.
        </p>

        {/* Gold line */}
        <div style={{ position: 'absolute', left: '155px', top: '203px', width: '0.8px', height: '40px', background: '#ad9d7d' }} />

        {/* NOS VALEURS */}
        <span style={{
          position: 'absolute', left: '57px', top: '255px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
          letterSpacing: '0.15em', color: '#ae9e7d',
        }}>NOS VALEURS</span>

        <p style={{
          position: 'absolute', left: '57px', top: '290px', width: '350px',
          ...bodyText, margin: 0,
        }}>
          Les valeurs de la Maison BONAPARTE guident chaque décision et chaque relation client. Elles soutiennent notre exigence d&apos;excellence avec rigueur et passion.
        </p>

        {/* Gold vertical line from top of EXCELLENCE (y=399) to bottom of INNOVATION (y=559) */}
        <div style={{
          position: 'absolute', left: '155px', top: '374px',
          width: '0.8px', height: '160px', background: '#ad9d7d',
        }} />

        {/* Value tags - PDF positions: x=178-181, y=399,441,483,525 */}
        {[
          { val: 'EXCELLENCE', y: 374 },
          { val: 'EXCLUSIVITÉ', y: 416 },
          { val: 'CONFIANCE & TRANSPARENCE', y: 458 },
          { val: 'INNOVATION', y: 500 },
        ].map((item) => (
          <div key={item.val} style={{
            position: 'absolute', left: '178px', top: `${item.y}px`,
            border: '1px solid #ad9d7d', padding: '4px 12px',
          }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '8.5pt', color: '#ae9e7d', letterSpacing: '0.1em' }}>
              {item.val}
            </span>
          </div>
        ))}

        {/* Photo agence bottom */}
        <EditableImage src={maisonBonaparte.photoAgence} onChange={(p) => updateMaisonBonaparte({ photoAgence: p })}
          alt="Photo agence" style={{ position: 'absolute', left: '0px', top: '597px', width: '420px', height: '245px' }} />

      </div>

      {/* ============ RIGHT HALF ============ */}
      <div className="pdf-half" style={{ background: '#f1eee8', position: 'relative' }}>

        {/* White background for LA FORCE DU RÉSEAU NATIONAL section */}
        <div style={{
          position: 'absolute', left: '0', top: '0', right: '0', height: '260px',
          background: '#ffffff',
        }} />

        {/* LA FORCE DU RÉSEAU NATIONAL */}
        <span style={{
          position: 'absolute', left: '57px', top: '128px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
          letterSpacing: '0.15em', color: '#ae9e7d',
        }}>LA FORCE DU RÉSEAU NATIONAL</span>

        <p style={{
          position: 'absolute', left: '57px', top: '160px', width: '500px',
          ...bodyText, margin: 0,
        }}>
          Seuls les agents les plus performants et expérimentés rejoignent BONAPARTE. Cette sélection exigeante garantit à chaque client un accompagnement d&apos;exception et une valorisation optimale de sa vente.
        </p>

        {/* NOS IMPLANTATIONS */}
        <span style={{
          position: 'absolute', left: '57px', top: '293px',
          fontFamily: "'Caudex', serif", fontWeight: 400, fontSize: '14pt',
          letterSpacing: '0.15em', color: '#000000',
        }}>NOS IMPLANTATIONS</span>

        <p style={{
          position: 'absolute', left: '57px', top: '330px', width: '400px',
          ...bodyText, margin: 0,
        }}>
          Une présence ciblée sur les marchés les plus recherchés. Chaque implantation répond à une logique claire : offrir une expertise locale solide, soutenue par une couverture nationale.
        </p>

        {/* Gold line before PARIS */}
        <div style={{ position: 'absolute', left: '180px', top: '410px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        {/* PARIS & ILE-DE-FRANCE - y=450, 470 */}
        <EditableText value={maisonBonaparte.regions.parisLigne1}
          onChange={(v) => updateRegion('parisLigne1', v)} tag="div"
          style={{ position: 'absolute', left: '92px', top: '450px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.1em', color: '#000000' }} />
        <EditableText value={maisonBonaparte.regions.parisLigne2}
          onChange={(v) => updateRegion('parisLigne2', v)} tag="div"
          style={{ position: 'absolute', left: '92px', top: '470px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.1em', color: '#000000' }} />
        {/* PARIS photos - img2=[397,418,480,531] img3=[314,458,409,517] */}
        <EditableImage src={maisonBonaparte.photosImplantations[0]} onChange={(p) => updateImplPhoto(0, p)}
          alt="Paris 1" style={{ position: 'absolute', left: '427px', top: '418px', width: '82px', height: '113px' }} />
        <EditableImage src={maisonBonaparte.photosImplantations[1]} onChange={(p) => updateImplPhoto(1, p)}
          alt="Paris 2" style={{ position: 'absolute', left: '344px', top: '458px', width: '95px', height: '59px' }} />

        {/* Gold line before COTE D'AZUR */}
        <div style={{ position: 'absolute', left: '180px', top: '525px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        {/* CÔTE D'AZUR - y=567 */}
        <EditableText value={maisonBonaparte.regions.azur}
          onChange={(v) => updateRegion('azur', v)} tag="div"
          style={{ position: 'absolute', left: '92px', top: '567px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.1em', color: '#000000' }} />
        {/* Azur photos - layered: idx 2=chateau, idx 4=mer aerienne (behind), idx 3=vague (on top, overlapping idx 4) */}
        <EditableImage src={maisonBonaparte.photosImplantations[2]} onChange={(p) => updateImplPhoto(2, p)}
          alt="Azur 1" style={{ position: 'absolute', left: '312px', top: '545px', width: '92px', height: '63px', zIndex: 1 }} />
        <EditableImage src={maisonBonaparte.photosImplantations[4]} onChange={(p) => updateImplPhoto(4, p)}
          alt="Azur 3" style={{ position: 'absolute', left: '486px', top: '550px', width: '84px', height: '113px', zIndex: 1 }} />
        <EditableImage src={maisonBonaparte.photosImplantations[3]} onChange={(p) => updateImplPhoto(3, p)}
          alt="Azur 2" style={{ position: 'absolute', left: '422px', top: '564px', width: '87px', height: '68px', zIndex: 2 }} />

        {/* Gold line before PAYS BASQUE */}
        <div style={{ position: 'absolute', left: '180px', top: '625px', width: '0.8px', height: '30px', background: '#ad9d7d' }} />

        {/* PAYS BASQUE & CÔTE ATLANTIQUE - y=665, 685 */}
        <EditableText value={maisonBonaparte.regions.basqueLigne1}
          onChange={(v) => updateRegion('basqueLigne1', v)} tag="div"
          style={{ position: 'absolute', left: '92px', top: '665px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.1em', color: '#000000' }} />
        <EditableText value={maisonBonaparte.regions.basqueLigne2}
          onChange={(v) => updateRegion('basqueLigne2', v)} tag="div"
          style={{ position: 'absolute', left: '92px', top: '685px', fontFamily: "'Caudex', serif", fontSize: '14pt', letterSpacing: '0.1em', color: '#000000' }} />
        {/* Basque photo (idx 5) */}
        <EditableImage src={maisonBonaparte.photosImplantations[5]} onChange={(p) => updateImplPhoto(5, p)}
          alt="Basque" style={{ position: 'absolute', left: '370px', top: '645px', width: '102px', height: '71px' }} />

        {/* Bottom text */}
        <p style={{
          position: 'absolute', left: '57px', bottom: '40px', width: '480px',
          ...bodyText, margin: 0,
        }}>
          Une présence partout en France, qui garantit le même niveau d&apos;exigence et d&apos;excellence.
        </p>

      </div>
    </div>
  );
}
