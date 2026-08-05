'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface Stage {
  name: string;
  isActive: boolean;
}

interface Workflow {
  id: string;
  title: string;
  stages: Stage[];
}

const LIFECYCLE_STAGES = [
  'Contribute',
  'Ingest',
  'Produce',
  'Secure',
  'Deliver',
  'Understand',
  'Preserve',
];

const WORKFLOWS: Workflow[] = [
  {
    id: 'live-product-video',
    title: 'Live product video',
    stages: [
      { name: 'Contribute', isActive: true },
      { name: 'Ingest', isActive: true },
      { name: 'Produce', isActive: false },
      { name: 'Secure', isActive: true },
      { name: 'Deliver', isActive: true },
      { name: 'Understand', isActive: true },
      { name: 'Preserve', isActive: false },
    ],
  },
  {
    id: 'enterprise-broadcast',
    title: 'Enterprise broadcast',
    stages: [
      { name: 'Contribute', isActive: true },
      { name: 'Ingest', isActive: true },
      { name: 'Produce', isActive: true },
      { name: 'Secure', isActive: true },
      { name: 'Deliver', isActive: true },
      { name: 'Understand', isActive: true },
      { name: 'Preserve', isActive: true },
    ],
  },
  {
    id: 'private-audience-delivery',
    title: 'Private audience delivery',
    stages: [
      { name: 'Contribute', isActive: false },
      { name: 'Ingest', isActive: true },
      { name: 'Produce', isActive: false },
      { name: 'Secure', isActive: true },
      { name: 'Deliver', isActive: true },
      { name: 'Understand', isActive: true },
      { name: 'Preserve', isActive: false },
    ],
  },
  {
    id: 'global-event-streaming',
    title: 'Global event streaming',
    stages: [
      { name: 'Contribute', isActive: true },
      { name: 'Ingest', isActive: true },
      { name: 'Produce', isActive: true },
      { name: 'Secure', isActive: false },
      { name: 'Deliver', isActive: true },
      { name: 'Understand', isActive: true },
      { name: 'Preserve', isActive: true },
    ],
  },
  {
    id: 'media-preservation',
    title: 'Media preservation',
    stages: [
      { name: 'Contribute', isActive: false },
      { name: 'Ingest', isActive: true },
      { name: 'Produce', isActive: false },
      { name: 'Secure', isActive: true },
      { name: 'Deliver', isActive: false },
      { name: 'Understand', isActive: false },
      { name: 'Preserve', isActive: true },
    ],
  },
  {
    id: 'operational-analytics',
    title: 'Operational analytics',
    stages: [
      { name: 'Contribute', isActive: false },
      { name: 'Ingest', isActive: false },
      { name: 'Produce', isActive: false },
      { name: 'Secure', isActive: false },
      { name: 'Deliver', isActive: false },
      { name: 'Understand', isActive: true },
      { name: 'Preserve', isActive: false },
    ],
  },
];

export default function KnownWorkflowSection() {
  // Default first accordion item to open, as shown in design export
  const [openWorkflowId, setOpenWorkflowId] = useState<string | null>(
    'live-product-video'
  );

  const toggleWorkflow = (id: string) => {
    setOpenWorkflowId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-zinc-950 px-4 py-16 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6">
        
        {/* Header Block */}
        <div className="flex max-w-2xl flex-col gap-4 pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            <span className="font-['IBM_Plex_Mono'] text-xs font-normal uppercase tracking-wide text-teal-400">
              START FROM A KNOWN WORKFLOW
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
            How workflows map to the platform.
          </h2>

          <p className="font-['Space_Grotesk'] text-base font-normal leading-relaxed text-slate-400 sm:text-lg">
            Open a workflow to see which of the seven ZoikoStream lifecycle stages it relies on.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {WORKFLOWS.map((workflow) => {
            const isOpen = openWorkflowId === workflow.id;

            return (
              <div
                key={workflow.id}
                className="overflow-hidden rounded-lg border border-gray-800 bg-zinc-900 transition-colors"
              >
                {/* Accordion Header Toggle */}
                <button
                  onClick={() => toggleWorkflow(workflow.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-zinc-800/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Space_Grotesk'] text-base font-bold text-slate-100">
                    {workflow.title}
                  </span>
                  <span className="text-slate-400 transition-transform">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div className="border-t border-gray-800 px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {workflow.stages.map((stage) => (
                        <span
                          key={stage.name}
                          className={`rounded-full px-3 py-1 font-['IBM_Plex_Mono'] text-xs font-normal leading-4 transition-colors ${
                            stage.isActive
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-zinc-800 text-slate-500'
                          }`}
                        >
                          {stage.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro-Disclaimer Note */}
        <p className="pt-1 font-['IBM_Plex_Mono'] text-xs font-normal leading-relaxed text-slate-500">
          “Primary,” “Validate,” and “As applicable” are wireframe placeholders, not public product claims — pending product-architecture validation before publication.
        </p>

        {/* Primary Call to Action */}
        <div className="pt-2">
          <Link
            href="/platform"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-[10px] border border-gray-700 px-6 py-3.5 font-['Inter'] text-base font-semibold text-slate-100 transition-colors hover:border-gray-500 hover:bg-zinc-900"
          >
            <span>Explore the platform</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}