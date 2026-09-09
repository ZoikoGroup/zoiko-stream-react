'use client';

import React, { useState } from 'react';

export default function SecurityFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How does ZoikoStream approach security?',
      answer: 'ZoikoStream takes a security-first approach across every layer of our platform. We implement industry-standard practices including regular penetration testing, vulnerability assessments, and continuous monitoring. Our dedicated security team follows a secure development lifecycle (SDLC) to ensure that security is embedded into every stage of product development.',
    },
    {
      question: 'Is ZoikoStream secure?',
      answer: 'Yes, ZoikoStream is built with security at its core. We employ end-to-end encryption, strict access controls, and continuous threat monitoring to protect your data. Our infrastructure is hosted on SOC 2-certified cloud providers, and we undergo regular third-party security audits to validate our security posture.',
    },
    {
      question: 'Does ZoikoStream use encryption?',
      answer: 'Absolutely. ZoikoStream uses AES-256 encryption for data at rest and TLS 1.2+ for data in transit. All sensitive information, including credentials and API keys, is encrypted using industry-standard cryptographic protocols to ensure your data remains protected at all times.',
    },
    {
      question: 'Does ZoikoStream support SSO or MFA?',
      answer: 'Yes, ZoikoStream supports both Single Sign-On (SSO) via SAML 2.0 and OpenID Connect, as well as Multi-Factor Authentication (MFA). These features allow your team to leverage existing identity providers and add an extra layer of security to every login.',
    },
    {
      question: 'Is ZoikoStream compliant with standard compliance frameworks?',
      answer: 'ZoikoStream is compliant with major industry frameworks including SOC 2 Type II, ISO 27001, and GDPR. We continuously monitor and update our controls to meet evolving regulatory requirements and maintain certifications through annual third-party audits.',
    },
    {
      question: 'Where can I see security evidence?',
      answer: 'You can access our security documentation, audit reports, and compliance certificates through the ZoikoStream Trust Center. Visit trust.zoikostream.com to review our latest SOC 2 reports, penetration test summaries, and data processing agreements.',
    },
    {
      question: 'How do I report a security vulnerability?',
      answer: 'We appreciate responsible disclosure. If you discover a security vulnerability, please report it to security@zoikostream.com. You can also submit reports through our bug bounty program. We commit to acknowledging reports within 24 hours and providing resolution timelines within 72 hours.',
    },
    {
      question: 'Who is responsible for securing my integration?',
      answer: 'Security is a shared responsibility. ZoikoStream secures the platform infrastructure, data encryption, and access controls on our side. You are responsible for managing user access, API key rotation, and following our integration security best practices outlined in our developer documentation.',
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-20 px-6 md:px-12 lg:px-28">
      
      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] bottom-[10%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-10%] top-[-5%] bg-teal-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
          Common security questions — answered with scoped precision
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 w-full">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="w-full bg-slate-900 rounded-[10px] border border-gray-800 flex flex-col overflow-hidden transition-colors hover:border-gray-700"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-slate-100 text-base font-bold font-['Space_Grotesk'] pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Icon */}
                  <span className="shrink-0 ml-4 text-slate-400 transition-transform duration-300">
                    {isOpen ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Accordion Content (Animated via CSS Grid) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400/90 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
