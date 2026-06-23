import { Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; 2024 WebTech_Solutions. Expertos en Soluciones Digitales.
          </p>

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
    </footer>
  )
}
