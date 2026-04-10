const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana Carolina S.",
    avatar: "A",
    color: "bg-[#F5C842]",
    text: "A melhor padaria da cidade! Compro pão aqui há 10 anos e nunca me decepcionaram. O pão de fermentação natural é simplesmente incrível!",
    stars: 5,
    role: "Cliente fiel desde 2014",
  },
  {
    id: 2,
    name: "Roberto Mendes",
    avatar: "R",
    color: "bg-[#8B4513]",
    text: "Os croissants são os melhores que já experimentei fora da França. A equipe é super atenciosa e o ambiente é muito aconchegante.",
    stars: 5,
    role: "Cliente frequente",
  },
  {
    id: 3,
    name: "Fernanda Lima",
    avatar: "F",
    color: "bg-[#E87B3E]",
    text: "Encomendei o bolo de aniversário da minha filha e ficou perfeito! Todo mundo elogiou muito. Já estou planejando o próximo!",
    stars: 5,
    role: "Cliente satisfeita",
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    avatar: "C",
    color: "bg-[#2C1A0E]",
    text: "Café da manhã aqui todo sábado é ritual sagrado lá em casa. O café especial da casa não tem igual. Recomendo de olhos fechados!",
    stars: 5,
    role: "Frequentador assíduo",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#F5C842] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#2C1A0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5C842] text-sm font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Mais de 2.000 famílias felizes que confiam na nossa padaria.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <div className="mt-12 bg-white/5 border border-[#F5C842]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⭐</div>
            <div>
              <p className="text-white font-bold text-xl">4.9 / 5.0</p>
              <p className="text-white/50 text-sm">Baseado em +320 avaliações no Google</p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-[#F5C842] text-[#2C1A0E] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#e6b830] transition-colors"
          >
            Deixe sua Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
