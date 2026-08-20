const readinessChecks = [
  { label: 'Technical', status: 'Ready', scheme: 'teal' as const },
  { label: 'Rights & Use', status: 'Ready', scheme: 'teal' as const },
  { label: 'Core Metadata', status: 'Ready', scheme: 'teal' as const },
  { label: 'Accessibility', status: 'Needs Review', scheme: 'amber' as const },
  { label: 'Access Policy', status: 'Ready', scheme: 'teal' as const },
  { label: 'Playback Config', status: 'Ready', scheme: 'teal' as const },
  { label: 'Evidence Logs', status: 'Ready', scheme: 'teal' as const },
];

const requirements = [
  {
    requirement: 'Transcode complete',
    owner: 'Orchestrator L4',
    state: 'Ready',
    scheme: 'teal' as const,
    evidence: 'Profiles: 1080p, 720p, 480p',
    nextAction: 'None',
  },
  {
    requirement: 'SLA Playback Rights',
    owner: 'Legal-Operations',
    state: 'Ready',
    scheme: 'teal' as const,
    evidence: 'Global non-exclusive to 2030',
    nextAction: 'None',
  },
  {
    requirement: 'Captions (English VTT)',
    owner: 'Media-Handoff',
    state: 'Needs Review',
    scheme: 'amber' as const,
    evidence: 'WebVTT generated automatically',
    nextAction: 'Verify vocabulary',
  },
  {
    requirement: 'Token signing enabled',
    owner: 'Security-Control',
    state: 'Ready',
    scheme: 'teal' as const,
    evidence: 'HMAC config payload matched',
    nextAction: 'None',
  },
];

const statusStyles = {
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-500' },
  amber: { bg: 'bg-amber-600/10', text: 'text-amber-600' },
};

export default function AssetReadinessSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 flex flex-col gap-14"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Asset Readiness Review
        </h2>
        <p className="text-slate-600 text-lg font-normal leading-7">
          The primary decision screen: can this asset proceed to an on-demand experience?
        </p>
      </div>

      {/* Console UI */}
      <div className="w-full bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
        {/* Mac-style titlebar */}
        <div className="h-10 px-4 bg-zinc-900 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="w-2 h-2 bg-teal-500 rounded-full" />
          </div>
          <span className="text-slate-300 text-xs font-normal">
            ZoikoStream Platform - Asset Registry Console
          </span>
          <div className="w-10" />
        </div>

        <div className="p-8 bg-slate-50 flex flex-col gap-6">
          {/* Asset header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p className="text-zinc-950 text-lg font-bold">Asset: keynote_march20_h264.mp4</p>
              <p className="text-slate-600 text-xs font-normal">Owner: Developer-Platform-Group</p>
            </div>
            <div className="px-2 py-1 bg-teal-500/10 rounded-sm">
              <span className="text-teal-500 text-xs font-bold uppercase">READY FOR CDNS</span>
            </div>
          </div>

          {/* Status checks */}
          <div className="flex flex-wrap gap-4">
            {readinessChecks.map((check) => (
              <div
                key={check.label}
                className="flex-1 min-w-[120px] p-4 bg-white rounded-lg border border-gray-200 flex flex-col gap-2"
              >
                <span className="text-slate-600 text-xs font-normal">{check.label}</span>
                <div className={`px-2 py-1 ${statusStyles[check.scheme].bg} rounded-sm inline-flex`}>
                  <span className={`${statusStyles[check.scheme].text} text-xs font-bold uppercase`}>
                    {check.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements table */}
          <div className="w-full bg-white rounded-lg border border-gray-200 flex flex-col overflow-hidden">
            {/* Table header */}
            <div className="px-4 py-3 bg-slate-50 flex justify-between items-start border-b border-gray-200">
              <span className="w-48 text-zinc-950 text-xs font-bold">Requirement</span>
              <span className="w-36 text-zinc-950 text-xs font-bold hidden sm:block">Owner</span>
              <span className="w-28 text-zinc-950 text-xs font-bold">State</span>
              <span className="w-48 text-zinc-950 text-xs font-bold hidden md:block">Evidence</span>
              <span className="w-36 text-zinc-950 text-xs font-bold hidden lg:block">Next Action</span>
            </div>

            {requirements.map((req, i) => (
              <div key={req.requirement}>
                <div className="px-4 py-3 flex justify-between items-center">
                  <span className="w-48 text-zinc-950 text-xs font-normal">{req.requirement}</span>
                  <span className="w-36 text-slate-600 text-xs font-normal hidden sm:block">{req.owner}</span>
                  <div className="w-28">
                    <div className={`px-2 py-1 ${statusStyles[req.scheme].bg} rounded-sm inline-flex`}>
                      <span className={`${statusStyles[req.scheme].text} text-xs font-bold uppercase`}>
                        {req.state}
                      </span>
                    </div>
                  </div>
                  <span className="w-48 text-slate-600 text-xs font-normal hidden md:block">{req.evidence}</span>
                  <span className="w-36 text-blue-500 text-xs font-normal hidden lg:block">{req.nextAction}</span>
                </div>
                {i < requirements.length - 1 && <div className="border-t border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
