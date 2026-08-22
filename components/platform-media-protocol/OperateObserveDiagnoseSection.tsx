import React from 'react';
import { Activity, AlertTriangle, RefreshCw, FileText, AlertCircle } from 'lucide-react';

const healthStates = [
  { num: '1. Preparing', desc: 'Initializing handshake parameters', badge: 'PENDING', badgeClass: 'border-blue-500 text-blue-600', dotBg: 'bg-blue-500' },
  { num: '2. Connecting', desc: 'Negotiating socket allocation & security', badge: 'WAITING', badgeClass: 'border-amber-500 text-amber-600', dotBg: 'bg-amber-500' },
  { num: '3. Connected', desc: 'Active payload streaming within SLA', badge: 'ACTIVE', badgeClass: 'border-emerald-500 text-emerald-600', dotBg: 'bg-emerald-500' },
  { num: '4. Degraded', desc: 'Jitter or packet-loss threshold breach', badge: 'WARNING', badgeClass: 'border-red-500 text-red-600', dotBg: 'bg-red-500' },
  { num: '5. Retrying', desc: 'Executing backoff retry timeline', badge: 'ATTEMPT', badgeClass: 'border-indigo-500 text-indigo-600', dotBg: 'bg-indigo-500' },
  { num: '6. Failed', desc: 'Terminal drop, recovery route engaged', badge: 'CRITICAL', badgeClass: 'border-red-900 text-red-900', dotBg: 'bg-red-900' },
  { num: '7. Ended', desc: 'Session closed and evidence archived', badge: 'CLOSED', badgeClass: 'border-slate-500 text-slate-500', dotBg: 'bg-slate-500' },
];

const featureCards = [
  {
    title: 'Health monitoring',
    desc: 'Observable indicators and source authority with interpretation limits',
    icon: Activity,
  },
  {
    title: 'Error taxonomy',
    desc: 'Stable public error categories from maintained documentation',
    icon: AlertCircle,
  },
  {
    title: 'Retry & reconnect',
    desc: 'Client/platform responsibility, timing, backoff limits, terminal conditions',
    icon: RefreshCw,
  },
  {
    title: 'Status & changelog',
    desc: 'System Status as authoritative service-health destination',
    icon: FileText,
  },
];

export default function OperateObserveDiagnoseSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Operate, observe, diagnose, and recover
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Monitor connection health, understand errors, and follow verified recovery paths.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left States Box */}
          <div className="lg:col-span-6">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-5">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] tracking-wider uppercase">
                CONNECTION HEALTH STATES
              </h3>

              <div className="flex flex-col gap-3">
                {healthStates.map((hs, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center"
                  >
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <div className={`size-2 rounded-full ${hs.dotBg}`} />
                        <span className="text-slate-900 text-sm font-semibold font-['Inter']">
                          {hs.num}
                        </span>
                      </div>
                      <span className="text-slate-600 text-xs font-normal font-['Inter']">
                        {hs.desc}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono border ${hs.badgeClass}`}>
                      {hs.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4 Grid Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureCards.map((fc, idx) => {
              const Icon = fc.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col gap-4 hover:shadow-md hover:border-teal-500/50 transition-all"
                >
                  <div className="size-9 bg-blue-500/10 rounded-md flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                      {fc.title}
                    </h4>
                    <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                      {fc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
