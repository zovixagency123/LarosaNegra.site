import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_URL, FACEBOOK_URL } from "../constants/links";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: isHomePage ? "#home" : "/#home", type: "hash" },
    { name: "Menu do Dia", href: isHomePage ? "#daily-menu" : "/#daily-menu", type: "hash" },
    { name: "Sobre", href: "/sobre", type: "link" },
    { name: "Menu", href: isHomePage ? "#menu" : "/#menu", type: "hash" },
    { name: "Galeria", href: "/galeria", type: "link" },
    { name: "Localização", href: isHomePage ? "#location" : "/#location", type: "hash" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-dark-bg/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-colors flex items-center justify-center">
            <img 
              src={LOGO_URL} 
              alt="La Rosa Negra Logo" 
              className="w-full h-full object-cover scale-[2.2]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-2xl font-serif tracking-widest text-white">
            <span className="text-gold italic">La</span> Rosa Negra
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          <a 
            href={FACEBOOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.type === "link" ? (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-white/80 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-white/80 hover:text-gold"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-gold text-black text-center text-sm uppercase tracking-widest font-bold"
              >
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
