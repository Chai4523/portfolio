export default function Footer() {
  const anchor = (url, text = "") => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tag-link"
    >
      {text}
    </a>
  );
  const vscLink = anchor(
    "https://code.visualstudio.com/",
    "Visual Studio Code"
  );
  const viteLink = anchor("https://vite.dev/", "Vite");
  const vercelLink = anchor("https://vercel.com/", "Vercel");

  return (
    <div className="footer">
      <p>
        Handcrafted in {vscLink} by yours truly. Built with {viteLink}, deployed
        via {vercelLink}.
      </p>
    </div>
  );
}
