import React from 'react';

const imgBg = "/images/responsible-disclosure/safe-harbor-section.png";

const cards = [
  {
    icon: "/images/responsible-disclosure/shield-teal.svg",
    title: "Safe Harbor",
    body: "Any protections or authorization depend entirely on the current approved policy and rules of engagement. Exact Legal-approved terms render here when established. Applicability conditions and specific exclusions apply to all testing activities.",
  },
  {
    icon: "/images/responsible-disclosure/award.svg",
    title: "Bounty & Rewards",
    body: "Bounty program details, target payouts, and review matrices appear here only when an active, approved commercial program exists. The word researcher does not imply payment or financial compensation guarantees.",
  },
];

export default function SafeHarborSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[110px] relative w-full overflow-hidden" data-name="Safe-Harbor-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[36px] sm:gap-[56px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <p className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[12px] tracking-[1px] uppercase">
            Safe Harbor &amp; Rewards
          </p>
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Legal Protection and Bounty Program
          </h2>
        </div>
        <div className="gap-6 lg:gap-12 grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full" data-name="Card-Grid">
          {cards.map((card) => (
            <div key={card.title} className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[20px] items-start p-[24px] sm:p-[32px] relative rounded-[16px] shrink-0" data-name="Legal-Card">
              <img alt="" className="block max-w-none size-[32px]" src={card.icon} />
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#eef1f6] text-[20px] sm:text-[22px]">
                {card.title}
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[24px] text-[#aab3c4] text-[14px] w-full">
                {card.body}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex items-center justify-center p-[20px] relative rounded-[8px] shrink-0 w-full">
          <p className="[word-break:break-word] font-sans font-normal leading-[20px] text-[#aab3c4] text-[12px] text-center">
            *This page does not create additional legal rights or binding covenants beyond the current approved
            security policy.
          </p>
        </div>
      </div>
    </div>
  );
}
