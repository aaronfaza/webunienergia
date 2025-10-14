import React, { Suspense, lazy } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const Hero = lazy(() => import("./Components/Hero"));
const Nosotros = lazy(() => import("./Components/Nosotros"));
const Operaciones = lazy(() => import("./Components/Operaciones"));
const ServiciosPetroleros = lazy(() => import("./Components/ServiciosPetroleros"));
const Responsabilidad = lazy(() => import("./Components/Responsabilidad"));
const BlogNoticias = lazy(() => import("./Components/BlogNoticias"));
const Contacto = lazy(() => import("./Components/Contacto"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "50px", color: "#4CA23C" }}>
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
      <Footer />
    </>
  );
}

export default App;
