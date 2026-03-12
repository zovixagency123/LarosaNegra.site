import { motion } from "motion/react";
import { ALL_GALLERY_IMAGES } from "../constants/images";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_URL, FACEBOOK_URL } from "../constants/links";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-8"
            >
              <ArrowLeft size={16} />
              Voltar ao Início
            </Link>
            <SectionTitle title="A Nossa Coleção Completa" subtitle="Galeria La Rosa Negra" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ALL_GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group"
              >
                <div className="relative p-4 bg-black/40 border border-gold/20 rounded-sm shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Frame effect */}
                  <div className="absolute inset-0 border-[12px] border-white/5 pointer-events-none" />
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={img} 
                      alt={`Gallery Image ${idx}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 glass p-12 md:p-20 text-center gold-border relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1550966842-2849a2202768?auto=format&fit=crop&q=80&w=1200" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">Ficou com água na boca?</h3>
              <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                As imagens são apenas o começo. Venha descobrir o verdadeiro sabor da nossa cozinha num ambiente de requinte absoluto.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href={FACEBOOK_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-12 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300"
                >
                  Reservar Mesa Agora
                </a>
                <Link 
                  to="/#menu" 
                  className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explorar o Menu
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 bg-[#050505] text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gold/30 mb-4 flex items-center justify-center">
              <img 
                src={LOGO_URL} 
                alt="La Rosa Negra Logo" 
                className="w-full h-full object-cover scale-[2.2]"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl font-serif tracking-[0.3em] text-white">
              <span className="text-gold italic">La</span> Rosa Negra
            </h2>
          </div>
          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
            © 2026 La Rosa Negra. O prazer de comer bem.
          </p>
        </div>
      </footer>
    </div>
  );
}
