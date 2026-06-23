"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Cloud, ArrowUpRight } from "lucide-react"
import { FeatureVisual } from "@/components/feature-visual"

const highlights = ["Infraestructura Escalable", "Seguridad Empresarial", "Soporte 24/7"]

export default function AWSPartnerSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FeatureVisual
            icon={Cloud}
            label="Infraestructura cloud certificada, lista para escalar"
            accent="indigo"
            stats={[
              { value: "99.99%", label: "disponibilidad" },
              { value: "AWS", label: "certificados" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="pill-badge">Cloud Partner</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Socios de AWS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Como socios certificados de Amazon Web Services (AWS), en WebTech_Solutions ofrecemos soluciones cloud
              de clase mundial respaldadas por la infraestructura líder en el mercado.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 pill-badge text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 dark:text-sky-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-700 to-cyan-600 hover:from-sky-600 hover:to-cyan-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-sky-700/25">
              Conoce más
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
