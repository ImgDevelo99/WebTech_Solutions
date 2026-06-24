"use client"

import { motion } from "framer-motion"
import { Smartphone, Building2, ShoppingCart, Plug, ShieldCheck, Compass } from "lucide-react"
import { handleSpotlight } from "@/lib/utils"

// "size: lg" cards span 2 columns for a bento rhythm instead of a flat uniform grid.
const services = [
  {
    icon: Smartphone,
    title: "Desarrollo Web y Móvil",
    description:
      "Creamos sitios web modernos y apps móviles intuitivas (iOS y Android) que se adaptan a cualquier dispositivo, enfocados en la usabilidad y el rendimiento.",
    tags: ["iOS", "Android", "Responsive"],
    size: "lg",
  },
  {
    icon: Building2,
    title: "Soluciones Empresariales a Medida",
    description:
      "Desarrollamos software a medida e integramos sistemas (CRM, ERP) para maximizar la eficiencia operativa de tu negocio.",
    tags: ["CRM", "ERP"],
    size: "sm",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Construimos plataformas de comercio electrónico atractivas, seguras y fáciles de gestionar, optimizadas para la conversión.",
    tags: ["Pagos en línea", "Catálogo"],
    size: "sm",
  },
  {
    icon: Plug,
    title: "Automatización & APIs",
    description:
      "Diseñamos APIs robustas y flujos de integración que conectan tus sistemas entre sí, eliminando tareas manuales y silos de información.",
    tags: ["REST", "Webhooks", "Integraciones"],
    size: "lg",
  },
  {
    icon: ShieldCheck,
    title: "Cloud & Seguridad",
    description:
      "Desplegamos infraestructura en la nube escalable y aplicamos buenas prácticas de seguridad en cada capa, desde el código hasta el despliegue.",
    tags: ["AWS", "Encriptación", "Backups"],
    size: "lg",
  },
  {
    icon: Compass,
    title: "Consultoría & Transformación Digital",
    description:
      "Evaluamos tu stack actual y te acompañamos en la definición de estrategia IT y adopción de soluciones en la nube.",
    tags: ["Auditoría IT", "Roadmap"],
    size: "sm",
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
            const isLarge = service.size === "lg"
            return (
              <motion.div
                key={index}
                onMouseMove={handleSpotlight}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group glass-card p-8 flex flex-col ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                {isLarge ? (
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-sky-700/20 to-cyan-400/10 blur-3xl pointer-events-none" />
                ) : (
                  <div className="absolute right-5 top-5 w-16 h-16 rounded-full border border-foreground/[0.06] pointer-events-none" />
                )}
                <div
                  className={`rounded-2xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-sky-700/20 ${
                    isLarge ? "w-16 h-16" : "w-14 h-14"
                  }`}
                >
                  <Icon className={isLarge ? "w-7 h-7 text-white" : "w-6.5 h-6.5 text-white"} strokeWidth={1.7} />
                </div>
                <h3
                  className={`font-semibold text-foreground mb-3 group-hover:text-gradient-brand transition-colors duration-300 ${
                    isLarge ? "text-2xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-base max-w-md" : "text-sm"}`}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border/60">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-muted-foreground border border-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
