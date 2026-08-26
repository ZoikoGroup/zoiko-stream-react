import Image from "next/image";
import Link from "next/link";

export default function CoverageTruthSection() {
  const tableData = [
    {
      region: "North America",
      time: "10:00 AM – 2:00 PM PDT",
      status: "VERIFIED ✓",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      statusBorder: "border-[#10b981]/20",
      surfaces: "Web Player, Mobile App",
      access: "Public",
      accessibility: "Ready",
      owner: "Platform Team",
      lastVerified: "Aug 2026",
      reviewBy: "Oct 2026",
    },
    {
      region: "Europe (West)",
      time: "6:00 PM – 10:00 PM BST",
      status: "VERIFIED ✓",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      statusBorder: "border-[#10b981]/20",
      surfaces: "Web Player, Embed",
      access: "Public",
      accessibility: "Ready",
      owner: "Platform Team",
      lastVerified: "Aug 2026",
      reviewBy: "Oct 2026",
    },
    {
      region: "Asia-Pacific",
      time: "2:00 AM – 6:00 AM JST+1",
      status: "AVAILABLE",
      statusColor: "text-[#4a8cfb]",
      statusBg: "bg-[#4a8cfb]/10",
      statusBorder: "border-[#4a8cfb]/20",
      surfaces: "Web Player",
      access: "Public",
      accessibility: "Partial",
      owner: "Platform Team",
      lastVerified: "Jul 2026",
      reviewBy: "Sep 2026",
    },
    {
      region: "Latin America",
      time: "12:00 PM – 4:00 PM BRT",
      status: "REQUIRES REVIEW",
      statusColor: "text-[#f59e0b]",
      statusBg: "bg-[#f59e0b]/10",
      statusBorder: "border-[#f59e0b]/20",
      surfaces: "Web Player",
      access: "Public",
      accessibility: "Not Evaluated",
      owner: "—",
      lastVerified: "—",
      reviewBy: "—",
    },
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/coverage-truth-bg.png"
          alt="Coverage Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/80" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[44px] text-white tracking-[-1px] w-full">
          Global Means the Footprint You Can Verify
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          Define where audiences need to watch, which approved viewing surfaces apply, what coverage evidence exists, and what remains to be validated before the event.
        </p>
      </div>

      <div className="bg-[#10151e]/85 border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full z-10">
        <div className="bg-[#141b2d] flex gap-[12px] items-start p-[12px] w-full">
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[180px]">Audience Region Group</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[160px]">Local Event Time</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[120px]">Delivery State</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[180px]">Viewing Surfaces</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[120px]">Access Posture</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[140px]">Accessibility Ready</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[120px]">Evidence Owner</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[100px]">Last Verified</p>
          <p className="font-['Space_Grotesk'] font-bold text-[13px] text-white w-[150px]">Review By</p>
        </div>
        
        {tableData.map((row, idx) => (
          <div key={idx} className={`flex gap-[12px] items-center p-[12px] w-full ${idx !== tableData.length - 1 ? 'border-b border-[#232b3a] border-solid' : ''}`}>
            <p className="font-['Inter'] font-semibold text-[13px] text-white w-[180px]">{row.region}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[160px]">{row.time}</p>
            <div className="flex items-start w-[120px]">
              <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${row.statusBg} ${row.statusBorder}`}>
                <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${row.statusColor}`}>
                  {row.status}
                </span>
              </div>
            </div>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[180px]">{row.surfaces}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[120px]">{row.access}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[140px]">{row.accessibility}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[120px]">{row.owner}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[100px]">{row.lastVerified}</p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[150px]">{row.reviewBy}</p>
          </div>
        ))}
      </div>

      <p className="font-['Inter'] font-normal text-[#aab3c4] text-[14px] w-full z-10">
        * Coverage states resolve to current scoped evidence. Unsupported geographies remain <span className="font-['Inter'] font-bold text-[#f59e0b]">Requires Review</span>.
      </p>

      <div className="flex gap-[16px] items-center w-full z-10">
        <Link
          href="/plan-a-live-event"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
        >
          <span className="font-['Space_Grotesk'] font-bold text-[#0a0d14] text-[15px] whitespace-nowrap">
            Validate a Custom Footprint
          </span>
        </Link>
        <Link
          href="/platform-media-operations-overview"
          className="border border-[#aab3c4] border-solid flex items-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-white/5"
        >
          <span className="font-['Space_Grotesk'] font-bold text-[15px] text-white whitespace-nowrap">
            Explore Global Delivery Evidence
          </span>
        </Link>
      </div>
    </section>
  );
}
