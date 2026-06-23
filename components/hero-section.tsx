"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeWindow } from "@/components/code-window"

const trustStats = [
  { value: "8+", label: "años de experiencia" },
  { value: "180+", label: "clientes satisfechos" },
  { value: "4.9/5", label: "calificación promedio" },
]

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const scrollToNext = () => {
    const heroSection = document.getElementById("hero")
    const nextSection = heroSection?.nextElementSibling as HTMLElement
    if (nextSection) {
      const headerOffset = 80
      const offsetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pill-badge mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              Software house · Colombia · LATAM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Construimos software que{" "}
              <span className="text-gradient-brand">acelera tu negocio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Diseño, desarrollo y automatización de productos digitales a medida: web, móvil y plataformas
              empresariales, construidos con ingeniería sólida y diseño que convierte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-7 py-6 text-base font-semibold rounded-xl shadow-xl shadow-indigo-500/25 transition-all duration-300"
              >
                Solicita una consultoría gratuita
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="px-7 py-6 text-base font-semibold rounded-xl border-border bg-transparent hover:bg-foreground/5"
              >
                Ver servicios
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start"
            >
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold font-mono text-gradient-brand">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end">
            <CodeWindow />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  )
}
