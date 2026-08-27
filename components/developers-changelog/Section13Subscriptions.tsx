import React from 'react';

export default function Section13Subscriptions() {
  const cards = [
    {
      badge: "LIVE",
      title: "System Webhooks",
      sub: "Channel Available",
      desc: "Instant programmatic endpoint notifications upon new verified stable payloads."
    },
    {
      badge: "OPT-IN",
      title: "Developer Email",
      sub: "Requires Auth",
      desc: "Daily or weekly digests tailored explicitly to your active production SDK surfaces."
    },
    {
      badge: "TEAMS",
      title: "Slack Integration",
      sub: "Enterprise Only",
      desc: "Direct team channel messaging for high-priority emergency patches or hotfixes."
    },
    {
      badge: "ANONYMOUS",
      title: "Legacy RSS Feed",
      sub: "No Sub required",
      desc: "Fully anonymous XML payload feed for general integration pipelines."
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec13-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.93)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          Stay informed through approved channels
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Deterministic delivery parameters. We respect your attention: only highly qualified technical releases route to developer notifications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col gap-[20px] items-start p-[24px] md:p-[28px] relative rounded-[12px] w-full hover:bg-[rgba(20,27,40,0.9)] transition-colors duration-300">
            <div className="flex items-center justify-between relative w-full gap-2">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#34d4ca] text-[13px] whitespace-nowrap uppercase">
                {card.badge}
              </span>
              <div className="relative w-[18px] h-[18px] flex items-center justify-center">
                <img alt="" className="absolute block max-w-none w-full h-full" src="/images/developers-changelog/sec13-bell.svg" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[4px] items-start relative w-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[18px] text-white">
                {card.title}
              </h3>
              <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[12px]">
                {card.sub}
              </span>
            </div>
            
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] w-full not-italic relative text-[#aab3c4] text-[13px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] md:p-[32px] relative rounded-[16px] w-full z-10">
        <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#34d4ca] text-[14px]">
          PRIVACY & DATA CONTRACT
        </h3>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] w-full not-italic relative text-[16px] text-white">
          We adhere to a strict minimal data protocol: Minimum identity metadata collected. No advertisement profiles compiled. Fully reversible subscription preferences managed instantaneously via cryptographic developer tokens.
        </p>
      </div>
    </section>
  );
}
