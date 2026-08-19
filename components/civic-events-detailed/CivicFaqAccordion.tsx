'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CivicFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: 'Can ZoikoStream support public meetings and hearings?',
      a: 'Yes. Our event models are custom tailored for legislative board configurations, public hearings, town halls, and briefings with native compliance rules.'
    },
    {
      q: 'How does public audience access work?',
      a: 'You can specify open public pathways requiring zero credentials, or run controlled tokens sent to verified community stakeholders.'
    },
    {
      q: 'Can we show the meeting agenda and schedule?',
      a: 'Yes. Authoritative context blocks displaying agenda timestamps and Legistar/MuniCode links integrate directly beside our responsive media player.'
    },
    {
      q: 'What accessibility features are available?',
      a: 'We support WCAG 2.2 AA standards out of the box, including screen-reader friendly code, keyboard navigation, live captions, and PiP sign-language streams.'
    },
    {
      q: 'How are recording and replay decisions handled?',
      a: 'Recording, public replay, permanent archive, and retention scheduling are configured as separate governance decisions to safeguard municipal privacy.'
    },
    {
      q: 'Is public comment or remote testimony supported?',
      a: 'Remote contribution flows guide virtual speakers through preflight tests, waiting room loops, and unmuted live-program switches safely.'
    },
    {
      q: 'What happens if something changes after rehearsal?',
      a: 'Our system tracks change indicators across all checks. Material changes to sources or pathways instantly cue automatic re-validation prompts.'
    },
    {
      q: 'How does procurement and security review work?',
      a: 'We provide detailed SOC 2 Type II audit logs, data minimization evidence sheets, and local data residency pathways to secure rapid IT authorization.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-black/70 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/civic-events-detailed/section-faq-cta-footer.png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      {/* Note: max-w-7xl here because it is excluded from max-w-6xl constraint */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-16 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold font-sans tracking-tight">
            Questions civic event organizers ask first
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-gray-900/60 rounded-xl border border-slate-800/80 overflow-hidden backdrop-blur-sm shadow-md transition-colors"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left border-none bg-transparent text-white font-sans text-base sm:text-lg font-bold cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-teal-400 font-bold ml-4">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-400 text-sm sm:text-base leading-relaxed font-sans border-t border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
