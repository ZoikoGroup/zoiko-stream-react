import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does every live event get recorded?",
    answer: "No. We make zero defaults. Recording is an active choices-gated decision requiring compliance confirmation during event briefing. If unconfigured, the live capture terminates immediately upon program exit."
  },
  {
    question: "When will the replay be available?",
    answer: "Only when authorized. The replay transition is blocked by caption processing, accessibility checks, and content owner validation gates. Viewers see clear status logs in the meantime."
  },
  {
    question: "Can replay be private?",
    answer: "Yes. Replays support the identical identity framework as live streams, including SSO (SAML 2.0 / OIDC), приглашение-token validation, and access window boundaries."
  },
  {
    question: "Can I download the recording?",
    answer: "Downloading requires a distinct operator role and explicit file handoff permission set. Download operations generate persistent security audit entries."
  },
  {
    question: "Can I keep a recording forever?",
    answer: "No. ZoikoStream does not provide indefinite retention. Every asset must associate with a clear policy source (org compliance, contract, or legal hold) that dictates its final unpublish/delete date."
  },
  {
    question: "What if the recording is incomplete?",
    answer: "We display absolute state truth. If an ingest drops frames or is interrupted, the platform flags the incident and offers safe partial playback alternatives without pretending everything succeeded."
  }
];

export default function FaqSection() {
  return (
    <section className="border-[#232b3a] border-b border-solid border-t flex flex-col gap-10 xl:gap-[56px] items-center px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/recording-replay-archive/faq-bg.png" 
          alt="Abstract Digital Background" 
          fill 
          className="object-cover" 
        />
        <div className="absolute bg-[rgba(10,13,19,0.78)] inset-0" />
      </div>

      <div className="flex flex-col items-center relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[60.8px] text-[#eef1f6] text-3xl md:text-[37.9px] text-center tracking-[-0.38px]">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex flex-col items-center relative z-10 w-full">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-[#6f84a2] border-b border-solid flex flex-col gap-3 items-start py-6 xl:py-[24px] w-full"
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="flex-1 font-spaceGrotesk font-bold text-[#f9fafb] text-[17px]">
                {faq.question}
              </h3>
              <span className="font-mono font-medium text-[#4c86ff] text-[18px] ml-4">
                ＋
              </span>
            </div>
            <p className="font-spaceGrotesk leading-[22px] text-[#cbd5e1] text-[14.5px] w-full">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
