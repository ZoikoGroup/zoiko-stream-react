import React from 'react';

const safeItems = [
  'Request, correlation or error ID',
  'Structured error code or token',
  'Short, redacted code snippet (no secrets)',
  'Sanitized log excerpt with sensitive fields removed',
  'Timestamp and timezone of the failure',
  'Reproduction steps without confidential business logic'
];

const neverItems = [
  'Passwords or MFA codes',
  'API keys, bearer/access tokens, signing secrets',
  'Private keys or certificate material',
  'Full webhook signing secrets',
  'Unredacted customer media or personal data',
  'Full source repository or archive uploads'
];

export default function DiagnosticEvidenceSafetySection() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <section className="hidden md:flex relative w-full justify-center bg-white border-b border-[#dde2ea]" style={{ height: '485.38px' }}>
        <div className="w-full max-w-[1440px] relative z-10 h-full">
          <div className="absolute top-[75px] w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] left-[132px]" />
          <div className="absolute top-[68px] left-[146px] h-[20px] flex items-center">
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px]">
              What you can safely share
            </p>
          </div>

          <div className="absolute top-[108px] left-[132px] h-[33px] flex items-center">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px]">
              Diagnostic evidence & safety.
            </h2>
          </div>

          {/* Safe to include */}
          <div className="absolute top-[175.59px] left-[132px] w-[579px] h-[240.78px] bg-[#e9f9f7] border border-[rgba(63,201,189,0.3)] rounded-[14px]">
            <div className="absolute top-[34px] left-[22px] h-[24px] flex items-center">
              <span className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] leading-[24px]">Safe to include</span>
            </div>
            <div className="absolute top-[56px] left-[22px] right-[22px] h-[154.78px]">
              {safeItems.map((item, i) => {
                const topOffset = i * 26.8;
                return (
                  <div key={i} className="absolute left-[18px] right-0 h-[20.8px]" style={{ top: `${topOffset}px` }}>
                    <div className="absolute left-0 top-[10.4px] w-[6px] h-[20.8px] flex flex-col justify-center transform -translate-y-1/2">
                      <span className="text-[#6b7280] text-[18px] leading-[20.8px]">•</span>
                    </div>
                    <div className="absolute left-[12px] top-[10px] h-[16px] flex flex-col justify-center transform -translate-y-1/2">
                      <span className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">{item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Never include */}
          <div className="absolute top-[175.59px] left-[729px] w-[579px] h-[240.78px] bg-[#fbe6e4] border border-[rgba(200,90,82,0.3)] rounded-[14px]">
            <div className="absolute top-[34px] left-[22px] h-[24px] flex items-center">
              <span className="font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] leading-[24px]">Never include</span>
            </div>
            <div className="absolute top-[56px] left-[22px] right-[22px] h-[154.78px]">
              {neverItems.map((item, i) => {
                const topOffset = i * 26.8;
                return (
                  <div key={i} className="absolute left-[18px] right-0 h-[20.8px]" style={{ top: `${topOffset}px` }}>
                    <div className="absolute left-0 top-[10.4px] w-[6px] h-[20.8px] flex flex-col justify-center transform -translate-y-1/2">
                      <span className="text-[#6b7280] text-[18px] leading-[20.8px]">•</span>
                    </div>
                    <div className="absolute left-[12px] top-[10px] h-[16px] flex flex-col justify-center transform -translate-y-1/2">
                      <span className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">{item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW --- */}
      <section className="flex md:hidden relative w-full flex-col justify-start bg-white border-b border-[#dde2ea] pt-[45px] pb-[40px] px-[22px]">
        <div className="w-full max-w-[390px] relative z-10 mx-auto">
          {/* Header Block */}
          <div className="flex items-center h-[20px] mb-[13px]">
            <div className="w-[6px] h-[6px] rounded-[3px] bg-[#3fc9bd] mr-[8px]" />
            <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] tracking-[1.25px] uppercase leading-[20px] m-0">
              What you can safely share
            </p>
          </div>

          <div className="flex flex-col mb-[34px]">
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">Diagnostic evidence &</h2>
            <h2 className="font-sora font-bold text-[#32353c] text-[26px] tracking-[-0.26px] leading-[41.6px] m-0">safety.</h2>
          </div>

          <div className="flex flex-col gap-[18px] w-full">
            {/* Safe to include Card */}
            <div className="w-full bg-[#e9f9f7] border border-[rgba(63,201,189,0.3)] rounded-[14px] p-[22px]">
              <span className="block font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] leading-[24px] mb-[10px]">
                Safe to include
              </span>
              <ul className="list-disc pl-[20px] m-0 flex flex-col gap-[8px]">
                {safeItems.map((item, i) => (
                  <li key={i} className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Never include Card */}
            <div className="w-full bg-[#fbe6e4] border border-[rgba(200,90,82,0.3)] rounded-[14px] p-[22px]">
              <span className="block font-sora font-bold text-[#32353c] text-[15px] tracking-[-0.15px] leading-[24px] mb-[10px]">
                Never include
              </span>
              <ul className="list-disc pl-[20px] m-0 flex flex-col gap-[8px]">
                {neverItems.map((item, i) => (
                  <li key={i} className="font-inter font-normal text-[#6b7280] text-[13px] leading-[20.8px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
