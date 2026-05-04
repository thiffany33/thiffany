import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b1e3c] overflow-hidden">

      {/* partículas simples */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">

        {/* STATUS */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-md">
          <span>{">_"}</span>
          STATUS: ONLINE
        </div>

        {/* TITLE */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          THIFFANY
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          Construindo soluções seguras e escaláveis
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition text-black font-medium shadow-lg shadow-cyan-500/20"
          >
            Ver Projetos ⚡
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Contato
          </button>

        </div>
      </div>
    </section>
  )
}