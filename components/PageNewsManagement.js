import React from "react";

const PageNewsManagement = () => {
    return (
        <div className="flex-1" style={{ width: "1250px", height: "56px" }}>
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
                <h2 className="font-semibold text-white">Application Management</h2>
            </div>

            <div className="flex-1 mt-2 p-3 border border-gray-400 bg-white rounded">
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <button className="border border-gray bg-[#0D5AA1] p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "white" }}>Active User</button>
                        <button className="border border-[#F7A06C] bg-white p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "#F7A06C" }}>Inactive User</button>
                    </div>
                </div>

                <div className="flex justify-center p-3">
                    <div className="flex gap-3">
                        <input className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "536px", height: "40px" }} placeholder="Search Application"></input>
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "280px", height: "40px" }}>Create News</button>
                        <select className="border border-gray-400 bg-white p-2 justify-center text-center rounded" style={{ width: "200px", height: "40px" }}>
                            <option value="" disabled selected>Select By</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <button className="border border-gray-400 bg-white p-2 justify-center rounded" style={{ width: "120px", height: "40px" }}>Refresh</button>
                    </div>
                </div>

                <div style={{ width: "630PX" }}>
                    <div className="grid grid-cols-1 grid-cols-2 gap-4 p-6" style={{ height: "200PX" }}>
                        <div className="border rounded shadow bg-white">
                            <div className="h-32 bg-gray-300"></div>
                                <div className="p-3 px-6">
                                    <p className="text-gray-600 text-sm">Finance . Senin, 1 Juli 2024</p>
                                    <h2 className="font-semibold text-lg">Hasil Rapat Besar Juni 2024</h2>
                                </div>
                        </div>
                        <div className="border rounded shadow bg-white">
                            <div className="h-32 bg-gray-300"></div>                            
                                <div className="p-3 px-6">
                                    <p className="text-gray-600 text-sm">Security . Senin, 1 Juli 2024</p>
                                    <h2 className="font-semibold text-lg">Cara Mencegah Terkena Fraud</h2>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex gap-3 mt-3 p-5 pt-16">
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

export default PageNewsManagement;