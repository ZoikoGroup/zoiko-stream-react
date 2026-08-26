import Image from "next/image";
import Link from "next/link";

export default function ProtocolsSection() {
  const cards = [
    {
      title: "Event Authority",
      tag: "Product/Event Owner",
      tagColor: "#4ecdc4",
      desc: "Who owns purpose, schedule, start/end authority",
      lineImg: "line-solid.svg",
      dep: "Brief approval event plan",
    },
    {
      title: "Schedule Truth",
      tag: "Operations Team",
      tagColor: "#4ecdc4",
      desc: "Origin zone, canonical UTC instant, planned window",
      lineImg: "line-dashed.svg",
      dep: "IANA timezone data verified",
    },
    {
      title: "Audience Footprint",
      tag: "Traffic Management",
      tagColor: "#4ecdc4",
      desc: "Region groups, local-time representation, intent",
      lineImg: "line-dashed.svg",
      dep: "Audience footprint schema",
    },
    {
      title: "Source Readiness",
      tag: "CRITICAL PATH",
      tagColor: "#f59e0b",
      tagBg: "rgba(245,158,11,0.13)",
      secondTag: "A/V Production",
      desc: "Expected sources, verification, active signal",
      lineImg: "line-solid.svg",
      dep: "Telemetry validation state",
      borderColorClass: "border-[#f59e0b]",
    },
    {
      title: "Delivery Coverage",
      tag: "Infra Architect",
      tagColor: "#4ecdc4",
      desc: "Approved region/channel/surface availability",
      lineImg: "line-dashed.svg",
      dep: "CDN mapping & region rules",
    },
    {
      title: "Access",
      tag: "Security Operations",
      tagColor: "#4ecdc4",
      desc: "Identity/entitlement/policy/authorization",
      lineImg: "line-dashed.svg",
      dep: "DRM/SSO entitlement policies",
    },
    {
      title: "Accessibility & Language",
      tag: "Compliance Team",
      tagColor: "#4ecdc4",
      desc: "Captions, translation, player usability",
      lineImg: "line-solid.svg",
      dep: "WCAG/Languages checklist",
    },
    {
      title: "Operations & Continuity",
      tag: "CRITICAL PATH",
      tagColor: "#f59e0b",
      tagBg: "rgba(245,158,11,0.13)",
      secondTag: "SRE / NetOps",
      desc: "Current state, dependencies, incidents",
      lineImg: "line-dashed.svg",
      dep: "Failover path telemetry config",
      borderColorClass: "border-[#f59e0b]",
    },
    {
      title: "Replay, Evidence & Support",
      tag: "Content Operations",
      tagColor: "#4ecdc4",
      desc: "Recording, replay readiness, retention",
      lineImg: "line-dashed.svg",
      dep: "Storage residency config log",
    },
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/protocols-bg.png"
          alt="Protocols Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/80" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[48px] text-[38px] text-white tracking-[-0.5px] w-full">
          A Global Event Is an Operating Contract, Not a Globe Icon
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          Every event needs an accountable owner, one schedule truth, a known audience footprint, verified contribution, approved delivery coverage, an access posture, accessibility and language requirements, current operational state, continuity decisions, and a post-live plan.
        </p>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-full">
          {cards.slice(0, 3).map((card, idx) => (
            <div key={idx} className={`bg-[#162235] border-[1.5px] border-solid flex flex-1 flex-col gap-[16px] items-start min-w-[300px] p-[24px] relative rounded-[12px] ${card.borderColorClass || 'border-[#232b3a]'}`}>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[22px] text-white whitespace-nowrap">
                  {card.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-[8px] items-center">
                <div className="flex items-start px-[8px] py-[4px] rounded-[4px]" style={{ backgroundColor: card.tagBg || 'rgba(78,205,196,0.12)' }}>
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: card.tagColor }}>
                    {card.tag}
                  </span>
                </div>
                {card.secondTag && (
                  <div className="bg-[rgba(78,205,196,0.12)] flex items-start px-[8px] py-[4px] rounded-[4px]">
                    <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                      {card.secondTag}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-['Inter'] font-normal leading-[22px] text-[#aab3c4] text-[14px]">
                {card.desc}
              </p>
              <div className="h-px relative w-full shrink-0 my-2">
                <Image
                  src={`/images/global-event-streaming/${card.lineImg}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full whitespace-nowrap">
                <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[10px] tracking-[0.5px] uppercase">
                  EVIDENCE DEPENDENCY
                </span>
                <span className="font-['Inter'] font-normal leading-[22px] text-[12px] text-white">
                  {card.dep}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-full">
          {cards.slice(3, 6).map((card, idx) => (
            <div key={idx} className={`bg-[#162235] border-[1.5px] border-solid flex flex-1 flex-col gap-[16px] items-start min-w-[300px] p-[24px] relative rounded-[12px] ${card.borderColorClass || 'border-[#232b3a]'}`}>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[22px] text-white whitespace-nowrap">
                  {card.title}
                </h3>
                {card.tag === "CRITICAL PATH" && (
                   <div className="flex items-start px-[6px] py-[2px] rounded-[4px]" style={{ backgroundColor: card.tagBg }}>
                     <span className="font-['Space_Grotesk'] font-medium leading-normal text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: card.tagColor }}>
                       {card.tag}
                     </span>
                   </div>
                )}
              </div>
              {card.tag !== "CRITICAL PATH" && (
                <div className="bg-[rgba(78,205,196,0.12)] flex items-start px-[8px] py-[4px] rounded-[4px]">
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                    {card.tag}
                  </span>
                </div>
              )}
              {card.secondTag && (
                <div className="bg-[rgba(78,205,196,0.12)] flex items-start px-[8px] py-[4px] rounded-[4px]">
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                    {card.secondTag}
                  </span>
                </div>
              )}
              <p className="font-['Inter'] font-normal leading-[22px] text-[#aab3c4] text-[14px]">
                {card.desc}
              </p>
              <div className="h-px relative w-full shrink-0 my-2">
                <Image
                  src={`/images/global-event-streaming/${card.lineImg}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full whitespace-nowrap">
                <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[10px] tracking-[0.5px] uppercase">
                  EVIDENCE DEPENDENCY
                </span>
                <span className="font-['Inter'] font-normal leading-[22px] text-[12px] text-white">
                  {card.dep}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-full">
          {cards.slice(6, 9).map((card, idx) => (
            <div key={idx} className={`bg-[#162235] border-[1.5px] border-solid flex flex-1 flex-col gap-[16px] items-start min-w-[300px] p-[24px] relative rounded-[12px] ${card.borderColorClass || 'border-[#232b3a]'}`}>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-['Space_Grotesk'] font-bold leading-[28px] text-[22px] text-white whitespace-nowrap">
                  {card.title}
                </h3>
                {card.tag === "CRITICAL PATH" && (
                   <div className="flex items-start px-[6px] py-[2px] rounded-[4px]" style={{ backgroundColor: card.tagBg }}>
                     <span className="font-['Space_Grotesk'] font-medium leading-normal text-[10px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ color: card.tagColor }}>
                       {card.tag}
                     </span>
                   </div>
                )}
              </div>
              {card.tag !== "CRITICAL PATH" && (
                <div className="bg-[rgba(78,205,196,0.12)] flex items-start px-[8px] py-[4px] rounded-[4px]">
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                    {card.tag}
                  </span>
                </div>
              )}
              {card.secondTag && (
                <div className="bg-[rgba(78,205,196,0.12)] flex items-start px-[8px] py-[4px] rounded-[4px]">
                  <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#4ecdc4] text-[10px] tracking-[0.5px] uppercase whitespace-nowrap">
                    {card.secondTag}
                  </span>
                </div>
              )}
              <p className="font-['Inter'] font-normal leading-[22px] text-[#aab3c4] text-[14px]">
                {card.desc}
              </p>
              <div className="h-px relative w-full shrink-0 my-2">
                <Image
                  src={`/images/global-event-streaming/${card.lineImg}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start w-full whitespace-nowrap">
                <span className="font-['Space_Grotesk'] font-medium leading-normal text-[#aab3c4] text-[10px] tracking-[0.5px] uppercase">
                  EVIDENCE DEPENDENCY
                </span>
                <span className="font-['Inter'] font-normal leading-[22px] text-[12px] text-white">
                  {card.dep}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-center w-full mt-[24px] z-10">
        <Link
          href="/plan-a-live-event"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
        >
          <span className="font-['Inter'] font-bold leading-[22px] text-[#0a0d14] text-[14px] whitespace-nowrap">
            Open Event Brief Example
          </span>
        </Link>
      </div>
    </section>
  );
}
