"use client"

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const scrollToContact = () => {
  const footer = document.getElementById("contacto")

  if (footer) {
    footer.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

const centros = [
  {
    image: "images/impulso.jpeg",
    nombre: "Impulso Metropolitano Mantenimiento y Servicios Integrales S.A. de C.V.",
    email : "imv_impulso@yahoo.com.mx",
    phone: "55 33 82 28 84",
    standards: "EC0076, EC0248",
  },
  {
    image: "images/uandani.jpeg",
    nombre: "Centro Ecotecnólogico UANDANI",
    email : "uandani@gira.org.mx",
    phone: "43 42 66 40 09",
    address: "Carretera Pátzcuaro a Erongaricuaro No.28, Col. Tzentzenguaro, Pátzcuaro, Michoacan, 61613",
  },
]

export default function CertificationExtendedContent() {
  return (
    <div className="w-full space-y-16 py-12 -mt-24">
      <div className="w-full max-w-7xl mx-auto space-y-16 py-12 px-4 md:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h2 className="text-4xl font-bold text-[#005BB1] text-center">
            Centros de Evaluación
          </h2>

          <div className="space-y-6">
            {centros.map((centro) => (
              <div
                key={centro.nombre}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl shadow-md border-l-4 w-full"
                style={{
                  borderColor: "#005BB1",
                  backgroundColor: "white",
                }}
              >

                {/* Imagen */}
                <div className="w-full sm:w-1/3 md:w-2/5 flex-shrink-0">
                  <img
                    src={`/${centro.image}`}
                    alt={centro.nombre}
                    className="w-full h-auto max-h-64 object-contain rounded-lg shadow-md"
                  />
                </div>

                {/* Información */}
                <div className="flex-1 min-w-0 space-y-3">

                  <h3 className="text-2xl font-bold text-gray-900 break-words">
                    {centro.nombre}
                  </h3>

                  {centro.email && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail
                        size={20}
                        className="flex-shrink-0"
                        style={{ color: "#005BB1" }}
                      />

                      <a
                        href={`mailto:${centro.email}`}
                        className="hover:underline break-all"
                      >
                        {centro.email}
                      </a>
                    </div>
                  )}

                  {centro.phone && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone
                        size={20}
                        className="flex-shrink-0"
                        style={{ color: "#005BB1" }}
                      />

                      <span>{centro.phone}</span>
                    </div>
                  )}

                  {centro.address && (
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin
                        size={20}
                        className="flex-shrink-0 mt-1"
                        style={{ color: "#005BB1" }}
                      />

                      <span>{centro.address}</span>
                    </div>
                  )}

                  {centro.standards && (
                    <div className="pt-2">
                      <p className="font-semibold text-[#005BB1]">
                        Estándares ofertados:
                      </p>

                      <p className="text-gray-700">
                        {centro.standards}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Section: What is CE/EI */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-4xl font-bold text-[#005BB1] text-center">
          ¿Quién puede ser un Centro de Evaluación (CE) / Evaluador Independiente (EI)?
        </h2>
        <p className="text-lg text-gray-800 text-center leading-relaxed">
          Una persona moral, pública o privada (CE) o persona física (EI) autorizados por el CONOCER y acreditada por
          CIDTES ECE0472-21, para evaluar las competencias de las personas.
        </p>

        {/* Flow Diagram */}
        <div className="space-y-6">
          {/* CE Flow */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-bold text-2xl"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              CE
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#8B8B8B" }}
            >
              <div className="text-[#005BB1]">Persona Moral</div>
              <div className="text-xs text-gray-600">(Pública/Privada)</div>
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              <div>Acreditada por</div>
              <div className="font-bold">CONOCER y CIDTES</div>
            </div>
          </div>

          {/* EI Flow */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-bold text-2xl"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              EI
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              Persona Física
            </div>
            <ArrowRight size={32} className="text-[#005BB1]" />
            <div
              className="px-6 py-4 rounded-lg border-2 text-center font-semibold text-sm"
              style={{ borderColor: "#005BB1", color: "#005BB1" }}
            >
              <div>Acreditada por</div>
              <div className="font-bold">CONOCER y CIDTES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Benefits */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-4xl font-bold text-[#005BB1]">Beneficios de convertirte en un CE/EI:</h2>
        <ul className="space-y-3 text-lg text-gray-800">
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Generar una nueva línea de negocios</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Aumentar tus ingresos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Promover la profesionalización de tus clientes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Acreditar la experiencia laboral de tus clientes con reconocimiento oficial</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Respaldar tus capacitaciones con Certificación Oficial SEP-CONOCER</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Oportunidad para registrarte como Agente Capacitador Externo de la STPS y extender constancias DC-3 de tus cursos</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#005BB1] font-bold mt-1">•</span>
            <span>Ofrecer capacitación continua para las empresas y sus trabajadores</span>
          </li>
        </ul>
        <div className="flex justify-center pt-6">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg font-semibold text-white bg-[#0369A1] hover:bg-[#0251A0] transition-all duration-300 hover:shadow-lg"
          >
            Más información
          </button>
        </div>
      </div>

      {/* Section: How to do it */}
      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-[#005BB1] text-center mb-8">
          ¿Quieres saber cómo? Integra tu expediente:
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* CE Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#005BB1]">Centro de Evaluación (CE)</h3>
            <ul className="space-y-3 text-gray-800 text-base">
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                <span>Firma de convenio de colaboración para la acreditación y operación como CE</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                <span>Copia del Acta Constitutiva o Decreto de creación y sus modificaciones en su caso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">3.</span>
                <span>Constancia de Situación Fiscal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">4.</span>
                <span>Copia del Poder del Representante Legal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">5.</span>
                <span>Copia de Identificación del Representante Legal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">6.</span>
                <span>Copia de comprobante de domicilio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">7.</span>
                <span>CV empresarial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">8.</span>
                <span>Comprobar documentalmente la existencia o acceso a infraestructura administrativa y de equipamiento para realizar las funciones como CE en congruencia con los estándares de Competencia Laboral que solicita.</span>
              </li>
            </ul>
          </div>

          {/* EI Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#005BB1]">Evaluador Independiente (EI)</h3>
            <ul className="space-y-3 text-gray-800 text-base">
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                <span>Firma de convenio de colaboración para la acreditación y operación como EI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                <span>CV actualizado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">3.</span>
                <span>Constancia de Situación Fiscal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">4.</span>
                <span>Copia de Identificación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-[#005BB1] flex-shrink-0">5.</span>
                <span>Copia de comprobante de domicilio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-4">
          <h4 className="text-xl font-bold text-[#005BB1]">Para la operación del CE/EI deben tener:</h4>
          <ol className="space-y-3 text-gray-800 text-base ml-4">
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#005BB1] flex-shrink-0">i.</span>
              <span>Capacidad técnica para la recopilación de evidencias del desempeño laboral en el sitio de trabajo o en situación simulada.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-[#005BB1] flex-shrink-0">ii.</span>
              <div className="space-y-2">
                <span className="block font-bold">Garantizar la calidad de las evaluaciones:</span>
                <ol className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#005BB1] flex-shrink-0">1.</span>
                    <span>Certificar en el estándar EC0076 "Evaluación de la competencia de candidatos con base en estándares de Competencia", al personal encargado de la evaluación de candidatos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#005BB1] flex-shrink-0">2.</span>
                    <span>Certificarse en el estándar de la función específica que se desea evaluar.</span>
                  </li>
                </ol>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}


