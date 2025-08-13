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
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="min-h-screen transition-colors duration-500 ease-in-out
                    bg-slate-900 text-white
                    dark:bg-slate-900 dark:text-white
                    light:bg-gray-50 light:text-slate-900"
    >
      <Header />
      <main className="relative">
        <HeroSection />
        <ServicesGrid />
        <MainServices />
        <SoftwareSection />
        <MethodologySection />
        <RetailSection />
        <TechnologiesSection />
        <AutomationSection />
        <StatsSection />
        <AWSPartnerSection />
        <TestimonialsSection />
        <CTASection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
