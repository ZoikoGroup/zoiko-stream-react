import Image from 'next/image';

const yAxisLabels = ['100%', '75%', '50%', '25%', '0%'];

const bars = [
  { label: 'Jan 15', height: 80 },
  { label: 'Jan 16', height: 120 },
  { label: 'Jan 17', height: 150 },
  { label: 'Jan 18', height: 90 },
  { label: 'Jan 19', height: 110 },
  { label: 'Jan 20', height: 160 },
  { label: 'Jan 21', height: 200 },
  { label: 'Jan 22', height: 140 },
  { label: 'Jan 23', height: 180 },
  { label: 'Jan 24', height: 240 },
  { label: 'Jan 25', height: 210 },
  { label: 'Jan 26', height: 260 },
];

export default function ResultExperienceSection() {
  return (
    <section className="bg-white border-[#e2e8f0] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/result-experience-bg.png"
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
            Read a result with context and uncertainty
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
            Track how users complete sessions across your enterprise platform over time.
          </p>
        </div>

        {/* Detail View Mockup */}
        <div className="bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid flex flex-col gap-4 xl:gap-[20px] items-start p-6 xl:p-[28px] relative rounded-[16px] shrink-0 w-full">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between relative shrink-0 w-full">
            <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0">
              <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#0a0d13] text-[18px]">
                Session Completion Rate (Enterprise Global)
              </p>
              <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#4f5e74] text-[13px]">
                Period: Jan 15-26 • Granularity: Daily
              </p>
            </div>
            <div className="bg-[#064e3b] flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0">
              <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] whitespace-nowrap">
                AUDITED ACCURACY
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-[#edf2f7] flex flex-col gap-4 h-[200px] items-start overflow-hidden p-6 xl:p-[24px] relative rounded-[12px] shrink-0 w-full">
            {/* y-axis labels */}
            <div className="absolute flex flex-col font-spaceGrotesk font-normal h-[140px] items-start justify-between leading-[normal] left-3 text-[#4f5e74] text-[11px] top-3 whitespace-nowrap">
              {yAxisLabels.map((label) => (
                <p key={label} className="relative shrink-0">
                  {label}
                </p>
              ))}
            </div>
            {/* gridlines */}
            <div className="absolute flex flex-col inset-0 items-start justify-between py-3">
              {yAxisLabels.map((label) => (
                <div key={label} className="bg-[#e2e8f0] h-px opacity-60 relative shrink-0 w-full" />
              ))}
            </div>
            {/* plot area */}
            <div className="flex gap-4 xl:gap-[16px] h-[140px] items-end relative shrink-0 w-full pl-9">
              {bars.map((bar) => (
                <div key={bar.label} className="flex flex-1 flex-col gap-[4px] items-start justify-end min-w-px relative">
                  <div
                    className="bg-[#4a8cfb] relative rounded-t-[4px] shrink-0 w-full"
                    style={{ height: `${bar.height}px` }}
                  />
                  <p className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#4f5e74] text-[11px] text-center w-full">
                    {bar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer stats */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-start sm:justify-between leading-[normal] pt-2 relative shrink-0 w-full">
            <div className="flex gap-6 xl:gap-[24px] items-start relative shrink-0">
              <div className="flex flex-col gap-[2px] items-start relative shrink-0">
                <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#4f5e74] text-[11px] uppercase">
                  Data Quality
                </p>
                <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#0a0d13] text-[14px]">
                  99.9% Complete
                </p>
              </div>
              <div className="flex flex-col gap-[2px] items-start relative shrink-0">
                <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#4f5e74] text-[11px] uppercase">
                  Data Freshness
                </p>
                <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#0a0d13] text-[14px]">
                  Updated 1m ago
                </p>
              </div>
            </div>
            <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#4a8cfb] text-[13px]">
              View raw lineage logs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
