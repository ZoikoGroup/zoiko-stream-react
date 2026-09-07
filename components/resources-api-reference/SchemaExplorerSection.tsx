'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';

interface SchemaField {
  name: string;
  type: string;
  badge: string;
  badgeType: 'readonly' | 'required' | 'sensitive';
  description: string;
  values?: string[];
}

const SCHEMA_FIELDS: SchemaField[] = [
  {
    name: 'id',
    type: 'STRING',
    badge: 'READ-ONLY',
    badgeType: 'readonly',
    description: 'Unique stream identifier. Generated automatically upon stream instantiation.',
  },
  {
    name: 'title',
    type: 'STRING',
    badge: 'REQUIRED',
    badgeType: 'required',
    description: 'Stream display name. Used inside client dashboards and event tables.',
  },
  {
    name: 'status',
    type: 'ENUM',
    badge: 'READ-ONLY',
    badgeType: 'readonly',
    description: 'Current playback status. Dynamic updates propagate via webhooks instantly.',
    values: ['idle', 'connected', 'active', 'disconnected'],
  },
  {
    name: 'stream_key',
    type: 'STRING',
    badge: 'SENSITIVE',
    badgeType: 'sensitive',
    description: 'Ingest authentication token used by contribution encoders. Masked in read operations.',
  },
];

export default function SchemaExplorerSection() {
  const getBadgeClass = (type: SchemaField['badgeType']) => {
    switch (type) {
      case 'readonly':
        return 'bg-blue-50 text-blue-600 border border-blue-200/80';
      case 'required':
        return 'bg-rose-50 text-rose-600 border border-rose-200/80';
      case 'sensitive':
        return 'bg-amber-50 text-amber-600 border border-amber-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-200';
    }
  };

  return (
    <section className="relative w-full bg-[#fafbfc] py-20 lg:py-28 overflow-hidden">
      {/* Topographic contour background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <g stroke="#0f172a" strokeOpacity="0.06" strokeWidth="1">
            <path d="M-80 80 C 240 0, 520 200, 880 90 S 1280 -10, 1520 100" />
            <path d="M-80 150 C 270 60, 560 260, 920 150 S 1320 50, 1520 160" />
            <path d="M-80 220 C 300 120, 600 320, 960 210 S 1360 110, 1520 220" />
            <path d="M-80 500 C 230 580, 500 440, 830 540 S 1240 620, 1520 500" />
            <path d="M-80 570 C 260 650, 540 500, 870 610 S 1280 680, 1520 570" />
            <path d="M-80 640 C 290 720, 580 560, 910 680 S 1320 740, 1520 640" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight mb-3">
            Schema explorer
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl leading-relaxed">
            Inspect object structures, types, requiredness constraints, and lifecycle states extracted from verified contracts.
          </p>
        </div>

        {/* Schema Explorer Card */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
          {/* Card Header: Schema Name + Badge + Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 sm:p-8 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="font-mono font-bold text-slate-900 text-lg sm:text-xl">
                StreamObject
              </span>
              <span className="font-mono text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded tracking-wider uppercase">
                OBJECT SCHEMA
              </span>
            </div>

            <span className="font-mono text-xs text-slate-400">
              Stream resource representation model
            </span>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto px-6 sm:px-8">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-slate-100">
                {SCHEMA_FIELDS.map((field) => (
                  <tr key={field.name} className="align-top">
                    {/* Field Column (Left) */}
                    <td className="py-6 pr-6 w-48 sm:w-64 align-top whitespace-nowrap">
                      <div className="font-mono font-bold text-slate-900 text-sm mb-1.5">
                        {field.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
                          {field.type}
                        </span>
                        <span
                          className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${getBadgeClass(
                            field.badgeType
                          )}`}
                        >
                          {field.badge}
                        </span>
                      </div>
                    </td>

                    {/* Description Column (Right) */}
                    <td className="py-6 pl-2 align-top">
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {field.description}
                      </p>

                      {field.values && (
                        <div className="font-mono text-xs text-blue-600 mt-2 flex flex-wrap items-center gap-1.5">
                          <span className="text-slate-400 font-sans">Values:</span>
                          {field.values.map((val, idx) => (
                            <React.Fragment key={val}>
                              <span className="text-blue-600">&quot;{val}&quot;</span>
                              {idx < field.values!.length - 1 && (
                                <span className="text-slate-300">|</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Footer: Legend + View All Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-slate-100">
            <div className="flex items-center gap-5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Current</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Deprecated</span>
              </div>
            </div>

            <Link
              href="/developer-api-reference"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View all schemas
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
