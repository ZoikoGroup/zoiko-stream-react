'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StageBox {
  name: string;
  subtitle: string;
  color: 'blue' | 'emerald' | 'amber' | 'rose';
}

const STAGES: StageBox[] = [
  { name: 'Preview', subtitle: 'Experimental stage', color: 'blue' },
  { name: 'Current', subtitle: 'Live stable path', color: 'emerald' },
  { name: 'Deprecated', subtitle: 'Sunset scheduled', color: 'amber' },
  { name: 'Removed', subtitle: 'End of lifecycle', color: 'rose' },
];

const POLICIES = [
  {
    title: 'Deprecation Policy',
    description:
      'Source-backed reason, successor operation, effective date, and migration guidance link.',
  },
  {
    title: 'Correction Tracking',
    description:
      'Material contract corrections preserve corrected_at, reason, affected object IDs, and Changelog mapping.',
  },
  {
    title: 'Dependency Triggers',
    description:
      'Schema, auth, error, or version changes automatically flag dependent operations for re-review.',
  },
];

export default function ContractLifecycleSection() {
  const getStageBoxStyle = (color: StageBox['color']) => {
    switch (color) {
      case 'blue':
        return {
          border: 'border-blue-500/40 bg-blue-950/40',
          dot: 'bg-blue-400',
          hover: 'hover:border-blue-400/70',
        };
      case 'emerald':
        return {
          border: 'border-emerald-500/40 bg-emerald-950/40',
          dot: 'bg-emerald-400',
          hover: 'hover:border-emerald-400/70',
        };
      case 'amber':
        return {
          border: 'border-amber-500/40 bg-amber-950/40',
          dot: 'bg-amber-400',
          hover: 'hover:border-amber-400/70',
        };
      case 'rose':
        return {
          border: 'border-rose-500/40 bg-rose-950/40',
          dot: 'bg-rose-400',
          hover: 'hover:border-rose-400/70',
        };
    }
  };

  return (
    <section className="relative w-full bg-[#070b14] text-white py-16 lg:py-24 border-b border-slate-800/80">
      {/* Background Graphic */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 mix-blend-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/api%20reference/hero-bg.png')`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-3">
            Track every contract state from preview to sunset
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl leading-relaxed">
            Every API object carries typed lifecycle state — Current, Preview, Deprecated, Sunset, Superseded, Removed, or Under Review. Version dimensions, successor mappings, and migration guidance come from the same contract registry.
          </p>
        </div>

        {/* Lifecycle Flow Stage Card */}
        <div className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-8 md:p-10 mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3">
            {STAGES.map((stage, idx) => {
              const styles = getStageBoxStyle(stage.color);
              return (
                <React.Fragment key={stage.name}>
                  <div
                    className={`w-full flex-1 rounded-xl border ${styles.border} ${styles.hover} p-4 sm:p-5 text-center transition-all duration-200 group cursor-default`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                      <span className="text-white font-bold text-sm sm:text-base">
                        {stage.name}
                      </span>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">
                      {stage.subtitle}
                    </div>
                  </div>

                  {idx < STAGES.length - 1 && (
                    <div className="hidden md:flex items-center text-teal-400/60 font-mono text-sm px-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 3 Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POLICIES.map((policy) => (
            <div
              key={policy.title}
              className="bg-[#0d1424]/90 rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-lg hover:border-slate-700/90 transition-all duration-200"
            >
              <h3 className="font-bold text-[#2dd4bf] text-base sm:text-lg mb-2.5">
                {policy.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
