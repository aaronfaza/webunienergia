import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const images = [
    "/Unienergia-32.jpg",
    "/Unienergia-32.jpg",
    "/Unienergia-75.jpg",
    "/Unienergia-68.jpg",
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
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/10">
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
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C61]/90 via-[#0A1B3C]/70 to-transparent z-0"></div>

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
