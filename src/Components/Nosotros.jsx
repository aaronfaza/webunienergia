import React from "react";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative py-24 bg-gray-100 text-gray-900 overflow-hidden"
      aria-labelledby="titulo-nosotros"
    >
      {/* 
        SEO SUGERIDO (para Next.js o React Helmet):
        <Helmet>
          <title>Sobre Nosotros | UNIENERGÍA Perú</title>
          <meta name="description" content="Conoce a UNIENERGÍA, empresa de la Universidad Nacional de Ingeniería dedicada al desarrollo de proyectos energéticos sostenibles e innovadores en Perú." />
          <meta name="keywords" content="energía sostenible, energía renovable, unienergia, universidad nacional de ingeniería, energía solar, energía eólica, innovación energética, Perú" />
        </Helmet>
      */}

      {/* Líneas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-20 top-0 h-64 w-px bg-gradient-to-b from-[#0B2C61] to-transparent opacity-40" />
        <div className="absolute right-24 top-10 h-72 w-px bg-gradient-to-b from-[#9D1F1F] to-transparent opacity-40" />
      </div>

      {/* Contenedor principal */}
      <div className="relative max-w-[1600px] mx-auto px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Texto principal */}
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <header>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9D1F1F] shadow-lg" />
              <span className="text-sm text-gray-600 uppercase tracking-wide">
                Sobre nosotros
              </span>
            </div>

            <h1
              id="titulo-nosotros"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Conoce más sobre{" "}
              <span className="text-[#0B2C61]">UNIENERGÍA</span>
            </h1>
          </header>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            <strong>UNIENERGÍA</strong>, empresa vinculada a la{" "}
            <strong>Universidad Nacional de Ingeniería (UNI)</strong>, impulsa
            proyectos energéticos responsables, sostenibles e innovadores.
            Integrando investigación, tecnología y compromiso ambiental,
            fortalecemos el desarrollo energético y económico del Perú.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#0B2C61] to-[#1E40AF] text-white font-semibold shadow-lg hover:scale-105 transform transition"
              aria-label="Ver nuestros servicios de energía sostenible"
            >
              Nuestros servicios
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-[#0B2C61] text-[#0B2C61] font-semibold hover:bg-[#0B2C61] hover:text-white transition"
              aria-label="Ir al formulario de contacto de UNIENERGÍA"
            >
              Contáctanos
            </a>
          </div>
        </motion.article>

        {/* Imagen principal */}
        <motion.figure
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end relative"
        >
          {/* Fondos decorativos */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-30" />

          {/* Imagen */}
          <div className="relative w-full max-w-xl group">
            <img
              src="/Unienergia-45.jpg"
              alt="Equipo profesional de UNIENERGÍA trabajando en proyectos de energía sostenible"
              loading="lazy"
              className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:brightness-105 transition duration-500"
            />
            <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-gray-300 opacity-50 pointer-events-none" />
          </div>
        </motion.figure>
      </div>

      {/* Misión y Visión */}
      <div className="mt-24 max-w-[1600px] mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.article
          whileHover={{ scale: 1.03 }}
          className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-[#0B2C61] mb-4">Misión</h2>
          <p className="text-gray-700 leading-relaxed">
            Contribuir al desarrollo de una matriz energética sostenible en el
            Perú, integrando energías renovables —solar, eólica y biomasa— y el
            uso responsable de hidrocarburos. Basamos nuestra gestión en la
            investigación científica y la excelencia académica de la{" "}
            <strong>Universidad Nacional de Ingeniería</strong>.
          </p>
        </motion.article>

        <motion.article
          whileHover={{ scale: 1.03 }}
          className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-[#9D1F1F] mb-4">Visión</h2>
          <p className="text-gray-700 leading-relaxed">
            Ser una empresa energética líder en el Perú, comprometida con la
            sostenibilidad, la innovación tecnológica y el cuidado del medio
            ambiente. Promovemos el desarrollo de fuentes renovables como la
            energía solar, eólica, biomasa, geotermia e hidrógeno verde, para
            lograr un futuro energético limpio y sostenible.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
