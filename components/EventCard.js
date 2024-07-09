import React from "react";

const EventCard = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">{title}</button>
    </div>
  );
};

export default EventCard;
