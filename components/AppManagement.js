import React from "react";

const AppManagement = () => {
  return (
    <div className="container border border-gray-400 bg-white mx-auto rounded" style={{ width: "400px", height: "318px" }}>
      <a href="/appmanagementpage">
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="font-semibold text-white">Application Management</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1" style={{ width: "137px", height: "32px" }}>Show All</button>
      </div>
      </a>
      
      <div className="bg-white p-5 flex flex-col items-center gap-2" style={{ fontSize: "18px"}}>
        <div className="bg-white rounded-md w-full max-w-[400px]">
          <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500 rounded font-semibold w-full">BRILIST</div>
        </div>
        <div className="bg-white rounded-md w-full max-w-[400px]">
          <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500 rounded font-semibold w-full">Sipatuh</div>
        </div>
        <div className="bg-white rounded-md w-full max-w-[400px]">
          <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500 rounded font-semibold w-full">Laporku</div>
        </div>
        <div className="bg-white rounded-md w-full max-w-[400px]">
          <div className="border border-gray-400 p-2 focus:outline-none focus:border-blue-500 rounded font-semibold w-full">RBA APU PPT</div>
        </div>
      </div>
    </div>
  );
};

export default AppManagement;