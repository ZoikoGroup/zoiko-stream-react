import React from 'react';

export default function SectionFaq() {
  const faqs = [
    {
      question: "What is ZoikoStream Developer Relations?",
      answer: "It is the human and ecosystem layer around ZoikoStream developer resources, helping developers connect through community, events, open source, technical content, product feedback and collaboration."
    },
    {
      question: "Where do I find API documentation?",
      answer: "Use the ZoikoStream Developers area and API reference. Developer Relations links you there rather than duplicating implementation documentation."
    },
    {
      question: "Can Developer Relations help with a production problem?",
      answer: "Use ZoikoStream Support for account, integration or production issues, and System Status for public service health. Developer Relations is not an incident queue."
    },
    {
      question: "How do I report a security vulnerability?",
      answer: "Use the ZoikoStream Vulnerability Disclosure process. Do not post security findings in community channels or Developer Relations forms."
    },
    {
      question: "Can I request a speaker or technical session?",
      answer: "If external requests are active, choose Event / speaking in the Developer Relations form and provide the event, audience, timing and requested contribution. Submission does not confirm availability."
    },
    {
      question: "Can I contribute to ZoikoStream open source?",
      answer: "When an official repository accepts contributions, its project page links to contribution, license and security guidance. Contribution acceptance and release timing remain project-governed."
    },
    {
      question: "What happens to product feedback?",
      answer: "Feedback is routed to the appropriate Developer Experience or Product workflow. It does not create a support ticket or a commitment to build or ship a feature."
    },
    {
      question: "Can my company become an integration partner?",
      answer: "Formal partnership, validated-integration or commercial ecosystem requests should use the ZoikoStream Partners path. Developer Relations may collaborate on community or technical ecosystem activity without granting partner status."
    }
  ];

  return (
    <div className="bg-[#f7f9fb] relative w-full pt-[60px] lg:pt-[100px] pb-[60px] lg:pb-[100px] px-6 lg:px-[112px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col items-start text-left mb-[40px] lg:mb-[48px]">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
          <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
            AEO
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[26px] lg:text-[29px] tracking-[-0.29px] m-0 leading-[1.2]">
          Frequently asked questions.
        </h2>
      </div>

      <div className="w-full max-w-[1176px] border-t border-[#dde2ea]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full py-[28px] border-b border-[#dde2ea] flex flex-col gap-[14px]"
          >
            <h3 className="font-sora font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[1.6]">
              {faq.question}
            </h3>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[1.6] m-0">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
