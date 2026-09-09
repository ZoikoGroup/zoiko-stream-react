import React from 'react';

const imgBg = "/images/responsible-disclosure/report-privacy-section.png";

const cards = [
  {
    title: "Sovereign Isolation",
    body: "Report files, reproduction traces, and researcher communications are stored on completely isolated storage volumes with strict access whitelists.",
  },
  {
    title: "No Marketing Abuse",
    body: "We never share contact emails with sales desks or third-party advertising partners. Your reporting relationship is strictly security-operational.",
  },
  {
    title: "Minimum Internal Access",
    body: "Only L1/L2 security coordinators and assigned core platform engineering owners receive clearance to read raw report parameters.",
  },
];

export default function ReportPrivacySection() {
  return (
    <div className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Report-Privacy-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.32)] inset-0" />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <div className="border border-[#00d4aa] border-solid flex items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="Eyebrow">
            <p className="font-mono font-bold leading-[normal] not-italic text-[#00d4aa] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
              Report Privacy
            </p>
          </div>
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#eef1f6] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Privacy and Security of Your Report
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#aab3c4] text-[15px] sm:text-[17px] w-full">
            We protect your identity and metadata with the same rigor we apply to our production customer environments.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative shrink-0 w-full" data-name="Privacy-Grid">
          {cards.map((card) => (
            <div key={card.title} className="bg-[rgba(16,21,30,0.85)] border border-[#232b3a] border-solid flex flex-col gap-[12px] items-start p-[20px] sm:p-[28px] relative rounded-[16px] shrink-0" data-name="Privacy-Card">
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
