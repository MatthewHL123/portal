import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
//import ActiveEmployee from "../../components/ActiveEmployee";
//import UserLog from "../../components/UserLog";
//import AppManagement from "../../components/AppManagement";
//import BRILIFENEWS from "../../components/BRILIFENEWS";
//import UserManagement from "../../components/UserManagement";
//import HumanCapital from "../../components/HumanCapital";

const DashboardAdmin = () => {
    return (
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 grid grid-cols-2">
            <div className="flex flex-col">
            </div>
        </main>
      </div>
    </div>
    );
}
export default DashboardAdmin;