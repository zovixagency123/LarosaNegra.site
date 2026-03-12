import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { ArrowLeft, Utensils, Star, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../constants/links";

export default function AboutPage() {
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
            <SectionTitle title="A Nossa História e Paixão" subtitle="Sobre La Rosa Negra" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-serif text-white mb-6 italic">Onde a Tradição Encontra a Elegância</h3>
              <p className="text-white/70 leading-relaxed mb-6 text-lg">
                Fundado com o sonho de trazer uma experiência gastronómica única para Alcains, o La Rosa Negra nasceu da paixão pela cozinha autêntica e pelo serviço de excelência.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                O nosso nome, inspirado na raridade e beleza da rosa negra, reflete o nosso compromisso em oferecer algo fora do comum. Cada detalhe da nossa decoração, cada nota da nossa música ambiente e, claro, cada sabor no seu prato, foi pensado para criar memórias duradouras.
              </p>
              <p className="text-white/70 leading-relaxed">
                Não somos apenas um restaurante; somos um destino para quem valoriza os momentos à mesa, a conversa entre amigos e a descoberta de novos paladares.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm gold-border">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
                  alt="Chef at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 border border-gold/30">
                <p className="text-gold font-serif text-2xl italic">"Cozinhar é uma forma de amar."</p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Utensils, title: "Cozinha de Autor", desc: "Pratos criados com criatividade e respeito pelas origens." },
              { icon: Star, title: "Qualidade Premium", desc: "Seleção rigorosa dos melhores ingredientes do mercado." },
              { icon: Heart, title: "Serviço Atencioso", desc: "Uma equipa dedicada a tornar a sua visita especial." },
              { icon: Award, title: "Ambiente Exclusivo", desc: "Decoração sofisticada para momentos inesquecíveis." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 text-center gold-border hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-serif text-white mb-4">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#080808] p-12 md:p-20 rounded-sm gold-border text-center">
            <h3 className="text-4xl font-serif text-white mb-8">A Nossa Missão</h3>
            <p className="text-white/70 max-w-3xl mx-auto text-xl italic leading-relaxed">
              "Proporcionar uma jornada gastronómica que desperte os sentidos, honre a herança portuguesa e celebre a inovação, sempre num ambiente de hospitalidade calorosa e requinte."
            </p>
          </div>
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
