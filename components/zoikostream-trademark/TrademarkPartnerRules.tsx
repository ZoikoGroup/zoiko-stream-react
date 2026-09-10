import React from 'react';

export default function TrademarkPartnerRules() {
  const cards = [
    {
      title: "Customers",
      desc: "You may reference that your organization \"uses ZoikoStream.\" This does not itself grant logo-use rights."
    },
    {
      title: "Technology partners",
      desc: "Approved partners may use the \"Built with ZoikoStream\" badge under the Partners program terms."
    },
    {
      title: "Integrations",
      desc: "Referencing a ZoikoStream integration in your product docs is permitted with correct attribution; logo use requires separate approval."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner, customer & integration rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-base font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
