import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Settings from "./pages/Settings";
import Teachers from "./pages/Teachers";
import AdminAdmissions from "./pages/AdminAdmissions";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
// import Dashboard from "./pages/Dashboard";

function AdminApp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <Navbar isOpen={isOpen} />

      <div
        className={`mt-16 p-6 transition-all duration-300 relative ${
          isOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-16 w-[calc(100%-4rem)]"
        }`}
      >
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/addstudent" element={<AddStudent />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/addteacher" element={<AddTeacher />} />
          <Route path="/Adminadmissions" element={<AdminAdmissions />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
