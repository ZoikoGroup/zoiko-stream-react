import React from 'react';

export default function DirectAnswerSection() {
  return (
    <section className="relative w-full px-6 py-20 md:px-12 lg:px-[132px] py-[60px] bg-white">
      <div className="border-l-2 border-[#3fc9bd] border-solid pl-[28px] flex flex-col gap-[16px]">
        <h2 className="font-sora font-bold text-[#32353c] text-[20px] sm:text-[24px] leading-[1.6] tracking-[-0.24px]">
          What is the ZoikoStream Newsroom?
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15.5px] leading-[1.6] max-w-[1120px]">
          The ZoikoStream Newsroom is the official source for material company, product, partnership and Live Events
          <br className="hidden lg:block" />
          announcements. It also links to selected independent media coverage with clear publisher attribution. Service
          <br className="hidden lg:block" />
          incidents belong in System Status, security advisories in the Trust Center, and granular product changes in
          <br className="hidden lg:block" />
          developer or product update channels.
        </p>
      </div>
    </section>
  );
}
