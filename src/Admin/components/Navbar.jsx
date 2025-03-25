import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-white shadow-md px-6 py-3 transition-all duration-300 ${
        isOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-16 w-[calc(100%-4rem)]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-700 text-xl cursor-pointer hover:text-purple-700" />
          <FaUserCircle className="text-gray-700 text-2xl cursor-pointer hover:text-purple-700" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
