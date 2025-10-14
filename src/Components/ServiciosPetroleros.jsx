import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicios = [
  {
    titulo: "Exploración",
    descripcion:
      "Realizamos estudios de exploración de hidrocarburos utilizando tecnología avanzada y métodos sísmicos para identificar posibles yacimientos.",
    imagen: "Unienergia-72.jpg",
  },
  {
    titulo: "Perforación",
    descripcion:
      "Servicios completos de perforación onshore y offshore con equipos de última generación y altos estándares de seguridad.",
    imagen: "Unienergia-71.jpg",
  },
  {
    titulo: "Producción",
    descripcion:
      "Optimización de la producción de crudo y gas mediante técnicas innovadoras y sistemas de monitoreo en tiempo real.",
    imagen: "servicio-produccion.jpg",
  },
  {
    titulo: "Transporte",
    descripcion:
      "Infraestructura logística para el transporte eficiente y seguro de hidrocarburos en distintas fases de la cadena de valor.",
    imagen: "servicio-transporte.jpg",
  },
  {
    titulo: "Mantenimiento",
    descripcion:
      "Servicios de mantenimiento preventivo y correctivo en instalaciones petroleras para garantizar continuidad operacional.",
    imagen: "servicio-mantenimiento.jpg",
  },
];

const clientes = ["logoUnna.png", "petrotal.png", "petroperu.png", "gtg.png"];

export default function ServiciosPetroleros() {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((prev) => (prev + 1) % servicios.length);
  const anterior = () => setIndex((prev) => (prev - 1 + servicios.length) % servicios.length);

  return (
    <section
      id="servicios"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-r from-[#0A1B3C] via-[#0B2C61] to-[#0A1B3C] 
                 text-white px-6 py-20"
    >
      {/* Título principal */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
        SERVICIOS PETROLEROS
      </h2>

      {/* Párrafo descriptivo general */}
      <p className="max-w-3xl text-center text-gray-300 text-lg mb-12 leading-relaxed">
        En UNIENERGÍA ofrecemos soluciones integrales en el sector petrolero,
        garantizando eficiencia, seguridad y sostenibilidad en cada una de
        nuestras operaciones, desde la exploración hasta el mantenimiento.
      </p>

      {/* Tarjeta principal */}
      <div className="relative w-full max-w-3xl bg-[#111827]/90 rounded-2xl shadow-xl overflow-hidden text-center">
        {/* Imagen arriba */}
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicios[index].imagen})` }}
        ></div>

        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400 font-manrope">
            {servicios[index].titulo}
          </h3>
          <p className="text-gray-300 leading-relaxed font-openSans">
            {servicios[index].descripcion}
          </p>
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={anterior}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-700 rounded-full 
                     hover:bg-blue-600 transition-all duration-300"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-700 rounded-full 
                     hover:bg-blue-600 transition-all duration-300"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-3 mt-8">
        {servicios.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Nuestros Clientes */}
      <div className="mt-20 w-full text-center">
        <h3 className="text-2xl font-bold mb-8 text-gray-200 font-manrope">
          Nuestros Clientes
        </h3>

        <div className="flex flex-wrap justify-center gap-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {clientes.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Cliente ${i + 1}`}
              className="h-14 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
