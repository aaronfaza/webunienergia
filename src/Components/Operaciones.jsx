import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const operaciones = [
  {
    titulo: "Exploración y Producción",
    descripcion:
      "En el Lote IX realizamos exploración y extracción responsable de hidrocarburos, utilizando tecnología avanzada que garantiza eficiencia operativa, seguridad y sostenibilidad ambiental.",
    imagen: "Unienergia-6.jpg",
    alt: "Operaciones de exploración y producción de hidrocarburos en el Lote IX de Unienergía Perú",
  },
  {
    titulo: "Infraestructura y Logística",
    descripcion:
      "Contamos con ductos, plantas y equipos de alta tecnología que cumplen los más altos estándares internacionales de seguridad, asegurando la continuidad y eficiencia de nuestras operaciones energéticas.",
    imagen: "Unienergia-32.jpg",
    alt: "Infraestructura energética moderna y logística de transporte de Unienergía",
  },
  {
    titulo: "Monitoreo Ambiental",
    descripcion:
      "Implementamos un monitoreo continuo de aire, agua y suelos en todas las etapas del proceso, garantizando el cumplimiento de las normativas ambientales y el respeto por el entorno natural.",
    imagen: "Unienergia-16.jpg",
    alt: "Monitoreo ambiental de aire y agua en operaciones del Lote IX Unienergía Perú",
  },
  {
    titulo: "Apoyo Comunitario",
    descripcion:
      "Desarrollamos programas sociales y educativos en comunidades cercanas al Lote IX, fortaleciendo la educación ambiental, la salud y el bienestar social.",
    imagen: "Unienergia-49.jpg",
    alt: "Colaboración comunitaria y apoyo social de Unienergía en el Lote IX",
  },
];

export default function Operaciones() {
  const frases = [
    "Comprometidos con el desarrollo sostenible del Lote IX",
    "Eficiencia, tecnología y respeto ambiental",
  ];

  const [typed, setTyped] = useState("");
  const [activo, setActivo] = useState(0);

  // Efecto de escritura
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

  return (
    <section
      id="operaciones"
      className="relative py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 overflow-hidden"
      aria-labelledby="titulo-operaciones"
    >
    

        <Helmet>
          <title>Operaciones Lote IX | UNIENERGÍA Perú</title>
          <meta name="description" content="Conoce las operaciones de UNIENERGÍA en el Lote IX: exploración y producción responsable de hidrocarburos, infraestructura segura, monitoreo ambiental y apoyo comunitario en Perú." />
          <meta name="keywords" content="Unienergía, Lote IX, hidrocarburos, energía sostenible, exploración petrolera, monitoreo ambiental, infraestructura energética, Perú" />
        </Helmet>
     

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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Encabezado */}
      <header className="text-center mb-14 px-6">
        <h2
          id="titulo-operaciones"
          className="text-4xl md:text-5xl font-extrabold text-[#0B2C61]"
        >
          Operaciones en el Lote IX
        </h2>

        <p
          className="mt-4 text-lg max-w-3xl mx-auto text-gray-700 font-medium"
          aria-label="Frase principal animada"
        >
          <span>{typed}</span>
          <span className="type-caret" />
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
          En <strong>UNIENERGÍA</strong> desarrollamos operaciones integrales en el{" "}
          <strong>Lote IX</strong>, combinando innovación tecnológica,
          sostenibilidad ambiental y compromiso social. Cada actividad refleja
          nuestra misión de contribuir al desarrollo energético responsable del
          Perú.
        </p>
      </header>

      {/* Carrusel horizontal sin barra visible */}
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div
          className="flex gap-4 w-max"
          role="list"
          aria-label="Galería de operaciones energéticas"
        >
          {operaciones.map((op, index) => (
            <article
              key={index}
              onClick={() => setActivo(index)}
              tabIndex={0}
              role="button"
              aria-pressed={activo === index}
              aria-label={`Ver detalles de ${op.titulo}`}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
