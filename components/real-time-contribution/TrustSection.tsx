import React from 'react';

export default function TrustSection() {
  const pillars = [
    {
      title: 'Security',
      description: 'Identity, access, scope, expiry, and revocation boundaries.',
      icon: '/images/real-time-contribution/trust-lock.svg'
    },
    {
      title: 'Privacy',
      description: 'No public capture permissions. Explicit contributor notice and data minimization.',
      icon: '/images/real-time-contribution/trust-eye-off.svg'
    },
    {
      title: 'Accessibility',
      description: 'Contributor join, readiness, communication, and recovery meet WCAG 2.2 AA.',
      icon: '/images/real-time-contribution/trust-users.svg'
    },
    {
      title: 'Evidence',
      description: 'Every public claim resolves to maintained authority with owner and review date.',
      icon: '/images/real-time-contribution/trust-shield-alert.svg'
    }
  ];

  return (
    <section className="bg-[#0a0f1a] border-b border-[#232b3a] flex flex-col gap-[48px] items-start px-6 md:px-[112px] py-[100px] relative w-full overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[1216px] mx-auto">
        <h2 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[32px] md:text-[38px] leading-[1.2]">
          Trust, accessibility, and privacy by design
        </h2>
        <p className="font-['Space_Grotesk'] font-normal text-[#aab3c4] text-[16px] md:text-[18px] max-w-[800px] leading-[1.5]">
          Contribution confidence comes from explicit authority, readiness, observable state, and recovery — not from claims.
        </p>
      </div>

      {/* Trust Pillars Row */}
      <div className="flex flex-col md:flex-row gap-[24px] relative z-10 w-full max-w-[1216px] mx-auto">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-[#10151e]/80 border border-[#232b3a] flex flex-[1_0_0] flex-col gap-[12px] items-start p-[20px] rounded-[12px] hover:bg-[#232b3a]/50 transition-colors">
            
            {/* Icon and Title */}
            <div className="flex gap-[10px] items-center">
              <div className="flex items-center justify-center w-[18px] h-[18px]">
                <img alt="" src={pillar.icon} className="w-full h-full opacity-80" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[#eef1f6] text-[15px] leading-[normal]">
                {pillar.title}
              </h3>
            </div>
            
            {/* Description */}
            <p className="font-['Space_Grotesk'] font-normal leading-[18px] text-[#aab3c4] text-[13px]">
              {pillar.description}
            </p>
            
          </div>
        ))}
      </div>

    </section>
  );
}
