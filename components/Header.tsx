import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-4 px-6 md:px-12 flex justify-start z-50 relative">
      <div className="flex flex-col select-none">
        <h1 className="text-white text-sm md:text-base font-bold tracking-[0.3em] leading-tight uppercase">
          <span className="block">Infinito</span>
          <span className="block text-gray-400">Lima</span>
          <span className="block text-gray-500">Perú</span>
        </h1>
        <div className="w-8 h-[2px] bg-neonCyan mt-2"></div>
      </div>
    </header>
  );
};

export default Header;