import React from 'react';

export default function Section2HowToRead() {
  const definitionsRow1 = [
    {
      title: "Release",
      desc: "A parent version tag representing a verified state change across production streaming pipelines. Includes specific semantic tags.",
      img: "/images/developers-changelog/sec2-rect0.png"
    },
    {
      title: "Change Entry",
      desc: "An individual atomic modification catalogued inside a release. Labeled by subsystem, scope, and specific programmatic action.",
      img: "/images/developers-changelog/sec2-rect1.png"
    },
    {
      title: "Deprecation",
      desc: "Official warning for fields, pathways, or endpoints scheduled for removal. Offers mandatory replacement schemas and clear countdown.",
      img: "/images/developers-changelog/sec2-rect2.png",
      bordered: true
    }
  ];

  const definitionsRow2 = [
    {
      title: "Correction",
      desc: "Attributable bug fixes targeting previously deployed release anomalies. Clearly references the offending version hash.",
      img: "/images/developers-changelog/sec2-rect3.png"
    },
    {
      title: "Documentation Update",
      desc: "Corrections, clarifications, or expansions of API references, technical architectural blueprints, and user guides.",
      img: "/images/developers-changelog/sec2-rect4.png",
      bordered: true
    },
    {
      title: "Incident/Status Event",
      desc: "Post-mortem summaries, core service recovery actions, and verification tracking of platform stability markers.",
      img: "/images/developers-changelog/sec2-rect5.png",
      bordered: true
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec2-bg.png" />
      </div>

      <div className="absolute bottom-[-34px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
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
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] w-full">
          How to read the changelog.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Our release log maps platform modifications to deterministic rules. Every entry is categorized into explicit system entities to help you assess production impact.
        </p>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative z-10 w-full">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative w-full">
          {definitionsRow1.map((def, idx) => (
            <div key={idx} className={`bg-[#f8fafc] flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 ${def.bordered ? 'border border-[#e1e6eb] border-solid' : ''}`}>
              <div className="h-[120px] relative rounded-[8px] w-full shrink-0 overflow-hidden">
                <img alt={def.title} className="absolute inset-0 object-cover w-full h-full" src={def.img} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0f1b2d] text-[18px]">
                {def.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#4f5e74] text-[14px] w-full">
                {def.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative w-full">
          {definitionsRow2.map((def, idx) => (
            <div key={idx} className={`bg-[#f8fafc] flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 ${def.bordered ? 'border border-[#e1e6eb] border-solid' : ''}`}>
              <div className="h-[120px] relative rounded-[8px] w-full shrink-0 overflow-hidden">
                <img alt={def.title} className="absolute inset-0 object-cover w-full h-full" src={def.img} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0f1b2d] text-[18px]">
                {def.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#4f5e74] text-[14px] w-full">
                {def.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
