import Image from "next/image";

export default function RecordingReplaySection() {
  const checklist = [
    { label: "Recording State", status: "COMPLETE", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" },
    { label: "Processing", status: "IN PROGRESS", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/25", color: "text-[#f59e0b]" },
    { label: "Access Inheritance", status: "UNDER REVIEW", bg: "bg-[#9ca3af]/10", border: "border-[#9ca3af]/25", color: "text-[#9ca3af]" },
    { label: "Caption/Track Readiness", status: "CAPTIONS READY", bg: "bg-[#10b981]/10", border: "border-[#10b981]/25", color: "text-[#10b981]" },
    { label: "Metadata Schema", status: "DRAFT", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/25", color: "text-[#f59e0b]" },
    { label: "Retention Policy", status: "90-DAY REVIEW", bg: "bg-[#9ca3af]/10", border: "border-[#9ca3af]/25", color: "text-[#9ca3af]" },
  ];

  const windows = [
    { region: "US East", replay: "18:00 EDT", access: "Public", accessColor: "text-[#10b981]", tracks: "EN, ES, FR" },
    { region: "EU Central", replay: "23:00 CEST", access: "SSO Only", accessColor: "text-[#f59e0b]", tracks: "EN, DE, IT" },
    { region: "APAC South", replay: "+1 Day 08:30", access: "Restricted", accessColor: "text-[#ef4444]", tracks: "EN, JP, ZH" },
  ];

  const timeline = [
    { num: "1", title: "Not Planned / Capture Phase", bg: "bg-[#e2e8f0]", color: "text-[#4f5e74]", titleColor: "text-[#4f5e74]" },
    { num: "2", title: "Pending / Ingest Pipeline", bg: "bg-[#fef3c7]", color: "text-[#f59e0b]", titleColor: "text-[#0f1b2d]", bold: true },
    { num: "3", title: "Needs Review / Compliance Gate", bg: "bg-[#e2e8f0]", color: "text-[#4f5e74]", titleColor: "text-[#4f5e74]" },
    { num: "4", title: "Published / Global CDN active", bg: "bg-[#4ecdc4]", color: "text-[#0a0f1a]", titleColor: "text-[#4f5e74]" },
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#f8fafc]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.8]">
        <Image
          src="/images/global-event-streaming/recording-replay-bg.png"
          alt="Recording Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[-252px] right-[-120px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-188px] top-[-138px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#0f1b2d] text-[44px] tracking-[-1px] w-full">
          The Live Event Ends. Global Access Decisions Continue.
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          Capture completion does not automatically create public replay. A replay becomes available only after readiness, access, accessibility/language, metadata, retention and incident-review decisions are resolved.
        </p>
      </div>

      <div className="flex gap-[32px] items-stretch relative shrink-0 w-full z-10">
        {/* Checklist Card */}
        <div className="bg-white border border-[#e2e8f0] border-solid flex flex-1 flex-col gap-[20px] items-start p-[28px] rounded-[12px] shadow-sm">
          <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[20px] whitespace-nowrap">
            Readiness Checklist
          </h3>
          <div className="flex flex-col gap-[12px] items-start w-full">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex gap-[8px] items-center w-full">
                <div className={`${item.bg} border ${item.border} border-solid flex items-start px-[12px] py-[4px] rounded-[4px] min-w-[120px] justify-center`}>
                  <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] uppercase whitespace-nowrap ${item.color}`}>
                    {item.status}
                  </span>
                </div>
                <span className="font-['Inter'] font-normal text-[#0f1b2d] text-[14px] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Windows Card */}
        <div className="bg-white border border-[#e2e8f0] border-solid flex flex-1 flex-col gap-[20px] items-start p-[28px] rounded-[12px] shadow-sm">
          <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[20px] whitespace-nowrap">
            Audience Access Windows
          </h3>
          <p className="font-['Inter'] font-normal text-[#4f5e74] text-[14px]">
            Replay available 4 hours after event end in authorized regions. Local replay windows respect original access policy.
          </p>
          <div className="flex flex-col gap-[8px] items-start w-full mt-[10px]">
            <div className="border-[#e2e8f0] border-b border-solid flex gap-[12px] items-start pb-[8px] w-full">
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#4f5e74] text-[12px]">Region</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#4f5e74] text-[12px]">Replay (Local)</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#4f5e74] text-[12px]">Access</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[#4f5e74] text-[12px]">Tracks</span>
            </div>
            {windows.map((win, idx) => (
              <div key={idx} className="flex gap-[12px] items-center w-full py-[4px]">
                <span className="flex-1 font-['Inter'] font-semibold text-[#0f1b2d] text-[13px]">{win.region}</span>
                <span className="flex-1 font-['Inter'] font-normal text-[#0f1b2d] text-[13px]">{win.replay}</span>
                <span className={`flex-1 font-['Inter'] font-normal text-[13px] ${win.accessColor}`}>{win.access}</span>
                <span className="flex-1 font-['Inter'] font-normal text-[#4f5e74] text-[13px]">{win.tracks}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Card */}
        <div className="bg-white border border-[#e2e8f0] border-solid flex flex-1 flex-col gap-[20px] items-start p-[28px] rounded-[12px] shadow-sm">
          <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[20px] whitespace-nowrap">
            Publication Life Cycle
          </h3>
          <div className="flex flex-col gap-[24px] items-start w-full">
            {timeline.map((step, idx) => (
              <div key={idx} className="flex gap-[12px] items-center w-full">
                <div className={`${step.bg} flex items-center justify-center rounded-[12px] size-[24px] shrink-0`}>
                  <span className={`font-['Space_Grotesk'] font-bold text-[12px] ${step.color}`}>
                    {step.num}
                  </span>
                </div>
                <span className={`font-['Inter'] ${step.bold ? 'font-semibold' : 'font-normal'} text-[14px] whitespace-nowrap ${step.titleColor}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
