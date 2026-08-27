'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: 'What is a recording asset?',
    a: 'A recording asset is the unified, persistent media container generated from a live stream input.',
  },
  {
    q: 'When is a recording ready?',
    a: 'An asset transitions to the READY state only after HLS/DASH manifest transcoding completes.',
  },
  {
    q: 'How do I find a recording?',
    a: 'Query recordings via GET /v1/assets using specific origin streams or date filter scopes.',
  },
  {
    q: 'Can I update asset metadata?',
    a: 'Yes. Use PATCH /v1/assets/:id to update external references, tags, or validation variables.',
  },
  {
    q: 'How does deletion work?',
    a: 'Soft deletions wipe storage block allocations across CDNs instantly, preserving metadata schemas.',
  },
  {
    q: 'Can I automate workflows?',
    a: "Yes. Connect webhook profiles to listen for 'asset.recording.ready' events to launch custom steps.",
  },
  {
    q: 'How do I protect playback?',
    a: 'Configure SSO-gate access structures or mount AES-128 cryptographic key validation hooks.',
  },
  {
    q: 'What if an asset is stuck?',
    a: 'Check processing telemetry using the Asset Detail console or connect with support channels.',
  },
];

const relatedLinks = [
  'Error Handling',
  'Rate Limits',
  'Changelog',
  'System Status',
  'Analytics API',
  'Webhooks',
];

export function ReadyToOperationalizeRecordedMediaSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/60 border-t border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Recording-assest/bg (15).png"
          alt="Ready to Operationalize Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/90 to-gray-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Ready to operationalize recorded media?
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Whether you need raw API-first asset management or custom compliance workflows, our dev portal routes you to verified outcomes.
          </p>
        </div>

        {/* 2 Column Details */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: FAQs */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-zinc-900/80 rounded-lg border border-gray-800 flex flex-col gap-2 shadow-md backdrop-blur-md transition-all"
                  >
                    <div
                      onClick={() => toggle(idx)}
                      className="w-full flex justify-between items-center cursor-pointer gap-4"
                    >
                      <h4 className="text-white text-sm font-bold">{faq.q}</h4>
                      <span className="text-slate-400 text-xs font-bold">{isOpen ? '▲' : '▼'}</span>
                    </div>

                    {isOpen && (
                      <p className="text-slate-400 text-xs leading-4 pt-1">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Operationalize Today Box */}
          <div className="lg:col-span-5 p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <h3 className="text-white text-xl font-bold">Operationalize today</h3>
            <p className="text-slate-400 text-sm leading-5">
              Jump into our interactive developer guides. Get your sandbox keys instantly, review compliant architecture guidelines, or configure test hooks.
            </p>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
                <span className="text-slate-950 text-sm font-bold">Open API reference</span>
              </div>
              <div className="px-6 py-3 rounded-lg border border-slate-400 text-white font-bold text-sm text-center cursor-pointer hover:border-white transition-colors">
                Review secure playback
              </div>
            </div>

            <div className="w-full h-px bg-gray-800" />

            <div className="flex flex-col gap-3">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wide">
                RELATED WORKFLOWS
              </span>
              <div className="flex flex-col gap-2">
                {relatedLinks.map((link, idx) => (
                  <span
                    key={idx}
                    className="text-teal-400 text-xs font-bold cursor-pointer hover:underline flex items-center gap-1"
                  >
                    {link} →
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
