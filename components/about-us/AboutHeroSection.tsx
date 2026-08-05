import React from 'react';

// --- DATA DEFINITIONS ---

const TRUST_METRICS = [
  {
    value: '99.99%',
    label: 'UPTIME SLA',
    iconType: '/images/about-us/Icon (2).svg',
  },
  {
    value: 'SOC 2 Type II',
    label: 'CERTIFIED',
    iconType: '/images/about-us/Icon (15).svg',
  },
  {
    value: 'ISO 27001',
    label: 'CERTIFIED',
    iconType: '/images/about-us/Icon (1).svg',
  },
  {
    value: 'Global',
    label: 'EDGE NETWORK',
    iconType: '/images/about-us/Icon.svg',
  },
];

export default function AboutHeroSection() {
  return (
    <section 
      className="relative w-full bg-zinc-950 bg-[url('/images/about-us/aboutbg.jpg')] bg-cover bg-center bg-no-repeat text-white py-16 px-6 sm:px-10 lg:px-20"
    >
      {/* Dark Overlay layer to maintain text contrast */}
      <div className="absolute inset-0 bg-zinc-950/80 pointer-events-none" />

      {/* Content Container (relative z-10 puts content above overlay) */}
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-start gap-8">
        
        {/* Main Content Area */}
        <div className="max-w-[672px] flex flex-col items-start gap-4">
          
          {/* Eyebrow */}
          <span className="text-teal-400 text-base font-normal uppercase tracking-[3.20px]">
            ABOUT US
          </span>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl  leading-[1.12] tracking-tight">
            Media infrastructure <br className="hidden sm:inline" />
            built to power the world.
          </h1>

          {/* Description */}
          <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed pt-2">
            ZoikoStream is Zoiko Group&apos;s secure media infrastructure and streaming platform. We help organizations create, stream, and deliver with confidence—at any scale.
          </p>

          {/* Action Buttons */}
          <div className="pt-6 pb-6 sm:pb-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-xl flex items-center gap-2 text-white text-base font-normal"
            >
              <span>Talk to an Expert</span>
              <svg
                className="w-4 h-4 fill-current text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#explore"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-white text-base font-normal"
            >
              Explore the Platform
            </a>
          </div>

          {/* Trust Metrics Row */}
          <div className="w-full pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img className="w-5 h-5" src={metric.iconType} alt="" />
                
                <div className="flex flex-col">
                  <span className="text-white text-base font-bold leading-snug">
                    {metric.value}
                  </span>
                  <span className="text-neutral-300 text-xs font-normal uppercase tracking-wide">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}