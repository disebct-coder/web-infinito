import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      {/* Dark Map Image */}
      <img 
        src="https://images.unsplash.com/photo-1496309732348-3627f3f72f67?q=80&w=2000&auto=format&fit=crop" 
        alt="Map Texture"
        className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
      />
      
      {/* Heavy Overlay */}
      <div className="absolute inset-0 bg-[#050505] opacity-[0.92]"></div>
      
      {/* Optional Noise Texture for gritty feel (using CSS gradient to simulate) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </div>
  );
};

export default Background;