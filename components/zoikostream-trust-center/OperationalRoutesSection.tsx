import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const routes = [
  { img: `${IMG}/card-status.png`, title: 'System Status', desc: 'Check current service health, active incidents, planned maintenance, and operational history.', action: 'View System Status →' },
  { img: `${IMG}/card-vuln-report.png`, title: 'Responsible Disclosure', desc: 'Report a potential security vulnerability through our approved safe reporting process.', action: 'Report a Vulnerability →' },
  { img: `${IMG}/card-a11y-help.png`, title: 'Accessibility Help', desc: 'Get assistance with accessibility barriers or request accommodations.', action: 'Get Accessibility Help →' },
];

export default function OperationalRoutesSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px' }}>
      <img src={`${IMG}/routes-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      <div className="absolute top-[-88px] left-[-140px] pointer-events-none" style={{ width: '420px', height: '420px' }}>
        <img src={`${IMG}/bg-blob-1.svg`} alt="" className="block max-w-none" style={{ margin: '-21.43%', width: '142.86%', height: '142.86%' }} />
      </div>
      <div className="absolute bottom-[-199px] right-[-153px] pointer-events-none" style={{ width: '520px', height: '520px' }}>
        <img src={`${IMG}/bg-blob-2.svg`} alt="" className="block max-w-none" style={{ margin: '-21.15%', width: '142.3%', height: '142.3%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Critical Routes — Always Accessible</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>These safety and operational paths are never gated behind sales, authentication, or commercial flows.</p>
        </div>

        <div className="flex items-start w-full" style={{ gap: '24px' }}>
          {routes.map((r, i) => (
            <div key={i} className="flex flex-col items-start flex-1 min-w-0 overflow-hidden border" style={{ backgroundColor: '#0a0f1a', borderColor: '#232b3a', borderRadius: '16px' }}>
              <div className="relative w-full shrink-0" style={{ height: '160px' }}>
                <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
              </div>
              <div className="flex flex-col items-start w-full" style={{ padding: '24px', gap: '16px' }}>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '18px' }}>{r.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13.5px', lineHeight: '20px' }}>{r.desc}</p>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#4c86ff', fontSize: '14px' }}>{r.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
