import React from "react";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { FaBell, FaCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white border-b p-2 flex justify-between items-center">
      <div className="flex items-center ml-24">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="BRI Life" className="h-9" />
          <span className="ml-2 text-2xl" style={{ color: "#00529C" }}>
            Portal Apps
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-9 mr-28">
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosHelpCircle size={30} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell size={27} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosSettings size={30} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaCircle size={31} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
