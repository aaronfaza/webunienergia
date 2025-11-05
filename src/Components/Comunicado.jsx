import React, { useState, useEffect } from "react";

const Comunicado = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visto = sessionStorage.getItem("comunicadoVisto");
    if (!visto) {
      // Mostrar el comunicado después de 500ms
      setTimeout(() => setShow(true), 500);
    }
  }, []);

  const cerrar = () => {
    setShow(false);
    sessionStorage.setItem("comunicadoVisto", "true");
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      onClick={cerrar} // cierra al hacer clic fuera
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()} // evita que se cierre al hacer clic en la imagen
      >
        {/* 📸 Imagen del comunicado */}
        <img
          src="/flyer.jpg" // 👉 reemplázalo por tu imagen real
          alt="Comunicado importante"
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />

        {/* 🔘 Botón para cerrar */}
        <button
          onClick={cerrar}
          className="absolute top-3 right-3 bg-white/80 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-white transition"
          aria-label="Cerrar comunicado"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Comunicado;
