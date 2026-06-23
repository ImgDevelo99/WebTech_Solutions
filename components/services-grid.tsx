"use client"

import { motion } from "framer-motion"
import { Code2, Globe, ShieldCheck, Plug, Rocket, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "content1",
    title: "Desarrollo de software",
    icon: Code2,
    description:
      "Nos especializamos en el desarrollo de aplicaciones personalizadas que se adaptan a las necesidades de tu empresa, con soluciones escalables y eficientes.",
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    id: "content2",
    title: "Desarrollo Web",
    icon: Globe,
    description:
      "Creamos sitios web dinámicos y funcionales con tecnologías modernas, enfocados en la experiencia del usuario y la optimización para motores de búsqueda.",
    accent: "from-cyan-400/20 to-indigo-500/10",
  },
  {
    id: "content3",
    title: "Código seguro",
    icon: ShieldCheck,
    description:
      "Ofrecemos soluciones para implementar sistemas de seguridad en tus aplicaciones, garantizando la protección de la información con estándares de la industria.",
    accent: "from-violet-500/20 to-cyan-400/10",
  },
  {
    id: "content4",
    title: "Expertos en APIs",
    icon: Plug,
    description:
      "Desarrollamos e implementamos APIs robustas que permiten la integración de sistemas y facilitan la interacción entre diferentes plataformas.",
    accent: "from-indigo-500/20 to-cyan-400/10",
  },
  {
    id: "content5",
    title: "Transformación Digital",
    icon: Rocket,
    description:
      "Acompañamos a las empresas en su proceso de transformación digital, implementando soluciones tecnológicas que mejoran la eficiencia operativa y la competitividad.",
    accent: "from-cyan-400/20 to-violet-500/10",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="pill-badge mb-4">Lo que hacemos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Expertos en desarrollos a la medida
          </h2>
          <p className="text-lg text-muted-foreground">Empresa de desarrollo de software en Colombia.</p>
        </div>

        {/* Bento layout: first card large, rest in a grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`group relative glass-card overflow-hidden p-7 flex flex-col ${
                  index === 0 ? "md:col-span-2 md:row-span-1" : ""
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-foreground" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Saber más <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
