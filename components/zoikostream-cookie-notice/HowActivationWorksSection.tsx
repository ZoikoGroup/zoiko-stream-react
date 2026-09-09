import React from 'react';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '1. Page loads',
    desc: 'Only strictly necessary technology is active.',
  },
  {
    num: '2. Choice presented',
    desc: 'You accept, reject, or customize optional categories.',
  },
  {
    num: '3. Preference saved',
    desc: 'Your choice is stored for this browser/device.',
  },
  {
    num: '4. Optional tech activates',
    desc: 'Only categories you approved begin operating.',
  },
  {
    num: '5. Withdraw anytime',
    desc: 'Change your choice from Manage preferences below.',
  },
];

export default function HowActivationWorksSection() {
  return (
    <section id="activation-works" className="relative w-full bg-[#080d19] text-white py-16 lg:py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          <span className="font-mono text-xs font-semibold tracking-wider text-teal-400 uppercase">
            WHEN, NOT JUST WHAT
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          How activation works.
        </h2>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed mb-8">
          Strictly necessary technology can load immediately. Everything else waits for your choice.
        </p>

        {/* Process Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 items-stretch">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col justify-between">
              <div className="h-full bg-[#0d1527]/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-lg">
                <div>
                  <h3 className="font-bold text-white text-xs sm:text-sm mb-2">
                    {step.num}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < STEPS.length - 1 && (
                <div
                  className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-500 pointer-events-none"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
