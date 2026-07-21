import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Factory,
  MapPinned,
  MonitorCheck,
  ShieldCheck,
  Users,
  Zap,
  Leaf,
} from "lucide-react";

const operaciones = [
  {
    titulo: "Exploración y Producción",
    subtitulo: "Operación responsable",
    descripcion:
      "En el Lote IX realizamos exploración y extracción responsable de hidrocarburos, utilizando tecnología avanzada que garantiza eficiencia operativa, seguridad y sostenibilidad ambiental.",
    imagen: "/Unienergia-6.jpg",
    alt: "Operaciones de exploración y producción de hidrocarburos en el Lote IX de Unienergia ABC",
    icon: Factory,
  },
  {
    titulo: "Infraestructura y Logística",
    subtitulo: "Continuidad operativa",
    descripcion:
      "Contamos con ductos, plantas y equipos de alta tecnología que cumplen estándares de seguridad, asegurando la continuidad, eficiencia y confiabilidad de nuestras operaciones energéticas.",
    imagen: "/Unienergia-32.jpg",
    alt: "Infraestructura energética moderna y logística de transporte de Unienergia ABC",
    icon: MapPinned,
  },
  {
    titulo: "Monitoreo Ambiental",
    subtitulo: "Control permanente",
    descripcion:
      "Implementamos monitoreo continuo de aire, agua y suelos en todas las etapas del proceso, garantizando cumplimiento normativo y respeto por el entorno natural.",
    imagen: "/Unienergia-16.jpg",
    alt: "Monitoreo ambiental de aire y agua en operaciones del Lote IX Unienergia ABC",
    icon: MonitorCheck,
  },
  {
    titulo: "Apoyo Comunitario",
    subtitulo: "Impacto social",
    descripcion:
      "Desarrollamos programas sociales y educativos en comunidades cercanas al Lote IX, fortaleciendo educación ambiental, salud, bienestar y desarrollo local.",
    imagen: "/Unienergia-49.jpg",
    alt: "Colaboración comunitaria y apoyo social de Unienergia ABC en el Lote IX",
    icon: Users,
  },
];

const frases = [
  "Operadores del Lote IX con enfoque técnico y responsable",
  "Seguridad, continuidad operativa y control ambiental",
  "Gestión petrolera con compromiso territorial",
];

function PumpJackBackground() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 520"
      className="pointer-events-none absolute -right-28 top-20 -z-10 hidden w-[760px] opacity-[0.115] lg:block"
      fill="none"
    >
      <path
        d="M126 405H790"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M265 405L405 155"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M548 405L405 155"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M334 282H482"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M253 405L346 405"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
      />

      <path
        d="M382 150C438 108 526 86 610 90C656 92 691 104 718 125C649 156 560 175 472 171C435 169 405 162 382 150Z"
        fill="white"
      />

      <path
        d="M708 126L755 181"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M758 181C774 184 789 194 799 208C781 216 760 212 746 199C750 192 754 186 758 181Z"
        fill="white"
      />

      <path
        d="M612 91L612 44"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <circle cx="612" cy="43" r="17" fill="white" />

      <path
        d="M612 91L612 405"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="18 14"
      />

      <path
        d="M612 405V470"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M574 470H650"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      />

      <path
        d="M160 405C190 360 221 337 257 330"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M166 405C198 371 229 356 267 354"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IndustrialRings() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-120px] top-24 h-[360px] w-[360px] rounded-full border border-white/[0.075]" />
      <div className="absolute left-[-70px] top-36 h-[250px] w-[250px] rounded-full border border-[#C8A66A]/[0.13]" />
      <div className="absolute right-[8%] bottom-20 h-[220px] w-[220px] rounded-full border border-white/[0.07]" />
      <div className="absolute right-[12%] bottom-32 h-[120px] w-[120px] rounded-full border border-[#C8A66A]/[0.12]" />
    </div>
  );
}

