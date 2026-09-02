import React from 'react';
import Image from 'next/image';
import { Minus } from 'lucide-react';

import bg9 from '@/public/images/resource-release-notes/section-7bg.png';

const FAQS = [
  {
    q: 'What is the difference between Release Notes and Changelog?',
    a: "Release Notes capture customer-facing operational impacts, action requirements, and rollout state updates. Changelogs represent structural, line-level code commits built for our development team's pipeline verification.",
  },
  {
    q: 'How are release dates and deadlines determined?',
    a: 'Release dates follow a structured cadence aligned with sprint cycles and stakeholder review windows. Deadlines are set collaboratively between product, engineering, and QA teams based on scope complexity, dependency mapping, and regression testing timelines.',
  },
  {
    q: 'What does "action required" mean for my integration?',
    a: '"Action required" indicates that an upcoming or active change directly affects your integration\'s functionality or data flow. It signals that your team must review the update, validate compatibility, and apply necessary adjustments before the specified cutoff date to avoid service disruption.',
  },
];

export default function ReleaseNotesFaqSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg9}
          alt="FAQ Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Answers regarding our version tracking methodology, rollback rules, and audit history parameters.
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full p-6 bg-zinc-900/80 rounded-xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-3 shadow-md"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                {faq.q}
              </h3>
              <div className="size-7 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex justify-center items-center shrink-0">
                <Minus className="w-3.5 h-3.5 text-teal-400" />
              </div>
            </div>
            <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
