import React from 'react';
import { DocumentIcon, HandoffIcon, UserIcon } from './icons';

const imgBg = "/images/github/principles-background.webp";

const principles = [
  {
    num: '01',
    Icon: UserIcon,
    image: "/images/github/principle-verified-destination.webp",
    title: 'Verified destination',
    description:
      'Publish GitHub links only from the governed repository registry, with ownership and review state visible before release.',
  },
  {
    num: '02',
    Icon: HandoffIcon,
    image: "/images/github/principle-external-handoff.webp",
    title: 'External handoff',
    description:
      'Set clear expectations before visitors leave ZoikoStream, including an external indicator, destination state, and accessible target.',
  },
  {
    num: '03',
    Icon: DocumentIcon,
    image: "/images/github/principle-no-invented-claims.webp",
    title: 'No invented claims',
    description:
      'Use attributable repository evidence. Never infer approval, support, security, or product readiness from a link alone.',
  },
];

export default function PrinciplesSection() {
  return (
    <section className="bg-white border-b border-[#e5e7eb] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:pt-[96px] lg:pb-[112px] relative w-full overflow-hidden" data-name="Principles-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-start lg:items-end w-full">
          <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[760px]">
            <h2 className="[word-break:break-word] font-sans font-bold text-[#0f172a] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
              Build trust before the click.
            </h2>
            <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-[28px]">
              GitHub is a governed destination—not a substitute for product documentation, support, or approval.
            </p>
          </div>
          <p className="font-inter font-normal text-[#475569] text-[14px] leading-[20px] lg:w-[288px] shrink-0">
            Every published link must remain attributable, current, and safe to follow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {principles.map(({ num, Icon, image, title, description }) => (
            <div
              key={num}
              className="bg-white border border-[#e5e7eb] border-solid flex flex-col items-start rounded-[16px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.08)] overflow-hidden"
            >
              <div className="h-[200px] lg:h-[210px] relative w-full overflow-hidden">
                <img alt="" className="absolute inset-0 object-cover size-full" src={image} />
                <div className="absolute left-[20px] top-[20px] bg-[rgba(255,255,255,0.95)] flex gap-[8px] items-center px-[12px] py-[8px] rounded-[999px]">
                  <Icon className="size-[16px] text-[#0f172a]" />
                  <span className="font-sans font-bold text-[#0f172a] text-[12px] tracking-[0.6px]">{num}</span>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start p-[24px] lg:p-[32px] w-full">
                <p className="font-sans font-bold text-[#0f172a] text-[20px] leading-[28px]">{title}</p>
                <p className="font-inter font-normal text-[#475569] text-[15px] lg:text-[16px] leading-[24px]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
