import React from "react";
import Image from "next/image";
import { BiSolidPencil, BiLogOut } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsMortarboardFill } from "react-icons/bs";
import { FaStamp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="p-2 ml-24" style={{ width: "330px", marginTop: "18px" }}>
      <div className="border border-gray-400 bg-white rounded">
        <div className="flex items-center space-x-4 mb-5 pl-6 pt-4" style={{ width: "297px" }}>
          <Image src="/images/user.png" alt="Profile Picture" width={48} height={48} className="rounded-full" />
          <div>
            <h2 className="text-lg font-bold">Budi Prasetyo</h2>
            <p className="text-base">Divisi Manajemen Risiko</p>
          </div>
        </div>

        <button className="w-full text-base text-left mb-2 flex items-center pl-6">
          <BiSolidPencil className="w-7 h-8 mr-2" style={{ color: "#0D5AA1" }} />
          <span>Edit Profile</span>
        </button>
      </div>

      <nav className="pt-5">
        <a href="#" className=" py-2 px-4 text-white bg-[#0D5AA1] rounded mb-2 flex items-center">
          <MdDashboard className="w-10 h-6 mr-3" style={{ color: "#F7A06C" }} />
          <span>Dashboard</span>
        </a>
        <a href="#" className=" py-2 px-4 text-white bg-[#0D5AA1] rounded mb-2 flex items-center">
          <BsMortarboardFill className="w-10 h-6 mr-3 " style={{ color: "#F7A06C" }} />
          <span>Learning Center</span>
        </a>
        <a href="#" className=" py-2 px-4 text-white bg-[#0D5AA1] rounded mb-2 flex items-center">
          <FaStamp className="w-10 h-6 mr-3" style={{ color: "#F7A06C" }} />
          <span>Audit</span>
        </a>
        <a href="#" className=" py-2 px-4 text-white bg-[#0D5AA1] rounded mb-2 flex items-center">
          <MdDashboard className="w-10 h-6 mr-3" style={{ color: "F7A06C" }} />
          <span>BRI Life News</span>
        </a>
      </nav>
      <div className="border border-gray-400 bg-white rounded">
        <button className="w-full text-left mb-2 flex items-center pl-6 pt-2">
          <IoIosSettings className="w-7 h-8 mr-2" style={{ color: "#0D5AA1" }} />
          <span>Settings</span>
        </button>
        <button className="w-full text-left mb-2 flex items-center pl-5">
          <BiLogOut className="w-7 h-8 mr-3" style={{ color: "#0D5AA1" }} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
