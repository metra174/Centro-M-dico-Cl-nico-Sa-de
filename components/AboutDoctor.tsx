
import React from 'react';

const AboutDoctor: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-emerald-500 translate-x-4 translate-y-4 rounded-[40px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Nossa Diretora Clínica" 
                className="rounded-[40px] shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Nossa Especialista</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Compromisso com a sua saúde e bem-estar</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-2xl">
              Nossa equipe é liderada por profissionais que acreditam que a medicina vai além do diagnóstico. É sobre entender a história de cada paciente e oferecer um cuidado humanizado e contínuo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium text-lg">Experiência comprovada</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium text-lg">Atendimento acolhedor</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium text-lg">Segurança do paciente</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium text-lg">Foco em prevenção</span>
              </div>
            </div>
            
            <p className="text-emerald-400 font-bold italic text-xl border-l-4 border-emerald-500 pl-6 py-2">
              "Cada paciente é único, e nossa missão é garantir que você se sinta cuidado em cada etapa da sua jornada de saúde."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
