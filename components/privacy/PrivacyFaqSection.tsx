import React from 'react';

const faqs = [
  {
    q: 'What data does ZoikoStream collect?',
    a: 'What ZoikoStream collects depends on your relationship and product context — see Data Practices and the Privacy Notice for category-level detail.',
  },
  {
    q: 'Does ZoikoStream sell or share personal data?',
    a: "ZoikoStream's approved position and any required sale/share opt-out controls are stated in Your Privacy Choices and the current Privacy Notice, verified under applicable legal definitions.",
  },
  {
    q: 'How do I delete my data?',
    a: 'Use Make a privacy request. If the data is customer-controlled viewer data, the customer may be the first controller to contact.',
  },
  {
    q: 'How do I access or correct my data?',
    a: 'Use account self-service where available; otherwise submit a request through the Privacy Rights Service.',
  },
  {
    q: 'Does ZoikoStream honor Global Privacy Control?',
    a: 'ZoikoStream detects a recognized Global Privacy Control signal and honors it within the applicable jurisdiction scope shown in Your Privacy Choices.',
  },
  {
    q: 'How does ZoikoStream use cookies?',
    a: 'Cookie categories and vendor purposes are explained here and managed through the live Cookie Preferences control.',
  },
  {
    q: 'Who controls data when I watch a video hosted by a ZoikoStream customer?',
    a: 'The customer may determine the purpose for viewer data while ZoikoStream provides processing and may have limited separate operational purposes.',
  },
  {
    q: 'What happens to data from a Live Event?',
    a: 'Organizer and platform roles can differ by workflow — see Privacy for Live Events for guidance on who to contact.',
  },
  {
    q: 'Where is ZoikoStream data stored?',
    a: 'Storage location depends on product and configuration; see the Trust Center for verified residency and subprocessor information.',
  },
  {
    q: 'How long does ZoikoStream keep data?',
    a: 'Retention uses category-based periods or defined criteria from the retention registry — see Retention for details.',
  },
  {
    q: 'Can someone make a request for me?',
    a: 'Yes, where applicable, using the authorized-agent route with proportionate verification.',
  },
  {
    q: 'How can I contact Privacy?',
    a: 'Use Make a privacy request for personal data rights, or Contact Privacy below for general privacy questions.',
  },
];

export function PrivacyFaqSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-slate-50 border-b border-zinc-200 flex justify-center items-center">
      <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
              AEO
            </span>
          </div>
          <h2 className="text-neutral-700 text-3xl font-bold">
            Frequently asked questions.
          </h2>
        </div>

        <div className="w-full border-t border-zinc-200 divide-y divide-zinc-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-6 flex flex-col gap-2">
              <h3 className="text-neutral-700 text-base font-bold">
                {faq.q}
              </h3>
              <p className="text-gray-500 text-sm font-normal leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
