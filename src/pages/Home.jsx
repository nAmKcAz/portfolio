import { Link } from "react-router-dom";
import { games } from "../data/games";

export default function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Game Development Portfolio</h1>

      <div style={styles.grid}>
        {games.map((game) => (
          <Link key={game.id} to={`/game/${game.id}`} style={styles.card}>
            <img src={game.image} alt={game.title} style={styles.image} />
            <h2>{game.title}</h2>
          </Link>
        ))}
      </div>
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
  title: {
    marginBottom: 32
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24
  },
  card: {
    textDecoration: "none",
    color: "#fff",
    background: "#181818",
    padding: 16,
    borderRadius: 12
  },
  image: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 12
  }
};
