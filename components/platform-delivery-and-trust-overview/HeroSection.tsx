import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-delivery-trust-overview/bg (68).png"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1 rounded-full border border-teal-400/80 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold   uppercase tracking-wider">
                SECURE &amp; DELIVER
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-white leading-tight md:leading-[52px]">
              Control who can access media, how it is delivered, and what happens when conditions change.
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal   leading-relaxed">
              Delivery and Trust Overview connects access control, secure playback, adaptive delivery, distribution, resilience, and media security into one evaluation path. Evidence appears only when current authority supports it.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/secure-audience-access"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Explore secure delivery
              </Link>
              <Link
                href="/company-overview"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Trust Center
              </Link>
            </div>
          </div>

          {/* Right Pathway Box */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md flex flex-col gap-5">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-teal-400 text-sm font-bold   uppercase tracking-wide">
                  DELIVERY PATHWAY DIAGRAM
                </span>
                <div className="px-2 py-0.5 bg-teal-400/10 rounded flex items-center gap-1.5">
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                  <span className="text-teal-400 text-xs font-bold  ">SECURE ACTIVE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      01
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Identity</span>
                      <span className="text-slate-400 text-xs font-normal  ">Actor credential / OIDC assertion</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">Verified Tenant</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      02
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Policy</span>
                      <span className="text-slate-400 text-xs font-normal  ">Access bounds &amp; restriction check</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">Enterprise Tier</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded-md flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      03
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Authorize</span>
                      <span className="text-slate-400 text-xs font-normal  ">Dynamic ticket &amp; DRM token issuance</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">JWT Approved</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded-md flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      04
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Deliver</span>
                      <span className="text-slate-400 text-xs font-normal  ">Edge buffering &amp; transport transit</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">Adaptive VOD/Live</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded-md flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      05
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Recovery</span>
                      <span className="text-slate-400 text-xs font-normal  ">Continuous backup route active</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">Failover Ready</span>
                </div>

                <div className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-6 bg-teal-400/10 rounded-md flex items-center justify-center text-teal-400 text-xs font-bold  ">
                      06
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-semibold  ">Evidence</span>
                      <span className="text-slate-400 text-xs font-normal  ">Audit logged state signature</span>
                    </div>
                  </div>
                  <span className="text-teal-400 text-xs font-normal  ">Cryptographic Proof</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
