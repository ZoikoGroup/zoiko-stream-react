import React from 'react';

export default function SectionDirectAnswer() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[132px] py-[48px] lg:py-[60px] bg-white">
      <div className="border-l-2 border-[#3fc9bd] border-solid pl-[28px] flex flex-col gap-[16px]">
        <h2 className="font-sora font-bold text-[#32353c] text-[22px] sm:text-[26px] leading-[1.6] tracking-[-0.26px]">
          What can enterprise teams discuss with ZoikoStream?
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15.5px] lg:text-[16px] leading-[1.6] max-w-[1120px]">
          Enterprise teams can use this page to discuss video platform architecture, APIs and integrations, live and on-demand delivery, migration, security and governance requirements, operational scale, procurement, enterprise support and commercial structure. If your requirement is primarily a single managed live event, use Live Events Inquiries. Existing customers needing technical help should use Support.
        </p>
      </div>
    </section>
  );
}
