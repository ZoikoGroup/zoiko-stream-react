import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/truth/card-1.png',
    title: '1. Operational Entity',
    badge: 'Planned → Live → Ended',
    desc: 'Trace streams from configuration parameters, active ingestion, up to archival backup.',
  },
  {
    image: '/images/operational-analytics/truth/card-2.png',
    title: '2. Ingestion Incidents',
    badge: 'None known → Resolved',
    desc: 'Real-time verification logs linked directly to hardware encoder source metrics.',
  },
  {
    image: '/images/operational-analytics/truth/card-3.png',
    title: '3. Analytics Pipeline',
    badge: 'Collecting ⇄ Live Active',
    desc: 'Explicitly states freshness indicators so you never optimize against cached stale data.',
  },
  {
    image: '/images/operational-analytics/truth/card-4.png',
    title: '4. Contribution Feeds',
    badge: 'Ready → Receiving → Lost',
    desc: 'Monitors primary RTMP inputs with automatic backup path hot failover standby.',
  },
  {
    image: '/images/operational-analytics/truth/card-5.png',
    title: '5. Playback Delivery',
    badge: 'Healthy ⇄ Degraded',
    desc: 'Aggregated viewer status metrics from CDNs and endpoint players.',
  },
];

export default function TruthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/truth/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.37)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Stream and event operational truth.
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Lifecycle states, source and delivery incidents, current versus historical — always with
            observed-through time and source.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[12px] rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235] p-[20px]"
            >
              <div className="relative h-[110px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="text-[16px] font-bold text-white">{card.title}</p>
              <div className="flex items-start rounded-[4px] border-[0.5px] border-solid border-[#34d4ca] bg-[rgba(52,212,202,0.1)] px-[6px] py-[2px]">
                <p className="text-[10px] font-bold uppercase text-[#34d4ca]">{card.badge}</p>
              </div>
              <p className="w-full font-inter text-[13px] font-normal leading-[18px] text-[#aab3c4]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Monitoring vs Analytics callout */}
        <div className="flex w-full items-center gap-[16px] rounded-[12px] border border-solid border-[#4a8cfb] bg-[#162235] p-[24px]">
          <span className="size-[12px] shrink-0 rounded-full bg-[#4a8cfb]" />
          <div className="flex min-w-px flex-1 flex-col items-start gap-[4px]">
            <p className="text-[15px] font-bold text-white">MONITORING VS. ANALYTICS DISTINCTION</p>
            <p className="font-inter text-[13px] font-normal text-[#aab3c4]">
              Active network health status and instant ingest alarms go to Stream Monitoring. Retrospective
              auditing, pattern identification, and verifiable SLA tracking stay here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
