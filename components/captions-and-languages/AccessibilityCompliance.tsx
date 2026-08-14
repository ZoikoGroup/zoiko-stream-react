import Image from "next/image";

export default function AccessibilityCompliance() {
  const cards = [
    {
      title: "WCAG 2.2 AA Baseline",
      description: "Keyboard-navigable caption panel toggles, screen-reader announced status changes, and preflight accessible ratios.",
      icon: "/images/captions-and-languages/icon-accessibility.svg"
    },
    {
      title: "Deaf & Hard-of-Hearing",
      description: "Explicit visual noise indicators, speaker indicators, and defaults-on operational setup options.",
      icon: "/images/captions-and-languages/icon-ear.svg"
    },
    {
      title: "Regulatory Readiness",
      description: "Alignment tools that map cleanly with standard federal guidelines including FCC, EU Accessibility Act, and Section 508.",
      icon: "/images/captions-and-languages/icon-shield-check-teal.svg"
    },
    {
      title: "Audit & Transcripts",
      description: "Complete automated transcript exports, alignment verification logs, and timeline metadata storage.",
      icon: "/images/captions-and-languages/icon-file.svg"
    }
  ];

  return (
    <section className="bg-[#050a18] border-[#232b3a] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/captions-and-languages/accessibility-bg.png" 
          alt="Glowing Background Lines" 
          fill 
          className="object-cover" 
        />
        <div className="absolute bg-[rgba(5,10,24,0.45)] inset-0" />
      </div>

      {/* Header */}
      <div className="flex flex-col gap-5 items-start relative z-10 w-full text-[#eef1f6]">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-3xl md:text-[38px] tracking-[-0.38px]">
          Accessibility and compliance built into the stream
        </h2>
        <p className="font-spaceGrotesk leading-[26px] text-base max-w-[720px]">
          Compliance is never an afterthought. Standardize accessibility controls systematically across all your live production feeds.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-5 items-stretch relative z-10 w-full">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="backdrop-blur-sm bg-[rgba(13,27,42,0.55)] border border-[rgba(51,217,199,0.45)] flex flex-1 basis-full md:basis-[calc(50%-10px)] xl:basis-0 flex-col gap-4 items-start min-h-[240px] p-6 relative rounded-xl shadow-[0px_0px_24px_0px_rgba(51,217,199,0.18)] transition-transform hover:-translate-y-1"
          >
            <div className="bg-[rgba(51,217,199,0.17)] flex items-center justify-center rounded-lg size-11 shrink-0">
              <div className="relative size-[22px]">
                <Image src={card.icon} alt={card.title} fill />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start relative w-full mt-1">
              <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-lg">
                {card.title}
              </h3>
              <p className="font-spaceGrotesk leading-[22px] text-[#aab3c4] text-sm">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
