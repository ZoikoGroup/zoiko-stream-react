import Image from "next/image";

export default function CaptionTypes() {
  return (
    <section className="bg-white border-[#e1e5ec] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <Image 
        src="/images/captions-and-languages/caption-types-bg.png" 
        alt="Topographic Background" 
        fill 
        className="object-cover pointer-events-none opacity-80"
      />

      {/* Header */}
      <div className="flex flex-col gap-5 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.38px]">
          Choose your caption approach
        </h2>
        <p className="font-spaceGrotesk leading-[26px] text-[#4f5e74] text-base max-w-[720px]">
          Different event segments demand different workflows. Mix automated and human-led methods across your run-of-show seamlessly.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6 items-stretch relative z-10 w-full">
        {/* Card 1 */}
        <div className="bg-white border border-[#e1e5ec] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col items-start overflow-hidden relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(150,177,235,0.12)] transition-transform hover:-translate-y-1">
          <div className="h-[260px] relative w-full">
            <Image src="/images/captions-and-languages/type-ai.png" alt="Automated AI captions" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-3 items-start p-6 relative w-full">
            <h3 className="font-spaceGrotesk font-bold leading-[28px] text-[#0f1b2d] text-[20px]">
              Automated AI captions
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#4f5e74] text-[14.5px]">
              Our speech-to-text model generates fast, precise captions automatically. Includes intelligent punctuation, speaker diarization, and custom vocabulary training.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#e1e5ec] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col items-start overflow-hidden relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(150,177,235,0.12)] transition-transform hover:-translate-y-1">
          <div className="h-[260px] relative w-full">
            <Image src="/images/captions-and-languages/type-cart.png" alt="Professional CART" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-3 items-start p-6 relative w-full">
            <h3 className="font-spaceGrotesk font-bold leading-[28px] text-[#0f1b2d] text-[20px]">
              Professional CART
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#4f5e74] text-[14.5px]">
              Connect remote human stenographers via specialist CART systems for high-consequence corporate keynotes, medical assemblies, and regulatory briefings.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#e1e5ec] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col items-start overflow-hidden relative rounded-[16px] shadow-[0px_4px_4px_0px_rgba(150,177,235,0.12)] transition-transform hover:-translate-y-1">
          <div className="h-[260px] relative w-full">
            <Image src="/images/captions-and-languages/type-pre.png" alt="Pre-prepared captions" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-3 items-start p-6 relative w-full">
            <h3 className="font-spaceGrotesk font-bold leading-[28px] text-[#0f1b2d] text-[20px]">
              Pre-prepared captions
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#4f5e74] text-[14.5px]">
              Upload SRT, VTT, or custom scripts beforehand. Perfect for fully-rehearsed events, pre-recorded content, and absolute, frame-locked cue synchronization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
