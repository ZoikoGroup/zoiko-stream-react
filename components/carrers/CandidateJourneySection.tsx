import React from 'react';

const steps = [
  { num: '1', title: '1. Apply', desc: 'Submit through the official role page. Confirmation states the requisition and next-step expectation.' },
  { num: '2', title: '2. Initial review', desc: 'Talent or the hiring team reviews role fit against the published requirements.' },
  { num: '3', title: '3. Conversation', desc: 'An initial conversation aligns on role scope, experience, location eligibility, and practical expectations.' },
  { num: '4', title: '4. Role assessment', desc: 'Where appropriate, candidates complete a skills-based, technical, portfolio, case, or work-sample assessment. The job page discloses material assessment types before application whenever practical.' },
  { num: '5', title: '5. Team interviews', desc: 'Structured conversations with the people relevant to the role. We avoid unnecessary interview loops and duplicate questions.' },
  { num: '6', title: '6. Decision & offer', desc: 'Selected candidates receive an offer from the applicable employing entity with the role terms and required checks.' },
  { num: '7', title: '7. Pre-employment & onboarding', desc: 'Only lawful, necessary checks and onboarding steps required for the role and jurisdiction.' },
];

const safeguards = [
  'Timing varies by role and location; we will communicate material changes when we can.',
  'No surprise unpaid production work — any work sample is scoped to evaluation and proportionate to the role.',
  'Candidates can request a reasonable accommodation for interviews or assessments without disclosing medical detail to the hiring manager unless necessary and lawful.',
  'If automated tools materially influence screening, that use requires documented human oversight and a review path where applicable.',
];

export default function CandidateJourneySection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              CANDIDATE JOURNEY
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            How we hire.
          </h2>

          <p className="text-gray-500 text-base font-normal    leading-relaxed max-w-2xl">
            A stable core journey — role-specific variations are identified on each posting.
          </p>
        </div>

        {/* 7-Step Stepper */}
        <div className="relative pl-8 flex flex-col gap-8 border-l-2 border-gray-200 ml-3">
          {steps.map((st, idx) => (
            <div key={idx} className="relative flex flex-col gap-1">
              <div className="absolute -left-[41px] top-0 size-6 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-blue-500" />
              <h3 className="text-zinc-900 text-base font-bold  ">
                {st.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal    leading-relaxed max-w-2xl">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Safeguards Card Box */}
        <div className="p-7 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col gap-4">
          {safeguards.map((sg, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm font-normal    text-gray-500">
              <span className="text-gray-400 font-bold shrink-0">–</span>
              <p className="leading-relaxed">{sg}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
