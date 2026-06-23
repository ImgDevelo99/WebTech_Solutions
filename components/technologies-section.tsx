"use client"

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPython,
  SiPhp,
  SiLaravel,
  SiSymfony,
} from "react-icons/si"

const technologies = [
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { icon: SiOpenjdk, name: "Java", color: "#ED8B00" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiSymfony, name: "Symfony", color: "#A0AEC0" },
]

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="pill-badge mb-4">Stack tecnológico</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Algunas de las tecnologías que dominamos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Utilizamos un stack moderno y robusto para construir soluciones escalables, seguras y de alto rendimiento,
            desde el frontend y backend hasta bases de datos y apps móviles nativas e híbridas.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 mx-3 glass-card flex flex-col items-center justify-center group"
              >
                <Icon
                  className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <h3 className="text-sm font-semibold text-foreground text-center px-2">{tech.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
