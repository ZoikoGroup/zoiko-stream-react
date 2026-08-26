'use client';

import React, { useState } from 'react';

const launchChecklist = [
  'Authentication and developer access confirmed',
  'Ingest method implemented against a supported path',
  'Client/server secret boundary verified',
  'Interrupted/expired upload handling tested',
  'Readiness signal drives the playback CTA — not a timer',
  'Playback and access policy configured',
  'Errors and retries handled per documented retryability',
  'Rate limits and quotas reviewed for production load',
  'Deletion and retention behavior understood',
  'Webhook signature verification implemented',
  'Changelog and System status bookmarked for your team',
];

const vodFaqs = [
  {
    q: 'What is a video-on-demand API?',
    a: 'A programmatic way to create and manage media assets, ingest source video, observe asynchronous processing, and obtain playback outputs once the platform confirms readiness.',
  },
  {
    q: 'How do I upload a video with ZoikoStream?',
    a: 'Authenticate from your server, create an asset resource to receive an upload URL, and transfer your file directly over HTTPS.',
  },
  {
    q: 'Can users upload directly from a browser or mobile app?',
    a: 'Yes. Your server can request a scoped upload authorization URL and return it to the client for direct transfer without sharing master secrets.',
  },
  {
    q: 'How do I know when a video is ready to play?',
    a: 'Listen for the asset.ready webhook event or query the asset status until the readiness flag becomes true.',
  },
  {
    q: 'Does ZoikoStream support resumable uploads?',
    a: 'Yes. Chunked, resumable transfer protocols are supported across native SDKs and raw HTTPS endpoints.',
  },
  {
    q: 'What happens if an upload is interrupted or expires?',
    a: 'If interrupted, resume using the byte offset header. If expired, request a fresh authorization token from your backend.',
  },
  {
    q: 'How is playback protected?',
    a: 'Use short-lived JWT signatures or restricted domain policies to ensure viewer tokens are validated at the edge.',
  },
  {
    q: 'How do webhooks signal processing changes?',
    a: 'Webhooks send signed HTTP POST payloads to your endpoint for events like asset.processing, asset.ready, and asset.errored.',
  },
  {
    q: 'How do I delete or retire an asset?',
    a: 'Send a DELETE request to /v1/assets/{asset_id} using your authenticated server credentials.',
  },
];

export function BeforeYouLaunchSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-16">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        {/* Launch Checklist Part */}
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
                BEFORE YOU LAUNCH
              </span>
            </div>

            <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
              Before launch, verify the full VOD lifecycle — not just the happy-path upload.
            </h2>
          </div>

          <div className="w-full max-w-[800px] flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
            {launchChecklist.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center gap-3">
                <div className="w-4 h-4 bg-white rounded border border-gray-400 flex items-center justify-center flex-shrink-0">
                </div>
                <span className="text-zinc-900 text-sm font-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Answer-Ready FAQ Part */}
        <div className="w-full flex flex-col justify-start items-start gap-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
                ANSWER-READY FAQ
              </span>
            </div>

            <h2 className="text-zinc-900 text-3xl font-bold">Quick answers.</h2>
          </div>

          <div className="w-full max-w-[820px] flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {vodFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="py-5 flex flex-col gap-3 cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-zinc-900 text-base font-semibold">{faq.q}</h3>
                    <span className="text-blue-500 text-lg font-semibold font-mono">
                      {isOpen ? '−' : '＋'}
                    </span>
                  </div>

                  {isOpen && (
                    <p className="text-gray-500 text-base font-normal leading-6 pt-1">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
