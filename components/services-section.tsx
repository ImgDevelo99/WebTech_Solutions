"use client"

import { motion } from "framer-motion"
import { Smartphone, Building2, ShoppingCart, Plug, ShieldCheck, Compass } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Desarrollo Web y Móvil",
    description:
      "Creamos sitios web modernos y apps móviles intuitivas (iOS y Android) que se adaptan a cualquier dispositivo, enfocados en la usabilidad y el rendimiento.",
  },
  {
    icon: Building2,
    title: "Soluciones Empresariales a Medida",
    description:
      "Desarrollamos software a medida e integramos sistemas (CRM, ERP) para maximizar la eficiencia operativa de tu negocio, sin atarte a plantillas genéricas.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Construimos plataformas de comercio electrónico atractivas, seguras y fáciles de gestionar, optimizadas para la conversión y la experiencia del cliente.",
  },
  {
    icon: Plug,
    title: "Automatización & APIs",
    description:
      "Diseñamos APIs robustas y flujos de integración que conectan tus sistemas entre sí, eliminando tareas manuales y silos de información.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud & Seguridad",
    description:
      "Desplegamos infraestructura en la nube escalable y aplicamos buenas prácticas de seguridad en cada capa, desde el código hasta el despliegue.",
  },
  {
    icon: Compass,
    title: "Consultoría & Transformación Digital",
    description:
      "Evaluamos tu stack actual y te acompañamos en la definición de estrategia IT, elección de tecnologías y adopción de soluciones en la nube.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un abanico completo de soluciones digitales para llevar tu proyecto al éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group glass-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-700/20">
                  <Icon className="w-6.5 h-6.5 text-white" strokeWidth={1.7} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient-brand transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
