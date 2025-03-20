import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About School */}
        <div>
          <h2 className="text-xl font-semibold mb-3">About Our School</h2>
          <p className="text-gray-400 text-sm">
            We provide quality education and holistic development for students.
            Join us to build a brighter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <Link to="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-blue-400">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <Mail size={16} /> school@example.com
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2 mt-2">
            <Phone size={16} /> +123 456 7890
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} School Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
