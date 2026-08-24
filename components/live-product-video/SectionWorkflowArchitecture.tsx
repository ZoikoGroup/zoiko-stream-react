import React from 'react';

const imgSectionBg = "/images/live-product-video/workflow-architecture-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/workflow-architecture-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/workflow-architecture-bg-blob-2.svg";
const imgChevronRight = "/images/live-product-video/workflow-architecture-icon-chevron-right.svg";

const STAGES = [
  { title: "1. Contribute", description: "Client-side WebRTC or RTMP capture feeds", proof: "Ingress connection metrics log" },
  { title: "2. Ingest", description: "Adaptive-bitrate parsing and synchronization", proof: "Active transcode pipeline status" },
  { title: "3. Produce", description: "Real-time caption rendering and layout assembly", proof: "Composite pipeline layout preview" },
  { title: "4. Secure", description: "Token gating and strict SAML enforcement", proof: "Security qualification audit logs" },
  { title: "5. Deliver", description: "Ultra-low latency edge node broadcast", proof: "Real-time egress bandwidth telemetry" },
  { title: "6. Understand", description: "Webhook callback logic and metrics indexing", proof: "Latency and error telemetry reports" },
  { title: "7. Preserve", description: "Durable VOD archival packaging", proof: "Verified preservation write receipts" },
];

export default function SectionWorkflowArchitecture() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-294px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.14] m-0 w-full">
            Map the seven-stage lifecycle
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Use product proof, not decorative infrastructure art.
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex items-center gap-[8px] min-w-[1120px] lg:min-w-0 w-full">
            {STAGES.map((stage, index) => (
              <div key={stage.title} className="flex flex-1 items-center min-w-0">
                <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[16px] flex flex-1 flex-col gap-[12px] items-start min-w-0">
                  <p className="font-sans font-bold text-[#0f1b2d] text-[14px] m-0 whitespace-nowrap">{stage.title}</p>
                  <p className="font-inter font-normal text-[#4f5e74] text-[11px] leading-[1.45] m-0 w-full">{stage.description}</p>
                  <div className="h-px w-full bg-[#e1e6eb]" />
                  <div className="flex flex-col gap-[2px] items-start w-full">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[10px] m-0 w-full">PROOF TYPE:</p>
                    <p className="font-inter font-normal text-[#34d4ca] text-[10px] m-0 w-full">{stage.proof}</p>
                  </div>
                </div>
                {index < STAGES.length - 1 && (
                  <div className="flex items-center px-[8px] shrink-0">
                    <img alt="" className="size-[12px]" src={imgChevronRight} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
