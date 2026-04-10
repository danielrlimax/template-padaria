export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bread.jpg')" }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C1A0E]/75 via-[#2C1A0E]/60 to-[#2C1A0E]/85" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #F5C842 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F5C842]/15 border border-[#F5C842]/30 text-[#F5C842] text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span>⭐</span>
          Tradição desde 1985
          <span>⭐</span>
        </div>

        <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6 text-shadow">
          Feito com{" "}
          <span className="text-[#F5C842] italic">amor</span>
          <br />
          todo dia
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Pão quentinho saindo do forno, croissants crocantes e doces
          irresistíveis. Venha nos visitar e sinta o perfume de uma padaria
          de verdade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produtos"
            className="bg-[#F5C842] text-[#2C1A0E] px-8 py-4 rounded-full text-base font-semibold hover:bg-[#e6b830] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#F5C842]/25"
          >
            Ver Cardápio
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-base font-semibold hover:border-[#F5C842] hover:text-[#F5C842] hover:scale-105 transition-all duration-200 backdrop-blur-sm"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
          {[
            { value: "40+", label: "Anos de Tradição" },
            { value: "150+", label: "Tipos de Pão" },
            { value: "2mil+", label: "Clientes Felizes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-['Playfair_Display'] text-3xl font-bold text-[#F5C842]">
                {stat.value}
              </p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <p className="text-xs tracking-widest uppercase">Rolar</p>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
