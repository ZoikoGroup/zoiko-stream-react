import React from 'react';
import Image from 'next/image';

const optionCards = [
  {
    title: 'Report a barrier',
    desc: 'Something was difficult or impossible to use.',
    link: 'Report a barrier →',
    img: '/images/accessibility/Person navigating a laptop.png',
  },
  {
    title: 'Request accessibility help',
    desc: 'You need help accessing a specific feature.',
    link: 'Request help →',
    img: '/images/accessibility/Person using assistive.png',
  },
  {
    title: 'Accessible format',
    desc: 'Ask for an alternative communication format.',
    link: 'Request a format →',
    img: '/images/accessibility/Video playback with captions.png',
  },
  {
    title: 'Accessibility for a Live Event',
    desc: 'Planning or attending an event with access needs.',
    link: 'Live Event accessibility →',
    img: '/images/accessibility/Conference audience.png',
  },
  {
    title: 'Accessibility documentation',
    desc: 'Requesting conformance documentation for procurement.',
    link: 'Trust Center / Enterprise →',
    img: '/images/accessibility/Documents representing.png',
  },
  {
    title: 'Recruiting accommodation',
    desc: 'Requesting an accommodation for a job application.',
    link: 'Go to Careers →',
    img: '/images/accessibility/Job interview setting representing.png',
  },
  {
    title: 'Time-sensitive production issue',
    desc: 'Active incident affecting an existing customer.',
    link: 'Get Support →',
    img: '/images/accessibility/Support team helping.png',
  },
  {
    title: 'Something else',
    desc: 'Not sure which option fits? Tell us anyway.',
    link: 'Start a request →',
    img: '/images/accessibility/Person typing a message.png',
  },
];

export function ChooseWhatYouNeedSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            TELL US WHAT YOU NEED
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Choose what you need.
        </h2>
      </div>

      {/* 8 Option Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {optionCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow cursor-pointer min-h-[384px]"
          >
            <div className="flex flex-col gap-4">
              <div className="w-full h-52 relative bg-slate-100">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-5 flex flex-col gap-2">
                <h3 className="text-neutral-700 text-base font-bold leading-snug">{card.title}</h3>
                <p className="text-gray-500 text-xs font-normal leading-5">{card.desc}</p>
              </div>
            </div>

            <div className="p-5">
              <span className="text-blue-400 text-xs font-bold">
                {card.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
