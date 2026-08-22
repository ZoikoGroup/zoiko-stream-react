import React from 'react';
import Image from 'next/image';
import {
  UserCheck,
  FileCheck,
  Sliders,
  PauseCircle,
  Clock,
  Ban,
  Trash2,
} from 'lucide-react';

const lifecycleSteps = [
  { name: 'Establish', desc: 'Identity Asserted', icon: UserCheck },
  { name: 'Grant', desc: 'Entitlement Logged', icon: FileCheck },
  { name: 'Change', desc: 'Parameters Tuned', icon: Sliders },
  { name: 'Suspend', desc: 'Temporary Hold', icon: PauseCircle },
  { name: 'Expire', desc: 'Term Reached', icon: Clock },
  { name: 'Revoke', desc: 'Manual Kill', icon: Ban },
  { name: 'Remove', desc: 'Durable Purge', icon: Trash2 },
];

export default function AccessLifecycleManagementSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (76).png"
          alt="Lifecycle Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Access Lifecycle Management
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Authority has a beginning, active parameters, constraints, and an end. Track and audit every state transition.
          </p>
        </div>

        {/* Stepper Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md mb-10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {lifecycleSteps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center gap-2 shrink-0 text-center">
                    <div className="size-12 bg-slate-800 rounded-full border border-gray-700 flex items-center justify-center text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-white text-sm font-bold  ">
                      {st.name}
                    </span>
                    <span className="text-slate-400 text-[10px] font-normal font-['IBM_Plex_Mono']">
                      {st.desc}
                    </span>
                  </div>
                  {idx < lifecycleSteps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-800 min-w-[20px]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 3 Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-3">
            <h3 className="text-white text-base font-bold  ">
              Temporal Expiry Checks
            </h3>
            <p className="text-slate-400 text-xs font-normal   leading-relaxed">
              Every authorization record includes a mandatory expiration timestamp. Upon reaching this boundary, the playback decryption key is revoked within 60 seconds.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-3">
            <h3 className="text-white text-base font-bold  ">
              Forensic Revocation
            </h3>
            <p className="text-slate-400 text-xs font-normal   leading-relaxed">
              Administrators can instantly assert a global &apos;revoked&apos; state for any principal actor or resource, severing active downstream CDN distribution streams.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-3">
            <h3 className="text-white text-base font-bold  ">
              Automatic Cleanup
            </h3>
            <p className="text-slate-400 text-xs font-normal   leading-relaxed">
              When an entitlement is durably removed, the system executes secondary cleanup: purging cached copies, deleting access records, and clearing search indices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
