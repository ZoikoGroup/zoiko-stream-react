import Image from 'next/image';
import { CheckCircle, Loader, Clock, Cloud, Grid, CheckSquare, Shuffle, AlertTriangle } from 'lucide-react';

const lineageSteps = [
  {
    title: 'Source Ingestion',
    desc: 'Live RTMP stream metadata packages',
    time: '19:00:02 UTC',
    status: 'done' as const,
  },
  {
    title: 'Edge Validation',
    desc: 'Integrity signature confirmation',
    time: '19:00:04 UTC',
    status: 'done' as const,
  },
  {
    title: 'Transformation Engine',
    desc: 'Rolling average normalization',
    time: null,
    status: 'done' as const,
  },
  {
    title: 'Consensus Registry',
    desc: 'Verified state committed to log',
    time: null,
    status: 'pending' as const,
  },
];

const dimensions = [
  {
    title: 'Time basis',
    desc: 'Absolute alignment with UTC event timestamps',
    icon: Clock,
  },
  {
    title: 'Freshness',
    desc: 'Immediate real-time delivery with lag protection',
    icon: Cloud,
  },
  {
    title: 'Completeness',
    desc: 'Comprehensive packet verification index',
    icon: Grid,
  },
  {
    title: 'Validity',
    desc: 'Schema structure constraints matching strict rules',
    icon: CheckSquare,
  },
  {
    title: 'Reconciliation',
    desc: 'Source agreement checks on both sender & receiver',
    icon: Shuffle,
  },
  {
    title: 'Uncertainty',
    desc: 'Transparent logging of network packet drop bounds',
    icon: AlertTriangle,
  },
];

export default function DataQualitySection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/data-quality-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.77)] inset-0" />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
          <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
            Sources, lineage, and quality
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
            Evaluate trust in data before interpreting it.
          </p>
        </div>

        {/* Quality Container */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] items-stretch xl:items-center relative shrink-0 w-full">
          {/* Lineage Mockup */}
          <div className="bg-[#101626] border border-[#1e293b] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[24px] relative rounded-[12px] shrink-0 w-full xl:w-[580px]">
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Evidence Lineage Trace
            </p>
            <div className="flex flex-col gap-4 xl:gap-[16px] items-start relative shrink-0 w-full">
              {lineageSteps.map((step) => (
                <div key={step.title} className="flex gap-[12px] items-start relative shrink-0 w-full">
                  {step.status === 'done' ? (
                    <CheckCircle className="text-[#34d4ca] size-[16px] shrink-0" />
                  ) : (
                    <Loader className="text-[#f59e0b] size-[16px] shrink-0" />
                  )}
                  <div className="flex flex-1 flex-col gap-[2px] items-start leading-[normal] min-w-px relative">
                    <p className="font-spaceGrotesk font-bold relative shrink-0 text-[13px] text-white w-full">
                      {step.title}
                    </p>
                    <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#aab3c4] text-[12px] w-full">
                      {step.desc}
                    </p>
                  </div>
                  {step.time && (
                    <p className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#707a8c] text-[11px] whitespace-nowrap">
                      {step.time}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quality Dimensions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-x-[24px] xl:gap-y-[15px] relative flex-1 min-w-px w-full">
            {dimensions.map((dim) => {
              const Icon = dim.icon;
              return (
                <div
                  key={dim.title}
                  className="bg-[#101626] border border-[#1e293b] border-solid flex gap-[12px] items-start p-5 xl:p-[20px] relative rounded-[8px]"
                >
                  <Icon className="text-[#34d4ca] size-[18px] shrink-0" />
                  <div className="flex flex-1 flex-col gap-[2px] items-start min-w-px relative">
                    <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">
                      {dim.title}
                    </p>
                    <p className="font-spaceGrotesk font-normal leading-[1.4] relative shrink-0 text-[#aab3c4] text-[12px] w-full">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
