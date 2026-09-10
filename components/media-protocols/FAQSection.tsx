import React from "react";

const faqItems = [
  {
    question: "What media protocols does ZoikoStream document?",
    answer:
      "Only protocols with Current Protocol Registry records. Historic navigation references are not timeless support claims.",
  },
  {
    question: "Does ZoikoStream support RTMPS?",
    answer:
      "Current exact protocol record plus lifecycle, workflow/direction, and availability context from the Protocol Registry. Historic mention alone cannot answer timelessly.",
  },
  {
    question: "What port should I use?",
    answer:
      "Only the current network requirement record for your specific protocol. Never copy standard ports from general knowledge.",
  },
  {
    question: "Is the connection encrypted?",
    answer:
      "Current implementation security record only. Protocol standard does not prove ZoikoStream encryption mode.",
  },
  {
    question: "What codecs are supported?",
    answer:
      "Current media compatibility profile for the specific protocol and workflow. Transport compatibility does not prove media compatibility.",
  },
  {
    question: "What latency should I expect?",
    answer:
      "Only current measured or contractual source with methodology context. No generic low-latency promises.",
  },
  {
    question: "How does reconnect work?",
    answer:
      "Current reliability contract only. Transport reconnection does not prove media continuity.",
  },
  {
    question: "Which protocol should I choose?",
    answer:
      "Source-backed fit rules when available. Otherwise comparison dimensions and Architecture/Support routing.",
  },
  {
    question: "Does documentation mean I have access?",
    answer:
      "No. Documentation existence does not establish commercial access, free tier, or production entitlement.",
  },
  {
    question: "How do I start?",
    answer:
      "Choose protocol, validate compatibility, review implementation docs. Start building only when Developer Access confirms activation.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 bg-zinc-950/90 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h2 className="w-full text-slate-100 text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[56px]">
          Frequently asked questions
        </h2>
      </div>

      {/* Accordion List container */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        {faqItems.map((item, index) => (
          <details
            key={index}
            className="w-full p-6 bg-gray-900/90 rounded-[10px] border border-gray-800 flex flex-col justify-start items-start gap-3 group open:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {/* Summary acts as the header and click target */}
            <summary className="w-full flex justify-between items-center list-none outline-none focus-visible:ring-2 focus-visible:ring-slate-500 rounded-sm">
              <h3 className="flex-1 text-slate-100 text-base font-bold font-['Space_Grotesk'] pr-4">
                {item.question}
              </h3>
              {/* Custom Chevron Icon */}
              <div className="w-6 h-6 flex justify-center items-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 group-open:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </summary>

            {/* Answer Content */}
            <p className="w-full mt-3 text-gray-400 text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
