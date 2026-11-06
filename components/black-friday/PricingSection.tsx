import Link from 'next/link';
import { CalendarDays, Check, Clock } from 'lucide-react';
import { TagGlyph, container, gradientBtn } from './shared';

const plans = [
  {
    name: 'Starter',
    blurb: 'Perfect for small events',
    price: '$49',
    features: ['Up to 500 viewers', 'HD streaming', 'Basic analytics', 'Live chat'],
    cta: { label: 'Get Started', href: '/start-building' },
  },
  {
    name: 'Pro',
    blurb: 'Great for growing audiences',
    price: '$149',
    features: ['Up to 2,500 viewers', 'HD streaming', 'Advanced analytics', 'Custom branding', 'Monetization tools'],
    cta: { label: 'Get Started', href: '/start-building' },
    featured: true,
  },
  {
    name: 'Enterprise',
    blurb: 'Built for large-scale events',
    price: 'Custom',
    features: ['Unlimited viewers', 'Priority support', 'Advanced security', 'Dedicated account manager'],
    cta: { label: 'Contact Sales', href: '/request-enterprise-quote' },
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full scroll-mt-24 bg-[#0a0a0f] pb-14 pt-5">
      <div className={container}>
        <div className="grid overflow-hidden rounded-3xl border border-indigo-800 bg-gradient-to-b from-[#121219] to-[#0b0c12] lg:grid-cols-[320px_1fr]">
          {/* Offer panel */}
          <div className="relative border-b border-gray-800 bg-[radial-gradient(circle_at_18%_22%,rgba(124,58,237,0.3),transparent_60%)] px-8 py-10 lg:border-b-0 lg:border-r">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-900/60 px-3 py-1.5 text-xs font-bold tracking-wide text-violet-100">
              <TagGlyph className="size-3" /> BLACK FRIDAY 2026 OFFER
            </span>
            <p className="mt-6 text-[56px] font-extrabold leading-[58px] tracking-tight">
              <span className="text-amber-200">20%</span> <span className="text-stone-200">OFF</span>
            </p>
            <p className="mt-3 text-lg font-medium leading-7 text-gray-300">eligible first-event platform fees*</p>

            <div className="relative mt-6 h-px bg-gradient-to-r from-gray-700/0 via-gray-700 to-gray-700/0">
              <span className="absolute left-[30%] top-[-4.5px] size-2.5 rounded-full border-2 border-gray-600 bg-[#0b0c12]" />
              <span className="absolute left-[60%] top-[-4.5px] size-2.5 rounded-full border-2 border-gray-600 bg-[#0b0c12]" />
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3.5">
              {[
                { icon: CalendarDays, label: 'Black Friday', date: '27 Nov 2026' },
                { icon: Clock, label: 'Cyber Monday', date: '30 Nov 2026' },
              ].map(({ icon: Icon, label, date }) => (
                <div key={label} className="flex gap-2.5">
                  <Icon className="mt-0.5 size-4 shrink-0 text-violet-300" strokeWidth={1.5} />
                  <div>
                    <dt className="text-[13px] font-bold leading-5 text-slate-50">{label}</dt>
                    <dd className="text-xs leading-4 text-gray-400">{date}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[11px] leading-4 text-gray-500">
              *Discount applies to eligible first-event platform fees only. Terms, conditions and eligibility apply.
            </p>
          </div>

          {/* Plans */}
          <div className="px-5 py-9 sm:px-8">
            <h2 className="text-center text-2xl font-extrabold leading-10 text-slate-50">Simple pricing. Powerful results.</h2>
            <p className="text-center text-base text-gray-400">Choose the plan that fits your event.</p>

            <div className="mt-9 grid items-start gap-6 md:grid-cols-3 md:gap-5">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl px-5 py-6 ${
                    plan.featured
                      ? 'border border-violet-500/60 bg-[#14141c] shadow-[0_0_40px_-8px_rgba(124,58,237,0.75)] md:-my-1.5'
                      : 'border border-gray-800 bg-[#0b0c12]'
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-b from-violet-500 to-violet-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-base font-bold text-slate-50">{plan.name}</h3>
                  <p className="mt-1 text-[13px] text-gray-400">{plan.blurb}</p>
                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span className={`font-extrabold text-slate-50 ${plan.price === 'Custom' ? 'text-3xl' : 'text-4xl'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && <span className="text-sm font-medium text-gray-400">/event</span>}
                  </p>
                  <ul className="mb-6 mt-5 flex flex-1 flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm leading-5 text-gray-300">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-300" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.cta.href}
                    className={`rounded-[10px] p-3 text-center text-base font-medium text-white ${
                      plan.featured ? gradientBtn : 'border border-gray-700 transition hover:border-gray-500'
                    }`}
                  >
                    {plan.cta.label}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
