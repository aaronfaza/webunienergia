import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-md text-white border border-white/30 shadow-lg rounded-2xl p-4 w-[90%] md:w-[600px] flex flex-col md:flex-row items-center justify-between z-50">
      <div className="text-center md:text-left mb-2 md:mb-0">
        <p className="text-sm text-gray-100">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
          Al continuar navegando, acepta nuestra{" "}
          <a
            href="/politica-de-privacidad"
            className="underline text-blue-300 hover:text-blue-400"
          >
            Política de Privacidad
          </a>.
        </p>
      </div>
      <button
        onClick={handleAccept}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all"
      >
        Aceptar
      </button>
    </div>
  );
}
