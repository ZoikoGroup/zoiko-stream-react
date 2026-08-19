import React from 'react';

const logos = [
  {
    icon: '/images/planning-and-briefing/shield-check.svg',
    label: 'SAML_V2'
  },
  {
    icon: '/images/planning-and-briefing/key.svg',
    label: 'OIDC_SECURE'
  },
  {
    icon: '/images/planning-and-briefing/accessibility.svg',
    label: 'WCAG_2.2'
  },
  {
    icon: '/images/planning-and-briefing/flag-triangle-right.svg',
    label: 'GDPR_COMPLIANT'
  },
  {
    icon: '/images/planning-and-briefing/lock.svg',
    label: 'AES_256_ENC'
  }
];

export default function TrustLogosSection() {
  return (
    <section className="relative w-full min-h-[350px] py-[100px] px-[112px] bg-gradient-to-r from-black to-[#060c16] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-clip">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(52,212,202,0.1)] to-[rgba(74,140,251,0.05)]" />
        <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px]">
          <img src="/images/planning-and-briefing/trust-blob-1.svg" alt="" className="w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-140px] top-[-60px] w-[360px] h-[360px]">
          <img src="/images/planning-and-briefing/trust-blob-2.svg" alt="" className="w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-140px] top-[260px] w-[780px] h-[255px] flex items-center justify-center">
          <div className="rotate-18 flex-none">
            <div className="bg-[rgba(74,140,251,0.12)] h-[2px] w-[820px]" />
          </div>
        </div>
        <div className="absolute left-[-40px] top-[420px] w-[14px] h-[14px]">
          <img src="/images/planning-and-briefing/accent-1.svg" alt="" className="w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-40px] top-[420px] w-[14px] h-[14px]">
          <img src="/images/planning-and-briefing/accent-2.svg" alt="" className="w-full h-full max-w-none" />
        </div>
        <div className="absolute left-[-20px] top-[520px] w-[10px] h-[10px]">
          <img src="/images/planning-and-briefing/accent-3.svg" alt="" className="w-full h-full max-w-none" />
        </div>
        <div className="absolute right-[-20px] top-[520px] w-[10px] h-[10px]">
          <img src="/images/planning-and-briefing/accent-4.svg" alt="" className="w-full h-full max-w-none" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-[24px] px-[112px]">
        <p className="font-space-grotesk font-bold text-[#707a8c] text-[14px] uppercase tracking-[1px] whitespace-nowrap text-center leading-[normal]">
          COMPLIANCE & INTEGRITY VERIFIED BY LEADING ORGANIZATIONS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[24px] w-full">
          {logos.map((logo, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-[12px] px-[14px] py-[12px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] border border-[#1f2937] rounded-full drop-shadow-[0px_10px_12px_rgba(0,0,0,0.4)]"
            >
              <div className="w-[20px] h-[20px] overflow-hidden flex-shrink-0 relative">
                <img src={logo.icon} alt="" className="absolute inset-0 w-full h-full max-w-none" />
              </div>
              <span className="font-space-grotesk font-bold text-[#e5e7eb] text-[18px] whitespace-nowrap leading-[normal]">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
