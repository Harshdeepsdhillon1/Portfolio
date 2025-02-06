import React from "react";
import { ArrowBigUpDash, Mail, Github, Linkedin } from "lucide-react";
import "../styles.css"; // Ensure correct path for styles

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Find Me On</h2>

      <div className="contact-links">
        {/* Email */}
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <Mail className="contact-icon" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="contact-icon" />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="contact-icon" />
        </a>
      </div>
      <a
      href="/resume.pdf" // Update with your actual resume file link
      download="Harshdeep_Singh_Resume.pdf"
      className="resume-btn"
    >
      Download Resume
    </a>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowBigUpDash className="scroll-icon" />
      </button>
    </section>
  );
};

export default Contact;
