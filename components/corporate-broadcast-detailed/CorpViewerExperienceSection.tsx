'use client';

import React from 'react';

export default function CorpViewerExperienceSection() {
  const recoveryProcedures = [
    {
      title: 'One-Click Re-sync',
      desc: 'Instantly force-realign audio-video clock drift.'
    },
    {
      title: 'Backup Audio Stream',
      desc: 'Fallback automatically to high-quality audio stream.'
    },
    {
      title: 'Dual Transcoder Handoff',
      desc: 'A/B transcoders active on separate cloud availability zones.'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (9).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-100 text-4xl font-bold   leading-[60.80px]">
            Viewer landing screen and recovery
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-7">
            Shape the first impression and ensure uninterrupted viewing. The landing screen sets session context, language preferences, and live status while built-in recovery procedures handle drift, failover, and transcoder continuity automatically.
          </p>
        </div>

        {/* Video Player + Q&A Queue Box */}
        <div className="w-full p-8 bg-gray-900/90 rounded-2xl border border-slate-800 backdrop-blur-[10px] flex flex-col justify-start items-start gap-6 font-sans shadow-2xl">
          
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="text-slate-100 text-lg font-bold  ">
                Annual Corporate All-Hands
              </div>
              <div className="text-slate-400 text-xs font-normal  ">
                Q1 Strategy Session
              </div>
            </div>
            
            <div className="px-4 py-1.5 bg-red-500 rounded-[20px] flex justify-start items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="text-zinc-950 text-xs font-bold  ">
                LIVE
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-6 w-full">
            {/* Video Container */}
            <div className="flex-1 w-full relative rounded-lg overflow-hidden border border-slate-800 bg-black aspect-video flex justify-center items-center">
              <img 
                className="w-full h-full object-cover select-none pointer-events-none" 
                src="/images/corporate-broadcast-detailed/video-stream.png" 
                alt="Annual Corporate All-Hands Live Stream" 
              />
              
            </div>

            {/* Q&A Column */}
            <div className="w-full lg:w-96 self-stretch p-5 bg-zinc-950/80 rounded-lg border border-slate-800 flex flex-col justify-start items-start gap-4">
              <div className="text-slate-100 text-base font-bold  ">
                Moderated Q&A Queue
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3 w-full">
                
                <div className="self-stretch p-3 bg-gray-900 rounded-md flex flex-col justify-start items-start gap-1">
                  <div className="text-teal-400 text-xs font-bold  ">
                    David L.
                  </div>
                  <div className="self-stretch text-slate-100 text-xs font-normal   leading-relaxed">
                    How will this plan affect European remote entities?
                  </div>
                </div>

                <div className="self-stretch p-3 bg-gray-900 rounded-md flex flex-col justify-start items-start gap-1">
                  <div className="text-teal-400 text-xs font-bold  ">
                    Sarah K.
                  </div>
                  <div className="self-stretch text-slate-100 text-xs font-normal   leading-relaxed">
                    Can we expect SLA details on the SaaS tools?
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="self-stretch pt-4 border-t border-slate-800 inline-flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs sm:text-sm">
            <div className="text-slate-400  ">
              Language: English (Primary) | Spanish (Secondary)
            </div>
            <div className="inline-flex justify-start items-center gap-2">
              <a 
                href="#" 
                className="text-teal-400 font-normal   underline hover:opacity-90"
              >
                Report lag or sync issues
              </a>
            </div>
          </div>

        </div>

        {/* Recovery Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-6 font-sans">
          <h3 className="text-slate-100 text-xl font-bold   leading-7">
            Seamless Recovery Procedures
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {recoveryProcedures.map((proc, idx) => (
              <div 
                key={idx}
                className="p-5 bg-gray-900/60 rounded-lg  inline-flex flex-col justify-start items-start gap-3 backdrop-blur-sm hover:border-slate-700/60 transition-colors"
              >
                <h4 className="text-slate-100 text-base font-bold  ">
                  {proc.title}
                </h4>
                <p className="self-stretch text-slate-400 text-xs font-normal   leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
