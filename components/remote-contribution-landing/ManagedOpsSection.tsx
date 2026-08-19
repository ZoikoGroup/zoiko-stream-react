import React from 'react';

export default function ManagedOpsSection() {
  const remoteCapabilities = [
    'Self-serve preflight & test forms',
    'SSO-authenticated contributor portals',
    'Redundant WAN & cellular bonding failover'
  ];

  const managedSLA = [
    '1-on-1 technical rehearsals with VIPs',
    'Dedicated operator assigned to event hot-standby',
    'Full-event capture, translation, and edit master delivery'
  ];

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .managed-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
        @media (max-width: 1023px) {
          .managed-comparison {
            flex-direction: column !important;
            height: auto !important;
          }
        }
      `}} />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/remote-contribution-landing/managed-ops-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
      </div>

      <div className="managed-padding relative z-10 flex flex-col items-start w-full" style={{ gap: '56px', maxWidth: '1440px' }}>

        {/* Header */}
        <div className="flex flex-col items-start" style={{ gap: '16px', maxWidth: '900px' }}>
          <h2 className="font-space-grotesk font-bold w-full" style={{ color: '#0f1b2d', fontSize: '38px', lineHeight: '60.8px', letterSpacing: '-0.38px' }}>
            When managed operations handles contribution
          </h2>
          <p className="font-space-grotesk font-normal" style={{ color: '#4f5e74', fontSize: '18px', lineHeight: '28.8px' }}>
            Remote contribution is a capability. Managed live event streaming is a service responsibility. They cross-link without collapsing into each other.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div
          className="managed-comparison flex items-start w-full"
          style={{ gap: '32px', height: '381px' }}
        >
          {/* Left Card: Remote Contribution */}
          <div
            className="flex flex-col items-start flex-1 min-w-[0px] bg-white border"
            style={{
              padding: '32px',
              gap: '24px',
              borderColor: '#e1e6eb',
              borderRadius: '20px',
              alignSelf: 'stretch'
            }}
          >
            {/* Card Header */}
            <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
              <p className="font-space-grotesk font-bold uppercase" style={{ color: '#33d9c7', fontSize: '14px', letterSpacing: '1px' }}>
                PRODUCT CAPABILITY
              </p>
              <p className="font-space-grotesk font-bold" style={{ color: '#0f1b2d', fontSize: '24px', lineHeight: 'normal' }}>
                Remote Contribution
              </p>
            </div>

            {/* Description */}
            <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '16px', lineHeight: '26px' }}>
              The software suite that enables preparation, verification, connection, standby, program, and recovery workflows. This is what your internal team or partners configure and operate on ZoikoStream.
            </p>

            {/* Capabilities list */}
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '14px' }}>
                Included Capabilities:
              </p>
              {remoteCapabilities.map((item, i) => (
                <div key={i} className="flex items-center w-full" style={{ gap: '8px' }}>
                  <img
                    src="/images/remote-contribution-landing/managed-ops-check-green.svg"
                    alt=""
                    style={{ width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <p className="font-space-grotesk font-normal whitespace-nowrap" style={{ color: '#4f5e74', fontSize: '14px' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Managed Live Event Streaming */}
          <div
            className="flex flex-col items-start flex-1 min-w-[0px] bg-white border"
            style={{
              padding: '32px',
              gap: '24px',
              borderColor: '#e1e6eb',
              borderRadius: '20px',
              alignSelf: 'stretch'
            }}
          >
            {/* Card Header */}
            <div className="flex flex-col items-start w-full" style={{ gap: '8px' }}>
              <p className="font-space-grotesk font-bold uppercase" style={{ color: '#4c86ff', fontSize: '14px', letterSpacing: '1px' }}>
                SERVICE ENGAGEMENT
              </p>
              <p className="font-space-grotesk font-bold" style={{ color: '#0f1b2d', fontSize: '24px', lineHeight: 'normal' }}>
                Managed Live Event Streaming
              </p>
            </div>

            {/* Description */}
            <p className="font-space-grotesk font-normal w-full" style={{ color: '#4f5e74', fontSize: '16px', lineHeight: '26px' }}>
              A hands-on, turn-key streaming service. ZoikoStream certified engineers own the entire event SLA, handling onboarding, technical rehearsals, live switching, active monitoring, and immediate recovery execution.
            </p>

            {/* SLA list */}
            <div className="flex flex-col items-start w-full" style={{ gap: '12px' }}>
              <p className="font-space-grotesk font-bold whitespace-nowrap" style={{ color: '#0f1b2d', fontSize: '14px' }}>
                Managed Services SLA:
              </p>
              {managedSLA.map((item, i) => (
                <div key={i} className="flex items-center w-full" style={{ gap: '8px' }}>
                  <img
                    src="/images/remote-contribution-landing/managed-ops-check-blue.svg"
                    alt=""
                    style={{ width: '16px', height: '16px', flexShrink: 0 }}
                  />
                  <p className="font-space-grotesk font-normal whitespace-nowrap" style={{ color: '#4f5e74', fontSize: '14px' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
