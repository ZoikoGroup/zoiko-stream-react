import React from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const accessibilityRows = [
  { type: 'Captions', lang: 'EN-US', prov: 'Speech-to-Text (Auto)', state: 'Published', stateCls: 'bg-teal-400/10 text-teal-400 border-teal-400', ver: 'v2.1', pub: 'Active', access: 'Public', updated: '8 hours ago', rel: 'Direct time-sync reference track' },
  { type: 'Subtitles', lang: 'ES-ES', prov: 'Professional Translation', state: 'Approved', stateCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500', ver: 'v1.0', pub: 'Staged', access: 'Gated', updated: '1 day ago', rel: 'Localized alternative language stream' },
  { type: 'Transcript', lang: 'EN-US', prov: 'Manual Correction', state: 'Needs Review', stateCls: 'bg-amber-500/10 text-amber-500 border-amber-500', ver: 'v1.2', pub: 'Pending', access: 'Internal', updated: '2 hours ago', rel: 'Compliance text log, searchable' },
  { type: 'Translation', lang: 'FR-FR', prov: 'Neural MT Model', state: 'Draft', stateCls: 'bg-blue-500/10 text-blue-500 border-blue-500', ver: 'v0.9', pub: 'Draft', access: 'Sandbox', updated: '3 days ago', rel: 'Experimental subtitle layer' },
  { type: 'Audio-Description Asset', lang: 'EN-GB', prov: 'Voice Artist Rec', state: 'Published', stateCls: 'bg-teal-400/10 text-teal-400 border-teal-400', ver: 'v1.1', pub: 'Active', access: 'Public', updated: '12 hours ago', rel: 'Secondary audio track mix-in' },
  { type: 'Sign-Language Asset', lang: 'ASL', prov: 'Studio Camera feed', state: 'Superseded', stateCls: 'bg-gray-500/10 text-gray-400 border-gray-400', ver: 'v1.0', pub: 'Archived', access: 'Public', updated: '1 week ago', rel: 'Secondary picture-in-picture video track' },
  { type: 'Text Summary/Alternative', lang: 'EN-US', prov: 'AI Synthesized', state: 'Withdrawn', stateCls: 'bg-red-500/10 text-red-500 border-red-500', ver: 'v1.0', pub: 'Removed', access: 'Restricted', updated: '2 weeks ago', rel: 'Static landing page alternative content' },
];

export function AccessibilityArtifactsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solution-media-preservation/bg (14).png"
          alt="Accessibility Artifacts Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[50px]">
            Preserve the experience, not just the picture
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Keep accessibility and language artifacts connected, versioned, and reviewable.
          </p>
        </div>

        {/* Accessibility Artifacts Table */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border-[1.5px] border-gray-800 flex flex-col gap-5 backdrop-blur-sm overflow-x-auto">
          <div className="w-full min-w-[1000px] p-3 bg-slate-900 rounded-md flex justify-start items-center gap-3 text-xs font-bold  text-white">
            <span className="w-40">Artifact Type</span>
            <span className="w-20">Language</span>
            <span className="w-40">Provenance / Source</span>
            <span className="w-32 text-center">Review State</span>
            <span className="w-16 text-center">Version</span>
            <span className="w-28 text-center">Publication</span>
            <span className="w-24">Access Type</span>
            <span className="w-28">Last Updated</span>
            <span className="flex-1">Relationship to Media</span>
          </div>

          <div className="w-full min-w-[1000px] flex flex-col divide-y divide-gray-800 text-xs ">
            {accessibilityRows.map((r, idx) => (
              <div key={idx} className="p-4 flex justify-start items-center gap-3 hover:bg-gray-800/40 transition-colors">
                <span className="w-40 text-white font-bold ">{r.type}</span>
                <span className="w-20 text-slate-400 font-normal">{r.lang}</span>
                <span className="w-40 text-slate-400 font-normal ">{r.prov}</span>
                <div className="w-32 flex justify-center">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase ${r.stateCls}`}>
                    {r.state}
                  </span>
                </div>
                <span className="w-16 text-center text-slate-400 font-normal">{r.ver}</span>
                <span className="w-28 text-center text-slate-400 font-normal ">{r.pub}</span>
                <span className="w-24 text-slate-400 font-normal ">{r.access}</span>
                <span className="w-28 text-slate-400 font-normal ">{r.updated}</span>
                <span className="flex-1 text-slate-400 font-normal  truncate">{r.rel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Continuity Rule Notice Bar */}
        <div className="w-full p-5 bg-slate-950/80 rounded-lg border border-gray-800 flex items-center gap-4">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-3.5 h-4 text-teal-400 " />
          </div>
          <p className="text-white text-sm font-bold  leading-5">
            Continuity Rule:{' '}
            <span className="text-slate-400 font-normal">
              A corrected artifact does not silently overwrite prior provenance; a new version references what it supersedes, preserving historical audits intact.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
