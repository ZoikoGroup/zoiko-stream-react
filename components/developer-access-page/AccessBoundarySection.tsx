import Image from 'next/image';
import React from 'react';

const CARDS = [
  {
    img: 'card-0.png',
    title: 'Account Identity',
    desc: 'Which signed-in identity is acting? Show only safe account context.',
  },
  {
    img: 'card-1.png',
    title: 'Workspace Membership',
    desc: 'Which workspace context applies? Current membership and role.',
  },
  {
    img: 'card-2.png',
    title: 'Capability & Environment',
    desc: 'Which actions and environments are available within your workspace.',
  },
];

export default function AccessBoundarySection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/access-boundary/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-158px] top-[-228px] size-[420px]">
        <Image src="/images/developer-access-page/access-boundary/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-228px] right-[-158px] size-[520px]">
        <Image src="/images/developer-access-page/access-boundary/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            What &quot;access&quot; actually means
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Developer access grants workspace membership — not API authorization, not content entitlements, not production deployment rights.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc]"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src={`/images/developer-access-page/access-boundary/${card.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[12px] p-[24px]">
                <h3 className="w-full text-[20px] font-bold leading-normal text-[#0f1b2d]">
                  {card.title}
                </h3>
                <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
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
