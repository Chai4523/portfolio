import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <h1 className="main-heading">CHAI CHUNG YEE</h1>
      <p>frontend developer / software engineer</p>
      <button>Contact Me</button>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
