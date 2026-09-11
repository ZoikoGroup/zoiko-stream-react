import React from 'react';
import { CheckIcon } from './icons';

const imgBg = "/images/github/validation-background.webp";
const imgStrip = "/images/github/publication-workflow-strip.webp";

const stats = [
  { value: '60', label: 'QA scenarios', description: 'Coverage across navigation, registry, lifecycle, accessibility, and failure handling.' },
  { value: '60', label: 'Release-blocking checks', description: 'Every required check must report a passing result before the gate can advance.' },
  { value: '0', label: 'Approval claims', description: 'Validation evidence informs authorized review; it does not approve the release itself.' },
];

const scenarioGroups = [
  { title: 'Destination integrity', description: 'Navigation placement, external indicator, handoff copy, focus order, and responsive behavior.' },
  { title: 'Registry integrity', description: 'Trust state, ownership, canonical source, lifecycle signals, and suppression behavior.' },
  { title: 'Failure handling', description: 'Unavailable destinations, redirects, private or deleted repositories, and safe fallback states.' },
];

const workflow = [
  { title: 'Evidence assembled', description: 'Owners attach registry and QA evidence.' },
  { title: 'Checks executed', description: 'All 60 blocking checks return results.' },
  { title: 'Approval gate', description: 'Authorized reviewers make the decision.', active: true },
  { title: 'Publish or hold', description: 'Release only after explicit approval.' },
];

export default function ValidationReleaseSection() {
  return (
    <section className="bg-white border-b border-[#e5e7eb] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:py-[112px] relative w-full overflow-hidden" data-name="Validation-Release-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start lg:items-end w-full">
          <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[760px]">
            <h2 className="[word-break:break-word] font-sans font-bold text-[#0f172a] text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[46px]">
              Release evidence before the destination ships.
            </h2>
            <p className="font-inter font-normal text-[#475569] text-[16px] sm:text-[18px] leading-[28px]">
              A transparent validation package makes readiness inspectable. Counts describe the test plan—not approval
              or a production guarantee.
            </p>
          </div>
          <span className="bg-[#fffbeb] border border-[#fbbf24] border-solid flex gap-[8px] items-center px-[16px] py-[10px] rounded-[999px] shrink-0">
            <span className="bg-[#fbbf24] rounded-full size-[8px]" />
            <span className="font-sans font-bold text-[#0f172a] text-[14px]">Approval not yet asserted</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#e5e7eb] border-solid flex flex-col gap-[6px] p-[24px] rounded-[12px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.06)]">
              <span className="font-sans font-medium text-[#0f172a] text-[36px] leading-[1.1]">{stat.value}</span>
              <span className="font-sans font-bold text-[#0f172a] text-[16px]">{stat.label}</span>
              <span className="font-inter font-normal text-[#475569] text-[14px] leading-[22px]">{stat.description}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_520px] gap-[24px] items-start w-full">
          <div className="bg-white border border-[#e5e7eb] border-solid flex flex-col gap-[24px] p-[24px] sm:p-[32px] rounded-[16px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.06)] xl:my-auto">
            <p className="font-sans font-medium text-[#0f172a] text-[22px]">QA scenario groups</p>
            {scenarioGroups.map((group) => (
              <div key={group.title} className="flex gap-[16px] items-start">
                <span className="bg-[#ecfdf5] flex items-center justify-center rounded-full size-[28px] shrink-0">
                  <CheckIcon className="size-[14px] text-[#2dd4bf]" />
                </span>
                <div className="flex flex-col gap-[4px]">
                  <span className="font-sans font-bold text-[#0f172a] text-[16px]">{group.title}</span>
                  <span className="font-inter font-normal text-[#475569] text-[14px] leading-[22px]">{group.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0f172a] flex flex-col gap-[16px] p-[24px] sm:p-[32px] rounded-[16px]">
            <img alt="" className="h-[76px] object-cover rounded-[8px] w-full" src={imgStrip} />
            <p className="font-sans font-bold text-white text-[22px] mt-[8px]">Publication workflow</p>
            <p className="font-inter font-normal text-[#94a3b8] text-[14px] leading-[22px]">
              The final decision remains a human, attributable governance action.
            </p>
            <ol className="flex flex-col gap-[8px] mt-[8px]">
              {workflow.map((step, index) => (
                <li
                  key={step.title}
                  className={`${step.active ? 'border-[#2dd4bf] bg-[#132033]' : 'border-[#1f2937] bg-[#111827]'} border border-solid flex gap-[16px] items-center p-[16px] rounded-[8px]`}
                >
                  <span
                    className={`${step.active ? 'border-[#2dd4bf]' : 'border-[#1f2937] bg-[#1e293b]'} border-2 border-solid flex items-center justify-center rounded-full size-[30px] shrink-0 font-sans font-bold text-white text-[13px]`}
                  >
                    {index + 1}
                  </span>
                  <span className="flex flex-col gap-[2px]">
                    <span className="font-sans font-bold text-white text-[14px]">{step.title}</span>
                    <span className="font-inter font-normal text-[#94a3b8] text-[13px]">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
