import Image from 'next/image';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Live Product Video',
    desc: 'Embed streaming interfaces directly into your native custom consumer or enterprise dashboard pages.',
    protocol: 'WHIP / WebRTC',
  },
  {
    img: 'card-1.png',
    title: 'Live Broadcast',
    desc: 'Scale global produced events to millions of concurrent viewers over redundant content paths.',
    protocol: 'RTMP / SRT',
  },
  {
    img: 'card-2.png',
    title: 'Secure Playback',
    desc: 'Establish strict access control boundaries for private internal compliance viewing.',
    protocol: 'SAML SSO / JWT',
  },
  {
    img: 'card-3.png',
    title: 'VOD Preservation',
    desc: 'Automate long-term compliance recording, audio separation, and regulatory storage locks.',
    protocol: 'S3 API / Cold Backup',
  },
  {
    img: 'card-4.png',
    title: 'Player Integration',
    desc: 'Optimize buffer profiles and analytics logs natively on the web or mobile clients.',
    protocol: 'HLS / DASH SDKs',
  },
  {
    img: 'card-5.png',
    title: 'Operational Analytics',
    desc: 'Monitor pipeline latency, stream statuses, and protocol transitions in real-time.',
    protocol: 'Webhook / HTTP Logs',
  },
];

export default function WorkflowsSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/documentation-page/workflows/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(15,27,45,0.77)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
          Find Guidance by What You Are Building
        </h2>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[24px]"
            >
              <div className="relative h-[120px] w-full overflow-hidden rounded-[8px]">
                <Image src={`/images/documentation-page/workflows/${card.img}`} alt="" fill className="object-cover" />
              </div>
              <p className="text-[18px] font-bold leading-normal text-white">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                {card.desc}
              </p>
              <div className="h-0 w-full border-t border-solid border-[#232b3a]" />
              <p className="whitespace-nowrap text-[11px] font-bold leading-normal text-[#34d4ca]">
                {card.protocol}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-[20px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-[8px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/documentation-page/workflows/icon-activity.svg"
              alt=""
              className="size-[14px] shrink-0"
            />
            <p className="text-[13px] font-bold leading-normal text-[#aab3c4]">
              LIFECYCLE COVERED: Ingestion, Transcoding, DRM, CDN, Analytics, Archive
            </p>
          </div>
          <button
            type="button"
            className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[24px] py-[12px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
          >
            Open Workflow Guidance
          </button>
        </div>
      </div>
    </section>
  );
}
