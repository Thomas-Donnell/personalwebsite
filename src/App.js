import "./index.css"
import "./animation.css"
import NavBar from "./Components/NavBar"
import Animation from "./Components/Animation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div id="body">
        <Animation />
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
