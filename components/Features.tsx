
import React from 'react';

const FeatureItem: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="flex gap-6 items-start">
    <div className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-blue-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">Excelência em Viana</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-8 leading-tight">Por que escolher o Centro Médico Clínico Saúde?</h3>
            <p className="text-slate-600 text-lg mb-12">
              Estamos comprometidos com a saúde da nossa comunidade, oferecendo um ambiente seguro e profissionais que realmente se importam com você.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <FeatureItem 
                title="Atendimento Humanizado"
                desc="Tratamos cada paciente como um membro da nossa família, com empatia e respeito."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>}
              />
              <FeatureItem 
                title="Profissionais Qualificados"
                desc="Nossa equipe de especialistas é altamente treinada e atualizada com o que há de mais moderno."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>}
              />
              <FeatureItem 
                title="Atendimento Rápido"
                desc="Processos ágeis para garantir que sua consulta e exames sejam realizados sem demora."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
              />
              <FeatureItem 
                title="Localização Acessível"
                desc="Localizados em Viana - Mulenvos, com fácil acesso para toda a região."
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clínica Moderna" 
              className="rounded-[40px] shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-blue-900 text-white p-10 rounded-[30px] shadow-2xl hidden md:block">
              <span className="text-5xl font-bold block mb-2">10+</span>
              <span className="text-blue-200 font-medium">Anos de experiência cuidando de pessoas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
