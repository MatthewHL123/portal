import React from "react";
import Navbar from "../../components/Navbar";
import SidebarAdmin from "../../components/SidebarAdmin";
import PageCreateAccUser from "../../components/PageCreateAccUser";

const CreateUserPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden bg-gray-100">
        <SidebarAdmin />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-7">
          <PageCreateAccUser />
        </main>
      </div>
    </div>
  );
};

export default CreateUserPage;