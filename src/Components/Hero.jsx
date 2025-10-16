import React, { useEffect, useState, memo } from "react";
import { ChevronRight } from "lucide-react";

const Hero = memo(() => {
  const images = [
    { src: "/Unienergia-59.jpg", alt: "Planta energética sostenible" },
    { src: "/Unienergia-62.jpg", alt: "Ingenieros trabajando en proyectos energéticos" },
    { src: "/Unienergia-28.jpg", alt: "Infraestructura energética moderna" },
    { src: "/Unienergia-26.jpg", alt: "Energía limpia y sostenible" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white"
      aria-label="Sección principal de Unienergía"
    >
      {/* Fondo degradado corporativo azul oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B3C] via-[#0B2C61] to-[#020617] z-7"></div>

      {/* Imágenes full screen con transición */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-90" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay difuminado para resaltar el texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B3C]/90 via-[#0B2C61]/60 to-transparent z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 text-left px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block text-[#AEE5AC] text-sm md:text-base uppercase tracking-widest mb-2">
            Bienvenido a
          </span>
          Empresa de Recursos Energéticos{" "}
          <span
            className="inline-block align-baseline bg-gradient-to-r from-[#4CA43C] via-[#4CA10C] to-[#4CA00C] bg-clip-text text-transparent"
          >
            UNIENERGÍA
          </span>

        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed font-bold">
          Energías eficientes, proyectos responsables y compromiso con el desarrollo sostenible del país.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="#servicios"
            className="px-6 py-3 bg-[#4CA23C] text-white font-semibold 
                       rounded-full shadow-lg hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 flex items-center gap-2"
          >
            Servicios <ChevronRight size={18} aria-hidden="true" />
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

      {/* Animación typing corregida */}
      <style>{`
        .typing-text {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #7B1E3C;
          white-space: nowrap;
          vertical-align: bottom;
          animation: typing 3.5s steps(35, end), blink 0.75s step-end infinite;
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
});

export default Hero;
