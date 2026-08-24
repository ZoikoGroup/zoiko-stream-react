import React from 'react';
import Image from 'next/image';

const sources = [
  {
    label: 'Cam-01 Primary',
    owner: 'Production Eng.',
    expected: { text: 'READY', cls: 'bg-emerald-500/10 border-emerald-500/30 text-teal-400' },
    signal: { text: 'RECEIVING', cls: 'bg-pink-500/10 border-pink-500/30 text-pink-400' },
    verified: '12s ago',
    evidence: 'Verified SDI-over-IP signal locked.',
  },
  {
    label: 'Studio-B Mix Down',
    owner: 'Mixer Operator',
    expected: { text: 'READY', cls: 'bg-emerald-500/10 border-emerald-500/30 text-teal-400' },
    signal: { text: 'RECEIVING', cls: 'bg-pink-500/10 border-pink-500/30 text-pink-400' },
    verified: '45s ago',
    evidence: 'Stereo audio levels nominal.',
  },
  {
    label: 'Satellite Uplink-4',
    owner: 'MCR Controller',
    expected: { text: 'PLANNED', cls: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
    signal: { text: 'PLANNED', cls: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
    verified: '5m ago',
    evidence: 'Link established, standing by.',
  },
  {
    label: 'Remote Live Field',
    owner: 'Remote Crew',
    expected: { text: 'READY', cls: 'bg-emerald-500/10 border-emerald-500/30 text-teal-400' },
    signal: { text: 'DEGRADED', cls: 'bg-red-500/10 border-red-500/30 text-red-500' },
    verified: '1m ago',
    evidence: 'Packet loss detected at 4.2%.',
  },
  {
    label: 'Cold Standby Source',
    owner: 'Backup SRE',
    expected: { text: 'PLANNED', cls: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
    signal: { text: 'UNKNOWN', cls: 'bg-gray-500/10 border-gray-500/30 text-gray-400' },
    verified: 'Never',
    evidence: 'No heartbeat yet detected.',
  },
];

export function SourceReadinessSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (183).png"
          alt="Source Readiness Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Know every source is ready before the workflow begins
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Source readiness, signal state, dependencies, and evidence — visible before the first frame arrives.
          </p>
        </div>

        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-800/80 border-b-2 border-gray-800 text-white text-xs font-bold font-['Space_Grotesk']">
                <th className="p-4 w-44">Source Label</th>
                <th className="p-4 w-40">Owner</th>
                <th className="p-4 w-40">Expected Status</th>
                <th className="p-4 w-40">Current Signal State</th>
                <th className="p-4 w-40">Last Verified</th>
                <th className="p-4">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-800/60 hover:bg-gray-800/30 transition-colors">
                  <td className="p-4 text-white text-sm font-bold font-['Space_Grotesk']">{row.label}</td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter']">{row.owner}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full border text-xs font-semibold font-['Inter'] uppercase ${row.expected.cls}`}>
                      {row.expected.text}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full border text-xs font-semibold font-['Inter'] uppercase ${row.signal.cls}`}>
                      {row.signal.text}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter']">{row.verified}</td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter'] truncate max-w-[250px]">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
