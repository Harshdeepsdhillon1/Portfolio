// Projects.jsx
import React from "react";
import FadeIn from "./FadeIn"; // Import the FadeIn component
import "../styles.css"; // Ensure this path is correct
import ScrollReveal from "./scrollreveal";

const projects = [
  {
    title: "Travel Planner Website",
    skills: ["Node", "Express", "MongoDB"],
    description:
      "Developed a responsive Travel Planner platform with CRUD Functionality and authentication using OAuth.",
    githubLink: "https://github.com/Harshdeepsdhillon1/COMP2068JSFrameworks/tree/main/ASSIGNMENT02",
    image: "/images/ecommerce.png",
  },
  {
    title: "Movie APP",
    skills: ["Java", "API Integration", "Firebase"],
    description:
      "Created a Movie App with CRUD functionality that fetches real-time data from OMDB API with user Authentication.",
    githubLink: "https://github.com/Harshdeepsdhillon1/MovieApp",
    image: "/images/weather.png",
  },
  {
    title: "Retro Lamborghini Concept Website",
    skills: ["JavaScript", "CSS", "Bootstrap"],
    description:
      "Retro Lamborghini concept website made using HTML, CSS, JavaScript and Bootstrap.",
    githubLink: "https://harshdeepsdhillon1.github.io/RetroLamborghini/",
    image: "/images/task-manager.png",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="project-title">
          <h1>Explore My</h1>
        <ScrollReveal delay={0.4}>
          <h2>Best Works</h2>
        </ScrollReveal>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={0.6}>
            <div className={`project ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <ul className="project-skills">
                  {project.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <img src="/images/github.png" alt="GitHub" className="github-icon" />
                </a>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
