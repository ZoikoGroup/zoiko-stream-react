import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0a0d13] border-[#232b3a] border-b border-solid flex flex-col xl:flex-row items-center xl:items-start justify-between px-6 md:px-12 xl:px-[112px] py-16 xl:pt-[110px] xl:pb-[144px] relative w-full xl:h-[724px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/captions-and-languages/captions-hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute bg-gradient-to-b from-[#0a0d1378] inset-0 to-[#0a0d1396] via-[40%] via-[#0a0d138f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full max-w-[718px] xl:h-[470px] justify-between">
        <div className="flex flex-col gap-6 items-start">
          <div className="border border-[#33d9c7] flex gap-2 items-center px-3 py-1.5 rounded-full">
            <div className="bg-[#33d9c7] rounded-sm size-1.5" />
            <span className="font-spaceGrotesk font-bold leading-5 text-[#33d9c7] text-xs tracking-[1.13px] uppercase">
              CAPTIONS & LANGUAGES
            </span>
          </div>
          
          <h1 className="font-spaceGrotesk font-bold leading-[1.1] text-[#eef1f6] text-[40px] md:text-[56px] tracking-[-1px]">
            Every word heard. Every language reached.
          </h1>
          
          <p className="font-spaceGrotesk leading-relaxed text-[#aab3c4] text-base md:text-lg">
            Add live captions, multi-language audio, and real-time translation to any event — with full control over accuracy, styling, and viewer experience.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <Link href="/plan-a-live-event" className="bg-gradient-to-r drop-shadow-[0px_4px_8px_rgba(51,217,199,0.2)] flex from-[#33d9c7] items-center justify-center px-6 py-3.5 rounded-[10px] to-[#4c86ff] hover:opacity-90 transition-opacity">
              <span className="font-spaceGrotesk font-bold text-[#04141a] text-[15px]">
                Plan a live event
              </span>
            </Link>
            <Link href="/talk-to-an-expert" className="border border-[#aab3c4] flex items-center justify-center px-7 py-3.5 rounded-[10px] hover:bg-white/5 transition-colors">
              <span className="font-spaceGrotesk font-bold text-[#eef1f6] text-[15px]">
                Talk to an expert
              </span>
            </Link>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="flex flex-wrap xl:flex-nowrap gap-6 md:gap-10 items-center mt-10 xl:mt-0 w-full">
          <div className="flex flex-col gap-1 items-start">
            <span className="font-spaceGrotesk font-bold text-[#33d9c7] text-xl md:text-2xl">
              40+ Languages
            </span>
            <span className="font-spaceGrotesk text-[#aab3c4] text-xs md:text-[13px]">
              Real-time AI translation
            </span>
          </div>
          <div className="hidden md:block bg-[#232b3a] h-10 w-px" />
          <div className="flex flex-col gap-1 items-start">
            <span className="font-spaceGrotesk font-bold text-[#33d9c7] text-xl md:text-2xl">
              Sub-2s Latency
            </span>
            <span className="font-spaceGrotesk text-[#aab3c4] text-xs md:text-[13px]">
              Synchronized delivery
            </span>
          </div>
          <div className="hidden md:block bg-[#232b3a] h-10 w-px" />
          <div className="flex flex-col gap-1 items-start">
            <span className="font-spaceGrotesk font-bold text-[#33d9c7] text-xl md:text-2xl">
              WCAG 2.2 AA
            </span>
            <span className="font-spaceGrotesk text-[#aab3c4] text-xs md:text-[13px]">
              Full accessibility compliance
            </span>
          </div>
        </div>
      </div>

      {/* Visual / Video */}
      <div className="relative z-10 bg-[#121625cc] backdrop-blur-sm border border-[#232b3a] flex flex-col gap-4 p-6 rounded-2xl w-full max-w-[488px] mt-12 xl:mt-[10px]">
        <div className="bg-black flex h-[220px] items-end justify-center overflow-hidden relative rounded-lg w-full p-4">
          <Image 
            src="/images/captions-and-languages/captions-hero-video.png" 
            alt="Video preview" 
            fill 
            className="object-cover opacity-80"
          />
          <div className="bg-black/80 flex items-start justify-center px-4 py-2 rounded relative z-10 w-full">
            <p className="font-spaceGrotesk text-sm text-center text-white">
              &quot;We are excited to share our next-generation architecture today...&quot;
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <div className="bg-[#33d9c7] rounded-full size-2 animate-pulse shrink-0" />
            <span className="font-spaceGrotesk font-bold text-[#33d9c7] text-xs uppercase">
              LIVE STENOGRAPHY INGEST
            </span>
          </div>
          <span className="font-mono text-[#aab3c4] text-[11px] tracking-wider uppercase">
            STABLE - 99.9% ACCURACY
          </span>
        </div>
      </div>
    </section>
  );
}
