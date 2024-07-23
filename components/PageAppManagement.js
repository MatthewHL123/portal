import React from "react";

const PageAppManagement = () => {
    return (
        <div className="flex-1" style={{ width: "1250px", height: "56px" }}>
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
                <h2 className="font-semibold text-white">Application Management</h2>
            </div>

            <div className="flex-1 mt-2 p-3 border bg-white rounded">
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <button className="border border-gray bg-[#0D5AA1] p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "white" }}>Active User</button>
                        <button className="border border-[#F7A06C] bg-white p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "#F7A06C" }}>Inactive User</button>
                    </div>
                </div>

                <div className="flex justify-center p-3">
                    <div className="flex gap-3">
                        <input className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "536px", height: "40px" }} placeholder="Search Application"></input>
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "280px", height: "40px" }}>Create User</button>
                        <select className="border border-gray-400 bg-white p-2 justify-center text-center rounded" style={{ width: "200px", height: "40px" }}>
                            <option value="" disabled selected>Select By</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "120px", height: "40px" }}>Refresh</button>
                    </div>
                </div>

                <div className="flex p-2">
                    <div className="border border-gray-300 shadow-white">
                        
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex gap-3 mt-3 p-5">
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>1</button>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>2</button>
                        <p className="justify-center" style={{ fontSize: "30px" }}>...</p>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>9</button>
                        <button className="border border-gray-400 bg-white p-1 justify-item-center rounded" style={{ width: "35px", height: "35px" }}>10</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default PageAppManagement;