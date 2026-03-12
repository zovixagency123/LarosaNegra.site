import { motion } from "motion/react";
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Star,
  Quote,
  ChevronRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import { GALLERY_IMAGES } from "../constants/images";
import { LOGO_URL, FACEBOOK_URL } from "../constants/links";
import { Link } from "react-router-dom";

const MENU_DATA = {
  entradas: [
    { name: "Carpaccio de Novilho", price: "18€", desc: "Lâminas finas de novilho, lascas de parmesão, rúcula e azeite de trufa." },
    { name: "Vieiras Grelhadas", price: "22€", desc: "Vieiras frescas com puré de couve-flor e crocante de presunto ibérico." },
    { name: "Burrata de Búfala", price: "16€", desc: "Tomate confitado, pesto de manjericão e pinhões torrados." },
  ],
  principais: [
    { name: "Lombo de Bacalhau", price: "28€", desc: "Bacalhau confitado em azeite, batata a murro e crosta de broa." },
    { name: "Risotto de Cogumelos Silvestres", price: "24€", desc: "Arroz arbóreo cremoso com mix de cogumelos e óleo de trufa negra." },
    { name: "Filete Mignon", price: "34€", desc: "Carne maturada, batata gratinada e molho de vinho do Porto." },
    { name: "Polvo à Lagareiro", price: "30€", desc: "Polvo assado, batata nova, espinafres salteados e muito azeite." },
  ],
  sobremesas: [
    { name: "Fondant de Chocolate", price: "10€", desc: "Chocolate belga 70%, gelado de baunilha e frutos vermelhos." },
    { name: "Panna Cotta de Lavanda", price: "9€", desc: "Creme suave de lavanda com mel silvestre e amêndoas." },
    { name: "Tábua de Queijos Nacionais", price: "14€", desc: "Seleção de queijos artesanais, compotas e tostas." },
  ],
  bebidas: [
    { name: "Vinho da Casa (Garrafa)", price: "22€", desc: "Seleção exclusiva das encostas do Douro." },
    { name: "Cocktail Rosa Negra", price: "12€", desc: "Gin premium, xarope de rosa, hibisco e tónica." },
    { name: "Água das Pedras", price: "4€", desc: "Água mineral natural gaseificada." },
  ]
};

const DAILY_MENU = {
  title: "Menu do Dia",
  price: "15.50€",
  includes: "Sopa + Prato + Bebida + Café",
  dishes: [
    { day: "Segunda", dish: "Arroz de Pato à Antiga" },
    { day: "Terça", dish: "Bacalhau com Natas e Espinafres" },
    { day: "Quarta", dish: "Cozido à Portuguesa" },
    { day: "Quinta", dish: "Feijoada à Transmontana" },
    { day: "Sexta", dish: "Filetes de Pescada com Arroz de Tomate" },
  ]
};

const TESTIMONIALS = [
  { name: "Ana Martins", role: "Crítica Gastronómica", text: "Uma experiência sensorial inesquecível. O ambiente é tão refinado quanto os pratos." },
  { name: "Ricardo Silva", role: "Cliente Frequente", text: "O melhor Filete Mignon que já provei em Portugal. O serviço é impecável." },
  { name: "Sofia Costa", role: "Turista", text: "Lugar perfeito para um jantar romântico. A decoração é deslumbrante." },
];

