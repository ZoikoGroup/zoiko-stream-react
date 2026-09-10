export const SubprocessorChanges = () => {
  const changes = [
    { date: "March 1, 2026", type: "SCOPE CHANGE", provider: "Amazon Web Services, Inc.", detail: "Added US-West-2 Oregon region storage and replication fallback.", context: "Master Platform DPA" },
    { date: "Feb 14, 2026", type: "LEGAL RENAME", provider: "Twilio, Inc. (formerly Twilio Corp)", detail: "Official legal entity name updated in primary compliance database.", context: "Legal Handshake" },
    { date: "Jan 10, 2026", type: "ADD PROVIDER", provider: "Datadog, Inc.", detail: "Successfully integrated and approved for system diagnostics monitoring.", context: "DPA Active" },
    { date: "Dec 18, 2025", type: "LOCATION CHANGE", provider: "Google LLC", detail: "Added European Anycast CDN edge gateways for multi-track stream compliance.", context: "GDPR Bound" },
    { date: "Oct 05, 2025", type: "CORRECTION", provider: "Stripe, Inc.", detail: "Corrected billing API service address location mapping.", context: "Operational Update" },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
      {/* Decorative Blur Orbs */}
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#4A8CFB]/10 blur-[55px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col gap-4 max-w-4xl mb-14">
          <h2 className="text-4xl md:text-[38px] font-bold text-[#0A0D13] leading-[1.2]">
            Registry Change History and Version Lineage
          </h2>
          <p className="text-[#4F5E74] text-lg leading-[1.6]">
            Every material change to the subprocessor registry is recorded as an append-only event. Corrections are explicitly labeled. Historical provider records are preserved for traceability.
          </p>
        </div>

        <div className="flex flex-col rounded-xl border border-[#E2E8F0] overflow-x-auto bg-white shadow-sm">
          <div className="flex items-center min-w-[1000px] px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="w-[140px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase">DATE</div>
            <div className="w-[160px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase">EVENT TYPE</div>
            <div className="w-[240px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase">AFFECTED PROVIDER</div>
            <div className="flex-1 text-[#4F5E74] font-mono font-bold text-[10px] uppercase">CHANGE DETAILS</div>
            <div className="w-[150px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase text-right">EFFECTIVE CONTEXT</div>
          </div>

          <div className="flex flex-col min-w-[1000px]">
            {changes.map((c, i) => (
              <div key={i} className="flex items-center px-6 py-5 border-b border-[#E2E8F0] hover:bg-[#F8FAFC]/50 transition-colors">
                <div className="w-[140px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase">{c.date}</div>
                <div className="w-[160px]">
                  <span className="bg-[#232B3A]/5 text-[#00D4AA] px-2 py-1 rounded text-[9px] font-bold font-mono border border-[#00D4AA]/20 uppercase">
                    {c.type}
                  </span>
                </div>
                <div className="w-[240px] text-[#0A0D13] font-bold text-[14px] pr-4">{c.provider}</div>
                <div className="flex-1 text-[#4F5E74] text-[13px] pr-4 leading-relaxed">{c.detail}</div>
                <div className="w-[150px] text-[#4F5E74] font-mono font-bold text-[10px] uppercase text-right">{c.context}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-5 bg-[#F8FAFC]">
            <p className="text-[#4F5E74] text-[14px]">
              *For older archival snapshots from 2024 and prior, please contact our legal security desk.
            </p>
            <button className="px-6 py-3.5 rounded-[10px] border border-[#4F5E74] text-[#0A0D13] font-medium text-[15px] hover:bg-black/5 transition-colors mt-4 md:mt-0">
              Export Historical Audit Ledger (CSV)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
