'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Volume2, Play, Info } from 'lucide-react';

export default function A11yViewerControls() {
  const [ccActive, setCcActive] = useState(true);
  const [adActive, setAdActive] = useState(false);
  const [contrastHigh, setContrastHigh] = useState(false);
  const [textSize, setTextSize] = useState(100);

  const features = [
    {
      title: 'Keyboard Reachable',
      desc: 'Every interactive control is fully accessible via standard tab and arrow sequences.'
    },
    {
      title: 'Visible Focus',
      desc: 'High-contrast solid focus rings clearly delineate screen location for keyboard users.'
    },
    {
      title: 'State Announced',
      desc: 'Continuous ARIA live updates announce active changes to screen readers instantly.'
    },
    {
      title: 'No Icon-Only Ambiguity',
      desc: 'Every visual symbol carries explicit textual and screen labels to prevent doubt.'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/accessibility-inclusion/SectionBG.png')" }}
      />
      <div className="absolute left-[-150px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 to-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h2 className="text-slate-100 text-3xl sm:text-3xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Give viewers control without asking why they need it
          </h2>
          <p className="text-slate-400 text-base sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
            Preferences are entirely user-controlled. No tracking. No disability profiling. No automatic changes based on sensitive audience profiles.
          </p>
        </div>

        {/* Video Player Console */}
        <div className="w-full bg-zinc-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col overflow-hidden shadow-2xl">
          
          {/* Stream display */}
          <div className="self-stretch h-[300px] sm:h-[450px] relative flex flex-col justify-center items-center overflow-hidden bg-black/60">
            <Image 
              src="/images/accessibility-inclusion/VideoStreamArea.png" 
              alt="Live Webcast Feed"
              fill
              className="object-cover opacity-80"
            />
            
            {/* Overlay tag */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/80 rounded-lg inline-flex items-center gap-2.5 outline outline-1 outline-zinc-800 shadow-lg">
              <div className="size-2 bg-teal-400 rounded-full animate-ping" />
              <span className="text-white text-xs font-bold font-spaceGrotesk uppercase tracking-wider select-none">
                LIVE BROADCAST CONTROL INTERFACE ACTIVE
              </span>
            </div>

            
          </div>

          {/* Player controls toolbar */}
          <div className="self-stretch p-5 bg-zinc-900/90 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 select-none">
            {/* Left buttons */}
            <div className="flex items-center gap-4 text-slate-400 text-xs sm:text-sm font-spaceGrotesk">
              <Play className="size-4 text-white hover:text-teal-400 cursor-pointer" />
              <Volume2 className="size-4 text-white hover:text-teal-400 cursor-pointer" />
              <span className="font-mono tracking-wide">02:14 / 45:00</span>
            </div>

            {/* Center interactive tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCcActive(!ccActive)}
                className={`px-3 py-1.5 rounded-md outline outline-1 outline-offset-[-1px] text-xs font-bold font-spaceGrotesk transition-all cursor-pointer ${
                  ccActive 
                    ? 'bg-slate-800 text-teal-450 outline-teal-400' 
                    : 'bg-transparent text-slate-400 outline-gray-800 hover:text-white'
                }`}
              >
                CC: ENGLISH {ccActive ? 'ACTIVE' : 'INACTIVE'}
              </button>
              
              <button
                onClick={() => setAdActive(!adActive)}
                className={`px-3 py-1.5 rounded-md outline outline-1 outline-offset-[-1px] text-xs font-bold font-spaceGrotesk transition-all cursor-pointer ${
                  adActive 
                    ? 'bg-slate-800 text-teal-450 outline-teal-400' 
                    : 'bg-transparent text-slate-400 outline-gray-800 hover:text-white'
                }`}
              >
                AUDIO: {adActive ? 'AD DESCRIPTION ACTIVE' : 'AD DESCRIPTION'}
              </button>

              <button
                onClick={() => setTextSize(textSize === 100 ? 120 : 100)}
                className={`px-3 py-1.5 rounded-md outline outline-1 outline-offset-[-1px] text-xs font-bold font-spaceGrotesk transition-all cursor-pointer ${
                  textSize === 120 
                    ? 'bg-slate-800 text-teal-405 outline-teal-400' 
                    : 'bg-transparent text-slate-400 outline-gray-800 hover:text-white'
                }`}
              >
                TEXT: {textSize}%
              </button>

              <button
                onClick={() => setContrastHigh(!contrastHigh)}
                className={`px-3 py-1.5 rounded-md outline outline-1 outline-offset-[-1px] text-xs font-bold font-spaceGrotesk transition-all cursor-pointer ${
                  contrastHigh 
                    ? 'bg-slate-800 text-teal-450 outline-teal-400' 
                    : 'bg-transparent text-slate-400 outline-gray-800 hover:text-white'
                }`}
              >
                CONTRAST: {contrastHigh ? 'HIGH' : 'NORMAL'}
              </button>
            </div>

            {/* Right button */}
            <div className="flex items-center gap-1.5 text-slate-100 text-xs font-bold font-spaceGrotesk hover:text-teal-400 cursor-pointer">
              <Info className="size-4 shrink-0" />
              <span>HELP CENTER</span>
            </div>
          </div>
        </div>

        {/* Feature Cards below player */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {features.map((f, idx) => (
            <div 
              key={idx}
              className="p-5 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-2.5 hover:border-zinc-700/50 transition-colors"
            >
              <h3 className="text-teal-400 text-base font-bold font-spaceGrotesk leading-tight">
                {f.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed text-left">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
