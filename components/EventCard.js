import React from "react";

const EventCard = () => {
  return (
    <div className="container mt-2 p-4 border border-gray-400 shadow-lg bg-white -ml-4" style={{ width: "1240px" }}>
      <div className="bg-[#0D5AA1] p-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Events</h2>
        <button className="bg-[#F06E21] text-white px-2 py-1 rounded" style={{ width: "170px" }}>
          Show All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-md shadow-md bg-gray-300 mt-4 relative">
          <div className="h-40">{/* Placeholder content or image */}</div>
          <div className="p-4 absolute bottom-0 right-0">
            <button className="bg-[#0D5AA1] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Button</button>
          </div>
        </div>
        <div className="border rounded-md shadow-md bg-gray-300 mt-4 relative">
          <div className="h-40">{/* Placeholder content or image */}</div>
          <div className="p-4 absolute bottom-0 right-0">
            <button className="bg-[#0D5AA1] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Button</button>
          </div>
        </div>
        <div className="border rounded-md shadow-md bg-gray-300 mt-4 relative">
          <div className="h-40">{/* Placeholder content or image */}</div>
          <div className="p-4 absolute bottom-0 right-0">
            <button className="bg-[#0D5AA1] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
