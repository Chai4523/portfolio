import cooklet from "../assets/cooklet.png";
import movieApp from "../assets/movie-app.png";

export default function Projects() {
  return (
    <div className="pb-80">
      <h2>PROJECTS</h2>
      <a
        href="https://c4523-movie-app.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="img-container">
          <img
            src={movieApp}
            alt="Snapshot of movie-app"
            className="card-img"
          />
          <div className="card-info">
            <h3>Movie app</h3>
            <p className="mt-0">
              A Movie/TV discovery web app that showcases curated categories
              like trending, top-rated and genre-specific selections. Equipped
              with search functionality and a detailed overview of selected
              film, providing a smooth browsing experience for film enthusiasts.
            </p>
            <div className="card-techs">
              {["React", "TMDB API", "Mantine UI"].map((tech) => (
                <div key={crypto.randomUUID()}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </a>
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
            <p className="mt-0">
              Cooklet is a simple recipe browsing app that helps users discover
              new dishes and cooking ideas. Designed with ease of use in mind,
              the app lets people explore different recipes in a clean, modern
              interface.
            </p>
            <div className="card-techs">
              {["React", "Spoonacular API", "HTML & CSS"].map((tech) => (
                <div key={crypto.randomUUID()}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
