import React from 'react';

export default function TrademarkList() {
  return (
    <div className="w-full flex justify-center py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl w-full px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Registered Trademarks</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>ZoikoStream®</li>
          <li>Zoiko Group™</li>
        </ul>
      </div>
    </div>
  );
}
