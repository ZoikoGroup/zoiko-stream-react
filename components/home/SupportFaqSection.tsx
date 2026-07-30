"use client"
'use client';

import { useState } from 'react';

// --- DATA DEFINITIONS ---

const SIDEBAR_LINKS = [
  { label: 'Developer documentation', href: '#docs' },
  { label: 'Security overview', href: '#security' },
  { label: 'System status', href: '#status' },
  { label: 'Talk to an expert', href: '#contact' },
];

const FAQ_ITEMS = [
  {
    question: 'What is ZoikoStream?',
    answer:
      "ZoikoStream is Zoiko Group's secure media infrastructure and streaming platform, operated within Zoiko Tech and powered by Zoiko Cloud. It provides programmable APIs, SDKs, media protocols, managed workflows, global delivery, access controls, recording, replay, captions, translation, analytics, and resilient media operations.",
  },
  {
    question: 'Does ZoikoStream support live and on-demand video?',
    answer:
      'Yes, ZoikoStream provides unified infrastructure for low-latency live streaming as well as high-efficiency VOD encoding, hosting, and global playback.',
  },
  {
    question: 'Can developers add ZoikoStream to their applications?',
    answer:
      'Absolutely. ZoikoStream offers comprehensive APIs, SDKs for mobile and web platforms, and pre-built video player components for seamless integration.',
  },
  {
    question: 'What is ZoikoStream Live Events?',
    answer:
      'ZoikoStream Live Events is a managed service tier combining platform features with hands-on operational support for high-stakes live broadcasts.',
  },
  {
    question: 'What kinds of live events can ZoikoStream support?',
    answer:
      'From corporate keynotes and conferences to worship services, memorials, celebrations, and civic broadcasts requiring high security and reliability.',
  },
  {
    question: 'How does ZoikoStream protect live and recorded video?',
    answer:
      'We enforce end-to-end encryption, tokenized access controls, domain restriction, DRM protection, and granular audience access permissioning.',
  },
  {
    question: 'Does ZoikoStream support captions and translation?',
    answer:
      'Yes, automated real-time closed captioning and multi-language AI translation streams are natively integrated into the player experience.',
  },
  {
    question: 'Can live broadcasts be recorded and made available for replay?',
    answer:
      'Automated cloud recording instantly preserves live broadcasts into replayable VOD assets complete with indexed chapters and captions.',
  },
  {
    question: 'Is ZoikoStream designed for enterprise use?',
    answer:
      'Built on Zoiko Cloud, the platform meets strict enterprise SLA requirements, high concurrency handling, and stringent compliance standards.',
  },
  {
    question: 'How do I get started with ZoikoStream?',
    answer:
      'You can sign up for sandbox access in our developer portal, review the interactive documentation, or contact our team for enterprise onboarding.',
  },
];

// --- COMPONENT ---

export default function SupportFaqSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-slate-100 dark:bg-zinc-950 text-zinc-900 dark:text-slate-100 py-16 px-6 sm:px-10 lg:px-20   transition-colors">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-3.5 max-w-[600px]">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-normal   uppercase tracking-wide">
              SUPPORT
            </span>
          </div>

          <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-4xl font-bold   leading-tight">
            Answers about ZoikoStream.
          </h2>
        </div>

        {/* Main Content Grid: Sidebar Visuals & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Preview Image & Resource Navigation Links */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="w-full aspect-square overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-sm">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                src="/images/home/div.ar-1-1 (4).png"
                alt="ZoikoStream Support & Resources"
              />
            </div>

            {/* Quick Links List */}
            <div className="flex flex-col gap-4">
              {SIDEBAR_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white text-sm font-normal transition-colors group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-xs transition-transform group-hover:scale-125" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-5 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  >
                    <span className="text-zinc-900 dark:text-white text-base font-semibold   group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.question}
                    </span>
                    <span className="text-blue-500 text-xl font-semibold select-none">
                      {isOpen ? '−' : '＋'}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed pr-8 transition-all">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
