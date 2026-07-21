import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   ICONOS SVG PERSONALIZADOS
========================= */

function IconBadge({ children, tone = "wine" }) {
  const tones = {
    wine:
      "bg-[#8A3B2D] text-white shadow-[0_14px_34px_rgba(138,59,45,0.22)]",
    olive:
      "bg-[#6E7E45] text-white shadow-[0_14px_34px_rgba(110,126,69,0.20)]",
    terracotta:
      "bg-[#B65A43] text-white shadow-[0_14px_34px_rgba(182,90,67,0.20)]",
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

function NewsIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 6.5C5 5.7 5.7 5 6.5 5H17.5C18.3 5 19 5.7 19 6.5V17.5C19 18.3 18.3 19 17.5 19H6.5C5.7 19 5 18.3 5 17.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 9H16M8 12H16M8 15H12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect
        x="4.5"
        y="6"
        width="15"
        height="13.5"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 4.5V7.5M16 4.5V7.5M5 10H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 11.5V6.8C5 5.8 5.8 5 6.8 5H11.5L19 12.5L12.5 19L5 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="8.7" cy="8.7" r="1" fill="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="8.5"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.8 18.5C6.8 15.8 9 14.4 12 14.4C15 14.4 17.2 15.8 18.2 18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
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

function DocumentIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.5H14L18 8.5V19.5H7V4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 4.5V8.5H18M9.5 12H14.5M9.5 15H13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================
   NOTICIAS MANUALES
========================= */

/*
  EDITA TUS NOTICIAS AQUÍ

  Para agregar una noticia:
  1. Copia un objeto completo.
  2. Cambia id, título, fecha, autor, categoría, imagen, resumen y contenido.
  3. Guarda el archivo.
*/

const noticias = [
  {
    id: 1,
    titulo: "Unienergia ABC fortalece sus operaciones en el Lote IX",
    fecha: "2026-06-10",
    autor: "Equipo Unienergia ABC",
    categoria: "Operaciones",
    imagen: "/Unienergia-32.jpg",
    resumen:
      "La empresa continúa impulsando operaciones responsables, priorizando seguridad, eficiencia técnica y continuidad operativa.",
    contenido: [
      "Unienergia ABC viene fortaleciendo sus actividades operativas en el Lote IX mediante procesos técnicos orientados a la eficiencia, seguridad y sostenibilidad.",
      "Estas acciones permiten optimizar la continuidad operativa, mejorar los controles internos y reforzar el compromiso de la empresa con el desarrollo energético responsable.",
      "La compañía reafirma su visión de trabajar con responsabilidad ambiental, solidez técnica y cercanía con las comunidades vinculadas a sus operaciones.",
    ],
  },
  {
    id: 2,
    titulo: "Gestión ambiental y monitoreo permanente en zonas de operación",
    fecha: "2026-06-08",
    autor: "Área Ambiental",
    categoria: "Sostenibilidad",
    imagen: "/aire1.jpeg",
    resumen:
      "Las actividades de monitoreo ambiental permiten verificar condiciones del entorno y fortalecer una operación responsable.",
    contenido: [
      "Como parte de su compromiso ambiental, Unienergia ABC desarrolla acciones de monitoreo para evaluar y controlar las condiciones del entorno operativo.",
      "El monitoreo permite recopilar información técnica sobre aire, agua y suelo, contribuyendo al cumplimiento de estándares ambientales.",
      "Estas medidas forman parte de una gestión preventiva orientada a proteger los ecosistemas y promover operaciones más responsables.",
    ],
  },
  {
    id: 3,
    titulo: "Campañas sociales refuerzan el vínculo con las comunidades",
    fecha: "2026-06-05",
    autor: "Responsabilidad Social",
    categoria: "Comunidad",
    imagen: "/apoyo.jpeg",
    resumen:
      "Unienergia ABC desarrolla iniciativas de apoyo social orientadas al bienestar de familias del entorno operativo.",
    contenido: [
      "La empresa desarrolla campañas sociales enfocadas en apoyar a las familias del entorno operativo mediante actividades de bienestar, prevención y acompañamiento comunitario.",
      "Estas acciones reflejan el compromiso de Unienergia ABC con una operación cercana, humana y responsable.",
      "El trabajo con la comunidad es parte fundamental de la visión sostenible de la empresa.",
    ],
  },
  {
    id: 4,
    titulo: "Nuevas acciones para optimizar servicios petroleros especializados",
    fecha: "2026-06-02",
    autor: "Área Técnica",
    categoria: "Servicios",
    imagen: "/well.jpeg",
    resumen:
      "La compañía fortalece sus servicios especializados con enfoque técnico, seguridad operativa y mejora continua.",
    contenido: [
      "Unienergia ABC continúa desarrollando capacidades técnicas para atender servicios petroleros especializados con mayor eficiencia.",
      "El enfoque está orientado a mejorar la confiabilidad de los procesos, fortalecer la seguridad operativa y responder a las necesidades del sector.",
      "La mejora continua forma parte del compromiso institucional de la empresa con sus clientes y aliados estratégicos.",
    ],
  },
];

function formatearFecha(fecha) {
  return new Date(`${fecha}T00:00:00`).toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogNoticias() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const categorias = useMemo(
    () => ["Todas", ...new Set(noticias.map((noticia) => noticia.categoria))],
    []
  );

  const noticiasFiltradas = useMemo(() => {
    if (categoriaActiva === "Todas") return noticias;
    return noticias.filter((noticia) => noticia.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const noticiaDestacada = noticiasFiltradas[0];
  const noticiasSecundarias = noticiasFiltradas.slice(1);

  useEffect(() => {
    if (!selectedPost) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") setSelectedPost(null);
    };

    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, [selectedPost]);

  return (
    <section
      id="blog"
      className="relative isolate overflow-hidden bg-[#FCFAF7] py-24 text-[#2E221E] sm:py-28 lg:py-32"
      aria-labelledby="blog-heading"
    >
      <Helmet>
        <title>Blog y Noticias | Unienergia ABC</title>
        <meta
          name="description"
          content="Noticias, novedades, actividades y proyectos de Unienergia ABC."
        />
      </Helmet>

      {/* Fondo editorial cálido */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(138,59,45,0.10),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(110,126,69,0.08),transparent_28%),linear-gradient(180deg,#FFFCFA_0%,#F8F2EC_48%,#F3E8DE_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[linear-gradient(to_right,rgba(138,59,45,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,59,45,0.05)_1px,transparent_1px)] bg-[size:78px_78px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D] shadow-[0_10px_24px_rgba(46,34,30,0.06)]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8A3B2D]" />
            Actualidad corporativa
          </div>

          <h2
            id="blog-heading"
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#2E221E]"
          >
            Blog y noticias de nuestra{" "}
            <span className="bg-gradient-to-r from-[#8A3B2D] via-[#B65A43] to-[#5C241B] bg-clip-text text-transparent">
              operación
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#6F625C] sm:text-lg">
            Conoce las novedades, actividades operativas, acciones ambientales y
            programas sociales de{" "}
            <strong className="text-[#2E221E]">Unienergia ABC</strong>.
          </p>
        </motion.header>

        {/* Filtros */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categorias.map((categoria) => {
            const activa = categoriaActiva === categoria;

            return (
              <button
                key={categoria}
                type="button"
                onClick={() => setCategoriaActiva(categoria)}
                className={`rounded-full border px-5 py-3 text-xs font-black uppercase tracking-wide transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/15 ${
                  activa
                    ? "border-[#8A3B2D] bg-[#8A3B2D] text-white shadow-[0_14px_34px_rgba(138,59,45,0.22)]"
                    : "border-[#E7DDD3] bg-white/80 text-[#6F625C] hover:border-[#8A3B2D]/35 hover:text-[#8A3B2D]"
                }`}
              >
                {categoria}
              </button>
            );
          })}
        </div>

        {noticiasFiltradas.length === 0 ? (
          <div className="mt-16 rounded-[2rem] border border-[#E7DDD3] bg-white p-10 text-center shadow-[0_20px_60px_rgba(46,34,30,0.07)]">
            <p className="font-semibold text-[#6F625C]">
              No hay noticias disponibles en esta categoría.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
            {/* Noticia destacada */}
            {noticiaDestacada && (
              <motion.article
                layout
                onClick={() => setSelectedPost(noticiaDestacada)}
                className="group relative min-h-[560px] cursor-pointer overflow-hidden rounded-[2rem] border border-[#E7DDD3] bg-white shadow-[0_28px_80px_rgba(46,34,30,0.12)]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                aria-label={`Leer noticia ${noticiaDestacada.titulo}`}
              >
                <img
                  src={noticiaDestacada.imagen}
                  alt={noticiaDestacada.titulo}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/95 via-[#5C241B]/55 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(182,90,67,0.22),transparent_30%)]" />

                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <NewsIcon />
                  Destacada
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold text-white/78">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-2 backdrop-blur-md">
                      <TagIcon />
                      {noticiaDestacada.categoria}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-2 backdrop-blur-md">
                      <CalendarIcon />
                      {formatearFecha(noticiaDestacada.fecha)}
                    </span>
                  </div>

                  <h3 className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-black leading-[0.98] tracking-[-0.045em] text-white">
                    {noticiaDestacada.titulo}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
                    {noticiaDestacada.resumen}
                  </p>

                  <button
                    type="button"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#8A3B2D] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_16px_40px_rgba(138,59,45,0.28)] transition duration-300 group-hover:bg-[#5C241B]"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedPost(noticiaDestacada);
                    }}
                  >
                    Leer noticia
                    <ArrowIcon />
                  </button>
                </div>
              </motion.article>
            )}

            {/* Noticias secundarias */}
            <div className="grid gap-6">
              {noticiasSecundarias.length > 0 ? (
                noticiasSecundarias.map((post, index) => (
                  <motion.article
                    layout
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group grid cursor-pointer overflow-hidden rounded-[1.7rem] border border-[#E7DDD3] bg-white shadow-[0_20px_60px_rgba(46,34,30,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(46,34,30,0.12)] sm:grid-cols-[190px_1fr]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    aria-label={`Leer noticia ${post.titulo}`}
                  >
                    <div className="relative min-h-[210px] overflow-hidden sm:min-h-full">
                      <img
                        src={post.imagen}
                        alt={post.titulo}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/50 to-transparent" />

                      <div className="absolute left-4 top-4">
                        <IconBadge tone={index % 2 === 0 ? "wine" : "olive"}>
                          <DocumentIcon />
                        </IconBadge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-bold text-[#6F625C]">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7DDD3] bg-[#FCFAF7] px-3 py-1.5">
                          <TagIcon />
                          {post.categoria}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E7DDD3] bg-[#FCFAF7] px-3 py-1.5">
                          <CalendarIcon />
                          {formatearFecha(post.fecha)}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black leading-tight text-[#2E221E]">
                        {post.titulo}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm font-medium leading-7 text-[#6F625C]">
                        {post.resumen}
                      </p>

                      <button
                        type="button"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#8A3B2D]"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedPost(post);
                        }}
                      >
                        Leer más
                        <ArrowIcon />
                      </button>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="rounded-[1.7rem] border border-[#E7DDD3] bg-white p-8 text-center shadow-[0_20px_60px_rgba(46,34,30,0.07)]">
                  <p className="font-semibold text-[#6F625C]">
                    Solo hay una noticia disponible en esta categoría.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#2E221E]/75 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            role="presentation"
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-blog-title"
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-[#E7DDD3] bg-[#FCFAF7] p-4 text-[#2E221E] shadow-[0_35px_120px_rgba(0,0,0,0.35)]"
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 24 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#5C241B] shadow-lg transition duration-300 hover:bg-[#5C241B] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
                onClick={() => setSelectedPost(null)}
                aria-label="Cerrar noticia"
              >
                <CloseIcon />
              </button>

              <div className="relative overflow-hidden rounded-[1.55rem]">
                <img
                  src={selectedPost.imagen}
                  alt={selectedPost.titulo}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/80 via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-7">
                <div className="mb-5 flex flex-wrap gap-3 text-xs font-bold text-[#6F625C]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white px-3 py-2">
                    <TagIcon />
                    {selectedPost.categoria}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white px-3 py-2">
                    <CalendarIcon />
                    {formatearFecha(selectedPost.fecha)}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white px-3 py-2">
                    <UserIcon />
                    {selectedPost.autor}
                  </span>
                </div>

                <h3
                  id="modal-blog-title"
                  className="text-3xl font-black tracking-tight text-[#2E221E] sm:text-4xl"
                >
                  {selectedPost.titulo}
                </h3>

                <div className="mt-6 space-y-5 text-base font-medium leading-8 text-[#6F625C]">
                  {selectedPost.contenido.map((parrafo, index) => (
                    <p key={index}>{parrafo}</p>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="rounded-full bg-[#8A3B2D] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition duration-300 hover:bg-[#5C241B] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#5C241B] via-[#8A3B2D] to-[#6E7E45]"
      />
    </section>
  );
}