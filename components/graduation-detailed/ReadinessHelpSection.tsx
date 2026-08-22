'use client';

import React from 'react';
import { AlertTriangle, CircleAlert } from 'lucide-react';

export default function ReadinessHelpSection() {
  const checks = [
    {
      label: 'Event definition — date, time zone, venue, ceremony instance, owner',
      status: 'Ready',
      statusStyle: 'bg-cyan-50 text-cyan-705 border-cyan-200'
    },
    {
      label: 'Program — current version, source, owner, changes since test',
      status: 'Approved',
      statusStyle: 'bg-cyan-50 text-cyan-705 border-cyan-200'
    },
    {
      label: 'Source & audio — video, audio, graphics, contribution inputs, test result',
      status: 'Test scheduled',
      statusStyle: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    {
      label: 'Connectivity — primary and backup, last verification',
      status: 'Verified',
      statusStyle: 'bg-cyan-50 text-cyan-705 border-cyan-200'
    },
    {
      label: 'Audience access — intent, verified mode, guest instructions, recovery',
      status: 'Configured',
      statusStyle: 'bg-cyan-50 text-cyan-705 border-cyan-200'
    },
    {
      label: 'Accessibility — caption, language, assistive needs and provider state',
      status: 'Provider pending',
      statusStyle: 'bg-amber-100 text-amber-800 border-amber-200'
    },
    {
      label: 'Recording & replay — intent, authorization, retention and access',
      status: 'Decision needed',
      statusStyle: 'bg-violet-100 text-violet-700 border-violet-200'
    },
    {
      label: 'Support — pre-event and active-event contact, escalation',
      status: 'Assigned',
      statusStyle: 'bg-cyan-50 text-cyan-705 border-cyan-200'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-zinc-900 transition-colors duration-200 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-14 text-left">
        
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Preflight, change-since-test, and active-event help
          </h2>
          <p className="text-gray-650 text-base sm:text-lg">
            Readiness is derived from named dimensions — no hidden green status. A material change to venue, source, program, access, captions, contribution path, or timing reverts affected checks to &quot;review required.&quot;
          </p>
        </div>

        {/* List of Readiness checks */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col shadow-md">
          {checks.map((check, idx) => (
            <div 
              key={idx}
              className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <span className="text-zinc-900 text-xs sm:text-sm font-medium">
                {check.label}
              </span>
              <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${check.statusStyle}`}>
                {check.status}
              </span>
            </div>
          ))}
        </div>

        {/* Active-event help banner */}
        <div className="p-4 sm:p-5 bg-red-500/5 rounded-xl  flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex justify-center items-center text-red-500 text-lg flex-shrink-0">
              <CircleAlert className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-zinc-900 text-sm font-bold block sm:inline mr-2">
                Event in progress? Get help.
              </span>
              <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Routes directly to operational support — never a sales form. Only safe context is preserved in the handoff.
              </span>
            </div>
          </div>
          <a 
            href="#" 
            className="text-violet-605 text-sm sm:text-base font-bold hover:underline self-start md:self-center shrink-0"
          >
            Active-event help &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
