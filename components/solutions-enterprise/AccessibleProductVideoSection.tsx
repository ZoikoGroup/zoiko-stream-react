import React from 'react';
import Image from 'next/image';

const accessCards = [
  {
    title: 'Captions & Subtitles',
    desc: 'Verify multi-dialect automated generation, human correction cycles, and explicit reviewer handoffs.',
    pills: ['Requested', 'Processing', 'Draft', 'Needs review', 'Approved', 'Published'],
    img: '/images/Enterprises/Card-Image (80).png',
  },
  {
    title: 'Live Caption Health',
    desc: 'Telemetry loops confirming real-time audio pipeline transmission and automated captioning latency.',
    pills: ['Not configured', 'Expected', 'Receiving', 'Degraded', 'Lost', 'Restored'],
    img: '/images/Enterprises/Card-Image (81).png',
  },
  {
    title: 'Translation & Languages',
    desc: 'Control the distribution matrix of secondary audio tracks and synthetic real-time translation pipelines.',
    pills: ['Available', 'Requires review', 'Not available', 'Pending'],
    img: '/images/Enterprises/Card-Image (82).png',
  },
  {
    title: 'Player Interaction',
    desc: 'Verifiable WCAG keyboard trapping, screen-reader aria updates, and custom focus boundaries.',
    noteLabel: 'Standard: ',
    noteVal: 'WCAG 2.2 AA Compliance Gate',
    img: '/images/Enterprises/Card-Image (83).png',
  },
  {
    title: 'Replay Continuity',
    desc: 'Ensure that edited post-live language tracks persist and map correctly onto cold storage recordings.',
    noteLabel: 'System SOP: ',
    noteVal: 'Immutable multi-track audio sync',
    img: '/images/Enterprises/Card-Image (84).png',
  },
  {
    title: 'Barrier Support',
    desc: 'Direct escalation avenues and accessibility helpdesk routing verified by live engineering.',
    noteLabel: 'Response: ',
    noteVal: '24/7 Event Concierge active',
    img: '/images/Enterprises/Card-Image (85).png',
  },
];

export function AccessibleProductVideoSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (170).png"
          alt="Accessibility Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Accessible product video is a product requirement, <br className="hidden sm:inline" />not a compliance badge.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Define required audience/language/track scope and review ownership across live, replay and support.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessCards.map((ac, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-950">
                <Image
                  src={ac.img}
                  alt={ac.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-6 flex flex-col justify-start items-start gap-4">
                <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">{ac.title}</h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">{ac.desc}</p>
                <div className="w-full border-t border-gray-800 pt-3">
                  {ac.pills ? (
                    <div className="flex flex-wrap gap-2">
                      {ac.pills.map((pill, pIdx) => (
                        <span key={pIdx} className="px-2 py-1 bg-gray-800 rounded text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                          {pill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs font-['Space_Grotesk']">
                      <span className="text-teal-400 font-bold">{ac.noteLabel}</span>
                      <span className="text-slate-500 font-normal">{ac.noteVal}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
