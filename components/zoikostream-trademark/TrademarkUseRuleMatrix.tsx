import React from 'react';

export default function TrademarkUseRuleMatrix() {
  const tableData = [
    {
      useCase: "Referencing \"ZoikoStream\" in an article or post",
      state: "Permitted",
      stateColor: "bg-green-100 text-green-700 font-bold",
      notes: "Follow reference & attribution rules above."
    },
    {
      useCase: "Using the logo in press or editorial coverage",
      state: "Permitted",
      stateColor: "bg-green-100 text-green-700 font-bold",
      notes: "Use current asset, unaltered."
    },
    {
      useCase: "\"Built with ZoikoStream\" partner badge",
      state: "Conditional",
      stateColor: "bg-yellow-100 text-yellow-700 font-bold",
      notes: "Requires an active partner relationship and approval."
    },
    {
      useCase: "Using the logo in your own product UI",
      state: "Conditional",
      stateColor: "bg-yellow-100 text-yellow-700 font-bold",
      notes: "Requires written permission via the workflow below."
    },
    {
      useCase: "Using the logo in a domain name or company name",
      state: "Restricted",
      stateColor: "bg-red-100 text-red-700 font-bold",
      notes: "Not permitted without a separate agreement."
    },
    {
      useCase: "Modifying or creating a derivative of the logo",
      state: "Restricted",
      stateColor: "bg-red-100 text-red-700 font-bold",
      notes: "Not permitted under this policy."
    },
    {
      useCase: "Using the logo in merchandise for sale",
      state: "Not established",
      stateColor: "bg-gray-200 text-gray-700 font-bold",
      notes: "No public rule yet — contact Legal."
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <div className="max-w-5xl w-full px-6 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Use-rule matrix</h2>
          <p className="text-sm text-gray-500 max-w-2xl">Permission state by use case. "Not established" means don't assume the right — request permission instead.</p>
        </div>
        
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-2 text-xs font-bold text-gray-400 uppercase tracking-wider w-[40%]">Use Case</th>
                <th className="py-4 px-2 text-xs font-bold text-gray-400 uppercase tracking-wider w-[25%]">Permission State</th>
                <th className="py-4 px-2 text-xs font-bold text-gray-400 uppercase tracking-wider w-[35%]">Notes</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-5 px-2 text-sm text-gray-600">{row.useCase}</td>
                  <td className="py-5 px-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${row.stateColor}`}>
                      {row.state}
                    </span>
                  </td>
                  <td className="py-5 px-2 text-sm text-gray-600">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
