import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/audience-access-section-bg.png";
const imgControlVisual = "/images/public-civic-institutions/audience-access-control-visual.png";
const imgBgBlob1 = "/images/public-civic-institutions/audience-access-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/audience-access-bg-blob-2.svg";
const imgArrowRight = "/images/public-civic-institutions/audience-access-icon-arrow-right.svg";

const MECHANISMS = [
  { title: "IP / Geo-Fencing", tag: "Infrastructure Gate" },
  { title: "SSO / SAML 2.0 Integration", tag: "Identity Provider" },
  { title: "Unique Tokenized Embeds", tag: "Token Gate" },
  { title: "SMS / Email verification OTP", tag: "Two-Factor Gateway" },
];

const INTENT_CARDS = [
  { title: "Public-facing", tag: "Public", tone: "green" as const, description: "Intended for the general public without registration barriers." },
  { title: "Controlled", tag: "Verified", tone: "green" as const, description: "Restricted to verified public members, registered residents, or staff." },
  { title: "Mixed", tag: "Hybrid", tone: "green" as const, description: "Public delivery with controlled interactive segments or executive sessions." },
  { title: "Embargoed", tag: "Deferred", tone: "green" as const, description: "Held from release until explicit verification or time conditions are met." },
  { title: "Restricted", tag: "Private", tone: "green" as const, description: "Private proceedings protected under legal non-disclosure mandates." },
  { title: "Not decided", tag: "Draft", tone: "amber" as const, description: "Default safe state. Retains internal-only status until classified." },
];

const TONE_CLASSES = {
  green: "bg-[rgba(16,185,129,0.08)] border-[rgba(16,185,129,0.2)] text-[#10b981]",
  amber: "bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.2)] text-[#f59e0b]",
};

const TIMELINE = [
  { title: "Draft / Recorded", subtitle: "Not evaluated" },
  { title: "Under Review", subtitle: "Authority verify" },
  { title: "Approved / Scheduled", subtitle: "Eligibility gate" },
  { title: "Live / Broadcast", subtitle: "Secure playback" },
  { title: "Archived", subtitle: "Compliance logged" },
];

export default function SectionAudienceAccess() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-181px] size-[420px] top-[-96px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[49px] right-[-185px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Separate audience intent from access mechanism
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Audience intent defines who should view. Access mechanism implements the technical verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] w-full">
          <div className="flex flex-col gap-[56px] items-start">
            <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full">
              <p className="font-sans font-bold text-[#0f1b2d] text-[22px] m-0 whitespace-nowrap">Access Mechanisms</p>
              <p className="font-sans font-normal text-[#4f5e74] text-[14px] leading-[1.62] m-0 w-full">
                Enforce audience intent with secure, auditable gateway pipelines.
              </p>
              <div className="flex flex-col gap-[16px] items-start w-full">
                {MECHANISMS.map((mech) => (
                  <div key={mech.title} className="bg-white border border-[#e1e6eb] border-solid rounded-[8px] p-[16px] flex items-center justify-between w-full gap-[12px]">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0">{mech.title}</p>
                    <p className="font-mono text-[#4f5e74] text-[11px] m-0 whitespace-nowrap">{mech.tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[16px] w-full aspect-[555/223] overflow-hidden">
              <img alt="Access control visualization" className="w-full h-full object-cover" src={imgControlVisual} />
            </div>
          </div>

          <div className="flex flex-col gap-[24px] items-start">
            <p className="font-sans font-bold text-[#0f1b2d] text-[22px] m-0 w-full">Audience Intent Categories</p>
            <div className="flex flex-col gap-[8px] items-start w-full">
              {INTENT_CARDS.map((card) => (
                <div key={card.title} className="bg-white border border-[#e1e6eb] border-solid rounded-[12px] p-[20px] flex flex-col gap-[12px] items-start w-full">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 whitespace-nowrap">{card.title}</p>
                    <div className={`border border-solid rounded-[4px] px-[12px] py-[4px] ${TONE_CLASSES[card.tone]}`}>
                      <p className="font-mono font-bold text-[11px] uppercase m-0 whitespace-nowrap">{card.tag}</p>
                    </div>
                  </div>
                  <p className="font-sans font-normal text-[#4f5e74] text-[14px] leading-[1.62] m-0 w-full">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">Governed Publication State Transitions</p>
          <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[12px] items-start lg:items-center w-full overflow-x-auto">
            {TIMELINE.map((step, index) => (
              <div key={step.title} className="flex-1 flex gap-[12px] items-center w-full lg:w-auto min-w-[140px]">
                <div className="flex-1 flex flex-col gap-[6px] items-start min-w-px">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 whitespace-nowrap">{step.title}</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[11px] m-0 whitespace-nowrap">{step.subtitle}</p>
                </div>
                {index < TIMELINE.length - 1 && (
                  <img alt="" className="hidden lg:block h-[12px] w-[20px] shrink-0" src={imgArrowRight} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
