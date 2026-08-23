import React from 'react';

const fitCards = [
  { title: 'Technology & Integration', desc: 'Real product/company; customer-relevant use case; named technical owner; working or buildable integration; support path; appropriate security/privacy posture.' },
  { title: 'Solutions & Implementation', desc: 'Relevant engineering/delivery capability; demonstrable video/streaming or adjacent expertise; accountable delivery lead; support/escalation model; legal/ethical fit.' },
  { title: 'Live Events & Production', desc: 'Demonstrable live-event operations experience; defined service scope/regions; production and escalation contacts; rehearsal/runbook discipline; resilience approach.' },
  { title: 'Strategic Infrastructure & Alliances', desc: 'Clear strategic/interoperability rationale; executive/product sponsorship; agreed relationship scope; legal/brand approvals; appropriate operational owners.' },
];

const reviewSteps = [
  { num: '01', title: 'Choose a partner path', desc: 'Select the closest relationship type — "Not sure" is allowed and routes to triage.' },
  { num: '02', title: 'Tell us about the organization', desc: 'We collect structured company, capability, market, and contact data.' },
  { num: '03', title: 'Initial fit review', desc: 'Partnerships reviews customer value, overlap, market availability, conflicts, and basic eligibility. No public status is created at this stage.' },
  { num: '04', title: 'Technical / operational review', desc: 'For relevant paths, we validate integration, delivery capability, Live Events scope, security/privacy dependencies, or operational readiness.' },
  { num: '05', title: 'Commercial / legal review', desc: 'Agreement, brand, compliance, data, and commercial terms are completed proportionate to relationship type.' },
  { num: '06', title: 'Onboarding', desc: 'We create the canonical partner record, assign type/capabilities/regions, and establish owners and review dates.' },
  { num: '07', title: 'Publication', desc: 'Only approved profile fields and badges are published after explicit public/brand approval.' },
  { num: '08', title: 'Ongoing review', desc: 'Material capabilities, relationship status, brand assets, URLs, and public claims are revalidated on cadence or event trigger.' },
];

export default function EligibilityAndReviewJourneySection() {
  return (
    <section className="w-full bg-white py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header 1: Minimum Fit */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              ELIGIBILITY
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            Minimum fit signals.
          </h2>

          <p className="text-gray-500 text-base font-normal   leading-relaxed max-w-2xl">
            Every partner path has minimum fit signals reviewed before approval — applying does not itself create public partner status.
          </p>
        </div>

        {/* 4 Fit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fitCards.map((fc, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs flex flex-col gap-3 h-44"
            >
              <h3 className="text-gray-800 text-base font-bold  ">
                {fc.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                {fc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Header 2: Review Process */}
        <div className="flex flex-col gap-4 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              APPLICATION JOURNEY
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold   text-gray-800">
            How the review process works.
          </h3>
        </div>

        {/* 8 Review Steps List */}
        <div className="flex flex-col divide-y divide-zinc-200">
          {reviewSteps.map((st, idx) => (
            <div key={idx} className="py-6 flex items-start gap-5">
              <div className="size-9 bg-slate-100 rounded-lg flex items-center justify-center text-indigo-500 text-sm font-bold   shrink-0">
                {st.num}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-gray-800 text-base font-bold  ">
                  {st.title}
                </h4>
                <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
