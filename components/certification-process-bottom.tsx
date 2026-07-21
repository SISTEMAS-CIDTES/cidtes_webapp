"use client"

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function CertificationProcessBottom() {
  const style = {
    borderColor: "#74B74A",
    title: "#4A7C2A",
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 items-start -mt-32">
      <div className="flex flex-col gap-8 md:w-5/12 flex-shrink-0">
        <img
          src=""
          alt="ImageEvaluationProcess"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        />
        <img
          src=""
          alt="ImageEvaluationProcess"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        />
      </div>
    
        <div className="space-y-4">
            <div
                className="border-l-4 px-6 py-5 rounded-xl shadow-md"
                style={{
                    borderColor: style.borderColor,
                    backgroundColor: "white",
                    borderLeftWidth: "6px",
                }}
                >
                <p className="text-base font-bold mb-3" style={{ color: style.title }}>
                    Paso 4: Plan de evaluación.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    El evaluador describe a su candidato las actividades y criterios para obtener el juicio de COMPETENTE. Además, ambos acuerdan los requerimientos, fechas, lugar y hora para la evaluación y presentación de resultados.
                </p>
            </div>

            <div
                className="border-l-4 px-6 py-5 rounded-xl shadow-md"
                style={{ 
                    borderColor: style.borderColor,
                    backgroundColor: "white", 
                    borderLeftWidth: "6px" }}
                >
                <p className="text-base font-bold mb-3" style={{ color: style.title }}>
                    Paso 5: Evaluación.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    El candidato se encontrará con el evaluador el día pactado para realizar la recopilación de evidencias:
                    desempeños, productos, conocimientos, respuesta ante situaciones emergentes y actitudes hábitos y valores.
                </p>
            </div>

            <div
                className="border-l-4 px-6 py-5 rounded-xl shadow-md"
                style={{ 
                    borderColor: style.borderColor, 
                    backgroundColor: "white", 
                    borderLeftWidth: "6px" }}
                >
                <p className="text-base font-bold mb-3" style={{ color: style.title }}>
                Paso 6: Resultados.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                El evaluador presentará al candidato los resultados de la evaluación, comentando sus mejores prácticas,
                áreas de oportunidad y recomendaciones. Finalmente, el evaluador emitirá el juicio de competencia.
                </p>
            </div>

            <div
                className="border-l-4 px-6 py-5 rounded-xl shadow-md"
                style={{ 
                    borderColor: style.borderColor, 
                    backgroundColor: "white", 
                    borderLeftWidth: "6px" }}
            >
                <p className="text-base font-bold mb-3" style={{ color: style.title }}>
                Paso 7: Expedición de certificado.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                CIDTES realizará una reunión de Grupo Dictamen y, posteriormente, el trámite y entrega del certificado de
                competencias.
                </p>
            </div>
        </div>
      
    </div>
  )
}
