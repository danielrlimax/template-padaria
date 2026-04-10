const SCHEDULE = [
  { day: "Segunda-feira", hours: "06h às 20h", open: true },
  { day: "Terça-feira", hours: "06h às 20h", open: true },
  { day: "Quarta-feira", hours: "06h às 20h", open: true },
  { day: "Quinta-feira", hours: "06h às 20h", open: true },
  { day: "Sexta-feira", hours: "06h às 21h", open: true },
  { day: "Sábado", hours: "06h às 21h", open: true },
  { day: "Domingo", hours: "07h às 14h", open: true },
];

function isCurrentlyOpen() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();

  if (day === 0) return hour >= 7 && hour < 14; // Sunday
  if (day === 5 || day === 6) return hour >= 6 && hour < 21; // Fri & Sat
  return hour >= 6 && hour < 20; // Mon–Thu
}

const TODAY_INDEX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

export default function Hours() {
  const open = isCurrentlyOpen();

  return (
    <section id="horarios" className="py-24 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <p className="text-[#F5C842] text-sm font-semibold tracking-widest uppercase mb-3">
              Funcionamento
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#2C1A0E] font-bold mb-4 leading-tight">
              Estamos aqui <br />
              <span className="italic text-[#8B4513]">quase sempre!</span>
            </h2>
            <p className="text-[#2C1A0E]/60 text-base leading-relaxed mb-8">
              Pão fresquinho de segunda a domingo. Venha nos visitar e
              comece seu dia com aquele cheirinho inconfundível.
            </p>

            {/* Open/Closed Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
                open
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  open ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`}
              />
              {open ? "Aberto agora!" : "Fechado no momento"}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-[#2C1A0E]/10 shadow-md">
              <div className="bg-[#2C1A0E]/5 p-5 flex items-center gap-3 border-b border-[#2C1A0E]/10">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-[#2C1A0E] text-sm">
                    Rua das Flores, 123 — Centro
                  </p>
                  <p className="text-[#2C1A0E]/50 text-xs">
                    São Paulo, SP — CEP 01310-000
                  </p>
                </div>
              </div>
              <div className="w-full h-52 bg-gradient-to-br from-[#e8d5b0] to-[#c9a96e] flex items-center justify-center relative">
                {/* Fake map visual */}
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border border-[#2C1A0E]"
                      style={{
                        top: `${(i % 4) * 25}%`,
                        left: `${Math.floor(i / 4) * 50}%`,
                        width: "50%",
                        height: "25%",
                      }}
                    />
                  ))}
                </div>
                <div className="text-center z-10">
                  <div className="text-4xl mb-2">📍</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2C1A0E] text-white text-xs px-4 py-2 rounded-full hover:bg-[#F5C842] hover:text-[#2C1A0E] transition-colors"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Schedule */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#2C1A0E]/5 overflow-hidden">
            <div className="bg-[#2C1A0E] px-6 py-4">
              <h3 className="font-['Playfair_Display'] text-white font-bold text-xl">
                Horário de Funcionamento
              </h3>
            </div>
            <div className="divide-y divide-[#2C1A0E]/5">
              {SCHEDULE.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    index === TODAY_INDEX
                      ? "bg-[#F5C842]/10 border-l-4 border-l-[#F5C842]"
                      : "hover:bg-[#FDF8F0]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === TODAY_INDEX && (
                      <span className="text-xs bg-[#F5C842] text-[#2C1A0E] px-2 py-0.5 rounded-full font-bold">
                        Hoje
                      </span>
                    )}
                    <span
                      className={`text-sm font-medium ${
                        index === TODAY_INDEX
                          ? "text-[#2C1A0E] font-bold"
                          : "text-[#2C1A0E]/70"
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      index === TODAY_INDEX
                        ? "text-[#2C1A0E]"
                        : "text-[#8B4513]"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
