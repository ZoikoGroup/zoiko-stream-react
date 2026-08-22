import React from 'react';

export default function EcosystemDefinitionSection() {
  return (
    <section className="w-full bg-white py-16 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white rounded-xl border-l-4 border-teal-400 border-gray-200  border-r shadow-2xs flex flex-col gap-4">
          <h3 className="text-gray-800 text-2xl font-bold  ">
            What is the ZoikoStream partner ecosystem?
          </h3>
          <p className="text-gray-500 text-base font-normal   leading-relaxed max-w-4xl">
            ZoikoStream partners are independent technology, implementation, production, and ecosystem organizations that can complement ZoikoStream for specific customer needs. Public listings are governed by partner status and approved capability data; a listing does not by itself mean ZoikoStream guarantees a partner&apos;s services, security, availability, or commercial terms.
          </p>
        </div>
      </div>
    </section>
  );
}
