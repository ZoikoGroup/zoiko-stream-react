import React from 'react';

export default function Section11DeprecationLifecycle() {
  const steps = [
    {
      num: "1",
      title: "Announced",
      desc: "First warning issued via API metadata headers.",
      lineSrc: "/images/developers-changelog/sec11-line.svg"
    },
    {
      num: "2",
      title: "Deprecated",
      desc: "SLA coverage continues but warnings are active.",
      lineSrc: "/images/developers-changelog/sec11-line.svg"
    },
    {
      num: "3",
      title: "Migration Period",
      desc: "Active window for developer payload adjustments.",
      lineSrc: "/images/developers-changelog/sec11-line.svg"
    },
    {
      num: "4",
      title: "Sunset Active",
      desc: "Legacy pathway ceases to process production inputs.",
      lineSrc: "/images/developers-changelog/sec11-line1.svg"
    },
    {
      num: "5",
      title: "Superseded",
      desc: "Verification record references modern alternative path.",
      lineSrc: null
    }
  ];

  return (
    <section className="bg-[#05090f] border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full overflow-hidden">
      <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          From announcement to sunset
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Structured timeline gates guard system health. We catalog and signal deprecation routes clearly to ensure no production surprises.
        </p>
      </div>

      <div className="w-full overflow-x-auto pb-4 relative z-10 mt-8">
        <div className="flex items-start relative min-w-[900px] w-full">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-1 flex-col items-center relative">
              {step.lineSrc && (
                <div className="absolute top-[24px] left-[50%] w-full h-[2px] -translate-y-1/2 z-0">
                  <img alt="" className="block w-full h-[2px]" src={step.lineSrc} />
                </div>
              )}
              
              <div className="bg-[#05090f] border border-[#232b3a] border-solid flex items-center justify-center relative rounded-full shrink-0 w-[48px] h-[48px] z-10 mb-4">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[14px]">
                  {step.num}
                </span>
              </div>
              
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[15px] text-white whitespace-nowrap text-center mb-2">
                {step.title}
              </h3>
              
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] not-italic relative text-[#aab3c4] text-[12px] text-center max-w-[150px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
