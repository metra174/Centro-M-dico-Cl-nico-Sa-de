import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Esferas de fundo para efeito de transparência e profundidade */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Viana - Mulenvos
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Centro Médico <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-500">Chimúco Saúde</span>
          </h1>
          <p className="text-xl text-blue-800 font-medium mb-6">
            Excelência médica e cuidado humanizado.
          </p>
          <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
            Oferecemos uma estrutura moderna e completa para cuidar da sua saúde e da sua família no coração de Viana. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://wa.me/244950240554" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-200/50 transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
              Agendar Consulta
            </a>
            <a 
              href="tel:+244921418585" 
              className="bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-900 hover:text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-sm"
            >
              📞 Ligar Agora
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center md:justify-end">
          <div className="relative group">
            {/* Moldura elegante e minimalista */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-[3rem] -rotate-2 scale-105 opacity-40 group-hover:rotate-0 transition-transform duration-500"></div>
            
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-white border-4 border-white max-w-[320px] md:max-w-[400px] h-[400px] md:h-[500px]">
              <img 
                src="https://i.imgur.com/yKS6Qca.png" 
                alt="Doutora Responsável" 
                className="w-full h-full object-cover object-top scale-110" 
                /* object-top e scale-110 garantem que foquemos no rosto e cortemos as pernas */
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compromisso</p>
                  <p className="text-sm font-bold text-blue-900">Atendimento 100% Seguro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;