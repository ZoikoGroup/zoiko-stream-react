import React from 'react';

export default function SectionFeedback() {
  return (
    <div className="bg-[#f7f9fb] w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
        <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
          Product feedback
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2] mb-[16px]">
        Help improve the developer experience.
      </h2>
      <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0 mb-[32px] max-w-[720px]">
        Share feedback about your developer experience, APIs, SDKs, documentation, examples or workflows.
      </p>

      <div className="bg-[#f7f9fb] rounded-[18px] w-full grid grid-cols-1 md:grid-cols-2 gap-[32px] p-[36px] border border-[#dde2ea]">
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-sora font-bold text-[#32353c] text-[18px] tracking-[-0.18px] m-0">
            What feedback does
          </h3>
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
            Feedback helps ZoikoStream understand developer needs and can influence future direction and prioritization discussions.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-sora font-bold text-[#32353c] text-[18px] tracking-[-0.18px] m-0">
            What feedback doesn&apos;t do
          </h3>
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0">
            Submission does not create a support ticket, a roadmap commitment or a delivery date. If you have an outage, account or billing issue, use Support instead.
          </p>
        </div>
      </div>
    </div>
  );
}
