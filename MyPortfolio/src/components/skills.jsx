import React from "react";
import "../styles.css"; // Ensure styles are linked

const skills = [
  { src: "/images/html.png", alt: "HTML" },
  { src: "/images/css-3.png", alt: "CSS" },
  { src: "/images/js.png", alt: "JavaScript" },
  { src: "/images/react.png", alt: "React" },
  { src: "/images/Angular.png", alt: "Angular" },
  { src: "/images/bootstrap.png", alt: "Bootstrap" },
  { src: "/images/Webpack.png", alt: "Webpack" },
  { src: "/images/tailwind.png", alt: "Tailwind CSS" },
  { src: "/images/git.png", alt: "Git" },
  { src: "/images/Node.js.png", alt: "Node.js" },
  { src: "/images/Express.png", alt: "Express.js" },
  { src: "/images/MongoDB.png", alt: "MongoDB" },
  { src: "/images/database.png", alt: "MySQL" },
  { src: "/images/python.png", alt: "Python" },
  { src: "/images/java.png", alt: "Java" },
  { src: "/images/linux.png", alt: "Linux" },
  { src: "/images/azure.png", alt: "Microsoft Azure" }
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      
      <div className="skills-title-container">
        <h1><span>Technologies</span> </h1>
        <h2>I work with</h2>
      </div>
      <div className="skills-container">
        <div className="scroll-wrapper">
          <ul className="scroll-content">
            {[...skills, ...skills].map((skill, index) => (
              <li key={index} className="skill-item">
                <img src={skill.src} alt={skill.alt} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
