import React from 'react';

export default function ContractualRights() {
  const cards = [
    {
      title: 'Can ZoikoStream appoint subprocessors?',
      description: 'All appointments follow strictly defined procedures under our master DPA and legal authority. We do not operate outside authorized boundaries.',
      imgSrc: '/images/subprocessors/appoinments.png',
    },
    {
      title: 'Can I object to a new subprocessor?',
      description: 'Objection pathways, review schedules, and account governance terms live inside your signed agreement. Public registries do not alter signed rights.',
      imgSrc: '/images/subprocessors/objection.png',
    },
    {
      title: 'How much notice will I get?',
      description: 'We pledge and enforce only the exact periods signed in your active DPA. No public page will ever invent or promise hypothetical timelines.',
      imgSrc: '/images/subprocessors/pledge.png',
    },
    {
      title: 'What happens after an objection?',
      description: 'Resolutions, backup routing, or migration periods follow structured legal remedies. We avoid speculative conclusions or invented outcomes.',
      imgSrc: '/images/subprocessors/resolution.png',
    },
    {
      title: 'What transfer mechanisms apply?',
      description: 'Cross-border data flows are fully bound by standard contractual clauses (SCCs) and active DPA guidelines to safeguard regulatory compliance.',
      imgSrc: '/images/subprocessors/mechanisms.png',
    },
    {
      title: 'Does my contract differ?',
      description: 'Negotiated custom DPAs always override general terms shown on public dashboards. Contact your legal counsel or account representative to review.',
      imgSrc: '/images/subprocessors/negotiated.png',
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-slate-200 py-20 px-6 md:px-12 lg:px-28 overflow-hidden">

      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] bottom-[5%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-10%] md:left-[-5%] top-[-5%] bg-teal-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Contractual Rights, Objections and Transfer Terms
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Contractual notice periods, objection rights, replacement rights, remedies and transfer terms live with the operative DPA and legal authority. This page does not paraphrase or manufacture contractual terms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full"
            >
              {/* Card Image */}
              <div className="w-full h-40 relative overflow-hidden bg-slate-200 shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={card.imgSrc}
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-[10px] text-center text-slate-950 text-base font-bold font-['Space_Grotesk'] shadow-sm"
          >
            Review Data Processing Addendum
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-7 py-3.5 rounded-[10px] border border-slate-600 hover:bg-slate-100 transition-colors text-center text-zinc-950 text-base font-medium font-['Space_Grotesk']"
          >
            Request Signed Copy
          </a>
        </div>

      </div>
    </section>
  );
}
