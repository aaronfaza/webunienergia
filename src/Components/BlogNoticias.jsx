import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BlogNoticias = () => {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticias = [
    {
      id: 1,
      titulo: "MEIA: Transición Energética en UNIENERGÍA",
      fecha: "9 de octubre de 2025",
      resumen:
        "UNIENERGÍA inicia un nuevo programa de transición energética basado en recursos renovables y eficiencia industrial.",
      contenido:
        "UNIENERGÍA ha anunciado nuevos proyectos enfocados en energía limpia, priorizando innovación tecnológica y sostenibilidad ambiental. Estos buscan reducir la huella de carbono y optimizar los procesos energéticos, reafirmando su compromiso con la responsabilidad social y ambiental.",
      imagen: "/fumigacion.jpeg",
    },
    {
      id: 2,
      titulo: "WORKOVER: Expansión Regional",
      fecha: "1 de octubre de 2025",
      resumen:
        "La compañía amplía su presencia regional, fortaleciendo su red logística y alianzas estratégicas en varios países.",
      contenido:
        "UNIENERGÍA expande sus operaciones a nuevos mercados latinoamericanos, consolidando su liderazgo en el sector energético. Este crecimiento optimiza la cadena de suministro y fortalece la capacidad operativa de la empresa.",
      imagen: "/Unienergia-70.jpg",
    },
    {
      id: 3,
      titulo: "PERFORACIÓN Inteligente",
      fecha: "25 de septiembre de 2025",
      resumen:
        "UNIENERGÍA aplica inteligencia artificial para optimizar procesos de exploración y perforación.",
      contenido:
        "La empresa implementa IA y automatización para mejorar seguridad, reducir costos y aumentar productividad, garantizando operaciones más sostenibles e innovadoras.",
      imagen: "/Unienergia-71.jpg",
    },
    {
      id: 4,
      titulo: "Capacitaciones Técnicas",
      fecha: "20 de septiembre de 2025",
      resumen:
        "UNIENERGÍA impulsa la formación continua del personal en seguridad, innovación y eficiencia energética.",
      contenido:
        "El programa de capacitación busca fortalecer las competencias técnicas de los trabajadores, fomentando una cultura de mejora continua en toda la organización.",
      imagen: "/capa.jpg",
    },
     {
      id: 4,
      titulo: "Capacitaciones Técnicas",
      fecha: "20 de septiembre de 2025",
      resumen:
        "UNIENERGÍA impulsa la formación continua del personal en seguridad, innovación y eficiencia energética.",
      contenido:
        "El programa de capacitación busca fortalecer las competencias técnicas de los trabajadores, fomentando una cultura de mejora continua en toda la organización.",
      imagen: "/capa.jpg",
    },
     {
      id: 4,
      titulo: "Capacitaciones Técnicas",
      fecha: "20 de septiembre de 2025",
      resumen:
        "UNIENERGÍA impulsa la formación continua del personal en seguridad, innovación y eficiencia energética.",
      contenido:
        "El programa de capacitación busca fortalecer las competencias técnicas de los trabajadores, fomentando una cultura de mejora continua en toda la organización.",
      imagen: "/capa.jpg",
    },
  ];

  const abrirModal = (noticia) => {
    setNoticiaSeleccionada(noticia);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setNoticiaSeleccionada(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="blog"
      className="relative py-20 bg-gradient-to-r from-[#0B2C61] via-[#0A1B3C] to-[#020617] text-white overflow-hidden mb-10"
    >
     

      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-10 text-gray-100 leading-[1.15] pb-3">
            Blog de Noticias
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce las últimas novedades, proyectos e iniciativas de UNIENERGÍA
            en el sector energético, social y ambiental.
          </p>
        </header>

        {/* Listado de Noticias */}
        <main className="grid md:grid-cols-3 gap-10" aria-label="Noticias recientes">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 
                         hover:scale-[1.03] hover:bg-white/15 transition-all duration-300"
            >
              <figure>
                <img
                  src={noticia.imagen}
                  alt={`Imagen de ${noticia.titulo}`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
              </figure>
              <h2 className="text-2xl font-bold mb-2">{noticia.titulo}</h2>
              <time className="text-sm text-gray-300 block mb-2">
                {noticia.fecha}
              </time>
              <p className="text-gray-200 mb-4">{noticia.resumen}</p>
              <button
                onClick={() => abrirModal(noticia)}
                className="px-4 py-2 rounded-lg font-semibold text-white 
                           bg-gradient-to-r from-[#4CA23C] to-[#2C7A1F] hover:scale-105 transition-transform"
              >
                Leer más
              </button>
            </article>
          ))}
        </main>
      </div>

      {/* Modal Detalle Noticia */}
      {noticiaSeleccionada && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/50"
          onClick={cerrarModal}
        >
          <article
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white 
                       max-w-3xl mx-4 rounded-2xl shadow-2xl p-8 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl"
              aria-label="Cerrar noticia"
            >
              ✕
            </button>
            <figure>
              <img
                src={noticiaSeleccionada.imagen}
                alt={noticiaSeleccionada.titulo}
                className="w-full h-64 object-cover rounded-xl mb-4"
                loading="lazy"
              />
            </figure>
            <h2 className="text-3xl font-bold mb-2 text-[#4CA23C]">
              {noticiaSeleccionada.titulo}
            </h2>
            <time className="text-sm text-gray-300 block mb-4">
              {noticiaSeleccionada.fecha}
            </time>
            <p className="text-gray-200 leading-relaxed">
              {noticiaSeleccionada.contenido}
            </p>
          </article>
        </div>
      )}

      {/* Animación */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default BlogNoticias;
