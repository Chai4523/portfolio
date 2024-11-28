import jsLogo from "../assets/icons8-js.svg";
import reactLogo from "../assets/icons8-react.svg";
import gitLogo from "../assets/icons8-git.svg";

export default function About() {
  return (
    <div className="pb-80">
      <h2>ABOUT</h2>
      <p>
        As a software developer specializing in frontend development, I leverage
        a diverse set of modern technologies like{" "}
        <b>JavaScript, React and Git </b> to build dynamic, responsive web
        applications. Ensuring aesthethically appealing design and seamless user
        experiences across devices.
      </p>
      <div>
        <img src={jsLogo} alt="Javascript icon" className="icon" />
        <img src={reactLogo} alt="React icon" className="icon" />
        <img src={gitLogo} alt="Git icon" className="icon" />
      </div>
    </div>
  );
}
