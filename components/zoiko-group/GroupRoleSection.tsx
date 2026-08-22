'use client';

interface Role {
  number: string;
  title: string;
  description: string;
  caveat: string;
  image: string;
  alt: string;
}

const ROLES: Role[] = [
  {
    number: '01',
    title: 'Strategic stewardship',
    description:
      'Provides group-level direction and long-term stewardship across the wider Zoiko organization.',
    caveat:
      'Does not imply the parent makes every product, engineering, security, or customer decision.',
    image: '/images/zoiko-group/role-strategic-stewardship.png',
    alt: 'A strategy diagram on a laptop screen during a planning session',
  },
  {
    number: '02',
    title: 'Governance & standards',
    description:
      'Supports shared governance, operating principles, and accountability across the Group.',
    caveat:
      'Product-specific controls remain documented in the relevant platform, trust, legal, or operational surface.',
    image: '/images/zoiko-group/role-governance-standards.png',
    alt: 'A person signing governance documentation',
  },
  {
    number: '03',
    title: 'Portfolio development',
    description:
      'Supports the development and growth of the wider Zoiko technology portfolio.',
    caveat:
      'This is not a cross-sell catalog, and it does not imply every product is integrated.',
    image: '/images/zoiko-group/role-portfolio-development.png',
    alt: 'A product and engineering team collaborating around laptops',
  },
  {
    number: '04',
    title: 'Global operating context',
    description:
      'Provides the organizational context within which Zoiko companies and platforms operate across markets.',
    caveat:
      'Does not imply one legal entity, policy, data location, or contracting model applies globally.',
    image: '/images/zoiko-group/role-global-operating-context.png',
    alt: 'Skyscrapers overlaid with a world map, representing global markets',
  },
];

export default function GroupRoleSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Parent-level role
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-10 text-neutral-700 sm:text-3xl">
            The role of the Group.
          </h2>
        </div>

        <div className="mt-10">
          {ROLES.map((role, index) => (
            <article
              key={role.number}
              className="flex flex-col gap-8 border-b border-zinc-200 py-10 lg:flex-row lg:items-center lg:gap-14 lg:py-14"
            >
              {/* Image — alternates side on lg */}
              <div
                className={`w-full overflow-hidden bg-slate-50 lg:w-1/2 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={role.image}
                  alt={role.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Copy */}
              <div className="flex w-full flex-col lg:w-1/2">
                <span className="text-xs font-bold leading-5 tracking-wide text-blue-400">
                  {role.number}
                </span>

                <h3 className="mt-3 text-lg font-bold leading-9 text-neutral-700 sm:text-xl">
                  {role.title}
                </h3>

                <p className="mt-4 text-base leading-6 text-gray-500">
                  {role.description}
                </p>

                <p className="mt-6 border-t border-zinc-200 pt-4 text-sm leading-6 text-gray-400">
                  {role.caveat}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
