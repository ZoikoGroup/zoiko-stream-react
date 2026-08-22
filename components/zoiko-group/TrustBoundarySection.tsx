'use client';

interface Boundary {
  title: string;
  description: string;
}

const BOUNDARIES: Boundary[] = [
  {
    title: 'Data sharing',
    description:
      'Never implied group-wide. See Privacy and Trust Center for product-specific handling.',
  },
  {
    title: 'Contracting entity',
    description:
      'Never inferred from brand hierarchy. See the applicable terms, order form, or agreement.',
  },
  {
    title: 'Security responsibility',
    description:
      'No parent-level security coverage is claimed. See ZoikoStream Trust Center.',
  },
  {
    title: 'Financial guarantee',
    description: 'No parent guarantee, credit support, or indemnity is implied.',
  },
  {
    title: 'Service responsibility',
    description: 'The Group does not directly operate every platform service.',
  },
  {
    title: 'Cross-product integration',
    description:
      'No automatic shared identity, data, billing, or entitlements are implied.',
  },
];

export default function TrustBoundarySection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-8 lg:py-14">
        <div className="rounded-2xl bg-indigo-50 p-6 sm:p-10">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-[3px] bg-blue-400" />
            <span className="text-xs font-bold uppercase leading-5 tracking-wider text-blue-400">
              Trust boundary
            </span>
          </div>

          <p className="mt-5 text-base leading-7 text-neutral-700">
            Being part of Zoiko Group does not, by itself, mean customer data is
            shared freely across group companies. Data handling follows the
            applicable privacy notice, customer agreement, product architecture,
            permissions, and legal requirements. Likewise, the Group relationship
            does not by itself determine the legal entity contracting for a
            particular service.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {BOUNDARIES.map((boundary) => (
              <div key={boundary.title}>
                <dt className="text-sm font-semibold leading-6 text-neutral-700">
                  {boundary.title}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-500">
                  {boundary.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
