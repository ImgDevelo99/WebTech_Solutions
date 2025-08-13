"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-md border-b border-green-700/20 dark:border-green-700/20 light:border-slate-200 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80L50 20L80 80H20Z" stroke="#15803d" strokeWidth="8" strokeLinejoin="round" />
                <path d="M35 60H65" stroke="#15803d" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-serif font-bold text-white dark:text-white light:text-slate-900">
              WebTech_Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("automation")}
              className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Automatización
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white dark:text-white light:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 dark:bg-slate-800/95 light:bg-white/95 backdrop-blur-md border-t border-green-700/20 dark:border-green-700/20 light:border-slate-200">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/50 transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("automation")}
                className="block w-full text-left px-4 py-2 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/50 transition-colors duration-200"
              >
                Automatización
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/50 transition-colors duration-200"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-green-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 light:hover:bg-slate-100/50 transition-colors duration-200"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
