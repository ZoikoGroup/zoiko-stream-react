'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to the newsletter provider once an endpoint is available.
    setSubmitted(true);
  }

  return (
    <section className="w-full border-b border-zinc-900 bg-[#0a0a0f] py-10">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-4 sm:px-7 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-slate-50">Stay in the loop</h2>
          <p className="mt-1.5 text-sm text-gray-400">Get streaming tips and product updates straight to your inbox.</p>
        </div>

        {submitted ? (
          <p role="status" className="text-sm font-medium text-emerald-300">
            Thanks — you’re on the list.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full gap-2 md:max-w-[420px]">
            <label htmlFor="bf-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="bf-newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-lg border border-gray-800 bg-[#14141f] px-3.5 text-sm text-white placeholder:text-gray-500 focus:border-violet-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 text-white transition hover:brightness-110"
            >
              <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
