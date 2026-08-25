import Image from "next/image";

export default function InspectSection() {
  const briefConfig = [
    { label: "Event Name", value: "ZoikoStream Developer Summit 2026" },
    { label: "Owner", value: "Events Team" },
    { label: "Origin Location", value: "San Francisco, America/Los_Angeles" },
    { label: "Canonical Start", value: "2026-09-15T17:00:00Z" },
    { label: "Duration", value: "4 hours" },
    { label: "Audience Regions", value: "North America, Europe, APAC" },
    { label: "Access Rule", value: "Public with registration" },
    { label: "Operating Model", value: "Organization-operated" },
  ];

  const timeZones = [
    { label: "New York (EDT)", offset: "UTC-4", time: "1:00 PM EDT" },
    { label: "London (BST)", offset: "UTC+1", time: "6:00 PM BST" },
    { label: "Tokyo (JST)", offset: "UTC+9 (+1 day)", time: "2:00 AM JST" },
    { label: "Sydney (AEST)", offset: "UTC+10 (+1 day)", time: "3:00 AM AEST" },
  ];

  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#f8fafc]">
      <Image
        src="/images/global-event-streaming/inspect-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover pointer-events-none z-0 mix-blend-multiply opacity-[0.8]"
      />
      
      <div className="absolute bottom-[-181px] right-[-120px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-180px] top-[-54px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[48px] text-[#0f1b2d] text-[38px] tracking-[-0.5px] w-full">
          One Event Moment. Clear Local Times Everywhere It Is Presented
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          Store one canonical event instant, preserve the event's origin time zone, and render explicit local equivalents for viewers. Never display an unlabeled time or silently change a schedule because a browser time zone changed.
        </p>
      </div>

      <div className="flex gap-[48px] items-start relative shrink-0 w-full z-10">
        {/* Left Panel: Event Brief */}
        <div className="bg-white border-[#e1e6eb] border-[1.5px] border-solid flex flex-1 flex-col gap-[24px] items-start p-[32px] rounded-[16px] self-stretch">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[#0f1b2d] text-[22px] whitespace-nowrap">
              Event Brief Configuration
            </h3>
            <div className="bg-[#10b981]/10 flex items-start px-[8px] py-[4px] rounded-[4px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#10b981] text-[10px] tracking-[0.5px] whitespace-nowrap">
                v2.1 APPROVED
              </span>
            </div>
          </div>
          
          <div className="h-px relative shrink-0 w-full bg-transparent">
            <Image
              src="/images/global-event-streaming/line-solid-2.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[8px] items-start w-full">
            {briefConfig.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-[6px] items-start w-full">
                <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4f5e74] text-[10px] tracking-[0.5px] whitespace-nowrap">
                  {item.label}
                </span>
                <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex items-start p-[12px] rounded-[6px] w-full">
                  <span className="font-['Inter'] font-normal leading-[22px] text-[#0f1b2d] text-[14px] whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Time-Zone Truth */}
        <div className="bg-[#0f1b2d] flex flex-col gap-[24px] items-start w-[540px] h-[615px] p-[32px] rounded-[16px] shrink-0">
          <div className="flex flex-col gap-[6px] items-start w-full whitespace-nowrap">
            <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[22px] text-white">
              Time-Zone Truth
            </h3>
            <p className="font-['Inter'] font-normal leading-[22px] text-[#aab3c4] text-[14px]">
              Preserved canonical timing validation
            </p>
          </div>
          
          <div className="flex gap-[16px] items-start w-full whitespace-nowrap">
            <div className="bg-[#162235] flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[12px] tracking-[0.5px]">
                ORIGIN TIME
              </span>
              <span className="font-['Inter'] font-bold leading-[22px] text-[#4ecdc4] text-[14px]">
                10:00 AM PDT
              </span>
            </div>
            <div className="bg-[#162235] flex flex-1 flex-col gap-[4px] items-start p-[12px] rounded-[8px]">
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[12px] tracking-[0.5px]">
                UTC REFERENCE
              </span>
              <span className="font-['Inter'] font-bold leading-[22px] text-[#4a8cfb] text-[14px]">
                17:00 UTC
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] items-start w-full whitespace-nowrap">
            {timeZones.map((zone, idx) => (
              <div key={idx} className="bg-[#162235] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] rounded-[8px] w-full">
                <div className="flex flex-col gap-[4px] items-start">
                  <span className="font-['Inter'] font-bold leading-[22px] text-[14px] text-white">
                    {zone.label}
                  </span>
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[10px] tracking-[0.5px]">
                    {zone.offset}
                  </span>
                </div>
                <span className="font-['Inter'] font-bold leading-[28px] text-[#4ecdc4] text-[18px]">
                  {zone.time}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full mt-auto">
            <div className="flex gap-[8px] items-center">
              <div className="relative size-[8px]">
                <Image
                  src="/images/global-event-streaming/ellipse-green.svg"
                  alt=""
                  fill
                />
              </div>
              <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#10b981] text-[10px] tracking-[0.5px] whitespace-nowrap">
                DST STATUS VALIDATED
              </span>
            </div>
            <div className="border border-[#232b3a] border-solid flex gap-[8px] items-center px-[12px] py-[8px] rounded-[6px] cursor-pointer">
              <span className="font-['Inter'] font-normal leading-[22px] text-[12px] text-white whitespace-nowrap">
                Select Zone
              </span>
              <div className="relative size-[12px]">
                <Image
                  src="/images/global-event-streaming/chevron-down.svg"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
