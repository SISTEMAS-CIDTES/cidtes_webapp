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

const certificationCenters = [
  {
    type: "Centro de Certificación y Evaluación",
    image: "/images/cidtes-logo.png",
    nombre: "CIDTES Energía y Sustentabilidad",
    email: "contacto@cidtes.org",
    phone: "55 6812 5783",
    standards: "",
    address:
      "Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7306628558636!2d-99.15398032544623!3d19.337490281921703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1788384935591!5m2!1ses-419!2smx",
  },
  {
    type: "Centros de Evaluación",
    image: "/images/impulso.jpeg",
    nombre:
      "Impulso Metropolitano Mantenimiento y Servicios Integrales S.A. de C.V.",
    email: "imv_impulso@yahoo.com.mx",
    phone: "55 33 82 28 84",
    standards: "EC0076, EC0248",
    address: 
      "Ursulo Galván 20-int 101, Coapa, Presidentes Ejidales 1ra Secc, Coyoacán, 04470 Ciudad de México, CDMX",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43237.5431816231!2d-99.13466720421167!3d19.325219676214623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce014851da767f%3A0xc348119a6ccfc834!2sImpulso%20Metropolitano%2C%20Mantenimiento%20y%20Servicios%20Integrales%20SA%20de%20CV!5e0!3m2!1ses-419!2smx!4v1788386245731!5m2!1ses-419!2smx",
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


if (activeSection === null) {
return (
<div className="flex flex-col items-end justify-center min-h-screen">
<div className="text-right space-y-12">
<div className="flex flex-col items-end">
<img src="/images/ECE-logo.png" alt="Logo CONOCER" className="h-32 w-auto mb-3" />
        <h2 className="text-5xl font-semibold max-w-xl" style={{ fontWeight: 700 }}>
          Somos una Entidad de Certificación y Evaluación{" "}
          <span className="font-bold">ECE472-21</span> acreditada ante el CONOCER
        </h2>
      </div>

      <div>
        <p className="text-2xl font-bold">↖  Interactúa con el círculo CIDTES</p>
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
      <div className="space-y-8">
        {certificationCenters.map((center, index) => (
          <div key={center.nombre} className="space-y-3">
            {index === 0 && (
              <h3
                className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
                style={{ color: style.title }}
              >
                Centro de Certificación y Evaluación
              </h3>
            )}
            {index === 1 && (
              <h3
                className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
                style={{ color: style.title }}
              >
                Centros de Evaluación
              </h3>
            )}

            <div
              className="
                w-fit
                max-w-full
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                border-l-4
              "
              style={{
                borderColor: style.borderColor,
              }}
            >
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="flex-1 min-w-0 p-6">
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: style.title }}
                  >
                    {center.nombre}
                  </h4>

                  <div className="space-y-3 text-sm text-gray-700">
                    {/* Correo */}
                    {center.email && (
                      <div className="flex items-start gap-3">
                        <Mail
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: style.title }}
                        />

                        <span className="break-words">
                          {center.email}
                        </span>
                      </div>
                    )}

                    {/* Teléfono */}
                    {center.phone && (
                      <div className="flex items-start gap-3">
                        <Phone
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: style.title }}
                        />
                        <span>
                          {center.phone}
                        </span>
                      </div>
                    )}

                    {/* Dirección */}
                    {center.address && (
                      <div className="flex items-start gap-3">
                        <MapPin
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: style.title }}
                        />
                        <span className="leading-relaxed">
                          {center.address}
                        </span>
                      </div>
                    )}

                    {/* Estándares */}
                    {center.standards && (
                      <div className="flex items-start gap-3">
                        <span>
                          <strong>Estándares:</strong>{" "}
                          {center.standards}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* MAPA */}
                <div
                  className="
                    w-full
                    md:w-[250px]
                    lg:w-[250px]
                    flex-shrink-0
                    p-4
                  "
                >
                  <div
                    className="
                      w-full
                      h-full
                      min-h-[220px]
                      rounded-xl
                      overflow-hidden
                      shadow-sm
                    "
                  >
                    <iframe
                      src={center.map}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Ubicación de ${center.nombre}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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


