import React from 'react';

export default function SectionDirectAnswer() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-[132px] py-[32px] lg:py-[40px] bg-white">
      <div className="border-l-2 border-[#3fc9bd] border-solid pl-[28px] flex flex-col gap-[16px] max-w-[820px]">
        <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] leading-[1.4] tracking-[-0.25px] m-0">
          What is ZoikoStream Developer Relations?
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0">
          ZoikoStream Developer Relations helps developers learn, build and connect around the ZoikoStream platform. It routes developers to documentation, APIs, SDKs, examples, community, events, open-source resources and product feedback, while keeping customer support, security reports, enterprise sales and partner applications in their dedicated channels.
        </p>
      </div>
    </section>
  );
}
