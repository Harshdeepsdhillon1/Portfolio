// Projects.jsx
import React from "react";
import FadeIn from "./FadeIn"; // Import the FadeIn component
import "../styles.css"; // Ensure this path is correct
import ScrollReveal from "./scrollreveal";

const projects = [
  {
    title: "E-commerce Website",
    skills: ["React", "CSS", "Firebase"],
    description:
      "Developed a responsive e-commerce platform with real-time product updates and authentication.",
    githubLink: "https://github.com/yourusername/ecommerce-project",
    image: "/images/ecommerce.png",
  },
  {
    title: "Weather Forecast App",
    skills: ["React", "API Integration", "Bootstrap"],
    description:
      "Created a weather forecast app that fetches real-time data from OpenWeather API.",
    githubLink: "https://github.com/yourusername/weather-app",
    image: "/images/weather.png",
  },
  {
    title: "Task Manager App",
    skills: ["MERN Stack", "Redux", "MongoDB"],
    description:
      "A full-stack task management system with CRUD functionality and user authentication.",
    githubLink: "https://github.com/yourusername/task-manager",
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
