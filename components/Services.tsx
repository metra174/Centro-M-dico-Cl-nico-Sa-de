
import React from 'react';

const ServiceCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; color: string }> = ({ title, items, icon, color }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
    <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-transform shadow-lg`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-slate-600">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">O que oferecemos</h2>
          <h3 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Serviços Médicos Completos para sua Família</h3>
          <p className="text-slate-600 text-lg">
            Combinamos tecnologia de ponta com um atendimento acolhedor para garantir o melhor diagnóstico e tratamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Atendimento"
            color="bg-red-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>}
            items={["Urgência", "Emergência"]}
          />
          <ServiceCard 
            title="Exames e Apoio"
            color="bg-blue-600"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>}
            items={["Laboratório de análises clínicas", "Farmácia Interna", "Vacinas", "Glicemia", "Medição de pressão arterial"]}
          />
          <ServiceCard 
            title="Consultas"
            color="bg-emerald-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            items={[
              "Planeamento Familiar", 
              "Consulta Pré-Natal", 
              "Clínica Geral", 
              "Pediatria", 
              "Ginecologia / Obstetrícia",
              "Psiquiatria",
              "Medicina Interna",
              "Consultas de Especialidade"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
