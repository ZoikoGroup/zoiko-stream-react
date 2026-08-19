import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SchedulingSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Plan a one-time service or a recurring pattern
          </h2>
          <p className="text-gray-550 text-base sm:text-lg">
            Choose the workflow structure that best matches your worship scheduling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: One-time or special service */}
          <div className=" bg-black/35 group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-end p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
            {/* Background image & gradient overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-35 blur-[1px]"
              style={{ backgroundImage: "url('/images/workship-detailed/image (9).png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-sans">
                  One-time or special service
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Plan a single distinct service such as a holiday, wedding, funeral, or special concert with customized access, production, accessibility, recording, and support.
                </p>
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <span>Select path</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Recurring service */}
          <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-end p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
            {/* Background image & gradient overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-35 blur-[1px]"
              style={{ backgroundImage: "url('/images/workship-detailed/image (10).png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-sans">
                  Recurring service
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Set up a repeating pattern (e.g. weekly Sunday services). Automatically carry forward approved access, production, and support configurations, with quick change review.
                </p>
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <span>Select path</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Not sure yet */}
          <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-end p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300">
            {/* Background image & gradient overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-35 blur-[1px]"
              style={{ backgroundImage: "url('/images/workship-detailed/image (11).png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold font-sans">
                  Not sure yet
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Start with the details you know today. Save your partial setup, and our specialized event support team will help you review and finalize remaining decisions later.
                </p>
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                <span>Select path</span>
                <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
