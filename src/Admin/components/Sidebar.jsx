import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserPlus,
  FaCog,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-purple-900 text-white shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-5 right-[-18px] bg-purple-700 text-white p-2 rounded-full z-50"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div className="p-5 text-center font-bold text-lg border-b border-gray-700">
        {isOpen ? "🎓 School Admin" : "🎓"}
      </div>

      <nav className="mt-4">
        <ul>
          <li>
            <NavLink
              to="/"
              className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              activeClassName="bg-purple-700"
            >
              <FaTachometerAlt className="mr-3" />
              {isOpen && "Dashboard"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/students"
              className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              activeClassName="bg-purple-700"
            >
              <FaUserGraduate className="mr-3" />
              {isOpen && "Students"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teachers"
              className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              activeClassName="bg-purple-700"
            >
              <FaChalkboardTeacher className="mr-3" />
              {isOpen && "Teachers"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admissions"
              className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              activeClassName="bg-purple-700"
            >
              <FaUserPlus className="mr-3" />
              {isOpen && "Admissions"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="flex items-center px-5 py-3 hover:bg-purple-700 transition"
              activeClassName="bg-purple-700"
            >
              <FaCog className="mr-3" />
              {isOpen && "Settings"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
