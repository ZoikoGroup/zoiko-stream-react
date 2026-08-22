import Image from "next/image";

export default function FinalCta() {
  return (
    <section className="bg-[#0a0d13] border-[#232b3a] border-b border-solid flex flex-col gap-8 items-center justify-center pt-6 px-6 md:px-12 xl:px-[112px] h-[545px] relative w-full overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen">
        <Image 
          src="/images/captions-and-languages/cta-bg-texture.png" 
          alt="Studio Background Texture" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-4 items-center relative z-10 text-center w-full max-w-[800px]">
        <h2 className="font-spaceGrotesk font-bold leading-tight xl:leading-[56px] text-[#eef1f6] text-3xl md:text-[44px]">
          Build better, safer, more controlled live events with ZoikoStream.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#aab3c4] text-base md:text-[18px] max-w-[640px]">
          Accessibility setup, CART routing constraints, and translation methods are confirmed during event pre-production.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center relative z-10 mt-2">
        <a href="/plan-a-live-event">
        <button className="bg-gradient-to-r drop-shadow-[0px_4px_8px_rgba(51,217,199,0.2)] flex from-[#33d9c7] items-center justify-center px-[26px] py-[14px] rounded-[10px] to-[#4c86ff] transition-transform hover:-translate-y-0.5">
          <span className="font-spaceGrotesk font-bold leading-[normal] text-[#04141a] text-[15px] whitespace-nowrap">
            Plan a live event
          </span>
        </button></a>
        <a href="/talk-to-an-expert">
        <button className="border border-[#aab3c4] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] transition-colors hover:bg-white/5">
          <span className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-[15px] whitespace-nowrap">
            Talk to an expert
          </span>
        </button></a>
      </div>
    </section>
  );
}
