'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'How do I contact ZoikoStream?',
    answer:
      'Choose the contact category that matches your request on this page. Sales, Support, Live Events, Developer Relations, Partners, Press & media, Accessibility, Privacy, Legal and Security each have dedicated routes. Use the general inquiry form only when none of those paths fits.',
  },
  {
    question: 'I already use ZoikoStream. Where should I get help?',
    answer:
      'Use ZoikoStream Support for product, account or technical help. The general Contact form is not the primary support channel and should not be used for urgent incidents.',
  },
  {
    question: 'How do I talk to ZoikoStream about a live event?',
    answer:
      'Use the dedicated Live Events inquiry route for planning, commercial and production discussions. Existing customers with an event already in progress should use the support or event-operations path defined for their service.',
  },
  {
    question: 'Can I report a security vulnerability through the Contact form?',
    answer:
      "No. Use ZoikoStream's dedicated Vulnerability Disclosure process so the report reaches the security team through the correct protected workflow.",
  },
  {
    question: 'How do I make a privacy request?',
    answer:
      'Use the privacy and data-rights route linked from this page and the Privacy Notice. The dedicated workflow collects the information needed to identify and process the request under the applicable rules.',
  },
  {
    question: 'Can I send my resume through Contact?',
    answer:
      'No. Apply through the relevant role on the ZoikoStream Careers page. This keeps applications, candidate privacy notices and hiring records in the governed recruiting workflow.',
  },
  {
    question: 'What information does the general inquiry form collect?',
    answer:
      'The launch form collects your name, email address, optional organization, a topic and your message. Additional information is only requested when necessary for a specific contact workflow.',
  },
  {
    question: 'Should I include passwords or API keys in my message?',
    answer:
      'No. Never send passwords, API keys, access tokens, payment card details or other sensitive credentials through the general Contact form.',
  },
  {
    question: 'Will I receive a response immediately?',
    answer:
      'ZoikoStream confirms receipt when a submission is successfully created. Response times vary by contact route and are only stated where an approved service commitment applies.',
  },
  {
    question: 'Where can I check whether ZoikoStream is experiencing an incident?',
    answer:
      'Use System Status for published platform health and incident communications. If you need customer-specific help, use Support in addition to the public status information.',
  },
];

export default function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Answer engine layer
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-gray-800 sm:text-3xl">
            Quick answers.
          </h2>
        </div>

        <div className="mt-8 border-t border-zinc-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-zinc-200 py-6">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <h3 className="text-base font-bold leading-7 text-gray-800">{faq.question}</h3>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg font-normal leading-7 text-gray-800"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2 text-sm leading-6 text-gray-500">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
