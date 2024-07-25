import React from "react";

const UserLog = () => {
    return (
        <div className="flex-1">
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center" style={{ width: "780px", height: "55px" }}>
                <h2 className="font-semibold text-white">User Log</h2>
                <button className="bg-[#F06E21] text-white px-2 py-1" style={{ width: "200px", height: "32px" }}>Show All</button>
            </div>

            <div className="flex justify-center mt-2 p-4 border bg-white" style={{ width: "780px", height: "130px"}}>
            </div>
        </div>
    )
}

export default UserLog;