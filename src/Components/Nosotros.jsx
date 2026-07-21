import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Telescope,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stats = [
  {
    icon: Zap,
    value: "360°",
    label: "Gestión energética integral",
  },
  {
    icon: Leaf,
    value: "Eco",
    label: "Enfoque sostenible",
  },
  {
    icon: Factory,
    value: "UNI",
    label: "Respaldo académico y técnico",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    text: "Aplicamos investigación, tecnología y visión estratégica en cada proyecto energético.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    text: "Promovemos operaciones seguras, eficientes y alineadas al cuidado ambiental.",
  },
  {
    icon: BadgeCheck,
    title: "Excelencia",
    text: "Trabajamos con estándares técnicos sólidos y enfoque profesional.",
  },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden bg-[#06152F] py-24 text-white sm:py-28 lg:py-32"
      aria-labelledby="titulo-nosotros"
    >
      {/* Fondos decorativos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(76,160,60,0.30),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(174,229,172,0.16),transparent_28%),linear-gradient(180deg,#06152F_0%,#081C3F_48%,#020617_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Bloque principal */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Texto */}
          <motion.article
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#AEE5AC] shadow-2xl backdrop-blur-md">
              <Leaf size={16} aria-hidden="true" />
              Sobre nosotros
            </div>

            <h2
              id="titulo-nosotros"
              className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.055em] text-white"
            >
              Impulsamos energía con visión{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#AEE5AC] via-[#6CA01C] to-[#4CA03C] bg-clip-text text-transparent">
                  sostenible
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1 h-2 w-[92%] rounded-full bg-[#4CA03C]/60 blur-sm"
                />
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
              <strong className="font-black text-white">Unienergia ABC</strong>{" "}
              es una empresa enfocada en el desarrollo de soluciones
              energéticas responsables, sostenibles e innovadoras. Integramos
              conocimiento técnico, investigación, tecnología y compromiso
              ambiental para fortalecer el desarrollo energético del Perú.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/12 bg-white/[0.08] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4CA03C] shadow-[0_12px_30px_rgba(76,160,60,0.35)]">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <p className="text-3xl font-black text-[#AEE5AC]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.15em] text-white/60">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4CA03C] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(76,160,60,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#5DBA49] focus:outline-none focus:ring-4 focus:ring-[#AEE5AC]/35"
                aria-label="Ver servicios de Unienergia ABC"
              >
                Nuestros servicios
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-wide text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C61] focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="Ir al contacto de Unienergia ABC"
              >
                Contáctanos
              </a>
            </div>
          </motion.article>

          {/* Imagen */}
          <motion.figure
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-[#4CA03C]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-8 h-64 w-64 rounded-full bg-[#AEE5AC]/15 blur-3xl"
            />

            <div className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.7rem]">
                <img
                  src="/Unienergia-45.jpg"
                  alt="Equipo profesional de Unienergia ABC trabajando en proyectos energéticos"
                  loading="lazy"
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
                />
              </div>

              <div className="absolute inset-3 rounded-[1.7rem] bg-gradient-to-t from-[#06152F]/78 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-[#06152F]/72 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4CA03C] shadow-lg">
                  <Zap size={24} aria-hidden="true" />
                </div>

                <figcaption className="text-lg font-black text-white">
                  Energía, innovación y sostenibilidad
                </figcaption>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Desarrollamos proyectos con impacto técnico, ambiental y
                  social.
                </p>
              </div>
            </div>
          </motion.figure>
        </div>

        {/* Misión y Visión */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4CA03C]/20 blur-3xl transition duration-300 group-hover:bg-[#4CA03C]/35"
            />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4CA03C] shadow-[0_15px_35px_rgba(76,160,60,0.35)]">
                <Target size={27} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-black text-white">Misión</h3>

              <p className="mt-4 text-base leading-8 text-white/72">
                Contribuir al desarrollo de una matriz energética sostenible en
                el Perú, integrando energías renovables, eficiencia técnica y
                uso responsable de los recursos. Nuestra gestión se apoya en la
                investigación, la innovación y la excelencia profesional.
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#AEE5AC]/16 blur-3xl transition duration-300 group-hover:bg-[#AEE5AC]/28"
            />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0B2C61] shadow-[0_15px_35px_rgba(255,255,255,0.15)]">
                <Telescope size={27} aria-hidden="true" />
              </div>

              <h3 className="text-2xl font-black text-white">Visión</h3>

              <p className="mt-4 text-base leading-8 text-white/72">
                Ser una empresa energética líder en el Perú, reconocida por su
                compromiso con la sostenibilidad, la innovación tecnológica y el
                cuidado del medio ambiente, promoviendo un futuro energético
                limpio, eficiente y responsable.
              </p>
            </div>
          </motion.article>
        </div>

        {/* Valores */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.7rem] border border-white/12 bg-[#020617]/35 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#AEE5AC]/35 hover:bg-white/[0.08]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#AEE5AC]">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-black text-white">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0B2C61] via-[#4CA03C] to-[#AEE5AC]"
      />
    </section>
  );
}