import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "../styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li><a href="/resume.pdf" target="_blank">Resume</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Background Overlay */}
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
  );
};

export default Navbar;
