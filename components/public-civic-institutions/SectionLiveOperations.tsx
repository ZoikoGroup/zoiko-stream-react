import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/live-operations-section-bg.png";

const METRICS = [
  { label: "Inbound Signal", value: "SRT 1080p60", tag: "Active" },
  { label: "AV Processing", value: "Transcoding (HEVC)", tag: "Active" },
  { label: "Audience Access", value: "SSO Gateway Enforced", tag: "Protected" },
  { label: "Regional Delivery", value: "14 Edge POPs", tag: "SLA Compliant" },
  { label: "Accessibility", value: "WCAG Captions Live", tag: "Ready" },
  { label: "Archiving Record", value: "Cold Replication", tag: "Writing" },
  { label: "Operations Support", value: "NOC Monitored", tag: "Standby" },
];

const LOG_ENTRIES = [
  { time: "14:32:05 ET", category: "Telemetry", text: "Primary ingest switch successfully mapped. Low latency path verified at p99.2." },
  { time: "14:15:12 ET", category: "Compliance", text: "Closed Captions engine confirmed alignment with WCAG 2.2 AA (99.8% precision)." },
  { time: "14:02:40 ET", category: "Security", text: "SSO Session boundary audited. External tenant isolation active." },
  { time: "13:58:00 ET", category: "Provision", text: "Reserve regional nodes mapped for EMEA-West. Multi-CDN traffic re-shaping active." },
];

export default function SectionLiveOperations() {
  return (
    <div className="border-t border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.83)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Current operational truth, not optimistic assumptions
          </h2>
          <p className="font-sans font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Real-time transparency is key to civic accountability. Monitor stream performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-[16px] w-full">
          {METRICS.map((metric) => (
            <div key={metric.label} className="bg-[#10151e] border border-[#232b3a] border-solid rounded-[12px] p-[20px] flex flex-col gap-[12px] items-start lg:flex-1 lg:min-w-0">
              <p className="font-inter font-normal text-[#aab3c4] text-[12px] m-0 whitespace-nowrap">{metric.label}</p>
              <p className="font-sans font-bold text-white text-[18px] m-0">{metric.value}</p>
              <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] border-solid rounded-[4px] px-[12px] py-[4px]">
                <p className="font-mono font-bold text-[#10b981] text-[11px] uppercase m-0 whitespace-nowrap">{metric.tag}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid rounded-[16px] p-[28px] flex flex-col gap-[20px] items-start w-full">
          <p className="font-sans font-bold text-white text-[18px] m-0 w-full">Operational Log (Last 60 Minutes)</p>
          <div className="flex flex-col gap-[12px] items-start w-full">
            {LOG_ENTRIES.map((entry) => (
              <div key={entry.time} className="flex flex-col sm:flex-row gap-[8px] sm:gap-[16px] items-start w-full">
                <p className="font-mono font-bold text-[#4ecdc4] text-[12px] m-0 sm:w-[120px] shrink-0 whitespace-nowrap">{entry.time}</p>
                <div className="bg-[#232b3a] rounded-[4px] px-[6px] py-[2px] shrink-0">
                  <p className="font-mono text-[#aab3c4] text-[10px] m-0 whitespace-nowrap">{entry.category}</p>
                </div>
                <p className="font-inter font-normal text-[#aab3c4] text-[13px] m-0 flex-1">{entry.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">
          <div className="bg-[#10151e] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start">
            <p className="font-sans font-bold text-white text-[16px] m-0 whitespace-nowrap">Incident Boundaries</p>
            <p className="font-sans font-normal text-[#aab3c4] text-[14px] leading-[1.62] m-0 w-full">
              Automated outage actions route to authorities. Outage triggers automatically shift ingestion locations without state loss.
            </p>
          </div>
          <div className="bg-[#10151e] border border-[#232b3a] border-solid rounded-[12px] p-[24px] flex flex-col gap-[16px] items-start">
            <p className="font-sans font-bold text-white text-[16px] m-0 whitespace-nowrap">Continuity Operations</p>
            <p className="font-sans font-normal text-[#aab3c4] text-[14px] leading-[1.62] m-0 w-full">
              Multi-region pipeline replication guarantees broadcast persistence even during severe regional edge node drops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
