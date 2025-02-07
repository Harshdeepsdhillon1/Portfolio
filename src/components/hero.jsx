import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import { Link } from "react-scroll";
import FadeIn from "./FadeIn"; // Import the FadeIn component
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
     
        <div className="hero-container">
        <FadeIn delay={0.2}>
          <h1 className="hero-title">
            Harshdeep <span>Singh</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <h2 className="hero-subtitle">Software Developer</h2>
        </FadeIn>
        </div>
        
      
      <FadeIn delay={0.6}>
        <motion.p
          className="hero-para"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Building Modern, Scalable, and Creative Web Experiences.
        </motion.p>
      </FadeIn>

      {/* Scroll Down Arrow */}
      <Link to="skills" smooth={true} duration={500} className="scroll-arrow">
        <ArrowBigDownDash size={40} color="#4E31AA" />
      </Link>
    </section>
  );
};

export default Hero;
