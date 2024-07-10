import React from "react";
import Login from "../../components/Login";
import Navbar from "../../components/Navlog";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
