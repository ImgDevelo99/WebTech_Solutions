"use client"

import { Linkedin, Twitter, Github } from "lucide-react"
import { Logo } from "@/components/logo"

const sitemapLinks = [
  { id: "services", label: "Servicios" },
  { id: "about", label: "Quiénes somos" },
  { id: "industries", label: "Industrias" },
  { id: "case-studies", label: "Casos de éxito" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contacto" },
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <Logo size="sm" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Software a medida, plataformas web y automatización para empresas en Colombia y LATAM.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Síguenos</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-foreground/5 text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors duration-300"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-foreground/5 text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors duration-300"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-foreground/5 text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors duration-300"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 WebTech_Solutions. Expertos en Soluciones Digitales.
          </p>
        </div>
      </div>
    </footer>
  )
}
