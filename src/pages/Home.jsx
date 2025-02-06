import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

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

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
