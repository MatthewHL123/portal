import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import EditProfile from "../../components/EditProfile";
import Link from "next/link";

const EditProfilePage = () => {
    return (
      <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="flex bg-gray-100">
          <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <EditProfile />
        </main>
        </div>
      </div>
    );
}

export default EditProfilePage;