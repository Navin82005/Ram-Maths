import { Link } from "react-router-dom";
import { RamMaths } from "../../assets/vector";


const FooterSection = () => {
  return (
    <footer className="bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          {/* <img src={FullLogo} alt="Logo" className="h-24" /> */}
          <Link to="/">
            <RamMaths />
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-bold text-text-primary text-lg mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-text-secondary text-sm">
              <li>
                <Link
                  to="/guides"
                  className="hover:underline hover:text-accent transition"
                >
                  Available Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:underline hover:text-accent transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-accent transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-bold text-text-primary text-lg mb-2">
              Social Links
            </h3>
            <ul className="space-y-1 text-text-secondary text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@rammathstamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-accent transition"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-accent transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-accent transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-center py-4 text-text-secondary">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Ram Maths. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
