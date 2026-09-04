import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const row1 = [
  { img: `${IMG}/card-security.png`, title: 'Security', desc: 'How does ZoikoStream approach security?', action: 'Open Security →' },
  { img: `${IMG}/card-data-protection.png`, title: 'Data Protection', desc: 'How is data handled and governed?', action: 'Open Data Protection →' },
  { img: `${IMG}/card-service-reliability.png`, title: 'Service Reliability', desc: 'What reliability evidence exists?', action: 'Open Service Reliability →' },
];
const row2 = [
  { img: `${IMG}/card-subprocessors.png`, title: 'Subprocessors', desc: 'Which approved third parties are relevant?', action: 'Open Subprocessors →' },
  { img: `${IMG}/card-advisories.png`, title: 'Security Advisories', desc: 'Are there approved security notices?', action: 'Open Advisories →' },
  { img: `${IMG}/card-disclosure.png`, title: 'Responsible Disclosure', desc: 'How do I report a vulnerability?', action: 'Report a Vulnerability →' },
];

export default function SpecialistMapSection() {
  const renderCard = (card: typeof row1[0]) => (
    <div key={card.title} className="flex flex-col items-start flex-1 min-w-0 overflow-hidden" style={{ backgroundColor: '#0a0f1a', borderRadius: '16px' }}>
      <div className="relative w-full" style={{ height: '140px' }}>
        <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      </div>
      <div className="flex flex-col items-start w-full" style={{ padding: '20px', gap: '8px' }}>
        <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>{card.title}</p>
        <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '13px', height: '40px' }}>{card.desc}</p>
        <div className="flex items-center" style={{ paddingTop: '8px' }}>
          <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#4c86ff', fontSize: '13.5px' }}>{card.action}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px' }}>
      <img src={`${IMG}/specialist-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      <div className="absolute top-[-66px] left-[-138px] pointer-events-none" style={{ width: '420px', height: '420px' }}>
        <img src={`${IMG}/bg-blob-1.svg`} alt="" className="block max-w-none" style={{ margin: '-21.43%', width: '142.86%', height: '142.86%' }} />
      </div>
      <div className="absolute bottom-[-160px] right-[-148px] pointer-events-none" style={{ width: '520px', height: '520px' }}>
        <img src={`${IMG}/bg-blob-2.svg`} alt="" className="block max-w-none" style={{ margin: '-21.15%', width: '142.3%', height: '142.3%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '48px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Seven Specialist Authorities</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>Each trust domain has a dedicated authority. Reach the right one directly.</p>
        </div>
        <div className="flex flex-col items-start w-full" style={{ gap: '24px' }}>
          <div className="flex items-start w-full" style={{ gap: '20px' }}>{row1.map(renderCard)}</div>
          <div className="flex items-start w-full" style={{ gap: '20px' }}>{row2.map(renderCard)}</div>
        </div>
      </div>
    </section>
  );
}
