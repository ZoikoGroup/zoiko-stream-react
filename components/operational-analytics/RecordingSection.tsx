import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/recording/card-1.png',
    badge: 'ACTIVE INGEST',
    title: '1. Live Window Ingest',
    desc: 'Monitors primary contribution encoder handshakes alongside live viewer session thresholds.',
  },
  {
    image: '/images/operational-analytics/recording/card-2.png',
    badge: 'PROCESSING STATE',
    title: '2. Recording Scope Configuration',
    desc: 'Captures raw multiplexed streams and processes multi-channel audio tracks in isolation.',
  },
  {
    image: '/images/operational-analytics/recording/card-3.png',
    badge: 'READY STATE',
    title: '3. Replay Asset Qualification',
    desc: 'Secures regulatory compliance markers and embeds timed-text subtitles in archival assets.',
  },
  {
    image: '/images/operational-analytics/recording/card-4.png',
    badge: 'INHERITANCE PATTERN',
    title: '4. Audience Security Alignment',
    desc: 'Verifies user access scopes match or restrict target parameters set in the original live event.',
  },
  {
    image: '/images/operational-analytics/recording/card-5.png',
    badge: 'VOD PERFORMANCE',
    title: '5. Replay Playback Telemetry',
    desc: 'Tracks connection starts and playback continuity specifically inside VOD client player code.',
  },
  {
    image: '/images/operational-analytics/recording/card-6.png',
    badge: '7-YEAR RETENTION',
    title: '6. Immutable Cold Preservation',
    desc: 'Locks historical session telemetry and records to compliance storage for statutory audits.',
  },
];

export default function RecordingSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] bg-[#0a0d14] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/operational-analytics/recording/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.74)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Recording and replay continuation
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Separate live performance from replay performance — preserve recording readiness and audience
            continuity.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[#162235] p-[24px]"
            >
              <div className="relative h-[130px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-start rounded-[4px] border border-solid border-[#232b3a] bg-[#0f1b2d] px-[8px] py-[4px]">
                  <p className="whitespace-nowrap text-[11px] font-bold text-[#34d4ca]">{card.badge}</p>
                </div>
              </div>
              <p className="w-full text-[18px] font-bold text-white">{card.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
