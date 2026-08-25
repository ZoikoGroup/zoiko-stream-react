import Image from "next/image";

export default function DescribeSection() {
  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-white">
      {/* Background and Blobs */}
      <Image
        src="/images/global-event-streaming/describe-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover pointer-events-none z-0 mix-blend-multiply opacity-[0.8]"
      />
      <div className="absolute bottom-[-177px] right-[-120px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-177px] top-[-54px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[48px] text-[#0f172a] text-[38px] tracking-[-0.5px] w-full">
          Use This Path When the Event Is One Moment for a <br /> Distributed Audience
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#475569] text-[18px] w-full max-w-[800px]">
          Global Event Streaming fits a scheduled or time-bound live program where audience geography, local time, access, accessibility, continuity and replay must be coordinated. Other paths own broader or deeper needs.
        </p>
      </div>

      {/* Cards Row */}
      <div className="flex gap-[24px] items-start relative shrink-0 w-full z-10">
        {[
          {
            img: "card-1.png",
            title: "Global Event Streaming",
            desc: "One scheduled event, multi-timezone audience, event-day operations.",
          },
          {
            img: "card-2.png",
            title: "Broadcast Globally",
            desc: "Broad one-to-many distribution across approved regions/channels.",
          },
          {
            img: "card-3.png",
            title: "Enterprise Broadcast",
            desc: "Organization-operated critical broadcast control and governance.",
          },
          {
            img: "card-4.png",
            title: "Private Audience Delivery",
            desc: "Deep identity, entitlement, policy and protected-viewer access.",
          },
        ].map((card, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] border-solid flex flex-1 flex-col h-[281px] items-start overflow-clip relative rounded-[12px]">
            <div className="h-[140px] relative w-full shrink-0">
              <Image
                src={`/images/global-event-streaming/${card.img}`}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[#0f172a] text-[18px]">
                {card.title}
              </h3>
              <p className="font-['Inter'] font-normal leading-[22px] text-[#475569] text-[14px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full z-10">
        <div className="bg-[#f8fafc] flex gap-[12px] items-start p-[12px] rounded-[8px] text-[#475569] w-full">
          <p className="flex-1 font-['Space_Grotesk'] font-medium text-[12px] tracking-[0.5px] uppercase">Capability</p>
          <p className="flex-1 font-['Space_Grotesk'] font-medium text-[12px] tracking-[0.5px] uppercase">Global Event Streaming</p>
          <p className="flex-1 font-['Space_Grotesk'] font-medium text-[12px] tracking-[0.5px] uppercase">Broadcast Globally</p>
          <p className="flex-1 font-['Space_Grotesk'] font-medium text-[12px] tracking-[0.5px] uppercase">Enterprise Broadcast</p>
        </div>
        
        {[
          ["Schedule/time-zone truth", "Required", "Conditional", "Common"],
          ["Event-day operations", "Required", "Common", "Required"],
          ["Coverage architecture", "Common", "Required", "Conditional"],
          ["Access governance", "Conditional", "Conditional", "Required"],
        ].map((row, idx) => (
          <div key={idx} className={`border-b border-[#e2e8f0] border-solid flex gap-[12px] items-center p-[12px] w-full ${idx === 3 ? 'border-b-0' : ''}`}>
            <p className="flex-1 font-['Inter'] font-bold text-[#0f172a] text-[14px]">{row[0]}</p>
            <p className={`flex-1 font-['Inter'] font-normal text-[14px] ${row[1] === 'Required' ? 'text-[#0f172a]' : 'text-[#475569]'}`}>{row[1]}</p>
            <p className={`flex-1 font-['Inter'] font-normal text-[14px] ${row[2] === 'Required' ? 'text-[#0f172a]' : 'text-[#475569]'}`}>{row[2]}</p>
            <p className={`flex-1 font-['Inter'] font-normal text-[14px] ${row[3] === 'Required' ? 'text-[#0f172a]' : 'text-[#475569]'}`}>{row[3]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
