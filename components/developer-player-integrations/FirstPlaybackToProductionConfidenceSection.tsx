'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do I embed a ZoikoStream live stream or video?',
    a: 'You can use our developer-friendly JavaScript SDK wrapper, embed via HTML5 native <video> elements with our platform hls.js configurations, or request validated React/Vue component wrappers straight from the Capability Registry.',
  },
  {
    q: 'Can I use my own player?',
    a: 'Absolutely. Our platform delivers standards-conforming HTTP Live Streaming (HLS) and MPEG-DASH manifests. Any player that supports standard MSE protocols can be integrated, assuming compliance prerequisites are verified.',
  },
  {
    q: 'How do I protect playback?',
    a: 'Enforce server-side JWT signing pipelines. Your secure back-end service evaluates client entitlement before generating dynamic token descriptors, which are securely passed to our edge validation gateway.',
  },
  {
    q: 'Why did autoplay not start?',
    a: 'Audible autoplay is heavily restricted across modern desktop and mobile browsers. Initialize players in a muted state or build lightweight, gesture-aware Play overlay components to guarantee high-fidelity starting states.',
  },
  {
    q: 'How do I add captions?',
    a: 'Embed automated real-time AI-rendered captions inline at sub-second speeds, or pipe dynamic WebVTT tracks into standard MPEG-TS segment streams for player-side selection.',
  },
  {
    q: 'How do I debug playback?',
    a: 'Leverage our structured client-side telemetry panels or capture native error events. All raw browser errors are mapped to diagnostic codes, separating network failures from authorization blocks.',
  },
  {
    q: 'Which browsers and devices are supported?',
    a: 'We provide complete, verified compatibility across Chrome, Safari, Firefox, and Edge. Zero-dependency native browser integrations run robustly across modern desktop, mobile, tablet, and smart TV screens.',
  },
];

export function FirstPlaybackToProductionConfidenceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/60 border-t border-gray-800 flex flex-col justify-start items-center gap-16 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-16">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            From first playback to production confidence.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Review our comprehensive implementation guidelines or start building with our interactive development SDK tools.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="w-full border-t border-gray-800 flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="py-6 border-b border-gray-800 flex flex-col gap-3 transition-all"
              >
                <div
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3 className="text-white text-lg font-bold">{faq.q}</h3>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-bold text-xs">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <p className="text-gray-300 text-base leading-6 pt-2">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="w-full p-12 bg-gray-800 rounded-2xl border border-gray-800 flex flex-col items-center gap-8 text-center shadow-2xl">
          <div className="max-w-[800px] flex flex-col items-center gap-3">
            <h3 className="text-white text-3xl font-bold">
              Ready to choice your integration path?
            </h3>
            <p className="text-slate-400 text-base leading-5">
              Connect to our live developer environments or talk with a solutions architect today to start engineering stable, accessible video pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-gray-950 text-base font-bold">Start building</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold text-center cursor-pointer hover:border-white transition-colors">
              Talk to an expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
