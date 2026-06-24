"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Landmark, HeartPulse, Truck, CheckCircle2 } from "lucide-react"
import { handleSpotlight } from "@/lib/utils"

// Descripciones de capacidad generica por industria, sin nombrar clientes reales.
// Facil de ampliar con una 5ta vertical (ej. Educacion) si se necesita mas adelante.
const industries = [
  {
    icon: ShoppingBag,
    badge: "Retail",
    title: "Retail",
    description:
      "Soluciones tecnológicas de vanguardia diseñadas para ofrecer un valor excepcional. Mejoramos las experiencias de los clientes, agilizamos las operaciones y lideramos el competitivo mundo del retail.",
    highlights: ["Experiencias de Cliente", "Operaciones Ágiles", "Comercio Omnicanal"],
  },
  {
    icon: Landmark,
    badge: "Fintech / Banca",
    title: "Fintech & Banca",
    description:
      "Desarrollamos plataformas financieras seguras y conformes a estándares del sector, desde billeteras digitales hasta paneles de gestión de riesgo y reportería.",
    highlights: ["Seguridad de Datos", "Cumplimiento Normativo", "Pagos Digitales"],
  },
  {
    icon: HeartPulse,
    badge: "Salud",
    title: "Salud",
    description:
      "Construimos sistemas para gestión de pacientes, historiales clínicos digitales y telemedicina, priorizando la confidencialidad de la información y la facilidad de uso.",
    highlights: ["Historiales Digitales", "Telemedicina", "Agendamiento en Línea"],
  },
  {
    icon: Truck,
    badge: "Logística",
    title: "Logística",
    description:
      "Creamos plataformas de rastreo de envíos, optimización de rutas y gestión de flotas que dan visibilidad completa de la cadena de suministro en tiempo real.",
    highlights: ["Rastreo en Tiempo Real", "Optimización de Rutas", "Gestión de Flotas"],
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Industrias</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Sectores donde generamos impacto
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entendemos los retos particulares de cada industria y diseñamos soluciones que se ajustan a ellos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass-card p-7"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-700 to-cyan-400" />
                <Icon
                  className="absolute -right-3 -bottom-3 w-32 h-32 text-foreground/[0.04] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  strokeWidth={1}
                />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-700/20">
                    <Icon className="w-6.5 h-6.5 text-white" strokeWidth={1.7} />
                  </div>
                  <div>
                    <span className="pill-badge !bg-cyan-500/10 !border-cyan-400/25 text-xs mb-1.5">
                      {industry.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{industry.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>

                <div className="max-h-28 opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:group-hover:max-h-28 lg:group-hover:opacity-100 lg:group-hover:mt-4 overflow-hidden transition-all duration-300">
                  <ul className="space-y-2 pt-1">
                    {industry.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
