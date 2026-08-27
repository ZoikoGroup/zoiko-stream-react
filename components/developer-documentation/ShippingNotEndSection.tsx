import React from 'react';
import Image from 'next/image';

const opsCards = [
  { title: 'Stream monitoring', desc: 'Observe health and performance in production.' },
  { title: 'Rate limits', desc: 'Know your quotas before you hit them.' },
  { title: 'Recording & assets', desc: 'Manage stored media over its lifecycle.' },
  { title: 'System status', desc: 'Check current incidents before you escalate.' },
];

export function ShippingNotEndSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              SHIPPING IS NOT THE END
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Shipping playback is not the end of the integration.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Prepare for health, evidence, stored media, failures, limits, change, and service status.
          </p>
        </div>

        {/* 2 Column Layout: 4 Cards Grid (2x2) + Right Image Feature Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 4 Cards Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {opsCards.map((card) => (
                <div
                  key={card.title}
                  className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col gap-2 shadow-xs hover:border-blue-400 transition-colors"
                >
                  <h3 className="text-zinc-900 text-sm font-bold">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-5">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-slate-950 font-bold text-base hover:opacity-95 transition-opacity shadow-md">
                Run the Production Readiness Review
              </button>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="lg:col-span-5 relative min-h-[280px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src="/images/documentation/image (2).png"
              alt="Shipping Operations"
              fill
              className="object-cover"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
