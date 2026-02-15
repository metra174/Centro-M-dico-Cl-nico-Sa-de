
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-2xl">
                Saúde <span className="text-emerald-500">Centro Médico</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Oferecendo excelência em saúde para a comunidade de Viana e Mulenvos. Atendimento humanizado e serviços especializados de alta qualidade.
            </p>
            <div className="flex gap-4">
              <span className="bg-slate-800 p-3 rounded-xl hover:bg-emerald-500 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
              <span className="bg-slate-800 p-3 rounded-xl hover:bg-emerald-500 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-500 uppercase tracking-widest">Atalhos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Marcar Consulta</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-500 uppercase tracking-widest">Informações</h4>
            <ul className="space-y-4 text-slate-400">
              <li>NIF: 5002763001</li>
              <li>Viana, Luanda - Angola</li>
              <li>chimucosaude@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Centro Médico Clínico Saúde. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
