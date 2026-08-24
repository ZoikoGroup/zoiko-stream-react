import React from 'react';

const imgSectionBg = "/images/live-product-video/observability-section-bg.png";
const imgCheck = "/images/live-product-video/observability-icon-check.svg";
const imgAlertCircle = "/images/live-product-video/observability-icon-alert-circle.svg";

const SIGNAL_CARDS = [
  { title: "Control Events", description: "Created, updated, start/stop requested.", rule: "Event names must be authoritative." },
  { title: "Media State", description: "Source connected/lost, receiving, degraded, ended.", rule: "Use current timestamps." },
  { title: "Playback", description: "Started/failed, buffering, authorization outcome.", rule: "Bounded aggregate events only." },
  { title: "Recording/Replay", description: "Capture state, asset registered, replay ready.", rule: "No content titles in analytics." },
  { title: "Webhook Delivery", description: "Queued, delivered, retrying, failed, duplicate.", rule: "Tolerate out-of-order delivery." },
];

export default function SectionObservability() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.73)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.24] tracking-[-0.8px] m-0 w-full">
            Return operational truth to the product
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Telemetry should help teams operate the experience without leaking content or identity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[20px] w-full">
          {SIGNAL_CARDS.map((card) => (
            <div key={card.title} className="bg-[#0f1b2d] border-[1.5px] border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start">
              <p className="font-sans font-bold text-white text-[18px] m-0 w-full">{card.title}</p>
              <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{card.description}</p>
              <div className="h-px w-full bg-[#232b3a]" />
              <div className="flex flex-col gap-[4px] items-start w-full">
                <p className="font-sans font-bold text-[#34d4ca] text-[11px] tracking-[0.5px] m-0 whitespace-nowrap">GOVERNANCE RULE</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[12px] leading-[1.5] m-0 w-full">{card.rule}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-start w-full">
          <div className="flex flex-col gap-[20px] items-start flex-1 min-w-0 w-full">
            <div className="flex gap-[8px] items-center">
              <img alt="" className="size-[20px]" src={imgCheck} />
              <p className="font-sans font-bold text-white text-[18px] m-0 whitespace-nowrap">Allowed Telemetry</p>
            </div>
            <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">
              Authoritative state changes, performance KPIs, client platform parameters, latency diagnostics, and cryptographic workflow verification proofs.
            </p>
          </div>

          <div className="hidden lg:block w-px self-stretch bg-[#232b3a] shrink-0" />
          <div className="lg:hidden h-px w-full bg-[#232b3a]" />

          <div className="flex flex-col gap-[20px] items-start flex-1 min-w-0 w-full">
            <div className="flex gap-[8px] items-center">
              <img alt="" className="size-[20px]" src={imgAlertCircle} />
              <p className="font-sans font-bold text-white text-[18px] m-0 whitespace-nowrap">Prohibited Data (Denylist)</p>
            </div>
            <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">
              User identity details, video content titles, custom chat payloads, private stream content, and granular device geographical indicators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
