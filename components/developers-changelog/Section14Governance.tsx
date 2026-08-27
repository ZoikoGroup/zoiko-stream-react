import React from 'react';

export default function Section14Governance() {
  const gates = [
    {
      title: "Release-source Gate",
      desc: "Direct lineage check verifying commit origin and author signatures."
    },
    {
      title: "Change-source Gate",
      desc: "Verification that release logs correlate 1:1 with stable branch deployments."
    },
    {
      title: "Impact Gate",
      desc: "Deterministic detection of backwards-breaking changes triggering SLA warnings."
    },
    {
      title: "Date Gate",
      desc: "Automated logging verification tracking deployment schedule windows."
    },
    {
      title: "Correction Gate",
      desc: "Checks for required mutable linking referencing any remediated anomalies."
    },
    {
      title: "Deprecation Gate",
      desc: "Validation that sunset warning parameters are explicitly declared."
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec14-bg.png" />
      </div>

      <div className="absolute bottom-[-243px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Source authority you can inspect
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
            Track compliance timelines and verify publication hashes. Every ZoikoStream release must pass our strict cryptographic governance pipeline.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[32px] items-start relative w-full">
          <div className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid flex flex-col gap-[24px] items-start p-[24px] md:p-[32px] relative rounded-[16px] w-full lg:w-[420px] shrink-0 shadow-sm">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[14px]">
              METADATA CONTEXT
            </h3>
            <div className="flex flex-col gap-[16px] items-start relative text-[13px] w-full">
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74]">
                  Source Authority
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-right">
                  ZoikoStream Release Registry
                </span>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74]">
                  Published Timestamp
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-right">
                  2026-02-18 14:32:00 UTC
                </span>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74]">
                  Last Source Sync
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-right">
                  10 mins ago
                </span>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74]">
                  API Version Group
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-right">
                  v2.14 Stable
                </span>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74]">
                  Author Team Signature
                </span>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-right">
                  Core CoreOps Hub (sig:0a93df)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start relative w-full">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[14px] whitespace-nowrap">
              PUBLICATION INTEGRITY GATES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] relative w-full">
              {gates.map((gate, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[8px] items-start p-[24px] relative rounded-[12px] w-full">
                  <div className="flex gap-[8px] items-center relative w-full">
                    <div className="bg-[#4a8cfb] relative rounded-[5px] shrink-0 w-[8px] h-[8px]" />
                    <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[15px] whitespace-nowrap">
                      {gate.title}
                    </h4>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] w-full not-italic relative text-[#4f5e74] text-[13px] mt-1">
                    {gate.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
