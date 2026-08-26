'use client';

import React, { useState } from 'react';

const streamFaqs = [
  {
    q: 'What does Stream monitoring cover?',
    a: 'It is the ZoikoStream developer destination for stream-specific health checks and alerts. Exact signals, states, alert capabilities and history depend on approved product contracts and account access.',
  },
  {
    q: 'How do I know a stream is healthy?',
    a: 'Use current lifecycle, observation freshness and source-governed health evidence together. A positive historical observation should not be treated as current health after it becomes stale.',
  },
  {
    q: 'What does "stale" mean?',
    a: 'It means the available observation is no longer considered current under the product\'s freshness contract. The exact timing is source-governed and displayed when authorized.',
  },
  {
    q: 'Can I get alerts?',
    a: 'Alert capabilities, conditions, destinations and policy controls are capability- and entitlement-resolved. We never promise a channel or threshold that is not approved.',
  },
  {
    q: 'Is Stream monitoring the same as Analytics API?',
    a: 'No. Stream monitoring focuses on operational stream health and alerts. Analytics API is the separate destination for querying viewer and QoS data.',
  },
  {
    q: 'Is a stream issue the same as a platform incident?',
    a: 'No. Stream-specific evidence and System status are separate sources; they can correlate but should not be conflated.',
  },
];

export function ConversionRetentionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              CONVERSION + RETENTION
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Frequently asked questions.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {streamFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className="py-5 flex flex-col gap-3 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-neutral-700 text-base font-bold">{faq.q}</h3>
                  <span className="text-teal-400 font-mono font-bold text-lg">
                    {isOpen ? '−' : '＋'}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-gray-500 text-sm leading-6 pt-1">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
