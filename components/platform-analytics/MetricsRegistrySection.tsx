import Image from 'next/image';
import { CheckCircle, Sliders } from 'lucide-react';

const bullets = [
  {
    title: 'No ghost definitions',
    desc: 'Every metric references active codebase formulas',
  },
  {
    title: 'Strict timeframes',
    desc: 'Aligned with absolute UTC boundaries',
  },
  {
    title: 'Audited lineage',
    desc: 'Data is traceable back to the raw source package',
  },
];

const statusStyles: Record<string, string> = {
  Active: 'bg-[#064e3b] text-[#34d4ca]',
  Verifying: 'bg-[#78350f] text-[#f59e0b]',
};

const metrics = [
  {
    metric: 'SuccessfulPlayRate',
    category: 'Playback Quality',
    owner: 'Med-Ops Team',
    status: 'Active',
  },
  {
    metric: 'MeanBufferDuration',
    category: 'Infrastructure',
    owner: 'Core Network',
    status: 'Active',
  },
  {
    metric: 'ActiveViewerSession',
    category: 'Audience Activity',
    owner: 'Sec-Audit',
    status: 'Verifying',
  },
  {
    metric: 'CaptionMatchIndex',
    category: 'Accessibility',
    owner: 'Lang-Ops',
    status: 'Active',
  },
];

export default function MetricsRegistrySection() {
  return (
    <section className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/metrics-registry-bg.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-[#0a0d13] tracking-[-0.38px] w-full">
          Governed metrics and dimensions
        </h2>
        <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
          Every metric has an owner, definition, scope, method, version and limitations.
        </p>
      </div>

      {/* Registry Content */}
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] items-start relative shrink-0 w-full">
        {/* Left: Discipline copy */}
        <div className="flex flex-1 flex-col gap-6 xl:gap-[24px] items-start min-w-px relative w-full xl:w-auto">
          <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[24px] whitespace-nowrap">
            Metric Registry Discipline
          </p>
          <p className="font-spaceGrotesk font-normal leading-[1.5] relative shrink-0 text-[#4f5e74] text-[15px] w-full">
            ZoikoStream establishes absolute truth by registering metrics inside a verified repository. We suppress uncalibrated raw values to protect decision workflows from misleading statistical anomalies.
          </p>
          <div className="flex flex-col gap-4 xl:gap-[16px] items-start relative shrink-0 w-full">
            {bullets.map((bullet) => (
              <div key={bullet.title} className="flex gap-[12px] items-start relative shrink-0 w-full">
                <CheckCircle className="text-[#4a8cfb] size-[18px] shrink-0" />
                <div className="flex flex-col gap-[2px] items-start leading-[normal] relative shrink-0 flex-1 min-w-px">
                  <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#0a0d13] text-[14px] w-full">
                    {bullet.title}
                  </p>
                  <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#4f5e74] text-[13px] w-full">
                    {bullet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Metric Catalog Table */}
        <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-5 xl:p-[20px] relative rounded-[12px] shrink-0 w-full xl:w-[740px]">
          <div className="flex items-center justify-between relative shrink-0 w-full">
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[16px] whitespace-nowrap">
              Metric Registry (V4.2)
            </p>
            <Sliders className="text-[#4f5e74] size-[16px]" />
          </div>
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-x-auto">
            <div className="bg-[#e2e8f0] flex font-spaceGrotesk font-bold items-start leading-[normal] p-[8px] relative rounded-[4px] shrink-0 text-[#4f5e74] text-[11px] w-full min-w-[560px]">
              <p className="flex-1 min-w-px relative">METRIC</p>
              <p className="flex-1 min-w-px relative">CATEGORY</p>
              <p className="flex-1 min-w-px relative">OWNER</p>
              <p className="relative shrink-0 w-[100px]">STATUS</p>
            </div>
            {metrics.map((row) => (
              <div
                key={row.metric}
                className="border border-[#e2e8f0] border-solid flex items-start p-[8px] relative shrink-0 w-full min-w-[560px]"
              >
                <p className="flex-1 font-spaceGrotesk font-bold leading-[normal] min-w-px relative text-[#0a0d13] text-[12px]">
                  {row.metric}
                </p>
                <p className="flex-1 font-spaceGrotesk font-normal leading-[normal] min-w-px relative text-[#4f5e74] text-[12px]">
                  {row.category}
                </p>
                <p className="flex-1 font-spaceGrotesk font-normal leading-[normal] min-w-px relative text-[#4f5e74] text-[12px]">
                  {row.owner}
                </p>
                <div className="flex items-start relative shrink-0 w-[100px]">
                  <div className={`flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0 ${statusStyles[row.status]}`}>
                    <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[11px] whitespace-nowrap">
                      {row.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
