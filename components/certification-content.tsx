"use client"

import { Mail, Phone, MapPin, FileText } from "lucide-react"
import { useState } from "react"
import StandardsCarousel from "./standards-carousel"

type SectionKey = 0 | 1 | 2 | 3

interface CertificationContentProps {
activeSection: SectionKey | null
}

const offeredStandards = [
{
title: "Formativo",
codes: [
{ code: "EC0076", pdf: "/pdf/ESTANDARES/EC0076.pdf" },
{ code: "EC0217.01", pdf: "/pdf/ESTANDARES/EC0217.01.pdf" },
{ code: "EC0301", pdf: "/pdf/ESTANDARES/ECO301.pdf" },
{ code: "EC0366", pdf: "/pdf/ESTANDARES/EC0366.pdf" },
],
},
{
title: "Valuación",
codes: [
{ code: "EC0664", pdf: "/pdf/ESTANDARES/EC0664.pdf" },
{ code: "EC0865", pdf: "/pdf/ESTANDARES/EC0865.pdf" },
{ code: "EC1182", pdf: "/pdf/ESTANDARES/EC1182.pdf" },
{ code: "EC1306", pdf: "/pdf/ESTANDARES/EC1306.pdf" },
],
},
{
title: "Energía",
codes: [
{ code: "EC0412", pdf: "/pdf/ESTANDARES/EC0412.pdf" },
{ code: "EC0431", pdf: "/pdf/ESTANDARES/EC0431.pdf" },
{ code: "EC0414", pdf: "/pdf/ESTANDARES/EC0414.pdf" },
{ code: "EC0586.01", pdf: "/pdf/ESTANDARES/EC0586.01.pdf"},
{ code: "EC1181", pdf: "/pdf/ESTANDARES/EC1181.pdf" },
],
},
{
title: "S.Salud en el Trabajo",
codes: [
{ code: "EC0391.1", pdf: "/pdf/ESTANDARES/EC0391.1.pdf" },
{ code: "EC0493", pdf: "/pdf/ESTANDARES/EC0493.pdf" },
{ code: "EC0397.01", pdf: "/pdf/ESTANDARES/EC0397.01.pdf" },
{ code: "EC0680", pdf: "/pdf/ESTANDARES/EC0680.pdf" },
],
},
]

