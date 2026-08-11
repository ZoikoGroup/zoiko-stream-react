"use client";

import React, { useState } from "react";

export default function LiveEventsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = [
    { id: "section-intro", label: "Who this guide is for" },
    { id: "section-1", label: "1. Define the event" },
    { id: "section-2", label: "2. Choose your timeline" },
    { id: "section-3", label: "3. Decide who can watch" },
    { id: "section-4", label: "4. Plan contribution & production" },
    { id: "section-5", label: "5. Captions, languages & accessibility" },
    { id: "section-6", label: "6. Recording, replay & preservation" },
    { id: "section-7", label: "7. Plan for the unexpected" },
    { id: "section-sensitive", label: "Guidance for sensitive events" },
    { id: "section-checklist", label: "Day-of checklist" },
    { id: "section-after-submit", label: "What happens after you submit" },
    { id: "section-faq", label: "FAQs" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-zinc-900 transition-colors duration-200 dark:bg-slate-900 dark:text-slate-100">
      

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Guide Title Section */}
        <section className="mx-auto max-w-3xl py-8 text-center sm:py-12">
          <div className="inline-flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="  text-xs font-normal uppercase tracking-wide text-blue-500 dark:text-blue-400">
              LIVE EVENTS GUIDE
            </span>
          </div>

          <h1 className="mt-4   text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-white">
            How to plan a professionally managed live broadcast.
          </h1>

          <p className="mt-4   text-base leading-relaxed text-gray-500 dark:text-slate-400">
            This guide walks through everything to decide before you submit a
            Live Events inquiry: event type, timeline, audience access,
            accessibility, production, recording, and resilience. It is planning
            guidance, not a confirmation of availability, staffing, or service
            level.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-tight text-gray-500 dark:text-slate-400">
            <span>Live Events guide</span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span>Updated August 2026</span>
          </div>
        </section>

        {/* Content Layout with Sidebar */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sidebar / Navigation */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="space-y-3">
                <span className="  text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                  On this page ▾
                </span>
                <nav className="flex flex-col border-l-2 border-gray-200 text-sm dark:border-slate-800">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="py-1.5 pl-3 text-gray-500 transition hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Facts Box */}
              <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 space-y-3 dark:border-slate-800 dark:bg-slate-800/50">
                <h3 className="  text-xs font-semibold uppercase tracking-wide text-zinc-900 dark:text-white">
                  Quick facts
                </h3>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Two-step inquiry, no account required.
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Submitting does not reserve a date or confirm a service.
                </p>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  Respectful, non-exploitative handling for sensitive occasions.
                </p>
                <a href="/plan-a-live-event">
                <button className="w-full rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 py-2.5 text-center text-sm font-medium text-slate-950 transition hover:opacity-90">
                  Plan a live event
                </button></a>
              </div>
            </div>
          </aside>

          {/* Guide Sections */}
          <div className="space-y-12 lg:col-span-9">
            {/* Intro / Audience */}
            <section id="section-intro" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                Who this guide is for
              </h2>
              <p className="max-w-3xl leading-7 text-gray-600 dark:text-slate-300">
                This guide is for anyone preparing to submit a ZoikoStream Live
                Events inquiry — a conference organizer, a place of worship, a
                family planning a memorial or wedding livestream, a school
                handling a graduation, a civic institution, or a company
                running an internal broadcast. It's meant to be read{" "}
                <strong className="text-zinc-900 dark:text-white">
                  before
                </strong>{" "}
                you start the planning form, so you arrive with clear answers
                instead of guessing under time pressure.
              </p>

              <div className="max-w-3xl rounded-xl border-l-4 border-blue-500 bg-indigo-50/70 p-4 dark:bg-indigo-950/30">
                <h4 className="font-bold text-blue-900 dark:text-blue-300">
                  Before you start
                </h4>
                <p className="mt-1 text-sm text-blue-900/80 dark:text-blue-200/80">
                  The planning form itself takes about five minutes for Step 1
                  and a few more for Step 2. This guide takes about nine minutes
                  and will make both steps faster and more accurate.
                </p>
              </div>
            </section>

            {/* 1. Define the event */}
            <section id="section-1" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                1. Define the event
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                ZoikoStream Live Events routes inquiries using a small set of
                canonical event types. Picking the closest match — even if
                imperfect — helps route your inquiry to the right planning
                context faster than leaving it as "Other."
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-800">
                <table className="w-full text-left text-sm text-gray-600 dark:text-slate-300">
                  <thead className="bg-slate-200/60   text-xs uppercase text-zinc-900 dark:bg-slate-800 dark:text-slate-200">
                    <tr>
                      <th className="p-3">Event type</th>
                      <th className="p-3">Typical routing intent</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                    {[
                      {
                        type: "Conference",
                        intent: "Professional or institutional program",
                        notes:
                          "Multiple sessions or speakers are common; no scale is assumed automatically.",
                      },
                      {
                        type: "Memorial",
                        intent: "Respectful remembrance or funeral-related event",
                        notes: "Handled with particular care — see sensitive-event guidance below.",
                      },
                      {
                        type: "Worship",
                        intent: "Religious or community service",
                        notes:
                          "No assumptions made about denomination or belief beyond routing.",
                      },
                      {
                        type: "Wedding or celebration",
                        intent: "Private or public life event",
                        notes:
                          "Often paired with a private or approved-list access model.",
                      },
                      {
                        type: "Graduation",
                        intent: "Education ceremony or recognition event",
                        notes:
                          "Student records are never collected on the public form.",
                      },
                      {
                        type: "Civic event",
                        intent: "Public-institution or community broadcast",
                        notes:
                          "No political affiliation is inferred or requested.",
                      },
                      {
                        type: "Corporate broadcast",
                        intent: "Internal or external organization event",
                        notes:
                          "Keep confidential business detail out of the public planning form.",
                      },
                      {
                        type: "Other / not sure",
                        intent: "Human routing",
                        notes:
                          "Perfectly fine to select — you're never forced into the wrong category.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-medium text-zinc-900 dark:text-white">
                          {row.type}
                        </td>
                        <td className="p-3">{row.intent}</td>
                        <td className="p-3">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 2. Choose your timeline */}
            <section id="section-2" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                2. Choose your timeline
              </h2>
              <p className="max-w-3xl leading-7 text-gray-600 dark:text-slate-300">
                An exact date isn't required to start planning. You can submit a
                fixed date, a planning window (a range, or "sometime next
                quarter"), or mark the date as{" "}
                <strong className="text-zinc-900 dark:text-white">
                  not fixed
                </strong>
                . What changes is how much detail is useful at each stage.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-800">
                <table className="w-full text-left text-sm text-gray-600 dark:text-slate-300">
                  <thead className="bg-slate-200/60   text-xs uppercase text-zinc-900 dark:bg-slate-800 dark:text-slate-200">
                    <tr>
                      <th className="p-3">When</th>
                      <th className="p-3">What's worth deciding</th>
                      <th className="p-3">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                    {[
                      {
                        when: "6+ weeks out",
                        decide: "Event type, rough audience size, access model (public/private)",
                        why: "Gives the most room to plan accessibility, captions, and contribution logistics.",
                      },
                      {
                        when: "2–4 weeks out",
                        decide: "Contribution locations, recording decision, production notes",
                        why: "Enough time to firm up venue and remote-speaker plans.",
                      },
                      {
                        when: "Event week",
                        decide: "Final audience-access confirmation, run-through timing",
                        why: "Reduces last-minute surprises about who can actually watch.",
                      },
                      {
                        when: "Day-of",
                        decide: "Point of contact, backup connectivity, start-time buffer",
                        why: "See the day-of checklist.",
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-medium text-zinc-900 dark:text-white">
                          {row.when}
                        </td>
                        <td className="p-3">{row.decide}</td>
                        <td className="p-3">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="max-w-3xl rounded-xl border-l-4 border-blue-500 bg-indigo-50/70 p-4 dark:bg-indigo-950/30">
                <h4 className="font-bold text-blue-900 dark:text-blue-300">
                  Date not fixed is a valid answer
                </h4>
                <p className="mt-1 text-sm text-blue-900/80 dark:text-blue-200/80">
                  Submitting early with "date not fixed" is better than waiting — it lets planning conversations start sooner, without pretending a decision has been made.
                </p>
              </div>
            </section>

            {/* 3. Decide who can watch */}
            <section id="section-3" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                3. Decide who can watch
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Audience access is one of the most consequential planning decisions, especially for private or sensitive occasions. Choose the model that matches your intent — not the one that sounds most impressive.
              </p>

              <div className="max-w-3xl rounded-xl border-l-4 border-yellow-500 bg-amber-50 p-4 dark:bg-amber-950/30">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-400">
                  Never submit attendee data
                </h4>
                <p className="mt-1 text-sm text-yellow-800/80 dark:text-yellow-200/80">
                  Don't upload guest lists, emails, phone numbers, or private access codes through the public planning form. Approved-list and sign-in configuration happens in a separate, secured process — not here.
                </p>
              </div>
            </section>

            {/* 4. Plan contribution & production */}
            <section id="section-4" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                4. Plan contribution & production
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                "Contribution" simply means where the video and audio are coming from. Knowing this in advance helps the next conversation move faster.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-slate-300">
                <li><strong className="text-zinc-900 dark:text-white">One venue</strong> — a single location with one or more cameras/microphones.</li>
                <li><strong className="text-zinc-900 dark:text-white">Multiple venues</strong> — for example, a wedding ceremony at one site and a reception at another, or a conference with satellite rooms.</li>
                <li><strong className="text-zinc-900 dark:text-white">Remote speakers</strong> — contributors joining from their own location rather than a shared venue.</li>
                <li><strong className="text-zinc-900 dark:text-white">Not decided</strong> — also a fine answer if you're still finalizing logistics.</li>
              </ul>
            </section>

            {/* 5. Captions, languages & accessibility */}
            <section id="section-5" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                5. Captions, languages & accessibility
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Accessibility decisions are easiest to plan upfront rather than add during a live broadcast. Consider language options, real-time automated or human captioning requirements, and multi-stream output requirements.
              </p>
            </section>

            {/* 6. Recording, replay & preservation */}
            <section id="section-6" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                6. Recording, replay & preservation
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Decide whether you want the broadcast recorded for instant replay, downloaded as an archive file, or deleted immediately following the completion of the live broadcast.
              </p>
            </section>

            {/* 7. Plan for the unexpected */}
            <section id="section-7" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                7. Plan for the unexpected
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Always ensure you have backup cellular connections, designated primary points of contact, and a defined procedure if local power or internet is disrupted.
              </p>
            </section>

            {/* Guidance for sensitive events */}
            <section id="section-sensitive" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                Guidance for sensitive events
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Memorials, private family events, and confidential corporate briefings are treated with high privacy and dedicated routing care.
              </p>
            </section>

            {/* Day-of Checklist */}
            <section id="section-checklist" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                Day-of checklist
              </h2>
              <p className="text-gray-600 dark:text-slate-300">
                A short, practical checklist for the day of the event itself — tick items off as you go.
              </p>

              <div className="max-w-3xl space-y-3 rounded-lg border border-gray-200 p-4 dark:border-slate-800 dark:bg-slate-800/20">
                {[
                  "Confirm the primary contribution device is charged, connected, and tested.",
                  "Confirm the backup connection or device is ready and someone knows how to switch to it.",
                  "Do a short run-through at least 30–60 minutes before the event starts.",
                  "Confirm the access link or sign-in method has been shared with the right audience — and only that audience.",
                  "Confirm who is the single point of contact if something needs to be resolved mid-event.",
                  "Start a few minutes early to absorb any last-minute connection delay.",
                ].map((item, idx) => (
                  <label key={idx} className="flex items-start gap-3 text-sm text-zinc-900 dark:text-slate-200">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* What happens after you submit */}
            <section id="section-after-submit" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                What happens after you submit
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-slate-300">
                Once submitted, a live event coordinator will review the requirements and follow up to schedule a technical walkthrough.
              </p>
            </section>

            {/* CTA Box */}
            <section className="rounded-2xl bg-zinc-950 p-6 sm:p-10 dark:bg-slate-950">
              <h3 className="text-xl font-bold text-slate-100 sm:text-2xl">
                Ready to start?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Now that you've thought through event type, timeline, access, accessibility, and resilience, the planning form should take just a few minutes.
              </p>
              <a href="/plan-a-live-event">
              <button className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 text-base font-medium text-slate-950 transition hover:opacity-90">
                Plan a live event →
              </button></a>
            </section>

            {/* FAQs */}
            <section id="section-faq" className="scroll-mt-24 space-y-4">
              <h2 className="  text-2xl font-bold text-zinc-900 dark:text-white">
                FAQs
              </h2>
              <div className="divide-y divide-gray-200 border-b border-t border-gray-200 dark:divide-slate-800 dark:border-slate-800">
                {[
                  {
                    q: "Does submitting the form reserve my date?",
                    a: "No. Submitting a planning inquiry does not reserve a date, hold capacity, or confirm a service. It creates a routable record that a person reviews.",
                  },
                  { q: "Do I need to know my exact date before I start?", a: "No, 'Date not fixed' or a rough planning window is completely acceptable." },
                  { q: "Is this guide legal, medical, or safety advice?", a: "No, this guide offers technical and operational planning suggestions only." },
                  { q: "What if my event is private or sensitive?", a: "We handle sensitive occasions with strict care and privacy precautions." },
                  { q: "Can I change my answers after I submit?", a: "Yes, details can be updated during your follow-up coordination call." },
                  { q: "Do I need an account to submit an inquiry?", a: "No account is needed to fill out and submit the initial inquiry form." },
                ].map((faq, idx) => (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between text-left font-medium text-zinc-900 dark:text-white"
                    >
                      <span>{faq.q}</span>
                      <span className="text-lg text-blue-500">
                        {openFaq === idx ? "−" : "＋"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

     
    </div>
  );
}