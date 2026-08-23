import React from 'react';

const imgDocsApis = "/images/developer-relations/icon-docs-apis.svg";
const imgSdksExamples = "/images/developer-relations/icon-sdks-examples.svg";
const imgCommunity = "/images/developer-relations/icon-community.svg";
const imgEventsLearning = "/images/developer-relations/icon-events-learning.svg";
const imgOpenSource = "/images/developer-relations/icon-open-source.svg";

export default function SectionEcosystemBento() {
  return (
    <div className="bg-white w-full px-6 lg:px-[132px] pt-[80px] lg:pt-[120px] pb-[48px] lg:pb-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        <div
          className="lg:row-span-2 border border-[rgba(93,221,214,0.3)] rounded-[14px] p-[22px] flex flex-col gap-[14px]"
          style={{ backgroundImage: 'linear-gradient(160deg, rgba(93,221,214,0.08) 0%, rgba(109,166,250,0.05) 100%)' }}
        >
          <div className="bg-[#f1f4f8] rounded-[10px] size-[38px] flex items-center justify-center">
            <img alt="" className="size-[19px]" src={imgDocsApis} />
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[19px] tracking-[-0.19px] m-0">Docs & APIs</h3>
          <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6] m-0">
            Guides, quickstarts, and the full API reference for building on ZoikoStream.
          </p>
          <span className="font-inter font-bold text-[#5b8def] text-[12.5px]">Read the docs →</span>
        </div>

        <div className="border border-[#dde2ea] rounded-[14px] p-[22px] flex flex-col gap-[12px] bg-white">
          <div className="bg-[#f1f4f8] rounded-[10px] size-[38px] flex items-center justify-center">
            <img alt="" className="size-[19px]" src={imgSdksExamples} />
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0">SDKs & Examples</h3>
          <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6] m-0">
            Official SDKs and sample apps for common integration patterns.
          </p>
          <span className="font-inter font-bold text-[#5b8def] text-[12.5px]">Browse SDKs →</span>
        </div>

        <div className="border border-[#dde2ea] rounded-[14px] p-[22px] flex flex-col gap-[12px] bg-white">
          <div className="bg-[#f1f4f8] rounded-[10px] size-[38px] flex items-center justify-center">
            <img alt="" className="size-[19px]" src={imgCommunity} />
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0">Community</h3>
          <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6] m-0">
            Ask, answer and share with other developers in official spaces.
          </p>
          <span className="font-inter font-bold text-[#5b8def] text-[12.5px]">Connect →</span>
        </div>

        <div className="border border-[#dde2ea] rounded-[14px] p-[22px] flex flex-col gap-[12px] bg-white">
          <div className="bg-[#f1f4f8] rounded-[10px] size-[38px] flex items-center justify-center">
            <img alt="" className="size-[19px]" src={imgEventsLearning} />
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0">Events & Learning</h3>
          <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6] m-0">
            Technical sessions, office hours and workshops with the team.
          </p>
          <span className="font-inter font-bold text-[#5b8def] text-[12.5px]">View events →</span>
        </div>

        <div className="border border-[#dde2ea] rounded-[14px] p-[22px] flex flex-col gap-[12px] bg-white">
          <div className="bg-[#f1f4f8] rounded-[10px] size-[38px] flex items-center justify-center">
            <img alt="" className="size-[19px]" src={imgOpenSource} />
          </div>
          <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0">Open Source</h3>
          <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6] m-0">
            Official public repositories, contribution guides and licensing.
          </p>
          <span className="font-inter font-bold text-[#5b8def] text-[12.5px]">Explore →</span>
        </div>
      </div>
    </div>
  );
}
