import React from 'react';

export default function SecurityPrivacySection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Security, privacy &amp; data minimization
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Treat webhook deliveries as production data.
        </h2>

        <div className="flex flex-col w-full max-w-[850px] mt-6">
          {[
            "Signing secrets never appear in endpoint URLs, client code, analytics, screenshots, or normal logs.",
            "Endpoint host is displayed safely; sensitive path or query components are redacted.",
            "Payload fields are classified by the Event Registry for docs, logs, retention, support access, and export.",
            "Secret rotation supports overlap only where the official rotation contract allows it — old values are never re-displayed.",
            "Support-safe diagnostic views exclude secrets and restricted payload fields by default."
          ].map((text, idx) => (
            <div key={idx} className={`flex items-start py-[16px] ${idx !== 4 ? 'border-b border-solid border-[#dde2ea]' : ''}`}>
              <div className="mt-[2px] mr-[16px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border-2 border-solid border-[#dde2ea]">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#6a6df0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-inter text-[14px] leading-[22.68px] text-[#63697a]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
