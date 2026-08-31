import React from 'react';

export default function Section11DeveloperResources() {
  const resources = [
    {
      title: "Idempotency Capability",
      desc: "Permits repetitive transaction attempts safely without risking duplicate processing or billing charges.",
      img: "/images/developers-system-status/sec11-card1.png"
    },
    {
      title: "Dead-Letter Recovery",
      desc: "Sequesters corrupted or repeatedly failing payloads into secure holding queues for manual administrator review.",
      img: "/images/developers-system-status/sec11-card2.png"
    },
    {
      title: "Queue Payload",
      desc: "Ensures every packet contains strict correlation IDs embedded inside the core metadata layers.",
      img: "/images/developers-system-status/sec11-card3.png"
    },
    {
      title: "Ordering",
      desc: "Guarantees chronological execution sequence for dependent payloads using monotonic sequence identifiers.",
      img: "/images/developers-system-status/sec11-card4.png"
    },
    {
      title: "Retry Ownership",
      desc: "Configures strict protocol rules establishing whether client or gateway triggers the next retry sequence.",
      img: "/images/developers-system-status/sec11-card5.png"
    },
    {
      title: "Unknown Outcome",
      desc: "Applies defensive safety state checks when connection cuts out mid-flight before receiving confirmation.",
      img: "/images/developers-system-status/sec11-card6.png"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-30" src="/images/developers-system-status/sec11-bg.png" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.7)]" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Developer resources.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[1000px] mx-auto md:mx-0">
            Diagnostic entrypoints, code execution runbooks, and error resolution pathways mapped to current platform health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-start relative w-full">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-[#111622] border border-[#34d4ca]/40 border-solid flex flex-col items-start overflow-clip relative rounded-[12px] w-full hover:border-[#34d4ca] transition-colors duration-300">
              <div className="h-[200px] relative w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full" src={res.img} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[24px] relative w-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[18px] text-white whitespace-nowrap">
                  {res.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] not-italic relative text-[#aab3c4] text-[14px] w-full">
                  {res.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
