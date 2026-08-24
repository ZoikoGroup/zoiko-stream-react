import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/planning-section-bg.png";
const imgBgBlob1 = "/images/public-civic-institutions/planning-bg-blob-1.svg";
const imgBgBlob2 = "/images/public-civic-institutions/planning-bg-blob-2.svg";
const imgCheck = "/images/public-civic-institutions/planning-icon-check.svg";

const FLOW_STEPS = [
  { time: "t-30d", title: "Intent Lodged", description: "Broadcast request recorded with tentative scope." },
  { time: "t-14d", title: "Resource Allocated", description: "Regional buffer nodes reserved and checked." },
  { time: "t-7d", title: "Compliance Plan Filed", description: "Closed captioning & backup paths assigned." },
  { time: "t-3d", title: "Authority Configured", description: "Identity gateway and access boundaries locked." },
  { time: "t-24h", title: "Edge Verification Run", description: "SLA checks across active delivery geographies." },
  { time: "t-4h", title: "Telemetry Live", description: "Continuous monitoring established at CDN ingress." },
  { time: "t-1h", title: "Origin Lock", description: "Primary ingestion pipeline restricted to verified sources." },
  { time: "t-15m", title: "Audio/Video Buffer Check", description: "Pre-flight latency validation checks pass." },
  { time: "t-0", title: "Broadcasting", description: "Public-safe stream routing active." },
  { time: "post-event", title: "Compliance Audited", description: "Archival record sealed and GDPR logs locked." },
];

const CHECKLIST = [
  "Governing operational authority identified",
  "Regional broadcast exclusions explicitly set",
  "Public accessibility SLA targets confirmed",
  "Fallback CDN and RTMP routes pre-verified",
  "Primary video ingestion source authorized",
  "Local archival record location sealed",
  "Emergency alert routing path tested",
  "Live captioning system latency verified",
  "GDPR location data minimizations approved",
  "No-JavaScript baseline templates ready",
  "Post-event compliance team assigned",
];

const DEPENDENCIES = [
  { name: "Teal Broadcast Nodes", authority: "ZoikoStream Cloud", redundancy: "Multi-Region Failover", audited: "2026-03-12" },
  { name: "Public Captions API", authority: "Speech-to-Text Gateway", redundancy: "Secondary Engine Active", audited: "2026-03-11" },
  { name: "Legal SLA Preservation", authority: "State Clerk Archives", redundancy: "Cold Immutable Storage", audited: "2026-03-05" },
];

export default function SectionPlanning() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-161px] size-[420px] top-[-25px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-93px] right-[-183px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            From tentative schedule to verified readiness
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[18px] m-0 w-full">
            Every broadcast represents a public commitment. Standardize your countdown from intent to air.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-[40px] w-full">
          <div className="flex flex-col gap-[20px] items-start w-full">
            <p className="font-sans font-bold text-[#0f1b2d] text-[20px] m-0 w-full">Operational Flow (10 Countdown States)</p>
            <div className="flex flex-col gap-[8px] items-start w-full">
              {FLOW_STEPS.map((step) => (
                <div key={step.time} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid rounded-[8px] p-[12px] flex gap-[16px] items-center w-full">
                  <div className="bg-[#0f1b2d] rounded-[4px] px-[8px] py-[2px] shrink-0">
                    <p className="font-mono font-bold text-[#4ecdc4] text-[11px] m-0 whitespace-nowrap">{step.time}</p>
                  </div>
                  <div className="flex flex-col gap-[2px] items-start flex-1 min-w-0">
                    <p className="font-sans font-bold text-[#0f1b2d] text-[13px] m-0 w-full">{step.title}</p>
                    <p className="font-inter font-normal text-[#4f5e74] text-[11px] m-0 w-full">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[16px] p-[24px] lg:p-[32px] flex flex-col gap-[20px] items-start w-full">
            <p className="font-sans font-bold text-[#0f1b2d] text-[20px] m-0 w-full">Institutional Readiness Review</p>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex gap-[12px] items-center w-full">
                  <div className="bg-[#4ecdc4] rounded-[4px] flex items-center justify-center shrink-0 size-[18px]">
                    <img alt="" className="size-[12px]" src={imgCheck} />
                  </div>
                  <p className="font-sans font-normal text-[#4f5e74] text-[14px] leading-[1.62] m-0 flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] items-start w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">Operational Dependency Registry</p>
          <div className="bg-white border-[1.5px] border-[#e1e6eb] border-solid rounded-[12px] p-[20px] flex flex-col gap-[12px] items-start w-full overflow-x-auto">
            <div className="bg-[#f8fafc] flex gap-[12px] items-start p-[12px] w-full min-w-[600px]">
              <p className="font-sans font-bold text-[#0f1b2d] text-[12px] m-0 flex-1">System Dependency</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[12px] m-0 flex-1">Governing Authority</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[12px] m-0 flex-1">Redundancy Level</p>
              <p className="font-sans font-bold text-[#0f1b2d] text-[12px] m-0 flex-1">Last Audited</p>
            </div>
            {DEPENDENCIES.map((dep, index) => (
              <div key={dep.name} className={`flex gap-[12px] items-center p-[12px] w-full min-w-[600px] text-[13px] ${index < DEPENDENCIES.length - 1 ? "border-b border-[#e1e6eb] border-solid" : ""}`}>
                <p className="font-inter font-semibold text-[#0f1b2d] m-0 flex-1">{dep.name}</p>
                <p className="font-inter font-normal text-[#4f5e74] m-0 flex-1">{dep.authority}</p>
                <p className="font-inter font-normal text-[#4f5e74] m-0 flex-1">{dep.redundancy}</p>
                <p className="font-inter font-normal text-[#4f5e74] m-0 flex-1">{dep.audited}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
