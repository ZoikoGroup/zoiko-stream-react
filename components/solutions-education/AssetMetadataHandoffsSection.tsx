import React from 'react';

const contractItems = [
  { label: 'ASSET / SESSION IDENTITY', desc: 'Global UUID with cryptographically verifiable origin provenance.' },
  { label: 'CORE SYSTEM METADATA', desc: 'Format parameters, resolution profile, bitrate history, and checksum hashes.' },
  { label: 'EDUCATION-CONTEXT METADATA', desc: 'Course ID, instructor record, and explicit audience boundary parameters.' },
  { label: 'VERSIONS & DERIVATIVES', desc: 'Trimming offset history, administrative edits, and caption version tracks.' },
];

const integrations = [
  { title: 'Identity System', desc: 'SAML SSO / Shibboleth alignment', status: 'VERIFIED' },
  { title: 'LMS/SIS Gateway', desc: 'Roster synchronization pipelines', status: 'VERIFIED' },
  { title: 'Archival Storage', desc: 'Durable compliance cold storage', status: 'READY' },
  { title: 'Language Services', desc: 'Live captions & ASL translation feed', status: 'READY' },
];

export function AssetMetadataHandoffsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] top-[200px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Asset, metadata and integration handoffs
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Stable asset identity, education-context metadata, integration dependencies — all evidence-gated, nothing invented.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Contract */}
          <div className="lg:col-span-7 w-full p-8 bg-white rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
              Structured Media Contract
            </h3>
            <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">
              Every recorded asset is bundled with immutable metadata properties describing the session context.
            </p>
            <div className="w-full border-t border-gray-200" />

            <div className="w-full flex flex-col justify-start items-start gap-4">
              {contractItems.map((ci, idx) => (
                <div key={idx} className="w-full flex flex-col justify-start items-start gap-1.5">
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">{ci.label}</span>
                  <span className="text-slate-900 text-sm font-normal font-['Inter']">{ci.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Integration */}
          <div className="lg:col-span-5 w-full flex flex-col justify-start items-start gap-6">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Integration Dependency State
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {integrations.map((ig, idx) => (
                <div key={idx} className="w-full p-4 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">{ig.title}</span>
                    <span className="text-slate-600 text-xs font-normal font-['Inter']">{ig.desc}</span>
                  </div>
                  <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">{ig.status}</span>
                </div>
              ))}
            </div>

            <div className="w-full p-4 bg-indigo-50 rounded-lg">
              <p className="text-slate-600 text-xs leading-5 font-['Inter']">
                <strong className="text-slate-900">Information Boundary:</strong> Exact provider names, APIs, roster sync, SSO, LTI, SCORM, xAPI must come from approved developer evidence. We never invent or mock live connections.
              </p>
            </div>

            <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
              <span className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                Discuss architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
