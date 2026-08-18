import React from 'react';

const logos = [
  { icon: 'trust-icon-shield.svg', label: 'SAML_V2' },
  { icon: 'trust-icon-key.svg', label: 'OIDC_SECURE' },
  { icon: 'trust-icon-accessibility.svg', label: 'WCAG_2.2' },
  { icon: 'trust-icon-flag.svg', label: 'GDPR_COMPLIANT' },
  { icon: 'trust-icon-lock.svg', label: 'AES_256_ENC' }
];

export default function TrustLogosSection() {
  return (
    <section 
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-0 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to right, #000000, #060c16)', 
        paddingTop: '100px', 
        paddingBottom: '100px',
        minHeight: '250px'
      }}
    >
      {/* Background Images / Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(52,212,202,0.1), rgba(74,140,251,0.05))' }} />
        
        {/* Blobs */}
        <div className="absolute top-[-80px] left-[-120px]" style={{ width: '320px', height: '320px' }}>
          <img src="/images/event-resilience/trust-blob-1.svg" alt="" className="absolute inset-0 w-full h-full max-w-none opacity-50" />
        </div>
        <div className="absolute top-[-60px] right-[-140px]" style={{ width: '360px', height: '360px' }}>
          <img src="/images/event-resilience/trust-blob-2.svg" alt="" className="absolute inset-0 w-full h-full max-w-none opacity-50" />
        </div>
        
        {/* Accents */}
        <div className="absolute left-[-40px] top-[420px]" style={{ width: '14px', height: '14px' }}>
          <img src="/images/event-resilience/trust-accent-1.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute right-[-40px] top-[420px]" style={{ width: '14px', height: '14px' }}>
          <img src="/images/event-resilience/trust-accent-2.svg" alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full" style={{ gap: '24px', maxWidth: '1200px' }}>
        <p className="font-space-grotesk font-bold uppercase text-center" style={{ color: '#707a8c', fontSize: '14px', letterSpacing: '1px' }}>
          COMPLIANCE & INTEGRITY VERIFIED BY LEADING ORGANIZATIONS
        </p>
        
        <div className="flex flex-wrap items-center justify-center w-full" style={{ gap: '24px' }}>
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #34d4ca, #4a8cfb)',
                border: '1px solid #1f2937',
                padding: '12px 20px',
                gap: '12px',
                boxShadow: '0px 10px 12px rgba(0,0,0,0.4)'
              }}
            >
              <div className="relative overflow-hidden" style={{ width: '20px', height: '20px' }}>
                <img src={`/images/event-resilience/${logo.icon}`} alt="" className="absolute inset-0 w-full h-full" />
              </div>
              <p className="font-space-grotesk font-bold uppercase whitespace-nowrap" style={{ color: '#e5e7eb', fontSize: '16px' }}>
                {logo.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
