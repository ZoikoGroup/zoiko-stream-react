import { Shield, Calendar, FileText, Users } from "lucide-react"

export const SubprocessorMetadata = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#4A8CFB]/10 blur-[55px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#34D4CA]/10 blur-[45px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="flex flex-col gap-4 max-w-4xl mb-14">
          <h2 className="text-4xl md:text-[38px] font-bold text-[#0A0D13] leading-[1.2]">
            Source State and Registry Metadata
          </h2>
          <p className="text-[#4F5E74] text-lg leading-[1.6]">
            This page proves the current authorized state of subprocessors utilized by ZoikoStream. No speculative or unannounced vendor relationships are included, maintaining a strict non-invention boundary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-[#4A8CFB]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#4A8CFB]" />
              </div>
              <span className="bg-[#10B981]/10 text-[#10B981] px-2.5 py-1 rounded-full text-[10px] font-bold font-mono uppercase">
                Success
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#4F5E74] font-mono font-bold text-[10px] uppercase">Registry State</span>
              <span className="text-[#0A0D13] font-bold text-xl">Current & Verified</span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-[#4A8CFB]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#4A8CFB]" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-[#4F5E74] font-mono font-bold text-[10px] uppercase">Last Reviewed</span>
              <span className="text-[#0A0D13] font-bold text-xl">March 1, 2026</span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-[#4A8CFB]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#4A8CFB]" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-[#4F5E74] font-mono font-bold text-[10px] uppercase">Effective Context</span>
              <span className="text-[#0A0D13] font-bold text-xl">GDPR / CCPA Bound</span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-[#4A8CFB]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#4A8CFB]" />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-[#4F5E74] font-mono font-bold text-[10px] uppercase">Active Subprocessors</span>
              <span className="text-[#0A0D13] font-bold text-xl">12 Entities</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
