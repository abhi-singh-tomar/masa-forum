import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/about_us.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(null); // Close dropdowns when toggling menu
  };

  // Toggle dropdown menus
  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle hover for desktop
  const handleHover = (menu) => {
    if (window.innerWidth >= 1024) {
      setDropdownOpen(menu);
    }
  };

  // Handle mouse leave for desktop
  const handleLeave = () => {
    if (window.innerWidth >= 1024) {
      setDropdownOpen(null);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 relative">
      {/* Increased container width using max-w-6xl instead of default container */}
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MASA Logo" className="h-10" />
          <span className="text-xl font-bold whitespace-nowrap">MASA Forum</span>
        </Link>

        {/* Centered Navigation Links */}
        <nav
          ref={dropdownRef}
          className={`absolute top-full left-0 w-full bg-gray-800 lg:bg-transparent lg:static lg:flex lg:justify-center lg:gap-6 transition-all ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row lg:items-center">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleHover("about")}
              onMouseLeave={handleLeave}
            >
              <button
                className="hover:text-yellow-500 px-4 py-2 w-full lg:w-auto text-left font-bold"
                onClick={() => toggleDropdown("about")}
              >
                About
              </button>
              <div
                className={`absolute lg:mt-0 bg-white text-black shadow-lg rounded-lg mt-0 p-2 min-w-[150px] z-50 transition-all duration-200 ease-in-out origin-top ${
                  dropdownOpen === "about" ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                }`}
                style={{ transformOrigin: "top" }}
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
              Our initiatives
            </Link>
            <Link to="/membership" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Membership
            </Link>
            <Link to="/events" className="hover:text-yellow-500 px-4 py-2 font-bold">
              Events
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleHover("resources")}
              onMouseLeave={handleLeave}
            >
              <button
                className="hover:text-yellow-500 px-4 py-2 w-full lg:w-auto text-left font-bold"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
              </button>
              <div
                className={`absolute lg:mt-0 bg-white text-black shadow-lg rounded-lg mt-0 p-2 min-w-[150px] z-50 transition-all duration-200 ease-in-out origin-top ${
                  dropdownOpen === "resources" ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                }`}
                style={{ transformOrigin: "top" }}
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
              Masa in Media
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
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Auth Buttons */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 lg:hidden">
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