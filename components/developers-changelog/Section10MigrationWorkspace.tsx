import React from 'react';

export default function Section10MigrationWorkspace() {
  const steps = [
    { num: "01", label: "Scope" },
    { num: "02", label: "Prerequisites" },
    { num: "03", label: "Change" },
    { num: "04", label: "Verify" },
    { num: "05", label: "Rollback" },
    { num: "06", label: "Deadline" },
    { num: "07", label: "Evidence", isLast: true }
  ];

  const cards = [
    {
      badge: "STATE: GREEN",
      badgeColor: "#10b981",
      badgeBg: "rgba(16,185,129,0.1)",
      badgeBorder: "rgba(16,185,129,0.3)",
      icon: "/images/developers-changelog/sec10-check-circle.svg",
      title: "Not Required",
      desc: "No changes to target payloads or API behaviors. Active system features continue stable operation indefinitely."
    },
    {
      badge: "STATE: AMBER",
      badgeColor: "#d97706",
      badgeBg: "rgba(217,119,6,0.1)",
      badgeBorder: "rgba(217,119,6,0.3)",
      icon: "/images/developers-changelog/sec10-alert-triangle.svg",
      title: "Review & Assess",
      desc: "Includes non-breaking optimizations or upcoming deprecation warnings. Review telemetry updates before scheduling dev resources."
    },
    {
      badge: "STATE: URGENT RED",
      badgeColor: "#ff4d4d",
      badgeBg: "rgba(255,77,77,0.1)",
      badgeBorder: "rgba(255,77,77,0.3)",
      icon: "/images/developers-changelog/sec10-x-circle.svg",
      title: "Migration Required",
      desc: "Action is mandatory before deprecation timelines sunset. Failing to upgrade active client wrappers will result in payload errors."
    },
    {
      badge: "STATE: REMOVED",
      badgeColor: "#4f5e74",
      badgeBg: "transparent",
      badgeBorder: "#e1e6eb",
      icon: "/images/developers-changelog/sec10-trash.svg",
      title: "Deprecated / Sunset",
      desc: "Legacy components and endpoints are no longer supported. Access attempts route instantly to failure fallback paths."
    }
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec10-bg.png" />
      </div>

      <div className="absolute bottom-[-155px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
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
          Migrate with evidence, not guesswork
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Follow our standardized migration protocols to verify schema transitions, calculate backwards-compatibility windows, and execute rollback plans safely.
        </p>
      </div>

      {/* Pipeline Flow - hidden on very small mobile, visible sm and up with horizontal scroll */}
      <div className="w-full overflow-x-auto pb-4 relative z-10">
        <div className="flex items-center relative min-w-[700px] w-full px-4">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex ${!step.isLast ? 'flex-[1_0_0]' : ''} items-center relative min-w-px gap-[4px]`}>
              <div className="flex flex-[1_0_0] flex-col gap-[8px] items-center relative min-w-px z-10">
                <div className="bg-gradient-to-b border border-[#4f5e74] border-solid flex flex-col from-[#34d4ca] items-center justify-center relative rounded-[24px] w-[48px] h-[48px] to-[#4a8cfb] shadow-sm">
                  <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[14px] text-white">
                    {step.num}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0f1b2d] text-[13px] whitespace-nowrap">
                  {step.label}
                </span>
              </div>
              {!step.isLast && (
                <div className="bg-[#e1e6eb] flex-[1_0_0] h-[2px] min-w-[30px] relative z-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            <div className="flex items-center justify-between relative w-full">
              <div className="border border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px]" style={{ backgroundColor: card.badgeBg, borderColor: card.badgeBorder }}>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[11px] whitespace-nowrap uppercase" style={{ color: card.badgeColor }}>
                  {card.badge}
                </span>
              </div>
              <div className="relative w-[20px] h-[20px] flex items-center justify-center">
                <img alt="" className="absolute block max-w-none w-full h-full" src={card.icon} />
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
