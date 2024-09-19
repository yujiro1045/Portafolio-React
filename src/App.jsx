import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import About from "./about/About";
import Menu from "./menu/Menu";
import Experience from "./experience/Experience";

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
