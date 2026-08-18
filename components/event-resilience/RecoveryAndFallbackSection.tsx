import React from 'react';

const cards = [
  {
    icon: '/images/event-resilience/icon-shield.svg',
    title: 'Supported actions only',
    description: <>Recovery actions are drawn from a controlled<br/>capability registry. No unsupported or untested<br/>fallback is described as available.</>
  },
  {
    icon: '/images/event-resilience/icon-users.svg',
    title: 'Decision rights are explicit',
    description: <>Who may authorize and execute each recovery<br/>action is defined in the approved recovery plan,<br/>not assumed.</>
  },
  {
    icon: '/images/event-resilience/icon-activity.svg',
    title: 'Impact is always shown',
    description: <>Every recovery path shows its expected<br/>audience, accessibility, quality, recording, and<br/>operational impact.</>
  }
];

export default function RecoveryAndFallbackSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden bg-white"
      style={{ paddingTop: '100px', paddingBottom: '100px', gap: '56px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .recovery-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <img 
        src="/images/event-resilience/recovery-bg.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-start w-full recovery-section-padding" style={{ gap: '16px' }}>
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#0d1117', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Recovery and fallback
        </h2>
        <p className="font-space-grotesk font-normal leading-[28.8px]" style={{ color: '#5a6478', fontSize: '18px', maxWidth: '800px' }}>
          Recovery is a controlled set of supported actions — not a magic failover promise. Every<br/>recovery path has a trigger, prerequisites, verification state, and expected impact.
        </p>
      </div>

      <div className="relative z-10 w-full recovery-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: '24px' }}>
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-start border w-full bg-white"
              style={{ 
                borderColor: '#e2e8f0', 
                padding: '28px', 
                gap: '16px',
                borderRadius: '16px'
              }}
            >
              <div 
                className="flex flex-col items-center justify-center shrink-0 border"
                style={{ 
                  backgroundColor: '#f0f6ff',
                  borderColor: '#d6e8ff',
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px'
                }}
              >
                <img src={card.icon} alt="" style={{ width: '20px', height: '20px' }} />
              </div>

              <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
                <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#0d1117', fontSize: '18px' }}>
                  {card.title}
                </p>
                <p className="font-space-grotesk font-normal leading-[22.75px]" style={{ color: '#5a6478', fontSize: '14px' }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full recovery-section-padding">
        <div 
          className="flex flex-col items-start border w-full bg-white overflow-hidden"
          style={{ 
            borderColor: '#e2e8f0', 
            padding: '24px', 
            gap: '20px',
            borderRadius: '16px',
            boxShadow: '0px 8px 12px rgba(0,0,0,0.05)'
          }}
        >
          <p className="font-space-grotesk font-bold leading-[normal]" style={{ color: '#0d1117', fontSize: '16px' }}>
            Recovery Registry & Active States
          </p>

          <div className="w-full overflow-x-auto pb-4">
            <div className="flex flex-col items-start w-full min-w-[1100px]" style={{ gap: '8px' }}>
              {/* Table Header */}
              <div className="flex items-start justify-between w-full border-b" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0', padding: '12px' }}>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '160px', minWidth: '160px' }}>TRIGGER</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '180px', minWidth: '180px' }}>ACTION</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '130px', minWidth: '130px' }}>AUTHORITY</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '180px', minWidth: '180px' }}>PREREQUISITES</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '180px', minWidth: '180px' }}>VERIFICATION</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '140px', minWidth: '140px' }}>IMPACT</p>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#64748b', fontSize: '11px', width: '130px', minWidth: '130px' }}>STATE</p>
              </div>

              {/* Table Rows */}
              <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#f1f5f9', padding: '12px', borderRadius: '8px' }}>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#0d1117', fontSize: '13px', width: '160px', minWidth: '160px' }}>Ingest Signal Loss</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '180px', minWidth: '180px' }}>Fallback to Backup SRT</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '130px', minWidth: '130px' }}>Lead Operator</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>Secondary stream active</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>Automated check success</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '140px', minWidth: '140px' }}>Minimal quality drop</p>
                <div className="flex items-center justify-center border shrink-0" style={{ width: '130px', minWidth: '130px', backgroundColor: '#d1fae5', borderColor: '#a7f3d0', borderRadius: '4px', padding: '4px 8px' }}>
                  <p className="font-space-grotesk font-bold" style={{ color: '#065f46', fontSize: '11px' }}>Available &amp; Verified</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#f1f5f9', padding: '12px', borderRadius: '8px' }}>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#0d1117', fontSize: '13px', width: '160px', minWidth: '160px' }}>Caption Pipeline Drop</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '180px', minWidth: '180px' }}>Restart AI Transcoder</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '130px', minWidth: '130px' }}>AI Pipeline Op</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>API endpoint healthy</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>Handshake check pending</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '140px', minWidth: '140px' }}>Delay in live captions</p>
                <div className="flex items-center justify-center border shrink-0" style={{ width: '130px', minWidth: '130px', backgroundColor: '#fef3c7', borderColor: '#fde68a', borderRadius: '4px', padding: '4px 8px' }}>
                  <p className="font-space-grotesk font-bold" style={{ color: '#92400e', fontSize: '11px' }}>Needs Confirmation</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full bg-white border" style={{ borderColor: '#f1f5f9', padding: '12px', borderRadius: '8px' }}>
                <p className="font-space-grotesk font-bold shrink-0" style={{ color: '#0d1117', fontSize: '13px', width: '160px', minWidth: '160px' }}>Primary ISP Outage</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '180px', minWidth: '180px' }}>Dual-WAN LTE Router</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '130px', minWidth: '130px' }}>Net Engineer</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>LTE signal strong</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#64748b', fontSize: '13px', width: '180px', minWidth: '180px' }}>Tower authentication failed</p>
                <p className="font-space-grotesk font-normal shrink-0" style={{ color: '#475569', fontSize: '13px', width: '140px', minWidth: '140px' }}>SD quality lock</p>
                <div className="flex items-center justify-center border shrink-0" style={{ width: '130px', minWidth: '130px', backgroundColor: '#fee2e2', borderColor: '#fca5a5', borderRadius: '4px', padding: '4px 8px' }}>
                  <p className="font-space-grotesk font-bold" style={{ color: '#991b1b', fontSize: '11px' }}>Unavailable</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
