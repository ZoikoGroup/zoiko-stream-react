import Image from "next/image";
import Link from "next/link";

export default function EvidenceTrustSection() {
  const cards = [
    { title: "Security & Trust", status: "CURRENT", statusBg: "bg-[#10b981]/10", statusBorder: "border-[#10b981]/25", statusColor: "text-[#10b981]", desc: "Verified Aug 2026 · Encryption, access control, regular third party audits.", image: "/images/global-event-streaming/ev-card-1.png" },
    { title: "Accessibility", status: "CURRENT", statusBg: "bg-[#10b981]/10", statusBorder: "border-[#10b981]/25", statusColor: "text-[#10b981]", desc: "Verified Jul 2026 · WCAG 2.2 AA compliant player controls and auto-captions.", image: "/images/global-event-streaming/ev-card-2.png" },
    { title: "Coverage & Delivery", status: "CURRENT", statusBg: "bg-[#10b981]/10", statusBorder: "border-[#10b981]/25", statusColor: "text-[#10b981]", desc: "Verified Aug 2026 · Approved regions, cross-CDN routing, explicit latency SLA.", image: "/images/global-event-streaming/ev-card-3.png" },
    { title: "Resilience & Continuity", status: "REQUIRES REVIEW", statusBg: "bg-[#f59e0b]/10", statusBorder: "border-[#f59e0b]/25", statusColor: "text-[#f59e0b]", desc: "Last Tested Jun 2026 · Dependency mapping, recovery playbook validation.", image: "/images/global-event-streaming/ev-card-4.png" },
    { title: "Recording & Replay", status: "CURRENT", statusBg: "bg-[#10b981]/10", statusBorder: "border-[#10b981]/25", statusColor: "text-[#10b981]", desc: "Verified Aug 2026 · Live capture archiving, post-live transcode, metadata injection.", image: "/images/global-event-streaming/ev-card-5.png" },
    { title: "Analytics & Privacy", status: "CURRENT", statusBg: "bg-[#10b981]/10", statusBorder: "border-[#10b981]/25", statusColor: "text-[#10b981]", desc: "Verified Jul 2026 · Aggregate metrics policy, zero-profiling compliance logic.", image: "/images/global-event-streaming/ev-card-6.png" }
  ];

  const models = [
    { title: "Developer-Led", desc: "Build directly using our robust API, complete guides, developer playgrounds, and open SDKs.", cta: "Start Building Now" },
    { title: "Organization-Operated", desc: "Enforce global governance, set custom multi-tenant workflows, and sync identity protocols.", cta: "Talk to an Enterprise Expert" },
    { title: "Professionally Managed", desc: "Leverage our on-site live production team, rehearsal monitoring, and dedicated operational control.", cta: "Plan a Live Event" }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/evidence-bg.png"
          alt="Evidence Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[-19px] right-[-120px] w-[520px] h-[520px] z-0">
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
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#0f1b2d] text-[44px] tracking-[-1px] w-full">
          Verify the Event Path Before You Commit to It
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          Security, accessibility, region/channel availability, resilience, support and operational claims must resolve to current scoped evidence. Existing customers always retain direct incident and support paths.
        </p>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10">
        {/* Row 1 */}
        <div className="flex gap-[24px] items-start w-full">
          {cards.slice(0, 3).map((card, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-1 flex-col items-start overflow-hidden rounded-[12px]">
              <div className="h-[160px] relative w-full shrink-0">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[10px] items-start p-[20px] w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[16px] whitespace-nowrap">
                    {card.title}
                  </span>
                  <div className={`${card.statusBg} border ${card.statusBorder} border-solid flex items-start px-[12px] py-[4px] rounded-[4px]`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] uppercase whitespace-nowrap ${card.statusColor}`}>
                      {card.status}
                    </span>
                  </div>
                </div>
                <p className="font-['Inter'] font-normal text-[#4f5e74] text-[13px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-[24px] items-start w-full">
          {cards.slice(3, 6).map((card, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-1 flex-col items-start overflow-hidden rounded-[12px]">
              <div className="h-[160px] relative w-full shrink-0">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[10px] items-start p-[20px] w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[16px] whitespace-nowrap">
                    {card.title}
                  </span>
                  <div className={`${card.statusBg} border ${card.statusBorder} border-solid flex items-start px-[12px] py-[4px] rounded-[4px]`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] uppercase whitespace-nowrap ${card.statusColor}`}>
                      {card.status}
                    </span>
                  </div>
                </div>
                <p className="font-['Inter'] font-normal text-[#4f5e74] text-[13px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10 mt-[20px]">
        <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[24px]">
          Choose Your Operating Model Path
        </h3>
        <div className="flex gap-[20px] items-start w-full">
          {models.map((model, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-1 flex-col gap-[24px] h-[239px] justify-between items-start p-[32px] rounded-[12px]">
              <div className="flex flex-col gap-[12px] items-start w-full">
                <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[20px] whitespace-nowrap">
                  {model.title}
                </span>
                <p className="font-['Inter'] font-normal leading-[22px] text-[#4f5e74] text-[14px]">
                  {model.desc}
                </p>
              </div>
              <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center px-[28px] py-[14px] rounded-[8px] w-auto transition-opacity hover:opacity-90">
                <span className="font-['Space_Grotesk'] font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
                  {model.cta}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
