import React from 'react';
import Image from 'next/image';

import bg5 from '@/public/images/resource-accessibility/section-5bg.png';
import img29 from '@/public/images/resource-accessibility/card-image (29).png';
import img30 from '@/public/images/resource-accessibility/card-image (30).png';
import img31 from '@/public/images/resource-accessibility/card-image (31).png';
import img32 from '@/public/images/resource-accessibility/card-image (32).png';

const LIMITATIONS = [
  {
    title: 'Complex data table navigation',
    badge: 'Fix In Progress',
    badgeBg: 'bg-amber-100 text-amber-600',
    scope: 'Web Application',
    impact:
      'Row selection currently requires pointing device interaction. Keyboard tab focus does not announce nested action links consistently.',
    workaround:
      'Use Tab key to focus cell and Enter to activate individual row drilldowns.',
    image: img29,
  },
  {
    title: 'Live caption delay in low-bandwidth',
    badge: 'Investigating',
    badgeBg: 'bg-sky-100 text-sky-700',
    scope: 'Player SDK',
    impact:
      'Under networks throttled below 1.5Mbps, closed captions may suffer an accumulated 2-3 second sync drift behind active audio.',
    workaround:
      "Switch the player resolution to 'Audio Only' or 'Low SD' to prioritize subtitle stream payload ingestion.",
    image: img30,
  },
  {
    title: 'Color contrast in analytics charts',
    badge: 'Planned',
    badgeBg: 'bg-slate-100 text-slate-600',
    scope: 'Admin Console',
    impact:
      'Two secondary status color metrics in our real-time telemetry line graphs measure at 3.8:1 contrast ratio against the default theme backdrop.',
    workaround:
      'Enable High Contrast overlay mode in the Console user preferences panel.',
    image: img31,
  },
  {
    title: 'Live chat screen reader notices',
    badge: 'Fix In Progress',
    badgeBg: 'bg-amber-100 text-amber-600',
    scope: 'Web Application',
    impact:
      'Incoming live chat messages are not consistently pushed to active screen reader vocalization queues during heavy message throughput peaks.',
    workaround:
      'We recommend utilizing manual refresh shortcut key sequences to read updated logs directly.',
    image: img32,
  },
];

export default function AccessibilityLimitationsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg5}
          alt="Known Limitations Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Current known limitations
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Barriers are documented with affected scope, impact, workaround when verified, and current status.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {LIMITATIONS.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start overflow-hidden hover:outline-teal-400/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-950 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <div className={`px-2 py-1 ${item.badgeBg} rounded-md shrink-0`}>
                  <span className="text-xs font-semibold font-['Inter']">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="text-xs font-normal font-['Inter']">
                <span className="text-white font-bold">Scope: </span>
                <span className="text-slate-400">{item.scope}</span>
              </div>

              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                {item.impact}
              </p>

              <div className="pt-1 text-xs font-normal font-['Inter'] leading-relaxed">
                <span className="text-teal-400 font-bold">Workaround: </span>
                <span className="text-teal-400">{item.workaround}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
