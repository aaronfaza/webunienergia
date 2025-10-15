import React, { Suspense, lazy } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Lazy load de secciones principales (mejora rendimiento y LCP)
const Hero = lazy(() => import("./Components/Hero"));
const Nosotros = lazy(() => import("./Components/Nosotros"));
const Operaciones = lazy(() => import("./Components/Operaciones"));
const ServiciosPetroleros = lazy(() => import("./Components/ServiciosPetroleros"));
const Responsabilidad = lazy(() => import("./Components/Responsabilidad"));
const BlogNoticias = lazy(() => import("./Components/BlogNoticias"));
const Contacto = lazy(() => import("./Components/Contacto"));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* 🔹 Metadatos esenciales */}
        <title>Unienergia | Energía, Innovación y Servicios Petroleros en Perú</title>
        <meta
          name="description"
          content="Unienergia es líder en servicios petroleros, exploración, producción y soluciones energéticas sostenibles en el Perú. Conoce nuestro compromiso con la innovación y el desarrollo sostenible."
        />
        <meta
          name="keywords"
          content="Unienergia, energía, petróleo, servicios petroleros, Lote IX, sostenibilidad, exploración, producción, energía renovable, Perú"
        />
        <meta name="author" content="Unienergia S.A.C." />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es" />
        <link rel="canonical" href="https://www.unienergia.com.pe/" />

        {/* 🔸 Open Graph (para redes sociales) */}
        <meta property="og:locale" content="es_PE" />
        <meta property="og:site_name" content="Unienergia" />
        <meta property="og:title" content="Unienergia | Energía y Servicios Petroleros" />
        <meta
          property="og:description"
          content="Soluciones integrales en energía y servicios petroleros, con innovación y compromiso ambiental."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.unienergia.com.pe/" />
        <meta property="og:image" content="https://www.unienergia.com.pe/og-image.jpg" />

        {/* 🔹 Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unienergia | Energía y Servicios Petroleros" />
        <meta
          name="twitter:description"
          content="Conoce a Unienergia, empresa peruana líder en energía y servicios petroleros sostenibles."
        />
        <meta name="twitter:image" content="https://www.unienergia.com.pe/og-image.jpg" />

        {/* 🔹 Favicon y Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B2C61" />

        {/* 🔹 Datos estructurados (JSON-LD para SEO) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Unienergia S.A.C.",
            "url": "https://www.unienergia.com.pe",
            "logo": "https://www.unienergia.com.pe/logo.png",
            "description": "Empresa peruana especializada en energía, petróleo y sostenibilidad.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PE"
            },
            "sameAs": [
              "https://www.facebook.com/unienergia",
              "https://www.linkedin.com/company/unienergia",
              "https://www.instagram.com/unienergia"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+51 999 999 999",
              "contactType": "Customer Service",
              "availableLanguage": ["Spanish", "English"]
            }
          }
        `}</script>

        {/* 🔹 Etiquetas adicionales para SEO técnico */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Estructura principal del sitio */}
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
          <Hero />
          <Nosotros />
          <Operaciones />
          <ServiciosPetroleros />
          <Responsabilidad />
          <BlogNoticias />
          <Contacto />
        </Suspense>
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
