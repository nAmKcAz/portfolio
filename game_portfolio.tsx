import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const games = [
  {
    id: "starlight",
    title: "Starlight: Re:Volver",
    image: "https://via.placeholder.com/400x225",
    description:
      "Designed and implemented core gameplay systems, multiplayer networking, matchmaking services, and backend APIs. Led architectural decisions and optimized real-time systems."
  },
  {
    id: "project-orion",
    title: "Project Orion",
    image: "https://via.placeholder.com/400x225",
    description:
      "Built combat systems, player progression, and UI frameworks. Collaborated closely with designers to rapidly prototype and iterate on mechanics."
  },
  {
    id: "echo-arena",
    title: "Echo Arena",
    image: "https://via.placeholder.com/400x225",
    description:
      "Implemented P2P networking, backend account services, and performance optimizations across PC and console platforms."
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Game Development Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/game/${game.id}`}
            className="rounded-2xl overflow-hidden bg-zinc-900 hover:scale-[1.02] transition shadow-lg"
          >
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{game.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <div className="p-8">Game not found.</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <Link to="/" className="text-sm text-zinc-400 hover:text-white">← Back</Link>

      {/* Header */}
      <div className="mt-6 mb-10">
        <h1 className="text-4xl font-bold mb-2">{game.title}</h1>
        <p className="text-zinc-400">Released • PC / Console • Multiplayer</p>
      </div>

      {/* Hero Image */}
      <img
        src={game.image}
        alt={game.title}
        className="w-full max-w-5xl rounded-2xl mb-12"
      />

      {/* Overview */}
      <section className="max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="leading-relaxed text-zinc-300">
          High-level overview of the game. Describe the genre, core loop, team size,
          development timeline, and the overall goals of the project.
        </p>
      </section>

      {/* Role & Responsibilities */}
      <section className="max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">My Role</h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>Gameplay systems engineering</li>
          <li>Multiplayer networking & synchronization</li>
          <li>Backend services & APIs</li>
          <li>Performance optimization & profiling</li>
        </ul>
      </section>

      {/* Contributions */}
      <section className="max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
        <p className="leading-relaxed text-zinc-300">
          Detailed breakdown of specific systems you owned or heavily contributed to.
          This is where you highlight impact, technical challenges, and solutions.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technology</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Unity",
            "C#",
            "Netcode",
            "Custom Backend",
            "REST APIs",
            "PostgreSQL"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-zinc-800 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Media Gallery */}
      <section className="max-w-5xl mb-12">
        <h2 className="text-2xl font-semibold mb-6">Media</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="https://via.placeholder.com/600x340"
            alt="Screenshot 1"
            className="rounded-xl"
          />
          <img
            src="https://via.placeholder.com/600x340"
            alt="Screenshot 2"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Outcome */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Outcome & Learnings</h2>
        <p className="leading-relaxed text-zinc-300">
          Summary of the project’s outcome, what shipped, player reception,
          and what you learned or would approach differently next time.
        </p>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}
