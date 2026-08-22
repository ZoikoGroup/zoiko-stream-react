import React from 'react';

const imgDocs = "/images/developer-relations/icon-developer-documentation.svg";
const imgApi = "/images/developer-relations/icon-api-reference.svg";
const imgSdks = "/images/developer-relations/icon-sdks-examples-rail.svg";
const imgChangelog = "/images/developer-relations/icon-changelog.svg";
const imgStatus = "/images/developer-relations/icon-system-status.svg";
const imgTrust = "/images/developer-relations/icon-trust-center.svg";
const imgSupport = "/images/developer-relations/icon-support.svg";

const RESOURCES = [
  { icon: imgDocs, title: "Developer documentation", description: "Guides, quickstarts and implementation walkthroughs.", link: "Read the docs →" },
  { icon: imgApi, title: "API reference", description: "Endpoints, schemas, authentication and request contracts.", link: "Explore API reference →" },
  { icon: imgSdks, title: "SDKs & examples", description: "Official, maintained SDKs and sample applications.", link: "Browse SDKs & examples →" },
  { icon: imgChangelog, title: "Changelog", description: "Public product and API change history.", link: "View changelog →" },
  { icon: imgStatus, title: "System Status", description: "Governed public production status.", link: "Check system status →" },
  { icon: imgTrust, title: "Trust Center", description: "Security, privacy and reliability evidence for evaluators.", link: "Review trust information →" },
  { icon: imgSupport, title: "Support", description: "Existing-customer troubleshooting for accounts and production issues.", link: "Get technical support →" },
];

export default function SectionResourceRail() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Self-service first
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[16px]">
        Developer resource rail.
      </h2>
      <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0 mb-[40px] lg:mb-[48px] max-w-[720px]">
        Start here — most developer questions are answered without contacting anyone.
      </p>

      <div className="w-full border-t border-[#dde2ea]">
        {RESOURCES.map((item) => (
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
