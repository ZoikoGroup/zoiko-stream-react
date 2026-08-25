'use client';

import Image from 'next/image';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is operational video analytics?',
    a: 'Unlike marketing analytics that track cookies and user conversion, operational analytics analyze technical telemetry - stream pipeline states, delivery speeds, transcode failures, access approvals, and player-level handshake outcomes.',
  },
  {
    q: 'How does ZoikoStream measure reach?',
    a: 'We count strictly verified units of observation, such as connection starts and secure session creations. We never generate inflated unique-person estimates based on incomplete tracking.',
  },
  {
    q: 'How is system reliability calculated?',
    a: 'Our system records active transcode timelines and playback success rates across every delivery edge, and maps them directly to independent, SLA-backed telemetry records.',
  },
  {
    q: 'What is the difference between monitoring and analytics?',
    a: 'Monitoring is real-time, sub-second error alarming aimed at immediate operation recovery. Analytics is retrospective, pattern-driven, and designed for compliance and trend reporting.',
  },
  {
    q: 'What happens when data is missing or delayed?',
    a: 'We indicate missing or stale pipelines explicitly. Delayed telemetry is labeled as pending, ensuring you never make decisions based on cached, out-of-date estimates.',
  },
  {
    q: 'Can analytics prove the root cause of an incident?',
    a: 'We capture correlations across upstream, network, and player levels. Causality is flagged as a suspected contributor until verified by structural network traces.',
  },
  {
    q: 'Does analytics identify individual viewers?',
    a: 'No. Our privacy architecture aggregates all metrics by default and employs cohort protection rules, stripping PII before write operations.',
  },
  {
    q: 'Can live and replay results be compared?',
    a: 'Yes. Playback starts and watch duration are segmented by live window and replay continuation profiles, so you can trace audience continuity over time.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(FAQS.map((_, i) => [i, true])),
  );

  const toggle = (i: number) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/faq/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/faq/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-54px] size-[420px]"
      />
      <img
        src="/images/operational-analytics/faq/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-79px] right-[-120px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[40px]">
        <div className="flex w-full flex-col items-start gap-[12px]">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#0f172a] md:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[24px] text-[#64748b]">
            Everything you need to know about ZoikoStream&apos;s operational video analytics platform.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[12px]">
          {FAQS.map((faq, i) => {
            const isOpen = open[i];
            return (
              <div
                key={faq.q}
                className="flex w-full flex-col items-start gap-[12px] rounded-[14px] border border-solid border-[#e2e8f0] bg-white px-[28px] py-[24px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-[16px] text-left"
                >
                  <span className="min-w-px flex-1 text-[17px] font-bold text-[#0f172a]">{faq.q}</span>
                  <span className="flex size-[28px] shrink-0 items-center justify-center rounded-[14px] bg-[#f1f5f9]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="w-full font-inter text-[14px] font-normal leading-[22px] text-[#64748b]">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
