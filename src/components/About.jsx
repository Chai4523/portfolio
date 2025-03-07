import jsLogo from "../assets/icons8-js.svg";
import reactLogo from "../assets/icons8-react.svg";
import gitLogo from "../assets/icons8-git.svg";

export default function About() {
  const iconRow = [
    [jsLogo, "Javascript"],
    [reactLogo, "React"],
    [gitLogo, "Git"],
  ].map((icon) => (
    <span key={crypto.randomUUID()} className="icon-wrapper">
      <img src={icon[0]} alt={`${icon[1]} icon`} className="icon"/>
    </span>
  ));

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
      <div>{iconRow}</div>
    </div>
  );
}
