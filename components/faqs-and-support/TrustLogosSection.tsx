import React from 'react';

const trustLogos = [
  { text: 'SAML_V2', icon: '/images/faqs-and-support/trust-shield-check.svg' },
  { text: 'OIDC_SECURE', icon: '/images/faqs-and-support/trust-key.svg' },
  { text: 'WCAG_2.2', icon: '/images/faqs-and-support/trust-accessibility.svg' },
  { text: 'GDPR_COMPLIANT', icon: '/images/faqs-and-support/trust-flag.svg' },
  { text: 'AES_256_ENC', icon: '/images/faqs-and-support/trust-lock.svg' }
];

export default function TrustLogosSection() {
  return (
    <section className="relative w-full py-[64px] px-6 md:px-[112px] bg-gradient-to-r from-black to-[#060c16] overflow-hidden flex flex-col items-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(52,212,202,0.1)] to-[rgba(74,140,251,0.05)]" />
        
        {/* Blobs */}
        <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px]">
          <img src="/images/faqs-and-support/trust-blob1.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-[-140px] top-[-60px] w-[360px] h-[360px]">
          <img src="/images/faqs-and-support/trust-blob2.svg" alt="" className="w-full h-full" />
        </div>

        {/* Accents (stars/plus) */}
        <div className="absolute left-[-40px] md:left-[10%] top-[420px] w-[14px] h-[14px]">
          <img src="/images/faqs-and-support/trust-accent1.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-[-40px] md:right-[10%] top-[420px] w-[14px] h-[14px]">
          <img src="/images/faqs-and-support/trust-accent2.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute left-[-20px] md:left-[20%] top-[520px] w-[10px] h-[10px]">
          <img src="/images/faqs-and-support/trust-accent3.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-[-20px] md:right-[20%] top-[520px] w-[10px] h-[10px]">
          <img src="/images/faqs-and-support/trust-accent4.svg" alt="" className="w-full h-full" />
        </div>
        
        {/* Line */}
        <div className="absolute right-[-140px] top-[260px] w-[780px] h-[255px] flex items-center justify-center rotate-180 opacity-50 hidden md:flex">
          <div className="w-[820px] h-[2px] bg-[rgba(74,140,251,0.12)]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-[24px] items-center text-center">
        
        <div className="flex flex-col gap-[12px] items-center">
          <p className="font-space-grotesk font-bold text-[16px] leading-[24px] text-[#a3a4a5] uppercase tracking-wide">
            COMPLIANCE & INTEGRITY VERIFIED BY LEADING ORGANIZATIONS
          </p>
          <p className="font-space-grotesk font-bold text-[16px] leading-[24px] text-[#9ca3af] max-w-[760px]">
            Enterprise-ready security, accessibility, and compliance standards built into every workflow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[24px] mt-4 w-full">
          {trustLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-[12px] px-[14px] py-[12px] rounded-full border border-[#1f2937] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] shadow-[0px_10px_12px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-1"
            >
              <div className="w-[20px] h-[20px] relative flex-shrink-0">
                <img src={logo.icon} alt={logo.text} className="w-full h-full object-contain" />
              </div>
              <p className="font-space-grotesk font-bold text-[18px] text-[#e5e7eb] whitespace-nowrap">
                {logo.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
