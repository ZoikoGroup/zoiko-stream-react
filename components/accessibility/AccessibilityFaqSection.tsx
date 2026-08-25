import React from 'react';

const faqs = [
  {
    q: 'How do I report an accessibility barrier?',
    a: 'Choose "Report an accessibility barrier" and tell us where the issue happened and what you were trying to do. You can include page, player or event context. Assistive-technology details are optional.',
  },
  {
    q: 'Do I have to disclose a disability or diagnosis?',
    a: 'No. ZoikoStream does not require disability, diagnosis, medical records or proof of need to receive accessibility feedback or ask for help.',
  },
  {
    q: 'Can I report a barrier anonymously?',
    a: 'Yes, if you do not need a response. Contact information is required only when follow-up is necessary or requested.',
  },
  {
    q: 'Should I tell you which screen reader or assistive technology I use?',
    a: 'Only if you want to. That information can help reproduce some issues, but it is optional and a report remains valid without it.',
  },
  {
    q: 'What if an accessibility issue is affecting a live event right now?',
    a: 'If you are an existing customer or event operator and need time-sensitive production help, use Support or the event-operations route. You can still submit accessibility feedback for follow-up.',
  },
  {
    q: 'Who is responsible for captions or other accessible media?',
    a: 'Responsibility depends on the feature, configuration and content owner. ZoikoStream owns accessibility of its interface and platform components; event organizers or content owners may control captions, transcripts, audio description or other media. We route the issue rather than make you determine ownership.',
  },
  {
    q: 'How do I request accessibility documentation for procurement?',
    a: 'Use the Accessibility Documentation route to the Trust Center or Enterprise Inquiries. Only current, approved conformance documentation is provided.',
  },
  {
    q: 'How do I request an accommodation for a job application or interview?',
    a: 'Use the recruiting accommodation route in Careers so the request reaches the people responsible for the hiring process.',
  },
  {
    q: 'What should I not send through the accessibility form?',
    a: 'Do not send medical records, diagnoses, passwords, access tokens, stream keys, private event credentials, payment information or security vulnerability details.',
  },
  {
    q: 'What happens after I submit?',
    a: 'ZoikoStream stores the request, provides a reference and routes it to the appropriate accessibility, product, web, support or specialist team. We do not promise a fix date unless one has been confirmed.',
  },
  {
    q: "Where can I read ZoikoStream's Accessibility Statement?",
    a: 'Link to the approved Accessibility Statement when published. The statement explains accessibility approach, standards, scope, known limitations and feedback options.',
  },
];

export function AccessibilityFaqSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            ACCESSIBILITY CONTACT QUESTIONS
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Frequently asked questions.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto border-t border-zinc-200 divide-y divide-zinc-200">
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
    </section>
  );
}
