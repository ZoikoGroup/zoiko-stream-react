import Image from 'next/image';

type StatusKind = 'positive' | 'warning';

const statusStyles: Record<StatusKind, string> = {
  positive: 'bg-[#064e3b] text-[#34d4ca]',
  warning: 'bg-[#78350f] text-[#f59e0b]',
};

const domains = [
  {
    title: 'Media object / VOD',
    status: 'ACTIVE',
    statusKind: 'positive' as StatusKind,
    desc: 'Recorded asset and replay continuity usage',
    query: '"Did the asset complete validation?"',
  },
  {
    title: 'Live workflow analytics',
    status: 'MONITORED',
    statusKind: 'warning' as StatusKind,
    desc: 'Operational performance over stream timelines',
    query: '"What was stream state at UTC 19:00?"',
  },
  {
    title: 'Accessibility / language',
    status: 'STABLE',
    statusKind: 'positive' as StatusKind,
    desc: 'Caption availability and accuracy metrics',
    query: '"Were English captions active for EN aud?"',
  },
  {
    title: 'Delivery analytics',
    status: 'STABLE',
    statusKind: 'positive' as StatusKind,
    desc: 'Delivery performance across edge contexts',
    query: '"Are packets meeting delivery target?"',
  },
  {
    title: 'Playback analytics',
    status: 'STABLE',
    statusKind: 'positive' as StatusKind,
    desc: 'Session behavior and player buffer state',
    query: '"Where did buffers exceed 1.2s?"',
  },
  {
    title: 'Audience context',
    status: 'COMPLIANT',
    statusKind: 'positive' as StatusKind,
    desc: 'Aggregate audience observations & traffic',
    query: '"Which segment represents live traffic?"',
  },
];

export default function CoverageSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/coverage-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.82)] inset-0" />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
          Approved analytics domains
        </h2>
        <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
          Only verified capability domains appear. Unavailable patterns are explicitly suppressed.
        </p>
      </div>

      {/* Coverage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[24px] relative shrink-0 w-full">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="bg-[#101626] border border-[#1e293b] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[24px] relative rounded-[16px] shrink-0"
          >
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">
                {domain.title}
              </p>
              <div className={`flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0 ${statusStyles[domain.statusKind]}`}>
                <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[11px] whitespace-nowrap">
                  {domain.status}
                </p>
              </div>
            </div>
            <p className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#aab3c4] text-[13px] w-full">
              {domain.desc}
            </p>
            <div className="bg-[#1e293b] h-px relative shrink-0 w-full" />
            <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#707a8c] text-[11px] uppercase whitespace-nowrap">
                Core Query
              </p>
              <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#34d4ca] text-[13px] w-full">
                {domain.query}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
