// components/GovernanceContainer.js
import React from "react";
import GovernanceCard from "./GovernanceCard";

const GovernanceContainer = () => {
  const cards = [
    { title: "SPAMI", description: "Proses pelaporan kasus dan manajemen insiden PT Asuransi BRI Life." },
    { title: "BRILIST", description: "Fraud Detection System, Dashboard Manajemen Risiko (Risk Profile, Key Risk, RAS)." },
    { title: "E-RMS", description: "Risk Register dan Risk Report, Risk Monitoring, Loss Event Database." },
  ];

  return (
    <div className="container mt-10 p-4 border border-gray-300 shadow-lg" style={{ width: "1430px" }}>
      <div className="bg-[#0D5AA1] p-4  mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Governance, Risk & Compliance</h2>
        <button className="bg-[#F06E21] text-white px-4 py-2 " style={{ width: "200px" }}>
          Show All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <GovernanceCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default GovernanceContainer;
