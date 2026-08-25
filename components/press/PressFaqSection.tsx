import React from 'react';

const faqs = [
  {
    q: 'Where can journalists find official ZoikoStream announcements?',
    a: 'The ZoikoStream Newsroom is the authoritative publication hub for official announcements. Press & Media provides media resources, facts, assets and journalist contact routing.',
  },
  {
    q: 'Can I download the ZoikoStream logo for editorial coverage?',
    a: 'Use the current logo files published in the Media Asset Library and follow the attached usage guidance. Archived or third-party copies may be outdated.',
  },
  {
    q: 'How do I request an interview with a ZoikoStream leader?',
    a: 'Use the media inquiry form and select Interview request. You can identify an approved public spokesperson or choose no preference.',
  },
  {
    q: 'Can I send a deadline-sensitive request?',
    a: 'Yes. Include your deadline and timezone when possible so Communications can triage appropriately. Submission does not guarantee a response by the deadline.',
  },
  {
    q: 'Does submitting an embargoed request bind ZoikoStream to the embargo?',
    a: 'No. Any embargo, exclusivity, background or off-the-record terms require explicit written agreement from authorized ZoikoStream Communications before they apply.',
  },
  {
    q: 'Can I send attachments or confidential documents through the form?',
    a: 'No public file upload is provided at launch. If secure material exchange is needed, Communications can provide a governed route after qualification.',
  },
  {
    q: 'Where do I report a security vulnerability?',
    a: "Use ZoikoStream's Vulnerability Disclosure/security.txt pathway, not the press form.",
  },
  {
    q: 'May I use ZoikoStream screenshots in an article?',
    a: 'Use screenshots published in the Media Asset Library and follow their usage guidance. Do not alter them in a way that misrepresents the product.',
  },
];

export function PressFaqSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white flex flex-col justify-start items-start gap-12">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
            PRESS & MEDIA QUESTIONS
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold  ">
          Quick answers.
        </h2>
      </div>

      <div className="w-full max-w-[1216px] mx-auto border-t border-zinc-200 divide-y divide-zinc-200">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-6 flex flex-col gap-2">
            <h3 className="text-gray-800 text-base font-bold  ">
              {faq.q}
            </h3>
            <p className="text-gray-500 text-sm font-normal   leading-6">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
