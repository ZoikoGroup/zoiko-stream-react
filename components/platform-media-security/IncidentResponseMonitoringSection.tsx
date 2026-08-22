import React from 'react';
import Image from 'next/image';
import { AlertCircle, Check } from 'lucide-react';

const steps = [
  {
    step: '01',
    phase: 'DETECT',
    title: 'Telemetry Alerting',
    desc: 'Continuous synthetic checks, stream health telemetry, and edge buffer monitoring trigger instant PagerDuty escalations.',
  },
  {
    step: '02',
    phase: 'CLASSIFY',
    title: 'Impact Scoring',
    desc: 'Severity levels (P0-P3) are automatically scoped by impacted concurrency, geographic reach, and stream paths.',
  },
  {
    step: '03',
    phase: 'RESPOND',
    title: 'On-Call Triage',
    desc: 'Our 15-minute P0 response SLA kicks in immediately. Dedicated media engineers spin up war rooms within minutes.',
  },
  {
    step: '04',
    phase: 'RECOVER',
    title: 'CDN Failover',
    desc: 'Active-active hot-swaps redirect video ingestion paths and player traffic within sub-second thresholds.',
  },
  {
    step: '05',
    phase: 'REVIEW',
    title: 'Blameless Post-Mortem',
    desc: 'Every incident triggers a blameless RCA review, published openly to our customer trust center within 48 hours.',
  },
];

export default function IncidentResponseMonitoringSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (101).png"
          alt="Incident Response Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-gray-950/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-3">
          <span className="text-teal-400 text-sm font-bold font-['Space_Grotesk'] uppercase tracking-widest">
            OPERATIONS &amp; CONTINUITY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            Incident response, monitoring, and operational continuity
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Guaranteed video delivery is backed by micro-level threat tracking, real-time alert telemetry, hot-standby architectures, and clear response SLAs.
          </p>
        </div>

        {/* 5 Incident Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="px-2 py-1 bg-teal-400/10 rounded border border-teal-400 text-teal-400 text-xs font-bold font-['Space_Grotesk']">
                  {st.step}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                  {st.phase}
                </span>
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">
                  {st.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Detail Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Uptime Box */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Uptime Commitments &amp; SLAs
              </h3>
              <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
                We stand behind our broadcast-grade stream delivery framework with financially backed guarantees.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 bg-gray-900 rounded-lg border border-gray-800 flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-medium font-['Inter']">Guaranteed SLA</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-teal-400 text-3xl font-bold font-['Space_Grotesk']">99.99</span>
                  <span className="text-slate-400 text-base font-bold font-['Space_Grotesk']">%</span>
                </div>
              </div>

              <div className="p-5 bg-gray-900 rounded-lg border border-gray-800 flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-medium font-['Inter']">P0 Response Target</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-teal-400 text-3xl font-bold font-['Space_Grotesk']">15</span>
                  <span className="text-slate-400 text-base font-bold font-['Space_Grotesk']">MIN</span>
                </div>
              </div>

              <div className="p-5 bg-gray-900 rounded-lg border border-gray-800 flex flex-col gap-2">
                <span className="text-slate-400 text-xs font-medium font-['Inter']">Ingress Hot-Standbys</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-teal-400 text-3xl font-bold font-['Space_Grotesk']">2:1</span>
                  <span className="text-slate-400 text-base font-bold font-['Space_Grotesk']">N+1</span>
                </div>
              </div>
            </div>
          </div>

          {/* DR Box */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold font-['Space_Grotesk']">
                Operational Continuity &amp; DR
              </h3>
              <p className="text-slate-400 text-base font-normal font-['Inter'] leading-relaxed">
                Our active-active media processing infrastructure ensures resilience against full region failures.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-gray-800">
              <div className="py-3 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Check className="size-4 text-teal-400 shrink-0" />
                  <span className="text-white text-sm font-normal font-['Inter']">Multi-region active-active transcoding</span>
                </div>
                <span className="px-2 py-1 bg-teal-400/10 text-teal-400 rounded text-xs font-bold font-['Space_Grotesk'] uppercase">
                  continuous
                </span>
              </div>

              <div className="py-3 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Check className="size-4 text-teal-400 shrink-0" />
                  <span className="text-white text-sm font-normal font-['Inter']">Multi-CDN dynamic fallback routing</span>
                </div>
                <span className="px-2 py-1 bg-teal-400/10 text-teal-400 rounded text-xs font-bold font-['Space_Grotesk'] uppercase">
                  automated
                </span>
              </div>

              <div className="py-3 flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <Check className="size-4 text-teal-400 shrink-0" />
                  <span className="text-white text-sm font-normal font-['Inter']">Isolated DRM key recovery cycles</span>
                </div>
                <span className="px-2 py-1 bg-teal-400/10 text-teal-400 rounded text-xs font-bold font-['Space_Grotesk'] uppercase">
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* System Transparency Banner */}
        <div className="p-6 bg-teal-400/5 rounded-xl border border-teal-400/20 flex items-center gap-4">
          <AlertCircle className="size-6 text-teal-400 shrink-0" />
          <p className="text-teal-400 text-base font-normal font-['Inter'] leading-relaxed">
            <span className="font-bold">System Transparency:</span> All active incidents, service interruptions, and historical post-incident RCAs are consultable by developers and enterprise compliance officers in our central Trust Center portal.
          </p>
        </div>
      </div>
    </section>
  );
}
