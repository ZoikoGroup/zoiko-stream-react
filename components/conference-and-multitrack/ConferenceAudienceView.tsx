'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceAudienceView() {
  const cards = [
    {
      num: 'MODULE 01',
      title: 'Program Home',
      desc: 'Timezone-locked agendas automatically orient viewers relative to active concurrent tracks.',
      img: '/images/conferences-and-multitrack/StepImage.png'
    },
    {
      num: 'MODULE 02',
      title: 'Track Selection',
      desc: 'Pivot instantly between channels with sub-second stream warmups and zero audio sync lag.',
      img: '/images/conferences-and-multitrack/StepImage (1).png'
    },
    {
      num: 'MODULE 03',
      title: 'Session Entry',
      desc: 'Authorization handshake verifies ticketing, credentials, and SSO gates dynamically.',
      img: '/images/conferences-and-multitrack/StepImage (2).png'
    },
    {
      num: 'MODULE 04',
      title: 'Live Experience',
      desc: 'Interactive stage engagement including synced slides, polls, Q&A, and multiple camera toggles.',
      img: '/images/conferences-and-multitrack/StepImage (3).png'
    },
    {
      num: 'MODULE 05',
      title: 'Recovery Rail',
      desc: 'Redirect delayed viewers gracefully or push them to immediate session replays with one click.',
      img: '/images/conferences-and-multitrack/StepImage (4).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-16 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h2 className="text-gray-900 text-4xl sm:text-4xl font-bold font-spaceGrotesk leading-[1.1] tracking-tight">
            Help every viewer find the right session
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Design seamless transition states. From agenda overview to the instant the speaker unmutes, govern how viewers change tracks, handle unexpected stream delays, and navigate access-controlled rooms.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image box */}
              <div className="relative h-56 sm:h-60 w-full bg-slate-100">
                <Image 
                  src={card.img} 
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content box */}
              <div className="p-6 flex-1 flex flex-col justify-start items-start gap-2.5">
                <div className="text-teal-500 text-xs font-bold font-spaceGrotesk uppercase tracking-wider">
                  {card.num}
                </div>
                <h3 className="text-slate-900 text-xl font-bold font-spaceGrotesk leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm font-normal font-spaceGrotesk leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Transparent placeholder card for large grid alignment */}
          <div className="hidden lg:block h-full opacity-0 pointer-events-none" aria-hidden />
        </div>

      </div>
    </section>
  );
}
