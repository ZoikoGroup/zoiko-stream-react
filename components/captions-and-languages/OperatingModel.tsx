import Image from "next/image";

export default function OperatingModel() {
  return (
    <section className="bg-[#fcfdfd] border-[#e1e5ec] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <Image 
        src="/images/captions-and-languages/operating-model-bg.png" 
        alt="Topographic Background" 
        fill 
        className="object-cover pointer-events-none opacity-80"
      />
      
      {/* Header */}
      <div className="flex flex-col gap-5 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.38px]">
          An operating model built for inclusive live events
        </h2>
        <p className="font-spaceGrotesk leading-[26px] text-[#4f5e74] text-base max-w-[720px]">
          Connecting global audiences means removing barriers to understanding. Our platform keeps captions synchronized, accurate, and completely in your control.
        </p>
      </div>
      
      {/* Cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6 items-stretch relative z-10 w-full">
        {/* Card 1 */}
        <div className="bg-gradient-to-b from-[#d1ebff] via-[#f7fcff] via-[60%] to-white border border-[rgba(191,224,255,0.7)] drop-shadow-[0px_2px_4px_rgba(120,176,255,0.08),0px_8px_12px_rgba(120,176,255,0.15)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-5 items-start min-h-[280px] p-7 rounded-[20px] transition-transform hover:-translate-y-1">
          <div className="bg-gradient-to-b from-[#b2deff] to-[#e0f5ff] border border-[rgba(166,209,255,0.6)] drop-shadow-[0px_4px_6px_rgba(74,135,255,0.2)] flex items-center justify-center rounded-full size-16 shrink-0">
            <Image src="/images/captions-and-languages/icon-closed-caption.svg" alt="Live closed captions" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2.5 items-start mt-1">
            <h3 className="font-spaceGrotesk font-bold leading-[26px] text-[#0f1b2d] text-[19px]">
              Live closed captions
            </h3>
            <p className="font-spaceGrotesk leading-[23px] text-[#4f5e74] text-sm">
              Instantly generate and transmit precise, frame-accurate closed captions to any player.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-b from-[#d1ebff] via-[#f7fcff] via-[60%] to-white border border-[rgba(191,224,255,0.7)] drop-shadow-[0px_2px_4px_rgba(120,176,255,0.08),0px_8px_12px_rgba(120,176,255,0.15)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-5 items-start min-h-[280px] p-7 rounded-[20px] transition-transform hover:-translate-y-1">
          <div className="bg-gradient-to-b from-[#b2deff] to-[#e0f5ff] border border-[rgba(166,209,255,0.6)] drop-shadow-[0px_4px_6px_rgba(74,135,255,0.2)] flex items-center justify-center rounded-full size-16 shrink-0">
            <Image src="/images/captions-and-languages/icon-audio-lines.svg" alt="Multi-language audio" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2.5 items-start mt-1">
            <h3 className="font-spaceGrotesk font-bold leading-[26px] text-[#0f1b2d] text-[19px]">
              Multi-language audio
            </h3>
            <p className="font-spaceGrotesk leading-[23px] text-[#4f5e74] text-sm">
              Deliver multiple alternative audio tracks so users can listen in their native tongue.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-b from-[#d1ebff] via-[#f7fcff] via-[60%] to-white border border-[rgba(191,224,255,0.7)] drop-shadow-[0px_2px_4px_rgba(120,176,255,0.08),0px_8px_12px_rgba(120,176,255,0.15)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-5 items-start min-h-[280px] p-7 rounded-[20px] transition-transform hover:-translate-y-1">
          <div className="bg-gradient-to-b from-[#b2deff] to-[#e0f5ff] border border-[rgba(166,209,255,0.6)] drop-shadow-[0px_4px_6px_rgba(74,135,255,0.2)] flex items-center justify-center rounded-full size-16 shrink-0">
            <Image src="/images/captions-and-languages/icon-translate.svg" alt="Real-time translation" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2.5 items-start mt-1">
            <h3 className="font-spaceGrotesk font-bold leading-[26px] text-[#0f1b2d] text-[19px]">
              Real-time translation
            </h3>
            <p className="font-spaceGrotesk leading-[23px] text-[#4f5e74] text-sm">
              Automate translation of the primary source speech into dozens of subtitles on the fly.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-b from-[#d1ebff] via-[#f7fcff] via-[60%] to-white border border-[rgba(191,224,255,0.7)] drop-shadow-[0px_2px_4px_rgba(120,176,255,0.08),0px_8px_12px_rgba(120,176,255,0.15)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-5 items-start min-h-[280px] p-7 rounded-[20px] transition-transform hover:-translate-y-1">
          <div className="bg-gradient-to-b from-[#b2deff] to-[#e0f5ff] border border-[rgba(166,209,255,0.6)] drop-shadow-[0px_4px_6px_rgba(74,135,255,0.2)] flex items-center justify-center rounded-full size-16 shrink-0">
            <Image src="/images/captions-and-languages/icon-shield-check.svg" alt="Caption styling & compliance" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2.5 items-start mt-1">
            <h3 className="font-spaceGrotesk font-bold leading-[26px] text-[#0f1b2d] text-[19px]">
              Caption styling &amp; compliance
            </h3>
            <p className="font-spaceGrotesk leading-[23px] text-[#4f5e74] text-sm">
              Customize size, color, background opacity, and placement to meet strict ADA/WCAG laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
