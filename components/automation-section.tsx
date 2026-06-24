"use client"

import { motion } from "framer-motion"
import { Workflow, Check } from "lucide-react"
import { SiN8N, SiZapier, SiMake } from "react-icons/si"
import { handleSpotlight } from "@/lib/utils"
import { DecorativeNetwork } from "@/components/decorative-network"

const automationTools = [
  {
    name: "n8n",
    icon: SiN8N,
    color: "#EA4B71",
    description: "Automatización de flujos de trabajo sin código",
    features: ["Integración de APIs", "Workflows personalizados", "Triggers automáticos"],
  },
  {
    name: "Make",
    icon: SiMake,
    color: "#6D00CC",
    description: "Plataforma de automatización visual",
    features: ["Conectores pre-construidos", "Automatización visual", "Escalabilidad empresarial"],
  },
  {
    name: "Zapier",
    icon: SiZapier,
    color: "#FF4F00",
    description: "Conecta tus aplicaciones favoritas",
    features: ["Miles de integraciones", "Automatización simple", "Triggers inteligentes"],
  },
  {
    name: "Power Automate",
    icon: Workflow,
    color: "#0066FF",
    description: "Automatización empresarial de Microsoft",
    features: ["Integración Office 365", "Flujos de aprobación", "RPA avanzado"],
  },
]

const impactStats = [
  { value: "75%", label: "Reducción en tiempo de tareas repetitivas" },
  { value: "90%", label: "Menos errores humanos" },
  { value: "24/7", label: "Operación continua" },
]

export default function AutomationSection() {
  return (
    <section id="automation" className="relative py-16 overflow-hidden">
      <DecorativeNetwork className="absolute -top-10 -right-16 w-[420px] h-auto text-sky-700/[0.07] dark:text-sky-400/[0.08] pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="pill-badge mb-4">Automatización</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Automatización de Procesos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Optimizamos tus procesos empresariales mediante herramientas de automatización avanzadas. Reducimos
            tareas repetitivas, mejoramos la eficiencia y liberamos tiempo valioso para que te enfoques en hacer
            crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {automationTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-7 group"
              >
                <div className="shape-hexagon flex items-center justify-center w-14 h-14 bg-foreground/5 border border-foreground/10 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="w-7 h-7" style={{ color: tool.color }} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{tool.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tool.description}</p>

                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-muted-foreground gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <div onMouseMove={handleSpotlight} className="glass-card p-8 sm:p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8">¿Por qué automatizar tus procesos?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold font-mono text-gradient-brand mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
