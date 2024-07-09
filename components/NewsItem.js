import React from "react";

const NewsItem = () => {
  return (
    <div className="flex border bg-white" style={{ width: "1420px", height: "199px" }}>
      {/* Left Container */}
      <div className="flex-1 flex p-4">
        <div className="mr-4 flex items-center">
          <button className="text-blue-700 text-2xl">&#8249;</button>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-gray-500">Finance • Senin, 1 Juli 2024</div>
            <h2 className="text-xl font-bold mt-1">Ayam Goreng</h2>
            <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ultrices leo. Etiam dui lacus, volutpat in est eu, ...</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Show Detail</button>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className="flex-1">
        <img src="/images/NewItem.png" alt="News Image" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default NewsItem;
