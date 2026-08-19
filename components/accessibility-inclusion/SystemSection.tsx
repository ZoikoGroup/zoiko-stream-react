interface Principle {
  number: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    number: '01',
    title: 'Requirements before config',
    description:
      'Prevents production teams from assuming one general delivery method works for every live broadcast.',
  },
  {
    number: '02',
    title: 'Visible ownership',
    description:
      'Establishes clear, separate lines of responsibility across event owner, production lead, and accessibility desk.',
  },
  {
    number: '03',
    title: 'Verification before certainty',
    description:
      'Separates what is merely configured in settings from what has been actively tested and signed-off by pre-air ops.',
  },
  {
    number: '04',
    title: 'Material-change awareness',
    description:
      'Triggers instant re-validation prompts whenever sources, presentation materials, or captions change post-verify.',
  },
  {
    number: '05',
    title: 'Limitations stay visible',
    description:
      'Protects audience trust and activates automated alternative channels when primary delivery hits systemic limits.',
  },
];

export default function SystemSection() {
  return (
    <section
      className="w-full bg-neutral-900 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 7, 18, 0.2), rgba(3, 7, 18, 0.2)), url('/images/accessibility-inclusion/system-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-3">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          Accessibility is a system, not a final-minute toggle
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Deterministic inclusion demands strict programmatic steps throughout the entire event
          planning workflow.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {principles.map((item) => (
          <article
            key={item.number}
            className="p-6 bg-gray-900/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4"
          >
            <span className="text-teal-400 text-sm font-bold">{item.number}</span>
            <h3 className="text-slate-100 text-base font-bold">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-5">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
