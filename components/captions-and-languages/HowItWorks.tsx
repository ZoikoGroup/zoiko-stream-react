import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0d13] flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background gradients and glows */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 600' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(72 0 0 60 720 0)'><stop stop-color='rgba(13,27,62,1)' offset='0'/><stop stop-color='rgba(12,20,41,1)' offset='0.5'/><stop stop-color='rgba(10,13,19,1)' offset='1'/></radialGradient></defs></svg>\")",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} 
      />
      
      {/* Glow Top Left */}
      <div className="absolute h-[500px] -left-[180px] -top-[120px] w-[600px] z-0 pointer-events-none opacity-50 xl:opacity-100">
        <div className="absolute inset-[-16%_-13.33%]">
          <Image src="/images/captions-and-languages/glow-tl.svg" alt="" fill className="object-contain" priority />
        </div>
      </div>

      {/* Glow Bottom Right */}
      <div className="absolute h-[400px] -right-[150px] top-[200px] w-[500px] z-0 pointer-events-none opacity-50 xl:opacity-100">
        <div className="absolute inset-[-20%_-16%]">
          <Image src="/images/captions-and-languages/glow-br.svg" alt="" fill className="object-contain" priority />
        </div>
      </div>

      {/* Glow Center */}
      <div className="absolute h-[300px] left-1/2 -translate-x-1/2 top-[100px] w-[600px] z-0 pointer-events-none opacity-50 xl:opacity-100">
        <div className="absolute inset-[-40%_-20%]">
          <Image src="/images/captions-and-languages/glow-center.svg" alt="" fill className="object-contain" priority />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#eef1f6] text-3xl md:text-[38px] text-center tracking-[-0.38px] w-full">
          From source audio to viewer captions in seconds
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-6 items-stretch relative z-10 w-full">
        {/* Step 1 */}
        <div className="border border-[rgba(74,128,255,0.33)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-6 items-start pb-7 pt-9 px-7 relative rounded-[20px] shadow-[0px_2px_8px_0px_rgba(10,13,19,0.4),0px_8px_32px_0px_rgba(26,89,255,0.2)] transition-transform hover:-translate-y-1">
          <div aria-hidden className="absolute bg-gradient-to-b from-[#1a2744] inset-0 pointer-events-none rounded-[20px] to-[#0d1526]" />
          
          <div className="flex flex-col items-center justify-center relative w-full">
            <div 
              className="flex items-center justify-center relative rounded-[40px] shadow-[0px_4px_16px_0px_rgba(34,68,187,0.2),0px_0px_24px_0px_rgba(74,122,255,0.33)] size-[80px]"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4 2.4 0 6.4 40 16)'><stop stop-color='rgba(102,153,255,1)' offset='0'/><stop stop-color='rgba(77,119,230,1)' offset='0.25'/><stop stop-color='rgba(51,85,204,1)' offset='0.5'/><stop stop-color='rgba(39,64,156,1)' offset='0.75'/><stop stop-color='rgba(26,42,107,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              <div className="relative size-[36px]">
                <Image src="/images/captions-and-languages/icon-mic.svg" alt="Audio ingestion" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center xl:items-start text-center xl:text-left relative w-full mt-2">
            <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-xl">
              Audio ingestion
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#7a90b8] text-sm">
              Ingest primary stream audio with multi-channel support.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.06)]" />
        </div>

        {/* Step 2 */}
        <div className="border border-[rgba(74,128,255,0.33)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-6 items-start pb-7 pt-9 px-7 relative rounded-[20px] shadow-[0px_2px_8px_0px_rgba(10,13,19,0.4),0px_8px_32px_0px_rgba(26,89,255,0.2)] transition-transform hover:-translate-y-1">
          <div aria-hidden className="absolute bg-gradient-to-b from-[#1a2744] inset-0 pointer-events-none rounded-[20px] to-[#0d1526]" />
          
          <div className="flex flex-col items-center justify-center relative w-full">
            <div 
              className="flex items-center justify-center relative rounded-[40px] shadow-[0px_4px_16px_0px_rgba(34,68,187,0.2),0px_0px_24px_0px_rgba(74,122,255,0.33)] size-[80px]"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4 2.4 0 6.4 40 16)'><stop stop-color='rgba(102,153,255,1)' offset='0'/><stop stop-color='rgba(77,119,230,1)' offset='0.25'/><stop stop-color='rgba(51,85,204,1)' offset='0.5'/><stop stop-color='rgba(39,64,156,1)' offset='0.75'/><stop stop-color='rgba(26,42,107,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              <div className="relative size-[36px]">
                <Image src="/images/captions-and-languages/icon-audio-waveform.svg" alt="Speech recognition" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center xl:items-start text-center xl:text-left relative w-full mt-2">
            <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-xl">
              Speech recognition
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#7a90b8] text-sm">
              High-accuracy AI transcription or professional CART input.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.06)]" />
        </div>

        {/* Step 3 */}
        <div className="border border-[rgba(74,128,255,0.33)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-6 items-start pb-7 pt-9 px-7 relative rounded-[20px] shadow-[0px_2px_8px_0px_rgba(10,13,19,0.4),0px_8px_32px_0px_rgba(26,89,255,0.2)] transition-transform hover:-translate-y-1">
          <div aria-hidden className="absolute bg-gradient-to-b from-[#1a2744] inset-0 pointer-events-none rounded-[20px] to-[#0d1526]" />
          
          <div className="flex flex-col items-center justify-center relative w-full">
            <div 
              className="flex items-center justify-center relative rounded-[40px] shadow-[0px_4px_16px_0px_rgba(34,68,187,0.2),0px_0px_24px_0px_rgba(74,122,255,0.33)] size-[80px]"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4 2.4 0 6.4 40 16)'><stop stop-color='rgba(102,153,255,1)' offset='0'/><stop stop-color='rgba(77,119,230,1)' offset='0.25'/><stop stop-color='rgba(51,85,204,1)' offset='0.5'/><stop stop-color='rgba(39,64,156,1)' offset='0.75'/><stop stop-color='rgba(26,42,107,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              <div className="relative size-[36px]">
                <Image src="/images/captions-and-languages/icon-globe.svg" alt="Translation engine" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center xl:items-start text-center xl:text-left relative w-full mt-2">
            <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-xl">
              Translation engine
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#7a90b8] text-sm">
              Real-time translation into 40+ languages concurrently.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.06)]" />
        </div>

        {/* Step 4 */}
        <div className="border border-[rgba(74,128,255,0.33)] flex flex-1 basis-full md:basis-[calc(50%-12px)] xl:basis-0 flex-col gap-6 items-start pb-7 pt-9 px-7 relative rounded-[20px] shadow-[0px_2px_8px_0px_rgba(10,13,19,0.4),0px_8px_32px_0px_rgba(26,89,255,0.2)] transition-transform hover:-translate-y-1">
          <div aria-hidden className="absolute bg-gradient-to-b from-[#1a2744] inset-0 pointer-events-none rounded-[20px] to-[#0d1526]" />
          
          <div className="flex flex-col items-center justify-center relative w-full">
            <div 
              className="flex items-center justify-center relative rounded-[40px] shadow-[0px_4px_16px_0px_rgba(34,68,187,0.2),0px_0px_24px_0px_rgba(74,122,255,0.33)] size-[80px]"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(4 2.4 0 6.4 40 16)'><stop stop-color='rgba(102,153,255,1)' offset='0'/><stop stop-color='rgba(77,119,230,1)' offset='0.25'/><stop stop-color='rgba(51,85,204,1)' offset='0.5'/><stop stop-color='rgba(39,64,156,1)' offset='0.75'/><stop stop-color='rgba(26,42,107,1)' offset='1'/></radialGradient></defs></svg>\")" }}
            >
              <div className="relative size-[36px]">
                <Image src="/images/captions-and-languages/icon-play-circle.svg" alt="Viewer delivery" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-center xl:items-start text-center xl:text-left relative w-full mt-2">
            <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-xl">
              Viewer delivery
            </h3>
            <p className="font-spaceGrotesk leading-[22px] text-[#7a90b8] text-sm">
              Low-latency playback with customizable styling options.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.06)]" />
        </div>
      </div>
    </section>
  );
}
