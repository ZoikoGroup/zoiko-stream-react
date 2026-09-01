import React from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'Where should I start with ZoikoStream?',
    a: 'Start with this Developers overview to understand the path, then use Developer access, Authentication, or Quickstart for a working stream, or Documentation and API Reference for deeper implementation.',
    expanded: true,
  },
  {
    q: 'What can developers build with ZoikoStream?',
    a: 'Programmable APIs, SDKs, media protocols, webhooks, secure playback, and operational tools for live, real-time, and on-demand video applications.',
  },
  {
    q: 'Do I need developer access before using the Quickstart?',
    a: 'Yes, verifying developer access and obtaining API credentials are required before running commands.',
  },
  {
    q: 'Where are API details and schemas documented?',
    a: 'Exact endpoints, request schemas, parameters, and response types are authoritatively documented in the API Reference.',
  },
  {
    q: 'Where do I find errors, rate limits, and service health?',
    a: 'Check Error Handling, Published Rate Limits, and real-time System Status portals.',
  },
  {
    q: 'Can I get help with a bespoke architecture requirement?',
    a: 'Yes. You can reach out to our media engineering architects directly through dedicated enterprise support options.',
  },
  {
    q: 'Does the overview guarantee production readiness?',
    a: 'The overview maps out the operational model. Production readiness is achieved by testing edge configurations and applying security tokens.',
  },
];

export default function DevelopersAnswerReadyFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            ANSWER-READY FAQ
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Quick answers.
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-3 shadow-xs"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-zinc-900 text-base font-semibold font-['Inter']">
                {faq.q}
              </h3>
              <Plus className="w-5 h-5 text-blue-500 shrink-0" />
            </div>

            {faq.expanded && faq.a && (
              <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed pt-1">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
