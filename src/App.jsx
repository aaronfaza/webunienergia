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
          {/* 🔹 Metadatos para SEO */}
          <title>Unienergia | Energía y Servicios Petroleros</title>
          <meta
            name="description"
            content="Unienergia ofrece soluciones energéticas integrales, servicios petroleros, y compromiso con el desarrollo sostenible."
          />
          <meta
            name="keywords"
            content="energía, petróleo, servicios petroleros, sostenibilidad, Unienergia"
          />
          <meta name="author" content="Unienergia" />
          <link rel="canonical" href="https://www.unienergia.pe/" />

          {/* 🔸 Open Graph (para Facebook, LinkedIn, etc.) */}
          <meta property="og:title" content="Unienergia | Energía y Servicios Petroleros" />
          <meta
            property="og:description"
            content="Soluciones integrales en energía y servicios petroleros. Conoce más sobre Unienergia."
          />
          <meta property="og:image" content="https://www.unienergia.pe/og-image.jpg" />
          <meta property="og:url" content="https://www.unienergia.pe/" />
          <meta property="og:type" content="website" />

          {/* 🔸 Google Analytics 4 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FENH2BMHGQ"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FENH2BMHGQ');
            `}
          </script>

          {/* 🔸 JSON-LD (estructura para buscadores) */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Unienergia",
              "url": "https://www.unienergia.pe",
              "logo": "https://www.unienergia.pe/logo.png",
              "sameAs": [
                "https://www.facebook.com/unienergia",
                "https://www.linkedin.com/company/unienergia"
              ]
            }
          `}</script>
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
