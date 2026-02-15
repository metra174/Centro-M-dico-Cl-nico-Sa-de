
import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">Nossa Localização</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-8 leading-tight">Onde nos encontrar em Viana</h3>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-900 text-white p-4 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Endereço Principal</h4>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Viana, Mulenvos, entrada do Millennium,<br />
                    junto à Igreja I.E.C.A
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-emerald-600 font-bold">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
              <span>Aberto Segunda a Sábado: 08:00 - 20:00 | Urgências 24h</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            {/* Real map embed would go here. Using a styled placeholder for visualization. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3688194380157!2d13.34442651478546!3d-8.845129993648434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3efd68f237f%3A0xe9f5e9f8f8f8f8f8!2sViana%2C%20Angola!5e0!3m2!1spt-BR!2sbr!4v1625500000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização do Centro Médico"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
