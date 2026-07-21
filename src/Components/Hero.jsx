import React, { memo, useEffect, useState } from "react";

const HERO_IMAGES = [
  {
    src: "/portada1.jpeg",
    alt: "Operación petrolera e infraestructura energética",
  },
  {
    src: "/Unienergia-62.jpg",
    alt: "Equipo técnico en operaciones petroleras",
  },
  {
    src: "/Unienergia-28.jpg",
    alt: "Infraestructura operativa del Lote IX",
  },
  {
    src: "/portada2.jpeg",
    alt: "Servicios petroleros especializados",
  },
];

const SLIDE_TIME = 5600;

function ArrowIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
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

function OilShieldIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.5C12 20.5 18.5 17.2 18.5 10.1V6.5L12 4L5.5 6.5V10.1C5.5 17.2 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.3C12 8.3 9.8 11.1 9.8 13.2C9.8 14.6 10.8 15.7 12 15.7C13.2 15.7 14.2 14.6 14.2 13.2C14.2 11.1 12 8.3 12 8.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceToolIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 17.5L13.7 10.3"
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

function PumpJackAnimation() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-[470px] w-[720px] overflow-hidden lg:block"
    >
      <svg
        viewBox="0 0 860 520"
        className="absolute bottom-[-18px] right-[-80px] h-full w-full"
        fill="none"
      >
        {/* suelo */}
        <path
          d="M98 418H760"
          stroke="#5C241B"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.22"
        />

        {/* estructura */}
        <path
          d="M260 418L392 168"
          stroke="#5C241B"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.28"
        />
        <path
          d="M528 418L392 168"
          stroke="#5C241B"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.28"
        />
        <path
          d="M324 292H468"
          stroke="#5C241B"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.25"
        />

        {/* balancín animado */}
        <g className="pump-arm">
          <path
            d="M365 158C426 112 512 92 596 96C638 98 673 109 700 130C630 162 541 180 454 176C418 174 389 167 365 158Z"
            fill="#8A3B2D"
            opacity="0.26"
          />

          <path
            d="M692 130L738 184"
            stroke="#8A3B2D"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.26"
          />

          <path
            d="M740 184C756 187 770 197 780 211C762 219 741 215 727 202C731 195 735 189 740 184Z"
            fill="#8A3B2D"
            opacity="0.28"
          />
        </g>

        {/* rueda / contrapeso */}
        <circle
          cx="590"
          cy="98"
          r="20"
          fill="#6E7E45"
          opacity="0.22"
          className="pump-wheel"
        />

        {/* varilla */}
        <path
          className="pump-rod"
          d="M596 96V430"
          stroke="#2E221E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="17 13"
          opacity="0.26"
        />

        {/* pozo */}
        <path
          d="M596 430V490"
          stroke="#5C241B"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.24"
        />
        <path
          d="M558 490H634"
          stroke="#5C241B"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.24"
        />

        {/* gotas de crudo animadas */}
        <g className="oil-drops">
          <path
            d="M632 280C632 280 618 300 618 315C618 324 624 331 632 331C640 331 646 324 646 315C646 300 632 280 632 280Z"
            fill="#2E221E"
            opacity="0.45"
          />
          <path
            d="M666 315C666 315 656 329 656 340C656 347 661 352 666 352C671 352 676 347 676 340C676 329 666 315 666 315Z"
            fill="#5C241B"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}

