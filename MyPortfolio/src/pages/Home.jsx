import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-primary text-third px-6">
        <h1 className="text-4xl font-bold">Hi, I'm Harshdeep Singh</h1>
        <p className="text-lg mt-4">Front-End Developer | JavaScript Enthusiast</p>
      </section>

      {/* Placeholder for Projects Section */}
      <section id="projects" className="h-screen bg-secondary1 text-third flex items-center justify-center text-3xl">
        Projects Section
      </section>

      {/* Placeholder for Contact Section */}
      <section id="contact" className="h-screen bg-secondary2 text-third flex items-center justify-center text-3xl">
        Contact Section
      </section>
    </div>
  );
};

export default Home;
