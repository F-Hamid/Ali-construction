import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
// import Animation from "../src/components/Animation";
import "./SASS/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
