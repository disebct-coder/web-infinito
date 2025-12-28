import React, { useState, useEffect } from 'react';
import { ServiceType, SERVICES } from '../types';

const Calculator: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceType>(ServiceType.EXPRESS);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate price whenever distance or service changes
  useEffect(() => {
    const km = parseFloat(distance);
    if (!isNaN(km) && km > 0) {
      const rate = SERVICES[selectedService].ratePerKm;
      setTotalPrice(km * rate);
    } else {
      setTotalPrice(0);
    }
  }, [distance, selectedService]);

  const handleWhatsAppClick = () => {
    const km = parseFloat(distance);
    if (!km || km <= 0) {
      alert("Por favor ingresa una distancia válida.");
      return;
    }

    const priceFormatted = totalPrice.toFixed(2);
    const serviceName = SERVICES[selectedService].name;
    
    // Dynamic message
    const message = `Hola Infinito, quiero ser socio. Cotización: Servicio ${serviceName.toUpperCase()} para ${km} km (Aprox S/ ${priceFormatted}). Mi carga está asegurada.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/51985922500?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto relative group">
      {/* Glow Effect behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neonCyan/20 to-blue-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-xl shadow-2xl overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neonCyan/10 to-transparent pointer-events-none"></div>

        <h3 className="text-xl font-light text-white mb-6 tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse-slow"></span>
          COTIZADOR
        </h3>

        {/* Distance Input */}
        <div className="mb-6">
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-medium">
            Distancia (KM)
          </label>
          <div className="relative">
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="0.0"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neonCyan/50 focus:ring-1 focus:ring-neonCyan/50 transition-all font-mono text-lg"
              min="0"
              step="0.1"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">KM</span>
          </div>
        </div>

        {/* Service Selection */}
        <div className="mb-8">
          <label className="block text-gray-400 text-xs uppercase tracking-widest mb-3 font-medium">
            Tipo de Servicio
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(Object.values(SERVICES) as Array<typeof SERVICES[ServiceType]>).map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer rounded-lg p-3 border transition-all duration-300 relative overflow-hidden ${
                  selectedService === service.id
                    ? 'bg-neonCyan/10 border-neonCyan/60 text-white'
                    : 'bg-black/20 border-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                <div className="relative z-10">
                  <div className="font-bold text-sm tracking-wide">{service.name}</div>
                  <div className="text-[10px] opacity-70 mt-1">{service.description}</div>
                  <div className="mt-2 text-xs font-mono text-neonCyan">S/ {service.ratePerKm.toFixed(2)} /km</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className="flex flex-col items-center justify-center mb-8 py-4 border-t border-white/5 border-b">
          <span className="text-gray-500 text-xs uppercase tracking-widest mb-1">Estimado</span>
          <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter flex items-baseline gap-1">
            <span className="text-xl text-gray-400 font-light">S/</span>
            {totalPrice > 0 ? totalPrice.toFixed(2) : '0.00'}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-neonCyan text-deepBlack font-black uppercase tracking-widest py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group-hover:bg-white"
        >
          Confirmar Envío Ahora
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Calculator;