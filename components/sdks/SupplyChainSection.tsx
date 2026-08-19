import React from 'react';
import { UserCheck, FileLock2, Fingerprint, Package, ShieldAlert, type LucideIcon } from 'lucide-react';

interface TrustCard {
  icon: LucideIcon | string;
  title: string;
  description: string;
}

const cards: TrustCard[] = [
  {
    icon: UserCheck,
    title: 'Publisher identity',
    description: 'All compiled builds are signed with our corporate hardware security modules.',
  },
  {
    icon: '/images/sdks/icon-github.svg',
    title: 'Source repository',
    description: 'Verified GitHub repositories with public commit history and branch lock protection.',
  },
  {
    icon: FileLock2,
    title: 'License & notices',
    description: 'Clean corporate licenses with automated software bill of materials (SBOM) updates.',
  },
  {
    icon: Fingerprint,
    title: 'Integrity & provenance',
    description: 'Cryptographic sha256 checksum tags published for every package version.',
  },
  {
    icon: Package,
    title: 'Dependencies',
    description: 'Automated daily dependency scanning shields runtimes from injection attacks.',
  },
  {
    icon: ShieldAlert,
    title: 'Security advisories',
    description: 'Instant notifications for vulnerabilities with immediate patch deployments.',
  },
];

export default function SupplyChainSection() {
  return (
    <section className="relative w-full flex flex-col gap-12 items-start overflow-hidden bg-[#0a0f1a] px-6 py-16 md:px-[112px] md:py-[100px]">

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/supply-chain-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.77)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#eef1f6] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Supply-chain trust and security
        </h2>
        <p className="text-[#aab3c4] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Every artifact is publisher-verified, source-owned, and security-reviewed.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 items-start p-6 rounded-2xl border border-[#232b3a] bg-[rgba(16,21,30,0.8)] backdrop-blur-[8px]"
          >
            <div className="flex items-center justify-center size-7">
              {typeof card.icon === 'string' ? (
                <img src={card.icon} alt="" className="size-5" />
              ) : (
                <card.icon className="size-5 text-[#34d4ca]" strokeWidth={2} />
              )}
            </div>
            <p className="font-bold text-[#eef1f6] text-lg">{card.title}</p>
            <p className="text-[#aab3c4] text-[13px] leading-[22px]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-start justify-center w-full">
        <a
          href="/docs/security"
          className="flex items-center justify-center px-[26px] py-3.5 rounded-[10px] hover:brightness-110 transition-[filter]"
          style={{ background: 'linear-gradient(180deg, #34d4ca 0%, #4a8cfb 100%)' }}
        >
          <span className="font-bold text-[#04141a] text-[15px] whitespace-nowrap">
            View security documentation
          </span>
        </a>
      </div>

    </section>
  );
}
