import React from "react";
import { TbNewSection } from "react-icons/tb";
import { IoMdRefresh } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdArchive } from "react-icons/md"; 

const PageNewsManagement = () => {
    return (
        <div className="flex-1" style={{ width: "1235px", height: "56px" }}>
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
                <h2 className="font-semibold text-white">News Management</h2>
            </div>

            <div className="flex-1 mt-2 p-3 border border-gray-400 bg-white rounded">
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <button className="border border-gray bg-[#0D5AA1] p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "white" }}>Active News</button>
                        <button className="border border-[#F7A06C] bg-white p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "#F7A06C" }}>Archived News</button>
                    </div>
                </div>

                <div className="flex justify-center p-3">
                    <div className="flex gap-3">
                        <div className="flex mb-2 pl-2 pt-2 border border-gray-400 bg-white p-2 rounded" style={{ width: "536px", height: "40px" }}>
                            <IoIosSearch className="w-5 h-5 mr-3" style={{ color: "gray" }}/>
                            <input placeholder="Search"></input>
                        </div>
                        <a href="/createuserpage" >
                        <div className="flex items-center space-x-2 mb-2 pl-2 pt-2 border border-gray-400 bg-white p-2 rounded" style={{ width: '200px', height: '40px' }}>
                            <TbNewSection  className="w-7 h-7 mr-3" style={{ color: "gray" }} />
                            <button className="focus:outline-none">Create News</button>
                        </div>
                        </a>
                        <select className="border border-gray-400 bg-white p-2 justify-center text-center rounded" style={{ width: "280px", height: "40px" }}>
                            <option value="" disabled selected>Filter By</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <div className="flex mb-2 pl-2 pt-2 border border-gray-400 bg-white p-2 rounded" style={{ width: '120px', height: '40px' }}>
                            < IoMdRefresh  className="w-6 h-6 mr-3" style={{ color: "gray" }} />
                            <button className="focus:outline-none">Refresh</button>
                        </div>
                    </div>
                </div>

                <div style={{ width: "660PX" }}>
                    <div className="grid grid-cols-1 grid-cols-2 gap-4 p-6" style={{ height: "200PX" }}>
                        <div className="border rounded shadow bg-white">
                            <div className="h-32 bg-gray-300"></div>
                                <div className="p-3 px-6">
                                    <p className="text-gray-600 text-sm">Finance . Senin, 1 Juli 2024</p>
                                    <h2 className="font-semibold text-lg">Hasil Rapat Besar Juni 2024</h2>
                                </div>
                                <div className="flex items-center space-x-2 p-2 pl-32">
                                    <div className="flex items-center border border-gray-400 p-2" style={{ width: "70px", height: "30px" }}>
                                        <IoEye className="w-10 h-8 mr-1" style={{ color: '#0D5AA1' }}/>
                                        <p className="ml-2 text-gray-700">42</p> 
                                    </div>
                                    <div className="flex space-x-1">
                                        <MdEdit className="w-6 h-6 mr-2" style={{ color: '#0D5AA1' }} />
                                        <MdArchive className="w-6 h-6 mr-2" style={{ color: '#0D5AA1' }}/>
                                    </div>
                                </div>
                        </div>
                        <div className="border rounded shadow bg-white">
                            <div className="h-32 bg-gray-300"></div>                            
                                <div className="p-3 px-6">
                                    <p className="text-gray-600 text-sm">Security . Senin, 1 Juli 2024</p>
                                    <h2 className="font-semibold text-lg">Cara Mencegah Terkena Fraud</h2>
                                </div>
                                <div className="flex items-center space-x-2 p-2 pl-32">
                                    <div className="flex items-center border border-gray-400 p-2" style={{ width: "70px", height: "30px" }}>
                                        <IoEye className="w-10 h-8 mr-1" style={{ color: '#0D5AA1' }}/>
                                        <p className="ml-2 text-gray-700">42</p> 
                                    </div>
                                    <div className="flex space-x-1">
                                        <MdEdit className="w-6 h-6 mr-2" style={{ color: '#0D5AA1' }} />
                                        <MdArchive className="w-6 h-6 mr-2" style={{ color: '#0D5AA1' }}/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex gap-3 mt-3 p-3 pt-60">
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