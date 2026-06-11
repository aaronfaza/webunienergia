import React, { memo, useEffect, useState } from "react";
import { ChevronRight, Leaf, Zap } from "lucide-react";

const HERO_IMAGES = [
  { src: "/portada1.jpeg", alt: "Planta energética sostenible" },
  { src: "/Unienergia-62.jpg", alt: "Ingenieros trabajando en proyectos energéticos" },
  { src: "/Unienergia-28.jpg", alt: "Infraestructura energética moderna" },
  { src: "/portada2.jpeg", alt: "Energía limpia y sostenible" },
];

const SLIDE_TIME = 5500;

const Hero = memo(function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#06152F] text-white"
      aria-label="Sección principal de Unienergía"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fondo de imágenes */}
      <div className="absolute inset-0 -z-20">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-in-out ${
              index === current
                ? "scale-100 opacity-80"
                : "scale-105 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlays modernos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06152F] via-[#0B2C61]/85 to-[#06152F]/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(76,160,60,0.36),transparent_30%),radial-gradient(circle_at_85%_65%,rgba(174,229,172,0.18),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"
      />

      {/* Contenido */}
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#AEE5AC] shadow-2xl backdrop-blur-md">
              <Leaf size={16} aria-hidden="true" />
              Energía responsable
            </div>

            <h1 className="text-[clamp(2.7rem,7vw,6.4rem)] font-black leading-[0.95] tracking-[-0.06em]">
              Recursos energéticos para un futuro{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#AEE5AC] via-[#6CA01C] to-[#4CA03C] bg-clip-text text-transparent">
                  sostenible
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1 h-2 w-[92%] rounded-full bg-[#4CA03C]/60 blur-sm"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/78 sm:text-lg">
              Desarrollamos soluciones energéticas eficientes, proyectos
              responsables e infraestructura moderna para impulsar el
              crecimiento sostenible del país.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4CA03C] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(76,160,60,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#5DBA49] focus:outline-none focus:ring-4 focus:ring-[#AEE5AC]/40"
              >
                Ver servicios
                <ChevronRight
                  size={19}
                  aria-hidden="true"
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#nosotros"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C61] focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Conoce más
              </a>
            </div>

            {/* Indicadores del slider */}
            <div
              className="mt-10 flex items-center gap-3"
              aria-label="Selector de imágenes principales"
            >
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#AEE5AC] ${
                    index === current
                      ? "w-10 bg-[#AEE5AC]"
                      : "w-2.5 bg-white/35 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>
          </div>

          {/* Tarjeta flotante derecha */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#4CA03C]/30 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4CA03C] shadow-lg">
                  <Zap size={28} aria-hidden="true" />
                </div>

                <h2 className="text-2xl font-black tracking-tight">
                  UNIENERGÍAS
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/75">
                  Innovación, eficiencia y compromiso ambiental en cada proyecto
                  energético.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#06152F]/45 p-4">
                    <p className="text-3xl font-black text-[#AEE5AC]">360°</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                      Gestión integral
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#06152F]/45 p-4">
                    <p className="text-3xl font-black text-[#AEE5AC]">Eco</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">
                      Enfoque sostenible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Línea inferior decorativa */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0B2C61] via-[#4CA03C] to-[#AEE5AC]"
      />
    </section>
  );
});

export default Hero;