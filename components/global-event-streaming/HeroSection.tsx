import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] pt-[220px] pb-[180px] relative w-full overflow-hidden">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/hero-bg.png"
          alt="Global event streaming background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#04060a]/85" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-start relative shrink-0 w-full z-10">
        <div className="border border-[#4ecdc4] border-solid flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0">
          <p className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[12px] tracking-[0.5px] whitespace-nowrap uppercase">
            Global Event Streaming
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center relative shrink-0 w-full z-10">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-[32px] items-start max-w-[680px]">
          <h1 className="font-['Space_Grotesk'] font-bold leading-[60px] text-[52px] text-white tracking-[-1px]">
            Stream One Event Across Time Zones With Control
          </h1>
          <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px]">
            Plan the event moment, verify approved audience coverage, prepare contribution and access, keep live state observable, support accessible viewing, and carry authorized media into replay for people who cannot join live.
          </p>
          
          <div className="flex flex-wrap gap-[8px] items-start shrink-0">
            {["Developer-led", "Organization-operated", "Professionally managed"].map((tag) => (
              <div key={tag} className="bg-[#4ecdc4]/10 flex items-start px-[12px] py-[6px] rounded-[4px] shrink-0">
                <p className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[12px] tracking-[0.5px] whitespace-nowrap">
                  {tag}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-[16px] items-center shrink-0 mt-4">
            <Link
              href="/start-building"
              className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
            >
              <span className="font-['Inter'] font-bold leading-[22px] text-[#0a0d14] text-[14px] whitespace-nowrap">
                Start Building
              </span>
            </Link>
            <Link
              href="/platform-global-distribution"
              className="border border-[#aab3c4] border-solid flex items-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-white/5"
            >
              <span className="font-['Inter'] font-bold leading-[22px] text-white text-[14px] whitespace-nowrap">
                Explore Global Delivery
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Control Center Mockup */}
        <div className="bg-[#162235] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[20px] items-start p-[24px] rounded-[16px] shrink-0 w-[500px]">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[22px] text-white whitespace-nowrap">
              Global Event Control
            </h2>
            <div className="bg-[#10b981]/10 flex items-start px-[8px] py-[4px] rounded-[4px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#10b981] text-[12px] tracking-[0.5px] uppercase whitespace-nowrap">
                Live State
              </span>
            </div>
          </div>
          
          <div className="h-px relative shrink-0 w-full bg-[#232b3a]" />

          <div className="flex flex-col gap-[12px] items-start leading-[22px] text-[14px] w-full">
            <div className="flex items-start justify-between w-full">
              <span className="font-['Inter'] font-normal text-[#aab3c4]">Canonical Clock</span>
              <span className="font-['Inter'] font-bold text-[#4ecdc4]">17:42:09 UTC</span>
            </div>
            <div className="flex items-start justify-between font-['Inter'] font-normal w-full">
              <span className="text-[#aab3c4]">Origin Time Zone</span>
              <span className="text-white">America/Los_Angeles (PDT)</span>
            </div>
          </div>

          <div className="bg-[#0a0d14] flex flex-col gap-[8px] items-start p-[12px] rounded-[8px] w-full">
            <h3 className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[12px] tracking-[0.5px] uppercase">
              Audience Local Equivalents
            </h3>
            <div className="flex items-start justify-between font-['Inter'] font-normal leading-[22px] text-[14px] w-full">
              <span className="text-white">New York (EDT)</span>
              <span className="text-[#4ecdc4]">1:42 PM</span>
            </div>
            <div className="flex items-start justify-between font-['Inter'] font-normal leading-[22px] text-[14px] w-full">
              <span className="text-white">London (BST)</span>
              <span className="text-[#4ecdc4]">6:42 PM</span>
            </div>
            <div className="flex items-start justify-between font-['Inter'] font-normal leading-[22px] text-[14px] w-full">
              <span className="text-white">Tokyo (JST)</span>
              <span className="text-[#4ecdc4]">2:42 AM (+1)</span>
            </div>
          </div>

          <div className="flex gap-[12px] items-start w-full">
            <div className="bg-[#0a0d14] flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[12px] tracking-[0.5px] uppercase">
                Source State
              </span>
              <span className="font-['Inter'] font-bold leading-[22px] text-[#10b981] text-[14px]">
                Active ✓
              </span>
            </div>
            <div className="bg-[#0a0d14] flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[12px] tracking-[0.5px] uppercase">
                DRM & CAPTIONS
              </span>
              <span className="font-['Inter'] font-bold leading-[22px] text-[#10b981] text-[14px]">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
