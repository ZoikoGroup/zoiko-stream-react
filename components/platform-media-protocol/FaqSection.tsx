'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is a media protocol in ZoikoStream?',
    answer:
      'A transport-layer contract defining how media frames are encoded, packetized, and delivered between source and ingest.',
  },
  {
    question: 'Which media protocols does ZoikoStream support?',
    answer:
      'Qualified paths for RTMPS, SRT, WHIP, and HLS ingest — each with verified configuration and test evidence.',
  },
  {
    question: 'How do I choose a protocol for my source?',
    answer:
      'Match your source type, latency target, network profile, and security requirements to a qualified protocol path.',
  },
  {
    question: 'Do I need an SDK or API to use a media protocol?',
    answer:
      'SDK integration is optional — most protocols work with standard encoders and native OS-level transport.',
  },
  {
    question: 'What network and firewall requirements apply?',
    answer:
      'Port ranges, firewall rules, NAT traversal, and bandwidth requirements differ per protocol and are documented per path.',
  },
  {
    question: 'How is a connection authenticated and protected?',
    answer:
      'TLS encryption, token-based authentication, and per-session credential scoping protect every qualified connection.',
  },
  {
    question: 'What happens if a connection drops?',
    answer:
      'Automatic reconnection, failover detection, and recovery logging ensure continuity with auditable evidence.',
  },
  {
    question: 'How are protocol changes and deprecations handled?',
    answer:
      'Versioned registry records, migration guides, and deprecation timelines with minimum 90-day advance notice.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-protocol/bg (96).png"
          alt="FAQ Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-base font-normal font-['Space_Grotesk']">
            Answers sourced from approved authority only.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 cursor-pointer backdrop-blur-sm transition-colors"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                    {faq.question}
                  </h3>
                  <div className="size-7 bg-slate-900 rounded-full border border-gray-800 flex items-center justify-center text-slate-400 shrink-0">
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
                {isOpen && (
                  <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed mt-3 pt-3 border-t border-gray-800">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Need Help Banner */}
        <div className="p-8 bg-gray-900/80 rounded-2xl border border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-md">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
              Still need help?
            </h3>
            <p className="text-slate-400 text-sm font-normal font-['Inter']">
              Connect with our support engineering team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/sdks"
              className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-sm font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
            >
              View documentation
            </Link>
            <Link
              href="/talk-to-an-expert"
              className="px-6 py-3 rounded-lg border border-slate-400 text-white text-sm font-bold font-['Space_Grotesk'] hover:bg-white/10 transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
