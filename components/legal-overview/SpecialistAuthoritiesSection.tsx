import React from 'react';
import Link from 'next/link';

export default function SpecialistAuthoritiesSection() {
  return (
    <section className="w-full bg-[#0B132B] px-6 sm:px-12 lg:px-20 py-14 lg:py-18 text-white border-b border-slate-800">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-[740px]">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#40C4AA] rounded-full" />
            <span className="text-[#40C4AA] text-xs font-mono uppercase tracking-wide font-medium">
              SPECIALIST AUTHORITIES
            </span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-semibold font-['Space_Grotesk'] leading-snug">
            Trust, status &amp; support.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Legal overview does not duplicate these — it routes to them.
          </p>
        </div>

        {/* 3 Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Trust & Security */}
          <div className="p-5 bg-[#1C2541]/70 border border-slate-700/60 rounded-xl flex flex-col justify-between gap-3 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-5">
                Trust &amp; Security
              </h3>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                Security, compliance, and resilience evidence.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/zoikostream-trust-center"
                className="text-xs font-semibold font-['Inter'] text-[#40C4AA] hover:underline"
              >
                Visit Trust Center →
              </Link>
            </div>
          </div>

          {/* System status */}
          <div className="p-5 bg-[#1C2541]/70 border border-slate-700/60 rounded-xl flex flex-col justify-between gap-3 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-5">
                System status
              </h3>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                Current service health and incident history.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/zoikostream-status"
                className="text-xs font-semibold font-['Inter'] text-[#40C4AA] hover:underline"
              >
                View status →
              </Link>
            </div>
          </div>

          {/* Contact support */}
          <div className="p-5 bg-[#1C2541]/70 border border-slate-700/60 rounded-xl flex flex-col justify-between gap-3 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-sm font-bold font-['Inter'] leading-5">
                Contact support
              </h3>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                General or account-specific help.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="text-xs font-semibold font-['Inter'] text-[#40C4AA] hover:underline"
              >
                Get support →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
