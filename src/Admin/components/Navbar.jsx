import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = ({ isOpen }) => {
  return (
    <div
      className={`w-full bg-white shadow-md px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 transition-all duration-300 ${
        isOpen ? "pl-64" : "pl-16"
      }`}
    >
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-700 text-xl cursor-pointer hover:text-purple-700" />
        <FaUserCircle className="text-gray-700 text-2xl cursor-pointer hover:text-purple-700" />
      </div>
    </div>
  );
};

export default Navbar;
