import Image from 'next/image';

const devCards = [
  {
    title: 'Authentication',
    desc: 'Deploy Bearer OAuth2 tokens via your dashboard console key manager',
  },
  {
    title: 'Event schema',
    desc: 'Construct valid JSON payloads with standardized telemetry properties',
  },
  {
    title: 'Rate limits',
    desc: 'Up to 50,000 ingest queries per minute with graceful buffering fallbacks',
  },
  {
    title: 'Webhooks',
    desc: 'Configure payload routes triggering on stream completion states',
  },
  {
    title: 'SDK support',
    desc: 'Ready-to-use packages across Python, Node.js, and Swift',
  },
  {
    title: 'Export routes',
    desc: 'Programmatic bulk file delivery directly to your enterprise S3 bucket',
  },
];

export default function DevPathwaySection() {
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
            Developer and integration pathway
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#4f5e74] text-base xl:text-[18px] w-full">
            Programmable analytics endpoints designed for production automation.
          </p>
        </div>

        {/* Dev Layout */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[40px] items-stretch xl:items-center relative shrink-0 w-full">
          {/* Dev Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-x-[24px] xl:gap-y-[26px] relative flex-1 min-w-px w-full">
            {devCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-3 xl:gap-[12px] items-start p-5 xl:p-[20px] relative rounded-[8px]"
              >
                <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0d13] text-[15px] whitespace-nowrap">
                  {card.title}
                </p>
                <p className="font-spaceGrotesk font-normal leading-[1.4] relative shrink-0 text-[#4f5e74] text-[12px] w-full">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Code Mockup */}
          <div className="bg-[#1e293b] flex flex-col gap-3 xl:gap-[12px] items-start leading-[normal] p-6 xl:p-[24px] relative rounded-[12px] shrink-0 w-full xl:w-[480px]">
            <div className="flex items-start justify-between relative shrink-0 text-[11px] w-full">
              <p className="font-spaceGrotesk font-bold relative shrink-0 text-[#34d4ca] whitespace-nowrap">
                GET /v1/analytics/metrics
              </p>
              <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#707a8c] whitespace-nowrap">
                cURL example
              </p>
            </div>
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <p className="font-mono not-italic relative shrink-0 text-[#a7f3d0] text-[12px] w-full break-all">
                {'curl -X GET "https://api.zoiko.com/v1/metrics" \\'}
              </p>
              <p className="font-mono not-italic relative shrink-0 text-[#a7f3d0] text-[12px] w-full">
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
