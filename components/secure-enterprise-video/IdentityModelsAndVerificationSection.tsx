import React from 'react';

const identityModels = [
  { title: 'Authenticated Corporate SSO', desc: 'Federate employees automatically using Azure AD, Okta, or custom SAML.' },
  { title: 'Controlled External Tokens', desc: 'Issue cryptographic invitations to partners, vendors, or board members.' },
  { title: 'Groups & Organization Units', desc: 'Target video visibility directly to specific regional active directory structures.' },
  { title: 'Temporary Session Exceptions', desc: 'Temporary 2-factor authenticated guest tokens for controlled live broadcast access.' },
];

const verificationStates = [
  { tag: 'CHECKING', tagStyle: 'bg-blue-500/10 text-blue-500', title: 'Evaluating Session', desc: 'handshake compiling' },
  { tag: 'ALLOWED', tagStyle: 'bg-emerald-500/10 text-emerald-500', title: 'Access Approved', desc: 'stream encrypted' },
  { tag: 'DENIED', tagStyle: 'bg-red-500/10 text-red-500', title: 'Access Rejected', desc: 'verdict log written' },
  { tag: 'VERIFICATION REQUIRED', tagStyle: 'bg-amber-500/10 text-amber-500', title: 'MFA Check Dispatched', desc: 'waiting response' },
  { tag: 'EXPIRED', tagStyle: 'bg-slate-500/10 text-slate-500', title: 'Session Stale', desc: 're-auth mandatory' },
  { tag: 'REVOKED', tagStyle: 'bg-red-800/10 text-red-800', title: 'Access Terminated', desc: 'revoked by admin' },
];

export default function IdentityModelsAndVerificationSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Know who&apos;s watching. Decide who can.
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Federate existing SAML or OIDC identities to create reliable, compliant participant groups for dynamic streaming.
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Supported Identity Models */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-slate-900 text-xl font-bold  ">
              Supported Identity Models
            </h3>

            <div className="flex flex-col gap-3">
              {identityModels.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-lg border border-gray-200 shadow-2xs flex flex-col gap-1">
                  <h4 className="text-slate-900 text-base font-bold  ">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs font-normal  ">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Verification Outcome States */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h3 className="text-slate-900 text-xl font-bold  ">
              Authorization Verification Outcome States
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {verificationStates.map((st, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-gray-200 shadow-2xs flex flex-col justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold   w-fit ${st.tagStyle}`}>
                    {st.tag}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-slate-900 text-sm font-bold  ">
                      {st.title}
                    </h4>
                    <p className="text-slate-600 text-xs font-normal  ">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
