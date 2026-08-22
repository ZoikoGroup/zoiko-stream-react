import React from 'react';
import Image from 'next/image';
import { Activity, BarChart3, Grid, Layers } from 'lucide-react';

export default function OperationsAnalyticsSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (83).png"
          alt="Operations Analytics Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Operations, monitoring, and analytics
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Durable media context for health and measurement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5">
            <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
              <Activity className="size-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Stream Monitoring
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Live/operational health signals, incidents, and observations. Media management provides stable identity and version context for evidence linkage.
              </p>
            </div>
          </div>

          <div className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5">
            <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
              <BarChart3 className="size-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Analytics
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Authorized usage, experience, and performance interpretation. Links to exact media, version, audience, and time context.
              </p>
            </div>
          </div>

          <div className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-sm flex flex-col gap-5">
            <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0">
              <Layers className="size-5" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Media Operations
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Broad accountable operating model with integrated readiness, ownership, active observation, and structured intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
