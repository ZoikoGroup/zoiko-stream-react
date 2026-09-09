import React from 'react';

export default function TrademarkReportConcern() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col items-start">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Report a trademark concern</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-3xl">
          If you've seen a ZoikoStream mark used in a way that looks unauthorized or misleading, let us know.
        </p>
        <button className="px-6 py-3 rounded-lg font-bold text-gray-900 bg-gradient-to-r from-[#5EEAD4] to-[#60A5FA] hover:opacity-90 transition-opacity">
          Report via Contact
        </button>
      </div>
    </section>
  );
}
