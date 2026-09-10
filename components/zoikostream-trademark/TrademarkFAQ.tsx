import React from 'react';

export default function TrademarkFAQ() {
  const faqs = [
    {
      q: "Can I use the ZoikoStream logo on my website?",
      a: "Only under an approved use case — see the use-rule matrix above. Most uses in your own product UI require written permission through the workflow."
    },
    {
      q: "Should I use ™ or ®?",
      a: "Use exactly the symbol shown for that mark in the approved mark directory above — it varies by mark and must not be assumed."
    },
    {
      q: "Can I modify the logo to fit my brand colors?",
      a: "No. Modifying or creating a derivative of the logo is restricted under this policy."
    },
    {
      q: "Does this page grant me a trademark license?",
      a: "No. This page is guidance. A license, where required, comes only from a separate written agreement."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick answers</h2>
        
        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col py-6 ${idx !== faqs.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
