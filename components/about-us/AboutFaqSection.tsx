'use client';

import { useState } from 'react';

// --- DATA DEFINITIONS ---

const FAQ_ITEMS = [
  {
    id: 'what-is-zoikostream',
    question: 'What is ZoikoStream?',
    answer:
      'ZoikoStream is an enterprise-grade media infrastructure platform that enables global delivery of high-quality live and on-demand video. We provide the tools for ingest, transcoding, and resilient media operations.',
  },
  {
    id: 'who-owns-zoikostream',
    question: 'Who owns ZoikoStream?',
    answer:
      'ZoikoStream is owned and operated by Zoiko Group, a leading global technology conglomerate focused on digital infrastructure, media services, and enterprise cloud solutions.',
  },
  {
    id: 'where-available',
    question: 'Where is ZoikoStream available?',
    answer:
      'Our services are available globally, supported by a vast network of edge nodes in over 150 countries, ensuring low-latency delivery regardless of viewer location.',
  },
  {
    id: 'what-makes-different',
    question: 'What makes ZoikoStream different?',
    answer:
      'Our primary differentiators are our massive global scale, military-grade security protocols (SOC 2, ISO 27001), and our unique integration within the broader Zoiko technology ecosystem.',
  },
];

// --- COMPONENT ---

export default function AboutFaqSection() {
  // First accordion item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-neutral-950 text-white py-16 sm:py-24 px-6 sm:px-10 lg:px-20  ">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 lg:sticky lg:top-12">
          <span className="text-teal-400 text-base font-normal uppercase tracking-widest  ">
            QUESTIONS? WE&apos;VE GOT ANSWERS.
          </span>

          <h2 className="text-white text-4xl sm:text-4xl  leading-[1.15]  ">
            About ZoikoStream<br />FAQs
          </h2>

          <p className="text-neutral-300 text-base font-normal leading-relaxed pt-2">
            Answers to the most common questions about our company and platform.
          </p>

          <a
            href="#all-faqs"
            className="inline-flex items-center gap-2 pt-4 text-teal-400 hover:text-teal-300 text-base font-normal transition-colors group"
          >
            <span>View all FAQs</span>
            <img className="w-4 h-4 rounded-xs inline-block transition-transform group-hover:translate-x-1" src="/images/about-us/Icon (8).svg" />
          </a>
        </div>

        {/* Right Column: FAQ Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="bg-neutral-800 rounded-lg border border-white/5 overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-white text-base sm:text-lg font-bold   leading-snug">
                    {item.question}
                  </span>
                  <span className="text-teal-400 text-xl font-medium select-none shrink-0">
                    {isOpen ? '−' : '＋'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-neutral-300 text-sm sm:text-base font-normal leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
