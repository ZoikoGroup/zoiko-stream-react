'use client';

import React, { useState } from 'react';

export default function WorkflowFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'What is Workflow overview?',
      answer: 'It is a structured connected pathway mapping every logistical step of live events, ensuring full division of duties before the camera switches on.'
    },
    {
      question: 'Does booking mean instant confirmation?',
      answer: 'No. Bookings register target dates on our scheduling grid. Confirmation is finalized upon successful review of physical venue AV specifications.'
    },
    {
      question: 'Does every event use the same workflow?',
      answer: 'Every event follows our master 9-step timeline, but specific gates (e.g. accessibility, SAML credentials) can be toggled based on target scope.'
    },
    {
      question: 'Can ZoikoStream manage the whole event?',
      answer: 'We manage secure cloud routing and stream distribution. On-site AV hardware, cameras, and local crews are managed by you or approved local partners.'
    },
    {
      question: 'When should audience access be decided?',
      answer: 'Ideally in Step 5 (at least 7 days prior). Access policies (SAML vs custom passcode keys) must compile early to avoid registration delay.'
    },
    {
      question: 'Where do captions fit?',
      answer: 'In Step 6. Real-time automated speech-to-text translators integrate natively in our player and can route to secondary subtitle files.'
    },
    {
      question: 'What does event readiness mean?',
      answer: 'Readiness requires all preflight checks on Step 8 to register green status. No stream can authoritatively go live with unresolved blocked checks.'
    },
    {
      question: 'What if something changes after a test?',
      answer: 'If physical layouts or network setups alter post Step 7 test, our L1 monitors will request a fast retest gate loop before authorizing go-live.'
    },
    {
      question: 'What if I need help during a live event?',
      answer: 'We allocate senior L1 operations engineers strictly to your broadcast window. Direct high-priority operations chat is active throughout.'
    },
    {
      question: 'Is recording automatically available?',
      answer: 'Redundant multi-region master records are triggered based on Step 6 rules. Clean VOD files package automatically within 4 hours.'
    },
    {
      question: 'Can I reuse a workflow?',
      answer: 'Yes. Create a fresh brief from template. Copied configuration inherits past overlays, access whitelists, and translation setups.'
    },
    {
      question: 'How do I start?',
      answer: 'Begin by submitting a base brief intake form. We collect your core targets and generate corresponding action limits.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Decorator overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/workflow-overview/bg (43).png')" }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 font-spaceGrotesk">
          <h2 className="text-slate-101 text-3xl sm:text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordions list */}
        <div className="flex flex-col gap-3 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-gray-900/90 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300"
              >
                {/* Question row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-slate-101 text-base sm:text-lg font-bold font-spaceGrotesk leading-snug group-hover:text-teal-400 transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Indicator */}
                  <span className="size-4 shrink-0 relative overflow-hidden flex justify-center items-center">
                    <span className={`w-3.5 h-0.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className={`w-0.5 h-3.5 bg-slate-100 absolute transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`} />
                  </span>
                </button>

                {/* Answer box */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] pb-6 opacity-100 font-spaceGrotesk' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
