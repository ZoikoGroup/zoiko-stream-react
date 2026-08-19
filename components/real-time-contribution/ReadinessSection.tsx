import React from 'react';

export default function ReadinessSection() {
  const pillars = [
    {
      title: 'Identity & access',
      description: 'Contributor resolves to an approved identity with scoped authorization.',
      icon: '/images/real-time-contribution/ios-signal.svg'
    },
    {
      title: 'Source & media readiness',
      description: 'Device, media permissions, and content meet path requirements.',
      icon: '/images/real-time-contribution/ios-wifi-signal.svg'
    },
    {
      title: 'Network qualification',
      description: 'Connection path meets verified network and transport conditions.',
      icon: '/images/real-time-contribution/ios-battery-full.svg'
    },
    {
      title: 'Privacy & accessibility',
      description: 'Notice, consent, and accessible join flow confirmed.',
      icon: '/images/real-time-contribution/lock.svg'
    }
  ];

  const tableRows = [
    { req: 'SSO Handshake', status: 'Verified', statusColor: 'text-[#00d4aa]', statusBg: 'bg-[#00d4aa]/10', borderColor: 'border-[#00d4aa]', owner: 'Ops Team' },
    { req: 'Camera/Mic Auth', status: 'Verified', statusColor: 'text-[#00d4aa]', statusBg: 'bg-[#00d4aa]/10', borderColor: 'border-[#00d4aa]', owner: 'Contributor' },
    { req: 'Network Jitter', status: 'Needs confirmation', statusColor: 'text-[#ffc837]', statusBg: 'bg-[#ffc837]/10', borderColor: 'border-[#ffc837]', owner: 'Platform' },
    { req: 'Consent Acceptance', status: 'Verified', statusColor: 'text-[#00d4aa]', statusBg: 'bg-[#00d4aa]/10', borderColor: 'border-[#00d4aa]', owner: 'Legal' },
    { req: 'Edge Gateway', status: 'Blocked', statusColor: 'text-[#ff5f57]', statusBg: 'bg-[#ff5f57]/10', borderColor: 'border-[#ff5f57]', owner: 'Gateway Ops', isLast: true },
  ];

  return (
    <section className="bg-white flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Background Graphic */}
      <img 
        alt="" 
        className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full opacity-40 z-0" 
        src="/images/real-time-contribution/readiness-bg.png" 
      />

      {/* Header */}
      <div className="flex flex-col gap-[12px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[32px] md:text-[38px] leading-[1.2]">
          What must be true before a contributor can join?
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Every contribution path requires verified identity, authorized access, confirmed readiness, and clear ownership before connection.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-[48px] items-center lg:items-start relative z-10 w-full max-w-[1216px] mx-auto">
        
        {/* Left Pillars */}
        <div className="flex flex-col gap-[24px] items-start w-full lg:flex-1">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex gap-[16px] items-start w-full">
              <div className="bg-[#00d4aa]/10 border border-[#00d4aa] flex items-center justify-center p-[12px] rounded-[8px] shrink-0">
                <img alt="" src={pillar.icon} className="w-[20px] h-[20px]" />
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full">
                <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[16px] leading-[1.2]">
                  {pillar.title}
                </h3>
                <p className="font-['Space_Grotesk'] font-normal text-[#4f5e74] text-[14px] leading-[20px]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Mockup */}
        <div className="bg-[#10151e]/80 border border-[#232b3a] flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] backdrop-blur-md w-full max-w-[620px] shadow-2xl">
          
          <div className="flex items-center justify-between w-full">
            <h4 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[14px]">
              Contributor Readiness Review
            </h4>
            <span className="font-['Space_Grotesk'] font-normal text-[#00d4aa] text-[11px] tracking-wide">
              SYSTEM: OPERATIONAL
            </span>
          </div>

          {/* Table */}
          <div className="bg-[#0a0f1a] border border-[#232b3a] flex flex-col items-start rounded-[8px] w-full overflow-hidden">
            
            {/* Table Header */}
            <div className="border-b border-[#232b3a] flex items-start p-[12px] w-full bg-[#10151e]/50">
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#707a8c] text-[11px]">Requirement</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#707a8c] text-[11px]">Status</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#707a8c] text-[11px] text-right">Owner</span>
            </div>

            {/* Table Rows */}
            {tableRows.map((row, index) => (
              <div key={index} className={`flex items-center p-[12px] w-full ${!row.isLast ? 'border-b border-[#232b3a]' : ''}`}>
                <span className="flex-1 font-['Space_Grotesk'] font-normal text-[#eef1f6] text-[12px]">
                  {row.req}
                </span>
                <div className="flex-1 flex items-center">
                  <div className={`${row.statusBg} border ${row.borderColor} flex items-center px-[8px] py-[2px] rounded-full`}>
                    <span className={`font-['Space_Grotesk'] font-bold ${row.statusColor} text-[10px]`}>
                      {row.status}
                    </span>
                  </div>
                </div>
                <span className="flex-1 font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[12px] text-right">
                  {row.owner}
                </span>
              </div>
            ))}
          </div>

          <p className="font-['Space_Grotesk'] font-normal text-[#929bac] text-[11px] text-center w-full">
            Illustrative interface — example configuration
          </p>
        </div>

      </div>
    </section>
  );
}
