
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
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className={`font-bold text-lg md:text-xl ${isScrolled ? 'text-blue-900' : 'text-blue-900'}`}>
            Saúde <span className="text-emerald-500">Centro Médico</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <a href="#inicio" className="hover:text-emerald-500 transition-colors">Início</a>
          <a href="#servicos" className="hover:text-emerald-500 transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-emerald-500 transition-colors">Sobre Nós</a>
          <a href="#contato" className="hover:text-emerald-500 transition-colors">Contacto</a>
        </div>

        <a 
          href="tel:+244921418585"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-200"
        >
          Ligar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
