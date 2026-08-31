import React from 'react';

export default function Section9SdkChanges() {
  const sdks = [
    {
      name: "zoikostream-node",
      version: "v4.2.0 Stable",
      status: "RECOMMENDED",
      statusColor: "#10b981",
      statusBg: "rgba(16,185,129,0.13)",
      iconBg: "rgba(51,153,51,0.1)",
      iconSrc: "/images/developers-changelog/sec9-circle-x.svg",
      runtime: "Node.js >= 18.0.0",
      apiCompat: "v2.10.0 - v2.14.0",
      apiCompatColor: "#34d4ca",
      upgradeAction: "Standard updates to client session telemetry. No breaking property shifts. Update highly recommended for active stream monitors.",
      installCmd: "npm install @zoikostream/node@4.2.0",
      linkText: "Read Node SDK Changelog →"
    },
    {
      name: "zoikostream-python",
      version: "v3.8.1 Stable",
      status: "BREAKING CHANGES",
      statusColor: "#ff4d4d",
      statusBg: "rgba(255,77,77,0.13)",
      iconBg: "rgba(55,118,171,0.1)",
      iconSrc: "/images/developers-changelog/sec9-code.svg",
      runtime: "Python >= 3.9",
      apiCompat: "v2.14.0 ONLY",
      apiCompatColor: "#34d4ca",
      upgradeAction: "Legacy property `audio_format` is replaced by unified `supported_audio_tracks` payload interface. Manual integration review required.",
      installCmd: "pip install zoikostream-python==3.8.1",
      linkText: "Read Python SDK Changelog →"
    },
    {
      name: "zoikostream-go",
      version: "v2.1.0 Stable",
      status: "OPTIONAL",
      statusColor: "#4a8cfb",
      statusBg: "rgba(74,140,251,0.13)",
      iconBg: "rgba(0,173,216,0.1)",
      iconSrc: "/images/developers-changelog/sec9-circle-x1.svg",
      runtime: "Go >= 1.20",
      apiCompat: "v2.12.0 - v2.14.0",
      apiCompatColor: "#34d4ca",
      upgradeAction: "Optional dependency updates addressing internal retry backoff schemas. Recommended for highly resilient distributed systems.",
      installCmd: "go get github.com/zoikostream/go@v2.1.0",
      linkText: "Read Go SDK Changelog →"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec9-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.85)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          Track SDK and client compatibility
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[800px] mx-auto md:mx-0">
          Approved client updates and language-specific runtime versions mapping directly to verified production release iterations.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px] items-stretch justify-center relative z-10 w-full">
        {sdks.map((sdk, idx) => (
          <div key={idx} className="bg-[#0a0d14] border-[#232b3a] border-[1.5px] border-solid flex flex-[1_0_0] flex-col gap-[24px] items-start p-[24px] md:p-[28px] relative rounded-[16px] w-full hover:shadow-[0_4px_20px_rgba(255,255,255,0.03)] transition-shadow duration-300">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between relative w-full gap-4">
              <div className="flex gap-[12px] items-center relative">
                <div className="flex items-center justify-center relative rounded-[8px] w-[32px] h-[32px]" style={{ backgroundColor: sdk.iconBg }}>
                  <div className="relative w-[20px] h-[20px] flex items-center justify-center">
                    <img alt="" className="absolute block max-w-none w-full h-full" src={sdk.iconSrc} />
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] items-start relative">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[16px] text-white whitespace-nowrap">
                    {sdk.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4] text-[12px] whitespace-nowrap">
                    {sdk.version}
                  </p>
                </div>
              </div>
              <div className="border border-solid flex items-start px-[8px] py-[4px] relative rounded-[6px]" style={{ backgroundColor: sdk.statusBg, borderColor: sdk.statusColor }}>
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[10px] whitespace-nowrap uppercase" style={{ color: sdk.statusColor }}>
                  {sdk.status}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-[12px] items-start relative text-[13px] w-full">
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                  Runtime Version
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-white">
                  {sdk.runtime}
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start justify-between relative w-full gap-2">
                <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                  API Compatibility
                </p>
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative" style={{ color: sdk.apiCompatColor }}>
                  {sdk.apiCompat}
                </p>
              </div>
            </div>
            
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec9-line.svg" />
              </div>
            </div>
            
            <div className="flex flex-col gap-[8px] items-start relative w-full flex-grow">
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[14px] text-white whitespace-nowrap">
                Upgrade Action
              </h4>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] w-full not-italic relative text-[#aab3c4] text-[13px]">
                {sdk.upgradeAction}
              </p>
            </div>
            
            <div className="bg-[#0a0d14] border border-[#232b3a] border-solid flex flex-col items-start p-[16px] relative rounded-[8px] w-full overflow-x-auto">
              <code className="font-[family-name:var(--font-space-grotesk)] font-normal leading-[20px] relative text-[#34d4ca] text-[13px] whitespace-nowrap">
                {sdk.installCmd}
              </code>
            </div>
            
            <a href="#sdk-changelog" className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#4a8cfb] text-[13px] hover:underline underline-offset-2 mt-auto">
              {sdk.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
