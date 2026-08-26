import Image from "next/image";

export default function CtaBannerSection() {
  return (
    <section className="bg-[#04060a] flex flex-col gap-[64px] items-center justify-center px-[112px] py-[140px] relative w-full overflow-hidden">
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 pointer-events-none">
        <Image
          src="/images/global-event-streaming/ambient-bloom.svg"
          alt=""
          fill
          className="object-cover scale-150"
        />
      </div>

      <div className="flex flex-col gap-[24px] items-center text-center w-full max-w-[800px] relative z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[64px] text-white text-[56px] tracking-[-2px] w-full">
          Ready to route your next global event?
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#94a3b8] text-[18px] w-full">
          Instantly scale your live operations pipeline, establish failovers, and guarantee low-latency delivery across ZukoStream's global CDN nodes.
        </p>
      </div>

      <div className="flex gap-[16px] items-center relative z-10">
        <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] drop-shadow-[0px_8px_12px_rgba(52,212,202,0.25)] flex items-center justify-center px-[32px] py-[16px] rounded-[10px] transition-opacity hover:opacity-90">
          <span className="font-['Space_Grotesk'] font-bold text-[#04060a] text-[15px] whitespace-nowrap">
            View Developer API Scope
          </span>
        </button>
        <button className="bg-[#0f172a] border border-[#1e293b] border-solid flex items-center justify-center px-[32px] py-[16px] rounded-[10px] transition-colors hover:bg-white/5">
          <span className="font-['Space_Grotesk'] font-bold text-white text-[15px] whitespace-nowrap">
            Talk to a Media Expert
          </span>
        </button>
        <button className="bg-[#0f172a] border border-[#1e293b] border-solid flex items-center justify-center px-[32px] py-[16px] rounded-[10px] transition-colors hover:bg-white/5">
          <span className="font-['Space_Grotesk'] font-bold text-white text-[15px] whitespace-nowrap">
            Request Managed Rehearsal
          </span>
        </button>
      </div>
    </section>
  );
}
