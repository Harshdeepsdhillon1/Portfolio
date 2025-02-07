import "../styles.css";
import ScrollReveal from "./scrollreveal";
import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section className="about">
      {/* Title and Subtitle */}
      <div className="about-header">
        <ScrollReveal>
        <h2 className="about-title">About Me</h2>
        <h3 className="about-subtitle">Passionate Front-End Developer</h3>
        </ScrollReveal>
        
      </div>

      {/* Grid Layout */}
      <div className="about-grid">
         {/* Center Image */}
         <div className="about-image-center">
          <img src="/images/profile1.jpg" alt="My Journey" />
        </div>
        {/* text*/}
        <div className="about-text">
          <ScrollReveal>
          <h3>My Journey</h3>
          <p>
            I am a front-end developer with a passion for building beautiful and functional user interfaces.
            With expertise in React, JavaScript, and modern UI frameworks, I focus on creating seamless user experiences.
            My goal is to build scalable, high-performance web applications that provide users with an engaging experience.
            I thrive on solving problems and continuously learning new technologies to stay ahead in the field.
          </p>
        </ScrollReveal>
        </div>

        {/* Full-Width Image */}
        
        <div className="about-image-full">
        <FadeIn>
        <img src="/images/profile2.jpg" alt="Work Experience" />
        </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

export default About;
