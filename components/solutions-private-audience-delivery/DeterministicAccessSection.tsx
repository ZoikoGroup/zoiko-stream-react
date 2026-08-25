import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { CloudSync } from 'lucide-react';

const authStates = [
  { badge: 'EVALUATING', badgeCls: 'bg-amber-400/20 text-amber-400', title: 'Checking', desc: 'Evaluation in progress. Real-time credential and policy handshake undergoing verification checks.' },
  { badge: 'AUTHORIZED', badgeCls: 'bg-emerald-500/10 text-teal-400', title: 'Allowed', desc: 'Policy authorizes this viewer. Cryptographic tokens signed to initiate protected video playback stream.' },
  { badge: 'BLOCKED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Denied', desc: 'Policy evaluated and access not allowed. Contextual redirection initiated along the fallback support path.' },
  { badge: 'CHALLENGE', badgeCls: 'bg-amber-400/20 text-amber-400', title: 'Verification Required', desc: 'More identity verification needed. Multi-factor challenge or directory lookup required to proceed.' },
  { badge: 'EXPIRED', badgeCls: 'bg-gray-500/20 text-slate-400', title: 'Expired', desc: 'Prior entitlement or access window has ended. Relies on lifecycle timeouts to systematically secure stream.' },
  { badge: 'REVOKED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Revoked', desc: 'Access explicitly removed by administrator. Automatic client retries are disabled globally.' },
  { badge: 'FAIL_CLOSED', badgeCls: 'bg-red-500/20 text-red-500', title: 'Policy Unavailable', desc: 'Cannot evaluate due to external directory failure. System fails closed automatically to prevent leakage.' },
  { badge: 'TIMEOUT', badgeCls: 'bg-gray-500/20 text-slate-400', title: 'Unknown / Stale', desc: 'State is no longer current. Local cache has timed out, triggering an immediate policy re-evaluation loop.' },
];

export function DeterministicAccessSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Make the access decision deterministic and inspectable
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Show authorization state, not just allowed or error.
          </p>
        </div>
 <div className="w-[1216px] p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4">
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="size- px-2 py-1 bg-gray-500/20 rounded-sm flex justify-start items-start">
            <div className="justify-start text-slate-400 text-xs font-bold font-['Space_Grotesk']">TIMEOUT</div>
        </div>
        <div className="size-5 inline-flex flex-col justify-center items-center overflow-hidden">
            <div className="size-5 relative overflow-hidden">
                <CloudSync className="size-4 text-slate-400" />
            </div>
        </div>
    </div>
    <div className="justify-start text-slate-900 text-lg font-bold font-['Space_Grotesk']">Unknown / Stale</div>
    <div className="self-stretch justify-start text-slate-600 text-sm font-normal font-['Inter'] leading-5">State is no longer current. Local cache has timed out, triggering an immediate policy re-evaluation loop.</div>
</div>
        

        {/* Decision Engine Resolver Path Bar */}
        <div className="w-full p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm backdrop-blur-sm">
          <span className="text-slate-900 text-base font-bold  uppercase">
            DECISION ENGINE RESOLVER PATH
          </span>
          <div className="w-full flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Audience</div>
            <span className="text-slate-600 text-xl font-bold ">+</span>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Identity</div>
            <span className="text-slate-600 text-xl font-bold ">+</span>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Entitlement</div>
            <span className="text-slate-600 text-xl font-bold ">+</span>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Policy</div>
            <span className="text-slate-600 text-xl font-bold ">+</span>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Media Scope</div>
            <span className="text-slate-600 text-xl font-bold ">+</span>
            <div className="px-4 py-3 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-bold ">Time</div>
            <span className="text-slate-600 text-xl font-bold ">=</span>
            <div className="px-6 py-3 bg-teal-400 rounded-lg text-gray-950 text-sm font-bold ">Authorization Outcome</div>
          </div>
        </div>
      </div>
    </section>
  );
}
