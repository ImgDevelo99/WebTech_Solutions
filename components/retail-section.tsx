"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShoppingBag } from "lucide-react"
import { FeatureVisual } from "@/components/feature-visual"

const highlights = ["Experiencias de Cliente", "Operaciones Ágiles", "Liderazgo Competitivo"]

export default function RetailSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FeatureVisual
            icon={ShoppingBag}
            label="Plataformas de venta omnicanal listas para escalar"
            accent="cyan"
            stats={[
              { value: "+38%", label: "conversión" },
              { value: "24/7", label: "operación" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="pill-badge">Industria Retail</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Retail</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluciones tecnológicas de vanguardia diseñadas para ofrecer un valor excepcional. Mejoramos las
              experiencias de los clientes, agilizamos las operaciones y lideramos el competitivo mundo del retail.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 pill-badge !bg-cyan-500/10 !border-cyan-400/25 text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
