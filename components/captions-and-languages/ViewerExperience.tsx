import Image from "next/image";

export default function ViewerExperience() {
  const features = [
    "Adaptive sizing based on viewport size",
    "Four pre-tested color contrast profiles",
    "Manual position overrides to clear crucial lower thirds"
  ];

  return (
    <section className="bg-white border-[#e1e5ec] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <Image 
        src="/images/captions-and-languages/viewer-experience-bg.png" 
        alt="Topographic Background" 
        fill 
        className="object-cover pointer-events-none opacity-80"
      />

      {/* Header */}
      <div className="flex flex-col items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.38px]">
          Captions that adapt to every screen
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 xl:gap-[48px] items-center relative z-10 w-full">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 items-start relative w-full">
          <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#0f1b2d] text-[24px]">
            Painless viewing accessibility
          </h3>
          <p className="font-spaceGrotesk leading-[26px] text-[#4f5e74] text-base">
            Viewers can easily adjust on-screen caption presentation settings directly inside the player UI. Font size scaling, custom text contrast, position offsets, and responsive layout constraints prevent captions from overlapping essential on-screen presentation visuals.
          </p>
          <div className="flex flex-col gap-3 items-start relative w-full mt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2.5 items-center relative w-full">
                <div className="flex flex-col items-center justify-center shrink-0 size-4">
                  <div className="relative size-4">
                    <Image src="/images/captions-and-languages/icon-check-blue.svg" alt="Check" fill />
                  </div>
                </div>
                <p className="flex-1 font-spaceGrotesk text-[#0f1b2d] text-[14.5px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Mockup */}
        <div className="border border-[#34d4ca] flex flex-col gap-4 items-start p-6 relative rounded-[16px] shrink-0 w-full xl:w-[580px] shadow-[inset_0px_2px_4px_0px_#4c86ff,inset_0px_-1px_4px_0px_#4c86ff]">
          <div aria-hidden className="absolute bg-[#f5f7fa] inset-0 pointer-events-none rounded-[16px] -z-10" />
          
          <div className="flex items-center justify-between relative w-full">
            <p className="font-spaceGrotesk font-bold text-[#0f1b2d] text-sm uppercase">
              ACCESSIBLE PLAYER CONFIG
            </p>
            <div className="flex flex-col items-center justify-center shrink-0 size-4">
              <div className="relative size-4">
                <Image src="/images/captions-and-languages/icon-settings.svg" alt="Settings" fill />
              </div>
            </div>
          </div>
          
          <div className="bg-black flex h-[200px] md:h-[260px] items-start overflow-hidden relative rounded-lg w-full">
            <div className="h-full relative w-full">
              <Image src="/images/captions-and-languages/player-screen.png" alt="Video Player" fill className="object-cover pointer-events-none" />
            </div>
            <div className="absolute -translate-x-1/2 bg-[#121625f2] border border-[#33d9c7] bottom-6 flex items-start justify-center left-1/2 px-5 py-2.5 rounded-md w-[90%] md:w-auto">
              <p className="font-spaceGrotesk font-bold text-[#33d9c7] text-sm md:text-base text-center whitespace-normal md:whitespace-nowrap">
                [SPEAKER] &quot;Our quarterly retention increased to 94.2%...&quot;
              </p>
            </div>
          </div>
          
          <div className="border-[#e1e5ec] border-t flex items-center justify-between pt-2 relative w-full">
            <div className="flex gap-4 items-center relative">
              <div className="flex flex-col items-center justify-center shrink-0 size-[18px]">
                <div className="relative size-[18px]">
                  <Image src="/images/captions-and-languages/icon-cc.svg" alt="CC" fill />
                </div>
              </div>
              <p className="font-spaceGrotesk text-[#4f5e74] text-[13px]">
                Captions: ON
              </p>
            </div>
            <div className="flex gap-4 items-center font-spaceGrotesk text-[#4f5e74] text-[13px]">
              <p>Size: 125%</p>
              <p>Contrast: HIGH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
