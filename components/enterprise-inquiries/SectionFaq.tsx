import React from 'react';

export default function SectionFaq() {
  const faqs = [
    {
      question: "When should I contact ZoikoStream about an enterprise requirement?",
      answer: <>
        <span className="block">Use Enterprise Inquiries when your organization needs to discuss architecture, integrations, large or recurring video workloads, migration, security and procurement</span>
        <span className="block">requirements, enterprise operations or custom commercial scope. If you can evaluate and build using public plans and developer resources, you can start there without</span>
        <span className="block">speaking to sales.</span>
      </>
    },
    {
      question: "Can ZoikoStream discuss enterprise live streaming?",
      answer: <>
        <span className="block">Yes. Enterprise Inquiries can cover recurring or platform-wide live streaming requirements. If you are planning a specific managed event, use the dedicated Live Events</span>
        <span className="block">inquiry route so the event team receives the right production context.</span>
      </>
    },
    {
      question: "Can my security team review ZoikoStream before we speak to sales?",
      answer: <>
        <span className="block">Use the ZoikoStream Trust Center for approved public security, privacy, reliability and compliance information. If your evaluation requires controlled evidence or a security</span>
        <span className="block">questionnaire, start an enterprise inquiry and the appropriate workflow can be established.</span>
      </>
    },
    {
      question: "Can ZoikoStream help us migrate from another video provider?",
      answer: <>
        <span className="block">Migration and modernization can be discussed through Enterprise Inquiries. Share the high-level outcome and current approach, but do not upload confidential</span>
        <span className="block">architecture or credentials in the public form.</span>
      </>
    },
    {
      question: "How does enterprise pricing work?",
      answer: <>
        <span className="block">Use the public Pricing page for published plans and pricing context. Enterprise commercial terms depend on the approved scope and requirements, so the enterprise team</span>
        <span className="block">can discuss the appropriate structure after understanding your needs.</span>
      </>
    },
    {
      question: "Do I need a business email address?",
      answer: <>
        <span className="block">No. Provide an email address where ZoikoStream can respond. A business address may make account matching easier, but the form must not block legitimate inquiries</span>
        <span className="block">from public email domains.</span>
      </>
    },
    {
      question: "Do I need to know my audience size or launch date?",
      answer: <>
        <span className="block">No. Scale and timing are optional planning signals, and both fields include an &quot;unknown&quot; or exploratory option. ZoikoStream should be able to begin a useful conversation</span>
        <span className="block">before every requirement is finalized.</span>
      </>
    },
    {
      question: "Can I upload an RFP or security questionnaire with the first inquiry?",
      answer: "No. Submit the high-level inquiry first. If documents are needed, ZoikoStream should provide a controlled exchange method associated with the validated opportunity."
    },
    {
      question: "I am already a customer and need urgent help. Should I use this page?",
      answer: <>
        <span className="block">No. Use Support for product, account or technical help, and consult System Status for published service-health information. Use Enterprise Inquiries for expansion or a</span>
        <span className="block">new enterprise commercial/architecture discussion.</span>
      </>
    },
    {
      question: "What happens after I submit?",
      answer: <>
        <span className="block">ZoikoStream creates a reference for the inquiry, routes it to the appropriate commercial owner and brings in specialists when needed. Response-time commitments should</span>
        <span className="block">only be displayed where an approved service commitment exists.</span>
      </>
    }
  ];

  return (
    <div className="bg-white relative w-full pt-[60px] lg:pt-[100px] pb-[60px] lg:pb-[100px] px-6 lg:px-[112px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col items-start text-left mb-[40px] lg:mb-[56px]">
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
            <h3 className="font-sora font-bold text-[#32353c] text-[16.5px] tracking-[-0.165px] m-0 leading-[26.4px]">
              {faq.question}
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[23.2px] m-0">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
