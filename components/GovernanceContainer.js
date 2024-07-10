import React from "react";

const GovernanceContainer = () => {
  return (
    <div className="container mt-5 p-4 border border-gray-400 shadow-lg bg-white -ml-4" style={{ width: "970px" }}>
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Governance, Risk & Compliance</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1 rounded" style={{ width: "170px" }}>
          Show All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-md shadow-md bg-white mt-4">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">SPAMI</h2>
            <p className="text-gray-600 mb-4">Proses pelaporan kasus dan manajemen insiden PT Asuransi BRI Life.</p>
            <div className="flex justify-end">
              <button className="bg-[#0D5AA1] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">View Feature</button>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow-md bg-white mt-4">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">BRILIST</h2>
            <p className="text-gray-600 mb-4">Fraud Detection System, Dashboard Manajemen Risiko (Risk Profile, Key Risk, RAS).</p>
            <div className="flex justify-end">
              <button className="bg-[#0D5AA1] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">View Feature</button>
            </div>
          </div>
        </div>
        <div className="border rounded-md shadow-md bg-white mt-4">
          <div className="h-40 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">E-RMS</h2>
            <p className="text-gray-600 mb-4">Risk Register dan Risk Report, Risk Monitoring, Loss Event Database.</p>
            <div className="flex justify-end">
              <button className="bg-[#0D5AA1] text-white py-2 px-4 mt-6 rounded hover:bg-blue-600 transition duration-300">View Feature</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceContainer;
