import React from 'react';
import Header from './components/Header.tsx';
import Calculator from './components/Calculator.tsx';
import Background from './components/Background.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col font-sans">
      <Background />
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 py-8 md:py-16 gap-12 lg:gap-20 z-10 max-w-7xl mx-auto w-full">
        
        {/* Left Side: Hero Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6 md:space-y-8">
          <div className="inline-block mx-auto lg:mx-0">
             <span className="bg-white/10 text-neonCyan text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/5 backdrop-blur-sm">
               Logística Blindada Lima Sur
             </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            EL SOCIO <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">INVISIBLE</span> DE LOS <br className="hidden md:block"/>
            EMPRENDEDORES.
          </h1>
          
          <p className="text-gray-400 text-sm md:text-lg font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Logística para marcas que no aceptan excusas. Operaciones de alta precisión, tiempos exactos y seguridad total.
          </p>

          <div className="hidden lg:flex items-center gap-8 pt-4">
             <div className="flex flex-col">
               <span className="text-3xl font-bold text-white">24/7</span>
               <span className="text-xs text-gray-500 uppercase tracking-wider">Soporte</span>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="flex flex-col">
               <span className="text-3xl font-bold text-white">100%</span>
               <span className="text-xs text-gray-500 uppercase tracking-wider">Seguro</span>
             </div>
          </div>
        </div>

        {/* Right Side: Calculator Tool */}
        <div className="w-full lg:w-1/2">
          <Calculator />
        </div>
      </main>

      {/* Trust Footer */}
      <footer className="w-full py-8 md:py-12 px-6 border-t border-white/5 z-10 bg-black/40 backdrop-blur-sm mt-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-500 text-xs md:text-sm tracking-wider font-medium uppercase">
          <div className="flex items-center gap-2">
            <span className="text-neonCyan">●</span> Delivery Gratis (Ver condiciones)
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neonCyan">●</span> Seguro de Carga Incluido
          </div>
          <div className="flex items-center gap-2">
            <span className="text-neonCyan">●</span> Rastreo VIP
          </div>
          <div className="w-full md:w-auto text-center md:text-right text-[10px] text-gray-700 mt-4 md:mt-0">
             © {new Date().getFullYear()} INFINITO LIMA
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;