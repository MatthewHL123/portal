import React from "react";
import { FaUser, FaTachometerAlt, FaUserTie, FaUsers, FaGraduationCap, FaBriefcase, FaFileAlt, FaLifeRing, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen shadow-md ml-24">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <FaUser className="text-gray-500 w-10 h-10" />
          <div>
            <h2 className="text-lg font-semibold">Budi Prasetyo</h2>
            <p className="text-gray-500 text-sm">Divisi Manajemen Risiko</p>
          </div>
        </div>
        <div className="mt-8">
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaTachometerAlt className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaUserTie className="w-5 h-5 mr-3" /> Agent
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaUsers className="w-5 h-5 mr-3" /> User Management
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaGraduationCap className="w-5 h-5 mr-3" /> Human Capital
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaBriefcase className="w-5 h-5 mr-3" /> Learning Center
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaFileAlt className="w-5 h-5 mr-3" /> Recruitment
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaLifeRing className="w-5 h-5 mr-3" /> Audit
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaCog className="w-5 h-5 mr-3" /> Settings
          </button>
          <button className="w-full flex items-center text-left text-gray-700 p-2 hover:bg-gray-200 rounded">
            <FaSignOutAlt className="w-5 h-5 mr-3" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
