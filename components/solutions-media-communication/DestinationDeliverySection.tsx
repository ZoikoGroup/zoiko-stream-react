import React from 'react';
import Image from 'next/image';

const destinations = [
  {
    name: 'YouTube Live Sync',
    intent: 'Primary Public Stream',
    avail: { text: 'VERIFIED', cls: 'bg-emerald-500/10 text-teal-400' },
    health: { text: 'ACTIVE', cls: 'bg-emerald-500/10 text-emerald-500' },
    access: 'Unrestricted',
    rights: 'Global Public License v1',
  },
  {
    name: 'Twitch Main Feed',
    intent: 'Secondary Public Stream',
    avail: { text: 'VERIFIED', cls: 'bg-emerald-500/10 text-teal-400' },
    health: { text: 'ACTIVE', cls: 'bg-emerald-500/10 text-emerald-500' },
    access: 'Unrestricted',
    rights: 'Global Public License v1',
  },
  {
    name: 'Primary CDN Origin',
    intent: 'DTC App Gateway',
    avail: { text: 'VERIFIED', cls: 'bg-emerald-500/10 text-teal-400' },
    health: { text: 'ACTIVE', cls: 'bg-emerald-500/10 text-emerald-500' },
    access: 'Token Authenticated',
    rights: 'GEO-IP Lock: North America',
  },
  {
    name: 'European Edge Cache',
    intent: 'Continental Relay',
    avail: { text: 'AVAILABLE', cls: 'bg-blue-500/10 text-blue-500' },
    health: { text: 'DEGRADED', cls: 'bg-red-500/10 text-red-500' },
    access: 'Token Authenticated',
    rights: 'GEO-IP Lock: Europe Only',
  },
  {
    name: 'Corporate Live Portal',
    intent: 'Private Internal Stream',
    avail: { text: 'PLANNED', cls: 'bg-blue-500/10 text-blue-500' },
    health: { text: 'REQUIRES REVIEW', cls: 'bg-amber-500/10 text-amber-500' },
    access: 'Restricted SSO',
    rights: 'Internal Policy Rule 2B',
  },
];

export function DestinationDeliverySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (184).png"
          alt="Destination Delivery Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Separate destination intent from delivery evidence
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Declared destinations, verified availability, current delivery health, and per-destination access policy — all evidence-bounded.
          </p>
        </div>

        <div className="w-full p-6 bg-gray-950/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-800/80 border-b-2 border-gray-800 text-white text-xs font-bold font-['Space_Grotesk']">
                <th className="p-4 w-44">Destination</th>
                <th className="p-4 w-40">Intent</th>
                <th className="p-4 w-40">Availability Status</th>
                <th className="p-4 w-40">Delivery Health</th>
                <th className="p-4 w-40">Audience Access</th>
                <th className="p-4">Rights Rule</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-800/60 hover:bg-gray-800/30 transition-colors">
                  <td className="p-4 text-white text-sm font-bold font-['Space_Grotesk']">{row.name}</td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter']">{row.intent}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold font-['Inter'] uppercase ${row.avail.cls}`}>
                      {row.avail.text}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold font-['Inter'] uppercase ${row.health.cls}`}>
                      {row.health.text}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter']">{row.access}</td>
                  <td className="p-4 text-slate-400 text-xs font-normal font-['Inter'] truncate max-w-[250px]">{row.rights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
