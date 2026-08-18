'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "What does Event Resilience mean for a live event?",
    answer: "It is the event-specific practice of identifying critical dependencies, assigning responsibility, verifying the current plan, making material changes visible, defining supported recovery paths, and preserving decisions and evidence."
  },
  {
    question: "Does ZoikoStream guarantee that a live event cannot fail?",
    answer: "No provider can guarantee that a live event will never fail. We guarantee that if it does, the recovery path is pre-defined, visible, and executable by our specialized teams."
  },
  {
    question: "What does \"Changed since verification\" mean?",
    answer: "It means a component or dependency of your event has been modified after the initial resilience verification, requiring a re-check to ensure fallbacks are still valid."
  },
  {
    question: "Can every dependency have a fallback?",
    answer: "Most technical dependencies can have fallbacks. However, some elements like specific physical venues or unique talent may not have direct equivalents, requiring alternative mitigation strategies."
  },
  {
    question: "How is accessibility handled during an incident?",
    answer: "Accessibility features (like captions and sign language) are prioritized in our fallback environments to ensure continuity of experience for all attendees during a disruption."
  },
  {
    question: "What is the difference between Event Resilience and Managed Live Event Streaming?",
    answer: "Event Resilience focuses specifically on failure planning, active monitoring, and rapid recovery strategies. Managed Streaming handles the everyday technical execution and production of the event."
  },
  {
    question: "Does submitting an event brief confirm availability?",
    answer: "No. Submitting a brief starts the planning and review process to determine if our resilience services are a fit. It does not confirm booking or staff availability."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section 
      className="relative w-full flex flex-col items-start px-6 md:px-0 overflow-hidden"
      style={{ backgroundColor: '#ffffff', paddingTop: '100px', paddingBottom: '120px', gap: '56px', borderTop: '1px solid #e1e6eb', borderBottom: '1px solid #e1e6eb' }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .faq-section-padding {
            padding-left: 112px !important;
            padding-right: 112px !important;
          }
        }
      `}} />

      {/* Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/images/event-resilience/trust-and-evidence-bg.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover max-w-none opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col items-start w-full faq-section-padding">
        <h2 className="font-space-grotesk font-bold leading-[60.8px]" style={{ color: '#0d1117', fontSize: '37.9px', letterSpacing: '-0.38px' }}>
          Common questions about event resilience
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-start w-full faq-section-padding" style={{ gap: '12px' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex flex-col items-start w-full cursor-pointer transition-colors duration-200"
              style={{ 
                backgroundColor: isOpen ? '#f8fafc' : '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '24px', 
                gap: isOpen ? '16px' : '0' 
              }}
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-space-grotesk font-bold leading-[normal] flex-1" style={{ color: '#0d1117', fontSize: '18px' }}>
                  {faq.question}
                </p>
                <div 
                  className="flex flex-col items-center justify-center shrink-0"
                  style={{ 
                    backgroundColor: isOpen ? '#2563eb' : '#f1f5f9', 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '16px' 
                  }}
                >
                  <img 
                    src={isOpen ? "/images/event-resilience/icon-minus.svg" : "/images/event-resilience/icon-plus.svg"} 
                    alt="" 
                    style={{ width: '14px', height: '14px' }} 
                  />
                </div>
              </div>
              
              {isOpen && (
                <p className="font-space-grotesk font-normal leading-[24px] w-full" style={{ color: '#5a6478', fontSize: '15px' }}>
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
