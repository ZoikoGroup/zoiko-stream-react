import React from 'react';
import Image from 'next/image';
import { UserCheck, KeyRound, Clock, ShieldAlert, Fingerprint, CircleX, RefreshCcw, ChartNetwork } from 'lucide-react';

const ztCards = [
  {
    title: 'Authentication',
    desc: 'Single Sign-On (SSO) integration, mandatory MFA, and cryptographically bound device sessions with automated idle timeouts.',
    icon: Fingerprint,
  },
  {
    title: 'Authorization',
    desc: 'Granular Role-Based Access Control (RBAC) enforcing least-privilege defaults and scoped runtime API permissions.',
    icon: CircleX,
  },
  {
    title: 'Credential Lifecycle',
    desc: 'Automatic secrets rotation, instant token revocation, and immutable tamper-proof access audit trails.',
    icon: RefreshCcw,
  },
  {
    title: 'Identity Federation',
    desc: 'Native enterprise directory integration supporting SAML 2.0, OIDC, and unified user provision schema mapping.',
    icon: ChartNetwork,
  },
];

export default function ZeroTrustAuthorizationSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (98).png"
          alt="Zero Trust Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white">
            Zero trust media authorization &amp; identity control
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            Verify every stream provider, engineer, and process with cryptographically backed, multi-factor identification boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ztCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-5 backdrop-blur-md hover:border-teal-400/40 transition-colors"
              >
                <div className="size-12 bg-teal-400/10 rounded-lg border border-teal-400 flex items-center justify-center text-teal-400 shrink-0">
                  <Icon className="size-6" />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                    {card.desc}
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
