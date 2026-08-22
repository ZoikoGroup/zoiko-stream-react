import Image from "next/image";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-10 items-center justify-center px-6 md:px-12 xl:px-[112px] py-16 md:py-24 xl:py-[140px] relative w-full overflow-hidden">
      {/* Background Layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/recording-replay-archive/cta-bg.png" 
          alt="Studio Stage Background" 
          fill 
          className="object-cover" 
        />
        <div className="absolute bg-[rgba(10,13,19,0.7)] inset-0" />
      </div>

      <div className="flex flex-col gap-4 items-center relative z-10 w-full text-center max-w-[800px]">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[56px] text-[#eef1f6] text-3xl md:text-[44px]">
          Build better, safer, more controlled live events with ZoikoStream.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#aab3c4] text-base md:text-[18px] max-w-[640px]">
          Start with a production-aware event brief. Scope, compliance policies, and technical staffing are confirmed during planning — not assumed.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center relative z-10">
        <Link 
          href="/plan-a-live-event"
          className="drop-shadow-[0px_4px_8px_rgba(51,217,199,0.2)] flex items-center justify-center px-6 xl:px-[26px] py-3.5 xl:py-[14px] rounded-[10px] transition-transform hover:scale-105"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgb(52, 212, 202) 0%, rgb(74, 140, 251) 100%), linear-gradient(90deg, rgba(51, 217, 199, 0.1) 0%, rgba(51, 217, 199, 0.1) 100%)" 
          }}
        >
          <span className="font-spaceGrotesk font-bold text-[#04141a] text-[15px] whitespace-nowrap">
            Start your event brief
          </span>
        </Link>
        <Link 
          href="/talk-to-an-expert"
          className="border border-[#aab3c4] border-solid flex items-center justify-center px-6 xl:px-[28px] py-3.5 xl:py-[14px] rounded-[10px] transition-colors hover:bg-white/10"
        >
          <span className="font-spaceGrotesk font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
            Talk to an event expert
          </span>
        </Link>
      </div>
    </section>
  );
}
