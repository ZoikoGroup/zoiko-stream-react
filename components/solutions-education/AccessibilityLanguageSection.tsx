import React from 'react';
import Image from 'next/image';

const tracks = [
  { name: 'Live Captioning (English)', status: { text: 'PUBLISHED', cls: 'bg-emerald-500/10 text-emerald-500' } },
  { name: 'Live Translation (Spanish)', status: { text: 'PUBLISHED', cls: 'bg-emerald-500/10 text-emerald-500' } },
  { name: 'Live Translation (French)', status: { text: 'PROCESSING', cls: 'bg-amber-500/10 text-amber-500' } },
  { name: 'Alternative Audio Description', status: { text: 'APPROVED', cls: 'bg-teal-400/10 text-teal-400' } },
  { name: 'Remote ASL Video Stream Overlay', status: { text: 'DRAFT', cls: 'bg-slate-400/10 text-slate-400' } },
  { name: 'Interactive Transcripts Cache', status: { text: 'NEEDS REVIEW', cls: 'bg-amber-500/10 text-amber-500' } },
];

const controls = [
  'Keyboard Focus',
  'Subtitles Toggle',
  'Speed Control',
  'Screen Reader Profile',
  'Zoom Scale Adjustment',
  'Reduced Motion Profile',
];

export function AccessibilityLanguageSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (193).png"
          alt="Accessibility Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Accessibility and language from live to replay
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Captions, transcripts, translation, audio description and sign language — tracked from planning through replay with provenance and review.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Track Status */}
          <div className="lg:col-span-7 w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Track Lifecycle Status
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {tracks.map((tr, idx) => (
                <div key={idx} className="w-full p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-sm">
                  <span className="text-white font-bold font-['Space_Grotesk']">{tr.name}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-['Space_Grotesk'] ${tr.status.cls}`}>
                    {tr.status.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Telemetry & HUD */}
          <div className="lg:col-span-5 w-full flex flex-col justify-start items-start gap-5">
            <div className="w-full p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-3 backdrop-blur-sm">
              <span className="text-slate-400 text-xs font-bold font-['Space_Grotesk']">HEALTH TELEMETRY</span>
              <div className="w-full flex justify-between items-center text-sm">
                <span className="text-white font-normal font-['Space_Grotesk']">Auto-Caption Delay</span>
                <span className="text-emerald-500 font-bold font-['Space_Grotesk']">0.8s (EXCELLENT)</span>
              </div>
              <div className="w-full flex justify-between items-center text-sm">
                <span className="text-white font-normal font-['Space_Grotesk']">Accuracy Confidence</span>
                <span className="text-emerald-500 font-bold font-['Space_Grotesk']">98.4%</span>
              </div>
            </div>

            <div className="w-full p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm">
              <span className="text-white text-sm font-bold font-['Space_Grotesk']">Standard Viewer HUD Controls</span>
              <div className="flex flex-wrap gap-2">
                {controls.map((ctrl, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-800 rounded text-slate-400 text-xs font-normal font-['Inter']">
                    {ctrl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
