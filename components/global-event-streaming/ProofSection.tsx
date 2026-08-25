import Image from "next/image";

export default function ProofSection() {
  const tableData = [
    {
      source: "Primary Camera Feed",
      owner: "Production Team",
      region: "US-West",
      expected: "Active",
      verification: { text: "Verified ✓", color: "text-[#10b981]" },
      connection: { text: "Connected", color: "text-[#10b981]" },
      lastSeen: "2 min ago",
      contingency: "Backup encoder",
    },
    {
      source: "Presentation Capture",
      owner: "AV Team",
      region: "US-West",
      expected: "Active",
      verification: { text: "Verified ✓", color: "text-[#10b981]" },
      connection: { text: "Connected", color: "text-[#10b981]" },
      lastSeen: "1 min ago",
      contingency: "Screen share fallback",
    },
    {
      source: "Remote Speaker",
      owner: "Speaker Ops",
      region: "EU-West",
      expected: "Expected",
      verification: { text: "Pending", color: "text-[#f59e0b]" },
      connection: { text: "Waiting", color: "text-[#aab3c4]" },
      lastSeen: "—",
      contingency: "Local recording",
    },
  ];

  const steps = [
    { num: "1", label: "Not Configured", status: "completed" },
    { num: "2", label: "Expected", status: "completed" },
    { num: "3", label: "Connecting", status: "active" },
    { num: "4", label: "Receiving", status: "pending" },
    { num: "5", label: "Live", status: "pending", hideLine: true },
  ];

  return (
    <section className="border-[#232b3a] border-b border-t border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/proof-bg.png"
          alt="Proof Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/75" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[48px] text-[38px] text-white tracking-[-0.5px] w-full">
          Prepare the Signal Where It Starts
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          A global audience does not remove the need for a verified origin source. Track expected sources, source owner, verification, connection and recovery without assuming a protocol, encoder, venue or ingest region that is not evidenced.
        </p>
      </div>

      <div className="bg-[#162235] border border-[#232b3a] border-solid flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full z-10">
        <div className="bg-[#0a0d14] flex gap-[12px] items-start p-[12px] w-full rounded-[8px]">
          {["Source Name", "Owner", "Origin Region", "Expected Signal", "Verification", "Connection", "Last Seen", "Contingency"].map((head, i) => (
            <p key={i} className="flex-1 font-['Space_Grotesk'] font-medium text-[12px] text-white tracking-[0.5px]">
              {head}
            </p>
          ))}
        </div>
        
        {tableData.map((row, idx) => (
          <div key={idx} className={`flex gap-[12px] items-center p-[12px] w-full ${idx !== tableData.length - 1 ? 'border-b border-[#232b3a] border-solid' : ''}`}>
            <p className="flex-1 font-['Inter'] font-bold text-[14px] text-white">{row.source}</p>
            <p className="flex-1 font-['Inter'] font-normal text-[14px] text-[#aab3c4]">{row.owner}</p>
            <p className="flex-1 font-['Inter'] font-normal text-[14px] text-[#aab3c4]">{row.region}</p>
            <p className="flex-1 font-['Inter'] font-normal text-[14px] text-[#aab3c4]">{row.expected}</p>
            <p className={`flex-1 font-['Inter'] font-bold text-[14px] ${row.verification.color}`}>{row.verification.text}</p>
            <p className={`flex-1 font-['Inter'] font-bold text-[14px] ${row.connection.color}`}>{row.connection.text}</p>
            <p className="flex-1 font-['Inter'] font-normal text-[14px] text-[#aab3c4]">{row.lastSeen}</p>
            <p className="flex-1 font-['Inter'] font-normal text-[14px] text-[#aab3c4]">{row.contingency}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#162235] border border-[#232b3a] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[12px] shrink-0 w-full z-10">
        <h3 className="font-['Space_Grotesk'] font-medium text-[12px] text-[#aab3c4] tracking-[0.5px] uppercase">
          Source Readiness Steps
        </h3>
        
        <div className="flex gap-[12px] items-center w-full">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex ${!step.hideLine ? 'flex-1' : ''} gap-[12px] items-center relative`}>
              <div className="flex flex-1 flex-col gap-[8px] items-center relative">
                <div className={`flex items-center justify-center rounded-full w-[40px] h-[40px] ${
                  step.status === 'completed' ? 'bg-[#4ecdc4] border-2 border-[#232b3a]' :
                  step.status === 'active' ? 'bg-[#0a0d14] border-2 border-[#4ecdc4]' :
                  'bg-[#0a0d14] border-2 border-[#232b3a]'
                }`}>
                  <span className={`font-['Space_Grotesk'] font-medium text-[12px] tracking-[0.5px] ${
                    step.status === 'completed' ? 'text-[#0a0d14]' : 'text-white'
                  }`}>
                    {step.num}
                  </span>
                </div>
                <span className="font-['Inter'] font-bold text-[12px] text-white">
                  {step.label}
                </span>
              </div>
              {!step.hideLine && (
                <div className={`flex-1 h-[2px] ${step.status === 'completed' ? 'bg-[#4ecdc4]' : 'bg-[#232b3a]'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
