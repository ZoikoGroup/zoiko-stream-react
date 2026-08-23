import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg123 from '@/public/images/secure-enterprise/bg (123).png';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-slate-900/75 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg123}
          alt="Secure Enterprise Video Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Box */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1.5 rounded-full border border-teal-400 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold   uppercase tracking-wider">
                SECURE ENTERPRISE VIDEO
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold   text-white leading-tight">
              Keep private video private—across live, replay, and every authorized audience.
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-normal   leading-relaxed">
              Protect controlled media access with explicit policy, authorization, playback, lifecycle, and evidence controls designed for enterprise operation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
              >
                Talk to an expert
              </Link>
              <Link
                href="#security"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
              >
                Explore security
              </Link>
            </div>
          </div>

          {/* Right Policy Model Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <span className="text-white text-xs font-bold   tracking-wide">
                  ILLUSTRATIVE POLICY MODEL
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 bg-teal-400 rounded-full" />
                  <span className="text-teal-400 text-xs font-bold  ">
                    SECURED SYSTEM
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {/* Active Employees */}
                <div className="p-3.5 bg-gray-800 rounded-lg border border-emerald-500 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-bold  ">
                      AUDIENCE: ACTIVE EMPLOYEES
                    </span>
                    <span className="text-emerald-500 text-[10px] font-bold  ">
                      ALLOWED
                    </span>
                  </div>
                  <div className="w-full h-px bg-gray-800" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs font-normal  ">
                      Policy: Org SSO Match
                    </span>
                    <span className="text-teal-400 text-xs font-normal  ">
                      State: H.264 encrypted
                    </span>
                  </div>
                </div>

                {/* External Hosts */}
                <div className="p-3.5 bg-gray-800 rounded-lg border border-red-500 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-bold  ">
                      AUDIENCE: EXTERNAL HOSTS
                    </span>
                    <span className="text-red-500 text-[10px] font-bold  ">
                      DENIED
                    </span>
                  </div>
                  <div className="w-full h-px bg-gray-800" />
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs font-normal  ">
                      Policy: Expired token
                    </span>
                    <span className="text-slate-500 text-xs font-normal  ">
                      State: Playback blocked
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="size-2 bg-teal-400 rounded-full shrink-0" />
                <p className="text-slate-400 text-xs font-normal  ">
                  Active Policy Enforcement: SSO / GEO / Device constraints matched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
