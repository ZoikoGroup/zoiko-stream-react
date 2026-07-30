import React from 'react';

// --- DATA DEFINITIONS ---

const STATS = [
  {
    value: '10K+',
    label: 'CUSTOMERS',
  },
  {
    value: '150+',
    label: 'COUNTRIES',
  },
  {
    value: '99.99%',
    label: 'UPTIME SLA',
  },
  {
    value: '25PB+',
    label: 'DATA DELIVERED DAILY',
  },
];

// --- COMPONENT ---

export default function ByTheNumbersSection() {
  return (
    <section className="w-full bg-neutral-950 py-16 sm:py-20 px-6 sm:px-10 lg:px-20   relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Eyebrow, Stats Grid & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8">
          
          {/* Eyebrow Header */}
          <span className="text-teal-400 text-base font-normal uppercase tracking-widest  ">
            ZOIKOSTREAM BY THE NUMBERS
          </span>

          {/* 2x2 Statistics Grid */}
          <div className="w-full grid grid-cols-2 gap-y-8 gap-x-6">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight  ">
                  {stat.value}
                </span>
                <span className="text-neutral-300 text-xs font-normal uppercase tracking-wider  ">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* View All Stats CTA */}
          <a
            href="#stats-details"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-base font-normal transition-colors group pt-2"
          >
            <span>View all stats</span>
            <img className="w-4 h-4   inline-block transition-transform group-hover:translate-x-1" src="/images/about-us/Icon (8).svg" />
          </a>
        </div>

        {/* Right Column: Global Presence Card */}
        <div className="lg:col-span-6 relative">
          
          {/* Ambient Glow Overlay */}
          <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-2xl pointer-events-none" />

          {/* Main Card Container */}
          <div className="relative p-6 sm:p-8 bg-neutral-800 rounded-2xl border border-white/10 flex flex-col gap-6">
            
            {/* Card Header */}
            <div className="w-full flex items-center justify-between">
              <h3 className="text-white text-base font-bold  ">
                Global Presence
              </h3>

              {/* Real-Time Indicator Badge */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-b from-teal-400 to-blue-500 animate-pulse" />
                <span className="text-neutral-300 text-[10px] font-normal uppercase tracking-wide">
                  REAL-TIME NODES
                </span>
              </div>
            </div>

            {/* Map Preview Container */}
            <div className="w-full h-64 sm:h-72 bg-neutral-900/50 rounded-lg overflow-hidden relative flex items-center justify-center">
              <img
                src="/images/about-us/image 1.png"
                alt="Global Network Nodes Map"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}