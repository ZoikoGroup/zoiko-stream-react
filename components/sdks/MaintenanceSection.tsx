import React from 'react';
import { Tag, RefreshCw, FileText, type LucideIcon } from 'lucide-react';

interface PipelineStep {
  label: string;
  version: string;
  description: string;
  variant: 'current' | 'supported' | 'deprecated' | 'retired';
}

interface InfoCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const variantStyles: Record<PipelineStep['variant'], { border: string; badgeBg: string; badgeColor: string }> = {
  current: { border: '#34d4ca', badgeBg: 'rgba(52,212,202,0.12)', badgeColor: '#34d4ca' },
  supported: { border: '#4a8cfb', badgeBg: 'rgba(74,140,251,0.12)', badgeColor: '#4a8cfb' },
  deprecated: { border: '#e2e8f0', badgeBg: 'rgba(245,158,11,0.12)', badgeColor: '#f59e0b' },
  retired: { border: '#e2e8f0', badgeBg: 'rgba(239,68,68,0.12)', badgeColor: '#ef4444' },
};

const steps: PipelineStep[] = [
  { label: 'Current', version: 'v4.2.x', description: 'Active feature iteration', variant: 'current' },
  { label: 'Supported Previous', version: 'v3.8.x', description: 'Maintenance bugfixes only', variant: 'supported' },
  { label: 'Deprecated', version: 'v2.5.x', description: '6-month sunset alert window', variant: 'deprecated' },
  { label: 'Retired', version: 'v1.x.x', description: 'Security updates ended', variant: 'retired' },
];

const infoCards: InfoCard[] = [
  {
    icon: Tag,
    title: 'Version identity',
    description: 'Standard semantic versioning rules govern all minor and major releases.',
  },
  {
    icon: RefreshCw,
    title: 'Migration paths',
    description: 'Automated scripts and detailed upgrade manifests simplify package updates.',
  },
  {
    icon: FileText,
    title: 'Changelog',
    description: 'Granular commit references and security logs compiled on every build.',
  },
];

export default function MaintenanceSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-12 items-start py-16 sm:py-20 lg:py-[100px] px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/sdks/maintenance-bg.png')` }}
    >
      <div className="flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#0a0d13] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Maintenance, versioning, and lifecycle
        </h2>
        <p className="text-[#4f5e74] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Every SDK follows a governed lifecycle with clear state transitions.
        </p>
      </div>

      <div className="flex flex-col gap-6 items-start w-full p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc]">
        <p className="font-bold text-[#4f5e74] text-xs tracking-[1px] whitespace-nowrap">
          SDK GOVERNANCE PIPELINE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col gap-2 items-start p-4 rounded-lg bg-white border"
              style={{ borderColor: variantStyles[step.variant].border }}
            >
              <div className="flex items-center justify-between w-full gap-2">
                <p className="font-bold text-[#0a0d13] text-base whitespace-nowrap">{step.label}</p>
                <span
                  className="px-2 py-0.5 rounded font-mono font-bold text-[10px] whitespace-nowrap"
                  style={{
                    backgroundColor: variantStyles[step.variant].badgeBg,
                    color: variantStyles[step.variant].badgeColor,
                  }}
                >
                  {step.version}
                </span>
              </div>
              <p className="text-[#4f5e74] text-[13px] whitespace-nowrap">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 items-start p-6 rounded-xl border border-[#e2e8f0] bg-white"
          >
            <div className="flex items-center justify-center size-7">
              <card.icon className="size-5 text-[#4a8cfb]" strokeWidth={2} />
            </div>
            <p className="font-bold text-[#0a0d13] text-base">{card.title}</p>
            <p className="text-[#4f5e74] text-[13px] leading-[20px]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start justify-center w-full">
        <a
          href="/changelog"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#4f5e74] hover:bg-[rgba(10,13,19,0.05)] transition-colors"
        >
          <span className="font-medium text-[#0a0d13] text-[15px] whitespace-nowrap">
            View changelog
          </span>
        </a>
      </div>

    </section>
  );
}
