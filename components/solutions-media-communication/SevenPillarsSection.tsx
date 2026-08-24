import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const pillars = [
  {
    num: '1. Signal',
    desc: 'What sources are expected and is contribution ready?',
    img: '/images/Media-communications-page/Rectangle  (39).png',
  },
  {
    num: '2. Production',
    desc: 'Who can move and approve media through production?',
    img: '/images/Media-communications-page/Rectangle  (34).png',
  },
  {
    num: '3. Distribution',
    desc: 'Where is the media intended to go and what is available now?',
    img: '/images/Media-communications-page/Rectangle  (35).png',
  },
  {
    num: '4. Rights & Access',
    desc: 'Who may receive it, under what rule, and when does it change?',
    img: '/images/Media-communications-page/Rectangle  (36).png',
  },
  {
    num: '5. Accessibility',
    desc: 'Which captions and languages are planned, ready, or unavailable?',
    img: '/images/Media-communications-page/Rectangle  (37).png',
  },
  {
    num: '6. Observability',
    desc: 'What operational state is known, degraded, or under incident?',
    img: '/images/Media-communications-page/Rectangle  (38).png',
  },
];

export function SevenPillarsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Seven pillars that govern every media workflow
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            From first signal to lasting preservation — each pillar defines what must be true before the next stage proceeds.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-36 bg-slate-200">
                <Image
                  src={item.img}
                  alt={item.num}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                    {item.num}
                  </span>
                </div>
                <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
