import Image from "next/image";

export default function Faq() {
  const faqs = [
    {
      question: "What caption methods does ZoikoStream support?",
      answer: "We support automated real-time speech-to-text, human stenographer injection (CART via standard ingest protocols), and pre-prepared caption script file uploads (SRT/VTT)."
    },
    {
      question: "How many languages are available for real-time translation?",
      answer: "AI translation supports over 40 source and target languages concurrently, rendering synchronized translated closed subtitles in sub-2 seconds."
    },
    {
      question: "Can viewers choose their own caption language?",
      answer: "Yes. Our standard player includes a customizable accessible language selector where viewers choose their preferred subtitle or audio stream language."
    },
    {
      question: "What accuracy levels should we expect from AI captions?",
      answer: "Our automated AI model performs at 95-98% accuracy for standard clear audio. For absolute high-consequence precision, we recommend connecting a professional stenographer."
    },
    {
      question: "Do captions work on mobile devices?",
      answer: "Absolutely. Captions scale responsively and render seamlessly across iOS, Android, and mobile web browsers without clipping main presenter frames."
    },
    {
      question: "Can we use our own stenographer or CART provider?",
      answer: "Yes. Our Producer Contribution Desk accepts standard stream ingest endpoints for CART and professional human captioners easily."
    },
    {
      question: "How are captions handled for recorded replays?",
      answer: "Transcripts and caption tracks are saved synchronously with the stream, and are fully preserved, editable, and ready for use in any VOD catalog replay."
    },
    {
      question: "What accessibility standards do captions meet?",
      answer: "Our player and caption framework conform strictly to WCAG 2.2 Level AA accessibility baselines, FCC regulations, and Section 508 mandates."
    }
  ];

  return (
    <section className="bg-[#fcfdfd] border-[#e1e5ec] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:pt-[100px] xl:pb-[120px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <Image 
        src="/images/captions-and-languages/faq-bg.png" 
        alt="Topographic Background" 
        fill 
        className="object-cover pointer-events-none opacity-80"
      />

      <div className="flex flex-col items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.38px]">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col gap-3 items-center relative z-10 w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-[#e1e5ec] flex flex-col gap-3 items-start p-6 relative rounded-xl w-full"
          >
            <div className="flex items-center justify-between relative w-full">
              <h3 className="flex-1 font-spaceGrotesk font-bold text-[#0f1b2d] text-base">
                {faq.question}
              </h3>
              <div className="flex flex-col items-center justify-center shrink-0 size-4">
                <div className="relative size-4">
                  <Image src="/images/captions-and-languages/icon-plus.svg" alt="Plus" fill />
                </div>
              </div>
            </div>
            
            <p className="font-spaceGrotesk leading-[22px] text-[#4f5e74] text-[14.5px] w-full">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
