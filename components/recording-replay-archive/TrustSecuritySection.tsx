import Image from "next/image";

interface TrustCard {
  title: string;
  image: string;
  description: React.ReactNode;
}

const trustCards: TrustCard[] = [
  {
    title: "AUTHORIZATION",
    image: "/images/recording-replay-archive/trust-card-0.png",
    description: (
      <>
        <span className="font-spaceGrotesk font-bold leading-[22px]">Cryptographically verified</span>
        <span className="leading-[22px]">, role-based session tokens validated at edge before index handoff.</span>
      </>
    )
  },
  {
    title: "LEAST PRIVILEGE",
    image: "/images/recording-replay-archive/trust-card-1.png",
    description: (
      <>
        <span className="leading-[22px]">Only </span>
        <span className="font-spaceGrotesk font-bold leading-[22px]">designated production operator</span>
        <span className="leading-[22px]"> and audit-compliant roles retain action rights.</span>
      </>
    )
  },
  {
    title: "ZERO LEAK SECRETS",
    image: "/images/recording-replay-archive/trust-card-2.png",
    description: (
      <>
        <span className="leading-[22px]">No </span>
        <span className="font-spaceGrotesk font-bold leading-[22px]">session tokens, authentication strings</span>
        <span className="leading-[22px]">, or customer-identifiable keys enter analytics logs.</span>
      </>
    )
  },
  {
    title: "PRIVACY MINIMIZATION",
    image: "/images/recording-replay-archive/trust-card-3.png",
    description: (
      <>
        <span className="leading-[22px]">We completely </span>
        <span className="font-spaceGrotesk font-bold leading-[22px]">exclude viewer names and specific corporate profiles</span>
        <span className="leading-[22px]"> from generic analytics.</span>
      </>
    )
  },
  {
    title: "AUDIT / EVIDENCE",
    image: "/images/recording-replay-archive/trust-card-4.png",
    description: (
      <>
        <span className="leading-[22px]">Every high-impact state change generates </span>
        <span className="font-spaceGrotesk font-bold leading-[22px]">non-repudiation audit trails</span>
        <span className="leading-[22px]"> for transition overrides and deletions.</span>
      </>
    )
  },
  {
    title: "CLAIMS",
    image: "/images/recording-replay-archive/trust-card-5.png",
    description: (
      <>
        <span className="leading-[22px]">Claims are </span>
        <span className="font-spaceGrotesk font-bold leading-[22px]">validated against the event scope and replay intent</span>
        <span className="leading-[22px]"> before publishing.</span>
      </>
    )
  }
];

export default function TrustSecuritySection() {
  return (
    <section className="border-[#e2e6ed] border-b border-solid border-t flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/recording-replay-archive/trust-security-bg.png" 
          alt="Studio Background" 
          fill 
          className="object-cover" 
        />
      </div>

      <div className="flex flex-col gap-4 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[60.8px] text-[#0a0d13] text-3xl md:text-[37.9px] tracking-[-0.38px]">
          Privacy, security, and evidence built into the gate.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#4b5563] text-base md:text-[18px] max-w-[800px]">
          High-consequence broadcasts demand auditable integrity. We don't make unsupported marketing claims; we provide proof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
        {trustCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#e8ecf2] border-solid flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 h-full"
          >
            <div className="h-[180px] relative shrink-0 w-full">
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col gap-2 items-start p-5 xl:p-[20px] relative w-full flex-1">
              <p className="font-spaceGrotesk font-bold leading-[normal] text-[#171b22] text-[11px] tracking-[1.2px] uppercase">
                {card.title}
              </p>
              <p className="font-spaceGrotesk text-[#374151] text-[14px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
