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
         
           <title>Unienergia: Inicio</title>
            <meta
              name="description"
              content="UNIENERGÍA, empresa vinculada a la Universidad Nacional de Ingeniería (UNI), impulsa proyectos energéticos responsables, sostenibles e innovadores. Integrando energías eficientes y soluciones innovadoras."
            />
            <link rel="canonical" href="https://www.unienergia.pe" />

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
