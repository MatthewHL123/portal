import React from "react";

const HumanCapital = () => {
    return (
        <div className="flex-1">
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center" style={{ width: "400px", height: "65px" }}>
            <h2 className="font-semibold text-white">Human Capital</h2>
            <button className="bg-[#F06E21] text-white px-2 py-1" style={{ width: "137px", height: "35px" }}>Show All</button>
            </div>

            <div className="flex justify-center mt-2 p-4 border bg-white" style={{ width: "400px", height: "180px"}}>
            </div>
    </div>
    )
}

export default HumanCapital;