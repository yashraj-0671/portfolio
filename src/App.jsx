import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  return (
    <>
        <Particles />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
       <Contact />
  <Footer />
    </>
  );
}

export default App;