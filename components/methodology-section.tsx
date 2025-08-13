"use client"

import { useState } from "react"

const methodologies = [
  {
    icon: "bx-search-alt",
    title: "Análisis de Requerimientos",
    summary: "Entendemos a fondo tus necesidades y objetivos.",
    detail: "Entendemos a fondo tus necesidades y objetivos para definir el alcance preciso del proyecto.",
  },
  {
    icon: "bx-calendar-edit",
    title: "Planificación del Proyecto",
    summary: "Organizamos cada fase con claridad y eficiencia.",
    detail:
      "Definimos cronogramas, responsables y herramientas de gestión. Garantizamos que todos los actores conozcan los hitos y tiempos clave del desarrollo.",
  },
  {
    icon: "bx-code-alt",
    title: "UX/UI y Desarrollo",
    summary: "Diseñamos y desarrollamos soluciones efectivas.",
    detail:
      "Creamos prototipos de interfaz atractivos y funcionales, luego codificamos utilizando tecnologías modernas con buenas prácticas y arquitectura escalable.",
  },
  {
    icon: "bx-rocket",
    title: "Testing y Despliegue",
    summary: "Probamos y lanzamos con éxito tu proyecto.",
    detail:
      "Validamos el funcionamiento con pruebas funcionales, de rendimiento y usabilidad. Luego, desplegamos en ambiente productivo asegurando compatibilidad y seguridad.",
  },
]

export default function MethodologySection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleDetail = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="methodology" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(21,128,61,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(132,204,22,0.4),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Nuestra Metodología de Trabajo</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Seguimos un proceso estructurado para garantizar la calidad y el éxito de cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((method, index) => (
            <div
              key={index}
              className={`group bg-slate-800 p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-green-700 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-700/10 ${
                expandedCard === index ? "border-green-700 transform -translate-y-2 shadow-xl shadow-green-700/10" : ""
              }`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`bx ${method.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{method.summary}</p>
              </div>

              {expandedCard === index && (
                <div className="mb-4 p-4 bg-slate-700/50 rounded-lg border border-green-700/20">
                  <p className="text-gray-200 text-sm leading-relaxed">{method.detail}</p>
                </div>
              )}

              <button
                onClick={() => toggleDetail(index)}
                className="w-full bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold text-sm flex items-center justify-center space-x-2"
              >
                <span>{expandedCard === index ? "Ver Menos" : "Ver Más"}</span>
                <i className={`bx ${expandedCard === index ? "bx-chevron-up" : "bx-chevron-down"}`}></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
