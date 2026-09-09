import React from 'react';

const safeToInclude = [
  'Request, correlation or error ID',
  'Structured error code or token',
  'Short, redacted code snippet (no secrets)',
  'Sanitized log excerpt with sensitive fields removed',
  'Timestamp and timezone of the failure',
  'Reproduction steps without confidential business logic',
];

const neverInclude = [
  'Passwords or MFA codes',
  'API keys, bearer/access tokens, signing secrets',
  'Private keys or certificate material',
  'Full webhook signing secrets',
  'Unredacted customer media or personal data',
  'Full source repository or archive uploads',
];

export default function DiagnosticEvidenceSection() {
  return (
    <section className="relative w-full bg-white border-b border-[#dde2ea] flex justify-center pt-[75px] pb-[109px]" style={{ minHeight: '485px' }}>
      <div className="w-full max-w-[1440px] px-[132px] flex flex-col items-start relative z-10">
        <div className="bg-[#3fc9bd] rounded-[3px] w-full max-w-[40px] h-[6px] mb-[12px]" />
        
        <p className="font-inter font-bold text-[#3fc9bd] uppercase tracking-[1.25px] text-[12.5px] mb-[24px]">
          What you can safely share
        </p>
        
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] mb-[51px]">
          Diagnostic evidence & safety.
        </h2>
        
        <div className="flex gap-[20px] w-full h-[241px]">
          {/* Safe to Include */}
          <div className="flex-1 bg-[#e9f9f7] border border-[rgba(63,201,189,0.3)] rounded-[14px] relative">
            <h3 className="absolute font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] left-[22px] top-[22px]">
              Safe to include
            </h3>
            <div className="absolute left-[22px] top-[56px] right-[22px]">
              <ul className="flex flex-col gap-[6px] font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] ml-[15px]">
                {safeToInclude.map((item, i) => (
                  <li key={i} className="list-disc pl-[4px]">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Never Include */}
          <div className="flex-1 bg-[#fbe6e4] border border-[rgba(200,90,82,0.3)] rounded-[14px] relative">
            <h3 className="absolute font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] left-[22px] top-[22px]">
              Never include
            </h3>
            <div className="absolute left-[22px] top-[56px] right-[22px]">
              <ul className="flex flex-col gap-[6px] font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px] ml-[15px]">
                {neverInclude.map((item, i) => (
                  <li key={i} className="list-disc pl-[4px]">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