const Hero = memo(function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_TIME);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#FCFAF7] text-[#2E221E]"
      aria-label="Sección principal de Unienergia ABC"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>
        {`
          @keyframes pumpBeam {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3.8deg); }
          }

          @keyframes rodMove {
            0%, 100% { transform: translateY(-10px); }
            50% { transform: translateY(16px); }
          }

          @keyframes oilDrop {
            0% { transform: translateY(-12px) scale(.9); opacity: 0; }
            25% { opacity: 1; }
            100% { transform: translateY(42px) scale(1.08); opacity: 0; }
          }

          @keyframes heroFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes softPulse {
            0%, 100% { opacity: .55; transform: scale(1); }
            50% { opacity: .82; transform: scale(1.04); }
          }

          .pump-arm {
            transform-box: fill-box;
            transform-origin: 34% 50%;
            animation: pumpBeam 5.4s ease-in-out infinite;
          }

          .pump-rod {
            animation: rodMove 5.4s ease-in-out infinite;
          }

          .oil-drops {
            animation: oilDrop 3.2s ease-in-out infinite;
          }

          .pump-wheel {
            animation: softPulse 4s ease-in-out infinite;
          }

          .hero-card-float {
            animation: heroFloat 7s ease-in-out infinite;
          }
        `}
      </style>

      {/* Fondo claro con tonos del logo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFCFA_0%,#FCFAF7_42%,#F3E8DE_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_20%,rgba(138,59,45,0.12),transparent_34%),radial-gradient(circle_at_88%_24%,rgba(110,126,69,0.10),transparent_30%),radial-gradient(circle_at_55%_100%,rgba(92,36,27,0.10),transparent_42%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-[0.32] bg-[linear-gradient(to_right,rgba(138,59,45,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,59,45,0.05)_1px,transparent_1px)] bg-[size:78px_78px]"
      />

      {/* Formas de contraste */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 -z-10 h-[58%] w-[48%] bg-[#5C241B]"
        style={{
          clipPath: "polygon(28% 0, 100% 0, 100% 78%, 58% 100%, 0 58%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 -z-10 h-[36%] w-[44%] bg-[#F1E2DA]"
        style={{
          clipPath: "polygon(0 22%, 70% 0, 100% 100%, 0 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-[#B65A43]/20 blur-3xl"
      />

      <PumpJackAnimation />

      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:px-12 lg:pt-44">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Texto principal */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8A3B2D]/18 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#8A3B2D] shadow-[0_14px_36px_rgba(46,34,30,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#8A3B2D]" />
              Operadora del Lote IX · Servicios petroleros
            </div>

            <h1 className="text-[clamp(2.65rem,7vw,6.1rem)] font-black leading-[0.95] tracking-[-0.06em] text-[#2E221E]">
              Operación petrolera y servicios para{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#8A3B2D] via-[#B65A43] to-[#5C241B] bg-clip-text text-transparent">
                  pozos e infraestructura
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1 h-2 w-[92%] rounded-full bg-[#8A3B2D]/22 blur-sm"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base font-semibold leading-8 text-[#5F514C] sm:text-lg">
              En{" "}
              <strong className="font-black text-[#2E221E]">
                Unienergia ABC
              </strong>{" "}
              gestionamos operaciones en el Lote IX y brindamos servicios
              petroleros especializados para continuidad operativa, control
              técnico y soporte en campo.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#operaciones"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8A3B2D] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(138,59,45,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#5C241B] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20"
              >
                Ver operaciones
                <ArrowIcon />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-[#8A3B2D]/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-[#8A3B2D] shadow-[0_14px_36px_rgba(46,34,30,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#5C241B]/30 hover:bg-[#5C241B] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/14"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E7DDD3] bg-white p-4 shadow-[0_14px_38px_rgba(46,34,30,0.06)]">
                <p className="text-2xl font-black text-[#8A3B2D]">Lote IX</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#6F625C]">
                  Operación
                </p>
              </div>

              <div className="rounded-2xl border border-[#E7DDD3] bg-white p-4 shadow-[0_14px_38px_rgba(46,34,30,0.06)]">
                <p className="text-2xl font-black text-[#5C241B]">Campo</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#6F625C]">
                  Soporte técnico
                </p>
              </div>

              <div className="hidden rounded-2xl border border-[#E7DDD3] bg-white p-4 shadow-[0_14px_38px_rgba(46,34,30,0.06)] sm:block">
                <p className="text-2xl font-black text-[#6E7E45]">360°</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#6F625C]">
                  Servicios
                </p>
              </div>
            </div>
          </div>

          {/* Carrusel visual */}
          <div className="relative z-10">
            <div className="hero-card-float relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-[#5C241B] p-3 shadow-[0_34px_110px_rgba(92,36,27,0.28)]">
              <div className="relative h-[420px] overflow-hidden rounded-[1.9rem] bg-[#2E221E] sm:h-[500px] lg:h-[560px]">
                {HERO_IMAGES.map((img, index) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-in-out ${
                      index === current
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#2E221E]/88 via-[#5C241B]/30 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#2E221E]/80 to-transparent"
                />

                <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/16 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Imagen operativa
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-[1.4rem] border border-white/14 bg-[#2E221E]/88 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8A3B2D] text-white">
                        <OilShieldIcon />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#E8C7BA]">
                          Gestión en campo
                        </p>
                        <h2 className="text-xl font-black text-white">
                          Operación + Servicios
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-medium leading-7 text-white/78">
                      Exploración, producción, infraestructura, monitoreo y
                      servicios técnicos especializados para el sector
                      hidrocarburos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores del carrusel */}
            <div
              className="mt-6 flex items-center justify-center gap-3"
              aria-label="Selector de imágenes principales"
            >
              {HERO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8A3B2D] ${
                    index === current
                      ? "w-10 bg-[#8A3B2D]"
                      : "w-2.5 bg-[#BFAEA6] hover:bg-[#8A3B2D]/70"
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>

            <div className="absolute -left-8 -top-8 hidden h-24 w-24 rounded-full bg-[#8A3B2D]/14 blur-2xl lg:block" />
            <div className="absolute -bottom-8 right-12 hidden h-28 w-28 rounded-full bg-[#6E7E45]/14 blur-2xl lg:block" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#5C241B] via-[#8A3B2D] to-[#6E7E45]"
      />
    </section>
  );
});

export default Hero;