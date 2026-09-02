import React from 'react';
import Link from 'next/link';
import { ModalType } from './SupportHelpCenterModals';
import { Activity, AlertTriangle, Briefcase, Calendar, Code, Eye, Headset } from 'lucide-react';

interface DestinationsSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export default function SupportHelpCenterDestinationsSection({ onOpenModal }: DestinationsSectionProps) {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wider">
            ONE DESTINATION PER JOB
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Go straight to the team that owns your issue.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed">
          Each route is a distinct authority — general help never gets routed to sales, and technical support is never confused with the API reference.
        </p>
      </div>

      {/* 7 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Contact support */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Headset className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Contact support
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Need a person for a general support issue?
            </p>
          </div>
          <button
            onClick={() => onOpenModal('contact')}
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors cursor-pointer mt-auto"
          >
            Contact support →
          </button>
        </div>

        {/* Card 2: Developer support */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Code className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Developer support
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Need help with an implementation or integration issue?
            </p>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              Not the API reference — see docs alongside escalation
            </span>
          </div>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors mt-auto"
          >
            Get developer support →
          </Link>
        </div>

        {/* Card 3: Enterprise support */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Briefcase className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Enterprise support
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Need organization-specific support?
            </p>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              Availability may be account-specific
            </span>
          </div>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors mt-auto"
          >
            Enterprise support →
          </Link>
        </div>

        {/* Card 4: Live Events support */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Calendar className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Live Events support
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Need help with a ZoikoStream Live Event?
            </p>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              Not staffed 24/7 unless stated on your plan
            </span>
          </div>
          <Link
            href="#"
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors mt-auto"
          >
            Live Events help →
          </Link>
        </div>

        {/* Card 5: Report an issue */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <AlertTriangle className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Report an issue
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Need to report a problem?
            </p>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              Not for security vulnerabilities
            </span>
          </div>
          <button
            onClick={() => onOpenModal('report')}
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors cursor-pointer mt-auto"
          >
            Report an issue →
          </button>
        </div>

        {/* Card 6: Accessibility help */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Eye className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              Accessibility help
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Blocked by an accessibility barrier?
            </p>
            <span className="text-slate-500 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed">
              No disability disclosure required
            </span>
          </div>
          <button
            onClick={() => onOpenModal('accessibility')}
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors cursor-pointer mt-auto"
          >
            Get accessibility help →
          </button>
        </div>

        {/* Card 7: System status */}
        <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 p-6 flex flex-col justify-between items-start gap-4 hover:shadow-md transition-shadow">
          <div className="size-9 bg-slate-100 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-center items-center">
            <Activity className="size-5 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk']">
              System status
            </h3>
            <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-relaxed">
              Checking whether the service is currently affected?
            </p>
          </div>
          <button
            onClick={() => onOpenModal('status')}
            className="text-blue-500 hover:text-blue-600 text-xs font-semibold font-['Inter'] transition-colors cursor-pointer mt-auto"
          >
            Open System status →
          </button>
        </div>
      </div>
    </section>
  );
}
