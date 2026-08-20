import Image from 'next/image';
import { Shield, Lock, EyeOff } from 'lucide-react';

const pillars = [
  {
    title: 'Trust Center',
    desc: 'Product UI proof, architecture documentation, customer evidence only with permission',
    icon: Shield,
    image: '/images/platform-analytics/trust-center-illustration.png',
  },
  {
    title: 'Security',
    desc: 'Tenant isolation, least privilege, access control, sensitive data boundaries, no secrets in public proofs',
    icon: Lock,
    image: '/images/platform-analytics/security-illustration.png',
  },
  {
    title: 'Privacy',
    desc: 'Purpose limitation, minimization, suppression as visible state, consent, no demographic inference from analytics',
    icon: EyeOff,
    image: '/images/platform-analytics/privacy-illustration.png',
  },
];

export default function TrustSecurityPrivacySection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/trust-security-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
          <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
            Trust, security, and privacy
          </h2>
          <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
            Procurement-grade boundaries for enterprise analytics.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-[24px] items-stretch relative shrink-0 w-full">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#101626] border border-[#1e293b] border-solid flex flex-1 flex-col gap-4 xl:gap-[16px] items-start min-w-px p-6 xl:p-[24px] relative rounded-[12px] xl:h-[282px]"
              >
                <div className="flex items-center justify-between relative shrink-0 w-full">
                  <div className="flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 flex-1 min-w-px">
                    <p className="font-spaceGrotesk font-bold relative shrink-0 text-[18px] text-white whitespace-nowrap">
                      {pillar.title}
                    </p>
                    <p className="font-spaceGrotesk font-normal relative shrink-0 text-[#aab3c4] text-[13px] w-full">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="bg-[#1e293b] flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[40px]">
                    <Icon className="text-[#34d4ca] size-[20px]" />
                  </div>
                </div>
                <div className="h-[140px] relative rounded-[8px] shrink-0 w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
