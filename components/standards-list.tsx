"use client"

import { FileText } from "lucide-react"

interface StandardCategory {
  title: string
  color: string
  codes: {
    code: string
    pdf?: string
  }[]
  image?: string
}


const STANDARDS_CATEGORIES: StandardCategory[] = [
  {
    title: "Gestión ambiental",
    color: "#5DCCCC",
    codes: [
      { code: "ECO490", pdf: "/pdf/estandares/1.pdf" },
      { code: "EC0517", pdf: "/pdfs/estandares/EC0517.pdf" },
      { code: "EC1543", pdf: "/pdfs/estandares/EC1543.pdf" },
    ],
    image: "/images/gestion-ambiental.png",
  },
  {
    title: "Administración-Contabilidad",
    color: "#5DCCCC",
    codes: [
      { code: "EC1017", pdf: "/pdfs/estandares/EC1017.pdf" },
      { code: "EC1018", pdf: "/pdfs/estandares/EC1018.pdf" },
    ],
    image: "/images/administracion-contabilidad.png",
  },
  {
    title: "Manufactura",
    color: "#5DCCCC",
    codes: [{ code: "EC0467", pdf: "/pdfs/estandares/1.1.pdf" }],
  },
  {
    title: "Sustancias químicas",
    color: "#5DCCCC",
    codes: [{ code: "EC1022", pdf: "/pdfs/estandares/EC1022.pdf" }],
  },
  {
    title: "Fotovoltaico",
    color: "#5DCCCC",
    codes: [{ code: "EC0586.01", pdf: "/pdfs/estandares/EC0586-01.pdf" }],
  },
]

export default function StandardsList() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-12 items-start">
      <div className="flex flex-col gap-8 md:w-5/12 flex-shrink-0">
        <img
          src="/images/gestion-ambiental.png"
          alt="Gestión ambiental"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        />
        <img
          src="/images/administracion-contabilidad.png"
          alt="Administración y Contabilidad"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>

      <div className="flex-1 space-y-8 ml-auto">
        {STANDARDS_CATEGORIES.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3
              className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm inline-block"
              style={{ color: category.color }}
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.codes.map((item, codeIndex) =>
                item.pdf ? (
                  <a
                    key={codeIndex}
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-100/80 backdrop-blur-sm border border-gray-300 rounded-full text-gray-700 font-medium text-sm hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span>{item.code}</span>
                    <FileText className="w-4 h-4 text-red-600" />
                  </a>
                ) : (
                  <span
                    key={codeIndex}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-100/80 border border-gray-300 rounded-full text-gray-400 font-medium text-sm cursor-not-allowed shadow-sm"
                  >
                    <span>{item.code}</span>
                    <FileText className="w-4 h-4 text-gray-300" />
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
