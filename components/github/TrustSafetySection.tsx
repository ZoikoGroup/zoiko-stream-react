import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, CheckCircleIcon, ShieldIcon, XCircleIcon } from './icons';

const imgBg = "/images/github/trust-safety-background.webp";

const pillars = [
  { image: "/images/github/safety-ownership.webp", title: 'Ownership', description: 'Every surfaced repository identifies an accountable maintainer and a review path.' },
  { image: "/images/github/safety-legal.webp", title: 'Legal', description: 'Licensing and terms remain attributable to their canonical source—never inferred here.' },
  { image: "/images/github/safety-security.webp", title: 'Security', description: 'Security guidance links to the verified disclosure channel and current policy.' },
  { image: "/images/github/safety-support.webp", title: 'Support', description: 'Support routes distinguish maintained channels from community discussion.' },
  { image: "/images/github/safety-privacy.webp", title: 'Privacy', description: 'Data handling claims appear only when backed by a current, inspectable policy.' },
  { image: "/images/github/safety-supply-chain.webp", title: 'Supply chain', description: 'Dependencies, releases, and provenance stay visible for informed adoption decisions.' },
];

export default function TrustSafetySection() {
  return (
    <section
      id="trust-safety"
      className="bg-[#0a0d13] border-b border-[#1f2937] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:py-[112px] relative w-full overflow-hidden"
      data-name="Trust-Safety-Section"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.3]" src={imgBg} />
        <div className="absolute bg-[rgba(3,7,18,0.3)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start lg:items-end w-full">
          <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[760px]">
            <h2 className="[word-break:break-word] font-sans font-bold text-white text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
              Trust and safety, grounded in evidence.
            </h2>
            <p className="font-inter font-normal text-[#94a3b8] text-[16px] sm:text-[18px] leading-[28px]">
              Evaluate GitHub destinations through accountable ownership, current policies, and inspectable repository
              signals—not invented assurances.
            </p>
          </div>
          <div className="bg-[rgba(15,23,42,0.8)] border border-[#1f2937] border-solid flex gap-[8px] items-center px-[14px] py-[10px] rounded-[999px] shrink-0">
            <ShieldIcon className="size-[16px] text-[#34d399]" />
            <span className="font-sans font-medium text-white text-[14px]">Inspectable evidence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[rgba(24,24,27,0.9)] border border-[#1f2937] border-solid flex flex-col items-start rounded-[12px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.08)] overflow-hidden lg:min-h-[300px]"
            >
              <img alt="" className="h-[142px] object-cover w-full" src={pillar.image} />
              <div className="flex flex-col gap-[8px] items-start p-[24px] w-full">
                <div className="flex gap-3 justify-between items-center w-full">
                  <p className="font-sans font-bold text-white text-[20px] leading-[28px]">{pillar.title}</p>
                  <CheckCircleIcon className="size-[20px] text-[#2dd4bf] shrink-0" />
                </div>
                <p className="font-inter font-normal text-[#94a3b8] text-[14px] leading-[20px]">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0f172a] border border-l-4 border-[#2dd4bf] border-solid flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center p-[24px] sm:p-[32px] rounded-[16px] w-full">
          <div className="bg-[rgba(45,212,191,0.1)] flex items-center justify-center rounded-[12px] size-[56px] shrink-0">
            <XCircleIcon className="size-[24px] text-[#2dd4bf]" />
          </div>
          <div className="flex flex-col gap-[8px] items-start flex-1">
            <p className="font-sans font-bold text-white text-[20px] sm:text-[22px]">Responsible disclosure</p>
            <p className="font-inter font-normal text-[#94a3b8] text-[15px] sm:text-[16px] leading-[24px]">
              Report potential vulnerabilities through the repository&rsquo;s verified security policy or designated
              private disclosure channel. Do not publish sensitive findings in public Issues.
            </p>
          </div>
          <Link
            href="/responsible-disclosure"
            className="bg-gradient-to-r from-[#00d4aa] to-[#4c86ff] flex gap-[8px] items-center px-[20px] py-[12px] rounded-[8px] shrink-0 transition-opacity hover:opacity-90"
          >
            <span className="font-sans font-bold text-[#030712] text-[14px]">Review security policy</span>
            <ArrowUpRightIcon className="size-[14px] text-[#030712]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
