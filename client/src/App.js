import Home from "./components/Home/Home";
import "./App.scss";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
