export default function About() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-4 py-16 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center font-bold mb-12
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-gray-400">./</span>
          <span className="text-pink-500">ABOUT_OPERATOR</span>
        </h2>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* TEXT CARD */}
          <div className="
            p-6 sm:p-8 rounded-xl
            bg-gradient-to-br from-purple-900/30 to-black/40
            border border-purple-500/20
            backdrop-blur-md
          ">

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Desenvolvedora focada em criar soluções modernas, seguras e escaláveis.
              Experiência em backend, frontend e arquitetura de sistemas.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Trabalho com tecnologias atuais, sempre buscando eficiência, performance
              e boas práticas. Cada projeto é tratado com precisão técnica e atenção
              aos detalhes.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="p-6 rounded-xl bg-white/5 border border-pink-500/20 backdrop-blur-md text-center">
              <div className="text-pink-500 text-2xl mb-2">{`</>`}</div>
              <h3 className="text-2xl font-bold text-pink-400">100K+</h3>
              <p className="text-gray-400 text-sm">Linhas de Código</p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 rounded-xl bg-white/5 border border-pink-500/20 backdrop-blur-md text-center">
              <div className="text-pink-500 text-2xl mb-2">🚀</div>
              <h3 className="text-2xl font-bold text-pink-400">8+</h3>
              <p className="text-gray-400 text-sm">Projetos em Deploy</p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 rounded-xl bg-white/5 border border-pink-500/20 backdrop-blur-md text-center">
              <div className="text-pink-500 text-2xl mb-2">🛡️</div>
              <h3 className="text-2xl font-bold text-pink-400">5+</h3>
              <p className="text-gray-400 text-sm">Anos de Experiência</p>
            </div>

            {/* CARD 4 */}
            <div className="p-6 rounded-xl bg-white/5 border border-pink-500/20 backdrop-blur-md text-center">
              <div className="text-pink-500 text-2xl mb-2">⚡</div>
              <h3 className="text-2xl font-bold text-pink-400">∞</h3>
              <p className="text-gray-400 text-sm">Café Consumido</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}