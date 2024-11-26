import { data } from "../assets/experience";

export default function Experience() {
  const cardEls = data.map((data) => (
    <div key={crypto.randomUUID()} className="card">
      <div className="card-date">{data.date}</div>
      <div className="card-info">
        <div>
          <h3>
            {data.title} • {data.company}
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

  return cardEls;
}
