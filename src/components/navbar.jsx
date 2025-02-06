
import { useState } from "react";
import { Link } from "react-scroll";
import { Import, Menu, X } from "lucide-react";
import "../styles.css";
import ScrollProgress from "./scrollprogess";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      

      <nav className="navbar">
        <div className="navbar-container">
          {/* Desktop Menu */}
          <ul className="nav-links">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Background Overlay (for mobile menu) */}
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

        {/* Mobile Menu */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
          <ul>
            <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><a href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)}>Resume</a></li>
          </ul>
        </div>
      </nav>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
    </>
  );
};

export default Navbar;
