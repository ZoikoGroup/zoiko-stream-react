import React from 'react';
import { Code, Settings, GitMerge, Shield, CreditCard, Eye, type LucideIcon } from 'lucide-react';

interface RoleCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TrustPoint {
  title: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    icon: Code,
    title: 'Developer',
    description: 'Full access to sandboxes and local testing streams.',
  },
  {
    icon: Settings,
    title: 'Application Admin',
    description: 'Manage application tokens, regions, and platform integrations.',
  },
  {
    icon: GitMerge,
    title: 'Integration Admin',
    description: 'Oversee global server hooks and WebRTC transport structures.',
  },
  {
    icon: Shield,
    title: 'Security Admin',
    description: 'SAML SSO parameters and corporate compliance logs audits.',
  },
  {
    icon: CreditCard,
    title: 'Billing Contact',
    description: 'Plan upgrades, usage telemetry reports, and invoice routes.',
  },
  {
    icon: Eye,
    title: 'Auditor',
    description: 'Read-only access to system access trails and cryptographic records.',
  },
];

const trustPoints: TrustPoint[] = [
  {
    title: 'Audit Trail',
    description: 'Immutable trail records every token generation event.',
  },
  {
    title: 'SLAs Backed',
    description: '99.99% core transport availability guaranteed.',
  },
  {
    title: 'SOC 2 Compliant',
    description: 'Rigorous third-party security audits completed annually.',
  },
];

export default function EnterpriseSection() {
  return (
    <section className="relative w-full flex flex-col gap-12 items-start overflow-hidden bg-[#0a0f1a] px-6 py-16 md:px-[112px] md:py-[100px]">

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/enterprise-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.76)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Enterprise governance and proof
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Ownership, access control, review cadence, and organizational accountability.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {roles.map((role) => (
          <div
            key={role.title}
            className="flex flex-col gap-4 items-start p-6 rounded-2xl border border-[#232b3a] bg-[rgba(16,21,30,0.8)] backdrop-blur-[8px]"
          >
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center size-6">
                <role.icon className="size-4 text-[#34d4ca]" strokeWidth={2} />
              </div>
              <p className="font-bold text-[#eef1f6] text-base whitespace-nowrap">{role.title}</p>
            </div>
            <p className="text-[#aab3c4] text-[13px] leading-[20px]">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start w-full p-6 rounded-xl border border-[#232b3a] bg-[rgba(16,21,30,0.8)]">
        {trustPoints.map((point) => (
          <div key={point.title} className="flex flex-col gap-1 items-start flex-1 min-w-0">
            <p className="font-bold text-[#34d4ca] text-sm whitespace-nowrap">✓ {point.title}</p>
            <p className="text-[#aab3c4] text-[13px]">{point.description}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-start justify-center w-full">
        <a
          href="/talk-to-an-expert"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#aab3c4] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <span className="font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
            Talk to an expert
          </span>
        </a>
      </div>

    </section>
  );
}
