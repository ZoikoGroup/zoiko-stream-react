const CARDS = [
  {
    badge: 'LIVE STREAMING',
    title: '1-to-Many Live Media',
    desc: 'One-to-many live media workflows. Broadcast to audiences at scale. Multi-CDN delivery.',
    highlight: false,
  },
  {
    badge: 'REAL-TIME CONTRIBUTION',
    title: 'Low-Latency Feeds',
    desc: 'Low-latency contribution and interactivity where supported and verified. WebRTC & WHIP optimized.',
    highlight: true,
  },
  {
    badge: 'VIDEO ON DEMAND',
    title: 'Durable VOD Asset Lifecycle',
    desc: 'Stored and uploaded media lifecycle. Upload, encode, transcode and deliver global high-fidelity on-demand video.',
    highlight: false,
  },
];

const FIELDS = [
  { label: 'Operational Workflow Category', value: 'Continuous Broadcaster Configuration' },
  { label: 'Default Ingestion Mode', value: 'RTMPS Primary Ingest & SRT Redundant Ingest' },
  { label: 'Target Sub-Second Playback', value: 'WHIP Enabled / WebRTC Delivery Node' },
  { label: 'Anonymization Constraints', value: 'TLS 1.3 End-to-End Transport Shielding' },
];

const INTERSECTIONS = [
  'Contribute: In-house encoder or RTMP/SRT source feed.',
  'Ingest & Produce: High fidelity transcoding matrix.',
  'Secure & Deliver: SSO verified or multi-CDN public routing.',
  'Preserve: Long-term archival replication mapping.',
];

export default function WorkflowFitSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/workflow-fit/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-180px] top-[-120px] size-[420px]"
      />
      <img
        src="/images/developers-overview/workflow-fit/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[87px] right-[-173px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
          Workflow Fit — Live, Real-Time, and On-Demand
        </h2>

        {/* Access cards */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.badge}
              className={`flex flex-col items-start gap-[20px] rounded-[12px] border-[1.5px] border-solid bg-[#f8fafc] p-[32px] ${
                card.highlight ? 'border-[#4a8cfb]' : 'border-[#e1e6eb]'
              }`}
            >
              <span className="rounded-[4px] border border-solid border-[#e1e6eb] bg-white px-[8px] py-[4px] text-[11px] font-bold uppercase leading-normal tracking-[0.5px] text-[#4a8cfb]">
                {card.badge}
              </span>
              <p className="text-[22px] font-bold leading-normal text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Schema mapping + intersections */}
        <div className="flex w-full flex-col items-stretch gap-[40px] xl:flex-row xl:items-start">
          {/* Standard Pipeline Schema Mapping */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
            <p className="text-[18px] font-bold leading-normal text-[#0a0f1a]">
              Standard Pipeline Schema Mapping
            </p>
            <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.label} className="flex flex-col items-start gap-[8px]">
                  <p className="text-[11px] font-bold uppercase leading-normal tracking-[0.5px] text-[#4f5e74]">
                    {field.label}
                  </p>
                  <div className="flex w-full rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[14px]">
                    <p className="font-inter text-[14px] font-normal leading-normal text-[#0a0f1a]">
                      {field.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Pipeline Intersections */}
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] xl:w-[500px] xl:shrink-0">
            <p className="text-[18px] font-bold leading-normal text-[#0a0f1a]">
              Active Pipeline Intersections
            </p>
            <div className="flex w-full flex-col items-start gap-[16px]">
              {INTERSECTIONS.map((item) => (
                <div key={item} className="flex w-full items-start gap-[12px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/developers-overview/workflow-fit/icon-check.svg"
                    alt=""
                    className="mt-[1px] size-[18px] shrink-0"
                  />
                  <p className="min-w-px flex-1 font-inter text-[14px] font-normal leading-[20px] text-[#4f5e74]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
