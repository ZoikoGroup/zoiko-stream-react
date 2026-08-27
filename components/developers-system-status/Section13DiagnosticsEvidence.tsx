import React from 'react';

export default function Section13DiagnosticsEvidence() {
  const steps = [
    {
      step: "STEP 01",
      title: "Copy Public Incident ID",
      subtitle: "#INC-2026-08 (API Gateway Timeout)",
      desc: "Reference the active #INC code from our status timeline if relevant."
    },
    {
      step: "STEP 02",
      title: "Select Affected Subsystem",
      subtitle: "Control Plane API (us-east-1)",
      desc: "Determine which regional cluster or component pipeline is experiencing anomalies."
    },
    {
      step: "STEP 03",
      title: "Verify Accurate Timestamp",
      subtitle: "2026-03-20T17:41:00Z",
      desc: "Always include timestamps in UTC format to match server logs accurately."
    },
    {
      step: "STEP 04",
      title: "Locate Request Trace Identifiers",
      subtitle: "tr-9481a7d812fe0a",
      desc: "Retrieve 'x-zoiko-trace-id' parameters directly from API response headers."
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-30" src="/images/developers-system-status/sec13-bg.png" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.7)]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-[48px] items-start relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[40px] items-start relative flex-[1_0_0] w-full">
          <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
              Prepare your support request.
            </h2>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[900px] mx-auto md:mx-0">
              Gather safe diagnostic evidence parameters systematically before submitting ticket workflows to our reliability engineering teams.
            </p>
          </div>

          <div className="flex flex-col gap-[24px] w-full">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-[#111622] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start p-[24px] relative rounded-[12px] w-full hover:border-[#34d4ca]/50 transition-colors duration-300">
                <div className="flex items-center justify-between relative w-full">
                  <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#34d4ca] text-[13px]">
                    {st.step}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[14px] line-clamp-1 max-w-[70%]">
                    {st.title}
                  </p>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[16px] text-white">
                  {st.subtitle}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#707a8c] text-[13px]">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] w-full lg:w-[440px] shrink-0 shadow-xl backdrop-blur-sm mt-8 lg:mt-0">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#f59e0b] text-[14px] tracking-[1px] whitespace-nowrap">
            CRITICAL SECURITY WARNING
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#aab3c4] text-[14px] w-full">
            Never include passwords, API secret keys, stream keys, customer PII, or raw encryption tokens in support diagnostic submissions. All public status tickets are governed by compliance policies.
          </p>
          
          <div className="w-full h-px bg-[#232b3a]" />
          
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[14px] text-white whitespace-nowrap">
            Diagnostic footprint:
          </p>
          <div className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[13px] w-full">
            <p className="leading-[18px] mb-2">• Regional identifier: us-east-1</p>
            <p className="leading-[18px] mb-2">• Device context: Web Client / SDK v4.12</p>
            <p className="leading-[18px] mb-0">• Target endpoint: /v1/streams/active</p>
          </div>
          
          <div className="w-full h-px bg-[#232b3a]" />
          
          <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] relative rounded-[8px] w-full hover:opacity-90 transition-opacity">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0a0f1a] text-[15px] whitespace-nowrap">
              Generate support bundle
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
