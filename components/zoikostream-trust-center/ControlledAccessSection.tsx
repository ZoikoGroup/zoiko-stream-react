import React from 'react';

const IMG = '/images/zoikostream-trust-center';

const steps = [
  { num: '01', title: 'Review Requirements', desc: 'See evidence metadata, scope, state, and access conditions before any form.' },
  { num: '02', title: 'Submit Access Request', desc: 'Provide minimum required identity and context. Marketing consent is separate and never preselected.' },
  { num: '03', title: 'Receive Access', desc: 'Authorized access via time-limited secure download. Denied or unavailable states are clearly communicated.' },
];

const controlCards = [
  { badge: 'ATTESTATION', title: 'SOC 2 Type II Report', desc: 'Request requires NDA and organization verification.' },
  { badge: 'ASSESSMENT', title: 'Infrastructure Penetration Test', desc: 'Available to qualified enterprise evaluators.' },
];

export default function ControlledAccessSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '100px 112px' }}>
      <img src={`${IMG}/controlled-access-bg.png`} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" />
      <div className="absolute top-[-88px] left-[-140px] pointer-events-none" style={{ width: '420px', height: '420px' }}>
        <img src={`${IMG}/bg-blob-1.svg`} alt="" className="block max-w-none" style={{ margin: '-21.43%', width: '142.86%', height: '142.86%' }} />
      </div>
      <div className="absolute bottom-[-72px] right-[-153px] pointer-events-none" style={{ width: '520px', height: '520px' }}>
        <img src={`${IMG}/bg-blob-2.svg`} alt="" className="block max-w-none" style={{ margin: '-21.15%', width: '142.3%', height: '142.3%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full" style={{ gap: '56px' }}>
        <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0a0d13', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>Accessing Controlled Trust Evidence</h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>Some evidence requires verification before access. Requirements are disclosed before any identity collection.</p>
        </div>

        {/* Process Flow */}
        <div className="flex items-center w-full" style={{ gap: '40px' }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '16px' }}>
                <div className="flex flex-col items-center justify-center shrink-0" style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: '#0a0d13' }}>
                  <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ffffff', fontSize: '16px' }}>{s.num}</span>
                </div>
                <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
                  <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0a0d13', fontSize: '18px' }}>{s.title}</p>
                  <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '14px', lineHeight: '20px' }}>{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center shrink-0 overflow-hidden" style={{ width: '24px', height: '24px' }}>
                  <img src={`${IMG}/arrow-right.svg`} alt="" style={{ width: '24px', height: '24px' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Control Cards */}
        <div className="flex items-start w-full" style={{ gap: '24px' }}>
          {controlCards.map((c, i) => (
            <div key={i} className="flex items-center flex-1 min-w-0 border" style={{ padding: '24px', gap: '24px', backgroundColor: '#0a0f1a', borderColor: '#232b3a', borderRadius: '16px' }}>
              <div className="flex flex-col items-start flex-1 min-w-0" style={{ gap: '12px' }}>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <span style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(76,134,255,0.08)', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, fontSize: '11px', color: '#4c86ff' }}>{c.badge}</span>
                  <span style={{ padding: '4px 10px', borderRadius: '99px', backgroundColor: 'rgba(0,212,170,0.08)', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: '11px', color: '#00d4aa' }}>Current</span>
                  <span style={{ padding: '4px 10px', borderRadius: '99px', backgroundColor: 'rgba(245,158,11,0.08)', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, fontSize: '11px', color: '#f59e0b' }}>Controlled</span>
                </div>
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '20px' }}>{c.title}</p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '20px' }}>{c.desc}</p>
              </div>
              <button className="font-space-grotesk font-bold whitespace-nowrap shrink-0" style={{ padding: '14px 26px', borderRadius: '10px', background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)', color: '#04141a', fontSize: '15px' }}>
                Request Access
              </button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="flex items-center w-full" style={{ padding: '16px', gap: '8px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
          <img src={`${IMG}/shield-blue.svg`} alt="" style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          <p className="font-space-grotesk font-normal flex-1" style={{ color: '#4f5e74', fontSize: '13px' }}>
            Evidence access requests are operational — not marketing opt-ins. Your access interest is never used for lead scoring or commercial targeting.
          </p>
        </div>
      </div>
    </section>
  );
}
