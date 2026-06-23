"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "Depende del alcance: un sitio web institucional puede tomar entre 3 y 6 semanas, mientras que una plataforma empresarial o app móvil completa suele tomar de 2 a 4 meses. En la primera reunión definimos alcance y te entregamos un cronograma estimado antes de iniciar.",
  },
  {
    question: "¿Trabajan con clientes fuera de Colombia o LATAM?",
    answer:
      "Sí. Trabajamos de forma remota con clientes en toda Latinoamérica y también con empresas fuera de la región. Usamos herramientas colaborativas y reuniones periódicas para mantener la comunicación fluida sin importar la zona horaria.",
  },
  {
    question: "¿Qué pasa después de que el proyecto se lanza?",
    answer:
      "Todo proyecto incluye un periodo de soporte post-lanzamiento para corregir cualquier detalle. Después de ese periodo, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, monitoreo y mejoras continuas.",
  },
  {
    question: "¿Cómo funciona el proceso de cotización?",
    answer:
      "Primero agendamos una llamada para entender tu necesidad y objetivos. Con esa información preparamos una propuesta con alcance, tiempos y costo. No cobramos por esta primera consultoría ni por la propuesta inicial.",
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Trabajamos con un stack moderno: React, Next.js, Node.js, Java y Python en el backend, junto con bases de datos SQL y NoSQL según el caso. Elegimos la tecnología en función de las necesidades del proyecto, no al revés.",
  },
  {
    question: "¿Qué sucede si los requerimientos cambian a mitad del proyecto?",
    answer:
      "Es algo común y lo manejamos con un proceso de control de cambios: evaluamos el impacto en tiempo y costo, te lo presentamos de forma transparente y ajustamos el plan solo con tu aprobación.",
  },
]

export default function FAQSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Preguntas frecuentes</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            ¿Tienes dudas? Te las resolvemos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Las preguntas más comunes antes de empezar un proyecto con nosotros.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = expandedItem === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative glass-card p-6 transition-all duration-300 ${isOpen ? "border-sky-600/40 dark:border-sky-400/40" : ""}`}
              >
                <button
                  onClick={() => setExpandedItem(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-700 dark:text-sky-300 flex-shrink-0" strokeWidth={1.7} />
                    <span className="text-base sm:text-lg font-semibold text-foreground">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground leading-relaxed overflow-hidden pl-8"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
