import React from 'react';
import Image from 'next/image';
import { Search, ArrowRight } from 'lucide-react';
import bgPattern from '@/public/images/Organization-overview/bg (147).png';

const RECORDS = [
  {
    id: 'CHG-2026-042',
    tag: 'Changed',
    tagColor: 'text-amber-500',
    tagIcon: '●',
    title: 'Webhook delivery signatures use the current verification contract',
    description: 'Delivery metadata now identifies the signing contract explicitly. Existing integrations should verify the typed event schema before changing production handlers.',
    published: 'September 8, 2026 • 14:00 UTC',
    effective: 'September 22, 2026',
    affectedSurfaces: [
      { name: 'Webhooks - Event delivery', details: 'Event schema: zs.event.v3' }
    ],
    compatibility: 'Limited - scoped to signature verification',
    action: 'Review required',
    actionColor: 'text-amber-500',
    image: '/images/zoikostream-changelog/Entry image (1).png'
  },
  {
    id: 'CHG-2026-039',
    tag: 'Added',
    tagColor: 'text-emerald-500',
    tagIcon: '●',
    title: 'Playback session responses include a typed diagnostics reference',
    description: 'Approved API responses can now return a diagnostics reference for safer support correlation without exposing logs, secrets, or internal source identifiers.',
    published: 'August 26, 2026 • 09:30 UTC',
    effective: 'August 26, 2026',
    affectedSurfaces: [
      { name: 'Playback API - Developer support', details: 'API version: 2026-08' }
    ],
    compatibility: 'Compatible - additive response field',
    action: 'None',
    actionColor: 'text-emerald-500',
    image: '/images/zoikostream-changelog/Entry image (2).png'
  },
  {
    id: 'CHG-2026-031',
    tag: 'Deprecated',
    tagColor: 'text-rose-500',
    tagIcon: '●',
    title: 'Legacy live ingest profile moved to review-required lifecycle state',
    description: 'The historical ingest profile remains available while its current replacement and retirement timing are reverified. No stale deadline is presented as fact.',
    published: 'July 17, 2026 • 16:15 UTC',
    effective: 'Not separately specified',
    affectedSurfaces: [
      { name: 'Media protocols - Live ingest', details: 'Protocol profile: ingest-legacy-3' }
    ],
    compatibility: 'Unknown - source review in progress',
    action: 'Review required',
    actionColor: 'text-rose-500',
    actionWarning: 'Corrected August 2: lifecycle warning and affected scope',
    image: '/images/zoikostream-changelog/Entry image (3).png'
  },
  {
    id: 'CHG-2026-024',
    tag: 'Fixed',
    tagColor: 'text-blue-500',
    tagIcon: '●',
    title: 'Node SDK retry metadata now preserves the original request boundary',
    description: 'The current SDK release corrects retry metadata for approved read-only operations. Mutating operations retain their existing fail-closed guidance.',
    published: 'June 12, 2026 • 09:45 UTC',
    effective: 'June 12, 2026',
    affectedSurfaces: [
      { name: 'Server SDKs - Node.js', details: 'Package version: 3.4.1' }
    ],
    compatibility: 'Compatible - scoped fix',
    action: 'Update recommended',
    actionColor: 'text-blue-500',
    image: '/images/resources-changelog/Card-Image (3).png'
  }
];

