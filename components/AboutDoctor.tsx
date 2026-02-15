import React from 'react';

const AboutDoctor: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-emerald-500 translate-x-6 translate-y-6 rounded-[50px] opacity-30 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
              <div className="relative z-10 overflow-hidden rounded-[50px] shadow-2xl aspect-[3/4] md:aspect-auto h-[450px]">
                <img 
                  src="https://i.imgur.com/yKS6Qca.png" 
                  alt="Equipa Médica Especialista" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Nossa Liderança Clínica</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Experiência e Compromisso com a Vida</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              No Centro Médico Chimúco Saúde, acreditamos que cada paciente merece um atendimento personalizado. Nossa equipa é composta por especialistas dedicados a oferecer diagnósticos precisos e tratamentos humanizados em Viana.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "Profissionais Qualificados",
                "Atendimento Humanizado",
                "Segurança e Higiene",
                "Foco no Bem-Estar",
                "Urgências 24h",
                "Equipamentos Modernos"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-500 p-1.5 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-semibold text-lg text-blue-50">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 italic text-emerald-300 text-xl font-medium">
              "Cuidar da sua saúde é a nossa maior missão. Estamos aqui para garantir que cada etapa do seu tratamento seja feita com respeito e excelência."
            </div>
          </div>
        </div>

        {/* Panfleto Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-white">Conheça Nossos Serviços Oficiais</h3>
            <p className="text-blue-200">Consulte nosso material informativo completo disponível na clínica.</p>
          </div>
          <div className="flex justify-center">
            <div className="relative group max-w-4xl w-full">
              <div className="absolute -inset-4 bg-emerald-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://i.imgur.com/tJr1wnp.png" 
                alt="Panfleto Centro Médico" 
                className="relative rounded-[2rem] shadow-2xl w-full border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;