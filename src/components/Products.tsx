const CATEGORIES = ["Todos", "Pães", "Doces", "Bebidas", "Salgados"];

const PRODUCTS = [
  {
    id: 1,
    name: "Pão de Fermentação Natural",
    category: "Pães",
    price: "R$ 18,90",
    description: "Feito com fermento natural, casca crocante e miolo macio.",
    image: "/images/product-bread.jpg",
    tag: "⭐ Mais Vendido",
    tagColor: "bg-[#F5C842] text-[#2C1A0E]",
  },
  {
    id: 2,
    name: "Croissant de Manteiga",
    category: "Pães",
    price: "R$ 8,50",
    description: "Folhado, crocante por fora e macio por dentro.",
    image: "/images/product-croissant.jpg",
    tag: "🥐 Especial",
    tagColor: "bg-[#8B4513] text-white",
  },
  {
    id: 3,
    name: "Bolo de Confeitaria",
    category: "Doces",
    price: "R$ 65,00",
    description: "Bolo artesanal com creme e frutas frescas da estação.",
    image: "/images/product-cake.jpg",
    tag: "🎂 Novidade",
    tagColor: "bg-[#E87B3E] text-white",
  },
  {
    id: 4,
    name: "Café Especial da Casa",
    category: "Bebidas",
    price: "R$ 9,00",
    description: "Grãos selecionados, torrefação artesanal, sabor incomparável.",
    image: "/images/product-coffee.jpg",
    tag: "☕ Favorito",
    tagColor: "bg-[#2C1A0E] text-white",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5C842] text-sm font-semibold tracking-widest uppercase mb-3">
            Nosso Cardápio
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4">
            Feitos para você
          </h2>
          <p className="text-[#2C1A0E]/60 text-lg max-w-xl mx-auto">
            Cada produto é preparado diariamente com ingredientes selecionados.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                i === 0
                  ? "bg-[#2C1A0E] text-white shadow-md"
                  : "bg-[#FDF8F0] text-[#2C1A0E]/70 hover:bg-[#2C1A0E]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FDF8F0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#2C1A0E]/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`${product.tagColor} text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-[#8B4513] font-medium uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="font-['Playfair_Display'] text-[#2C1A0E] text-lg font-bold mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-[#2C1A0E]/60 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-['Playfair_Display'] text-[#2C1A0E] text-xl font-bold">
                    {product.price}
                  </span>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2C1A0E] text-white text-xs px-4 py-2 rounded-full hover:bg-[#F5C842] hover:text-[#2C1A0E] transition-all duration-200 font-medium"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#F5C842] text-[#2C1A0E] px-8 py-4 rounded-full font-semibold hover:bg-[#e6b830] hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Ver Cardápio Completo no WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
