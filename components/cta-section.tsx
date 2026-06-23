"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="cta" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500"
        >
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
              ¿Listo para transformar tu presencia digital?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              Conversemos sobre tus ideas y cómo nuestra experiencia puede ayudarte a alcanzar tus metas. El primer
              paso hacia el éxito empieza aquí.
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-white/90 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-xl"
            >
              Contáctanos ahora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
