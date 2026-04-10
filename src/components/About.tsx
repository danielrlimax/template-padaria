const VALUES = [
  {
    icon: "🌾",
    title: "Ingredientes Naturais",
    desc: "Selecionamos os melhores ingredientes, sem conservantes artificiais.",
  },
  {
    icon: "🔥",
    title: "Forno a Lenha",
    desc: "O sabor único que só um forno a lenha tradicional pode oferecer.",
  },
  {
    icon: "❤️",
    title: "Feito com Amor",
    desc: "Cada pão é preparado com dedicação e carinho pela nossa equipe.",
  },
  {
    icon: "🕐",
    title: "Sempre Fresquinho",
    desc: "Produção diária garantindo o pão mais fresco para você.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="Padeiro preparando o pão"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5C842]/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] text-[#2C1A0E] font-bold text-lg">
                      Melhor Padaria da Cidade
                    </p>
                    <p className="text-[#2C1A0E]/60 text-sm">
                      Prêmio Sabor & Qualidade 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F5C842] rounded-3xl -z-10 opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#2C1A0E] rounded-2xl -z-10 opacity-20" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-[#F5C842] text-sm font-semibold tracking-widest uppercase mb-3">
              Nossa História
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-6 leading-tight">
              Uma tradição que <br />
              <span className="italic text-[#8B4513]">alimenta famílias</span>
            </h2>
            <p className="text-[#2C1A0E]/70 text-base leading-relaxed mb-5">
              Desde 1985, a nossa padaria é o ponto de encontro das manhãs da
              cidade. Fundada pelo Sr. João e Dona Maria, a padaria nasceu de um
              sonho simples: oferecer pão fresquinho e de qualidade para toda a
              família.
            </p>
            <p className="text-[#2C1A0E]/70 text-base leading-relaxed mb-8">
              Hoje, com mais de 40 anos de história, seguimos a mesma receita de
              sucesso: ingredientes naturais, muito trabalho e aquele carinho de
              sempre que faz toda a diferença no sabor.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-[#2C1A0E]/5 hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {value.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-[#2C1A0E] text-sm mb-1">
                      {value.title}
                    </p>
                    <p className="text-[#2C1A0E]/60 text-xs leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
