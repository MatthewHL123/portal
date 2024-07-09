import React from "react";
import { FaUser } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F3F3F3" }}>
      <div className="rounded-lg" style={{ width: "760px", height: "696px", padding: "72px 103px", backgroundColor: "#DEDEDE" }}>
        <div className="flex justify-center mb-6 pt-8">
          <img src="/images/logo.png" alt="BRI Life" className="large-logo" />
        </div>
        <form className="space-y-4">
          <div className="pt-5 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: "19px" }}>
              <FaUser className="text-gray-500 w-7 h-6" /> {/* Ukuran ikon diperbesar */}
            </span>
            <input type="text" className="w-full pl-12 px-4 py-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username" style={{ borderWidth: "0.5px", borderColor: "#4A4A4A" }} />
          </div>
          <div className="pt-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3" style={{ top: "12px" }}>
              <IoKey className="text-gray-500 w-7 h-8" /> {/* Ukuran ikon diperbesar */}
            </span>
            <input type="password" className="w-full pl-12 px-4 py-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" style={{ borderWidth: "0.5px", borderColor: "#4A4A4A" }} />
          </div>
          <div className="flex justify-center items-center pt-3">
            <a href="#" className="text-lg hover:underline">
              Forgot your Password?
            </a>
          </div>
          <div className="flex items-center justify-center pt-1">
            <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-500" />
            <span className="ml-2 text-gray-700">Stay Signed In for 30 Days</span>
          </div>
          <div className="pt-3">
            <Link href="/dashboard">
              <button type="button" className="w-full text-white py-3 rounded-lg" style={{ backgroundColor: "#0D5AA1" }}>
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
