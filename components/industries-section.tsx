"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Landmark, HeartPulse, Truck, CheckCircle2 } from "lucide-react"

// Descripciones de capacidad generica por industria, sin nombrar clientes reales.
// Facil de ampliar con una 5ta vertical (ej. Educacion) si se necesita mas adelante.
const industries = [
  {
    icon: ShoppingBag,
    badge: "Retail",
    title: "Retail",
    description:
      "Soluciones tecnológicas de vanguardia diseñadas para ofrecer un valor excepcional. Mejoramos las experiencias de los clientes, agilizamos las operaciones y lideramos el competitivo mundo del retail.",
    highlights: ["Experiencias de Cliente", "Operaciones Ágiles"],
  },
  {
    icon: Landmark,
    badge: "Fintech / Banca",
    title: "Fintech & Banca",
    description:
      "Desarrollamos plataformas financieras seguras y conformes a estándares del sector, desde billeteras digitales hasta paneles de gestión de riesgo y reportería.",
    highlights: ["Seguridad de Datos", "Cumplimiento Normativo"],
  },
  {
    icon: HeartPulse,
    badge: "Salud",
    title: "Salud",
    description:
      "Construimos sistemas para gestión de pacientes, historiales clínicos digitales y telemedicina, priorizando la confidencialidad de la información y la facilidad de uso.",
    highlights: ["Historiales Digitales", "Telemedicina"],
  },
  {
    icon: Truck,
    badge: "Logística",
    title: "Logística",
    description:
      "Creamos plataformas de rastreo de envíos, optimización de rutas y gestión de flotas que dan visibilidad completa de la cadena de suministro en tiempo real.",
    highlights: ["Rastreo en Tiempo Real", "Optimización de Rutas"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <span className="pill-badge !bg-cyan-500/10 !border-cyan-400/25 text-xs mb-4">{industry.badge}</span>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center mb-4 shadow-lg shadow-sky-700/20">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
