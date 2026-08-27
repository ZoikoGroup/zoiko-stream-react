import React from 'react';
import Image from 'next/image';

const questionCards = [
  {
    title: 'Verify one stream',
    desc: 'Confirm current lifecycle, freshness and health evidence.',
    link: 'Check a stream →',
    img: '/images/stream-monitoring/image (1).jpg',
  },
  {
    title: 'Diagnose ingest',
    desc: 'Isolate source/transport/ingest evidence.',
    link: 'Diagnose ingest →',
    img: '/images/stream-monitoring/image (2).jpg',
  },
  {
    title: 'Inspect media or pipeline',
    desc: 'Review signal and processing evidence when supported.',
    link: 'Inspect media →',
    img: '/images/stream-monitoring/image (3).jpg',
  },
  {
    title: 'Configure alerts',
    desc: 'Define conditions, scope, destination and ownership when supported.',
    link: 'Configure alerts →',
    img: '/images/stream-monitoring/image (4).jpg',
  },
  {
    title: 'Review an incident',
    desc: 'Correlate state changes, alerts and recovery evidence.',
    link: 'Review incident →',
    img: '/images/stream-monitoring/image (5).jpg',
  },
  {
    title: 'Monitor a fleet',
    desc: 'Prioritize streams that need attention now.',
    link: 'Monitor fleet →',
    img: '/images/stream-monitoring/image (6).jpg',
  },
];

export function StartWithQuestionSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              START WITH THE QUESTION
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Start with the operational question.
          </h2>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {questionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-60 relative bg-slate-100 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3 justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <h3 className="text-neutral-700 text-base font-bold">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-5">{card.desc}</p>
                </div>

                <span className="text-blue-500 text-xs font-bold pt-2 cursor-pointer hover:underline">
                  {card.link}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
