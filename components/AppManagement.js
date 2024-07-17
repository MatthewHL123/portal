import React from "react";

const AppManagement = () => {
  return (
    <div className="container border border-gray-400 bg-white rounded" style={{ width: "398px", height: "450px" }}>
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="font-semibold text-white">Application Management</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1 rounded" style={{ width: "137px", height: "35px" }}>Show All</button>
      </div>

      <div className="bg-white p-6">
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>BRILIST</div>
        </div>
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>SPAMI</div>
        </div>
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>E-RMS</div>
        </div>
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>Sipatuh</div>
        </div>
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>Laporku</div>
        </div>
        <div className="mt-1 bg-white rounded-md">
          <div type="text" className="border border-gray-400 mt-2 p-2 focus:outline-none focus:border-blue-500 rounded" style={{ width: "346px"}}>RBA APU PPT</div>
        </div>
      </div>
    </div>
  );
};

export default AppManagement;