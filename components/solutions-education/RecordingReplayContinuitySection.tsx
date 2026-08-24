import React from 'react';
import Image from 'next/image';

const gates = [
  { num: '1. Access Boundaries', status: { text: 'CLONED', cls: 'text-teal-400' } },
  { num: '2. Participant Consent', status: { text: 'VERIFIED', cls: 'text-teal-400' } },
  { num: '3. Caption Provenance', status: { text: 'VERIFIED', cls: 'text-teal-400' } },
  { num: '4. Editorial Corrections', status: { text: 'NONE REQD', cls: 'text-teal-400' } },
  { num: '5. Publish Authorization', status: { text: 'PENDING SIGN', cls: 'text-amber-500' } },
];

export function RecordingReplayContinuitySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (194).png"
          alt="Recording Replay Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Recording, replay and learning continuity
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            From recording authorization through capture, review, audience continuity, corrections, and publish — every decision is explicit.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid Cards */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-5 w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Recording Authorization</h3>
                <div className="w-full flex flex-col justify-start items-start gap-2.5 text-xs">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-400 font-normal font-['Inter']">Awaiting decision</span>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] font-bold font-['Space_Grotesk'] rounded">PENDING</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-400 font-normal font-['Inter']">Authorized</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold font-['Space_Grotesk'] rounded">APPROVED</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-400 font-normal font-['Inter']">Not authorized</span>
                    <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-[10px] font-bold font-['Space_Grotesk'] rounded">BLOCKED</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-400 font-normal font-['Inter']">Needs review</span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] rounded">FLAGGED</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4 backdrop-blur-sm">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Live Capture Pipeline</h3>
                <div className="w-full flex flex-col justify-start items-start gap-2.5 text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase">INBOUND SOURCE</span>
                    <span className="text-white font-normal font-['Inter']">RTMP dual active</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase">CAPTURE STATE</span>
                    <span className="text-white font-normal font-['Inter']">Transmitting 1080p</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-teal-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase">COMPLIANCE STATUS</span>
                    <span className="text-white font-normal font-['Inter']">Verified secure</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Card 3 */}
              <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-3 backdrop-blur-sm">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Audience Boundaries</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                  Replay never silently becomes broader than the live stream. All SSO mappings and geo-fencing rules are strictly cloned to the VOD asset.
                </p>
                <div className="w-full border-t border-gray-800 pt-2">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">ACTIVE GUARD: SSO MATCH ENFORCED</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-3 backdrop-blur-sm">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Corrections &amp; Provenance</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">
                  Every edit, trimming action, and caption replacement creates a documented cryptographically-signed version with explicit authority handoffs.
                </p>
                <div className="w-full border-t border-gray-800 pt-2">
                  <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">VERSION: V2.1-PUBLISHED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Box */}
          <div className="lg:col-span-5 w-full p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Replay Readiness Review
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">
              A live session cannot transition to public replay without all five policy check gates passing manual or policy-engine validation.
            </p>
            <div className="w-full border-t border-gray-800" />

            <div className="w-full flex flex-col justify-start items-start gap-4">
              {gates.map((gt, idx) => (
                <div key={idx} className="w-full flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                      <span className="text-teal-400 text-[10px]">✓</span>
                    <span className="text-white font-normal font-['Inter']">{gt.num}</span>
                  </div>
                  <span className={`text-xs font-bold font-['Space_Grotesk'] ${gt.status.cls}`}>
                    {gt.status.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full border-t border-gray-800 pt-2">
              <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  Review replay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
