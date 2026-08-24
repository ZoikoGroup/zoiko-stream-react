import React from 'react';

const imgSectionBg = "/images/live-product-video/create-configure-section-bg.png";
const imgCheck = "/images/live-product-video/create-configure-icon-check.svg";

const CONFIG_FIELDS = [
  { label: "Workflow ID", value: "wf_live_prod_v4_39281" },
  { label: "Environment", value: "production-secure-edge" },
  { label: "Display Name", value: "Continuous App Feature Live Stream" },
  { label: "Source Expectation", value: "RTMP ingest, dual fallback active" },
  { label: "Audience Intent", value: "SAML token gated, moderate scale" },
  { label: "Playback Policy Reference", value: "sec_policy_token_v2" },
  { label: "Recording Intent", value: "Durable VOD, archive on stop" },
  { label: "Webhook Destination", value: "https://api.yourbrand.com/v1/video" },
  { label: "Metadata schema", value: "strict_app_ctx_payload_schema_v1" },
];

const STATES = [
  { number: "01", title: "Draft", description: "Initial policy parameters set", active: false },
  { number: "02", title: "Validating", description: "Ingress security rules testing", active: false },
  { number: "03", title: "Ready", description: "Edge active, awaiting ingress payload", active: true },
  { number: "04", title: "Blocked", description: "Rule collision, stream disabled", active: false },
  { number: "05", title: "Superseded", description: "Policy replaced by newer version", active: false },
];

export default function SectionCreateConfigure() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.52)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[42px] leading-[1.14] m-0 w-full">
            Define the live workflow before the source arrives
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[1.56] m-0 w-full">
            Separate configuration truth from live media truth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px] items-start w-full">
          <div className="bg-[#0f1b2d] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start flex-1 min-w-0 w-full">
            <p className="font-sans font-bold text-white text-[18px] m-0 whitespace-nowrap">Configuration Object</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {CONFIG_FIELDS.map((field) => (
                <div key={field.label} className="bg-[#0a0d14] border border-[#232b3a] border-solid rounded-[8px] p-[14px] flex flex-col sm:flex-row sm:items-center justify-between gap-[6px] sm:gap-[12px] w-full">
                  <p className="font-sans font-bold text-[#34d4ca] text-[13px] m-0">{field.label}</p>
                  <p className="font-inter font-normal text-white text-[13px] m-0 break-all">{field.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f1b2d] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[24px] items-start w-full lg:w-[480px] shrink-0">
            <p className="font-sans font-bold text-white text-[18px] m-0 whitespace-nowrap">Configuration States</p>
            <div className="flex flex-col gap-[16px] items-start w-full">
              {STATES.map((state) => (
                <div
                  key={state.number}
                  className={`flex gap-[16px] items-center p-[16px] rounded-[12px] w-full ${
                    state.active ? "bg-[rgba(52,212,202,0.1)] border-[1.5px] border-[#34d4ca] border-solid" : "bg-[#0a0d14] border-[1.5px] border-[#232b3a] border-solid"
                  }`}
                >
                  <div className={`rounded-[12px] flex items-center justify-center shrink-0 size-[24px] ${state.active ? "bg-[#34d4ca]" : "bg-[#1f2b3e]"}`}>
                    {state.active ? (
                      <img alt="" className="size-[12px]" src={imgCheck} />
                    ) : (
                      <p className="font-sans font-bold text-[#aab3c4] text-[11px] m-0">{state.number}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
                    <p className={`font-sans font-bold text-[15px] m-0 ${state.active ? "text-[#34d4ca]" : "text-white"}`}>{state.title}</p>
                    <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0">{state.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-px w-full bg-[#232b3a]" />
            <p className="font-inter font-normal text-[#aab3c4] text-[12px] opacity-80 m-0 w-full">
              States represent current deterministic orchestration pipeline phase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
