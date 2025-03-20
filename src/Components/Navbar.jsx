import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path

  return (
    <>
      {/* Contact Section Above Navbar */}
      <div className="bg-blue-800 text-white py-2 text-center md:flex md:justify-between md:items-center md:px-10">
        <div className="flex justify-center md:justify-start space-x-4">
          <span className="flex items-center space-x-2">
            <MapPin size={18} />
            <p>123 School St, City, Country</p>
          </span>
        </div>
        <div className="flex justify-center md:justify-end space-x-6">
          <span className="flex items-center space-x-2">
            <Phone size={18} />
            <p>+123 456 7890</p>
          </span>
          <span className="flex items-center space-x-2">
            <Mail size={18} />
            <p>info@school.com</p>
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
          <Link to="/" className="text-2xl font-bold tracking-wide">
            📚 School Name
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-6">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Admissions", path: "/admissions" },
                { name: "Gallery", path: "/gallery" },
                { name: "Notice", path: "/notice" },
                { name: "Career", path: "/career" },
                { name: "Facilities", path: "/facilities" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`hover:text-gray-300 transition ${
                      location.pathname === item.path
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-blue-700 py-4 text-center space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Admissions", path: "/admissions" },
              { name: "Gallery", path: "/gallery" },
              { name: "Notice", path: "/notice" },
              { name: "Career", path: "/career" },
              { name: "Facilities", path: "/facilities" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block hover:text-gray-300 ${
                    location.pathname === item.path
                      ? "border-b-2 border-white pb-1"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
