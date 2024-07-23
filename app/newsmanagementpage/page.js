import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PageNewsManagement from "../../components/PageNewsManagement";

const NewsManagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-7">
          <PageNewsManagement />
        </main>
      </div>
    </div>
  );
};

export default NewsManagementPage;