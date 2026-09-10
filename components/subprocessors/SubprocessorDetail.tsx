import Image from "next/image"
import { ArrowRight, ArrowLeft } from "lucide-react"

export const SubprocessorDetail = () => {
  return (
    <section className="relative w-full overflow-hidden py-24 bg-[#0A0D13] border-b border-[#232B3A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0D13]/75 z-10"></div>
        <Image 
          src="/images/subprocessors/detail-bg.png" 
          alt="Detail Background" 
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col gap-8">
        <h2 className="text-3xl md:text-[38px] font-bold text-[#EEF1F6] leading-[1.2]">
          Deep-Linkable Provider Record
        </h2>

        <div className="bg-[#10151E]/80 backdrop-blur-md border border-[#232B3A] rounded-2xl p-8 flex flex-col gap-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[28px] font-bold text-[#EEF1F6]">Amazon Web Services, Inc.</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[#00D4AA] font-mono font-bold text-[10px] uppercase">DISPLAY NAME: AWS</span>
                <div className="w-[1px] h-3 bg-[#232B3A]"></div>
                <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">CLASSIFICATION: Infrastructure Provider</span>
              </div>
            </div>
            
            <div className="bg-[#10B981]/10 px-3 py-1.5 rounded flex items-center">
              <span className="text-[#10B981] font-mono font-bold text-[10px] uppercase">CURRENT STATE: ACTIVE</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#232B3A]"></div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">PROCESSING PURPOSE</span>
              <p className="text-[#EEF1F6] text-[15px] leading-relaxed">
                Primary hosting database services, object storage, and core application flow delivery.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">SERVICE SCOPE</span>
              <p className="text-[#EEF1F6] text-[15px] leading-relaxed">
                ZoikoStream Master Platform Infrastructure, Live Ingest Engine, Replay Pipeline.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">PROCESSING LOCATION</span>
              <p className="text-[#EEF1F6] text-[15px] leading-relaxed">
                United States Regions (Northern Virginia, Oregon, Ohio), European Zones backup.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">EFFECTIVE / CURRENTNESS</span>
              <p className="text-[#EEF1F6] text-[15px] leading-relaxed">
                Governed under DPA effective January 1, 2026. Recertified March 2026.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">LEGAL HANDOFF</span>
              <a href="#" className="flex items-center gap-1.5 text-[#00D4AA] hover:text-[#00D4AA]/80 font-bold text-[14.5px] mt-1 transition-colors">
                View Signed DPA Addendum (PDF) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#AAB3C4] font-mono font-bold text-[10px] uppercase">CHANGE HISTORY TIMELINE</span>
              <p className="text-[#AAB3C4] text-[13px] leading-relaxed">
                • Jan 2026: Scope expanded to cover London hub egress
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#232B3A]"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
            <a href="#" className="flex items-center gap-1.5 text-[#00D4AA] hover:text-[#00D4AA]/80 font-bold text-[14.5px] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Subprocessors Registry
            </a>
            
            <div className="flex flex-wrap items-center gap-3">
              <button className="px-6 py-3.5 rounded-[10px] border border-[#4F5E74] text-[#AAB3C4] font-medium text-[15px] hover:bg-white/5 transition-colors">
                Print/Save Record
              </button>
              <button className="px-6 py-3.5 rounded-[10px] bg-[#0A0D13] text-[#0A0D13] font-bold text-[15px] overflow-hidden relative group border border-[#232B3A]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00D4AA] to-[#4C86FF] z-0"></div>
                <span className="relative z-10 text-[#0A0D13]">Deep Link to This Record</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
