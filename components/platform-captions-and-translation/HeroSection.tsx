import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#232b3a] border-b border-solid flex flex-col xl:flex-row items-center xl:items-start justify-between px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute bg-[rgba(10,15,26,0.45)] inset-0" />
      </div>

      <div className="content-stretch flex flex-col xl:flex-row gap-8 xl:gap-[48px] items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-6 xl:gap-[24px] items-start min-w-px relative">
          <div className="border border-[#34d4ca] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-[6px] relative rounded-[100px] shrink-0">
            <div className="relative shrink-0 size-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                <circle cx="3" cy="3" r="3" fill="#34d4ca"/>
              </svg>
            </div>
            <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] tracking-[1.2px] uppercase whitespace-nowrap">
              PLATFORM / CAPTIONS AND TRANSLATION
            </p>
          </div>
          <h1 className="font-spaceGrotesk font-bold leading-[1.2] md:leading-[54px] min-w-full relative shrink-0 text-[#eef1f6] text-[32px] md:text-[44px] tracking-[-1.2px]">
            Make spoken media<br className="hidden md:block" />
            understandable across<br className="hidden md:block" />
            approved audiences and<br className="hidden md:block" />
            languages
          </h1>
          <p className="font-spaceGrotesk font-normal leading-relaxed md:leading-[26px] min-w-full relative shrink-0 text-[#aab3c4] text-base md:text-[16px]">
            ZoikoStream Captions and translation helps teams define audience and language<br className="hidden xl:block" />
            needs, select authorized caption, transcript, translated-text, interpretation, or<br className="hidden xl:block" />
            alternate-audio pathways, prepare the source, assign responsibility, and manage<br className="hidden xl:block" />
            live and post-live states.
          </p>
          <div className="content-stretch flex flex-wrap gap-4 xl:gap-[16px] items-center mt-2 relative shrink-0">
            <Link href="/talk-to-an-expert" className="bg-gradient-to-b content-stretch flex from-[#34d4ca] items-start px-[28px] py-[14px] relative rounded-[10px] shrink-0 to-[#4a8cfb] hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(52,212,202,0.2)]">
              <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[15px] whitespace-nowrap">
                Talk to an expert
              </span>
            </Link>
            <Link href="/resources/documentation" className="border border-[#aab3c4] border-solid content-stretch flex items-start px-[28px] py-[14px] relative rounded-[10px] shrink-0 hover:bg-white/5 transition-colors">
              <span className="font-spaceGrotesk font-medium leading-[normal] relative shrink-0 text-[#eef1f6] text-[15px] whitespace-nowrap">
                View documentation
              </span>
            </Link>
          </div>
        </div>

        {/* Right Diagram */}
        <div className="backdrop-blur-[8px] bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid content-stretch flex flex-col gap-[20px] items-start p-6 xl:p-[28px] relative rounded-[16px] shrink-0 w-full xl:w-[520px]">
          <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] tracking-[1px] whitespace-nowrap uppercase">
            AUTHORIZED CAPTION PIPELINE
          </p>
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            {[
              { id: 1, title: 'Source Ingest', desc: 'Verified raw audio' },
              { id: 2, title: 'Language Need', desc: 'SAML user context mapped' },
              { id: 3, title: 'Authorized Method', desc: 'Live human / machine translation' },
              { id: 4, title: 'State & Review', desc: 'Pending production checkmark' },
              { id: 5, title: 'Evidence & Replay', desc: 'Immutable cryptographic ledger' },
            ].map((step) => (
              <div key={step.id} className="bg-[#141b2d] border border-[#232b3a] border-solid content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full gap-2 sm:gap-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-[#34d4ca] content-stretch flex items-center justify-center relative rounded-[9px] shrink-0 size-[18px]">
                    <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#0a0f1a] text-[11px] whitespace-nowrap">
                      {step.id}
                    </span>
                  </div>
                  <span className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[13px] whitespace-nowrap">
                    {step.title}
                  </span>
                </div>
                <span className="font-spaceGrotesk font-normal leading-[normal] relative shrink-0 text-[#34d4ca] text-[12px] whitespace-nowrap">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
