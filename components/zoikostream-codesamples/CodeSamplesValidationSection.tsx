import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

export default function CodeSamplesValidationSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-24 bg-white flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={bgPattern} alt="Pattern" fill className="object-cover opacity-40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight">
              Know what was validated—and what still needs production review
            </h2>
            <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed">
              Code samples demonstrate an isolated task. They are not a production readiness claim, a complete Sample application, or a substitute for the GitHub source of record.
            </p>
          </div>

          <div className="w-full lg:w-[280px] shrink-0 p-5 rounded-xl border border-blue-500/20 bg-blue-50 flex items-start gap-3 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <p className="text-slate-600 text-sm font-['Inter'] leading-relaxed">
              Check currentness, side effects, cleanup, and authority before copying.
            </p>
          </div>
        </div>

        {/* Top 2 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Card 1 */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm">

            <Image
              src="/images/zoikostream-codesample/Evidence image (1).png"
              alt="Validation evidence illustration"
              width={560}
              height={180}
              className="w-full h-44 object-cover"
            />

            <div className="flex flex-col flex-1 p-8 gap-4 bg-white">
              <div className="flex justify-between items-center w-full">
                <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  VALIDATION EVIDENCE
                </span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  Scenario checked
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  Evidence, not endorsement
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed">
                  A passing result confirms the documented scenario and expected response only. Production architecture, scale, security, and observability remain your responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm">

            <Image
              src="/images/zoikostream-codesample/Evidence image.png"
              alt="Side-effect risk illustration"
              width={560}
              height={180}
              className="w-full h-44 object-cover"
            />

            <div className="flex flex-col flex-1 p-8 gap-4 bg-white">
              <div className="flex justify-between items-center w-full">
                <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  SIDE-EFFECT RISK
                </span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                  Risk visible
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  Copy with operational context
                </h3>
                <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed">
                  Before execution, identify created resources, billable actions, credentials, retained data, rollback steps, and the cleanup path.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2 Split Cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          
          {/* Left: Lifecycle states */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Lifecycle states
              </h3>
              <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                CHECK BEFORE USE
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-10 bg-emerald-500 rounded-full shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">Current</span>
                  <span className="text-slate-500 text-xs font-medium font-['Inter']">Reviewed and eligible to copy</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-10 bg-amber-500 rounded-full shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">Review required</span>
                  <span className="text-slate-500 text-xs font-medium font-['Inter']">Revalidate dependencies first</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-10 bg-rose-500 rounded-full shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">No copy</span>
                  <span className="text-slate-500 text-xs font-medium font-['Inter']">Historical context only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Related authorities */}
          <div className="flex-1 bg-[#0F1219] rounded-2xl p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden group">
            <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
              Related authorities
            </h3>
            <p className="text-slate-400 text-sm font-['Inter'] leading-relaxed">
              Use each destination for its intended level of authority.
            </p>

            <div className="flex flex-col gap-0 mt-2">
              <a href="#" className="flex justify-between items-center py-4 border-b border-slate-800 hover:bg-slate-800/50 -mx-4 px-4 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Code samples</span>
                  <span className="text-slate-500 text-xs font-['Inter']">Focused, copyable task guidance</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>
              <a href="#" className="flex justify-between items-center py-4 border-b border-slate-800 hover:bg-slate-800/50 -mx-4 px-4 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">Sample applications</span>
                  <span className="text-slate-500 text-xs font-['Inter']">Integrated patterns and project structure</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>
              <a href="#" className="flex justify-between items-center py-4 hover:bg-slate-800/50 -mx-4 px-4 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-200 text-sm font-bold font-['Space_Grotesk']">GitHub</span>
                  <span className="text-slate-500 text-xs font-['Inter']">Version history, issues, and source of record</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
