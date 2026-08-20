import Image from 'next/image';

const patterns = [
  {
    title: 'Funnel Analysis',
    requirement: 'WebSDK required',
    boundary: 'User landing -> Media player load -> 75% Completion mark',
  },
  {
    title: 'User Journey Maps',
    requirement: 'Unique session index required',
    boundary: 'Multi-session traversal from homepage to custom clip bookmarking',
  },
  {
    title: 'Viewer Cohorts',
    requirement: 'Anonymized IP required',
    boundary: 'Segmenting by geographical nodes & local CDN ISP providers',
  },
  {
    title: 'Retention/Return',
    requirement: 'Continuous token required',
    boundary: '7-day return activity mapping across the VOD catalog registry',
  },
  {
    title: 'Stream Path Analysis',
    requirement: 'Quality metric required',
    boundary: 'Drop-off points across dynamic bitrate changes',
  },
  {
    title: 'Interactive Drop-offs',
    requirement: 'Interactive SDK required',
    boundary: 'Poll interactions vs video playback suspension timelines',
  },
];

export default function AnalysisPatternsSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/analysis-patterns-bg.png"
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
            Optional analysis patterns
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
            These render only when a capability registry confirms the underlying events, semantics and access model.
          </p>
        </div>

        {/* Pattern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-x-[24px] xl:gap-y-[32px] relative shrink-0 w-full">
          {patterns.map((pattern) => (
            <div
              key={pattern.title}
              className="bg-[#101626] border border-[#1e293b] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[24px] relative rounded-[12px] shrink-0"
            >
              <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap">
                  {pattern.title}
                </p>
                <div className="bg-[#1e293b] flex items-start px-[10px] py-[4px] relative rounded-[4px] shrink-0">
                  <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#aab3c4] text-[11px] whitespace-nowrap">
                    {pattern.requirement}
                  </p>
                </div>
              </div>
              <div className="bg-[#1e293b] h-px relative shrink-0 w-full" />
              <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full">
                <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#707a8c] text-[11px] uppercase whitespace-nowrap">
                  Key Boundary
                </p>
                <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#34d4ca] text-[13px] w-full">
                  {pattern.boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
