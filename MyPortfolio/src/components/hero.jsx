import { ArrowBigDownDash } from "lucide-react"; // Import the arrow
import { Link } from "react-scroll";
import "../styles.css"; // Ensure styles are correctly linked

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Harshdeep Singh</h1>
        <h2 className="hero-subtitle">
          Front-End Developer  Web Dev Enthusiast
        </h2>
      </div>
      {/* Scroll Down Arrow */}
      <Link to="skills" smooth={true} duration={500} className="scroll-arrow">
          <ArrowBigDownDash size={40} color="#3795BD" />
        </Link>
    </section>
  );
};

export default Hero;
