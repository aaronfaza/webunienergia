import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

/* =========================
   ICONOS SVG PERSONALIZADOS
========================= */

function IconBadge({ children, tone = "wine" }) {
  const tones = {
    wine:
      "bg-[#8A3B2D] text-white shadow-[0_14px_34px_rgba(138,59,45,0.20)]",
    dark:
      "bg-[#5C241B] text-white shadow-[0_14px_34px_rgba(92,36,27,0.22)]",
    olive:
      "bg-[#6E7E45] text-white shadow-[0_14px_34px_rgba(110,126,69,0.18)]",
    light:
      "bg-[#F6F1EA] text-[#8A3B2D] border border-[#E7DDD3] shadow-[0_10px_24px_rgba(46,34,30,0.06)]",
  };

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AirIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 9.2H15.2C16.5 9.2 17.5 8.2 17.5 6.9C17.5 5.7 16.5 4.7 15.3 4.7C14.4 4.7 13.7 5.2 13.3 5.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 13H18.3C19.6 13 20.5 13.9 20.5 15.1C20.5 16.3 19.6 17.3 18.4 17.3C17.5 17.3 16.8 16.8 16.4 16.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 16.8H11.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlantIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 19V11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 12C9 12 6.8 10.1 6.5 6.7C9.7 6.7 12 8.7 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5C15.2 13.5 17.6 11.4 18 7.8C14.6 7.8 12 9.9 12 13.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 19H16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WasteIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 8H17L16.2 19H7.8L7 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V5.5H15V8M6 8H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 11.5V16M14 11.5V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M5.5 9L12 5.5L18.5 9V17.5L12 20.5L5.5 17.5V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 9.2L12 12.4L18.2 9.2M12 12.4V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20C12 20 18 17.1 18 10.2V6.8L12 4.5L6 6.8V10.2C6 17.1 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.8V14.2M9.3 11.5H14.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FumigationIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 15.5H12.5C14 15.5 15.2 14.3 15.2 12.8V10.8H8.7C7.2 10.8 6 12 6 13.5V14.5C6 15.1 6.4 15.5 7 15.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15.2 11.4L19 9.5M19 9.5L20 7.5M19 9.5L20.5 11.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 15.5V18.5M12.5 15.5V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EnvironmentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20C12 20 18.5 15.8 18.5 9.8C18.5 6.8 16.2 4.5 13.2 4.5C11.2 4.5 9.8 5.5 9 7C7.5 7.3 5.5 8.7 5.5 11.4C5.5 16.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 13.2C11.7 12.9 13.4 11.7 14.8 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle
        cx="9"
        cy="8.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="16"
        cy="9.5"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.8 18C5.5 15.7 7 14.5 9 14.5C11 14.5 12.6 15.7 13.2 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.4 15C14.2 14.4 15.1 14.1 16 14.1C17.8 14.1 19.2 15.2 19.8 17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckSealIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.5C12 20.5 18.5 17.2 18.5 10.2V6.6L12 4L5.5 6.6V10.2C5.5 17.2 12 20.5 12 20.5Z"
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

/* =========================
   DATA
========================= */

const actividades = {
  ambiental: [
    {
      titulo: "Monitoreo de aire",
      descripcion:
        "Controlamos la calidad del aire con equipos especializados para verificar el cumplimiento de estándares ambientales y proteger el entorno operativo.",
      imagen: "/aire1.jpeg",
      icon: AirIcon,
    },
    {
      titulo: "Revegetación",
      descripcion:
        "Promovemos la recuperación de zonas intervenidas mediante especies nativas, contribuyendo a la estabilidad del suelo y la biodiversidad local.",
      imagen: "/planta1.jpeg",
      icon: PlantIcon,
    },
    {
      titulo: "Manejo de residuos",
      descripcion:
        "Aplicamos prácticas responsables para la segregación, control y disposición adecuada de residuos generados durante las actividades operativas.",
      imagen: "/suelos1.jpeg",
      icon: WasteIcon,
    },
  ],
  social: [
    {
      titulo: "Entrega de víveres",
      descripcion:
        "Realizamos campañas de apoyo con alimentos y productos básicos para familias vinculadas al entorno operativo del Lote IX.",
      imagen: "/apoyo.jpeg",
      icon: FoodIcon,
    },
    {
      titulo: "Atención médica",
      descripcion:
        "Organizamos jornadas de salud y atención preventiva para comunidades cercanas, fortaleciendo el bienestar y la prevención.",
      imagen: "/medica.jpeg",
      icon: MedicalIcon,
    },
    {
      titulo: "Fumigación preventiva",
      descripcion:
        "Ejecutamos acciones preventivas de fumigación para controlar plagas y reducir riesgos sanitarios en zonas de influencia.",
      imagen: "/fumigacion.jpeg",
      icon: FumigationIcon,
    },
  ],
};

const categorias = {
  ambiental: {
    titulo: "Gestión Ambiental",
    etiqueta: "Control y cumplimiento",
    descripcion:
      "Aplicamos medidas de prevención, control y seguimiento ambiental para sostener una operación responsable en el Lote IX.",
    icon: EnvironmentIcon,
    tone: "olive",
    accentText: "text-[#6E7E45]",
    softBg: "bg-[#F3F5ED]",
    border: "border-[#DDE3D2]",
    hover: "hover:border-[#6E7E45]/35 hover:bg-[#FAFBF6]",
  },
  social: {
    titulo: "Gestión Social",
    etiqueta: "Relación comunitaria",
    descripcion:
      "Desarrollamos acciones de apoyo social orientadas al bienestar, la prevención y la relación responsable con las comunidades.",
    icon: CommunityIcon,
    tone: "wine",
    accentText: "text-[#8A3B2D]",
    softBg: "bg-[#F7F0EB]",
    border: "border-[#E7DDD3]",
    hover: "hover:border-[#8A3B2D]/35 hover:bg-[#FFFCFA]",
  },
};

const indicadores = [
  {
    valor: "Ambiente",
    texto: "Prevención y control ambiental",
    icon: EnvironmentIcon,
    tone: "olive",
  },
  {
    valor: "Comunidad",
    texto: "Relación social responsable",
    icon: CommunityIcon,
    tone: "wine",
  },
  {
    valor: "Lote IX",
    texto: "Acciones con impacto territorial",
    icon: CheckSealIcon,
    tone: "dark",
  },
];

export default function Responsabilidad() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (!modal) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") setModal(null);
    };

    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, [modal]);

  const cerrarModal = () => setModal(null);
  const modalStyle = modal ? categorias[modal.categoria] : null;
  const ModalIcon = modal?.icon;

  return (
    <section
      id="responsabilidad"
      className="relative isolate overflow-hidden bg-[#FCFAF7] py-24 text-[#2E221E] sm:py-28 lg:py-32"
      aria-labelledby="responsabilidad-heading"
    >
      <Helmet>
        <title>Responsabilidad Social y Ambiental | Unienergia ABC</title>
        <meta
          name="description"
          content="Gestión social y ambiental de Unienergia ABC en el Lote IX: monitoreo ambiental, revegetación, manejo de residuos, salud, apoyo comunitario y prevención."
        />
      </Helmet>

      {/* Fondo sobrio */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(138,59,45,0.09),transparent_30%),radial-gradient(circle_at_86%_22%,rgba(110,126,69,0.08),transparent_28%),linear-gradient(180deg,#FFFCFA_0%,#F8F2EC_48%,#F3E8DE_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[linear-gradient(to_right,rgba(138,59,45,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,59,45,0.05)_1px,transparent_1px)] bg-[size:78px_78px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Encabezado */}
        <header className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D] shadow-[0_10px_24px_rgba(46,34,30,0.06)]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8A3B2D]" />
            Gestión responsable
          </div>

          <h2
            id="responsabilidad-heading"
            className="text-[clamp(2.45rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#2E221E]"
          >
            Gestión social y ambiental del{" "}
            <span className="bg-gradient-to-r from-[#8A3B2D] via-[#B65A43] to-[#5C241B] bg-clip-text text-transparent">
              Lote IX
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#6F625C] sm:text-lg">
            En <strong className="text-[#2E221E]">Unienergia ABC</strong>{" "}
            desarrollamos acciones orientadas al cumplimiento ambiental, la
            prevención y el relacionamiento responsable con las comunidades del
            entorno operativo.
          </p>
        </header>

        {/* Indicadores */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {indicadores.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.valor}
                className="rounded-[1.6rem] border border-[#E7DDD3] bg-white p-6 shadow-[0_20px_60px_rgba(46,34,30,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(46,34,30,0.10)]"
              >
                <IconBadge tone={item.tone}>
                  <Icon />
                </IconBadge>

                <h3 className="mt-5 text-2xl font-black text-[#2E221E]">
                  {item.valor}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-7 text-[#6F625C]">
                  {item.texto}
                </p>
              </article>
            );
          })}
        </div>

        {/* Categorías */}
        <main className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {Object.entries(categorias).map(([categoriaKey, categoria]) => {
            const CategoriaIcon = categoria.icon;
            const lista = actividades[categoriaKey];

            return (
              <article
                key={categoriaKey}
                aria-labelledby={`responsabilidad-${categoriaKey}`}
                className="relative overflow-hidden rounded-[2rem] border border-[#E7DDD3] bg-white p-5 shadow-[0_28px_80px_rgba(46,34,30,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_34px_95px_rgba(46,34,30,0.12)] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#F6F1EA] to-transparent"
                />

                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div
                        className={`mb-5 inline-flex items-center gap-2 rounded-full border ${categoria.border} ${categoria.softBg} px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${categoria.accentText}`}
                      >
                        <CategoriaIcon />
                        {categoria.etiqueta}
                      </div>

                      <h3
                        id={`responsabilidad-${categoriaKey}`}
                        className="text-2xl font-black tracking-tight text-[#2E221E] sm:text-3xl"
                      >
                        {categoria.titulo}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-[#6F625C] sm:text-base">
                        {categoria.descripcion}
                      </p>
                    </div>

                    <IconBadge tone={categoria.tone}>
                      <CategoriaIcon />
                    </IconBadge>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {lista.map((actividad) => {
                      const ActividadIcon = actividad.icon;

                      return (
                        <button
                          key={actividad.titulo}
                          type="button"
                          onClick={() =>
                            setModal({
                              ...actividad,
                              categoria: categoriaKey,
                            })
                          }
                          className={`group overflow-hidden rounded-[1.45rem] border ${categoria.border} bg-white text-left shadow-[0_14px_42px_rgba(46,34,30,0.07)] transition duration-300 hover:-translate-y-1 ${categoria.hover} focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/12`}
                          aria-label={`Ver más sobre ${actividad.titulo}`}
                        >
                          <div className="relative h-36 overflow-hidden">
                            <img
                              src={actividad.imagen}
                              alt={actividad.titulo}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/70 via-[#2E221E]/12 to-transparent" />

                            <div className="absolute bottom-3 left-3">
                              <IconBadge tone="light">
                                <ActividadIcon />
                              </IconBadge>
                            </div>
                          </div>

                          <div className="p-4">
                            <h4 className="text-base font-black leading-tight text-[#2E221E]">
                              {actividad.titulo}
                            </h4>

                            <div
                              className={`mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide ${categoria.accentText}`}
                            >
                              Ver detalle
                              <ArrowIcon />
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </main>

        {/* Cierre visual */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#7A3125] bg-[#5C241B] p-8 text-white shadow-[0_30px_90px_rgba(92,36,27,0.22)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#E8C7BA]">
                Operación responsable
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Acciones sostenidas para una relación responsable con el entorno
              </h3>

              <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/75 sm:text-base">
                Integramos prevención ambiental, control operativo y apoyo
                comunitario como parte de una gestión seria, técnica y
                sostenible.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8A3B2D] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(138,59,45,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#B65A43] focus:outline-none focus:ring-4 focus:ring-white/20"
              aria-label="Contactar a Unienergia ABC"
            >
              Conversemos
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#2E221E]/75 px-4 py-6 backdrop-blur-md"
          onClick={cerrarModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-responsabilidad-title"
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[#E7DDD3] bg-[#FCFAF7] p-4 text-[#2E221E] shadow-[0_35px_120px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={cerrarModal}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#5C241B] shadow-lg transition duration-300 hover:bg-[#5C241B] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
              aria-label="Cerrar modal"
            >
              <CloseIcon />
            </button>

            <div className="relative overflow-hidden rounded-[1.55rem]">
              <img
                src={modal.imagen}
                alt={modal.titulo}
                className="h-72 w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/82 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                {ModalIcon && (
                  <IconBadge tone={modalStyle.tone}>
                    <ModalIcon />
                  </IconBadge>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div
                className={`mb-4 inline-flex rounded-full border ${modalStyle.border} ${modalStyle.softBg} px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${modalStyle.accentText}`}
              >
                {modalStyle.etiqueta}
              </div>

              <h3
                id="modal-responsabilidad-title"
                className="text-3xl font-black tracking-tight text-[#2E221E]"
              >
                {modal.titulo}
              </h3>

              <p className="mt-4 text-base font-medium leading-8 text-[#6F625C]">
                {modal.descripcion}
              </p>

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  onClick={cerrarModal}
                  className="rounded-full bg-[#8A3B2D] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition duration-300 hover:bg-[#5C241B] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#5C241B] via-[#8A3B2D] to-[#6E7E45]"
      />
    </section>
  );
}