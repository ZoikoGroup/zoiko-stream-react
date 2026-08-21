import React from 'react';

const tableRows = [
  {
    protocol: 'SRT Caller',
    contextTitle: 'Primary Contribution',
    contextDesc: 'MPEG-TS Payload',
    netTitle: 'UDP Loss-Recovery',
    netDesc: 'AES Key Exchange',
  },
  {
    protocol: 'RTMPS Ingest',
    contextTitle: 'Legacy Stream Source',
    contextDesc: 'H.264 / AAC',
    netTitle: 'TCP Port 443 Required',
    netDesc: 'Query Token',
  },
  {
    protocol: 'WHIP',
    contextTitle: 'WebRTC low-latency',
    contextDesc: 'Opus & VP8/H.264',
    netTitle: 'STUN/TURN Qualified',
    netDesc: 'Bearer Token / TLS',
  },
  {
    protocol: 'RTMP fallback',
    contextTitle: 'Alternative Path Only',
    contextDesc: 'Uncompressed raw',
    netTitle: 'No Congestion Control',
    netDesc: 'Plain Credentials',
  },
];

export default function InspectProtocolQualificationSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Inspect protocol qualification before integration
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Understand endpoint, authorization, media compatibility, network, and lifecycle constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Profile Detail Card */}
          <div className="lg:col-span-6">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-6">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                  Selected Profile: SRT Listener (Gateway)
                </h3>
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-xs font-bold font-['Space_Grotesk']">
                  STABLE ROUTE
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    Fit &amp; Exclusions
                  </span>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                    Ideal for high-jitter public internet contribution. Exclude if browser WebRTC endpoints are the client software base.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    Endpoint / Authorization
                  </span>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                    Target listening port mapped dynamically. Handshake auth executed via private passphrases ranging 10-79 characters.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    Media Compatibility
                  </span>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                    Restricted payload profile: MPEG2-TS wrapped frames only. Multiple audio tracks supported under standardized stream IDs.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    Network Qualification
                  </span>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                    Explicit firewall routing of inbound UDP ports required. NAT-traversal must be qualified under strict listener-caller mapping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Protocol Matrix Table */}
          <div className="lg:col-span-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-lg flex flex-col gap-4">
              <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center text-slate-900 text-xs font-bold font-['Space_Grotesk']">
                <span className="w-28">Protocol</span>
                <span className="flex-1">Work Context</span>
                <span className="w-32">Network Profile</span>
              </div>

              <div className="flex flex-col divide-y divide-slate-200">
                {tableRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3 flex justify-between items-center gap-3"
                  >
                    <span className="w-28 text-slate-900 text-sm font-bold font-['Space_Grotesk'] shrink-0">
                      {row.protocol}
                    </span>
                    <div className="flex-1 flex flex-col">
                      <span className="text-slate-900 text-sm font-medium font-['Inter']">
                        {row.contextTitle}
                      </span>
                      <span className="text-slate-600 text-xs font-normal font-['Inter']">
                        {row.contextDesc}
                      </span>
                    </div>
                    <div className="w-32 flex flex-col shrink-0">
                      <span className="text-blue-600 text-xs font-semibold font-['Inter']">
                        {row.netTitle}
                      </span>
                      <span className="text-slate-600 text-xs font-normal font-['Inter']">
                        {row.netDesc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
