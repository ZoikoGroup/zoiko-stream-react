import Image from "next/image";
import Link from "next/link";

export default function TelemetrySection() {
  const tableData = [
    {
      dependency: "CDN Delivery Path",
      owner: "Platform Team",
      failureMode: "Regional outage",
      alternate: "Alternate path (if verified)",
      readiness: "READY", readinessBg: "bg-[#10b981]/10", readinessColor: "text-[#10b981]", readinessBorder: "border-[#10b981]/25",
      evidence: "#CDN-042",
      lastTested: "Jun 2026",
      unresolved: "None", unresolvedColor: "text-[#aab3c4]"
    },
    {
      dependency: "Primary Encoder",
      owner: "Production",
      failureMode: "Hardware failure",
      alternate: "Backup encoder",
      readiness: "READY WITH EXCEPTION", readinessBg: "bg-[#f59e0b]/10", readinessColor: "text-[#f59e0b]", readinessBorder: "border-[#f59e0b]/25",
      evidence: "#ENC-018",
      lastTested: "May 2026",
      unresolved: "Backup untested in region", unresolvedColor: "text-[#f59e0b]"
    },
    {
      dependency: "Caption Service",
      owner: "Accessibility Team",
      failureMode: "Service degradation",
      alternate: "Manual caption fallback",
      readiness: "REQUIRES REVIEW", readinessBg: "bg-[#ef4444]/10", readinessColor: "text-[#ef4444]", readinessBorder: "border-[#ef4444]/25",
      evidence: "—",
      lastTested: "Not tested",
      unresolved: "Fallback SLA undefined", unresolvedColor: "text-[#ef4444]"
    },
    {
      dependency: "Origin Ingest",
      owner: "Infrastructure",
      failureMode: "Connection loss",
      alternate: "Reconnect protocol",
      readiness: "READY", readinessBg: "bg-[#10b981]/10", readinessColor: "text-[#10b981]", readinessBorder: "border-[#10b981]/25",
      evidence: "#ING-031",
      lastTested: "Jul 2026",
      unresolved: "None", unresolvedColor: "text-[#aab3c4]"
    }
  ];

  const loopSteps = [
    { step: "01 / SENSE", title: "Detect", desc: "Automated heartbeat alerts", bg: "bg-[#141b2d]", border: "border-[#232b3a]" },
    { step: "02 / TRIAGE", title: "Assess", desc: "Determine impact scope", bg: "bg-[#141b2d]", border: "border-[#232b3a]" },
    { step: "03 / GOVERN", title: "Decide", desc: "Continue / Failover / End", bg: "bg-[#1e293b]", border: "border-[#4ecdc4]" },
    { step: "04 / COMM", title: "Communicate", desc: "Transmit status triggers", bg: "bg-[#141b2d]", border: "border-[#232b3a]" },
    { step: "05 / EXECUTE", title: "Recover", desc: "Alternative routing active", bg: "bg-[#141b2d]", border: "border-[#232b3a]" }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/resilience-bg.png"
          alt="Continuity Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/85" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#ffffff] text-[44px] tracking-[-1px] w-full">
          Continuity Starts With a Verified Plan
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          Identify dependencies, failure modes, alternate options where verified, decision owners, recovery actions and unresolved gaps. Resilience is a plan plus current evidence, not a promise of zero interruption.
        </p>
      </div>

      {/* Continuity Table */}
      <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] w-full z-10">
        <div className="bg-[#141b2d] flex gap-[12px] items-start px-[16px] py-[12px] rounded-[6px] w-full">
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[150px]">Dependency</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[110px]">Owner</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[130px]">Failure Mode</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[160px]">Alternate Option</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[110px]">Readiness</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[120px]">Evidence</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[90px]">Last Tested</span>
          <span className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[180px]">Unresolved</span>
        </div>

        <div className="flex flex-col w-full">
          {tableData.map((row, idx) => (
            <div key={idx} className={`flex gap-[12px] items-center p-[16px] w-full ${idx !== tableData.length - 1 ? 'border-b border-[#232b3a] border-solid' : ''}`}>
              <span className="font-['Space_Grotesk'] font-bold text-[14px] text-white w-[150px]">{row.dependency}</span>
              <span className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[110px]">{row.owner}</span>
              <span className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[130px]">{row.failureMode}</span>
              <span className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[160px]">{row.alternate}</span>
              <div className="flex items-start w-[110px]">
                <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${row.readinessBg} ${row.readinessBorder}`}>
                  <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] uppercase whitespace-nowrap ${row.readinessColor}`}>
                    {row.readiness}
                  </span>
                </div>
              </div>
              <span className={`font-['Space_Grotesk'] font-normal text-[13px] underline w-[120px] ${row.evidence !== '—' ? 'text-[#4ecdc4]' : 'text-[#aab3c4] no-underline'}`}>
                {row.evidence}
              </span>
              <span className={`font-['Inter'] font-normal text-[13px] w-[90px] ${row.lastTested === 'Not tested' ? 'text-[#ef4444]' : 'text-[#aab3c4]'}`}>
                {row.lastTested}
              </span>
              <span className={`font-['Inter'] font-normal text-[13px] w-[180px] ${row.unresolvedColor}`}>
                {row.unresolved}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery Decision Panel */}
      <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-col gap-[28px] items-start p-[32px] rounded-[16px] w-full z-10">
        <div className="flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-white">
            Incident Recovery Decision Loop
          </h3>
          <p className="font-['Inter'] font-normal text-[#aab3c4] text-[14px]">
            Standard sequence initiated immediately upon telemetry state breach.
          </p>
        </div>

        <div className="flex gap-[12px] items-center w-full">
          {loopSteps.map((step, idx) => (
            <div key={idx} className="flex gap-[12px] items-center flex-1">
              <div className={`${step.bg} border ${step.border} border-solid flex flex-col gap-[8px] items-start p-[16px] rounded-[8px] w-full min-h-[95px]`}>
                <span className="font-['Space_Grotesk'] font-bold text-[#4ecdc4] text-[12px]">
                  {step.step}
                </span>
                <span className="font-['Space_Grotesk'] font-bold text-[16px] text-white">
                  {step.title}
                </span>
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[12px]">
                  {step.desc}
                </span>
              </div>
              {idx !== loopSteps.length - 1 && (
                <div className="flex items-center justify-center size-[16px] shrink-0">
                  <Image src="/images/global-event-streaming/arrow-right.svg" alt="" width={16} height={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-[16px] items-start">
          <Link
            href="/event-resilience"
            className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
          >
            <span className="font-['Space_Grotesk'] font-bold text-[#0a0f1a] text-[15px] whitespace-nowrap">
              Explore Resilience Guidance
            </span>
          </Link>
          <button
            className="border border-[#aab3c4] border-solid flex items-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-white/5"
          >
            <span className="font-['Space_Grotesk'] font-bold text-[15px] text-white whitespace-nowrap">
              Download Recovery Checklists
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
