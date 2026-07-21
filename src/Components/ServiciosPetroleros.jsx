import React, { memo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* =========================
   ICONOS SVG PERSONALIZADOS
========================= */

function IconBadge({ children, active = false, dark = false }) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition duration-300 ${
        active
          ? "border-[#8A3B2D]/30 bg-[#8A3B2D] text-white shadow-[0_14px_34px_rgba(138,59,45,0.22)]"
          : dark
          ? "border-white/12 bg-white/10 text-white"
          : "border-[#E7DDD3] bg-[#FCFAF7] text-[#8A3B2D] group-hover:border-[#8A3B2D]/35 group-hover:bg-white"
      }`}
    >
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H18M13 7L18 12L13 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WellTestingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 20V8.5L12 5L17 8.5V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 20V13.5H14.5V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.2H15.5M10 7.5L14 10.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SlicklineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4.5V19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 7.5C8.5 5.8 10 4.5 12 4.5C14 4.5 15.5 5.8 15.5 7.5C15.5 9.2 14 10.5 12 10.5C10 10.5 8.5 9.2 8.5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 16.8H15M10.5 19.5H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RecoveryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 17.5L13.5 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.5 5.5L18.5 9.5L15.5 12.5L11.5 8.5L14.5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 18.5L8.5 21.5M4.5 20.5L6.5 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MeasurementIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18.5V5.5H18V18.5H6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 9H15M9 12H13M9 15H14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LoggingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 20V6.5C7 5.4 7.9 4.5 9 4.5H15C16.1 4.5 17 5.4 17 6.5V20"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 8.5H14M10 12H14M10 15.5H12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 20H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.5C12 20.5 18.5 17.2 18.5 10.1V6.5L12 4L5.5 6.5V10.1C5.5 17.2 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 12L11 14.2L15.3 9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EfficiencyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 15.5C5.5 11.4 8.4 8.2 12 8.2C15.6 8.2 18.5 11.4 18.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 15.5L15.2 11.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 18.5H17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 19.5V5.5H17V19.5H7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9H14.5M9.5 12H14.5M9.5 15H12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   DATA
========================= */

const servicios = [
  {
    titulo: "Well Testing",
    etiqueta: "Evaluación de pozos",
    descripcion:
      "Adquisición y análisis de información de presión y producción del pozo mediante aperturas y cierres a condiciones controladas, de acuerdo con los objetivos técnicos planteados.",
    imagen: "/well.jpeg",
    alt: "Servicio de Well Testing de Unienergia ABC",
    icon: WellTestingIcon,
  },
  {
    titulo: "Slickline",
    etiqueta: "Intervención con cable",
    descripcion:
      "Servicio especializado para instalar y recuperar herramientas o dispositivos en pozos por medio de cable de acero diseñado para soportar esfuerzos de tensión y torsión.",
    imagen: "/line.jpg",
    alt: "Servicio Slickline de Unienergia ABC",
    icon: SlicklineIcon,
  },
  {
    titulo: "Pipe Recovery",
    etiqueta: "Recuperación operativa",
    descripcion:
      "Soluciones técnicas orientadas a recuperar continuidad operativa, reducir tiempos improductivos y optimizar intervenciones en pozos de crudo y gas.",
    imagen: "/servicio-produccion.jpg",
    alt: "Servicios de Pipe Recovery de Unienergia ABC",
    icon: RecoveryIcon,
  },
  {
    titulo: "Mediciones Físicas",
    etiqueta: "Diagnóstico técnico",
    descripcion:
      "Metodología utilizada para analizar, controlar y optimizar el funcionamiento del sistema de extracción de un pozo, facilitando una mejor toma de decisiones operativas.",
    imagen: "/mediciones.jpeg",
    alt: "Servicio de Mediciones Físicas de Unienergia ABC",
    icon: MeasurementIcon,
  },
  {
    titulo: "Perfilaje y Punzonamiento",
    etiqueta: "Registro especializado",
    descripcion:
      "Unienergia ABC cuenta con una moderna unidad de registro y punzonamiento montada sobre chasis FREIGHTLINER modelo FL‐112.",
    imagen: "/servicio-mantenimiento.jpg",
    alt: "Servicio de Perfilaje y Punzonamiento de Unienergia ABC",
    icon: LoggingIcon,
  },
];

const clientes = [
  { logo: "/logoUnna.png", nombre: "Unna Energía" },
  { logo: "/petrotal.png", nombre: "Petrotal" },
  { logo: "/petroperu.png", nombre: "Petroperú" },
  { logo: "/gtg.png", nombre: "GTG Energy" },
  { logo: "/OLIMPIC.jpg", nombre: "Olimpic" },
];

const beneficios = [
  {
    icon: ShieldIcon,
    titulo: "Seguridad operativa",
    texto: "Servicios bajo criterios técnicos, preventivos y controlados.",
  },
  {
    icon: EfficiencyIcon,
    titulo: "Eficiencia técnica",
    texto: "Soluciones orientadas a continuidad, rendimiento y confiabilidad.",
  },
  {
    icon: ComplianceIcon,
    titulo: "Cumplimiento",
    texto: "Procesos alineados a estándares operativos y trazabilidad técnica.",
  },
];

const ServiciosPetroleros = memo(function ServiciosPetroleros() {
  const [index, setIndex] = useState(0);

  const servicioActivo = servicios[index];
  const IconoActivo = servicioActivo.icon;

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % servicios.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + servicios.length) % servicios.length);
  };

  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden bg-[#FCFAF7] py-24 text-[#2E221E] sm:py-28 lg:py-32"
      aria-labelledby="servicios-heading"
    >
      <Helmet>
        <title>Servicios Petroleros | Unienergia ABC</title>
        <meta
          name="description"
          content="Servicios petroleros especializados de Unienergia ABC: Well Testing, Slickline, Pipe Recovery, Mediciones Físicas, Perfilaje y Punzonamiento."
        />
      </Helmet>

      {/* Fondo claro con marca de agua del logo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFCFA_0%,#F8F2EC_48%,#F3E8DE_100%)]"
      />

      <img
        src="/logo1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-12 -z-20 w-[520px] max-w-none opacity-[0.055] grayscale"
      />

      <img
        src="/logo1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-20 -z-20 w-[420px] max-w-none rotate-[-18deg] opacity-[0.04] grayscale"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[linear-gradient(to_right,rgba(138,59,45,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,59,45,0.045)_1px,transparent_1px)] bg-[size:78px_78px]"
      />

      {/* Formas orgánicas inspiradas en el logo */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-[520px] w-[48%] bg-[#5C241B]"
        style={{
          clipPath: "polygon(32% 0, 100% 0, 100% 82%, 54% 100%, 0 56%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute right-10 top-32 -z-10 h-56 w-56 rounded-full bg-[#B65A43]/24 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 -z-10 h-[360px] w-[44%] bg-[#F2E3DC]"
        style={{
          clipPath: "polygon(0 18%, 72% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Encabezado */}
        <header className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D] shadow-[0_10px_24px_rgba(46,34,30,0.06)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8A3B2D]" />
              Catálogo técnico especializado
            </div>

            <h2
              id="servicios-heading"
              className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#2E221E]"
            >
              Servicios petroleros para operaciones de{" "}
              <span className="bg-gradient-to-r from-[#8A3B2D] via-[#B65A43] to-[#5C241B] bg-clip-text text-transparent">
                alto desempeño
              </span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#E7DDD3] bg-white/85 p-6 shadow-[0_24px_70px_rgba(46,34,30,0.08)] backdrop-blur-xl">
            <p className="text-base font-medium leading-8 text-[#6F625C] sm:text-lg">
              En{" "}
              <strong className="font-black text-[#2E221E]">
                Unienergia ABC
              </strong>{" "}
              brindamos soluciones técnicas para operaciones petroleras,
              priorizando seguridad, continuidad operativa, eficiencia y
              trazabilidad en cada servicio.
            </p>
          </div>
        </header>

        {/* Beneficios */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {beneficios.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.titulo}
                className="group rounded-[1.7rem] border border-[#E7DDD3] bg-white p-6 shadow-[0_20px_60px_rgba(46,34,30,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(46,34,30,0.11)]"
              >
                <IconBadge>
                  <Icon />
                </IconBadge>

                <h3 className="mt-5 text-xl font-black text-[#2E221E]">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6F625C]">
                  {item.texto}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bloque principal */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Selector */}
          <aside
            className="rounded-[2rem] border border-[#E7DDD3] bg-white p-4 shadow-[0_28px_85px_rgba(46,34,30,0.09)]"
            aria-label="Lista de servicios petroleros"
          >
            <div className="mb-5 px-2 pt-2">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8A3B2D]">
                Servicios disponibles
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#2E221E]">
                Selecciona un servicio
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6F625C]">
                Cada servicio cuenta con enfoque técnico, control operativo y
                personal especializado.
              </p>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {servicios.map((servicio, i) => {
                const Icon = servicio.icon;
                const activo = i === index;

                return (
                  <button
                    key={servicio.titulo}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-pressed={activo}
                    className={`group min-w-[270px] rounded-3xl border p-4 text-left transition duration-300 lg:min-w-0 ${
                      activo
                        ? "border-[#8A3B2D]/35 bg-[#F7F0EB] shadow-[0_18px_45px_rgba(138,59,45,0.12)]"
                        : "border-[#E7DDD3] bg-[#FCFAF7] hover:border-[#8A3B2D]/25 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <IconBadge active={activo}>
                        <Icon />
                      </IconBadge>

                      <span className="min-w-0">
                        <span
                          className={`block text-xs font-black uppercase tracking-[0.18em] ${
                            activo ? "text-[#8A3B2D]" : "text-[#8B7A72]"
                          }`}
                        >
                          {servicio.etiqueta}
                        </span>

                        <span className="mt-1 block text-base font-black leading-tight text-[#2E221E]">
                          {servicio.titulo}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Servicio destacado */}
          <article
            className="relative overflow-hidden rounded-[2.3rem] border border-[#E7DDD3] bg-[#2E221E] shadow-[0_34px_110px_rgba(46,34,30,0.28)]"
            aria-label={`Servicio seleccionado: ${servicioActivo.titulo}`}
          >
            <div className="relative min-h-[590px]">
              <img
                key={servicioActivo.imagen}
                src={servicioActivo.imagen}
                alt={servicioActivo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#120B09] via-[#2E221E]/78 to-[#5C241B]/28"
              />

              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[68%] bg-gradient-to-r from-[#120B09]/92 via-[#2E221E]/70 to-transparent"
              />

              <div
                aria-hidden="true"
                className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#8A3B2D]/35 blur-3xl"
              />

              {/* Controles */}
              <div className="absolute right-5 top-5 z-20 flex gap-3">
                <button
                  type="button"
                  onClick={anterior}
                  aria-label="Servicio anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[#120B09]/62 text-white shadow-xl backdrop-blur-xl transition duration-300 hover:border-[#B65A43]/45 hover:bg-[#8A3B2D] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
                >
                  <ChevronLeftIcon />
                </button>

                <button
                  type="button"
                  onClick={siguiente}
                  aria-label="Siguiente servicio"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/16 bg-[#120B09]/62 text-white shadow-xl backdrop-blur-xl transition duration-300 hover:border-[#B65A43]/45 hover:bg-[#8A3B2D] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
                >
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Contenido */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/18 bg-[#8A3B2D] text-white shadow-[0_18px_45px_rgba(138,59,45,0.28)]">
                    <IconoActivo />
                  </div>

                  <div className="mb-4 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#E8C7BA] backdrop-blur-md">
                    {servicioActivo.etiqueta}
                  </div>

                  <h3 className="text-[clamp(2rem,5vw,4.4rem)] font-black leading-[0.98] tracking-[-0.045em] text-white drop-shadow-lg">
                    {servicioActivo.titulo}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white sm:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                    {servicioActivo.descripcion}
                  </p>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#contacto"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8A3B2D] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(138,59,45,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#B65A43] focus:outline-none focus:ring-4 focus:ring-[#B65A43]/24"
                      aria-label={`Solicitar información sobre ${servicioActivo.titulo}`}
                    >
                      Solicitar servicio
                      <ArrowIcon />
                    </a>

                    <a
                      href="#operaciones"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2E221E] focus:outline-none focus:ring-4 focus:ring-white/15"
                      aria-label="Ver operaciones de Unienergia ABC"
                    >
                      Ver operaciones
                    </a>
                  </div>
                </div>

                <div
                  className="mt-8 flex items-center gap-3"
                  aria-label="Indicadores de servicios"
                >
                  {servicios.map((servicio, i) => (
                    <button
                      key={servicio.titulo}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B65A43] ${
                        i === index
                          ? "w-10 bg-[#B65A43]"
                          : "w-2.5 bg-white/35 hover:bg-white/70"
                      }`}
                      aria-label={`Ir al servicio ${servicio.titulo}`}
                      aria-current={i === index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Clientes */}
        <div className="mt-20 rounded-[2rem] border border-[#E7DDD3] bg-white p-6 shadow-[0_28px_85px_rgba(46,34,30,0.09)] sm:p-8">
          <div className="mb-8 flex flex-col gap-3 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8A3B2D]">
                Confianza empresarial
              </p>

              <h3 className="mt-2 text-3xl font-black text-[#2E221E]">
                Nuestros clientes
              </h3>
            </div>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6F625C] lg:mx-0 lg:text-right">
              Empresas que confían en la experiencia técnica y operativa de
              Unienergia ABC.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((cliente) => (
              <div
                key={cliente.nombre}
                className="group flex h-28 items-center justify-center rounded-3xl border border-[#E7DDD3] bg-[#FCFAF7] p-5 shadow-[0_16px_45px_rgba(46,34,30,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(46,34,30,0.10)]"
              >
                <img
                  src={cliente.logo}
                  alt={`Logo de ${cliente.nombre}`}
                  loading="lazy"
                  className="max-h-16 w-auto max-w-[135px] object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#5C241B] via-[#8A3B2D] to-[#B65A43]"
      />
    </section>
  );
});

export default ServiciosPetroleros;