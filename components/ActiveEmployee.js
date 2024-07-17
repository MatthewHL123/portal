import React from "react";

const ActiveEmployee = () => {
  return (
    <div className="container border border-gray-400 justify-center bg-white" style={{ width: "403px", height: "184px" }}>
        <div className="p-2 mt-2 rounded grid grid-cols-2 gap-2">
          <div className="col-span-2 flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold" style={{color: "#0D5AA1"}}>Active Emplyoyee</h1>
              <h1 className="text-8xl font-bold text-black">75</h1>
            </div>

            <div className="flex flex-col">
              <div type="text" className="border border-gray-400 mt-2 p-2 rounded" style={{ width: "130px", height: "29"}}>30 Magang</div>
              <div type="text" className="border border-gray-400 mt-2 p-2 rounded" style={{ width: "130px", height: "29"}}>30 Magang</div>
              <div type="text" className="border border-gray-400 mt-2 p-2 rounded" style={{ width: "130px", height: "29"}}>30 Magang</div>
            </div>
          </div>
        </div>
    </div>        
  )
}

export default ActiveEmployee;