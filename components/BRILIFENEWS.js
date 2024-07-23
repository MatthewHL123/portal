import React from "react";

const BRILIFENEWS = () => {
  return (
    <div className="container border border-gray-400 bg-white rounded mx-auto" style={{ width: "800px", height: "400px" }}>
      <a href="/newsmanagementpage">
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="font-semibold text-white">BRI Life News</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1" style={{ width: "200px", height: "32px" }}>Show All</button>
      </div>
      </a>
      
      <div className="bg-white p-5 px-9">
        <div className="mb-6">
          <h1 className="text-xl font-semibold mb-1" style={{ color: "#0D5AA1", fontSize: "25px" }}>Recenty Added</h1>
        </div>

        <div className="grid grid-cols-1 grid-cols-2 gap-4">
          <div className="border rounded-md shadow-md bg-white">
            <div className="h-40 bg-gray-300"></div>
            <div className="p-3 px-6">
              <p className="text-gray-600 text-sm">Finance . Senin, 1 Juli 2024</p>
              <h2 className="font-semibold text-lg">Hasil Rapat Besar Juni 2024</h2>
            </div>
          </div>
          <div className="border rounded-md shadow-md bg-white">
            <div className="h-40 bg-gray-300"></div>
            <div className="p-3 px-6">
              <p className="text-gray-600 text-sm">Security . Senin, 1 Juli 2024</p>
              <h2 className="font-semibold text-lg">Cara Mencegah Terkena Fraud</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BRILIFENEWS;
