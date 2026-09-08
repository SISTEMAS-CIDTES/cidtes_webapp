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

const independentEvaluators = [
  {
    nombre: "Ilma Gama",
    email: "itgamaf2017@gmail.com",
    phone: "639 124 3099",
    address: "Hermosillo, Sonora",
    standards: "EC0865, EC0664, EC1182, EC0217.01, EC0076",
  },
  {
    nombre: "Ing. Numael Cruz",
    email: "ingnumaelcruz@gmail.com",
    phone: "720 686 0472",
    address: "Toluca, Querétaro y Guanajuato",
    standards: "EC0076, EC0217.01, EC0586.01, EC1181",
  },
]

const evaluationCenters = [
  {
    nombre: "Centro Ecotecnológico UANDANI",
    email: "uandani@gira.org.mx",
    phone: "43 42 66 40 09",
    standards: "",
    address:
      "Carretera Pátzcuaro a Erongaricuaro No. 28, Col. Tzentzenguaro, Pátzcuaro, Michoacán, 61613",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30082.01436749158!2d-101.67883334545344!3d19.530800500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d95000991b829%3A0xe9e4598744651da0!2sUandani!5e0!3m2!1ses-419!2smx!4v1788386351531!5m2!1ses-419!2smx",
  },
  {
    nombre: "Centro de Evaluación AUTODINERO",
    contacto: "Brenda Martínez",
    email: "enlace@autodinero.com",
    phone: "55 1670 1050 Ext. 1090",
    standards: "EC0076, EC0865, EC1182",
    address:
      "Calle Pennsylvania #127, Parque San Andrés Coyoacán, C.P. 04040, CDMX",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15058.303406624362!2d-99.150914!3d19.344203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd3ff6eceed%3A0x1dc83641b93e05db!2sPennsylvania%20127%2C%20Parque%20San%20Andr%C3%A9s%2C%20Coyoac%C3%A1n%2C%2004040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1788744979924!5m2!1ses-419!2smx",
  },
  {
    nombre: "Centro de Evaluación SEVAC",
    contacto: "Lauro Romero Martínez",
    email: "ventas@centrosevac.com",
    phone: "818 687 5499",
    standards: "EC0076, EC0865, EC0664, EC1182, EC1306",
    address:
      "Guerrero Norte #1003, Col. Centro, C.P. 64000, Monterrey, Nuevo León",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28764.932608052564!2d-100.312124!3d25.684002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629584f58f6199%3A0x91fcb8373215747e!2sVicente%20Guerrero%201003%2C%20Centro%2C%2064000%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1788745242438!5m2!1ses-419!2smx",
  },
]

export default function CertificationExtendedContent() {
  return (
    <div className="flex flex-col justify-start min-h-screen space-y-8 pr-4 pt-12 pb-12 w-full py-12 -mt-23">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5 items-start -mt-20">
      <div className="space-y-5 -mt-28">
        <h3 className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block text-[#003D7A]">
          Evaluadores Independientes
        </h3>
        {independentEvaluators.map((evaluator) => (
          <div
            key={evaluator.nombre}
            className="
              bg-white
              rounded-2xl
              shadow-md
              border-l-4
              border-[#005BB1]
              overflow-hidden
            "
          >
            <div className="p-5">
              <h4 className="text-xl font-bold text-[#003D7A] mb-4">
                {evaluator.nombre}
              </h4>

              <div className="space-y-3 text-sm text-gray-700">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#003D7A" }}
                  />
                  <span className="break-words">
                    {evaluator.email}
                  </span>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#003D7A" }}
                  />
                  <span>
                    {evaluator.phone}
                  </span>
                </div>

                {/* Dirección */}
                {evaluator.address && (
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#003D7A" }}
                    />
                    <span className="leading-relaxed">
                      {evaluator.address}
                    </span>
                  </div>
                )}

                {/* Estándares */}
                {evaluator.standards && (
                  <div className="flex items-start gap-3">
                    <span>
                      <strong>Estándares:</strong>{" "}
                      {evaluator.standards}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 -mt-10">
        {evaluationCenters.map((center) => (
          <div
            key={center.nombre}
            className="
              bg-white
              rounded-2xl
              shadow-md
              overflow-hidden
              border-l-4
            "
            style={{
              borderColor: "#005BB1",
            }}
          >

            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 min-w-0 p-5">
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: "#003D7A" }}
                >
                  {center.nombre}
                </h4>

                {/* Contacto */}
                {center.contacto && (
                  <p className="text-base font-semibold text-gray-700 mb-3">
                    {center.contacto}
                  </p>
                )}

                <div className="space-y-3 text-sm text-gray-700">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#003D7A" }}
                    />
                    <span className="break-words">
                      {center.email}
                    </span>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3">
                    <Phone
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#003D7A" }}
                    />
                    <span>
                      {center.phone}
                    </span>
                  </div>

                  {/* Dirección */}
                  {center.address && (
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#003D7A" }}
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
              <div className="w-full md:w-[200px] flex-shrink-0 p-4">
                <div
                  className="
                    w-full
                    h-full
                    min-h-[180px]
                    rounded-xl
                    overflow-hidden
                    shadow-sm
                  "
                >
                  <iframe
                    src={center.map}
                    className="w-full h-full"
                    style={{
                      border: 0,
                      minHeight: "180px",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Ubicación de ${center.nombre}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
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


