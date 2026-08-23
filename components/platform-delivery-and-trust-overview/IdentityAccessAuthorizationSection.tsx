import React from 'react';

const evaluationRows = [
  {
    state: 'Not Evaluated',
    desc: 'Prior to token request start',
    badge: 'PENDING',
    badgeClass: 'bg-gray-100 text-gray-500',
  },
  {
    state: 'Evaluating',
    desc: 'Running directory checks',
    badge: 'PROCESSING',
    badgeClass: 'bg-sky-100 text-blue-500',
  },
  {
    state: 'Authorized',
    desc: 'Entitlement verified successfully',
    badge: 'READY',
    badgeClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    state: 'Limited Scope',
    desc: 'Restricted by active policy rules',
    badge: 'RESTRICTED',
    badgeClass: 'bg-amber-100 text-amber-600',
  },
  {
    state: 'Denied / Blocked',
    desc: 'No matching whitelist found',
    badge: 'BLOCKED',
    badgeClass: 'bg-red-100 text-red-600',
  },
  {
    state: 'Expired / Revoked',
    desc: 'Past token duration lifetime',
    badge: 'REVOKED',
    badgeClass: 'bg-red-300 text-red-900',
  },
];

export default function IdentityAccessAuthorizationSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-gray-950 leading-tight">
            Identity, Access, and Playback Authorization
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal   max-w-3xl">
            Understand the relationship between who is acting and what they may play
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Explanatory Points */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-slate-600 text-base font-normal   leading-relaxed">
              ZoikoStream separates core media asset metadata from dynamic playback keys. This guarantees that asset descriptions remain highly structured and indexable while actual media streams remain restricted until a valid entitlement check verifies.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="pt-1.5 shrink-0">
                  <div className="size-2.5 bg-teal-400 rounded-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-950 text-base font-bold  ">
                    Access Control Governance
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    Assert active directory roles, tenant scopes, and temporary administrator access privileges before allowing media actions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="pt-1.5 shrink-0">
                  <div className="size-2.5 bg-teal-400 rounded-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-950 text-base font-bold  ">
                    DRM-Safe Playback
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    Pre-verified dynamic tokens issued on demand. Key rotation happens instantly under active secure rules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="pt-1.5 shrink-0">
                  <div className="size-2.5 bg-teal-400 rounded-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-950 text-base font-bold  ">
                    Verified Identity Alignment
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    OIDC protocol anchors ensure that viewer logs map back directly to verified corporate identities, leaving zero auditing gaps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Model Box */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-5 shadow-sm">
              <h3 className="text-gray-950 text-sm font-bold   tracking-wide uppercase">
                AUTHORIZATION STATE EVALUATION MODEL
              </h3>

              <div className="flex flex-col gap-2">
                {evaluationRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center"
                  >
                    <div className="flex flex-col">
                      <span className="text-gray-950 text-sm font-bold  ">
                        {row.state}
                      </span>
                      <span className="text-slate-600 text-xs font-normal  ">
                        {row.desc}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded text-xs font-bold   ${row.badgeClass}`}>
                      {row.badge}
                    </span>
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
