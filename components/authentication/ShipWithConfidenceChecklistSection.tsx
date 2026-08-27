import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const col1Gates = [
  {
    title: '1. Method Verified',
    desc: 'Select and confirm your integration method (REST, SDK, or SAML portal link) matches actual environment support matrices.',
  },
  {
    title: '2. Environment Confirmed',
    desc: 'Ensure your active endpoints point explicitly to live production variables instead of mock testing URLs.',
  },
  {
    title: '3. Secret Storage',
    desc: 'Store all credentials in highly secure enterprise keystores or cloud key vaults. No raw values in repositories.',
  },
  {
    title: '4. Least Privilege',
    desc: 'Grant only target scopes required for production operation. Restrict administrative power keys globally.',
  },
  {
    title: '5. Ownership',
    desc: 'Assign specific technical contacts responsible for security audits, alert escalations, and incident response.',
  },
];

const col2Gates = [
  {
    title: '6. Expiry & Rotation',
    desc: 'Verify key rotation schedules are active and token lifetimes are constrained within corporate standards guidelines.',
  },
  {
    title: '7. Revocation Recovery',
    desc: 'Validate that active blacklisting operations succeed in under 500ms to immediately terminate compromised sessions.',
  },
  {
    title: '8. Error Handling',
    desc: 'Test integration pipelines gracefully fall back to redundant access methods when identity verification fails.',
  },
  {
    title: '9. Telemetry Boundaries',
    desc: 'Confirm telemetry logging processes sanitize raw header outputs to protect credential payloads from public records.',
  },
  {
    title: '10. Support & Status',
    desc: 'Subscribe system engineers to ZoikoStream health channels and locate technical escalation support paths.',
  },
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 bg-emerald-50 rounded-sm border border-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export function ShipWithConfidenceChecklistSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Ship with confidence — the authentication checklist
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Ten gates between your integration and production.
          </p>
        </div>

        {/* 2 Columns of Checklist Items */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            {col1Gates.map((gate, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-lg font-bold">{gate.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-5">{gate.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {col2Gates.map((gate, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckIcon />
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-lg font-bold">{gate.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-5">{gate.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
