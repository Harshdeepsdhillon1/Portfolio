import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import { Link } from "react-scroll";
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-container"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          Harshdeep <span>Singh</span>
        </h1>
        <h2 className="hero-subtitle">Front-End Developer & Web Dev Enthusiast</h2>
      </motion.div>
      <motion.p
        className="hero-para"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Building Modern, Scalable, and Creative Web Experiences.
      </motion.p>

      {/* Scroll Down Arrow */}
      <Link to="skills" smooth={true} duration={500} className="scroll-arrow">
        <ArrowBigDownDash size={40} color="#4E31AA" />
      </Link>
    </section>
  );
};

export default Hero;
