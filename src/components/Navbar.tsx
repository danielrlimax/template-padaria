import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2C1A0E]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <span className="text-3xl">🥐</span>
          <div>
            <p className="font-['Playfair_Display'] text-[#F5C842] text-xl font-bold leading-tight">
              Padaria
            </p>
            <p className="text-[#F5C842]/70 text-xs tracking-widest uppercase">
              Artesanal
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#F5C842] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-[#F5C842] text-[#2C1A0E] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#e6b830] transition-all duration-200 shadow-md"
          >
            Pedir Agora
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Abrir menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-[#F5C842] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F5C842] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F5C842] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#2C1A0E]/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 border-t border-[#F5C842]/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#F5C842] text-base font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-[#F5C842] text-[#2C1A0E] px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-[#e6b830] transition-all"
          >
            Pedir Agora
          </a>
        </nav>
      </div>
    </header>
  );
}
