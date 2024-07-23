import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AppManagement from "../../components/AppManagement";
import UserManagement from "../../components/UserManagement";
import ActiveEmployee from "../../components/ActiveEmployee";
import UserLog from "../../components/UserLog";
import BRILIFENEWS from "../../components/BRILIFENEWS";
import HumanCapital from "../../components/HumanCapital";
import WidgetInformation from "../../components/WidgetInformation";

const DashboardAdmin = () => {
  return (
      <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex bg-gray-100">
              <Sidebar />
                <main className="flex-1 bg-gray-100 p-6 flex flex-col gap-2">
                    <div className="flex gap-3">
                        <div>
                            <ActiveEmployee />
                        </div>
                        <div>
                            <UserLog />
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <WidgetInformation />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <AppManagement />
                        </div>
                        <div>   
                            <UserManagement />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div>
                            <HumanCapital />
                        </div>
                        <div>
                            <BRILIFENEWS />
                        </div>
                    </div>
                </main>

          </div>
      </div>
  );
}

export default DashboardAdmin;