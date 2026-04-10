const CONTACTS = [
  {
    icon: "📱",
    title: "WhatsApp",
    value: "(11) 99999-9999",
    link: "https://wa.me/5511999999999",
    linkLabel: "Enviar mensagem",
  },
  {
    icon: "📍",
    title: "Endereço",
    value: "Rua das Flores, 123 — Centro, SP",
    link: "https://maps.google.com",
    linkLabel: "Ver no mapa",
  },
  {
    icon: "📸",
    title: "Instagram",
    value: "@padariaartesanal",
    link: "https://instagram.com",
    linkLabel: "Seguir",
  },
  {
    icon: "✉️",
    title: "E-mail",
    value: "contato@padaria.com.br",
    link: "mailto:contato@padaria.com.br",
    linkLabel: "Enviar e-mail",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5C842] text-sm font-semibold tracking-widest uppercase mb-3">
            Fale Conosco
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4">
            Entre em contato
          </h2>
          <p className="text-[#2C1A0E]/60 text-lg max-w-xl mx-auto">
            Ficou com alguma dúvida? Quer fazer um pedido especial? Fale
            com a gente pelo canal que preferir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONTACTS.map((contact) => (
              <div
                key={contact.title}
                className="bg-[#FDF8F0] rounded-3xl p-6 border border-[#2C1A0E]/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{contact.icon}</div>
                <p className="text-xs text-[#8B4513] font-semibold uppercase tracking-wide mb-1">
                  {contact.title}
                </p>
                <p className="text-[#2C1A0E] font-medium text-sm mb-3">
                  {contact.value}
                </p>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#F5C842] font-semibold hover:text-[#e6b830] transition-colors flex items-center gap-1"
                >
                  {contact.linkLabel} →
                </a>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#2C1A0E] rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-5xl">💬</span>
              <h3 className="font-['Playfair_Display'] text-white text-3xl font-bold mt-4 mb-3">
                Peça pelo <br />
                <span className="text-[#F5C842]">WhatsApp!</span>
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Faça seu pedido diretamente pelo WhatsApp. Atendemos
                encomendas de bolos, pães especiais, cestas de café da manhã
                e muito mais!
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  "Resposta rápida e ágil",
                  "Encomendas personalizadas",
                  "Entrega e retirada no local",
                  "Pagamento facilitado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="text-[#F5C842]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white px-6 py-4 rounded-2xl text-center font-semibold hover:bg-[#20bd58] transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
