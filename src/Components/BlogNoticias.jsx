import React, { useState } from "react";

const BlogNoticias = () => {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticias = [
    {
      id: 1,
      titulo: "MEIA",
      fecha: "9 de octubre de 2025",
      resumen:
        "Unienergia inicia un nuevo programa de transición energética, impulsando proyectos basados en recursos renovables y eficiencia industrial.",
      contenido:
        "Unienergia ha anunciado la puesta en marcha de nuevos proyectos enfocados en energía limpia, priorizando la innovación tecnológica y la sostenibilidad ambiental. Estos proyectos buscan optimizar los procesos energéticos y reducir la huella de carbono en las operaciones de la empresa, en línea con su compromiso de responsabilidad social y ambiental.",
      imagen: "/fumigacion.jpeg",
    },
    {
      id: 2,
      titulo: "WORKOVER",
      fecha: "1 de octubre de 2025",
      resumen:
        "La compañía amplía su presencia regional, fortaleciendo su red logística y alianzas estratégicas en varios países.",
      contenido:
        "Con la finalidad de fortalecer su liderazgo en el sector energético, Unienergia anuncia la expansión de sus operaciones hacia nuevos mercados latinoamericanos. Este crecimiento permitirá optimizar la cadena de suministro y consolidar su capacidad operativa, brindando soluciones energéticas más eficientes a nivel continental.",
      imagen: "/Unienergia-70.jpg",
    },
    {
      id: 3,
      titulo: "PERFORACION",
      fecha: "25 de septiembre de 2025",
      resumen:
        "Se implementan nuevas tecnologías para la optimización de procesos en exploración y perforación.",
      contenido:
        "Unienergia continúa su apuesta por la innovación, aplicando herramientas de inteligencia artificial y automatización en sus operaciones petroleras. Estas tecnologías mejoran la seguridad, reducen costos y aumentan la productividad, asegurando una gestión más eficiente y moderna en todos sus proyectos.",
      imagen: "/Unienergia-71.jpg",
    },
    {
      id: 4,
      titulo: "CAPACITACIONES",
      fecha: "25 de septiembre de 2025",
      resumen:
        "Se implementan nuevas tecnologías para la optimización de procesos en exploración y perforación.",
      contenido:
        "Unienergia continúa su apuesta por la innovación, aplicando herramientas de inteligencia artificial y automatización en sus operaciones petroleras. Estas tecnologías mejoran la seguridad, reducen costos y aumentan la productividad, asegurando una gestión más eficiente y moderna en todos sus proyectos.",
      imagen: "/capa.jpg",
    },
    {
      id: 5,
      titulo: "NUEVAS TECNOLOGIAS",
      fecha: "25 de septiembre de 2025",
      resumen:
        "Se implementan nuevas tecnologías para la optimización de procesos en exploración y perforación.",
      contenido:
        "Unienergia continúa su apuesta por la innovación, aplicando herramientas de inteligencia artificial y automatización en sus operaciones petroleras. Estas tecnologías mejoran la seguridad, reducen costos y aumentan la productividad, asegurando una gestión más eficiente y moderna en todos sus proyectos.",
      imagen: "/Unienergia-71.jpg",
    },
    
  ];

  const abrirModal = (noticia) => {
    setNoticiaSeleccionada(noticia);
    document.body.style.overflow = "hidden"; // Evita scroll de fondo
  };

  const cerrarModal = () => {
    setNoticiaSeleccionada(null);
    document.body.style.overflow = "auto"; // Restaura scroll
  };

  return (
    <section
      id="blog"
      className="relative py-20 bg-gradient-to-r from-[#0B2C61] via-[#0A1B3C] to-[#020617] text-white overflow-hidden mb-10"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-7xl md:text-6xl font-bold text-center mb-10 text-gray-300  leading-[1.15] pb-3">
          Blog de Noticias
        </h2>
         <p className="text-2xl text-gray-400 mb-6 text-center px-6 mx-auto mb-20">
              Apoyamos activamente a las 11 familias del Lote IX, mediante
              iniciativas que mejoran su calidad de vida y fortalecen el vínculo
              comunitario.
        </p>
        

        {/* Tarjetas estilo glass */}
        <div className="grid md:grid-cols-3 gap-10">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 
                         hover:scale-[1.03] hover:bg-white/15 transition-all duration-300"
            >
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{noticia.titulo}</h3>
              <p className="text-sm text-gray-300 mb-2">{noticia.fecha}</p>
              <p className="text-gray-200 mb-4">{noticia.resumen}</p>
              <button
                onClick={() => abrirModal(noticia)}
                className="px-4 py-2 rounded-lg font-semibold text-white 
                           bg-gradient-to-r from-[#4CA23C] to-[#2C7A1F] hover:scale-105 transition-transform"
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {noticiaSeleccionada && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/50"
          onClick={cerrarModal}
        >
          <div
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white 
                       max-w-3xl mx-4 rounded-2xl shadow-2xl p-8 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl"
            >
              ✕
            </button>
            <img
              src={noticiaSeleccionada.imagen}
              alt={noticiaSeleccionada.titulo}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-3xl font-bold mb-2 text-[#4CA23C]">
              {noticiaSeleccionada.titulo}
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {noticiaSeleccionada.fecha}
            </p>
            <p className="text-gray-200 leading-relaxed">
              {noticiaSeleccionada.contenido}
            </p>
          </div>
        </div>
      )}

      {/* Efecto de entrada */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default BlogNoticias;
