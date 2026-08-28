"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavHeader } from "@/components/nav-header"

const areasConsultoria = [
  {
    id: 1,
    title: "Energía",
    image: "/images/consultoria/energia.png",
    color: "bg-[#009FE3]",
    accentColor: "#009FE3",
    darkColor: "#0078AD", //titulo
    mediumColor: "#009FE3", //problematica
    lightColor: "#45B5E8", //detalle del servicio
    lighterColor: "#9ADAF2", //beneficios
    problematicaTextColor:"#D9F3FC",
    detailTextColor: "#005B83",
    benefitsTextColor: "#00445F",
    services: [
      {
        title: "Diagnósticos Energéticos",
        problematica: [
          "Altos costos de operación y mantenimiento que impactan negativamente en la productividad.",
          "Alto consumo energético que contribuye al deterioro del medio ambiente.",
          "Elevados costos de facturación de electricidad y combustibles.",
        ],
        detalle: [
          "Visita técnica en sitio.",
          "Entrevistas sobre la operación.",
          "Mediciones de los sistemas de consumo energético.",
          "Consolidación y análisis de hallazgos.",
          "Análisis y cambio de tarifas eléctricas.",
          "Elaboración de propuestas de ahorro de energía (iluminación, bombeo, aire acondicionado, refrigeración, factor de potencia, motores, etc.)",
          "Propuesta económica de oportunidades de ahorro.",
          "Análisis de reducción de dióxido de carbono.",
          "Elaboración de reporte."
        ],
        beneficios: [
          "Identificación de potenciales de ahorro energético.",
          "Reducción de consumo energético en instalaciones.",
          "Propuestas para la reducción de emisiones de dióxido de carbono.",
          "Acción socialmente responsable.",
          "Personal calificado en materia de eficiencia energética.",
          "Conocimiento de los conceptos de la facturación del servicio de energía eléctrica.",
          "Conocimiento de la eficiencia en la operación de los sistemas de consumo energético.",
          "Plan de inversión a corto y mediano plazo.",
        ],
      },
      {
        title: "Asesoría e implementación de Sistemas de Gestión de la Energía \n ISO 50001",
        problematica: [
          "Requisito legal para los Usuarios con Patrón de Alto Consumo Energético (UPAC´s).",
          "Falta de planeación sobre gestión de la energía en las organizaciones.",
          "Poco conocimiento sobre el desempeño energético y su impacto en las finanzas de la organización.",
          "Deficiente selección de indicadores de desempeño energéticos en los sistemas e instalaciones.",
        ],
        detalle: [
          "Definición de alcances y límites.",
          "Contexto de la organización.",
          "Elaboración de la política energética de la organización.",
          "Auditoría energética.",
          "Instalación del Comité de Energía.",
          "Línea base (LBEn) e indicadores energéticos (IDEn).",
          "Construcción del plan de acción de energía.",
          "Implementación del sistema.",
          "Campaña de promoción y difusión.",
          "Diseño de campaña de capacitación.",
          "Medición y de verificación de desempeño energético.",
          "Auditoría Interna.",
        ],
        beneficios: [
          "Cumplimiento de las obligaciones gubernamentales.",
          "Implantar en la organización una cultura integral para el cuidado de la energía y el ambiente.",
          "Compromiso organizativo.",
          "Benchmarking energético.",
          "Reducción de costos.",
          "Aprovechamiento de recursos financieros y energéticos.",
          "Proyección de la imagen corporativa.",
        ],
      },
      {
        title: "Legislación y normatividad energética",
        problematica: [
          "Desconocimiento de los riesgos y oportunidades por los cambios en la regulación en el ámbito de energía."
        ],
        detalle: [
          "Diagnóstico de cumplimiento con regulaciones de energía.",
          "Requisitos y oportunidades de usuarios calificados",
        ],
        beneficios: [
          "Mitigar el riesgo por falta de conocimiento sobre las nuevas regulaciones aplicables.",
          "Identificación temprana de las oportunidades que se presentarán en el mercado eléctrico.",
          "Identificar las mejores opciones de agregación para negociar tarifas competitivas con los suministradores.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Seguridad y Salud en el Trabajo",
    image: "/images/consultoria/Seguridad.png",
    color: "bg-[#0052A1]",
    accentColor: "#0052A1",
    darkColor: "#003B75", //titulo
    mediumColor: "#0052A1", //problematica
    lightColor: "#407BB8", //detalle del servicio
    lighterColor: "#8FB1D4", //beneficios
    problematicaTextColor:"#DCEEFF",
    detailTextColor: "#003B75",
    benefitsTextColor: "#002B55",
    services: [
      {
        title: "Implementación del Programa de Autogestión en Seguridad y Salud en el Trabajo (PASST)",
        problematica: [
          "Altas tasas de accidentes",
        ],
        detalle: [
          "Identificación de normas aplicables al giro de la empresa",
          "Instauración del sistema de administración en SyST",
          "Evaluación del sistema de SyST",
          "Evaluación de cumplimiento normativo",
          "Esquema de autoevaluación",
          "Matriz de riesgos",
        ],
        beneficios: [
          "Distintivo de empresa segura",
          "Reducir riesgos de accidentes o laborales",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Ambiental",
    image: "/images/consultoria/carbono-emisiones.png",
    color: "bg-[#00AEA5]",
    accentColor: "#00AEA5",
    darkColor: "#00877F", //titulo
    mediumColor: "#00AEA5", //problematica
    lightColor: "#4CC7C0", //detalle del servicio
    lighterColor: "#99DFDB", //beneficios
    problematicaTextColor:"#D9F7F4",
    detailTextColor: "#006F69",
    benefitsTextColor: "#00524E",
    services: [
      {
        title: "Asesoría e implementación de Sistemas de Gestión Ambiental",
        problematica: [
          "Contaminación Industrial y Desechos.",
          "Gestión de Residuos Peligrosos.",
        ],
        detalle: [
          "Definición de alcances y límites.",
          "Contexto de la organización.",
          "Elaboración de la política energética de la organización.",
          "Auditoría energética.",
          "Instalación del Comité de Energía.",
          "Línea base (LBEn) e indicadores energéticos (IDEn).",
          "Construcción del plan de acción de energía.",
          "Implementación del sistema.",
          "Campaña de promoción y difusión.",
          "Diseño de campaña de capacitación.",
          "Medición y de verificación de desempeño energético.",
          "Auditoría Interna.",
        ],
        beneficios: [
          "Cumplimiento Legal.",
          "Reducción de Costos y Eficiencia.",
          "Mejora de la Reputación.",
          "Gestión de Riesgos.",
          "Ventaja Competitiva y Acceso a Mercados.",
          "Mejora Continua.",
        ],
      },
      {
        title: "Estudios de vulnerabilidad y adaptación",
        problematica: [
          "Impacto de las emisiones de CyGEI a nivel local",
          "Desconocimiento sobre los riesgos asociados a los impactos del cambio climático en una comunicada, municipio, estado, sector o empresa.",
        ],
        detalle: [
          "Mapeo de los riesgos vinculados a los impactos por el cambio climático en el alcance del objeto de estudio.",
          "Diagnósticos de vulnerabilidad y adaptación.", 
          "Diseño de medidas de adaptación especíicas.",
          "Diseño de MRV para evaluar los beneficios y resultados de las medidas implementadas.",
        ],
        beneficios: [
          "Identificación temprana de los riesgos por el cambio climático.",
          "Robustecer la resiliencia de las zonas o sectores en estudio.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Sostentabilidad",
    image: "/images/consultoria/sustentabilidad.png",
    color: "bg-[#702283]",
    accentColor: "#702283",
    darkColor: "#531865", //titulo
    mediumColor: "#702283", //problematica
    lightColor: "#9560A1", //detalle del servicio
    lighterColor: "#C4A5CB", //beneficios
    problematicaTextColor:"#F0DDF4",
    detailTextColor: "#5A176A",
    benefitsTextColor: "#43114F",
    services: [
      {
        title: "Diseño de estrategias de sustentabilidad",
        problematica: [
          "En la actualidad el contar una estrategia de sustentabilidad es una necesidad de toda empresa.",
          "Transparencia y comunicación, Licencia para operar de las empresas a largo plazo.",
          "Cuando las empresas reciben fondos internacionales se les solicita cumplir con ciertos estándares de responsabilidad social y sustentabilidad.",
          "Desconocimiento de los grupos clave que podrían poner en riesgo la estrategia a largo plazo de la empresa.",
          "Falta de estrategia para medir el desempeño y el impacto de las acciones de sustentabilidad con enfoque de negocio.",
        ],
        detalle: [
          "Diseño de estrategias de sustentabilidad ad-hoc al sector y/o empresa.",
          "Elaboración y diseño de reportes GRI.",
          "Implementación de casos de negocio  dependiendo del sector o producto.",
          "Implementación de estándares de sustentabilidad enfocados a la responsabilidad social como ISO26000 (Guidance on social responsability).",
          "SA 8000 (Social Accountability International), guías del International Financial Council (IFC*).",
          "Mapeo estratégico de actores clave y materialidad.",
          "Diseño de indicadores estratégicos de sustentabilidad.",
        ],
        beneficios: [
          "Asegurar la permanencia de la empresa a largo plazo.",
          "Mitigar los riesgos por el impacto de la empresa en los ámbitos sociales y ambientales.",
          "Contar con una estrategia que permita potencializar las inversiones en mitigación de impactos ambientales y sociales.",
          "Desarrollar una estrategia de sustentabilidad robusta y tejida acorde al negocio.",
          "Proveer transparencia, integridad y certidumbre a los actores clave vinculados con la cadena de valor de la empresa.",
          "Robustecer la imagen de la empresa.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Desarrollo Empresarial",
    image: "/images/consultoria/desarrollo-social.png",
    color: "bg-[#009647]",
    accentColor: "#009647",
    darkColor: "#006E35", //titulo
    mediumColor: "#009647", //problematica
    lightColor: "#45B66F", //detalle del servicio
    lighterColor: "#8AD39F", //beneficios
    problematicaTextColor:"#DDF5E7",
    detailTextColor: "#00662F",
    benefitsTextColor: "#004A22",
    services: [
      {
        title: "Programa de inclusión infantil para el cuidado ambiental y ahorro de energía",
        problematica: [
          "Falta de programas educativos en materia ambiental y de ahorro de energía dirigidos al sector infantil.",
        ],
        detalle: [
          "Plática educativa de los tipos de energía, cómo se genera y su impacto en el medio ambiente.",
          "Acciones de ahorro de energía eléctrica casa y cuidado del ambiente.",
          "Aplicación de juegos y dinámicas de reforzamiento.",
          "Apoyos didácticos a través de personajes amigables que difunden la conciencia ambiental y el ahorro de energía.",
        ],
        beneficios: [
          "Niños con valores ambientales y comprometidos socialmente.",
          "Promotores del ahorro de energía en la vivienda.",
          "Efecto multiplicador para reducir el consumo energético a nivel social.",
          "Formación de recursos humanos para asegurar el desarrollo sustentable.",
        ],
      },
      {
        title: "Programa de desarrollo de hábitos para el ahorro en el núcleo familiar",
        problematica: [
          "Consumos elevados de energía en las viviendas debidos instalaciones ineficientes, problemas de mantenimiento y desconocimientos sobre la facturación que repercuten en la economía de las familias.",
        ],
        detalle: [
          "Pláticas y talleres en donde las familias aprenden la importancia del cuidado de los recursos naturales, conocen su factura eléctrica y algunos tips y medidas prácticas para ahorrar energía eléctrica, agua y gas.",
        ],
        beneficios: [
          "Generación de conciencia sobre el cuidado del ambiente y el ahorro de los recursos naturales.",
          "Generación de una cultura de ahorro de energía y agua.",
          "Reducción de costos a partir de acciones sencillas y de bajo o nulo costo.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Edificación",
    image: "/images/consultoria/Edificacion.png",
    color: "bg-[#7868A8]",
    accentColor: "#7868A8",
    darkColor: "#5A4A86", //titulo
    mediumColor: "#7868A8", //problematica
    lightColor: "#9B8DC0", //detalle del servicio
    lighterColor: "#C0B8D8", //beneficios
    problematicaTextColor:"#EEEAF7",
    detailTextColor: "#5A4A86",
    benefitsTextColor: "#46386B",
    services: [
      {
        title: "Implementación de proyectos de edificación sustentable",
        problematica: [
          "Hoy en día las organizaciones gastan importantes recursos económicos para satisfacer las necesidades de energía y de confort e sus edificios, sin embargo no existe una cultura de desarrollo sustentable de la edificación para que de raíz se diseñen edificaciones que reduzcan sus consumos y demandas energéticas a partir de un diseño bioclimático y medidas pasivas.",
        ],
        detalle: [
          "Estudio de implementación de medidas pasivas y ecoeficientes para el mejoramiento del desempeño integral de las edificaciones.",
          "Implementación de buenas prácticas organizacionales.",
        ],
        beneficios: [
          "Mayores ahorros en consumos energéticos.",
          "Ahorros económicos en la facturación de los servicios de energía.",
          "Imagen corporativa sustentable.",
        ],
      },
      {
        title: "Evaluación de la NOM 008 (Envolvente Térmica de Edificios No Residenciales)",
        problematica: [
          "Edificaciones no residenciales que no cumple con los requisitos normativos para el diseño de la envolvente térmica.",
          "Altos costos en el acondicionamiento de aire al interior de los edificios.",
          "Bajo desempeño laboral de los trabajadores debido a un estado de desconfort",
        ],
        detalle: [
          "Estudio de la envolvente térmica de las edificaciones a partir de sus materiales constructivos y diseño original.",
          "Propuestas de medidas pasivas de implementación para reducir la ganancia de calor en el edificio.",
          "Reducción estimada del consumo energético necesario para el acondicionamiento de aire.",
        ],
        beneficios: [
          "Reducción de las necesidades de acondicionamiento de aire vía sistemas activos.",
          "Reducción de la facturación eléctrica de la empresa.",
          "Mayor confort de los trabajadores que se traduce en el mejoramiento de la productividad.",
        ],
      },
      {
        title: "Evaluación de la NOM 020 (Envolvente Térmica de Edificios Residenciales)",
        problematica: [
          "Actualmente las familias adquieren viviendas ineficientes energéticamente a un bajo costo que se traducen a través del tiempo en problemas económicos para los ocupantes debido a usos de sistemas de aire acondicionado y calefacción.",
        ],
        detalle: [
          "Estudio de ganancia calórica en el proyecto ejecutivo para la construcción de la vivienda en cuanto a sus materiales constructivos.",
          "Propuestas de mejora para la envolvente térmica de la vivienda.",
        ],
        beneficios: [
          "Reducción de costos para las familias.",
          "Mayor calidad de vida en el interior de la vivienda debido a un mayor confort térmico.",
        ],
      },
    ],
  },
]

export default function ConsultoriaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)
  const [selectedArea, setSelectedArea] = useState<
    (typeof areasConsultoria)[0] | null
  >(null)
  const [selectedService, setSelectedService] = useState<
    (typeof areasConsultoria)[0]["services"][0] | null
  >(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4) // Siempre máximo 4 cards visibles
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, areasConsultoria.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <div className="min-h-screen bg-white">
      <NavHeader />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section - Consultoría */}
        <section
          className="relative overflow-hidden min-h-[70vh] py-20"
          style={{
            backgroundImage: "url(/images/capacitacion/waves-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
              {/* Left Side - Colibri Image */}
              <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/images/colibri-consultoria.png"
                  alt="CIDTES Consultoría"
                  width={500}
                  height={500}
                  className="w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-contain"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Decorative line image */}
                <Image src="/images/linea-decorativa.png" alt="" width={126} height={10} className="h-2 w-32" />

                {/* Title without underline */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#0D5C5C]">Consultoría</h1>

                {/* Description paragraphs */}
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    En CIDTES <strong className="text-gray-900">trabajamos los problemas actuales</strong> con el
                    objetivo de <strong className="text-gray-900">cambiar</strong> el modelo productivo, social y
                    laboral con conciencia ambiental y sostenible.
                  </p>
                  <p>
                    En el área de Consultoría <strong className="text-gray-900">generamos</strong> servicios de asesoría y
                    auditoría en temas de Seguridad, Salud, Energía, Medio Ambiente y Sustentabilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Separator */}
        <div className="relative w-full -mt-1">
          <Image
            src="/images/wave-separator.png"
            alt=""
            width={1920}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Áreas de Consultoría Section */}
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#0891B2]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#6B46C1]/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-5 w-16 h-16 bg-[#059669]/20 rounded-full blur-lg"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D5C5C] text-center mb-12">Áreas de Consultoría</h2>

            {/* Carousel */}
            <div className="relative max-w-7xl mx-auto">
              {/* Cards Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  }}
                >
                  {areasConsultoria.map((area) => (
                    <div
                      key={area.id}
                      className="flex-shrink-0 px-2"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      <div
                        onClick={() => {
                            if (selectedArea?.id === area.id) {
                                setSelectedArea(null)
                                setSelectedService(null)
                            } else {
                                setSelectedArea(area)
                                setSelectedService(null)
                            }
                        }}
                        className={`bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300
                          ${
                            selectedArea?.id === area.id
                              ? "ring-4 ring-[#0891B2]"
                              : "hover:shadow-xl"
                          }`}
                      >
                        {/* Image */}
                        <div className="relative aspect-[2/3] overflow-hidden">
                          <Image
                            src={area.image || "/placeholder.svg"}
                            alt={area.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Title Label */}
                        <div
                          className={`${area.color} h-24 px-4 relative overflow-hidden flex items-center justify-center`}
                        >
                          <div className="absolute -right-6 -top-6 w-20 h-20 bg-white/10 rounded-full" />
                          <div className="absolute -left-4 -bottom-8 w-16 h-16 bg-white/10 rounded-full" />

                          <p className="relative z-10 text-white text-center font-bold text-lg leading-tight tracking-wide">
                            {area.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center items-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-6 bg-[#0891B2]" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border-2 border-[#0891B2] flex items-center justify-center text-[#0891B2] hover:bg-[#0891B2] hover:text-white transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border-2 border-[#0891B2] flex items-center justify-center text-[#0891B2] hover:bg-[#0891B2] hover:text-white transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {selectedArea && (
              <div
                className="mt-14 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
                <div
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    borderTop: `8px solid ${selectedArea.accentColor}`,
                  }}>
                  <div className="px-6 md:px-10 pt-8 pb-6 text-center">
                    <span
                      className="inline-block px-5 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider shadow-md"
                      style={{
                        backgroundColor: selectedArea.accentColor,
                      }}>
                      Área de Consultoría
                    </span>
                    <h3
                      className="mt-4 text-3xl md:text-4xl font-extrabold"
                      style={{
                        color: selectedArea.accentColor,
                      }}>
                      {selectedArea.title}
                    </h3>
                    <div
                      className="mx-auto mt-4 h-1 w-24 rounded-full"
                      style={{
                        backgroundColor: selectedArea.accentColor,
                      }}/>
                    <p className="mt-4 text-gray-600">
                      Conoce los servicios que ofrecemos en esta área
                    </p>
                  </div>

                  {/* Servicios */}
                  <div className="px-6 md:px-10 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {selectedArea.services.map((service, index) => (
                        <button
                          key={service.title}
                          onClick={() => setSelectedService(service)}
                          className={`group relative min-h-[110px] p-5 rounded-2xl
                            transition-all duration-300 border-2
                            ${
                                selectedService?.title === service.title
                                    ? "text-white shadow-xl scale-105"
                                    : "bg-gray-50 text-gray-700 hover:-translate-y-2 hover:shadow-xl"
                            }`}
                          style={{
                              backgroundColor:
                                  selectedService?.title === service.title
                                      ? selectedArea.accentColor
                                      : undefined,
                              borderColor: `${selectedArea.accentColor}40`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              selectedArea.accentColor
                            e.currentTarget.style.color = "white"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                            e.currentTarget.style.color = "#374151"
                          }}>
                          <span
                            className="absolute -top-3 -left-3
                                      w-8 h-8 rounded-full
                                      flex items-center justify-center
                                      text-white font-bold shadow-md"
                            style={{
                              backgroundColor: selectedArea.accentColor,
                            }}>
                            {index + 1}
                          </span>
                          <span className="block pr-2">
                            {service.title}
                          </span>
                          <span
                            className="absolute right-4 bottom-4
                                      opacity-0 group-hover:opacity-100
                                      transition-opacity duration-300">
                            →
                          </span>
                        </button>
                      ))}
                    </div>

                    {selectedService && (
                      <div className="mt-10 overflow-hidden rounded-2xl border shadow-lg">
                        <div
                          className="px-6 py-4 text-white"
                          style={{
                            backgroundColor: selectedArea.darkColor,
                          }}>
                          <h4 className="text-2xl font-bold">
                            {selectedService.title}
                          </h4>
                        </div>

                        <table className="w-full border-collapse">
                          <tbody>
                            {/* Problemática */}
                            <tr className="border-b">
                              <td
                                className="w-64 p-5 font-bold text-white align-top"
                                style={{
                                  backgroundColor: selectedArea.mediumColor,
                                  color: selectedArea.problematicaTextColor,
                                }}
                              >
                                Problemática
                              </td>

                              <td className="bg-white p-5">
                                <div className="h-28 overflow-y-auto pr-3">
                                  <ul className="space-y-2 list-disc list-inside">
                                    {selectedService.problematica.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </td>
                            </tr>

                            {/* Detalle del servicio */}
                            <tr className="border-b">
                              <td
                                className="w-64 p-5 font-bold align-top"
                                style={{
                                  backgroundColor: selectedArea.lightColor,
                                  color: selectedArea.detailTextColor,
                                }}
                              >
                                Detalle del servicio
                              </td>

                              <td className="bg-gray-50 p-5">
                                <div className="h-28 overflow-y-auto pr-3">
                                  <ul className="space-y-2 list-disc list-inside">
                                    {selectedService.detalle.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </td>
                            </tr>

                            {/* Beneficios */}
                            <tr>
                              <td
                                className="p-5 font-bold align-top"
                                style={{
                                  backgroundColor: selectedArea.lighterColor,
                                  color: selectedArea.benefitsTextColor,
                                }}
                              >
                                Beneficios
                              </td>

                              <td className="bg-white p-5">
                                <div className="h-28 overflow-y-auto pr-3">
                                  <ul className="space-y-2 list-disc list-inside">
                                    {selectedService.beneficios.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  <div
                    className="px-6 py-4 text-center text-white text-sm font-medium"
                    style={{
                      backgroundColor: selectedArea.accentColor,
                    }}>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 shadow-[0_-5px_6px_rgba(0,0,0,0.05)] font-sans">
        <div className="w-full px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-8">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-20 h-20 p-3 rounded-2xl bg-white shadow-lg mb-4 flex items-center justify-center">
                <Image
                  src="/images/logo2.png"
                  alt="CIDTES Logo"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg text-gray-800 text-center lg:text-left leading-relaxed font-bold">
                Tu aventura con CIDTES Energía y Sustentabilidad comienza aquí.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-[#1D63ED] mb-6">Contacto</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3"></div>
                  <a
                    href="mailto:contacto@cidtes.org"
                    className="text-gray-800 hover:text-[#1D63ED] transition-colors duration-300"
                  >
                    contacto@cidtes.org
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3"></div>
                  <a
                    href="tel:+525568125783"
                    className="text-gray-800 hover:text-[#1D63ED] transition-colors duration-300"
                  >
                    +52 55 6812 5783
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-[#1D63ED] mb-6">Ubicación</h2>
              <div className="flex items-start mb-4">
                <div className="w-2 h-2 bg-[#1D63ED] rounded-full mr-3 mt-2"></div>
                <p className="text-gray-800 text-center lg:text-left leading-relaxed">
                  Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 04330, México.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <iframe
                  title="Mapa de Ubicación"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                  className="w-full h-40 rounded-lg shadow-md border-0"
                />
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/cidtes/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/energiaysustentabilidad.org/?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cidtes_mx/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@cidtesmx "
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#1D63ED] rounded-full flex items-center justify-center text-white hover:bg-[#0E4BB8] transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.237V2h-3.193v13.766c0 1.57-1.272 2.84-2.84 2.84-1.57 0-2.841-1.27-2.841-2.84 0-1.568 1.271-2.84 2.84-2.84.293 0 .576.045.842.128V9.794a6.032 6.032 0 0 0-.842-.06A6.032 6.032 0 0 0 3.75 15.766 6.032 6.032 0 0 0 9.785 21.8a6.032 6.032 0 0 0 6.034-6.034V8.79a7.98 7.98 0 0 0 4.431 1.341V6.938a4.81 4.81 0 0 1-.661-.252z"/>
                </svg>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-700">
                <span>© 2025 CIDTES Energía y Sustentabilidad.</span>
                <span>|</span>
                <span>Todos los derechos reservados.</span>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Aviso de privacidad
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Términos y condiciones
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-[#1D63ED] transition-colors duration-300">
                  Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
