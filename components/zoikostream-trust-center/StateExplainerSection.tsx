import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const lifecycleStates = [
  { title: 'Current', chip: 'Valid', chipBg: '#d1fae5', chipColor: '#10b981', desc: 'Approved for stated scope and within review period.' },
  { title: 'Review Required', chip: 'Pending', chipBg: '#fef3c7', chipColor: '#f59e0b', desc: 'Evidence awaits revalidation or has unresolved source conflict.' },
  { title: 'Superseded', chip: 'Replaced', chipBg: '#dbeafe', chipColor: '#4c86ff', desc: 'A newer approved record replaces this one.' },
  { title: 'Expired / Withdrawn', chip: 'Inactive', chipBg: '#fee2e2', chipColor: '#ef4444', desc: 'Validity window ended or evidence removed.' },
];

const accessRules = [
  { icon: `${IMG}/globe.svg`, title: 'Public', desc: 'Inspectable without identity capture or sales gate.' },
  { icon: `${IMG}/user-check.svg`, title: 'Controlled', desc: 'Available through an approved access workflow.' },
  { icon: `${IMG}/lock.svg`, title: 'Restricted', desc: 'Safe metadata only; full access requires authorization.' },
  { icon: `${IMG}/shield.svg`, title: 'Unavailable', desc: 'Not available through this route.' },
];

export default function StateExplainerSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px' }}>
      <img src={`${IMG}/state-explainer-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      <div className="absolute top-[-88px] left-[-140px] pointer-events-none" style={{ width: '420px', height: '420px' }}>
        <img src={`${IMG}/bg-blob-1.svg`} alt="" className="block w-full h-full max-w-none" style={{ margin: '-21.43%', width: '142.86%', height: '142.86%' }} />
      </div>
      <div className="absolute bottom-[-120px] right-[-153px] pointer-events-none" style={{ width: '520px', height: '520px' }}>
        <img src={`${IMG}/bg-blob-2.svg`} alt="" className="block w-full h-full max-w-none" style={{ margin: '-21.15%', width: '142.3%', height: '142.3%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Understanding Evidence &amp; Access States
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Every trust record carries explicit state and access information so you know exactly what applies.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-start w-full" style={{ gap: '32px' }}>
          {/* Record Lifecycle States */}
          <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
            <p className="font-space-grotesk font-bold uppercase whitespace-nowrap" style={{ color: '#707a8c', fontSize: '14px', letterSpacing: '1px' }}>
              RECORD LIFECYCLE STATES
            </p>
            <div className="grid grid-cols-4 w-full" style={{ gap: '20px' }}>
              {lifecycleStates.map((s, i) => (
                <div key={i} className="flex flex-col items-start border" style={{ padding: '24px', gap: '12px', height: '160px', backgroundColor: '#f8fafc', borderColor: '#e2e8f0', borderRadius: '16px' }}>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '18px' }}>{s.title}</p>
                    <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ fontSize: '11px', color: s.chipColor, backgroundColor: s.chipBg, padding: '4px 10px', borderRadius: '999px' }}>{s.chip}</span>
                  </div>
                  <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '14px', lineHeight: '22px' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Access Whitelist Rules */}
          <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
            <p className="font-space-grotesk font-bold uppercase whitespace-nowrap" style={{ color: '#707a8c', fontSize: '14px', letterSpacing: '1px' }}>
              ACCESS WHITELIST RULES
            </p>
            <div className="grid grid-cols-4 w-full" style={{ gap: '20px' }}>
              {accessRules.map((a, i) => (
                <div key={i} className="flex flex-col items-start border" style={{ padding: '24px', gap: '12px', height: '140px', backgroundColor: '#f8fafc', borderColor: '#e2e8f0', borderRadius: '16px' }}>
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <div className="flex items-center justify-center overflow-hidden shrink-0" style={{ width: '18px', height: '18px' }}>
                      <img src={a.icon} alt="" style={{ width: '18px', height: '18px' }} />
                    </div>
                    <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0a0d13', fontSize: '16px' }}>{a.title}</p>
                  </div>
                  <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '13.5px', lineHeight: '20px' }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
