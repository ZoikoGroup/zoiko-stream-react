import React from 'react';

export default function Section5Scope() {
  const regions = [
    {
      name: "US East (N. Virginia)",
      code: "US-EAST-1",
      status: "99.99% Operational",
      img: "/images/developers-system-status/sec5-region1.png"
    },
    {
      name: "US West (Oregon)",
      code: "US-WEST-2",
      status: "99.98% Operational",
      img: "/images/developers-system-status/sec5-region2.png"
    },
    {
      name: "EU West (Ireland)",
      code: "EU-WEST-1",
      status: "100.00% Operational",
      img: "/images/developers-system-status/sec5-region3.png"
    },
    {
      name: "AP Southeast (Sydney)",
      code: "AP-SOUTHEAST-2",
      status: "99.95% Operational",
      img: "/images/developers-system-status/sec5-region4.png"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full opacity-40" src="/images/developers-system-status/sec5-bg.png" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.65)]" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
            Scope & coverage.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#aab3c4] text-base md:text-[18px] w-full max-w-[1000px] mx-auto md:mx-0">
            We monitor multiple environmental contexts and global deployment regions. Choose your target environment to check local nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start relative w-full">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-[#111622] border border-[#1e2638] border-solid flex flex-col items-start overflow-clip relative rounded-[12px] w-full hover:border-[#34d4ca] transition-colors duration-300">
              <div className="h-[120px] relative w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full" src={region.img} />
              </div>
              <div className="flex flex-col gap-[12px] items-start p-[20px] relative w-full">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[16px] text-white">
                  {region.name}
                </p>
                <div className="flex items-center justify-between not-italic relative w-full">
                  <p className="font-[family-name:var(--font-inter)] font-normal relative text-[#34d4ca] text-[12px]">
                    {region.code}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-medium relative text-[#10b981] text-[13px]">
                    {region.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
