import React from 'react';
import { Check } from 'lucide-react';

const checklistItems = [
  'Environment (test vs. live) selected',
  'Credential generated and stored server-side only',
  'Scope limited to what this integration actually needs',
  'Secret rotation plan understood',
];

export function PrerequisitesBeforeRequestsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-16 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        {/* Header Block */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-blue-600 text-xs font-mono font-semibold uppercase tracking-wider">
              PREREQUISITES BEFORE REQUESTS
            </span>
          </div>
          <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold leading-tight">
            Know what must be available before you call an API.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-[850px]">
            Access state, credential handling, least privilege, secret hygiene, and environment separation — authentication is not authorization, and this page keeps that distinction explicit.
          </p>
        </div>

        {/* 3 Architecture Role Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-200 flex flex-col gap-3 shadow-xs">
            <span className="text-zinc-900 text-xs font-mono font-semibold uppercase tracking-wider">
              YOUR SERVER
            </span>
            <div className="space-y-1.5 text-xs text-gray-600">
              <p>• Holds the long-lived API credential</p>
              <p>• Requests scoped by least privilege</p>
            </div>
          </div>

          <div className="p-6 bg-fuchsia-100/70 rounded-2xl border border-pink-200 flex flex-col gap-3 shadow-xs">
            <span className="text-zinc-900 text-xs font-mono font-semibold uppercase tracking-wider">
              CLIENT
            </span>
            <div className="space-y-1.5 text-xs text-gray-600">
              <p>• Never receives the server credential</p>
              <p>• Uses a scoped, short-lived artifact only</p>
            </div>
          </div>

          <div className="p-6 bg-emerald-50 rounded-2xl border border-green-200 flex flex-col gap-3 shadow-xs">
            <span className="text-zinc-900 text-xs font-mono font-semibold uppercase tracking-wider">
              ZOIKOSTREAM
            </span>
            <div className="space-y-1.5 text-xs text-gray-600">
              <p>• Validates identity and scope</p>
              <p>• Enforces environment separation</p>
            </div>
          </div>
        </div>

        {/* 4 Availability Status Boxes */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col gap-1 shadow-xs">
            <h3 className="text-zinc-900 text-xs font-bold">Available</h3>
            <p className="text-gray-500 text-xs">Your account can authenticate now.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col gap-1 shadow-xs">
            <h3 className="text-zinc-900 text-xs font-bold">Sign-in required</h3>
            <p className="text-gray-500 text-xs">Log in to continue.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col gap-1 shadow-xs">
            <h3 className="text-zinc-900 text-xs font-bold">Workspace required</h3>
            <p className="text-gray-500 text-xs">Finish workspace setup first.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-gray-200 flex flex-col gap-1 shadow-xs">
            <h3 className="text-zinc-900 text-xs font-bold">Access pending</h3>
            <p className="text-gray-500 text-xs">A review is in progress.</p>
          </div>
        </div>

        {/* Checklist */}
        <div className="w-full max-w-[760px] flex flex-col gap-3 pt-2">
          {checklistItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <div className="w-5 h-5 rounded bg-white border border-gray-400 flex items-center justify-center shrink-0">
              </div>
              <span className="text-zinc-900 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-slate-950 font-bold text-base hover:opacity-95 transition-opacity shadow-md">
            Check developer access
          </button>
          <button className="px-6 py-3 bg-zinc-100 rounded-xl border border-gray-800 text-zinc-900 font-bold text-base hover:bg-zinc-200 transition-colors">
            Read Authentication
          </button>
        </div>
      </div>
    </section>
  );
}
