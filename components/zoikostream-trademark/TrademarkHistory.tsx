import React from 'react';

export default function TrademarkHistory() {
  const history = [
    {
      version: "v1.4",
      date: "Aug 2026",
      desc: "Added Zoiko Cloud mark and clarified merchandise use as Not established."
    },
    {
      version: "v1.3",
      date: "Apr 2026",
      desc: "Added partner badge conditional-use rule."
    },
    {
      version: "v1.0",
      date: "Sep 2025",
      desc: "Initial published trademark guidelines."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">History & changes</h2>
        
        <div className="flex flex-col">
          {history.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row md:items-center py-5 ${idx !== history.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="w-full md:w-32 mb-2 md:mb-0">
                <span className="text-sm font-bold text-gray-900">{item.version}</span>
              </div>
              <div className="w-full md:w-48 mb-2 md:mb-0">
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
