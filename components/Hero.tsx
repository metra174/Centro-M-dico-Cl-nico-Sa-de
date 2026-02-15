
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-bl-[100px] md:rounded-bl-[200px]"></div>
      <div className="absolute top-20 right-20 -z-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-blue-900 font-bold tracking-wider uppercase text-sm mb-4">Bem-vindo ao</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
            Centro Médico Clínico <span className="text-emerald-500">Saúde</span>
          </h1>
          <p className="text-xl text-emerald-600 font-medium mb-4 italic">Onde o cuidado encontra o bem-estar</p>
          <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed">
            Atendimento médico humanizado, com serviços completos para você e sua família, localizados no coração de Viana – Mulenvos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://wa.me/244950240554" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-emerald-200 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
              Agendar WhatsApp
            </a>
            <a 
              href="tel:+244921418585" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Ligar Agora
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center md:justify-end">
          <div className="relative z-10 w-full max-w-md">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500 rounded-2xl -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
              alt="Doutora Especialista" 
              className="rounded-3xl shadow-2xl border-8 border-white object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-bold text-blue-900">Atendimento Ativo</span>
              </div>
              <p className="text-slate-500 text-sm">Disponível para urgências 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
