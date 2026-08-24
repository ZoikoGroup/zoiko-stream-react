import React from 'react';
import Image from 'next/image';

import bg159 from '@/public/images/Developers-product-teams/bg (161).png';

const controlFluxItems = [
  { title: 'Client Application', desc: 'Approved UX SDK wrappers', color: 'bg-teal-400' },
  { title: 'Product Backend', desc: 'Secret server keys & JWT signer', color: 'bg-blue-500' },
  { title: 'ZoikoStream Control', desc: 'API outcome dispatcher', color: 'bg-teal-400' },
  { title: 'Media Ingest', desc: 'Global edge telemetry hooks', color: 'bg-blue-500' },
];

export default function ArchitectureFitSection() {
  return (
    <section className="relative w-full bg-gray-950/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg159}
          alt="Architecture Fit Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Fit the media layer into the product architecture you already own.
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-6xl">
            Keep product identity, business rules, application data, UX, and customer relationships in the right place while integrating media control, contribution, playback, access and operational signals through approved ZoikoStream surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Integrated Control Flux */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
            <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
              INTEGRATED CONTROL FLUX
            </span>

            <div className="flex flex-col gap-3">
              {controlFluxItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-2.5 rounded-full ${item.color}`} />
                    <span className="text-white text-base font-bold font-['Space_Grotesk']">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs font-normal font-['Inter']">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Logical Separation Card */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5 justify-center">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Logical separation boundaries
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
              ZoikoStream does not store user profiles or handle direct payment systems. All private client data routing remains completely within your secure server stack. Playback tokens are validated cryptographically at the CDNs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
