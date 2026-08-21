import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0A0D14] text-white py-20 lg:py-28 border-b border-[#232B3A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (77).png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A0D14]/75" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="px-3.5 py-1 rounded-full border border-teal-400/80 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold   uppercase tracking-wider">
                MEDIA MANAGEMENT
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-white leading-tight md:leading-[60px]">
              Keep media identifiable, governed, reusable, and accountable
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal   leading-relaxed">
              ZoikoStream Media Management is the governed operating layer for media objects—tracking ownership, rights, versions, and readiness across live, replay, and on-demand workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Talk to an expert
              </Link>
              <Link
                href="/platform-media-operation-overview"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Explore media operations
              </Link>
            </div>
          </div>

          {/* Right Pipeline Log Card */}
          <div className="w-full">
            <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-col gap-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-teal-400 text-sm font-bold   uppercase tracking-wide">
                  GOVERNED PIPELINE LOG
                </span>
                <div className="px-2 py-0.5 bg-teal-400/10 rounded flex items-center gap-1.5">
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                  <span className="text-teal-400 text-xs font-bold  ">SECURE ARCHIVE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      01
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Stable ID</span>
                      <span className="text-slate-400 text-xs font-normal  ">immutable SHA-256 fingerprint</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">urn:zoiko:media:9f8b417e</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      02
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Current Version</span>
                      <span className="text-slate-400 text-xs font-normal  ">superseded: v4.1.9 archived</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">v4.2.0 (Active)</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      03
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Rights &amp; Provenance</span>
                      <span className="text-slate-400 text-xs font-normal  ">Expires: 2029-12-31 · SLA Qualified</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">Commercial Use Allowed</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      04
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Accessibility Tracks</span>
                      <span className="text-slate-400 text-xs font-normal  ">WCAG 2.2 AA compliant transcripts</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">WebVTT EN, ES, FR, JA</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      05
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Audience Context</span>
                      <span className="text-slate-400 text-xs font-normal  ">OIDC secure directory assertion</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">Whitelisted Partners Only</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-6 shrink-0 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      06
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Evidence Signature</span>
                      <span className="text-slate-400 text-xs font-normal  ">Durable block audit trail preserved</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal   whitespace-nowrap">0x7a2d...f4e1 Signed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}