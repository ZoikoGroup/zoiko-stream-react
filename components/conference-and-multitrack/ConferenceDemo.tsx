'use client';

import React from 'react';
import Image from 'next/image';

export default function ConferenceDemo() {
  const checkmarks = [
    'Multi-track schedule orchestration with operator cues',
    'SAML / OIDC gated replay access per session',
    'Real-time incident escalation and signal failover',
    'WCAG 2.2 captions and transcript pipelines built-in'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10 text-left">
        
        <h3 className="text-gray-900 text-2xl font-bold font-spaceGrotesk tracking-tight">
          See it in action
        </h3>
        
        <div className="flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-14">
          {/* Left Column: Image wrapper */}
          <div className="relative w-full lg:w-[562px] h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-lg border border-gray-200">
            <Image 
              src="/images/conferences-and-multitrack/event-image.png" 
              alt="Conference Management Platform Demo" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Right Column: Key facts */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6">
            <h4 className="text-gray-900 text-lg font-bold font-spaceGrotesk">
              Deliver your conference with confidence
            </h4>
            <p className="text-gray-650 text-base font-normal font-spaceGrotesk leading-relaxed text-left">
              From pre-event brief sign-off to post-session archive, every state is deliberate, auditable, and role-gated. ZoikoStream is built for the complexity of enterprise conferences.
            </p>
            
            {/* Check list */}
            <div className="flex flex-col justify-start items-start gap-3 w-full">
              {checkmarks.map((check, idx) => (
                <div key={idx} className="flex justify-start items-center gap-3 text-left">
                  <div className="size-6 shrink-0 bg-teal-405/10 rounded-xl flex justify-center items-center">
                    <span className="text-teal-500 text-[10px] font-bold font-mono">✓</span>
                  </div>
                  <span className="text-gray-650 text-sm font-normal font-spaceGrotesk leading-snug">
                    {check}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <button 
                onClick={() => scrollToSection('conference-brief-section')}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-95 transition-opacity text-slate-955 text-sm font-bold font-spaceGrotesk rounded-[10px] cursor-pointer border-none"
              >
                Plan a Live Event
              </button>
              <button 
                onClick={() => scrollToSection('conference-brief-section')}
                className="px-6 py-3 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 bg-transparent hover:outline-teal-400 transition-colors text-gray-900 text-sm font-medium font-spaceGrotesk cursor-pointer"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
