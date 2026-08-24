import React from 'react';
import Image from 'next/image';

import card57 from '@/public/images/Organization-overview/workspace-image.png';
import bg147 from '@/public/images/Organization-overview/bg (147).png';


const buildFeatures = [
  { title: 'Programmable video', desc: 'Interactive streaming embedded cleanly via developer APIs and native webhooks.' },
  { title: 'Implementation fit', desc: 'Select between low-latency client SDKs or zero-governance anonymous scale.' },
  { title: 'Secure playback', desc: 'Token-gated authorization keys enforcing regional playback boundaries.' },
  { title: 'Observability', desc: 'Continuous pipeline latency telemetry and stream state status.' },
  { title: 'Recording/Replay', desc: 'Automated archive capture immediately packaged into durable cold storage.' },
];

export default function ProductBuildSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
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
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Build and operate video inside a product.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Flow Graphic Card */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-6">
            <div className="relative w-full h-52 bg-slate-100 rounded-lg overflow-hidden">
              <Image
                src={card57}
                alt="Pipeline Flow Model"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase">
                PIPELINE FLOW MODEL
              </span>

              <div className="flex items-center gap-3">
                <span className="px-3 py-2 bg-slate-200 rounded-md text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                  App Client
                </span>
                <span className="text-blue-500 font-bold">→</span>
                <span className="px-3 py-2 bg-slate-200 rounded-md text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                  APIs/SDKs
                </span>
                <span className="text-blue-500 font-bold">→</span>
                <span className="px-3 py-2 bg-slate-200 rounded-md text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                  Analytics
                </span>
              </div>
            </div>
          </div>

          {/* Right Feature List */}
          <div className="flex flex-col gap-6">
            {buildFeatures.map((f, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-1.5 bg-slate-200 rounded-full text-blue-500 shrink-0 mt-0.5">
                  <div className="size-4 flex items-center justify-center font-bold text-xs">✓</div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {f.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
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
                Start building
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
