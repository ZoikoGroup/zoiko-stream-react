import React from 'react';

export default function TrademarkFooter() {
  return (
    <div className="w-full flex justify-center py-16 bg-white border-t border-gray-200">
      <div className="max-w-3xl w-full px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Still have questions?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          If you are unsure whether your use of a ZoikoStream trademark complies with these guidelines, please contact us.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Contact Legal
        </button>
      </div>
    </div>
  );
}
