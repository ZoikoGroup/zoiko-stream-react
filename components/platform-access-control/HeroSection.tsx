import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (74).png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1 rounded-full border border-teal-400/80 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                ACCESS CONTROL
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight md:leading-[60px]">
              Control access to media workflows with explicit identity, policy, and authority
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal font-['Inter'] leading-relaxed">
              Define how approved identities are evaluated against current policy, entitlement, audience, permission, and context before any platform action is allowed, limited, denied, or revoked.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/platform-access-control"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Inter'] hover:opacity-90 transition-opacity"
              >
                Explore Access-Control Model
              </Link>
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Inter'] hover:bg-white/10 transition-colors"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Right Decision Engine Pathway Box */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-col gap-5">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                  DECISION ENGINE PATHWAY
                </span>
                <div className="px-2 py-0.5 bg-teal-400/10 rounded flex items-center gap-1.5">
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                  <span className="text-teal-400 text-xs font-bold font-['Inter']">ACTIVE ENGINE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      01
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Principal Actor</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Identity established by authenticated directory session</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk'] truncate max-w-[140px]">
                    urn:zoiko:actor:identity-9b
                  </span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      02
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Target Resource</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Immutable broadcast stream object</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk'] truncate max-w-[140px]">
                    urn:zoiko:media:stream-8f
                  </span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      03
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Intended Action</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Requires validated cryptographic play-token key</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk'] truncate max-w-[140px]">
                    Action: stream:decrypt
                  </span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      04
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Applied Policy</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Requires OIDC tenant compliance check</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk'] truncate max-w-[140px]">
                    Policy: corporate-internal
                  </span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      05
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Active Entitlement</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Explicit access path granted by administrator</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                    Valid / Expires 2026
                  </span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                      06
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold font-['Inter']">Final Decision</span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">Signed with system cryptographic signature</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                    AUTHORIZED (Allow)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
