import React from "react";
import Navbar from "../../components/Navbar";
import SidebarAdmin from "../../components/SidebarAdmin";
import PageNewsManagement from "../../components/PageNewsManagement";

const NewsManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="flex flex-1 overflow-hidden bg-gray-100">
          <SidebarAdmin />
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-7">
            <PageNewsManagement />
          </main>
        </div>
    </div>
  );
};

export default NewsManagementPage;