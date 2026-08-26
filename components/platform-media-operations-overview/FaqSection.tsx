'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is media operations in ZoikoStream?',
    a: 'Media operations establishes explicit roles, states, and clear evidence-based checkpoints for the processing, ingest, validation, secure delivery, and archival preservation of high-value media files.',
  },
  {
    q: 'Is Media operations overview a control room?',
    a: 'It serves as the conceptual blueprint mapping and defining every active signal, authority checkpoint, SLA standard, and human intervention path to ensure zero-uncertainty workflows.',
  },
  {
    q: 'How is media operations different from stream monitoring?',
    a: 'Monitoring observes current health state and registers telemetry, while Operations governs the broader lifecycle containing planning, authority, change, escalation, and immutable evidence.',
  },
  {
    q: 'How is it different from media management?',
    a: 'Media management focuses specifically on file identity, metadata taxonomy, rights restrictions, and version control of static storage assets.',
  },
  {
    q: 'Can ZoikoStream automatically fix streaming issues?',
    a: 'The platform identifies and flags structural issues instantly but keeps execution, rollback triggers, and escalation pathways structurally bound to human operator authority.',
  },
  {
    q: 'Does the page show real-time system status?',
    a: 'Yes, you can track current global edge delivery, ingest nodes, and telemetry metrics directly on the status and registry consoles.',
  },
  {
    q: 'How are accessibility and captions handled?',
    a: 'We support native registration of WebVTT subtitle tracks and multiple descriptive audio layers bound securely to our master media schemas.',
  },
  {
    q: 'How do I get help with an active operation?',
    a: 'We maintain direct support escalation channels linked explicitly to running incident references with sandboxed debug replicas.',
  },
  {
    q: 'How do enterprises evaluate Media operations?',
    a: 'Enterprises utilize our evidence-first evaluation criteria covering operational roles, strict privacy safeguards, change history ledger, and WCAG AA accessibility audits.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 opacity-60 py-16 sm:py-20 lg:py-24 bg-slate-950/60 flex flex-col gap-14"
      style={{
        backgroundImage: `url('/images/platform-media-operations-overview/bg (61).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }} >
      <div className="flex flex-col gap-3">
        <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <div
            key={faq.q}
            className="p-6 bg-slate-950 rounded-[10px] border border-slate-700 flex flex-col gap-3"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center text-left gap-4"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="text-slate-50 text-base font-bold font-['Space_Grotesk']">
                {faq.q}
              </span>
              <span className="w-4 h-4 shrink-0 text-teal-400 font-bold text-lg">
                {openIdx === idx ? '−' : '+'}
              </span>
            </button>
            {openIdx === idx && (
              <p className="text-slate-400 text-xm font-normal font-['Space_Grotesk'] leading-5">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
