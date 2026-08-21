'use client';

import React from 'react';
import { Layers, Volume2, ShieldCheck } from 'lucide-react';

export default function WorkflowRunOfShow() {
  const segments = [
    { time: '10:00 AM', name: 'Opening Splash & Intro Video', badge: 'Auto-trigger' },
    { time: '10:05 AM', name: 'Keynote Address: CEO Main Altar', badge: 'Camera 1 SRT Ingest' },
    { time: '10:35 AM', name: 'Remote Q&A segment: London Hub', badge: 'WebRTC Switch' },
    { time: '10:55 AM', name: 'Closing Remarks & Local Slides', badge: 'Asset Playback' }
  ];

  const features = [
    {
      title: 'Switching & Graphics',
      desc: 'Embed brand assets, watermarks, lower-thirds, and slide transitions directly into the master program stream.',
      icon: Layers
    },
    {
      title: 'Audio & Presentations',
      desc: 'Prioritize local lapel mics, mix audio from remote Zoom/Teams callers, and handle compliant background music feeds.',
      icon: Volume2
    },
    {
      title: 'Run-of-Show Dependencies',
      desc: 'Configure automatic fallback video sequences if a local presenter loses connection or overruns their allotted slot.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Turn the event plan into a production-ready sequence
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            Delineate cues, lower-third graphic layers, audio priorities, and remote speaker transitions in our interactive Run-of-Show planner.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          
          {/* Left panel: Run-of-Show Segment list */}
          <div className="w-full lg:w-[500px] p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-3.5 shadow-sm shrink-0">
            <h3 className="text-zinc-955 text-base font-bold">
              Run-of-Show Segment
            </h3>
            
            <div className="flex flex-col gap-2.5 w-full">
              {segments.map((s, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-3 text-xs"
                >
                  <span className="w-20 text-blue-500 font-bold font-mono">{s.time}</span>
                  <span className="flex-1 text-zinc-955 font-semibold truncate text-left">{s.name}</span>
                  <span className="px-2 py-0.5 bg-teal-500/10 text-teal-500 font-mono rounded-sm text-[10px] uppercase shrink-0">
                    {s.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column List */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-start items-start gap-4 hover:border-slate-300 transition-colors"
                >
                  {/* Icon Block */}
                  <div className="size-9 bg-blue-500/10 rounded-lg flex justify-center items-center shrink-0">
                    <Icon className="size-4 text-blue-500 stroke-[1.8]" />
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-1 text-left w-full">
                    <h4 className="text-zinc-955 text-base font-bold leading-tight">
                      {f.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Button link */}
        <div className="flex justify-start pt-2">
          <a href="/production-switching-graphics">
          <button className="px-6 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-600 bg-transparent hover:outline-teal-400 transition-colors text-zinc-955 text-base font-bold font-spaceGrotesk">
            Explore Production, switching &amp; graphics
          </button>
          </a>
        </div>

      </div>
    </section>
  );
}
