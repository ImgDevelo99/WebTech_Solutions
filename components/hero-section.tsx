"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToNext = () => {
    const heroSection = document.getElementById("hero")
    const nextSection = heroSection?.nextElementSibling as HTMLElement
    if (nextSection) {
      const headerOffset = 80
      const elementPosition = nextSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 light:from-blue-50 light:via-indigo-50 light:to-purple-50 overflow-hidden theme-transition"
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.15),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(21,128,61,0.25),transparent_50%)]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>

        {/* Geometric shapes with enhanced animations */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-green-500/20 dark:border-green-500/20 light:border-green-600/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-lime-500/10 to-green-500/10 dark:from-lime-500/10 dark:to-green-500/10 light:from-lime-500/20 light:to-green-500/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-lime-400/20 dark:border-lime-400/20 light:border-lime-500/30 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-r from-green-400/10 to-lime-400/10 dark:from-green-400/10 dark:to-lime-400/10 light:from-green-400/20 light:to-lime-400/20 rounded-full animate-pulse-slow"></div>

        {/* Code-like pattern */}
        <div className="absolute top-1/4 left-1/4 text-green-500/10 dark:text-green-500/10 light:text-green-600/20 font-mono text-sm animate-float">
          &lt;div className="hero"&gt;
        </div>
        <div
          className="absolute top-1/3 right-1/3 text-lime-500/10 dark:text-lime-500/10 light:text-lime-600/20 font-mono text-sm animate-float-slow"
          style={{ animationDelay: "1s" }}
        >
          function() &#123;
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-green-400/10 dark:text-green-400/10 light:text-green-500/20 font-mono text-sm animate-float-delayed"
          style={{ animationDelay: "2s" }}
        >
          &lt;/div&gt;
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white dark:text-white light:text-slate-900 leading-tight theme-transition">
              Expertos en{" "}
              <span className="text-gradient bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                Desarrollo Web
              </span>{" "}
              y Móvil a Medida
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 theme-transition">
              Creamos experiencias digitales únicas y funcionales que impulsan el crecimiento de tu negocio. Desde
              sitios web corporativos hasta complejas aplicaciones empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-green-700 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600 light:bg-green-600 light:hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-700/25"
              >
                Solicita una Consulta Gratuita
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Main container with glass morphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-lime-400/20 dark:from-green-500/20 dark:to-lime-400/20 light:from-green-400/30 light:to-lime-300/30 rounded-3xl backdrop-blur-sm border border-green-400/30 dark:border-green-400/30 light:border-green-500/40 shadow-2xl theme-transition">
                {/* Animated gradient background */}
                <div className="absolute inset-2 bg-gradient-to-br from-green-600/80 to-lime-500/80 dark:from-green-600/80 dark:to-lime-500/80 light:from-green-500/90 light:to-lime-400/90 rounded-2xl animate-gradient-shift theme-transition"></div>

                {/* Central content area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 text-center">
                    {/* Animated code brackets */}
                    <div className="relative">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-4 animate-pulse-slow">
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>
                          &lt;
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                          C
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                          o
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>
                          d
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>
                          e
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.5s" }}>
                          /
                        </span>
                        <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>
                          &gt;
                        </span>
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-white/90 animate-float">
                        Build();
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating tech icons */}
                <div
                  className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: "0s" }}
                >
                  <i className="bx bxl-react text-white text-lg"></i>
                </div>
                <div
                  className="absolute top-8 right-6 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-float-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <i className="bx bxl-javascript text-white text-sm"></i>
                </div>
                <div
                  className="absolute bottom-8 left-6 w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center animate-float-delayed"
                  style={{ animationDelay: "2s" }}
                >
                  <i className="bx bxl-nodejs text-white text-base"></i>
                </div>
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <i className="bx bx-mobile-alt text-white text-lg"></i>
                </div>
                <div
                  className="absolute top-1/2 left-2 w-5 h-5 bg-white/20 rounded-sm flex items-center justify-center animate-float-slow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <i className="bx bx-code-alt text-white text-xs"></i>
                </div>
                <div
                  className="absolute top-1/3 right-2 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center animate-float-delayed"
                  style={{ animationDelay: "2.5s" }}
                >
                  <i className="bx bx-data text-white text-sm"></i>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-lime-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-lime-300/50"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-green-300/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin-reverse-slow">
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-lime-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-lime-400/50"></div>
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-green-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-green-400/50"></div>
                </div>

                {/* Glowing particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-lime-200 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-green-200 rounded-full animate-ping opacity-75"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>

              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-lime-400/20 dark:from-green-500/20 dark:to-lime-400/20 light:from-green-400/30 light:to-lime-300/30 rounded-3xl blur-xl animate-pulse-slow theme-transition"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 dark:text-green-400 light:text-green-600 hover:text-green-300 dark:hover:text-green-300 light:hover:text-green-700 transition-all duration-300 animate-bounce theme-transition"
        aria-label="Scroll to next section"
      >
        <i className="bx bx-down-arrow-alt text-2xl sm:text-3xl"></i>
      </button>
    </section>
  )
}
