import React from "react";

const Navlog = () => {
  return (
    <nav className="bg-white border-b border-gray-400 p-2 flex items-center" style={{ height: "52px" }}>
      <div className="flex items-center ml-24">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="BRI Life" className="h-8" width="113" height="31" />
          <span className="ml-2 text-2xl" style={{ fontSize: "24px", color: "#00529C" }}>
            Portal Apps
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navlog;
