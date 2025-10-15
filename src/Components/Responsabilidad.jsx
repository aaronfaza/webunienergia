import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Leaf, Wind, Users, Heart } from "lucide-react";

const actividades = {
  ambiental: [
    {
      titulo: "Monitoreo de aire",
      descripcion:
        "Controlamos la calidad del aire con equipos especializados que garantizan el cumplimiento de las normas ambientales.",
      imagen: "/aire.jpg",
    },
    {
      titulo: "Revegetación",
      descripcion:
        "Promovemos la siembra de especies nativas para recuperar zonas afectadas y proteger la biodiversidad local.",
      imagen: "/revegetacion.jpg",
    },
    {
      titulo: "Cuidado de suelos",
      descripcion:
        "Aplicamos prácticas de conservación para evitar la erosión y mantener la fertilidad del suelo.",
      imagen: "/suelos.jpg",
    },
  ],
  social: [
    {
      titulo: "Entrega de víveres",
      descripcion:
        "Realizamos campañas de entrega de alimentos y productos básicos a las familias del Lote IX.",
      imagen: "/apoyo.jpeg",
    },
    {
      titulo: "Atención médica",
      descripcion:
        "Organizamos jornadas de salud y atención médica gratuita para las comunidades cercanas.",
      imagen: "/medica.jpeg",
    },
    {
      titulo: "Fumigación preventiva",
      descripcion:
        "Ejecutamos fumigaciones preventivas para controlar plagas y enfermedades vectoriales.",
      imagen: "/fumigacion.jpeg",
    },
  ],
};

export default function Responsabilidad() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  const cerrarModal = () => setModal(null);

  return (
    <section
      id="responsabilidad"
      className="relative py-28 bg-[#F9FAFB] text-gray-900 overflow-hidden"
    >
      {/* SEO TAGS */}
      <Helmet>
        <title>Responsabilidad Social y Ambiental | UNIENERGÍA</title>
        <meta
          name="description"
          content="En UNIENERGÍA reafirmamos nuestro compromiso con la sostenibilidad, el cuidado ambiental y el bienestar de las familias del Lote IX."
        />
        <meta
          name="keywords"
          content="energía, sostenibilidad, responsabilidad social, medio ambiente, petróleo, UNIENERGÍA"
        />
        <meta property="og:title" content="Responsabilidad Social y Ambiental | UNIENERGÍA" />
        <meta
          property="og:description"
          content="Comprometidos con la protección ambiental y el desarrollo social sostenible en el Lote IX."
        />
        <meta property="og:image" content="/aire.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unienergia.pe/responsabilidad" />
      </Helmet>

      <div
        className={`max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-300 ${
          modal ? "blur-md" : ""
        }`}
      >
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0075A0] to-[#0033A0] leading-[1.15] pb-3">
            Responsabilidad Social y Ambiental
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En UNIENERGÍA reafirmamos nuestro compromiso con la sostenibilidad,
            velando por el medio ambiente y el bienestar de las familias del Lote IX.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Ambiental */}
          <article
            aria-labelledby="responsabilidad-ambiental"
            className="p-10 bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2
              id="responsabilidad-ambiental"
              className="text-2xl font-bold text-[#4CA23C] mb-6 flex items-center gap-3"
            >
              <Leaf className="text-[#4CA23C]" size={28} />
              Responsabilidad Ambiental
            </h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de protección ambiental que equilibran la
              actividad petrolera con la conservación de los ecosistemas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {actividades.ambiental.map((a, i) => (
                <div
                  key={i}
                  onClick={() => setModal(a)}
                  className="cursor-pointer flex items-center gap-3 p-4 bg-[#E8F5E9] rounded-xl border border-[#4CA23C]/20 hover:scale-105 hover:bg-[#D9F2DC] transition-all duration-300 shadow-sm"
                >
                  <Wind className="text-[#4CA23C]" size={26} />
                  <p className="font-medium text-gray-800">{a.titulo}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Social */}
          <article
            aria-labelledby="responsabilidad-social"
            className="p-10 bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h2
              id="responsabilidad-social"
              className="text-2xl font-bold text-[#0033A0] mb-6 flex items-center gap-3"
            >
              <Users size={28} className="text-[#0033A0]" />
              Responsabilidad Social
            </h2>
            <p className="text-gray-700 mb-6">
              Apoyamos activamente a las familias del Lote IX con programas de salud,
              educación y bienestar comunitario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {actividades.social.map((a, i) => (
                <div
                  key={i}
                  onClick={() => setModal(a)}
                  className="cursor-pointer flex items-center gap-3 p-4 bg-[#E3F2FD] rounded-xl border border-[#0033A0]/20 hover:scale-105 hover:bg-[#D6EAFB] transition-all duration-300 shadow-sm"
                >
                  <Heart className="text-[#0033A0]" size={26} />
                  <p className="font-medium text-gray-800">{a.titulo}</p>
                </div>
              ))}
            </div>
          </article>
        </main>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
          onClick={cerrarModal}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 relative animate-fadeIn text-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={cerrarModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <img
              src={modal.imagen}
              alt={modal.titulo}
              className="w-full h-56 object-cover rounded-2xl mb-6"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold text-[#4CA23C] mb-4">
              {modal.titulo}
            </h3>
            <p className="text-gray-700">{modal.descripcion}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
