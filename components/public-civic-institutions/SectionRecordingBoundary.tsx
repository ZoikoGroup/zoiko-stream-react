import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/recording-boundary-section-bg.png";
const imgDotActive = "/images/public-civic-institutions/recording-boundary-dot-active.svg";
const imgDotInactive = "/images/public-civic-institutions/recording-boundary-dot-inactive.svg";

const LIFECYCLE_STEPS = [
  { number: 1, title: "Authorize", subtitle: "Verify Authority" },
  { number: 2, title: "Capture", subtitle: "Audio/Video Ingest" },
  { number: 3, title: "Register", subtitle: "Catalog Metadata" },
  { number: 4, title: "Qualify", subtitle: "Replay Check" },
  { number: 5, title: "Accessibility", subtitle: "Closed Captioning" },
  { number: 6, title: "Decision", subtitle: "Publish/Restrict" },
  { number: 7, title: "Replay", subtitle: "Citizen Access" },
  { number: 8, title: "Handoff", subtitle: "Preservation" },
];

const STATE_CARDS = [
  {
    label: "STEP 1: RECORDING DECISION STATE",
    states: [
      { title: "Authorized", description: "Explicit public agenda record permission configured", active: true },
      { title: "Ad-hoc Capture", description: "Operator initiated capture without agenda link", active: false },
      { title: "Suppressed", description: "Explicit privacy block or closed executive session", active: false },
    ],
  },
  {
    label: "STEP 2: CAPTURE OUTCOME STATE",
    states: [
      { title: "Complete", description: "Uninterrupted stream stored with verified index", active: true },
      { title: "Fragmented", description: "Local transit loss; partial stream recovered", active: false },
      { title: "Capture Fault", description: "Hardware or origin failure; recovery log generated", active: false },
    ],
  },
  {
    label: "STEP 3: REPLAY READINESS STATE",
    states: [
      { title: "Draft Archive", description: "Internal review only; captions processing", active: true },
      { title: "Published Public", description: "Released for open access with compliant controls", active: false },
      { title: "Restricted View", description: "Access authorized only for verified record clerks", active: false },
    ],
  },
];

export default function SectionRecordingBoundary() {
  return (
    <div className="border-t border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(15,27,45,0.77)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="border border-[#4ecdc4] border-solid rounded-[100px] px-[12px] py-[6px]">
            <p className="font-sans font-bold text-[#4ecdc4] text-[11px] tracking-[1px] uppercase m-0 whitespace-nowrap">
              Operational Lifecycle Governance
            </p>
          </div>
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            A recording can exist without being the official record
          </h2>
          <p className="font-sans font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Clarify decision gates across the entire livestream and replay lifecycle. Replay publication is a separate decision.
          </p>
        </div>

        <div className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[20px] lg:p-[28px] w-full overflow-x-auto">
          <div className="flex items-center gap-[12px] min-w-[900px] lg:min-w-0">
            {LIFECYCLE_STEPS.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-center gap-[12px]">
                <div className="flex flex-1 flex-col gap-[8px] items-center min-w-0">
                  <div className="bg-[#1e293b] border border-[#232b3a] border-solid rounded-[20px] flex items-center justify-center shrink-0 size-[40px]">
                    <p className="font-sans font-bold text-[#4ecdc4] text-[14px] m-0">{step.number}</p>
                  </div>
                  <p className="font-sans font-bold text-white text-[14px] text-center m-0 whitespace-nowrap">{step.title}</p>
                  <p className="font-sans font-normal text-[#aab3c4] text-[10px] text-center m-0 whitespace-nowrap">{step.subtitle}</p>
                </div>
                {index < LIFECYCLE_STEPS.length - 1 && (
                  <div className="bg-[#232b3a] h-[2px] flex-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] w-full">
          {STATE_CARDS.map((card) => (
            <div key={card.label} className="bg-[rgba(16,21,30,0.8)] border-[1.5px] border-[#232b3a] border-solid rounded-[12px] p-[28px] flex flex-col gap-[20px] items-start">
              <p className="font-sans font-bold text-[#4ecdc4] text-[12px] tracking-[1px] uppercase m-0 whitespace-nowrap">{card.label}</p>
              <div className="flex flex-col gap-[12px] items-start w-full">
                {card.states.map((state) => (
                  <div
                    key={state.title}
                    className={`border border-solid rounded-[8px] p-[12px] flex gap-[12px] items-center w-full ${
                      state.active ? "bg-[rgba(78,205,196,0.06)] border-[#4ecdc4]" : "bg-[#182030] border-[#232b3a]"
                    }`}
                  >
                    <img alt="" className="shrink-0 size-[8px]" src={state.active ? imgDotActive : imgDotInactive} />
                    <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                      <p className="font-sans font-bold text-white text-[14px] m-0 whitespace-nowrap">{state.title}</p>
                      <p className="font-sans font-normal text-[#aab3c4] text-[12px] m-0">{state.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
