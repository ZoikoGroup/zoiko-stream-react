import React from 'react';

export default function SecuritySharedResponsibility() {
  const responsibilityData = [
    {
      area: 'Identity & Access',
      zoiko: 'Ensures secure auth gateways, MFA infrastructure, and session termination routines.',
      customer: 'Configures enterprise SAML SSO whitelists, controls user seat lifecycle, and governs admin roles.',
      thirdParty: 'Resolves identity assertions on IdP networks and passes signed secure tokens.',
    },
    {
      area: 'Configuration',
      zoiko: 'Operates resilient dual-ingest pipelines, auto-failover, and active telemetry diagnostics.',
      customer: 'Defines Run-of-Show segment times, lower-third overlays, and backup fallback stream keys.',
      thirdParty: 'Maintains hardware/software compatibility for encoders and mixer units.',
    },
    {
      area: 'Data Handling',
      zoiko: 'Protects live stream memory buffers and guarantees secure AES-256 cloud record isolation.',
      customer: 'Specifies VOD lifetime storage limits, download restrictions, and compliance holds.',
      thirdParty: 'Manages transit packet buffers and coordinates stream handshake protocols.',
    },
    {
      area: 'Integrations',
      zoiko: 'Exposes secure, authenticated API endpoints and governed SDK webhooks.',
      customer: 'Vets custom client-side hooks, prevents token leaks, and sandbox-wraps playback widgets.',
      thirdParty: 'Maintains platform compliance targets and processes stream telemetry payloads.',
    },
    {
      area: 'Endpoints / Network',
      zoiko: 'Governs platform-level cloud firewalls and ingress edge server bandwidth allocations.',
      customer: 'Ensures open local outbound TCP/UDP ports and verifies venue network bandwidth.',
      thirdParty: 'Routes IP packets over public backbone gateways and schedules transit paths.',
    },
    {
      area: 'Incident / Reporting',
      zoiko: 'Monitors global stream health anomalies and posts transparent public status alerts.',
      customer: 'Reports local network failures and reviews internal team security audit logs.',
      thirdParty: 'Notifies upstream transit hops of route changes and validates edge jitter metrics.',
    },
  ];

  return (
    <section className="relative w-full bg-[#060B14] border-b border-white/10 py-16 md:py-24 px-6 md:px-12 lg:px-28 overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-transparent to-[#060B14] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-transparent to-[#060B14] z-10" />
        <img 
          src="/images/security/Architecture.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
            Clear boundaries between your responsibilities and ours
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Every responsibility statement names the governed party, scope, and boundary. Unknown is never converted into assurance.
          </p>
        </div>

        {/* Responsibility Table Container */}
        <div className="w-full bg-[#0B1120]/80 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col overflow-hidden shadow-2xl">
          <div className="w-full overflow-x-auto">
            <div className="min-w-[900px] flex flex-col">
              
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-5 bg-[#060B14]/80 border-b border-white/10">
                <div className="text-[#00E5FF] text-sm font-bold font-['Space_Grotesk'] pr-4">Responsibility Area</div>
                <div className="text-[#00E5FF] text-sm font-bold font-['Space_Grotesk'] pr-4">ZoikoStream</div>
                <div className="text-[#00E5FF] text-sm font-bold font-['Space_Grotesk'] pr-4">Customer / Admin</div>
                <div className="text-[#00E5FF] text-sm font-bold font-['Space_Grotesk']">Third-Party / Integration</div>
              </div>

              {/* Table Rows */}
              {responsibilityData.map((row, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-4 gap-4 p-5 border-b border-white/5 last:border-b-0 items-center hover:bg-white/5 transition-colors"
                >
                  <div className="text-slate-100 text-sm font-bold font-['Space_Grotesk'] pr-4">
                    {row.area}
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] pr-4 leading-relaxed">
                    {row.zoiko}
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] pr-4 leading-relaxed">
                    {row.customer}
                  </div>
                  <div className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                    {row.thirdParty}
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="w-full p-4 bg-white/[0.02] rounded-lg border border-white/10 backdrop-blur-sm">
          <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
            Shared responsibility does not transfer ZoikoStream-controlled obligations to customers. Detailed controls and audit artifacts can be reviewed in the Trust Center.
          </p>
        </div>

      </div>
    </section>
  );
}
