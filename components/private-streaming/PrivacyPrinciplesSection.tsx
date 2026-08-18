interface PrivacyQa {
  question: string;
  answer: string;
}

const privacyQa: PrivacyQa[] = [
  {
    question: 'Is the room public?',
    answer:
      'No public discovery is intended for the protected viewing experience; authorization is still required at the room gate.',
  },
  {
    question: 'Can I guarantee nobody will share it?',
    answer:
      'No blanket guarantee. Private access controls who is authorized to enter; human/device redistribution is a separate risk.',
  },
  {
    question: 'What data do you need?',
    answer:
      'Only data necessary for event planning, access, and support. The public brief does not request guest lists or credentials.',
  },
  {
    question: 'What happens if access fails?',
    answer:
      'Eligible viewers receive a recovery and support path. Current supported behavior is event-specific.',
  },
];

const principles = [
  'Data Minimization',
  'Least Privilege',
  'Purpose Limitation',
  'Explicit Authorization',
  'Evidence-Governed',
  'Anti-Profiling',
];

export default function PrivacyPrinciplesSection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-28 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Privacy is designed. Not declared.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          We earn trust through precise boundaries, not marketing superlatives.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {privacyQa.map((item) => (
          <article
            key={item.question}
            className="p-6 sm:p-7 bg-slate-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-3"
          >
            <h3 className="text-slate-900 text-base font-bold leading-6">{item.question}</h3>
            <p className="text-slate-600 text-sm leading-6">{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl p-6 sm:p-8 bg-zinc-950 rounded-2xl flex flex-col gap-5">
        <h3 className="text-teal-400 text-base font-bold">Core Operational Principles</h3>
        <div className="w-full flex flex-wrap gap-3">
          {principles.map((principle) => (
            <span
              key={principle}
              className="px-4 py-2.5 bg-zinc-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-slate-100 text-sm font-medium"
            >
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
