'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: 'What can I query with the Analytics API?',
    a: 'You can query viewership aggregates, granular QoS parameters (like startup delay and buffer ratio), geography segments, and client device matrices safely.',
  },
  {
    q: 'What is viewer analytics?',
    a: 'It is aggregated and anonymized behavior metrics mapping concurrent viewing peaks, total watch hours, and geographic distribution without personal identifying logs.',
  },
  {
    q: 'What does QoS mean for video?',
    a: 'Quality of Service represents network and playback health diagnostics, tracking player start delays, video resolution shifts, packet drop rates, and playback failures.',
  },
  {
    q: 'Is analytics data real time?',
    a: 'Yes, ingest pipelines process telemetry beacons within 15 seconds, making near-real-time stream health monitoring robust and reactive.',
  },
  {
    q: 'How do filters and breakdowns work?',
    a: 'Query payloads support explicit array-matching logic, letting you filter metrics by ISO country, player version, and group responses by device categories.',
  },
  {
    q: 'How is viewer privacy handled?',
    a: 'Viewer sessions use localized anonymous tokens. We explicitly strip all personal identifier values (emails, names, phone records) from analytical telemetry streams.',
  },
  {
    q: 'How are limits handled?',
    a: 'Standard endpoints enforce hourly API thresholds. Responses provide rate limit metadata headers so integrations can implement exponential backoff logic.',
  },
  {
    q: 'How do I monitor active stream health?',
    a: 'Webhook ingest targets allow you to subscribe to instant failure alerts and drop beacons to quickly isolate server routing anomalies.',
  },
];

export function ReadyToPutAnalyticsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950 border-t border-b border-gray-800 flex flex-col justify-start items-center gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-analytics-api/bg (21).png"
          alt="Ready to Put Analytics Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-16">
        <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Ready to put analytics into your workflow?
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Answer common questions and choose your next step.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="w-full p-6 bg-gray-800/80 rounded-xl border border-gray-800 flex flex-col gap-3 overflow-hidden shadow-xl backdrop-blur-md transition-all"
              >
                <div
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center cursor-pointer gap-4"
                >
                  <h3 className="text-white text-base font-bold">{faq.q}</h3>
                  <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center shrink-0">
                    <span className="text-slate-400 font-bold text-xs">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <>
                    <div className="w-full h-px bg-gray-800" />
                    <p className="text-slate-400 text-sm leading-5">{faq.a}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
