import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { GrHostMaintenance } from "react-icons/gr";
import { MdArchive } from "react-icons/md"; 

const PageAppManagement = () => {
    return (
        <div className="flex-1" style={{ width: "1235px", height: "56px" }}>
            <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
                <h2 className="font-semibold text-white">Application Management</h2>
            </div>

            <div className="flex-1 mt-2 p-3 border border-gray-400 bg-white rounded">
                <div className="flex justify-center">
                    <div className="flex gap-3">
                        <button className="border border-gray bg-[#0D5AA1] p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "white" }}>Active Application</button>
                        <button className="border border-[#F7A06C] bg-white p-2 justify-center rounded" style={{ width: "580px", height: "40px", color: "#F7A06C" }}>Archived Application</button>
                    </div>
                </div>

                <div className="flex justify-center p-3">
                    <div className="flex gap-3">
                        <div className="flex mb-2 pl-2 pt-2 border border-gray-400 bg-white p-2 rounded" style={{ width: "536px", height: "40px" }}>
                            <IoIosSearch className="w-5 h-5 mr-3" style={{ color: "gray" }}/>
                            <input placeholder="Search Application"></input>
                        </div>
                        <a href="/createuserpage" >
                        <div className="flex items-center mb-2 pl-2 pt-2 border border-gray-400 bg-white p-2 rounded" style={{ width: '200px', height: '40px' }}>
                            <AiOutlineAppstoreAdd className="w-11 h-7 mr-3" style={{ color: "gray" }} />
                            <button className="focus:outline-none">Add Application</button>
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

                <div className="flex flex-col items-center p-5">
                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                            <div>
                                <h1 className="text-xl font-semibold">SPAMI</h1>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg mb-7">Proses pelaporan kasus dan manajemen insiden PT Asuransi BRI Life.</h2>
                            <div className="flex space-x-3">
                                <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                    <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                    <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                        <span className="ml-4">18</span>
                                    </button>
                                </div>
                                <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                    <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                    <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                                </div>
                                <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                    <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                    <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                                </div>
                                <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                            <div>
                                <h1 className="text-xl font-semibold">BRILIST</h1>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                    <span className="ml-4">18</span>
                                </button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                            </div>
                            <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                        <div>
                            <h1 className="text-xl font-semibold">RBA APU PPT</h1>
                        </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                    <span className="ml-4">18</span>
                                </button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                            </div>
                            <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                            <div>
                                <h1 className="text-xl font-semibold">E-RMS</h1>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                    <span className="ml-4">18</span>
                                </button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                            </div>
                            <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                            <div>
                                <h1 className="text-xl font-semibold">Sipatuh</h1>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                    <span className="ml-4">18</span>
                                </button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                            </div>
                            <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                        </div>
                    </div>

                    <div className="border-2 border-gray-300 w-[1170px] pt-5 pb-5 bg-white flex mb-5">
                        <div className="flex items-center p-3" style={{ width: "300px" }}>
                            <div>
                                <h1 className="text-xl font-semibold">Laporku</h1>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <IoEyeSharp className="w-7 h-7 mr-5" style={{ color: '#0D5AA1' }}/>
                                <button className="focus:outline-none text-gray-500 flex items-center">User Access
                                    <span className="ml-4">18</span>
                                </button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <GrHostMaintenance className="w-5 h-5 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Set on Maintenance</button>
                            </div>
                            <div className="bg-white border border-gray-300 text-gray-500 py-2 px-2 rounded flex items-center" style={{ width: '200px', height: '35px' }}>
                                <MdArchive className="w-6 h-6 mr-4" style={{ color: '#0D5AA1' }} />
                                <button className="focus:outline-none text-gray-500 flex items-center">Archive Application</button>
                            </div>
                            <button className="bg-[#0D5AA1] text-white border border-gray-300 text-gray-500 py-1 px-1 rounded" style={{ width: "200px", height: "35px" }}>View Application</button>
                        </div>
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