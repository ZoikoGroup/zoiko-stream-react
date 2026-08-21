'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is ZoikoStream Media Management?',
    answer:
      'ZoikoStream Media Management is a comprehensive platform for organizing, storing, and distributing your media assets across all your streaming workflows.',
  },
  {
    question: 'Is Media Management the same as a DAM or MAM?',
    answer:
      'While similar, ZoikoStream Media Management goes beyond traditional DAM and MAM systems by integrating natively with live streaming, VOD, and replay workflows.',
  },
  {
    question: 'How does it relate to Video on Demand?',
    answer:
      'Media Management provides the backbone for your VOD library, enabling automatic ingestion, transcoding, metadata tagging, and publishing of on-demand content.',
  },
  {
    question: 'How does it relate to Recording and Replay?',
    answer:
      'Live recordings are automatically ingested into the Media Management system, making replay clips immediately searchable, shareable, and publishable.',
  },
  {
    question: 'Can teams search and organize media?',
    answer:
      'Yes. Teams can search by metadata, tags, date, format, and custom fields. Collections and folders help organize assets for different projects and workflows.',
  },
  {
    question: 'How are rights and provenance handled?',
    answer:
      'Each asset maintains a complete audit trail including origin, modifications, license information, and usage rights, ensuring full provenance visibility across your organization.',
  },
  {
    question: 'How are captions and translations handled?',
    answer:
      'Captions and subtitle files are stored alongside media assets. ZoikoStream supports multiple language tracks per asset and integrates with translation services for automated localization.',
  },
  {
    question: 'Can media be retained, exported, or deleted?',
    answer:
      'Yes. Admins can configure retention policies, bulk export assets in various formats, and schedule deletions to comply with data governance requirements.',
  },
  {
    question: 'Can developers integrate with media records?',
    answer:
      'Absolutely. ZoikoStream provides a REST API and webhooks for programmatic access to media records, enabling custom integrations with your existing tools and pipelines.',
  },
  {
    question: 'How should an enterprise evaluate Media Management?',
    answer:
      'Start with a proof of concept using your existing media library. Key evaluation criteria include ingest speed, search accuracy, integration depth, and compliance features.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-gray-900 text-base font-bold font-['Space_Grotesk']">
                    {faq.question}
                  </h3>
                  <div className="size-7 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
                {isOpen && (
                  <p className="text-gray-500 text-sm font-normal font-['Space_Grotesk'] leading-relaxed mt-3 pt-3 border-t border-gray-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
