import React from 'react';
import {
  ShieldAlert,
  Users,
  GitFork,
  History,
  AlertTriangle,
  Award,
} from 'lucide-react';

const delegationCards = [
  {
    title: 'Who Can Grant Access?',
    desc: 'The authority to create, edit, or extend entitlement parameters is strictly limited to authorized security stewards assigned within OIDC directory groups.',
    icon: ShieldAlert,
  },
  {
    title: 'Who Can Delegate?',
    desc: 'Stewards can delegate bounded authority to secondary operators. Every delegation is explicitly scoped, time-limited, and revocable on demand.',
    icon: GitFork,
  },
  {
    title: 'Separation of Duties',
    desc: 'Consequential actions (e.g. streaming to global public channels, deleting master records) require dual-signature authorization from independent security actors.',
    icon: Users,
  },
  {
    title: 'Continuous Auditing',
    desc: 'Every administrative change, delegation, and policy override is recorded as an immutable cryptographic audit record for compliance verification.',
    icon: History,
  },
  {
    title: 'Emergency Overrides',
    desc: 'Emergency bypasses require an active security incident ticket, a defined operational scope, an assigned owner, and automatic expiration after 2 hours.',
    icon: AlertTriangle,
  },
  {
    title: 'Enterprise Compliance',
    desc: 'Verify access controls directly against SOC 2 Type II, ISO 27001, and HIPAA compliance frameworks inside the ZoikoStream Trust Center.',
    icon: Award,
  },
];

export default function DelegationAdminAuthoritySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Delegation &amp; Administrative Authority
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Granting authority is itself a governed decision. Implement zero-trust boundaries across departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delegationCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="min-h-[220px] p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-4 hover:border-teal-500/50 hover:shadow-md transition-all group"
              >
                <div className="size-9 bg-blue-500/10 rounded-md flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="size-4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
