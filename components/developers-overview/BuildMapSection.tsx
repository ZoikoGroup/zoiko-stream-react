import Image from 'next/image';

const CARDS = [
  {
    img: '/images/developers-overview/build-map/card-1.png',
    title: '01 SDKs',
    desc: 'Maintained libraries and current supported surfaces.',
    highlight: true,
  },
  {
    img: '/images/developers-overview/build-map/card-2.png',
    title: '02 Live Streaming API',
    desc: 'Publish and manage live broadcast workflows.',
    highlight: false,
  },
  {
    img: '/images/developers-overview/build-map/card-3.png',
    title: '03 Video-on-Demand API',
    desc: 'Upload, encode and deliver on-demand media.',
    highlight: false,
  },
  {
    img: '/images/developers-overview/build-map/card-4.png',
    title: '04 Media Protocols',
    desc: 'RTMPS, SRT, WHIP and other qualified protocols.',
    highlight: false,
  },
  {
    img: '/images/developers-overview/build-map/card-5.png',
    title: '05 Webhooks & Events',
    desc: 'React to stream and media state changes.',
    highlight: false,
  },
  {
    img: '/images/developers-overview/build-map/card-6.png',
    title: '06 Secure Playback',
    desc: 'Controlled playback mechanisms.',
    highlight: false,
  },
  {
    img: '/images/developers-overview/build-map/card-7.png',
    title: '07 Player Integration',
    desc: 'Embed a production-ready player experience across all client devices.',
    highlight: false,
  },
];

export default function BuildMapSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developers-overview/build-map/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.88)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            BUILD — Choose the Right Developer Surface
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Use the surface that matches the job. Verify exact versions, protocols and mechanics in the
            authoritative destination.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid bg-[#10151e] ${
                card.highlight ? 'border-[#34d4ca]' : 'border-[#232b3a]'
              }`}
            >
              <div className="relative h-[120px] w-full overflow-hidden">
                <Image src={card.img} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[20px]">
                <p className="text-[16px] font-bold leading-normal text-white">{card.title}</p>
                <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#aab3c4]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
