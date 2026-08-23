import React from 'react';
import Link from 'next/link';

export default function RecruitmentSafetyFraudSection() {
  return (
    <section className="w-full bg-zinc-950 py-20 border-b border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-orange-400 rounded-full" />
            <span className="text-orange-400 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              FRAUD PREVENTION
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-slate-100 leading-tight">
            Recruitment safety.
          </h2>

          <p className="text-slate-400 text-base font-normal     leading-relaxed max-w-2xl">
            Recruitment fraud is a candidate-safety issue. Verify outreach before you share sensitive information.
          </p>
        </div>

        {/* Verification Card Box */}
        <div className="p-8 bg-zinc-900 rounded-2xl border-l-4 border-l-orange-400 border border-gray-800 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-orange-400 text-xl font-bold">⚠️</span>
            <h3 className="text-slate-100 text-lg font-bold  ">
              Verify a Zoiko recruiting message
            </h3>
          </div>

          <p className="text-slate-400 text-sm font-normal     leading-relaxed max-w-4xl">
            Zoiko recruiters use approved company channels and will never ask you to pay an application fee, buy equipment from a designated seller as a condition of interview, share passwords or authentication codes, or send money to secure a role.
          </p>

          <div className="flex flex-col gap-3 text-slate-400 text-sm font-normal    ">
            <div className="flex items-start gap-3">
              <span className="text-slate-500 font-bold shrink-0">–</span>
              <p className="leading-relaxed">
                Banking, tax, identity, or background-check information is only requested through approved secure systems at the lawful stage of onboarding or screening — never by unsolicited chat or personal email.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-500 font-bold shrink-0">–</span>
              <p className="leading-relaxed">
                If external recruiting agencies are used, the job posting or verification guidance explains how to confirm the agency is authorized.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/talk-to-an-expert"
              className="px-6 py-3.5 bg-zinc-100 text-zinc-900 rounded-lg text-base font-semibold     hover:bg-white transition-colors inline-block"
            >
              Report or verify recruiting contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
