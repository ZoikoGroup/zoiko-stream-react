import React from 'react';
import Image from 'next/image';
import {
  Fingerprint,
  GitBranch,
  FileCheck,
  UserCheck,
  Lock,
  Users,
  Cpu,
  RefreshCcw,
  Target,
  Users2Icon,
  Shield,
  Globe,
} from 'lucide-react';

const recordPillars = [
  {
    title: 'Stable Identity',
    desc: 'One immutable system URN persists across renaming, structural directory changes, and system migrations.',
    icon: Cpu,
  },
  {
    title: 'Current Version',
    desc: 'Strict parent-child tracking blocks silent file overwriting. Old configurations remain auditable and archived.',
    icon: RefreshCcw,
  },
  {
    title: 'Source & Provenance',
    desc: 'Rigorous verification logs tracking exactly where the media originated, ingestion method, and capture timeline.',
    icon: Target,
  },
  {
    title: 'Owner & Steward',
    desc: 'Every record maps to an active corporate directory identity responsible for operational permissions.',
    icon: Users2Icon,
  },
  {
    title: 'Rights & Restrictions',
    desc: 'Governed parameter blocks detailing permitted channels, audience scopes, geographical bounds, and expiry rules.',
    icon: Shield,
  },
  {
    title: 'Access Relationship',
    desc: 'Continuous mapping of which IDP whitelists and technical routes are authorized to decrypt the payload.',
    icon: Globe,
  },
];

export default function GovernedMediaRecordSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-managemnt/bg (78).png"
          alt="Governed Media Record Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            The governed media record
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Every stream and asset is mapped as an immutable cryptographic record containing strict layers of ownership, policy controls, and material evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recordPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-gray-900/90 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col gap-5 hover:border-teal-400/40 transition-colors"
              >
                <div className="size-11 bg-teal-400/10 rounded-lg border border-teal-400/20 flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base font-bold  ">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
