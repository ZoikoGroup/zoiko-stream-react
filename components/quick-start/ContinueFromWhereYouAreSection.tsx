'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'What do I need before starting?',
    a: 'A verified ZoikoStream account, active API secrets allocated to your developer profile, and an external contribution source (e.g. OBS Studio, hardware encoder, or secure client SDK).',
  },
  {
    q: 'What counts as a working stream?',
    a: 'A stream is verified operational only when both of these criteria are met: 1. Telemetry confirms the ingestion handshake has completed. 2. The client player successfully requests, parses, and plays signed playback chunks.',
  },
  {
    q: 'How do I know the stream is live?',
    a: 'Never assume latency or connectivity based on simple return codes. Always consult real-time telemetry pipelines or ingest status webhooks for absolute operational metrics.',
  },
  {
    q: 'Why can playback still be denied?',
    a: 'If signed verification tokens have expired, or request parameters fail domain routing policies, client manifest requests are blocked. This fail-closed architecture protects your media assets.',
  },
];

export function ContinueFromWhereYouAreSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-t border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/quickstart/bg (24).png"
          alt="Continue From Where You Are Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Continue From Where You Are
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Your first media loop is verified. Now select your next implementation track or consult our technical references to map out custom production features.
          </p>
        </div>

        {/* 2 Track Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: BUILD & INTEGRATE */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="w-full h-40 relative rounded-lg overflow-hidden bg-slate-950">
              <Image
                src="/images/quickstart/Rectangle (13).png"
                alt="Build and Integrate"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-xl font-bold">BUILD &amp; INTEGRATE</h3>
              </div>
              <p className="text-slate-400 text-sm font-normal leading-5">
                Embed video features natively into custom software via software development kits (SDKs).
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-teal-400 text-sm font-bold underline cursor-pointer hover:text-teal-300">
                Developer SDK Packages →
              </span>
              <span className="text-teal-400 text-sm font-bold underline cursor-pointer hover:text-teal-300">
                Live Streaming API Reference →
              </span>
              <span className="text-teal-400 text-sm font-bold underline cursor-pointer hover:text-teal-300">
                Secure Token Playback →
              </span>
            </div>
          </div>

          {/* Card 2: MANAGE & OPERATE */}
          <div className="p-8 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-2xl backdrop-blur-md">
            <div className="w-full h-40 relative rounded-lg overflow-hidden bg-slate-950">
              <Image
                src="/images/quickstart/Rectangle (14).png"
                alt="Manage and Operate"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-xl font-bold">MANAGE &amp; OPERATE</h3>
              </div>
              <p className="text-slate-400 text-sm font-normal leading-5">
                Track performance, configure retention scopes, and supervise streaming budgets.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-blue-500 text-sm font-bold underline cursor-pointer hover:text-blue-400">
                Platform Analytics API →
              </span>
              <span className="text-blue-500 text-sm font-bold underline cursor-pointer hover:text-blue-400">
                Concierge Monitoring Service →
              </span>
              <span className="text-blue-500 text-sm font-bold underline cursor-pointer hover:text-blue-400">
                Durable Storage Policies →
              </span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full flex flex-col gap-6 pt-6">
          <div className="flex items-center gap-2">
            <h3 className="text-white text-2xl font-bold">FREQUENTLY ASKED QUESTIONS</h3>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="p-6 bg-zinc-900/90 rounded-xl border border-gray-800 flex flex-col gap-3 cursor-pointer transition-all hover:border-gray-700"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-white text-base font-bold">{faq.q}</h4>
                    <div className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center text-teal-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="text-slate-400 text-sm font-normal leading-6 pt-2 border-t border-gray-800/80">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="w-full p-10 lg:p-12 bg-zinc-900/90 rounded-2xl border border-blue-500/80 flex flex-col items-center justify-center text-center gap-6 shadow-2xl backdrop-blur-md">
          <h3 className="text-white text-3xl font-bold">Ready to deploy your video pipeline?</h3>
          <p className="text-slate-400 text-base font-normal max-w-[720px]">
            Build next-generation interactive video experiences with cryptographic security, low-latency, and resilient scaling parameters.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center gap-2 cursor-pointer shadow-md">
              <span className="text-gray-950 text-base font-bold">Continue Building</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center gap-2 cursor-pointer hover:border-white transition-colors">
              <span className="text-white text-base font-bold">Developer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
