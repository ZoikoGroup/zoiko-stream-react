import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import imgAcc1 from '@/public/images/live-event-conferences/Rectangle (3).png';
import imgAcc2 from '@/public/images/live-event-conferences/Rectangle (4).png';
import imgAcc3 from '@/public/images/live-event-conferences/Rectangle (5).png';
import imgAcc4 from '@/public/images/live-event-conferences/Rectangle (6).png';

export function AccessibilityGlobalSection() {
  const cards = [
    {
      badge: 'COMPLIANCE INTAKE',
      title: 'Accessibility Planning',
      description: 'Map specialized screen-reader support, simplified keyboard controls, and multi-device listener portals during pre-event scoping.',
      image: imgAcc1,
    },
    {
      badge: 'LOW-LATENCY TRANSLATION',
      title: 'Live Captions',
      description: 'Natively render automated speech-to-text streams or prioritize live human transcription loops inside the primary program player.',
      image: imgAcc2,
    },
    {
      badge: 'MULTIPLE AUDIO CHANNELS',
      title: 'Translation & Languages',
      description: 'Configure secondary voiceover translation tracks or parallel localized subtitles options, matching global timezone circles.',
      image: imgAcc3,
    },
    {
      badge: 'STANDARDIZED DELIVERY',
      title: 'Per-Scope Compatibility',
      description: 'Ensure all virtual stage controls and responsive video players align with modern global accessibility compliance models.',
      image: imgAcc4,
    },
  ];

  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-white text-slate-900 overflow-hidden border-b border-gray-200">
      {/* Background Overlay */}
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
      <div className="size-96 -left-35 -top-22 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-['Space_Grotesk'] text-zinc-950 leading-tight">
            Accessibility, Captions &amp; Languages
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Make virtual participation effortless. Embed localized translations, automated speech-to-text layers, and fully responsive controls directly in your master player.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-40 bg-slate-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <span className="text-blue-500 text-xs font-bold font-['IBM_Plex_Mono'] uppercase tracking-wider">
                  {card.badge}
                </span>
                <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
