"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, CalendarClock, Code2, Rocket, ChevronDown } from "lucide-react"

const methodologies = [
  {
    icon: Search,
    title: "Análisis de Requerimientos",
    summary: "Entendemos a fondo tus necesidades y objetivos.",
    detail: "Entendemos a fondo tus necesidades y objetivos para definir el alcance preciso del proyecto.",
  },
  {
    icon: CalendarClock,
    title: "Planificación del Proyecto",
    summary: "Organizamos cada fase con claridad y eficiencia.",
    detail:
      "Definimos cronogramas, responsables y herramientas de gestión. Garantizamos que todos los actores conozcan los hitos y tiempos clave del desarrollo.",
  },
  {
    icon: Code2,
    title: "UX/UI y Desarrollo",
    summary: "Diseñamos y desarrollamos soluciones efectivas.",
    detail:
      "Creamos prototipos de interfaz atractivos y funcionales, luego codificamos utilizando tecnologías modernas con buenas prácticas y arquitectura escalable.",
  },
  {
    icon: Rocket,
    title: "Testing y Despliegue",
    summary: "Probamos y lanzamos con éxito tu proyecto.",
    detail:
      "Validamos el funcionamiento con pruebas funcionales, de rendimiento y usabilidad. Luego, desplegamos en ambiente productivo asegurando compatibilidad y seguridad.",
  },
]

export default function MethodologySection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="methodology" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Cómo trabajamos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Nuestra metodología de trabajo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso estructurado para garantizar la calidad y el éxito de cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {methodologies.map((method, index) => {
            const Icon = method.icon
            const isOpen = expandedCard === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative glass-card p-6 transition-all duration-300 ${isOpen ? "border-sky-600/40 dark:border-sky-400/40" : ""}`}
              >
                <div className="absolute top-5 right-5 text-xs font-mono text-muted-foreground/50">
                  0{index + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center mb-5 shadow-lg shadow-sky-700/20">
                  <Icon className="w-6.5 h-6.5 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{method.summary}</p>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground leading-relaxed overflow-hidden"
                  >
                    {method.detail}
                  </motion.div>
                )}

                <button
                  onClick={() => setExpandedCard(isOpen ? null : index)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200 transition-colors"
                >
                  {isOpen ? "Ver menos" : "Ver más"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
