import vansLife from "../assets/vans_life.jpg";
import cooklet from "../assets/cooklet.png";

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
      <a
        href="https://cooklet.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="img-container">
          <img
            src={cooklet}
            alt="Snapshot of Cooklet application"
            className="card-img"
          />
          <div className="card-info">
            <h3>Cooklet</h3>
            <p className="mg-0">
              A responsive web application that will allow user to search for a
              variety of food recipe with options to suit their dietary needs.
              This app is built with
              <a
                href="https://spoonacular.com/food-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Spoonacular API
              </a>
              , hosted on{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
