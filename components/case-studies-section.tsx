"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ShoppingCart, Factory, Smartphone, ArrowRight, ArrowLeft } from "lucide-react"
import { handleSpotlight } from "@/lib/utils"

// Casos de exito de plantilla: ilustran categorias tipicas de proyecto, no clientes
// reales con nombre. Reemplazar por casos de clientes reales (con su permiso) cuando
// esten disponibles.
const caseStudies = [
  {
    icon: ShoppingCart,
    industry: "Retail / E-commerce",
    title: "Plataforma E-commerce Multicanal",
    challenge:
      "Una empresa de retail necesitaba unificar sus canales de venta físico y digital bajo una sola plataforma, sin perder visibilidad del inventario en tiempo real.",
    solution:
      "Diseñamos e implementamos una tienda en línea integrada con su sistema de inventario existente, con sincronización automática entre canales y panel de gestión centralizado.",
    result:
      "El equipo redujo significativamente el tiempo dedicado a la gestión manual de pedidos y ganó visibilidad completa del stock en todos los puntos de venta.",
  },
  {
    icon: Factory,
    industry: "Manufactura",
    title: "Sistema ERP para Manufactura",
    challenge:
      "Una compañía manufacturera operaba con hojas de cálculo dispersas para producción, compras e inventario, generando errores y pérdida de información entre áreas.",
    solution:
      "Desarrollamos un sistema ERP a medida que centraliza producción, compras e inventario en una sola fuente de verdad, con reportes y alertas automáticas.",
    result:
      "La operación ganó trazabilidad de extremo a extremo y los equipos de planta y administración trabajan ahora sobre la misma información, en tiempo real.",
  },
  {
    icon: Smartphone,
    industry: "Logística / Delivery",
    title: "App Móvil de Delivery",
    challenge:
      "Un negocio de reparto necesitaba una aplicación propia para gestionar pedidos y rutas, en lugar de depender exclusivamente de plataformas de terceros.",
    solution:
      "Construimos una app móvil para clientes y otra para repartidores, con seguimiento de pedidos en tiempo real e integración de pagos en línea.",
    result:
      "La marca fortaleció su relación directa con los clientes y mejoró notablemente la eficiencia de asignación de rutas para su equipo de reparto.",
  },
]

export default function CaseStudiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="case-studies" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="pill-badge mb-4">Casos de éxito</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Proyectos que generan resultados
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una muestra del tipo de soluciones que diseñamos e implementamos para nuestros clientes.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 lg:hidden">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Caso anterior"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Siguiente caso"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <motion.div
                  key={study.title}
                  onMouseMove={handleSpotlight}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group glass-card p-7 flex flex-col flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-none lg:basis-[calc(33.333%-1rem)]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-700/20">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                    </div>
                    <span className="pill-badge text-xs">{study.industry}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-4">{study.title}</h3>

                  <div className="space-y-3 text-sm flex-1">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-1">
                        Desafío
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-1">
                        Solución
                      </span>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="pt-1 border-t border-border">
                      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-1 pt-3">
                        <ArrowRight className="w-3.5 h-3.5" />
                        Resultado
                      </span>
                      <p className="text-foreground/90 leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 lg:hidden">
          {caseStudies.map((study, index) => (
            <button
              key={study.title}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir al caso ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-8 bg-gradient-to-r from-sky-700 to-cyan-400" : "w-1.5 bg-foreground/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
