import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/NeonRetroRegular.otf";
import Bio from "./components/Bio";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="main">
      <div className="left">
        <Bio />
      </div>
      <div className="right">
        <About />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
