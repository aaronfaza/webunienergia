import React, { useState, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicios = [
  {
    titulo: "Exploración",
    descripcion:
      "Realizamos estudios de exploración de hidrocarburos con tecnología avanzada y métodos sísmicos para identificar yacimientos con precisión y responsabilidad ambiental.",
    imagen: "/Unienergia-72.jpg",
    alt: "Exploración de hidrocarburos con tecnología sísmica",
  },
  {
    titulo: "Perforación",
    descripcion:
      "Ofrecemos servicios completos de perforación onshore y offshore, utilizando equipos de última generación y altos estándares de seguridad industrial.",
    imagen: "/Unienergia-71.jpg",
    alt: "Plataforma de perforación petrolera moderna",
  },
  {
    titulo: "Producción",
    descripcion:
      "Optimizamos la producción de crudo y gas mediante técnicas innovadoras y monitoreo en tiempo real para maximizar la eficiencia y reducir el impacto ambiental.",
    imagen: "/servicio-produccion.jpg",
    alt: "Producción de hidrocarburos con sistemas automatizados",
  },
  {
    titulo: "Transporte",
    descripcion:
      "Desarrollamos infraestructura logística para el transporte eficiente y seguro de hidrocarburos, garantizando calidad y cumplimiento normativo.",
    imagen: "/servicio-transporte.jpg",
    alt: "Transporte de hidrocarburos mediante ductos y camiones cisterna",
  },
  {
    titulo: "Mantenimiento",
    descripcion:
      "Brindamos mantenimiento preventivo y correctivo en instalaciones petroleras para garantizar la continuidad operacional y la seguridad del personal.",
    imagen: "/servicio-mantenimiento.jpg",
    alt: "Técnico realizando mantenimiento en planta petrolera",
  },
];

const clientes = [
  { logo: "/logoUnna.png", nombre: "Unna Energía" },
  { logo: "/petrotal.png", nombre: "Petrotal" },
  { logo: "/petroperu.png", nombre: "Petroperú" },
  { logo: "/gtg.png", nombre: "GTG Energy" },
];

const ServiciosPetroleros = memo(() => {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((prev) => (prev + 1) % servicios.length);
  const anterior = () => setIndex((prev) => (prev - 1 + servicios.length) % servicios.length);

  return (
    <section
      id="servicios"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-r from-[#0A1B3C] via-[#0B2C61] to-[#0A1B3C] 
                 text-white px-6 py-20"
      aria-labelledby="servicios-heading"
    >
      {/* Título principal */}
      <h2
        id="servicios-heading"
        className="text-4xl md:text-5xl font-extrabold text-center mb-6"
      >
        Servicios Petroleros
      </h2>

      {/* Descripción general */}
      <p className="max-w-3xl text-center text-gray-300 text-lg mb-12 leading-relaxed">
        En <strong>UNIENERGÍA</strong> brindamos soluciones integrales en el sector petrolero,
        garantizando eficiencia, seguridad y sostenibilidad en cada operación,
        desde la exploración hasta el mantenimiento.
      </p>

      {/* Tarjeta de servicio */}
      <article
        className="relative w-full max-w-3xl bg-[#111827]/90 rounded-2xl shadow-xl overflow-hidden text-center"
        aria-label={`Servicio de ${servicios[index].titulo}`}
      >
        <img
          src={servicios[index].imagen}
          alt={servicios[index].alt}
          loading="lazy"
          className="h-64 w-full object-cover"
        />

        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400 font-manrope">
            {servicios[index].titulo}
          </h3>
          <p className="text-gray-300 leading-relaxed font-openSans">
            {servicios[index].descripcion}
          </p>
        </div>

        {/* Controles */}
        <button
          onClick={anterior}
          aria-label="Servicio anterior"
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-700 rounded-full 
                     hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          onClick={siguiente}
          aria-label="Siguiente servicio"
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-700 rounded-full 
                     hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </article>

      {/* Indicadores */}
      <div className="flex gap-3 mt-8" aria-label="Indicadores de servicio">
        {servicios.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-blue-500" : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Ir al servicio ${servicios[i].titulo}`}
          />
        ))}
      </div>

      {/* Clientes */}
      <div className="mt-20 w-full text-center">
        <h3 className="text-2xl font-bold mb-8 text-gray-200 font-manrope">
          Nuestros Clientes
        </h3>

        <div className="flex flex-wrap justify-center gap-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {clientes.map((c, i) => (
            <img
              key={i}
              src={c.logo}
              alt={`Logo de ${c.nombre}`}
              loading="lazy"
              className="h-14 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default ServiciosPetroleros;
