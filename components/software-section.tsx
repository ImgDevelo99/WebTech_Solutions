"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Code } from "lucide-react"
import { FeatureVisual } from "@/components/feature-visual"

const features = [
  "Planning y Análisis: investigación del negocio y definición de objetivos.",
  "Wireframes: estructuras visuales para validar ideas.",
  "Diseño UX/UI: interfaz atractiva y funcional.",
  "Desarrollo: código sólido y seguro.",
  "Lanzamiento: publicación y soporte post-producción.",
]

export default function SoftwareSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="pill-badge">Nuestro enfoque</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Líderes en desarrollo de software para empresas
            </h2>
            <h4 className="text-xl font-semibold text-gradient-brand">Soluciones a la medida</h4>
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
            </div>
            <ul className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
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
      </div>
    </section>
  )
}
