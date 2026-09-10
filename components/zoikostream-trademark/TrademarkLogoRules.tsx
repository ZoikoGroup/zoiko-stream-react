import React from 'react';

export default function TrademarkLogoRules() {
  const rules = [
    "Maintain clear space around the logo equal to the height of the logomark.",
    "Don't recolor, distort, rotate, or add effects (shadows, outlines) to the logo.",
    "Don't combine the ZoikoStream logo with another logo to imply a joint or co-branded product without approval.",
    "Use the current logo files only — check the version date before publishing."
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Logo & visual asset rules</h2>
          <p className="text-sm text-gray-500">Brand-spec rules for using the approved logo files.</p>
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
