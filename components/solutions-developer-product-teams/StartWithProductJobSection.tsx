import React from 'react';
import Image from 'next/image';

import bg157 from '@/public/images/Developers-product-teams/bg (163).png';
import rect20 from '@/public/images/Developers-product-teams/Rectangle  (17).png';
import rect21 from '@/public/images/Developers-product-teams/Rectangle  (30).png';
import rect22 from '@/public/images/Developers-product-teams/Rectangle  (33).png';
import rect23 from '@/public/images/Developers-product-teams/Rectangle  (32).png';
import rect24 from '@/public/images/Developers-product-teams/Rectangle  (19).png';
import rect25 from '@/public/images/Developers-product-teams/Rectangle  (18).png';

const productJobs = [
  { title: 'Live product video', desc: 'API driven interactive broadcasting', image: rect20 },
  { title: 'On-demand playback', desc: 'Instant worldwide catalog streaming', image: rect21 },
  { title: 'Real-time contribution', desc: 'Ultra-low latency device sourcing', image: rect22 },
  { title: 'Secure/private playback', desc: 'SSO token gating and session control', image: rect23 },
  { title: 'Recording and replay', desc: 'Automated archive and storage', image: rect24 },
  { title: 'Product analytics', desc: 'Real-time stream telemetry reports', image: rect25 },
];

const successCriteria = [
  'Verify target audience latency maps',
  'Define SAML OIDC identity routing rules',
  'Plan operations and support escalation paths',
  'Audit player compatibility with screen readers',
  'Approve regulatory cold-storage retention cycles',
  'Review historical billing models against scale bounds',
];

export default function StartWithProductJobSection() {
  return (
    <section className="relative w-full bg-slate-900/90 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg157}
          alt="Start With Product Job Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Start with the product job, then define what ready means.
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Choose the product-video job and the success criteria your team must validate. This page routes to authoritative architecture/capability detail rather than re-specifying it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 6 Job Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productJobs.map((j, idx) => (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
              >
                <div className="relative w-full h-28 bg-slate-900 overflow-hidden">
                  <Image
                    src={j.image}
                    alt={j.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 flex flex-col gap-1.5 flex-1 justify-center">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {j.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                    {j.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Success Criteria Box */}
          <div className="lg:col-span-4 p-8 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Success criteria validation
            </h3>

            <div className="flex flex-col gap-4">
              {successCriteria.map((c, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-4 flex items-center justify-center text-teal-400 font-bold shrink-0 text-xs">
                    ✓
                  </div>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">
                    {c}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Choose a Product Job
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Open Build Video Into a Product
          </button>
        </div>
      </div>
    </section>
  );
}
