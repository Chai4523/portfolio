import { data } from "../assets/experience";
import resume from "../assets/chai_chung_yee_resume.pdf";

export default function Experience() {
  const cardEls = data.map((data) => (
    <div key={crypto.randomUUID()} className="card">
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
    </div>
  ));

  return (
    <div className="grid-right">
      <h2>EXPERIENCE</h2>
      {cardEls}
      <a href={resume} target="_blank" rel="noopener noreferrer">
        View full resume
      </a>
    </div>
  );
}
