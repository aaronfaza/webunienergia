import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_5d02bls";
    const templateID = "template_imjt47v";
    const publicKey = "e5QKiKOWlzgD6jaSb";

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
      });
  };

  return (
    <section
      id="contacto"
      className="relative py-20 bg-gradient-to-r from-[#E6D9AA]/20 via-white to-[#E6D9AA]/20 text-gray-900 overflow-hidden"
    >
      {/* === SEO TAGS === */}
      <Helmet>
        <title>Contáctanos | Unienergía</title>
        <meta
          name="description"
          content="Ponte en contacto con Unienergía para recibir asesoría sobre energía, proyectos petroleros o soluciones sostenibles. Estamos listos para ayudarte."
        />
        <meta
          name="keywords"
          content="contacto Unienergía, energía, petróleo, sostenibilidad, proyectos industriales, asesoría energética"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unienergia.com/contacto" />

        {/* === Open Graph === */}
        <meta property="og:title" content="Contáctanos | Unienergía" />
        <meta
          property="og:description"
          content="Comunícate con Unienergía para conocer más sobre nuestros servicios energéticos y proyectos industriales."
        />
        <meta property="og:image" content="/Unienergia-59.jpg" />
        <meta property="og:url" content="https://www.unienergia.com/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_PE" />

        {/* === Twitter Card === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contáctanos | Unienergía" />
        <meta
          name="twitter:description"
          content="Estamos aquí para resolver tus dudas y trabajar contigo en soluciones energéticas sostenibles."
        />
        <meta name="twitter:image" content="/Unienergia-59.jpg" />

        {/* === Schema.org === */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Unienergía",
            url: "https://www.unienergia.com",
            logo: "/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+51 987 654 321",
              contactType: "Atención al cliente",
              email: "contacto@unienergia.com",
              areaServed: "PE",
              availableLanguage: ["Español", "Inglés"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Canaval y Moreyra 425",
              addressLocality: "San Isidro",
              addressRegion: "Lima",
              postalCode: "15047",
              addressCountry: "PE",
            },
          })}
        </script>
      </Helmet>

      {/* === Título principal === */}
      <div className="text-center mb-12">
        <h1 className="font-manrope text-4xl md:text-5xl font-extrabold text-[#711610]">
          Contáctanos
        </h1>
        <p className="mt-4 font-opensans text-[#9A999D] max-w-xl mx-auto">
          Estamos aquí para responder tus consultas, escuchar tus ideas y
          construir soluciones energéticas contigo.
        </p>
      </div>

      {/* === Contenido principal === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Correo */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#0033A0] shadow-lg">
              <Mail className="text-white" />
            </div>
            <div>
              <h2 className="font-manrope font-semibold text-lg text-[#000000]">
                Correo electrónico
              </h2>
              <p className="font-opensans text-[#9A999D]">
                contacto@unienergia.com
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#711610] shadow-lg">
              <Phone className="text-white" />
            </div>
            <div>
              <h2 className="font-manrope font-semibold text-lg text-[#000000]">
                Teléfono
              </h2>
              <p className="font-opensans text-[#9A999D]">+51 987 654 321</p>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-[#4CA23C] shadow-lg">
              <MapPin className="text-white" />
            </div>
            <div>
              <h2 className="font-manrope font-semibold text-lg text-[#000000]">
                Ubicación
              </h2>
              <p className="font-opensans text-[#9A999D]">
                Av. Canaval y Moreyra 425, San Isidro 15047
              </p>
            </div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6 border border-[#E6D9AA]/40"
          aria-label="Formulario de contacto de Unienergía"
        >
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm mb-2 font-manrope text-[#711610]"
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
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 font-opensans focus:ring-2 focus:ring-[#711610] outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 font-manrope text-[#0033A0]"
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
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 font-opensans focus:ring-2 focus:ring-[#0033A0] outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm mb-2 font-manrope text-[#4CA23C]"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 font-opensans focus:ring-2 focus:ring-[#4CA23C] outline-none transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-[#711610] to-[#711610] text-white font-manrope font-semibold shadow-lg transition"
          >
            <Send size={20} /> Enviar mensaje
          </motion.button>

          {enviado && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-[#4CA23C] text-center font-manrope font-semibold"
            >
              ¡Tu mensaje ha sido enviado con éxito!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
