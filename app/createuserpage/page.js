import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PageCreateAccUser from "../../components/PageCreateAccUser";
import PageCreateAcount from "../../components/PageCreateAcount";

const CreateUserPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-7">
          <PageCreateAccUser />
        </main>
      </div>
    </div>
  );
};

export default CreateUserPage;