'use client';

import { useState } from 'react';

const TOPICS = [
  'Sales',
  'Support',
  'Live Events',
  'Developer Relations',
  'Partners',
  'Press & media',
  'Accessibility',
  'Privacy',
  'Legal',
  'Security',
  'General question',
];

const MESSAGE_LIMIT = 2000;

const FIELD_CLASS =
  'w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm leading-5 text-gray-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30';

const LABEL_CLASS = 'block text-sm font-semibold leading-5 text-gray-800';

export default function ContactInquiryForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-slate-50 p-6 shadow-[0px_4px_107px_0px_rgba(0,0,0,0.16)] outline-1 -outline-offset-1 outline-zinc-200 sm:p-8 lg:p-10">
      <h2 className="text-xl font-bold leading-8 text-gray-800 sm:text-2xl sm:leading-10">
        Let&rsquo;s Connect &amp; Stream Together
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Have a question or an idea? Reach out to the ZoikoStream team &mdash; we&rsquo;d
        love to hear from you.
      </p>

      <form
        className="mt-8 flex flex-col gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={LABEL_CLASS} htmlFor="contact-first-name">
              First name *
            </label>
            <input
              id="contact-first-name"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>

          <div>
            <label className={LABEL_CLASS} htmlFor="contact-last-name">
              Last name *
            </label>
            <input
              id="contact-last-name"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>

          <div>
            <label className={LABEL_CLASS} htmlFor="contact-email">
              Email *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="name@example.com"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>

          <div>
            <label className={LABEL_CLASS} htmlFor="contact-organization">
              Organization (optional)
            </label>
            <input
              id="contact-organization"
              name="organization"
              type="text"
              autoComplete="organization"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="contact-topic">
            Topic *
          </label>
          <select
            id="contact-topic"
            name="topic"
            required
            defaultValue=""
            className={`mt-2 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2318181b%22%3E%3Cpath%20d%3D%22M5.5%207.5L10%2012l4.5-4.5z%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_0.875rem_center] bg-no-repeat pr-11 ${FIELD_CLASS}`}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="contact-message">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            maxLength={MESSAGE_LIMIT}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us what you need help with"
            className={`mt-2 resize-y ${FIELD_CLASS}`}
          />
          <p className="mt-2 text-right text-xs leading-5 text-gray-400">
            {message.length.toLocaleString()} / {MESSAGE_LIMIT.toLocaleString()}{' '}
            characters
          </p>
        </div>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="updates"
            className="mt-1 size-3.5 shrink-0 rounded-xs border border-neutral-500 accent-blue-400"
          />
          <span className="text-sm leading-5 text-gray-500">
            I would like to receive ZoikoStream product and company updates.
          </span>
        </label>

        <p className="rounded-lg bg-white px-4 py-4 text-xs leading-5 text-gray-400 outline-1 -outline-offset-1 outline-zinc-200">
          By submitting this form, you acknowledge the Privacy Notice. Do not include
          passwords, payment card details, access tokens or other sensitive
          credentials.
        </p>

        <button
          type="submit"
          className="w-full rounded-[10px] bg-gradient-to-r from-teal-300 to-blue-400 px-6 py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90"
        >
          Send inquiry
        </button>

        {submitted && (
          <p
            role="status"
            className="text-center text-sm leading-6 font-medium text-teal-600"
          >
            Thanks &mdash; your inquiry has been captured and will be routed to the
            right team.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-xs leading-6 text-gray-400">
        For support, Live Events, privacy, legal or security, use the dedicated routes
        above.
      </p>
    </div>
  );
}
