import React from 'react';

const imgSectionBg = "/images/live-product-video/produce-deliver-section-bg.png";

const EVIDENCE_CARDS = [
  {
    title: "Approved Processing",
    description: "Media is prepared strictly through verified platform pipelines. Transcoding and compositing operations run inside audited compliance sandboxes.",
    evidenceGate: "Do not declare codecs, resolutions, or latency claims without current engineering telemetry reports.",
  },
  {
    title: "Audited Delivery",
    description: "Playback routing executes exclusively across approved edge network topologies with deterministic SLA metrics in active regions.",
    evidenceGate: "No universal accessibility or regional performance claims can be published without active latency registry logs.",
  },
  {
    title: "Player Compatibility",
    description: "The product application embeds custom playback engines designed to interact with low-latency segment buffers natively.",
    evidenceGate: "Explicit browser support lists and fallback matrix versions must correspond directly to test integration evidence.",
  },
];

const PIPELINE_STEPS = [
  { number: 1, title: "Configured", status: "Active", color: "#34d4ca" },
  { number: 2, title: "Source Expected", status: "Active", color: "#34d4ca" },
  { number: 3, title: "Receiving", status: "Active", color: "#34d4ca" },
  { number: 4, title: "Processing", status: "Degraded", color: "#f59e0b" },
  { number: 5, title: "Playback Available", status: "Active", color: "#34d4ca" },
  { number: 6, title: "Ended", status: "Unknown", color: "#6b7280" },
];

export default function Section7ProduceDeliver() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.83)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.19] tracking-[-1px] m-0 w-full">
            Keep processing and availability evidence-bounded
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Explain the media path without inventing implementation specifics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full">
          {EVIDENCE_CARDS.map((card) => (
            <div key={card.title} className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid rounded-[12px] p-[24px] lg:p-[32px] flex flex-col gap-[20px] items-start">
              <p className="font-sans font-bold text-white text-[22px] m-0 w-full">{card.title}</p>
              <p className="font-inter font-normal text-[#aab3c4] text-[14px] leading-[1.57] m-0 w-full">{card.description}</p>
              <div className="h-px w-full bg-[#232b3a]" />
              <div className="flex flex-col gap-[6px] items-start w-full">
                <p className="font-sans font-bold text-[#34d4ca] text-[12px] m-0 whitespace-nowrap">EVIDENCE GATE</p>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] leading-[1.38] m-0 w-full">{card.evidenceGate}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full">
          <p className="font-sans font-bold text-white text-[14px] tracking-[1px] m-0 whitespace-nowrap">MEDIA STATE PIPELINE</p>
          <div className="w-full overflow-x-auto">
            <div className="flex items-center min-w-[760px] lg:min-w-0 w-full">
              {PIPELINE_STEPS.map((step, index) => (
                <div key={step.number} className="flex flex-1 items-center min-w-0">
                  <div className="flex flex-col gap-[8px] items-center w-[110px] shrink-0">
                    <div className="rounded-[20px] flex items-center justify-center shrink-0 size-[40px]" style={{ backgroundColor: step.color }}>
                      <p className="font-sans font-bold text-[#0a0d14] text-[14px] m-0">{step.number}</p>
                    </div>
                    <p className="font-sans font-bold text-white text-[12px] text-center m-0 whitespace-nowrap">{step.title}</p>
                    <p className="font-inter font-normal text-[11px] text-center m-0 whitespace-nowrap" style={{ color: step.color }}>{step.status}</p>
                  </div>
                  {index < PIPELINE_STEPS.length - 1 && (
                    <div className="bg-[#232b3a] h-[2px] flex-1 min-w-[16px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
