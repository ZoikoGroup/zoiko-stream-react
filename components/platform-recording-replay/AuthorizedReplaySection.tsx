import React from 'react';
import Image from 'next/image';
import { Check, AlertTriangle, PieChart } from 'lucide-react';

export default function AuthorizedReplaySection() {
  return (
    <section className="w-full bg-slate-50 border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-950">
            From verified recording to authorized replay
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal  ">
            Replay readiness is independently verified - media, rights, accessibility, audience, and lifecycle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Review Card */}
          <div className="p-6 bg-zinc-900 text-white rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center pb-2 border-b border-gray-800">
              <span className="text-white text-base font-bold  ">
                Replay Readiness Review
              </span>
              <span className="px-2 py-0.5 bg-teal-400/10 rounded text-teal-400 text-xs font-bold  ">
                SECURE REPLAY
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Media integrity</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  Ready <Check className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Metadata</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  Satisfied <Check className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Rights/privacy</span>
                <span className="px-2.5 py-1 bg-amber-950 rounded text-amber-500 text-xs font-bold   flex items-center gap-1">
                  Needs review <AlertTriangle className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Accessibility/language</span>
                <span className="px-2.5 py-1 bg-blue-950 rounded text-blue-400 text-xs font-bold   flex items-center gap-1">
                  In preparation <PieChart className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Corrections</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  None pending <Check className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Audience/access</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  Authorized <Check className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Playback policy</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  Verified <Check className="size-3" />
                </span>
              </div>

              <div className="pb-2 border-b border-gray-800/80 flex justify-between items-center">
                <span className="text-slate-400 text-sm  ">Lifecycle/expiry</span>
                <span className="px-2.5 py-1 bg-emerald-950 rounded text-teal-400 text-xs font-bold   flex items-center gap-1">
                  Active <Check className="size-3" />
                </span>
              </div>
            </div>

            <div className="pt-2 text-center text-slate-400 text-xs   border-t border-gray-800">
              Decision: Ready for authorized publication
            </div>
          </div>

          {/* Right Replay Card */}
          <div className="p-6 bg-zinc-900 text-white rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center pb-3 border-b border-gray-800">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-white text-base font-bold  ">
                  Replay: Main Stage Keynote
                </h3>
                <p className="text-slate-500 text-xs font-normal  ">
                  Asset v2.1 • SLA Standard
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-950 rounded text-teal-400 text-xs font-bold  ">
                  Available
                </span>
                <span className="px-2 py-0.5 bg-blue-950 rounded text-blue-400 text-xs font-bold  ">
                  Authorized
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 flex flex-col gap-2.5">
                <span className="text-slate-500 text-xs font-bold   uppercase tracking-wider">
                  Readiness Criteria
                </span>
                <ul className="text-slate-400 text-xs font-normal   space-y-1">
                  <li>• SRT Handoff verified</li>
                  <li>• DRM Keys generated</li>
                  <li>• Subtitles processed (EN, ES)</li>
                  <li>• Active whitelist validated</li>
                </ul>
              </div>

              <div className="relative w-full sm:w-60 h-32 rounded-lg overflow-hidden shrink-0 border border-gray-800">
                <Image
                  src="/images/platform-recording-replay/PreviewPlaceholder.png"
                  alt="Keynote Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-gray-800 flex flex-col gap-2">
              <span className="text-slate-500 text-xs font-bold   uppercase tracking-wider">
                Evidence Pipeline Timeline
              </span>
              <div className="flex items-center gap-1.5 flex-wrap text-xs">
                <span className="text-teal-400 font-medium">Recording</span>
                <span className="text-slate-500">→</span>
                <span className="text-teal-400 font-medium">Asset Reg</span>
                <span className="text-slate-500">→</span>
                <span className="text-amber-500 font-medium">Replay Review</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-400 font-medium">Publication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
