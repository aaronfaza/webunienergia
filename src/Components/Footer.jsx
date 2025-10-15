
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Footer() {
  return (
    <footer className="bg-[#0B2C61] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div>
          <img src="logo1.png" alt="" srcset="" />
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Comprometidos con la energía responsable y sostenible, brindando
            soluciones innovadoras en el sector hidrocarburos.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-white transition">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#operaciones" className="hover:text-white transition">
                Operaciones
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#responsabilidad" className="hover:text-white transition">
                Responsabilidad
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +51 987 654 321
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> contacto@unienergia.pe
            </li>
            <li className="flex items-center gap-2">
              Lima: Av. Canaval y Moreyra 425 31, Lima, Perú.
            </li>
            <li className="flex items-center gap-2">
              Operaciones: Calle Tarapacá PARIÑAS, TALARA, PIURA.
            </li>
             <li className="flex items-center gap-2">
              Serv. Petroleros: Av. Parcela F Mz. B Zona Industrial. Lote 02. Pariñas, Talara, Piura, PE
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#1877F2] transition"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#E4405F] transition"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-[#0A66C2] transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Unienergia. Todos los derechos reservados.
      </div>
    </footer>
  );
}

