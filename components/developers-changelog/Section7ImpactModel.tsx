import React from 'react';

export default function Section7ImpactModel() {
  const cards = [
    {
      tag: "CHANGE TYPE",
      tagColor: "#aab3c4",
      title: "Platforms",
      desc: "Specifies the physical or programmatic target of the alteration: Core API, SDKs, Webhooks, Player, or Live Concierge channels.",
      bg: "transparent"
    },
    {
      tag: "COMPATIBILITY",
      tagColor: "#ff4d4d",
      title: "Breaking State",
      desc: "Fires warning labels when older code contracts will stop resolving. Backward breaking releases are isolated and tagged.",
      bg: "rgba(255,77,77,0.1)"
    },
    {
      tag: "ACTION STATE",
      tagColor: "#aab3c4",
      title: "Urgency",
      desc: "Indicates the required pace of developer migration: Action Required immediately, Action Recommended (30d), or standard Optional.",
      bg: "transparent"
    },
    {
      tag: "AVAILABILITY",
      tagColor: "#34d4ca",
      title: "Phased Rollout",
      desc: "Tracks where the release is currently active: Canary environments, general Beta access, global Public Stable, or deprecated states.",
      bg: "rgba(16,185,129,0.11)"
    },
    {
      tag: "CORRECTION",
      tagColor: "#aab3c4",
      title: "Provenance",
      desc: "Deterministic linkage back to original commit logs, author IDs, platform incident numbers, and historical change maps.",
      bg: "transparent"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec7-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.8)] inset-0" />
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-3xl md:text-[38px] text-white w-full">
          Understand every label and signal.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-full hover:bg-[rgba(20,27,40,0.9)] transition-colors duration-300">
            <div 
              className="border border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0"
              style={{ 
                backgroundColor: card.bg, 
                borderColor: card.bg === 'transparent' ? '#232b3a' : card.bg.replace('0.1', '0.3').replace('0.11', '0.3') 
              }}
            >
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: card.tagColor }}>
                {card.tag}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[18px] text-white">
              {card.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] not-italic relative text-[#aab3c4] text-[13px] w-full">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
