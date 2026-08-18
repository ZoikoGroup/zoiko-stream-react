import React from 'react';

export default function PreflightVerificationSection() {
  const roster = [
    { name: 'Sarah Jenkins', role: 'Keynote Speaker (London)', status: 'Passed', statusColor: '#10b981', statusBg: 'rgba(16,185,129,0.1)' },
    { name: 'Marcus Vance', role: 'CFO presentation (NY Office)', status: 'Failed', statusColor: '#ef4444', statusBg: 'rgba(239,68,68,0.1)' },
    { name: 'Dr. Aris Thorne', role: 'Panelist (Zurich)', status: 'Changed since test', statusColor: '#f59e0b', statusBg: 'rgba(245,158,11,0.1)' },
    { name: 'Elena Rostova', role: 'Product Demo (Tokyo)', status: 'Not run', statusColor: '#aab3c4', statusBg: 'rgba(30,41,59,0.2)' }
  ];

  const checks = [
    { name: 'Access permissions', status: 'Pass', color: '#10b981' },
    { name: 'Hardware permissions', status: 'Pass', color: '#10b981' },
    { name: 'Audio/Video Input sync', status: 'Pass', color: '#10b981' },
    { name: 'Signal presence', status: 'Pass', color: '#10b981' },
    { name: 'Network connection', status: 'Degraded (Jitter detected)', color: '#f59e0b' },
    { name: 'Production handoff', status: 'Not tested', color: '#aab3c4' }
  ];

  const cards = [
    { title: 'Configuration fingerprint', desc: 'Human-readable summary of device, app, input, and method versions tested.' },
    { title: 'Change watcher', desc: 'Conditions whose change invalidates part or all of verification.' },
    { title: 'Open advisories', desc: 'Non-blocking issues that remain visible through the event lifecycle.' }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .preflight-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .preflight-desk {
            flex-direction: column !important;
          }
          .preflight-cards {
            flex-direction: column !important;
          }
          .preflight-pane {
            height: auto !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/remote-contribution-landing/preflight-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,13,19,0.64)' }} />
      </div>

      <div className="preflight-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>
        
        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Preflight and verification
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '18px', lineHeight: '28.8px' }}>
            Evidence-backed confirmation that defined checks passed at a recorded time. It is not a blanket quality guarantee — it is scoped to the conditions and configuration tested.
          </p>
        </div>

        {/* Mockup Verification Desk */}
        <div className="preflight-desk flex items-start w-full" style={{ gap: '24px' }}>
          
          {/* Left Pane: Roster */}
          <div 
            className="flex flex-col items-start flex-1 min-w-[0px] border"
            style={{ 
              padding: '24px', 
              gap: '16px', 
              backgroundColor: 'rgba(18,22,37,0.8)', 
              borderColor: '#1e293b', 
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>
              Verified Event Sources
            </h3>
            <div className="flex flex-col items-start w-full" style={{ gap: '10px' }}>
              {roster.map((person, i) => (
                <div key={i} className="flex items-center justify-between w-full" style={{ padding: '12px', backgroundColor: 'rgba(30,41,59,0.2)', borderRadius: '8px' }}>
                  <div className="flex flex-col items-start" style={{ gap: '2px' }}>
                    <p className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '14px' }}>{person.name}</p>
                    <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '12px' }}>{person.role}</p>
                  </div>
                  <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: person.statusBg }}>
                    <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: person.statusColor, fontSize: '12px' }}>
                      {person.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Pane: Detail */}
          <div 
            className="preflight-pane flex flex-col items-start flex-1 min-w-[0px] border"
            style={{ 
              padding: '24px', 
              gap: '20px', 
              height: '350px',
              backgroundColor: 'rgba(18,22,37,0.8)', 
              borderColor: '#1e293b', 
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start" style={{ gap: '4px' }}>
                <p className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '16px' }}>Sarah Jenkins — Details</p>
                <p className="font-space-grotesk font-normal" style={{ color: '#33d9c7', fontSize: '12px' }}>Verified at 14:20 UTC</p>
              </div>
              <div className="flex items-start" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(59,130,246,0.1)' }}>
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#4c86ff', fontSize: '12px' }}>Verified Config</span>
              </div>
            </div>

            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              {checks.map((check, i) => (
                <div key={i} className="flex items-center justify-between w-full border-b" style={{ paddingBottom: '8px', borderColor: i === checks.length - 1 ? 'transparent' : '#1e293b' }}>
                  <p className="font-space-grotesk font-normal" style={{ color: '#eef1f6', fontSize: '14px' }}>{check.name}</p>
                  <p className="font-space-grotesk font-bold" style={{ color: check.color, fontSize: '14px' }}>{check.status}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Verification Cards Row */}
        <div className="preflight-cards flex items-start w-full" style={{ gap: '24px' }}>
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="flex flex-col items-start flex-1 min-w-[0px] border"
              style={{
                padding: '24px',
                gap: '12px',
                backgroundColor: '#121625',
                borderColor: '#1e293b',
                borderRadius: '12px'
              }}
            >
              <h4 className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '18px' }}>
                {card.title}
              </h4>
              <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '14px', lineHeight: '22px' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
