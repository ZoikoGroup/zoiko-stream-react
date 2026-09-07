import React from 'react';

const imgBg = "/images/responsible-disclosure/disclosure-coordination-section.png";

const cards = [
  {
    title: "Mutual Agreement",
    body: "Vulnerability details must remain strictly confidential until a patch has been fully deployed across all production environments. Public timelines and advisory drafts are established collaboratively before release.",
  },
  {
    title: "Unilateral Disclosure Void",
    body: "Premature public disclosure, sharing details on social channels, or publishing exploit scripts without explicit written authorization void all safe harbor protections and disqualify the submission from rewards.",
  },
];

export default function DisclosureCoordinationSection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Disclosure-Coordination-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Disclosure Coordination Boundary
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            We believe in transparency. We coordinate public disclosure after mitigation, following mutually agreed
            timelines.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 relative shrink-0 w-full" data-name="Coordination-Grid">
          {cards.map((card) => (
            <div key={card.title} className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start p-[20px] sm:p-[28px] relative rounded-[16px] shrink-0" data-name="Coordination-Card">
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#eef1f6] text-[19px]">
                {card.title}
              </p>
              <p className="[word-break:break-word] font-sans font-normal leading-[22px] text-[#aab3c4] text-[13.5px] w-full">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
