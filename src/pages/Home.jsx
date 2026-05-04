import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b1e3c] overflow-hidden px-4">

      {/* partículas */}
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

      <div className="relative z-10 text-center max-w-4xl w-full">

        {/* STATUS */}
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm backdrop-blur-md">
          <span>{">_"}</span>
          STATUS: ONLINE
        </div>

        {/* TITLE */}
        <h1 className="font-bold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent
          text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          THIFFANY
        </h1>

        {/* SUBTITLE */}
        <p className="mt-3 sm:mt-4 text-gray-300
          text-sm sm:text-base md:text-lg lg:text-xl">
          Construindo soluções seguras e escaláveis
        </p>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 transition text-black font-medium shadow-lg shadow-cyan-500/20"
            >
            Ver Projetos ⚡
            </button>

            <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition"
            >
            Contato
            </button>

        </div>
      </div>
    </section>
  )
}