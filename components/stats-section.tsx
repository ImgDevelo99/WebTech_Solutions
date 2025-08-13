"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: "bxs-calendar-star",
    number: 8,
    suffix: "+",
    description: "Más de 8 años de experiencia brindando soluciones de software personalizadas y efectivas.",
  },
  {
    icon: "bxs-briefcase-alt-2",
    number: 758,
    suffix: "",
    description: "Proyectos completados con éxito, entregando valor real a nuestros clientes.",
  },
  {
    icon: "bxs-user-check",
    number: 180,
    suffix: "",
    description: "Clientes satisfechos que confían en nuestra experiencia tecnológica.",
  },
  {
    icon: "bx-globe",
    number: 10,
    suffix: "",
    description: "Presencia internacional, llevando soluciones digitales a nuevos horizontes.",
  },
  {
    icon: "bxs-star",
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

            // Animate each number
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
    <section ref={sectionRef} id="stats" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Cifras que Hablan por Nosotros</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            En cada línea de código y en cada proyecto entregado, reflejamos compromiso, innovación y resultados que
            nuestros clientes valoran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-green-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-700/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`bx ${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number === 4.9 ? animatedNumbers[index].toFixed(1) : Math.ceil(animatedNumbers[index])}
                {stat.suffix}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
