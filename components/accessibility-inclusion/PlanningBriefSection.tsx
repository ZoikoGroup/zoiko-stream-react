'use client';

import type { FormEvent } from 'react';

const requirementOptions = [
  { label: 'Keyboard Navigation', defaultChecked: true },
  { label: 'Screen Reader', defaultChecked: false },
  { label: 'Sign Language', defaultChecked: false },
  { label: 'Tactile Display', defaultChecked: false },
  { label: 'Alternative Text', defaultChecked: false },
];

const fieldClass =
  'w-full px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 text-sm text-zinc-950 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-400';

export default function PlanningBriefSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-zinc-950 text-3xl sm:text-4xl font-bold leading-tight">
          Start with minimum data. Plan with maximum clarity.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Submitting creates a planning inquiry, not a confirmed booking.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl p-6 sm:p-10 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-name" className="text-zinc-950 text-sm font-bold">
                Name
              </label>
              <input id="a11y-name" name="name" placeholder="Sarah Jenkins" className={fieldClass} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-email" className="text-zinc-950 text-sm font-bold">
                Work email
              </label>
              <input
                id="a11y-email"
                name="email"
                type="email"
                placeholder="s.jenkins@enterprise.com"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-org" className="text-zinc-950 text-sm font-bold">
                Organization
              </label>
              <input
                id="a11y-org"
                name="organization"
                placeholder="Enterprise Corp"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-event-type" className="text-zinc-950 text-sm font-bold">
                Event type
              </label>
              <input
                id="a11y-event-type"
                name="eventType"
                placeholder="Global Annual Summit"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-timeframe" className="text-zinc-950 text-sm font-bold">
                Expected date/timeframe
              </label>
              <input
                id="a11y-timeframe"
                name="timeframe"
                placeholder="Q4 2026"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="a11y-access-model" className="text-zinc-950 text-sm font-bold">
                Audience access model
              </label>
              <select id="a11y-access-model" name="accessModel" className={fieldClass}>
                <option>Credentialed (SAML SSO)</option>
                <option>Authenticated (email verification)</option>
                <option>Named / recipient list</option>
                <option>Public with registration</option>
              </select>
            </div>
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="text-zinc-950 text-sm font-bold mb-3">
              Accessibility Requirements (Select categories)
            </legend>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {requirementOptions.map((option) => (
                <label key={option.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="requirements"
                    value={option.label}
                    defaultChecked={option.defaultChecked}
                    className="w-4 h-4 accent-teal-400"
                  />
                  <span className="text-zinc-950 text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-2">
            <label htmlFor="a11y-languages" className="text-zinc-950 text-sm font-bold">
              Captions / Language Needs (Optional)
            </label>
            <input
              id="a11y-languages"
              name="languages"
              placeholder="E.g., EN/ES live translation streams"
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="a11y-context" className="text-zinc-950 text-sm font-bold">
              Additional Context
            </label>
            <textarea
              id="a11y-context"
              name="context"
              rows={4}
              placeholder="No medical or disability information required. Provide technical context here."
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Start your event brief
          </button>

          <p className="text-gray-500 text-xs text-center">
            This brief requests planning review. It does not confirm service availability, pricing,
            or legal conformance.
          </p>
        </form>
      </div>
    </section>
  );
}
