import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-6 shadow-lg">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold tracking-tight">MASA Forum</h2>
          <p className="text-gray-400 text-sm">
          A growth platform for MSMEs and startups to connect with investors and industry mentors.
          </p>
        </div>

        {/* Quick Links - Two Columns */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              About Us
            </Link>
            <Link to="/events" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              Events
            </Link>
            <Link to="/membership" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              Membership
            </Link>
            <Link to="/ContactUs" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/masa-awards" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 col-span-2 md:col-span-1">
              Masa Awards
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Email: <a href="connect@masaforum.com" className="hover:text-teal-400 transition-colors duration-300">connect@masaforum.com</a>
          </p>
          <p className="text-gray-400 text-sm mt-1">Phone: +91-9051498808</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold border-b border-gray-700 pb-1 mb-3">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://m.facebook.com/masaawards/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-400 hover:text-teal-400 transition-colors duration-300" size={22} />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-teal-400 transition-colors duration-300" size={22} />
            </a> */}
            <a href="https://www.linkedin.com/in/masa-awards-252401296/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-teal-400 transition-colors duration-300" size={22} />
            </a>
            <a href="https://www.instagram.com/masaforum/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-teal-400 transition-colors duration-300" size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} MASA Forum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;