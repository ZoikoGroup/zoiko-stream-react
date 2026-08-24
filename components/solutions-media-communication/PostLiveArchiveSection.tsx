import React from 'react';
import Image from 'next/image';

const steps = [
  { step: '1', title: 'Capture Auth', desc: 'Recording credentials check' },
  { step: '2', title: 'Recording', desc: 'Multi-destination ingestion' },
  { step: '3', title: 'Capture Result', desc: 'Manifest verification' },
  { step: '4', title: 'Asset Registry', desc: 'Provenance stamping' },
  { step: '5', title: 'Readiness Review', desc: 'Compliance verification' },
  { step: '6', title: 'Publication', desc: 'Distribution active' },
  { step: '7', title: 'Archive/Preserve', desc: 'Cold storage sync' },
];

const cards = [
  {
    title: 'Capture State',
    desc: 'Real-time state flags monitoring Complete, Partial, Failed, or Unknown recordings.',
    img: '/images/Media-communications-page/Rectangle  (56).png',
  },
  {
    title: 'Replay Readiness Review',
    desc: 'Interactive verification steps ensuring accessibility tracks and metadata are complete before publication.',
    img: '/images/Media-communications-page/Rectangle  (57).png',
  },
  {
    title: 'Audience Continuity',
    desc: 'Seamless transition controls letting active live audiences transition to interactive replays without losing session data.',
    img: '/images/Media-communications-page/Rectangle  (58).png',
  },
  {
    title: 'Versions & Corrections',
    desc: 'Cryptographic logging of modified media blocks allowing non-destructive correction of live capture records.',
    img: '/images/Media-communications-page/Rectangle  (50).png',
  },
  {
    title: 'Retention & Archive',
    desc: 'Automatic policy routing from fast hot-cache layers to highly durable long-term cold archives.',
    img: '/images/Media-communications-page/Rectangle  (51).png',
  },
];

export function PostLiveArchiveSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (186).png"
          alt="Post Live Archive Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Extend value after live — with governed capture, replay, and archive
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Recording authorization, replay readiness, audience continuity, versioned corrections, and preservation handoff.
          </p>
        </div>

        {/* 7-Stage Pipeline Stepper */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-800 rounded-lg border border-gray-800 flex flex-col justify-start items-start gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-950 rounded-xl flex justify-center items-center">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">{st.step}</span>
                </div>
                <span className="text-white text-xs font-bold font-['Space_Grotesk'] truncate">
                  {st.title}
                </span>
              </div>
              <span className="text-slate-400 text-xs font-normal font-['Inter'] leading-tight">
                {st.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 5 Feature Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-950">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5 line-clamp-4">
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
