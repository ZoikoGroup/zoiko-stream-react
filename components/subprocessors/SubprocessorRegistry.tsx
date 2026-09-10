import Image from "next/image"
import { Search, ChevronDown, ArrowRight } from "lucide-react"

export const SubprocessorRegistry = () => {
  const providers = [
    { legal: "Amazon Web Services, Inc.", display: "AWS", classification: "Infrastructure Provider", purpose: "Cloud hosting and infrastructure services", scope: "Core Platform", location: "United States (US-East)", state: "ACTIVE" },
    { legal: "Google LLC", display: "Google Cloud", classification: "Infrastructure Provider", purpose: "CDN and global stream distribution routing", scope: "Stream Delivery", location: "Global (Anycast)", state: "ACTIVE" },
    { legal: "Twilio, Inc.", display: "Twilio", classification: "Telecommunications", purpose: "SMS alerts & telephony listen-in bridges", scope: "Interactive", location: "United States", state: "ACTIVE" },
    { legal: "Datadog, Inc.", display: "Datadog", classification: "Monitoring Provider", purpose: "Real-time telemetry and ingest diagnostics", scope: "Diagnostics", location: "Germany (EU-Central)", state: "ACTIVE" },
    { legal: "Stripe, Inc.", display: "Stripe", classification: "Payment Processor", purpose: "Billing services and transactional workflows", scope: "Billing Integration", location: "United States", state: "ACTIVE" },
  ]

  return (
    <section className="relative w-full overflow-hidden py-24 bg-[#0A0D13] border-b border-[#232B3A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0D13]/85 z-10"></div>
        <Image 
          src="/images/subprocessors/registry-bg.png" 
          alt="Registry Background" 
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-[38px] font-bold text-[#EEF1F6] leading-[1.2]">
              Current Source-Controlled Provider Registry
            </h2>
          </div>
          <div className="flex bg-[#10151E] border border-[#232B3A] rounded-xl px-4 py-3 w-full md:w-[400px] items-center gap-3">
            <Search className="w-4 h-4 text-[#AAB3C4]" />
            <input 
              type="text" 
              placeholder="Search approved legal entities..." 
              className="bg-transparent border-none outline-none text-[#EEF1F6] text-sm w-full placeholder:text-[#AAB3C4]/60"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {["Relationship", "Service Scope", "Location", "State"].map(filter => (
            <div key={filter} className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">{filter}</span>
              <div className="bg-[#10151E] border border-[#232B3A] rounded-lg px-3 py-2.5 flex justify-between items-center cursor-pointer hover:bg-[#1A2230] transition-colors">
                <span className="text-[#EEF1F6] text-[13px]">All {filter}s</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#AAB3C4]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col rounded-xl border border-[#232B3A] bg-[#0A0D13] overflow-x-auto">
          <div className="flex items-center min-w-[1200px] px-4 py-4 bg-[#10151E] border-b border-[#232B3A]">
            <div className="w-[200px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Legal Entity</div>
            <div className="w-[120px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Display Name</div>
            <div className="w-[160px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Classification</div>
            <div className="w-[240px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Processing Purpose</div>
            <div className="w-[140px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Service Scope</div>
            <div className="w-[160px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">Location</div>
            <div className="w-[100px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">State</div>
            <div className="w-[100px] text-[#AAB3C4] font-mono font-bold text-[10px] uppercase text-right">Actions</div>
          </div>
          
          <div className="flex flex-col min-w-[1200px]">
            {providers.map((p, i) => (
              <div key={i} className="flex items-center px-4 py-4 border-b border-[#232B3A] hover:bg-[#10151E]/50 transition-colors">
                <div className="w-[200px] text-[#EEF1F6] font-bold text-[14px]">{p.legal}</div>
                <div className="w-[120px] text-[#EEF1F6] text-[14px]">{p.display}</div>
                <div className="w-[160px] text-[#AAB3C4] text-[13px]">{p.classification}</div>
                <div className="w-[240px] text-[#AAB3C4] text-[13px] pr-4">{p.purpose}</div>
                <div className="w-[140px] text-[#AAB3C4] text-[13px]">{p.scope}</div>
                <div className="w-[160px] text-[#AAB3C4] text-[13px]">{p.location}</div>
                <div className="w-[100px]">
                  <span className="bg-[#10B981]/10 text-[#10B981] px-2 py-1 rounded text-[9px] font-bold font-mono">
                    {p.state}
                  </span>
                </div>
                <div className="w-[100px] flex justify-end">
                  <button className="flex items-center gap-1.5 text-[#00D4AA] hover:text-[#00D4AA]/80 font-bold text-[13px] transition-colors">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
