import React from 'react';

export default function SectionFaq() {
  const faqs = [
    {
      question: "Where can I find ZoikoStream's current legal terms?",
      answer: "The Legal Center lists the current public terms, policies, notices and addenda approved for ZoikoStream, with effective dates and version status."
    },
    {
      question: "How do I know which version is current?",
      answer: 'Current documents are labeled "Current" and show an effective date and version. Superseded versions are kept separately under Previous versions.'
    },
    {
      question: "Can I view older versions of ZoikoStream terms?",
      answer: "Yes, where version history is maintained, the document page links to prior versions and clearly marks them as superseded."
    },
    {
      question: "Where is the ZoikoStream Data Processing Addendum?",
      answer: "If a public DPA applies to the service, it appears under Privacy & Data and Enterprise & Commercial with its current version and scope."
    },
    {
      question: "Are there separate terms for Live Events?",
      answer: "If Live Events or managed production services use supplemental legal terms, the current approved documents are listed under Live Events."
    },
    {
      question: "Are there separate API or developer terms?",
      answer: "If separate developer or API terms apply, they are listed under Developer & API and linked from the Developers experience."
    },
    {
      question: "How will I know when terms change?",
      answer: "ZoikoStream publishes new versions and provides notices or acceptance workflows when required by the governing agreement or applicable law."
    },
    {
      question: "How do I exercise privacy rights?",
      answer: "Use the Privacy experience, which provides the appropriate privacy-rights and privacy-choice pathways."
    },
    {
      question: "How do I report a copyright concern?",
      answer: "Use the dedicated Copyright/IP process shown in Legal when available, rather than a general support request."
    },
    {
      question: "Do the public Legal pages override my signed agreement?",
      answer: "No. A signed or negotiated agreement and the documents incorporated into it control only as stated in that agreement."
    }
  ];

  return (
    <div className="bg-white relative w-full pt-[48px] lg:pt-[64px] pb-[60px] lg:pb-[80px] px-6 lg:px-[132px] flex flex-col items-start">
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
        <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0">
          AEO
        </p>
      </div>
      <h2 className="font-sora font-bold text-[#32353c] text-[22px] lg:text-[25px] tracking-[-0.25px] m-0 mb-[24px]">
        Frequently asked questions.
      </h2>

      <div className="w-full border-t border-[#dde2ea]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full py-[24px] border-b border-[#dde2ea] flex flex-col gap-[12px]"
          >
            <h3 className="font-sora font-bold text-[#32353c] text-[16px] leading-[1.4] m-0">
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
