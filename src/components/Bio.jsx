import githubLogo from "../assets/icons8-github.svg";
import linkedinLogo from "../assets/icons8-linkedin.svg";

export default function Bio() {
  let lookingForWork = true;

  return (
    <div className="bio">
      <div>
        <h1 className="bio-heading">Chai Chung Yee</h1>
        <h2 className="bio-subtitle">Software Engineer</h2>
        <p className="bio-desc">
          I am a developer who strives to build visually appealing and highly
          functional websites by combining the latest web technologies with a
          passion for creating seamless user experiences.
        </p>
      </div>

      <div>
        {lookingForWork && <div className="status">Open for work</div>}

        <a
          href="https://github.com/chai4523"
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <span className="icon-wrapper">
            <img src={githubLogo} alt="Github icon" className="linked-icon" />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/chai4523/"
          target="_blank"
          rel="noreferrer noopener"
          title="LinkedIn"
        >
          <span className="icon-wrapper">
            <img
              src={linkedinLogo}
              alt="Linkedin icon"
              className="linked-icon"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
