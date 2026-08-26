import Image from 'next/image';

const CARDS = [
  {
    phase: 'PHASE 01',
    title: 'GET STARTED',
    desc: 'Understand access, credentials, documentation and your first success. Start coding with robust playground metrics.',
    highlight: true,
    accent: 'text-[#4a8cfb]',
    badgeText: 'text-[#4a8cfb]',
  },
  {
    phase: 'PHASE 02',
    title: 'BUILD',
    desc: 'Choose APIs, SDKs, protocols, webhooks, playback and player surfaces. Implement zero-delay webcasing with safety.',
    highlight: false,
    accent: 'text-[#4f5e74]',
    badgeText: 'text-[#4f5e74]',
  },
  {
    phase: 'PHASE 03',
    title: 'OPERATE',
    desc: 'Monitor, analyze, manage recordings, handle errors, track changes, verify status. Fully optimized for production scaling.',
    highlight: false,
    accent: 'text-[#4f5e74]',
    badgeText: 'text-[#4f5e74]',
  },
];

export default function JourneySection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/journey/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/journey/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-210px] top-[-126px] size-[420px]"
      />
      <img
        src="/images/developers-overview/journey/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-166px] right-[-102px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-[#0a0f1a] md:text-[38px]">
            The Developer Path
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Three phases. One platform. From first stream to production operation.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.phase}
              className={`flex flex-col items-start gap-[20px] rounded-[12px] border-[1.5px] border-solid bg-[#f8fafc] p-[32px] ${
                card.highlight ? 'border-[#34d4ca]' : 'border-[#e1e6eb]'
              }`}
            >
              <div className="flex items-start rounded-[4px] border border-solid border-[#e1e6eb] bg-white px-[8px] py-[4px]">
                <p className={`whitespace-nowrap text-[11px] font-bold ${card.badgeText}`}>{card.phase}</p>
              </div>
              <p className="w-full text-[22px] font-bold leading-normal text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                {card.desc}
              </p>
              <button
                type="button"
                className={`flex items-center text-[14px] font-bold ${card.accent}`}
              >
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
