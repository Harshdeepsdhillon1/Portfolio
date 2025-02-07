import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "../styles.css"; // Ensure styles are linked

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Coded by Harshdeep Singh</p>
      <div className="footer-icons">
        <a href="harshdeepsdhillon1@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="footer-icon" />
        </a>

        <a href="https://github.com/harshdeepsdhillon1" target="_blank" rel="noopener noreferrer">
          <Github className="footer-icon" />
        </a>

        <a href="https://www.linkedin.com/in/harshdeep-singh-dhillon/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