export default function Operaciones() {
  const [activo, setActivo] = useState(0);
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = frases[phraseIndex % frases.length];

    const timeout = setTimeout(
      () => {
        if (!deleting && typed === currentPhrase) {
          setDeleting(true);
          return;
        }

        if (deleting && typed === "") {
          setDeleting(false);
          setPhraseIndex((prev) => prev + 1);
          return;
        }

        setTyped((prev) =>
          deleting
            ? currentPhrase.slice(0, Math.max(0, prev.length - 1))
            : currentPhrase.slice(0, prev.length + 1)
        );
      },
      !deleting && typed === currentPhrase ? 1400 : deleting ? 35 : 65
    );

    return () => clearTimeout(timeout);
  }, [typed, deleting, phraseIndex]);

  const activeOperation = operaciones[activo];

  const handleCardKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActivo(index);
    }
  };

  return (
    <section
      id="operaciones"
      className="relative isolate overflow-hidden bg-[#06152F] py-24 text-white sm:py-28 lg:py-32"
      aria-labelledby="titulo-operaciones"
    >
      {/* Fondo azul petrolero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#020617_0%,#06152F_42%,#081C3F_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(37,80,128,0.40),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(200,166,106,0.14),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(3,7,17,0.95),transparent_42%)]"
      />

      {/* Silueta de unidad de bombeo */}
      <PumpJackBackground />

      {/* Formas industriales */}
      <IndustrialRings />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.075] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:74px_74px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 h-full w-[38%] bg-gradient-to-r from-[#020617]/88 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-full w-[42%] bg-gradient-to-l from-[#020617]/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A66A]/25 bg-white/[0.075] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#C8A66A] shadow-2xl backdrop-blur-md">
            <Zap size={16} aria-hidden="true" />
            Gestión operativa del Lote IX
          </div>

          <h2
            id="titulo-operaciones"
            className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.055em] text-white"
          >
            Operaciones del{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-[#C8A66A] to-[#A98248] bg-clip-text text-transparent">
                Lote IX
              </span>
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-1 h-2 w-[92%] rounded-full bg-[#C8A66A]/40 blur-sm"
              />
            </span>
          </h2>

          <p
            className="mx-auto mt-7 min-h-[34px] max-w-3xl text-base font-black leading-8 text-[#C8A66A] sm:text-lg"
            aria-label="Frase principal animada"
          >
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse rounded-full bg-[#C8A66A]" />
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#D6DEE8] sm:text-lg">
            En{" "}
            <strong className="font-black text-white">Unienergia ABC</strong>{" "}
            desarrollamos operaciones integrales en el{" "}
            <strong className="font-black text-white">Lote IX</strong>,
            combinando control operativo, seguridad, gestión ambiental y
            compromiso con el entorno.
          </p>
        </motion.header>

        {/* Panel de resumen */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#C8A66A]/25 hover:bg-white/[0.095]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8A66A]/30 bg-[#C8A66A] text-[#07111F] shadow-[0_15px_35px_rgba(200,166,106,0.22)]">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-black text-white">Seguridad</h3>
            <p className="mt-3 text-sm leading-7 text-[#AEB9C7]">
              Procesos operativos con enfoque preventivo, técnico y responsable.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#C8A66A]/25 hover:bg-white/[0.095]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8A66A]/30 bg-[#102A43] text-[#C8A66A] shadow-[0_15px_35px_rgba(0,0,0,0.24)]">
              <Leaf size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-black text-white">
              Gestión ambiental
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#AEB9C7]">
              Seguimiento ambiental orientado al cumplimiento y protección del
              entorno.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#C8A66A]/25 hover:bg-white/[0.095]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8A66A]/30 bg-[#102A43] text-[#C8A66A] shadow-[0_15px_35px_rgba(0,0,0,0.24)]">
              <MonitorCheck size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-black text-white">
              Control operativo
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#AEB9C7]">
              Monitoreo, trazabilidad y control técnico para optimizar cada
              operación.
            </p>
          </div>
        </motion.div>

        {/* Galería interactiva */}
        <div className="mt-16">
          <div
            className="flex flex-col gap-5 lg:h-[540px] lg:flex-row"
            role="list"
            aria-label="Galería de operaciones energéticas"
          >
            {operaciones.map((op, index) => {
              const Icon = op.icon;
              const isActive = activo === index;

              return (
                <motion.article
                  key={op.titulo}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={`Ver detalles de ${op.titulo}`}
                  onClick={() => setActivo(index)}
                  onKeyDown={(event) => handleCardKeyDown(event, index)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`group relative min-h-[390px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_26px_90px_rgba(0,0,0,0.38)] outline-none transition-all duration-700 focus:ring-4 focus:ring-[#C8A66A]/25 lg:min-h-full ${
                    isActive
                      ? "lg:basis-[48%]"
                      : "lg:basis-[17.3%] hover:lg:basis-[22%]"
                  }`}
                >
                  <img
                    src={op.imagen}
                    alt={op.alt}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                      isActive
                        ? "scale-100 brightness-[0.78]"
                        : "scale-105 brightness-[0.46] group-hover:scale-100 group-hover:brightness-[0.58]"
                    }`}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#020617]/98 via-[#06152F]/58 to-transparent"
                  />

                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 transition duration-500 ${
                      isActive
                        ? "bg-[#C8A66A]/10"
                        : "bg-[#020617]/20 group-hover:bg-[#C8A66A]/8"
                    }`}
                  />

                  <div className="absolute left-5 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-[#07111F]/60 p-3 text-[#C8A66A] shadow-xl backdrop-blur-xl">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7">
                    <div className="mb-3 inline-flex rounded-full border border-[#C8A66A]/25 bg-[#07111F]/55 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#C8A66A] backdrop-blur-md">
                      {op.subtitulo}
                    </div>

                    <h3
                      className={`font-black leading-tight text-white drop-shadow-lg transition-all duration-500 ${
                        isActive
                          ? "text-2xl sm:text-3xl"
                          : "text-2xl lg:text-xl"
                      }`}
                    >
                      {op.titulo}
                    </h3>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={op.titulo}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 14 }}
                          transition={{ duration: 0.35 }}
                        >
                          <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#D6DEE8] sm:text-base">
                            {op.descripcion}
                          </p>

                          <a
                            href="#contacto"
                            onClick={(event) => event.stopPropagation()}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8A66A] px-5 py-3 text-xs font-black uppercase tracking-wide text-[#07111F] shadow-[0_15px_35px_rgba(200,166,106,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D8BB82] focus:outline-none focus:ring-4 focus:ring-[#C8A66A]/25"
                            aria-label={`Consultar sobre ${op.titulo}`}
                          >
                            Consultar operación
                            <ArrowRight size={16} aria-hidden="true" />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {!isActive && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-6 right-6 hidden rounded-full border border-white/14 bg-[#07111F]/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 backdrop-blur-md lg:block"
                    >
                      Ver más
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Detalle activo para móvil */}
        <motion.div
          key={activeOperation.titulo}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-[1.7rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl lg:hidden"
        >
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#C8A66A]">
            Operación seleccionada
          </p>

          <h3 className="mt-3 text-2xl font-black text-white">
            {activeOperation.titulo}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#D6DEE8]">
            {activeOperation.descripcion}
          </p>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#020617] via-[#102A43] to-[#C8A66A]"
      />
    </section>
  );
}