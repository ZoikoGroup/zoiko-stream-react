import React from 'react';

const IMG = '/images/zoikostream-trust-center-compliance';

const filters = ['All Frameworks', 'Certifications', 'Attestations', 'Assessments', 'Mappings'];

const cards = [
  { type: 'Attestation', status: 'Current', title: 'SOC 2 Type II', desc: 'ZoikoStream platform infrastructure and data handling controls.', img: 'card-finder-soc2.png' },
  { type: 'Certification', status: 'Current', title: 'ISO 27001:2022', desc: 'Information security management system covering all production services.', img: 'card-finder-iso27001.png' },
  { type: 'Assessment', status: 'Current', title: 'GDPR', desc: 'Data processing activities within the European Economic Area (EEA).', img: 'card-finder-gdpr.png' },
];

export default function FinderSection() {
  return (
    <section
      className="relative w-full flex flex-col items-start overflow-hidden finder-section"
      style={{ padding: '100px 112px', backgroundColor: '#0a0f1a', borderBottom: '1px solid #232b3a' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .finder-section { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 640px) {
          .finder-section { padding: 64px 24px !important; }
          .finder-cards-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={`${IMG}/finder-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,15,26,0.88)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '48px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Find Your Compliance Evidence
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Search and filter across all compliance records by framework, evidence type, status, or scope.
          </p>
        </div>

        <div className="flex flex-col items-start w-full" style={{ padding: '20px', borderRadius: '12px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}>
          <div className="flex flex-wrap items-start w-full" style={{ gap: '10px' }}>
            {filters.map((f, i) => (
              <div
                key={f}
                className="flex items-start shrink-0"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: i === 0 ? '1px solid #34d4ca' : '1px solid #232b3a',
                  backgroundColor: i === 0 ? 'rgba(52,212,202,0.12)' : '#171b22',
                }}
              >
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '13px', color: i === 0 ? '#34d4ca' : '#aab3c4' }}>{f}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start w-full finder-cards-row" style={{ gap: '24px' }}>
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-start flex-1 min-w-0 overflow-hidden"
              style={{ borderRadius: '16px', border: '1px solid #232b3a', backgroundColor: 'rgba(16,21,30,0.8)' }}
            >
              <div className="w-full shrink-0" style={{ height: '160px' }}>
                <img src={`${IMG}/${c.img}`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ gap: '16px', padding: '24px' }}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-start shrink-0" style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #4a8cfb', backgroundColor: 'rgba(74,140,251,0.1)' }}>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '11px', color: '#4a8cfb' }}>{c.type}</p>
                  </div>
                  <div className="flex items-start shrink-0" style={{ padding: '4px 8px', borderRadius: '999px', backgroundColor: '#d1fae5' }}>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '11px', color: '#10b981' }}>{c.status}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full" style={{ gap: '6px' }}>
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '20px', color: '#eef1f6' }}>{c.title}</p>
                  <p className="font-space-grotesk font-normal w-full" style={{ fontSize: '13px', lineHeight: '20px', color: '#aab3c4' }}>{c.desc}</p>
                </div>
                <div className="flex items-center" style={{ gap: '4px' }}>
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '14px', color: '#34d4ca' }}>View Details</p>
                  <img src={`${IMG}/arrow-right.svg`} alt="" style={{ width: '14px', height: '14px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
