export default function About() {
  const anchor = (url, text = "") => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tag-link">
      {text}
    </a>
  );

  const reactLink = anchor("https://react.dev/", "React");
  const movieAppLink = anchor(
    "https://c4523-movie-app.vercel.app/",
    "a movie discovery app"
  );

  return (
    <div className="pb-80">
      <h2>ABOUT</h2>
      <p>
        I am a developer who strives to build visually appealing and highly
        functional websites by combining the latest web technologies with a
        passion for creating seamless user experiences.
        <br />
        <br />
        As a software developer specializing in frontend development, I
        contribute to the creation and maintenance of UI components of the
        project, ensuring they align with design specifications and function
        seamlessly across devices. I focus on writing efficient, scalable code
        to enhance performance, while following modern development practices and
        maintaining consistency through reusable components and clean
        architecture.
        <br />
        <br />
        Recently, I have been working on {reactLink} and created {movieAppLink},
        which helped me deepen my understanding of component-based architecture,
        state management, and API integration through hands-on experience.
      </p>
    </div>
  );
}
