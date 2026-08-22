import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg120 from '@/public/images/accessible-multilingual/bg (122).png';

const faqs = [
  {
    q: 'What does accessible & multilingual video mean?',
    a: 'It means preparing video delivery for viewers with hearing, visual, or cognitive needs while translating tracks cleanly into native regional dialects. Each track is treated as an isolated signal for sub-second performance.',
  },
  {
    q: 'Are captions and subtitles the same?',
    a: "No. Captions include spoken dialogue and atmospheric audio cues (for deaf or hard of hearing viewers). Subtitles focus solely on translated spoken words for viewers who can hear but don't know the language.",
  },
  {
    q: 'Can live video have captions?',
    a: 'Yes. ZoikoStream supports automated machine translation captions and professional stenographer overrides tunneled via low-latency STUN/TURN protocols directly to active player channels.',
  },
  {
    q: 'How are translated tracks reviewed?',
    a: 'Via the language review dashboard. Certified translators can access transcripts live or post-broadcast to correct machine translation errors and approve revisions.',
  },
  {
    q: 'How does language selection work?',
    a: 'Our custom player includes an accessible track selector menu, automatically adjusting subtitle rendering, screen-reader focus, and secondary audio streams on click.',
  },
  {
    q: 'What happens to captions after a live event?',
    a: 'They are automatically saved as immutable sidecar files in cold replication storage. These can be downloaded, corrected, or archived to fulfill legal evidence audits.',
  },
  {
    q: 'Does this page mean ZoikoStream is WCAG-compliant?',
    a: 'Yes. Our platform and custom players achieve WCAG 2.2 AA standard compliance. VPAT records and audit logs are inspectable at any time.',
  },
  {
    q: 'How do I report an accessibility barrier?',
    a: 'Submit an instant support request through our help panel. Tickets are auto-routed directly to the active media operator and support desk for rapid remediation.',
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full bg-slate-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg120}
          alt="FAQ Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-bold   text-white leading-tight">
            Make accessibility part of the video lifecycle—not an afterthought.
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Review your requirements framework, check the documentation, and start building.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900 rounded-lg border border-gray-800 backdrop-blur-md flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white text-base font-bold  ">
                  {faq.q}
                </h3>
                <span className="text-slate-400 text-xs">▼</span>
              </div>
              <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout CTAs */}
        <div className="flex flex-col items-center gap-6 pt-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/talk-to-an-expert"
              className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold   hover:opacity-90 transition-opacity"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/sdks"
              className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
            >
              Start Building
            </Link>
            <Link
              href="/live-events"
              className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold   hover:bg-white/10 transition-colors"
            >
              Plan a Live Event
            </Link>
          </div>

          <p className="text-slate-400 text-xs font-normal   max-w-2xl">
            Requirements, track states, review status, viewer behavior, and current evidence stay visible so teams can improve access without guessing.
          </p>
        </div>
      </div>
    </section>
  );
}
