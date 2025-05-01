import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/about_us.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) setDropdownOpen(null); // Close dropdowns when closing menu
      return !prev;
    });
  };

  // Toggle dropdown menus
  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  // Close dropdowns and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4 relative z-50">
      {/* Container with max-w-6xl */}
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MASA Logo" className="h-10" />
          <span className="text-xl font-bold whitespace-nowrap">MASA Forum</span>
        </Link>

        {/* Navigation Links */}
        <nav
          ref={navRef}
          className={`lg:flex lg:justify-center lg:gap-6 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } lg:block absolute top-full left-0 w-full bg-gray-800 lg:bg-transparent lg:static`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center">
            {/* About Dropdown */}
            <div className="relative">
              <button
                className="hover:text-yellow-500 px-4 py-2 w-full lg:w-auto text-left font-bold"
                onClick={() => toggleDropdown("about")}
              >
                About
              </button>
              <div
                className={`lg:absolute bg-white text-black shadow-lg rounded-lg p-2 min-w-[150px] transform transition-all duration-200 ease-in-out origin-top ${
                  dropdownOpen === "about" ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                } lg:mt-2 mt-0`}
              >
                <Link to="/about" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Mission/Vision
                </Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Our Team
                </Link>
                <Link to="/partners" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Our Partners
                </Link>
                <Link to="/ourmembers" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Our Members
                </Link>
              </div>
            </div>

            <Link to="/Ourinitiatives" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Our Initiatives
            </Link>
            <Link to="/membership" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Membership
            </Link>
            <Link to="/events" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Events
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="hover:text-yellow-500 px-4 py-2 w-full lg:w-auto text-left font-bold"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
              </button>
              <div
                className={`lg:absolute bg-white text-black shadow-lg rounded-lg p-2 min-w-[150px] transform transition-all duration-200 ease-in-out origin-top ${
                  dropdownOpen === "resources" ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
                } lg:mt-2 mt-0`}
              >
                <Link to="/BlogsPage" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Blogs
                </Link>
                <Link to="/MSMENews" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  MSME News
                </Link>
                <Link to="/SchemesPage" className="block px-4 py-2 hover:bg-yellow-500 font-bold">
                  Schemes
                </Link>
              </div>
            </div>

            <Link to="/MasainMedia" className="hover:text-yellow-500 px-4 py-2 font-bold">
              MASA in Media
            </Link>
            <Link to="/ContactUs" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Right-Aligned Auth Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link
            to="/register"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Auth Buttons */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 lg:hidden transition-all duration-300">
          <Link
            to="/register"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-32 text-center font-bold"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;