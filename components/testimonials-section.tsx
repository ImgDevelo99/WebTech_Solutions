"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    text: "WebTech Solutions transformó completamente nuestra presencia digital. Su equipo entendió perfectamente nuestras necesidades y entregó una plataforma web robusta que ha aumentado nuestras ventas en un 150%.",
    author: "Ana García",
    position: "CEO",
    company: "Sector Retail",
    initials: "AG",
    rating: 5,
    project: "Plataforma E-commerce",
  },
  {
    text: "El proceso de consultoría fue excepcional. Nos ayudaron a modernizar nuestra infraestructura tecnológica y automatizar procesos clave, resultando en un aumento del 200% en productividad.",
    author: "Carlos Martínez",
    position: "Director de Operaciones",
    company: "Industria Manufacturera",
    initials: "CM",
    rating: 5,
    project: "Automatización de Procesos",
  },
  {
    text: "Increíble trabajo en el desarrollo de nuestra aplicación móvil. El equipo fue muy profesional, cumplió todos los plazos y el resultado superó nuestras expectativas. Altamente recomendados.",
    author: "María Rodríguez",
    position: "Fundadora",
    company: "Industria Tecnológica",
    initials: "MR",
    rating: 5,
    project: "Aplicación Móvil",
  },
  {
    text: "La migración a la nube que realizaron fue perfecta. Sin interrupciones, mejor rendimiento y costos reducidos. Su expertise técnico es impresionante.",
    author: "Roberto Silva",
    position: "CTO",
    company: "Sector Logístico",
    initials: "RS",
    rating: 5,
    project: "Migración a la Nube",
  },
]

const summaryStats = [
  { value: "758+", label: "Proyectos Completados" },
  { value: "98%", label: "Satisfacción del Cliente" },
  { value: "24/7", label: "Soporte Técnico" },
  { value: "5★", label: "Calificación Promedio" },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  const active = testimonials[current]

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">La satisfacción de nuestros clientes es nuestra mayor recompensa.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-700/10 rounded-full -translate-y-16 translate-x-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12 blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <div className="text-center mb-8">
                  <Quote className="w-9 h-9 text-sky-700/50 dark:text-sky-300/60 mb-4 mx-auto" />
                  <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic font-light">
                    "{active.text}"
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-sky-700/25">
                    {active.initials}
                  </div>
                  <div className="text-center">
                    <h4 className="text-base font-semibold text-foreground">{active.author}</h4>
                    <p className="text-sky-700 dark:text-sky-300 text-sm font-medium">{active.position}</p>
                    <p className="text-muted-foreground text-xs">{active.company}</p>
                    <span className="inline-block mt-1.5 px-3 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs rounded-full border border-cyan-500/20">
                      {active.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? "bg-sky-600 w-6" : "bg-foreground/20"
                    }`}
                    aria-label={`Testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors duration-300"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {summaryStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold font-mono text-gradient-brand mb-2">{stat.value}</div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