export default function CertificationContent({ activeSection }: CertificationContentProps) {
const getBackgroundStyle = () => {
const colors = {
0: {
bg: "#9470DE",
bgLight: "#f3e8ff",
accent: "#7c3aed",
title: "#6B2D8F",
borderColor: "#9470DE",
titleBg: "#f3e8ff",
},
1: {
bg: "#74B74A",
bgLight: "#f0fdf4",
accent: "#65a30d",
title: "#4A7C2A",
borderColor: "#74B74A",
titleBg: "#f0fdf4",
},
2: {
bg: "#005BB1",
bgLight: "#eff6ff",
accent: "#0369a1",
title: "#003D7A",
borderColor: "#005BB1",
titleBg: "#eff6ff",
},
3: {
bg: "#13D4CB",
bgLight: "#f0fdfa",
accent: "#0891b2",
title: "#0A8B82",
borderColor: "#13D4CB",
titleBg: "#f0fdfa",
},
}
return colors[activeSection || 0]
}

const style = getBackgroundStyle()

const [selectedEvaluator, setSelectedEvaluator] = useState<string | null>(null)
const evaluadores = [
  {
    id: "numael",
    nombre: "Ing Numael Cruz",
    email: "ingnumaelcruz@gmail.com",
    phone: "720 686 0472",
    address: "Toluca, Queretaro y Guanajuato",
    standards: "EC0076, EC0217.01, EC0586.01, EC1181",
  },
  {
    id: "ilma",
    nombre: "Ilma Gama",
    email: "itgamaf2017@gmail.com",
    phone: "639 124 3099",
    address: "Hermosillo, Sonora",
    standards: "EC0865, EC0664, EC1182, EC0217.01, EC0076",
  },
  {
    id: "cidtes",
    nombre: "CIDTES",
    centro: "CIDTES Energía y Sustentabilidad",
    email: "contacto@cidtes.org",
    phone: "+52 55 6812 5783",
    address: "Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330",
  },
]

const selectedData = evaluadores.find(
  (evaluador) => evaluador.id === selectedEvaluator
)

if (activeSection === null) {
return (
<div className="flex flex-col items-end justify-center min-h-screen">
<div className="text-right space-y-12">
<div className="flex flex-col items-end">
<img src="/images/ECE-logo.png" alt="Logo CONOCER" className="h-32 w-auto mb-3" />

        <h2 className="text-5xl font-semibold text-gray-600 max-w-xl" style={{ fontWeight: 700 }}>
          Somos una Entidad de Certificación y Evaluación{" "}
          <span className="font-bold">ECE472-21</span> acreditada ante el CONOCER
        </h2>
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-600">Interactúa con el círculo CIDTES</p>
      </div>
    </div>
  </div>
)

}

return (
<div className="flex flex-col justify-start min-h-screen space-y-8 pr-4 pt-12 pb-12">
<h2 className="text-5xl font-bold leading-tight" style={{ color: style.title }}>
{activeSection === 0 && "¿Qué es el CONOCER?"}
{activeSection === 1 && "Proceso de Evaluación y Certificación"}
{activeSection === 2 && "¿Dónde puedo certificarme?"}
{activeSection === 3 && "Estándares ofertados"}
</h2>

  <div className="space-y-4 pr-2">
    {activeSection === 0 && (
      <>
        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base text-gray-800 leading-relaxed">
            <span className="font-bold" style={{ color: style.title }}>
              El Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER)
            </span>{" "}
            es una entidad paraestatal sectorizada de la Secretaría de Educación Pública (SEP),{" "}
              conformado por un órgano de gobierno tripartita con representantes de los trabajadores, los
              empresarios y el gobierno.
          </p>
        </div>

        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base font-bold mb-3" style={{ color: style.title }}>
            ¿Qué es un estándar de competencia?
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            Es un <span className="font-bold">documento oficial</span> aplicable en toda la República Mexicana que
            sirve de <span className="font-bold">referencia para evaluar y certificar</span> la competencia de las
            personas.
          </p>
        </div>

        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base font-bold mb-3" style={{ color: style.title }}>
            ¿Qué es la Certificación de Competencia Laboral?
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            La certificación de competencias <span className="font-bold">es el proceso</span> a través del cual las
            personas{" "}
            <span className="font-bold">
              demuestran por medio de evidencias: los conocimientos, habilidades y destrezas
            </span>{" "}
            necesarias para cumplir una función en su sector y/o área laboral, a un alto nivel de desempeño.
          </p>
        </div>
      </>
    )}

    {activeSection === 1 && (
      <>
        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base font-bold mb-3" style={{ color: style.title }}>
            Paso 1: Registro del candidato.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            A través de un formulario se solicitan los datos generales del candidato para la apertura de su
            expediente.
          </p>
        </div>

        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base font-bold mb-3" style={{ color: style.title }}>
            Paso 2: Aplicación de la evaluación diagnóstica.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            Se aplica una evaluación diagnóstica sin costo y de acuerdo con los resultados se sugiere realizar la
            evaluación o capacitarse.
          </p>
        </div>

        <div
          className="border-l-4 px-6 py-5 rounded-xl shadow-md"
          style={{
            borderColor: style.borderColor,
            backgroundColor: "white",
            borderLeftWidth: "6px",
          }}
        >
          <p className="text-base font-bold mb-3" style={{ color: style.title }}>
            Paso 3: Curso de alineación sobre el estándar.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            Es una orientación sobre la estructura, aspectos técnicos y conocimientos del estándar que el candidato
            deberá poseer previos a la evaluación.
          </p>
        </div>
      </>
    )}

    {activeSection === 2 && (
      <>
        <p
          className="text-base font-semibold mb-4 bg-white px-3 py-2 rounded-lg inline-block"
          style={{ color: style.accent }}
        >
          Estándares ofertados: EC0076, EC0865, EC1182
        </p>

        <div className="space-y-4">
          {[
            {
              name: "Centro de Evaluación AUTODINERO",
              contact: "Brenda Martínez",
              email: "enlace@autodinero.com",
              phone: "55 1670 1050 Ext. 1090",
              address: "Calle Pennsylvania #127, Parque San Andrés Coyoacán, C.P. 04040, CDMX",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5758520732106!2d-99.15348902544604!3d19.34420298191641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd3ff6eceed%3A0x1dc83641b93e05db!2sPennsylvania%20127%2C%20Parque%20San%20Andr%C3%A9s%2C%20Coyoac%C3%A1n%2C%2004040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1782759308198!5m2!1ses-419!2smx",
            },
            {
              name: "Centro de Evaluación SEVAC",
              contact: "Lauro Romero Martínez",
              email: "ventas@centrosevac.com",
              phone: "818 687 5499",
              address: "Guerrero Norte #1003, Col. Centro, C.P.64000, Monterrey, Nuevo León",
              standards: "EC0076, EC0865, EC0664, EC1182, EC1306",
              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5013.2061751341425!2d-100.31599794052273!3d25.684741112270476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629584f58f6199%3A0x91fcb8373215747e!2sVicente%20Guerrero%201003%2C%20Centro%2C%2064000%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1782759246234!5m2!1ses-419!2smx",
            },
          ].map((center, idx) => (
            <div key={idx}>
              {idx === 1 && center.standards && (
                <p
                  className="text-base font-semibold mb-4 bg-white px-3 py-2 rounded-lg inline-block"
                  style={{ color: style.accent }}
                >
                  Estándares ofertados: {center.standards}
                </p>
              )}

              <div
                className="border-l-4 px-6 py-5 rounded-xl shadow-md overflow-hidden"
                style={{
                  borderColor: style.borderColor,
                  backgroundColor: "white",
                  borderLeftWidth: "6px",
                }}
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-base">{center.name}</h3>
                    <p className="text-base text-gray-700 font-semibold mb-3">{center.contact}</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail size={16} style={{ color: style.accent, flexShrink: 0 }} />
                        <a href={`mailto:${center.email}`} className="text-sm text-gray-700 hover:underline">
                          {center.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={16} style={{ color: style.accent, flexShrink: 0 }} />
                        <span className="text-sm text-gray-700">{center.phone}</span>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin size={16} style={{ color: style.accent, marginTop: "2px", flexShrink: 0 }} />
                        <span className="text-sm text-gray-700">{center.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-48 h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      title={`Mapa de ${center.name}`}
                      src={center.map}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          {evaluadores.map((evaluador) => (
            <button
              key={evaluador.id}
              onClick={() =>
                setSelectedEvaluator(
                  selectedEvaluator === evaluador.id
                    ? null
                    : evaluador.id
                )
              }
              className={`flex-1 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                selectedEvaluator === evaluador.id
                  ? "ring-4 ring-blue-200"
                  : ""
              }`}
              style={{ backgroundColor: style.accent }}
            >
              {evaluador.nombre}
            </button>
          ))}
        </div>

        {selectedData && (
          <div className="mt-6">
            {selectedData.standards && (
              <p
                className="text-base font-semibold mb-4 bg-white px-3 py-2 rounded-lg inline-block"
                style={{ color: style.accent }}
              >
                Estándares ofertados: {selectedData.standards}
              </p>
            )}

            <div
              className="border-l-4 px-6 py-5 rounded-xl shadow-md"
              style={{
                borderColor: style.borderColor,
                backgroundColor: "white",
                borderLeftWidth: "6px",
              }}
            >
              <h3 className="font-bold text-gray-900 mb-1 text-base">
                {selectedData.centro || "Evaluador independiente"}
              </h3>

              <p className="text-base text-gray-700 font-semibold mb-3">
                {selectedData.nombre}
              </p>

              <div className="space-y-2">

                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    style={{
                      color: style.accent,
                      flexShrink: 0,
                    }}
                  />

                  <a
                    href={`mailto:${selectedData.email}`}
                    className="text-sm text-gray-700 hover:underline"
                  >
                    {selectedData.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    style={{
                      color: style.accent,
                      flexShrink: 0,
                    }}
                  />

                  <span className="text-sm text-gray-700">
                    {selectedData.phone}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    style={{
                      color: style.accent,
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />

                  <span className="text-sm text-gray-700">
                    {selectedData.address}
                  </span>
                </div>

              </div>
            </div>
          </div>
        )}
      </>
    )}

    {activeSection === 3 && (
      <div className="space-y-6">
        {offeredStandards.map((category) => (
          <div key={category.title} className="space-y-3">
            <h3
              className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
              style={{ color: "#13D4CB" }}
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.codes.map((item) => {
                const hasPdf = item.pdf && item.pdf.trim() !== ""

                return hasPdf ? (
                  <a
                    key={item.code}
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-300"
                  >
                    <span>{item.code}</span>
                    <FileText className="w-4 h-4 text-red-600" />
                  </a>
                ) : (
                  <div
                    key={item.code}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg shadow-sm border border-gray-300"
                  >
                    <span>{item.code}</span>
                    <FileText className="w-4 h-4 text-gray-400" />
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

)
}


