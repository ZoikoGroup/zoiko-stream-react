import React from 'react';
import Image from 'next/image';

import bg130 from '@/public/images/secure-enterprise/bg (137).png';

const incidentSteps = [
  { num: '01', title: 'Detection', active: false },
  { num: '02', title: 'Alert Dispatch', active: false },
  { num: '03', title: 'Investigation', active: false },
  { num: '04', title: 'Escalation', active: false },
  { num: '05', title: 'Mitigation', active: true },
  { num: '06', title: 'Post-Event Audit', active: false },
];

export default function TelemetryIncidentReadinessSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg130}
          alt="Telemetry Background"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight">
            See what&apos;s happening. Act before it escalates
          </h2>
          <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed max-w-3xl">
            Active stream telemetry monitors client state, unauthorized recording indicators, and access anomalies with deterministic failover pathways.
          </p>
        </div>

        {/* 6-Step Incident Pipeline Stepper */}
        <div className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-wrap justify-between items-center gap-4">
          {incidentSteps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2.5">
                <span
                  className={`px-2 py-1 rounded text-xs font-bold font-['Space_Grotesk'] ${
                    st.active
                      ? 'bg-teal-400/10 border border-teal-400/40 text-teal-400'
                      : 'bg-gray-800 text-slate-400'
                  }`}
                >
                  {st.num}
                </span>
                <span className="text-white text-xs font-semibold font-['Space_Grotesk']">
                  {st.title}
                </span>
              </div>
              {idx < incidentSteps.length - 1 && (
                <span className="text-teal-400 font-bold hidden sm:inline">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Active Incident Readiness Telemetry Box */}
        <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-base font-bold font-['Space_Grotesk']">
              ACTIVE INCIDENT READINESS &amp; TELEMETRY
            </h3>
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-['Space_Grotesk'] rounded-full">
              SYSTEM HEALTHY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 bg-gray-950 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-semibold font-['Space_Grotesk']">
                ACTIVE AUTHORIZATIONS
              </span>
              <span className="text-white text-3xl font-bold font-['Space_Grotesk']">
                4,812 / sec
              </span>
            </div>

            <div className="p-5 bg-gray-950 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-semibold font-['Space_Grotesk']">
                DENIAL BLOCK TRENDS
              </span>
              <span className="text-red-400 text-3xl font-bold font-['Space_Grotesk']">
                14 blocked
              </span>
            </div>

            <div className="p-5 bg-gray-950 rounded-lg border border-gray-800 flex flex-col gap-2">
              <span className="text-slate-400 text-xs font-semibold font-['Space_Grotesk']">
                FAILOVER AVAILABILITY
              </span>
              <span className="text-emerald-400 text-3xl font-bold font-['Space_Grotesk']">
                99.998%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
