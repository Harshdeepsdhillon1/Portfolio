import React from "react";
import {Mail, Github, Linkedin } from "lucide-react";
import ScrollReveal from "./scrollreveal";
import "../styles.css"; // Ensure correct path for styles

const Contact = () => {
  return (
    <section className="contact" id="contact">
      
      <div className="contact-title-container">
        <h2 className="contact-subtitle">Lets Chat</h2>
        <ScrollReveal><h2 className="contact-title">Find Me On</h2></ScrollReveal>
      </div>
      
      <ScrollReveal>
        
      
      <div className="contact-links">
        {/* Email */}
        <a href="harshdeepsdhillon1@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="contact-icon" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/harshdeepsdhillon1" target="_blank" rel="noopener noreferrer">
          <Github className="contact-icon" />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/harshdeep-singh-dhillon/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="contact-icon" />
        </a>
      </div>
      <a
      href="/resume.docx" download="Harshdeep_singh.docx"
      className="resume-btn"
    >
      Download Resume
    </a>
    </ScrollReveal>
    </section>
  );
};

export default Contact;
