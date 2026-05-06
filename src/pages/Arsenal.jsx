export default function Arsenal() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="arsenal"
      className="relative min-h-screen bg-[#020617] text-white px-4 py-16 overflow-hidden"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-bold
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-gray-400">./</span>
            <span className="text-pink-500">ARSENAL</span>
          </h2>

          <div className="w-24 h-1 bg-pink-500/60 mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg">
            Stack principal utilizada no desenvolvimento diário
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <div className="p-8 rounded-2xl bg-white/5 border border-pink-500/20 backdrop-blur-md">

            <h3 className="text-pink-400 text-2xl font-semibold mb-8">
              • Frontend Arsenal
            </h3>

            <div className="space-y-5">

              {[
                "React",
                "JavaScript",
                "Next.js",
                "Tailwind CSS",
                "Motion",
                "Vite",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1 h-7 bg-pink-500/60 rounded-full" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}

            </div>

        </div>

          {/* BACKEND */}
          <div className="p-8 rounded-2xl bg-white/5 border border-pink-500/20 backdrop-blur-md">

            <h3 className="text-pink-400 text-2xl font-semibold mb-8">
              • Backend Systems
            </h3>

            <div className="space-y-5">

              {[
                "SQL",
                "C#",
                ".NET",
                "ASP.NET Core",
                "Entity Framework Core",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1 h-7 bg-pink-500/60 rounded-full" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}

            </div>

          </div>

          {/* TOOLS */}
          <div className="p-8 rounded-2xl bg-white/5 border border-pink-500/20 backdrop-blur-md">

            <h3 className="text-pink-400 text-2xl font-semibold mb-8">
              • Tools & Workflow
            </h3>

            <div className="space-y-5">

              {[
                "Git",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1 h-7 bg-pink-500/60 rounded-full" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}

            </div>
        
          </div>

        </div>
    </div>

      {/* SETA */}
      <button
        onClick={() => scrollTo("projects")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyano-400 animate-bounce hover:scale-110 transition"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl">
          ↓
        </span>
      </button>

    </section>
  )
}