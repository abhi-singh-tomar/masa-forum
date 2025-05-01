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

  // Close menu when a nav item is clicked (mobile)
  const handleNavItemClick = () => {
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
      setDropdownOpen(null);
    }
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
    <div className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-0 flex flex-col lg:flex-row lg:items-center">
        {/* Logo and hamburger */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="MASA Logo" className="h-10" />
            <span className="text-xl font-bold whitespace-nowrap">MASA Forum</span>
          </Link>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation content */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:flex-1 w-full transition-all duration-300 ease-in-out ${
            menuOpen ? "block mt-4" : "hidden lg:flex"
          }`}
        >
          {/* Navigation items - shifted left with margin */}
          <nav
            ref={navRef}
            className="flex flex-col lg:flex-row lg:items-center lg:ml-12 w-full lg:w-auto bg-gray-800 lg:bg-transparent"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
              {/* About Dropdown */}
              <div className="relative">
                <button
                  className="hover:text-yellow-500 px-3 py-2 w-full lg:w-auto text-left text-[0.95rem] font-bold flex justify-between items-center lg:justify-start whitespace-nowrap"
                  onClick={() => toggleDropdown("about")}
                >
                  About
                  <span className="lg:hidden">
                    {dropdownOpen === "about" ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`lg:absolute bg-white text-black shadow-lg rounded-lg p-2 min-w-[150px] transform transition-all duration-200 ease-in-out origin-top ${
                    dropdownOpen === "about"
                      ? "max-h-96 opacity-100 scale-y-100"
                      : "max-h-0 opacity-0 scale-y-0 pointer-events-none overflow-hidden"
                  } lg:mt-2 mt-0 left-0`}
                >
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Mission/Vision
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/partners"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/ourmembers"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Our Members
                  </Link>
                </div>
              </div>

              <Link
                to="/Ourinitiatives"
                className="hover:text-yellow-500 px-3 py-2 text-[0.95rem] font-bold whitespace-nowrap"
                onClick={handleNavItemClick}
              >
                Our Initiatives
              </Link>
              <Link
                to="/membership"
                className="hover:text-yellow-500 px-3 py-2 text-[0.95rem] font-bold whitespace-nowrap"
                onClick={handleNavItemClick}
              >
                Membership
              </Link>
              <Link
                to="/events"
                className="hover:text-yellow-500 px-3 py-2 text-[0.95rem] font-bold whitespace-nowrap"
                onClick={handleNavItemClick}
              >
                Events
              </Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  className="hover:text-yellow-500 px-3 py-2 w-full lg:w-auto text-left text-[0.95rem] font-bold flex justify-between items-center lg:justify-start whitespace-nowrap"
                  onClick={() => toggleDropdown("resources")}
                >
                  Resources
                  <span className="lg:hidden">
                    {dropdownOpen === "resources" ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`lg:absolute bg-white text-black shadow-lg rounded-lg p-2 min-w-[150px] transform transition-all duration-200 ease-in-out origin-top ${
                    dropdownOpen === "resources"
                      ? "max-h-96 opacity-100 scale-y-100"
                      : "max-h-0 opacity-0 scale-y-0 pointer-events-none overflow-hidden"
                  } lg:mt-2 mt-0 left-0`}
                >
                  <Link
                    to="/BlogsPage"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/MSMENews"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    MSME News
                  </Link>
                  <Link
                    to="/SchemesPage"
                    className="block px-4 py-2 hover:bg-yellow-500 font-bold text-sm"
                    onClick={handleNavItemClick}
                  >
                    Schemes
                  </Link>
                </div>
              </div>

              <Link
                to="/MasainMedia"
                className="hover:text-yellow-500 px-3 py-2 text-[0.95rem] font-bold whitespace-nowrap"
                onClick={handleNavItemClick}
              >
                MASA in Media
              </Link>
              <Link
                to="/ContactUs"
                className="hover:text-yellow-500 px-3 py-2 text-[0.95rem] font-bold whitespace-nowrap"
                onClick={handleNavItemClick}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Register Button - right aligned */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto">
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold text-[0.95rem] whitespace-nowrap"
              onClick={handleNavItemClick}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Register Button */}
        <div className={`lg:hidden bg-gray-800 px-4 pb-4 ${menuOpen ? "block" : "hidden"}`}>
          <Link
            to="/register"
            className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center font-bold text-[0.95rem]"
            onClick={handleNavItemClick}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;