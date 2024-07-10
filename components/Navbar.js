import React from "react";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { FaBell, FaCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-400 p-2 flex justify-between items-center " style={{ height: "52px" }}>
      <div className="flex items-center ml-24">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="BRI Life" className="h-8" width="113" height="31" />
          <span className="ml-2 text-2xl" style={{ fontSize: "24px", color: "#00529C" }}>
            Portal Apps
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-9 mr-40">
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosHelpCircle size={28} color="#0D5AA1" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell size={24} color="#0D5AA1" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosSettings size={29} color="#0D5AA1" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaCircle size={30} color="#0D5AA1" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
