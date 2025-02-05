import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/*Skills Section*/}
      <Skills />
      {/*Projects Section */}
      <Projects />

      {/* Placeholder for Contact Section */}
      <section id="contact" className="h-screen bg-secondary2 text-third flex items-center justify-center text-3xl">
        Contact Section
      </section>
    </div>
  );
};

export default Home;
