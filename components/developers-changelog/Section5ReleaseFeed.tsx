import React from 'react';

export default function Section5ReleaseFeed() {
  const releases = [
    {
      version: "v2.13.4-Hotfix",
      tag: "Patch",
      tagColor: "#aab3c4",
      date: "Published February 12, 2026",
      desc: "Patch release correcting an edge WebRTC connection memory leak and clarifying developer schema validation warnings on older iOS versions.",
      chips: [
        { text: "WebRTC", color: "#4a8cfb", bg: "rgba(74,140,251,0.1)" },
        { text: "iOS", color: "#4a8cfb", bg: "rgba(74,140,251,0.1)" },
        { text: "Stable", color: "#34d4ca", bg: "rgba(16,185,129,0.11)" }
      ]
    },
    {
      version: "v2.13.0",
      tag: "Minor Feature Update",
      tagColor: "#10b981",
      date: "Published January 28, 2026",
      desc: "Introduced customizable fallback player configurations and enhanced server telemetry hooks. Includes programmatic updates to Webhook v2 protocols.",
      chips: [
        { text: "Webhook", color: "#34d4ca", bg: "rgba(52,212,202,0.1)" },
        { text: "Telemetry", color: "#34d4ca", bg: "rgba(52,212,202,0.1)" },
        { text: "Stable", color: "#34d4ca", bg: "rgba(16,185,129,0.11)" }
      ]
    },
    {
      version: "v2.12.0",
      tag: "Major Security Release",
      tagColor: "#ff4d4d",
      date: "Published January 05, 2026",
      desc: "Brings comprehensive SAML SSO configurations, strict WCAG player compliance standards, and mandatory payload signature requirements. Action required.",
      chips: [
        { text: "Security", color: "#ff4d4d", bg: "rgba(255,77,77,0.1)" },
        { text: "SAML", color: "#ff4d4d", bg: "rgba(255,77,77,0.1)" },
        { text: "API", color: "#34d4ca", bg: "rgba(52,212,202,0.1)" }
      ]
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec5-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.93)] inset-0" />
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-3xl md:text-[38px] text-white w-full">
          Scan the release history.
        </h2>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative z-10 w-full lg:mx-0">
        {releases.map((release, idx) => (
          <div key={idx} className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[20px] items-start p-[24px] md:p-[32px] relative rounded-[16px] w-full hover:bg-[rgba(20,27,40,0.9)] transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative w-full gap-2">
              <div className="flex flex-wrap gap-[12px] items-center relative">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[20px] md:text-[22px] text-white whitespace-nowrap">
                  {release.version}
                </h3>
                <div className="border border-[rgba(255,255,255,0.1)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" style={{ borderColor: `rgba(${release.tagColor === '#aab3c4' ? '255,255,255' : release.tagColor},0.3)` }}>
                  <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: release.tagColor }}>
                    {release.tag}
                  </span>
                </div>
              </div>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#aab3c4] text-[13px] md:text-[14px] whitespace-nowrap">
                {release.date}
              </p>
            </div>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] not-italic relative text-[#aab3c4] text-[14px] w-full">
              {release.desc}
            </p>
            <div className="flex flex-wrap gap-[8px] items-start relative w-full mt-2">
              {release.chips.map((chip, cIdx) => (
                <div key={cIdx} className="border border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" style={{ backgroundColor: chip.bg, borderColor: chip.bg.replace('0.1', '0.3').replace('0.11', '0.3') }}>
                  <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: chip.color }}>
                    {chip.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pt-[20px] relative z-10 w-full lg:mx-0 gap-4">
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[normal] not-italic relative text-[#aab3c4] text-[14px] whitespace-nowrap">
          Showing 3 of 142 releases
        </p>
        <div className="flex gap-[8px] items-start relative">
          <button className="bg-[#34d4ca] flex items-start px-[16px] py-[8px] relative rounded-[8px] cursor-pointer hover:bg-[#2bbbb2] transition-colors border-none outline-none">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0a0d14] text-[14px] whitespace-nowrap">
              1
            </span>
          </button>
          <button className="bg-transparent border border-[#232b3a] border-solid flex items-start px-[16px] py-[8px] relative rounded-[8px] cursor-pointer hover:bg-white/5 transition-colors">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[14px] whitespace-nowrap">
              2
            </span>
          </button>
          <button className="bg-transparent border border-[#232b3a] border-solid flex items-start px-[16px] py-[8px] relative rounded-[8px] cursor-pointer hover:bg-white/5 transition-colors">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-white text-[14px] whitespace-nowrap">
              3
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
