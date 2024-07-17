import React from "react";

const BRILIFENEWS = () => {
  return (
    <div className="container border border-gray-400 bg-white rounded" style={{ width: "750px", height: "298px" }}>
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="font-semibold text-white">BRI Life News</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1 rounded" style={{ width: "137px", height: "35px" }}>Show All</button>
      </div>
      
      <div className="bg-white p-4">
        <div className="bg-white rounded-md grid grid-cols-2 gap-3">
          <h1 className="text-xl font-semibold mb-1" style={{color: "#0D5AA1"}}>Recenty Added</h1>
        </div>

        <div className="grid grid-cols-1 grid-cols-2 gap-4">
          <div className="border rounded-md shadow-md bg-white mt-2">
            <div className="h-40 bg-gray-300"></div>
            <div className="p-4">
              <p className="text-gray-600">Finance . Senin, 1 Juli 2024</p>
              <h2 className="font-semibold mb-1">Hasil Rapat Besar Juni 2024</h2>
            </div>
          </div>
          <div className="border rounded-md shadow-md bg-white mt-2">
            <div className="h-40 bg-gray-300"></div>
            <div className="p-4">
              <p className="text-gray-600">Security . Senin, 1 Juli 2024</p>
              <h2 className="font-semibold mb-1">Cara Mencegah Terkena Fraud</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BRILIFENEWS;
