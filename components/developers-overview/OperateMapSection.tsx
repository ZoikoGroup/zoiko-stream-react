import Image from 'next/image';

const CARDS = [
  {
    title: '01 Analytics API',
    desc: 'Real-time viewer telemetry, ingestion heatmaps, and latency records.',
  },
  {
    title: '02 Stream Monitoring',
    desc: 'Live health status, audio/video synchronization logs, and source telemetry.',
  },
  {
    title: '03 Recording & Assets',
    desc: 'Deterministic lifecycle routing from raw capture to cold storage replication.',
  },
  {
    title: '04 Error Handling',
    desc: 'Graceful recovery states, auto-fallback pathways, and ingestion alerts.',
  },
  {
    title: '05 Rate Limits',
    desc: 'Governed API thresholds, concurrent stream bounds, and execution ceilings.',
  },
  {
    title: '06 Changelog',
    desc: 'Attributable updates on pipeline mechanics, versions, and verified profiles.',
  },
  {
    title: '07 System Status',
    desc: 'Authoritative up-to-the-minute operational states for ingress and deliver nodes.',
  },
];

export default function OperateMapSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/operate-map/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.82)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            OPERATE — Make Production Truth Part of the Developer Path
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            A working stream is the beginning of production. Monitor, analyze, and scale with explicit
            diagnostic systems.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#34d4ca] bg-[rgba(16,21,30,0.8)] p-[24px]"
            >
              <p className="text-[16px] font-bold leading-normal text-white">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#aab3c4]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
