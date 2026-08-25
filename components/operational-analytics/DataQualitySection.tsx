import Image from 'next/image';

const BADGE_STYLES: Record<string, string> = {
  green: 'border-[#10b981] bg-[rgba(16,185,129,0.1)] text-[#10b981]',
  teal: 'border-[#34d4ca] bg-[rgba(52,212,202,0.1)] text-[#34d4ca]',
  amber: 'border-[#f59e0b] bg-[rgba(245,158,11,0.1)] text-[#f59e0b]',
  blue: 'border-[#4a8cfb] bg-[rgba(74,140,251,0.1)] text-[#4a8cfb]',
  purple: 'border-[#8b5cf6] bg-[rgba(139,92,246,0.1)] text-[#8b5cf6]',
  red: 'border-[#ef4444] bg-[rgba(239,68,68,0.1)] text-[#ef4444]',
  slate: 'border-[#aab3c4] bg-[rgba(170,179,196,0.1)] text-[#aab3c4]',
  graydark: 'border-[#4b5563] bg-[rgba(75,85,99,0.1)] text-[#4b5563]',
  gray: 'border-[#6b7280] bg-[rgba(107,114,128,0.1)] text-[#6b7280]',
};

const CARDS = [
  {
    title: 'Value Available',
    badge: 'HEALTHY',
    color: 'green',
    desc: 'A verified observation successfully generated and reported within SLA parameters.',
  },
  {
    title: 'Measured Zero',
    badge: 'OBSERVED',
    color: 'teal',
    desc: 'A valid measurement completed with a definitive result of zero. Never hidden as blank.',
  },
  {
    title: 'Partial Data',
    badge: 'DEGRADED',
    color: 'amber',
    desc: 'Only a sub-segment of expected pipelines successfully delivered active telemetry.',
  },
  {
    title: 'Delayed',
    badge: 'PENDING',
    color: 'blue',
    desc: 'Data is currently traveling through transport layers and awaits central ingest.',
  },
  {
    title: 'Stale Stream',
    badge: 'OUT OF DATE',
    color: 'purple',
    desc: 'The metrics shown are older than the freshness contract limits. Active warning is active.',
  },
  {
    title: 'Missing',
    badge: 'ALERT',
    color: 'red',
    desc: 'Expected observation pipeline completely failed to report. Diagnostic path triggered.',
  },
  {
    title: 'Not Instrumented',
    badge: 'INACTIVE',
    color: 'slate',
    desc: 'Metric is not configured or collected on the target scope. Never misrepresented as zero.',
  },
  {
    title: 'Unknown',
    badge: 'UNRESOLVED',
    color: 'graydark',
    desc: 'Connection states are currently lost, and path integrity is unresolved.',
  },
  {
    title: 'Not Applicable',
    badge: 'EXCLUDED',
    color: 'gray',
    desc: 'Metric does not apply to the selected stream profile type or configuration.',
  },
];

const STATS = [
  { label: 'REPORTING CHANNELS', value: '14 / 15', color: 'text-[#10b981]' },
  { label: 'AGGREGATE FRESHNESS', value: '1s delay', color: 'text-[#34d4ca]' },
  { label: 'SCHEMA VERSION', value: 'v4.8.2-PROD', color: 'text-[#4a8cfb]' },
];

export default function DataQualitySection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/data-quality/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.88)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Data quality, freshness, and instrumentation coverage
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Zero versus missing versus not instrumented versus delayed versus partial versus stale versus
            unknown — each state is distinct and intentional.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[12px] rounded-[8px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235] p-[20px]"
            >
              <div className="flex w-full items-center justify-between gap-[8px]">
                <p className="text-[16px] font-bold text-white">{card.title}</p>
                <div
                  className={`flex shrink-0 items-start rounded-[4px] border border-solid px-[6px] py-[2px] ${BADGE_STYLES[card.color]}`}
                >
                  <p className="whitespace-nowrap text-[10px] font-bold">{card.badge}</p>
                </div>
              </div>
              <p className="w-full font-inter text-[13px] font-normal leading-[18px] text-[#aab3c4]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage panel */}
        <div className="flex w-full flex-col items-start gap-[24px] rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#0a0d14] p-[32px]">
          <p className="text-[20px] font-bold text-white">Active Instrumentation Coverage</p>
          <div className="flex w-full flex-col items-start gap-[24px] sm:flex-row sm:gap-[40px]">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex min-w-px flex-1 flex-col items-start gap-[8px]">
                <p className="font-inter text-[13px] font-bold text-[#aab3c4]">{stat.label}</p>
                <p className={`text-[32px] font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
