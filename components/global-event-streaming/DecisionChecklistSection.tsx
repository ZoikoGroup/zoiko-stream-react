import Image from "next/image";

export default function DecisionChecklistSection() {
  const nodes = [
    { num: "01", title: "Event time and origin zone defined", desc: "Establish target streaming windows synced with UTC/origin offsets." },
    { num: "02", title: "Audience footprint identified", desc: "Map regional viewer density to prep edge-caching and local nodes." },
    { num: "03", title: "Access posture decided", desc: "Define authentication requirements, tokens, or public entitlement layers." },
    { num: "04", title: "Accessibility & language requirements set", desc: "Coordinate live closed-captioning, audio description tracks, and translation routing." },
    { num: "05", title: "Source readiness evaluated", desc: "Run bandwidth diagnostics, encoder checks, and multi-bitrate profiles." },
    { num: "06", title: "Delivery coverage validated", desc: "Confirm global CDN peering agreements and regional network routing health." },
    { num: "07", title: "Continuity plan reviewed", desc: "Define hot-standby streams, fallback loops, and disaster recovery thresholds." },
    { num: "08", title: "Replay intent declared", desc: "Configure secure archival rules, dynamic ad insertion, and post-event hosting." },
    { num: "09", title: "Operating model selected", desc: "Choose self-serve developer control vs. ZukoStream dedicated master control operations." }
  ];

  return (
    <section className="border border-[#1a2235] border-solid flex flex-col gap-[80px] items-start px-[112px] py-[120px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/decision-bg.png"
          alt="Decision Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex items-end justify-between relative shrink-0 w-full z-10">
        <div className="flex flex-col gap-[16px] items-start w-[600px]">
          <h2 className="font-['Space_Grotesk'] font-bold leading-[52px] text-white text-[44px] tracking-[-1px] w-full">
            Decision Checklist
          </h2>
          <p className="font-['Inter'] font-normal leading-[26px] text-[#94a3b8] text-[16px] w-full">
            Ensure all parameters are fully mapped and declared before activating live pipeline orchestration layers.
          </p>
        </div>

        <div className="bg-[#111827] border border-[#1a2235] border-solid flex gap-[24px] items-start p-[20px] rounded-[12px] shrink-0">
          <div className="flex flex-col gap-[4px] items-start">
            <span className="font-['Space_Grotesk'] font-bold text-[#34d4ca] text-[20px]">
              9 NODES
            </span>
            <span className="font-['Inter'] font-normal text-[#64748b] text-[11px] uppercase">
              Evaluation Path
            </span>
          </div>
          <div className="flex h-[32px] items-center justify-center shrink-0 w-0">
            <div className="rotate-90">
              <div className="h-0 relative w-[32px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <Image src="/images/global-event-streaming/line.svg" alt="" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[4px] items-start">
            <span className="font-['Space_Grotesk'] font-bold text-white text-[20px]">
              ACTIVE
            </span>
            <span className="font-['Inter'] font-normal text-[#64748b] text-[11px] uppercase">
              Telemetry Mode
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[24px] relative shrink-0 w-full z-10">
        {nodes.map((node, idx) => (
          <div key={idx} className="bg-[#0f1626] border border-[#1e293b] border-solid flex flex-col gap-[20px] items-start p-[32px] rounded-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <span className="font-['Space_Grotesk'] font-bold text-[#34d4ca] text-[14px]">
                NODE {node.num}
              </span>
              <div className="bg-[#080c14] border-2 border-[#34d4ca] border-solid flex items-center justify-center rounded-[11px] size-[22px]">
                <div className="relative size-[10px]">
                  <Image src="/images/global-event-streaming/check-teal-2.svg" alt="" fill />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <h3 className="font-['Space_Grotesk'] font-bold leading-[24px] text-[18px] text-white">
                {node.title}
              </h3>
              <p className="font-['Inter'] font-normal leading-[20px] text-[#94a3b8] text-[13px]">
                {node.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
