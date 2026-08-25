import Image from 'next/image';

const CARDS = [
  {
    img: '/images/developers-overview/now/card-1.png',
    title: 'I Am Evaluating',
    desc: 'Understand what ZoikoStream offers before committing. Start with documentation and platform evidence.',
    cta: 'Start Evaluating',
    highlight: false,
    buttonClass: 'border border-solid border-[#aab3c4] bg-[#10151e] text-white',
  },
  {
    img: '/images/developers-overview/now/card-2.png',
    title: 'I Want a Working Stream',
    desc: 'Get from developer access to a live, playable stream as fast as the platform allows.',
    cta: 'Begin Quickstart',
    highlight: true,
    buttonClass: 'bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] text-[#0a0f1a]',
  },
  {
    img: '/images/developers-overview/now/card-3.png',
    title: 'I Am Preparing Production',
    desc: 'Review monitoring, errors, rate limits, status and change governance before launch.',
    cta: 'Review Operations',
    highlight: false,
    buttonClass: 'border-[1.5px] border-solid border-[#aab3c4] bg-transparent text-white',
  },
];

export default function NowSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#232b3a] px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image src="/images/developers-overview/now/section-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.72)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-white md:text-[38px]">
            Where Are You Now?
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Choose the entry point that matches your current need. No hidden scoring — just a clear starting
            place.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`flex flex-col items-start gap-[24px] overflow-hidden rounded-[12px] border-[1.5px] border-solid bg-[#10151e] p-[32px] ${
                card.highlight ? 'border-[#34d4ca]' : 'border-[#232b3a]'
              }`}
            >
              <div className="relative h-[160px] w-full overflow-hidden rounded-[8px]">
                <Image src={card.img} alt="" fill className="object-cover" />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px]">
                <p className="text-[22px] font-bold leading-normal text-white">{card.title}</p>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#aab3c4]">
                  {card.desc}
                </p>
              </div>
              <button
                type="button"
                className={`flex w-full items-center justify-center whitespace-nowrap rounded-[8px] px-[28px] py-[14px] text-[15px] font-bold transition-opacity hover:opacity-90 ${card.buttonClass}`}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
