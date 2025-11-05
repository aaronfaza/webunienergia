import React, { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// ✅ Lazy load de secciones (mejor LCP y menor tamaño inicial)
const Hero = lazy(() => import("./Components/Hero"));
const Nosotros = lazy(() => import("./Components/Nosotros"));
const Operaciones = lazy(() => import("./Components/Operaciones"));
const ServiciosPetroleros = lazy(() => import("./Components/ServiciosPetroleros"));
const Responsabilidad = lazy(() => import("./Components/Responsabilidad"));
const BlogNoticias = lazy(() => import("./Components/BlogNoticias"));
const Contacto = lazy(() => import("./Components/Contacto"));
const CookieConsent = lazy(() => import("./Components/CookieConsent"));
const Comunicado = lazy(() => import("./Components/Comunicado"));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* ✅ Título claro y optimizado */}
        <title>Unienergia: Energía y Servicios Petroleros | Inicio</title>

        {/* ✅ Descripción atractiva */}
        <meta
          name="description"
          content="UNIENERGÍA, empresa vinculada a la Universidad Nacional de Ingeniería (UNI), impulsa proyectos energéticos responsables, sostenibles e innovadores. Energías eficientes, servicios petroleros y compromiso con el desarrollo del Perú."
        />

        {/* ✅ Metadatos generales */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="UNIENERGÍA" />
        <meta name="theme-color" content="#0033A0" />
        <link rel="canonical" href="https://www.unienergia.pe/" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unienergia.pe/" />
        <meta property="og:title" content="Unienergia | Energía y Servicios Petroleros" />
        <meta
          property="og:description"
          content="Proyectos energéticos responsables, sostenibles e innovadores. UNIENERGÍA impulsa el desarrollo energético del Perú."
        />
        <meta property="og:image" content="https://www.unienergia.pe/og-image.jpg" />
        <meta property="og:locale" content="es_PE" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unienergia | Energía y Servicios Petroleros" />
        <meta
          name="twitter:description"
          content="Energías eficientes, sostenibles e innovadoras. UNIENERGÍA, empresa vinculada a la UNI, lidera proyectos energéticos del futuro."
        />
        <meta name="twitter:image" content="https://www.unienergia.pe/og-image.jpg" />

        {/* ✅ Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FENH2BMHGQ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FENH2BMHGQ');
          `}
        </script>

        {/* ✅ JSON-LD */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "UNIENERGÍA",
            "url": "https://www.unienergia.pe",
            "logo": "https://www.unienergia.pe/logo.png",
            "description": "UNIENERGÍA impulsa proyectos energéticos responsables, sostenibles e innovadores en el Perú.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PE"
            },
            "sameAs": [
              "https://www.facebook.com/unienergia",
              "https://www.linkedin.com/company/unienergia"
            ]
          }
        `}</script>
      </Helmet>

      {/* ✅ Contenido principal */}
      <Header />
      <main id="inicio" role="main">
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                padding: "60px",
                color: "#0B2C61",
                fontWeight: "bold",
              }}
              aria-busy="true"
            >
              Cargando contenido...
            </div>
          }
        >
          {/* 👇 Flyer del comunicado */}
          <Comunicado />

          <Hero />
          <Nosotros />
          <Operaciones />
          <ServiciosPetroleros />
          <Responsabilidad />
          <BlogNoticias />
          <Contacto />
          <CookieConsent />
        </Suspense>
      </main>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
