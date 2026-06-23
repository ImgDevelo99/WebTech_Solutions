"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CalendarCheck, Briefcase, UserCheck, Globe2, Star } from "lucide-react"

const stats = [
  {
    icon: CalendarCheck,
    number: 8,
    suffix: "+",
    description: "Más de 8 años de experiencia brindando soluciones de software personalizadas y efectivas.",
  },
  {
    icon: Briefcase,
    number: 758,
    suffix: "",
    description: "Proyectos completados con éxito, entregando valor real a nuestros clientes.",
  },
  {
    icon: UserCheck,
    number: 180,
    suffix: "",
    description: "Clientes satisfechos que confían en nuestra experiencia tecnológica.",
  },
  {
    icon: Globe2,
    number: 10,
    suffix: "",
    description: "Presencia internacional, llevando soluciones digitales a nuevos horizontes.",
  },
  {
    icon: Star,
    number: 4.9,
    suffix: "",
    description: "Calificación promedio basada en la excelencia y satisfacción de nuestros usuarios.",
  },
]

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            stats.forEach((stat, index) => {
              const duration = 1500
              const increment = stat.number / (duration / 16)
              let current = 0

              const timer = setInterval(() => {
                current += increment
                if (current >= stat.number) {
                  current = stat.number
                  clearInterval(timer)
                }

                setAnimatedNumbers((prev) => {
                  const newNumbers = [...prev]
                  newNumbers[index] = current
                  return newNumbers
                })
              }, 16)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} id="stats" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Resultados</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Cifras que hablan por nosotros
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En cada línea de código y en cada proyecto entregado, reflejamos compromiso, innovación y resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
                  <Icon className="w-6.5 h-6.5 text-white" strokeWidth={1.7} />
                </div>
                <div className="text-3xl font-bold font-mono text-foreground mb-2">
                  {stat.number === 4.9 ? animatedNumbers[index].toFixed(1) : Math.ceil(animatedNumbers[index])}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
