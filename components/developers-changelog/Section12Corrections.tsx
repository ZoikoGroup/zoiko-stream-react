import React from 'react';

export default function Section12Corrections() {
  const cards = [
    {
      tag: "TYPE: CORRECTION LOG",
      title: "Correction Log",
      desc: "Formal adjustment logs pointing explicitly back to the compromised version state."
    },
    {
      tag: "TYPE: ORIGINAL ENTRY",
      title: "Original Entry",
      desc: "The persistent, un-modified record of release behaviors preserved for audits."
    },
    {
      tag: "TYPE: KNOWN LIMITATION",
      title: "Known Limitation",
      desc: "Active system quirks and performance boundaries transparently declared in advance."
    },
    {
      tag: "TYPE: DOC CLARIFICATIONS",
      title: "Doc Clarifications",
      desc: "Corrected technical manuals, API guides, and code reference anomalies."
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec12-bg.png" />
      </div>

      <div className="absolute bottom-[-69px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
          Preserve history. Never rewrite it.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          We believe in absolute provenance. If a previously deployed release contains an anomaly, we publish a distinct correction record rather than silently mutating git history.
        </p>
      </div>

      <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col md:flex-row gap-[24px] md:gap-[48px] items-center justify-center p-[24px] md:p-[48px] relative rounded-[16px] w-full z-10 shadow-sm">
        <div className="bg-white border-[#e1e6eb] border-[1.5px] border-solid flex flex-col gap-[12px] items-start p-[20px] relative rounded-[12px] w-full md:w-[300px]">
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#4f5e74] text-[14px]">
            RECORD ENTRY 01
          </span>
          <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[18px]">
            Original Release Contract
          </h3>
          <p className="font-[family-name:var(--font-inter)] font-normal w-full not-italic relative text-[#4f5e74] text-[13px]">
            Historical release catalogued with immutable commit hashes.
          </p>
        </div>
        
        <div className="w-[40px] md:w-[104px] h-[40px] md:h-[16px] relative shrink-0 rotate-90 md:rotate-0 flex items-center justify-center">
          <img alt="" className="absolute block max-w-none w-auto h-auto md:w-full md:h-full object-contain" src="/images/developers-changelog/sec12-arrow.svg" />
        </div>
        
        <div className="bg-white border-2 border-[#34d4ca] border-solid flex flex-col gap-[12px] items-start p-[20px] relative rounded-[12px] w-full md:w-[300px] shadow-[0_4px_20px_rgba(52,212,202,0.15)]">
          <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#34d4ca] text-[14px]">
            CORRECTION AUDIT
          </span>
          <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[18px]">
            Attributable Amendment
          </h3>
          <p className="font-[family-name:var(--font-inter)] font-normal w-full not-italic relative text-[#4f5e74] text-[13px]">
            Detailed remediation entry detailing payload anomalies and solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            <div className="flex items-center justify-between relative w-full gap-2">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#4f5e74] text-[12px] whitespace-nowrap">
                {card.tag}
              </span>
              <div className="relative shrink-0 w-[18px] h-[18px] flex items-center justify-center">
                <img alt="" className="absolute block max-w-none w-full h-full" src="/images/developers-changelog/sec12-file-text.svg" />
              </div>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[18px]">
              {card.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] w-full not-italic relative text-[#4f5e74] text-[14px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
