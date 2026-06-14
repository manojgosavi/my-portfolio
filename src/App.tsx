import About from "./components/About";
import CodingActivity from "./components/CodingActivity";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideProjects from "./components/SideProjects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div id="home">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <SideProjects />
        <Skills />
        <CodingActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
