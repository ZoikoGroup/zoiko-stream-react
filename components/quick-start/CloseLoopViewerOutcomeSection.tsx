import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { PlayCircle, CheckSquare, Volume2, Maximize, Settings, Check, Play, Captions } from 'lucide-react';

const checklist = [
  'Stream payload verified and indexed successfully',
  'Dynamic adaptive bitrate manifests loaded',
  'Audio decoders mapped and output validated',
 
];

const engineStates = ['Loading', 'Ready', 'Auth Blocked', 'Media Unavailable', 'Network Error'];

export function CloseLoopViewerOutcomeSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Close the Loop With an Actual Viewer Outcome
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Verify that your end-to-end media pipeline successfully delivers high-fidelity audio and video data to the client-side rendering engine.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Container: Video Viewport */}
          <div className="bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl min-h-[380px]">
            <div className="relative w-full h-[320px] bg-slate-900 flex items-center justify-center">
              <Image
                src="/images/quickstart/video-viewport.png"
                alt="Video Viewport"
                fill
                className="object-cover"
              />
              <div className="relative z-10 w-16 h-16 bg-teal-400/90 hover:bg-teal-400 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-105">
                <Play className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
            </div>

            {/* Video Controls Bar */}
            <div className="p-4 bg-slate-900 border-t border-gray-800 flex justify-between items-center text-slate-400 text-xs">
              <div className="flex items-center gap-4">
                <Play className="w-6 h-6 text-teal-400 cursor-pointer" />
                <Volume2 className="w-4 h-4 text-slate-400 cursor-pointer" />
                <span>00:45 / Live</span>
              </div>
              <div className="flex items-center gap-4">
                 <Captions className="w-6 h-6 text-teal-400 cursor-pointer" />
                <Settings className="w-4 h-4 text-slate-400 cursor-pointer" />
                <Maximize className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Container: Embedded Playback Checklist & States */}
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <h3 className="text-slate-900 text-base font-bold">EMBEDDED PLAYBACK CHECKLIST</h3>
              </div>

              <div className="flex flex-col gap-3">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-slate-600 text-sm font-normal">{item}</span>
                    
                  </div>
                ))}
                <div className='flex flex-row gap-3'>
               <div className="w-4 h-4 border-gray-200 bg-[#E1E6EB]  rounded-sm flex items-center justify-center flex-shrink-0"/>
               <div className="text-slate-600 text-sm font-normal">Timecode subtitles synced on local client clock</div>
                </div>
              </div>
              

              <div className="pt-3 border-t border-gray-200 text-xs text-slate-600">
                Last verification outcome: <strong className="text-slate-900">Pass</strong> (2026-03-20 13:45:12 UTC)
              </div>
            </div>

            {/* Engine States */}
            <div className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-3 shadow-sm backdrop-blur-sm">
              <span className="text-slate-600 text-xs font-bold tracking-wide uppercase">
                OPERATIONAL ENGINE STATES
              </span>
              <div className="flex flex-wrap gap-2">
                {engineStates.map((st, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-colors ${
                      st === 'Ready'
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-slate-600 border-gray-200'
                    }`}
                  >
                    {st}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer shadow-md w-fit">
              <span className="text-slate-900 text-base font-bold">Complete Quickstart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
