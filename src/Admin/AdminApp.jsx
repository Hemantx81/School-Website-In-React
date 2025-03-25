import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Settings from "./pages/Settings";
import Teachers from "./pages/Teachers";
import AdminAdmissions from "./pages/AdminAdmissions";
// import Dashboard from "./pages/Dashboard";

function AdminApp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <Navbar isOpen={isOpen} />

      <div
        className={`mt-16 p-6 transition-all duration-300 ${
          isOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-16 w-[calc(100%-4rem)]"
        }`}
      >
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="admissions" element={<AdminAdmissions />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
