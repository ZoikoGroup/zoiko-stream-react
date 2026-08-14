import Image from "next/image";

export default function LanguageSupport() {
  const checkItems = [
    "Source language detection & dial-in",
    "Real-time AI translation into 40+ subtitle tracks",
    "Multi-track alternative audio channel encoding",
    "Instant, intuitive player language selectors",
    "Proper right-to-left script rendering engine",
    "Advanced regional dialect and terminology handling"
  ];

  const languages = [
    { name: "English (US)", code: "EN", active: true },
    { name: "Español (ES)", code: "ES", active: false },
    { name: "Français (FR)", code: "FR", active: false },
    { name: "Mandarin (ZH)", code: "ZH", active: false },
    { name: "العربية (AR)", code: "AR", active: false, dir: "rtl" },
    { name: "日本語 (JA)", code: "JA", active: false }
  ];

  return (
    <section className="bg-[#0a0d13] border-[#232b3a] border-b border-solid flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Map Image */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/captions-and-languages/language-support-bg.png" 
          alt="World Map Background" 
          fill 
          className="object-cover opacity-70" 
        />
        <div className="absolute bg-[#0a0d13]/60 inset-0" />
      </div>

      {/* Header */}
      <div className="flex flex-col gap-5 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[48px] text-[#eef1f6] text-3xl md:text-[38px] tracking-[-0.38px]">
          Reach every viewer in their language
        </h2>
        <p className="font-spaceGrotesk leading-[26px] text-[#aab3c4] text-base max-w-[720px]">
          Deliver instant translation across timezone and regional boundaries. Configure multi-track layouts easily.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 xl:gap-[48px] items-center relative z-10 w-full">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 items-start relative w-full">
          <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#eef1f6] text-[24px]">
            Unified multilingual orchestration
          </h3>
          <div className="flex flex-col gap-4 items-start relative w-full">
            {checkItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-center relative w-full">
                <div className="bg-[#33d9c7]/10 flex flex-col items-center justify-center rounded-[12px] shrink-0 size-6">
                  <div className="relative size-[14px]">
                    <Image src="/images/captions-and-languages/icon-check.svg" alt="Check" fill />
                  </div>
                </div>
                <p className="flex-1 font-spaceGrotesk font-medium leading-[normal] text-[#eef1f6] text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Mockup */}
        <div className="bg-[#121625cc] border border-[#232b3a] flex flex-col gap-5 items-start p-7 relative rounded-[20px] shrink-0 w-full xl:w-[520px]">
          <div className="border-[#232b3a] border-b flex items-center justify-between pb-3 relative w-full">
            <p className="font-spaceGrotesk font-bold text-[#eef1f6] text-base uppercase">
              LANGUAGE OPTIONS
            </p>
            <p className="font-mono text-[#33d9c7] text-[11px] uppercase tracking-wide">
              ACTIVE FEEDS: 6
            </p>
          </div>
          
          <div className="flex flex-col gap-3 items-start relative w-full">
            {languages.map((lang, index) => (
              <div 
                key={index} 
                className={`border flex items-center justify-between px-3 py-2 relative rounded-lg w-full transition-colors ${
                  lang.active 
                    ? "bg-[#33d9c7]/10 border-[#33d9c7]" 
                    : "bg-transparent border-[#232b3a] hover:bg-white/5"
                }`}
              >
                <div className="flex gap-3 items-center relative">
                  <div className="relative size-2 shrink-0">
                    <Image 
                      src={lang.active ? "/images/captions-and-languages/icon-ellipse-active.svg" : "/images/captions-and-languages/icon-ellipse-inactive.svg"} 
                      alt="Status Indicator" 
                      fill 
                    />
                  </div>
                  <p 
                    className={`font-spaceGrotesk ${lang.active ? "font-bold text-[#33d9c7]" : "font-medium text-[#eef1f6]"} text-[14.5px]`}
                    dir={lang.dir || "ltr"}
                  >
                    {lang.name}
                  </p>
                </div>
                <p className="font-mono text-[#aab3c4] text-xs uppercase">
                  {lang.code}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
