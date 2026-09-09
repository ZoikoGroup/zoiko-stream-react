import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const cards = [
  { title: 'Security Controls Evidence', tag: '24 RECORDS', desc: 'Evidence linking security governance and control domains to compliance frameworks — referenced, not asserted.', img: 'card-security-controls.png' },
  { title: 'Data Protection Evidence', tag: '18 RECORDS', desc: 'Privacy and data handling evidence separated from legal obligations — scope and limitations clearly stated.', img: 'card-data-protection-evidence.png' },
  { title: 'Operational Evidence', tag: '12 RECORDS', desc: 'Service reliability, business continuity, and incident response evidence with current status and review dates.', img: 'card-operational-evidence.png' },
];

export default function EvidenceInventorySection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden inventory-section"
      style={{ padding: '120px 112px', backgroundColor: '#0a0f1a', borderBottom: '1px solid #232b3a' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .inventory-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .inventory-section { padding: 64px 24px !important; }
          .inventory-cards-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/inventory-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.88)' }} />
      </div>
      <img src={`${IMG}/bg-blob-1.svg`} alt="" className="absolute pointer-events-none" style={{ left: '-230px', top: '-178px', width: '600px', height: '600px' }} />
      <img src={`${IMG}/bg-blob-2.svg`} alt="" className="absolute pointer-events-none" style={{ right: '-263px', bottom: '-347px', width: '740px', height: '740px' }} />

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Evidence Inventory
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            A comprehensive view of all compliance evidence — linking security controls to compliance outcomes without asserting implementation beyond what is established.
          </p>
        </div>

        <div className="flex items-start w-full inventory-cards-row" style={{ gap: '24px' }}>
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-start flex-1 min-w-0 overflow-hidden"
              style={{ borderRadius: '16px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}
            >
              <div className="w-full shrink-0" style={{ height: '180px' }}>
                <img src={`${IMG}/${c.img}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: '12px', padding: '24px' }}>
                <div className="flex items-center justify-between w-full">
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '18px', color: '#eef1f6' }}>{c.title}</p>
                  <div className="flex items-start shrink-0" style={{ padding: '4px 10px', borderRadius: '999px', backgroundColor: 'rgba(52,212,202,0.1)' }}>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '11px', color: '#34d4ca' }}>{c.tag}</p>
                  </div>
                </div>
                <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', lineHeight: '20px', color: '#aab3c4' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
