'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

const actionCards = [
  {
    title: 'Designing a preservation architecture',
    desc: 'For teams setting retention, lineage, & compliance frameworks.',
    link: 'Review Requirements',
  },
  {
    title: 'Evaluating enterprise platforms',
    desc: 'For legal, risk, or technical leads auditing proof, compliance, and scope.',
    link: 'Review Architecture',
  },
  {
    title: 'Need managed operations',
    desc: 'Partner with specialized teams for design, execution, & operational readiness.',
    link: 'Reserve Consultation',
  },
  {
    title: 'Already use ZoikoStream',
    desc: 'Extend architecture criteria, storage policies, and operational bounds.',
    link: 'Governance Portal',
  },
];

const faqs = [
  {
    q: 'What is media preservation?',
    a: 'Media preservation is the ongoing technical and administrative governance of digital video assets ensuring their identity, lineage, format sustainability, access policies, and integrity logs remain fully usable and understandable over time.',
  },
  {
    q: 'Is recording the same as preservation?',
    a: 'No. Recording creates captured media bytes but does not establish metadata lineage, verifiable checksum integrity, or long-term lifecycle governance by default.',
  },
  {
    q: 'Is backup the same as preservation?',
    a: 'No. Backup is an operational disaster recovery mechanism whereas preservation maintains access controls, auditability, legal holds, format continuity, and provenance tracking across media lifetime.',
  },
  {
    q: 'How does signing relate to preservation?',
    a: 'Cryptographic signing locks media state and provenance records. Signatures ensure the content is tamper-proof and link back to parent versions regardless of distribution paths.',
  },
  {
    q: 'Can access control replace preservation proof?',
    a: 'No. Access control restricts who can view content; preservation proof provides cryptographic audit trails ensuring content integrity and authenticity over time.',
  },
  {
    q: 'How are preservation actions audited?',
    a: 'Any alteration, transcode, or derivative registration creates an unalterable signed event record with reason, owner, timestamp, and checksum evidence.',
  },
  {
    q: 'Does ZoikoStream guarantee immutable permanent retention?',
    a: 'Yes. Custom storage rules allow locking objects with WORM (Write Once, Read Many) storage configurations, preventing deletion even by administrative accounts.',
  },
  {
    q: 'How do I evaluate regional, encryption, or latency compliance requirements?',
    a: 'The Preservation Verification Engine runs dynamic checks against regional residency rules, key rotation schedules, and audit log readiness to ensure ongoing compliance.',
  },
];

export function EvidenceBeforePitchSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-[#060B14] border-b border-slate-800/80 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (16).png"
          alt="Evidence Before Pitch Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Decorative Blur Accents */}
      <div className="size-[500px] -right-40 top-1/4 absolute bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="size-[400px] -left-36 bottom-10 absolute bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        {/* Header */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight lg:leading-[50px]">
            Evidence before pitch
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            A clear high-intent preservation questions and route visitors to the correct next step.
          </p>
        </div>

        {/* 4 Action Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actionCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0B1528] rounded-xl border border-slate-800/90 flex flex-col justify-between gap-6 hover:border-slate-700 transition-all duration-200 shadow-lg backdrop-blur-sm group"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="text-white text-base font-bold group-hover:text-teal-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold cursor-pointer hover:underline">
                <span>{card.link}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="w-full flex flex-col gap-6">
          <h3 className="text-white text-2xl font-bold">Frequently Asked Questions</h3>
          <div className="w-full flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="w-full bg-[#0B1528] rounded-xl border border-slate-800/90 overflow-hidden transition-all duration-200 shadow-md backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-800/30 transition-colors"
                  >
                    <h4 className="text-white text-sm lg:text-base font-bold leading-snug">
                      {faq.q}
                    </h4>
                    <div className="w-6 h-6 rounded-full bg-slate-800/60 flex items-center justify-center shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 text-teal-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs lg:text-sm font-normal leading-relaxed border-t border-slate-800/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Preservation CTA Banner */}
        <div className="w-full p-8 lg:px-12 lg:py-10 bg-[#0B1528] rounded-2xl border border-slate-800/90 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 shadow-xl relative overflow-hidden">

  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-blue-500/5 pointer-events-none" />

  {/* Left Content */}
  <div className="flex-1 relative z-10 text-center lg:text-left">

    <h3 className="text-white text-2xl lg:text-3xl font-bold">
      Ready to secure your media lifecycle?
    </h3>

    <p className="max-w-[640px] text-slate-400 text-xs lg:text-sm font-normal leading-relaxed mt-2">
      All platform operations are transparently reviewable prior to sandbox deployment or service level requirements.
    </p>

  </div>

  {/* Buttons */}
  <div className="flex flex-row justify-center items-center gap-4 relative z-10">

    <button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-slate-950 font-bold rounded-lg text-sm transition-colors cursor-pointer shadow-md">
      Start Sandbox Session
    </button>

    <button className="px-8 py-3 border border-slate-400 hover:border-slate-300 text-white font-bold rounded-lg text-sm transition-colors cursor-pointer bg-slate-900/50">
      Talk to Preservation Expert
    </button>

  </div>

</div></div>
    </section>
  );
}
