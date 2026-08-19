'use client';

import React from 'react';
import { 
  Star, 
  Globe, 
  Tv 
} from 'lucide-react';

export default function EventShapeSection() {
  const shapes = [
    {
      title: 'Single ceremony',
      desc: 'One venue, one program, one primary start time. The default planning path — only necessary details asked.',
      icon: '/images/graduations-detailed/SVG.svg'
    },
    {
      title: 'Multiple ceremonies in one day',
      desc: 'Separate schools, colleges, programs, cohorts, or sessions. Each modeled as an instance with its own schedule and readiness state.',
      icon: '/images/graduations-detailed/SVG (1).svg'
    },
    {
      title: 'Multi-day event series',
      desc: 'Several ceremonies across days. A series overview plus per-event status — never a global ready badge that hides exceptions.',
      icon: '/images/graduations-detailed/SVG (2).svg'
    },
    {
      title: 'Multiple sites / campuses',
      desc: 'Distinct venues or sources. Each site carries its own source, connectivity, accessibility, support, and readiness state.',
      icon: Star
    },
    {
      title: 'Remote speakers / contributors',
      desc: 'Speaker or segment originates elsewhere. Contribution path is separated from audience viewing; preflight required.',
      icon: Globe
    },
    {
      title: 'Pre-show / post-show',
      desc: 'Optional institutional or celebratory content around the ceremony — treated as distinct segments with their own rights and access.',
      icon: Tv
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/graduations-detailed/Section - SECTION 4 — CHOOSE THE CEREMONY MODEL.png')" }}
      />
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Choose the shape that fits your event
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Not every graduation is one ceremony in one room. Pick the shape below; each carries its own schedule, readiness, and access state — no single global &quot;ready&quot; hides exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {shapes.map((shape, idx) => {
            return (
              <div 
                key={idx}
                className="p-6 bg-white/90 rounded-2xl shadow-[0px_6px_18px_rgba(15,18,34,0.05)] border border-slate-200 flex flex-col gap-4 hover:shadow-md transition-shadow backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex justify-center items-center text-[#7C3AED]">
                  {typeof shape.icon === 'string' ? (
                    <img src={shape.icon} alt={shape.title} className="w-5 h-5" />
                  ) : (
                    React.createElement(shape.icon, { className: "w-5 h-5" })
                  )}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-zinc-900 text-lg font-bold font-sans">
                    {shape.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {shape.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


