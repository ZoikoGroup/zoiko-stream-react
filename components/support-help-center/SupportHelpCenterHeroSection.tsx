import React from 'react';
import { Search } from 'lucide-react';
import { ModalType } from './SupportHelpCenterModals';

interface HeroSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function SupportHelpCenterHeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-gradient-to-b from-zinc-950 to-zinc-900 border-b border-gray-800 flex justify-center items-center overflow-hidden z-10">
      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-center items-center text-center gap-8">
        {/* Sub-badge */}
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
            HELP CENTER
          </span>
        </div>

        {/* Title */}
        <h1 className="w-full text-slate-100 text-4xl sm:text-5xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[74px]">
          Find the right ZoikoStream help, faster.
        </h1>

        {/* Subtitle */}
        <p className="w-full text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed max-w-2xl">
          Search current help, browse by task, or move directly to the specialist support destination that owns your issue.
        </p>

        {/* Search Component Box */}
        <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-4 pt-2">
          <div className="w-full flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:flex-1 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 px-5 py-3.5 flex items-center">
              <input
                type="text"
                placeholder="Describe what you are trying to do or what went wrong"
                className="w-full bg-transparent text-slate-200 placeholder-slate-500 text-sm sm:text-base font-normal font-['Inter'] focus:outline-none"
              />
            </div>

            <button className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-slate-950 text-base font-bold font-['Inter'] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shrink-0">
              <Search className="size-4 text-slate-950" />
              <span>Search help</span>
            </button>
          </div>

          <p className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
            Do not enter passwords, access tokens, API secrets, payment details, private media links, or sensitive personal data into this search.
          </p>

          {/* System Status Banner */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <div className="size-2 bg-teal-400 rounded-xm" />
            <span className="text-slate-400 text-sm font-normal font-['Inter']">
              Checking whether the service is currently affected?
            </span>
            <button
              onClick={() => onOpenModal('status')}
              className="text-teal-400 hover:text-teal-300 text-sm font-semibold font-['Inter'] transition-colors cursor-pointer"
            >
              Open System status →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
