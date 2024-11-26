import githubLogo from "../assets/icons8-github.svg";
import linkedinLogo from "../assets/icons8-linkedin.svg";

export default function Header() {
  let lookingForWork = true;

  return (
    <div className="grid-left">
      <div>
        <h1 className="main-heading">Chai Chung Yee</h1>
        <h2 className="sub-heading">Software Engineer</h2>
        <p className="intro">
          I am a developer who strives to build visually appealing and highly
          functional websites by combining the latest web technologies with a
          passion for creating seamless user experiences.
        </p>
      </div>

      <div>
        {lookingForWork && <div className="status">Open for work</div>}
        <img src={githubLogo} alt="Github icon" className="icon" />
        <img src={linkedinLogo} alt="Linkedin icon" className="icon" />
      </div>
    </div>
  );
}
