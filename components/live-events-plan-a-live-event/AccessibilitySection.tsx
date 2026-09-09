import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import card1Img from '@/public/images/live-events-plan-a-live-event/CardImage (3).png';
import card2Img from '@/public/images/live-events-plan-a-live-event/CardImage (4).png';
import card3Img from '@/public/images/live-events-plan-a-live-event/CardImage (5).png';
import card4Img from '@/public/images/live-events-plan-a-live-event/CardImage (6).png';

const CARDS = [
  {
    title: 'Functional Needs',
    desc: 'Specify categories like keyboard navigation, visual enlargement, or screen-reader targets to configure player output.',
    image: card1Img,
  },
  {
    title: 'Live Captions',
    desc: 'Select auto-generated speech-to-text, professional stenographer routing, or fallback offline transcribing.',
    image: card2Img,
  },
  {
    title: 'Translation & Language',
    desc: 'Select secondary target languages to structure alternate audio channel bindings and translation tracks.',
    image: card3Img,
  },
  {
    title: 'Accessible Player',
    desc: 'Deploy lightweight player configurations compliant with international screen-reader guidelines.',
    image: card4Img,
  },
];

export function AccessibilitySection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden">
      {/* Required White Background Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-slate-950 leading-tight">
            Accessibility, Captions &amp; Language
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            State functional accessibility requirements and language needs as planning categories. No diagnosis or disability details — route to Accessibility and Captions authorities for specialist review.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden shadow-sm flex flex-col justify-start items-start"
            >
              <div className="relative w-full h-40 bg-slate-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1">
                <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
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
