import React from 'react';

export default function TrademarkAttributionRules() {
  const rules = [
    "Use \"ZoikoStream\" as a proper noun with correct capitalization — not \"Zoikostream,\" \"zoiko stream,\" or as a verb (\"to zoikostream\").",
    "Use the exact current symbol for each mark shown in the directory above — don't apply ® to marks currently shown as ™.",
    "On first reference in a document, include an attribution such as \"ZoikoStream is a trademark of Zoiko Group.\"",
    "Don't imply ZoikoStream endorses your product, service, or opinion unless that relationship is separately confirmed."
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reference & attribution rules</h2>
          <p className="text-sm text-gray-500">How to correctly write about ZoikoStream in text.</p>
        </div>
        
        <div className="flex flex-col">
          {rules.map((rule, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 py-4 ${idx !== rules.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="w-4 h-4 mt-0.5 rounded border-2 border-gray-200 flex-shrink-0" />
              <p className="text-sm text-gray-500 leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
