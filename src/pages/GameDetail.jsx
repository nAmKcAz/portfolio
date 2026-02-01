import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) return <p>Game not found.</p>;

  return (
    <div style={styles.page}>
      <Link to="/" style={styles.back}>← Back</Link>

      <h1>{game.title}</h1>
      <img src={game.image} alt={game.title} style={styles.image} />

      <section>
        <h2>Overview</h2>
        <p>{game.overview}</p>
      </section>

      <section>
        <h2>My Role</h2>
        <ul>
          {game.role.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Technology</h2>
        <div style={styles.tech}>
          {game.tech.map((t) => (
            <span key={t} style={styles.tag}>{t}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    padding: 32,
    background: "#0a0a0a",
    color: "#fff",
    minHeight: "100vh"
  },
  back: {
    color: "#aaa",
    textDecoration: "none"
  },
  image: {
    width: "100%",
    maxWidth: 800,
    margin: "24px 0",
    borderRadius: 12
  },
  tech: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  },
  tag: {
    background: "#222",
    padding: "4px 10px",
    borderRadius: 12,
    fontSize: 14
  }
};
