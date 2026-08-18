import React from 'react';

export default function RecoveryFallbackSection() {
  const scenarios = [
    {
      title: 'Connection lost',
      desc: 'Show disconnected elapsed time, trigger auto-reconnect, reference last verified hardware config, and auto-queue fallback slate.'
    },
    {
      title: 'Signal degraded',
      desc: 'Assess key metrics (jitter, packet loss, codec dropouts) to isolate affected conditions and apply progressive resolution limiting.'
    },
    {
      title: 'Primary method unavailable',
      desc: 'Instantly switch to approved alternative route (e.g. browser WebRTC to SRT encoder) without resetting local presenter state.'
    },
    {
      title: 'Contributor cannot rejoin',
      desc: 'Deploy custom offline status slates or gracefully shift schedule to alternative presenter while routing support ticket.'
    }
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#0a0d13', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .recovery-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .recovery-split {
            flex-direction: column !important;
          }
          .recovery-right {
            width: 100% !important;
          }
        }
      `}} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/recovery-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ opacity: 0.35 }}
        />
      </div>

      <div className="recovery-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start w-full" style={{ gap: '16px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#eef1f6', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            Recovery and fallback
          </h2>
          <p className="font-space-grotesk font-normal w-full" style={{ color: '#bac6de', fontSize: '18px', lineHeight: '28.8px' }}>
            When a source fails live, teams lose time deciding what to do. ZoikoStream predefines allowed recovery and fallback paths so the decision is already made.
          </p>
        </div>

        {/* Split Layout */}
        <div className="recovery-split flex items-start w-full" style={{ gap: '48px' }}>

          {/* Left Column: Scenarios */}
          <div className="flex flex-col items-start flex-1 min-w-[0px]" style={{ gap: '16px' }}>
            {scenarios.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start w-full border"
                style={{
                  padding: '16px',
                  gap: '8px',
                  backgroundColor: 'rgba(18,22,37,0.8)',
                  borderColor: '#1e293b',
                  borderRadius: '12px'
                }}
              >
                <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#eef1f6', fontSize: '16px' }}>
                  {s.title}
                </p>
                <p className="font-space-grotesk font-normal w-full" style={{ color: '#aab3c4', fontSize: '13px' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: UI Panel */}
          <div
            className="recovery-right flex flex-col items-start shrink-0 border"
            style={{
              width: '520px',
              padding: '32px',
              gap: '24px',
              backgroundColor: 'rgba(18,22,37,0.8)',
              borderColor: '#1e293b',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start" style={{ gap: '4px' }}>
                <p className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '18px' }}>
                  Marcus Vance (NY Office)
                </p>
                <p className="font-space-grotesk font-normal" style={{ color: '#ef4444', fontSize: '13px' }}>
                  Active Failover Incident
                </p>
              </div>
              <div className="flex items-start shrink-0" style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(239,68,68,0.1)' }}>
                <span className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#ef4444', fontSize: '12px' }}>Disconnected</span>
              </div>
            </div>

            {/* Diagnostic Metrics */}
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <div className="flex items-start justify-between w-full">
                <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '14px' }}>Last known state</p>
                <p className="font-space-grotesk font-bold" style={{ color: '#10b981', fontSize: '14px' }}>Passed (14:31:02 UTC)</p>
              </div>
              <div className="flex items-start justify-between w-full">
                <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '14px' }}>Elapsed downtime</p>
                <p className="font-space-grotesk font-bold" style={{ color: '#ef4444', fontSize: '14px' }}>00:01:16</p>
              </div>
              <div className="flex items-start justify-between w-full">
                <p className="font-space-grotesk font-normal" style={{ color: '#aab3c4', fontSize: '14px' }}>Decision authority</p>
                <p className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '14px' }}>Production Lead</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full" style={{ height: '1px', backgroundColor: '#1e293b' }} />

            {/* Recovery Options */}
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <p className="font-space-grotesk font-bold uppercase" style={{ color: '#aab3c4', fontSize: '12px', letterSpacing: '0.5px' }}>
                Approved Recovery Procedures
              </p>
              {/* Primary Button */}
              <button
                className="flex items-center justify-center w-full"
                style={{
                  padding: '14px',
                  borderRadius: '8px',
                  background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)'
                }}
              >
                <span className="font-space-grotesk font-bold" style={{ color: '#0a0d13', fontSize: '14px' }}>
                  Retry connection &amp; Bypass Firewall
                </span>
              </button>
              {/* Secondary Button */}
              <button
                className="flex items-center justify-center w-full border"
                style={{
                  padding: '14px',
                  borderRadius: '8px',
                  borderColor: '#34d4ca',
                  borderWidth: '1.5px',
                  backgroundColor: 'transparent'
                }}
              >
                <span className="font-space-grotesk font-bold" style={{ color: '#eef1f6', fontSize: '14px' }}>
                  Activate backup live video feed
                </span>
              </button>
              {/* Tertiary Button */}
              <button
                className="flex items-center justify-center w-full"
                style={{
                  padding: '14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(30,41,59,0.33)'
                }}
              >
                <span className="font-space-grotesk font-bold" style={{ color: '#aab3c4', fontSize: '14px' }}>
                  Continue with backup slate slide
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full" style={{ height: '1px', backgroundColor: '#1e293b' }} />

            {/* Support Callout */}
            <div className="flex items-center w-full" style={{ gap: '12px' }}>
              <img
                src="/images/remote-contribution-landing/pulse-circle.svg"
                alt=""
                style={{ width: '12px', height: '12px', flexShrink: 0 }}
              />
              <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#33d9c7', fontSize: '13px' }}>
                Dedicated engineer is currently on standby
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
