import React, { useState, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const servicios = [
  {
    titulo: "Well Testing",
    descripcion:
      "Consiste en la adquisición y análisis de información de presión y producción del pozo (aperturas y cierres) a condiciones controladas según los objetivos planteados",
    imagen: "/Unienergia-72.jpg",
    alt: "WELL TESTING",
  },
  {
    titulo: "SLICKLINE",
    descripcion:
      "Servicio que consiste en instalar y recuperar herramientas y/o dispositivos en los pozos por medio de un cable de acero diseñado para soportar esfuerzos de tensión y torsión.",
    imagen: "/Unienergia-71.jpg",
    alt: "SLICKLINE",
  },
  {
    titulo: "SERVICIOS DE PIPE RECOVERY",
    descripcion:
      "Optimizamos la producción de crudo y gas mediante técnicas innovadoras y monitoreo en tiempo real para maximizar la eficiencia y reducir el impacto ambiental.",
    imagen: "/servicio-produccion.jpg",
    alt: "SERVICIOS DE PIPE RECOVERY",
  },
  {
    titulo: "MEDICIONES FISICAS",
    descripcion:
      "Metodología utilizada para optimizar el funcionamiento del sistema de extracción de un pozo.",
    imagen: "/servicio-transporte.jpg",
    alt: "MEDICIONES FISICAS",
  },
  {
    titulo: "PERFILAJE Y PUNZONAMIENTO",
    descripcion:
      "UNIPETRO ABC cuenta con una moderna unidad de Registro y Punzonamiento, montado sobre el chasis de un camión FREIGHTLINER modelo FL‐112.",
    imagen: "/servicio-mantenimiento.jpg",
    alt: "PERFILAJE Y PUNZONAMIENTO",
  },
];

const clientes = [
  { logo: "/logoUnna.png", nombre: "Unna Energía" },
  { logo: "/petrotal.png", nombre: "Petrotal" },
  { logo: "/petroperu.png", nombre: "Petroperú" },
  { logo: "/gtg.png", nombre: "GTG Energy" },
  { logo: "/OLIMPIC.jpg", nombre: "Olimpic" },
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
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-200"
      >
        SERVICIOS PETROLEROS
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
