import react from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Educations from "./Components/Educations";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Educations />
      </main>
      <Contact />
    </div>
  );
}

export default App;
