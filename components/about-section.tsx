"use client"

import { motion } from "framer-motion"
import { Code, ShieldCheck, Lightbulb, HeartHandshake } from "lucide-react"
import { FeatureVisual } from "@/components/feature-visual"

// Pilares de marca: contenido generico/seguro (no son afirmaciones factuales verificables).
const values = [
  {
    icon: ShieldCheck,
    title: "Calidad",
    description: "Cada entrega pasa por estándares de código limpio, pruebas y revisión antes de salir a producción.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Adoptamos tecnologías actuales y buenas prácticas para que tu producto no quede obsoleto en meses.",
  },
  {
    icon: HeartHandshake,
    title: "Transparencia",
    description: "Comunicación clara sobre alcance, tiempos y costos desde la primera conversación hasta el lanzamiento.",
  },
  {
    icon: Code,
    title: "Compromiso",
    description: "Acompañamos cada proyecto como si fuera propio, con soporte real después del lanzamiento.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="pill-badge">Quiénes somos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Líderes en desarrollo de software para empresas
            </h2>
            <h4 className="text-xl font-semibold text-gradient-brand">Nuestra misión</h4>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En <strong className="text-foreground">WebTech_Solutions</strong>, convertimos ideas en soluciones
                digitales diseñadas a la medida de cada empresa. Combinamos estrategia, creatividad y tecnología para
                construir productos robustos, escalables y alineados con tus objetivos.
              </p>
              <p>
                Trabajamos con una metodología clara y centrada en resultados: análisis del modelo de negocio,
                prototipado con wireframes, diseño UX/UI, desarrollo con tecnologías actuales y lanzamiento
                acompañado de soporte continuo.
              </p>
              <p>
                Nuestra misión es simple: ser el socio tecnológico que las empresas de LATAM necesitan para competir
                en un mercado digital cada vez más exigente, sin sacrificar calidad ni cercanía en el camino.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <FeatureVisual
            icon={Code}
            label="Arquitectura escalable, código limpio y entrega continua"
            accent="violet"
            stats={[
              { value: "758+", label: "proyectos" },
              { value: "99.9%", label: "uptime" },
            ]}
          />
        </div>

        {/* Values / pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-sky-700 dark:text-sky-300" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
