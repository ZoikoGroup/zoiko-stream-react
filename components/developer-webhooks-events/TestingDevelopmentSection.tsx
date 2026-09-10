import React from 'react';

export default function TestingDevelopmentSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Testing &amp; local development
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Test your handler before production events depend on it.
        </h2>

        {/* Inner Content Block */}
        <div className="flex flex-col lg:flex-row gap-[32px] w-full mt-6">
          {/* Left: Test Form */}
          <div className="flex w-full lg:w-[460px] flex-col rounded-[10px] border border-solid border-[#dde2ea] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[32px] flex items-center px-4 bg-[#eeecfd]">
              <span className="font-inter text-[10.5px] font-bold tracking-[0.42px] text-[#6a6df0]">TEST ENVIRONMENT</span>
            </div>
            
            <div className="flex flex-col gap-[16px] p-[20px] pt-[52px]">
              <label className="font-inter text-[12px] text-[#9aa1ae]">
                Send a synthetic test event
              </label>
              
              <div className="flex h-[37px] w-full items-center rounded-[8px] border border-solid border-[#dde2ea] bg-[#efefef] px-4">
                <span className="font-sans text-[13.5px] text-black">
                  stream.session.started
                </span>
                <span className="ml-auto text-[10px] text-[#9aa1ae]">▼</span>
              </div>
              
              <button className="mt-4 flex h-[44px] w-full items-center justify-center rounded-[9px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] px-6 text-[14.5px] font-semibold text-[#1c2430] hover:opacity-90">
                Send test event
              </button>
            </div>
          </div>

          {/* Right: Rules/List */}
          <div className="flex w-full lg:w-[600px] flex-col justify-center">
            {[
              "Test deliveries are signed using the test-environment secret — never your production secret.",
              "Fixtures are generated from the same schema source as the catalog — no stale hand-written JSON.",
              "Synthetic fixtures never contain real customer identifiers or media metadata.",
              "Local tunnels/reverse proxies are a general pattern for local development — vendor choice is yours."
            ].map((text, idx) => (
              <div key={idx} className={`flex items-start py-[16px] ${idx !== 3 ? 'border-b border-solid border-[#dde2ea]' : ''}`}>
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
      </div>
    </section>
  );
}
