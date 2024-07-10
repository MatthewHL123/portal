import React from "react";
import { FaUser } from "react-icons/fa6";
import { IoKey } from "react-icons/io5";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F3F3F3", padding: "77px 101px" }}>
      <div className="border border-gray-400" style={{ width: "629px", height: "630px", padding: "70px 90px", backgroundColor: "#FFFFFF" }}>
        <div className="flex justify-center pt-1">
          <img src="/images/logo.png" alt="BRI Life" className="large-logo" />
        </div>
        <form className="space-y-4 pt-8">
          <div className="pt-5 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-5" style={{ top: "20px" }}>
              <FaUser className="text-gray-500 w-7 h-6" />
            </span>
            <input type="text" className="w-full rounded pl-14 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username" style={{ borderColor: "#4A4A4A" }} />
          </div>
          <div className="pt-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-5" style={{ top: "12px" }}>
              <IoKey className="text-gray-500 w-7 h-8" />
            </span>
            <input type="password" className="w-full rounded pl-14 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" style={{ borderColor: "#4A4A4A" }} />
          </div>
          <div className="flex justify-center items-center">
            <a href="#" className="text-lg hover:text-blue-600 hover:underline" style={{ fontSize: "16px" }}>
              Forget Your Password?
            </a>
          </div>
          <div className="flex items-center justify-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 " />
            <span className="ml-2 text-gray-500 " style={{ fontSize: "16px" }}>
              Stay Signed In for 30 Days
            </span>
          </div>
          <div className="pt-2">
            <Link href="/dashboard">
              <button type="button" className="w-full rounded text-white py-2 " style={{ backgroundColor: "#0D5AA1" }}>
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
