import vansLife from "../assets/vans_life.jpg";

export default function Projects() {
  return (
    <div className="pb-80">
      <h2>PROJECTS</h2>
      <div className="img-container">
        <img
          src={vansLife}
          alt="Snapshot of Vans Life application"
          className="card-img"
        />
        <div className="card-info">
          <h3>Vans Life</h3>
          <p className="mg-0">
            A single page application built while learning React Router 6 on a
            scrimba course. Integrated with firebase to handle data
            communication.
          </p>
        </div>
      </div>
    </div>
  );
}
