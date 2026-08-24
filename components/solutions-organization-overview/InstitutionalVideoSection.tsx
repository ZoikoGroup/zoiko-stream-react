import React from 'react';
import Image from 'next/image';

import bg149 from '@/public/images/Organization-overview/bg (150).png';
import lectureImage from '@/public/images/Organization-overview/lecture-image.png';

const institutionalFeatures = [
  { title: 'Audience access', desc: 'SSO pathways protecting course boundaries alongside inclusive public access hooks.' },
  { title: 'Accessibility', desc: 'Automated real-time translations, transcript exports, and mandatory compliance.' },
  { title: 'Replay', desc: 'Instant lesson recording seamlessly mapped back into central storage schemas.' },
  { title: 'Governance', desc: 'Strict data privacy boundaries protecting participant identities and locations.' },
];

export default function InstitutionalVideoSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg149}
          alt="Institutional Video Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Accessible, controlled, replayable institutional video.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card Visual */}
          <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
            <div className="relative w-full h-60 bg-slate-950 rounded-lg overflow-hidden border border-gray-800">
              <Image
                src={lectureImage}
                alt="Institutional Broadcast Preview"
                fill
                className="object-cover opacity-90"
              />
            </div>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              Durable institutional broadcasts designed for high security and immediate automated transcript synchronization.
            </p>
          </div>

          {/* Right Feature List */}
          <div className="flex flex-col gap-6">
            {institutionalFeatures.map((f, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-1.5 bg-gray-800 rounded-full text-teal-400 shrink-0 mt-0.5">
                  <div className="size-4 flex items-center justify-center font-bold text-xs">✓</div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <button
                type="button"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Explore this path
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
