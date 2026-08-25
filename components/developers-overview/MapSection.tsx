import Image from 'next/image';

const CARDS = [
  {
    img: '/images/developers-overview/map/card-1.png',
    eyebrow: '01 / MAP START',
    title: 'Developers Overview',
    desc: 'Strategic entryway, architecture maps, and high-level structural patterns.',
  },
  {
    img: '/images/developers-overview/map/card-2.png',
    eyebrow: '02 / DOCS',
    title: 'Documentation',
    desc: 'Full technical reference for setup, deployment, and library integrations.',
  },
  {
    img: '/images/developers-overview/map/card-3.png',
    eyebrow: '03 / QUICKSTART',
    title: 'Quickstart',
    desc: 'Credentials to working stream. Get up and running in under five minutes.',
  },
  {
    img: '/images/developers-overview/map/card-4.png',
    eyebrow: '04 / ENDPOINTS',
    title: 'API Reference',
    desc: 'Every single endpoint, typed and documented with interactive console tests.',
  },
  {
    img: '/images/developers-overview/map/card-5.png',
    eyebrow: '05 / IDENTITY',
    title: 'Authentication',
    desc: 'Manage API keys, generate session tokens, and configure strict security scopes.',
  },
  {
    img: '/images/developers-overview/map/card-6.png',
    eyebrow: '06 / DEVS',
    title: 'Developer Access',
    desc: 'The real access model, billing states, node routing, and developer support SLAs.',
  },
];

export default function MapSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/developers-overview/map/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/map/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/developers-overview/map/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-125px] right-[-127px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-[#0a0f1a] md:text-[38px]">
            GET STARTED — Know the Model Before You Write Code
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Seven destinations in exact order. Each one tells you when it is useful.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[20px]"
            >
              <div className="relative h-[100px] w-full overflow-hidden rounded-[6px]">
                <Image src={card.img} alt="" fill className="object-cover" />
              </div>
              <p className="text-[12px] font-bold leading-normal text-[#4f5e74]">{card.eyebrow}</p>
              <p className="text-[16px] font-bold leading-normal text-[#0a0f1a]">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-normal text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
