import React from 'react';

export default function TrademarkUseCases() {
  const cards = [
    {
      title: "Referencing us in text",
      desc: "Writing about ZoikoStream in an article, post, or documentation."
    },
    {
      title: "Using the logo",
      desc: "Placing our logo on your own site, deck, or materials."
    },
    {
      title: "Partner or integration badge",
      desc: "Showing a \"Built with ZoikoStream\" or partner mark."
    },
    {
      title: "Media use",
      desc: "Press or editorial use of ZoikoStream marks or screenshots."
    },
    {
      title: "Requesting permission",
      desc: "A use case not already covered by this page."
    },
    {
      title: "Reporting a concern",
      desc: "You've seen a mark used in a way that looks unauthorized."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose your use case</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-blue-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