export default function HomePage() {
  const [activeMenu, setActiveMenu] = useState<keyof typeof MENU_DATA>("entradas");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Atmosphere" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold uppercase tracking-[0.5em] text-sm mb-4 block"
          >
            A Arte de Comer Bem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif mb-6 text-white"
          >
            La Rosa <span className="text-gold italic">Negra</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light italic leading-relaxed"
          >
            "Sabores autênticos, ingredientes frescos e a paixão por servir o melhor da nossa terra num ambiente de elegância absoluta."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col md:flex-row gap-6 justify-center"
          >
            <a href="#menu" className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300">
              Ver Menu
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300">
              Reservar Mesa
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Menu do Dia Section */}
      <section id="daily-menu" className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Sabores de Hoje" subtitle={DAILY_MENU.title} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 gold-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gold text-black px-6 py-2 font-bold text-xl">
                {DAILY_MENU.price}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">O Nosso Menu Executivo</h3>
              <p className="text-white/60 mb-8 italic">{DAILY_MENU.includes}</p>
              
              <div className="space-y-6">
                {DAILY_MENU.dishes.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                    <span className="text-gold font-serif text-lg w-24">{item.day}</span>
                    <span className="text-white/80 text-right flex-1">{item.dish}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative aspect-video lg:aspect-square rounded-sm overflow-hidden gold-border">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" 
                alt="Daily Special" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle title="A Paixão pelo Sabor" subtitle="A Nossa Cozinha" align="left" />
            <p className="text-white/70 leading-relaxed mb-6 text-lg">
              No La Rosa Negra, acreditamos que comer bem é um dos maiores prazeres da vida. O nosso foco é a honestidade de cada ingrediente, servido num ambiente que celebra a beleza e a sofisticação.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Trabalhamos diretamente com produtores locais para garantir que cada legume, cada peixe e cada corte de carne conte uma história de frescura e qualidade. A nossa cozinha é um laboratório de sabores onde a tradição é respeitada e o paladar é sempre o protagonista.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <Utensils size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-white">Ingredientes Frescos</h4>
                  <p className="text-xs text-white/40">Do Mercado para a Mesa</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-white">Sabor Autêntico</h4>
                  <p className="text-xs text-white/40">Receitas com Alma</p>
                </div>
              </div>
            </div>
            <Link 
              to="/sobre" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold text-gold uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Saber Mais Sobre Nós
              <ChevronRight size={14} />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm gold-border">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNt3ksUQt-nAogxKUl_R-hiM5TnDB6FHFo7ycgR=s680-w680-h510-rw" 
                alt="Fresh Ingredients" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 glass p-8 hidden lg:block">
              <p className="text-gold font-serif text-4xl mb-2">15+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Anos de Experiência Gastronómica</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Para Saborear" subtitle="O Nosso Menu" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {(Object.keys(MENU_DATA) as Array<keyof typeof MENU_DATA>).map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenu(category)}
                className={`text-sm uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${
                  activeMenu === category ? "border-gold text-gold" : "border-transparent text-white/40 hover:text-white"
                }`}
              >
                {category.replace("_", " ")}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeMenu}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-x-20 gap-y-10"
          >
            {MENU_DATA[activeMenu].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">{item.name}</h3>
                  <div className="flex-grow border-b border-white/10 mx-4 mb-1 border-dotted" />
                  <span className="text-gold font-medium">{item.price}</span>
                </div>
                <p className="text-white/40 text-sm italic">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle title="A Nossa Cozinha em Imagens" subtitle="Galeria" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative p-4 bg-black/40 border border-gold/20 rounded-sm shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Frame effect */}
                  <div className="absolute inset-0 border-[12px] border-white/5 pointer-events-none" />
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={img} 
                      alt={`Food Gallery ${idx}`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/galeria" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-300 group"
            >
              Ver Mais Imagens
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <p className="text-center mt-12 text-white/30 text-xs uppercase tracking-[0.3em]">Momentos La Rosa Negra</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <Quote size={400} className="text-gold" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle title="Experiências Reais" subtitle="Testemunhos" />
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="glass p-8 rounded-sm relative"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="text-white font-serif">{t.name}</h4>
                  <p className="text-xs text-gold/60 uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-24 px-6 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-8 md:p-16 rounded-sm text-center gold-border max-w-4xl mx-auto">
            <SectionTitle title="Venha Comer Bem" subtitle="Reservas" />
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              Para garantir a sua mesa no La Rosa Negra, as reservas são efetuadas exclusivamente através da nossa página oficial de Facebook. Clique no botão abaixo para ser redirecionado.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12 text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Clock className="text-gold" size={24} />
                <div>
                  <p className="text-sm font-medium">Horário de Funcionamento</p>
                  <p className="text-xs text-white/40">Terça - Domingo: 12:30 - 15:00 | 19:00 - 23:30</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Facebook className="text-gold" size={24} />
                <div>
                  <p className="text-sm font-medium">Reservas via Facebook</p>
                  <p className="text-xs text-white/40">Resposta rápida e personalizada</p>
                </div>
              </div>
            </div>

            <a 
              href={FACEBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300"
            >
              <Facebook size={20} />
              Reservar no Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="py-24 px-6 bg-dark-bg overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionTitle title="Onde nos Encontrar" subtitle="Localização" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] w-full md:w-1/2 gold-border rounded-sm overflow-hidden group shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.844781614396!2d-7.4586926!3d39.9113645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3d69956f4d36f7%3A0x89988029c0d38e0!2sEstr.%20de%20Santo%20Ant%C3%B3nio%2037%2C%206005-009%20Alcains!5e0!3m2!1spt-PT!2spt!4v1710197273000!5m2!1spt-PT!2spt" 
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-dark-bg/40" />
          </motion.div>
          <div className="mt-8 text-center max-w-md">
            <p className="text-white/50 text-sm italic">
              "Um refúgio de sabor no coração de Alcains. Esperamos por si para uma experiência inesquecível."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-6">Localização</h3>
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <MapPin className="text-gold shrink-0" size={20} />
              <p className="text-white/60 text-sm leading-relaxed">
                Estr. de Santo António NRº37<br />
                6005-009 Alcains, Portugal
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-6">Contactos</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Phone className="text-gold" size={20} />
                <p className="text-white/60 text-sm">+351 210 000 000</p>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="text-gold" size={20} />
                <p className="text-white/60 text-sm">info@larosanegra.pt</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-6">Siga-nos</h3>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
                <Instagram size={20} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-dark-bg text-center">
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
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-8">
            © 2026 La Rosa Negra. O prazer de comer bem.
          </p>
        </div>
      </footer>
    </div>
  );
}
