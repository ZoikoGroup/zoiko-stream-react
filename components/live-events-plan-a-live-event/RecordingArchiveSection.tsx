import React from 'react';
import Image from 'next/image';
import section11Bg from '@/public/images/live-events-plan-a-live-event/section-11bg.png';

const CARDS = [
  {
    title: 'Recording Intent',
    tag: 'Capture clean vs mixed?',
    desc: 'Categorize whether you require master multi-region archives or raw camera-source isolates.',
  },
  {
    title: 'Replay Access',
    tag: 'DVR scrubbing permitted?',
    desc: 'Indicate if virtual attendees may pause, restart, or skip backward during live transmission windows.',
  },
  {
    title: 'Archive & Preserve',
    tag: 'Determine retention?',
    desc: 'Route data compliance periods and sovereign long-term asset storage bounds to structural handlers.',
  },
  {
    title: 'Post-Event Editing',
    tag: 'Clips required?',
    desc: 'Specify if planning schema recognizes custom VOD package compilation and highlight editing paths.',
  },
];

export function RecordingArchiveSection() {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-28 py-20 lg:py-24 bg-slate-950 text-white overflow-hidden border-t border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={section11Bg}
          alt="Recording & Archive Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight text-slate-100">
            Recording, Replay &amp; Archive
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Capture recording intent, replay needs, and archive requirements as planning categories. No automatic recording, instant availability, or retention guarantees.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-7 bg-zinc-900/80 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 backdrop-blur-sm space-y-3 hover:border-teal-500/50 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                  {card.title}
                </h3>
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] block">
                  {card.tag}
                </span>
              </div>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
