'use client';

export default function RelationshipBanner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="border-l-2 border-teal-400 pl-6 sm:pl-8">
          <h2 className="text-xl font-bold leading-8 text-neutral-700 sm:text-2xl sm:leading-10">
            How does ZoikoStream fit within Zoiko Group?
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-6 text-gray-500">
            ZoikoStream is the streaming platform in the wider Zoiko portfolio. Zoiko
            Group provides the parent-organization context; Zoiko Tech is the
            technology company identified on this site as where ZoikoStream is built;
            Zoiko Cloud provides shared technology and infrastructure capabilities
            where applicable; and Live Events is a specialized ZoikoStream capability.
            The legal provider for a specific service is stated in the applicable
            terms, order form, or agreement.
          </p>

          <p className="mt-8 text-sm leading-5 text-gray-400">
            This explanation is intentionally split between corporate/operating
            relationships and product/technology relationships.
          </p>
        </div>
      </div>
    </section>
  );
}
