import Image from "next/image";
import Link from "next/link";

export default function ProductionControlSection() {
  const checklist = [
    { label: "Source Stream Connect", status: "Ready ✓", color: "text-[#10b981]" },
    { label: "Multilingual Captions Ingest", status: "Ready ✓", color: "text-[#10b981]" },
    { label: "Audience Access Policy", status: "Verified ✓", color: "text-[#10b981]" },
    { label: "Global Coverage Regions", status: "3/3 Regions Ready ✓", color: "text-[#10b981]" },
    { label: "Archival Recording System", status: "Armed ✓", color: "text-[#10b981]" },
  ];

  const changeLog = [
    { time: "13:45:12 UTC", type: "Plan Schedule Change", by: "M. Mercer", approved: "J. Vance", reason: "Speaker availability delayed by 15 mins" },
    { time: "13:58:04 UTC", type: "Pre-Live Hold Request", by: "A. Patel", approved: "J. Vance", reason: "Audio buffer latency validation spike" },
    { time: "14:10:00 UTC", type: "Hold Release", by: "A. Patel", approved: "Events Dir", reason: "Latency returned to acceptable <200ms" },
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Backgrounds */}
      <Image
        src="/images/global-event-streaming/describe-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover pointer-events-none z-0"
      />
      <div className="absolute bottom-[-258px] right-[-120px] w-[520px] h-[520px] z-0">
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
          Go Live From an Approved Plan, Not an Assumption
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          The event clock, start authority, program state, schedule change, hold, end and emergency decisions must have named owners and auditable state. Managed production is not implied unless that operating model is selected and scoped.
        </p>
      </div>

      <div className="flex gap-[32px] items-start relative shrink-0 w-full z-10">
        {/* Left Panel: Run-State Monitor */}
        <div className="bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid flex flex-col gap-[24px] items-start p-[32px] rounded-[16px] shrink-0 w-[480px]">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[20px] whitespace-nowrap">
              Run-State Monitor
            </h3>
            <div className="bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.2)] border-solid flex items-start px-[12px] py-[4px] rounded-[4px]">
              <span className="font-['IBM_Plex_Mono'] font-bold leading-normal text-[#f59e0b] text-[11px] whitespace-nowrap">
                WAITING
              </span>
            </div>
          </div>

          <div className="h-px relative w-full shrink-0">
            <Image
              src="/images/global-event-streaming/line-solid-3.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#10151e] flex flex-col gap-[8px] items-start p-[20px] rounded-[12px] w-full whitespace-nowrap">
            <span className="font-['Inter'] font-semibold text-[#aab3c4] text-[12px]">
              ELAPSED EVENT CLOCK
            </span>
            <span className="font-['Space_Grotesk'] font-bold text-[#4ecdc4] text-[36px]">
              01:23:45
            </span>
          </div>

          <div className="flex flex-col gap-[14px] items-start w-full whitespace-nowrap">
            <h4 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] tracking-[0.5px] uppercase">
              Pre-Live Readiness Checklist
            </h4>
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between w-full">
                <span className="font-['Inter'] font-normal text-[#4f5e74] text-[14px]">
                  {item.label}
                </span>
                <span className={`font-['Inter'] font-semibold text-[14px] ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="h-px relative w-full shrink-0">
            <Image
              src="/images/global-event-streaming/line-solid-3.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-start justify-between w-full whitespace-nowrap">
            <div className="flex flex-col gap-[4px] items-start">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[11px]">
                START AUTHORITY
              </span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[15px]">
                Events Director
              </span>
            </div>
            <div className="flex flex-col gap-[4px] items-start">
              <span className="font-['Inter'] font-normal text-[#4f5e74] text-[11px]">
                SCHEDULED START
              </span>
              <span className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[15px]">
                14:00 UTC
              </span>
            </div>
          </div>
        </div>

        {/* Right Panel: Operation Change Log */}
        <div className="bg-white border-[#e2e8f0] border-[1.5px] border-solid flex flex-1 flex-col gap-[24px] items-start p-[32px] rounded-[16px] self-stretch">
          <div className="flex flex-col gap-[8px] items-start whitespace-nowrap">
            <h3 className="font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[20px]">
              Auditable Release Change Log
            </h3>
            <p className="font-['Inter'] font-normal text-[#4f5e74] text-[14px]">
              All modifications to operational plans, holds, or live state must be logged.
            </p>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="bg-[#f8fafc] flex gap-[12px] items-start p-[12px] w-full">
              {["Timestamp", "Change Type", "Requested By", "Approved By", "Reason"].map((head, i) => (
                <span key={i} className={`font-['Space_Grotesk'] font-bold text-[#0f1b2d] text-[12px] ${i === 4 ? 'flex-1' : i === 1 ? 'w-[140px]' : 'w-[120px]'}`}>
                  {head}
                </span>
              ))}
            </div>
            
            {changeLog.map((row, idx) => (
              <div key={idx} className="border-[#e2e8f0] border-b border-solid flex gap-[12px] items-center p-[12px] w-full">
                <span className="font-['Inter'] font-normal text-[#0f1b2d] text-[13px] w-[120px]">
                  {row.time}
                </span>
                <span className="font-['Inter'] font-semibold text-[#0f1b2d] text-[13px] w-[140px]">
                  {row.type}
                </span>
                <span className="font-['Inter'] font-normal text-[#4f5e74] text-[13px] w-[120px]">
                  {row.by}
                </span>
                <span className="font-['Inter'] font-normal text-[#4f5e74] text-[13px] w-[120px]">
                  {row.approved}
                </span>
                <span className="flex-1 font-['Inter'] font-normal text-[#4f5e74] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {row.reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center w-full justify-start z-10">
        <Link
          href="/platform-media-operations-overview"
          className="border border-[#4f5e74] border-solid flex items-center justify-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-[#0f1b2d]/5"
        >
          <span className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[15px] whitespace-nowrap">
            Plan Managed Operation
          </span>
        </Link>
      </div>
    </section>
  );
}
