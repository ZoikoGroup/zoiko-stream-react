'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: 'Which protocol should I choose — RTMPS, SRT, or WHIP?',
    a: 'It depends on your source type, network conditions, latency needs, and firewall environment. RTMPS suits broad encoder compatibility over TLS. SRT is designed for resilient transport across imperfect networks. WHIP enables standards-based WebRTC ingest. Use the comparison matrix to evaluate tradeoffs.',
  },
  {
    q: 'Is SRT better than RTMPS for unreliable networks?',
    a: "SRT is designed for loss recovery and latency tuning across imperfect networks. Whether it fits depends on your qualified encoder, ZoikoStream-supported mode, and actual network conditions. Test with your real source before committing.",
  },
  {
    q: 'Can I use WHIP from a browser?',
    a: "WHIP uses WebRTC, which browsers support natively. Whether ZoikoStream's WHIP endpoint supports browser-based contribution depends on current product qualification. Check the WHIP profile for supported environments.",
  },
  {
    q: 'How do I rotate my stream credentials?',
    a: 'Use the credential management panel. Rotation issues a new credential while the old one enters a grace period before invalidation. The stream continues uninterrupted when rotation is supported for your protocol.',
  },
  {
    q: 'What happens if my protocol is deprecated?',
    a: 'Follow the migration timeline in the changelog. Test the replacement path and re-qualify your encoder before the deprecation date. ZoikoStream provides migration guides and qualification support.',
  },
  {
    q: 'How do I report an encoder compatibility issue?',
    a: 'Submit a qualification request with your vendor, product, version, protocol, and test evidence. The qualification team reviews submissions and updates the registry with results.',
  },
];

export function FaqProtocolChoiceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-950/80 border-t border-b border-gray-800 flex flex-col justify-start items-center gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 15.png"
          alt="FAQ Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-16">
        <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Common questions about protocol choice and configuration
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Answers are concise, direct, source-governed, and answer-engine friendly.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="w-full p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-5 overflow-hidden shadow-xl backdrop-blur-md transition-all"
              >
                <div
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3 className="text-white text-lg font-bold   ">{faq.q}</h3>
                  <div className="w-9 h-9 p-2 bg-gray-800 rounded-full border border-gray-800 flex items-center justify-center shrink-0">
                    <span className="text-teal-400 font-bold text-xs">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <>
                    <div className="w-full h-px bg-gray-800" />
                    <p className="text-slate-400 text-base leading-6">{faq.a}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-slate-950 text-base font-bold   ">Open documentation</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 text-white font-bold    text-center cursor-pointer hover:border-white transition-colors">
            Talk to an expert
          </div>
        </div>
      </div>
    </section>
  );
}
