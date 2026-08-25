import React from 'react';
import Image from 'next/image';

const verificationHistory = [
  { scope: 'Corporate Board Q2', method: 'SHA-256 Cryptographic Hash Verification', res: 'VERIFIED', resCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', id: 'EV-992-1B' },
  { scope: 'Customer Support Audio', method: 'CRC32 Payload Verification (Auto)', res: 'CHECK PENDING', resCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30', id: 'EV-104-5C' },
  { scope: 'Exec Compensation Rec', method: 'Principal manual auditing & review', res: 'VERIFIED', resCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30', id: 'EV-005-4H' },
  { scope: 'Undetermined Region', method: 'Edge replication sequence validation', res: 'REPAIR PENDING', resCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30', id: 'EV-841-9K' },
  { scope: 'Q4 Marketing Master', method: 'Lossless frame-accuracy extraction', res: 'MISMATCH', resCls: 'bg-red-500/10 text-red-500 border-red-500/30', id: 'EV-154-2M' },
];

const playbookActions = [
  { action: 'Acknowledge Exception', desc: 'Auditor review pending' },
  { action: 'Investigate Provenance', desc: 'Trace lineage metadata' },
  { action: 'Restrict Storage Access', desc: 'Contain unverified assets' },
  { action: 'Repair/Restore from Backup', desc: 'Fetch cold replication' },
  { action: 'Re-verify Cryptographic Hash', desc: 'Force pipeline check' },
  { action: 'Escalate to Compliance', desc: 'Open regulatory issue' },
];

export function VerifyUncertaintySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (12).png"
          alt="Verify Uncertainty Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Verify what you can; preserve uncertainty when you cannot
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Give integrity a first-class state model without implying unverified mechanisms.
          </p>
        </div>

        {/* Overall State Summary Bar */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-xl border-[1.5px] border-gray-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Overall State</span>
            <span className="text-emerald-500 text-lg font-bold ">Verified (Hash Match)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Last verification</span>
            <span className="text-white text-lg font-bold ">8 hours ago</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Evidence owner</span>
            <span className="text-white text-lg font-bold ">Principal Auditor</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Coverage</span>
            <span className="text-white text-lg font-bold ">98.2% of library</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Open exceptions</span>
            <span className="text-red-500 text-lg font-bold ">2 unresolved</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-normal  uppercase">Next review</span>
            <span className="text-teal-400 text-lg font-bold ">Weekly (March 15)</span>
          </div>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (8 cols): Verification History */}
          <div className="lg:col-span-8 p-6 bg-zinc-900/80 rounded-xl border-[1.5px] border-gray-800 flex flex-col gap-4 backdrop-blur-sm">
            <h3 className="text-white text-xl font-bold ">Verification History (Current Window)</h3>
            <div className="w-full rounded-lg overflow-hidden border border-gray-800 flex flex-col">
              <div className="p-3 bg-gray-800 flex items-center gap-3 text-xs font-bold  text-white uppercase">
                <span className="w-32">Scope</span>
                <span className="flex-1">Method Reference</span>
                <span className="w-28 text-center">Result</span>
                <span className="w-32 text-right">Evidence ID</span>
              </div>
              <div className="divide-y divide-gray-800">
                {verificationHistory.map((vh, idx) => (
                  <div key={idx} className="p-3.5 flex items-center gap-3 text-xs  hover:bg-gray-800/40 transition-colors">
                    <span className="w-32 text-white font-bold truncate">{vh.scope}</span>
                    <span className="flex-1 text-slate-400 font-normal  truncate">{vh.method}</span>
                    <div className="w-28 flex justify-center">
                      <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold  uppercase ${vh.resCls}`}>
                        {vh.res}
                      </span>
                    </div>
                    <span className="w-32 text-right text-teal-400 font-normal ">{vh.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Exception Playbook */}
          <div className="lg:col-span-4 p-8 bg-zinc-900/80 rounded-xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold ">Exception Playbook</h3>
              <p className="text-slate-400 text-xs font-normal  leading-5">
                Active protocol overrides designed to address replication, hash mismatch, or unverified custody events.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {playbookActions.map((pb, idx) => (
                <div key={idx} className="p-3 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center text-xs">
                  <span className="text-teal-400 font-bold ">{pb.action}</span>
                  <span className="text-slate-400 font-normal ">{pb.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
