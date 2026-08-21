import React from 'react';
import {
  FileText,
  FolderKanban,
  Film,
  Disc,
  Sliders,
  Languages,
  Archive,
  Code,
  Database,
  Folder,
  PlayCircle,
  Video,
  Edit,
  Subtitles,
  Link,
} from 'lucide-react';

const tasks = [
  {
    title: 'Find the authoritative media record',
    desc: 'Access the immutable object origin, historical relationship graphs, ownership, and present readiness metrics.',
    icon: Database,
  },
  {
    title: 'Organize media for recurring use',
    desc: 'Establish stable multi-version relationships, secure metadata definitions, and assign clear steward roles.',
    icon: Folder,
  },
  {
    title: 'Prepare media for on-demand use',
    desc: 'Qualify files against accessibility targets, translate audio tracks, and assert compliance parameters.',
    icon: PlayCircle,
  },
  {
    title: 'Manage a recording or replay',
    desc: 'Orchestrate capture handoffs, verify track integrity, and assert downstream usage rights cleanly.',
    icon: Video,
  },
  {
    title: 'Fix metadata, rights, or version context',
    desc: 'Trigger audit-logged corrections to stable assets with complete actor accountability and version history.',
    icon: Edit,
  },
  {
    title: 'Add or review captions/languages',
    desc: 'Associate certified WebVTT transcription files, check accuracy metrics, and define default locales.',
    icon: Subtitles,
  },
  {
    title: 'Preserve, retain, export, or delete',
    desc: 'Enforce organizational storage policies, handle legal hold parameters, and execute programmatic deletion.',
    icon: Archive,
  },
  {
    title: 'Integrate media records programmatically',
    desc: 'Sync stable URN identities and lifecycle events directly with external asset databases and CMS paths.',
    icon: Link,
  },
];

export default function WhatDoYouNeedToDoSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            What do you need to do?
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal   leading-relaxed max-w-3xl">
            Select your active management task to routing into the precise programmatic pipeline, readiness verification, and access controls required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasks.map((task, idx) => {
            const Icon = task.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-teal-500/50 transition-all flex flex-col gap-4 group cursor-pointer"
              >
                <div className="size-10 bg-indigo-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-teal-400/20 transition-colors">
                  <Icon className="size-5 text-blue-600" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-slate-900 text-base font-bold   group-hover:text-teal-600 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal   leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
