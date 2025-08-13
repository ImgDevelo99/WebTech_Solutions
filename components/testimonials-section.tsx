"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "WebTech Solutions transformó completamente nuestra presencia digital. Su equipo entendió perfectamente nuestras necesidades y entregó una plataforma web robusta que ha aumentado nuestras ventas en un 150%.",
      author: "Ana García",
      position: "CEO de InnovaTech",
      company: "InnovaTech Solutions",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "Plataforma E-commerce",
    },
    {
      text: "El proceso de consultoría fue excepcional. Nos ayudaron a modernizar nuestra infraestructura tecnológica y automatizar procesos clave, resultando en un aumento del 200% en productividad.",
      author: "Carlos Martínez",
      position: "Director de Operaciones",
      company: "TechCorp Industries",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "Automatización de Procesos",
    },
    {
      text: "Increíble trabajo en el desarrollo de nuestra aplicación móvil. El equipo fue muy profesional, cumplió todos los plazos y el resultado superó nuestras expectativas. Altamente recomendados.",
      author: "María Rodriguez",
      position: "Fundadora",
      company: "StartupTech",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "Aplicación Móvil",
    },
    {
      text: "La migración a la nube que realizaron fue perfecta. Sin interrupciones, mejor rendimiento y costos reducidos. Su expertise técnico es impresionante.",
      author: "Roberto Silva",
      position: "CTO",
      company: "DataFlow Systems",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      project: "Migración a la Nube",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-slate-900 dark:bg-slate-900 light:bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800 dark:bg-slate-800 light:bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-700 dark:border-slate-700 light:border-slate-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="text-center mb-8">
                <i className="bx bxs-quote-alt-left text-4xl text-green-400 mb-4 block"></i>
                <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-700 leading-relaxed italic font-light">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full border-2 border-green-400"
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-green-400 font-medium">{testimonials[currentTestimonial].position}</p>
                  <p className="text-gray-400 dark:text-gray-400 light:text-slate-500 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <span className="inline-block mt-1 px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                    {testimonials[currentTestimonial].project}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-700 dark:bg-slate-700 light:bg-slate-200 text-white dark:text-white light:text-slate-700 hover:bg-green-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial
                        ? "bg-green-400"
                        : "bg-slate-600 dark:bg-slate-600 light:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-700 dark:bg-slate-700 light:bg-slate-200 text-white dark:text-white light:text-slate-700 hover:bg-green-600 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Proyectos Completados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Satisfacción del Cliente</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Soporte Técnico</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5★</div>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Calificación Promedio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
