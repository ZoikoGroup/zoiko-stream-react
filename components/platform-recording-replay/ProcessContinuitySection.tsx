import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const stages = [
  { step: '01', title: 'DECIDE' },
  { step: '02', title: 'PREPARE' },
  { step: '03', title: 'AUTHORIZE' },
  { step: '04', title: 'CAPTURE' },
  { step: '05', title: 'VERIFY' },
  { step: '06', title: 'REGISTER' },
  { step: '07', title: 'READY' },
  { step: '08', title: 'AUTH REPLAY' },
  { step: '09', title: 'REPLAY' },
  { step: '010', title: 'CORRECT' },
  { step: '011', title: 'PRESERVE' },
];

export default function ProcessContinuitySection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-recording-replay/bg (63).png"
          alt="Process Continuity Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            From recording decision to replay continuity
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Each stage has its own owner, evidence, blockers, and recovery path
          </p>
        </div>

        {/* Stage Steps Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {stages.map((stg, idx) => (
            <React.Fragment key={idx}>
              <div className="p-3 bg-slate-900/90 rounded-lg border border-gray-800 flex flex-col gap-1 min-w-[95px] max-w-[110px] flex-1">
                <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk']">
                  {stg.step}
                </span>
                <span className="text-white text-[10px] font-bold font-['Space_Grotesk'] truncate">
                  {stg.title}
                </span>
              </div>
              {idx < stages.length - 1 && (
                <ChevronRight className="size-3 text-slate-600 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 3 Detailed Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-3">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              STAGE 1-4
            </span>
            <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
              Recording Decision &amp; Capture
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              Purpose, scope, authorization, and server-authoritative execution state
            </p>
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed pt-2 border-t border-gray-800/80">
              Ensure every stream session initializes with cryptographic consent and policy checks before ingestion ports open.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-3">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              STAGE 5-7
            </span>
            <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
              Verification &amp; Asset Handoff
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              Completion truth, integrity evidence, and governed media asset registration
            </p>
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed pt-2 border-t border-gray-800/80">
              Compare index boundary times directly with frame-accurate recording manifests to register valid replay states.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-sm flex flex-col gap-3">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              STAGE 8-11
            </span>
            <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
              Replay &amp; Preservation
            </h3>
            <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              Audience authorization, playback availability, corrections, and lifecycle governance
            </p>
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed pt-2 border-t border-gray-800/80">
              Manage end-to-end token validation gates and SLA controls. Ensure deletion rules execute flawlessly upon license expiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
