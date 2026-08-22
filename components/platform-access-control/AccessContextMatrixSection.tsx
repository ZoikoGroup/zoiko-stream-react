import React from 'react';
import Image from 'next/image';
import { UserCheck, Server, Radio, Users, Globe2 } from 'lucide-react';

const matrixItems = [
  {
    title: 'Administrator / Operator',
    desc: 'Manages global tenant policies, stream routings, directory mappings, and key revocations. Requires multi-factor directory assertion and FIPS hardware token compliance.',
    badge: 'SYSTEM ADMIN',
    badgeClass: 'bg-red-500/10 border-red-500/20 text-red-500',
    icon: UserCheck,
  },
  {
    title: 'Service / Application',
    desc: 'Automated workloads running RTMP ingestion pipelines, transcoder clusters, and audit-log shipping. Authenticates via OAuth 2.0 client credentials and cryptographically pinned endpoints.',
    badge: 'MACHINE API',
    badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
    icon: Server,
  },
  {
    title: 'Contributor / Producer',
    desc: 'On-site operators, cameras, and broadcast crews pushing live media assets to the stream. Authenticated via session codes or pinned RTMP keys with automatic rotation rules.',
    badge: 'SESSION INGEST',
    badgeClass: 'bg-teal-400/10 border-teal-400/20 text-teal-400',
    icon: Radio,
  },
  {
    title: 'Audience / Viewer',
    desc: 'Authorized internal or external viewers consuming published media feeds. Verified silently through OIDC whitelist assertions, private playback tokens, or guest vouchers.',
    badge: 'PLAYBACK SCOPE',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
    icon: Users,
  },
  {
    title: 'External Partner / Guest',
    desc: 'Downstream syndication platforms, translators, or regulatory auditors. Access is strictly scoped, time-bound, and auto-purged on partner agreement expiration.',
    badge: 'FEDERATED HOLD',
    badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
    icon: Globe2,
  },
];

export default function AccessContextMatrixSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-access-control/bg (75).png"
          alt="Access Matrix Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Access Context Matrix
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Understand access across administrators, applications, contributors, and audiences.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {matrixItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-5 max-w-3xl">
                  <div className="size-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className={`px-3 py-1 rounded border text-xs font-bold font-['IBM_Plex_Mono'] shrink-0 ${item.badgeClass}`}>
                  {item.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
