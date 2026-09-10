import React from 'react';

export default function TrademarkWorkflow() {
  const steps = [
    {
      step: "01",
      title: "Describe your use case",
      desc: "Tell us what you want to use and where."
    },
    {
      step: "02",
      title: "Legal review",
      desc: "Our Legal/Brand team reviews against current guidelines."
    },
    {
      step: "03",
      title: "Approval or guidance",
      desc: "You'll receive a decision or guidance — approval is not automatic."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Permission workflow</h2>
          <p className="text-sm text-gray-500">For any use case not already covered above.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow">
              <span className="text-blue-500 font-bold text-sm mb-4">{step.step}</span>
              <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div>
          <button className="px-6 py-3 rounded-lg font-bold text-gray-900 bg-gradient-to-r from-[#5EEAD4] to-[#60A5FA] hover:opacity-90 transition-opacity">
            Request permission via Contact
          </button>
        </div>
      </div>
    </section>
  );
}
