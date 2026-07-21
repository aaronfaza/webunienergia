import React from "react";
import { ShieldCheck, FileText, Calendar, Eye, Download } from "lucide-react";

const documentos = [
  {
    titulo: "Informe de Rendición de Cuentas de Titulares",
    descripcion:
      "Documento presentado a la Contraloría General de la República.",
    periodo: "Julio 2026",
    archivo: "/documentos/informe-rendicion-cuentas.pdf",
  },
  {
    titulo: "Informe de Transferencia de Gestión",
    descripcion:
      "Documento presentado a la Contraloría General de la República.",
    periodo: "Julio 2026",
    archivo: "/documentos/informe-transferencia-gestion.pdf",
  },
];

export default function Transparencia() {
  return (
    <section
      id="transparencia"
      className="relative py-28 bg-[#F9FAFB] text-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Título principal */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#4CA23C] to-[#0033A0] shadow-lg">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0075A0] to-[#0033A0] leading-[1.15] pb-2">
            Transparencia y Rendición de Cuentas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ponemos a disposición de nuestros grupos de interés la información y
            documentos presentados ante la Contraloría General de la República,
            en cumplimiento de nuestras obligaciones de transparencia.
          </p>
        </div>

        {/* Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentos.map((doc, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <FileText className="text-red-500" size={28} />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doc.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{doc.descripcion}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <Calendar size={16} className="text-[#4CA23C]" />
                  <span>Periodo: {doc.periodo}</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={doc.archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#4CA23C] text-[#4CA23C] font-medium hover:bg-[#4CA23C] hover:text-white transition-all duration-300"
                  >
                    <Eye size={18} />
                    Ver documento
                  </a>
                  <a
                    href={doc.archivo}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0033A0] text-white font-medium hover:bg-[#00227a] transition-all duration-300"
                  >
                    <Download size={18} />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
