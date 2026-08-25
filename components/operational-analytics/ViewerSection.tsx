import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/viewer/card-1.png',
    title: '1. Playback Success',
    desc: 'Verified start-attempt and successful handshake playback ratios.',
  },
  {
    image: '/images/operational-analytics/viewer/card-2.png',
    title: '2. Startup Experience',
    desc: 'Detailed click-to-first-frame distribution curves and network overhead diagnostics.',
  },
  {
    image: '/images/operational-analytics/viewer/card-3.png',
    title: '3. Interruption Rates',
    desc: 'Detailed rebuffering frequency tracking, duration, and local network packet loss records.',
  },
  {
    image: '/images/operational-analytics/viewer/card-4.png',
    title: '4. System Failures',
    desc: 'Explicit browser player errors mapped to underlying CDN delivery failure codes.',
  },
  {
    image: '/images/operational-analytics/viewer/card-5.png',
    title: '5. Video Quality Levels',
    desc: 'Rendition and bitrate choices tracked natively over the stream lifecycle.',
  },
  {
    image: '/images/operational-analytics/viewer/card-6.png',
    title: '6. Device Segmentation',
    desc: 'Coarse platform and browser category analytics keeping viewer privacy intact.',
  },
];

export default function ViewerSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/viewer/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Viewer playback experience
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Startup, success, interruption, errors, and quality evidence — only when verified.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[12px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[20px]"
            >
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="text-[18px] font-bold text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
