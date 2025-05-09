import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
      <nav
        className={`flex items-center justify-between ease-in-out p-4 fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          isScrolled ? "bg-primary shadow-md" : "py-8 px-8 bg-transparent"
        }`}
      >
        <div className="text-text-primary text-xl font-bold tracking-wide">
          Ram Maths
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`md:flex md:space-x-6 fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-primary md:bg-transparent transition-transform duration-300 ${
            isMenuOpen || window.innerWidth >= 768
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex justify-end text-text-primary p-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-text-primary focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <li className="text-center md:text-left">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block hover:text-accent transition duration-200 py-2 md:py-0"
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/guides"
              onClick={handleLinkClick}
              className="block hover:text-accent transition duration-200 py-2 md:py-0"
            >
              Guides
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/services"
              onClick={handleLinkClick}
              className="block hover:text-accent transition duration-200 py-2 md:py-0"
            >
              Services
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block hover:text-accent transition duration-200 py-2 md:py-0"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
