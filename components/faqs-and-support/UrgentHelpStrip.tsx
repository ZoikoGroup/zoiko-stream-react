import React from 'react';

export default function UrgentHelpStrip() {
  return (
    <section className="w-full border-t border-b border-t-[#34d4ca] border-b-[#232b3a] bg-[#0a0d13]">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 md:px-28 py-5">
        
        {/* Left side: Alert message */}
        <div className="flex items-center gap-3">
          {/* Blue Dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#4c86ff] shrink-0" aria-hidden="true" />
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-left">
            <p className="font-space-grotesk font-bold text-[#eef1f6] text-[15px]">
              Need help with an active live event right now?
            </p>
            <p className="font-space-grotesk font-normal text-[#aab3c4] text-[14px]">
              Operators are standing by for active stream emergencies.
            </p>
          </div>
        </div>

        {/* Right side: Button */}
        <button className="flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#33d9c7] to-[#4c86ff] rounded-[10px] shadow-[0px_4px_8px_rgba(51,217,199,0.2)] hover:opacity-90 transition-opacity whitespace-nowrap">
          <span className="font-space-grotesk font-bold text-black text-[13px]">
            Get active-event help
          </span>
        </button>

      </div>
    </section>
  );
}
