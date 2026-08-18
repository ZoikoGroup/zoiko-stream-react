'use client';

import React, { useState } from 'react';

const faqs = [
  {
    category: 'Event Planning Essentials',
    items: [
      {
        question: 'What is the ideal timeline to submit an event brief?',
        answer: 'We require event briefs to be submitted at least 48 hours prior to live broadcast. For multi-track conferences, 7 days is highly recommended.',
      },
      {
        question: 'Can we modify a brief after it has been reviewed?',
        answer: 'Yes, modifications can be submitted up to 24 hours before the event starts.',
      }
    ]
  },
  {
    category: 'Access, Privacy & Security',
    items: [
      {
        question: 'Does ZoikoStream support corporate SSO gates?',
        answer: 'Yes, we support SAML 2.0 and OIDC integrations for enterprise single sign-on.',
      },
      {
        question: 'Can we restrict downloads of live recordings?',
        answer: 'Absolutely. Download permissions can be configured per-user role or disabled entirely.',
      }
    ]
  },
  {
    category: 'Resilience & Assurance',
    items: [
      {
        question: 'What happens if the primary venue internet drops?',
        answer: 'Our platform seamlessly switches to backup streaming routes and multi-WAN failover to maintain continuity.',
      }
    ]
  }
];

export default function FaqAccordionsAreaSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '0-0': true
  });

  const toggleItem = (categoryId: number, itemId: number) => {
    const key = `${categoryId}-${itemId}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="relative w-full pt-[40px] pb-[100px] px-6 md:px-[112px] bg-[#0a0d13] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img 
          src="/images/faqs-and-support/faq-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        <h2 className="font-space-grotesk font-bold text-[#eef1f6] text-2xl md:text-[32px] leading-tight">
          Detailed Platform FAQs
        </h2>

        <div className="flex flex-col w-full gap-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col w-full">
              <h3 className="font-space-grotesk font-bold text-[#33d9c7] text-[20px] mb-2">
                {category.category}
              </h3>
              
              <div className="flex flex-col w-full">
                {category.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${catIndex}-${itemIndex}`];
                  return (
                    <div 
                      key={itemIndex} 
                      className="flex flex-col w-full border-b border-[#4d4e51] py-5 cursor-pointer group"
                      onClick={() => toggleItem(catIndex, itemIndex)}
                    >
                      <div className="flex items-center justify-between gap-4 w-full">
                        <p className="font-space-grotesk font-bold text-[#eef1f6] text-[17px] flex-1 group-hover:text-white transition-colors">
                          {item.question}
                        </p>
                        <span className="font-mono font-medium text-[#4c86ff] text-[18px] shrink-0">
                          {isOpen ? '－' : '＋'}
                        </span>
                      </div>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="font-space-grotesk font-normal text-[#aab3c4] text-[14.5px] leading-[22px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
