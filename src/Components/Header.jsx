import React, { useEffect, useState } from "react";

export default function Header() {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onKey = (e) => e.key === "Escape" && setOpen(false);
const onResize = () => window.innerWidth >= 768 && setOpen(false);
const onScroll = () => setScrolled(window.scrollY > 50);

document.addEventListener("keydown", onKey);
window.addEventListener("resize", onResize);
window.addEventListener("scroll", onScroll);
return () => {
  document.removeEventListener("keydown", onKey);
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", onScroll);
};

}, []);

const navLinks = [
{ href: "#inicio", label: "Inicio" },
{ href: "#nosotros", label: "Nosotros" },
{ href: "#operaciones", label: "Operaciones" },
{ href: "#servicios", label: "Servicios" },
{ href: "#responsabilidad", label: "Responsabilidad" },
{ href: "#blog", label: "Blog de Noticias" },
{ href: "#contacto", label: "Contacto" },
];

return (
<header
className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
> <div className="flex items-center justify-between px-6 md:px-12 py-4">
{/* LOGO */} <a href="/" className="flex items-center gap-3"> <img
         src="/logo1.png"
         alt="UNIENERGIA"
         className="h-12 w-auto drop-shadow-md"
       /> </a>


        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-medium group transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {link.label}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 
                          bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 
                          group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          ))}
        </nav>


    {/* CTA + BURGER */}
    <div className="flex items-center gap-4">
      <a
        href="#contacto"
        className="hidden md:inline-block bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Contáctanos
      </a>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
      >
        {open ? (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* MOBILE MENU */}
  <div
    className={`${
      open ? "block" : "hidden"
    } md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200`}
  >
    <div className="px-6 pt-6 pb-8 space-y-4">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block py-3 px-3 rounded-md text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 hover:text-white transition"
        >
          {link.label}
        </a>
      ))}
      <div className="pt-4">
        <a
          href="#contacto"
          className="block w-full text-center py-3 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white rounded-full shadow-lg"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </div>
</header>


);
}
