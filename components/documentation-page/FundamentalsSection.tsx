import Image from 'next/image';

const CONCEPTS = [
  { label: 'Account & Workspace', active: true },
  { label: 'Resources & IDs', active: false },
  { label: 'Live vs On-Demand', active: false },
  { label: 'Contribution & Ingest', active: false },
  { label: 'Playback Control', active: false },
  { label: 'Recording & Archival', active: false },
  { label: 'Monitoring & Telemetry', active: false },
];

const FLOW = [
  { label: 'API Client', variant: 'neutral' },
  { label: 'Ingest Gateway', variant: 'blue' },
  { label: 'Media Archive', variant: 'teal' },
];

export default function FundamentalsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/documentation-page/fundamentals/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/fundamentals/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/documentation-page/fundamentals/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-240px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
          Understand the Platform Before You Build
        </h2>

        <div className="flex w-full flex-col items-start gap-[40px] xl:flex-row">
          {/* Concept index */}
          <div className="flex w-full flex-col items-start gap-[12px] xl:w-[300px] xl:shrink-0">
            {CONCEPTS.map((concept) => (
              <div
                key={concept.label}
                className={`flex w-full items-start rounded-[8px] px-[16px] py-[12px] ${
                  concept.active
                    ? 'border border-solid border-[#e1e6eb] bg-[#f8fafc]'
                    : 'bg-transparent'
                }`}
              >
                <p
                  className={`text-[15px] leading-normal ${
                    concept.active ? 'font-bold text-[#4a8cfb]' : 'font-medium text-[#4f5e74]'
                  }`}
                >
                  {concept.label}
                </p>
              </div>
            ))}
          </div>

          {/* Concept details */}
          <div className="flex min-w-px flex-1 flex-col items-start gap-[24px]">
            {/* Overview card */}
            <div className="flex w-full flex-col items-start gap-[20px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px]">
              <p className="text-[22px] font-bold leading-normal text-[#0f1b2d]">
                Workspace Governance Models
              </p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                Every organization maps to a structured, auditable compliance model. Workspaces enforce
                separation between developer API tokens, secure internal team events, and continuous raw
                stream archives.
              </p>
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/documentation-page/fundamentals/icon-activity.svg"
                  alt=""
                  className="size-[14px] shrink-0"
                />
                <p className="whitespace-nowrap text-[12px] font-bold leading-normal text-[#4a8cfb]">
                  Read Core Concepts →
                </p>
              </div>
            </div>

            {/* Relationship diagram */}
            <div className="flex w-full flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]">
              <p className="text-[14px] font-bold leading-normal text-[#0f1b2d]">PIPELINE BOUNDARY FLOW</p>
              <div className="flex w-full flex-wrap items-center gap-[20px]">
                {FLOW.map((node, i) => (
                  <div key={node.label} className="flex items-center gap-[20px]">
                    <div
                      className={`flex items-start rounded-[6px] border border-solid p-[12px] ${
                        node.variant === 'blue'
                          ? 'border-[#4a8cfb] bg-[rgba(74,140,251,0.1)]'
                          : node.variant === 'teal'
                            ? 'border-[#34d4ca] bg-[rgba(52,212,202,0.1)]'
                            : 'border-[#e1e6eb] bg-white'
                      }`}
                    >
                      <p
                        className={`whitespace-nowrap text-[12px] font-bold leading-normal ${
                          node.variant === 'blue'
                            ? 'text-[#4a8cfb]'
                            : node.variant === 'teal'
                              ? 'text-[#34d4ca]'
                              : 'text-[#4f5e74]'
                        }`}
                      >
                        {node.label}
                      </p>
                    </div>
                    {i < FLOW.length - 1 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src="/images/documentation-page/fundamentals/icon-arrow-right.svg"
                        alt=""
                        className="size-[16px] shrink-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
