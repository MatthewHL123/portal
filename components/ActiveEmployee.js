import React from "react";

const ActiveEmployee = () => {
  return (      
    <div className="border border-gray-400 bg-white rounded" style={{ width: "480px", height: "190px", padding: "20px" }}>
      <div className="flex flex-col items-center justify-center h-full gap-4 grid grid-cols-2">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-semibold text-[#0D5AA1]" style={{ fontSize: "20px"}}>Active Employees</h1>
          <h1 className="text-8xl font-bold text-black">120</h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className="border border-blue-400 p-2 rounded w-32 h-10">30 Magang</button>
          <button className="border border-blue-400 p-2 rounded w-32 h-10">30 Magang</button>
          <button className="border border-blue-400 p-2 rounded w-32 h-10">30 Magang</button>
        </div>
      </div>
    </div>
  )
}

export default ActiveEmployee;