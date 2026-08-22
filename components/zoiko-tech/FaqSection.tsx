import React from 'react';

const faqs = [
  {
    q: 'What is Zoiko Tech?',
    a: "Zoiko Tech is the technology company behind ZoikoStream. It is responsible for the platform's product and engineering stewardship.",
  },
  {
    q: 'Is Zoiko Tech the same as ZoikoStream?',
    a: 'No. Zoiko Tech is the technology company; ZoikoStream is the streaming platform.',
  },
  {
    q: 'What is Zoiko Cloud?',
    a: 'Zoiko Cloud provides shared technology and infrastructure that supports ZoikoStream. It should not be presented as interchangeable with Zoiko Tech or ZoikoStream.',
  },
  {
    q: 'Who operates ZoikoStream?',
    a: "Zoiko Tech stewards the platform's engineering and operation. Customer-specific service and legal commitments remain governed by applicable agreements and service documentation.",
  },
  {
    q: 'Where can developers find ZoikoStream technical resources?',
    a: 'Use the Developers area for approved API documentation, integration guidance, developer support, and related technical resources.',
  },
  {
    q: 'Where can I review security and reliability information?',
    a: 'Use the Trust Center for security, compliance, privacy, and resilience information, and System Status for current production service health and public incident information.',
  },
  {
    q: 'Is Live Events a separate company?',
    a: 'No. Live Events is presented as a specialized capability within ZoikoStream, not as a separate company.',
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold     uppercase tracking-wider">
              SEO + AEO
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold     text-slate-900">
            Quick answers.
          </h2>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col divide-y divide-slate-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-6 flex flex-col gap-2">
              <h3 className="text-slate-900 text-base font-bold    ">
                {faq.q}
              </h3>
              <p className="text-slate-600 text-base font-normal     leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
