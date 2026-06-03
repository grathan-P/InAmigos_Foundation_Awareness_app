import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logoPng from '../assets/inamigos_logo.png';

const Navbar = () => {
    const handlePageChange = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if a link is active. 
  // It returns the red color/underline classes if true, or the dark text color if false.
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-red-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.75 after:bg-red-600"
      : "text-gray-900 hover:text-red-600";
  };

  // Helper for mobile links background highlight
  const getMobileLinkClass = (path) => {
    return location.pathname === path
      ? "bg-red-50 text-red-600"
      : "text-gray-900 hover:bg-gray-50 hover:text-red-600";
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Link */}
        <Link to="/" onClick={handlePageChange} className="flex items-center gap-3 select-none">
          <img 
            src={logoPng} 
            alt="InAmigos Foundation Logo" 
            className="w-auto h-9 object-contain shrink-0" 
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-gray-900 leading-tight">
              In<span className="text-red-600">Amigos</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.22em] text-gray-800 uppercase -mt-1">
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Menu - Links written out one by one manually */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <ul className="flex items-center gap-8 h-full">
            
            <li className="h-full flex items-center relative">
              <Link to="/" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/")}`}>
                Home
              </Link>
            </li>

            <li className="h-full flex items-center relative">
              <Link to="/about" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/about")}`}>
                About
              </Link>
            </li>

            <li className="h-full flex items-center relative">
              <Link to="/projects" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/projects")}`}>
                Projects
              </Link>
            </li>

            <li className="h-full flex items-center relative">
              <Link to="/gallery" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/gallery")}`}>
                Gallery
              </Link>
            </li>

            <li className="h-full flex items-center relative">
              <Link to="/volunteer" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/volunteer")}`}>
                Volunteer
              </Link>
            </li>

            <li className="h-full flex items-center relative">
              <Link to="/contact" onClick={handlePageChange} className={`text-base font-semibold transition duration-200 py-2 ${getLinkClass("/contact")}`}>
                Contact
              </Link>
            </li>

          </ul>

          <Link
            to="/volunteer#joinus"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition duration-200 tracking-wide ml-4"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-800 hover:text-red-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Written out manually */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col px-6 py-4 gap-2">
            
            <li>
              <Link to="/" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/")}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/about")}`} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/projects")}`} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/gallery" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/gallery")}`} onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/volunteer" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/volunteer")}`} onClick={() => setIsOpen(false)}>
                Volunteer
              </Link>
            </li>

            <li>
              <Link to="/contact" className={`block py-2.5 px-3 rounded-md text-base font-medium transition ${getMobileLinkClass("/contact")}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            <li className="pt-4 border-t border-gray-100 mt-2">
              <Link
                to="/volunteer#joinus"
                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-base font-semibold transition"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;