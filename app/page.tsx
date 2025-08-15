"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import MainServices from "@/components/main-services"
import SoftwareSection from "@/components/software-section"
import MethodologySection from "@/components/methodology-section"
import RetailSection from "@/components/retail-section"
import TechnologiesSection from "@/components/technologies-section"
import AutomationSection from "@/components/automation-section"
import StatsSection from "@/components/stats-section"
import AWSPartnerSection from "@/components/aws-partner-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import PartnersSection from "@/components/partners-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          entry.target.classList.remove("opacity-0", "translate-y-12")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section, .animate-on-scroll")
    sections.forEach((section, index) => {
      section.classList.add("opacity-0", "translate-y-12", "transition-all", "duration-1000", "ease-out")
      section.style.transitionDelay = `${index * 0.1}s`
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out relative overflow-hidden
                    bg-slate-900 text-white
                    dark:bg-slate-900 dark:text-white
                    light:bg-gray-50 light:text-slate-900"
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-lime-500/5 animate-gradient-shift"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-lime-500/10 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-500/10 rounded-full blur-xl animate-float-slow"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-gradient-x"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Tech-themed floating icons */}
        <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center animate-float backdrop-blur-sm">
          <i className="bx bxl-react text-green-400 text-xl"></i>
        </div>
        <div className="absolute top-1/3 right-1/5 w-10 h-10 bg-lime-500/20 rounded-full flex items-center justify-center animate-float-slow backdrop-blur-sm">
          <i className="bx bxl-javascript text-lime-400 text-lg"></i>
        </div>
        <div className="absolute bottom-1/3 left-1/5 w-11 h-11 bg-emerald-500/20 rounded-lg flex items-center justify-center animate-float-delayed backdrop-blur-sm">
          <i className="bx bxl-nodejs text-emerald-400 text-lg"></i>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center animate-float backdrop-blur-sm">
          <i className="bx bx-mobile-alt text-teal-400 text-xl"></i>
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="relative overflow-hidden">
          <div className="animate-on-scroll">
            <HeroSection />
          </div>
          <div className="animate-on-scroll">
            <ServicesGrid />
          </div>
          <div className="animate-on-scroll">
            <MainServices />
          </div>
          <div className="animate-on-scroll">
            <SoftwareSection />
          </div>
          <div className="animate-on-scroll">
            <MethodologySection />
          </div>
          <div className="animate-on-scroll">
            <RetailSection />
          </div>
          <div className="animate-on-scroll">
            <TechnologiesSection />
          </div>
          <div className="animate-on-scroll">
            <AutomationSection />
          </div>
          <div className="animate-on-scroll">
            <StatsSection />
          </div>
          <div className="animate-on-scroll">
            <AWSPartnerSection />
          </div>
          <div className="animate-on-scroll">
            <TestimonialsSection />
          </div>
          <div className="animate-on-scroll">
            <CTASection />
          </div>
          <div className="animate-on-scroll">
            <PartnersSection />
          </div>
          <div className="animate-on-scroll">
            <ContactSection />
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  )
}
