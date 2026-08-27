import React from 'react';
import { Monitor, Code2, Shield, Clock, CheckCircle2 } from 'lucide-react';

const boundaryItems = [
  {
    title: 'Source / encoder',
    icon: Monitor,
  },
  {
    title: 'Contribution connection',
    icon: Code2,
  },
  {
    title: 'Auth / authorization',
    icon: Shield,
  },
  {
    title: 'Media arrival',
    icon: Clock,
  },
  {
    title: 'Ingest acceptance',
    icon: CheckCircle2,
  },
];

export function DiagnoseFromBoundarySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-50 border-b border-zinc-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
              DIAGNOSE FROM THE BOUNDARY
            </span>
          </div>

          <h2 className="text-neutral-700 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Start at the source-to-ingest boundary.
          </h2>

          <p className="text-gray-500 text-base font-normal leading-6">
            ZoikoStream shows evidence it observes and clearly labels what must be checked on the customer/source side.
          </p>
        </div>

        {/* 5 Boundary Cards Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {boundaryItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col items-center justify-center gap-4 text-center shadow-xs"
              >
                <div className="w-10 h-10 bg-indigo-50/80 rounded-xl flex items-center justify-center text-indigo-500">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-neutral-700 text-xs font-bold">{item.title}</span>
              </div>
            );
          })}
        </div>

        <p className="text-gray-400 text-xs font-normal">
          Secret safety: full stream keys, tokens, credentialed URLs and sensitive headers are never displayed in monitoring UI or support copies.
        </p>
      </div>
    </section>
  );
}
