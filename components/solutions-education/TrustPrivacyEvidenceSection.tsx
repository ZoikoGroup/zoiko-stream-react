import React from 'react';

const topCards = [
  {
    tag: 'SECURITY & ACCESS',
    title: 'Security Credentials',
    desc: 'Deterministic and verified SSO handoffs, continuous TLS 1.3 encryption, and administrative audit logging.',
    highlight: false,
  },
  {
    tag: 'JURISDICTIONAL PRIVACY',
    title: 'Privacy Controls',
    desc: 'The institution owns and controls the legal basis, learner notices, and compliance records under local FERPA rules.',
    highlight: false,
  },
  {
    tag: 'ACCESSIBILITY STANDARDS',
    title: 'WCAG AA Targets',
    desc: 'W3C/WCAG media compliance acts as the architectural foundation. Direct accessibility help tracks are natively integrated.',
    highlight: true,
  },
];

const privacyPoints = [
  'FERPA governs and protects all student education record pathways.',
  'ZoikoStream acts solely as a compliant software platform.',
  'All compliance statements reflect current third-party evidence.',
  'No synthetic or inferred learner tracking algorithms.',
];

export function TrustPrivacyEvidenceSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] top-[300px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-120px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Trust, privacy, accessibility and evidence
          </h2>
        </div>

        {/* Top 3 Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 bg-slate-50 rounded-xl border ${card.highlight ? 'border-blue-500' : 'border-gray-200'} flex flex-col justify-start items-start gap-5 shadow-sm`}
            >
              <div className="px-2 py-1 bg-white rounded-sm border border-gray-200 inline-flex">
                <span className="text-blue-500 text-xs font-bold font-['Space_Grotesk']">{card.tag}</span>
              </div>
              <h3 className="text-slate-950 text-xl font-bold font-['Space_Grotesk']">{card.title}</h3>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Boxes */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Box */}
          <div className="lg:col-span-7 w-full p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk']">
              Compliance &amp; Evidence Currentness
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-4 text-xs">
              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold font-['Space_Grotesk'] uppercase">ACCOUNTABLE TRUST OFFICER</span>
                <div className="w-full p-3.5 bg-white rounded-lg border border-gray-200">
                  <span className="text-slate-950 text-sm font-normal font-['Inter']">Global Information Governance &amp; Legal</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold font-['Space_Grotesk'] uppercase">VERIFICATION SOURCE</span>
                <div className="w-full p-3.5 bg-white rounded-lg border border-gray-200">
                  <span className="text-slate-950 text-sm font-normal font-['Inter']">Annual Third-Party Audit (March 2026)</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold font-['Space_Grotesk'] uppercase">LAST REVIEW DATE</span>
                <div className="w-full p-3.5 bg-white rounded-lg border border-gray-200">
                  <span className="text-slate-950 text-sm font-normal font-['Inter']">March 15, 2026</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <span className="text-slate-600 font-bold font-['Space_Grotesk'] uppercase">PROVENANCE OUTLINE</span>
                <div className="w-full p-3.5 bg-white rounded-lg border border-gray-200">
                  <span className="text-slate-950 text-sm font-normal font-['Inter']">Durable Compliance Record Hub #8892</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="lg:col-span-5 w-full p-8 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <h3 className="text-slate-950 text-lg font-bold font-['Space_Grotesk']">
              U.S. Student Privacy Context
            </h3>
            <div className="w-full flex flex-col justify-start items-start gap-4">
              {privacyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded border border-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-500 text-[10px]">✓</span>
                  </div>
                  <span className="text-slate-600 text-sm font-normal font-['Inter'] leading-5">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
