import React, { useEffect, useState } from "react";
import { ChevronRight, Leaf, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#operaciones", label: "Operaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#responsabilidad", label: "Responsabilidad" },
  { href: "#blog", label: "Noticias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-3 pt-3 transition-all duration-500 sm:px-5"
      role="banner"
      aria-label="Barra de navegación principal de Unienergia ABC"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 lg:px-5 ${
            scrolled || open
              ? "border-white/20 bg-[#06152F]/95 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-white/20 bg-[#06152F]/88 shadow-[0_16px_55px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          }`}
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3"
            aria-label="Ir al inicio de Unienergia ABC"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white shadow-lg">
              <img
                src="/logo1.png"
                alt="Logo corporativo de Unienergia ABC"
                className="h-8 w-auto object-contain"
                loading="eager"
                width="80"
                height="80"
              />
            </span>

            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-black uppercase tracking-[0.18em] text-white drop-shadow-md">
                Unienergia ABC
              </span>

              <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#AEE5AC] drop-shadow-md">
                <Leaf size={11} aria-hidden="true" />
                Energía sostenible
              </span>
            </span>
          </a>

          {/* NAV DESKTOP */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Menú principal de navegación"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-300 ${
                    isActive
                      ? "bg-[#4CA03C]/25 text-[#AEE5AC]"
                      : "text-white hover:bg-white/12 hover:text-[#AEE5AC]"
                  }`}
                  aria-label={`Ir a la sección ${link.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10 drop-shadow-md">
                    {link.label}
                  </span>

                  <span
                    className={`absolute bottom-1.5 left-1/2 h-1 rounded-full bg-[#AEE5AC] transition-all duration-300 -translate-x-1/2 ${
                      isActive ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4CA03C] px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-[0_15px_35px_rgba(76,160,60,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5DBA49] focus:outline-none focus:ring-4 focus:ring-[#AEE5AC]/35"
              aria-label="Ir a la sección de contacto"
            >
              Contáctanos
              <ChevronRight
                size={16}
                aria-hidden="true"
                className="transition duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* BOTÓN MÓVIL */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white shadow-lg backdrop-blur-md transition duration-300 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-[#AEE5AC]/30 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open
              ? "mt-3 max-h-[80vh] opacity-100"
              : "pointer-events-none mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.75rem] border border-white/20 bg-[#06152F]/98 p-3 shadow-[0_25px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <nav className="space-y-1" aria-label="Menú móvil de navegación">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition duration-300 ${
                      isActive
                        ? "bg-[#4CA03C] text-white"
                        : "text-white hover:bg-white/12 hover:text-[#AEE5AC]"
                    }`}
                    aria-label={`Ir a la sección ${link.label}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="drop-shadow-md">{link.label}</span>

                    <ChevronRight
                      size={17}
                      aria-hidden="true"
                      className={isActive ? "opacity-100" : "opacity-60"}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-white/15 pt-4">
              <a
                href="#contacto"
                onClick={closeMenu}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#4CA03C] px-5 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-[0_15px_35px_rgba(76,160,60,0.45)] transition duration-300 hover:bg-[#5DBA49] focus:outline-none focus:ring-4 focus:ring-[#AEE5AC]/35"
                aria-label="Ir a la sección de contacto"
              >
                Solicitar información
                <ChevronRight
                  size={17}
                  aria-hidden="true"
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Capa oscura para móvil */}
      <button
        type="button"
        onClick={closeMenu}
        aria-label="Cerrar menú móvil"
        className={`fixed inset-0 -z-10 bg-[#020617]/80 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}