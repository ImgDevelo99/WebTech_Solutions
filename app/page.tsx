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
      {/* Ambient background: aurora mesh + grid, fixed behind all content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 mesh-aurora animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0 noise-overlay mix-blend-overlay" />

        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-sky-700/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

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
