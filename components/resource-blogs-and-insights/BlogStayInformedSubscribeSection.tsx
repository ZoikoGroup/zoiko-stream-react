'use client';

import React, { useState } from 'react';

export default function BlogStayInformedSubscribeSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-center gap-8 text-center">
      <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Stay informed with ZoikoStream insights
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-6 max-w-2xl">
          Get weekly technical publications, operational case studies, and critical protocol updates directly from our streaming engineering desk.
        </p>
      </div>

      <div className="w-full max-w-xl flex flex-col justify-start items-center gap-3">
        {subscribed ? (
          <div className="w-full p-4 bg-teal-400/10 rounded-lg outline outline-1 outline-teal-400 text-teal-400 text-sm font-bold font-['Space_Grotesk']">
            Thank you for subscribing! You are now on our technical updates list.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@organization.com"
              required
              className="flex-1 w-full px-4 py-3.5 bg-gray-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-200 placeholder-slate-400 text-sm font-normal font-['Inter'] outline-none focus:outline-teal-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-teal-400 rounded-lg text-gray-950 text-base font-bold font-['Space_Grotesk'] hover:bg-teal-300 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4 max-w-lg">
          No marketing spam or abstract summaries. You can unsubscribe at any time. By subscribing, you agree to our standard data privacy policy guidelines.
        </p>
      </div>
    </section>
  );
}
