import React from 'react';
import { ArrowRightIcon } from './icons';

const imgBg = "/images/github/lifecycle-background.webp";

const flow = [
  { title: 'Current', note: 'Verified and discoverable', border: 'border-[#34d399]' },
  { title: 'Review required', note: 'Change detected', border: 'border-[#fbbf24]' },
  { title: 'Suppressed', note: 'Hidden from navigation', border: 'border-[#334155]' },
  { title: 'Withdrawn', note: 'Removed from registry', border: 'border-[#f87171]' },
];

const triggers = [
  { image: "/images/github/lifecycle-repository-archived.webp", title: 'Repository archived', description: 'Remove it from active discovery and preserve the last verified registry record.' },
  { image: "/images/github/lifecycle-ownership-transferred.webp", title: 'Ownership transferred', description: 'Require a fresh ownership and destination review before the link can return.' },
  { image: "/images/github/lifecycle-private-or-deleted.webp", title: 'Private or deleted', description: 'Suppress inaccessible destinations immediately; do not strand visitors at a dead end.' },
  { image: "/images/github/lifecycle-security-hold.webp", title: 'Security hold', description: 'Withdraw the destination while security owners assess exposure and remediation.' },
  { image: "/images/github/lifecycle-license-change.webp", title: 'License change', description: 'Revalidate legal eligibility and repository labeling before publication resumes.' },
  { image: "/images/github/lifecycle-redirect-changed.webp", title: 'Redirect changed', description: 'Verify the final destination, ownership, and purpose instead of trusting the redirect.' },
];

export default function LifecycleSection() {
  return (
    <section className="bg-white border-b border-[#e5e7eb] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:py-[112px] relative w-full overflow-hidden" data-name="Lifecycle-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[940px]">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0f172a] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
            Keep every GitHub destination current—or remove it.
          </h2>
          <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-[28px] lg:max-w-[720px]">
            Registry trust is event-driven. Material repository changes move a destination out of circulation until its
            ownership, access, legal, and security posture are verified again.
          </p>
        </div>

        <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch lg:items-center p-[20px] lg:p-[32px] rounded-[16px] w-full">
          {flow.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className={`bg-white border ${step.border} border-solid flex flex-col gap-[4px] px-[16px] py-[14px] rounded-[8px] flex-1 min-w-0`}>
                <span className="font-sans font-bold text-[#0f172a] text-[14px]">{step.title}</span>
                <span className="font-inter font-normal text-[#475569] text-[13px]">{step.note}</span>
              </div>
              {index < flow.length - 1 && (
                <ArrowRightIcon className="size-[16px] text-[#64748b] shrink-0 self-center rotate-90 lg:rotate-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
          {triggers.map((trigger) => (
            <div
              key={trigger.title}
              className="bg-white border border-[#e5e7eb] border-solid flex flex-col items-start rounded-[12px] overflow-hidden lg:min-h-[286px]"
            >
              <img alt="" className="h-[118px] object-cover w-full" src={trigger.image} />
              <div className="flex flex-col gap-[10px] items-start p-[24px] w-full">
                <p className="font-sans font-bold text-[#0f172a] text-[17px]">{trigger.title}</p>
                <p className="font-inter font-normal text-[#475569] text-[14px] leading-[22px]">{trigger.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
