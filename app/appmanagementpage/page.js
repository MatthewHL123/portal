import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PageAppManagement from "../../components/PageAppManagement";

const AppManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-7">
          <PageAppManagement />
        </main>
      </div>
    </div>
  );
};

export default AppManagementPage;