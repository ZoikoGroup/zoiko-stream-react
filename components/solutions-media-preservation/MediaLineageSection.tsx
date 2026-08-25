import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import {
  Database,
  Link as LinkIcon,
  Play,
  SquarePen,
  Trash2,
  GitCompare,
  Eye,
  AlertTriangle,
  CloudUpload,
  BookOpen,
} from 'lucide-react';

const userActions = [
  { label: 'Compare Metadata Versions', icon: GitCompare },
  { label: 'View Complete Lineage Graph', icon: Eye },
  { label: 'Mark Object as Superseded', icon: AlertTriangle },
  { label: 'Publish/Withdraw Derivative', icon: CloudUpload },
  { label: 'Review Correction Evidence', icon: BookOpen },
];

export function MediaLineageSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lineage Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Never rewrite history silently
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Trustworthy lineage for corrected, edited, transcoded, or enhanced versions.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Media Lineage Manifest */}
          <div className="lg:col-span-7 p-8 bg-white/90 rounded-2xl border-[1.5px] border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl font-bold ">Media Lineage Manifest</h3>
            
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-base font-bold ">Source/Reference Object [v1.0]</h4>
                  <span className="text-slate-600 text-xs font-normal ">Original contribution · Created Jan 14, 2026</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg border-[1.5px] border-blue-500 flex items-center justify-center shrink-0 bg-white">
                  <LinkIcon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold ">Access Derivative [Transcoded v1.1]</h4>
                  <span className="text-slate-600 text-xs font-normal ">H.264 Web optimized · Decoupled from core</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg border-[1.5px] border-teal-400 flex items-center justify-center shrink-0 bg-white">
                  <Play className="w-4 h-4 text-teal-400" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold ">Replay Derivative [Clip-HLS]</h4>
                  <span className="text-slate-600 text-xs font-normal ">Segmented delivery play track</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                  <SquarePen className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold ">Corrected Version [v1.0-corrected]</h4>
                  <span className="text-slate-600 text-xs font-normal ">Reason: Frame Drop Repair · Owner: Systems Lead · Date: Feb 20, 2026</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-center gap-4 opacity-40">
                <div className="w-9 h-9 rounded-lg bg-gray-400 flex items-center justify-center shrink-0">
                  <Trash2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold  line-through">Superseded Reference Object [v0.9]</h4>
                  <span className="text-slate-600 text-xs font-normal ">Withdrawn from active directory paths</span>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg border-[1.5px] border-teal-400 flex items-center justify-center shrink-0 bg-white">
                  <Play className="w-4 h-4 text-teal-400" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold ">Language/Accessibility Artifact [Caption Set v2.1]</h4>
                  <span className="text-slate-600 text-xs font-normal ">EN-US captions synced from transcript</span>
                </div>
              </div>

              {/* Item 7 */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg border-[1.5px] border-blue-500 flex items-center justify-center shrink-0 bg-white">
                  <LinkIcon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-slate-900 text-sm font-bold ">Thumbnail/Poster Derivative</h4>
                  <span className="text-slate-600 text-xs font-normal ">Auto-generated at ingest · 1920×1080</span>
                </div>
              </div>

              <div className="w-full border-t border-gray-200 pt-3 flex items-center gap-3">
                <div className="px-2.5 py-1.5 bg-amber-500/10 rounded-full border border-amber-500 flex items-center gap-2">
                  <SquarePen className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-amber-500 text-xs font-bold ">Publication State</span>
                </div>
                <span className="text-slate-600 text-xs font-normal ">Current state: Published (active)</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Constraints & User Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Lineage Constraints */}
            <div className="p-6 bg-white/90 rounded-xl border-[1.5px] border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
              <h3 className="text-slate-900 text-base font-bold ">Lineage Constraints</h3>
              <ul className="text-slate-600 text-xs font-normal  leading-5 flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span>Every derived object must hold an unalterable cryptographically signed link back to its parent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span>Supersession never destroys historical provenance or metadata records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span>Explicit justification (reason, owner, timestamp) is required before registering any corrected variant.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span>Prior evidence chains remain immutable and accessible after version updates.</span>
                </li>
              </ul>
            </div>

            {/* User Actions */}
            <div className="p-6 bg-white/90 rounded-xl border-[1.5px] border-gray-200 flex flex-col gap-4 shadow-sm backdrop-blur-sm">
              <h3 className="text-slate-900 text-base font-bold ">User Actions</h3>
              <div className="flex flex-col gap-2">
                {userActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <div key={idx} className="p-3 rounded-lg border border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                      <Icon className="w-4 h-4 text-slate-700 shrink-0" />
                      <span className="text-slate-900 text-sm font-bold ">{action.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
