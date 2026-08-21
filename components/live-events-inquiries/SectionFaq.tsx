import React from 'react';

export default function SectionFaq() {
  const faqs = [
    {
      question: "Does submitting an inquiry confirm that ZoikoStream can support my event?",
      answer: "No. Submission starts a planning review. It does not reserve capacity, confirm technical feasibility, production resources, service levels, pricing or event acceptance."
    },
    {
      question: "Can I contact you before my event date is confirmed?",
      answer: 'Yes. Choose an approximate window or "Date not set." Do not invent a date simply to submit the form.'
    },
    {
      question: "What if my event is already live and I need help?",
      answer: "Use ZoikoStream Support so an active issue enters the operational support path rather than the planning queue."
    },
    {
      question: "Should I use Live Events Inquiries or Enterprise Inquiries?",
      answer: <>Use Live Events Inquiries for a specific event or defined series. Use Enterprise Inquiries for an ongoing organization-wide video platform, migration, security/procurement<br className="hidden lg:block" />or broader enterprise program.</>
    },
    {
      question: "Can a production agency submit on behalf of a client?",
      answer: <>Yes, a production or agency partner can submit high-level event context. Authority, responsibilities and protected information should be confirmed before sensitive<br className="hidden lg:block" />materials are exchanged.</>
    },
    {
      question: "What information should I have ready?",
      answer: <>The most useful information is what the event is, when it may happen, who needs to watch, how viewers should access it, how the source will be produced and which<br className="hidden lg:block" />technical or operational topics need discussion. "Not sure" is acceptable for early planning.</>
    },
    {
      question: "Can I send stream keys, runbooks or venue diagrams with the form?",
      answer: <>No. Do not send credentials, sensitive event artifacts, attendee data or confidential documents through the public form. A controlled exchange can be established after the<br className="hidden lg:block" />inquiry is qualified when needed.</>
    },
    {
      question: "Can we discuss captions and accessibility requirements?",
      answer: <>Yes. Accessibility and language requirements should be identified early in event planning. The final responsibility and available implementation options are confirmed<br className="hidden lg:block" />during discovery.</>
    },
    {
      question: "Where can security or procurement teams review ZoikoStream?",
      answer: <>Use the ZoikoStream Trust Center for approved public security, privacy, reliability and compliance information. Restricted evidence, where available, follows a controlled<br className="hidden lg:block" />request process.</>
    },
    {
      question: "What happens after I submit?",
      answer: <>ZoikoStream records the inquiry, evaluates the event context and routes it to the appropriate planning, technical, commercial or customer team. Follow-up depends on the<br className="hidden lg:block" />requirements and does not represent event acceptance until explicitly confirmed.</>
    }
  ];

  return (
    <div className="bg-white relative w-full pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px] px-6 lg:px-[112px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col items-start text-left mb-[40px] lg:mb-[60px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
            SEO + AEO
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[1.2]">
          Quick answers.
        </h2>
      </div>

      <div className="w-full max-w-[1176px] border-t border-[#dde2ea]">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="w-full py-[32px] border-b border-[#dde2ea] flex flex-col gap-[16px]"
          >
            <h3 className="font-sora font-bold text-[#32353c] text-[17px] lg:text-[18px] tracking-[-0.18px] m-0 leading-[1.6]">
              {faq.question}
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[15px] lg:text-[15.5px] leading-[1.6] m-0">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
