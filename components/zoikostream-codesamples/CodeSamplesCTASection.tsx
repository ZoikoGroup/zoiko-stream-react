import React from 'react';
import Image from 'next/image';
import { ArrowRight, Book, MonitorPlay, CheckCircle } from 'lucide-react';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

export default function CodeSamplesCTASection() {
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
              Move from a sample to an informed implementation
            </h2>
            <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
              Start with technical authorities, validate lifecycle and side effects, then contact ZoikoStream when your production requirements are defined.
            </p>
          </div>

          <button className="h-12 px-6 bg-[#3B82F6] hover:bg-blue-600 rounded text-white text-sm font-bold font-['Space_Grotesk'] whitespace-nowrap transition-colors flex items-center gap-2 shadow-sm shrink-0">
            Talk to an engineer <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Card 1 */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                BUILD
              </span>
              <Book className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Read the API reference
              </h3>
              <p className="text-slate-500 text-[13px] font-normal font-['Inter'] leading-relaxed">
                Confirm request fields, response shapes, authentication, and endpoint behavior before adapting a sample.
              </p>
            </div>
            <a href="#" className="text-slate-900 text-[13px] font-bold font-['Space_Grotesk'] flex items-center gap-1.5 hover:text-blue-600 transition-colors mt-4">
              Open API reference <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                VALIDATE
              </span>
              <MonitorPlay className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Review sample applications
              </h3>
              <p className="text-slate-500 text-[13px] font-normal font-['Inter'] leading-relaxed">
                Use maintained applications to understand end-to-end flows that a focused code sample does not demonstrate.
              </p>
            </div>
            <a href="#" className="text-slate-900 text-[13px] font-bold font-['Space_Grotesk'] flex items-center gap-1.5 hover:text-blue-600 transition-colors mt-4">
              Explore sample applications <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-blue-500 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest">
                VERIFY
              </span>
              <CheckCircle className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                Check release authority
              </h3>
              <p className="text-slate-500 text-[13px] font-normal font-['Inter'] leading-relaxed">
                Consult Documentation and Changelog for current product behavior. GitHub availability remains a separate gate.
              </p>
            </div>
            <a href="#" className="text-slate-900 text-[13px] font-bold font-['Space_Grotesk'] flex items-center gap-1.5 hover:text-blue-600 transition-colors mt-4">
              Visit Documentation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
