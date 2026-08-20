import React from 'react';

export default function EightStepTimeline() {
  const steps = [
    { num: 1, title: 'Define', desc: 'Set event timing, location, expected size, and organizers.' },
    { num: 2, title: 'Connect', desc: 'Select and test physical sources and connectivity options.' },
    { num: 3, title: 'Control access', desc: 'Define who can watch, and configure security parameters.' },
    { num: 4, title: 'Include', desc: 'Configure captions, multi-languages, and screen-readers.' },
    { num: 5, title: 'Decide replay', desc: 'Choose auto-recording, processing speed, and replay lifecycle.' },
    { num: 6, title: 'Confirm rights', desc: 'Ensure music licensing and privacy compliance is verified.' },
    { num: 7, title: 'Verify readiness', desc: 'Run pre-flight checks and lock team backup communication.' },
    { num: 8, title: 'Operate & close', desc: 'Broadcast live with active support, then secure the archive.' },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-950 text-white border-t border-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            An eight-step path from planning to close
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every step is verified and logged within the system to ensure maximum stream resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8 items-start">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-4 w-full">
              
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex justify-center items-center text-zinc-950 text-xs font-bold shrink-0">
                  {step.num}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-0.5 bg-slate-800" />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-white text-base font-bold leading-snug line-clamp-1">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
