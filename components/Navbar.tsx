import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.imgur.com/me5WeYN.png" 
            alt="Logo Centro Médico Chimúco Saúde" 
            className="h-12 md:h-16 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 leading-tight text-sm md:text-base">Centro Médico</span>
            <span className="font-bold text-emerald-500 leading-tight text-sm md:text-base uppercase tracking-wider">Chimúco Saúde</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-700">
          <a href="#inicio" className="hover:text-emerald-500 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-emerald-500 transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-emerald-500 transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-emerald-500 transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="tel:+244921418585"
            className="hidden sm:block bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md"
          >
            Ligar
          </a>
          <a 
            href="https://wa.me/244950240554"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;