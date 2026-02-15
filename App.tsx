
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import AboutDoctor from './components/AboutDoctor';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <AboutDoctor />
        <Location />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/244950240554" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Agendar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
      </a>
    </div>
  );
};

export default App;
