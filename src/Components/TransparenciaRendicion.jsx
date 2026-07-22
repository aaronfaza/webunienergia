
import "./TransparenciaRendicion.css";

const documentos = [
  {
    id: 1,
    titulo: "RENDICIÓN DE CUENTAS DE TITULARES - JULIO - 2026",
    descripcion:
      "Documento presentado a la Contraloría General de la República.",
    periodo: "Año 2026",
    archivo: "/documentos/RENDICIÓN DE CUENTAS DE TITULARES - JULIO - 2026.pdf",
  },
  {
    id: 2,
    titulo: "TRANSFERENCIA DE GESTIÓN DE EMPRESA DEL ESTADO Y OTROS ORGANISMOS SUJETOS A CONTROL JULIO - 2026",
    descripcion:
      "Documento presentado a la Contraloría General de la República.",
    periodo: "Año 2026",
    archivo: "/documentos/INFORME TRANSFERENCIA DE GESTIÓN DE EMPRESA DEL ESTADO Y OTROS ORGANISMOS SUJETOS A CONTROL JULIO - 2026.pdf",
  },
];

function IconoDocumento() {
  return (
    <div className="transparencia-pdf-icon" aria-hidden="true">
      <svg viewBox="0 0 80 96">
        <path
          d="M15 3H52L75 26V88C75 91.3 72.3 94 69 94H15C11.7 94 9 91.3 9 88V9C9 5.7 11.7 3 15 3Z"
          fill="#ffffff"
          stroke="#d1d7d4"
          strokeWidth="2"
        />

        <path
          d="M52 3V22C52 25.3 54.7 28 58 28H75"
          fill="#edf1ef"
          stroke="#d1d7d4"
          strokeWidth="2"
        />

        <path
          d="M31 70C38 55 42 39 38 34C34 29 31 39 35 48C40 59 52 69 59 69C64 69 61 64 55 63C43 61 26 67 22 73C19 78 26 78 31 70Z"
          fill="none"
          stroke="#e31b23"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>PDF</span>
    </div>
  );
}

function IconoCalendario() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function IconoVer() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function IconoDescargar() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14a2 2 0 0 0 2-2v-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2" />
    </svg>
  );
}

function IconoCabecera() {
  return (
    <svg
      className="transparencia-heading-icon"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M13 5h16l8 8v17a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" />
      <path d="M29 5v8h8" />
      <path d="M15 17h11M15 23h11" />
      <path d="m27 30 4 4 8-9" />
    </svg>
  );
}

function TransparenciaRendicion() {
  return (
    <section
      className="transparencia-section"
      id="transparencia-rendicion"
    >
      <div className="transparencia-container">
        <header className="transparencia-header">


          <p className="transparencia-eyebrow">Información institucional</p>

          <h2>Transparencia y Rendición de Cuentas</h2>

          <div className="transparencia-title-detail">
            <span />
            <svg
              viewBox="0 0 20 26"
              width="14"
              height="19"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12.5 0 2 14h7l-1.5 12L18 10h-7L12.5 0Z" />
            </svg>
            <span />
          </div>

          <p className="transparencia-intro">
            Ponemos a disposición de nuestros grupos de interés la información
            y documentos presentados ante la Contraloría General de la
            República, en cumplimiento de nuestras obligaciones de
            transparencia.
          </p>
        </header>

        <div className="transparencia-grid">
          {documentos.map((documento) => (
            <article className="transparencia-card" key={documento.id}>
              <div className="transparencia-card-document">
                <IconoDocumento />
              </div>

              <div className="transparencia-card-content">
                <h3>{documento.titulo}</h3>

                <p>{documento.descripcion}</p>

                <div className="transparencia-periodo">
                  <IconoCalendario />
                  <span>
                    <strong>Periodo:</strong> {documento.periodo}
                  </span>
                </div>

                <div className="transparencia-actions">
                  <a
                    href={documento.archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transparencia-button"
                    aria-label={`Visualizar ${documento.titulo}`}
                  >
                    <IconoVer />
                    <span>Ver documento</span>
                  </a>

                  <span
                    className="transparencia-actions-divider"
                    aria-hidden="true"
                  />

                  <a
                    href={documento.archivo}
                    download
                    className="transparencia-button"
                    aria-label={`Descargar ${documento.titulo}`}
                  >
                    <IconoDescargar />
                    <span>Descargar PDF</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransparenciaRendicion;