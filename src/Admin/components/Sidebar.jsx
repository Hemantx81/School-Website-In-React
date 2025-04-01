import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserPlus,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-purple-900 text-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="p-5 flex justify-between items-center border-b border-gray-700">
        <span className="font-bold text-lg">
          {isOpen ? "🎓 School Admin" : "🎓"}
        </span>
        <button onClick={toggleSidebar} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      <nav className="mt-4">
        <ul>
          {[
            { to: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
            { to: "/students", icon: <FaUserGraduate />, label: "Students" },
            {
              to: "/teachers",
              icon: <FaChalkboardTeacher />,
              label: "Teachers",
            },
            {
              to: "/Adminadmissions",
              icon: <FaUserPlus />,
              label: "Admissions",
            },
            { to: "/settings", icon: <FaCog />, label: "Settings" },
          ].map(({ to, icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              >
                {icon}{" "}
                <span className={`${isOpen ? "ml-3" : "hidden"}`}>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
