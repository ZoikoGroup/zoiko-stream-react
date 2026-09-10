import React from 'react';

export default function TrademarkDirectory() {
  const marks = [
    {
      topText: "ZoikoStream",
      title: "ZoikoStream® wordmark",
      desc: "Owner: Zoiko Group · Status: Registered trademark · Word mark",
      hasIcon: true
    },
    {
      topText: "",
      title: "ZoikoStream logomark",
      desc: "Owner: Zoiko Group · Status: Registered trademark · Design mark",
      hasIcon: true
    },
    {
      topText: "ZoikoStream Live Events™",
      title: "Live Events sub-brand",
      desc: "Owner: Zoiko Group · Status: Unregistered trademark (™) · Word mark",
      hasIcon: false
    },
    {
      topText: "Zoiko Cloud™",
      title: "Zoiko Cloud",
      desc: "Owner: Zoiko Group · Status: Unregistered trademark (™) · Word mark",
      hasIcon: false
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col gap-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Approved mark directory</h2>
          <p className="text-sm text-gray-500">Current public marks only. Retired marks are not shown here as current guidance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marks.map((mark, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-[#35373C] flex items-center justify-center gap-3 p-6 text-center">
                {mark.hasIcon && (
                  <div className="w-10 h-10 rounded shadow-md bg-gradient-to-br from-[#4FC3F7] to-[#0288D1]" />
                )}
                {mark.topText && (
                  <span className="text-white font-bold text-xl">{mark.topText}</span>
                )}
              </div>
              <div className="bg-white p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{mark.title}</h3>
                <p className="text-xs text-gray-400">{mark.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
