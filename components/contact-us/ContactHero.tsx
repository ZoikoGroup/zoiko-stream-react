'use client';

import ContactInquiryForm from './ContactInquiryForm';

export default function ContactHero() {
  return (
    <section className="relative isolate w-full">
      {/* Background photo — the artwork already carries the gradient */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/contact-us/hero-contact.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Contact ZoikoStream
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Get to the right ZoikoStream team.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/90">
            Choose the reason you are contacting us. We will route you to the right
            place for sales, support, Live Events, developers, partnerships, media,
            accessibility, privacy, legal or general questions.
          </p>
        </div>

        {/* Right: inquiry card, overlapping the band on large screens */}
        <div className="w-full lg:-mb-56">
          <ContactInquiryForm />
        </div>
      </div>
    </section>
  );
}
