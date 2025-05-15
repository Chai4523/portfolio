import { data } from "../assets/experience";
import resume from "../assets/chai_chung_yee_resume.pdf";

export default function Experience() {
  const cardEls = data.map((data) => (
    <a
      key={crypto.randomUUID()}
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-link"
    >
      <div className="card-date">{data.date}</div>
      <div className="card-info">
        <div>
          <h3>
            {data.title} · {data.company}
          </h3>
          <p>{data.description}</p>
        </div>
        <div className="card-techs">
          {data.techs.map((tech) => (
            <div key={crypto.randomUUID()}>{tech}</div>
          ))}
        </div>
      </div>
    </a>
  ));

  return (
    <div className="pb-80">
      <h2>EXPERIENCE</h2>
      {cardEls}
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="tag-link"
      >
        View full resume
      </a>
    </div>
  );
}
