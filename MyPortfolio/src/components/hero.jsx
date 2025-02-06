import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import { Link } from "react-scroll";
import "../styles.css"; // Ensure styles are correctly linked

const Hero = () => {
  const staggeredText = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Stagger delay
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-container"
        initial="hidden"
        animate="show"
        variants={staggeredText}
      >
        <motion.h1 className="hero-title" variants={staggeredText}>
          Harshdeep <span>Singh</span>
        </motion.h1>
        <motion.h2 className="hero-subtitle" variants={staggeredText}>
          Front-End Developer & Web Dev Enthusiast
        </motion.h2>
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
