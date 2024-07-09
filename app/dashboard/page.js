// app/dashboard/page.js
import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import GovernanceContainer from "../../components/GovernanceContainer";
import EventCard from "../../components/EventCard";
import NewsItem from "@/components/NewsItem";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <NewsItem />
          <GovernanceContainer />
          <section>
            <h2 className="text-2xl font-bold mb-4">Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventCard title="Event 1" />
              <EventCard title="Event 2" />
              <EventCard title="Event 3" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
