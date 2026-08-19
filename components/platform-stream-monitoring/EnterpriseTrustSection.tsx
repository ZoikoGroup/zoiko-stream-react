import React from 'react';
import TopoBackground from './TopoBackground';

const recipients = [
  {
    number: '01',
    title: 'Security & Privacy Gating',
    description:
      'SAML SSO isolation ensures only verified tenant groups can inspect telemetry or configure webhooks.',
  },
  {
    number: '02',
    title: 'Immutable Audit Registry',
    description:
      'Every manual alarm threshold adjustment is recorded permanently in tenant evidence history manifests.',
  },
  {
    number: '03',
    title: 'Deterministic SLA Semantics',
    description:
      'We map availability strictly. No compressed status flags concealing downstream CDN delivery errors.',
  },
];

export default function EnterpriseTrustSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px]">
            Enterprise trust, privacy, and evidence governance
          </h2>
          <p className="text-base text-[#475569] md:text-[18px] md:leading-7">
            Credibility through scoped evidence, not visual noise.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="flex w-full flex-1 flex-col gap-4">
            <span className="text-[11px] font-bold tracking-[0.8px] text-[#64748b]">
              GOVERNED PROOF RECIPIENTS
            </span>
            {recipients.map((item) => (
              <div
                key={item.number}
                className="flex flex-col gap-2 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[13px] font-bold text-[#4c86ff]">{item.number}</span>
                  <h3 className="text-base font-bold text-[#0d1117]">{item.title}</h3>
                </div>
                <p className="text-[13px] leading-[1.6] text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-5 rounded-2xl bg-[#0d1117] p-8 lg:w-[500px]">
            <h3 className="text-2xl font-bold text-white">Talk to an enterprise architect</h3>
            <p className="text-[14px] leading-[1.7] text-[#aab3c4]">
              Skip the sales deck. We will connect you directly with a platform engineer to outline
              custom SLA bounds and SSO monitoring integration rules.
            </p>
            <button
              className="flex w-fit items-center justify-center rounded-[10px] px-7 py-3.5 transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #00d4aa 0%, #4c86ff 100%)' }}
            >
              <span className="text-[15px] font-bold text-[#04141a]">Request Architect Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
