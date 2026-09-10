import React from 'react';
import Link from 'next/link';

const imgBg = "/images/webhooks/subscription-background.webp";

const subscriptionParameters = [
  { title: 'Event Selection', description: 'Subscribe only to current eligible events and families from the registry.' },
  {
    title: 'Environment Scope',
    description: 'Subscriptions are isolated and scoped strictly to source-defined sandbox or production environments.',
  },
  {
    title: 'Endpoint Ownership',
    description: 'HTTPS destination endpoints must clear signature authorization sweeps during activation.',
  },
];

const endpointSpecifications = [
  {
    title: 'Transport Method',
    description: 'Deliveries resolve over HTTPS requests conforming strictly to transport contract parameters.',
  },
  {
    title: 'Acknowledgement rules',
    description: 'Endpoints must return successful status within expected latency windows to qualify.',
  },
  {
    title: 'Timeout limits',
    description: 'Standard network timeout blocks apply to clear slow or hanging backend receiver queues.',
  },
];

function SpecCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[4px] items-start p-[20px] rounded-[12px] w-full">
      <p className="font-sans font-bold text-[#0a0d13] text-[16px]">{title}</p>
      <p className="font-sans font-normal text-[#4f5e74] text-[12px] leading-[18px] w-full">{description}</p>
    </div>
  );
}

export default function SubscriptionModelSection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Subscription-Model-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            Subscription model and endpoint requirements
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Configure eligible endpoints, select events, and understand transport, acknowledgement, and network rules
            from current sources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
          <div className="flex flex-col gap-[16px] items-start w-full">
            <p className="font-sans font-bold text-[#0a0d13] text-[18px]">Subscription Parameters</p>
            {subscriptionParameters.map((item) => (
              <SpecCard key={item.title} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            <p className="font-sans font-bold text-[#0a0d13] text-[18px]">Endpoint Specifications</p>
            {endpointSpecifications.map((item) => (
              <SpecCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <Link
          href="/developer-api-reference"
          className="border-[1.5px] border-[#4f5e74] border-solid flex items-start px-[28px] py-[14px] rounded-[10px] transition-colors hover:border-[#0a0d13]"
        >
          <span className="font-sans font-medium text-[#0a0d13] text-[16px]">View subscription API docs</span>
        </Link>
      </div>
    </section>
  );
}
