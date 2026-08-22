import React from 'react';
import Image from 'next/image';

const conditionItems = [
  {
    tag: 'Media',
    desc: 'Audio-only, low bandwidth, and ultra-high 4K streams scale output dynamically based on edge capabilities.',
  },
  {
    tag: 'Network',
    desc: 'Continuous latency telemetry maps congestion points, routing stream segments around failure areas.',
  },
  {
    tag: 'Player/Device',
    desc: 'Senses player buffering patterns and automatically triggers failover switches when frames drop.',
  },
  {
    tag: 'Geography',
    desc: 'Applies geofenced whitelists automatically, blocking distribution in unapproved territories.',
  },
  {
    tag: 'Policy',
    desc: 'Active storage retention or legal hold parameters halt deliveries programmatically if conflicts occur.',
  },
];

const scopes = [
  { region: 'US East (N. Virginia)', status: 'Active / Low Latency', ping: '12ms' },
  { region: 'EU West (Ireland)', status: 'Active / Stable', ping: '22ms' },
  { region: 'Asia Pacific (Tokyo)', status: 'Active / Low Latency', ping: '18ms' },
  { region: 'South America (São Paulo)', status: 'Active / High Load Check', ping: '35ms' },
];

export default function AdaptiveDeliverySection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-delivery-trust-overview/bg (70).png"
          alt="Adaptive Delivery Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Adaptive Delivery and Verified Distribution
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Delivery outcomes depend on conditions — media, network, player, geography, and policy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Condition Items */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {conditionItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-900/50 rounded-lg border border-gray-800 flex items-center gap-5"
              >
                <div className="w-28 px-2.5 py-1 bg-teal-400/10 rounded border border-teal-400/20 text-center shrink-0">
                  <span className="text-teal-400 text-xs font-bold font-['Inter']">
                    {item.tag}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Distribution Scopes Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-5 backdrop-blur-md">
              <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide">
                  VERIFIED DISTRIBUTION SCOPES
                </span>
                <span className="px-2 py-0.5 bg-emerald-600/10 text-emerald-400 text-xs font-bold font-['Inter'] rounded">
                  ACTIVE SCOPES
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {scopes.map((sc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-900/50 rounded-lg border border-gray-800 flex justify-between items-center"
                  >
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-semibold font-['Inter']">
                        {sc.region}
                      </span>
                      <span className="text-slate-400 text-xs font-normal font-['Inter']">
                        {sc.status}
                      </span>
                    </div>
                    <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                      {sc.ping}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-100/90 rounded-lg border border-amber-500 flex flex-col gap-1 text-slate-950">
                <span className="text-amber-900 text-xs font-bold font-['Inter']">
                  ⚠ Geographical Policy Restrictions Active
                </span>
                <span className="text-amber-800 text-xs font-normal font-['Inter'] leading-relaxed">
                  Regional distribution rules are assessed continuously at connection handshake. Decryption failover is restricted outside whitelisted zones.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
