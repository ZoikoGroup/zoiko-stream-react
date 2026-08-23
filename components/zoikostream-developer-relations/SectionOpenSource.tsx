import React from 'react';

const imgRepos = "/images/developer-relations/icon-official-repositories.svg";
const imgLicense = "/images/developer-relations/icon-license-guide.svg";

const ITEMS = [
  { icon: imgRepos, title: "Official repositories", description: "Verified Zoiko/ZoikoStream assets, each labeled with state (active, maintenance, experimental, deprecated).", link: "View repositories →" },
  { icon: imgLicense, title: "License & contribution guide", description: "Every project links its license and CONTRIBUTING guidance where contributions are accepted.", link: "Review guidelines →" },
];

export default function SectionOpenSource() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] py-[48px] lg:py-[64px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Open source
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[16px]">
        Explore and contribute to open source.
      </h2>
      <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0 mb-[40px] max-w-[820px]">
        Contribution journey: discover the repository → review license and guidance → search existing issues → follow contribution rules → submit through the repository&apos;s native workflow. Review and merge timing remain governed by that project.
      </p>

      <div className="w-full border-t border-[#dde2ea]">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="w-full py-[20px] border-b border-[#dde2ea] flex flex-col lg:flex-row lg:items-center gap-[16px]"
          >
            <div className="flex items-center gap-[16px] lg:w-[260px] lg:shrink-0">
              <div className="bg-white border border-[#dde2ea] rounded-[10px] size-[40px] flex items-center justify-center shrink-0">
                <img alt="" className="size-[18px]" src={item.icon} />
              </div>
              <h3 className="font-sora font-bold text-[#32353c] text-[15.5px] m-0">{item.title}</h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.5] m-0 flex-1">
              {item.description}
            </p>
            <span className="font-inter font-bold text-[#5b8def] text-[13.5px] whitespace-nowrap lg:text-right">
              {item.link}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
