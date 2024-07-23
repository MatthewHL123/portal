import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidPencil, BiLogOut } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsMortarboardFill } from "react-icons/bs";
import { FaStamp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="p-2 ml-2" style={{ width: "410px", marginTop: "18px" }}>
      <div className="border border-gray-400 bg-white">
        <div className="flex items-center space-x-2 mb-2 pl-3 pt-5" style={{ width: "297px" }}>
          <Image src="/images/user.png" alt="Profile Picture" width={80} height={80} className="rounded-full" />
          <div>
            <p className="font-bold" style={{ fontSize: "14px", color: "#0D5AA1"}}>Head of Recruitment</p>
            <p className="font-bold" style={{ fontSize: "20px" }}>Andika Prasetyo</p>
            <p className="bg-white border border-gray-400 text-gray-800 rounded-md border-2 text-base" style={{ fontSize: "17px"}}>Human Resource</p>
          </div>
        </div>
        {/* <Link href="/editprofile" passHref>
          <button className="w-full text-base text-left mb-2 flex items-center pl-6">
            <BiSolidPencil className="w-7 h-8 mr-2" style={{ color: "#0D5AA1" }} />
            <span>Edit Profile</span>
          </button>
        </Link> */}
        <hr className="border-gray-400 my-1" /> 
        <div className="flex-1 items-center space-x-2 mb-2 pl-3 pt-5" style={{ width: "297px" }}>
          <div style={{ fontSize: "16px"}}>
            <div>
              <p>Mail Address</p>
              <p>andika_p@brilife.co.id</p>
            </div>
            <div>
              <p>NIK</p>
              <p>317727623863282</p>
            </div>
            <div>
              <p>phone Number</p>
              <p>081228392429</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="pt-2">
        <a href="/dashboardadmin" className=" py-2 px-4 text-white bg-[#0D5AA1] rounded mb-2 flex items-center">
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
          <MdDashboard className="w-10 h-6 mr-3" style={{ color: "#F7A06C" }} />
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
