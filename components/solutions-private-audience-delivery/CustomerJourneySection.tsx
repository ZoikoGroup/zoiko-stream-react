import Image from 'next/image';
import { ActivityIcon, GitCommitHorizontal, NotepadText, RefreshCcw, Search, Shield, Zap } from 'lucide-react';

const journeys = [
  {icon:Search, category: 'COMPARE OPTIONS', title: 'Evaluating Private Delivery', action: 'Request evidence catalog' },
  { icon:ActivityIcon,category: 'ROI & RISK REVIEW', title: 'Building Business Case', action: 'Download case templates' },
  {icon:Shield, category: 'SECURITY DEEP DIVE', title: 'Technical Validation', action: 'Access architecture schemas' },
  { icon:NotepadText,category: 'CONTRACTING ROUTE', title: 'Procurement & Legal', action: 'View GDPR & SLA specs' },
  { icon:GitCommitHorizontal,category: 'ONBOARDING GUIDE', title: 'System Implementation', action: 'Browse migration routes' },
  { icon:Zap,category: 'TELEMETRY MONITOR', title: 'Operating & Scaling', action: 'Verify status & incident response' },
  { icon:RefreshCcw,category: 'PORTFOLIO EXPANSION', title: 'Renewal & Expansion', action: 'Renegotiate baseline scale' },
];

export function CustomerJourneySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-private-audience-delivery/bg (1).png"
          alt="Customer Journey Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Meet each visitor where they are in their decision process
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Seven distinct customer context journeys mapped to deterministic, verifiable outcomes.
          </p>
        </div>

        {/* 7 Journeys Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journeys.map((j, idx) => {
            const Icon=j.icon;
            return(
            <div
              key={idx}
              className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-5 hover:border-gray-700 transition-colors backdrop-blur-sm"
            >
              <div className="flex flex-col gap-1">
                <span className="text-teal-400 text-xs font-bold  uppercase">{j.category}</span>
                <h3 className="text-white text-lg font-bold ">{j.title}</h3>
              </div>
              <div className="w-full border-t border-gray-800 pt-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-400/10 rounded-lg border border-teal-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-teal-400 " />
                </div>
                <span className="text-slate-400 text-xs font-normal  truncate">{j.action}</span>
              </div>
            </div>
          )})}
        </div>

        {/* Workflow Assistance Banner */}
        <div className="w-full p-10 bg-slate-950 rounded-2xl border border-gray-800 flex flex-col justify-start items-center gap-6 text-center">
          <h3 className="text-white text-2xl font-bold ">
            Not sure which operational workflow matches your needs?
          </h3>
          <p className="max-w-[680px] text-slate-400 text-base font-normal ">
            Connect directly with a ZoikoStream solution architect to outline directory entitlement mappings, check verification systems, and draft compliant delivery boundaries.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
              <span className="text-gray-950 text-base font-bold ">Talk to an expert</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border-[1.5px] border-slate-400 flex justify-center items-center cursor-pointer">
              <span className="text-white text-base font-bold ">Browse all solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
