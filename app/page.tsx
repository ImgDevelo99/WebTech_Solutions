import { AmbientBackground } from "@/components/ambient-background"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TrustStrip from "@/components/trust-strip"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import MethodologySection from "@/components/methodology-section"
import IndustriesSection from "@/components/industries-section"
import CaseStudiesSection from "@/components/case-studies-section"
import TechnologiesSection from "@/components/technologies-section"
import AutomationSection from "@/components/automation-section"
import StatsSection from "@/components/stats-section"
import AWSPartnerSection from "@/components/aws-partner-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import PartnersSection from "@/components/partners-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground theme-transition">
      <AmbientBackground />

      <div className="relative z-10">
        <Header />
        <main className="relative overflow-hidden">
          <HeroSection />
          <TrustStrip />
          <ServicesSection />
          <AboutSection />
          <MethodologySection />
          <IndustriesSection />
          <CaseStudiesSection />
          <TechnologiesSection />
          <AutomationSection />
          <StatsSection />
          <AWSPartnerSection />
          <TestimonialsSection />
          <CTASection />
          <PartnersSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  )
}
