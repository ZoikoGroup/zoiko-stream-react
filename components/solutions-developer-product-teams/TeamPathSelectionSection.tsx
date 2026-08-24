import React from 'react';
import Image from 'next/image';

import bg163 from '@/public/images/Developers-product-teams/bg (157).png';
import rect16 from '@/public/images/Developers-product-teams/Rectangle  (17).png';
import rect17 from '@/public/images/Developers-product-teams/Rectangle  (16).png';
import rect18 from '@/public/images/Developers-product-teams/Rectangle  (33).png';
import rect19 from '@/public/images/Developers-product-teams/Rectangle  (32).png';

const lanes = [
  { title: 'Start Building', desc: 'Self-service client keys instantly', tag: 'GET API KEY', tagStyle: 'text-teal-400', image: rect16 },
  { title: 'Documentation', desc: 'Authorized code integration guides', tag: 'READ SPECS', tagStyle: 'text-blue-500', image: rect17 },
  { title: 'Talk to an Expert', desc: 'Architect complex data schemas', tag: 'DISCUSS SCALE', tagStyle: 'text-violet-500', image: rect18 },
  { title: 'Existing Customer', desc: 'System telemetry status live check', tag: 'GET SUPPORT', tagStyle: 'text-slate-400', image: rect19 },
];

const faqs = [
  {
    q: 'How are regional network maps governed?',
    a: 'We validate geographic location parameters cryptographically against client token IPs at the nearest edge routing boundary.',
  },
  {
    q: 'Is playback latency dynamically tuned?',
    a: 'Yes, adaptive multi-CDN ingestion failure paths route media traffic deterministically to optimize playback latency.',
  },
  {
    q: 'What is the typical SSO JWT key rotation schedule?',
    a: 'Administrative credential keys reside inside your server vaulting system; JWT validation uses explainable OIDC handoffs.',
  },
];

export default function TeamPathSelectionSection() {
  return (
    <section className="relative w-full bg-slate-950/90 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg163}
          alt="Team Path Selection Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Move forward with the path your team actually needs
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            Start a developer path, continue through documentation, validate a requirement with an expert, or go directly to support/status if you already operate ZoikoStream.
          </p>
        </div>

        {/* 4 Lanes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lanes.map((l, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col group hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-slate-900 overflow-hidden">
                <Image
                  src={l.image}
                  alt={l.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {l.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                    {l.desc}
                  </p>
                </div>

                <div className="inline-flex pt-2">
                  <span className={`px-3 py-1.5 bg-gray-800 rounded-full text-xs font-bold font-['Inter'] ${l.tagStyle}`}>
                    {l.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
          <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
            Developer &amp; Product QA FAQs
          </h3>

          <div className="flex flex-col gap-5">
            {faqs.map((f, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <h4 className="text-teal-400 text-sm font-bold font-['Space_Grotesk']">
                  • {f.q}
                </h4>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed pl-3">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
          >
            Start Building
          </button>
          <button
            type="button"
            className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
          >
            Read the Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
