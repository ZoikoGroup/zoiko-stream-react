import React from 'react';
import Image from 'next/image';

const mockups = [
  {
    title: 'Access Gate',
    desc: 'Media title, neutral audience label, verification action, and privacy notice before entrance.',
    img: '/images/solution-private-audience-delivery/mockup.png',
  },
  {
    title: 'Allowed Playback',
    desc: 'Continuous feed rendering with embedded captions and real-time session health telemetry.',
    img: '/images/solution-private-audience-delivery/mockup (1).png',
  },
  {
    title: 'Denied Screen',
    desc: 'Plain-language explanation with clear, actionable request-access options, shielding rule secrets.',
    img: '/images/solution-private-audience-delivery/mockup (2).png',
  },
];

export function ExplainAccessSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/75 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (4).png"
          alt="Explain Access Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Explain access without leaking policy
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Design every state as a usable experience, not a generic error page.
          </p>
        </div>

        {/* 3 Mockup Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockups.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 hover:border-gray-700 transition-colors backdrop-blur-sm"
            >
              <div className="relative w-full h-36 rounded-lg overflow-hidden bg-black">
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold ">{m.title}</h3>
                <p className="text-slate-400 text-xs font-normal  leading-5">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
