import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "/Unienergia-59.jpg",
    "/Unienergia-76.jpg",
    "/Unienergia-28.jpg",
    "/Unienergia-26.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Cambio automático de imagen cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="inicio"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen 
                 bg-gradient-to-r from-[#0B2C61] via-[#0A1B3C] to-[#020617] 
                 text-white overflow-hidden"
    >
      {/* CARRUSEL DE IMÁGENES */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center py-20 md:py-0">
        <div
          className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full overflow-hidden 
                     shadow-[0_0_40px_rgba(76,162,60,0.4)] border-8 border-white/30 transition-all duration-500"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Indicadores de navegación */}
        <div className="absolute bottom-8 flex gap-3">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                i === current ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* TEXTO PRINCIPAL */}
      <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 text-center md:text-left z-10">
        <h4 className="text-sm md:text-base uppercase tracking-widest font-medium text-[#AEE5AC] mb-3">
          Bienvenido a
        </h4>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Soluciones Energéticas <br />
          <span className="text-[#1E40AF]">
            <span className="typing-text">UNIENERGIA ABC</span>
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
          Energías eficientes, proyectos responsables y compromiso con el
          desarrollo sostenible del país.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#servicios"
            className="px-6 py-3 bg-[#4CA23C] text-white font-semibold 
                       rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            Servicios <ChevronRight size={18} />
          </a>
          <a
            href="#nosotros"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full 
                       hover:bg-white hover:text-[#0B2C61] transition-all duration-300"
          >
            Conoce más
          </a>
        </div>
      </div>

      {/* DEGRADADO DECORATIVO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C61]/80 via-[#0A1B3C]/60 to-transparent z-0"></div>

      {/* Estilos del texto con efecto de escritura */}
      <style>{`
        .typing-text {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #4CA23C;
          white-space: nowrap;
          animation: typing 4s steps(35, end), blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }
      `}</style>
    </section>
  );
}
