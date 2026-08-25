import React from 'react';

export function EmbargoPolicySection() {
  return (
    <section className="w-full px-6 lg:px-28 py-16 bg-slate-50 border-b border-gray-200 flex justify-center items-center">
      <div className="w-full max-w-[900px] p-8 bg-white rounded-2xl border border-zinc-200 flex flex-col gap-5 shadow-xs">
        <h3 className="text-gray-800 text-xl font-bold   ">
          About embargoes and confidential material
        </h3>

        <p className="text-gray-500 text-sm font-normal    leading-6">
          Submitting this form does not create an embargo, exclusivity, background, off-the-record or confidentiality agreement. Those terms apply only when explicitly confirmed in writing by authorized ZoikoStream Communications.
        </p>

        <div className="p-4 bg-red-50 rounded-lg border border-rose-200">
          <p className="text-pink-800 text-xs font-normal    leading-5">
            Do not submit passwords, API keys, stream keys, access tokens, vulnerability details or confidential files through this form.
          </p>
        </div>
      </div>
    </section>
  );
}
