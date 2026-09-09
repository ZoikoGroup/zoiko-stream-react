import { FileText, Eye, Shield, Settings, Activity, MapPin, RefreshCw, Calendar } from "lucide-react"

export const SubprocessorFieldGuide = () => {
  const fields = [
    { icon: FileText, title: "Legal Entity", desc: "The exact approved business entity name disclosed in the legal registry, eliminating any ambiguity." },
    { icon: Eye, title: "Display Name", desc: "The approved public-facing brand, trademark, or marketing label associated with the subprocessor." },
    { icon: Shield, title: "Relationship Classification", desc: "The approved legal and privacy status (e.g., Infrastructure, Telecommunications, Processing Vendor)." },
    { icon: Settings, title: "Processing Purpose", desc: "An approved, audited description explaining specifically why processing exists within our flow." },
    { icon: Activity, title: "Service Scope", desc: "The specific ZoikoStream services or product modules that incorporate this subprocessor's delivery." },
    { icon: MapPin, title: "Processing Location", desc: "The approved geography, region, or explicit data center location where your payload or logs exist." },
    { icon: RefreshCw, title: "Transfer Context", desc: "Separate source reference identifying international transfer mechanisms like DPA, SCCs, or BCRs." },
    { icon: Calendar, title: "State/Effective Date", desc: "The lifecycle stage and precise date on which this subprocessor was approved and integrated." },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-[#4A8CFB]/5 blur-[55px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col gap-4 max-w-3xl mb-14">
          <h2 className="text-4xl md:text-[38px] font-bold text-[#0A0D13] leading-[1.2]">
            Understanding Registry Fields
          </h2>
          <p className="text-[#4F5E74] text-lg leading-[1.6]">
            Each field in the subprocessor registry carries specific legal and operational meaning. This guide helps distinguish legal entity from trade name, relationship classification from vendor category, and processing purpose from marketing copy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {fields.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#4A8CFB]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#4A8CFB]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0A0D13] font-bold text-xl">{f.title}</h3>
                  <p className="text-[#4F5E74] text-[13px] leading-[1.6]">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
