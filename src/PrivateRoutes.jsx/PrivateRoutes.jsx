import React from "react";
import Navbar from "../Admin/components/Navbar";
import Sidebar from "../Admin/components/Sidebar";
import { useState } from "react";

const PrivateRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <div className={`flex-1 ml-16 ${isSidebarOpen ? "ml-64" : ""}`}> */}
      <Navbar isOpen={isSidebarOpen} />
      {/* </div> */}
    </div>
  );
};

export default PrivateRoutes;
