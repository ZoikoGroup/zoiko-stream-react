'use client';

import React, { useState } from 'react';

export default function ViewerExperienceSection() {
  const [activeItem, setActiveItem] = useState(0);

  const agendaItems = [
    { id: 0, label: 'Item 1: Call to Order' },
    { id: 1, label: 'Item 2: Roll Call of Members' },
    { id: 2, label: 'Item 3: Approval of Minutes' },
    { id: 3, label: 'Item 4: Funding Resolution 101' }
  ];

  const errors = [
    {
      code: 'ERR-102',
      title: 'Wrong/expired link',
      desc: 'Auto-routes back to current calendar placeholder or directory.'
    },
    {
      code: 'ERR-404',
      title: 'Network error',
      desc: 'Intelligent recovery buffers audio stream, preserving transcripts.'
    },
    {
      code: 'ERR-301',
      title: 'Access denied',
      desc: 'Presents secure token portal or clerk request helper path.'
    },
    {
      code: 'ERR-500',
      title: 'Player unavailable',
      desc: 'Swaps automatically to a low-bandwidth clean text feed option.'
    },
    {
      code: 'ERR-018',
      title: 'Unsupported browser',
      desc: 'Inlines lightweight browser-agnostic player in basic iframe format.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-200 border-t border-slate-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            What the viewer sees and how they recover
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            The viewing experience should be low-friction, understandable, and recoverable.
          </p>
        </div>

        {/* Media Player Panel */}
        <div className="p-6 sm:p-8 bg-zinc-900 text-white rounded-2xl flex flex-col gap-6 shadow-2xl">
          
          <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-teal-400 text-xs font-bold font-sans uppercase tracking-wider">
                LIVE CONTEXT ENGINE
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold font-sans">
                City Council Budget Session v1
              </h3>
            </div>
            <div className="self-start sm:self-center px-4 py-1.5 bg-red-600 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-xs font-bold font-sans uppercase tracking-wider">
                LIVE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left side Video image */}
            <div className="lg:col-span-8 overflow-hidden rounded-lg relative aspect-video border border-slate-800 bg-black">
              <img 
                className="w-full h-full object-cover" 
                src="/images/civic-events-detailed/Frame.png" 
                alt="Live Video Stream Preview" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex items-end p-4">
                <span className="text-white/80 text-xs sm:text-sm font-sans backdrop-blur-md bg-black/40 px-3 py-1.5 rounded">
                  Chamber Feed Ingestion: 720p 30fps
                </span>
              </div>
            </div>

            {/* Right side Interactive Agenda */}
            <div className="lg:col-span-4 p-5 bg-zinc-950 rounded-lg border border-slate-800 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-sm sm:text-base font-bold font-sans">
                  Interactive Agenda Track
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed font-sans">
                  Click on an item to simulate visual track transitions.
                </p>
              </div>
              <div className="h-px bg-slate-800" />
              
              <div className="flex flex-col gap-3">
                {agendaItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.id)}
                      className={`text-left text-sm py-2 px-3 rounded transition-colors border-none cursor-pointer w-full font-sans ${
                        isActive
                          ? 'bg-teal-500/10 text-teal-400 font-bold border border-teal-500/20'
                          : 'bg-transparent text-slate-500 hover:text-slate-350 hover:bg-white/5'
                      }`}
                    >
                      {item.label} {isActive && '(Active)'}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs sm:text-sm">
            <span className="text-slate-400 font-sans">
              Language: English (Primary) | Spanish (Secondary)
            </span>
            <div className="flex items-center gap-2">
              <span className="text-teal-400 font-sans">Need assistance?</span>
              <a 
                href="mailto:support@zoikostream.com" 
                className="text-white font-bold font-sans hover:underline"
              >
                Access Help
              </a>
            </div>
          </div>

        </div>

        {/* Seamless Recovery Procedures */}
        <div className="flex flex-col gap-6">
          <h3 className="text-zinc-900 dark:text-white text-xl font-bold font-sans">
            Seamless Recovery Procedures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {errors.map((err, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 dark:bg-zinc-900/50 rounded-lg border border-slate-200 dark:border-zinc-800 flex flex-col gap-3 hover:shadow-sm transition-shadow backdrop-blur-sm"
              >
                <span className="text-teal-800 dark:text-teal-400 text-xs font-bold font-sans tracking-wide">
                  {err.code}
                </span>
                <h4 className="text-zinc-900 dark:text-white text-base font-bold font-sans">
                  {err.title}
                </h4>
                <p className="text-gray-500 dark:text-slate-450 text-xs leading-relaxed font-sans">
                  {err.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
