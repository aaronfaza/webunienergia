
import React, { useState, useEffect } from "react";

const operaciones = [
  {
    titulo: "Exploración y Producción",
    descripcion:
      "En el LOTE IX realizamos exploración y extracción responsable de hidrocarburos, con tecnología avanzada que garantiza eficiencia y sostenibilidad.",
    imagen: "Unienergia-x.jpg",
  },
  {
    titulo: "Infraestructura y Logística",
    descripcion:
      "Contamos con equipos, ductos y plantas que cumplen con los más altos estándares de seguridad para asegurar la continuidad de las operaciones.",
    imagen: "Unienergia-x.jpg",
  },
  {
    titulo: "Monitoreo Ambiental",
    descripcion:
      "Implementamos monitoreo permanente de aire, agua y suelos, asegurando el cumplimiento de normativas ambientales en todas las etapas del proceso.",
    imagen: "Unienergia-x.jpg",
  },
  {
    titulo: "Apoyo Comunitario",
    descripcion:
      "Colaboramos con las familias del entorno del Lote IX a través de programas sociales, educación ambiental y campañas de salud.",
    imagen: "Unienergia-x.jpg",
  },
];

export default function Operaciones() {
  const frases = [
    "Comprometidos con el desarrollo sostenible del Lote IX",
    "Eficiencia, tecnología y respeto ambiental",
  ];

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let txt = "";
    let isDeleting = false;
    let loopNum = 0;
    let timer;
    const tick = () => {
      const full = frases[loopNum % frases.length];
      if (!isDeleting) {
        txt = full.substring(0, txt.length + 1);
        setTyped(txt);
        if (txt === full) {
          isDeleting = true;
          timer = setTimeout(tick, 1500);
          return;
        }
      } else {
        txt = full.substring(0, Math.max(0, txt.length - 1));
        setTyped(txt);
        if (txt === "") {
          isDeleting = false;
          loopNum++;
        }
      }
      timer = setTimeout(tick, isDeleting ? 40 : 80);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  const [activo, setActivo] = useState(0);

  return (
    <section
      id="operaciones"
      className="relative py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 overflow-hidden"
    >
      <style>{`
        @keyframes blinkCaret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .type-caret {
          display: inline-block;
          width: 2px;
          background: linear-gradient(180deg,#0B2C61,#9D1F1F);
          margin-left: 6px;
          animation: blinkCaret 1s steps(1) infinite;
        }
        /* Ocultar barra de desplazamiento */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Encabezado */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B2C61]">
          OPERACIONES LOTE IX
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700 font-medium">
          <span>{typed}</span>
          <span className="type-caret" />
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          En UNIENERGÍA desarrollamos actividades integrales en el Lote IX,
          combinando ingeniería avanzada con responsabilidad ambiental y social.
          Cada operación refleja nuestro compromiso con la sostenibilidad, la
          seguridad y el bienestar de las comunidades locales.
        </p>
      </div>

      {/* Carrusel horizontal sin barra visible */}
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max">
          {operaciones.map((op, index) => (
            <div
              key={index}
              onClick={() => setActivo(index)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer shadow-lg flex-shrink-0 transition-all duration-700 ease-in-out ${
                activo === index
                  ? "w-[600px] h-[420px]"
                  : "w-[200px] h-[400px]"
              }`}
              style={{
                backgroundImage: `url(${op.imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`absolute inset-0 transition-all ${
                  activo === index ? "bg-black/40" : "bg-black/60"
                }`}
              ></div>

              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3
                  className={`font-bold transition-all ${
                    activo === index
                      ? "text-2xl mb-3"
                      : "text-lg rotate-[-90deg] origin-bottom-left"
                  }`}
                >
                  {op.titulo}
                </h3>

                {activo === index && (
                  <p className="text-sm md:text-base text-gray-200 max-w-lg leading-relaxed">
                    {op.descripcion}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