export default function ChangelogRecordsSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 bg-slate-50 flex flex-col items-center overflow-hidden">
      
      {/* Background Topo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-40 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 w-full">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              Released changes, with implementation impact attached
            </h2>
            <p className="text-slate-500 text-base font-normal font-['Inter'] leading-relaxed">
              Published and effective dates stay distinct. Compatibility, action, affected surfaces, and typed versions remain source-governed and independently readable.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end p-4 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0">
            <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
              4 current records
            </span>
            <span className="text-slate-400 text-xs font-medium font-['Inter']">
              Published date - newest first
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="w-full bg-white border border-slate-200 rounded-xl p-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex-1 flex items-center gap-2 px-3 bg-slate-50 border border-slate-100 rounded-lg h-10 w-full max-w-md ml-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search change ID, API, SDK, event, protocol, player, or typed version"
              className="w-full h-full border-none bg-transparent focus:ring-0 text-sm font-['Inter'] text-slate-900 placeholder-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-2 shrink-0 pr-2 overflow-x-auto w-full sm:w-auto">
            <button className="px-4 py-2 bg-[#0A0D13] text-white rounded-full text-xs font-bold font-['Space_Grotesk'] whitespace-nowrap flex items-center gap-1.5">
              <span className="text-cyan-400 text-[10px]">●</span> All changes
            </button>
            <button className="px-4 py-2 bg-transparent text-slate-600 border border-slate-200 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap hover:bg-slate-50">
              Action required
            </button>
            <button className="px-4 py-2 bg-transparent text-slate-600 border border-slate-200 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap hover:bg-slate-50">
              Compatibility
            </button>
            <button className="px-4 py-2 bg-transparent text-slate-600 border border-slate-200 rounded-full text-xs font-medium font-['Space_Grotesk'] whitespace-nowrap hover:bg-slate-50">
              Affected surface
            </button>
          </div>
        </div>

        {/* Records List */}
        <div className="flex flex-col gap-6 w-full">
          {RECORDS.map((record, index) => (
            <div key={index} className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow">
              


              {/* Record Image */}
              <div className="w-full lg:w-60 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src={record.image}
                  alt={`${record.id} entry image`}
                  width={480}
                  height={320}
                  className="w-full h-40 lg:h-full object-cover"
                />
              </div>

              {/* Record Content */}
              <div className="flex-1 flex flex-col justify-start gap-5">
                
                {/* Top Row: Tag & Link */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full border border-slate-200 bg-white flex items-center gap-1.5 shadow-sm">
                      <span className={`text-[10px] pb-0.5 ${record.tagColor}`}>{record.tagIcon}</span>
                      <span className="text-[11px] font-bold font-['Space_Grotesk'] text-slate-900">{record.tag}</span>
                    </div>
                    <span className="text-slate-400 text-xs font-medium font-['Space_Grotesk']">
                      {record.id}
                    </span>
                  </div>
                  <a href="#" className="flex items-center gap-1.5 text-slate-900 text-xs font-bold font-['Space_Grotesk'] hover:opacity-70 transition-opacity">
                    Open change <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Title & Desc */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                    {record.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-normal font-['Inter'] leading-relaxed max-w-3xl">
                    {record.description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 border-t border-slate-100 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">PUBLISHED</span>
                    <span className="text-slate-900 text-xs font-medium font-['Inter']">{record.published}</span>
                    <span className="text-slate-500 text-xs font-normal font-['Inter'] mt-1">Effective: {record.effective}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <span className="text-slate-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-wider">AFFECTED SURFACES</span>
                    {record.affectedSurfaces.map((surface, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-slate-900 text-xs font-medium font-['Inter']">{surface.name}</span>
                        <span className="text-slate-500 text-[11px] font-normal font-['Inter'] mt-0.5">{surface.details}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="text-slate-900 text-xs font-bold font-['Inter']">
                      Compatibility - {record.compatibility.includes('-') ? (
                        <>
                          {record.compatibility.split('-')[0]} - <span className="font-normal">{record.compatibility.split('-')[1]}</span>
                        </>
                      ) : record.compatibility}
                    </span>
                    <div className="flex flex-col gap-0.5 mt-1">
                      <span className={`${record.actionColor} text-xs font-bold font-['Inter']`}>
                        Action: {record.action}
                      </span>
                      {record.actionWarning && (
                        <span className="text-rose-400 text-[10px] font-medium font-['Inter'] mt-0.5">
                          {record.actionWarning}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
