import React from 'react';
import Image from 'next/image';

const scopeRows = [
  { scope: 'stream:read', desc: 'Fetch manifest links and player telemetry' },
  { scope: 'stream:write', desc: 'Create channels and configure encoder endpoints' },
  { scope: 'key:rotate', desc: 'Trigger cryptographic key renewal procedures' },
];

const privilegeCards = [
  {
    title: 'Requested Privilege',
    desc: 'Select parameters explicitly tailored for client context schemas.',
    img: '/images/authentication/Rectangle.png',
  },
  {
    title: 'Granted Privilege',
    desc: 'Audited permissions assigned directly to resource servers.',
    img: '/images/authentication/Rectangle (1).png',
  },
  {
    title: 'Effective Privilege',
    desc: 'The final restricted boundary verified during pipeline evaluation.',
    img: '/images/authentication/Rectangle (2).png',
  },
];

export function RequestOnlyWhatYouNeedSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (12).png"
          alt="Request Only What You Need Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Request only what you need
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Scopes restrict what an authenticated credential may request — they do not replace resource, tenant, or policy authorization.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-xl font-bold">Least Privilege Architecture</h3>
            <p className="text-slate-400 text-base font-normal leading-5">
              The platform evaluates your effective privilege by checking three distinct layers:
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-violet-500/20 rounded-full border border-violet-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xs font-bold font-mono">R</span>
                </div>
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Requested Scopes:</strong> Explicit constraints configured directly on the credential token.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-400/20 rounded-full border border-teal-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400 text-xs font-bold font-mono">G</span>
                </div>
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Granted Permissions:</strong> Direct organizational policies allowed by platform admins.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full border border-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 text-xs font-bold font-mono">E</span>
                </div>
                <span className="text-xs text-slate-400">
                  <strong className="text-white">Effective Access:</strong> The mathematical intersection representing safe privilege limits.
                </span>
              </div>
            </div>
          </div>

          {/* Right Scope Table Box */}
          <div className="p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
            <span className="text-white text-xs font-bold tracking-wide font-mono">
              TYPICAL SCOPE CONFIGURATIONS
            </span>

            <div className="flex flex-col divide-y divide-gray-800">
              <div className="p-2 bg-gray-800/80 rounded-t flex gap-3 text-xs font-bold">
                <span className="w-28 text-white">SCOPE</span>
                <span className="flex-1 text-white">PERMITTED ACTIONS</span>
              </div>
              {scopeRows.map((r, idx) => (
                <div key={idx} className="p-2 flex gap-3 text-xs">
                  <span className="w-28 text-teal-400 font-mono font-bold">{r.scope}</span>
                  <span className="flex-1 text-slate-400 leading-4">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Privilege Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {privilegeCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="w-full h-28 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-slate-400 text-xs font-normal leading-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
