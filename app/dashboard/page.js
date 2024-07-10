// app/dashboard/page.js
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import GovernanceContainer from "../../components/GovernanceContainer";
import EventCard from "../../components/EventCard";
import NewsItem from "../../components/NewsItem";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex bg-gray-100">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <NewsItem />
          <GovernanceContainer />
          <EventCard />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
