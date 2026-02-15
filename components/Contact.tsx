
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 p-12 md:p-20 bg-blue-900 text-white">
            <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Estamos aqui para você</h2>
            <h3 className="text-4xl font-bold mb-8">Entre em contacto hoje mesmo</h3>
            <p className="text-blue-200 text-lg mb-12 leading-relaxed">
              Tire suas dúvidas, agende consultas ou solicite informações. Nossa equipe de recepção está pronta para atender você com agilidade.
            </p>
            
            <div className="space-y-8">
              <a href="https://wa.me/244950240554" className="flex items-center gap-6 group">
                <div className="bg-emerald-500 group-hover:bg-emerald-600 p-4 rounded-2xl transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
                </div>
                <div>
                  <span className="block text-blue-300 text-sm font-medium">WhatsApp</span>
                  <span className="text-2xl font-bold">+244 950 240 554</span>
                </div>
              </a>
              
              <a href="tel:+244921418585" className="flex items-center gap-6 group">
                <div className="bg-blue-600 group-hover:bg-blue-700 p-4 rounded-2xl transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span className="block text-blue-300 text-sm font-medium">Telefone</span>
                  <span className="text-2xl font-bold">+244 921 418 585</span>
                </div>
              </a>
              
              <a href="mailto:chimucosaude@gmail.com" className="flex items-center gap-6 group">
                <div className="bg-slate-700 group-hover:bg-slate-600 p-4 rounded-2xl transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
                </div>
                <div>
                  <span className="block text-blue-300 text-sm font-medium">Email</span>
                  <span className="text-xl font-bold">chimucosaude@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h4 className="text-3xl font-bold text-blue-900 mb-6">Agendar Consulta Agora</h4>
            <p className="text-slate-600 mb-10 text-lg">
              Clique no botão abaixo para falar diretamente com nosso atendimento via WhatsApp. É rápido, fácil e seguro.
            </p>
            
            <a 
              href="https://wa.me/244950240554"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-center py-6 rounded-3xl font-bold text-2xl transition-all shadow-xl hover:shadow-emerald-200 transform hover:scale-[1.02] flex items-center justify-center gap-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
              Agendar Pelo WhatsApp
            </a>
            
            <p className="text-slate-400 text-center mt-8 text-sm">
              Ao agendar, entraremos em contacto para confirmar o horário disponível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
