import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

/* =========================
   ICONOS PERSONALIZADOS SVG
========================= */

function IconBadge({ children, tone = "wine" }) {
  const tones = {
    wine: "bg-[#8A3B2D] text-white shadow-[0_14px_34px_rgba(138,59,45,0.22)]",
    olive: "bg-[#6E7E45] text-white shadow-[0_14px_34px_rgba(110,126,69,0.20)]",
    light:
      "bg-[#F6F1EA] text-[#8A3B2D] border border-[#E7DDD3] shadow-[0_10px_24px_rgba(46,34,30,0.06)]",
  };

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 7.5L12 12.5L18.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.2 5.8C8.7 5.3 9.5 5.3 10 5.8L11.7 7.5C12.2 8 12.2 8.8 11.7 9.3L10.8 10.2C10.6 10.4 10.6 10.8 10.7 11C11.5 12.6 12.8 13.9 14.4 14.7C14.7 14.8 15 14.8 15.2 14.6L16.1 13.7C16.6 13.2 17.4 13.2 17.9 13.7L19.6 15.4C20.1 15.9 20.1 16.7 19.6 17.2L18.7 18.1C17.9 18.9 16.8 19.2 15.8 18.9C10.8 17.4 6.6 13.2 5.1 8.2C4.8 7.2 5.1 6.1 5.9 5.3L8.2 5.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20C12 20 18 14.2 18 9.8C18 6.6 15.3 4 12 4C8.7 4 6 6.6 6 9.8C6 14.2 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 19.5H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 19V9.5L12 6L17 9.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 12H10.01M14 12H14.01M10 15H10.01M14 15H14.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 17.5L6.4 15.6C5.2 14.5 4.5 13 4.5 11.3C4.5 7.8 7.9 5 12 5C16.1 5 19.5 7.8 19.5 11.3C19.5 14.8 16.1 17.6 12 17.6C10.9 17.6 9.8 17.4 8.9 17L6 17.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 11.2H15M9 14H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8V12L14.8 13.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 12.2L10.9 14.6L15.8 9.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* =========================
   DATOS
========================= */

const datosContacto = [
  {
    titulo: "Correo electrónico",
    valor: "contacto@unienergia.pe",
    icon: <MailIcon />,
  },
  {
    titulo: "Teléfono",
    valor: "+051 442-2277",
    icon: <PhoneIcon />,
  },
  {
    titulo: "Ubicación",
    valor: "Av. Canaval y Moreyra 425 Of. 31, San Isidro",
    icon: <PinIcon />,
  },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      alert("Faltan configurar las variables de entorno de EmailJS.");
      return;
    }

    setEnviando(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setEnviado(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setTimeout(() => setEnviado(false), 4000);
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
      })
      .finally(() => setEnviando(false));
  };

  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-[#FCFAF7] py-24 text-[#2E221E] sm:py-28 lg:py-32"
      aria-labelledby="contacto-heading"
    >
      <Helmet>
        <title>Contacto | Unienergia ABC</title>
        <meta
          name="description"
          content="Contáctate con Unienergia ABC para consultas, proyectos y soluciones energéticas."
        />
      </Helmet>

      {/* Fondo decorativo más corporativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(138,59,45,0.10),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(110,126,69,0.08),transparent_28%),linear-gradient(180deg,#FFFCFA_0%,#F8F2EC_48%,#F3E8DE_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[linear-gradient(to_right,rgba(138,59,45,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(138,59,45,0.05)_1px,transparent_1px)] bg-[size:78px_78px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7DDD3] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D] shadow-[0_10px_24px_rgba(46,34,30,0.06)]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8A3B2D]" />
            Contacto corporativo
          </div>

          <h2
            id="contacto-heading"
            className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#2E221E]"
          >
            Un equipo listo para atender tu{" "}
            <span className="bg-gradient-to-r from-[#8A3B2D] via-[#B65A43] to-[#5C241B] bg-clip-text text-transparent">
              operación
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#6F625C] sm:text-lg">
            En <strong className="text-[#2E221E]">Unienergia ABC</strong> atendemos
            consultas comerciales, técnicas y operativas con una imagen más
            institucional, cercana y profesional.
          </p>
        </motion.header>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Info panel */}
          <motion.aside
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-[#E7DDD3] bg-white p-6 shadow-[0_24px_70px_rgba(46,34,30,0.08)] sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#8A3B2D]/8 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-[#6E7E45]/8 blur-3xl"
            />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F6F1EA] text-[#8A3B2D] border border-[#E7DDD3]">
                <BuildingIcon />
              </div>

              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D]">
                Información de contacto
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-[#2E221E]">
                Comunícate con nuestra empresa
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-[#6F625C] sm:text-base">
                Diseñamos esta sección con un lenguaje visual más sobrio y
                alineado a una empresa operadora de lote petrolero.
              </p>

              <div className="mt-8 space-y-4">
                {datosContacto.map((item, index) => (
                  <div
                    key={item.titulo}
                    className="group flex gap-4 rounded-[1.35rem] border border-[#E7DDD3] bg-[#FCFAF7] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(46,34,30,0.08)]"
                  >
                    <IconBadge tone={index === 1 ? "olive" : "wine"}>
                      {item.icon}
                    </IconBadge>

                    <div>
                      <h4 className="text-base font-black text-[#2E221E]">
                        {item.titulo}
                      </h4>
                      <p className="mt-1 text-sm font-medium leading-6 text-[#6F625C]">
                        {item.valor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[#7A3125] bg-[#5C241B] p-6 text-white shadow-[0_18px_45px_rgba(92,36,27,0.18)]">
                <div className="flex items-start gap-4">
                  <IconBadge tone="light">
                    <ClockIcon />
                  </IconBadge>

                  <div>
                    <h4 className="font-black">Horario de atención</h4>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      Lunes a viernes en horario administrativo. Nuestro equipo
                      responderá a la brevedad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-[#E7DDD3] bg-white p-6 shadow-[0_24px_70px_rgba(46,34,30,0.08)] sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8A3B2D]/8 blur-3xl"
            />

            <div className="relative">
              <div className="mb-8">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F6F1EA] text-[#8A3B2D] border border-[#E7DDD3]">
                  <MessageIcon />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A3B2D]">
                  Formulario de contacto
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-[#2E221E]">
                  Envíanos un mensaje
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#6F625C]">
                  Completa tus datos y nos comunicaremos contigo.
                </p>
              </div>

              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-black text-[#5C241B]"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre"
                    className="w-full rounded-2xl border border-[#E7DDD3] bg-[#FCFAF7] px-5 py-4 text-sm font-medium text-[#2E221E] outline-none transition duration-300 placeholder:text-[#9B8B84] focus:border-[#8A3B2D]/45 focus:bg-white focus:ring-4 focus:ring-[#8A3B2D]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-black text-[#5C241B]"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="correo@empresa.com"
                    className="w-full rounded-2xl border border-[#E7DDD3] bg-[#FCFAF7] px-5 py-4 text-sm font-medium text-[#2E221E] outline-none transition duration-300 placeholder:text-[#9B8B84] focus:border-[#8A3B2D]/45 focus:bg-white focus:ring-4 focus:ring-[#8A3B2D]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-sm font-black text-[#5C241B]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full resize-none rounded-2xl border border-[#E7DDD3] bg-[#FCFAF7] px-5 py-4 text-sm font-medium text-[#2E221E] outline-none transition duration-300 placeholder:text-[#9B8B84] focus:border-[#8A3B2D]/45 focus:bg-white focus:ring-4 focus:ring-[#8A3B2D]/10"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: enviando ? 1 : 1.02 }}
                whileTap={{ scale: enviando ? 1 : 0.98 }}
                type="submit"
                disabled={enviando}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#8A3B2D] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_16px_40px_rgba(138,59,45,0.22)] transition duration-300 hover:bg-[#5C241B] focus:outline-none focus:ring-4 focus:ring-[#8A3B2D]/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
                {enviando ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                ) : (
                  <SendArrow />
                )}
              </motion.button>

              {enviado && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-[#E7DDD3] bg-[#F7F0EB] px-4 py-3 text-center text-sm font-black text-[#8A3B2D]"
                >
                  <CheckIcon />
                  Tu mensaje ha sido enviado con éxito.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#5C241B] via-[#8A3B2D] to-[#6E7E45]"
      />
    </section>
  );
}

function SendArrow() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 12L19.5 5.5L16.5 18.5L11.5 13.5L4.5 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M11.5 13.5L19.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}