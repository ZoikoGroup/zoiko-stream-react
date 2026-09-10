import Image from "next/image"

export const SubprocessorsHero = () => {
  return (
    <section className="relative w-full bg-[#0A0D13] overflow-hidden py-24 md:py-32 flex items-center min-h-[700px] border-b border-[#232B3A]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0D13]/75 z-10"></div>
        <Image 
          src="/images/subprocessors/hero-bg.png" 
          alt="Hero Background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-6">
              <div className="px-4 py-1.5 rounded-full border border-[#00D4AA] flex items-center gap-2">
                <span className="text-[#00D4AA] text-[11px] font-bold tracking-widest uppercase">
                  Subprocessors
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#EEF1F6] leading-[1.15] tracking-tight">
                Review Current Approved Subprocessors and Published Changes
              </h1>
              
              <p className="text-[#AAB3C4] text-lg leading-relaxed max-w-xl">
                Use this page to inspect source-approved ZoikoStream subprocessor records and published registry changes. Each visible record states only approved legal identity, relationship classification, processing purpose, service scope, processing location, current state and source context.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3.5 rounded-[10px] bg-gradient-to-b from-[#00D4AA] to-[#4C86FF] text-[#0A0D13] font-bold text-[15px] hover:opacity-90 transition-opacity">
                View Current Subprocessors
              </button>
              <button className="px-6 py-3.5 rounded-[10px] border border-[#AAB3C4] text-[#EEF1F6] font-medium text-[15px] hover:bg-white/5 transition-colors">
                Review Recent Changes
              </button>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="w-full max-w-md mx-auto lg:ml-auto rounded-2xl bg-[#10151E]/80 backdrop-blur-md border border-[#232B3A] p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D4AA] shadow-[0_0_8px_#00D4AA]"></div>
                <span className="text-[#EEF1F6] font-bold text-[11px] tracking-wider">REGISTRY STATUS</span>
              </div>
              <span className="text-[#00D4AA] font-normal text-[10px] tracking-wider">ACTIVE & VERIFIED</span>
            </div>

            <div className="bg-[#00D4AA]/10 rounded-lg p-4 flex flex-col gap-3 w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#EEF1F6] font-bold text-[14px]">GOVERNED TRACEABILITY</span>
                <span className="text-[#00D4AA] font-normal text-[13px]">100% SECURE</span>
              </div>
              <p className="text-[#AAB3C4] text-[13px] leading-relaxed">
                Every record is linked to validated Data Processing Addendums (DPA) and active service scopes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
