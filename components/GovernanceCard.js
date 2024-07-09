// components/GovernanceCard.js
import React from "react";

const GovernanceCard = ({ title, description }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white">
      <div className="h-32 bg-gray-300 mb-4"></div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">View Feature</button>
    </div>
  );
};

export default GovernanceCard;
